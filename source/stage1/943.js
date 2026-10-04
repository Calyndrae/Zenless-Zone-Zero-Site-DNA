// share SDK constants (URLS, apiPre) — module 943 from be1f69b
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
