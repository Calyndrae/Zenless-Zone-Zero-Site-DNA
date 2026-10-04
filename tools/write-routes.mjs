// The Nuxt route table lives in the client chunk: {path:"/m/:lang/main",component:()=>Object(_.m)(Promise.all([n.e(0),…]).then(n.bind(null,1419))),name:"m-lang-main"}
// → source/routes.json: route path, name, the chunk ids it loads and the page module id.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const chunkMap = JSON.parse(readFileSync(join(root, 'capture/js/chunk-map.json'), 'utf8')).chunks;
const js = readFileSync(join(root, 'capture/js/be1f69b.js'), 'utf8');
const routes = [];
for (const m of js.matchAll(/\{path:"([^"]+)",component:function\(\)\{([^{}]*)\}((?:,[a-z]+:(?:"[^"]*"|[a-z0-9!]+))*),name:"([^"]+)"/g)) {
  const chunkIds = [...m[2].matchAll(/\.e\((\d+)\)/g)].map(x => Number(x[1])); const mod = (m[2].match(/bind\(null,(\d+)\)/) || [])[1];
  routes.push({ path: m[1], name: m[4], module: mod ? Number(mod) : null, chunkIds, chunks: chunkIds.map(i => chunkMap[i] || ('?' + i)), extra: m[3].replace(/^,/, '') });
}
writeFileSync(join(root, 'source/routes.json'), JSON.stringify(routes, null, 1));
console.log(routes.length, 'routes'); for (const r of routes) console.log(' ', r.path.padEnd(32), r.name.padEnd(22), 'module', r.module, 'chunks', r.chunks.join(' '));
