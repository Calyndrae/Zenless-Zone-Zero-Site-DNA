// Chapters D: the phone tree (/m/zh-cn/…) — header and menu, home sections, character, video, news, article, world,
// company — captured with an iPhone user agent at 390 × 844.
import { readableLink, observedHtml, measuredHtml, inferredHtml, ruleHtml, data, p, t, h, sub, br, a, img, esc, observed, measured, inferred, rule, table, code, cssBlock, specimen, extractAll, pageDom, pageExists, shotIf, rulesFor, hoverFor, computedOf, excerpt, interactions, cssText } from './lib.mjs';
const I = interactions || {}; const M = I.mobile || {};
const pg = k => data.pages[k] || { components: [], swipers: [], sections: [], computed: {}, styleTags: [], links: [] };
const c = (k, cls, props) => { const o = computedOf(k, cls); return o ? props.map(x => `${x} ${o[x] || '—'}`).join(', ') : '—'; };
const spec = (k, label, cls, note, idx = 0) => { if (!pageExists(k)) return ''; const m = extractAll(pageDom(k), cls, idx + 1)[idx]; return m ? specimen(label, m, note) : p('<em>No settled markup for ' + esc(cls) + ' in the capture of ' + esc(k) + '.</em>'); };
const shot = (k, cap) => shotIf(`capture/pages/${k}/mobile-390x844.png`, cap);
const swDesc = (k, cls) => { const s = (pg(k).swipers || []).find(x => x.cls.includes(cls)); return s ? `${s.slides} slides, effect ${s.params.effect}, slidesPerView ${s.params.slidesPerView}, loop ${s.params.loop}` : 'not found'; };
export const chapters = [
  { slug: 'mobile-shell', title: 'Phone tree: /m routes, the m-header and its menu, the rem adapter at 750', html() {
    const out = []; const K = 'm_zh-cn_main'; const P = pg(K);
    out.push(observed(`Phones get a parallel site: the shell head script tests navigator.userAgent for phone/pad/Android/iPhone (and MacIntel with touch points, i.e. iPadOS) and rewrites the path to /m/<lang>/…; the Nuxt router has an m-lang-* route for every desktop route (same page names with an m- prefix, separate chunks: ${esc(data.routes.filter(r => /^\/m\//.test(r.path)).map(r => r.chunks.join('+')).filter((v, i, a) => a.indexOf(v) === i).slice(0, 6).join(' / '))}), and the mobile layout (module 551) mounts m-header-bar (module 349, styles 695) instead of header-bar. The rem adapter uses designWidth 750 (1rem = 52px at 390 wide), adds the class mo to <html>, and the mobile stylesheets are separate modules (m-home-*, m-cha, m-news, m-video, m-world, m-section-nav).`));
    out.push(measured(`/m/zh-cn/main at 390 × 844: ${P.scrollHeight} px high, ${(P.components || []).length} class names, ${P.styleTags.length} style tags; root font-size ${esc(P.rootFontSize)}. Header parts: ${esc((M.header || []).join(', '))}. Tapping the menu button (${esc(M.menuClick && M.menuClick.button)}) opened ${esc(((M.menuClick || {}).menu || []).map(m => m.cls.split(' ')[0] + ' ' + Math.round(m.rect.width) + '×' + Math.round(m.rect.height)).slice(0, 3).join(', '))} with the entries ${esc(((M.menuClick || {}).items || []).join(' · '))}; body overflow ${esc(M.menuClick && M.menuClick.bodyOverflow)}.`));
    out.push(shot(K, 'phone home at 390 × 844'));
    out.push(shotIf('capture/interactions/mobile-menu.png', 'phone menu open'));
    out.push(spec(K, 'm-header (bar with logo, download, music and menu button)', 'm-header-wrap', 'The menu panel is a sibling in the DOM, shown by the menu button.'));
    out.push(spec(K, 'm-header menu panel', 'm-header__menu', 'Full-screen menu with the route links; the capture has it closed (inline display: none), the phone interactions chapter shows it open.'));
    out.push(cssBlock(rulesFor('m-header'), { max: 60 }));
    out.push(excerpt('349', 'muteBgm', 20));
    out.push(rule('Serve phones a separate route tree with its own components and stylesheets chosen by user agent, not a responsive reflow; keep the same data, store and API.'));
    return out.join('');
  } },
  { slug: 'mobile-home', title: 'Phone home: KV, section nav, character, video, news, world, feature, pre-register', html() {
    const out = []; const K = 'm_zh-cn_main'; const P = pg(K);
    out.push(observedHtml(`Route m-lang-main (module 1419, ${readableLink('1419', 'readable source')}): sections m-home-kv (KV with slogan, play and a fixed-position download aside), the m-section-nav numbers, m-home-character (${esc(swDesc(K, 'm-home-character__nav'))} nav + ${esc(swDesc(K, 'm-home-character__list'))} list), m-home-video (${esc(swDesc(K, 'm-home-video__banner-list'))}), m-home-news (${esc(swDesc(K, 'm-home-news__banner-list'))}), m-home-world (${esc(swDesc(K, 'm-home-world__banner-list'))}), m-home-feature (${esc(swDesc(K, 'm-home-feature__list'))}) and the m-preregister block (toLanding). The page tracks scroll (onScroll → fixedPos) and resize (onResize) itself.`));
    out.push(measured(`Section tops at 390 wide: ${esc((P.sections || []).filter(s => /section-/.test(s.cls)).map(s => `${s.cls.replace('section section-', '')} ${Math.round(s.rect.y)}px (h ${Math.round(s.rect.height)})`).join(', '))}. After scrolling to y = 900 the header class was ${esc(M.scrolled && M.scrolled.headerClass)} and the page's fixedPos flag ${esc(String(M.scrolled && M.scrolled.fixedPos))}.`));
    out.push(shotIf('capture/pages/m_zh-cn_main/mobile-full.png', 'phone home, full page'));
    out.push(spec(K, 'm-home-kv', 'm-home-kv', ''));
    out.push(spec(K, 'm-home-character active item', 'm-home-character__list-item', ''));
    out.push(spec(K, 'm-section-nav', 'm-section-nav', 'The section number block of the phone pages.'));
    out.push(cssBlock(rulesFor('m-home-kv').concat(rulesFor('m-home-character'), rulesFor('m-home-video'), rulesFor('m-home-news'), rulesFor('m-home-world'), rulesFor('m-home-feature'), rulesFor('m-section-nav'), rulesFor('m-preregister-container')), { max: 90 }));
    out.push(excerpt('1419', 'onScroll', 18));
    return out.join('');
  } },
  { slug: 'mobile-pages', title: 'Phone inner pages: character, video, news, article, world, world entry, company', html() {
    const out = [];
    const rows = [['m_zh-cn_character', 'm-lang-character (module 1423, m-cha)', 'character-swiper, character-camp selection, character-pagination-container'], ['m_zh-cn_video', 'm-lang-video (module 1425, m-video)', 'm-video-slider, m-video-tab, m-video-list, m-video-pager'], ['m_zh-cn_news', 'm-lang-news (module 1415, m-news)', 'm-news-slider, m-news-tab, m-news-list (loadMore)'], ['m_zh-cn_news_166535', 'm-lang-news-id (module 1436, m-news-detail)', 'm-news-detail-container, m-news-detail__article'], ['m_zh-cn_world', 'm-lang-world (module 1426, m-world)', 'm-world swiper'], ['m_zh-cn_world_102370', 'm-lang-world-id (module 1437, m-world-detail)', 'm-world-detail-container'], ['m_zh-cn_company_privacy', 'm-lang-company-privacy (module 1431, m-protocol)', 'm-web-protocol'], ['m_zh-cn_company_terms', 'm-lang-company-terms (module 1432, m-protocol)', 'm-web-protocol']];
    out.push(table(['Captured page', 'Route and module', 'Blocks', 'Height at 390', 'Style tags', 'Class names'], rows.map(([k, r, b]) => [esc(k.replace(/^m_/, '/m/').replace(/_/g, '/')), esc(r), esc(b), String(pg(k).scrollHeight || '—'), String((pg(k).styleTags || []).length), String((pg(k).components || []).length)])));
    for (const [k, cap] of [['m_zh-cn_character', 'phone character page'], ['m_zh-cn_video', 'phone video page'], ['m_zh-cn_news', 'phone news index'], ['m_zh-cn_news_166535', 'phone news article'], ['m_zh-cn_world', 'phone world page'], ['m_zh-cn_world_102370', 'phone world entry'], ['m_zh-cn_company_privacy', 'phone privacy policy']]) out.push(shot(k, cap));
    out.push(spec('m_zh-cn_character', 'phone character block', 'character-block', ''));
    out.push(spec('m_zh-cn_news', 'phone news list item', 'm-news-list__item', ''));
    out.push(spec('m_zh-cn_news_166535', 'phone article container', 'm-news-detail-container', ''));
    out.push(spec('m_zh-cn_world', 'phone world slide', 'm-world__slide', ''));
    out.push(cssBlock(rulesFor('m-cha').concat(rulesFor('character-block'), rulesFor('character-swiper')), { max: 40 }));
    out.push(cssBlock(rulesFor('m-video').concat(rulesFor('m-video-tab'), rulesFor('m-video-list')), { max: 30 }));
    out.push(cssBlock(rulesFor('m-news').concat(rulesFor('m-news-list'), rulesFor('m-news-detail')), { max: 40 }));
    out.push(cssBlock(rulesFor('m-world').concat(rulesFor('m-world-detail')), { max: 40 }));
    out.push(cssBlock(rulesFor('m-web-protocol'), { max: 20 }));
    out.push(excerpt('1415', 'loadMore', 20));
    out.push(rule('Phone pages replace paging with load-more lists, stack the sliders vertically and keep the same record shapes; the section number block (m-section-nav) and the back control are shared pieces.'));
    return out.join('');
  } },
];
