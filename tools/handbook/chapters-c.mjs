// Chapters C: the inner desktop pages — character, video, news index, news article, world and world entry,
// company documents, redemption — with specimens, shipped CSS, computed styles and live measurements.
import { readableLink, observedHtml, measuredHtml, inferredHtml, ruleHtml, data, p, t, h, sub, br, a, img, esc, observed, measured, inferred, rule, table, code, cssBlock, specimen, extractAll, pageDom, pageExists, shotIf, rulesFor, hoverFor, computedOf, excerpt, interactions, cssText } from './lib.mjs';
const I = interactions || {};
const pg = k => data.pages[k] || { components: [], swipers: [], sections: [], computed: {}, styleTags: [], links: [] };
const sw = (k, cls) => (pg(k).swipers || []).find(s => s.cls.includes(cls));
const swDesc = s => s ? `${s.slides} slides, effect ${s.params.effect}, slidesPerView ${s.params.slidesPerView}, loop ${s.params.loop}, direction ${s.params.direction}, speed ${s.params.speed} ms` : 'not found';
const c = (k, cls, props) => { const o = computedOf(k, cls); return o ? props.map(x => `${x} ${o[x] || '—'}`).join(', ') : '—'; };
const hoverRows = cls => hoverFor(cls).flatMap(hh => hh.changes.slice(0, 4).map(ch => [esc(hh.cls), esc(ch.node.split('#')[0]), esc(Object.entries(ch.props).map(([k, v]) => `${k}: ${String(v.before).slice(0, 40)} → ${String(v.after).slice(0, 40)}`).join('; ').slice(0, 220)), esc((hh.transition || '').slice(0, 60))]));
const spec = (k, label, cls, note, idx = 0) => { if (!pageExists(k)) return ''; const m = extractAll(pageDom(k), cls, idx + 1)[idx]; return m ? specimen(label, m, note) : p('<em>No settled markup for ' + esc(cls) + ' in the capture of ' + esc(k) + '.</em>'); };
const shot = (k, cap) => shotIf(`capture/pages/${k}/desktop-1440x900.png`, cap);
export const chapters = [
  { slug: 'character', title: 'Character page (/zh-cn/character): fade stage, pagination, voice player, faction rail', html() {
    const out = []; const K = 'zh-cn_character'; const C = I.character || {}; const P = pg(K);
    out.push(observedHtml(`Route lang-character (module 1439, ${readableLink('1439', 'readable source')}; styles module 1330 plus the character-block styles of 1250). The page reads the character list (channel 287, iPageSize 200) and the camp list (channel 286) and keeps the current character in the query (?id=&lt;iInfoId&gt;; the capture landed on ?id=166076). Three Swiper instances: cha-swiper (${esc(swDesc(sw(K, 'cha-swiper')))}) shows one character with its art (character-cover), name (character-info-name, English name in Mont-Heavy), CV line (character-info-prop), quote and description (character-info-desc) and the voice player (character-voice-player with character-voice-btn and the language switcher character-voice-lang-switcher); cha-pagination-swiper (${esc(swDesc(sw(K, 'cha-pagination-swiper')))}) is the arrow/pagination row; side-camp-swiper (${esc(swDesc(sw(K, 'side-camp-swiper')))}) is the vertical faction rail on the right (side-camp-item with icon and name), expanded by 更多阵营 (side-camp-expand-btn).`));
    out.push(measured(`At 1440 × 900 the page body is ${pg(K).scrollHeight} px high; the active character was "${esc(C.name || '')}"; the faction rail listed ${(C.camps || []).length} factions: ${esc((C.camps || []).slice(0, 12).join(', '))}…; the page background is ${esc((C.campClick && C.campClick.bg && C.campClick.bg['background-image']) || '')}. Clicking a pagination item, the voice button, a faction and pressing ArrowRight in headless Chromium did not move the fade swiper (activeIndex stayed ${C.paginationClick ? C.paginationClick.chaSwiper.activeIndex : 0}; the voice button toggled its --progress custom property between ${esc(((C.voiceClick || {}).timeline || [])[0] ? C.voiceClick.timeline[0].props['--progress'] : '…')}), which points at handlers bound to touch/pointer gestures on the swiper rather than plain clicks; the expand button exposed all ${C.expandClick ? C.expandClick.expanded : 60} faction items.`));
    out.push(shot(K, 'character page at 1440 × 900'));
    out.push(shotIf('capture/interactions/character-camps-expanded.png', 'faction rail expanded by 更多阵营'));
    out.push(spec(K, 'character info panel (active slide)', 'character-info', 'Name, English name, CV, quote and description of the active character.'));
    out.push(spec(K, 'voice player', 'character-voice-player', 'Play button with the progress highlight and the language switcher (中).'));
    out.push(spec(K, 'faction rail item', 'side-camp-item', 'One faction of the vertical rail.'));
    const hv = hoverRows('character').concat(hoverRows('cha-'), hoverRows('side-camp')); if (hv.length) out.push(table(['Hovered class', 'Node', 'Computed change', 'Transition'], hv));
    out.push(cssBlock(rulesFor('character').concat(rulesFor('character-info'), rulesFor('character-voice-player'), rulesFor('character-voice-btn'), rulesFor('side-camp-item'), rulesFor('cha-swiper')), { max: 70 }));
    out.push(excerpt('1439', 'handleVoiceBtnClick', 24));
    out.push(excerpt('1439', 'onCampClick', 20));
    out.push(rule('One record per slide with a fade transition; the thumbnail row and the faction rail are separate swipers synchronised through the component state; keep the active record in the URL query so a character page is linkable.'));
    return out.join('');
  } },
  { slug: 'video', title: 'Video page (/zh-cn/video): latest slider, category tabs, paged grid, overlay player', html() {
    const out = []; const K = 'zh-cn_video'; const V = I.video || {};
    out.push(observedHtml(`Route lang-video (module 1420, ${readableLink('1420', 'readable source')}; styles 1403, video-tag 1400, pager 1170). The page shows video-slider__latest (${esc(swDesc(sw(K, 'video-slider__latest')))}) with six bullets, the tab row video-tab (最新 and the sub-channels of 1332 from getChildTree: 版本PV 1341, 角色EP&MV 1340, 角色PV 1339, 角色展示 1338; the tab is the ?category query), the grid video-list (nine video-list__item per page: banner, date in font-num, tag, title) and the pager mi-ho-yo-pager-rich (module 1174). Clicking an item opens the video-dialog with the record's video.`));
    out.push(measured(`Tabs: ${esc((V.tabs || []).map(x => x.text + ' → ' + x.href).join('; '))}. Clicking 版本PV changed the route to ${esc(V.tabClick && V.tabClick.route)} and requested ${esc((V.tabClick && V.tabClick.apiCalls || []).join(' '))}, the grid went from "${esc(V.firstTitle)}" to "${esc(V.tabClick && V.tabClick.firstTitle)}" (${V.tabClick ? V.tabClick.items : '—'} items). Pager buttons: ${esc((V.pager || []).join(' '))}.`));
    out.push(shot(K, 'video page at 1440 × 900'));
    out.push(spec(K, 'video tab row', 'video-tab', 'The active tab carries nuxt-link-exact-active and shows video-tab__label-active.'));
    out.push(spec(K, 'video list item', 'video-list__item', 'Banner, date, tag and title of one record.'));
    out.push(spec(K, 'pager', 'mihoyo-pager-rich', 'Shared pagination component (news page uses the same).'));
    const hv = hoverRows('video-tab').concat(hoverRows('video-list'), hoverRows('mihoyo-pager-rich')); if (hv.length) out.push(table(['Hovered class', 'Node', 'Computed change', 'Transition'], hv));
    out.push(cssBlock(rulesFor('video').concat(rulesFor('video-tab'), rulesFor('video-list'), rulesFor('video-tag'), rulesFor('video-slider')), { max: 60 }));
    out.push(cssBlock(rulesFor('mihoyo-pager-rich'), { max: 20 }));
    out.push(excerpt('1420', 'handleTabClick', 20));
    out.push(excerpt('1174', 'need a route name', 16, { skip: -8 }));
    return out.join('');
  } },
  { slug: 'news', title: 'News index (/zh-cn/news): latest slider, tabs, paged list', html() {
    const out = []; const K = 'zh-cn_news'; const N = I.news || {};
    out.push(observedHtml(`Route lang-news (module 1416, ${readableLink('1416', 'readable source')}; styles 1396, news-tag 1160, pager 1170, section-nav 1135). Same skeleton as the video page: news-slider__latest (${esc(swDesc(sw(K, 'news-slider__latest')))}), the tab row news-tab (最新 288, 新闻 295, 公告 296, 活动 297 — the ?category query), the list news-list of nine news-list__item (banner, date, news-tag, title, description) and the pager. The data is channel 288 with iPageSize 9; the tabs call the sub-channel with the same page size.`));
    out.push(measured(`Tabs: ${esc((N.tabs || []).map(x => x.text + ' → ' + x.href).join('; '))}. Clicking 公告: route ${esc(N.tabClick && N.tabClick.route)}, request ${esc((N.tabClick && N.tabClick.apiCalls || []).join(' '))}, first titles ${esc((N.tabClick && N.tabClick.items || []).join(' / '))}. The next-page arrow requested ${esc((N.nextPage && N.nextPage.apiCalls || []).join(' '))} and the pager showed page ${esc(N.nextPage && N.nextPage.current)}. Clicking a banner navigated to ${esc(N.itemClick && N.itemClick.routeAfter)} (router push, requests ${esc((N.itemClick && N.itemClick.apiCalls || []).join(' '))}); the back button returned to ${esc(N.backClick && N.backClick.route)}. Pager at rest: ${esc((N.pager || []).join(' '))} (${esc(String(((data.manifest.find(m => /iChanId=288/.test(m.url)) || {}).bytes || '')))}).`));
    out.push(shot(K, 'news index at 1440 × 900'));
    out.push(spec(K, 'news tab row', 'news-tab', ''));
    out.push(spec(K, 'news list item', 'news-list__item', 'Banner, date, category tag, title and description of one record.'));
    out.push(spec(K, 'news tag', 'news-tag', 'The category pill (colour from the channel).'));
    const hv = hoverRows('news-tab').concat(hoverRows('news-list'), hoverRows('news-slider')); if (hv.length) out.push(table(['Hovered class', 'Node', 'Computed change', 'Transition'], hv));
    out.push(cssBlock(rulesFor('news').concat(rulesFor('news-tab'), rulesFor('news-list'), rulesFor('news-tag'), rulesFor('news-slider')), { max: 60 }));
    out.push(excerpt('1416', 'handlePaginationClick', 18));
    out.push(excerpt('1124', 'getList', 24));
    return out.join('');
  } },
  { slug: 'article', title: 'News article (/zh-cn/news/:id) — the template this page runs in', html() {
    const out = []; const K = 'zh-cn_news_166535'; const P = pg(K);
    out.push(observed('Route lang-news-id (module 1451, ' + readableLink('1451', 'readable source') + '; styles 1411). asyncData calls the news API getDetail({iInfoId, iChanId: 288, sLangKey}) → /getContent?…&iAround=1; a failed call redirects to the news index. The template: news-detail-back (a back-btn with arrow and 返回 / BACK), news-detail-wrapper → news-detail-container (12.8rem wide) → news-detail-article with news-detail__title (sTitle), news-detail__info (the breadcrumb 绝区零 > 新闻, the category news-tag, the date dtStartTime) and news-detail__content, which receives sContent as raw HTML (v-html). A section__foot decoration and a sticky backContainer with the backTop button follow, then the footer.'));
    out.push(observed('The CMS editor emits p/span/strong/em/u/br/img/h4/a/table/td with inline white-space, text-align, line-height, font-size and min-height styles; the template styles img and video to max-width 100%, tables to full width with #c2c2c2 borders and a .table-wrapper scroll box, links to break-word. This handbook uses exactly that vocabulary.'));
    out.push(measured(`Article page at 1440 × 900: title ${esc(c(K, 'news-detail__title', ['font-size', 'font-weight', 'color', 'line-height']))}; info bar ${esc(c(K, 'news-detail__info', ['height', 'background-color', 'border-radius', 'font-size']))}; content ${esc(c(K, 'news-detail__content', ['font-size', 'line-height', 'color']))}; container ${esc(c(K, 'news-detail-container', ['width', 'padding-top']))}; page height ${P.scrollHeight} px.`));
    out.push(shot(K, 'news article at 1440 × 900'));
    out.push(spec(K, 'back button', 'news-detail-back', ''));
    out.push(spec(K, 'article info bar', 'news-detail__info', 'Breadcrumb, category tag and date.'));
    out.push(cssBlock(rulesFor('news-detail').concat(rulesFor('news-detail-container'), rulesFor('news-detail-article'), rulesFor('back-btn')), { max: 60 }));
    out.push(excerpt('1451', 'asyncData', 30));
    out.push(rule('Render CMS HTML into a bounded reading column with only the element-level rules the editor needs (images, tables, links); keep the back control and the date/category bar as template parts, not content.'));
    return out.join('');
  } },
  { slug: 'world', title: 'World page (/zh-cn/world) and world entries (/zh-cn/world/:id)', html() {
    const out = []; const K = 'zh-cn_world'; const W = I.world || {}; const D = Object.keys(data.pages).find(k => /^zh-cn_world_\d+$/.test(k));
    out.push(observedHtml(`Route lang-world (module 1441, ${readableLink('1441', 'readable source')}; styles 1406 with the slideToTop keyframes). The page is one Swiper (world__swiper: ${esc(swDesc(sw(K, 'world__swiper')))}) of the three channel-290 entries looped to nine slides (world__slide → world__slide-container with a mask, a cover (cover-name with name-en and name, cover-summary) and a tape (world__slide-tape with tape-name)); prev/next arrows at the window edges; clicking the active slide (gotoDetail) pushes /zh-cn/world/&lt;iInfoId&gt;. The slides enter with slideToTop (0.3 s, forwards) and carry isInitAnim.`));
    out.push(measured(`Slides: ${esc((W.slides || []).slice(0, 3).join(', '))} (×3 for the loop). Next: activeIndex ${W.swiper ? W.swiper.activeIndex : '—'} → ${W.nextClick ? W.nextClick.swiper.activeIndex : '—'} over ${W.nextClick && W.nextClick.timeline[0] ? W.nextClick.timeline[0].last : 800} ms (transition-duration 800ms, the slides translate by ±40.432rem and scale). Hovering the active slide: cover ${esc(JSON.stringify((W.hover || {}).cover || {}).slice(0, 120))}, tape ${esc(JSON.stringify((W.hover || {}).tape || {}).slice(0, 120))}. Clicking it navigated to ${esc(W.slideClick && W.slideClick.routeAfter)} with ${esc((W.slideClick && W.slideClick.apiCalls || []).join(' '))}; the detail page (route lang-world-id, module 1452, styles 1413) renders world-detail-container with ${esc((W.slideClick && W.slideClick.detail || []).join(', '))}.`));
    out.push(shot(K, 'world page at 1440 × 900'));
    if (D) out.push(shotIf(`capture/pages/${D}/desktop-1440x900.png`, 'world entry page at 1440 × 900'));
    out.push(spec(K, 'world slide (active)', 'world__slide-container', 'Mask, cover and tape of one entry.'));
    if (D) out.push(spec(D, 'world entry page container', 'world-detail-container', 'The entry page: title block, body swiper and the next-entry control.'));
    const hv = hoverRows('world'); if (hv.length) out.push(table(['Hovered class', 'Node', 'Computed change', 'Transition'], hv));
    out.push(cssBlock(rulesFor('world').concat(rulesFor('cover-name'), rulesFor('tape-name')), { max: 50 }));
    out.push(cssBlock(rulesFor('world-detail'), { max: 30 }));
    const kf = data.motion.keyframes.find(k => k.name === 'slideToTop'); if (kf) out.push(code(kf.css, { max: 10 }));
    out.push(excerpt('1441', 'gotoDetail', 16));
    return out.join('');
  } },
  { slug: 'company', title: 'Company documents (/zh-cn/company/privacy, /terms): the protocol template and the PDF viewer', html() {
    const out = []; const K = 'zh-cn_company_privacy'; const T = 'zh-cn_company_terms';
    out.push(observed(`Routes lang-company-privacy / -terms (modules 1446/1447, page component protocol 1142, styles web-protocol 1140 and protocol-pdf 1130). The page requests the single record of channel 294 (privacy) or 293 (terms) with isPreview=0 and renders it: when the record is HTML it goes into the web-protocol container (title, breadcrumb 绝区零 > 隐私政策, the document with its tables in .table-wrapper); when it is a PDF the HoYoverse pdf viewer (pdf.js, modules 1131 and the vendor bundle) renders it into protocol-pdf. The captured privacy page is ${pg(K).scrollHeight} px high, the terms page ${pg(T).scrollHeight} px.`));
    out.push(shot(K, 'privacy policy at 1440 × 900'));
    out.push(spec(K, 'protocol container head', 'web-protocol-container', 'Title and breadcrumb above the document body.', 0));
    out.push(cssBlock(rulesFor('web-protocol').concat(rulesFor('protocol-pdf'), rulesFor('table-wrapper')), { max: 40 }));
    out.push(excerpt('1118', 'getPrivacy', 18));
    return out.join('');
  } },
  { slug: 'redemption', title: 'Redemption page (/redemption): a separate build on the same host', html() {
    const out = []; const K = 'redemption'; const R = pg(K);
    out.push(observed(`The 兑换码 entry of the more-menu opens /redemption. It is not a Nuxt route: the server answers with a different document that loads its own bundles from act.hoyoverse.com/zzz/event/20240601-exchange-anchpz/ (vendors, styles, index) and a stylesheet, plus Vue 2.7.14 runtime, browser-tips, the account SDK and mihoyo-analysis from webstatic. The page is the code-redemption form (server, nickname, code, 确认兑换) with the redemption rules; it needs a HoYoverse login (the account SDK) to submit.`));
    out.push(measured(`Captured document: ${R.styleTags ? R.styleTags.length : 0} style tags, ${(R.components || []).length} class names, ${R.scrollHeight || '—'} px high; scripts: ${esc((R.scripts || []).map(s => s.replace(/^https?:\/\//, '')).join(', '))}.`));
    out.push(shot(K, 'redemption page at 1440 × 900'));
    out.push(inferred('For a child site this page is an external form: link to it from the more-menu and let the account SDK handle identity; it does not share the site\'s build or stylesheets.'));
    return out.join('');
  } },
];
