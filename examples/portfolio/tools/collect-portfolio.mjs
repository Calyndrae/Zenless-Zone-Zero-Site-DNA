// Gathers the portfolio's content without drawing anything: every image is a screenshot of Calyndrae's own published
// work (the Zenless Zone Zero site-DNA handbook, mirror, archive, readable source, analysis and verification, served
// from a local clone of that repository) or a real generated asset already fetched into media/ (GitHub avatar, QR code
// of the GitHub profile from api.qrserver.com, shields.io badges, Simple Icons marks). Records are written in the
// content API's shapes with the site's own field names, so the page's components read them unchanged.
//
//   node examples/portfolio/tools/collect-portfolio.mjs [path to the Zenless-Zone-Zero-Site-DNA clone]
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const example = resolve(here, '..');
const src = join(example, 'src'), media = join(example, 'media');
const work = resolve(process.argv[2] || join(example, '..', '..'));   // the site-DNA repository: the body of work being shown
if (!existsSync(join(work, 'tools', 'serve.mjs'))) throw new Error('site-DNA repository not found at ' + work);
mkdirSync(media, { recursive: true });
const require = createRequire(import.meta.url);
function loadPlaywright() { for (const c of ['playwright', join(work, 'tools', 'node_modules', 'playwright'), '/opt/node22/lib/node_modules/playwright']) { try { return require(c); } catch (e) { /* next */ } } throw new Error('playwright not found'); }
const { chromium } = loadPlaywright();

const GITHUB = 'https://github.com/Calyndrae', REPO = GITHUB + '/Zenless-Zone-Zero-Site-DNA', LIVE = 'https://sitedna.zenlesszonezero.calyndrae.com';
const port = 8789;
const server = spawn(process.execPath, [join(work, 'tools', 'serve.mjs'), String(port)], { stdio: 'ignore' });
const origin = `http://127.0.0.1:${port}`;
for (let i = 0; i < 50; i++) { try { if ((await fetch(origin + '/zh-cn/news/7013/')).ok) break; } catch (e) { /* not up yet */ } await new Promise(r => setTimeout(r, 100)); }

const browser = await chromium.launch();
// `scroll` is a pixel offset or the text a handbook heading starts with: the page is then scrolled so that heading sits
// just under the fixed header, whatever the width (the handbook's headings are the news template's bold paragraphs)
async function shot(name, path, { width, height, scroll = 0, mobile = false, wait = 1500 }) {
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, isMobile: mobile, hasTouch: mobile, userAgent: mobile ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' : undefined });
  const page = await ctx.newPage();
  await page.goto(origin + path, { waitUntil: 'load', timeout: 60000 }).catch(() => {});
  // the mirror's pages boot the original application behind its white loader; wait until the loader is no longer visible
  await page.waitForFunction(() => { const vis = e => { if (!e) return false; const cs = getComputedStyle(e), r = e.getBoundingClientRect(); return cs.display !== 'none' && cs.visibility !== 'hidden' && +cs.opacity > 0 && r.width > 0 && r.height > 0; }; return !vis(document.querySelector('.zzz-loading')) && !vis(document.querySelector('.loading')); }, null, { timeout: 30000 }).catch(() => {});
  await page.evaluate(() => document.querySelectorAll('.mihoyo-cookie-tips, .mihoyo_landscape').forEach(el => el.remove()));   // the cookie notice is not part of the work
  // handbook captures show the document itself: the application chrome around it (header, pager, back and top buttons) is
  // cropped away, as a page scan would be; mirror pages are shown whole, chrome included, since the running app is the work
  if (/\/news\/7013\//.test(path)) await page.evaluate(() => document.querySelectorAll('.header, .m-header, .sidebar, .backTop, .news-detail-back, .m-news-detail__back').forEach(el => el.remove()));
  await page.waitForTimeout(wait);
  if (scroll) {
    await page.evaluate(s => {
      if (typeof s === 'number') return scrollTo(0, s);
      const h = [...document.querySelectorAll('strong, h4')].find(el => el.textContent.trim().startsWith(s));
      if (!h) throw new Error('heading not found: ' + s);
      scrollTo(0, h.getBoundingClientRect().top + scrollY - parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.4);
    }, scroll);
    await page.waitForTimeout(600);
  }
  const file = `${name}.png`;
  await page.screenshot({ path: join(media, file), clip: { x: 0, y: 0, width, height } });
  await ctx.close();
  return 'media/' + file;
}
const imgField = (url, name) => [{ name, url }];
const ext = o => JSON.stringify(o);
const date = (d, i) => `${d} ${String(10 + i).padStart(2, '0')}:00:00`;

// 1. key visual: the handbook page, the body of work's front door
const kv = await shot('kv', '/zh-cn/news/7013/', { width: 2560, height: 1537 });
const kvM = await shot('kv-m', '/zh-cn/news/7013/', { width: 750, height: 654, mobile: true });

// 2. works (the characters channel): the pages the project delivers, each a tall page capture
const works = [
  ['HANDBOOK', '技术手册', '文档', '/zh-cn/news/7013/', LIVE + '/zh-cn/news/7013/', '四十章的站点 DNA 手册：rem 画布、令牌、组件、动效、两棵路由树，每条规则附测量值与样本。'],
  ['MIRROR', '原站镜像 · 首页', '镜像', '/zh-cn/main', LIVE + '/zh-cn/main', '在静态托管上完整运行的原站：外壳、分块、内容 API 由适配器从归档作答。'],
  ['CHARACTERS', '镜像 · 角色页', '镜像', '/zh-cn/character', LIVE + '/zh-cn/character', '角色列表与详情页，62 条角色记录与 20 个阵营来自归档的内容 API 答复。'],
  ['VIDEO', '镜像 · 影像页', '镜像', '/zh-cn/video', LIVE + '/zh-cn/video', '最新轮播、分类页签与每页九格的影像列表，封面来自归档。'],
  ['NEWS', '镜像 · 新闻页', '镜像', '/zh-cn/news', LIVE + '/zh-cn/news', '新闻列表、页签与分页，81 条新闻记录与正文全部归档。'],
  ['WORLD', '镜像 · 档案页', '镜像', '/zh-cn/world', LIVE + '/zh-cn/world', '设定档案的横向滑动与详情页，媒体在容量预算内归档。'],
];
const camps = [...new Set(works.map(w => w[2]))].map((name, i) => ({ iInfoId: 286001 + i, sChanId: ['286'], sTitle: name, sIntro: '', sExt: ext({ 'camp-channel': String(1001 + i), 'camp-name': name, 'camp-name-en': ['DOCS', 'MIRROR'][i] }) }));
const characters = [];
for (const [i, [en, title, camp, path, url, intro]] of works.entries()) {
  const cover = await shot(`work-${i + 1}`, path, { width: 750, height: 1300 });
  const coverM = await shot(`work-${i + 1}-m`, path, { width: 750, height: 650, mobile: true });
  const nav = await shot(`work-${i + 1}-nav`, path, { width: 1600, height: 600 });
  const campId = camps.find(c => c.sTitle === camp).iInfoId;
  characters.push({ iInfoId: 287001 + i, sChanId: ['287', String(1001 + camps.findIndex(c => c.iInfoId === campId))], sTitle: title, sIntro: intro, sUrl: url, sContent: '', dtStartTime: date('2026-10-03', i), sTagName: [], sCategoryName: camp, sSign: '',
    sExt: ext({ 'chara-cover-home': imgField(cover, title), 'chara-cover-m': imgField(coverM, title), 'chara-nav': imgField(nav, title), 'chara-name-en': en }) });
}

// 3. showcase (the videos channel): pages of the handbook and the mirror, wide captures; "play" opens the page
const shows = [
  ['手册 · 首屏与目录', '1338', '/zh-cn/news/7013/', 0, LIVE + '/zh-cn/news/7013/'],
  ['手册 · 首页组件样本', '1338', '/zh-cn/news/7013/', 'Specimen — home-kv', LIVE + '/zh-cn/news/7013/'],
  ['手册 · rem 画布测量表', '1338', '/zh-cn/news/7013/', 'Viewport', LIVE + '/zh-cn/news/7013/'],
  ['镜像 · 新闻正文', '1339', '/zh-cn/news/166535/', 0, LIVE + '/zh-cn/news/166535/'],
  ['镜像 · 档案详情', '1339', '/zh-cn/world/102370/', 0, LIVE + '/zh-cn/world/102370/'],
  ['镜像 · 角色详情', '1339', '/zh-cn/character', 900, LIVE + '/zh-cn/character'],
];
const videos = [];
for (const [i, [title, cate, path, scroll, url]] of shows.entries()) {
  const cover = await shot(`show-${i + 1}`, path, { width: 2106, height: 786, scroll });
  videos.push({ iInfoId: 133201 + i, sChanId: ['1332', cate], sTitle: title, sIntro: '', sUrl: url, sContent: '', dtStartTime: date('2026-10-02', i), sTagName: [], sCategoryName: cate === '1338' ? '文档' : '镜像', sSign: '', sExt: ext({ 'video-cover': imgField(cover, title), 'video-url': [], 'video-youtube': '' }) });
}

// 4. updates (the news channel): the repository's recent commits, read from GitHub when the API allows, else the local log
let commits = [];
try { commits = JSON.parse(await (await fetch(`https://api.github.com/repos/Calyndrae/Zenless-Zone-Zero-Site-DNA/commits?per_page=8`)).text()).map(c => ({ sha: c.sha.slice(0, 7), date: c.commit.author.date.slice(0, 10), msg: c.commit.message })); if (!Array.isArray(commits) || !commits.length) throw new Error(); } catch (e) {
  const { execSync } = await import('node:child_process');
  commits = execSync('git log -8 --format=%h%x09%ad%x09%B%x00 --date=short', { cwd: work }).toString().split('\0').filter(s => s.trim()).map(s => { const [sha, d, ...rest] = s.trim().split('\t'); return { sha, date: d, msg: rest.join('\t') }; });
}
const news = [];
for (const [i, c] of commits.slice(0, 6).entries()) {
  const [subject, ...body] = c.msg.split('\n');
  const banner = await shot(`update-${i + 1}`, '/zh-cn/news/7013/', { width: 940, height: 530, scroll: ['Specimen — home-kv', 'Specimen — home-news banner', 'Specimen — home-world banner', 'Specimen — world slide (active)', 'Specimen — m-home-kv', 'Specimen — footer social bar'][i] });
  news.push({ iInfoId: 288001 + i, sChanId: ['288', /^Merge/.test(subject) ? '296' : '295'], sTitle: subject, sIntro: body.map(s => s.trim()).filter(s => s && !/^(Co-Authored-By|Claude-Session)/i.test(s))[0] || `提交 ${c.sha}`, sUrl: `${REPO}/commit/${c.sha}`, sContent: '', dtStartTime: date(c.date, i), dtCreateTime: date(c.date, i), sTagName: [], sCategoryName: /^Merge/.test(subject) ? '合并' : '提交', sSign: '', sExt: ext({ 'news-banner': imgField(banner, subject) }) });
}

// 5. archive (the world channel): the handbook's reference chapters
const archives = [['手册 · 色彩令牌', '/zh-cn/news/7013/', 'Colour', LIVE + '/zh-cn/news/7013/'], ['手册 · 字体角色', '/zh-cn/news/7013/', 'font-family', LIVE + '/zh-cn/news/7013/'], ['手册 · 页面图谱', '/zh-cn/news/7013/', 'Path', LIVE + '/zh-cn/news/7013/']];
const world = [];
for (const [i, [title, path, scroll, url]] of archives.entries()) {
  const banner = await shot(`archive-${i + 1}`, path, { width: 940, height: 530, scroll });
  world.push({ iInfoId: 290001 + i, sChanId: ['290'], sTitle: title, sIntro: '', sUrl: url, sContent: '', dtStartTime: date('2026-10-01', i), sTagName: [], sCategoryName: '', sSign: '', sExt: ext({ 'world-home-banner': imgField(banner, title), 'world-name': title }) });
}

// 6. skills (the features channel): what the project exercises, shown through the pages it produced
const skills = [['逆向与重建', '拆分 webpack 分块、提取 css-loader 模块、重命名可读源码，再用原件把站点重新搭起来', '/zh-cn/main', 0], ['测量与验证', '无头浏览器在六个视口下回读根字号、组件盒、悬停态与动效时间线', '/zh-cn/news/7013/', 'A. Root font-size'], ['镜像与归档', '静态托管上的原站镜像，内容 API、i18n 与媒体由适配器从归档作答', '/zh-cn/world', 0], ['文档与手册', '四十章的技术手册，每条规则附观察、测量与子站规则，另有印刷版', '/zh-cn/news/7013/', 'Specimen — character info panel']];
const feature = [];
for (const [i, [title, intro, path, scroll]] of skills.entries()) {
  const banner = await shot(`skill-${i + 1}`, path, { width: 2062, height: 786, scroll });
  const bannerM = await shot(`skill-${i + 1}-m`, path, { width: 750, height: 390, mobile: true, scroll });
  feature.push({ iInfoId: 289001 + i, sChanId: ['289'], sTitle: title, sIntro: intro, sUrl: LIVE + path, sContent: '', dtStartTime: date('2026-10-01', i), sTagName: [], sCategoryName: '', sSign: '', sExt: ext({ 'feature-banner': imgField(banner, title), 'feature-banner-m': imgField(bannerM, title) }) });
}
await browser.close();
server.kill();

// 7. social (the social channel): real marks from Simple Icons, inlined as the footer SDK inlines its icons
const social = [['GitHub', GITHUB, 'icon-github.svg']].map(([name, link, file], i) => ({ iInfoId: 292001 + i, sChanId: ['292'], sTitle: name, sIntro: '', sUrl: link, sExt: ext({ 'social-name': name, 'social-name-key': name.toLowerCase().replace(/\s+/g, ''), 'social-link': link, 'social-svg': readFileSync(join(media, file), 'utf8').replace(/<\?xml[^>]*>/, '').replace(/<svg /, '<svg width="80" height="80" ') }) }));

const content = {
  'zh-cn': { 285: [{ iInfoId: 285001, sChanId: ['285'], sTitle: '技术手册', sIntro: '', sUrl: LIVE + '/zh-cn/news/7013/', sContent: '', sExt: ext({ 'home-kv': imgField(kv, '首屏'), 'home-kv-m': imgField(kvM, '首屏'), 'home-youtobe': '' }), dtStartTime: '2026-10-04 00:00:00' }], 286: camps, 287: characters, 288: news, 289: feature, 290: world, 292: social, 1332: videos },
  channels: [{ iChanId: 288, sChanName: '最新', children: [{ iChanId: 295, sChanName: '提交' }, { iChanId: 296, sChanName: '合并' }] }, { iChanId: 1332, sChanName: '最新', children: [{ iChanId: 1338, sChanName: '文档' }, { iChanId: 1339, sChanName: '镜像' }] }, ...[285, 286, 287, 289, 290, 292].map(id => ({ iChanId: id, children: [] }))],
};
writeFileSync(join(src, 'content.json'), JSON.stringify(content, null, 1) + '\n');

// 8. the dictionary, in the site's key names (the words a portfolio needs; the UI words are the site's own)
const dict = {
  __lang: 'zh-cn', __fontCss: '"Helvetica neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, "sans-serif"',
  gameName: 'Calyndrae', seoTitle: 'Calyndrae · 作品集', seoTitlePrefix: ' | Calyndrae',
  nav1: '首页', nav1Label: 'Home', nav2: '作品', nav2Label: 'Works', navVideo: '演示', navVideoLabel: 'Showcase', nav3: '动态', nav3Label: 'Updates', nav5: '档案', nav5Label: 'Archive', nav4: '技能', nav4Label: 'Skills',
  menu_more_label: '更多', menu_community_label: 'GitHub', menu_community_link: GITHUB, menu_exchange_label: '手册 PDF', menu_exchange_link: LIVE + '/handbook/Zenless-Zone-Zero-Site-DNA-Handbook.pdf', menu_top_up_label: '原仓库', menu_top_up_link: REPO,
  download_label: '手册 PDF', pc_download_link: LIVE + '/handbook/Zenless-Zone-Zero-Site-DNA-Handbook.pdf', pc_download_tip: '手册 PDF（A4）', home_download_icon: '', m_download_btn: 'media/badge-7.svg',
  logoPc: 'media/avatar.png', logoMob: 'media/badge-6.svg',
  learnMore: '查看更多', loadMore: '加载更多', noMore: '已经到底啦！', textBackTop: '回到顶部', textClose: '关闭', textBack: '返回', cv_empty_tip: '敬请期待',
  socialFollow: '关注我', shareCopyText: 'Calyndrae · 作品集 ' + LIVE + '/examples/portfolio/', copySuccess: '复制成功', login_btn: '联系我', login_link: GITHUB, textUser: '', textLogout: '登出',
  conceptTitle: 'Now', conceptSubtitle: '2026 · 10', conceptLink: GITHUB, conceptImage: 'media/avatar.png',
  route_character: GITHUB + '?tab=repositories', route_video: LIVE + '/zh-cn/news/7013/', route_news: REPO + '/commits/main', route_world: REPO,
  qr_image: 'media/qr-github.png', qr_tip: '扫码打开 GitHub',
  'platforms.0.img': 'media/badge-1.svg', 'platforms.0.href': GITHUB, 'platforms.0.tip': 'github.com/Calyndrae',
  'platforms.1.img': 'media/badge-2.svg', 'platforms.1.href': LIVE + '/handbook/Zenless-Zone-Zero-Site-DNA-Handbook.pdf', 'platforms.1.tip': '印刷版手册',
  'platforms.2.img': 'media/badge-3.svg', 'platforms.2.href': LIVE + '/zh-cn/main', 'platforms.2.tip': '原站镜像',
  'platforms.3.img': 'media/badge-4.svg', 'platforms.3.href': REPO, 'platforms.3.tip': '源码与归档',
  'platforms.4.img': 'media/badge-5.svg', 'platforms.4.href': GITHUB + '/Endfield-Site-DNA', 'platforms.4.tip': '第二个站点 DNA',
  preRegisterBtn: '手册 PDF',
  'logo.img': 'media/avatar.png', 'logo.href': GITHUB, 'prodLogos.0.img': 'media/badge-6.svg', 'prodLogos.0.href': GITHUB,
  'prodLinks.0.label': 'GitHub', 'prodLinks.0.href': GITHUB, 'prodLinks.1.label': '技术手册', 'prodLinks.1.href': LIVE + '/zh-cn/news/7013/', 'prodLinks.2.label': '原站镜像', 'prodLinks.2.href': LIVE + '/zh-cn/main', 'prodLinks.3.label': '原仓库', 'prodLinks.3.href': REPO,
  statement: '这是一页用《绝区零》官网 DNA 手册搭出来的作品集示例：页眉、侧栏页码、六段首页组合、三段页脚与手机树都是原站自己的组件与样式表；槽里放的是 Calyndrae 的公开作品——站点 DNA 手册、镜像、归档、可读源码、分析与验证工具——的页面截图。《绝区零》及其美术、字体、样式表与代码归 HoYoverse / COGNOSPHERE 所有，本页与其无关。',
  copyright: 'Copyright © 2026 Calyndrae.', langName: '中文(简体)',
};
writeFileSync(join(src, 'i18n.zh-cn.json'), JSON.stringify(dict, null, 1) + '\n');
writeFileSync(join(src, 'site-fragments.json'), '{}\n');   // the SDK blocks are rendered from the dictionary and records here, not lifted
console.log(`records: works ${characters.length}, showcase ${videos.length}, updates ${news.length}, archive ${world.length}, skills ${feature.length}, social ${social.length}; media in ${media}`);
