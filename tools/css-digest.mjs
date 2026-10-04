// One-line-per-rule digest of every component's shipped CSS, grouped by component, for reading.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const { rules, keyframes } = JSON.parse(readFileSync(join(root, 'analysis/css-rules.json'), 'utf8'));
const byComp = {};
for (const r of rules) { const c = r.component || (r.selector.startsWith('.swiper') ? 'swiper (vendor)' : r.selector.startsWith('html') || r.selector.startsWith('body') || r.selector.startsWith('*') || r.selector.startsWith(':root') ? 'global' : 'other'); (byComp[c] = byComp[c] || []).push(r); }
let md = '# Shipped CSS digest (every rule, values unchanged; media context in brackets)\n\n';
for (const [c, rs] of Object.entries(byComp).sort((a, b) => a[0].localeCompare(b[0]))) {
  md += `\n## ${c} — ${rs.length} rules (${[...new Set(rs.map(r => r.file))].join(', ')})\n\n`;
  for (const r of rs) md += `- \`${r.selector}\`${r.media.length ? ' [' + r.media.join(' & ').replace(/@media /g, '') + ']' : ''} → ${Object.entries(r.declarations).map(([k, v]) => `${k}: ${v}`).join('; ')}\n`;
}
md += '\n## @keyframes\n\n'; for (const k of keyframes) md += `- **${k.name}** (${k.file}): ${k.steps.map(s => `${s.at} {${Object.entries(s.declarations).map(([a, b]) => a + ': ' + b).join('; ')}}`).join(' | ')}\n`;
writeFileSync(join(root, 'analysis/css-digest.md'), md);
console.log('digest lines', md.split('\n').length, 'components', Object.keys(byComp).length);
console.log(Object.entries(byComp).map(([c, rs]) => `${c}:${rs.length}`).join('  '));
