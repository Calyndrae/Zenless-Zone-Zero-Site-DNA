// Archives the originals the depth-1 pages use, so the hosted site can serve them itself:
//   _nuxt/<path>                   the site's own build files (chunks, fonts, images) at their original paths, verbatim,
//                                  so the shell's /_nuxt/ references and the webpack public path work unchanged
//   archive/files/<host>/<path>    every other response in capture/network-manifest.json (SDK scripts, i18n JSON,
//                                  CMS images and videos, background music), verbatim, plus the media every archived
//                                  CMS record names, within --budget-mb
//   archive/api/<sha>.json         every CMS API answer: the ones the pages requested, plus every list page and every
//                                  record the lists name, fetched directly in the client's URL form; keyed canonically
//                                  (host + path + sorted query) so the mirror adapter can answer any parameter order
//   archive/index.json             everything above with bytes and SHA-256; archive/README.md
// Usage: node archive-originals.mjs [--budget-mb=450] [--pages=3]
import { mkdirSync, writeFileSync, existsSync, readFileSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { createHash } from 'node:crypto';
const root = new URL('..', import.meta.url).pathname;
const ORIGIN = 'https://zenless.hoyoverse.com'; const LANG = 'zh-cn';
const CMS = 'https://sg-public-api-static.hoyoverse.com/content_v2_user/app/3e9196a4b9274bd7';
const ARCH = join(root, 'archive');
const args = Object.fromEntries(process.argv.slice(2).map(a => a.replace(/^--/, '').split('=')));
const BUDGET = Number(args['budget-mb'] || 450) * 1048576; const PAGES = Number(args.pages || 3);
mkdirSync(join(ARCH, 'files'), { recursive: true }); mkdirSync(join(ARCH, 'api'), { recursive: true });
const sha = b => createHash('sha256').update(b).digest('hex');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
const entries = []; let archivedBytes = 0; const seenFiles = new Set();
const canonical = url => { const u = new URL(url); const q = [...u.searchParams.entries()].sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1])).map(([k, v]) => `${k}=${v}`).join('&'); return u.host + u.pathname + (q ? '?' + q : ''); };
const localPath = url => { const u = new URL(url); const path = decodeURIComponent(u.pathname).replace(/^\//, ''); if (u.host === 'zenless.hoyoverse.com' && (path.startsWith('_nuxt/') || path === 'favicon.ico')) return path; return join('archive/files', u.host, path); };
async function download(url, { expectSha = null, note = '', maxBytes = 25 * 1048576 } = {}) {
  const clean = url.split('#')[0]; const rel = localPath(clean); const abs = join(root, rel);
  if (seenFiles.has(rel)) return entries.find(e => e.file === rel) || null; seenFiles.add(rel);
  if (existsSync(abs)) { const b = readFileSync(abs); const e = { url: clean, file: rel, bytes: b.length, sha256: sha(b), note }; if (expectSha && expectSha !== e.sha256) e.note += ' (content differs from the capture)'; entries.push(e); archivedBytes += b.length; return e; }
  for (let attempt = 0; attempt < 3; attempt++) {
    try { const r = await fetch(clean, { headers: { 'user-agent': UA } }); if (!r.ok) { if (r.status === 404 || r.status === 403) { entries.push({ url: clean, file: null, status: r.status, note: note + ' (missing upstream)' }); return null; } throw new Error('HTTP ' + r.status); } const len = Number(r.headers.get('content-length') || 0); if (len > maxBytes) { entries.push({ url: clean, file: null, bytes: len, note: note + ' (over the per-file limit, left on the CDN)' }); return null; } const b = Buffer.from(await r.arrayBuffer()); mkdirSync(dirname(abs), { recursive: true }); writeFileSync(abs, b); const e = { url: clean, file: rel, bytes: b.length, sha256: sha(b), type: (r.headers.get('content-type') || '').split(';')[0], note }; if (expectSha && expectSha !== e.sha256) e.note += ' (content changed since the capture)'; entries.push(e); archivedBytes += b.length; return e; }
    catch (err) { if (attempt === 2) { entries.push({ url: clean, file: null, error: String(err).slice(0, 120), note }); return null; } await new Promise(r => setTimeout(r, 1500)); }
  }
}
// ---------- 1. the build files: already captured verbatim in capture/js; the rest of /_nuxt/ comes from the manifest
const manifest = JSON.parse(readFileSync(join(root, 'capture/network-manifest.json'), 'utf8'));
console.log('manifest entries', manifest.length);
mkdirSync(join(root, '_nuxt'), { recursive: true });
const chunkMap = JSON.parse(readFileSync(join(root, 'capture/js/chunk-map.json'), 'utf8'));
for (const hash of [...chunkMap.entry, ...Object.values(chunkMap.chunks)]) { const src = join(root, 'capture/js', hash + '.js'); if (!existsSync(src)) continue; const rel = '_nuxt/' + hash + '.js'; if (!existsSync(join(root, rel))) copyFileSync(src, join(root, rel)); const b = readFileSync(join(root, rel)); seenFiles.add(rel); entries.push({ url: ORIGIN + '/_nuxt/' + hash + '.js', file: rel, bytes: b.length, sha256: sha(b), type: 'application/javascript', note: 'build chunk' }); archivedBytes += b.length; }
const SKIP = /google-analytics|googletagmanager|doubleclick|cloudflareinsights|log-upload|apmplus|device-fp|h5log|passport-api|\/event\/subscribe|ip_location|sdk-sea\.js|\/common\/event\/|\/h5\/upload|verifyCookieToken|collect\?/;
const api = []; const seenApi = new Set();
const recordApi = (url, status, type, body, source) => { const key = canonical(url); if (seenApi.has(key)) return null; seenApi.add(key); const file = 'archive/api/' + sha(key).slice(0, 16) + '.json'; writeFileSync(join(root, file), body); const rec = { url, key, status, type, file, bytes: body.length, sha256: sha(body), source }; api.push(rec); return rec; };
for (const m of manifest) {
  if (!/^https?:/.test(m.url) || m.status !== 200 || SKIP.test(m.url)) continue;
  const u = new URL(m.url); const isJson = /json/.test(m.type || '') || /\.json(\?|$)/.test(u.pathname);
  if (/content_v2_user/.test(m.url)) { if (m.stored && existsSync(join(root, m.stored))) recordApi(m.url, 200, m.type, readFileSync(join(root, m.stored)), 'page'); continue; }
  if (/text\/html/.test(m.type || '') && u.host === 'zenless.hoyoverse.com') { entries.push({ url: m.url, file: 'original/shell-response.html', bytes: m.bytes, sha256: m.sha256, note: 'SPA shell (one document for every route, kept under original/)' }); continue; }
  if (isJson && u.search) { if (m.stored && existsSync(join(root, m.stored))) recordApi(m.url, 200, m.type, readFileSync(join(root, m.stored)), 'page'); continue; }
  if (/\.js$/.test(u.pathname) && u.host === 'zenless.hoyoverse.com') continue; // chunks handled above
  if (m.stored && existsSync(join(root, m.stored)) && !/^data:/.test(m.url)) { const rel = localPath(m.url); const abs = join(root, rel); if (!existsSync(abs)) { mkdirSync(dirname(abs), { recursive: true }); copyFileSync(join(root, m.stored), abs); } const b = readFileSync(abs); seenFiles.add(rel); entries.push({ url: m.url, file: rel, bytes: b.length, sha256: sha(b), type: (m.type || '').split(';')[0], note: 'depth-1 response (stored by the capture)' }); archivedBytes += b.length; continue; }
  await download(m.url, { expectSha: m.sha256, note: 'depth-1 response (' + (m.type || '').split(';')[0] + ')' });
}
// SDK files the SDK scripts load at run time after the capture window (seen while verifying the mirror)
for (const u of ['https://webstatic.hoyoverse.com/dora/biz/hoyoverse-h5log/v2.1/main.js']) await download(u, { note: 'SDK file loaded at run time by the account SDK' });
console.log('depth-1 files archived:', entries.filter(e => e.file).length, (archivedBytes / 1048576).toFixed(0) + ' MB; API answers from the pages:', api.length);
// ---------- 2. the CMS: every list page and every record the lists name, in the client's URL form
const get = async (url, source) => { const key = canonical(url); if (seenApi.has(key)) return JSON.parse(readFileSync(join(root, api.find(a => a.key === key).file), 'utf8')); try { const r = await fetch(url, { headers: { 'user-agent': UA } }); const b = Buffer.from(await r.arrayBuffer()); recordApi(url, r.status, (r.headers.get('content-type') || '').split(';')[0], b, source); return JSON.parse(b.toString()); } catch (e) { console.warn('api failed', url.slice(0, 120), String(e).slice(0, 80)); return null; } };
const list = (chan, size, page = 1, extra = '') => `${CMS}/getContentList?iChanId=${chan}&iPageSize=${size}&iPage=${page}&sLangKey=${LANG}${extra}`;
const detail = (chan, id) => `${CMS}/getContent?iChanId=${chan}&iAround=1&iInfoId=${id}&sLangKey=${LANG}`;
const tree = chan => `${CMS}/getChildTree?iChanId=${chan}&iPageSize=10&sLangKey=${LANG}`;
const ids = { news: new Set(), world: new Set() };
const walkList = async (chan, size, pages, bucket) => { for (let pg = 1; pg <= pages; pg++) { const j = await get(list(chan, size, pg), 'direct'); const l = j && j.data && j.data.list; if (!l) break; for (const it of l) if (bucket) ids[bucket].add(it.iInfoId); if (l.length < size) break; } };
await get(list(285, 1), 'direct'); await get(list(286, 50), 'direct'); await get(list(287, 200), 'direct'); await get(list(292, 50), 'direct');
await get(tree(288), 'direct'); await get(tree(1332), 'direct');
for (const chan of [288]) { await walkList(chan, 7, 1, 'news'); await walkList(chan, 9, PAGES, 'news'); }
for (const chan of [295, 296, 297]) await walkList(chan, 9, PAGES, 'news');
await walkList(290, 10, 1, 'world');
for (const chan of [1332]) { await walkList(chan, 6, 1, null); await walkList(chan, 9, PAGES, null); }
for (const chan of [1338, 1339, 1340, 1341]) await walkList(chan, 9, PAGES, null);
await get(list(293, 1, 1, '&isPreview=0'), 'direct'); await get(list(294, 1, 1, '&isPreview=0'), 'direct');
for (const id of [...ids.news].sort()) await get(detail(288, id), 'direct');
for (const id of [...ids.world].sort()) await get(detail(290, id), 'direct');
console.log('API answers total:', api.length, 'news records:', ids.news.size, 'world records:', ids.world.size);
// ---------- 3. the media the archived records name (sExt images, sContent images, covers), within the budget
const mediaUrls = new Map(); // url -> source note
const addUrl = (u, note) => { if (/^https:\/\/(fastcdn|webstatic|act-webstatic)\.hoyoverse\.com\//.test(u) && !mediaUrls.has(u)) mediaUrls.set(u, note); };
for (const a of api) { try { const j = JSON.parse(readFileSync(join(root, a.file), 'utf8')); const walk = (v, note) => { if (typeof v === 'string') { if (/^https:\/\//.test(v)) addUrl(v.split('#')[0], note); else if (/^\{|^\[/.test(v)) { try { walk(JSON.parse(v), note); } catch { } } else for (const m of v.matchAll(/https:\/\/[a-z0-9.-]+\.hoyoverse\.com\/[^"'\s)<>]+/g)) addUrl(m[0], note); } else if (Array.isArray(v)) v.forEach(x => walk(x, note)); else if (v && typeof v === 'object') Object.values(v).forEach(x => walk(x, note)); }; walk(j, 'named by ' + a.key.replace(/^.*app\/[0-9a-f]+\//, '')); } catch { } }
let mediaArchived = 0, mediaSkipped = 0;
for (const [u, note] of mediaUrls) { if (seenFiles.has(localPath(u))) continue; if (archivedBytes > BUDGET) { entries.push({ url: u, file: null, note: note + ' (over budget, left on the CDN)' }); mediaSkipped++; continue; } const e = await download(u, { note }); if (e && e.file) mediaArchived++; }
console.log('record media archived:', mediaArchived, 'skipped (budget):', mediaSkipped, 'total', (archivedBytes / 1048576).toFixed(0) + ' MB');
// ---------- indices
const human = n => n > 1048576 ? (n / 1048576).toFixed(1) + ' MB' : n > 1024 ? (n / 1024).toFixed(0) + ' KB' : n + ' B';
writeFileSync(join(ARCH, 'api/index.json'), JSON.stringify(api, null, 1));
const summary = { archivedAt: new Date().toISOString(), files: entries.filter(e => e.file).length, missing: entries.filter(e => !e.file).length, bytes: archivedBytes, api: api.length, newsRecords: ids.news.size, worldRecords: ids.world.size, mediaUrls: mediaUrls.size, mediaArchived, mediaSkipped };
writeFileSync(join(ARCH, 'index.json'), JSON.stringify({ summary, files: entries, api }, null, 1));
writeFileSync(join(ARCH, 'README.md'), `# Originals archive\n\nArchived ${summary.archivedAt.slice(0, 10)} from the live site and its CDNs.\n\n| What | Count | Size |\n| --- | --- | --- |\n| Build files at /_nuxt/<path> (chunks, fonts, images, at their original paths) and files under files/<host>/<path> (SDK scripts, i18n JSON, CMS images and videos, music) | ${summary.files} | ${human(summary.bytes)} |\n| CMS API answers under api/ (every list page the pages request, every tab and page of news and videos up to page ${PAGES}, every news and world record those lists name, the character, camp, key-visual, social and protocol lists) | ${summary.api} | ${human(api.reduce((n, a) => n + a.bytes, 0))} |\n\nEvery entry is in index.json with its original URL, bytes and SHA-256; api/index.json keys each answer by host + path + query with the parameters sorted, which is how the mirror adapter looks them up. ${summary.mediaSkipped} media files named by the archived records were left on the CDN because the ${Math.round(BUDGET / 1048576)} MB budget was reached (GitHub Pages serves at most 1 GB per site); \`node tools/archive-originals.mjs --budget-mb=900\` fetches more. Answers of the SDK's own per-session services (ip_location, device fingerprint, cookie-token verification, event and APM logging, analytics) are not archivable and are not needed to render the pages.\n`);
console.log(JSON.stringify(summary));
