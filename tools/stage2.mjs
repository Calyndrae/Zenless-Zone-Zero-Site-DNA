// Stage 2: apply semantic rename maps to stage-1 modules → source/readable/<Name>.js
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import * as prettier from 'prettier';
import { renameModule } from './rename.mjs';
const root = new URL('..', import.meta.url).pathname;
const map = JSON.parse(readFileSync(join(root, 'source/module-map.json'), 'utf8'));
const outDir = join(root, 'source/readable'); mkdirSync(outDir, { recursive: true });
const index = [];
for (const f of readdirSync(join(root, 'source/rename-maps')).filter(f => f.endsWith('.json'))) {
  const id = f.replace('.json', '');
  let rm; try { rm = JSON.parse(readFileSync(join(root, 'source/rename-maps', f), 'utf8')); } catch (e) { console.log('bad json', f, String(e).slice(0, 100)); continue; }
  const renames = rm.renames || {};
  // de-duplicate targets defensively
  const seen = new Map(); for (const [k, v] of Object.entries(renames)) { if (!/^[A-Za-z_$][\w$]*$/.test(v)) { delete renames[k]; continue; } if (seen.has(v)) renames[k] = v + '_' + k.replace(/\W/g, ''); else seen.set(v, k); }
  let code; try { ({ code } = renameModule(id, { stage2: renames })); } catch (e) { console.log('rename fail', id, String(e).slice(0, 120)); continue; }
  const m = map[id]; const name = m.componentName || (m.kind === 'site-page' ? m.name.replace('page:', 'page-') : m.name.replace(/^(styles|asset):/, '').replace(/\s*\(.*\)$/, '').split(/[\s/]/).slice(0, 4).join('-'));
  const exportsDoc = Object.entries(rm.exports || {}).map(([k, v]) => ` *   ${k} → ${v}`).join('\n');
  const header = `/**\n * ${name} — readable reconstruction of webpack module ${id} (chunk ${m.chunk}.js)\n * Original: https://zenless.hoyoverse.com/_nuxt/${m.chunk}.js\n *\n * ${(rm.summary || '').replace(/\n/g, '\n * ')}\n *\n * Exports (minified key → meaning):\n${exportsDoc || ' *   (none)'}\n *\n * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and\n * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.\n */\n`;
  let pretty; try { pretty = await prettier.format(code, { parser: 'babel', printWidth: 110 }); } catch { pretty = code; }
  const file = `${String(name).replace(/[^A-Za-z0-9_-]+/g, '-').replace(/^-|-$/g, '').slice(0, 48)}.${id}.js`;
  writeFileSync(join(outDir, file), header + pretty);
  const left = (pretty.match(/\b[A-Za-z]{1,2}_\d+\b/g) || []).length;
  index.push({ id, name, file, chunk: m.chunk, bytesMinified: m.bytes, renames: Object.keys(renames).length, unresolvedLeft: left, summary: rm.summary });
  console.log('wrote', file, 'renames', Object.keys(renames).length, 'leftover', left);
}
writeFileSync(join(root, 'source/readable/index.json'), JSON.stringify(index, null, 1));
