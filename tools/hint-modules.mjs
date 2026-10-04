// Print per-module hints so modules can be named; also auto-detect vendor libraries by signature (Vue 2 / Nuxt 2 stack).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const graph = JSON.parse(readFileSync(join(root, 'source/module-graph.json'), 'utf8'));
export const sig = [
  [/Vue\.version|_isVue|__patch__|\$createElement|Vue\.config\.silent|VueComponent/, 'vue 2 runtime'],
  [/VueRouter|\$router|\$route|RouterLink|router-view|createMatcher|history\.pushState/, 'vue-router'],
  [/Vuex|\$store|mapState|mapGetters|registerModule|commit\(|dispatch\(/, 'vuex'],
  [/swiper-wrapper|swiper-slide|slidesPerView|Swiper/, 'swiper 4'],
  [/gsap|TweenMax|TweenLite|TimelineMax|_gsScope|GreenSockGlobals/, 'gsap / TweenMax'],
  [/isAxiosError|AxiosError|"axios"|xsrfCookieName|interceptors/, 'axios'],
  [/__lodash_hash_undefined__|lodash/i, 'lodash'],
  [/dayjs|customParseFormat|isDayjsObject/i, 'dayjs'],
  [/moment|_isAMomentObject|isMoment/i, 'moment'],
  [/core-js|__core-js_shared__|es\.array|modules\/es\./i, 'core-js polyfills'],
  [/regeneratorRuntime|_regeneratorRuntime/, 'regenerator runtime'],
  [/webpackJsonp|__webpack_require__|webpackChunk/, 'webpack runtime'],
  [/van-|vant|VanPopup|van-popup|van-loading/, 'vant (mobile ui)'],
  [/pdfjs|PDFViewer|textLayer|annotationLayer|PDF\.js|getDocument/i, 'pdf.js'],
  [/vuescroll/i, 'vuescroll'],
  [/mi18n|mi18n-lang|__mi18n/i, 'HoYoverse mi18n (i18n loader)'],
  [/hoyoverse-account|mihoyo-account|AccountPopup|account-popup|game-role-selector/i, 'HoYoverse account SDK'],
  [/MiHoYoCookieTips|cookie-tips|mihoyo-cookie/i, 'HoYoverse cookie tips'],
  [/me-media-icon|media-icon-|hover-btn|me-hover-btn|hyv-footer|hy-footer/i, 'HoYoverse footer / media icons'],
  [/hyv-crm|subscription|hyv-subscription|hyv-input|hyv-checkbox/i, 'HoYoverse CRM subscription'],
  [/mhy-bridge|mihoyo-bridge|MiHoYoJSInterface/i, 'HoYoverse bridge'],
  [/apm|__APM_INIT_CONFIG__|apmplus|precollect/i, 'APM / analytics'],
  [/gtag|googletagmanager|GA_MEASUREMENT|dataLayer/i, 'Google Analytics'],
  [/js-cookie|Cookies\.get|Cookies\.set/i, 'js-cookie'],
  [/qs\.stringify|querystring|parseQuery/i, 'query-string'],
  [/sea-download|download-layout|cloud-download/i, 'HoYoverse download layout'],
  [/me-toast|Toast/, 'toast'],
  [/hashchange|data-l10n-id|data-page-number/, 'pdf.js viewer'],
  [/http:\/\/www\.w3\.org\/2000\/svg/, 'inline svg'],
  [/process\.env\.NODE_ENV|__esModule/, 'esm interop'],
];
const rows = [];
for (const [id, m] of Object.entries(graph)) {
  const src = readFileSync(join(root, 'source/modules', m.chunk, id + '.js'), 'utf8');
  const libs = sig.filter(([re]) => re.test(src)).map(([, n]) => n);
  const css = m.cssClasses.slice(0, 4).join(' ');
  const strs = m.strings.filter(s => !s.startsWith('data:')).slice(0, 6).join(' | ').slice(0, 160);
  rows.push({ id: Number(id), chunk: m.chunk, bytes: m.bytes, kind: m.kind, componentName: m.componentName || '', exports: m.exports.join(','), css, libs: libs.join(';'), strs, deps: m.deps.length });
}
rows.sort((a, b) => a.chunk.localeCompare(b.chunk) || b.bytes - a.bytes);
let out = 'chunk\tid\tbytes\tkind\tcomponent\texports\tcss\tlibs\tdeps\tstrings\n';
for (const r of rows) out += `${r.chunk}\t${r.id}\t${r.bytes}\t${r.kind}\t${r.componentName}\t${r.exports}\t${r.css}\t${r.libs}\t${r.deps}\t${r.strs}\n`;
writeFileSync(join(root, 'source/module-hints.tsv'), out);
console.log('rows', rows.length);
