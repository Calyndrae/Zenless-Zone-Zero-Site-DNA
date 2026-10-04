// Extracts every css-loader module from the split webpack modules (vue-style-loader injects them as <style> tags at
// run time, so the site ships no stylesheet files): capture/css/<moduleId>.css holds each stylesheet exactly as the
// browser receives it, with its url() targets resolved the way css-loader's getUrl helper resolves them at run time
// (publicPath + hashed file name, or the inlined data: URI). capture/css/index.json maps each stylesheet to its module
// id, the chunks that carry it, the asset modules it uses and its first selector.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const graph = JSON.parse(readFileSync(join(root, 'source/module-graph.json'), 'utf8'));
const out = join(root, 'capture/css'); rmSync(out, { recursive: true, force: true }); mkdirSync(out, { recursive: true });
const PUBLIC = '/_nuxt/';
const unescape = s => s.replace(/\\(u[0-9a-fA-F]{4}|x[0-9a-fA-F]{2}|\r\n|[^])/g, (m, e) => { if (e.length === 5 && e[0] === 'u') return String.fromCharCode(parseInt(e.slice(1), 16)); if (e.length === 3 && e[0] === 'x') return String.fromCharCode(parseInt(e.slice(1), 16)); if (e === '\r\n' || e === '\n') return ''; return { n: '\n', r: '\r', t: '\t', b: '\b', f: '\f', v: '\v', '0': '\0' }[e] ?? e; });
const bodyOf = (chunk, id) => readFileSync(join(root, 'source/modules', chunk, id + '.js'), 'utf8').replace(/^\/\/.*\n\/\/.*\n/, '').replace(/^const module_\d+ = /, '');
// chunks carrying each module id
const carriers = {}; for (const chunk of readdirSync(join(root, 'source/modules'))) for (const f of readdirSync(join(root, 'source/modules', chunk))) { const id = f.replace(/\.js$/, ''); (carriers[id] = carriers[id] || []).push(chunk); }
const assetUrl = id => { const g = graph[id]; if (!g) return null; const body = bodyOf(g.chunk, id); const m = body.match(/\.exports=(?:([a-zA-Z_$]+)\.p\+)?("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/); if (!m) return null; return (m[1] ? PUBLIC : '') + unescape(m[2].slice(1, -1)); };
const getUrl = u => { if (u == null) return 'null'; if (/^['"].*['"]$/.test(u)) u = u.slice(1, -1); return /["'() \t\n]/.test(u) ? '"' + u.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"' : u; };
const index = []; let total = 0;
for (const [id, g] of Object.entries(graph)) {
  if (g.kind !== 'css') continue;
  const js = bodyOf(g.chunk, id);
  const vars = {}; for (const v of js.matchAll(/([a-zA-Z_$]+)=([a-zA-Z_$]+)\((\d+)\)/g)) vars[v[1]] = { id: Number(v[3]) };
  for (const v of js.matchAll(/([a-zA-Z_$]+)=([a-zA-Z_$]+)\(([a-zA-Z_$]+)(?:,\{[^}]*\})?\)/g)) if (vars[v[3]]) vars[v[1]] = { url: true, id: vars[v[3]].id };
  const m = js.match(/\.push\(\[[a-zA-Z_$]+\.i,/); if (!m) continue;
  let i = m.index + m[0].length; let css = ''; const assets = [];
  for (;;) { while (/\s/.test(js[i])) i++; const q = js[i];
    if (q === '"' || q === "'") { let j = i + 1; while (js[j] !== q) { if (js[j] === '\\') j++; j++; } css += unescape(js.slice(i + 1, j)); i = j + 1; }
    else { const idm = js.slice(i, i + 40).match(/^[a-zA-Z_$]+(\.p)?/); if (!idm) { console.log('unparsed at', g.chunk, id, JSON.stringify(js.slice(i, i + 40))); break; } const name = idm[0]; const v = vars[name]; const u = v ? (v.url ? getUrl(assetUrl(v.id)) : String(assetUrl(v.id))) : (name.endsWith('.p') ? PUBLIC : 'null'); css += u; assets.push({ var: name, module: v ? v.id : null, url: u }); i += name.length; }
    while (/\s/.test(js[i])) i++; if (js[i] === '+') { i++; continue; } break; }
  if (!js.slice(i, i + 6).startsWith(',""])')) console.log('unexpected tail at', g.chunk, id, JSON.stringify(js.slice(i, i + 20)));
  writeFileSync(join(out, id + '.css'), css); total += css.length;
  const first = (css.match(/^[\s\S]*?([^{}\/]+)\{/) || [])[1] || '';
  index.push({ file: 'capture/css/' + id + '.css', moduleId: Number(id), chunks: carriers[id] || [g.chunk], bytes: Buffer.byteLength(css), rules: (css.match(/\{/g) || []).length, firstSelector: first.trim().replace(/\s+/g, ' ').slice(0, 80), scoped: /\[data-v-[a-f0-9]+\]/.test(css), assets });
}
index.sort((a, b) => a.moduleId - b.moduleId);
writeFileSync(join(out, 'index.json'), JSON.stringify(index, null, 1));
console.log(`extracted ${index.length} stylesheets, ${(total / 1024).toFixed(0)} KB; ${index.reduce((n, i) => n + i.assets.length, 0)} url() assets (${index.reduce((n, i) => n + i.assets.filter(a => a.url === 'null').length, 0)} unresolved)`);
for (const i of index) console.log(' ', i.moduleId, i.chunks.join('+'), (i.bytes / 1024).toFixed(1) + 'KB', i.rules, 'rules', i.assets.length, 'assets', i.scoped ? '[scoped]' : '', i.firstSelector.slice(0, 60));
