# Example page — a child site built from the site DNA

A single page that follows the handbook (`/zh-cn/news/7013/`) by reusing the studied site's **own parts and nothing
else**: its stylesheet modules, its SDK styles, its captured component markup, its dictionaries and the records and
images in the repository's archive. Nothing on the page is drawn, styled or written for it.

```sh
node tools/serve.mjs 8786
# http://127.0.0.1:8786/examples/portfolio/            desktop or phone tree, chosen by the user agent
# http://127.0.0.1:8786/examples/portfolio/?tree=m     force the phone tree (?tree=pc for the desktop tree)
```

The page is served with the repository at the server root, as the live site is (the site's stylesheets reference
`/_nuxt/img/…` and `/_nuxt/fonts/…` by absolute path); `file://` does not work. On the published mirror it lives at
`/examples/portfolio/`. `tools/bundle.mjs` packs it with every file it requests into a folder that runs on its own.

## Where everything comes from

| Part | Source |
|---|---|
| Stylesheets, desktop tree (42) and phone tree (45) | `capture/css/<module>.css`, the css-loader modules extracted from the bundle, in the order each home page injects them (`src/stylesheets.json`, built by `tools/collect-styles.mjs` from the recorded style tags of `capture/pages/zh-cn_main`, `m_zh-cn_main` and `m_zh-cn_news`) |
| SDK styles (footer, media icons, copy button, download layout, audio player) | `vendor/*.css`, lifted from the archived SDK scripts; each file's length equals the style tag recorded on the page |
| Component markup | the captured DOM (`capture/pages/*/dom.html`, handbook specimens): header, KV, sidebar pager, the six home sections with their `data-v-*` scopes, the three-part footer, the phone header, menu, sections, pre-register bar and the news page's load-more list, with the pre-entrance transforms the capture carries |
| SDK-rendered blocks | `src/site-fragments.json`, lifted verbatim from the captured DOMs by `tools/collect-content.mjs`: download layout (QR + store badges), share list, footer strip with the copy button, corporate footer with the locale picker, CRM form, phone menu, pre-register bar |
| Records | `src/content.json`: the content API's archived answers for channels 285 (key visual), 286 (camps), 287 (characters), 288 (news), 289 (features), 290 (world), 292 (social) and 1332 (videos) plus the child trees, with image URLs pointing at the archived copies |
| Strings | `src/i18n.zh-cn.json`: the site's own mi18n dictionaries merged flat (`nav1`…`nav5`, `navVideo`, `learnMore`, `download_label`, `pc_download_tip`, `conceptTitle` …); the archive holds the zh-cn set, so that is the language shown |
| Images | the records' own fields (`home-kv`, `chara-cover-home`, `chara-nav`, `camp-shade`, `video-cover`, `news-banner`, `world-home-banner`, `feature-banner` and their `-m` variants), the dictionary's images (`home_download_icon`, `m_download_btn`, `logoMob`, `conceptVideo`), `/_nuxt/img/*` and the data-URI icons the markup carries (`src/site-assets.json`) |
| Application | `src/app.js`: rem adapter port, store, content API client over the inline answers, a Swiper-vocabulary carousel, both trees' behaviours, `$getI18nWord`, audio toggle, loader hand-over |

The site asks the characters channel for 200 records; the example keeps the first 12 (`PAGE_SIZE.CHARACTERS`) so the
standalone bundle stays small. Videos open the records' YouTube embeds in the site's overlay player.

## Rule by rule

| Handbook rule | Here |
|---|---|
| rem adapter: `html font-size = 100 × clientWidth ÷ designWidth`, desktop 2560 clamped to [1440, 2560], phone 750 (1334 in landscape), root hidden until the first value | `initFlexible`; measured 100 / 75 / 56.25 / 56.25 px at 2560 / 1920 / 1440 / 1280, 52 px at 390 |
| Two trees chosen by the user agent in the head | the head script picks the tree, writes that tree's `<link>` list and marks `data-tree` |
| Root attributes the stylesheets key on | `pc desktop` / `mo mobile`, `landscape` / `portrait`, `lang`, `mi18n-lang`, `hyv-device`, `theme-mode`, `brand`, `--mi18n-font-css` |
| 1 rem header, 19.2 rem wrapper, big logo swapping to the small one on scroll | the captured header; 56.25 × 1440, wrapper 1080, logo 129.4 × 30.4 at 1440 |
| Sidebar pager bound to the store's home section | `aside.sidebar`; 46.1 × 201.4 at top 180; the active number follows the scroll probe at half the viewport |
| Six home compositions with their scoped styles | each with the captured `data-v` attribute, labels from `nav2`/`nav2Label` … |
| Swiper 4 vocabulary: fade for stages, `slidesPerView: auto` for strips, loop triples the slides, 300 ms, 800 ms for the world carousel | `MiniSwiper` writes Swiper's classes and inline styles |
| Entrances at 0.3 s from the captured pre-entrance transforms | released when the section enters; `prefers-reduced-motion` skips them |
| Hover restraint, three-part footer, phone tree, content API shapes, audio toggle | the site's own rules and markup; see the verification report |

## Verify, rebuild, pack

```sh
node examples/portfolio/tools/verify.mjs           # Playwright: measurements, behaviours, screenshots → verification/
node examples/portfolio/tools/collect-styles.mjs   # src/stylesheets.json, vendor/*.css, src/site-assets.json
node examples/portfolio/tools/collect-content.mjs  # src/content.json, src/i18n.zh-cn.json, src/site-fragments.json
node examples/portfolio/build.mjs                  # index.html
node examples/portfolio/tools/bundle.mjs           # dist/standalone/: the page with every file it requests, a server and a launcher
```

`tools/extract-skeleton.mjs` prints the structural skeleton of a captured page: `node examples/portfolio/tools/extract-skeleton.mjs desktop '.header,.sidebar'`.

## Ownership

Zenless Zone Zero, its artwork, fonts, stylesheets, images, texts and code belong to HoYoverse / COGNOSPHERE and are
reproduced here, unchanged, for the study of the site's construction; this page is not affiliated with them. The
collection and build scripts and the application script are the repository's.
