// Builds the self-contained mirror of the site from the originals archive. The site is a single-page application whose
// server sends one shell for every path, so every mirrored route is that shell plus one head adapter:
//   <route>/index.html + 404.html  the archived shell (original/shell-response.html) with its CDN references pointed
//                                  at the archive and the adapter inserted after <head>; 404.html lets GitHub Pages
//                                  serve the shell for any path the router knows (articles, world entries)
//   _nuxt/…                        the build files at their original paths (archived verbatim), so the webpack public
//                                  path and the shell's script tags work unchanged
//   mirror/api/*.json              CMS answers with their media URLs pointed at the archive (the originals stay in
//                                  archive/api/); mirror/files/… rewritten copies of SDK scripts that name CDN URLs
// The adapter answers the CMS API from the archive (the API does not allow cross-origin requests, so a static host must
// answer them itself), serves i18n JSON and archived media from this host, and lets anything not archived reach its
// original URL. Handbook pages (built by build-handbook.mjs) reuse the adapter with one API answer overridden.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
export const root = new URL('..', import.meta.url).pathname;
const ORIGIN = 'https://zenless.hoyoverse.com'; const LANG = 'zh-cn';
const arch = JSON.parse(readFileSync(join(root, 'archive/index.json'), 'utf8'));
const ASSET_HOSTS = new Set(['fastcdn.hoyoverse.com', 'webstatic.hoyoverse.com', 'act-webstatic.hoyoverse.com', 'act.hoyoverse.com', 'zenless.hoyoverse.com']);
const archived = new Map(); // original URL (without query) → served path
for (const f of arch.files) if (f.file && f.url && !/^original\//.test(f.file)) { try { const u = new URL(f.url); if (ASSET_HOSTS.has(u.host)) archived.set(u.origin + u.pathname, '/' + f.file); } catch { } }
const toLocal = url => { try { const u = new URL(url); return archived.get(u.origin + u.pathname) || null; } catch { return null; } };
const rewriteUrls = s => s.replace(/https:\/\/[a-z0-9.-]+\.hoyoverse\.com\/[^"'\\\s<>)]+/g, u => toLocal(u.split('?')[0]) || u);
export const canonical = url => { const u = new URL(url); const q = [...u.searchParams.entries()].sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1])).map(([k, v]) => `${k}=${v}`).join('&'); return u.host + u.pathname + (q ? '?' + q : ''); };
rmSync(join(root, 'mirror'), { recursive: true, force: true }); mkdirSync(join(root, 'mirror/api'), { recursive: true }); mkdirSync(join(root, 'mirror/files'), { recursive: true });
let copies = 0;
// API answers: rewritten copies where a media URL is archived
const apiMap = {};
for (const a of arch.api) { if (!existsSync(join(root, a.file))) continue; const text = readFileSync(join(root, a.file), 'utf8'); const out = rewriteUrls(text); if (out === text) { apiMap[a.key] = '/' + a.file; continue; } const dst = a.file.replace(/^archive\//, 'mirror/'); writeFileSync(join(root, dst), out); apiMap[a.key] = '/' + dst; copies++; }
// SDK scripts and other text files that name CDN URLs: rewritten copies under mirror/files
const LOCAL = {};
for (const f of arch.files) { if (!f.file || !/\.(js|css|json)$/.test(f.file) || !f.file.startsWith('archive/files/')) continue; const abs = join(root, f.file); if (!existsSync(abs)) continue; const text = readFileSync(abs, 'utf8'); const out = rewriteUrls(text); if (out === text) continue; const dst = f.file.replace(/^archive\//, 'mirror/'); mkdirSync(dirname(join(root, dst)), { recursive: true }); writeFileSync(join(root, dst), out); LOCAL['/' + f.file] = '/' + dst; copies++; }
// build chunks that name CDN URLs inside their css strings (the loader image, the Kanit fonts): rewritten copies under
// mirror/files/zenless.hoyoverse.com/_nuxt/, served instead of the verbatim file (which stays at /_nuxt/ and in the archive)
const LOCAL_PATHS = {};
for (const f of readdirSync(join(root, '_nuxt')).filter(f => f.endsWith('.js'))) { const text = readFileSync(join(root, '_nuxt', f), 'utf8'); const out = rewriteUrls(text); if (out === text) continue; const dst = 'mirror/files/zenless.hoyoverse.com/_nuxt/' + f; mkdirSync(dirname(join(root, dst)), { recursive: true }); writeFileSync(join(root, dst), out); LOCAL_PATHS['/_nuxt/' + f] = '/' + dst; copies++; }
const FILES = {}; for (const [u, p] of archived) FILES[u] = LOCAL[p] || LOCAL_PATHS[p] || p;
// The adapter is one external script shared by every mirrored page (the maps are large); a page passes its overrides
// (the handbook's replaced record) through window.__MIRROR_OVERRIDE before it loads.
const adapterJs = `(() => {
  // Mirror adapter: answer this page's CMS API, i18n and asset requests from the originals archive on this host;
  // anything not archived goes to its original URL. Head-only; the shell and the application are the originals.
  const API = ${JSON.stringify(apiMap)};
  const OVERRIDE = window.__MIRROR_OVERRIDE || {};
  const FILES = ${JSON.stringify(FILES)};
  const HOSTS = ${JSON.stringify(Object.fromEntries([...ASSET_HOSTS].map(h => [h, 1])))};
  const canonical = u => { try { const x = new URL(u, location.href); const q = [...x.searchParams.entries()].sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1])).map(([k, v]) => k + '=' + v).join('&'); return x.host + x.pathname + (q ? '?' + q : ''); } catch (e) { return null; } };
  const LOCAL_PATHS = ${JSON.stringify(LOCAL_PATHS)};
  const localFile = u => { try { const x = new URL(u, location.href); if (x.host === location.host) return LOCAL_PATHS[x.pathname] || null; if (!HOSTS[x.host]) return null; return FILES[x.origin + x.pathname] || null; } catch (e) { return null; } };
  const answer = u => { const k = canonical(u); if (!k) return null; for (const [re, file] of Object.entries(OVERRIDE)) if (new RegExp(re).test(k)) return file; return API[k] || null; };
  const mapSrc = v => { if (typeof v !== 'string') return v; return localFile(v) || v; };
  for (const [proto, attr] of [[HTMLScriptElement.prototype, 'src'], [HTMLImageElement.prototype, 'src'], [HTMLMediaElement.prototype, 'src'], [HTMLSourceElement.prototype, 'src'], [HTMLLinkElement.prototype, 'href'], [HTMLIFrameElement.prototype, 'src']]) { const d = Object.getOwnPropertyDescriptor(proto, attr); if (d && d.set) Object.defineProperty(proto, attr, { get: d.get, set(v) { d.set.call(this, mapSrc(v)); }, configurable: true }); }
  const setAttr = Element.prototype.setAttribute; Element.prototype.setAttribute = function (n, v) { if ((n === 'src' || n === 'href' || n === 'poster') && typeof v === 'string') v = mapSrc(v); else if (n === 'style' && typeof v === 'string' && /url\\(/.test(v)) v = v.replace(/url\\((['"]?)(https?:[^)'"]+)\\1\\)/g, (m, q, u) => { const l = localFile(u); return l ? 'url(' + q + l + q + ')' : m; }); return setAttr.call(this, n, v); };
  const open = XMLHttpRequest.prototype.open; XMLHttpRequest.prototype.open = function (m, u, ...r) { if (String(m).toUpperCase() === 'GET' && typeof u === 'string') { const a = answer(u); if (a) u = location.origin + a; else { const l = localFile(u); if (l) u = l; } } return open.call(this, m, u, ...r); };
  // Handbook stylesheets. The handbook shells carry extra ORIGINAL stylesheets (css modules the news route does not inject)
  // for the components embedded as specimens. They belong to the handbook route only: a client-side route change away from it
  // switches them off (media="not all"); a change back switches them on, or loads them from /handbook/extra-styles.json when
  // the page was first opened on another route.
  const HANDBOOK = new RegExp('^/(m/)?zh-cn/news/7013/?$');
  const syncHandbookStyles = () => { const on = HANDBOOK.test(location.pathname); const inline = document.querySelectorAll('style[data-original-stylesheet]'); const links = document.querySelectorAll('link[data-original-stylesheet]'); if (!on) { inline.forEach(s => { s.media = 'not all'; }); links.forEach(l => l.remove()); return; } if (inline.length) { inline.forEach(s => { s.media = 'all'; }); return; } if (links.length || window.__handbookStylesLoading) return; window.__handbookStylesLoading = true; window.fetch('/handbook/extra-styles.json').then(r => r.json()).then(list => { for (const s of list) { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = s.file; l.setAttribute('data-original-stylesheet', s.from); document.head.appendChild(l); } }).catch(() => { }).then(() => { window.__handbookStylesLoading = false; }); };
  for (const m of ['pushState', 'replaceState']) { const o = history[m]; history[m] = function (...a) { const r = o.apply(this, a); setTimeout(syncHandbookStyles, 0); return r; }; }
  addEventListener('popstate', () => setTimeout(syncHandbookStyles, 0));
  document.addEventListener('DOMContentLoaded', syncHandbookStyles);
  const f = window.fetch; window.fetch = function (input, init) { const u = typeof input === 'string' ? input : (input && input.url) || ''; if (!init || !init.method || init.method === 'GET') { const a = answer(u); if (a) return f(location.origin + a, { method: 'GET' }); const l = localFile(u); if (l) return f(l, init); } return f(input, init); };
})();
`;
writeFileSync(join(root, 'mirror/adapter.js'), adapterJs);
export const adapter = (overrides = {}) => (Object.keys(overrides).length ? `<script>window.__MIRROR_OVERRIDE=${JSON.stringify(overrides)}</script>` : '') + '<script src="/mirror/adapter.js"></script>';
export const rewriteShell = (shell, overrides = {}) => rewriteUrls(shell).replace(/(src|href)="(\/_nuxt\/[^"]+)"/g, (m, attr, path) => LOCAL_PATHS[path] ? `${attr}="${LOCAL_PATHS[path]}"` : m).replace('<head>', '<head>' + adapter(overrides));
const shell = readFileSync(join(root, 'original/shell-response.html'), 'utf8');
const isMain = process.argv[1] && process.argv[1].endsWith('build-mirror.mjs');
if (isMain) {
  const html = rewriteShell(shell);
  const newsIds = [...new Set(arch.api.filter(a => /getContent\?/.test(a.key) && /iChanId=288/.test(a.key)).map(a => (a.key.match(/iInfoId=(\d+)/) || [])[1]).filter(Boolean))];
  const worldIds = [...new Set(arch.api.filter(a => /getContent\?/.test(a.key) && /iChanId=290/.test(a.key)).map(a => (a.key.match(/iInfoId=(\d+)/) || [])[1]).filter(Boolean))];
  const routes = ['main', 'character', 'video', 'news', 'world', 'company/privacy', 'company/terms', ...newsIds.map(i => 'news/' + i), ...worldIds.map(i => 'world/' + i)];
  let built = 0;
  for (const tree of [LANG, 'm/' + LANG]) for (const r of routes) { const dir = join(root, tree, r); mkdirSync(dir, { recursive: true }); writeFileSync(join(dir, 'index.html'), html); built++; }
  writeFileSync(join(root, '404.html'), html); // the SPA shell for every other path the router knows
  writeFileSync(join(root, 'mirror/index.json'), JSON.stringify({ builtAt: new Date().toISOString(), routes: routes.length * 2, newsIds, worldIds, apiCopies: Object.values(apiMap).filter(v => v.startsWith('/mirror/')).length, fileCopies: Object.keys(LOCAL).length, archivedFiles: archived.size }, null, 1));
  console.log(`mirror: ${Object.keys(LOCAL_PATHS).length} rewritten build chunks (${Object.keys(LOCAL_PATHS).join(', ')}); ${built} route pages (+404.html), ${newsIds.length} articles, ${worldIds.length} world entries, ${copies} rewritten copies under mirror/ (${Object.keys(LOCAL).length} scripts/JSON files, ${Object.values(apiMap).filter(v => v.startsWith('/mirror/')).length} API answers), adapter maps ${Object.keys(apiMap).length} API keys and ${archived.size} archived files`);
}
