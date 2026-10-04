// Verifies the GitHub Pages variant on a plain static file server (no proxy, no rewrites), the way
// Pages serves a project site: the repository root is mounted under /<repo>/ and index.html is the page.
import http from 'node:http';
import { readFileSync, existsSync, statSync, createReadStream, writeFileSync } from 'node:fs';
import { join, extname, resolve } from 'node:path';
import { chromium } from 'playwright';
const root = resolve(new URL('..', import.meta.url).pathname);
const CNAME = existsSync(join(root, 'CNAME')) ? readFileSync(join(root, 'CNAME'), 'utf8').trim() : '';
const BASE = (process.argv.find(a => a.startsWith('--base=')) || ('--base=' + (CNAME ? '' : '/Endfield-Site-DNA'))).slice(7).replace(/\/$/, '');
console.log(`static site base path "${BASE}"${CNAME ? ' (custom domain ' + CNAME + ')' : ''}`);
const PORT = 8790;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.md': 'text/markdown', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (BASE && !path.startsWith(BASE + '/') && path !== BASE) { res.writeHead(404); return res.end('not found'); }
  path = path.slice(BASE.length) || '/';
  let file = join(root, path); if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!file.startsWith(root) || !existsSync(file) || !statSync(file).isFile()) { res.writeHead(404); return res.end('not found'); }
  res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' }); createReadStream(file).pipe(res);
}).listen(PORT, '127.0.0.1');
const results = []; const check = (name, ok, detail) => { results.push({ name, ok: !!ok, detail }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail !== undefined ? ' — ' + (typeof detail === 'string' ? detail : JSON.stringify(detail)).slice(0, 300) : '')); };
const browser = await chromium.launch();
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } }); const page = await ctx.newPage();
  const failed = []; const errors = []; page.on('requestfailed', r => { if ((r.failure() || {}).errorText !== 'net::ERR_ABORTED') failed.push(r.url()); }); page.on('response', r => { if (r.status() >= 400 && new URL(r.url()).hostname === '127.0.0.1') failed.push(r.status() + ' ' + r.url()); }); page.on('pageerror', e => errors.push(String(e.message)));
  const t0 = Date.now(); const dataResp = page.waitForResponse(r => r.url().includes('handbook-bulletin.pages.json'), { timeout: 60000 }).catch(() => null);
  await page.goto(`http://127.0.0.1:${PORT}${BASE}/`, { waitUntil: 'domcontentloaded', timeout: 90000 }); await page.waitForURL(`**${BASE}/en-us/news/7013/`, { timeout: 15000 }).catch(() => null); check('root index.html redirects to the article path the shell needs', page.url().endsWith(`${BASE}/en-us/news/7013/`), page.url());
  const dr = await dataResp; check('handbook data fetched from the base-prefixed static path', dr && dr.status() === 200, dr && dr.url());
  let gone = false; for (let i = 0; i < 90; i++) { await page.waitForTimeout(1000); if (!(await page.$('[class*="Loading_container"]'))) { gone = true; break; } }
  check('first-load screen finished and left on a static host', gone, `${Date.now() - t0} ms`);
  check('page URL kept the Pages base path (no client-side redirect)', page.url() === `http://127.0.0.1:${PORT}${BASE}/en-us/news/7013/`, page.url());
  const title = await page.$eval('.__20-NoticeDetail_title__cALu9', e => e.textContent).catch(() => ''); check('handbook title rendered', /handbook/i.test(title), title);
  const imgs = await page.$$eval('.__20-NoticeDetail_content__wIAEN img', es => es.map(e => ({ src: e.getAttribute('src'), ok: e.complete && e.naturalWidth > 0 }))); check('every content image with a src resolves under the base path', imgs.length > 20 && imgs.filter(i => i.src).every(i => i.ok), { count: imgs.length, withoutSrc: imgs.filter(i => !i.src).length, broken: imgs.filter(i => i.src && !i.ok).map(i => i.src).slice(0, 5) });
  const links = await page.$$eval('.__20-NoticeDetail_content__wIAEN a[href]', es => es.map(e => e.getAttribute('href'))); const local = links.filter(h => h.startsWith('/')); check('every root-relative content link carries the base path', local.length > 50 && local.every(h => h.startsWith(BASE + '/') && !/^\/Endfield-Site-DNA\//.test(BASE ? '' : h)), { local: local.length, stray: local.filter(h => !h.startsWith(BASE + '/')).slice(0, 5) });
  const probe = await page.evaluate(async hrefs => { const out = []; for (const h of hrefs) { const r = await fetch(h, { method: 'HEAD' }).catch(() => null); out.push([h, r ? r.status : 0]); } return out; }, local.filter((h, i, a) => a.indexOf(h) === i).slice(0, 40)); check('linked files exist on the static host (first 40 unique)', probe.every(([, s]) => s === 200), probe.filter(([, s]) => s !== 200));
  const specimens = await page.$$eval('.__20-NoticeDetail_content__wIAEN td > [class*="__"]', es => es.map(e => e.getBoundingClientRect().width > 0)); check('embedded specimens render with non-zero size', specimens.length > 10 && specimens.every(Boolean), specimens.length);
  check('no JavaScript errors other than the site\'s own React #418 hydration notice', errors.every(e => /#418/.test(e)), errors);
  const sameOriginFailures = failed.filter(f => f.includes('127.0.0.1') && !/\/api\/|\/cdn-cgi\/|sdk|analytics|favicon|\.ico/.test(f)); check('no failed same-origin requests other than the site\'s own API/SDK/Cloudflare-beacon calls (expected on a static host)', sameOriginFailures.length === 0, sameOriginFailures.slice(0, 8));
  await page.screenshot({ path: join(root, 'verification/pages-top-1440.png') });
  await ctx.close();
} catch (e) { check('verification run completed', false, String(e).slice(0, 400)); }
await browser.close(); server.close();
writeFileSync(join(root, 'verification/pages-report.json'), JSON.stringify({ base: BASE, at: new Date().toISOString(), results }, null, 1));
console.log(`\n${results.filter(r => r.ok).length} passed, ${results.filter(r => !r.ok).length} failed`); process.exit(results.every(r => r.ok) ? 0 : 1);
