// Build per-component evidence files: exact CSS rules, real markup from DOM snapshots, computed
// styles, hover diffs, motion rules, pages where it appears. → analysis/components/<Component>.json
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const out = join(root, 'analysis/components'); mkdirSync(out, { recursive: true });
const { rules, keyframes } = JSON.parse(readFileSync(join(root, 'analysis/css-rules.json'), 'utf8'));
const cssComponents = JSON.parse(readFileSync(join(root, 'capture/css-components.json'), 'utf8'));
const pages = readdirSync(join(root, 'capture/pages')).filter(p => existsSync(join(root, 'capture/pages', p, 'page.json')));
const doms = {}; const pageInfo = {}; const hovers = {};
for (const p of pages) { doms[p] = readFileSync(join(root, 'capture/pages', p, 'dom.html'), 'utf8'); if (existsSync(join(root, 'capture/pages', p, 'mobile-dom.html'))) doms[p + '@mobile'] = readFileSync(join(root, 'capture/pages', p, 'mobile-dom.html'), 'utf8'); pageInfo[p] = JSON.parse(readFileSync(join(root, 'capture/pages', p, 'page.json'), 'utf8')); hovers[p] = JSON.parse(readFileSync(join(root, 'capture/pages', p, 'hover-states.json'), 'utf8')); }
const ofComp = (c, comp) => c === comp || c.startsWith(comp + '__') || c.startsWith(comp + '--');
// crude element extractor: find first occurrence of class="... <cls> ..." and slice the balanced element
function extractElement(html, cls, cap = 6000) {
  const re = new RegExp(`<([a-zA-Z0-9]+)([^>]*class="[^"]*\\b${cls.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b[^"]*"[^>]*)>`);
  const m = re.exec(html); if (!m) return null;
  const start = m.index; const tag = m[1];
  const voids = new Set(['img', 'br', 'input', 'source', 'meta', 'link', 'hr', 'wbr']);
  if (voids.has(tag) || m[0].endsWith('/>')) return html.slice(start, start + m[0].length);
  let depth = 0, i = start; const tagRe = /<\/?([a-zA-Z0-9]+)[^>]*?(\/?)>/g; tagRe.lastIndex = start;
  let t;
  while ((t = tagRe.exec(html))) {
    const isClose = t[0].startsWith('</'); const selfClose = t[2] === '/' || voids.has(t[1]);
    if (!isClose && !selfClose) depth++; else if (isClose) depth--;
    if (depth === 0) { const end = t.index + t[0].length; let s = html.slice(start, end); if (s.length > cap) s = s.slice(0, cap) + `\n<!-- … truncated, ${html.slice(start, end).length} chars total -->`; return s; }
    if (t.index - start > 400000) break;
  }
  return html.slice(start, start + cap);
}
const result = {};
for (const [comp, info] of Object.entries(cssComponents)) {
  const compRules = rules.filter(r => r.component === comp);
  const locals = Object.values(info.classes);
  const rootClass = locals.includes(comp) ? comp : (locals.find(c => /container|wrap|root/i.test(c)) || locals[0]);
  // choose the element whose class is most "root-like": try each local class, pick the earliest-appearing in DOM with largest extracted size
  let markup = null, markupPage = null, markupClass = null;
  for (const p of Object.keys(doms)) {
    for (const c of [rootClass, ...locals]) { const s = extractElement(doms[p], c); if (s && (!markup || s.length > markup.length) && s.length > 60) { markup = s; markupPage = p; markupClass = c; } if (markup && markup.length > 2000) break; }
    if (markup) break;
  }
  const appearsOn = pages.filter(p => pageInfo[p].components.some(c => ofComp(c, comp)));
  const computed = {}; for (const p of appearsOn) for (const [c, v] of Object.entries(pageInfo[p].computed)) if (ofComp(c, comp)) computed[c] = computed[c] || { page: p, ...v };
  const hover = []; for (const p of appearsOn) for (const h of hovers[p]) if (h.cls && ofComp(h.cls, comp) && h.diff) hover.push(h);
  const kfNames = new Set(compRules.flatMap(r => (r.declarations.animation || r.declarations['animation-name'] || '').split(/[\s,]+/).filter(n => /^[A-Za-z_][\w-]*$/.test(n) && !/^(infinite|linear|ease|forwards|backwards|both|alternate|normal|reverse|running|paused|none)$/.test(n))));
  const kf = keyframes.filter(k => kfNames.has(k.name));
  const colors = new Set(), fonts = new Set(), sizes = new Set(), z = new Set(), transitions = new Set();
  for (const r of compRules) for (const [p, v] of Object.entries(r.declarations)) { for (const c of (v.match(/#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)/g) || [])) colors.add(c.toLowerCase()); if (p === 'font-family') fonts.add(v); if (p === 'font-size') sizes.add(v); if (p === 'z-index') z.add(v); if (p === 'transition' || p === 'animation') transitions.add(v); }
  result[comp] = { component: comp, files: info.files, classes: info.classes, ruleCount: compRules.length, rules: compRules.map(r => ({ selector: r.selector, media: r.media, declarations: r.declarations, source: r.source })), markup, markupPage, markupClass, appearsOn, computed, hover, keyframes: kf, tokens: { colors: [...colors], fonts: [...fonts], fontSizes: [...sizes], zIndex: [...z], transitions: [...transitions] } };
  writeFileSync(join(out, comp.replace(/[^A-Za-z0-9_-]/g, '') + '.json'), JSON.stringify(result[comp], null, 1));
}
const summary = Object.values(result).map(r => ({ component: r.component, rules: r.ruleCount, classes: Object.keys(r.classes).length, markup: !!r.markup, markupPage: r.markupPage, markupChars: r.markup ? r.markup.length : 0, appearsOn: r.appearsOn, hoverDiffs: r.hover.length, keyframes: r.keyframes.length, colors: r.tokens.colors.length, fonts: r.tokens.fonts }));
writeFileSync(join(root, 'analysis/components-summary.json'), JSON.stringify(summary, null, 1));
for (const s of summary) console.log(`${s.component.padEnd(22)} rules=${String(s.rules).padStart(3)} markup=${s.markup ? String(s.markupChars).padStart(5) : '  no '} page=${(s.markupPage || '-').padEnd(20)} on=${s.appearsOn.join(',').slice(0, 40)} hover=${s.hoverDiffs} kf=${s.keyframes}`);
