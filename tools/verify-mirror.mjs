// Verifies the self-contained mirror on a plain static server (as GitHub Pages serves it): the routes load, the loader
// finishes, the CMS API is answered locally, nothing archived is fetched from the live hosts, client navigation works,
// the mobile tree works, and the handbook route renders the handbook. Writes verification/mirror-report.json.
import http from 'node:http';
import { readFileSync, writeFileSync, existsSync, statSync, createReadStream, mkdirSync } from 'node:fs';
import { join, extname, resolve } from 'node:path';
import { chromium } from 'playwright';
const root = resolve(new URL('..', import.meta.url).pathname); mkdirSync(join(root, 'verification'), { recursive: true });
const PORT = 8797;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.otf': 'font/otf', '.mp4': 'video/mp4', '.mp3': 'audio/mpeg', '.txt': 'text/plain', '.ico': 'image/x-icon', '.webp': 'image/webp' };
const server = http.createServer((req, res) => { let path = decodeURIComponent(new URL(req.url, 'http://x').pathname); let file = join(root, path); if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html'); if (!file.startsWith(root) || !existsSync(file) || !statSync(file).isFile()) { if (existsSync(join(root, '404.html')) && !/\.[a-z0-9]+$/i.test(path)) { res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' }); return createReadStream(join(root, '404.html')).pipe(res); } res.writeHead(404); return res.end('not found'); } res.writeHead(200, { 'Content-Type': types[extname(file).toLowerCase()] || 'application/octet-stream' }); createReadStream(file).pipe(res); }).listen(PORT, '127.0.0.1');
const results = []; const check = (name, ok, detail) => { results.push({ name, ok: !!ok, detail }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail !== undefined ? ' — ' + (typeof detail === 'string' ? detail : JSON.stringify(detail)).slice(0, 320) : '')); };
const DESKTOP_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
const MOBILE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
const browser = await chromium.launch(); const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: DESKTOP_UA, locale: 'zh-CN' });
const page = await ctx.newPage(); const reqs = []; const failed = []; const errors = [];
page.on('request', r => reqs.push({ url: r.url(), type: r.resourceType() })); page.on('requestfailed', r => { if ((r.failure() || {}).errorText !== 'net::ERR_ABORTED') failed.push(r.url()); }); page.on('response', r => { if (r.status() >= 400 && r.url().includes('127.0.0.1')) failed.push(r.status() + ' ' + r.url()); }); page.on('pageerror', e => errors.push(String(e.message).slice(0, 160)));
const loaderGone = async () => { for (let i = 0; i < 60; i++) { await page.waitForTimeout(500); const gone = await page.evaluate(() => { const vis = e => { if (!e) return false; const cs = getComputedStyle(e); const r = e.getBoundingClientRect(); return cs.display !== 'none' && cs.visibility !== 'hidden' && +cs.opacity > 0 && r.width > 0 && r.height > 0; }; return !vis(document.querySelector('.zzz-loading')) && !vis(document.querySelector('.loading')) && !!document.querySelector('.root, #__nuxt > div > div'); }).catch(() => false); if (gone) return true; } return false; };
const live = () => reqs.filter(r => /^https:\/\/(fastcdn|webstatic|act-webstatic)\.hoyoverse\.com\//.test(r.url) || /^https:\/\/zenless\.hoyoverse\.com\//.test(r.url)).map(r => r.url.slice(0, 120));
const cms = () => reqs.filter(r => /sg-public-api-static\.hoyoverse\.com/.test(r.url)).length;
const localApi = () => reqs.filter(r => /127\.0\.0\.1.*\/(archive|mirror)\/api\//.test(r.url)).length;
const sec = sel => page.$$eval(sel, es => es.length);
try {
  const t0 = Date.now(); await page.goto(`http://127.0.0.1:${PORT}/zh-cn/main`, { waitUntil: 'domcontentloaded', timeout: 90000 });
  check('home: loader finished from the archive', await loaderGone(), `${Date.now() - t0} ms`); await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => { }); await page.waitForTimeout(2000);
  check('home: header, six sections and footer rendered', (await sec('header.header')) === 1 && (await sec('section.section')) === 6 && (await sec('.footer')) >= 1, { sections: await sec('section.section') });
  check('home: CMS API answered from this host (no request reached sg-public-api-static)', cms() === 0 && localApi() >= 5, { localApi: localApi(), live: cms() });
  check('home: nothing fetched from the live CDN or the live site', live().length === 0, live().slice(0, 6));
  check('home: character and video swipers populated', (await sec('.home-character__nav-item')) >= 30 && (await sec('.home-video__nav-item')) >= 5, { chara: await sec('.home-character__nav-item'), video: await sec('.home-video__nav-item') });
  // client navigation
  await page.evaluate(() => [...document.querySelectorAll('.header .nav-content')][1].click()); await page.waitForTimeout(3000); await loaderGone();
  check('client navigation to the character page (router push, no reload)', /\/zh-cn\/character/.test(page.url()) && (await sec('.cha-swiper .swiper-slide')) >= 30, { url: page.url(), slides: await sec('.cha-swiper .swiper-slide') });
  reqs.length = 0; await page.goto(`http://127.0.0.1:${PORT}/zh-cn/news`, { waitUntil: 'domcontentloaded' }); await loaderGone(); await page.waitForTimeout(2000);
  check('news index: list, tabs and pager from the archive', (await sec('.news-list__item-title')) >= 9 && (await sec('.news-tab__item')) >= 4 && cms() === 0, { items: await sec('.news-list__item-title'), tabs: await sec('.news-tab__item') });
  await page.evaluate(() => [...document.querySelectorAll('.news-tab__item')][2].click()); await page.waitForTimeout(2500);
  check('news index: second tab answered from the archive', cms() === 0 && (await sec('.news-list__item-title')) >= 5, { live: cms() });
  const idx = JSON.parse(readFileSync(join(root, 'archive/api/index.json'), 'utf8')); const art = idx.find(a => /getContent\?/.test(a.key) && /iChanId=288/.test(a.key)); const cid = (art.key.match(/iInfoId=(\d+)/) || [])[1]; const want = JSON.parse(readFileSync(join(root, art.file), 'utf8')).data.sTitle;
  reqs.length = 0; await page.goto(`http://127.0.0.1:${PORT}/zh-cn/news/${cid}/`, { waitUntil: 'domcontentloaded' }); await loaderGone(); await page.waitForTimeout(2000);
  const title = await page.$eval('.news-detail__title', e => e.textContent.trim()).catch(() => '');
  check(`article ${cid}: renders its archived record`, title === want && cms() === 0, { title, want });
  const imgHosts = reqs.filter(r => r.type === 'image').reduce((a, r) => { const h = new URL(r.url).host; a[h] = (a[h] || 0) + 1; return a; }, {}); check(`article ${cid}: images served from this host where archived`, (imgHosts['127.0.0.1:' + PORT] || 0) > 0, imgHosts);
  reqs.length = 0; await page.goto(`http://127.0.0.1:${PORT}/zh-cn/world`, { waitUntil: 'domcontentloaded' }); await loaderGone(); await page.waitForTimeout(2000);
  check('world page: slides from the archive', (await sec('.world__slide')) >= 3 && cms() === 0, { slides: await sec('.world__slide') });
  reqs.length = 0; await page.goto(`http://127.0.0.1:${PORT}/zh-cn/news/7013/`, { waitUntil: 'domcontentloaded' }); await loaderGone(); await page.waitForTimeout(2500);
  const hbTitle = await page.$eval('.news-detail__title', e => e.textContent.trim()).catch(() => '');
  check('handbook route /zh-cn/news/7013 renders the handbook inside the news template', /handbook/i.test(hbTitle) && (await sec('.news-detail__content h4')) > 10, { title: hbTitle.slice(0, 60), headings: await sec('.news-detail__content h4') });
  await page.screenshot({ path: join(root, 'verification/handbook-top-1440.png') }).catch(() => null);
  // mobile tree
  const mctx = await browser.newContext({ viewport: { width: 390, height: 844 }, userAgent: MOBILE_UA, isMobile: true, hasTouch: true, deviceScaleFactor: 2, locale: 'zh-CN' }); const mp = await mctx.newPage(); const mreqs = []; mp.on('request', r => mreqs.push(r.url())); mp.on('pageerror', e => errors.push('mobile: ' + String(e.message).slice(0, 120)));
  await mp.goto(`http://127.0.0.1:${PORT}/m/zh-cn/main`, { waitUntil: 'domcontentloaded' }); for (let i = 0; i < 40; i++) { await mp.waitForTimeout(500); if (await mp.$('.m-home-kv')) break; } await mp.waitForTimeout(2500);
  check('mobile tree: /m/zh-cn/main renders the mobile home from the archive', !!(await mp.$('.m-header')) && !!(await mp.$('.m-home-character')) && !mreqs.some(u => /sg-public-api-static/.test(u)), { url: mp.url(), cms: mreqs.filter(u => /sg-public-api-static/.test(u)).length });
  await mp.screenshot({ path: join(root, 'verification/mirror-mobile-390.png') }).catch(() => null); await mctx.close();
  check('no JavaScript errors from the site code', errors.filter(e => !/GSAP target|ResizeObserver/.test(e)).length === 0, errors.slice(0, 4));
  const localFailed = failed.filter(f => /127\.0\.0\.1/.test(f) && !/favicon|\.ico|\/api\/|\/event\/|cdn-cgi/.test(f)); check('no missing files on this host', localFailed.length === 0, localFailed.slice(0, 6));
  await page.goto(`http://127.0.0.1:${PORT}/zh-cn/main`, { waitUntil: 'domcontentloaded' }); await loaderGone(); await page.waitForTimeout(1500); await page.screenshot({ path: join(root, 'verification/mirror-home.png') }).catch(() => null);
} catch (e) { check('verification run completed', false, String(e).slice(0, 400)); }
await browser.close(); server.close();
writeFileSync(join(root, 'verification/mirror-report.json'), JSON.stringify({ at: new Date().toISOString(), results }, null, 1));
console.log(`\n${results.filter(r => r.ok).length} passed, ${results.filter(r => !r.ok).length} failed`);
