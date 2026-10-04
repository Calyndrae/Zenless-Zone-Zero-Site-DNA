/**
 * site-constants — readable reconstruction of webpack module 49 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Static site constants module. It exports the main navigation list (main, character, video, news, world, feature entries with Chinese labels, mi18n keys nav1/nav2/navVideo/nav3/nav5/nav4 and tracking keys), the 13 supported locale codes, a per-section parallax animation config (yPercent/xPercent tweens for `.fill-bg`, `.fill-text`, `.section-character`, `.fill-black-bar-feature`), the default language `en-us`, the `lang` storage/query key, and a list of route paths/regexes (`/xbox`, `/main`, `/company/privacy`, `/company/terms*`, `/news/<id>`) used for path matching.
 *
 * Exports (minified key → meaning):
 *   e → main navigation items (label, link, mi18nKey, miaKey)
 *   d → list of supported locale codes
 *   f → per-home-section parallax animation config (element selector + tween attrs)
 *   b → default language code ("en-us")
 *   c → language key name ("lang")
 *   a → list of route paths / regexes matched by path helpers
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 49 from 8c4c131.js
// deps:
const module_49 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire.d(webpackExports, "e", function () {
    return navList;
  }),
    webpackRequire.d(webpackExports, "d", function () {
      return supportedLangs;
    }),
    webpackRequire.d(webpackExports, "f", function () {
      return sectionParallaxConfig;
    }),
    webpackRequire.d(webpackExports, "b", function () {
      return defaultLang;
    }),
    webpackRequire.d(webpackExports, "c", function () {
      return langKey;
    }),
    webpackRequire.d(webpackExports, "a", function () {
      return matchedRoutePaths;
    }));
  var navList = [
      {
        label: "首页",
        link: "main",
        mi18nKey: "nav1",
        miaKey: "firstpage",
      },
      {
        label: "阵营角色",
        link: "character",
        mi18nKey: "nav2",
        miaKey: "character",
      },
      {
        label: "影像资料",
        link: "video",
        mi18nKey: "navVideo",
        miaKey: "video",
      },
      {
        label: "新闻资讯",
        link: "news",
        mi18nKey: "nav3",
        miaKey: "news",
      },
      {
        label: "设定档案",
        link: "world",
        mi18nKey: "nav5",
        miaKey: "file",
      },
      {
        label: "游戏特色",
        link: "feature",
        mi18nKey: "nav4",
        miaKey: "features",
      },
    ],
    supportedLangs = [
      "de-de",
      "en-us",
      "es-es",
      "fr-fr",
      "id-id",
      "ja-jp",
      "ko-kr",
      "pt-pt",
      "ru-ru",
      "th-th",
      "vi-vn",
      "zh-cn",
      "zh-tw",
    ],
    sectionParallaxConfig = {
      0: [
        {
          ele: ".fill-bg",
          attr: [
            {
              name: "yPercent",
              start: 0,
              end: -4,
            },
          ],
        },
        {
          ele: ".fill-text",
          attr: [
            {
              name: "yPercent",
              start: 0,
              end: -14,
            },
          ],
        },
        {
          ele: ".section-character",
          attr: [
            {
              name: "yPercent",
              start: 0,
              end: -4,
            },
          ],
        },
      ],
      5: [
        {
          ele: ".fill-black-bar-feature",
          attr: [
            {
              name: "yPercent",
              start: 0,
              end: -4,
            },
            {
              name: "xPercent",
              start: 0,
              end: 4,
            },
          ],
        },
      ],
    },
    defaultLang = "en-us",
    langKey = "lang",
    matchedRoutePaths = [
      "/xbox",
      "/main",
      "/company/privacy",
      "/company/terms",
      "/company/terms2",
      "/company/terms3",
      /^\/news\/\d+$/,
    ];
};
