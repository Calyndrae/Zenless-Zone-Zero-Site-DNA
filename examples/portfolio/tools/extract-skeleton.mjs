// Prints the structural skeleton of the captured home page (capture/pages/zh-cn_main/dom.html and the phone
// capture) so the portfolio example can reuse the site's exact component markup: element names, classes,
// scoped data-v attributes and inline styles are kept; text, long URLs, data URIs and SVG bodies are shortened;
// repeated carousel items are collapsed to the first one. Used while writing src/app.js; kept for reference.
//
//   node examples/portfolio/tools/extract-skeleton.mjs [desktop|phone] > skeleton.txt
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, '..', '..', '..');
const require = createRequire(import.meta.url);
const { chromium } = (() => { for (const c of ['playwright', join(repo, 'tools', 'node_modules', 'playwright'), '/opt/node22/lib/node_modules/playwright']) { try { return require(c); } catch (e) { /* next */ } } throw new Error('playwright not found'); })();

const which = process.argv[2] === 'phone' ? 'm_zh-cn_main' : process.argv[2] && process.argv[2] !== 'desktop' ? process.argv[2] : 'zh-cn_main';   // or any capture/pages/<dir>
const selectors = process.argv[3] ? process.argv[3].split(',') : (which === 'zh-cn_main'
  ? ['.header', '.loading', '.section-index', '.sidebar', '.section-character', '.section-video', '.section-news', '.section-world', '.section-feature', '.footer', '.video-container', '.home-pv']
  : ['.m-header', '.m-header__menu', '.m-home-kv', '.m-section-nav', '.m-home-character', '.m-home-video', '.m-home-news', '.m-home-world', '.m-home-feature', '.m-preregister-container', '.footer']);

const browser = await chromium.launch();
const page = await browser.newPage();
await page.route('**/*', route => (route.request().resourceType() === 'document' ? route.continue() : route.abort()));
await page.goto(pathToFileURL(join(repo, 'capture', 'pages', which, 'dom.html')).href, { waitUntil: 'domcontentloaded' });
const out = await page.evaluate((sels) => {
  const shorten = v => { if (/^data:/.test(v)) return v.slice(0, 24) + '…'; if (v.length > 90) return v.slice(0, 70) + '…(' + v.length + ')'; return v; };
  function ser(el, depth, maxDepth) {
    if (el.nodeType === 3) { const t = el.textContent.replace(/\s+/g, ' ').trim(); return t ? (t.length > 40 ? t.slice(0, 40) + '…' : t) : ''; }
    if (el.nodeType === 8) return '<!---->';
    if (el.nodeType !== 1) return '';
    const tag = el.tagName.toLowerCase();
    if (tag === 'svg') return '<svg …/>';
    if (tag === 'script' || tag === 'style') return '';
    const attrs = Array.from(el.attributes).map(a => a.name + (a.value === '' ? '' : '="' + shorten(a.value) + '"')).join(' ');
    const open = '<' + tag + (attrs ? ' ' + attrs : '') + '>';
    if (depth >= maxDepth) return open + (el.children.length ? '…' : '') + '</' + tag + '>';
    // collapse repeated siblings: keep the first child of each (tag+class) signature, note how many were skipped
    const seen = new Map(); const parts = [];
    for (const child of el.childNodes) {
      if (child.nodeType === 1) {
        const sig = child.tagName + '|' + child.className;
        const n = (seen.get(sig) || 0) + 1; seen.set(sig, n);
        if (n > 1) { if (n === 2) parts.push('<!-- …more ' + child.tagName.toLowerCase() + '.' + String(child.className).split(' ')[0] + ' -->'); continue; }
      }
      const s = ser(child, depth + 1, maxDepth); if (s) parts.push(s);
    }
    const pad = '\n' + '  '.repeat(depth + 1);
    return open + (parts.length ? pad + parts.join(pad) + '\n' + '  '.repeat(depth) : '') + '</' + tag + '>';
  }
  return sels.map(sel => { const el = document.querySelector(sel); return '==== ' + sel + ' ====\n' + (el ? ser(el, 0, 14) : '(not in this capture)'); }).join('\n\n');
}, selectors);
console.log(out);
await browser.close();
