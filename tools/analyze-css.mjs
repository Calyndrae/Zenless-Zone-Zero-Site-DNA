// Parse every archived stylesheet into rules with media context; derive design-token tables.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import postcss from 'postcss';
import safe from 'postcss-safe-parser';
const root = new URL('..', import.meta.url).pathname;
const out = join(root, 'analysis'); mkdirSync(out, { recursive: true });
// the stylesheets are css-loader modules injected by the chunks (capture/css/<moduleId>.css, see capture/css/index.json)
const cssIndex = Object.fromEntries(JSON.parse(readFileSync(join(root, 'capture/css/index.json'), 'utf8')).map(i => [i.file.replace('capture/css/', ''), i]));
const CDN = '/_nuxt/'; const srcOf = file => (cssIndex[file] ? cssIndex[file].chunks.map(c => CDN + c + '.js').join(' ') + ' #' + cssIndex[file].moduleId : file);
const rules = [], keyframes = [], fontFaces = [];
// component = the BEM block of the first class in the selector (home-character__nav-item → home-character); the
// SDK/footer stylesheets use hashed CSS-module classes (clickable-1QrHX5) which keep their stem
const compOf = s => { const m = s.match(/\.(-?[A-Za-z_][A-Za-z0-9_-]*)/); if (!m) return null; return m[1].split('__')[0].replace(/--.*$/, '').replace(/-[A-Za-z0-9_-]{6}$/, x => /[A-Z]|\d/.test(x) ? '' : x); };
for (const file of readdirSync(join(root, 'capture/css')).filter(f => f.endsWith('.css')).sort((a, b) => Number(a.replace('.css','')) - Number(b.replace('.css','')))) {
  const css = readFileSync(join(root, 'capture/css', file), 'utf8');
  const ast = postcss().process(css, { parser: safe, from: file }).root;
  const walk = (node, media) => {
    node.each(child => {
      if (child.type === 'atrule' && (child.name === 'media' || child.name === 'supports' || child.name === 'container')) walk(child, media.concat(`@${child.name} ${child.params}`));
      else if (child.type === 'atrule' && /keyframes$/.test(child.name)) {
        keyframes.push({ name: child.params, file, source: srcOf(file), css: child.toString(), steps: child.nodes.map(n => ({ at: n.selector, declarations: Object.fromEntries((n.nodes||[]).filter(d=>d.type==='decl').map(d => [d.prop, d.value])) })) });
      } else if (child.type === 'atrule' && child.name === 'font-face') {
        fontFaces.push({ file, source: srcOf(file), declarations: Object.fromEntries((child.nodes||[]).filter(d=>d.type==='decl').map(d => [d.prop, d.value])) });
      } else if (child.type === 'rule') {
        const decls = (child.nodes||[]).filter(d => d.type === 'decl').map(d => [d.prop, d.value + (d.important ? ' !important' : '')]);
        rules.push({ selector: child.selector, media, file, source: srcOf(file), component: compOf(child.selector), declarations: Object.fromEntries(decls), order: rules.length });
      }
    });
  };
  walk(ast, []);
}
writeFileSync(join(out, 'css-rules.json'), JSON.stringify({ rules, keyframes, fontFaces }, null, 1));
// --- derived tables
const count = (arr) => { const m = new Map(); for (const k of arr) m.set(k, (m.get(k) || 0) + 1); return [...m.entries()].sort((a, b) => b[1] - a[1]); };
const colorRe = /#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|hsla?\([^)]*\)/g;
const colors = {};
for (const r of rules) for (const [p, v] of Object.entries(r.declarations)) {
  for (const c of (v.match(colorRe) || [])) {
    const key = c.toLowerCase(); colors[key] = colors[key] || { value: key, count: 0, properties: {}, components: {}, examples: [] };
    colors[key].count++; colors[key].properties[p] = (colors[key].properties[p] || 0) + 1;
    if (r.component) colors[key].components[r.component] = (colors[key].components[r.component] || 0) + 1;
    if (colors[key].examples.length < 6) colors[key].examples.push({ selector: r.selector, property: p, value: v, media: r.media });
  }
}
const colorList = Object.values(colors).sort((a, b) => b.count - a.count);
const fontFamilies = {};
for (const r of rules) if (r.declarations['font-family']) { const f = r.declarations['font-family']; fontFamilies[f] = fontFamilies[f] || { family: f, count: 0, components: {}, examples: [] }; fontFamilies[f].count++; if (r.component) fontFamilies[f].components[r.component] = (fontFamilies[f].components[r.component] || 0) + 1; if (fontFamilies[f].examples.length < 8) fontFamilies[f].examples.push({ selector: r.selector, media: r.media, size: r.declarations['font-size'], weight: r.declarations['font-weight'], lineHeight: r.declarations['line-height'], letterSpacing: r.declarations['letter-spacing'] }); }
const typo = [];
for (const r of rules) if (r.declarations['font-size'] || r.declarations['font-family'] || r.declarations['line-height'] || r.declarations['letter-spacing']) typo.push({ selector: r.selector, component: r.component, media: r.media, family: r.declarations['font-family'], size: r.declarations['font-size'], weight: r.declarations['font-weight'], lineHeight: r.declarations['line-height'], letterSpacing: r.declarations['letter-spacing'], transform: r.declarations['text-transform'], source: r.source });
const spacingProps = ['margin', 'margin-top', 'margin-bottom', 'margin-left', 'margin-right', 'padding', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right', 'gap', 'row-gap', 'column-gap'];
const spacing = count(rules.flatMap(r => spacingProps.filter(p => r.declarations[p]).map(p => `${p}: ${r.declarations[p]}`)));
const zIndex = rules.filter(r => r.declarations['z-index']).map(r => ({ selector: r.selector, component: r.component, media: r.media, zIndex: r.declarations['z-index'], position: r.declarations.position, source: r.source }));
const transitions = rules.filter(r => r.declarations.transition || r.declarations.animation || r.declarations['transition-duration']).map(r => ({ selector: r.selector, component: r.component, media: r.media, transition: r.declarations.transition, animation: r.declarations.animation, source: r.source }));
const hoverRules = rules.filter(r => /:hover|:active|:focus/.test(r.selector)).map(r => ({ selector: r.selector, component: r.component, media: r.media, declarations: r.declarations, source: r.source }));
const mediaQueries = count(rules.flatMap(r => r.media));
const breakpoints = count(rules.flatMap(r => r.media.flatMap(m => (m.match(/\(([^)]+)\)/g) || []))));
const fonts = fontFaces.map(f => ({ family: f.declarations['font-family'], src: f.declarations.src, weight: f.declarations['font-weight'], display: f.declarations['font-display'], source: f.source }));
const components = {};
for (const r of rules) if (r.component) { components[r.component] = components[r.component] || { rules: 0, files: new Set(), hover: 0, media: 0 }; components[r.component].rules++; components[r.component].files.add(r.file); if (/:hover/.test(r.selector)) components[r.component].hover++; if (r.media.length) components[r.component].media++; }
for (const c of Object.values(components)) c.files = [...c.files];
const summary = { stylesheets: readdirSync(join(root, 'capture/css')).filter(f => f.endsWith('.css')), rules: rules.length, keyframes: keyframes.length, fontFaces: fontFaces.length, colors: colorList.length, components: Object.keys(components).length, hoverRules: hoverRules.length, transitions: transitions.length, zIndexRules: zIndex.length, mediaQueryContexts: mediaQueries.length };
writeFileSync(join(out, 'colors.json'), JSON.stringify(colorList, null, 1));
writeFileSync(join(out, 'typography.json'), JSON.stringify({ fontFamilies: Object.values(fontFamilies).sort((a, b) => b.count - a.count), fontFaces: fonts, rules: typo, sizes: count(typo.map(t => t.size).filter(Boolean)), lineHeights: count(typo.map(t => t.lineHeight).filter(Boolean)), letterSpacings: count(typo.map(t => t.letterSpacing).filter(Boolean)) }, null, 1));
writeFileSync(join(out, 'spacing.json'), JSON.stringify(spacing, null, 1));
writeFileSync(join(out, 'layers.json'), JSON.stringify(zIndex.sort((a, b) => Number(b.zIndex) - Number(a.zIndex)), null, 1));
writeFileSync(join(out, 'motion.json'), JSON.stringify({ keyframes, transitions, hoverRules }, null, 1));
writeFileSync(join(out, 'breakpoints.json'), JSON.stringify({ mediaQueries, conditions: breakpoints }, null, 1));
writeFileSync(join(out, 'components.json'), JSON.stringify(components, null, 1));
writeFileSync(join(out, 'summary.json'), JSON.stringify(summary, null, 1));
console.log(JSON.stringify(summary));
console.log('top colors', colorList.slice(0, 16).map(c => `${c.value}:${c.count}`).join(' '));
console.log('font families', Object.values(fontFamilies).sort((a, b) => b.count - a.count).slice(0, 12).map(f => `${f.family}:${f.count}`).join(' | '));
console.log('keyframes', keyframes.map(k => k.name).join(', '));
console.log('fonts', fonts.map(f => f.family + ' ' + (f.src||'').slice(0, 60)).join('\n'));
