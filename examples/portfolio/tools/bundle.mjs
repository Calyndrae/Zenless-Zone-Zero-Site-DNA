// Packs the example into a folder that runs on its own, outside the repository: the built page, every file it
// requests from the repository (stylesheet modules, the images and fonts those reference, the archived records'
// images, the SDK styles), a Windows-safe copy of the static server and a launcher. The request list comes from a
// headless crawl of both trees (every section scrolled into view, the load-more list exhausted, the locale picker
// opened), so nothing is guessed and nothing unused is shipped.
//
//   node examples/portfolio/tools/bundle.mjs [outDir]     → <outDir>/ (default: examples/portfolio/dist/standalone)
import { spawn } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, '..', '..', '..');
const example = join(here, '..');
const out = resolve(process.argv[2] || join(example, 'dist', 'standalone'));
const require = createRequire(import.meta.url);
function loadPlaywright() { for (const c of ['playwright', join(repo, 'tools', 'node_modules', 'playwright'), '/opt/node22/lib/node_modules/playwright']) { try { return require(c); } catch (e) { /* next */ } } throw new Error('playwright not found: run `cd tools && npm install --omit=optional` first'); }
const { chromium } = loadPlaywright();

const port = 8793;
const server = spawn(process.execPath, [join(repo, 'tools', 'serve.mjs'), String(port)], { stdio: 'ignore' });
const origin = `http://127.0.0.1:${port}`;
for (let i = 0; i < 50; i++) { try { if ((await fetch(origin + '/examples/portfolio/')).ok) break; } catch (e) { /* not up yet */ } await new Promise(r => setTimeout(r, 100)); }

// 1. crawl both trees and record every repository file the page asks for
const requested = new Set();
const browser = await chromium.launch();
async function crawl(context, url) {
  const page = await context.newPage();
  page.on('response', r => { const u = r.url(); if (u.startsWith(origin) && r.status() === 200) requested.add(decodeURIComponent(new URL(u).pathname)); });
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForFunction(() => window.portfolio && !window.portfolio.store.state.isLoading, null, { timeout: 20000 });
  for (const sel of await page.$$('.section')) { await sel.evaluate(el => el.scrollIntoView({ block: 'start' })); await page.waitForTimeout(500); }
  for (let i = 0; i < 20; i++) { const more = await page.$('.load-more'); if (!more) break; await more.evaluate(el => el.scrollIntoView({ block: 'center' })); await more.click().catch(() => {}); await page.waitForTimeout(300); }
  await page.$eval('.locale-selector-3HQCGC', el => el.click()).catch(() => {});
  for (const sel of ['.header__navbar-link .nav-content', '.more-btn', '.home-kv__download', '.backTop']) { const el = await page.$(sel); if (el) await el.hover().catch(() => {}); await page.waitForTimeout(150); }
  await page.waitForTimeout(800);
  await page.close();
}
await crawl(await browser.newContext({ viewport: { width: 1440, height: 900 } }), origin + '/examples/portfolio/?tree=pc');
await crawl(await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' }), origin + '/examples/portfolio/?tree=m');
await browser.close();
server.kill();

// 2. plus everything the stylesheets reference (hover and state images load only when used)
const sheets = JSON.parse(readFileSync(join(example, 'src', 'stylesheets.json'), 'utf8'));
for (const list of Object.values(sheets.trees)) for (const css of list) {
  requested.add('/' + css);
  for (const m of readFileSync(join(repo, css), 'utf8').matchAll(/url\((['"]?)(\/_nuxt\/[^)'"]+)/g)) requested.add(m[2].split('?')[0].split('#')[0]);
}

// 3. copy
rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, 'tools'), { recursive: true });
let bytes = 0, files = 0;
for (const path of requested) {
  const rel = path.replace(/^\//, '').replace(/\/$/, '/index.html');
  const src = join(repo, rel);
  if (!existsSync(src) || !statSync(src).isFile()) continue;
  if (rel.includes('/verification/')) continue;
  const dst = join(out, rel); mkdirSync(dirname(dst), { recursive: true }); copyFileSync(src, dst); bytes += statSync(src).size; files++;
}
mkdirSync(join(out, 'examples', 'portfolio', 'src'), { recursive: true });
for (const name of ['README.md', 'build.mjs']) copyFileSync(join(example, name), join(out, 'examples', 'portfolio', name));
for (const name of readdirSync(join(example, 'src'))) copyFileSync(join(example, 'src', name), join(out, 'examples', 'portfolio', 'src', name));
// the static server, with its root resolved through fileURLToPath so Windows drive letters work
let serve = readFileSync(join(repo, 'tools', 'serve.mjs'), 'utf8')
  .replace("import { join, extname, resolve } from 'node:path';", "import { join, extname, resolve } from 'node:path';\nimport { fileURLToPath } from 'node:url';")
  .replace(/const root = .*\n/, "const root = resolve(fileURLToPath(new URL('..', import.meta.url)));   // fileURLToPath: works on Windows drive paths too\n")
  .replace(/\.listen\(port, host, \(\) => console\.log\([\s\S]*?\)\);\s*$/, ".listen(port, host, () => console.log(`example on http://${host === '0.0.0.0' ? '<LAN address of this machine>' : host}:${port}/examples/portfolio/  (Ctrl+C stops the server)`));\n");
writeFileSync(join(out, 'tools', 'serve.mjs'), serve);
writeFileSync(join(out, 'index.html'), '<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=/examples/portfolio/"><title>example</title><a href="/examples/portfolio/">examples/portfolio/</a>\n');
writeFileSync(join(out, 'start.cmd'), '@echo off\r\ncd /d "%~dp0"\r\nwhere node >nul 2>nul || (echo Node.js is required: https://nodejs.org & pause & exit /b 1)\r\nstart "example server" cmd /k node tools\\serve.mjs 8786\r\ntimeout /t 2 /nobreak >nul\r\nstart "" "http://127.0.0.1:8786/examples/portfolio/"\r\n');
writeFileSync(join(out, 'start.sh'), '#!/bin/sh\ncd "$(dirname "$0")"\nnode tools/serve.mjs 8786\n');
writeFileSync(join(out, 'HOW-TO-RUN.txt'), `Example page — standalone bundle
================================

The site's home page rebuilt from its own components and archived content; runs on its own.
Node.js 18 or newer is the only requirement.

Windows:      double-click start.cmd   (opens a server window and the browser)
              or, in a terminal inside this folder:   node tools\\serve.mjs 8786
macOS/Linux:  sh start.sh              or   node tools/serve.mjs 8786

Then open  http://127.0.0.1:8786/examples/portfolio/
           ?tree=m forces the phone tree, ?tree=pc the desktop tree.

The page is served, not opened as a file: the site's stylesheets reference /_nuxt/… by absolute path.
Ctrl+C in the server window stops it. examples/portfolio/README.md explains the parts.

中文速览：Windows 双击 start.cmd，或在本文件夹里运行 node tools\\serve.mjs 8786，
然后打开 http://127.0.0.1:8786/examples/portfolio/ 。?tree=m 强制手机树。
`);
console.log(`bundle at ${relative(repo, out)}: ${files} repository files (${(bytes / 1048576).toFixed(1)} MB) + server, launcher, sources`);
