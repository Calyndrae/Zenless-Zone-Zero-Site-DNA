/**
 * share-SDK-constants — readable reconstruction of webpack module 943 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * Constants module for the share/social SDK. It exports URLS, a map of social share endpoints (Facebook sharer, Twitter intent, Messenger with app_id 521270401588372, WhatsApp, LINE, Naver Cafe, Reddit, VK), and apiPre, the per-environment public API host prefix (testing-sg-public-api / pre-sg-public-api / sg-public-api). No suffixed bindings to rename.
 *
 * Exports (minified key → meaning):
 *   URLS → social share URL prefixes keyed by platform (FACEBOOK, TWITTER, MESSAGER, WHATSAPP, LINE, CAFE, REDDIT, VK)
 *   apiPre → sg public API host prefix per environment (test / prerelease / production)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 943 from be1f69b.js
// deps:
const module_943 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  Object.defineProperty(webpackExports, "__esModule", {
    value: !0,
  });
  ((webpackExports.URLS = {
    FACEBOOK: "https://www.facebook.com/sharer.php?u=",
    TWITTER: "https://twitter.com/intent/tweet?url=",
    MESSAGER: "fb-messenger://share/?app_id=521270401588372&link=",
    WHATSAPP: "whatsapp://send?text=",
    LINE: "https://social-plugins.line.me/lineit/share?url=",
    CAFE: "https://share.naver.com/web/shareView?url=",
    REDDIT: "https://www.reddit.com/submit?url=",
    VK: "https://vk.com/share.php?url=",
  }),
    (webpackExports.apiPre = {
      test: "testing-sg-public-api",
      prerelease: "pre-sg-public-api",
      production: "sg-public-api",
    }));
};
