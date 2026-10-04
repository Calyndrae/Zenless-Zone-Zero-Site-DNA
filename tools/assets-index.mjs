// capture/js-css-manifest.json: every first-party chunk (from the runtime's chunk map) with size and SHA-256, and every
// stylesheet module; capture/fonts-and-css-assets.json: the @font-face sources and every url() asset the stylesheets name,
// with the archived copy where the capture stored one.
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
const root = new URL('..', import.meta.url).pathname;
const J = p => JSON.parse(readFileSync(join(root, p), 'utf8'));
const ORIGIN = 'https://zenless.hoyoverse.com';
const chunkMap = J('capture/js/chunk-map.json'); const routes = J('source/routes.json'); const cssIndex = J('capture/css/index.json');
const manifest = J('capture/network-manifest.json'); const byUrl = Object.fromEntries(manifest.map(m => [m.url, m]));
const sha = f => createHash('sha256').update(readFileSync(f)).digest('hex');
const js = []; const idOf = Object.fromEntries(Object.entries(chunkMap.chunks).map(([id, h]) => [h, Number(id)]));
for (const f of readdirSync(join(root, 'capture/js')).filter(f => f.endsWith('.js')).sort()) { const hash = f.replace(/\.js$/, ''); const url = ORIGIN + '/_nuxt/' + f; const usedBy = routes.filter(r => r.chunks.includes(hash)).map(r => r.name); const bytes = readFileSync(join(root, 'capture/js', f)).length; js.push({ url, path: 'capture/js/' + f, bytes, sha256: sha(join(root, 'capture/js', f)), chunkId: idOf[hash] ?? (chunkMap.entry.includes(hash) ? 'entry' : null), kind: hash === 'b83911d' ? 'webpack runtime' : chunkMap.entry.includes(hash) ? 'entry bundle' : 'route chunk', routes: usedBy, pages: (byUrl[url] || {}).pages || [] }); }
const css = cssIndex.map(c => ({ path: c.file, moduleId: c.moduleId, chunks: c.chunks, bytes: c.bytes, rules: c.rules, firstSelector: c.firstSelector, sha256: sha(join(root, c.file)) }));
writeFileSync(join(root, 'capture/js-css-manifest.json'), JSON.stringify({ js, css }, null, 1));
// fonts: @font-face src urls from the stylesheets; assets: every url() in the stylesheets
const { fontFaces } = J('analysis/css-rules.json');
const urlsIn = s => [...String(s || '').matchAll(/url\((['"]?)([^)'"]+)\1\)/g)].map(m => m[2]);
const abs = u => u.startsWith('http') ? u : u.startsWith('/') ? ORIGIN + u : u;
const fonts = fontFaces.map(f => ({ family: f.declarations['font-family'], weight: f.declarations['font-weight'], style: f.declarations['font-style'], display: f.declarations['font-display'], sources: urlsIn(f.declarations.src).map(u => ({ url: abs(u), stored: (byUrl[abs(u)] || {}).stored || null, bytes: (byUrl[abs(u)] || {}).bytes || null })), stylesheet: f.file }));
const assets = {}; for (const c of cssIndex) for (const a of c.assets) if (a.url && a.url !== 'null') { const u = abs(a.url.replace(/^"|"$/g, '')); if (u.startsWith('data:')) continue; assets[u] = assets[u] || { url: u, stylesheets: [], module: a.module, stored: (byUrl[u] || {}).stored || null, bytes: (byUrl[u] || {}).bytes || null, type: (byUrl[u] || {}).type || null }; assets[u].stylesheets.push(c.moduleId); }
const dataUris = cssIndex.reduce((n, c) => n + c.assets.filter(a => /^"?data:/.test(a.url || '')).length, 0);
writeFileSync(join(root, 'capture/fonts-and-css-assets.json'), JSON.stringify({ fonts, assets: Object.values(assets), dataUris }, null, 1));
console.log('js', js.length, 'css', css.length, 'fonts', fonts.length, 'css assets', Object.keys(assets).length, 'data URIs', dataUris, 'stored assets', Object.values(assets).filter(a => a.stored).length);
