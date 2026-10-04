// Local-only server: serves the repository exactly as GitHub Pages does — static files, directory index.html, and
// 404.html (the mirrored SPA shell) for any other path — so the mirror, the handbook and every archived file work at
// their hosted paths. Optional LAN binding with a client-address allow list.
import http from 'node:http';
import { existsSync, statSync, createReadStream } from 'node:fs';
import { join, extname, resolve } from 'node:path';
const root = resolve(new URL('..', import.meta.url).pathname);
const args = process.argv.slice(2); const flag = n => { const a = args.find(x => x.startsWith(`--${n}=`)); return a ? a.slice(n.length + 3) : null; };
const port = Number(args.find(a => /^\d+$/.test(a)) || 8786);
const host = flag('host') || '127.0.0.1';
const allow = (flag('allow') || '').split(',').map(x => x.trim()).filter(Boolean);
const normalizeIp = ip => (ip || '').replace(/^::ffff:/, '').replace(/%.*$/, '');
const allowed = ip => !allow.length || allow.some(a => normalizeIp(a) === normalizeIp(ip));
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.md': 'text/markdown; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.otf': 'font/otf', '.mp4': 'video/mp4', '.mp3': 'audio/mpeg', '.pdf': 'application/pdf' };
http.createServer((req, res) => {
  if (!allowed(req.socket.remoteAddress)) { res.writeHead(403, { 'Content-Type': 'text/plain' }); return res.end('forbidden: ' + normalizeIp(req.socket.remoteAddress) + ' is not in the allow list'); }
  const path = decodeURIComponent(new URL(req.url, `http://127.0.0.1:${port}`).pathname);
  let file = join(root, path); if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (file.startsWith(root) && existsSync(file) && statSync(file).isFile()) { res.writeHead(200, { 'Content-Type': types[extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': '*' }); return createReadStream(file).pipe(res); }
  if (!/\.[a-z0-9]+$/i.test(path) && existsSync(join(root, '404.html'))) { res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' }); return createReadStream(join(root, '404.html')).pipe(res); }
  res.writeHead(404); res.end('not found');
}).listen(port, host, () => console.log(`site on http://${host === '0.0.0.0' ? '<LAN address of this machine>' : host}:${port}/zh-cn/news/7013/ (mirror at /zh-cn/main)` + (allow.length ? ` (clients allowed: ${allow.join(', ')})` : '')));
