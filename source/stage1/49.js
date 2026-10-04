// site constants (nav list, supported locales, parallax config, route paths) — module 49 from 8c4c131
// module 49 from 8c4c131.js
// deps:
const module_49 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire.d(webpackExports, "e", function () {
    return o_1;
  }),
    webpackRequire.d(webpackExports, "d", function () {
      return l_2;
    }),
    webpackRequire.d(webpackExports, "f", function () {
      return r_3;
    }),
    webpackRequire.d(webpackExports, "b", function () {
      return A_4;
    }),
    webpackRequire.d(webpackExports, "c", function () {
      return m_5;
    }),
    webpackRequire.d(webpackExports, "a", function () {
      return d_6;
    }));
  var o_1 = [
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
    l_2 = [
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
    r_3 = {
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
    A_4 = "en-us",
    m_5 = "lang",
    d_6 = [
      "/xbox",
      "/main",
      "/company/privacy",
      "/company/terms",
      "/company/terms2",
      "/company/terms3",
      /^\/news\/\d+$/,
    ];
};
