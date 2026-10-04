// Headless verification of the portfolio example, in the spirit of tools/verify.mjs: serves the repository like the
// live site (repository at the server root — the site's stylesheets reference /_nuxt/img/… and /_nuxt/fonts/… by absolute
// path), opens the page at the viewports the handbook measured (chapter 04 / 40), reads the root font-size, the chrome
// boxes, the hover states and the sidebar behaviour back, records every failed or 4xx request, and writes
// examples/portfolio/verification/ (report.json + screenshots).
//
//   node examples/portfolio/tools/verify.mjs
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, '..', '..', '..');
const require = createRequire(import.meta.url);
function loadPlaywright() {   // tools/node_modules (cd tools && npm install --omit=optional), else a global installation
  for (const candidate of ['playwright', join(repo, 'tools', 'node_modules', 'playwright'), '/opt/node22/lib/node_modules/playwright', '/usr/lib/node_modules/playwright', '/usr/local/lib/node_modules/playwright']) {
    try { return require(candidate); } catch (e) { /* try the next location */ }
  }
  throw new Error('playwright not found: run `cd tools && npm install --omit=optional` first');
}
const { chromium } = loadPlaywright();
const outDir = join(here, '..', 'verification');
mkdirSync(outDir, { recursive: true });
const port = 8799;
const server = spawn(process.execPath, [join(repo, 'tools', 'serve.mjs'), String(port)], { stdio: 'ignore' });
const base = `http://127.0.0.1:${port}/examples/portfolio/?lang=zh-cn`;
for (let i = 0; i < 50; i++) { try { if ((await fetch(base)).ok) break; } catch (e) { /* not up yet */ } await new Promise(r => setTimeout(r, 100)); }

const report = { date: new Date().toISOString(), base, desktop: {}, phone: {} };
const browser = await chromium.launch();
const settle = async page => {
  await page.waitForFunction(() => window.portfolio && !window.portfolio.store.state.isLoading, null, { timeout: 15000 });
  await page.waitForSelector('.loading', { state: 'detached', timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(300);
};
const collectErrors = page => {
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('requestfailed', r => errors.push('request failed: ' + r.url()));
  page.on('response', r => { if (r.status() >= 400) errors.push('http ' + r.status() + ': ' + r.url()); });
  return errors;
};
const box = sel => { const el = document.querySelector(sel); if (!el) return null; const b = el.getBoundingClientRect(); return { x: +b.x.toFixed(2), y: +b.y.toFixed(2), w: +b.width.toFixed(2), h: +b.height.toFixed(2) }; };
const cs = (sel, props) => { const el = document.querySelector(sel); if (!el) return null; const s = getComputedStyle(el); return Object.fromEntries(props.map(p => [p, s.getPropertyValue(p)])); };

for (const [w, h] of [[2560, 1440], [1920, 1080], [1440, 900], [1280, 720]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  const errors = collectErrors(page);
  await page.goto(base, { waitUntil: 'load' });
  await settle(page);
  const r = await page.evaluate(([boxSrc, csSrc]) => {
    const box = eval(boxSrc), cs = eval(csSrc);
    return {
      fontSize: getComputedStyle(document.documentElement).fontSize,
      formula: (100 * Math.min(2560, Math.max(1440, document.documentElement.clientWidth)) / 2560) + 'px',
      htmlClass: document.documentElement.className, htmlAttrs: { lang: document.documentElement.lang, mi18n: document.documentElement.getAttribute('mi18n-lang'), hyvDevice: document.documentElement.getAttribute('hyv-device') },
      horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      styleSheetsWithRules: Array.from(document.styleSheets).filter(s => { try { return s.cssRules.length > 0; } catch (e) { return false; } }).length,
      header: box('.header'), headerWrapper: box('.header-wrapper'), logo: box('.header__logo'), sidebar: box('.sidebar'),
      navLabel: cs('.header__navbar-link .nav-content span', ['font-size', 'color', 'font-family']),
      sidebarNum: cs('.sidebar__pagers-num--active', ['font-size', 'color', 'font-family']),
      kvBg: box('.home-kv__bg img'), downloadLayout: box('.sea-download-layout'), downloadItem: box('.sea-download-layout-download__item'),
      sections: Array.from(document.querySelectorAll('.section')).map(s => ({ name: s.className.replace('section ', ''), top: s.offsetTop, height: s.offsetHeight })),
      pageHeight: document.documentElement.scrollHeight,
      footerSocialbar: box('.footer__socialbar'), backTop: box('.footer .backTop'), crm: box('.footer-crm'), hyFooter: box('.hy-footer-1DmxLu'),
      newsSwiper: { slides: document.querySelectorAll('.home-news__banner-list .swiper-slide').length, bullets: document.querySelectorAll('.home-news__pagination .swiper-pagination-bullet').length },
      worldSlides: document.querySelectorAll('.home-world__banner-list .swiper-slide').length, featureSlides: document.querySelectorAll('.home-feature__list .swiper-slide').length,
      bgm: window.portfolio.store.state.bgmMuted, lang: document.documentElement.lang, fontVar: getComputedStyle(document.documentElement).getPropertyValue('--mi18n-font-css').trim(),
    };
  }, [box.toString(), cs.toString()]);
  // hover states (chapter 30): nav entry → white pill, ink text, scale 1.12; more-btn → inversion
  await page.hover('.header__navbar-link[data-nav="character"] .nav-content'); await page.waitForTimeout(650);
  r.hoverNav = await page.evaluate(() => { const s = getComputedStyle(document.querySelector('.header__navbar-link[data-nav="character"] .nav-content')); return { transform: s.transform, backgroundColor: s.backgroundColor, color: s.color }; });
  await page.hover('.home-character .more-btn'); await page.waitForTimeout(450);
  r.hoverMoreBtn = await page.evaluate(() => { const s = getComputedStyle(document.querySelector('.home-character .more-btn')); return { backgroundColor: s.backgroundColor, color: s.color, borderColor: s.borderColor }; });
  await page.mouse.move(5, 5);
  // sidebar: the arrows step the pager (the nav box lies over the numbers, as on the site); from the top, next × 2 → section 3 top, store.homeSection video, number 03 (chapter 12)
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(700);
  await page.click('.sidebar__nav-next'); await page.waitForTimeout(120); await page.click('.sidebar__nav-next'); await page.waitForTimeout(1600);
  r.sidebarClick03 = await page.evaluate(() => ({ scrollY: Math.round(scrollY), homeSection: window.portfolio.store.state.homeSection, active: document.querySelector('.sidebar__pagers-num--active').textContent, hash: location.hash, videoSectionTop: document.querySelector('.section-video').offsetTop, pagerTransform: document.querySelector('.sidebar__pagers').style.transform }));
  await page.evaluate(() => scrollTo(0, 2500)); await page.waitForTimeout(500);
  r.scrollTo2500 = await page.evaluate(() => ({ homeSection: window.portfolio.store.state.homeSection, active: document.querySelector('.sidebar__pagers-num--active').textContent }));
  await page.click('.home-character__nav-item[data-index="3"]'); await page.waitForTimeout(500);
  r.worksNavClick4 = await page.evaluate(() => ({ activeIndex: document.querySelector('.home-character__list .swiper-slide-active').dataset.en, enName: document.querySelector('.home-character__anim .en-name').textContent, thumbActive: document.querySelector('.home-character__nav-item.swiper-slide-thumb-active').dataset.index }));
  await page.click('.home-video__nav-item[data-index="2"]'); await page.waitForTimeout(500);
  r.videoNavClick3 = await page.evaluate(() => ({ title: document.querySelector('.home-video__summary-title').textContent, active: document.querySelector('.home-video__nav-item.is-active').dataset.index, track: document.querySelector('.home-video__nav-track').style.transform }));
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(900);
  await page.screenshot({ path: join(outDir, `desktop-${w}x${h}.png`) });
  if (w === 1440) {
    await page.screenshot({ path: join(outDir, 'desktop-1440-full.png'), fullPage: true });
    for (const [name, sel] of [['character', '.section-character'], ['video', '.section-video'], ['news', '.section-news'], ['world', '.section-world'], ['feature', '.section-feature'], ['footer', '.footer']]) {
      await page.$eval(sel, el => el.scrollIntoView({ block: 'start' })); await page.waitForTimeout(700);
      await page.screenshot({ path: join(outDir, `desktop-1440-${name}.png`) });
    }
    await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(300);
  }
  r.errors = errors;
  report.desktop[`${w}x${h}`] = r;
  await page.close();
}

const iphone = { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1', deviceScaleFactor: 2, isMobile: true, hasTouch: true };
for (const [w, h] of [[390, 844], [375, 667]]) {
  const context = await browser.newContext(Object.assign({ viewport: { width: w, height: h } }, iphone));
  const page = await context.newPage();
  const errors = collectErrors(page);
  await page.goto(base, { waitUntil: 'load' });
  await settle(page);
  const r = await page.evaluate((boxSrc) => {
    const box = eval(boxSrc);
    return {
      fontSize: getComputedStyle(document.documentElement).fontSize, formula: (100 * document.documentElement.clientWidth / 750) + 'px',
      rootClass: document.documentElement.className, hyvDevice: document.documentElement.getAttribute('hyv-device'), horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      mHeader: box('.m-header'), menuBtn: box('.m-header__menu-btn'), preregister: box('.m-preregister-container'), kv: box('.m-home-kv__bg img'),
      sections: Array.from(document.querySelectorAll('.section')).map(s => ({ name: s.className.replace(/^section ?/, '') || s.firstElementChild.className.split(' ')[0], top: s.offsetTop, height: s.offsetHeight })),
      pageHeight: document.documentElement.scrollHeight, loadMoreItems: document.querySelectorAll('.m-news-list__item').length,
    };
  }, box.toString());
  await page.tap('.m-header__menu-btn'); await page.waitForTimeout(300);
  r.menuOpen = await page.evaluate(() => ({ open: getComputedStyle(document.querySelector('.m-header__menu')).display !== 'none', bodyOverflow: document.body.style.overflow, links: Array.from(document.querySelectorAll('.m-header__menu-link')).map(l => l.textContent.trim()) }));
  await page.screenshot({ path: join(outDir, `phone-${w}x${h}-menu.png`) });
  await page.tap('.m-header__menu-close'); await page.waitForTimeout(300);
  await page.$eval('.load-more', el => el.scrollIntoView({ block: 'center' })); await page.waitForTimeout(300);
  await page.tap('.load-more'); await page.waitForTimeout(300);
  r.afterLoadMore = await page.evaluate(() => document.querySelectorAll('.m-news-list__item').length);
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(500);
  await page.screenshot({ path: join(outDir, `phone-${w}x${h}.png`) });
  if (w === 390) {
    await page.screenshot({ path: join(outDir, 'phone-390-full.png'), fullPage: true });
    for (const [name, sel] of [['character', '.m-home-character'], ['video', '.m-home-video'], ['news', '.m-home-news'], ['world', '.m-home-world'], ['feature', '.m-home-feature'], ['list', '.m-news'], ['footer', '.footer']]) {
      await page.$eval(sel, el => el.scrollIntoView({ block: 'start' })); await page.waitForTimeout(700);
      await page.screenshot({ path: join(outDir, `phone-390-${name}.png`) });
    }
  }
  r.errors = errors;
  report.phone[`${w}x${h}`] = r;
  await context.close();
}

// the English dictionary, switched through the corporate footer's language picker (chapter 35)
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = collectErrors(page);
  await page.goto(base, { waitUntil: 'load' });
  await settle(page);
  await page.$eval('[data-action="toggle-locale"]', el => el.scrollIntoView({ block: 'center' })); await page.waitForTimeout(300);
  await page.click('[data-action="toggle-locale"]'); await page.waitForTimeout(200);
  report.localeList = await page.evaluate(() => ({ visible: !document.querySelector('.option-wrapper-2bMXEX').classList.contains('invisible-FbKElL'), options: Array.from(document.querySelectorAll('[data-action="set-locale"]')).map(o => o.textContent.trim()) }));
  await page.click('[data-action="set-locale"][data-lang="en-us"]');
  await page.waitForFunction(() => document.documentElement.lang === 'en-us' && document.querySelector('.header__navbar-link[data-nav="character"] span').textContent === 'Works', null, { timeout: 5000 });
  await page.waitForTimeout(600);
  report.localeSwitch = { lang: await page.evaluate(() => document.documentElement.lang), title: await page.title(), nav: await page.evaluate(() => Array.from(document.querySelectorAll('.header__navbar-link span')).map(s => s.textContent.trim())), fontVar: await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--mi18n-font-css').trim()), errors };
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(600);
  await page.screenshot({ path: join(outDir, 'desktop-1440x900-en-us.png') });
  await page.close();
}
// the overlay player and the keyboard path of the controls
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = collectErrors(page);
  await page.goto(base, { waitUntil: 'load' });
  await settle(page);
  await page.focus('.home-kv__play'); await page.keyboard.press('Enter'); await page.waitForTimeout(300);
  report.dialog = { openByKeyboard: await page.evaluate(() => getComputedStyle(document.querySelector('.video-dialog')).display !== 'none'), bodyOverflow: await page.evaluate(() => document.body.style.overflow) };
  await page.screenshot({ path: join(outDir, 'desktop-1440x900-dialog.png') });
  await page.keyboard.press('Escape'); await page.waitForTimeout(200);
  report.dialog.closedByEscape = await page.evaluate(() => getComputedStyle(document.querySelector('.video-dialog')).display === 'none');
  report.dialog.errors = errors;
  await page.close();
}
await browser.close();
server.kill();
writeFileSync(join(outDir, 'report.json'), JSON.stringify(report, null, 1));
console.log(JSON.stringify(report, null, 1));
