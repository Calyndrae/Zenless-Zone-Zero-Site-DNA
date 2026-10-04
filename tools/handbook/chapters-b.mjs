// Chapters B: the desktop chrome and the home page section by section (header, loader, hero, sidebar, character,
// video, news, world, feature, footer), with verbatim specimens, shipped CSS, computed styles and live measurements.
import { readableLink, observedHtml, measuredHtml, inferredHtml, ruleHtml, data, p, t, h, sub, br, a, img, esc, observed, measured, inferred, rule, table, code, cssBlock, specimen, extractAll, pageDom, shotIf, rulesFor, hoverFor, comp, compExists, computedOf, excerpt, interactions, rem, cssText } from './lib.mjs';
const I = interactions || {}; const main = data.pages['zh-cn_main']; const dom = pageDom('zh-cn_main');
const sw = cls => (main.swipers || []).find(s => s.cls.includes(cls));
const swDesc = s => s ? `${s.slides} slides, effect ${s.params.effect}, slidesPerView ${s.params.slidesPerView}, loop ${s.params.loop}, speed ${s.params.speed} ms${s.params.autoplay && /enabled":true/.test(s.params.autoplay) ? ', autoplay' : ', no autoplay'}` : 'not found';
const c = (cls, props) => { const o = computedOf('zh-cn_main', cls); return o ? props.map(k => `${k} ${o[k] || '—'}`).join(', ') : '—'; };
const hoverRows = cls => hoverFor(cls).flatMap(hh => hh.changes.slice(0, 4).map(ch => [esc(hh.cls), esc(ch.node.split('#')[0]), esc(Object.entries(ch.props).map(([k, v]) => `${k}: ${String(v.before).slice(0, 40)} → ${String(v.after).slice(0, 40)}`).join('; ').slice(0, 220)), esc((hh.transition || '').slice(0, 60))]));
const spec = (label, cls, note, idx = 0) => { const m = extractAll(dom, cls, idx + 1)[idx]; return m ? specimen(label, m, note) : p('<em>No settled markup for ' + esc(cls) + ' in the capture.</em>'); };
export const chapters = [
  { slug: 'header', title: 'Header: logo, navigation, more-menu, download, music, share, account', html() {
    const out = []; const H = I.header || {};
    out.push(observedHtml(`The header is the layout component header-bar (module 348, ${readableLink('348', 'readable source')}): a fixed bar 1rem high across the full width, with a 19.2rem inner wrapper that holds the logo (two images, logo-big and logo-sm, swapped with the logoBig/logoSmall transitions as the page scrolls), the left navigation (ltNav from getLtNavs: 首页, 角色介绍, 影像资料, 新闻资讯, 设定档案, 更多, 立即下载) and the right tools (rtNav: the background-music toggle m-audio-player, the share button, the account icon). The nav items are divs with click handlers (handleNavClick → $router.push), not links, so they do not appear in the page's anchor list.`));
    out.push(measured(`At 1440 × 900 the header box is 1440 × 56 px; the inner wrapper is 1080 px; nav labels are ${esc(c('nav-content', ['font-size', 'color', 'font-family']))}; the logo image is 129 × 30 px; the BGM, share and login icons are 33 × 33 px at x = 1080, 1142 and 1196.`));
    out.push(shotIf('capture/pages/zh-cn_main/desktop-1440x900.png', 'home page at 1440 × 900 with the header, hero and sidebar'));
    out.push(spec('header inner wrapper (nav + tools) — the bar itself is position:fixed, so its inner wrapper is embedded', 'header-wrapper', 'The nav-content divs are the clickable entries; the sub-menu of 更多 is in the DOM at rest and shown on hover.'));
    if (H.navClicks) out.push(table(['Entry', 'Route after click', 'Click → route change', 'Requests the new page made'], H.navClicks.map(x => [esc(x.text), esc(x.routeAfter), x.routeChangedAfterMs + ' ms', esc(x.apiCalls.join(' | ').slice(0, 160))])));
    if (H.moreHover) out.push(measured(`Hovering 更多: the sub-menu (.nav-content-sub) becomes ${esc(H.moreHover.sub ? H.moreHover.sub.display : 'visible')} with ${H.moreHover.subItems.length} entries (${H.moreHover.subItems.map(s => s.text).join(', ')}); 兑换码 and 充值 are plain links to /redemption and /payment, 攻略 opens the HoYoLAB guide.`));
    if (H.bgm) out.push(measured(`The music toggle: store.bgmMuted was ${H.bgm.stateBefore} before the click and ${H.bgm.stateAfterClick} after it in headless Chromium (no audio element exists in the DOM; the player is the @me/audio library behind m-audio-player, and the muted choice is persisted in localStorage as ${esc((H.bgm.localStorageKeys || [])[0] || 'napSeaBgAudioOfficial')}). The icon class is ${esc(H.bgm.iconClass)} with the heartbeat animation while active. The track itself is ${esc((data.manifest.find(m => /\.mp3/.test(m.url)) || {}).url || 'the mp3 on webstatic.hoyoverse.com')} (3.4 MB).`));
    if (H.shareHover) out.push(measured(`Hovering the share icon shows .share__panel (display ${esc(H.shareHover.panel && H.shareHover.panel.display)}, height ${esc(H.shareHover.panel && H.shareHover.panel.height)}) with the social items of the footer SDK (${H.shareHover.items.map(i => i.cls.replace('me-media-icon-item media-icon-', '')).join(', ')}).`));
    if (H.loginClick) out.push(measuredHtml(`Clicking the account icon opens the HoYoverse account SDK in an iframe: ${esc((H.loginClick.popups[0] || {}).src || '')}. ${shotIf('capture/interactions/header-login.png', 'account login iframe after clicking the user icon') ? '' : ''}`));
    out.push(shotIf('capture/interactions/header-login.png', 'account login iframe after clicking the user icon'));
    const hv = hoverRows('nav-content').concat(hoverRows('header'), hoverRows('share'), hoverRows('m-audio-player')); if (hv.length) out.push(table(['Hovered class', 'Node', 'Computed change', 'Transition'], hv));
    out.push(sub('Shipped CSS (module 673 header, 670 share)'));
    out.push(cssBlock(rulesFor('header').concat(rulesFor('nav-content'), rulesFor('share'), rulesFor('login')), { max: 70 }));
    out.push(excerpt('348', 'getLtNavs', 30));
    out.push(rule('A fixed 1rem bar with a centred 19.2rem wrapper; nav entries as router pushes with an active state derived from the route name; the more-menu rendered in the DOM and revealed on hover; a music toggle that persists its state; share and account as SDK-driven overlays.'));
    return out.join('');
  } },
  { slug: 'loading', title: 'First-load screen: the shell loader and the Vue loader', html() {
    const out = []; const L = I.loader || {};
    out.push(observed('Two loaders cover the first paint. The shell ships .zzz-loading inline (position:fixed, full viewport, white, z-index 997) with .zzz-loading__anim at the bottom right (298 × 84 px sprite from fastcdn.hoyoverse.com) — it exists before any JavaScript runs. When Vue mounts, the loading component (module 250, scoped styles in module 668) takes over: .loading with .loading__field and .loading__anim running the loadingLoop keyframes (0.5 s, infinite) until the page component clears store.isLoading.'));
    if (L.frames) out.push(table(['Time from navigation', 'Shell loader', 'Vue loader', 'App root mounted', 'Frame'], L.frames.map(f => [f.t + ' ms', f.state.zzz ? 'visible' : '—', f.state.loading ? 'visible (' + f.state.anim + ')' : '—', f.state.root ? 'yes' : 'no', f.file ? a(f.file.split('/').pop(), '/' + f.file) : (f.done ? 'done' : '')])));
    for (const f of (L.frames || []).filter(f => f.file).slice(0, 4)) out.push(shotIf(f.file, `loader at ${f.t} ms`));
    out.push(measured(`Loader durations on the captured pages: ${Object.entries(data.pages).slice(0, 12).map(([k, v]) => `${v.route ? v.route.path : k} ${v.loaderMs} ms`).join(', ')}.`));
    out.push(code(cssText(668).slice(0, 1200), { max: 20 }));
    out.push(rule('Ship a static loader in the HTML so the viewport is never blank, then hand over to a component loader bound to a store flag that each page clears when its data has arrived.'));
    return out.join('');
  } },
  { slug: 'home-kv', title: 'Home hero (home-kv): key visual, play button, download panel', html() {
    const out = []; const E = I.hero || {};
    out.push(observed('The first section (section-index) is the key visual: home-kv__bg (the KV image from CMS channel 285), home-kv__slogan, home-kv__play (a 45 × 45 px play button that opens the video dialog with the PV) and home-kv__download, the download block that the HoYoverse download SDK (window.MeSeaDownload.DownloadCore, type "fab") fills with the platform buttons (sea-download-layout: PS5, Xbox, App Store, Google Play, HoYoPlay, Epic, Steam). The sidebar pager and the section number live in the same section.'));
    out.push(measured(`Hovering the download block scales it: transform ${esc(E.downloadHover && E.downloadHover.transform.transform)} (transition ${esc(E.downloadHover && E.downloadHover.transform.transition)}); the SDK layout below it shows ${esc((E.downloadHover && E.downloadHover.items || []).length)} platform items. Clicking the play button opens ${esc((E.playClick && E.playClick.dialog[0] || {}).cls || 'the video-container')} ${E.playClick && E.playClick.dialog[0] ? Math.round(E.playClick.dialog[0].rect.width) + ' × ' + Math.round(E.playClick.dialog[0].rect.height) + ' px centred' : ''} and sets body overflow ${esc(E.playClick && E.playClick.bodyOverflow)}; in headless Chromium no <video> element was created inside it (the player is injected by the video SDK after its own checks), so the PV source is documented from the CMS record instead.`));
    out.push(shotIf('capture/interactions/hero-download-hover.png', 'download block hovered: the SDK platform layout'));
    out.push(shotIf('capture/interactions/hero-video-dialog.png', 'video dialog after clicking the play button'));
    out.push(spec('home-kv (hero composition)', 'home-kv', 'The slogan and background are CMS images; the download block is filled by the download SDK at run time.'));
    const hv = hoverRows('home-kv'); if (hv.length) out.push(table(['Hovered class', 'Node', 'Computed change', 'Transition'], hv));
    out.push(cssBlock(rulesFor('home-kv'), { max: 40 }));
    out.push(excerpt('1418', 'handleDownload', 24));
    out.push(rule('A full-height first section with the KV as a positioned image, a play affordance that opens an overlay player, and a download block whose platform buttons come from configuration, not markup.'));
    return out.join('');
  } },
  { slug: 'sidebar', title: 'Sidebar pager: six section numbers, prev/next, scroll-driven active state', html() {
    const out = []; const S = I.sidebar || {};
    out.push(observed('The sidebar (module 1418 inline component sidebar, styles module 1346) is fixed at the right edge: a .sidebar__nav with prev/next arrows and a vertical list of six numbers .sidebar__pagers-num (01–06), written vertically (writing-mode vertical-rl). It reads store.homeSection to mark the active number (#d8fa00) and calls goTo(index) on click; a scroll listener calls getActiveSectionIndex(scrollY) and commits setHomeSection, so the numbers follow the scroll.'));
    if (S.clicks) out.push(table(['Clicked number', 'scrollY after', 'store.homeSection', 'Active index', 'Section tops after (px)'], S.clicks.map(x => [String(x.index + 1).padStart(2, '0'), String(x.scrollY), esc(x.homeSection), String(x.active + 1), esc(x.sectionTop.join(', '))])));
    if (S.scrollSweep) out.push(table(['scrollTo(y)', 'store.homeSection', 'Active number'], S.scrollSweep.map(x => [String(x.scrollTo), esc(x.homeSection), String(x.active + 1).padStart(2, '0')])));
    if (S.next) out.push(measured(`Clicking the next arrow from the top scrolled to y = ${S.next.scrollY} (section 02) and the prev arrow carries the class ${esc(S.next.prevDisabled)} at the top (disabled state). The backTop button scrolled the page to y = ${S.backTop ? S.backTop.scrollYAfter : 0}.`));
    out.push(measured(`Sidebar box at 1440 × 900: ${esc(c('sidebar', ['width', 'height', 'top', 'right', 'z-index']))}; active number ${esc(c('sidebar__pagers-num--active', ['color', 'font-size']))}.`));
    out.push(cssBlock(rulesFor('sidebar'), { max: 30 }));
    out.push(excerpt('1418', 'getActiveSectionIndex', 26));
    out.push(rule('Section pagination = a fixed list of numbers bound to a store value that both the click handler and the scroll listener write; compute the active section from the section offsets on every scroll event.'));
    return out.join('');
  } },
  { slug: 'home-character', title: 'Home character section: faction nav swiper + fade list swiper', html() {
    const out = []; const C = I.homeCharacter || {};
    out.push(observed(`Two Swiper instances are linked: home-character__nav (${esc(swDesc(sw('home-character__nav')))}) shows the 62 character avatars as a horizontal strip with masks (home-character__nav-mask) and arrows; home-character__list (${esc(swDesc(sw('home-character__list')))}) shows one character at a time with a fade. Clicking a nav item (handleCharaNavClick) slides the list to that index; the arrows call handleNext/handlePrev. The data is the character list of CMS channel 287 (200 per page) grouped by the camps of channel 286 (store.characterCamps). 查看更多 (handleMoreClick) goes to /zh-cn/character.`));
    out.push(measured(`Clicking nav item 6: list swiper activeIndex ${C.navClick ? C.navClick.listSwiper.activeIndex : '—'}, translate ${C.navClick ? C.navClick.listSwiper.translate : '—'} px, the visible name changed from "${esc(C.nameBefore)}" to "${esc(C.navClick && C.navClick.nameAfter)}"; the next arrow then moved it to index ${C.nextClick ? C.nextClick.listSwiper.activeIndex : '—'}. 查看更多 navigated to ${esc(C.moreClick && C.moreClick.routeAfter)}${C.moreClick && C.moreClick.newTab ? ' (new tab ' + esc(C.moreClick.newTab) + ')' : ''}.`));
    if (C.navClick && C.navClick.timeline) out.push(table(['Element', 'Mutation window', 'Inline style changes'], C.navClick.timeline.slice(0, 6).map(x => [esc(x.element), `${x.first}–${x.last} ms (${x.n})`, esc(Object.entries(x.props).map(([k, v]) => k + ': ' + v).join(' | ').slice(0, 200))])));
    out.push(shotIf('capture/interactions/home-character-after-nav.png', 'character section after clicking the sixth avatar'));
    out.push(spec('home-character nav strip (one item)', 'home-character__nav-item', 'Avatar item of the nav swiper; the mask image clips it.'));
    out.push(spec('home-character active list item', 'home-character__list-item', 'One slide of the fade list: camp label, name, en-name and the character art.'));
    const hv = hoverRows('home-character').concat(hoverRows('more-btn'), hoverRows('swiper-button-next')); if (hv.length) out.push(table(['Hovered class', 'Node', 'Computed change', 'Transition'], hv));
    out.push(cssBlock(rulesFor('home-character'), { max: 50 }));
    out.push(excerpt('1418', 'handleCharaNavClick', 20));
    out.push(rule('Pair a thumbnail strip (slidesPerView auto) with a fade carousel; keep both on the same index; derive camp labels from a separate list and the "more" button as a router push.'));
    return out.join('');
  } },
  { slug: 'home-video', title: 'Home video section: fade carousel, thumbnail nav, overlay player', html() {
    const out = []; const V = I.homeVideo || {};
    out.push(observed(`home-video__main (${esc(swDesc(sw('home-video__main')))}) shows the cover of the current video (home-video__cover) with a play icon (home-video__action-icon) and a summary (category, date, title in home-video__summary); home-video__nav lists the nine latest records of channel 1332 as thumbnails (home-video__nav-item, is-active on the current one). handleVideoNavClick slides the main swiper; openPlayer/getVideoDialogInfo open the video-dialog component (module 1157) with the record's video URL; 查看更多 links to /zh-cn/video.`));
    out.push(measured(`Clicking the fourth thumbnail: main swiper activeIndex ${V.navClick ? V.navClick.mainSwiper.activeIndex : '—'} (translate ${V.navClick ? V.navClick.mainSwiper.translate : '—'} px), summary "${esc(V.summaryBefore)}" → "${esc(V.navClick && V.navClick.summaryAfter)}", active nav ${V.navClick ? V.navClick.activeNav + 1 : '—'}. The play icon click did not create a <video> in headless Chromium (${V.playClick && V.playClick.dialog.length ? 'dialog ' + esc(V.playClick.dialog.join(' ')) : 'no dialog element reported'}).`));
    out.push(spec('home-video summary block', 'home-video__summary', 'Category, date and title of the active video.'));
    out.push(spec('home-video nav thumbnail', 'home-video__nav-item', 'One thumbnail of the nav row; is-active marks the current one.'));
    const hv = hoverRows('home-video'); if (hv.length) out.push(table(['Hovered class', 'Node', 'Computed change', 'Transition'], hv));
    out.push(cssBlock(rulesFor('home-video'), { max: 40 }));
    out.push(cssBlock(rulesFor('video-container').concat(rulesFor('video-dialog')), { max: 16 }));
    out.push(excerpt('1418', 'getVideoDialogInfo', 22));
    return out.join('');
  } },
  { slug: 'home-news', title: 'Home news section: looping banner carousel with bullets and a scrolling summary', html() {
    const out = []; const N = I.homeNews || {};
    out.push(observed(`home-news__banner-list (${esc(swDesc(sw('home-news__banner-list')))}) carries the six latest news records (channel 288, iPageSize 7) as linked banners (home-news__banner-img → /zh-cn/news/<iInfoId>); Swiper's loop mode triples them to 18 slides. Six pagination bullets (.swiper-pagination-bullet with swiper-pagination-index-n) jump to a slide; the date and title of the active record are shown beside it, and the summary strip home-news__summary-scroll runs the wordsLoop keyframes (20 s, linear, infinite).`));
    out.push(measured(`At rest the banner swiper reported activeIndex ${N.bannerSwiper ? N.bannerSwiper.activeIndex : '—'} (realIndex ${N.bannerSwiper ? N.bannerSwiper.realIndex : '—'}, ${N.bannerSwiper ? N.bannerSwiper.slides : '—'} slides); clicking bullet 3 moved it to realIndex ${N.bulletClick ? N.bulletClick.bannerSwiper.realIndex : '—'} and the title became "${esc(N.bulletClick && N.bulletClick.title)}". Links in the section: ${esc((N.items || []).slice(0, 6).join(', '))}.`));
    out.push(spec('home-news banner (one slide)', 'home-news__banner-img', 'A linked banner slide of the loop swiper.'));
    const hv = hoverRows('home-news'); if (hv.length) out.push(table(['Hovered class', 'Node', 'Computed change', 'Transition'], hv));
    out.push(cssBlock(rulesFor('home-news'), { max: 30 }));
    const kf = data.motion.keyframes.find(k => k.name === 'wordsLoop'); if (kf) out.push(code(kf.css, { max: 12 }));
    return out.join('');
  } },
  { slug: 'home-world', title: 'Home world section: looping banner swiper with prev/next', html() {
    const out = []; const W = I.homeWorld || {};
    out.push(observed(`home-world__banner-list (${esc(swDesc(sw('home-world__banner-list')))}) shows the three world entries of channel 290 (looped to nine), each a link to /zh-cn/world; prev/next arrows are Swiper's .swiper-button-prev/next styled by the section.`));
    out.push(measured(`Next arrow: activeIndex ${W.bannerSwiper ? W.bannerSwiper.activeIndex : '—'} → ${W.nextClick ? W.nextClick.bannerSwiper.activeIndex : '—'} (realIndex ${W.nextClick ? W.nextClick.bannerSwiper.realIndex : '—'}); links in the section: ${esc((W.nextClick && W.nextClick.links || []).join(', '))}.`));
    out.push(spec('home-world banner (one slide)', 'home-world__banner-img', ''));
    out.push(cssBlock(rulesFor('home-world'), { max: 30 }));
    return out.join('');
  } },
  { slug: 'home-feature', title: 'Home feature section: concept block, feature fade swiper, concept video', html() {
    const out = []; const F = I.homeFeature || {};
    out.push(observed(`The last section (section-feature) pairs home-feature__list (${esc(swDesc(sw('home-feature__list')))}) with a concept block: section__concept-title (${esc(F.concept || '')}), section__concept-icon, and section__concept-video (a TV-shaped frame with a play button that opens the concept video; conceptUrl in the page component). The feature list comes from the home API getFeature.`));
    out.push(measured(`Feature next arrow: activeIndex ${F.listSwiper ? F.listSwiper.activeIndex : '—'} → ${F.nextClick ? F.nextClick.listSwiper.activeIndex : '—'}; the concept play click ${F.conceptPlay && F.conceptPlay.dialog.length ? 'opened ' + esc(F.conceptPlay.dialog.join(' ')) : 'did not create a player element in headless Chromium'}.`));
    out.push(shotIf('capture/interactions/home-feature-concept.png', 'feature section after the concept play click'));
    out.push(spec('section concept title', 'section__concept-title', ''));
    out.push(cssBlock(rulesFor('home-feature').concat(rulesFor('section')), { max: 40 }));
    return out.join('');
  } },
  { slug: 'footer', title: 'Footer: back-to-top, social bar, subscription widget, HoYoverse footer and locale picker', html() {
    const out = []; const Fo = I.footer || {};
    out.push(observed('The footer is three stacked parts: footer__wrap with the backTop button (module 347; class light on light sections) and footer__socialbar, which the footer SDK fills with the me-media-icon row (Twitter, YouTube, TikTok, Discord, Instagram, HoYoLAB, Twitch, Telegram, Reddit) plus a copy-link button (me-hover-btn with two stacked images, normal and hover); footer-crm with the hyv-crm subscription form (e-mail subscription widget of the CRM SDK); and the HoYoverse footer (hy-footer, hashed CSS-module classes such as link-1VLT0O and locale-selector-3HQCGC) with the product logo, the legal links (隐私政策, 使用者协议, 关于我们, 联系我们, 客服中心), the trademark notice and the language selector.'));
    if (Fo.legal) out.push(table(['Footer link', 'Target'], Fo.legal.map(l => [esc(l.text), esc(l.href)])));
    if (Fo.socialHover) out.push(measured(`Hovering the YouTube icon: ${esc(JSON.stringify(Fo.socialHover.item).slice(0, 200))}; the copy button swaps its normal/hover images (${esc(JSON.stringify(Fo.copyHover).slice(0, 160))}).`));
    if (Fo.localeClick) out.push(measured(`Clicking the locale selector lists: ${esc(Fo.localeClick.options.join(' · '))}.`));
    out.push(shotIf('capture/interactions/footer-locale.png', 'footer with the locale list open'));
    out.push(spec('footer social bar', 'footer__socialbar', 'Rendered by the footer SDK into the site\'s socialbar container.'));
    const hv = hoverRows('me-media-icon-item').concat(hoverRows('me-hover-btn'), hoverRows('backTop'), hoverRows('light')); if (hv.length) out.push(table(['Hovered class', 'Node', 'Computed change', 'Transition'], hv));
    out.push(cssBlock(rulesFor('footer').concat(rulesFor('backTop'), rulesFor('footer-crm')), { max: 40 }));
    out.push(rule('Keep the three-part footer: a site-owned social/back-top strip, an SDK-owned subscription block and an SDK-owned corporate footer with the language picker; a child site owns only the first part and the containers.'));
    return out.join('');
  } },
];
