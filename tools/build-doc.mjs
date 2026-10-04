// Builds the downloadable edition of the handbook in two steps:
//   1. (this file, Node) renders the same 41 chapter sources as the live page in "doc" mode, parses the
//      result into a flat block model (headings, paragraphs, evidence tags, code, tables, images,
//      specimens), screenshots every live specimen with the site's own stylesheets in headless Chromium,
//      adds a visual-record chapter from the captured screenshots, and writes handbook/doc/content.json;
//   2. tools/build-pdf.py (Python, ReportLab) lays the blocks out in the geometry of the supplied template
//      (cover, front matter, ruled contents, section title on every page, justified Noto Serif body,
//      grey running footer with a Contents link and page numbers) and writes the PDF and the Markdown twin.
// Large data archives (JSON, vendor chunks, captures) are listed with their hosted URLs, never inlined.
//
// Output: handbook/Zenless-Zone-Zero-Site-DNA-Handbook.pdf, handbook/Zenless-Zone-Zero-Site-DNA-Handbook.md,
//         handbook/doc/ (content.json, specimen screenshots, intermediate files; git-ignored).
import http from 'node:http';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync, createReadStream, readdirSync } from 'node:fs';
import { join, extname } from 'node:path';
import { spawnSync } from 'node:child_process';
import { chromium } from 'playwright';
import { setMode, root, data, esc, p, SITE_URL } from './handbook/lib.mjs';
setMode('doc');
const { chapters: A } = await import('./handbook/chapters-a.mjs');
const { chapters: B } = await import('./handbook/chapters-b.mjs');
const { chapters: C } = await import('./handbook/chapters-c.mjs');
const { chapters: D } = await import('./handbook/chapters-d.mjs');
const { chapters: E } = await import('./handbook/chapters-e.mjs');
const { chapters: F } = await import('./handbook/chapters-f.mjs');
const chapters = [...A, ...B, ...C, ...D, ...E, ...F];
const OUT = join(root, 'handbook/doc'); mkdirSync(join(OUT, 'specimens'), { recursive: true });
const REPO = 'https://github.com/Calyndrae/Zenless-Zone-Zero-Site-DNA';
const PORT = 8795;

// ---------- static server for the specimen screenshots (repository root at /)
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff' };
const server = http.createServer((req, res) => { const path = decodeURIComponent(new URL(req.url, 'http://x').pathname); const file = join(root, path); if (!file.startsWith(root) || !existsSync(file) || !statSync(file).isFile()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Access-Control-Allow-Origin': '*' }); createReadStream(file).pipe(res); }).listen(PORT, '127.0.0.1');

// ---------- chapters (same assembly as the live page, including the coverage proof)
const used = new Set(); const rendered = {};
const render = (c, arg) => { try { return c.html(arg); } catch (e) { console.error('chapter', c.slug, e); return p('<strong>BUILD ERROR in chapter ' + esc(c.slug) + ':</strong> ' + esc(String(e.stack || e).slice(0, 400))); } };
for (const c of chapters) if (!c.late) { rendered[c.slug] = render(c); for (const m of rendered[c.slug].matchAll(/class="([^"]*)"/g)) for (const cls of m[1].split(/\s+/)) { const block = cls.split('__')[0].replace(/--.*$/, ''); if (block && data.cssComponents[block]) used.add(block + '\u0000' + c.slug); } }
const coverage = {}; for (const u of used) { const [comp, slug] = u.split('\u0000'); (coverage[comp] = coverage[comp] || []).push(slug); }
const coverageDoc = { components: Object.keys(data.cssComponents).sort(), embedded: coverage, chapters: chapters.map(c => c.slug) };
for (const c of chapters) if (c.late) rendered[c.slug] = render(c, coverageDoc);

// ---------- HTML (doc mode) → block model
const un = s => String(s).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
const inline = s => String(s).replace(/<span class="pm">[^<]*<\/span>/g, '').replace(/<span class="lbl">([^<]*)<\/span>/g, '<b>$1</b>').replace(/<strong>/g, '<b>').replace(/<\/strong>/g, '</b>').replace(/<em>/g, '<i>').replace(/<\/em>/g, '</i>').replace(/<br\s*\/?>/g, '<br/>').replace(/<a href="([^"]*)">/g, (m, h) => `<a href="${h.startsWith('/') ? SITE_URL + h : h}">`).replace(/<(?!\/?(b|i|code|a|br)\b)[^>]+>/g, '').trim();
const text = s => un(String(s).replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
function parseBlocks(html) {
  const blocks = []; const re = /<figure class="specimen">([\s\S]*?)<\/figure>|<figure class="shot">([\s\S]*?)<\/figure>|<pre class="code[^"]*"><code>([\s\S]*?)<\/code><\/pre>|<table[^>]*>([\s\S]*?)<\/table>|<h3[^>]*>([\s\S]*?)<\/h3>|<h4>([\s\S]*?)<\/h4>|<p class="tag (observed|measured|inferred|rule)"><span class="lbl">[^<]*<\/span>([\s\S]*?)<\/p>|<p class="(filebox|note)">([\s\S]*?)<\/p>|<p[^>]*>([\s\S]*?)<\/p>/g; let m;
  while ((m = re.exec(html))) {
    if (m[1] !== undefined) { const cap = text((m[1].match(/<figcaption>([\s\S]*?)<\/figcaption>/) || [])[1] || '').replace(/^Specimen — /, ''); const note = (m[1].match(/<p class="note">([\s\S]*?)<\/p>/) || [])[1]; const mk = (m[1].match(/<pre class="code"><code>([\s\S]*?)<\/code><\/pre>/) || [])[1] || ''; blocks.push({ t: 'specimen', label: cap, note: note ? text(note) : '', markup: un(mk) }); }
    else if (m[2] !== undefined) { const src = (m[2].match(/src="([^"]*)"/) || [])[1] || ''; const cap = text((m[2].match(/<figcaption>([\s\S]*?)<\/figcaption>/) || [])[1] || '').replace(/^Capture — /, ''); blocks.push({ t: 'img', path: src.replace(/^\//, ''), caption: cap }); }
    else if (m[3] !== undefined) blocks.push({ t: 'pre', text: un(m[3].replace(/<span class="ln">[^<]*<\/span>/g, '')) });
    else if (m[4] !== undefined) { const isData = /class="data"/.test(m[0]); if (isData) { const rows = [...m[4].matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map(r => [...r[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map(c => inline(c[1]))); if (rows.length) blocks.push({ t: 'table', rows, header: /<thead>/.test(m[4]) || /<th/.test(m[4]) }); } else { const label = text((m[4].match(/<th[^>]*>([\s\S]*?)<\/th>/) || [])[1] || 'Live markup'); const cells = [...m[4].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(c => c[1]); const markup = cells.map(c => c.replace(/<p[^>]*>([\s\S]*?)<\/p>/g, '$1')).join('\n'); blocks.push({ t: 'specimen', label, note: '', markup: un(markup.replace(/>\s*</g, '>\n<')) }); } }
    else if (m[5] !== undefined) blocks.push({ t: 'h', text: text(m[5]) });
    else if (m[6] !== undefined) blocks.push({ t: 'h4', text: text(m[6]) });
    else if (m[7] !== undefined) blocks.push({ t: 'tag', label: m[7] === 'rule' ? 'RULE FOR A CHILD SITE' : m[7].toUpperCase(), text: text(m[8]) });
    else if (m[9] !== undefined) blocks.push({ t: 'note', html: inline(m[10]) });
    else if (m[11] !== undefined) { const h = inline(m[11]); if (text(h)) blocks.push({ t: 'p', html: h }); }
  }
  return blocks;
}

// ---------- specimen screenshots with the site's own stylesheets (rendered in Chromium at 2×)
const siteCss = readdirSync(join(root, 'capture/css')).filter(f => f.endsWith('.css')).map(f => `<link rel="stylesheet" href="/capture/css/${f}">`).join('');
const shotCss = `html{font-size:56.25px;background:#fff} html,body{margin:0 !important;padding:0 !important} body{width:1280px;padding:20px !important;font-family:'Liberation Serif',serif !important} figure.specimen{margin:0 0 24px} figure.specimen .frame{position:relative;background:#fff;border:1px solid #c9c2b6;padding:12px;overflow:hidden;display:inline-block;min-width:200px;max-width:1100px} figure.specimen details, figure.specimen figcaption, figure.specimen .note{display:none} table.data{display:none} pre,p,h3,h4,figure.shot{display:none}`;
const chapterBlocks = {};
for (const c of chapters) chapterBlocks[c.slug] = parseBlocks(rendered[c.slug]);
const allSpecimens = chapters.flatMap(c => chapterBlocks[c.slug].filter(b => b.t === 'specimen').map(b => ({ chapter: c.slug, block: b })));
const shotHtml = `<!doctype html><html><head><meta charset="utf-8">${siteCss}<style>${shotCss}</style></head><body>${chapters.map(c => rendered[c.slug]).join('')}</body></html>`;
writeFileSync(join(OUT, 'specimens.html'), shotHtml);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1240, height: 900 }, deviceScaleFactor: 2 });
await page.goto(`http://127.0.0.1:${PORT}/handbook/doc/specimens.html`, { waitUntil: 'load', timeout: 180000 });
await page.evaluate(() => Promise.all([...document.fonts].map(f => f.load().catch(() => null)))); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(1500);
await page.evaluate(() => { for (const f of document.querySelectorAll('figure.specimen .frame, table:not(.data) td')) { const kids = [...f.querySelectorAll('*')]; let maxBottom = 0, maxRight = 0; const fr = f.getBoundingClientRect(); for (const k of kids) { const r = k.getBoundingClientRect(); if (r.width && r.height) { maxBottom = Math.max(maxBottom, r.bottom - fr.top); maxRight = Math.max(maxRight, r.right - fr.left); } } if (f.clientHeight < 24 && maxBottom > 0) f.style.minHeight = Math.ceil(maxBottom + 12) + 'px'; if (maxRight > f.clientWidth && f.tagName !== 'TD') f.style.minWidth = Math.min(1100, Math.ceil(maxRight + 12)) + 'px'; } });
await page.waitForTimeout(400);
const frames = await page.$$('figure.specimen .frame, table:not(.data)');
console.log(`specimens parsed: ${allSpecimens.length}, frames in page: ${frames.length}`);
for (let i = 0; i < allSpecimens.length && i < frames.length; i++) { const file = `specimens/${String(i + 1).padStart(2, '0')}.png`; try { await frames[i].screenshot({ path: join(OUT, file), type: 'png' }); allSpecimens[i].block.png = 'handbook/doc/' + file; } catch (e) { console.warn('specimen shot failed', i, String(e).slice(0, 120)); } }
await browser.close(); server.close();

// ---------- visual record chapter (every captured screenshot, with what it shows)
const human = n => n > 1048576 ? (n / 1048576).toFixed(1) + ' MB' : n > 1024 ? (n / 1024).toFixed(0) + ' KB' : n + ' B';
const routeName = d => { const m = d.startsWith('m_'); const r = '/' + d.replace(/^m_/, 'm/').replace(/_/g, '/'); const names = { main: 'Home page', character: 'Character page', video: 'Video page', news: 'News index', world: 'World page', 'company/privacy': 'Privacy policy', 'company/terms': 'Terms of service', redemption: 'Redemption page' }; const key = r.replace(/^\/(m\/)?zh-cn\//, '').replace(/^\//, ''); const base = names[key] || (/^news\/\d+/.test(key) ? 'News article' : /^world\/\d+/.test(key) ? 'World entry' : key); return `${m ? 'Phone ' : ''}${base} ${r}`; };
const shotName = f => ({ 'desktop-1440x900.png': 'first viewport at 1440×900 after the loader', 'desktop-full.png': 'full page at 1440 wide', 'desktop-1920x1080.png': 'first viewport at 1920×1080', 'mobile-390x844.png': 'first viewport at 390×844 (phone tree)', 'mobile-full.png': 'full page at 390 wide (phone tree)' })[f] || f;
const stateName = f => f.replace(/\.png$/, '').replace(/-/g, ' ').replace(/(\d+)ms/, '$1 ms');
const visual = [];
visual.push({ t: 'p', html: 'Every screenshot taken while the site was captured and measured, in the order the capture scripts produced them. They are the visual counterpart of the measurements in the chapters: the chapters give the numbers, these show what the numbers describe. All were taken in headless Chromium on 2026-10-03 and 2026-10-04 against the live site (desktop tree at 1440×900 and 1920×1080, phone tree at 390×844).' });
for (const d of readdirSync(join(root, 'capture/pages')).sort()) { const dir = join(root, 'capture/pages', d); const pngs = readdirSync(dir).filter(f => f.endsWith('.png')).sort(); if (!pngs.length) continue; visual.push({ t: 'h', text: routeName(d) }); for (const f of pngs) visual.push({ t: 'img', path: `capture/pages/${d}/${f}`, caption: `${routeName(d)} — ${shotName(f)}` }); }
visual.push({ t: 'h', text: 'Interaction measurements' }); visual.push({ t: 'p', html: 'Screenshots taken by the interaction driver (the interactions chapter) after each measured action, and the loader frames.' });
for (const f of readdirSync(join(root, 'capture/interactions')).filter(f => f.endsWith('.png')).sort()) visual.push({ t: 'img', path: `capture/interactions/${f}`, caption: stateName(f) });
visual.push({ t: 'h', text: 'Verification of the handbook page and the mirror' }); visual.push({ t: 'p', html: 'Screenshots from the verification runs: the original application rendering the handbook as a news record (desktop and phone trees), and the mirrored home page served from the archive.' });
for (const f of readdirSync(join(root, 'verification')).filter(f => f.endsWith('.png')).sort()) visual.push({ t: 'img', path: `verification/${f}`, caption: stateName(f) });

// ---------- appendices
const anchorOf = f => f.replace(/[^A-Za-z0-9]/g, '-');
const cssFiles = readdirSync(join(root, 'source/beautified')).filter(f => f.endsWith('.css')).sort((x, y) => Number(x.replace('.css', '')) - Number(y.replace('.css', '')));
const jsFiles = readdirSync(join(root, 'source/readable')).filter(f => f.endsWith('.js')).sort((x, y) => x.localeCompare(y));
const jsMeta = f => data.readable.find(r => r.file === f) || {};
const appendixA = { key: 'appendix-a', letter: 'A', title: 'The 65 stylesheet modules, complete and beautified', subline: 'capture/css · one file per css-loader module, extracted from the chunks · prettier output · no rule changed, no selector renamed', intro: [
  { t: 'p', html: 'The site ships no stylesheet files: these are the css-loader modules extracted from the chunks exactly as vue-style-loader injects them, with the url() targets resolved the way css-loader resolves them at run time (/_nuxt/… and data: URIs), reformatted with prettier. Each file is named by its webpack module id; the first table column gives the first selector and the chunks that carry the module.' },
  { t: 'table', header: true, rows: [['#', 'Module', 'First selector', 'Chunks', 'Bytes', 'Lines', 'Blocks styled'], ...cssFiles.map((f, i) => { const raw = join(root, 'capture/css', f); const ci = data.cssIndex.find(c => c.file === 'capture/css/' + f) || {}; const lines = readFileSync(join(root, 'source/beautified', f), 'utf8').split('\n').length; const comps = Object.entries(data.cssComponents).filter(([, v]) => v.files.includes(f)).map(([k]) => k); return [`A.${i + 1}`, `<a href="#css-${anchorOf(f)}">${f}</a>`, (ci.firstSelector || '').slice(0, 40), (ci.chunks || []).join(' '), String(existsSync(raw) ? statSync(raw).size : ''), String(lines), comps.slice(0, 6).join(', ') + (comps.length > 6 ? ` +${comps.length - 6}` : '')]; })] },
], files: cssFiles.map((f, i) => { const src = readFileSync(join(root, 'source/beautified', f), 'utf8'); return { key: 'css-' + anchorOf(f), heading: `A.${i + 1} ${f}`, meta: `${SITE_URL}/capture/css/${f} · ${src.split('\n').length} lines`, summary: '', code: src }; }) };
const appendixB = { key: 'appendix-b', letter: 'B', title: 'The readable first-party JavaScript, complete', subline: 'source/readable · minified identifiers renamed scope-aware · values and control flow unchanged', intro: [
  { t: 'p', html: 'Each file is one webpack module of the site\'s own code (pages, layouts, components, the store, the API clients, the plugins and the HoYoverse-internal request layer), split out of its chunk, with every minified identifier renamed to a meaningful one (library aliases resolved from the module map, locals named for what they hold). The header comment of each file states its origin, exports and a summary. Vendor libraries are not reprinted; their names are in the JavaScript map chapter.' },
  { t: 'table', header: true, rows: [['#', 'Module', 'File', 'Chunk', 'Lines'], ...jsFiles.map((f, i) => { const m = jsMeta(f); const lines = readFileSync(join(root, 'source/readable', f), 'utf8').split('\n').length; return [`B.${i + 1}`, esc(m.name || f.replace(/\.\d+\.js$/, '')), `<a href="#js-${anchorOf(f)}">${f}</a>`, m.chunk || '', String(lines)]; })] },
], files: jsFiles.map((f, i) => { const src = readFileSync(join(root, 'source/readable', f), 'utf8'); const m = jsMeta(f); return { key: 'js-' + anchorOf(f), heading: `B.${i + 1} ${esc(m.name || f)}`, meta: `${f} · ${SITE_URL}/source/readable/${f} · chunk ${m.chunk || '?'} · ${src.split('\n').length} lines · ${m.renames ?? '?'} identifiers renamed`, summary: esc(m.summary || ''), code: src }; }) };
const dirSize = d => { let n = 0; const walk = x => { for (const e of readdirSync(x, { withFileTypes: true })) { const q = join(x, e.name); if (e.isDirectory()) walk(q); else n += statSync(q).size; } }; walk(d); return n; };
const archives = [
  ['analysis/css-rules.json', 'every CSS rule with its media context, component and source module'], ['analysis/colors.json', 'colour ladder with counts, properties and components'], ['analysis/typography.json', 'font-family / size / weight / line-height rules and the @font-face list'], ['analysis/spacing.json', 'spacing values'], ['analysis/layers.json', 'z-index stack'], ['analysis/motion.json', 'transitions, keyframes and hover rules'], ['analysis/breakpoints.json', 'media queries'], ['analysis/hover-states.json', 'measured hover diffs'], ['analysis/motion-timelines.json', 'measured entrance timelines'], ['analysis/components/', 'one JSON per CSS block: rules, markup, computed styles, hover, keyframes'], ['analysis/css-digest.md', 'every rule, one line each, grouped by block'], ['analysis/DNA.md', 'the written specification (tokens and rules)'],
  ['capture/interactions.json', 'everything the interactions chapter measured'], ['capture/network-manifest.json', 'every response the depth-1 pages received, with URL, type, bytes and SHA-256'], ['capture/css-components.json', 'block → stylesheet map'], ['capture/fonts-and-css-assets.json', 'fonts and CSS-referenced assets'], ['capture/js-css-manifest.json', 'the chunks and stylesheet modules with digests'], ['capture/pages/', 'per-route DOM, screenshots (desktop and phone trees), computed styles, hover diffs, timelines, media logs, injected style tags'], ['capture/js/', 'the 51 chunks of the build, verbatim'], ['capture/css/', 'the 65 stylesheet modules, verbatim as injected'], ['capture/assets/', 'small responses stored by the capture (i18n JSON, SDK scripts, images)'],
  ['source/beautified/', 'prettier output of every chunk and stylesheet'], ['source/modules/', '1,457 split webpack modules'], ['source/module-map.json', 'every module named'], ['source/MODULE-MAP.md', 'the module map as a table'], ['source/routes.json', 'the Nuxt route table with chunks and page modules'], ['source/stage1/', 'library aliases resolved, short names made unique'], ['source/rename-maps/', 'semantic rename maps with summaries'], ['source/readable/', 'the readable first-party modules (also printed in Appendix B)'],
  ['original/', 'the SPA shell as the server sends it (desktop and phone requests)'], ['archive/', 'the originals archive: every file the pages load, every CMS answer, SDK scripts and the record media within the budget (index.json has URL, bytes, SHA-256)'], ['_nuxt/', 'the build files at their original paths (chunks, fonts, images)'], ['zh-cn/ and m/', 'the self-contained mirror: the shell at every route of both trees, served from the archive'], ['mirror/', 'the mirror adapter and the rewritten copies it serves'], ['verification/report.json', 'the handbook verification report'], ['verification/mirror-report.json', 'the mirror verification report'], ['handbook/handbook-content.json', 'the live handbook as the CMS record 7013'],
].map(([path, what]) => { const abs = join(root, path); const exists = existsSync(abs); const size = exists ? (statSync(abs).isDirectory() ? dirSize(abs) : statSync(abs).size) : 0; return { path, what, size: human(size), url: SITE_URL + '/' + path }; });

// ---------- chapter sublines (what each chapter rests on)
const subline = (c, blocks) => { const tags = { OBSERVED: 0, MEASURED: 0, INFERRED: 0, 'RULE FOR A CHILD SITE': 0 }; for (const b of blocks) if (b.t === 'tag') tags[b.label] = (tags[b.label] || 0) + 1; const files = [...new Set([...rendered[c.slug].matchAll(/Code — ([A-Za-z0-9_.]+\.js)/g)].map(m => m[1]))]; const parts = [`Chapter ${String(chapters.indexOf(c) + 1).padStart(2, '0')}`, `${tags.OBSERVED} observed · ${tags.MEASURED} measured · ${tags.INFERRED} inferred · ${tags['RULE FOR A CHILD SITE']} rules`]; if (files.length) parts.push('code: ' + files.slice(0, 4).join(', ') + (files.length > 4 ? ` +${files.length - 4}` : '')); return parts.join(' · '); };

// ---------- index terms
const colorTerms = (Array.isArray(data.colors) ? data.colors : []).slice(0, 28).map(c => c.value).filter(v => /^#/.test(v));
const identifiers = [...Object.keys(data.cssComponents).filter(k => !/^(van-|hyv-|_|swiper-)/.test(k)).sort(), ...jsFiles.map(f => f.replace(/\.\d+\.js$/, '')), 'Impact', 'inpin hongmengti', 'en inpin', 'ko scd', 'ja rog', 'tw cloud', 'icomoon', 'Mont-Heavy', 'Kanit', 'TTHovesProCompactBold', 'Vue', 'Nuxt', 'vue-router', 'Vuex', 'vue-meta', 'Swiper', 'GSAP', 'ScrollTrigger', 'axios', 'lodash', 'date-fns', 'vant', 'pdf.js', 'vuescroll', 'firebase', 'HoYoverse', 'COGNOSPHERE', 'mi18n', 'webpack', 'webpackJsonp', 'Cloudflare', ...colorTerms];
const terms = ['rem adapter', 'root font-size', 'design width', 'clamp', 'hairlines', 'orientation', 'landscape', 'breakpoint', 'media query', 'z-index', 'layer', 'loader', 'loading screen', 'shell', 'SPA', 'route', 'router push', 'query', 'channel', 'CMS', 'getContentList', 'getContent', 'getChildTree', 'record', 'sContent', 'sExt', 'header', 'nav', 'more-menu', 'sidebar', 'pager', 'section', 'key visual', 'download', 'play button', 'video dialog', 'carousel', 'swiper', 'fade', 'loop', 'bullet', 'thumbnail', 'banner', 'marquee', 'hover', 'timeline', 'entrance', 'transition', 'transform', 'opacity', 'keyframes', 'scale', 'mute', 'background music', 'voice', 'progress', 'cookie', 'consent', 'locale', 'i18n', 'dictionary', 'language', 'scroll', 'keyboard', 'phone', 'mobile', 'menu', 'faction', 'camp', 'character', 'stage', 'pagination', 'tab', 'category', 'grid', 'list', 'load more', 'article', 'breadcrumb', 'date', 'back', 'world', 'tape', 'cover', 'company', 'privacy', 'terms', 'pdf', 'redemption', 'footer', 'social', 'subscription', 'account', 'share', 'copy', 'back-to-top', 'typography', 'colour', 'spacing', 'column', 'specimen', 'coverage', 'blueprint', 'child site', 'SDK', 'analytics', 'APM', 'archive', 'mirror', 'adapter', 'chunk', 'module', 'readable', 'vendor', 'style tag', 'scoped', 'data URI', 'icon font', 'font-face'];

// ---------- front matter and acknowledgements (texts only; the layout is the template's)
const front = {
  preface: [
    { t: 'h', text: 'Goal' },
    { t: 'p', html: 'Describe one website, the official <b>Zenless Zone Zero</b> site at https://zenless.hoyoverse.com/zh-cn/main, at the depth of its public pages — the home page, the character, video, news and world pages, a news article, the company documents, on both its desktop tree and its phone tree — so completely that a reader can build a <b>child site of the same family</b>: the same colours, type, rhythm, components, motion, sound and rendering behaviour, from the fixed header to the loader.' },
    { t: 'p', html: 'The purpose is to see clearly how the site is constructed, not to copy its content.' },
    { t: 'h', text: 'Explicitly out of scope' },
    { t: 'p', html: '• Pages beyond depth 1 on other hosts: the payment and guide pages, the account pages (their links are recorded)<br/>• Other locales (the same build serves them; zh-cn is the one captured)<br/>• The game, its lore and its artwork as subjects in themselves<br/>• Any claim about server-side code: only shipped responses and client code are evidence<br/>• Invented values of any kind: nothing in this handbook is estimated, rounded or assumed' },
    { t: 'p', html: 'If a statement is not read from shipped code, measured in a browser on the live site, or marked as interpretation, it does not belong in this handbook.' },
    { t: 'h', text: 'Asset source' },
    { t: 'p', html: 'The markup, stylesheets, scripts, fonts, images and sounds reproduced here were loaded from the live site and its CDNs on 2026-10-03 and 2026-10-04 and belong to <b>HoYoverse / COGNOSPHERE</b>. They are reproduced solely for the study of the site\'s construction. Nothing in this handbook is a release of those assets.' },
    { t: 'h', text: 'Explanation' },
    { t: 'p', html: 'The handbook is intentionally narrower than a design system. By fixing the subject to one site at one date and admitting only three kinds of evidence, it creates a controlled record in which every colour, size, easing and timing can be traced to a file or a measurement. "Nearly the same looking site" is a statement about that record: build from the rules, specimens and code printed here and the result shares the site\'s DNA; it does not become the site.' },
  ],
  reading: [
    { t: 'p', html: 'This is a technical handbook, not a status report. The evidence cutoff is <b>2026-10-04</b>, when the live site was captured and measured; the site may change after that date. Four labels mark every claim. <b>OBSERVED</b> means read directly from shipped code, stylesheets or server responses. <b>MEASURED</b> means reported by headless Chromium driving the live site: clicks, hovers, scrolls, keyboard, resizes and the real-time calculations re-run in the page. <b>INFERRED</b> is interpretation and never a fact. <b>RULE FOR A CHILD SITE</b> is a transferable instruction derived from the three above.' },
    { t: 'p', html: 'Where a component could be captured verbatim from the live page it is shown rendered with the site\'s own stylesheets (the 65 modules printed in Appendix A) at the 1440-wide scale (1rem = 56.25px), followed by its exact markup. The only normalisation is the removal of inline opacity, transform and transition values that Swiper and GSAP write during motion, so each specimen is in its settled state.' },
    { t: 'p', html: 'Short excerpts of the reconstructed, readable JavaScript sit next to the behaviour they produce; the complete modules are in Appendix B. Minified identifiers were renamed scope-aware; values, strings and control flow are unchanged. Vendor libraries (Vue 2.7, Nuxt 2, vue-router, Vuex, vue-meta, Swiper 4.5.1, GSAP with ScrollTrigger, axios, lodash, date-fns, vant, pdf.js, vuescroll, firebase, the HoYoverse SDKs) are identified, not reprinted.' },
    { t: 'p', html: `Large machine-readable archives — the CSS rule database, colour and typography tables, captures, network manifest, module maps — are not reprinted. They are hosted with the live edition of this handbook at ${SITE_URL} and listed with sizes in Appendix C; every link in the chapters resolves there. The same host carries the originals archive and the self-contained mirror described in the originals chapter: every file the pages load, every CMS answer, the SDK scripts and the record media within the size budget, with the original application served from them on both trees. The source repository is ${REPO}. The supplied template provides the page layout: its cover, front-matter, body and acknowledgements roles and colours are kept; its wordmark is not.` },
    { t: 'p', html: '<b>Author:</b> Calyndrae.' },
    { t: 'p', html: 'Use the linked contents pages to open any section directly; the word Contents in every footer returns to them.' },
  ],
  notice: [
    { t: 'p', html: 'The website studied here, its name, characters, artwork, music, fonts, code and all other material belong to HoYoverse / COGNOSPHERE and their licensors. This handbook reproduces parts of that material for the purpose of describing how the site is built. It is not endorsed by, affiliated with or published on behalf of the site\'s owners.' },
    { t: 'p', html: 'The readable JavaScript in Appendix B is a reconstruction: the shipped minified modules with their identifiers renamed for reading. It is not the site\'s source code and must not be presented as such. The stylesheets in Appendix A are the shipped css-loader modules reformatted.' },
    { t: 'p', html: 'The page layout, beige front matter, body pages and acknowledgements treatment are adapted from the supplied template. The template\'s publisher did not author, publish or endorse this handbook, and no mark of theirs appears in it.' },
    { t: 'p', html: 'Measurements describe the site as it answered on 2026-10-03/04 to one headless Chromium build in one container (no H.264 decoder, no GPU, no real pointer). Where that environment limited a measurement — the overlay video players opened but created no player element, and the character stage did not react to synthetic clicks — the limit is stated in place, and the mirror on the hosted site renders those parts in any normal browser from the archived files.' },
  ],
  ack: [
    { t: 'p', html: '<b>Author:</b> Calyndrae.' },
    { t: 'p', html: 'HoYoverse / COGNOSPHERE are acknowledged as the owners of the Zenless Zone Zero website that is the subject of this handbook: its design, markup, stylesheets, scripts, fonts, images and sounds. Their material is reproduced here for study of the site\'s construction only.' },
    { t: 'p', html: 'The site\'s own libraries are acknowledged with their maintainers: Vue, Nuxt, vue-router, Vuex, vue-meta, Swiper, GSAP, axios, lodash, date-fns, vant, pdf.js, vuescroll and Firebase. Credit for those tools belongs to their respective authors; their inclusion here does not imply that they endorse this handbook.' },
    { t: 'p', html: 'The handbook was produced with Node.js, Playwright and headless Chromium (capture, measurement and specimen rendering), prettier and Babel (beautifying, splitting and renaming), PostCSS (stylesheet analysis), poppler (page-text extraction for the contents and index) and ReportLab (this printed edition).' },
    { t: 'p', html: 'The page layout, beige front matter, body pages and acknowledgements treatment are adapted from the supplied template. Its publisher did not author, publish or endorse this handbook, and no mark of theirs appears in it.' },
    { t: 'p', html: 'Noto Serif is used for the serif text. The template\'s Lucida Sans could not be embedded beyond the subset of glyphs the template itself carries, so DejaVu Sans, the closest available humanist sans, takes its role for the title, headings, contents and footer. Code is set in DejaVu Sans Mono. Chinese text in the examples is set in Noto Sans CJK where the serif face has no glyph. Tables, lists, inline identifiers and code excerpts are typeset from the handbook\'s own content rather than shown as raw formatting syntax.' },
  ],
};

// ---------- write the content model and hand over to the PDF builder
const content = {
  title: 'Zenless Zone Zero Website DNA', subtitle: 'Technical Handbook', date: '4 October 2026', month: 'October 2026', siteUrl: SITE_URL, repo: REPO,
  cover: { leftTop: ['Technical sourcebook', 'Private study and research'], authorsLabel: 'Author', authors: ['Calyndrae'], sourcesLabel: 'Sources', sources: ['Live site at depth 1, both trees', 'zenless.hoyoverse.com/zh-cn', '', 'Archived chunks, stylesheets, fonts;', 'readable reconstructions and', 'headless-Chromium measurements'], ackLabel: 'Acknowledgements', ack: 'Credits to HoYoverse / COGNOSPHERE as owners of the site studied, to the authors of the libraries it uses, and to the tool maintainers are recorded in the acknowledgements.' },
  front,
  chapters: chapters.map((c, i) => ({ key: c.slug, number: i + 1, title: c.title, subline: subline(c, chapterBlocks[c.slug]), blocks: chapterBlocks[c.slug] })),
  visual: { key: 'visual-record', title: 'Visual record: every captured screenshot', subline: 'capture/pages · capture/interactions · verification · 2026-10-03/04', blocks: visual },
  appendices: [appendixA, appendixB, { key: 'appendix-c', letter: 'C', title: 'Data archives and captures (hosted, not reprinted)', subline: `${SITE_URL} · sizes as archived`, intro: [{ t: 'p', html: 'The analysis and capture archives behind the chapters are large machine-readable files. Printing them would add thousands of pages without adding understanding, so they stay on the hosted site and are listed here with their sizes. Every link in the chapters that points at one of these files resolves to the same host.' }, { t: 'table', header: true, rows: [['Path', 'What it holds', 'Size', 'URL'], ...archives.map(x => [x.path, x.what, x.size, `<a href="${x.url}">${x.url}</a>`])] }, { t: 'p', html: `The complete repository, including the tools that produced every file above and this document, is at <a href="${REPO}">${REPO}</a>.` }], files: [] }],
  index: { identifiers, terms },
};
writeFileSync(join(OUT, 'content.json'), JSON.stringify(content));
console.log(`content.json: ${chapters.length} chapters, ${Object.values(chapterBlocks).reduce((n, b) => n + b.length, 0)} blocks, ${allSpecimens.filter(s => s.block.png).length}/${allSpecimens.length} specimen screenshots, ${visual.filter(b => b.t === 'img').length} record images`);
const py = spawnSync('python3', [join(root, 'tools/build-pdf.py')], { stdio: 'inherit' });
process.exit(py.status || 0);
