// Generates every image the portfolio example uses, as original SVG files drawn with the palette the handbook
// records (chapter 06): ink #222122, black panels #000/#111, accent #d8fa00, surfaces #e8e8e8/#efefef, white.
// Nothing here is taken from the studied site: its artwork, logos and decorative PNGs belong to HoYoverse /
// COGNOSPHERE and are not reused. One texture family (the diagonal hatch the site's own panels use) and one
// display face (Impact, the site's "en impact" role) carry the whole set.
//
//   node examples/portfolio/tools/gen-assets.mjs      → writes examples/portfolio/assets/*.svg
import { mkdirSync, writeFileSync, readdirSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '..', 'assets');
mkdirSync(out, { recursive: true });
for (const f of readdirSync(out)) if (f.endsWith('.svg')) unlinkSync(join(out, f));

const INK = '#222122', ACCENT = '#d8fa00', BLACK = '#000', DARK = '#111', PANEL = '#e8e8e8', SURFACE = '#efefef', WHITE = '#fff';
const DISPLAY = "Impact,'Arial Black','Helvetica Neue',Arial,sans-serif";
const BODY = "'Helvetica Neue',Helvetica,Arial,'PingFang SC','Microsoft YaHei',sans-serif";

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const svg = (w, h, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${body}</svg>`;
const write = (name, content) => { writeFileSync(join(out, name), content + '\n'); console.log('wrote', name); };
// the one texture: a diagonal hatch (the site's panels use the same family)
const hatch = (id, color, gap = 40, w = 12) => `<pattern id="${id}" width="${gap}" height="${gap}" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)"><rect width="${w}" height="${gap}" fill="${color}"/></pattern>`;
const dots = (id, color, gap = 34, r = 3) => `<pattern id="${id}" width="${gap}" height="${gap}" patternUnits="userSpaceOnUse"><circle cx="${gap / 2}" cy="${gap / 2}" r="${r}" fill="${color}"/></pattern>`;
// a parallelogram leaning to the right, k = horizontal shear as a fraction of the width
const skew = (x, y, w, h, k = 0.12) => `${x + w * k},${y} ${x + w},${y} ${x + w - w * k},${y + h} ${x},${y + h}`;
const film = (x, y, w, h) => {
  const n = Math.floor(w / (h * 0.9)); let holes = '';
  for (let i = 0; i < n; i++) { const hx = x + i * (w / n) + (w / n - h * 0.42) / 2; holes += `<rect x="${hx}" y="${y + h * 0.1}" width="${h * 0.42}" height="${h * 0.22}" rx="3" fill="${WHITE}"/><rect x="${hx}" y="${y + h * 0.68}" width="${h * 0.42}" height="${h * 0.22}" rx="3" fill="${WHITE}"/>`; }
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${BLACK}"/>${holes}`;
};
const display = (x, y, size, text, fill, extra = '') => `<text x="${x}" y="${y}" font-family="${DISPLAY}" font-size="${size}" font-weight="700" fill="${fill}" ${extra}>${esc(text)}</text>`;

/* 1. logo mark (big logo at the top of the home page, 229 × 244 like the site's) and the wordmark shown once scrolled */
const markBody = `
  <polygon points="${skew(14, 10, 200, 224, 0.22)}" fill="${WHITE}" stroke="${BLACK}" stroke-width="14" stroke-linejoin="round"/>
  <polygon points="${skew(44, 44, 142, 156, 0.22)}" fill="${BLACK}"/>
  ${display(128, 178, 150, 'C', ACCENT, 'text-anchor="middle" font-style="italic"')}
`;
write('logo-mark.svg', svg(230, 244, markBody));
write('logo-wordmark.svg', svg(430, 100, `
  <polygon points="${skew(0, 6, 92, 88, 0.22)}" fill="${WHITE}"/>
  ${display(50, 76, 62, 'C', BLACK, 'text-anchor="middle" font-style="italic"')}
  ${display(108, 60, 46, 'CALYNDRAE', WHITE, 'letter-spacing="2"')}
  <text x="110" y="88" font-family="${BODY}" font-size="18" font-weight="700" fill="${ACCENT}" letter-spacing="3">PORTFOLIO 2026</text>
`));

/* 2. key visuals — desktop 2560 × 1537 (the site's KV ratio, chapter 11) and phone 750 × 654 (chapter 27).
      One focal point: the name on a black stage. The site's own components lie over the image, so their regions
      stay quiet: the hanging logo (top left), the play button and slogan (left, from 5.57 down), the handbook sign
      (top right, down to 4.38 of the 15.37 rows), the download panel (bottom right, from 12.18 down) and, on the
      phone, the play button at the right edge (2.69–3.44 of 6.54 rows) and the slogan at the left edge. */
write('kv.svg', svg(2560, 1537, `
  <defs>${hatch('kvHatch', '#dadada', 44, 14)}${dots('kvDots', '#d6d6d6', 34, 3)}</defs>
  <rect width="2560" height="1537" fill="${SURFACE}"/>
  <rect x="1700" y="0" width="860" height="1537" fill="url(#kvDots)"/>
  <polygon points="${skew(-220, 120, 1920, 1300, 0.18)}" fill="${WHITE}"/>
  <polygon points="${skew(-220, 1200, 1300, 220, 0.18)}" fill="url(#kvHatch)"/>
  ${display(640, 980, 640, 'C', '#ececec', 'text-anchor="middle" font-style="italic"')}
  <g>
    <polygon points="${skew(1150, 470, 1300, 600, 0.12)}" fill="${BLACK}"/>
    <rect x="1290" y="540" width="14" height="460" fill="${ACCENT}"/>
    ${display(1350, 830, 160, 'CALYNDRAE', WHITE, 'font-style="italic"')}
    <rect x="1350" y="880" width="420" height="16" fill="${ACCENT}"/>
    ${display(1350, 990, 64, 'PORTFOLIO 2026', ACCENT, 'letter-spacing="4"')}
  </g>
  <g transform="rotate(-35 2400 1500)">${film(1700, 1430, 1500, 150)}</g>
`));
write('kv-m.svg', svg(750, 654, `
  <defs>${hatch('kvmHatch', '#dadada', 30, 10)}</defs>
  <rect width="750" height="654" fill="${SURFACE}"/>
  <polygon points="${skew(-80, 40, 720, 560, 0.18)}" fill="${WHITE}"/>
  <polygon points="${skew(-80, 500, 560, 100, 0.18)}" fill="url(#kvmHatch)"/>
  <polygon points="${skew(90, 150, 540, 300, 0.12)}" fill="${BLACK}"/>
  <rect x="150" y="190" width="8" height="220" fill="${ACCENT}"/>
  ${display(170, 318, 66, 'CALYNDRAE', WHITE, 'font-style="italic"')}
  <rect x="170" y="345" width="200" height="8" fill="${ACCENT}"/>
  ${display(170, 410, 34, 'PORTFOLIO 2026', ACCENT, 'letter-spacing="3"')}
  <g transform="rotate(-35 650 600)">${film(420, 560, 500, 70)}</g>
`));

/* 3. record covers ------------------------------------------------------------------------- */
// Works (character-like records): a poster card with a white frame, like a cut-out figure on the site's stage.
const works = [['ARCHIVE', '原件归档'], ['MIRROR', '镜像适配器'], ['READABLE', '可读源码'], ['TOKENS', '设计令牌'], ['HANDBOOK', '印刷手册'], ['MEASURE', '交互测量']];
works.forEach(([en, zh], k) => {
  const i = k + 1, dark = i % 2 === 1, field = dark ? INK : ACCENT, letter = dark ? ACCENT : BLACK;
  write(`work-${i}.svg`, svg(1200, 1800, `
    <rect x="40" y="40" width="1120" height="1720" rx="56" fill="${WHITE}" stroke="${BLACK}" stroke-width="24"/>
    <rect x="112" y="112" width="976" height="1040" rx="24" fill="${field}"/>
    ${display(600, 820, 560, en[0], letter, 'text-anchor="middle" font-style="italic"')}
    ${display(600, 1380, 118, en, BLACK, 'text-anchor="middle" letter-spacing="6"')}
    <text x="600" y="1520" text-anchor="middle" font-family="${BODY}" font-size="68" font-weight="700" fill="${INK}">${esc(zh)}</text>
    <rect x="112" y="1600" width="${300 + i * 90}" height="18" fill="${ACCENT}"/>
  `));
  // the phone stage shows the lower 7.5 × 6.5rem of a full-width image, with the name panel over its lower right
  // and the section label over its lower left (chapter 27), so the phone cover keeps its content in the upper band
  write(`work-${i}-m.svg`, svg(750, 650, `
    <rect x="30" y="30" width="690" height="590" rx="36" fill="${WHITE}" stroke="${BLACK}" stroke-width="16"/>
    <rect x="80" y="80" width="280" height="280" rx="18" fill="${field}"/>
    ${display(220, 310, 210, en[0], letter, 'text-anchor="middle" font-style="italic"')}
    ${display(400, 200, 52, en, BLACK, 'letter-spacing="3"')}
    <text x="402" y="262" font-family="${BODY}" font-size="38" font-weight="700" fill="${INK}">${esc(zh)}</text>
    <rect x="400" y="300" width="${120 + i * 30}" height="10" fill="${ACCENT}"/>
  `));
  write(`work-${i}-thumb.svg`, svg(160, 60, `
    <rect width="160" height="60" fill="${dark ? INK : '#3a3a3a'}"/>
    <rect x="118" y="0" width="42" height="60" fill="${dark ? ACCENT : '#555'}"/>
    ${display(14, 44, 36, en.slice(0, 3), WHITE, 'font-style="italic"')}
  `));
  write(`work-${i}-shade.svg`, svg(900, 713, `<circle cx="450" cy="356" r="300" fill="none" stroke="${INK}" stroke-width="22" stroke-dasharray="90 40" opacity=".18"/>${display(450, 420, 180, '0' + i, INK, 'text-anchor="middle" opacity=".12"')}`));
});

// Showcase (video-like records): the stage is 21.06 × 7.86rem (2106 × 786); the nav thumbnails are 16:9.
const showcase = [['ADAPTER', '适配器演示'], ['SIDEBAR', '侧栏分页器'], ['SWIPER', '轮播测量'], ['LOADER', '加载帧记录'], ['FOOTER', '页脚三段'], ['PHONE', '手机路由树']];
showcase.forEach(([en, zh], k) => {
  const i = k + 1;
  write(`showcase-${i}.svg`, svg(2106, 786, `
    <defs>${hatch(`sc${i}`, '#262626', 40, 12)}</defs>
    <rect width="2106" height="786" fill="${DARK}"/>
    <polygon points="${skew(1500, 0, 606, 786, 0.1)}" fill="url(#sc${i})"/>
    ${display(360, 560, 420, '0' + i, ACCENT, 'font-style="italic"')}
    ${display(820, 470, 200, en, WHITE, 'letter-spacing="4"')}
    <rect x="828" y="520" width="${200 + i * 60}" height="16" fill="${ACCENT}"/>
    <text x="830" y="610" font-family="${BODY}" font-size="52" fill="#d6d6d6">${esc(zh)}</text>
  `));
  write(`showcase-${i}-thumb.svg`, svg(320, 180, `
    <rect width="320" height="180" fill="${DARK}"/>
    ${display(24, 132, 120, '0' + i, ACCENT, 'font-style="italic"')}
    ${display(300, 150, 34, en, WHITE, 'text-anchor="end"')}
  `));
});

// Updates (news-like) and archive (world-like) banners at 940 × 530 (the home banners are 9.4 × 5.3rem).
const banner = (name, i, word, kicker, dark) => write(`${name}-${i}.svg`, svg(940, 530, `
  <defs>${hatch(`${name}${i}`, dark ? '#262626' : '#dcdcdc', 36, 11)}</defs>
  <rect width="940" height="530" fill="${dark ? DARK : PANEL}"/>
  <polygon points="${skew(620, 0, 320, 530, 0.12)}" fill="url(#${name}${i})"/>
  <text x="60" y="96" font-family="${BODY}" font-size="30" font-weight="700" fill="${dark ? ACCENT : INK}" letter-spacing="4">${esc(kicker)}</text>
  ${display(56, 400, 128, word, dark ? WHITE : INK, 'font-style="italic"')}
  <rect x="60" y="430" width="${160 + i * 40}" height="14" fill="${ACCENT}"/>
  <rect x="800" y="60" width="80" height="80" fill="${ACCENT}"/>${display(840, 118, 52, String(i), BLACK, 'text-anchor="middle"')}
`));
['LAUNCH', 'FOOTER', 'SPECIMENS', 'OVERFLOW', 'FIRST CUT', 'ROADMAP'].forEach((t, k) => banner('update', k + 1, t, 'UPDATE', k % 2 === 0));
['ARCHIVE', 'SOURCE', 'ANALYSIS'].forEach((t, k) => banner('archive', k + 1, t, 'ARCHIVE', k !== 1));

// Feature slides at 2062 × 786: the info bar the page lays over the lower 2.32rem carries the words, so the
// banner stays abstract — a ghost index and one accent block.
for (let i = 1; i <= 6; i++) {
  write(`feature-${i}.svg`, svg(2062, 786, `
    <defs>${hatch(`ft${i}`, '#232323', 44, 13)}</defs>
    <rect width="2062" height="786" fill="${DARK}"/>
    <polygon points="${skew(-100, 0, 900, 786, 0.12)}" fill="url(#ft${i})"/>
    ${display(1960, 520, 520, '0' + i, '#2a2a2a', 'text-anchor="end" font-style="italic"')}
    <polygon points="${skew(1500 - i * 60, 120, 260, 90, 0.3)}" fill="${ACCENT}"/>
  `));
}

/* 4. page chrome drawings (original shapes in place of the site's decorative PNGs) ------------- */
write('section-nav-panel.svg', svg(991, 708, `<path d="M0 0h991v300L600 708H0z" fill="${WHITE}"/><path d="M0 560h380l-60 148H0z" fill="${ACCENT}"/>`));
write('section-nav-panel-lg.svg', svg(845, 786, `<path d="M0 0h845v420L560 786H0z" fill="${WHITE}"/><path d="M0 0h110v786H0z" fill="${ACCENT}"/>`));
write('section-nav-panel-right.svg', svg(843, 786, `<path d="M843 0v786H0V520L300 0z" fill="${ACCENT}"/><path d="M843 0v120H420L500 0z" fill="${BLACK}"/>`));
write('inner-top.svg', svg(990, 480, `<path d="M0 0h990L700 480H0z" fill="${PANEL}"/>`));
write('inner-foot.svg', svg(991, 708, `<defs>${hatch('ifs', '#dadada', 34, 11)}</defs><path d="M991 0v708H0L420 0z" fill="url(#ifs)"/><path d="M991 420v288H560z" fill="${INK}"/>`));
write('fill-bg.svg', svg(1442, 900, `<polygon points="${skew(0, 0, 1442, 900, 0.14)}" fill="#e4e4e4"/>`));
write('chara-panel-bg.svg', svg(2064, 786, `<defs>${hatch('cps', '#2b2b2b', 38, 12)}</defs><path d="M60 0h2004v786H0V60z" fill="#1f1f1f"/><path d="M60 0h2004v786H0V60z" fill="url(#cps)"/>`));
write('chara-panel.svg', svg(2065, 786, `<path d="M0 0h520v786H0z" fill="${ACCENT}"/><path d="M520 0h120L520 786z" fill="${BLACK}" opacity=".3"/>`));
write('news-page-bg.svg', svg(2061, 786, `<path d="M0 0h2061v786H140L0 646z" fill="${PANEL}"/>`));
write('panel.svg', svg(2062, 786, `<path d="M40 0h2022v786H0V40z" fill="${BLACK}"/>`));
write('bar.svg', svg(2062, 232, `<path d="M0 0h2062v232H0z" fill="${ACCENT}"/><path d="M0 0h420l-80 232H0z" fill="${BLACK}"/>`));
write('concept-nav.svg', svg(667, 237, `<path d="M40 0h627v237H0V40z" fill="${WHITE}" stroke="${BLACK}" stroke-width="10"/>`));
write('concept-tv.svg', svg(318, 186, `<rect x="4" y="4" width="310" height="178" rx="18" fill="none" stroke="${BLACK}" stroke-width="8"/><rect x="18" y="18" width="214" height="150" rx="6" fill="none" stroke="${BLACK}" stroke-width="4"/><circle cx="276" cy="60" r="12" fill="${ACCENT}"/><circle cx="276" cy="110" r="12" fill="${BLACK}"/>`));
// the badge at the foot of the concept block (1.2 × .76rem; the site's carries its mascot): the mark and a globe
const conceptBadge = `<rect x="2" y="2" width="116" height="72" rx="36" fill="${WHITE}" stroke="${BLACK}" stroke-width="4"/><circle cx="40" cy="38" r="22" fill="${BLACK}"/>${display(40, 51, 34, 'C', ACCENT, 'text-anchor="middle" font-style="italic"')}<circle cx="82" cy="38" r="20" fill="none" stroke="${BLACK}" stroke-width="4"/><ellipse cx="82" cy="38" rx="8" ry="20" fill="none" stroke="${BLACK}" stroke-width="3"/><path d="M62 38h40M66 28h32M66 48h32" stroke="${BLACK}" stroke-width="3"/>`;
write('concept-icon.svg', svg(120, 76, conceptBadge));
// the phone concept plate (1.83 × 1.1rem): the site's yellow plate with the chevrons draws its mascot badge into the image, so the plate is redrawn with the badge above
write('concept-nav-m.svg', svg(183, 110, `<path d="M60 2h105a16 16 0 0 1 16 16v76a16 16 0 0 1-16 16H18A16 16 0 0 1 2 94V60z" fill="${ACCENT}"/><path d="M88 22l-22 22 22 22h14L80 44l22-22zM112 22L90 44l22 22h14l-22-22 22-22z" fill="#b5d600"/><g transform="translate(118 64) scale(0.5)">${conceptBadge}</g>`));

/* 4b. icons the stylesheet references (the site inlines PNG data URIs for these; chapter 29 lists the controls) */
const icon = (name, w, h, body) => write(name, svg(w, h, body));
icon('icon-arrow.svg', 84, 60, `<path d="M62 6H30L8 30l22 24h32L40 30z" fill="${WHITE}" stroke="${BLACK}" stroke-width="6" stroke-linejoin="round"/>`);
icon('icon-arrow-tall.svg', 46, 70, `<path d="M40 6L12 35l28 29" fill="none" stroke="${WHITE}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`);
icon('icon-pager-arrow.svg', 36, 46, `<path d="M4 30L18 10l14 20z" fill="${WHITE}"/><rect x="4" y="36" width="28" height="6" fill="${WHITE}"/>`);
icon('icon-pager-arrow-disabled.svg', 36, 46, `<path d="M4 30L18 10l14 20z" fill="#4a4a4a"/><rect x="4" y="36" width="28" height="6" fill="#4a4a4a"/>`);
icon('icon-bullet.svg', 31, 31, `<rect x="4" y="4" width="23" height="23" rx="4" fill="none" stroke="${BLACK}" stroke-width="4" transform="rotate(45 15.5 15.5)"/>`);
icon('icon-bullet-active.svg', 31, 31, `<rect x="4" y="4" width="23" height="23" rx="4" fill="${ACCENT}" stroke="${BLACK}" stroke-width="4" transform="rotate(45 15.5 15.5)"/>`);
icon('icon-play.svg', 81, 80, `<circle cx="40" cy="40" r="36" fill="${WHITE}" stroke="${BLACK}" stroke-width="6"/><path d="M32 24l24 16-24 16z" fill="${BLACK}"/>`);
icon('icon-play-hover.svg', 81, 80, `<circle cx="40" cy="40" r="36" fill="${ACCENT}" stroke="${BLACK}" stroke-width="6"/><path d="M32 24l24 16-24 16z" fill="${BLACK}"/>`);
icon('icon-user.svg', 58, 58, `<circle cx="29" cy="29" r="26" fill="none" stroke="${WHITE}" stroke-width="4"/><circle cx="29" cy="23" r="8" fill="${WHITE}"/><path d="M14 46c2-9 8-13 15-13s13 4 15 13" fill="${WHITE}"/>`);
icon('icon-share.svg', 58, 58, `<circle cx="29" cy="29" r="26" fill="none" stroke="${WHITE}" stroke-width="4"/><circle cx="19" cy="29" r="5" fill="${WHITE}"/><circle cx="37" cy="19" r="5" fill="${WHITE}"/><circle cx="37" cy="39" r="5" fill="${WHITE}"/><path d="M19 29l18-10M19 29l18 10" stroke="${WHITE}" stroke-width="3"/>`);
icon('icon-music.svg', 58, 58, `<circle cx="29" cy="29" r="26" fill="none" stroke="${WHITE}" stroke-width="4"/><path d="M25 40V18l14-4v22" fill="none" stroke="${WHITE}" stroke-width="4" stroke-linejoin="round"/><circle cx="21" cy="40" r="5" fill="${WHITE}"/><circle cx="35" cy="36" r="5" fill="${WHITE}"/>`);
icon('icon-music-muted.svg', 58, 58, `<circle cx="29" cy="29" r="26" fill="none" stroke="#787878" stroke-width="4"/><path d="M25 40V18l14-4v22" fill="none" stroke="#787878" stroke-width="4" stroke-linejoin="round"/><circle cx="21" cy="40" r="5" fill="#787878"/><circle cx="35" cy="36" r="5" fill="#787878"/><path d="M12 46L46 12" stroke="${ACCENT}" stroke-width="4"/>`);
icon('icon-close.svg', 60, 60, `<circle cx="30" cy="30" r="27" fill="${WHITE}" stroke="${BLACK}" stroke-width="4"/><path d="M19 19l22 22M41 19L19 41" stroke="${BLACK}" stroke-width="5" stroke-linecap="round"/>`);
icon('icon-menu.svg', 94, 95, `<rect x="4" y="4" width="86" height="87" rx="18" fill="${BLACK}" stroke="${ACCENT}" stroke-width="6"/><rect x="24" y="30" width="46" height="7" fill="${WHITE}"/><rect x="24" y="45" width="46" height="7" fill="${ACCENT}"/><rect x="24" y="60" width="46" height="7" fill="${WHITE}"/>`);
const backTop = (bg, fg, hover) => `<path d="M24 0h112a14 14 0 0 1 14 14v138a28 28 0 0 1-28 28H38a28 28 0 0 1-28-28V14A14 14 0 0 1 24 0z" fill="${bg}"/><circle cx="80" cy="66" r="34" fill="none" stroke="${fg}" stroke-width="8"/><path d="M62 72l18-20 18 20" fill="none" stroke="${hover ? ACCENT : fg}" stroke-width="8" stroke-linejoin="round"/>${display(80, 150, 40, 'TOP', fg, 'text-anchor="middle"')}`;
icon('back-top-light.svg', 160, 180, backTop(WHITE, BLACK, false));
icon('back-top-light-hover.svg', 160, 180, backTop(WHITE, BLACK, true));
icon('back-top-reverse.svg', 160, 180, backTop(BLACK, WHITE, false));
icon('back-top-reverse-hover.svg', 160, 180, backTop(BLACK, WHITE, true));
// the hero sign: the site shows a CMS image (立即下载); the child draws its own call-to-action plate
write('download-sign.svg', svg(440, 232, `
  <g transform="rotate(-6 220 116)">
    <polygon points="${skew(20, 14, 400, 190, 0.1)}" fill="${BLACK}"/>
    <polygon points="${skew(30, 24, 380, 170, 0.1)}" fill="${WHITE}"/>
    ${display(222, 116, 70, 'HANDBOOK', BLACK, 'text-anchor="middle" font-style="italic"')}
    <text x="222" y="168" text-anchor="middle" font-family="${BODY}" font-size="30" font-weight="700" fill="${BLACK}" letter-spacing="6">下载手册 · PDF</text>
    <rect x="300" y="30" width="110" height="18" fill="${ACCENT}" transform="skewX(-30)"/>
  </g>
`));

/* 5. images that sit in the content slots of the site's own components ---------------------------- */
// the download SDK's platform badges: image buttons 0.51em tall in rows (at the panel's 80 px font that is 41 px);
// one badge per configured platform, with a hover variant (the SDK swaps img ↔ img-hover on items with has-hover-img)
const badgeGlyph = {
  pdf: 'M22 14h24l14 14v38H22zm4 4v40h30V32H44V18zm8 24h6a6 6 0 0 1 0 12h-2v6h-4zm4 4v4h2a2 2 0 0 0 0-4z',
  code: 'M31 22l-5-5L8 40l18 23 5-5L17 40zM49 22l5-5 18 23-18 23-5-5 14-18z',
  book: 'M18 18h20a6 6 0 0 1 4 2 6 6 0 0 1 4-2h20v42H46a4 4 0 0 0-4 4h-4a4 4 0 0 0-4-4H18zm4 4v34h16a8 8 0 0 1 2 .5V26a4 4 0 0 0-2-4zm40 0H46a4 4 0 0 0-2 4v30.5a8 8 0 0 1 2-.5h16z',
  mail: 'M14 22h52v36H14zm4 4v2l22 15 22-15v-2zm0 6.8V54h44V32.8L40 48z',
  mirror: 'M16 20h28v40H16zm4 4v32h20V24zM50 16h14v48H50v-4h10V20H50z',
  log: 'M38 10h4v16h-4zM38 54h4v16h-4zM40 26a14 14 0 1 1 0 28 14 14 0 0 1 0-28zm0 4a10 10 0 1 0 0 20 10 10 0 0 0 0-20z',
};
const badges = [['pdf', 'Handbook PDF', '手册 · 印刷版'], ['github', 'GitHub', 'calyndrae'], ['site', 'Site DNA', '技术手册'], ['mail', 'E-mail', '合作联系'], ['repo', 'Repository', '阅读源码'], ['mirror', 'Mirror', '原站镜像'], ['log', 'Changelog', '提交历史']];
badges.forEach(([key, label, sub]) => {
  const glyph = badgeGlyph[key === 'github' || key === 'repo' ? 'code' : key === 'site' ? 'book' : key] || badgeGlyph.mirror;
  const badge = (bg, fg, border) => svg(328, 102, `
    <rect x="3" y="3" width="322" height="96" rx="14" fill="${bg}" stroke="${border}" stroke-width="6"/>
    <g transform="translate(22 11) scale(1)"><path d="${glyph}" fill="${fg}"/></g>
    <text x="110" y="52" font-family="${BODY}" font-size="30" font-weight="700" fill="${fg}">${esc(label)}</text>
    <text x="110" y="82" font-family="${BODY}" font-size="20" fill="${fg}" opacity=".75">${esc(sub)}</text>
  `);
  write(`badge-${key}.svg`, badge(BLACK, WHITE, '#3a3a3a'));
  write(`badge-${key}-hover.svg`, badge(ACCENT, BLACK, BLACK));
});
// the QR tile of the download panel (1.14em square): the site shows a QR code to its stores; here the mark,
// inlined because an SVG shown through <img> cannot load a referenced file
write('qr.svg', svg(114, 114, `<rect width="114" height="114" rx="8" fill="${WHITE}"/><g transform="translate(22 18) scale(0.3043)">${markBody}</g>`));
// the hero slogan is a 16 × 222 vertical text image on the site (home-kv__slogan); the phone one is 14 wide
const vertical = (w, h, size, text) => svg(w, h, `<text x="${w / 2 + size * 0.36}" y="4" font-family="${BODY}" font-size="${size}" font-weight="700" fill="${INK}" letter-spacing="1" transform="rotate(90 ${w / 2 + size * 0.36} 4)">${esc(text)}</text>`);
write('slogan.svg', vertical(16, 222, 14, 'SITE DNA · 2026'));     // short enough to stay legible at the slot's .16rem width
write('slogan-m.svg', vertical(14, 200, 12, 'SITE DNA · 2026'));
// the vertical ghost text at the right edge of the home page (fill-text, 1.65rem wide)
write('fill-text.svg', svg(165, 1500, `${display(150, 1480, 150, 'PORTFOLIO 2026', '#e3e3e3', 'transform="rotate(-90 150 1480)" letter-spacing="8"')}`));
// the phone header's download button is an image on the site (2.35 × .67rem)
write('m-download.svg', svg(235, 67, `<rect x="3" y="3" width="229" height="61" rx="30.5" fill="${BLACK}" stroke="${WHITE}" stroke-width="5"/><text x="117" y="44" text-anchor="middle" font-family="${BODY}" font-size="28" font-weight="700" fill="${WHITE}">下载手册</text>`));
write('m-download-en.svg', svg(235, 67, `<rect x="3" y="3" width="229" height="61" rx="30.5" fill="${BLACK}" stroke="${WHITE}" stroke-width="5"/><text x="117" y="43" text-anchor="middle" font-family="${BODY}" font-size="22" font-weight="700" fill="${WHITE}" letter-spacing="1">HANDBOOK</text>`));

/* 6. loader sprite kept for reference (the page itself uses the site's loader as its stylesheets reference it) */
let frames = '';
for (let f = 0; f < 30; f++) {
  const y = f * 84, t = f / 30, x = 18 + Math.abs(((t * 2) % 2) - 1) * 150;
  frames += `<g transform="translate(0 ${y})">${display(12, 62, 56, 'LOADING', BLACK, 'font-style="italic"')}<rect x="${x}" y="70" width="110" height="10" fill="${ACCENT}" transform="skewX(-30)"/><circle cx="${270 + (f % 3) * 10}" cy="58" r="5" fill="${BLACK}"/></g>`;
}
write('loader-sprite.svg', svg(298, 2520, frames));
console.log('done');
