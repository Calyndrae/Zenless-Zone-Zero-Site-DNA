// Beautify every archived chunk/stylesheet with prettier (values untouched).
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import * as prettier from 'prettier';
const root = new URL('..', import.meta.url).pathname;
const out = join(root, 'source', 'beautified'); mkdirSync(out, { recursive: true });
for (const sub of ['js', 'css']) {
  for (const name of readdirSync(join(root, 'capture', sub)).filter(f => /\.(js|css)$/.test(f))) {
    const src = readFileSync(join(root, 'capture', sub, name), 'utf8');
    const parser = sub === 'js' ? 'babel' : 'css';
    try {
      const pretty = await prettier.format(src, { parser, printWidth: 110, singleQuote: false });
      writeFileSync(join(out, name), pretty);
      console.log('ok', name, src.length, '->', pretty.length);
    } catch (e) { console.log('FAIL', name, String(e).slice(0, 200)); }
  }
}
