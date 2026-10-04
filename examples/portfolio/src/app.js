/* ============================================================================================
   Example page — application script of a child site built from the Zenless Zone Zero website DNA.
   Every structure below is the site's own component markup as captured on the live pages (handbook
   specimens, capture/pages/<page>/dom.html), scoped data-v attributes included, so the site's own
   stylesheets style them; every record, image and string in the slots comes from the repository's
   archive of the site (tools/collect-content.mjs): nothing is drawn or written for this page.
   Each block names the readable module whose behaviour it follows.
   ============================================================================================ */
(function () {
  'use strict';

  /* ---------- 0. configuration (site-config-constants, module 28; chapter 02) ---------- */
  const CHANNEL_ID_CONFIG = {
    KV: 285, CAMPS: 286, CHARACTERS: 287,
    NEWS: { ALL: 288, NEWS: 295, NOTICE: 296, ACTIVITY: 297 },
    FEATURE: 289, WORLD: 290, SOCIAL: 292, TERMS: 293, PRIVACY: 294,
    VIDEO: { ALL: 1332 },
  };
  // the site asks for 200 characters; the example keeps the first 12 so the standalone bundle stays small (every record is in src/content.json)
  const PAGE_SIZE = { CAMPS: 50, CHARACTERS: 12, HOME_NEWS: 7, HOME_VIDEO: 6, WORLD: 10, FEATURE: 10, LIST: 9, TREE: 10, LOAD_MORE: 3 };
  // the six home sections: store.homeSection values measured in chapter 12 (main, character, video, news, world, feature)
  const NAVS = [
    { link: 'main', section: 'section-index' },
    { link: 'character', section: 'section-character' },
    { link: 'video', section: 'section-video' },
    { link: 'news', section: 'section-news' },
    { link: 'world', section: 'section-world' },
    { link: 'feature', section: 'section-feature' },
  ];
  const HEADER_NAVS = ['main', 'character', 'video', 'news', 'world'];
  // scoped style ids of the site's components (vue-loader data-v attributes the stylesheets key on)
  const SCOPE = { loading: 'data-v-4ed1ddcf', character: 'data-v-c6f7f9a8', video: 'data-v-95fb0980', news: 'data-v-68b07d09', world: 'data-v-53daaf10', feature: 'data-v-26432ee0', footer: 'data-v-2b67f5b0', dialog: 'data-v-949ad85e', mCharacter: 'data-v-4cbeaaa9', mVideo: 'data-v-42ef7462', mNews: 'data-v-4271f3ad', mWorld: 'data-v-c09ee0ae', mFeature: 'data-v-5959da90' };
  // the mirror's routes for the pages the home links to (the published repository serves them next to this example)
  const ROUTES = { character: '/zh-cn/character', video: '/zh-cn/video', news: '/zh-cn/news', world: '/zh-cn/world' };
  // audio: one looping background track behind a persisted mute toggle (chapter 32); the archive holds no track, so a quiet synthesised loop stands in
  const BGM = { src: '', storageKey: 'siteBgAudio', volume: 0.8 };
  const DICTS = JSON.parse(document.getElementById('site-i18n').textContent);           // the site's own mi18n dictionaries, flat
  const DB = JSON.parse(document.getElementById('site-content').textContent);           // the content API's archived answers
  const SITE = JSON.parse(document.getElementById('site-assets').textContent);          // the components' own data-URI images
  const FRAG = JSON.parse(document.getElementById('site-fragments').textContent);       // SDK-rendered blocks, verbatim from the captured DOMs

  /* ---------- 1. device detection and the rem adapter (rem---device, module 326; chapter 04) ---------- */
  let rem = 0, deviceType = 'pc';
  function getDeviceType() {
    const tree = document.documentElement.getAttribute('data-tree');   // decided in the head, where that tree's stylesheets were written
    if (tree === 'm') return 'mobile';
    if (tree === 'pc') return 'pc';
    const forced = new URLSearchParams(location.search).get('tree');
    if (forced === 'm' || forced === 'mobile') return 'mobile';
    if (forced === 'pc') return 'pc';
    const ua = navigator.userAgent;
    const phone = /(phone|pad|pod|iPhone|iPod|ios|iPad|iPadOs|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(ua)
      || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    return phone ? 'mobile' : 'pc';
  }
  function getOrient() { return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'; }
  function initFlexible(win, doc, options) {
    const docEl = doc.documentElement, dpr = win.devicePixelRatio || 1;
    const { designWidth, designHeight, maxFillWidth, minScaleWidth } = options;
    function getBaseWidth(clientWidth) {
      let baseWidth = designWidth;
      if (designWidth === 750) baseWidth = getOrient() === 'landscape' ? designHeight : designWidth;
      if (clientWidth > maxFillWidth) baseWidth = maxFillWidth;
      return baseWidth;
    }
    function refreshRem() {
      let width = docEl.clientWidth;
      if (designWidth !== 750) {
        if (designWidth < maxFillWidth && width > designWidth && width <= maxFillWidth) width = designWidth;
        if (width < minScaleWidth) width = minScaleWidth;          // the 1440 clamp: narrower windows keep the 1440 layout
      }
      rem = (100 * width) / getBaseWidth(width);
      docEl.style.fontSize = rem + 'px';
      doc.getElementById('app').style.visibility = 'visible';     // the root is hidden until the first value is written
      win.dispatchEvent(new CustomEvent('rem', { detail: rem }));
    }
    refreshRem();
    win.addEventListener('resize', refreshRem);
    win.addEventListener('pageshow', e => { if (e.persisted) refreshRem(); });
    if (dpr >= 2) {
      const fakeBody = doc.createElement('body'), testDiv = doc.createElement('div');
      testDiv.style.border = '.5px solid transparent'; fakeBody.appendChild(testDiv); docEl.appendChild(fakeBody);
      if (testDiv.offsetHeight === 1) docEl.classList.add('hairlines');
      docEl.removeChild(fakeBody);
    }
  }
  function setupDevice() {
    deviceType = getDeviceType();
    const html = document.documentElement;
    html.classList.add(getOrient());
    html.setAttribute('theme-mode', 'light'); html.setAttribute('brand', 'nap');   // the captured root carries both; the CRM styles key on theme-mode
    if (deviceType === 'mobile') { html.classList.add('mo', 'mobile'); html.setAttribute('hyv-device', 'mobile'); initFlexible(window, document, { designWidth: 750, designHeight: 1334 }); }
    else { html.classList.add('pc', 'desktop'); html.setAttribute('hyv-device', 'pc'); initFlexible(window, document, { designWidth: 2560, maxFillWidth: 2560, minScaleWidth: 1440 }); }
  }

  /* ---------- 2. store (root-Vuex-store, module 704) ---------- */
  const store = {
    state: { lang: 'zh-cn', isLoading: true, homeSection: 'main', homeScroll: 0, bgmMuted: false, userInfo: null, characterCamps: [], videoCates: [], newsCates: [] },
    _subs: [],
    commit(type, payload) {
      const s = this.state;
      const mutations = {
        setLang: v => { s.lang = v; }, setLoading: v => { s.isLoading = v; }, setHomeSection: v => { s.homeSection = v; },
        setHomeScroll: v => { s.homeScroll = v; }, setBgmMuted: v => { s.bgmMuted = v; }, setUserInfo: v => { s.userInfo = v; },
        setCharacterCamps: v => { s.characterCamps = v; }, setVideoCates: v => { s.videoCates = v; }, setNewsCates: v => { s.newsCates = v; },
      };
      if (!mutations[type]) throw new Error('unknown mutation ' + type);
      mutations[type](payload);
      this._subs.forEach(fn => fn(type, payload, s));
    },
    subscribe(fn) { this._subs.push(fn); },
  };

  /* ---------- 3. i18n (i18n-language-middleware 340, base mixin 251: $getI18nWord; chapter 35) ----------
     The dictionaries are the site's own mi18n files (nav1…nav5, navVideo, learnMore, download_label …); the archive
     holds the zh-cn set, so that is the language the page can show. */
  const LANGS = Object.keys(DICTS);
  function detectLang() {
    const seg = location.pathname.split('/').filter(Boolean)[0];          // the locale is the first path segment on the site
    if (LANGS.includes(seg)) return seg;
    const q = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(q)) return q;
    return LANGS[0];
  }
  function dict() { return DICTS[store.state.lang] || DICTS[LANGS[0]]; }
  const word = key => { const v = dict()[key]; return v == null ? '' : String(v); };   // $getI18nWord
  function applyLang(lang) {
    store.commit('setLang', lang);
    const d = dict();
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('mi18n-lang', lang);
    if (d.__fontCss) document.documentElement.style.setProperty('--mi18n-font-css', d.__fontCss);   // the mi18n loader exposes the language font as --mi18n-font-css
    document.title = word('seoTitle');
  }

  /* ---------- 4. content API client (news-CMS-API 1124, video 1153, world 1152, character-and-camp 1154, home 1164) ---------- */
  const api = {
    _table(sLangKey) { return DB[sLangKey] || DB[LANGS[0]]; },
    _channelList(sLangKey, iChanId) {
      const table = this._table(sLangKey), key = String(iChanId);
      if (table[key]) return table[key];
      const parent = DB.channels.find(c => (c.children || []).some(ch => ch.iChanId === Number(iChanId)));
      return parent ? (table[String(parent.iChanId)] || []).filter(r => (r.sChanId || []).includes(key)) : [];
    },
    _respond(data) { return new Promise(resolve => setTimeout(() => resolve({ retcode: 0, message: 'OK', data }), 0)); },
    getContentList({ iChanId, iPageSize = PAGE_SIZE.WORLD, iPage = 1, sLangKey = store.state.lang }) {
      const list = this._channelList(sLangKey, iChanId), start = (iPage - 1) * iPageSize;
      return this._respond({ iTotal: list.length, list: list.slice(start, start + iPageSize).map(r => Object.assign({}, r)) });
    },
    getContent({ iInfoId, iChanId, iAround = 0, sLangKey = store.state.lang }) {
      const list = this._channelList(sLangKey, iChanId), idx = list.findIndex(r => r.iInfoId === Number(iInfoId));
      if (idx < 0) return Promise.resolve({ retcode: -1, message: 'not found', data: null });
      const data = Object.assign({}, list[idx]);
      if (iAround) data.around = { prevContent: list[idx - 1] || null, nextContent: list[idx + 1] || null };
      return this._respond(data);
    },
    getChildTree({ iChanId, iPageSize = PAGE_SIZE.TREE }) {
      const chan = DB.channels.find(c => c.iChanId === Number(iChanId));
      return this._respond({ children: chan ? [{ iChanId: chan.iChanId, sChanName: chan.sChanName, children: (chan.children || []).slice(0, iPageSize) }] : [] });
    },
  };
  const ext = r => { try { return typeof r.sExt === 'string' ? JSON.parse(r.sExt || '{}') : (r.sExt || {}); } catch (e) { return {}; } };
  const img = (r, key) => { const v = ext(r)[key]; return v && v[0] && v[0].url ? v[0].url : ''; };   // the first image of an sExt image field

  /* ---------- 5. a small carousel speaking Swiper 4's option vocabulary (vendor module 899; chapters 13–17) ----------
     It writes the same classes and inline styles Swiper writes (slide widths and translate3d for the fade effect,
     duplicates with data-swiper-slide-index in loop mode, bullets with role/aria), so the site's CSS applies unchanged. */
  class MiniSwiper {
    constructor(el, params = {}) {
      this.el = el;
      this.params = Object.assign({ effect: 'slide', slidesPerView: 1, loop: false, speed: 300, navigation: null, pagination: null, allowTouchMove: true, on: {} }, params);
      this.wrapper = el.querySelector('.swiper-wrapper');
      const originals = Array.from(this.wrapper.children);
      this.count = originals.length;
      this.fade = this.params.effect === 'fade';
      this.loop = !!this.params.loop && this.count > 1;
      originals.forEach((n, i) => n.setAttribute('data-swiper-slide-index', i));
      if (this.loop) {
        const before = document.createDocumentFragment();
        originals.forEach(n => { const c = n.cloneNode(true); c.classList.add('swiper-slide-duplicate'); before.appendChild(c); });
        this.wrapper.insertBefore(before, this.wrapper.firstChild);
        originals.forEach(n => { const c = n.cloneNode(true); c.classList.add('swiper-slide-duplicate'); this.wrapper.appendChild(c); });
      }
      this.slides = Array.from(this.wrapper.children);
      el.classList.add('swiper-container-initialized', 'swiper-container-horizontal');
      if (this.fade) el.classList.add('swiper-container-fade');
      if (!el.querySelector('.swiper-notification')) { const n = document.createElement('span'); n.className = 'swiper-notification'; n.setAttribute('aria-live', 'assertive'); n.setAttribute('aria-atomic', 'true'); el.appendChild(n); }
      this.activeIndex = this.loop ? this.count : 0;
      this._handlers = {};
      Object.keys(this.params.on).forEach(k => this.on(k, this.params.on[k]));
      this._bind();
      this.update(0);
    }
    get realIndex() { return this.count ? ((this.activeIndex % this.count) + this.count) % this.count : 0; }
    get maxIndex() { return this.slides.length - 1; }
    on(evt, fn) { (this._handlers[evt] = this._handlers[evt] || []).push(fn); return this; }
    _emit(evt) { (this._handlers[evt] || []).forEach(fn => fn(this)); }
    _gap(slide) { return parseFloat(getComputedStyle(slide).marginRight) || 0; }
    _translateFor(index) {
      if (this.params.slidesPerView === 'auto') {
        let x = 0; for (let i = 0; i < index; i++) x += this.slides[i].offsetWidth + this._gap(this.slides[i]);
        const max = Math.max(0, this.wrapper.scrollWidth - this.el.clientWidth);
        return -Math.min(x, max);
      }
      return -index * this.el.clientWidth;
    }
    slideTo(index, speed = this.params.speed) {
      if (!this.loop) index = Math.max(0, Math.min(this.maxIndex, index));
      const prev = this.activeIndex; this.activeIndex = index;
      this.update(speed);
      if (this.loop) {           // Swiper's loopFix: after the move, jump silently back into the original range
        clearTimeout(this._fixTimer);
        this._fixTimer = setTimeout(() => {
          if (this.activeIndex < this.count || this.activeIndex >= 2 * this.count) { this.activeIndex = this.count + this.realIndex; this.update(0); }
        }, speed + 20);
      }
      if (prev !== this.activeIndex) this._emit('slideChange');
    }
    slideToLoop(real) { this.slideTo(this.loop ? this.count + real : real); }
    slideNext() { this.slideTo(this.activeIndex + 1); }
    slidePrev() { this.slideTo(this.activeIndex - 1); }
    update(speed = 0) {
      const width = this.el.clientWidth;
      this.slides.forEach((s, i) => {
        s.classList.toggle('swiper-slide-active', i === this.activeIndex);
        s.classList.toggle('swiper-slide-prev', i === this.activeIndex - 1);
        s.classList.toggle('swiper-slide-next', i === this.activeIndex + 1);
        if (this.loop) {
          const real = this.realIndex;
          s.classList.toggle('swiper-slide-duplicate-active', s.classList.contains('swiper-slide-duplicate') && Number(s.dataset.swiperSlideIndex) === real);
        }
        if (this.fade) {        // Swiper's fade effect: every slide full width, stacked with translate3d, faded by opacity
          s.style.width = width + 'px';
          s.style.transitionDuration = speed + 'ms';
          s.style.opacity = i === this.activeIndex ? '1' : '0';
          s.style.transform = 'translate3d(' + (-i * width) + 'px, 0px, 0px)';
        } else if (this.params.slidesPerView !== 'auto') s.style.width = width + 'px';
      });
      if (!this.fade) {
        this.wrapper.style.transitionDuration = speed + 'ms';
        this.wrapper.style.transform = 'translate3d(' + this._translateFor(this.activeIndex) + 'px, 0px, 0px)';
      }
      const nav = this.params.navigation;
      if (nav) {
        if (nav.prevEl) nav.prevEl.classList.toggle('swiper-button-disabled', !this.loop && this.activeIndex <= 0);
        if (nav.nextEl) nav.nextEl.classList.toggle('swiper-button-disabled', !this.loop && this.activeIndex >= this.maxIndex);
      }
      if (this.bullets) this.bullets.forEach((b, i) => b.classList.toggle('swiper-pagination-bullet-active', i === this.realIndex));
    }
    _bind() {
      const nav = this.params.navigation, pag = this.params.pagination;
      if (nav && nav.prevEl) nav.prevEl.addEventListener('click', () => this.slidePrev());
      if (nav && nav.nextEl) nav.nextEl.addEventListener('click', () => this.slideNext());
      if (pag && pag.el) {
        pag.el.classList.add('swiper-pagination-clickable', 'swiper-pagination-bullets');
        pag.el.innerHTML = '';
        this.bullets = [];
        for (let i = 0; i < this.count; i++) {
          const b = document.createElement('span');
          b.className = 'swiper-pagination-bullet swiper-pagination-index-' + (i + 1);
          b.setAttribute('tabindex', '0'); b.setAttribute('role', 'button'); b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
          b.addEventListener('click', () => this.slideToLoop(i));
          pag.el.appendChild(b); this.bullets.push(b);
        }
      }
      if (this.params.allowTouchMove) {
        let startX = null, startY = null;
        this.el.addEventListener('pointerdown', e => { startX = e.clientX; startY = e.clientY; }, { passive: true });
        this.el.addEventListener('pointerup', e => {
          if (startX == null) return;
          const dx = e.clientX - startX, dy = e.clientY - startY; startX = startY = null;
          if (Math.abs(dx) > 30 && Math.abs(dx) > Math.abs(dy)) { if (dx < 0) this.slideNext(); else this.slidePrev(); }
        }, { passive: true });
      }
      window.addEventListener('resize', () => this.update(0));
      window.addEventListener('rem', () => this.update(0));
    }
  }

  /* ---------- 6. markup helpers ---------- */
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  class Safe { constructor(s) { this.__raw = String(s); } toString() { return this.__raw; } }   // markup already escaped
  const raw = s => new Safe(s);
  const html = (strings, ...vals) => new Safe(strings.reduce((acc, s, i) => {
    if (i >= vals.length) return acc + s;
    const v = vals[i];
    const render = x => (x instanceof Safe ? x.__raw : esc(x));
    return acc + s + (Array.isArray(v) ? v.map(render).join('') : render(v));
  }, ''));
  const frag = key => raw(FRAG[key] || '');                                               // an SDK block, verbatim
  const fmtDate = s => (s || '').slice(0, 10).replace(/-/g, '/');                       // the news info bar shows 2026/10/01
  const fmtDateUS = s => { const d = (s || '').slice(0, 10).split('-'); return d.length === 3 ? d[1] + '/' + d[2] + '/' + d[0] : s; }; // the home video summary shows 09/29/2026
  const audioPlayer = (cls) => html`<div class="m-audio-player ${cls}" data-action="toggle-bgm" role="button" tabindex="0" aria-label="BGM"><img src="${SITE['m-audio-player__icon']}" alt="" class="m-audio-player__icon" style="display: none;"><img src="" alt="" class="m-audio-player__icon m-audio-player__icon--hover" style="display: none;"><img src="${SITE['m-audio-player__icon.m-audio-player__icon--active']}" alt="" class="m-audio-player__icon m-audio-player__icon--active" style=""></div>`;
  const trackEvent = (category, action, label) => { (window.__siteEvents = window.__siteEvents || []).push({ category, action, label, t: Date.now() }); }; // analytics is a service to replace (rule 11)

  /* ---------- 7. data for the home page (asyncData of lang-main, module 1443/1418; chapter 02) ---------- */
  async function loadHome() {
    const lang = store.state.lang;
    const [kv, camps, characters, news, world, videos, videoTree, newsTree, feature] = await Promise.all([
      api.getContentList({ iChanId: CHANNEL_ID_CONFIG.KV, iPageSize: 1, sLangKey: lang }),
      api.getContentList({ iChanId: CHANNEL_ID_CONFIG.CAMPS, iPageSize: PAGE_SIZE.CAMPS, sLangKey: lang }),
      api.getContentList({ iChanId: CHANNEL_ID_CONFIG.CHARACTERS, iPageSize: PAGE_SIZE.CHARACTERS, sLangKey: lang }),
      api.getContentList({ iChanId: CHANNEL_ID_CONFIG.NEWS.ALL, iPageSize: PAGE_SIZE.HOME_NEWS, sLangKey: lang }),
      api.getContentList({ iChanId: CHANNEL_ID_CONFIG.WORLD, iPageSize: PAGE_SIZE.WORLD, sLangKey: lang }),
      api.getContentList({ iChanId: CHANNEL_ID_CONFIG.VIDEO.ALL, iPageSize: PAGE_SIZE.HOME_VIDEO, sLangKey: lang }),
      api.getChildTree({ iChanId: CHANNEL_ID_CONFIG.VIDEO.ALL, iPageSize: PAGE_SIZE.TREE }),
      api.getChildTree({ iChanId: CHANNEL_ID_CONFIG.NEWS.ALL, iPageSize: PAGE_SIZE.TREE }),
      api.getContentList({ iChanId: CHANNEL_ID_CONFIG.FEATURE, iPageSize: PAGE_SIZE.FEATURE, sLangKey: lang }),
    ]);
    store.commit('setCharacterCamps', camps.data.list);
    store.commit('setVideoCates', (videoTree.data.children[0] || {}).children || []);
    store.commit('setNewsCates', (newsTree.data.children[0] || {}).children || []);
    return {
      kv: kv.data.list[0], camps: camps.data.list, characters: characters.data.list,
      news: news.data.list.slice(0, 6),                 // the page keeps up to 6 news for the banner
      world: world.data.list, videos: videos.data.list, feature: feature.data.list,
    };
  }
  const campOf = (record) => store.state.characterCamps.find(c => (record.sChanId || []).includes(String(ext(c)['camp-channel']))) || null;   // camp-and-character module 1154: the camp whose channel the record lists
  const cateName = (cates, record) => { const c = cates.find(x => (record.sChanId || []).includes(String(x.iChanId))); return c ? c.sChanName : record.sCategoryName; };

  /* ---------- 8. desktop tree: the components as captured on /zh-cn/main (header-bar 348, lang-main 1418, footer-bar 203) ---------- */
  const sectionLabel = { character: ['nav2', 'nav2Label'], video: ['navVideo', 'navVideoLabel'], news: ['nav3', 'nav3Label'], world: ['nav5', 'nav5Label'], feature: ['nav4', 'nav4Label'] };
  function sectionNav(scope, key, cls, index, dir) {
    const [label, en] = sectionLabel[key], t = dir === 'right' ? '140%' : '-140%', tn = dir === 'right' ? '120%' : '-140%';
    return html`<div ${raw(scope)} class="section-nav ${cls}"><!----><div class="section-nav-inner"><div class="section-nav-label" style="transform: translate(${t}, 0%);">${word(label).trim()}</div><div class="section-nav-en" style="transform: translate(${t}, 0%);">${word(en).trim()}</div><div class="section-nav-num" style="transform: translate(${tn}, 0%);">0${index}</div></div></div>`;
  }
  const navWord = { main: 'nav1', character: 'nav2', video: 'navVideo', news: 'nav3', world: 'nav5' };
  const moreMenu = () => ['community', 'exchange', 'top_up'].map(k => [word('menu_' + k + '_label'), word('menu_' + k + '_link')]).filter(([l, h]) => l && h);
  function headerMarkup() {
    const links = HEADER_NAVS.map(name => html`<nav class="header__navbar-link" data-nav="${name}"><div class="nav-content" role="button" tabindex="0"><span>${word(navWord[name]).trim()}</span></div><!----></nav>`);
    return html`<header class="header"><div class="header-wrapper">
      <div class="header-wrapper-lt">
        <div class="header__logo lg" data-action="home"><img src="/_nuxt/img/logo.1e072ee.png" alt="${word('gameName')}" class="logo-big" style=""><img src="${word('logoMob')}" alt="${word('gameName')}" class="logo-sm" style="display: none;"></div>
        <div class="header__navbar-links">${links}<nav class="header__navbar-link"><div class="nav-content nav-content-more"><span>${word('menu_more_label')}</span></div><div class="nav-content-sub">${moreMenu().map(([label, href]) => html`<div class="nav-content-sub-item nav-content-sub-item-link"><a href="${href}" target="_blank" rel="noopener">${label}</a><!----></div>`)}</div></nav></div>
      </div>
      <div class="header__navbar"><div class="header__navbar-btns">
        <nav class="header__navbar-link" data-action="download"><div class="nav-content nav-content-download" role="button" tabindex="0"><span>${word('download_label')}</span></div><!----></nav>
        ${audioPlayer('header__bgm')}
        <div class="share header__share"><div class="share__info"><div class="share__icon" role="button" tabindex="0" aria-label="${word('socialFollow')}"></div><div class="share__panel"><div class="share__panel-wrap"><div class="share__title">${word('socialFollow')}</div>${frag('desktop .share__list')}</div></div></div></div>
        ${frag('desktop .header__login')}
      </div></div>
    </div></header>`;
  }
  function kvMarkup(data) {
    const kv = data.kv, e = ext(kv);
    return html`<section class="section section-index">
      <div class="fill fill-bg"><img src="/_nuxt/img/fill-bg.c5ecc5f.png" alt=""></div>
      <div class="fill fill-text" style=""><img src="/_nuxt/img/fill-text.b4d7ce4.png" alt=""></div>
      <div class="home-kv">
        <div class="home-kv-wrap">
          <div class="home-kv__bg"><img src="${img(kv, 'home-kv')}" alt=""><p class="pc_download_tip">${word('pc_download_tip')}</p></div>
          <div class="home-kv-aside"><div class="home-kv__play" style="" data-action="play" data-video="${e['home-youtobe'] || ''}" data-title="${kv.sTitle}" role="button" tabindex="0" aria-label="PV"></div><div class="home-kv__slogan" style=""><img src="${SITE['home-kv__slogan>img']}" alt=""></div></div>
        </div>
        <div class="home-kv__download" style="" data-action="download" role="button" tabindex="0" aria-label="${word('download_label')}"><img src="${word('home_download_icon')}" alt=""></div>
        <img src="" alt="" class="steam-download steam-download--no-webpush" style="display: none;">
        ${frag('desktop .home-btn-container')}
      </div>
    </section>`;
  }
  const sidebarMarkup = () => html`<aside class="sidebar"><div class="sidebar__nav"><div class="sidebar__nav-prev disable" role="button" tabindex="0" aria-label="prev"></div><div class="sidebar__nav-next" role="button" tabindex="0" aria-label="next"></div></div><div class="sidebar__scroll"><ul class="sidebar__pagers" style="transform: translateY(0rem);">${NAVS.map((n, i) => html`<li class="sidebar__pagers-num${i === 0 ? ' sidebar__pagers-num--active' : ''}" data-index="${i}" role="button" tabindex="0" aria-label="0${i + 1}">0${i + 1}</li>`)}</ul></div></aside>`;
  function charactersMarkup(data) {
    const v = raw(SCOPE.character), list = data.characters;
    return html`<section class="section section-character">
      <div class="fill fill-black-right fill-black-right-character" style=""><img src="/_nuxt/img/fill-bar.3e3b1a7.png" alt="" class="fill-black-bar"><img src="/_nuxt/img/fill-black-right.c6c1db1.png" alt=""></div>
      <div class="fill fill-black fill-black-character"><img src="/_nuxt/img/home-page-full-screen-bg.96cb2a8.png" alt=""></div>
      <div ${v} class="home-character">${sectionNav(SCOPE.character, 'character', 'lg', 2)}
        <div ${v} class="home-character__anim font-num"><div ${v} class="en-name-container"><!----><div ${v} class="en-name" style="">${ext(list[0] || {})['chara-name-en'] || ''}</div></div></div>
        <div ${v} class="home-character__main">
          <div ${v} class="home-character__main-panel" style=""></div>
          <div ${v} class="home-character__main-nav">
            <div ${v} class="swiper-container home-character__nav"><div class="swiper-wrapper">${list.map((r, i) => html`<div ${v} class="home-character__nav-item swiper-slide" data-index="${i}" role="button" tabindex="0" aria-label="${r.sTitle}"><img ${v} src="${img(r, 'chara-nav')}" alt=""><div ${v} class="home-character__nav-mask"></div></div>`)}</div></div>
            <div ${v} class="swiper-navigation"><div ${v} slot="button-prev" class="swiper-button-prev" role="button" tabindex="0" aria-label="prev"></div><div ${v} slot="button-next" class="swiper-button-next" role="button" tabindex="0" aria-label="next"></div></div>
          </div>
          <div ${v} class="home-character__main-swiper"><div ${v} class="swiper-container home-character__list"><div class="swiper-wrapper">${list.map(r => { const camp = campOf(r); return html`<div ${v} class="home-character__list-item swiper-slide" data-en="${ext(r)['chara-name-en'] || ''}">
            <div ${v} class="home-character__role" style="transform: translate(140%, 0%);"><img ${v} src="${img(r, 'chara-cover-home')}" alt=""></div>
            <div ${v} class="home-character__shade" style="transform: translate(120%, 0%);"><img ${v} src="${camp ? img(camp, 'camp-shade') : ''}" alt=""></div>
            <div ${v} class="home-character__info" style="transform: translate(120%, 0%);"><div ${v} class="home-character__camp"><span ${v}>${camp ? ext(camp)['camp-name'] : ''}</span></div><div ${v} class="home-character__name" style="transform: translate(140%, 0%);"><span ${v}>${r.sTitle}</span></div></div>
          </div>`; })}</div></div></div>
        </div>
        <div ${v} class="more-btn" data-action="open-active-work" role="button" tabindex="0">${word('learnMore')}</div>
      </div>
    </section>`;
  }
  function videosMarkup(data) {
    const v = raw(SCOPE.video), list = data.videos;
    const videoSrc = r => img(r, 'video-url') || ext(r)['video-youtube'] || '';
    return html`<section class="section section-video">
      <div ${v} class="home-video">${sectionNav(SCOPE.video, 'video', 'right', 3, 'right')}
        <div ${v} class="home-video__content">
          <div ${v} class="swiper-container home-video__main"><div class="swiper-wrapper">${list.map(r => html`<div ${v} class="home-video__main-item swiper-slide" data-action="play" data-video="${videoSrc(r)}" data-title="${r.sTitle}"><img ${v} src="${img(r, 'video-cover')}" alt="" class="home-video__cover"></div>`)}</div></div>
          <div ${v} class="home-video__action"><img ${v} src="${SITE['home-video__action-icon']}" alt="" class="home-video__action-icon" data-action="play-active-video" role="button" tabindex="0" aria-label="play"><a ${v} href="${ROUTES.video}" class="more"><div ${v} class="more-btn">${word('learnMore')}</div></a></div>
          <div ${v} class="home-video__list">
            <div ${v} class="home-video__summary"><div ${v} class="home-video__summary-item"><span ${v} class="home-video__summary-category"></span><span ${v} class="home-video__summary-date"></span></div><div ${v} class="home-video__summary-title"></div></div>
            <div ${v} class="home-video__nav-container">
              <div ${v} class="home-video__nav"><div ${v} class="home-video__nav-track" style="transform: translateX(0px);">${list.map((r, i) => html`<div ${v} class="home-video__nav-item" data-index="${i}" role="button" tabindex="0" aria-label="${r.sTitle}"><img ${v} src="${img(r, 'video-cover')}" alt=""><div ${v} class="home-video__nav-mask"></div></div>`)}</div></div>
              <div ${v} class="swiper-navigation"><div ${v} class="swiper-button-prev" role="button" tabindex="0" aria-label="prev"></div><div ${v} class="swiper-button-next" role="button" tabindex="0" aria-label="next"></div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="fill-film-bar"></div>
      <img src="/_nuxt/img/fill-film-bg.bbdc31c.png" alt="" class="fill-black-bar-video">
    </section>`;
  }
  const newsLink = r => `${ROUTES.news}/${r.iInfoId}`;
  const worldLink = r => `${ROUTES.world}/${r.iInfoId}`;
  function newsMarkup(data) {
    const v = raw(SCOPE.news), list = data.news;
    return html`<section class="section section-news">
      <div ${v} class="home-news"><div ${v} class="home-news-wrap">${sectionNav(SCOPE.news, 'news', 'lg', 4)}
        <img ${v} src="/_nuxt/img/news-page-bg.2b65d54.png" alt="news-page-bg" class="home-news__page-bg">
        <div ${v} class="home-news-container" style="transform: translate(0%, 40%);">
          <div ${v} class="home-news__banner">
            <div ${v} class="swiper-container home-news__banner-list"><div class="swiper-wrapper">${list.map(r => html`<div ${v} class="home-news__banner-item swiper-slide"><a ${v} href="${newsLink(r)}" class="home-news__banner-img"><img ${v} src="${img(r, 'news-banner')}" alt="news-banner"></a></div>`)}</div></div>
            <div ${v} class="home-news__summary"><span ${v} class="home-news__summary-scroll"></span></div>
          </div>
          <div ${v} class="home-news__info"><a ${v} href="${newsLink(list[0] || {})}" class=""><div ${v} class="date"></div><div ${v} class="title ellipsis"></div></a></div>
          <div ${v} class="home-news__pagination"><div ${v} slot="pagination" class="swiper-pagination"></div></div>
          <a ${v} href="${ROUTES.news}" class="more"><div ${v} class="more-btn">${word('learnMore')}</div></a>
        </div>
      </div></div>
    </section>`;
  }
  function worldMarkup(data) {
    const v = raw(SCOPE.world), list = data.world;
    return html`<section class="section section-world">
      <div ${v} class="home-world"><div ${v} class="home-world-wrap">${sectionNav(SCOPE.world, 'world', 'lg', 5, 'right')}
        <div ${v} class="home-world__banner" style="transform: translate(0%, 40%);">
          <div ${v} class="swiper-container home-world__banner-list"><div class="swiper-wrapper">${list.map(r => html`<div ${v} class="home-world__banner-item swiper-slide"><a ${v} href="${worldLink(r)}" class="home-world__banner-img" title="${ext(r)['world-name'] || r.sTitle}"><img ${v} src="${img(r, 'world-home-banner')}" alt="world-banner"></a></div>`)}</div>
            <div ${v} class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide"></div><div ${v} class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide"></div></div>
        </div>
      </div>
        <div ${v} class="section__concept"><div ${v} class="section__concept-bg"></div><a ${v} href="${word('conceptLink')}" target="_blank" rel="noopener">
          <div ${v} class="section__concept-title"><div ${v} class="section__concept-title-content"><div ${v} class="section__concept-title-label">${word('conceptTitle')}</div><div ${v} class="section__concept-title-sub">${word('conceptSubtitle')}</div></div></div>
          <div ${v} class="section__concept-icon"></div>
          <div ${v} class="section__concept-video">${frag('desktop .section__concept-video-mp4')}<div ${v} class="section__concept-video-tv"></div><div ${v} class="section__concept-video-play"></div></div>
        </a></div>
      </div>
    </section>`;
  }
  function featureMarkup(data) {
    const v = raw(SCOPE.feature), list = data.feature;
    return html`<section class="section section-feature">
      <img src="/_nuxt/img/fill-film-bg.bbdc31c.png" alt="" class="fill-black-bar-feature">
      <div ${v} class="home-feature">${sectionNav(SCOPE.feature, 'feature', 'lg', 6)}
        <div ${v} class="home-feature__swiper">
          <div ${v} class="swiper-container home-feature__list"><div class="swiper-wrapper">${list.map(r => html`<div ${v} class="home-feature__list-item swiper-slide" data-title="${r.sTitle}" data-summary="${r.sIntro || ''}"><div ${v} class="home-feature__banner"><img ${v} src="${img(r, 'feature-banner')}" alt=""></div></div>`)}</div></div>
          <div ${v} class="swiper-navigation"><div ${v} slot="button-prev" class="swiper-button-prev feat-swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide"></div><div ${v} slot="button-next" class="swiper-button-next feat-swiper-button-next" tabindex="0" role="button" aria-label="Next slide"></div></div>
          <div ${v} class="home-feature__info"><div ${v} class="home-feature__info-bar"></div><div ${v} class="home-feature__info-title ellipsis" style=""></div><div ${v} class="home-feature__info-summary ellipsis" style=""></div></div>
        </div>
      </div>
    </section>`;
  }
  // the three-part footer (chapter 18), lifted verbatim: the site-owned strip (back-top, social icons, copy link), the CRM block
  // as the page carried it (hidden by the SDK), and the corporate footer with its locale picker
  const footerMarkup = (tree, mob) => html`<div ${raw(SCOPE.footer)} class="footer${mob ? ' mob' : ''}">${frag(tree + ' .footer__wrap')}${frag('desktop .footer-crm')}${frag(tree + ' #footer')}</div>`;
  // the overlay player (video-dialog 1157, styles 1168 + 1280): the message-box mask of the bridge library around the pc video container
  const dialogMarkup = (mob) => html`<div class="mhy-bridge-message-box-mask video-dialog" style="display: none;" data-action="close-dialog"><div class="home-pv"><div class="custom-mihoyo-common-container" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"><div class="home-pv-close" data-action="close-dialog" role="button" tabindex="0" aria-label="${word('textClose')}"></div><div ${raw(SCOPE.dialog)} class="video-container ${mob ? 'mob' : 'pc'}"><div ${raw(SCOPE.dialog)} class="video-frame video-placeholder" style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; background: #000; color: #d6d6d6; font-size: .22rem; text-align: center;"></div></div></div></div></div>`;

  function desktopMarkup(data) {
    return html`<div class="root page-enter">${headerMarkup(data)}
      <div class="home"><div class="section-wrap">${kvMarkup(data)}${charactersMarkup(data)}${videosMarkup(data)}${newsMarkup(data)}${worldMarkup(data)}${featureMarkup(data)}</div>${sidebarMarkup()}</div>
      ${footerMarkup('desktop', false)}${dialogMarkup(false)}
    </div>`;
  }

  /* behaviours of the desktop page */
  function mountDesktop(root, data) {
    const $ = (sel, ctx = root) => ctx.querySelector(sel), $$ = (sel, ctx = root) => Array.from(ctx.querySelectorAll(sel));

    // 02 characters: a thumbnail strip (slidesPerView auto) paired with a fade list, kept on the same index (module 1418 home-character)
    const charNav = $('.home-character__main-nav');
    const navSwiper = new MiniSwiper($('.home-character__nav'), { slidesPerView: 'auto', speed: 300, allowTouchMove: false });
    const listSwiper = new MiniSwiper($('.home-character__list'), { effect: 'fade', speed: 300, allowTouchMove: false });
    const enName = $('.home-character__anim .en-name'), navItems = $$('.home-character__nav-item');
    const syncWorks = () => {
      navItems.forEach((n, i) => n.classList.toggle('swiper-slide-thumb-active', i === listSwiper.activeIndex));
      const active = listSwiper.slides[listSwiper.activeIndex];
      if (active && enName.textContent !== active.dataset.en) {   // the English name slides in from the right (GSAP on the site)
        enName.style.transition = 'none'; enName.style.transform = 'translate(100%, 0%)'; enName.textContent = active.dataset.en;
        requestAnimationFrame(() => { enName.style.transition = 'transform .6s cubic-bezier(0.215, 0.61, 0.355, 1)'; enName.style.transform = 'translate(0%, 0%)'; });
      }
    };
    navItems.forEach((n, i) => n.addEventListener('click', () => { listSwiper.slideTo(i); navSwiper.slideTo(Math.max(0, i - 1)); trackEvent('character_icon', 'click', data.characters[i].iInfoId); }));
    $('.swiper-button-prev', charNav).addEventListener('click', () => { const t = Math.max(0, listSwiper.activeIndex - 3); listSwiper.slideTo(t); navSwiper.slideTo(t); trackEvent('next_character', 'click', ''); });   // handlePrev/handleNext move by 3
    $('.swiper-button-next', charNav).addEventListener('click', () => { const t = Math.min(listSwiper.maxIndex, listSwiper.activeIndex + 3); listSwiper.slideTo(t); navSwiper.slideTo(t); trackEvent('next_character', 'click', ''); });
    const syncCharNav = () => { $('.swiper-button-prev', charNav).classList.toggle('swiper-button-disabled', listSwiper.activeIndex === 0); $('.swiper-button-next', charNav).classList.toggle('swiper-button-disabled', listSwiper.activeIndex >= listSwiper.maxIndex); };
    listSwiper.on('slideChange', () => { syncWorks(); syncCharNav(); }); syncWorks(); syncCharNav();
    $('[data-action="open-active-work"]').addEventListener('click', () => { trackEvent('character_more', 'click', ''); location.href = ROUTES.character; });

    // 03 videos: fade main + translating thumbnail track (module 1418 home-video: navTx = -min(activeIndex × navStep, maxTranslate))
    const videoSwiper = new MiniSwiper($('.home-video__main'), { effect: 'fade', speed: 300 });
    const track = $('.home-video__nav-track'), navEls = $$('.home-video__nav-item'), navBox = $('.home-video__nav');
    const videoNavBtns = { prev: $('.home-video__nav-container .swiper-button-prev'), next: $('.home-video__nav-container .swiper-button-next') };
    const summary = { cat: $('.home-video__summary-category'), date: $('.home-video__summary-date'), title: $('.home-video__summary-title') };
    const syncVideo = () => {
      const i = videoSwiper.activeIndex, r = data.videos[i];
      navEls.forEach((n, k) => n.classList.toggle('is-active', k === i));
      summary.cat.textContent = cateName(store.state.videoCates, r); summary.date.textContent = fmtDateUS(r.dtStartTime); summary.title.textContent = r.sTitle;
      requestAnimationFrame(() => {
        const step = navEls[1] ? navEls[1].offsetLeft - navEls[0].offsetLeft : 0;
        const maxTranslate = Math.max(0, track.scrollWidth - navBox.clientWidth);
        track.style.transform = 'translateX(' + (-Math.min(i * step, maxTranslate)) + 'px)';
      });
      videoNavBtns.prev.classList.toggle('swiper-button-disabled', i === 0);
      videoNavBtns.next.classList.toggle('swiper-button-disabled', i === videoSwiper.maxIndex);
    };
    navEls.forEach((n, i) => n.addEventListener('click', () => videoSwiper.slideTo(i)));
    videoNavBtns.prev.addEventListener('click', () => { videoSwiper.slidePrev(); trackEvent('next_video', 'click', ''); });
    videoNavBtns.next.addEventListener('click', () => { videoSwiper.slideNext(); trackEvent('next_video', 'click', ''); });
    videoSwiper.on('slideChange', syncVideo); syncVideo();
    window.addEventListener('rem', syncVideo);

    // 04 news: looping banner carousel with bullets (6 records → 18 slides), the record's date and title beside it, its intro as the 20 s marquee
    const newsSwiper = new MiniSwiper($('.home-news__banner-list'), { slidesPerView: 'auto', loop: true, speed: 300, pagination: { el: $('.home-news__pagination .swiper-pagination') } });
    const newsInfo = { link: $('.home-news__info a'), date: $('.home-news__info .date'), title: $('.home-news__info .title'), summary: $('.home-news__summary-scroll') };
    const syncNews = () => { const r = data.news[newsSwiper.realIndex]; newsInfo.link.href = newsLink(r); newsInfo.date.textContent = fmtDate(r.dtStartTime); newsInfo.title.textContent = r.sTitle; newsInfo.summary.textContent = r.sIntro; };
    newsSwiper.on('slideChange', syncNews); syncNews();

    // 05 world: looping banner swiper with prev/next inside the container (3 records → 9 slides), 800 ms as measured
    const worldList = $('.home-world__banner-list');
    new MiniSwiper(worldList, { slidesPerView: 'auto', loop: true, speed: 800, navigation: { prevEl: $('.swiper-button-prev', worldList), nextEl: $('.swiper-button-next', worldList) } });

    // 06 feature: fade list, loop true, with the info bar reading the active slide
    const featBox = $('.home-feature__swiper');
    const featureSwiper = new MiniSwiper($('.home-feature__list'), { effect: 'fade', loop: true, speed: 300, navigation: { prevEl: $('.swiper-button-prev', featBox), nextEl: $('.swiper-button-next', featBox) } });
    const featInfo = { title: $('.home-feature__info-title'), summary: $('.home-feature__info-summary') };
    const syncFeature = () => { const s = featureSwiper.slides[featureSwiper.activeIndex]; featInfo.title.textContent = s.dataset.title; featInfo.summary.textContent = s.dataset.summary; };
    featureSwiper.on('slideChange', syncFeature); syncFeature();

    // sidebar pager: six numbers bound to store.homeSection, written by both the click handler and the scroll listener (module 1418 sidebar)
    const sections = $$('.section'), pagers = $$('.sidebar__pagers-num'), pagerWrap = $('.sidebar__pagers');
    const prevBtn = $('.sidebar__nav-prev'), nextBtn = $('.sidebar__nav-next');
    let activePageIndex = 0, isProgrammaticScroll = false, programmaticTimer = null;
    const navHeightRem = () => pagers[1] ? (pagers[1].offsetTop - pagers[0].offsetTop) / rem : 2.44;   // measured from the pager offsets, as the site does
    function renderSidebar() {
      pagers.forEach((p, i) => p.classList.toggle('sidebar__pagers-num--active', i === activePageIndex));
      pagerWrap.style.transform = 'translateY(-' + (activePageIndex * navHeightRem()) + 'rem)';
      prevBtn.classList.toggle('disable', activePageIndex === 0);
      nextBtn.classList.toggle('disable', activePageIndex === NAVS.length - 1);
    }
    function getActiveSectionIndex(scrollPosition) {
      if (!sections.length) return 0;
      const probeY = scrollPosition + 0.5 * window.innerHeight, last = sections.length - 1;
      for (let i = last; i >= 0; i--) { const top = sections[i].offsetTop, bottom = top + sections[i].offsetHeight; if (probeY >= top && probeY < bottom) return i; }
      return probeY >= sections[last].offsetTop ? last : 0;
    }
    function setActivePageIndex(next) {
      if (activePageIndex === next) return;
      activePageIndex = next; store.commit('setHomeSection', NAVS[next].link); renderSidebar(); syncRoute();
    }
    function goTo(index) {
      index = Math.max(0, Math.min(NAVS.length - 1, index));
      isProgrammaticScroll = true; clearTimeout(programmaticTimer);
      activePageIndex = index; store.commit('setHomeSection', NAVS[index].link); renderSidebar(); syncRoute();
      window.scrollTo({ top: sections[index].offsetTop, behavior: 'smooth' });
      programmaticTimer = setTimeout(() => { isProgrammaticScroll = false; }, 1200);
    }
    pagers.forEach((p, i) => p.addEventListener('click', () => goTo(i)));
    prevBtn.addEventListener('click', () => goTo(activePageIndex - 1));
    nextBtn.addEventListener('click', () => goTo(activePageIndex + 1));
    renderSidebar();

    // header: nav entries push a route (here a hash route) and scroll; the active state derives from the route name
    function syncRoute() {
      const name = NAVS[activePageIndex].link;
      if (location.hash !== '#/' + name) history.replaceState(null, '', '#/' + name);
      $$('.header__navbar-link[data-nav]').forEach(n => n.classList.toggle('header__navbar-link--active', n.dataset.nav === name));
    }
    $$('.header__navbar-link[data-nav]').forEach(n => n.addEventListener('click', () => { const i = NAVS.findIndex(x => x.link === n.dataset.nav); history.pushState(null, '', '#/' + n.dataset.nav); goTo(i); trackEvent('nav', 'click', n.dataset.nav); }));
    $('[data-action="home"]').addEventListener('click', () => goTo(0));
    const logoBig = $('.logo-big'), logoSm = $('.logo-sm');
    const backTop = $('.footer .backTop');
    let scrolled = null;
    function onScroll() {
      const y = window.pageYOffset || document.documentElement.scrollTop;
      if (!isProgrammaticScroll) setActivePageIndex(getActiveSectionIndex(y));
      const isScrolled = y > rem;                      // the logo swap (logoBig / logoSmall transitions, .7 s, module 673)
      if (isScrolled !== scrolled) {
        scrolled = isScrolled;
        logoBig.style.transition = 'opacity .7s ease, transform .7s ease'; logoSm.style.transition = 'opacity .7s ease';
        if (isScrolled) { logoBig.style.opacity = '0'; logoBig.style.transform = 'scale(0.28)'; logoSm.style.display = ''; logoSm.style.opacity = '0'; requestAnimationFrame(() => { logoSm.style.opacity = '1'; }); setTimeout(() => { if (scrolled) logoBig.style.display = 'none'; }, 700); }
        else { logoBig.style.display = ''; requestAnimationFrame(() => { logoBig.style.opacity = '1'; logoBig.style.transform = 'scale(1)'; }); logoSm.style.opacity = '0'; setTimeout(() => { if (!scrolled) logoSm.style.display = 'none'; }, 700); }
      }
      if (backTop) backTop.classList.toggle('backTop--show', y > rem);
      store.commit('setHomeScroll', y);
    }
    let ticking = false;
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; onScroll(); }); } }, { passive: true });
    onScroll();

    // section entrances: the captured DOM carries the pre-entrance transforms inline (section labels at ±140%, the character
    // stage and its panels 120–140% to the right, the news container and the world banner 40% down); GSAP ScrollTrigger
    // drives them to 0 when the section enters on the site, and the handbook keeps entrances at 0.3 s
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const entrances = [['.section-nav-label', 0], ['.section-nav-en', 80], ['.section-nav-num', 160], ['.home-character__role', 0], ['.home-character__shade', 120], ['.home-character__info', 200], ['.home-character__name', 280], ['.home-news-container', 0], ['.home-world__banner', 0]];
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      entrances.forEach(([sel, delay]) => e.target.querySelectorAll(sel).forEach(el => { el.style.transition = reduceMotion ? 'none' : 'transform .3s cubic-bezier(0.215, 0.61, 0.355, 1) ' + delay + 'ms'; el.style.transform = 'translate(0%, 0%)'; }));
    }), { threshold: 0.18 });
    sections.forEach(s => io.observe(s));

    commonBehaviours(root, data, { goTo });
    const m = /^#\/(\w+)/.exec(location.hash); const idx = m ? NAVS.findIndex(n => n.link === m[1]) : -1;
    if (idx > 0) setTimeout(() => goTo(idx), 60);
  }

  /* ---------- 9. phone tree: the components as captured on /m/zh-cn/main (m-header-bar 349, m-lang-main 1419; chapters 26–28) ---------- */
  function mSectionNav(scope, key, cls, index) {
    const [label, en] = sectionLabel[key];
    return html`<div ${raw(scope)} class="${cls}"><!----><div class="m-section-nav-inner"><div class="m-section-nav-label">${word(label).trim()}</div><div class="m-section-nav-en">${word(en).trim()}</div><div class="m-section-nav-num">0${index}</div></div></div>`;
  }
  function mobileMarkup(data) {
    const kv = data.kv, e = ext(kv);
    const C = raw(SCOPE.mCharacter), V = raw(SCOPE.mVideo), N = raw(SCOPE.mNews), W = raw(SCOPE.mWorld), F = raw(SCOPE.mFeature);
    const videoSrc = r => img(r, 'video-url') || ext(r)['video-youtube'] || '';
    return html`<div class="root page-enter">
      <header class="m-header">
        <div class="m-header-wrap">
          <div class="m-header__logo" data-action="home"><div class="logo-icon logo-icon__light"></div><img src="${word('logoMob')}" alt="${word('gameName')}" class="logoSmall-img" style="display: none;"></div>
          <div class="m-header-right"><div class="m-header__download" data-action="download" role="button" tabindex="0" aria-label="${word('download_label')}"><img src="${word('m_download_btn')}"></div>${audioPlayer('m-header__bgm')}</div>
        </div>
        <div class="m-header__menu-btn" data-action="open-menu" role="button" tabindex="0" aria-label="menu"></div>
        ${frag('phone .m-header__menu')}
      </header>
      <div class="home">
        <section class="section m-home-kv"><div class="m-home-kv-wrap"><div class="m-home-kv__bg"><img src="${img(kv, 'home-kv-m')}" alt=""></div><div class="m-home-kv__slogan"><img src="${SITE['m-home-kv__slogan>img']}" alt=""></div><div class="m-home-kv__aside"><div class="m-home-kv__play" data-action="play" data-video="${e['home-youtobe'] || ''}" data-title="${kv.sTitle}" role="button" tabindex="0" aria-label="PV"><img src="${SITE['m-home-kv__play>img']}" alt=""></div></div></div></section>
        <section class="section"><div ${C} class="m-home-character">${mSectionNav(SCOPE.mCharacter, 'character', 'character-page-tab__m m-section-nav font-num lg', 2)}
          <div ${C} class="m-home-character__anim"><div ${C}>${ext(data.characters[0] || {})['chara-name-en'] || ''}</div></div>
          <div ${C} class="m-home-character__main"><div ${C} class="m-home-character__main-panel"></div>
            <div ${C} class="m-home-character__main-nav"><div ${C} class="swiper-container m-home-character__nav"><div class="swiper-wrapper">${data.characters.map((r, i) => html`<div ${C} class="m-home-character__nav-item swiper-no-swiping swiper-slide" data-index="${i}" role="button" tabindex="0" aria-label="${r.sTitle}"><img ${C} src="${img(r, 'chara-nav')}" alt=""><div ${C} class="m-home-character__nav-mask"></div></div>`)}</div></div><div ${C} class="swiper-navigation"><div ${C} slot="button-prev" class="swiper-button-prev cha-swiper-button-prev" role="button" tabindex="0" aria-label="prev"></div><div ${C} slot="button-next" class="swiper-button-next cha-swiper-button-next" role="button" tabindex="0" aria-label="next"></div></div></div>
            <div ${C} class="m-home-character__main-swiper"><div ${C} class="swiper-container m-home-character__list"><div class="swiper-wrapper">${data.characters.map(r => { const camp = campOf(r); return html`<div ${C} class="m-home-character__list-item swiper-no-swiping swiper-slide" data-en="${ext(r)['chara-name-en'] || ''}"><div ${C} class="m-home-character__role"><img ${C} src="${img(r, 'chara-cover-m')}" alt=""></div><div ${C} class="m-home-character__shade"><img ${C} src="${camp ? img(camp, 'camp-shade-m') : ''}" alt=""></div><div ${C} class="m-home-character__info"><div ${C} class="m-home-character__camp">${camp ? ext(camp)['camp-name'] : ''}</div><div ${C} class="m-home-character__name">${r.sTitle}</div></div></div>`; })}</div></div></div>
          </div>
          <div ${C} class="m-more-btn" data-action="open-active-work" role="button" tabindex="0">${word('learnMore')}</div>
        </div></section>
        <section class="section"><div ${V} class="m-home-video">${mSectionNav(SCOPE.mVideo, 'video', 'm-section-nav font-num lg right', 3)}
          <div ${V} class="m-home-video__banner"><div ${V} class="swiper-container m-home-video__banner-list"><div class="swiper-wrapper">${data.videos.map(r => html`<div ${V} class="m-home-video__banner-item swiper-slide"><img ${V} src="${img(r, 'video-cover')}" alt="" class="m-home-video__cover" data-action="play" data-video="${videoSrc(r)}" data-title="${r.sTitle}"></div>`)}</div></div>
            <div ${V} class="m-home-video__action"><img ${V} src="${SITE['m-home-video__play']}" alt="" class="m-home-video__play" data-action="play-active-video" role="button" tabindex="0" aria-label="play"><a ${V} href="${ROUTES.video}" class="more"><div ${V} class="m-more-btn">${word('learnMore')}</div></a></div></div>
          <div ${V} class="swiper-navigation"><div ${V} class="swiper-button-prev" role="button" tabindex="0" aria-label="prev"></div><div ${V} class="swiper-button-next" role="button" tabindex="0" aria-label="next"></div></div>
          <div ${V} class="m-home-video__summary"><div ${V} class="m-home-video__summary-category"></div><div ${V} class="m-home-video__summary-title"></div></div>
          <img ${V} src="/_nuxt/img/video-bottom-film-bg.25679c3.png" alt="video-bottom-film-bg" class="m-home-video__bottom-film-bg"><img ${V} src="${SITE['m-home-video__right-film-bg']}" alt="video-right-film-bg" class="m-home-video__right-film-bg">
        </div></section>
        <section class="section"><div ${N} class="m-home-news">${mSectionNav(SCOPE.mNews, 'news', 'm-section-nav font-num lg', 4)}
          <img ${N} src="${SITE['m-home-news__bg']}" alt="news-bg-m" class="m-home-news__bg">
          <div ${N} class="m-home-news__banner"><div ${N} class="swiper-container m-home-news__banner-list"><div class="swiper-wrapper">${data.news.map(r => html`<div ${N} class="m-home-news__banner-item swiper-slide"><a ${N} href="${newsLink(r)}" class="m-home-news__banner-img"><img ${N} src="${img(r, 'news-banner')}" alt="news-banner"></a></div>`)}</div></div><div ${N} class="m-home-news__summary"><span ${N} class="m-home-news__summary-scroll" style=""></span></div></div>
          <a ${N} href="${ROUTES.news}" class="more"><div ${N} class="m-more-btn">${word('learnMore')}</div></a>
        </div></section>
        <section class="section"><div ${W} class="m-home-world">${mSectionNav(SCOPE.mWorld, 'world', 'm-section-nav font-num lg', 5)}
          <div ${W} class="m-home-world__banner"><div ${W} class="swiper-container m-home-world__banner-list"><div class="swiper-wrapper">${data.world.map(r => html`<div ${W} class="m-home-world__banner-item swiper-slide"><a ${W} href="${worldLink(r)}" class="m-home-world__banner-img"><img ${W} src="${img(r, 'world-home-banner')}" alt="world-banner"></a></div>`)}</div><div ${W} class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide"></div><div ${W} class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide"></div></div></div>
          <div ${W} class="section__concept"><a ${W} href="${word('conceptLink')}" target="_blank" rel="noopener"><div ${W} class="section__concept-title"><div ${W} class="section__concept-title-label">${word('conceptTitle')}</div></div><div ${W} class="section__concept-video">${frag('phone .section__concept-video-mp4')}<div ${W} class="section__concept-video-tv"></div><div ${W} class="section__concept-video-play"></div></div></a></div>
        </div></section>
        <section class="section"><div ${F} class="m-home-feature">${mSectionNav(SCOPE.mFeature, 'feature', 'm-section-nav font-num lg', 6)}
          <div ${F} class="m-home-feature__swiper"><div ${F} class="swiper-container m-home-feature__list"><div class="swiper-wrapper">${data.feature.map(r => html`<div ${F} class="m-home-feature__list-item swiper-slide" data-title="${r.sTitle}" data-summary="${r.sIntro || ''}"><div ${F} class="m-home-feature__banner"><img ${F} src="${img(r, 'feature-banner-m') || img(r, 'feature-banner')}" alt=""></div></div>`)}</div></div><div ${F} class="m-home-feature__info"><div ${F} class="m-home-feature__info-bar"></div><div ${F} class="m-home-feature__info-title ellipsis"></div><div ${F} class="m-home-feature__info-summary ellipsis"></div></div></div>
          <div ${F} class="m-home-feature__navigator"><div ${F} slot="button-prev" class="swiper-button-prev feat-swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide"></div><div ${F} slot="button-next" class="swiper-button-next feat-swiper-button-next" tabindex="0" role="button" aria-label="Next slide"></div></div>
        </div></section>
        <section class="section m-news"><div class="m-news-container"><div class="m-news-main"><div class="m-news-list"></div><div class="m-news-foot"><div class="load-more" data-action="load-more" role="button" tabindex="0">${word('loadMore')}</div></div></div></div></section>
      </div>
      ${frag('phone .m-preregister-container')}
      ${footerMarkup('phone', true)}${dialogMarkup(true)}
    </div>`;
  }
  function mountMobile(root, data) {
    const $ = (sel, ctx = root) => ctx.querySelector(sel), $$ = (sel, ctx = root) => Array.from(ctx.querySelectorAll(sel));
    // menu: a child panel of the fixed bar shown by the menu button; body overflow hidden while open (measured in chapter 40)
    const menu = $('.m-header__menu');
    $('[data-action="open-menu"]').addEventListener('click', () => { menu.style.display = ''; document.body.style.overflow = 'hidden'; });
    const closeMenu = () => { menu.style.display = 'none'; document.body.style.overflow = ''; };
    $('.m-header__menu-close').addEventListener('click', closeMenu);
    menu.addEventListener('click', e => { if (e.target === menu) closeMenu(); });
    const sectionFor = { main: '.m-home-kv', character: '.m-home-character', video: '.m-home-video', news: '.m-home-news', world: '.m-home-world', feature: '.m-home-feature' };
    const menuLinks = $$('.m-header__menu-link');
    const goTo = name => { const s = $(sectionFor[name] || sectionFor.main); if (s) window.scrollTo({ top: s.getBoundingClientRect().top + window.pageYOffset - 1.1 * rem, behavior: 'smooth' }); history.replaceState(null, '', '#/' + name); menuLinks.forEach((l, i) => l.classList.toggle('m-header__menu-link--active', HEADER_NAVS[i] === name)); };
    menuLinks.forEach((l, i) => l.addEventListener('click', () => { if (HEADER_NAVS[i]) { closeMenu(); goTo(HEADER_NAVS[i]); } else l.classList.toggle('m-header__menu-link--open'); }));   // the lifted menu lists the five sections and the "more" entry in the site's order
    $('[data-action="home"]').addEventListener('click', () => goTo('main'));
    // characters
    const mCharNav = $('.m-home-character__main-nav');
    const mList = new MiniSwiper($('.m-home-character__list'), { effect: 'fade', speed: 300, allowTouchMove: false });
    const mNav = new MiniSwiper($('.m-home-character__nav'), { slidesPerView: 'auto', speed: 300, allowTouchMove: false });
    const mNavItems = $$('.m-home-character__nav-item'), mEn = $('.m-home-character__anim > div');
    const mPrev = $('.swiper-button-prev', mCharNav), mNext = $('.swiper-button-next', mCharNav);
    const syncM = () => { mNavItems.forEach((n, i) => n.classList.toggle('swiper-slide-thumb-active', i === mList.activeIndex)); mEn.textContent = mList.slides[mList.activeIndex].dataset.en; mPrev.classList.toggle('swiper-button-disabled', mList.activeIndex === 0); mNext.classList.toggle('swiper-button-disabled', mList.activeIndex >= mList.maxIndex); };
    mNavItems.forEach((n, i) => n.addEventListener('click', () => { mList.slideTo(i); mNav.slideTo(Math.max(0, i - 1)); }));
    mPrev.addEventListener('click', () => { const t = Math.max(0, mList.activeIndex - 1); mList.slideTo(t); mNav.slideTo(t); });
    mNext.addEventListener('click', () => { const t = Math.min(mList.maxIndex, mList.activeIndex + 1); mList.slideTo(t); mNav.slideTo(t); });
    mList.on('slideChange', syncM); syncM();
    $('[data-action="open-active-work"]').addEventListener('click', () => { location.href = ROUTES.character; });
    // videos (slide, prev/next in the section), news (loop + marquee), world (loop with arrows, 800 ms), feature (fade loop with the navigator)
    const vNav = $('.m-home-video .swiper-navigation');
    const vSw = new MiniSwiper($('.m-home-video__banner-list'), { speed: 300, navigation: { prevEl: $('.swiper-button-prev', vNav), nextEl: $('.swiper-button-next', vNav) } });
    const vSum = { cat: $('.m-home-video__summary-category'), title: $('.m-home-video__summary-title') };
    const syncV = () => { const r = data.videos[vSw.activeIndex]; vSum.cat.textContent = cateName(store.state.videoCates, r); vSum.title.textContent = r.sTitle; }; vSw.on('slideChange', syncV); syncV();
    const nSw = new MiniSwiper($('.m-home-news__banner-list'), { slidesPerView: 'auto', loop: true, speed: 300 }); const nSum = $('.m-home-news__summary-scroll');
    const syncN = () => { nSum.textContent = data.news[nSw.realIndex].sIntro; }; nSw.on('slideChange', syncN); syncN();
    const wList = $('.m-home-world__banner-list');
    new MiniSwiper(wList, { slidesPerView: 'auto', loop: true, speed: 800, navigation: { prevEl: $('.swiper-button-prev', wList), nextEl: $('.swiper-button-next', wList) } });
    const fNav = $('.m-home-feature__navigator');
    const fSw = new MiniSwiper($('.m-home-feature__list'), { effect: 'fade', loop: true, speed: 300, navigation: { prevEl: $('.swiper-button-prev', fNav), nextEl: $('.swiper-button-next', fNav) } });
    const fInfo = { title: $('.m-home-feature__info-title'), summary: $('.m-home-feature__info-summary') };
    const syncF = () => { const s = fSw.slides[fSw.activeIndex]; fInfo.title.textContent = s.dataset.title; fInfo.summary.textContent = s.dataset.summary; }; fSw.on('slideChange', syncF); syncF();
    // the load-more list of the phone news page (module 1415, styles 1312): phone pages replace paging with load-more lists
    const listEl = $('.m-news-list'), foot = $('.m-news-foot'), loadBtn = $('[data-action="load-more"]');
    let page = 0, total = Infinity;
    async function loadMore() {
      page += 1;
      const res = await api.getContentList({ iChanId: CHANNEL_ID_CONFIG.NEWS.ALL, iPageSize: PAGE_SIZE.LOAD_MORE, iPage: page });
      total = res.data.iTotal;
      res.data.list.forEach(r => listEl.insertAdjacentHTML('beforeend', html`<a href="${newsLink(r)}" class="m-news-list__item"><div class="m-news-list__item-banner"><img src="${img(r, 'news-banner')}" alt="banner"></div><div class="m-news-list__item-content"><div class="m-news-list__item-date"><div>${fmtDate(r.dtStartTime)}</div><div class="news-tag mobile">${cateName(store.state.newsCates, r)}</div></div><div class="m-news-list__item-title ellipsis">${r.sTitle}</div><div class="m-news-list__item-desc ellipsis">${r.sIntro}</div></div></a>`));
      if (page * PAGE_SIZE.LOAD_MORE >= total) { loadBtn.remove(); foot.insertAdjacentHTML('beforeend', html`<div class="no-more">${word('noMore')}</div>`); }
    }
    loadBtn.addEventListener('click', loadMore); loadMore();
    // pre-register bar expand / collapse (module 1307), lifted verbatim: the arrow toggles it, the button downloads
    const pre = $('.m-preregister-container');
    if (pre) { pre.querySelector('.preregister-arrow').addEventListener('click', () => pre.classList.toggle('expand')); pre.querySelector('.download-btn').addEventListener('click', () => { trackEvent('popup_download', 'click', 'm'); window.open(word('pc_download_link'), '_blank', 'noopener'); }); }
    // header state on scroll (the page tracks scroll itself: onScroll → fixedPos); the logo swaps like the desktop one
    const logoIcon = $('.m-header-wrap .logo-icon'), logoSmall = $('.m-header__logo .logoSmall-img'), backTop = $('.footer .backTop');
    let scrolled = null;
    const onScroll = () => {
      const y = window.pageYOffset || document.documentElement.scrollTop;
      const isScrolled = y > 1.1 * rem;
      if (isScrolled !== scrolled) { scrolled = isScrolled; logoIcon.style.opacity = isScrolled ? '0' : '1'; logoIcon.style.transform = isScrolled ? 'scale(0.28)' : 'scale(1)'; logoSmall.style.display = isScrolled ? '' : 'none'; }
      if (backTop) backTop.classList.toggle('backTop--show', isScrolled);
      store.commit('setHomeScroll', y);
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    commonBehaviours(root, data, { goTo: i => goTo(NAVS[i] ? NAVS[i].link : 'main') });
  }

  /* ---------- 10. behaviours shared by both trees: dialog, audio, locale picker, back-top, copy link, lazy footer images ---------- */
  function commonBehaviours(root, data, ctx) {
    const $ = (sel, c = root) => c.querySelector(sel);
    const dialog = $('.video-dialog'), placeholder = $('.video-placeholder');
    function openPlayer(src, title) {
      placeholder.innerHTML = '';
      if (/youtube\.com|youtu\.be/.test(src)) { const f = document.createElement('iframe'); f.setAttribute(SCOPE.dialog, ''); f.className = 'video show'; f.src = src; f.allow = 'autoplay; fullscreen'; f.allowFullscreen = true; f.style.cssText = 'width:100%;height:100%;border:0'; f.title = title || ''; placeholder.appendChild(f); }
      else if (src) { const v = document.createElement('video'); v.setAttribute(SCOPE.dialog, ''); v.className = 'video show'; v.src = src; v.controls = true; v.autoplay = true; v.playsInline = true; placeholder.appendChild(v); }
      else placeholder.textContent = word('cv_empty_tip');
      dialog.style.display = ''; document.body.style.overflow = 'hidden';      // measured: body overflow hidden while the player is open
      audio.duck(true);
    }
    function closePlayer() { dialog.style.display = 'none'; document.body.style.overflow = ''; placeholder.innerHTML = ''; audio.duck(false); }
    root.addEventListener('click', e => {
      const t = e.target.closest('[data-action]'); if (!t) return;
      const action = t.dataset.action;
      if (action === 'play') { e.preventDefault(); openPlayer(t.dataset.video, t.dataset.title); }
      else if (action === 'play-active-video') { const active = $('.home-video__main .swiper-slide-active, .m-home-video__banner-list .swiper-slide-active'); const holder = active.dataset.video !== undefined ? active : active.querySelector('[data-video]'); openPlayer(holder ? holder.dataset.video : '', holder ? holder.dataset.title : ''); }
      else if (action === 'close-dialog') { if (t === dialog && e.target !== dialog) return; closePlayer(); }
      else if (action === 'download') { trackEvent('popup_download', 'click', 'pc'); window.open(word('pc_download_link'), '_blank', 'noopener'); }
      else if (action === 'toggle-bgm') audio.toggle();
    });
    // the lifted footer strip: back-top scrolls up, the SDK's copy button copies the share text (shareCopyText, copySuccess)
    const backTop = $('.footer .backTop'); if (backTop) backTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); ctx.goTo(0); });
    root.querySelectorAll('.copy-btn').forEach(btn => btn.addEventListener('click', e => { e.preventDefault(); const text = word('shareCopyText') || location.href.split('#')[0]; (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(() => { btn.title = word('copySuccess'); }).catch(() => { btn.title = text; }); }));
    // the corporate footer's locale picker, lifted verbatim: it opens and closes; only the languages the archive holds can switch
    root.querySelectorAll('.locale-selector-3HQCGC').forEach(sel => sel.addEventListener('click', () => { const wrap = sel.parentElement.querySelector('.option-wrapper-2bMXEX'); if (!wrap) return; const open = wrap.classList.toggle('invisible-FbKElL'); const ind = sel.querySelector('.indicator-2rTl34'); if (ind) ind.classList.toggle('flip-1eM7cs', !open); }));
    document.addEventListener('click', e => { if (!e.target.closest('.locale-container-2ZkQYu')) root.querySelectorAll('.option-wrapper-2bMXEX').forEach(w => { w.classList.add('invisible-FbKElL'); }); });
    // the corporate footer lazy-loads its images (data-src) and reveals them with the loaded class
    root.querySelectorAll('.hy-footer-1DmxLu img[data-src]').forEach(img => { img.addEventListener('load', () => img.classList.add('loaded-2cKQIN')); img.src = img.dataset.src; });
    // the site's controls are divs with click handlers (chapter 29); here they also answer Enter and Space from the keyboard
    root.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[role="button"]')) { e.preventDefault(); e.target.click(); } });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && dialog.style.display !== 'none') closePlayer(); });
    audio.bindIcons(root);
  }

  /* ---------- 11. background music: a looping track behind a persisted mute toggle (header-bar 348, m-audio-player; chapter 32) ---------- */
  const audio = {
    playing: false, element: null, ctx: null, gain: null, icons: [],
    init() {
      let muted = false;
      try { const saved = JSON.parse(localStorage.getItem(BGM.storageKey) || 'null'); if (saved && typeof saved.data === 'boolean') muted = saved.data; } catch (e) { /* ignore */ }
      store.commit('setBgmMuted', muted);
      const first = () => { window.removeEventListener('pointerdown', first); window.removeEventListener('keydown', first); if (!store.state.bgmMuted) this.start(); };
      window.addEventListener('pointerdown', first); window.addEventListener('keydown', first);
    },
    bindIcons(root) { this.icons = Array.from(root.querySelectorAll('.m-audio-player')); this.render(); },
    volume() { return store.state.bgmMuted ? 0 : BGM.volume; },     // computed volume of the site's header: bgmMuted ? 0 : 0.8
    start() {
      if (this.playing) return;
      if (BGM.src) { this.element = this.element || Object.assign(new Audio(BGM.src), { loop: true }); this.element.volume = this.volume(); this.element.play().catch(() => {}); }
      else {
        try {
          const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
          if (!this.ctx) {
            this.ctx = new AC(); this.gain = this.ctx.createGain(); this.gain.gain.value = 0;
            const filter = this.ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 900;
            [[110, 'sine'], [164.81, 'sine'], [220, 'triangle']].forEach(([f, type], i) => { const o = this.ctx.createOscillator(); o.type = type; o.frequency.value = f; const g = this.ctx.createGain(); g.gain.value = i === 2 ? 0.15 : 0.5; const lfo = this.ctx.createOscillator(); lfo.frequency.value = 0.07 + i * 0.03; const lg = this.ctx.createGain(); lg.gain.value = 0.3; lfo.connect(lg); lg.connect(g.gain); o.connect(g); g.connect(filter); o.start(); lfo.start(); });
            filter.connect(this.gain); this.gain.connect(this.ctx.destination);
          }
          this.ctx.resume();
          this.gain.gain.cancelScheduledValues(this.ctx.currentTime); this.gain.gain.linearRampToValueAtTime(0.03 * this.volume(), this.ctx.currentTime + 1.5);
        } catch (e) { return; }
      }
      this.playing = true; this.render();
    },
    stop() {
      if (this.element) this.element.pause();
      if (this.gain) { this.gain.gain.cancelScheduledValues(this.ctx.currentTime); this.gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.4); }
      this.playing = false; this.render();
    },
    duck(on) { if (this.element) this.element.volume = on ? 0 : this.volume(); if (this.gain && this.playing) this.gain.gain.linearRampToValueAtTime(on ? 0 : 0.03 * this.volume(), this.ctx.currentTime + 0.3); },
    toggle() {
      const muted = !store.state.bgmMuted;
      store.commit('setBgmMuted', muted);
      try { localStorage.setItem(BGM.storageKey, JSON.stringify({ createdTime: Date.now(), cacheTime: 0, data: muted })); } catch (e) { /* ignore */ }
      if (muted) this.stop(); else this.start();
      trackEvent('bgm', 'click', muted ? 'mute' : 'unmute');
    },
    render() {   // the player shows m-audio-player__icon--active (heartbeat) while playing, the plain icon when muted
      const active = this.playing && !store.state.bgmMuted;
      this.icons.forEach(p => { p.querySelector('.m-audio-player__icon--active').style.display = active ? '' : 'none'; p.querySelector('.m-audio-player__icon:not(.m-audio-player__icon--active):not(.m-audio-player__icon--hover)').style.display = active ? 'none' : ''; });
    },
  };

  /* ---------- 12. boot: shell loader → component loader bound to store.isLoading → page (loading-screen-component 250; chapter 10) ---------- */
  const app = document.getElementById('app');
  let currentRoot = null;
  async function render() {
    const data = await loadHome();
    const markup = deviceType === 'mobile' ? mobileMarkup(data) : desktopMarkup(data);
    const tpl = document.createElement('template'); tpl.innerHTML = String(markup).trim();
    const root = tpl.content.firstElementChild;
    if (currentRoot) currentRoot.replaceWith(root); else app.appendChild(root);
    currentRoot = root;
    if (deviceType === 'mobile') mountMobile(root, data); else mountDesktop(root, data);
    return root;
  }
  async function boot() {
    setupDevice();
    applyLang(detectLang());
    audio.init();
    // hand over from the shell's static loader to the component loader, which store.isLoading clears when the data has arrived
    const shellLoader = app.querySelector('.zzz-loading');
    const loader = document.createElement('div'); loader.className = 'loading'; loader.setAttribute(SCOPE.loading, ''); loader.innerHTML = '<div ' + SCOPE.loading + ' class="loading__field"></div><div ' + SCOPE.loading + ' class="loading__anim"></div>';
    app.appendChild(loader); if (shellLoader) shellLoader.remove();
    store.subscribe((type, value) => { if (type === 'setLoading' && value === false) { loader.style.transition = 'opacity .3s'; loader.style.opacity = '0'; setTimeout(() => loader.remove(), 320); } });
    const started = performance.now();
    const root = await render();
    const firstImages = Array.from(root.querySelectorAll('img')).slice(0, 12).map(img => img.decode ? img.decode().catch(() => {}) : Promise.resolve());
    await Promise.race([Promise.all(firstImages), new Promise(r => setTimeout(r, 2500))]);
    if (document.fonts && document.fonts.ready) await Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1500))]);
    await new Promise(r => setTimeout(r, Math.max(0, 700 - (performance.now() - started))));   // the loader runs at least one full sprite cycle
    store.commit('setLoading', false);
    root.querySelector('.home').classList.add('appear');
    requestAnimationFrame(() => { root.classList.add('page-enter-active'); root.classList.remove('page-enter'); setTimeout(() => root.classList.remove('page-enter-active'), 450); });
  }
  window.portfolio = { store, api, word, CHANNEL_ID_CONFIG, MiniSwiper, get rem() { return rem; } };   // for inspection and tests
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
