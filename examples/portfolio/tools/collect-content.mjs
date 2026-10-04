// Collects, from the repository's archive, everything the example puts into the site's component slots — nothing is
// drawn or written for it:
//   • src/content.json      the content API's own answers for the home channels (mirror/api/*.json, whose image URLs
//                           already point at the archived copies), in the shapes the app's API client serves;
//   • src/i18n.zh-cn.json   the site's own mi18n dictionaries (the main one plus the download/footer ones), merged flat;
//   • src/site-fragments.json  the SDK-rendered blocks lifted verbatim from the captured DOMs (download layout, share
//                           list, footer social strip, corporate footer, CRM block, phone menu and pre-register bar),
//                           with their CDN URLs pointed at the archive where a copy exists;
//   • src/site-assets.json  the data-URI images the component markup carries (as before).
// It also prints which record field each captured <img> came from, so the markup functions read the right keys.
//
//   node examples/portfolio/tools/collect-content.mjs
import { readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, '..', '..', '..');
const src = join(here, '..', 'src');
const read = p => readFileSync(join(repo, p), 'utf8');
const json = p => JSON.parse(read(p));

// 1. the mirror adapter's maps: request → archived answer, CDN URL → archived file
const adapter = read('mirror/adapter.js');
const mapOf = name => JSON.parse(adapter.match(new RegExp(`const ${name} = (\\{[\\s\\S]*?\\});\\n`))[1]);
const API = mapOf('API'), FILES = mapOf('FILES');
const answer = (query) => { const key = Object.keys(API).find(k => k.endsWith(query)); if (!key) throw new Error('no archived answer for ' + query); return json(API[key].replace(/^\//, '')); };
const localize = s => s.replace(/https?:\/\/[^\s"'()<>\\]+/g, url => FILES[url] || FILES[url.replace(/\\u0026/g, '&')] || url);

// 2. the home channels, as the page requests them (chapter 02)
const lists = {
  285: 'getContentList?iChanId=285&iPage=1&iPageSize=1&sLangKey=zh-cn',
  286: 'getContentList?iChanId=286&iPage=1&iPageSize=50&sLangKey=zh-cn',
  287: 'getContentList?iChanId=287&iPage=1&iPageSize=200&sLangKey=zh-cn',
  288: 'getContentList?iChanId=288&iPage=1&iPageSize=10&sLangKey=zh-cn',
  289: 'getContentList?iChanId=289&iPage=1&iPageSize=10&sLangKey=zh-cn',
  290: 'getContentList?iChanId=290&iPage=1&iPageSize=10&sLangKey=zh-cn',
  292: 'getContentList?iChanId=292&iPage=1&iPageSize=50&sLangKey=zh-cn',
  1332: 'getContentList?iChanId=1332&iPage=1&iPageSize=9&sLangKey=zh-cn',
};
const content = { 'zh-cn': {}, channels: [] };
for (const [id, q] of Object.entries(lists)) content['zh-cn'][id] = answer(q).data.list.map(r => Object.assign({}, r, { sExt: localize(String(r.sExt || '{}')) }));
for (const id of [288, 1332]) { const tree = answer(`getChildTree?iChanId=${id}&iPageSize=10&sLangKey=zh-cn`).data.children[0]; content.channels.push({ iChanId: tree.iChanId, sChanName: tree.sChanName, children: tree.children.map(c => ({ iChanId: c.iChanId, sChanName: c.sChanName })) }); }
for (const id of [285, 286, 287, 289, 290, 292]) if (!content.channels.some(c => c.iChanId === id)) content.channels.push({ iChanId: id, children: [] });
writeFileSync(join(src, 'content.json'), JSON.stringify(content, null, 1) + '\n');

// 3. the site's dictionaries: the main one wins, the download / footer / menu ones fill the rest
const dictFiles = ['m03111446031031', 'm20230605hy15aec7wg', 'm20240329hy48b9ledc', 'm12021633011271', 'm202005181116501', 'm05311049191461', 'm11021450561611', 'm20231213hy4784y0w0', 'm10201340231541'];
const dict = {};
for (const id of dictFiles.slice().reverse()) {
  const key = Object.keys(FILES).find(k => k.endsWith(`/${id}/${id}-zh-cn.json`));
  if (!key) continue;
  const d = json(FILES[key].replace(/^\//, ''));
  for (const [k, v] of Object.entries(d)) dict[k] = typeof v === 'string' ? localize(v) : v;
}
// the value the mi18n loader writes into --mi18n-font-css at run time: the body font stack the handbook measured on the home
// page (chapter 07, "OBSERVED"), minus the display face the stylesheet puts in front of it
dict.__fontCss = '"Helvetica neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, "sans-serif"';
dict.__lang = 'zh-cn';
writeFileSync(join(src, 'i18n.zh-cn.json'), JSON.stringify(dict, null, 1) + '\n');

// 4. verbatim fragments and image provenance, read from the captured DOMs with a real parser
const require = createRequire(import.meta.url);
function loadPlaywright() { for (const c of ['playwright', join(repo, 'tools', 'node_modules', 'playwright'), '/opt/node22/lib/node_modules/playwright']) { try { return require(c); } catch (e) { /* next */ } } throw new Error('playwright not found'); }
const { chromium } = loadPlaywright();
const browser = await chromium.launch();
const page = await browser.newPage();
await page.route('**/*', route => (route.request().resourceType() === 'document' ? route.continue() : route.abort()));
const fragments = {};
const wanted = {
  desktop: ['.home-btn-container', '.share__list', '.footer__wrap', '.footer-crm', '#footer', '.header__login', '.section__concept-video-mp4'],
  phone: ['.m-header__menu', '.m-preregister-container', '.footer__wrap', '#footer', '.section__concept-video-mp4'],
};
const provenance = {};
for (const [tree, file] of [['desktop', 'capture/pages/zh-cn_main/dom.html'], ['phone', 'capture/pages/m_zh-cn_main/dom.html']]) {
  await page.goto('file://' + join(repo, file));
  const out = await page.evaluate((sels) => Object.fromEntries(sels.map(s => { const el = document.querySelector(s); return [s, el ? el.outerHTML : null]; })), wanted[tree]);
  for (const [sel, html] of Object.entries(out)) { if (html == null) { console.log(`${tree}: ${sel} not in the captured DOM`); continue; } fragments[`${tree} ${sel}`] = localize(html); }
  // which record field each component image came from
  const imgs = await page.evaluate(() => Array.from(document.querySelectorAll('img')).map(i => ({ src: i.getAttribute('src') || '', cls: i.className, parent: i.parentElement.className })).filter(i => /^https?:/.test(i.src)));
  const byUrl = new Map();
  for (const [id, list] of Object.entries(content['zh-cn'])) for (const r of list) for (const [k, v] of Object.entries(JSON.parse(r.sExt))) if (Array.isArray(v)) v.forEach(x => x && x.url && byUrl.set(x.url.replace(/^\/archive\/files\//, 'https://'), `${id}.${k}`));
  for (const i of imgs) { const key = byUrl.get(i.src) || (FILES[i.src] ? 'archived file' : 'not archived'); const slot = (i.cls || i.parent).split(' ')[0]; provenance[`${tree} ${slot}`] = provenance[`${tree} ${slot}`] || key; }
}
await browser.close();
writeFileSync(join(src, 'site-fragments.json'), JSON.stringify(fragments, null, 1) + '\n');

// 5. report
console.log('records:', Object.entries(content['zh-cn']).map(([k, v]) => `${k}:${v.length}`).join(' '), '| dictionary keys:', Object.keys(dict).length, '| fragments:', Object.keys(fragments).length);
console.log('image provenance (component slot → channel.field):'); for (const [k, v] of Object.entries(provenance)) console.log('  ', k.padEnd(44), v);
let bytes = 0, missing = 0; const seen = new Set();
const count = s => { for (const m of s.matchAll(/\/archive\/files\/[^\s"'()<>\\]+/g)) { const p = decodeURIComponent(m[0]); if (seen.has(p)) continue; seen.add(p); const abs = join(repo, p); if (existsSync(abs)) bytes += statSync(abs).size; else missing++; } };
count(JSON.stringify(content)); count(JSON.stringify(dict)); count(JSON.stringify(fragments));
console.log(`archived files referenced: ${seen.size} (${(bytes / 1048576).toFixed(1)} MB), missing ${missing}`);
const chars = content['zh-cn'][287]; let cb = 0; for (const r of chars) for (const k of ['chara-cover-home', 'chara-nav', 'chara-cover-m']) { const v = JSON.parse(r.sExt)[k]; if (v && v[0]) { const abs = join(repo, decodeURIComponent(v[0].url)); if (existsSync(abs)) cb += statSync(abs).size; } }
console.log(`of which the ${chars.length} character records' home images: ${(cb / 1048576).toFixed(1)} MB`);
