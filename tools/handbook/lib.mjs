// Shared helpers and data for the handbook builder. In 'site' mode the output uses ONLY the element vocabulary the
// site's own news-detail renderer receives from the CMS (p/span/strong/em/u/br/a/img/h4/table/tr/td with the inline
// style properties the CMS editor itself emits) plus verbatim component markup captured from the live site. No authored
// CSS, classes or scripts. In 'doc' mode the same chapters emit semantic HTML for the printed edition.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
export const root = new URL('../..', import.meta.url).pathname;
export const ORIGIN = 'https://zenless.hoyoverse.com'; export const LANG = 'zh-cn'; export const CDN = ORIGIN + '/_nuxt/';
export const CMS = 'https://sg-public-api-static.hoyoverse.com/content_v2_user/app/3e9196a4b9274bd7';
export const SITE_URL = 'https://sitedna.zenlesszonezero.calyndrae.com';
const J = p => JSON.parse(readFileSync(join(root, p), 'utf8'));
const opt = (p, d) => existsSync(join(root, p)) ? J(p) : d;
export const data = {
  cssRules: J('analysis/css-rules.json'), colors: J('analysis/colors.json'), typography: J('analysis/typography.json'),
  spacing: J('analysis/spacing.json'), layers: J('analysis/layers.json'), motion: J('analysis/motion.json'),
  breakpoints: J('analysis/breakpoints.json'), componentsIndex: J('analysis/components.json'), hover: J('analysis/hover-states.json'),
  timelines: J('analysis/motion-timelines.json'), moduleMap: J('source/module-map.json'), graph: J('source/module-graph.json'),
  readable: opt('source/readable/index.json', []), manifest: J('capture/network-manifest.json'), fonts: J('capture/fonts-and-css-assets.json'),
  jsCss: J('capture/js-css-manifest.json'), cssComponents: J('capture/css-components.json'), cssIndex: J('capture/css/index.json'),
  routes: J('source/routes.json'), chunkMap: J('capture/js/chunk-map.json'), summary: J('analysis/summary.json'),
  states: opt('capture/states/states.json', {}),
  renameMaps: Object.fromEntries((existsSync(join(root, 'source/rename-maps')) ? readdirSync(join(root, 'source/rename-maps')) : []).filter(f => f.endsWith('.json')).map(f => { try { return [f.replace('.json', ''), J('source/rename-maps/' + f)]; } catch { return null; } }).filter(Boolean)),
};
data.pages = Object.fromEntries(readdirSync(join(root, 'capture/pages')).filter(p => existsSync(join(root, 'capture/pages', p, 'page.json'))).map(p => [p, J(`capture/pages/${p}/page.json`)]));
export const comp = name => J('analysis/components/' + name.replace(/[^A-Za-z0-9_-]/g, '') + '.json');
export const compExists = name => existsSync(join(root, 'analysis/components/' + name.replace(/[^A-Za-z0-9_-]/g, '') + '.json'));
export const interactions = opt('capture/interactions.json', null);
// --- output mode
export let mode = 'site'; export const setMode = m => { mode = m; };
// --- specimen geometry. tools/measure-specimens.mjs renders the built page in headless Chromium, measures every specimen
// cell and writes handbook/specimen-geometry.json; a component whose root is absolutely or fixed positioned in the site's
// CSS gets a sized window onto a 1440 × 900 stage (the viewport its CSS assumes), shifted so the component is in view.
export let chapterSlug = ''; export const setChapter = s => { chapterSlug = s; };
export const specimenIndex = []; const specimenKeys = new Map();
const geometry = opt('handbook/specimen-geometry.json', {});
export const STAGE = { w: 1440, h: 900 };
const WRAP = 'word-break: break-all; overflow-wrap: anywhere;';
const docHref = href => { if (!href.startsWith('/')) return href; const m = href.match(/^\/source\/readable\/([^/#?]+)$/); if (m) return '#js-' + m[1].replace(/[^A-Za-z0-9]/g, '-'); const c = href.match(/^\/capture\/css\/(\d+)\.css$/); if (c) return '#css-' + c[1] + '-css'; return SITE_URL + href; };
export const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// --- builders (site vocabulary = what the CMS editor emits into sContent)
export const p = (text, { strong = false, id = null, indent = 0 } = {}) => mode === 'doc'
  ? `<p${id ? ` id="${esc(id)}"` : ''}${indent ? ` class="ind${indent}"` : ''}>${strong ? '<strong>' : ''}${text}${strong ? '</strong>' : ''}</p>`
  : `<p${id ? ` id="${esc(id)}"` : ''} style="white-space: pre-wrap;${indent ? ` text-indent: ${indent * 2}em;` : ''}">${strong ? '<strong>' : ''}${text}${strong ? '</strong>' : ''}</p>`;
export const t = s => p(esc(s));
export const h = (text, id) => mode === 'doc' ? `<h2${id ? ` id="${esc(id)}"` : ''}>${esc(text)}</h2>` : `<h4${id ? ` id="${esc(id)}"` : ''} style="white-space: pre-wrap; line-height: 2;">${esc(text)}</h4>`;
export const sub = text => mode === 'doc' ? `<h3>${esc(text)}</h3>` : p('<strong>' + esc(text) + '</strong>');
export const br = () => mode === 'doc' ? '' : '<p><br></p>';
export const a = (label, href) => `<a href="${esc(mode === 'doc' ? docHref(String(href)) : href)}">${esc(label)}</a>`;
export const link = (label, href, note = '') => p(a(label, href) + (note ? ' ' + esc(note) : ''));
export const img = (src, caption) => mode === 'doc' ? `<figure class="shot"><img src="${esc(src)}">${caption ? `<figcaption>Capture — ${esc(caption)}</figcaption>` : ''}</figure>` : `<p style="text-align: center;"><img src="${esc(src)}"></p>${caption ? p('<em>Capture — ' + esc(caption) + '</em>') : ''}`;
const tagged = (cls, label, text) => mode === 'doc' ? `<p class="tag ${cls}"><span class="lbl">${label}</span> ${esc(text)}</p>` : p('<strong>' + label + ' — </strong>' + esc(text));
export const observed = text => tagged('observed', 'OBSERVED', text);
export const measured = text => tagged('measured', 'MEASURED', text);
export const inferred = text => tagged('inferred', 'INFERRED', text);
export const rule = text => tagged('rule', 'RULE FOR A CHILD SITE', text);
// the same labels for text that already carries markup (links, images); the caller escapes its own text
const taggedHtml = (cls, label, html) => mode === 'doc' ? `<p class="tag ${cls}"><span class="lbl">${label}</span> ${html}</p>` : p('<strong>' + label + ' — </strong>' + html);
export const observedHtml = html => taggedHtml('observed', 'OBSERVED', html);
export const measuredHtml = html => taggedHtml('measured', 'MEASURED', html);
export const inferredHtml = html => taggedHtml('inferred', 'INFERRED', html);
export const ruleHtml = html => taggedHtml('rule', 'RULE FOR A CHILD SITE', html);
export const table = (headers, rows) => mode === 'doc'
  ? `<table class="data"><thead><tr>${headers.map(x => `<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`
  : `<table style="border-collapse: collapse;"><tbody><tr>${headers.map(x => `<td style="background-color: #222122; color: #fff;"><p style="white-space: pre-wrap; overflow-wrap: anywhere;"><strong>${esc(x)}</strong></p></td>`).join('')}</tr>${rows.map(r => `<tr>${r.map(c => `<td><p style="white-space: pre-wrap; overflow-wrap: anywhere;">${c}</p></td>`).join('')}</tr>`).join('')}</tbody></table>`;
export const code = (text, { max = 60 } = {}) => { const lines = String(text).replace(/\t/g, '  ').split('\n'); const shown = lines.slice(0, max).map(l => l.replace(/\s+$/, '')); const more = lines.length > max ? `… ${lines.length - max} more lines` : ''; if (mode === 'doc') return `<pre class="code"><code>${shown.map(esc).join('\n')}${more ? '\n' + esc(more) : ''}</code></pre>`; return `<table style="border-collapse: collapse; width: 100%; table-layout: fixed;"><tbody><tr><td style="background-color: #efefef;"><p style="white-space: pre-wrap; ${WRAP} font-size: .16rem; line-height: 1.6;">${shown.map(esc).join('\n')}${more ? '\n<em>' + esc(more) + '</em>' : ''}</p></td></tr></tbody></table>`; };
export const cssBlock = (rules, { max = 40 } = {}) => code(rules.slice(0, max).map(r => `${r.selector}${r.media && r.media.length ? '  /* ' + r.media.join(' & ').replace(/@media /g, '') + ' */' : ''} { ${Object.entries(r.declarations).map(([k, v]) => `${k}: ${v}`).join('; ')} }`).join('\n') + (rules.length > max ? `\n/* … ${rules.length - max} more rules */` : ''), { max: max + 2 });
// Specimens: verbatim live markup inside a table cell (the article template's own table styling). Inline animation state
// (swiper/gsap write transform/opacity/transition inline) is removed so each specimen shows its settled state.
export const settle = html => String(html).replace(/ style="([^"]*)"/g, (m, v) => { const kept = v.split(';').map(x => x.trim()).filter(Boolean).filter(d => !/^(opacity|transform|visibility|transition|transition-duration)\s*:/i.test(d)); return kept.length ? ` style="${kept.join('; ')}"` : ''; });
// Originals archive: live asset URL (without query) → path served on this host, for the rendered specimens.
const archivedFiles = new Map(); for (const f of opt('archive/index.json', { files: [] }).files) { if (f.url && f.file && !/^original\//.test(f.file)) { try { const u = new URL(f.url); archivedFiles.set(u.origin + u.pathname, '/' + f.file); } catch { } } }
export const archivedUrl = url => { try { const u = new URL(url); return archivedFiles.get(u.origin + u.pathname) || null; } catch { return null; } };
// The rendered copy of a specimen gets two more things on top of settle(): an image the site lazy-loads (data-src, no src)
// gets its src, as the site's own loader sets it at run time, and live-CDN URLs are routed to the originals archive on this
// host. The markup listing under each specimen keeps the capture's original URLs.
// A lazy loader also marks the image loaded with a class the site's CSS pairs with opacity 1 (e.g. .img-2yo9WX.loaded-2cKQIN);
// that class is read from the captured stylesheets, never guessed.
const STYLE_TEXT = opt('capture/pages/zh-cn_main/styles.json', []).map(s => s.text || '').join('\n');
const loadedClassFor = cls => { const m = STYLE_TEXT.match(new RegExp(`\\.${cls.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\.([A-Za-z0-9_-]+)\\{[^}]*opacity:\\s*1\\b`)); return m ? m[1] : null; };
export const materialize = html => settle(html).replace(/<img\b([^>]*)>/g, (m, attrs) => { if (/\ssrc="/.test(attrs)) return m; const d = attrs.match(/\sdata-src="([^"]+)"/); if (!d) return m; let a = attrs; const cm = a.match(/\sclass="([^"]*)"/); if (cm) { const have = cm[1].split(/\s+/); const extra = have.map(loadedClassFor).filter(x => x && !have.includes(x)); if (extra.length) a = a.replace(cm[0], ` class="${cm[1]} ${extra.join(' ')}"`); } return `<img${a} src="${d[1]}">`; }).replace(/https:\/\/[a-z0-9.-]+\.hoyoverse\.com\/[^"'\\\s<>)]+/g, u => { const m = u.match(/^(.*?)(&quot;|&#39;|&apos;)?$/); const local = archivedUrl(m[1].split('?')[0]); return local ? local + (m[2] || '') : u; });
export const prettyMarkup = html => String(html).replace(/>\s*</g, '>\n<').split('\n').reduce((acc, line) => { const closes = /^<\//.test(line); if (closes) acc.depth = Math.max(0, acc.depth - 1); acc.out.push('  '.repeat(acc.depth) + line); const selfClosing = /^<(img|br|input|source|meta|link|hr|wbr|path|circle|rect|line|polygon|use|stop)\b/.test(line) || /\/>$/.test(line) || /<\/[a-z0-9]+>$/.test(line) && !closes; if (!closes && !selfClosing && /^<[a-zA-Z]/.test(line)) acc.depth++; return acc; }, { out: [], depth: 0 }).out.join('\n');
export const specimen = (label, markup, note) => {
  if (mode === 'doc') return `<figure class="specimen"><figcaption>Specimen — ${esc(label)}</figcaption><div class="frame">${materialize(markup)}</div>${note ? `<p class="note">${esc(note)}</p>` : ''}<details open><summary>Markup of this specimen (verbatim from the live page; animation inline state removed)</summary><pre class="code"><code>${esc(prettyMarkup(settle(markup)).split('\n').slice(0, 80).join('\n'))}</code></pre></details></figure>`;
  const base = `${chapterSlug}:${label}`; const n = (specimenKeys.get(base) || 0) + 1; specimenKeys.set(base, n); const key = n > 1 ? `${base}#${n}` : base;
  const id = 'specimen-' + key.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase();
  const g = geometry[key]; const rootClass = (String(markup).match(/class="([^"]*)"/) || [, ''])[1].split(/\s+/)[0];
  specimenIndex.push({ key, id, chapter: chapterSlug, label, rootClass, staged: !!(g && g.stage) });
  // The specimen cell is a block (so it can scroll sideways when the component is wider than the article column, e.g. the
  // 19.2rem header). A positioned component gets a window of its measured size onto a stage table at the measured offset.
  const cell = g && g.stage
    ? `<td id="${id}" style="display: block; position: relative; overflow: hidden; padding: 0; width: 100%; height: ${Math.round(g.h)}px;"><table style="border-collapse: collapse; table-layout: fixed; position: absolute; left: ${-Math.round(g.dx)}px; top: ${-Math.round(g.dy)}px; width: ${STAGE.w}px; height: ${STAGE.h}px;"><tbody><tr><td style="display: block; position: relative; padding: 0; width: ${STAGE.w}px; height: ${STAGE.h}px; transform: translate(0px, 0px);">${materialize(markup)}</td></tr></tbody></table></td>`
    : `<td id="${id}" style="display: block; position: relative; overflow: auto; width: 100%;">${materialize(markup)}</td>`;
  const stageNote = g && g.stage ? `<tr><td><p style="white-space: pre-wrap;"><em>This component is ${esc(g.position)}-positioned by the site's CSS; it sits ${Math.round(g.dx)} px from the left and ${Math.round(g.dy)} px from the top of a ${STAGE.w} × ${STAGE.h} px stage, and the cell above is a measured ${Math.round(g.w)} × ${Math.round(g.h)} px window onto that stage.</em></p></td></tr>` : (g && g.hidden ? `<tr><td><p style="white-space: pre-wrap;"><em>The captured element is display: none in this context (${esc(g.hiddenWhy || 'hidden by the site\'s CSS or by its inline state')}); the markup below is still the verbatim capture.</em></p></td></tr>` : '');
  return `<table style="border-collapse: collapse; width: 100%; table-layout: fixed;"><tbody><tr><td style="background-color: #222122; color: #fff;"><p style="white-space: pre-wrap;"><strong>Specimen — ${esc(label)}</strong></p></td></tr><tr>${cell}</tr>${note ? `<tr><td><p style="white-space: pre-wrap;"><em>${esc(note)}</em></p></td></tr>` : ''}${stageNote}<tr><td style="background-color: #efefef;"><p style="white-space: pre-wrap; ${WRAP} font-size: .16rem; line-height: 1.6;">${esc(prettyMarkup(settle(markup)).split('\n').slice(0, 80).join('\n'))}</p></td></tr></tbody></table>`;
};
export const readableFile = id => data.readable.find(r => String(r.id) === String(id));
export const readableLink = (id, label) => { const r = readableFile(id); return r ? a(label || r.file, '/source/readable/' + r.file) : esc(label || `module ${id}`); };
export const chunkUrl = chunk => CDN + chunk + '.js';
export const rem = (remValue, px = 56.25) => `${remValue}rem = ${+(parseFloat(remValue) * px).toFixed(2)}px at 1440 wide`;
export function extractAll(html, cls, limit = 3, cap = 20000) {
  // exact class-token match; a trailing * matches a hashed suffix (CSS-module classes such as hy-footer-1DmxLu)
  const prefix = cls.endsWith('*'); const base = (prefix ? cls.slice(0, -1) : cls).replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'); const token = prefix ? `${base}[A-Za-z0-9_-]*` : base;
  const out = []; const re = new RegExp(`<([a-zA-Z0-9]+)([^>]*class="(?:[^"]*\\s)?${token}(?:\\s[^"]*)?"[^>]*)>`, 'g'); let m;
  const voids = new Set(['img', 'br', 'input', 'source', 'meta', 'link', 'hr', 'wbr']);
  while ((m = re.exec(html)) && out.length < limit) {
    const start = m.index; if (out.some(o => start < o.end && start >= o.start)) continue;
    if (voids.has(m[1])) { out.push({ start, end: start + m[0].length, html: m[0] }); continue; }
    let depth = 0; const tagRe = /<\/?([a-zA-Z0-9]+)[^>]*?(\/?)>/g; tagRe.lastIndex = start; let tg, end = null;
    while ((tg = tagRe.exec(html))) { const close = tg[0].startsWith('</'); const self = tg[2] === '/' || voids.has(tg[1]); if (!close && !self) depth++; else if (close) depth--; if (depth === 0) { end = tg.index + tg[0].length; break; } if (tg.index - start > cap * 4) break; }
    if (end) out.push({ start, end, html: html.slice(start, end) });
  }
  return out.map(o => settle(o.html));
}
export const pageDom = name => readFileSync(join(root, 'capture/pages', name, 'dom.html'), 'utf8');
export const pageExists = name => existsSync(join(root, 'capture/pages', name, 'page.json'));
export const shotIf = (rel, caption) => existsSync(join(root, rel)) ? img('/' + rel, caption) : '';
export const rulesFor = (component, filter) => data.cssRules.rules.filter(r => r.component === component && (!filter || filter(r)));
export const hoverFor = cls => data.hover.filter(hh => hh.cls === cls || hh.cls.startsWith(cls + '__') || hh.cls.startsWith(cls + '--'));
export const compIndex = () => data.cssComponents;
export const cssText = moduleId => readFileSync(join(root, 'capture/css', moduleId + '.css'), 'utf8');
export const moduleSource = id => { const m = data.graph[id]; return m ? readFileSync(join(root, 'source/modules', m.chunk, id + '.js'), 'utf8').replace(/^\/\/.*\n\/\/.*\n/, '') : ''; };
export const stage1Source = id => existsSync(join(root, 'source/stage1', id + '.js')) ? readFileSync(join(root, 'source/stage1', id + '.js'), 'utf8') : '';
export const routeOf = name => data.routes.find(r => r.name === name);
export const pageOf = slug => data.pages[slug];
export const computedOf = (slug, cls) => (data.pages[slug] && data.pages[slug].computed[cls]) || null;
export const assetModules = () => Object.values(data.moduleMap).filter(m => m.kind === 'asset-url').map(m => ({ id: m.id, file: m.name.replace('asset:', ''), url: m.note.startsWith('data:') ? m.note : CDN + m.note, chunk: m.chunk }));
export function mediaLogs() { return Object.keys(data.pages).map(pg => { try { return [pg, JSON.parse(readFileSync(join(root, 'capture/pages', pg, 'media-log.json'), 'utf8'))]; } catch { return null; } }).filter(Boolean); }
// Real code excerpt from a readable module (falls back to the stage-1 reconstruction when the readable file is not built yet).
export function excerpt(id, start, lines = 30, { skip = 0 } = {}) {
  const r = readableFile(id); const file = r ? 'source/readable/' + r.file : (existsSync(join(root, 'source/stage1', id + '.js')) ? 'source/stage1/' + id + '.js' : null);
  if (!file) return p('<strong>excerpt unavailable for module ' + esc(String(id)) + '</strong>');
  const src = readFileSync(join(root, file), 'utf8').split('\n');
  const re = start instanceof RegExp ? start : new RegExp(start.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  let i = src.findIndex(l => re.test(l)); if (i < 0) return p('<strong>excerpt anchor not found in ' + esc(file) + ': ' + esc(String(start)) + '</strong>');
  i += skip; const slice = src.slice(i, i + lines);
  const indent = Math.min(...slice.filter(l => l.trim()).map(l => l.match(/^ */)[0].length));
  return p(`<strong>Code — ${esc(file.replace(/^source\//, ''))} lines ${i + 1}–${i + slice.length} (${r ? 'readable reconstruction of the shipped module' : 'stage-1 reconstruction of the shipped module'}; values and control flow unchanged):</strong>`) + code(slice.map(l => l.slice(indent)).join('\n'), { max: lines + 2 });
}
