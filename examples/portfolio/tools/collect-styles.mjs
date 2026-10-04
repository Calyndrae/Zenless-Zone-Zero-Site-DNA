// Collects, per tree and in the order each home page injects them, the stylesheets the portfolio example loads:
//   • the css-loader modules extracted verbatim in capture/css/ (matched by the first characters of each injected
//     style tag recorded in capture/pages/zh-cn_main/page.json — the desktop tree — and m_zh-cn_main/page.json — the
//     phone tree; the two trees are separate documents on the site, so each page gets its own list);
//   • the styles the HoYoverse SDK scripts inject at run time (footer, media icons, copy button, download layout,
//     audio player), copied verbatim out of the archived scripts in archive/files/ into examples/portfolio/vendor/.
// It also lifts the data-URI icons the home page markup carries (audio, play, copy buttons) into src/site-assets.json
// so the example can reuse the exact images with the exact markup.
//
//   node examples/portfolio/tools/collect-styles.mjs
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, '..', '..', '..');
const vendorDir = join(here, '..', 'vendor');
mkdirSync(vendorDir, { recursive: true });
const norm = s => s.replace(/\s+/g, ' ').trim();

// 1. the css-loader modules, keyed by their first characters
const cssFiles = readdirSync(join(repo, 'capture', 'css')).filter(f => f.endsWith('.css')).map(f => ({ file: 'capture/css/' + f, text: readFileSync(join(repo, 'capture', 'css', f), 'utf8') }));
const matchModule = head => cssFiles.find(c => norm(c.text).startsWith(norm(head).slice(0, 50)));

// 2. every archived script, for the SDK styles
const scripts = [];
(function walk(dir) { for (const name of readdirSync(dir)) { const p = join(dir, name); const st = statSync(p); if (st.isDirectory()) walk(p); else if (/\.js$/.test(name) && st.size < 6e6) scripts.push(p); } })(join(repo, 'archive', 'files'));
for (const name of readdirSync(join(repo, '_nuxt'))) if (name.endsWith('.js')) scripts.push(join(repo, '_nuxt', name));   // the site's own chunks (vendor libraries inject styles too)
const unescapeJs = s => { try { return JSON.parse('"' + s.replace(/\\'/g, "'").replace(/"/g, '\\"').replace(/\\\\"/g, '\\"') + '"'); } catch (e) { return s.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, '\\'); } };
// A bundle may hold several literals that open with the same rules (the download SDK's two vue components both start
// with `.sea-download-pointer`; only the layout component's styles were injected on the home page), so every occurrence
// is a candidate and the literal whose length matches the recorded style tag wins.
function extractFromScripts(head, recorded) {
  const needle = norm(head).slice(0, 40);
  const loose = new RegExp(needle.split(' ').map(part => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('(?:\\s|\\\\n)*'), 'g');
  let best = null;
  for (const file of scripts) {
    const text = readFileSync(file, 'utf8');
    const positions = [];
    for (let i = text.indexOf(needle); i >= 0; i = text.indexOf(needle, i + 1)) positions.push(i);
    if (!positions.length) { loose.lastIndex = 0; let m; while ((m = loose.exec(text))) positions.push(m.index); }   // the literal may space its rules differently, or carry "\n" escapes between them
    for (const idx of positions) {
      const quotes = ['"', "'", '`'];
      let start = idx; while (start > 0 && !(quotes.includes(text[start]) && text[start - 1] !== '\\')) start--;
      const q = text[start];
      let end = idx; while (end < text.length && !(text[end] === q && text[end - 1] !== '\\')) end++;
      const css = unescapeJs(text.slice(start + 1, end));
      const distance = recorded ? Math.abs(css.length - recorded) : 0;
      if (!best || distance < best.distance) best = { from: relative(repo, file), css, distance };
    }
    if (best && best.distance === 0) break;
  }
  return best;
}

// 3. the style tags of both home pages, in injection order; one module list per tree. The phone news page follows
//    the phone home page: the example's single page also carries that route's load-more list (chapter 28), whose
//    modules the phone home does not inject, so they are appended in the order the news page injects them.
const treeOf = { 'zh-cn_main': 'pc', 'm_zh-cn_main': 'm', 'm_zh-cn_news': 'm' };
const want = [];
for (const pageName of Object.keys(treeOf)) {
  const page = JSON.parse(readFileSync(join(repo, 'capture', 'pages', pageName, 'page.json'), 'utf8'));
  page.styleTags.forEach((tag, i) => want.push({ page: pageName, index: i, chars: tag.chars, head: tag.head }));
}
const modules = new Map();           // key → module entry, or null for a tag deliberately left out
const trees = { pc: [], m: [] };
const notes = [];
for (const tag of want) {
  const key = norm(tag.head).slice(0, 50);
  let entry = modules.get(key);
  if (entry === null) continue;
  if (!entry) {
    const mod = matchModule(tag.head);
    if (mod) entry = { source: mod.file, head: tag.head.slice(0, 60) };
    else if (/hyv-login-platform|account-popup|role-selector|game-role-selector|mihoyo-cookie-tips|_bbs-repaint|mihoyo-account-role|mihoyo_landscape|@-webkit-keyframes _3Ujv2jSG|_2KIYvRS5/.test(tag.head)) { notes.push(`skipped (account / cookie / orientation SDK overlay): ${tag.head.slice(0, 50)}`); modules.set(key, null); continue; }
    else {
      const found = extractFromScripts(tag.head, tag.chars);
      if (!found) { notes.push(`NOT FOUND: ${tag.head.slice(0, 60)}`); modules.set(key, null); continue; }
      const name = norm(tag.head).match(/[.#]?([a-z0-9_-]+)/i)[1].replace(/[^a-z0-9_-]/gi, '') + '.css';
      writeFileSync(join(vendorDir, name), `/* Verbatim style text injected at run time by ${found.from} (recorded as style tag ${tag.index} of ${tag.page}, ${tag.chars} characters). Belongs to HoYoverse / COGNOSPHERE; reproduced for the study of the site's construction. */\n` + found.css.trim() + '\n');
      entry = { source: 'examples/portfolio/vendor/' + name, head: tag.head.slice(0, 60), from: found.from, chars: found.css.length, recorded: tag.chars };
    }
    modules.set(key, entry);
  }
  const list = trees[treeOf[tag.page]];
  if (!list.includes(entry.source)) list.push(entry.source);
}
writeFileSync(join(here, '..', 'src', 'stylesheets.json'), JSON.stringify({ modules: Array.from(modules.values()).filter(Boolean), trees }, null, 1) + '\n');

// 4. the data-URI images the home markup carries
const dom = readFileSync(join(repo, 'capture', 'pages', 'zh-cn_main', 'dom.html'), 'utf8') + readFileSync(join(repo, 'capture', 'pages', 'm_zh-cn_main', 'dom.html'), 'utf8');
const assets = {};
for (const m of dom.matchAll(/<img\b([^>]*)>/g)) {
  const attrs = Object.fromEntries(Array.from(m[1].matchAll(/([a-z-]+)="([^"]*)"/g)).map(a => [a[1], a[2]]));
  if (!attrs.src || !attrs.src.startsWith('data:')) continue;
  let key = attrs.class ? attrs.class.trim().replace(/\s+/g, '.') : '';
  if (!key) {   // an image without a class is keyed by the class of the element that wraps it
    const before = dom.slice(Math.max(0, m.index - 400), m.index);
    const parent = Array.from(before.matchAll(/class="([^"]+)"/g)).pop();
    key = parent ? parent[1].trim().replace(/\s+/g, '.') + '>img' : '';
  }
  if (key && !assets[key]) assets[key] = attrs.src;
}
const globe = /class="icon-1qVZxg" style="background-image: url\(([^)]+)\)/.exec(dom);   // the corporate footer's language-picker globe, a background image
if (globe) assets['icon-1qVZxg'] = globe[1].replace(/&quot;/g, '');
writeFileSync(join(here, '..', 'src', 'site-assets.json'), JSON.stringify(assets, null, 1) + '\n');
for (const t of Object.keys(trees)) { console.log(`${t} tree, ${trees[t].length} stylesheets in order:`); trees[t].forEach((s, i) => console.log(String(i).padStart(2), s)); }
console.log('\nnotes:'); notes.forEach(n => console.log(' -', n));
console.log('\ndata-URI images:', Object.keys(assets).map(k => k + ' ' + assets[k].length).join('\n  '));
