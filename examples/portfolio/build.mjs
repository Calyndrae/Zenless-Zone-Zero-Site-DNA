// Builds the single-page portfolio example: writes index.html from src/page.html with
//   • <link> elements for the site's stylesheet modules and the SDK styles, in injection order (src/stylesheets.json,
//     produced by tools/collect-styles.mjs), as paths relative to this folder so the page works wherever the repository
//     is served from (GitHub Pages, tools/serve.mjs);
//   • the dictionaries, the content records and the lifted site images inlined as JSON;
//   • src/app.js inlined.
// Mirrors the studied site's delivery model in miniature (chapter 03): one HTML shell, data fetched by the app.
//
//   node examples/portfolio/build.mjs
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, '..', '..');
const src = join(here, 'src');
const read = name => readFileSync(join(src, name), 'utf8');
const safeJson = obj => JSON.stringify(obj).replace(/<\//g, '<\\/').replace(/<!--/g, '<\\!--');   // never close the script element from inside the data

const dictionaries = {};
for (const file of readdirSync(src)) {
  const m = /^i18n\.([a-z]{2}-[a-z]{2})\.json$/.exec(file);
  if (m) dictionaries[m[1]] = JSON.parse(read(file));
}
// one stylesheet list per tree (the desktop and the phone home pages inject different module sets; the head script
// writes the <link> elements of the tree it chose), as hrefs relative to this folder
const sheets = JSON.parse(read('stylesheets.json'));
const hrefFor = source => {
  const abs = join(repo, source);
  if (!existsSync(abs)) throw new Error(`stylesheet missing: ${source}`);
  return relative(here, abs).split('\\').join('/');
};
const trees = Object.fromEntries(Object.entries(sheets.trees).map(([tree, list]) => [tree, list.map(hrefFor)]));
const parts = {
  'stylesheets': safeJson(trees),
  'app.js': read('app.js').trim().replace(/<\/script/gi, '<\\/script'),
  'i18n': safeJson(dictionaries),
  'content.json': safeJson(JSON.parse(read('content.json'))),
  'site-assets.json': safeJson(JSON.parse(read('site-assets.json'))),
};
let page = read('page.html');
for (const [key, value] of Object.entries(parts)) {
  const marker = `/*! INLINE:${key} */`;
  if (!page.includes(marker)) throw new Error(`marker ${marker} missing from page.html`);
  page = page.replace(marker, () => value);
}
writeFileSync(join(here, 'index.html'), page);
console.log(`index.html written (${(Buffer.byteLength(page) / 1024).toFixed(1)} KB; stylesheets: ${trees.pc.length} desktop / ${trees.m.length} phone; dictionaries: ${Object.keys(dictionaries).join(', ')})`);
