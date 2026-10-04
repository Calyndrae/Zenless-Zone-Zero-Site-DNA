// Measure every specimen of the built handbook page in headless Chromium and write handbook/specimen-geometry.json,
// which tools/build-handbook.mjs reads: a component whose root is absolutely or fixed positioned by the site's CSS gets a
// window of its measured size onto a 1440 × 900 stage, shifted so the component is in view (see specimen() in
// tools/handbook/lib.mjs). With --fit the page is rebuilt and re-measured until the geometry is stable (at most 4 rounds).
import http from 'node:http';
import { readFileSync, writeFileSync, existsSync, statSync, createReadStream } from 'node:fs';
import { join, extname, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { chromium } from 'playwright';
const root = resolve(new URL('..', import.meta.url).pathname);
const PORT = 8799; const FIT = process.argv.includes('--fit'); const MAX_H = 1400;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.otf': 'font/otf', '.mp4': 'video/mp4', '.mp3': 'audio/mpeg', '.txt': 'text/plain', '.ico': 'image/x-icon', '.webp': 'image/webp' };
const server = http.createServer((req, res) => { let path = decodeURIComponent(new URL(req.url, 'http://x').pathname); let file = join(root, path); if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html'); if (!file.startsWith(root) || !existsSync(file) || !statSync(file).isFile()) { res.writeHead(404); return res.end('not found'); } res.writeHead(200, { 'Content-Type': types[extname(file).toLowerCase()] || 'application/octet-stream' }); createReadStream(file).pipe(res); });
await new Promise(r => server.listen(PORT, '127.0.0.1', r));
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
const browser = await chromium.launch();
async function measure() {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, userAgent: UA, locale: 'zh-CN' }); const page = await ctx.newPage();
  await page.goto(`http://127.0.0.1:${PORT}/zh-cn/news/7013/`, { waitUntil: 'domcontentloaded', timeout: 90000 });
  for (let i = 0; i < 90; i++) { await page.waitForTimeout(500); if (await page.$('.news-detail__content h4')) break; }
  await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => { }); await page.waitForTimeout(2500);
  const index = JSON.parse(readFileSync(join(root, 'handbook/specimen-index.json'), 'utf8'));
  const out = await page.evaluate(([index, MAX_H]) => index.map(s => {
    const td = document.getElementById(s.id); if (!td) return { key: s.key, missing: true };
    const stageTd = td.querySelector('td[style*="transform"]'); const stageTable = stageTd && stageTd.closest('table');
    const rootEl = (stageTd || td).firstElementChild; if (!rootEl) return { key: s.key, empty: true };
    const cs = getComputedStyle(rootEl); const cell = td.getBoundingClientRect();
    const els = [rootEl, ...rootEl.querySelectorAll('*')].filter(e => { const r = e.getBoundingClientRect(); const c = getComputedStyle(e); return c.display !== 'none' && c.visibility !== 'hidden' && r.width > 0 && r.height > 0 && r.width < 6000 && r.height < 6000; });
    const u = els.reduce((a, e) => { const r = e.getBoundingClientRect(); return { l: Math.min(a.l, r.left), t: Math.min(a.t, r.top), r: Math.max(a.r, r.right), b: Math.max(a.b, r.bottom) }; }, { l: Infinity, t: Infinity, r: -Infinity, b: -Infinity });
    const prevDx = stageTable ? -(parseFloat(stageTable.style.left) || 0) : 0; const prevDy = stageTable ? -(parseFloat(stageTable.style.top) || 0) : 0;
    const positioned = /absolute|fixed/.test(cs.position); const hidden = cs.display === 'none' || !isFinite(u.l);
    const g = { key: s.key, root: s.rootClass, position: cs.position, display: cs.display, inlineDisplay: rootEl.style.display || '', stage: positioned && !hidden, hidden, cell: { w: Math.round(cell.width), h: Math.round(cell.height) }, w: hidden ? 0 : Math.round(u.r - u.l), h: hidden ? 0 : Math.min(MAX_H, Math.round(u.b - u.t)), dx: 0, dy: 0, prev: { staged: !!stageTd, dx: prevDx, dy: prevDy }, scroll: td.scrollWidth > td.clientWidth + 1 };
    if (g.stage) { g.dx = Math.round(prevDx + (u.l - cell.left)); g.dy = Math.round(prevDy + (u.t - cell.top)); }
    if (hidden) g.hiddenWhy = rootEl.style.display === 'none' ? 'inline display: none in the captured state' : 'display: none from the stylesheets in this (desktop) context';
    return g;
  }), [index, MAX_H]);
  await ctx.close(); return out;
}
const geometryOf = m => Object.fromEntries(m.filter(g => !g.missing && !g.empty).map(g => [g.key, { stage: g.stage, position: g.position, dx: g.dx, dy: g.dy, w: g.w, h: g.h, hidden: g.hidden, hiddenWhy: g.hiddenWhy, root: g.root }]));
const build = () => { const r = spawnSync('node', [join(root, 'tools/build-handbook.mjs')], { encoding: 'utf8' }); if (r.status !== 0) { console.error(r.stdout, r.stderr); throw new Error('build failed'); } console.log('  ' + r.stdout.trim().split('\n').pop()); };
const file = join(root, 'handbook/specimen-geometry.json');
let prev = existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : {}; let last = null;
for (let round = 1; round <= (FIT ? 4 : 1); round++) {
  if (FIT) { console.log(`round ${round}: build`); build(); }
  const m = await measure(); const geo = geometryOf(m);
  const changed = Object.keys(geo).filter(k => { const a = prev[k]; const b = geo[k]; return !a || a.stage !== b.stage || Math.abs(a.dx - b.dx) > 1 || Math.abs(a.dy - b.dy) > 1 || Math.abs(a.h - b.h) > 1 || a.hidden !== b.hidden; });
  console.log(`measured ${m.length} specimens: ${m.filter(g => g.stage).length} staged, ${m.filter(g => g.hidden).length} hidden, ${m.filter(g => g.scroll).length} scrolling sideways, ${m.filter(g => g.missing).length} missing; ${changed.length} changed`);
  for (const g of m.filter(x => x.stage || x.hidden || x.missing)) console.log('  ', JSON.stringify(g));
  writeFileSync(file, JSON.stringify(geo, null, 1)); last = m; prev = geo;
  if (!changed.length) { if (FIT) console.log('stable'); break; }
  if (FIT && round === 4) console.log('not stable after 4 rounds');
}
if (FIT && last) { const bad = last.filter(g => !g.hidden && !g.missing && (g.cell.h < 8)); console.log(bad.length ? 'STILL COLLAPSED: ' + bad.map(g => g.key).join(', ') : 'no collapsed specimen cells'); }
await browser.close(); server.close();
