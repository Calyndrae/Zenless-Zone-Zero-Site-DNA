// Distill style-mutation logs into per-element animation timelines (entrance motion evidence).
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const out = {};
const parseStyle = s => Object.fromEntries((s || '').split(';').map(x => x.trim()).filter(Boolean).map(x => { const i = x.indexOf(':'); return [x.slice(0, i).trim(), x.slice(i + 1).trim()]; }));
for (const p of readdirSync(join(root, 'capture/pages'))) {
  const f = join(root, 'capture/pages', p, 'motion-timeline.json'); if (!existsSync(f)) continue;
  const muts = JSON.parse(readFileSync(f, 'utf8'));
  const byEl = {};
  for (const m of muts) {
    const key = (m.cls || m.tag).split(' ').filter(c => /^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$|^[a-z][a-z0-9-]*-[A-Za-z0-9_-]{6}$/.test(c) && !/^swiper-(slide-|container-|wrapper|button-|pagination-bullet-)|^(is-active|active|visible|show|hide|hidden)$/.test(c)).slice(0, 2).join(' ') || m.tag;
    const e = byEl[key] = byEl[key] || { element: key, tag: m.tag, first: m.t, last: m.t, count: 0, props: {}, classChanges: [] };
    e.count++; e.first = Math.min(e.first, m.t); e.last = Math.max(e.last, m.t);
    if (m.attr === 'style') { const st = parseStyle(m.style); for (const [k, v] of Object.entries(st)) { const pr = e.props[k] = e.props[k] || { first: { t: m.t, v }, last: { t: m.t, v }, samples: 0 }; pr.last = { t: m.t, v }; pr.samples++; if (!pr.firstValue) pr.firstValue = v; } }
    else if (m.attr === 'class') { const added = m.cls.split(' ').filter(c => !(m.old || '').split(' ').includes(c)); const removed = (m.old || '').split(' ').filter(c => c && !m.cls.split(' ').includes(c)); if (added.length || removed.length) e.classChanges.push({ t: m.t, added, removed }); }
  }
  const list = Object.values(byEl).map(e => ({ ...e, durationMs: e.last - e.first, props: Object.fromEntries(Object.entries(e.props).map(([k, v]) => [k, { from: v.first.v, to: v.last.v, startMs: v.first.t, endMs: v.last.t, samples: v.samples }])), classChanges: e.classChanges.slice(0, 12) })).sort((a, b) => a.first - b.first);
  out[p] = list;
}
writeFileSync(join(root, 'analysis/motion-timelines.json'), JSON.stringify(out, null, 1));
for (const [p, list] of Object.entries(out)) {
  console.log(`\n## ${p}: ${list.length} animated elements`);
  for (const e of list.slice(0, 45)) {
    const props = Object.entries(e.props).map(([k, v]) => `${k}: ${String(v.from).slice(0, 38)} → ${String(v.to).slice(0, 38)} (${v.startMs}–${v.endMs}ms, ${v.samples} frames)`).join(' | ');
    const cls = e.classChanges.map(c => `${c.t}ms +${c.added.map(x => x).join(',')}${c.removed.length ? ' -' + c.removed.map(x => x).join(',') : ''}`).join('; ');
    console.log(`${e.element.slice(0, 60).padEnd(60)} t=${e.first}–${e.last}ms n=${e.count} ${props.slice(0, 220)} ${cls.slice(0, 160)}`);
  }
}
