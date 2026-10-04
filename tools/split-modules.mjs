// Split each webpack 4 chunk (Nuxt 2: (window.webpackJsonp=window.webpackJsonp||[]).push([[chunkIds], modules, [entry]]))
// into its numbered modules, record dependencies and hints. Modules come as an object {id: function} or as an array
// [,function,function] whose ids are the indexes. Also records which chunk defines each module (ids are build-global).
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';
const traverse = _traverse.default ?? _traverse;
const root = new URL('..', import.meta.url).pathname;
const outRoot = join(root, 'source', 'modules'); mkdirSync(outRoot, { recursive: true });
const graph = {}; const chunkInfo = {};
for (const name of readdirSync(join(root, 'capture', 'js')).filter(f => f.endsWith('.js')).sort()) {
  const src = readFileSync(join(root, 'capture', 'js', name), 'utf8');
  let ast; try { ast = parse(src, { sourceType: 'script', errorRecovery: true }); } catch (e) { console.log('PARSE FAIL', name, String(e).slice(0, 120)); continue; }
  const chunk = name.replace(/\.js$/, '');
  const dir = join(outRoot, chunk); mkdirSync(dir, { recursive: true });
  let count = 0; const ids = [];
  const record = (id, fn) => {
    const params = fn.params.map(x => x.name || '?'); const req = params[2];
    const deps = new Set(); const exportsNames = new Set(); const cssClasses = new Set(); const strings = []; let cssModule = false, assetModule = null, vueComponent = false, componentName = null;
    const inner = parse('(' + src.slice(fn.start, fn.end) + ')', { sourceType: 'script', errorRecovery: true });
    traverse(inner, {
      CallExpression(q) { const c = q.node.callee;
        if (req && c.type === 'Identifier' && c.name === req && q.node.arguments[0] && q.node.arguments[0].type === 'NumericLiteral') deps.add(q.node.arguments[0].value);
        if (req && c.type === 'MemberExpression' && c.object.type === 'Identifier' && c.object.name === req && c.property.name === 'd' && q.node.arguments[1] && q.node.arguments[1].type === 'ObjectExpression') for (const pp of q.node.arguments[1].properties) if (pp.key) exportsNames.add(pp.key.name || pp.key.value);
        if (c.type === 'MemberExpression' && c.property.name === 'push' && q.node.arguments[0] && q.node.arguments[0].type === 'ArrayExpression' && q.node.arguments[0].elements[0] && q.node.arguments[0].elements[0].type === 'MemberExpression' && q.node.arguments[0].elements[0].property.name === 'i') cssModule = true; },
      StringLiteral(q) { const v = q.node.value; if (/^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$/.test(v) && v.length > 3 && v.length < 60 && /-|__/.test(v)) cssClasses.add(v); else if (v.length > 3 && v.length < 120 && strings.length < 40 && /[A-Za-z]{3}/.test(v)) strings.push(v); },
      AssignmentExpression(q) { const l = q.node.left; if (l.type === 'MemberExpression' && l.property.name === 'exports' && q.node.right.type === 'BinaryExpression' && q.node.right.right.type === 'StringLiteral' && /\.(png|jpe?g|gif|svg|webp|mp4|mp3|woff2?|ttf|otf|eot|json)$/i.test(q.node.right.right.value)) assetModule = q.node.right.right.value; if (l.type === 'MemberExpression' && l.property.name === 'exports' && q.node.right.type === 'StringLiteral' && /^data:/.test(q.node.right.value)) assetModule = 'data:' + q.node.right.value.slice(5, 40) + '…'; },
      ObjectProperty(q) { if (q.node.key && (q.node.key.name === 'staticClass') ) vueComponent = true; if (q.node.key && q.node.key.name === 'name' && q.node.value.type === 'StringLiteral' && !componentName && /^[a-z][a-z0-9-]*$/.test(q.node.value.value) && q.node.value.value.length > 2) componentName = q.node.value.value; }
    });
    const body = src.slice(fn.start, fn.end);
    graph[id] = { chunk, bytes: body.length, params, deps: [...deps].sort((a, b) => a - b), exports: [...exportsNames], cssClasses: [...cssClasses].slice(0, 80), strings: strings.slice(0, 25), kind: cssModule ? 'css' : assetModule ? 'asset' : vueComponent ? 'vue' : 'js', asset: assetModule, componentName };
    writeFileSync(join(dir, id + '.js'), `// module ${id} from ${name}\n// deps: ${[...deps].join(', ')}\nconst module_${id} = ${body};\n`);
    ids.push(Number(id)); count++;
  };
  traverse(ast, {
    CallExpression(path) {
      const c = path.node.callee; if (!(c.type === 'MemberExpression' && c.property.name === 'push')) return;
      const arg = path.node.arguments[0]; if (!arg || arg.type !== 'ArrayExpression' || !arg.elements[1]) return;
      const mods = arg.elements[1];
      if (mods.type === 'ObjectExpression') { for (const p of mods.properties) if (p.type === 'ObjectProperty' && (p.key.type === 'NumericLiteral' || p.key.type === 'StringLiteral') && /Function/.test(p.value.type)) record(String(p.key.value), p.value); }
      else if (mods.type === 'ArrayExpression') { mods.elements.forEach((el, i) => { if (el && /Function/.test(el.type)) record(String(i), el); }); }
      chunkInfo[chunk] = { chunkIds: arg.elements[0].type === 'ArrayExpression' ? arg.elements[0].elements.map(e => e.value) : [], modules: ids.length, form: mods.type === 'ArrayExpression' ? 'array' : 'object', entry: arg.elements[2] ? 'yes' : '' };
    }
  });
  if (!count && /function\(e\)\{function r\(data\)/.test(src)) chunkInfo[chunk] = { runtime: true, bytes: src.length };
  console.log(name, 'modules:', count, chunkInfo[chunk] ? (chunkInfo[chunk].form || 'runtime') : '');
}
writeFileSync(join(root, 'source', 'module-graph.json'), JSON.stringify(graph, null, 1));
writeFileSync(join(root, 'source', 'chunk-info.json'), JSON.stringify(chunkInfo, null, 1));
const kinds = {}; for (const g of Object.values(graph)) kinds[g.kind] = (kinds[g.kind] || 0) + 1;
console.log('total modules', Object.keys(graph).length, JSON.stringify(kinds), 'named components', Object.values(graph).filter(g => g.componentName).length);
