# Originals archive

Archived 2026-10-04 from the live site and its CDNs.

| What | Count | Size |
| --- | --- | --- |
| Build files at /_nuxt/<path> (chunks, fonts, images, at their original paths) and files under files/<host>/<path> (SDK scripts, i18n JSON, CMS images and videos, music) | 1398 | 452.3 MB |
| CMS API answers under api/ (every list page the pages request, every tab and page of news and videos up to page 3, every news and world record those lists name, the character, camp, key-visual, social and protocol lists) | 120 | 2.2 MB |

Every entry is in index.json with its original URL, bytes and SHA-256; api/index.json keys each answer by host + path + query with the parameters sorted, which is how the mirror adapter looks them up. 376 media files named by the archived records were left on the CDN because the 450 MB budget was reached (GitHub Pages serves at most 1 GB per site); `node tools/archive-originals.mjs --budget-mb=900` fetches more. Answers of the SDK's own per-session services (ip_location, device fingerprint, cookie-token verification, event and APM logging, analytics) are not archivable and are not needed to render the pages.
