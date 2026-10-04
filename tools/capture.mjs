// Depth-1 instrumented capture of the live site in headless Chromium, desktop tree (/zh-cn/…) and mobile tree (/m/zh-cn/…).
// Records per page: network manifest, DOM snapshot (after the loader leaves), screenshots, computed styles of every
// component class, hover-state diffs, style-mutation timelines (entrance motion), audio/media activity, injected
// <style> tags (the site ships its CSS inside the chunks), fonts, Vuex state shape and link discovery.
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const OUT = join(root, 'capture'); mkdirSync(join(OUT, 'pages'), { recursive: true }); mkdirSync(join(OUT, 'assets'), { recursive: true });
const ORIGIN = 'https://zenless.hoyoverse.com'; const LANG = 'zh-cn';
const START = `${ORIGIN}/${LANG}/main`;
const DESKTOP_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
const MOBILE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
const CMS = 'https://sg-public-api-static.hoyoverse.com/content_v2_user/app/3e9196a4b9274bd7';
const BIG = 400 * 1024;
const manifest = new Map();
const hoverRules = JSON.parse(readFileSync(join(root, 'analysis/motion.json'), 'utf8')).hoverRules;
const hoverClasses = [...new Set(hoverRules.flatMap(r => (r.selector.match(/\.[A-Za-z0-9_-]+(?=:hover)/g) || []).map(s => s.slice(1))))];
const INIT = `
(() => {
  window.__cap = { media: [], mutations: [], audio: [], xhr: [] };
  const t0 = performance.now();
  const A = window.Audio; window.Audio = function(src){ const a = new A(src); window.__cap.audio.push({ t: performance.now()-t0, kind:'new Audio', src: src||'' }); return a; }; window.Audio.prototype = A.prototype;
  const play = HTMLMediaElement.prototype.play; HTMLMediaElement.prototype.play = function(){ window.__cap.media.push({ t: performance.now()-t0, kind:this.tagName, src:(this.currentSrc||this.src||'').slice(0,160), loop:this.loop, muted:this.muted, volume:this.volume }); return play.apply(this, arguments); };
  const AC = window.AudioContext || window.webkitAudioContext; if (AC) { window.AudioContext = function(...a){ window.__cap.audio.push({ t: performance.now()-t0, kind:'AudioContext' }); return new AC(...a); }; }
  const obs = new MutationObserver(list => { for (const m of list) { if (window.__cap.mutations.length > 20000) return; const el = m.target; if (!(el instanceof Element)) continue; window.__cap.mutations.push({ t: Math.round(performance.now()-t0), attr: m.attributeName, cls: typeof el.className === 'string' ? el.className.slice(0,120) : '', tag: el.tagName, style: m.attributeName==='style' ? (el.getAttribute('style')||'').slice(0,240) : undefined, old: (m.oldValue||'').slice(0,160) }); } });
  document.addEventListener('DOMContentLoaded', () => obs.observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ['style','class'], attributeOldValue: true }));
})();`;
const sha = b => createHash('sha256').update(b).digest('hex');
const slug = u => u.replace(ORIGIN, '').replace(/^\//, '').replace(/[\/?#&=]+/g, '_') || 'root';
const browser = await chromium.launch({ args: ['--mute-audio', '--autoplay-policy=no-user-gesture-required'] });
const CLASS_RE = /^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$|^[a-z][a-z0-9-]*-[A-Za-z0-9_-]{6}$|^_[A-Za-z0-9]{8}$/;
async function capturePage(url, { mobile = false } = {}) {
  const name = slug(url); const dir = join(OUT, 'pages', name); mkdirSync(dir, { recursive: true });
  const ctx = await browser.newContext(mobile ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, userAgent: MOBILE_UA, locale: 'zh-CN' } : { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, userAgent: DESKTOP_UA, locale: 'zh-CN' });
  await ctx.addInitScript(INIT);
  const page = await ctx.newPage();
  const errors = [], console_ = [];
  page.on('pageerror', e => errors.push(String(e).slice(0, 300)));
  page.on('console', m => { if (['error', 'warning'].includes(m.type())) console_.push(m.type() + ': ' + m.text().slice(0, 200)); });
  page.on('response', async r => {
    const u = r.url(); if (u.startsWith('data:')) return;
    try {
      const h = r.headers(); const type = (h['content-type'] || '').split(';')[0];
      let body = null; try { body = await r.body(); } catch { }
      const rec = manifest.get(u) || { url: u, type, status: r.status(), bytes: body ? body.length : Number(h['content-length'] || 0), sha256: body ? sha(body) : null, stored: null, pages: [] };
      rec.pages.push(name);
      const isChunk = /zenless\.hoyoverse\.com\/_nuxt\/[a-z0-9]+\.js$/.test(u);
      if (body && rec.stored === null && isChunk) { const f = join(OUT, 'js', u.split('/').pop()); if (!existsSync(f)) writeFileSync(f, body); rec.stored = 'capture/js/' + u.split('/').pop(); }
      else if (body && rec.stored === null && /^(text|application\/(javascript|json|x-javascript))|svg|font|woff|octet-stream/.test(type + u) && body.length < BIG && !/\.(mp4|mp3|png|jpe?g|webp|gif)(\?|$)/i.test(u)) {
        const ext = (u.split('?')[0].match(/\.[a-z0-9]+$/i) || [''])[0] || (type.includes('json') ? '.json' : type.includes('javascript') ? '.js' : '.txt');
        const f = join(OUT, 'assets', sha(u).slice(0, 12) + ext); if (!existsSync(f)) writeFileSync(f, body); rec.stored = 'capture/assets/' + sha(u).slice(0, 12) + ext;
      } else if (body && rec.stored === null && /image\/(png|jpeg|webp|gif)/.test(type) && body.length < 150 * 1024) {
        const ext = '.' + type.split('/')[1].replace('jpeg', 'jpg'); const f = join(OUT, 'assets', sha(u).slice(0, 12) + ext); if (!existsSync(f)) writeFileSync(f, body); rec.stored = 'capture/assets/' + sha(u).slice(0, 12) + ext;
      }
      manifest.set(u, rec);
    } catch { }
  });
  const t0 = Date.now();
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 });
  let loaderGone = false;
  for (let i = 0; i < 60; i++) { await page.waitForTimeout(1000); const gone = await page.evaluate(() => { const vis = e => { if (!e) return false; const cs = getComputedStyle(e); const r = e.getBoundingClientRect(); return cs.display !== 'none' && cs.visibility !== 'hidden' && +cs.opacity > 0 && r.width > 0 && r.height > 0; }; return !vis(document.querySelector('.zzz-loading')) && !vis(document.querySelector('.loading')) && !!document.querySelector('.root, .m-root, #__nuxt > div > div'); }).catch(() => false); if (gone) { loaderGone = true; break; } }
  const loaderMs = Date.now() - t0;
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => { });
  await page.waitForTimeout(2500);
  try { await page.getByText('OK', { exact: true }).first().click({ timeout: 1500 }); } catch { }
  await page.waitForTimeout(600);
  const info = await page.evaluate((CLASS_RE_SRC) => {
    const CLASS_RE = new RegExp(CLASS_RE_SRC); const cls = e => (typeof e.className === 'string' ? e.className : (e.className && e.className.baseVal) || '').split(/\s+/).filter(Boolean);
    const state = (() => { try { const s = window.$nuxt && window.$nuxt.$store && window.$nuxt.$store.state; if (!s) return null; const shrink = (v, d) => { if (d > 3) return typeof v; if (Array.isArray(v)) return v.length ? [shrink(v[0], d + 1), `… ${v.length} items`] : []; if (v && typeof v === 'object') { const o = {}; for (const k of Object.keys(v).slice(0, 40)) o[k] = shrink(v[k], d + 1); return o; } return typeof v === 'string' ? v.slice(0, 80) : v; }; return shrink(s, 0); } catch (e) { return String(e); } })();
    return {
      title: document.title, lang: document.documentElement.lang, htmlClass: document.documentElement.className, bodyClass: document.body.className,
      route: window.$nuxt && window.$nuxt.$route ? { name: window.$nuxt.$route.name, path: window.$nuxt.$route.path, params: window.$nuxt.$route.params, query: window.$nuxt.$route.query, matched: window.$nuxt.$route.matched.map(m => m.path) } : null,
      nuxt: window.__NUXT__ ? window.__NUXT__.config : null, vuex: state, vueVersion: window.$nuxt && window.$nuxt.$root && window.$nuxt.$root.constructor && window.$nuxt.$root.constructor.version,
      rootFontSize: getComputedStyle(document.documentElement).fontSize, bodyFont: getComputedStyle(document.body).fontFamily, viewport: [innerWidth, innerHeight], scrollHeight: document.documentElement.scrollHeight,
      links: [...document.querySelectorAll('a[href]')].map(a => ({ text: (a.textContent || '').trim().slice(0, 60), href: a.href, target: a.target })),
      fonts: [...document.fonts].map(f => ({ family: f.family, status: f.status, weight: f.weight, style: f.style })).filter((f, i, a) => a.findIndex(x => x.family === f.family && x.weight === f.weight) === i),
      stylesheets: [...document.querySelectorAll('link[rel=stylesheet]')].map(l => l.href),
      styleTags: [...document.querySelectorAll('style')].map(s => ({ chars: s.textContent.length, head: s.textContent.slice(0, 60).replace(/\s+/g, ' ') })),
      scripts: [...document.querySelectorAll('script[src]')].map(s => s.src),
      sections: [...document.querySelectorAll('section.section, .m-section, #__nuxt > div > div > *')].map(e => ({ tag: e.tagName.toLowerCase(), cls: cls(e).join(' '), id: e.id, rect: e.getBoundingClientRect().toJSON() })),
      components: [...new Set([...document.querySelectorAll('[class]')].flatMap(cls).filter(c => CLASS_RE.test(c)))].sort(),
      media: [...document.querySelectorAll('video, audio')].map(m => ({ tag: m.tagName, src: (m.currentSrc || m.src || '').slice(0, 160), autoplay: m.autoplay, loop: m.loop, muted: m.muted, paused: m.paused })),
      swipers: [...document.querySelectorAll('.swiper-container')].map(s => ({ cls: cls(s).filter(c => !/^swiper-container-/.test(c)).join(' '), slides: s.querySelectorAll('.swiper-slide').length, params: s.swiper ? Object.fromEntries(['loop', 'autoplay', 'speed', 'effect', 'slidesPerView', 'spaceBetween', 'direction', 'centeredSlides', 'allowTouchMove', 'loopedSlides'].map(k => [k, s.swiper.params[k] && typeof s.swiper.params[k] === 'object' ? JSON.stringify(s.swiper.params[k]).slice(0, 80) : s.swiper.params[k]])) : null })),
      animations: [...new Set([...document.querySelectorAll('*')].map(e => { const cs = getComputedStyle(e); return cs.animationName && cs.animationName !== 'none' ? cls(e).slice(0, 2).join('.') + ' → ' + cs.animationName + ' ' + cs.animationDuration + ' ' + cs.animationIterationCount : null; }).filter(Boolean))].slice(0, 40),
    };
  }, CLASS_RE.source);
  writeFileSync(join(dir, 'dom.html'), await page.content());
  const styleTexts = await page.evaluate(() => [...document.querySelectorAll('style')].map(s => s.textContent));
  writeFileSync(join(dir, 'styles.json'), JSON.stringify(styleTexts.map(t => ({ chars: t.length, sha256: null, text: t })), null, 0));
  const vp = mobile ? 'mobile-390x844' : 'desktop-1440x900';
  await page.screenshot({ path: join(dir, vp + '.png') });
  await page.screenshot({ path: join(dir, (mobile ? 'mobile' : 'desktop') + '-full.png'), fullPage: true }).catch(() => { });
  const computed = await page.evaluate((classes) => {
    const props = ['position', 'display', 'width', 'height', 'top', 'left', 'right', 'bottom', 'z-index', 'font-family', 'font-size', 'font-weight', 'line-height', 'letter-spacing', 'text-transform', 'color', 'background-color', 'background-image', 'background-size', 'opacity', 'transform', 'transition', 'animation', 'mix-blend-mode', 'clip-path', '-webkit-mask-image', 'mask-image', 'filter', 'backdrop-filter', 'box-shadow', 'border', 'border-radius', 'padding', 'margin', 'gap', 'pointer-events', 'overflow', 'cursor', 'text-shadow', 'writing-mode', 'object-fit', 'flex', 'justify-content', 'align-items'];
    const out = {};
    for (const c of classes) { const el = document.getElementsByClassName(c)[0]; if (!el) continue; const cs = getComputedStyle(el); const o = { tag: el.tagName, rect: el.getBoundingClientRect().toJSON(), text: (el.textContent || '').trim().slice(0, 80) }; for (const p of props) { const v = cs.getPropertyValue(p); if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'static' && v !== 'visible') o[p] = v; } out[c] = o; }
    return out;
  }, info.components);
  const hover = [];
  const PROPS = ['transform', 'opacity', 'color', 'background-color', 'background-image', 'background-position', 'filter', 'width', 'height', 'clip-path', 'box-shadow', 'border-color', 'transition', 'left', 'top', 'right', 'bottom', 'visibility', 'mix-blend-mode', 'text-shadow', 'letter-spacing', 'display'];
  const snap = (e, PROPS) => { const all = {}; const walk = (n, d) => { if (d > 3) return; const s = getComputedStyle(n); const o = {}; for (const p of PROPS) o[p] = s.getPropertyValue(p); all[(typeof n.className === 'string' && n.className ? n.className.split(' ')[0] : n.tagName) + '#' + d + '#' + [...(n.parentNode?.children || [])].indexOf(n)] = o; for (const ch of n.children) walk(ch, d + 1); }; walk(e, 0); return all; };
  if (!mobile) for (const c of hoverClasses) {
    const els = await page.$$('.' + c); if (!els.length) continue;
    let el = null; for (const e of els) { const bb = await e.boundingBox(); if (bb && bb.width > 2 && bb.height > 2) { el = e; break; } } if (!el) continue;
    try {
      await el.scrollIntoViewIfNeeded({ timeout: 2000 }).catch(() => { }); await page.waitForTimeout(400);
      const before = await el.evaluate(snap, PROPS);
      await el.hover({ force: true, timeout: 3000 }); await page.waitForTimeout(700);
      const after = await el.evaluate(snap, PROPS);
      const diff = {}; for (const k of Object.keys(after)) for (const p of Object.keys(after[k])) if (before[k] && before[k][p] !== after[k][p]) { diff[k] = diff[k] || {}; diff[k][p] = { before: before[k][p], after: after[k][p] }; }
      if (Object.keys(diff).length) hover.push({ page: name, cls: c, diff, transition: before[Object.keys(before)[0]].transition });
      await page.mouse.move(5, 5); await page.waitForTimeout(400);
    } catch (e) { hover.push({ page: name, cls: c, error: String(e).slice(0, 120) }); }
  }
  const cap = await page.evaluate(() => window.__cap);
  let large = null;
  if (!mobile) { await page.setViewportSize({ width: 1920, height: 1080 }); await page.waitForTimeout(2000); await page.screenshot({ path: join(dir, 'desktop-1920x1080.png') }); large = await page.evaluate(() => ({ rootFontSize: getComputedStyle(document.documentElement).fontSize, overflow: document.documentElement.scrollWidth > innerWidth, sections: [...document.querySelectorAll('section.section, #__nuxt > div > div > *')].map(e => ({ cls: (e.className || '').toString().slice(0, 60), rect: e.getBoundingClientRect().toJSON() })) })); }
  writeFileSync(join(dir, 'page.json'), JSON.stringify({ url, mobile, capturedAt: new Date().toISOString(), loaderGone, loaderMs, errors, console: console_, ...info, large, computed }, null, 1));
  writeFileSync(join(dir, 'motion-timeline.json'), JSON.stringify(cap.mutations, null, 0));
  writeFileSync(join(dir, 'media-log.json'), JSON.stringify({ media: cap.media, audio: cap.audio }, null, 1));
  writeFileSync(join(dir, 'hover-states.json'), JSON.stringify(hover, null, 1));
  console.log('captured', name, mobile ? '[mobile]' : '', 'loader', loaderGone, loaderMs + 'ms', 'route', info.route && info.route.path, 'links', info.links.length, 'components', info.components.length, 'styles', info.styleTags.length, 'hover diffs', hover.filter(h => h.diff).length, 'mutations', cap.mutations.length, 'errors', errors.length);
  await ctx.close();
  return info;
}
const argUrls = process.argv.slice(2).filter(a => !a.startsWith('--')); const mobileArg = process.argv.includes('--mobile');
const saveManifest = () => { const prev = existsSync(join(OUT, 'network-manifest.json')) ? JSON.parse(readFileSync(join(OUT, 'network-manifest.json'), 'utf8')) : []; const merged = new Map(prev.map(r => [r.url, r])); for (const r of manifest.values()) { const o = merged.get(r.url); if (o) { o.pages = [...new Set([...o.pages, ...r.pages])]; if (!o.stored && r.stored) o.stored = r.stored; } else merged.set(r.url, { ...r, pages: [...new Set(r.pages)] }); } writeFileSync(join(OUT, 'network-manifest.json'), JSON.stringify([...merged.values()], null, 1)); return merged.size; };
if (argUrls.length) { for (const u of argUrls) await capturePage(u, { mobile: mobileArg }); console.log('manifest entries', saveManifest()); await browser.close(); process.exit(0); }
const home = await capturePage(START);
// depth 1: same-origin links from the home DOM, the header routes, the content entries the sections link to
const found = new Set([`/${LANG}/character`, `/${LANG}/video`, `/${LANG}/news`, `/${LANG}/world`, `/${LANG}/company/privacy`, `/${LANG}/company/terms`, '/redemption'].map(p => ORIGIN + p));
for (const l of home.links) { try { const u = new URL(l.href); if (u.origin === ORIGIN && !/^\/m\//.test(u.pathname)) found.add(u.origin + u.pathname.replace(/\/$/, '') + (u.search && /category=/.test(u.search) ? u.search : '')); } catch { } }
const external = home.links.filter(l => { try { return new URL(l.href).origin !== ORIGIN; } catch { return false; } });
// the world entries (cards of the world page open /world/<iInfoId>)
const worldList = await fetch(`${CMS}/getContentList?iPageSize=10&iPage=1&sLangKey=${LANG}&iChanId=290`).then(r => r.json()).catch(() => null);
const worldIds = worldList && worldList.data ? worldList.data.list.map(i => i.iInfoId) : [];
for (const id of worldIds) found.add(`${ORIGIN}/${LANG}/world/${id}`);
writeFileSync(join(OUT, 'depth1-links.json'), JSON.stringify({ sameOrigin: [...found], external, worldIds }, null, 1));
for (const u of found) if (u !== START && u !== START + '/' && !/\/payment/.test(u)) await capturePage(u);
// the mobile tree (the site sends phone user agents to /m/<lang>/…)
const firstArticle = [...found].map(u => (u.match(/\/news\/(\d+)$/) || [])[1]).filter(Boolean)[0];
const mobileRoutes = ['main', 'character', 'video', 'news', 'world', 'company/privacy', 'company/terms'].map(p => `${ORIGIN}/m/${LANG}/${p}`).concat(firstArticle ? [`${ORIGIN}/m/${LANG}/news/${firstArticle}`] : [], worldIds[0] ? [`${ORIGIN}/m/${LANG}/world/${worldIds[0]}`] : []);
for (const u of mobileRoutes) await capturePage(u, { mobile: true });
console.log('manifest entries', saveManifest(), 'stored', [...manifest.values()].filter(r => r.stored).length);
await browser.close();
