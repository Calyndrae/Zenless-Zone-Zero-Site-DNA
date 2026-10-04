// capture/css-components.json: every BEM block (component) seen in the stylesheets → the stylesheet modules that style
// it and the full set of its classes (block, block__element, block--modifier, block__element--modifier).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const { rules } = JSON.parse(readFileSync(join(root, 'analysis/css-rules.json'), 'utf8'));
const comps = {};
for (const r of rules) { if (!r.component) continue; const c = comps[r.component] = comps[r.component] || { files: new Set(), classes: {}, rules: 0 }; c.files.add(r.file); c.rules++; for (const m of r.selector.matchAll(/\.(-?[A-Za-z_][A-Za-z0-9_-]*)/g)) { const cls = m[1]; if (cls === r.component || cls.startsWith(r.component + '__') || cls.startsWith(r.component + '--')) c.classes[cls] = cls; } }
const out = Object.fromEntries(Object.entries(comps).sort((a, b) => b[1].rules - a[1].rules).map(([k, v]) => [k, { files: [...v.files], classes: v.classes, rules: v.rules }]));
writeFileSync(join(root, 'capture/css-components.json'), JSON.stringify(out, null, 1));
console.log('components', Object.keys(out).length, 'classes', Object.values(out).reduce((n, c) => n + Object.keys(c.classes).length, 0));
