// Emit source/MODULE-MAP.md from module-map.json + readable index.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const map = JSON.parse(readFileSync(join(root, 'source/module-map.json'), 'utf8'));
const readable = JSON.parse(readFileSync(join(root, 'source/readable/index.json'), 'utf8'));
const byId = Object.fromEntries(readable.map(r => [String(r.id), r]));
const CDN = 'https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/';
const url = c => CDN + (c.includes('__') ? 'app/' + c.replace(/__/g, '/') : c) + '.js';
let md = `# Module map — ${Object.keys(map).length} webpack modules in 31 chunks\n\nGenerated from \`source/module-map.json\`. Kinds: **site** (first-party page/section code, semantically renamed in \`source/readable/\`), **site-vendor** (Hypergryph/Gryphline libraries: transparent video renderer, account/tracking SDK), **vendor** (open-source libraries, identified by name/version, not renamed), **css-module** (class-name maps), **image-asset** / **asset-url** / **svg-icon** (assets), **i18n-bundle** (per-locale text/fonts/images). Raw split modules are in \`source/modules/<chunk>/<id>.js\`; beautified chunks in \`source/beautified/\`.\n\n`;
const kinds = {}; for (const m of Object.values(map)) kinds[m.kind] = (kinds[m.kind] || 0) + 1;
md += '| kind | modules |\n| --- | ---: |\n' + Object.entries(kinds).sort((a, b) => b[1] - a[1]).map(([k, v]) => `| ${k} | ${v} |`).join('\n') + '\n\n';
const chunks = {}; for (const m of Object.values(map)) (chunks[m.chunk] = chunks[m.chunk] || []).push(m);
for (const [chunk, mods] of Object.entries(chunks).sort((a, b) => b[1].reduce((s, m) => s + m.bytes, 0) - a[1].reduce((s, m) => s + m.bytes, 0))) {
  md += `## ${chunk.replace(/__/g, '/')}.js — ${mods.length} modules, ${mods.reduce((s, m) => s + m.bytes, 0)} bytes\n\nOriginal: ${url(chunk)}\n\n| id | kind | name | bytes | readable file | depends on |\n| ---: | --- | --- | ---: | --- | --- |\n`;
  for (const m of mods.sort((a, b) => b.bytes - a.bytes)) { const r = byId[String(m.id)]; md += `| ${m.id} | ${m.kind} | ${m.name.replace(/\|/g, '/')}${m.note ? ' — ' + String(m.note).replace(/\|/g, '/').slice(0, 80) : ''} | ${m.bytes} | ${r ? `[${r.file}](readable/${r.file})` : ''} | ${m.deps.slice(0, 12).join(', ')}${m.deps.length > 12 ? ' …' : ''} |\n`; }
  md += '\n';
}
md += `## Readable reconstructions (${readable.length})\n\n| file | module | minified bytes | renames | summary |\n| --- | ---: | ---: | ---: | --- |\n` + readable.sort((a, b) => b.bytesMinified - a.bytesMinified).map(r => `| [${r.file}](readable/${r.file}) | ${r.id} | ${r.bytesMinified} | ${r.renames} | ${(r.summary || '').replace(/\|/g, '/').replace(/\n/g, ' ').slice(0, 300)}… |`).join('\n') + '\n';
writeFileSync(join(root, 'source/MODULE-MAP.md'), md);
console.log('MODULE-MAP.md', md.length, 'chars');
