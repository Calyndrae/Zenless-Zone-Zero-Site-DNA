// Assemble the single-page handbook inside the untouched original site: the mirror shell (the SPA shell plus the mirror
// adapter) with ONE API answer overridden — the news record 7013 — so the site's own news-detail template renders the
// handbook as an article. Extra <style> elements carry the ORIGINAL stylesheets of the components embedded as specimens
// (the chunks that inject them are not loaded on the news route). No authored CSS, classes, wrappers or scripts.
// - handbook/handbook-content.json: the CMS record with the handbook as sContent
// - zh-cn/news/7013/index.html and m/zh-cn/news/7013/index.html: the shells (desktop and phone trees)
// - handbook/index.html: the same shell for the local server; index.html at the root redirects to the handbook
// - handbook/coverage.json: which components are embedded where
import { existsSync, readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { root, data, p, h, br, a, link, esc, setChapter, specimenIndex } from './handbook/lib.mjs';
import { rewriteShell } from './build-mirror.mjs';
const TITLE = 'Zenless Zone Zero website DNA — technical handbook (single page)';
const chapters = []; for (const f of ['a', 'b', 'c', 'd', 'e', 'f']) { const file = join(root, 'tools/handbook/chapters-' + f + '.mjs'); if (existsSync(file)) chapters.push(...(await import('./handbook/chapters-' + f + '.mjs')).chapters); }
mkdirSync(join(root, 'handbook'), { recursive: true });
let body = '';
body += p('<strong>Single-page technical handbook.</strong> Everything around this text is the original Zenless Zone Zero site running from the originals archive on this host: the shell, the chunks, the header, the news template, the footer SDKs, the fonts. Only one answer of the content API was replaced — the record of this page (iInfoId 7013) is this handbook. Specimens inside the page are verbatim markup captured from the live site, styled by the site\'s own stylesheets, so their hover states are the real ones. The only normalisation applied to specimens is the removal of inline opacity/transform/transition values that Swiper and GSAP write during motion, so each specimen is shown in its settled state. Two more things happen to the rendered copy only: an image the site lazy-loads (data-src, no src) gets its src and the loader\'s loaded class (read from the site\'s own CSS), as the site\'s loader sets them at run time, and live-CDN URLs are routed to the originals archive on this host; the markup listing under each specimen keeps the capture\'s original URLs.', { id: 'handbook-top' });
body += p('How to read: <strong>OBSERVED</strong> = read from shipped code or responses · <strong>MEASURED</strong> = reported by headless Chromium on ' + esc((data.pages['zh-cn_main'].capturedAt || '').slice(0, 10)) + ' · <strong>INFERRED</strong> = interpretation, never a fact · <strong>RULE FOR A CHILD SITE</strong> = transferable instruction derived from the above.');
body += p('<strong>Downloadable editions:</strong> ' + a('PDF (printed handbook with contents, index and the full code appendix)', '/handbook/Zenless-Zone-Zero-Site-DNA-Handbook.pdf') + ' · ' + a('Markdown', '/handbook/Zenless-Zone-Zero-Site-DNA-Handbook.md') + '. Both are generated from the same chapter sources as this page.');
// Chapter anchors carry a prefix so no heading id can collide with an id the site or its SDKs look up (the footer SDK renders
// into #footer; a chapter named footer would capture it).
const anchor = s => 'ch-' + s;
body += h('CONTENTS', anchor('contents'));
body += chapters.map((c, i) => link(`${String(i + 1).padStart(2, '0')} / ${c.title}`, '#' + anchor(c.slug))).join('');
const rendered = {}; const used = new Set();
const render = (c, arg) => { setChapter(c.slug); try { return c.html(arg); } catch (e) { console.error('chapter', c.slug, e); return p('<strong>BUILD ERROR in chapter ' + esc(c.slug) + ':</strong> ' + esc(String(e.stack || e).slice(0, 400))); } };
for (const c of chapters) if (!c.late) { rendered[c.slug] = render(c); for (const m of rendered[c.slug].matchAll(/class="([^"]*)"/g)) for (const cls of m[1].split(/\s+/)) { const block = cls.split('__')[0].replace(/--.*$/, ''); if (block && data.cssComponents[block]) used.add(block + '\u0000' + c.slug); } }
const coverage = {}; for (const u of used) { const [comp, slug] = u.split('\u0000'); (coverage[comp] = coverage[comp] || []).push(slug); }
const coverageDoc = { components: Object.keys(data.cssComponents).sort(), embedded: coverage, chapters: chapters.map(c => c.slug) };
for (const c of chapters) if (c.late) rendered[c.slug] = render(c, coverageDoc);
chapters.forEach((c, i) => { body += br() + h(`${String(i + 1).padStart(2, '0')} // ${c.title.toUpperCase()}`, anchor(c.slug)) + rendered[c.slug] + link('↑ Back to contents', '#' + anchor('contents')); });
writeFileSync(join(root, 'handbook/coverage.json'), JSON.stringify(coverageDoc, null, 1));
writeFileSync(join(root, 'handbook/specimen-index.json'), JSON.stringify(specimenIndex, null, 1));
const CONTENT = body;
// --- the CMS record (what the site's own news-detail page will render)
const apiIndex = JSON.parse(readFileSync(join(root, 'archive/api/index.json'), 'utf8'));
const tmplEntry = apiIndex.find(x => /getContent\?/.test(x.key) && /iChanId=288/.test(x.key) && /iInfoId=166535/.test(x.key)) || apiIndex.find(x => /getContent\?/.test(x.key) && /iChanId=288/.test(x.key));
const tmpl = JSON.parse(readFileSync(join(root, tmplEntry.file), 'utf8'));
const stamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
const record = { ...tmpl.data, iInfoId: 7013, sTitle: TITLE, sIntro: 'Technical handbook of the Zenless Zone Zero official website: structure, tokens, components, interactions, source and originals.', sContent: CONTENT, sExt: tmpl.data.sExt /* the news API requires sExt['news-banner'][0].url; the template record's banner (an original site image) is kept */, dtStartTime: stamp, dtCreateTime: stamp, sTagName: [], sCategoryName: '' };
writeFileSync(join(root, 'handbook/handbook-content.json'), JSON.stringify({ retcode: 0, message: '', data: record }));
// --- the extra ORIGINAL stylesheets: every css module the news route does not inject itself
const sha = s => createHash('sha256').update(s).digest('hex');
const injected = new Set(); const sJson = join(root, 'capture/pages/zh-cn_news_166535/styles.json'); if (existsSync(sJson)) for (const s of JSON.parse(readFileSync(sJson, 'utf8'))) injected.add(sha(s.text));
const extraList = data.cssIndex.filter(c => !injected.has(sha(readFileSync(join(root, c.file), 'utf8'))));
const extra = extraList.map(c => `<style data-original-stylesheet="/_nuxt/${c.chunks[0]}.js#${c.moduleId}">${readFileSync(join(root, c.file), 'utf8')}</style>`).join('\n');
// the same list for the mirror adapter, which loads them when the handbook route is reached by client-side navigation
writeFileSync(join(root, 'handbook/extra-styles.json'), JSON.stringify(extraList.map(c => ({ file: '/' + c.file, from: `/_nuxt/${c.chunks[0]}.js#${c.moduleId}` })), null, 1));
// --- the shell: the mirror shell with the one override
const shellRaw = readFileSync(join(root, 'original/shell-response.html'), 'utf8');
let shell = rewriteShell(shellRaw, { 'getContent\\?.*iInfoId=7013': '/handbook/handbook-content.json' });
shell = shell.replace('</head>', extra + '\n</head>');
for (const dir of ['zh-cn/news/7013', 'm/zh-cn/news/7013', 'handbook']) { mkdirSync(join(root, dir), { recursive: true }); writeFileSync(join(root, dir, 'index.html'), shell); }
writeFileSync(join(root, 'index.html'), `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=zh-cn/news/7013/"><title>Zenless Zone Zero site DNA</title><a href="zh-cn/news/7013/">Zenless Zone Zero website DNA — technical handbook</a>`);
console.log(`built: ${chapters.length} chapters, ${CONTENT.length} chars of content, ${Object.keys(coverage).length}/${Object.keys(data.cssComponents).length} components embedded, ${data.cssIndex.length - (data.cssIndex.length - extra.split('<style').length + 1)} extra original stylesheets; template record was "${tmpl.data.sTitle}"`);
