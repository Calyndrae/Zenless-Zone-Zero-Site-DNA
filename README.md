# Zenless Zone Zero website DNA

A technical "DNA" study of the Zenless Zone Zero official website (`https://zenless.hoyoverse.com/zh-cn/main`, depth 1, desktop tree `/zh-cn/…` and phone tree `/m/zh-cn/…`): the originals archive of every file the pages load and every content-API answer, the deobfuscated and semantically renamed source, the design-token analysis, live interaction measurements, a single-page handbook rendered by the site's own news template, a printed edition (PDF + Markdown) and a self-contained mirror of the original application — so that a reader can build a child site of the same family.

**Live:** https://sitedna.zenlesszonezero.calyndrae.com (handbook at `/zh-cn/news/7013/`, mirror at `/zh-cn/main`, phone tree at `/m/zh-cn/…`). **Printed edition:** `handbook/Zenless-Zone-Zero-Site-DNA-Handbook.pdf` (+ `.md`).

Rules this study keeps: nothing is invented — every value is read from shipped code or responses, or measured in headless Chromium, or marked as interpretation; only the site's own materials are used (markup, stylesheets, scripts, fonts, images, sounds); the site's CSS, wrappers and content are never modified — the handbook page is the original application running from the archive with one content-API answer replaced.

## What the site is

Nuxt 2 single-page application (Vue 2.7.4, vue-router, Vuex, webpack 4, Swiper 4.5.1, GSAP) served as one HTML shell for every path, with its CSS inside the chunks (65 css-loader modules injected as `<style>` tags), two route trees chosen by user agent, every list and article fetched at run time from the HoYoverse content API (`sg-public-api-static.hoyoverse.com/content_v2_user/app/3e9196a4b9274bd7`), i18n dictionaries from `webstatic`/`fastcdn`, and the HoYoverse SDKs (account, footer, subscription, analysis, APM) loaded as separate scripts. Lengths are in rem on a 2560-wide desktop canvas (1440 minimum) and a 750-wide phone canvas: `html font-size = 100 × clientWidth ÷ designWidth`.

## Run it locally

```bash
cd tools && npm install --omit=optional   # playwright, @babel/*, prettier, postcss
node serve.mjs 8786                       # serves the repository like GitHub Pages (404.html = the SPA shell)
# http://127.0.0.1:8786/zh-cn/news/7013/  ← the handbook (the original news template rendering record 7013)
# http://127.0.0.1:8786/zh-cn/main        ← the original home page from the archive
# http://127.0.0.1:8786/m/zh-cn/main      ← the phone tree
```

`node tools/serve.mjs 8786 --host=0.0.0.0 --allow=192.168.1.10` serves on the LAN and answers 403 to every other client address. The `.devcontainer/` starts the server in a GitHub Codespace.

## Hosting

| Where | Who can reach it |
| --- | --- |
| **Local server** — `node tools/serve.mjs 8786` | Only this machine (binds 127.0.0.1); `--host`/`--allow` for a LAN allow list |
| **GitHub Codespaces** — open the repo in a codespace | Only the GitHub account that created the codespace (forwarded port) |
| **GitHub Pages** — Settings → Pages → Source "Deploy from a branch", branch `main`, folder `/ (root)`; custom domain from `CNAME` | **Anyone with the URL.** Pages cannot restrict visitors by IP address |

DNS for the custom domain (Cloudflare, DNS only / grey cloud): `CNAME  sitedna.zenlesszonezero  →  calyndrae.github.io`. GitHub issues the certificate once the DNS check passes.

The whole repository is the Pages site: `index.html` redirects to the handbook; `zh-cn/…` and `m/zh-cn/…` hold the mirror pages; `404.html` is the SPA shell so the router answers every other path; `_nuxt/` holds the build files at their original paths; `archive/` and `mirror/` hold the originals and the rewritten copies the adapter serves (the content API refuses cross-origin requests, so the static host answers them itself from the archive).

## Layout

| Folder | Contents |
| --- | --- |
| `handbook/` | `handbook-content.json` (the handbook as content-API record 7013), `index.html` (the handbook shell for the local server), `coverage.json`, the printed edition `Zenless-Zone-Zero-Site-DNA-Handbook.pdf` / `.md` |
| `zh-cn/`, `m/zh-cn/`, `404.html`, `index.html` | The mirror pages (`tools/build-mirror.mjs`): the archived shell with its CDN references pointed at the archive and the adapter added in the head, at every original route of both trees, every archived article and world entry; `zh-cn/news/7013/` and `m/zh-cn/news/7013/` are the handbook |
| `_nuxt/` | The site's build files (51 chunks, fonts, images) at their original paths, verbatim |
| `archive/` | **Originals archive** (`tools/archive-originals.mjs`): `files/<host>/<path>` — every other response the depth-1 pages received (SDK scripts, i18n JSON, CMS images and videos, music) plus the media the archived records name, within the size budget; `api/` — every content-API answer (lists for every tab and page up to page 3, every news and world record those lists name, characters, camps, key visual, protocol documents), keyed by host + path + sorted query; `index.json` with URL, bytes and SHA-256 of everything |
| `mirror/` | `adapter.js` (answers the content API, i18n and assets from the archive; sends anything not archived to its original URL) and the rewritten copies it serves (`api/`, `files/`); `index.json` |
| `original/` | The SPA shell exactly as the server sends it (`shell-response.html`, the same for every route and for the phone tree) |
| `capture/` | Raw capture: `network-manifest.json` (850 responses), `js/` (the 51 chunks + `chunk-map.json`), `css/` (65 stylesheet modules extracted verbatim + `index.json`), `assets/`, `pages/<route>/` (DOM, screenshots at 1440×900 / 1920×1080 / 390×844, computed styles, hover diffs, style-mutation timelines, media logs, injected style tags) for 26 pages of both trees, `interactions.json` + `interactions/` (what every interaction actually does, measured live), `js-css-manifest.json`, `fonts-and-css-assets.json`, `css-components.json` |
| `source/` | `beautified/` (prettier output of every chunk and stylesheet), `modules/<chunk>/<id>.js` (1,457 split webpack modules), `module-graph.json`, `module-map.json` + `MODULE-MAP.md` (every module named: site / site-page / site-vendor / vendor / css-module / asset-url), `routes.json` (the Nuxt route table), `stage1/`, `rename-maps/` (semantic rename maps with summaries), `readable/` (107 first-party and HoYoverse-internal modules renamed for reading) |
| `analysis/` | `css-rules.json` (every rule with media context), `colors.json`, `typography.json`, `spacing.json`, `layers.json`, `motion.json`, `breakpoints.json`, `hover-states.json`, `motion-timelines.json`, `components/<Block>.json` (per-block CSS, real markup, computed styles, hover, keyframes), `components-summary.json`, `css-digest.md`, `DNA.md` (written specification) |
| `verification/` | `report.json` + screenshots from `tools/verify.mjs` (handbook), `mirror-report.json` + screenshots from `tools/verify-mirror.mjs` |
| `examples/portfolio/` | A single-page portfolio built as a child site from the handbook: the site's own stylesheet modules, SDK styles and captured component markup (both trees), with original records and drawings in the content slots; `README.md` there explains the parts, `tools/verify.mjs` measures it, `/examples/portfolio/` serves it |
| `CHUNK_MAP.md`, `COVERAGE.md` | Chunk and stylesheet map with digests; block coverage of the handbook |
| `tools/` | Node scripts (below) and `build-pdf.py` |

## Tools (`tools/`)

| Script | Role |
| --- | --- |
| `capture.mjs` | Depth-1 capture of both trees in headless Chromium (manifest, chunks, DOM, screenshots, computed styles, hover diffs, timelines, media logs, style tags) |
| `capture-interactions.mjs [--only=step,…]` | Drives the live site (rem per viewport, loader frames, header, sidebar and scroll, hero, home sections, character, video, news, article, world, footer, phone menu) → `capture/interactions.json` |
| `split-modules.mjs`, `extract-css.mjs`, `write-routes.mjs`, `hint-modules.mjs`, `name-modules.mjs` (+ `source/module-names.json`), `rename.mjs`, `stage2.mjs` (+ `source/rename-maps/*.json`), `beautify.mjs`, `assets-index.mjs` | Deobfuscation pipeline: split webpack 4 chunks, extract the css-loader modules with resolved asset URLs, read the route table, name every module, stage-1 mechanical renames, stage-2 semantic renames → `source/readable/` |
| `analyze-css.mjs`, `css-components.mjs`, `css-digest.mjs`, `analyze-hover.mjs`, `analyze-motion.mjs`, `extract-components.mjs` | Design-token and component evidence extraction |
| `archive-originals.mjs [--budget-mb=450] [--pages=3]` | Downloads every depth-1 file, every content-API answer (lists, records, trees), the record media within the budget → `_nuxt/`, `archive/` |
| `build-mirror.mjs` | Builds the mirror pages, `404.html`, `mirror/adapter.js` and the rewritten copies |
| `build-handbook.mjs` (+ `handbook/chapters-*.mjs`, `handbook/lib.mjs`) | Builds the handbook record and the handbook shells on top of the mirror |
| `measure-specimens.mjs` (`--fit`) | Measures every specimen of the built handbook in headless Chromium and writes `handbook/specimen-geometry.json` (window and offset for components the site positions absolutely or fixed); `--fit` rebuilds and re-measures until stable |
| `build-doc.mjs` + `build-pdf.py` | Builds the printed edition (ReportLab, template geometry, three passes for verified page numbers, index, appendices) and the Markdown twin from the same chapters |
| `verify.mjs`, `verify-mirror.mjs` | Headless verification of the handbook page and of the mirror on a plain static server |
| `serve.mjs [port] [--host=0.0.0.0] [--allow=ip,ip]` | Local server (static files, directory index, 404.html fallback); optional LAN binding with a client-address allow list |
| `write-docs.mjs` | Regenerates `CHUNK_MAP.md`, `COVERAGE.md`, `source/MODULE-MAP.md`, `analysis/DNA.md` |

Rebuild everything from `tools/`: `node capture.mjs && node split-modules.mjs && node extract-css.mjs && node write-routes.mjs && node analyze-css.mjs && node css-components.mjs && node name-modules.mjs && node rename.mjs && node stage2.mjs && node beautify.mjs && node assets-index.mjs && node analyze-hover.mjs && node analyze-motion.mjs && node extract-components.mjs && node css-digest.mjs && node capture-interactions.mjs && node archive-originals.mjs && node build-mirror.mjs && node build-handbook.mjs && node measure-specimens.mjs --fit && node verify-mirror.mjs && node verify.mjs && node build-doc.mjs && node write-docs.mjs`.

## Scope and limits

Depth 1 means the pages the home page links to, plus the phone tree the site serves to phones, plus the three world entries and the six news articles the home page names. The content API answers are archived for every tab and page up to page 3 (81 news records, 3 world entries, the full character and camp lists); 751 of the 1,599 media files those records name are archived within the 450 MB budget (GitHub Pages serves at most 1 GB per site) — the mirror loads the rest from the live CDN. The SDK's per-session services (region, device fingerprint, cookie-token verification, subscription state, event and APM logging, analytics) cannot be archived; the mirror lets those calls go to their hosts, where the browser blocks them for a foreign origin. Headless Chromium has no H.264 decoder and no real pointer: the overlay video players open but create no player element, and the character stage does not react to synthetic clicks; those limits are stated in the chapters where they apply.

All materials belong to HoYoverse / COGNOSPHERE and are reproduced here for the study of the site's construction only.
