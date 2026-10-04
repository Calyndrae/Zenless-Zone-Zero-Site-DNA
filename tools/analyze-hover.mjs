// Merge hover-state diffs across pages into one table keyed by component class.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const merged = {};
for (const p of readdirSync(join(root, 'capture/pages'))) {
  const f = join(root, 'capture/pages', p, 'hover-states.json'); if (!existsSync(f)) continue;
  for (const h of JSON.parse(readFileSync(f, 'utf8'))) { if (!h.diff) continue; if (merged[h.cls]) { merged[h.cls].pages.push(p); continue; } merged[h.cls] = { cls: h.cls, component: h.cls.split('__')[0].replace(/--.*$/, ''), pages: [p], transition: h.transition, changes: Object.entries(h.diff).map(([node, props]) => ({ node, props })) }; }
}
const rules = JSON.parse(readFileSync(join(root, 'analysis/motion.json'), 'utf8')).hoverRules;
for (const m of Object.values(merged)) m.cssRules = rules.filter(r => r.selector.includes(m.cls)).map(r => ({ selector: r.selector, media: r.media, declarations: r.declarations, source: r.source }));
writeFileSync(join(root, 'analysis/hover-states.json'), JSON.stringify(Object.values(merged), null, 1));
for (const m of Object.values(merged)) {
  console.log(`\n${m.cls} [${m.pages.join(',')}] transition=${(m.transition || '').slice(0, 80)}`);
  for (const c of m.changes.slice(0, 6)) console.log('   ', c.node.slice(0, 50), Object.entries(c.props).map(([p, v]) => `${p}: ${String(v.before).slice(0, 40)} → ${String(v.after).slice(0, 40)}`).join(' ; ').slice(0, 260));
  for (const r of m.cssRules.slice(0, 3)) console.log('    CSS', r.selector.slice(0, 90), JSON.stringify(r.declarations).slice(0, 160), r.media.join(' '));
}
const uncaptured = rules.filter(r => !Object.keys(merged).some(c => r.selector.includes(c)));
console.log('\nhover rules without a captured diff:', uncaptured.length);
for (const r of uncaptured.slice(0, 60)) console.log('  ', r.selector.slice(0, 100), JSON.stringify(r.declarations).slice(0, 120));
