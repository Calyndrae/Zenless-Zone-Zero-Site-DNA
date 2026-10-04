// Stage-1 renamer: scope-aware mechanical renames (webpack params, require aliases → module names,
// CSS-module aliases → styles, React/jsx), then make every remaining short binding unique (name_N)
// so a semantic rename map can be applied unambiguously in stage 2.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';
import _generate from '@babel/generator';
import * as prettier from 'prettier';
const traverse = _traverse.default ?? _traverse; const generate = _generate.default ?? _generate;
const root = new URL('..', import.meta.url).pathname;
const map = JSON.parse(readFileSync(join(root, 'source/module-map.json'), 'utf8'));
const graph = JSON.parse(readFileSync(join(root, 'source/module-graph.json'), 'utf8'));
const camel = s => s.replace(/[^A-Za-z0-9]+(.)?/g, (_, c) => c ? c.toUpperCase() : '').replace(/^[0-9]/, 'm$&');
export function aliasFor(id) {
  const m = map[id]; if (!m) return 'module' + id;
  if (m.kind === 'css-module') return 'styles';
  if (m.kind === 'asset-url') return camel(m.name.replace('asset:', '').replace(/\.[0-9a-f]{7}\.\w+$/, '').replace(/\.\w+$/, '')) + 'Url';
  if (m.kind === 'site-page') return camel(m.name.replace('page:', '')) + 'Page';
  const n = m.name.replace(/\s*\(.*\)$/, '');
  if (/^vue 2 runtime/.test(n)) return 'Vue'; if (n === 'vue-router') return 'VueRouter'; if (n === 'vuex') return 'Vuex'; if (/^swiper/.test(n)) return 'Swiper'; if (/^gsap/.test(n)) return 'gsap'; if (n === 'axios') return 'axios'; if (n === 'lodash') return 'lodash';
  if (n === 'unresolved') return 'module' + id;
  return camel(n).slice(0, 48);
}
export function renameModule(id, { stage2 = null } = {}) {
  const m = graph[id]; if (!m) throw new Error('no module ' + id);
  const src = readFileSync(join(root, 'source/modules', m.chunk, id + '.js'), 'utf8');
  const ast = parse(src, { sourceType: 'script', errorRecovery: true });
  const used = new Set();
  const unique = (scope, base) => { let n = base, i = 2; while (scope.hasBinding(n) || used.has(n)) n = base + (i++); used.add(n); return n; };
  let reqName = null;
  traverse(ast, { Function(path) { if (path.node.params.length >= 3 && path.node.params[2].type === 'Identifier') { reqName = path.node.params[2].name; path.stop(); } } });
  if (reqName) traverse(ast, {
    VariableDeclarator(path) {
      if (path.node.id.type !== 'Identifier') return;
      const init = path.node.init; if (!init) return;
      if (init.type === 'CallExpression' && init.callee.type === 'Identifier' && init.callee.name === reqName && init.arguments[0]?.type === 'NumericLiteral') {
        const dep = init.arguments[0].value; const base = aliasFor(dep); path.scope.rename(path.node.id.name, unique(path.scope, base === 'styles' ? 'stylesModule' : base));
      }
      if (init.type === 'CallExpression' && init.callee.type === 'MemberExpression' && init.callee.object.type === 'Identifier' && init.callee.object.name === reqName && init.callee.property.name === 'n' && init.arguments[0]?.type === 'Identifier') {
        const target = path.scope.getBinding(init.arguments[0].name); let base = 'defaultOf_' + init.arguments[0].name;
        if (target && target.path.node.init?.type === 'CallExpression' && target.path.node.init.arguments[0]?.type === 'NumericLiteral') { const dep = target.path.node.init.arguments[0].value; base = map[dep]?.kind === 'css-module' ? 'styles' : aliasFor(dep) + 'Default'; }
        path.scope.rename(path.node.id.name, unique(path.scope, base));
      }
    },
  });
  traverse(ast, { Function(path) { const names = ['webpackModule', 'webpackExports', 'webpackRequire']; path.node.params.forEach((p, i) => { if (p.type === 'Identifier' && names[i]) path.scope.rename(p.name, unique(path.scope, names[i])); }); path.stop(); } });
  let counter = 0; const stage1Names = [];
  traverse(ast, { Scope(path) { for (const [name, binding] of Object.entries(path.scope.bindings)) { if (name.length <= 2 && binding.scope === path.scope) { const n = `${name}_${++counter}`; path.scope.rename(name, n); stage1Names.push(n); } } } });
  if (stage2) traverse(ast, { Scope(path) { for (const name of Object.keys(path.scope.bindings)) { const t = stage2[name]; if (t && t !== name && /^[A-Za-z_$][\w$]*$/.test(t) && !path.scope.hasBinding(t)) path.scope.rename(name, t); } } });
  return { code: generate(ast, { comments: true }).code, stage1Names };
}
const isMain = process.argv[1] && process.argv[1].endsWith('rename.mjs');
if (isMain) {
  const ids = process.argv.slice(2);
  const outDir = join(root, 'source/stage1'); mkdirSync(outDir, { recursive: true });
  const list = ids.length ? ids : Object.keys(map).filter(k => ['site', 'site-page', 'unresolved', 'site-vendor'].includes(map[k].kind) && map[k].bytes > 300);
  let n = 0;
  for (const id of list) {
    try { const { code } = renameModule(id); const pretty = await prettier.format(code, { parser: 'babel', printWidth: 110 }); writeFileSync(join(outDir, id + '.js'), `// ${map[id].name} — module ${id} from ${map[id].chunk}\n` + pretty); n++; }
    catch (e) { console.log('fail', id, String(e).slice(0, 150)); }
  }
  console.log('stage1 written', n);
}
