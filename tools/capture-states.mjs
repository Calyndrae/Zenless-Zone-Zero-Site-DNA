// Capture interaction states the plain crawl cannot reach: 3D toggle (TransparentVideo), expanded
// navigation rail, share list, language switcher, user modal, mobile header menu, dropdown open,
// operator detail panel, news tabs, section navigation via wheel. Saves markup + screenshots.
import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname; const OUT = join(root, 'capture/states'); mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ args: ['--mute-audio', '--autoplay-policy=no-user-gesture-required'] });
const report = {};
async function fresh(url, vp = { width: 1440, height: 900 }) { const ctx = await browser.newContext({ viewport: vp }); const page = await ctx.newPage(); await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 }); for (let i = 0; i < 60; i++) { await page.waitForTimeout(1000); if (!(await page.$('[class*="Loading_container"]'))) break; } await page.waitForTimeout(2500); await dismissOverlays(page); return { ctx, page }; }
async function dismissOverlays(page) {
  // The Gryphline web SDK injects a consent banner with hashed (non CSS-module) classes that covers the page.
  for (let i = 0; i < 3; i++) {
    const clicked = await page.evaluate(() => {
      const isSite = el => /__[A-Za-z0-9_]{5}(\s|$)/.test(el.className || '') || el.closest('[class*="__"]');
      const cands = [...document.querySelectorAll('button, a, div, span')].filter(el => /^(ok|accept|accept all|agree|i agree|got it|confirm|allow|close)$/i.test((el.textContent || '').trim()) && !isSite(el));
      for (const el of cands) { const r = el.getBoundingClientRect(); if (r.width > 0 && r.height > 0) { el.click(); return (el.textContent || '').trim(); } }
      return null;
    }).catch(() => null);
    await page.waitForTimeout(700);
    const blocking = await page.evaluate(() => { const els = [...document.querySelectorAll('body *')].filter(el => { const cs = getComputedStyle(el); if (cs.position !== 'fixed' || cs.pointerEvents === 'none' || cs.display === 'none' || cs.visibility === 'hidden') return false; const r = el.getBoundingClientRect(); return r.width >= innerWidth * 0.9 && r.height >= innerHeight * 0.9 && !/__[A-Za-z0-9_]{5}(\s|$)/.test(el.className || '') && !el.closest('[class*="_sectionContainer__"], [class*="SectionViewer_"], [class*="Header_"]'); }); return els.map(e => e.className).slice(0, 5); }).catch(() => []);
    if (!clicked && !blocking.length) break;
    if (!clicked && blocking.length) { await page.evaluate(() => { for (const el of document.querySelectorAll('body *')) { const cs = getComputedStyle(el); const r = el.getBoundingClientRect(); if (cs.position === 'fixed' && r.width >= innerWidth * 0.9 && r.height >= innerHeight * 0.9 && !/__[A-Za-z0-9_]{5}(\s|$)/.test(el.className || '') && !el.closest('[class*="_sectionContainer__"], [class*="SectionViewer_"], [class*="Header_"]')) el.style.pointerEvents = 'none'; } }); report.overlay_neutralised = blocking; break; }
    report.overlay_dismissed = clicked;
  }
}
const outer = (page, sel) => page.$eval(sel, e => e.outerHTML).catch(() => null);
const shot = (page, name, sel) => (sel ? page.locator(sel).first().screenshot({ path: join(OUT, name + '.png'), timeout: 8000 }) : page.screenshot({ path: join(OUT, name + '.png') })).catch(e => report[name + '_shot_error'] = String(e).slice(0, 100));
try {
  // HOME states
  let { ctx, page } = await fresh('https://endfield.gryphline.com/en-us');
  report.header_closed = { markup: await outer(page, '.Header_pcHeaderContainer__Sy_8l') }; await shot(page, 'header-rail', '.Header_pcHeaderContainer__Sy_8l');
  await page.hover('.Header_pcHeaderContainer__Sy_8l'); await page.waitForTimeout(900);
  report.header_hovered = { markup: await outer(page, '.Header_pcHeaderContainer__Sy_8l'), rect: await page.$eval('.Header_pcHeaderContainer__Sy_8l', e => e.getBoundingClientRect().toJSON()) }; await shot(page, 'header-rail-hover', '.Header_pcHeaderContainer__Sy_8l');
  await page.mouse.move(700, 450); await page.waitForTimeout(800);
  // share button
  await page.waitForTimeout(2500); await dismissOverlays(page);
  const share = page.locator('.Header_buttonShare__ml1S_').first(); if (await share.count()) { const bb = await share.boundingBox(); if (bb) { await page.mouse.move(bb.x + bb.width / 2, bb.y + bb.height / 2); } await page.waitForTimeout(700); report.share_open = { markup: await outer(page, '.Header_shareList__fxEjQ, [class*="Header_shareList"]') }; await shot(page, 'header-share-open', '.Header_pcHeaderContainer__Sy_8l'); await page.mouse.move(700, 450); await page.waitForTimeout(500); }
  // sound toggle state
  report.sound_button = { markup: await outer(page, '[class*="Header_buttonSound"], [class*="Header_sound"], [class*="Header_bgm"], [class*="Header_music"]') };
  // operator section: go to section 2 via wheel
  await page.mouse.move(720, 450); await page.mouse.wheel(0, 600); await page.waitForTimeout(6500);
  report.operator_section = { markup: await outer(page, '.__02-Operator_sectionContainer__D66c4') }; await shot(page, 'operator-stage');
  const toggle = page.locator('[class*="__02-Operator_switcher3d"] [class*="__02-Operator_switchItem"]').last();
  report.switcher3d_markup = await outer(page, '[class*="__02-Operator_switcher3d"]');
  const toggleCount = await toggle.count(); report.toggle_selector_hits = toggleCount;
  if (toggleCount) { await toggle.click({ force: true }); await page.waitForTimeout(4000); report.transparent_video = { markup: await outer(page, '[class*="TransparentVideo_container"]'), canvasParent: await page.$$eval('canvas', cs => cs.map(c => ({ w: c.width, h: c.height, cls: c.getAttribute('class'), parent: c.parentElement ? c.parentElement.outerHTML.slice(0, 1500) : null, parentClass: c.parentElement ? c.parentElement.getAttribute('class') : null }))), switcher: await outer(page, '[class*="__02-Operator_operatorSwitcher"]') }; await shot(page, 'operator-stage-3d'); }
  else { const classes = await page.$eval('.__02-Operator_sectionContainer__D66c4', e => [...new Set([...e.querySelectorAll('[class]')].flatMap(x => (x.getAttribute('class') || '').split(' ')))].filter(c => /Operator/.test(c))); report.operator_classes = classes; }
  // avatar click (char_click sound) + All operators button markup
  report.list_button = { markup: await outer(page, '.__02-Operator_listButton__jKExN') };
  const avatars = page.locator('[class*="__02-Operator_avatarItem"], [class*="__02-Operator_avatar__"], [class*="__02-Operator_portraitItem"], [class*="__02-Operator_listItem"]'); report.avatar_count = await avatars.count();
  if (await avatars.count() > 1) { await avatars.nth(1).click({ force: true }); await page.waitForTimeout(3500); await shot(page, 'operator-stage-second-avatar'); }
  // continue to further sections
  for (const [i, name, sel] of [[1, 'information', '.__04-Information_sectionContainer__OXMtV'], [2, 'calendar', '.__09-Calendar_sectionContainer__MrVnT'], [3, 'gameplay', '.__05-Gameplay_sectionContainer__LN64O'], [4, 'aic', '.__08-AIC_sectionContainer__XPJyn'], [5, 'notice', '.__06-Notice_sectionContainer__2x0Mi']]) { await page.mouse.wheel(0, 600); await page.waitForTimeout(6000); await shot(page, 'section-' + name); report['section_' + name] = { markup: await outer(page, sel), sections: await page.$$eval('[class*="sectionContainer"]', es => es.map(e => ({ cls: e.className.split(' ')[0], top: e.getBoundingClientRect().top, h: e.getBoundingClientRect().height }))) }; }
  report.lore_divider = { markup: await outer(page, '[class*="__02-Operator_sectionDivider"]'), lore: await outer(page, '[class*="__03-Lore_sectionContainer"], [class*="__03-Lore_container"]') };
  report.section_titles = await page.$$eval('[class*="SectionTitle_sectionTitle"]', es => es.map(e => e.outerHTML));
  report.gameplay_album = { markup: await outer(page, '[class*="GameplayAlbum_gameplayAlbum"]') };
  report.notice_carousel = { markup: await outer(page, '.__06-Notice_sectionContainer__2x0Mi') };
  report.downloader = { markup: await outer(page, '[class*="downloader_downloadContainer"]') };
  report.footer_home = { markup: await outer(page, '.footer_footer__6jTqE') }; await shot(page, 'footer', '.footer_footer__6jTqE');
  // language switcher in footer
  const langBtn = page.locator('[class*="footer_languageItem"]').first(); if (await langBtn.count()) { await langBtn.click({ force: true }); await page.waitForTimeout(600); report.footer_language_open = { markup: await outer(page, '.footer_footer__6jTqE') }; await shot(page, 'footer-language-open', '.footer_footer__6jTqE'); }
  // user modal
  const userBtn = page.locator('[class*="Header_buttonUser"], [class*="Header_user"]').first(); if (await userBtn.count()) { await userBtn.click({ force: true }); await page.waitForTimeout(1200); report.user_modal = { markup: await outer(page, '[class*="UserModal_userModal"], [class*="ModalFrame_modalFrame"]') }; await shot(page, 'user-modal'); await page.keyboard.press('Escape'); await page.waitForTimeout(500); }
  await ctx.close();
  // MOBILE home: header menu
  ({ ctx, page } = await fresh('https://endfield.gryphline.com/en-us', { width: 390, height: 844 }));
  report.mobile_header = { markup: await outer(page, '[class*="Header_h5HeaderContainer"], [class*="Header_h5"]') }; await shot(page, 'mobile-home');
  const menu = page.locator('[class*="Header_menuIcon"]').first(); if (await menu.count()) { await menu.click({ force: true }); await page.waitForTimeout(900); report.mobile_menu_open = { markup: await outer(page, '[class*="Header_h5Menu"]'), active: await page.$eval('[class*="Header_h5Menu"]', e => e.className).catch(() => null) }; await shot(page, 'mobile-menu-open'); }
  report.mobile_operator = { markup: await outer(page, '.__02-Operator_sectionContainer__D66c4') };
  await ctx.close();
  // OPERATOR page states
  ({ ctx, page } = await fresh('https://endfield.gryphline.com/en-us/operator'));
  const trig = page.locator('.Dropdown_trigger__mA0mP').first(); await trig.click(); await page.waitForTimeout(500);
  report.dropdown_open = { markup: await outer(page, '.Dropdown_root__O4Qqi') }; await shot(page, 'dropdown-open', '.__12-OperatorList_dropdowns__xnSNd');
  await page.locator('.Dropdown_option__wj8RQ, [class*="Dropdown_option"]').nth(2).click({ force: true }).catch(() => { }); await page.waitForTimeout(800);
  report.dropdown_selected = { markup: await outer(page, '.__12-OperatorList_dropdowns__xnSNd'), cards: await page.$$eval('.OperatorItem_operatorItem__gPezu', es => es.length) }; await shot(page, 'operator-list-filtered');
  await page.locator('.OperatorItem_operatorItem__gPezu').first().click({ force: true }); await page.waitForTimeout(1500);
  report.operator_detail = { markup: await outer(page, '.__12-OperatorList_detail__l3dwR'), classes: await page.$eval('.__12-OperatorList_sectionContainer__KC5gP', e => [...new Set([...e.querySelectorAll('[class]')].flatMap(x => (x.getAttribute('class') || '').split(' ')))].filter(c => /OperatorList|Operator_/.test(c))) }; await shot(page, 'operator-detail');
  await ctx.close();
  // NEWS page tabs
  ({ ctx, page } = await fresh('https://endfield.gryphline.com/en-us/news'));
  report.news_tabs = { markup: await outer(page, '[class*="SubpageTab_subpageTab"]'), header: await outer(page, '[class*="SubpageHeader_subpageHeader"]') };
  const tabs = page.locator('[class*="SubpageTab_tab__"]'); if (await tabs.count() > 1) { await tabs.nth(1).click({ force: true }); await page.waitForTimeout(1500); report.news_tab2 = { markup: await outer(page, '.__10-NoticeList_sectionContainer__tmyCM') }; await shot(page, 'news-tab2'); }
  report.news_item = { markup: await outer(page, '[class*="__10-NoticeList_item"], [class*="__10-NoticeList_noticeItem"]') }; await shot(page, 'news-list');
  await ctx.close();
  // ARTICLE: scroll to show back-to-top
  ({ ctx, page } = await fresh('https://endfield.gryphline.com/en-us/news/7013'));
  await page.evaluate(() => document.documentElement.scrollTo(0, 1200)); await page.waitForTimeout(900);
  report.back_to_top = { markup: await outer(page, '.__20-NoticeDetail_backButton__pWmC1'), opacity: await page.$eval('.__20-NoticeDetail_backButton__pWmC1', e => getComputedStyle(e).opacity) }; await shot(page, 'article-back-to-top');
  await ctx.close();
} catch (e) { report.error = String(e).slice(0, 400); console.log('ERR', e); }
writeFileSync(join(OUT, 'states.json'), JSON.stringify(report, null, 1));
console.log(Object.entries(report).map(([k, v]) => `${k}: ${v && v.markup ? v.markup.length + ' chars' : JSON.stringify(v).slice(0, 80)}`).join('\n'));
await browser.close();
