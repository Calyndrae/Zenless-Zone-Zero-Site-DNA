// Rule-based module naming + manual overrides → source/module-map.json (Nuxt 2 / Vue 2 build)
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const graph = JSON.parse(readFileSync(join(root, 'source/module-graph.json'), 'utf8'));
const overrides = existsSync(join(root, 'source/module-names.json')) ? JSON.parse(readFileSync(join(root, 'source/module-names.json'), 'utf8')) : {};
const routes = existsSync(join(root, 'source/routes.json')) ? JSON.parse(readFileSync(join(root, 'source/routes.json'), 'utf8')) : [];
const cssIndex = Object.fromEntries(JSON.parse(readFileSync(join(root, 'capture/css/index.json'), 'utf8')).map(i => [i.moduleId, i]));
const pageOf = {}; for (const r of routes) if (r.module) (pageOf[r.module] = pageOf[r.module] || []).push(r);
const vendorSig = [
  [/Vue\.config\.(silent|optionMergeStrategies)|_isVue=!0|"VueComponent"|Vue\.version=|__patch__/, 'vue 2 runtime', 'vendor'],
  [/createMatcher|"RouterView"|"RouterLink"|router-link-exact-active|VueRouter/, 'vue-router', 'vendor'],
  [/vuex:init|"vuex"|Store\.prototype\.commit|registerModule/, 'vuex', 'vendor'],
  [/vue-meta|data-vue-meta|vueMeta/, 'vue-meta', 'vendor'],
  [/Swiper 4|swiper-container|slidesPerView|"Swiper"/, 'swiper 4.5.1', 'vendor'],
  [/ScrollTrigger|pin-spacer|scroller-start/, 'gsap ScrollTrigger', 'vendor'],
  [/TweenMax|TweenLite|TimelineMax|_gsScope|GreenSockGlobals|gsap\.(to|from|timeline)|"gsap"/, 'gsap', 'vendor'],
  [/AxiosError|"Axios"|xsrfCookieName/, 'axios', 'vendor'],
  [/__lodash_hash_undefined__/, 'lodash', 'vendor'],
  [/@firebase\/(installations|analytics|app)|FIS_v2|fire-core/, 'firebase (installations/analytics)', 'vendor'],
  [/__core-js_shared__|native-function-to-string|symbol-registry/, 'core-js polyfills', 'vendor'],
  [/regeneratorRuntime|"Generator is already running"|suspendedStart/, 'regenerator runtime', 'vendor'],
  [/pdfjsLib|PDFViewerApplication|getDocument|PDFJS|"pdfjs"|data-page-number|textLayer/, 'pdf.js', 'vendor'],
  [/van-|"vant"|VanPopup|van-overflow-hidden/, 'vant (mobile ui)', 'vendor'],
  [/vuescroll/i, 'vuescroll', 'vendor'],
  [/_isAMomentObject|isMoment/, 'moment', 'vendor'],
  [/isDayjsObject|customParseFormat/, 'dayjs', 'vendor'],
  [/Invalid typed array length|If encoding is specified then the first arg/, 'buffer polyfill', 'vendor'],
  [/Invalid scheme|Invalid host|Invalid port/, 'url polyfill', 'vendor'],
  [/not-basic|invalid-input|Overflow: input needs wider integers/, 'punycode', 'vendor'],
  [/fetch-stream|xhr-blob|fetch-blob/, 'whatwg-fetch / isomorphic fetch', 'vendor'],
  [/input is invalid type/, 'js-md5 / crypto hash', 'vendor'],
  [/Cannot call a class as a function/, 'babel helpers', 'vendor'],
  [/javascript:.*gopher:/s, 'url sanitizer (xss filter)', 'vendor'],
  [/textarea.*readonly.*copy/s, 'copy-to-clipboard', 'vendor'],
  [/user-agent.*(desktop|tablet|mobile)/s, 'ua / device detection', 'vendor'],
  [/js-cookie|Cookies\.(get|set)\b/, 'js-cookie', 'vendor'],
  [/URLSearchParams|querystring|qs\.stringify/, 'query string utilities', 'vendor'],
  [/mi18n|__mi18n|mi18n-lang/i, 'HoYoverse mi18n (locale loader)', 'site-vendor'],
  [/AccountPopup|account-popup|game-role-selector|hoyoverse-account|ma-passport/i, 'HoYoverse account SDK', 'site-vendor'],
  [/MiHoYoCookieTips|cookie-tips|mihoyo-cookie/i, 'HoYoverse cookie tips', 'site-vendor'],
  [/me-media-icon|media-icon-|me-hover-btn|hyv-footer|hy-footer|hoyoverse-footer/i, 'HoYoverse footer / media icons', 'site-vendor'],
  [/hyv-crm|hyv-subscription|hyv-input|hyv-checkbox|subscription-dlg/i, 'HoYoverse CRM subscription', 'site-vendor'],
  [/mhy-bridge|MiHoYoJSInterface|mihoyo-bridge/i, 'HoYoverse bridge (app webview)', 'site-vendor'],
  [/sea-download|download-layout|cloud-download/i, 'HoYoverse download layout', 'site-vendor'],
  [/ENVIRONMENT_BASE|HOST_ORIGIN_MAP|IS_CGHK4E|x-oss-process/, 'HoYoverse web SDK environment', 'site-vendor'],
  [/me-toast|"Toast"/, 'HoYoverse toast', 'site-vendor'],
  [/me-pdf-viewer|pdf-viewer/, 'HoYoverse pdf viewer', 'site-vendor'],
  [/x-rpc-language|x-oss-content-type/, 'HoYoverse api client', 'site-vendor'],
  [/apmplus|__APM_INIT_CONFIG__|precollect/i, 'APM helper', 'vendor'],
  [/gtag|googletagmanager|GA_MEASUREMENT|dataLayer\.push/i, 'Google Analytics', 'vendor'],
  [/webpackJsonp|__webpack_require__/, 'webpack runtime', 'vendor'],
];
const chunkDefaults = { be1f69b: ['vendor bundle (vue plugins, HoYoverse SDKs, pdf.js, vant, gsap)', 'vendor'], '2e4935f': ['vendor bundle (vue 2, vue-router, vuex, axios)', 'vendor'], '8c4c131': ['app bundle (nuxt layouts, plugins, store, components)', 'site'], b83911d: ['webpack runtime', 'vendor'] };
const map = {};
for (const [id, m] of Object.entries(graph)) {
  const src = readFileSync(join(root, 'source/modules', m.chunk, id + '.js'), 'utf8');
  let name = null, kind = null, note = '';
  if (m.kind === 'css') { kind = 'css-module'; const c = cssIndex[id]; name = 'styles:' + ((c && c.firstSelector) || m.cssClasses[0] || id).replace(/^[.@]/, '').split(/[\s{,:[]/)[0].replace(/__.*$/, ''); note = c ? c.firstSelector : ''; }
  else if (m.kind === 'asset') { kind = 'asset-url'; name = 'asset:' + (m.asset.startsWith('data:') ? 'inline-data-uri' : m.asset.split('/').pop()); note = m.asset; }
  else if (pageOf[id]) { kind = 'site-page'; name = 'page:' + pageOf[id][0].name; note = pageOf[id].map(r => r.path).join(' '); }
  if (!name) for (const [re, lib, k] of vendorSig) { if (re.test(src) && (m.bytes > 2500 || k === 'site-vendor')) { /* a first-party component that merely uses an SDK keeps its own name */ if (m.componentName && !/^(be1f69b|2e4935f)$/.test(m.chunk)) continue; kind = k; name = lib; break; } }
  if (!name && m.componentName && m.componentName.length > 2) { name = m.componentName; kind = 'site'; note = 'vue component'; }
  if (!name && m.cssClasses.length) { name = m.cssClasses[0].split('__')[0] + ' (component)'; kind = 'site'; }
  if (!name && m.exports.length) { const ex = m.exports.filter(e => e.length > 2); if (ex.length) { name = ex[0]; kind = 'site'; } }
  if (!name && chunkDefaults[m.chunk]) { [name, kind] = chunkDefaults[m.chunk]; }
  if (overrides[id]) { name = overrides[id].name; kind = overrides[id].kind || kind || 'site'; note = overrides[id].note || note; }
  map[id] = { id: Number(id), chunk: m.chunk, bytes: m.bytes, kind: kind || 'unresolved', name: name || 'unresolved', note, exports: m.exports, deps: m.deps, componentName: m.componentName || undefined };
}
writeFileSync(join(root, 'source/module-map.json'), JSON.stringify(map, null, 1));
const kinds = {}; for (const v of Object.values(map)) kinds[v.kind] = (kinds[v.kind] || 0) + 1;
console.log(kinds);
const unresolved = Object.values(map).filter(v => v.kind === 'unresolved' && v.bytes > 400).sort((a, b) => b.bytes - a.bytes);
console.log('unresolved >400B:', unresolved.length);
for (const u of unresolved.slice(0, 60)) { const m = graph[u.id]; console.log(`${u.chunk}\t${u.id}\t${u.bytes}\texp=${m.exports.join(',').slice(0, 40)}\tcss=${m.cssClasses.slice(0, 3).join(' ')}\t${m.strings.filter(s => !s.startsWith('data:')).slice(0, 5).join(' | ').slice(0, 110)}`); }
