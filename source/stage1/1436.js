// page:m-lang-news-id — module 1436 from 39a3684
// module 1436 from 39a3684.js
// deps: 32, 98, 28, 1124, 1163, 1322, 36
const module_1436 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    o_1 = (webpackRequire(98), webpackRequire(28)),
    newsCMSAPI = webpackRequire(1124),
    c_2 = {
      layout: "m/default",
      components: {
        newsTag: webpackRequire(1163).a,
      },
      data: function () {
        return {};
      },
      head: function () {
        return {
          title: "".concat(this.newsContent.title).concat(this.$getI18nWord("seoTitlePrefix")),
        };
      },
      computed: {
        fromGame: function () {
          return this.$route.query.nolandscape && this.$route.query.fromGame;
        },
      },
      asyncData: function (t_4) {
        return Object(vendorBundle.a)(
          regeneratorRuntime.mark(function e_5() {
            var n_6, r_7, c_8, d_9, m_10;
            return regeneratorRuntime.wrap(
              function (e_11) {
                for (;;)
                  switch ((e_11.prev = e_11.next)) {
                    case 0:
                      return (
                        (n_6 = t_4.params),
                        (r_7 = t_4.redirect),
                        (c_8 = t_4.store),
                        t_4.res,
                        (d_9 = n_6.id),
                        (e_11.prev = 2),
                        (e_11.next = 5),
                        newsCMSAPI.a.getDetail({
                          data: {
                            iInfoId: d_9,
                            iChanId: o_1.CHANNEL_ID_CONFIG.NEWS.ALL,
                            sLangKey: c_8.state.lang,
                          },
                        })
                      );
                    case 5:
                      ((m_10 = e_11.sent), (e_11.next = 12));
                      break;
                    case 8:
                      ((e_11.prev = 8),
                        (e_11.t0 = e_11.catch(2)),
                        r_7({
                          name: "m-lang-news",
                        }));
                    case 12:
                      return e_11.abrupt("return", {
                        newsContent: m_10,
                      });
                    case 13:
                    case "end":
                      return e_11.stop();
                  }
              },
              e_5,
              null,
              [[2, 8]],
            );
          }),
        )();
      },
      methods: {
        handleBackUpload: function () {
          this.$trackButton("news_back", "".concat(this.$route.params.id));
        },
      },
      validate: function (t_12) {
        var e_13 = t_12.params;
        return /^\d+$/.test(e_13.id);
      },
    },
    d_3 = (webpackRequire(1322), webpackRequire(36)),
    component = Object(d_3.a)(
      c_2,
      function () {
        var t_14 = this,
          e_15 = t_14._self._c;
        return e_15(
          "div",
          {
            staticClass: "m-news-detail",
            class: {
              fromGame: t_14.fromGame,
            },
          },
          [
            e_15(
              "div",
              {
                staticClass: "m-news-detail-container",
              },
              [
                e_15(
                  "article",
                  {
                    staticClass: "m-news-detail__article",
                  },
                  [
                    e_15(
                      "div",
                      {
                        staticClass: "m-news-detail__title",
                      },
                      [t_14._v("\n        " + t_14._s(t_14.newsContent.title) + "\n      ")],
                    ),
                    t_14._v(" "),
                    e_15(
                      "div",
                      {
                        staticClass: "m-news-detail__info",
                      },
                      [
                        e_15(
                          "div",
                          {
                            staticClass: "breadcrumb",
                          },
                          [
                            e_15("span", [t_14._v(t_14._s(t_14.$getI18nWord("gameName")))]),
                            t_14._v("\n          >\n          "),
                            e_15("news-tag", {
                              attrs: {
                                channel: t_14.newsContent.sChanId[0],
                              },
                            }),
                          ],
                          1,
                        ),
                        t_14._v(" "),
                        e_15("div", [t_14._v(t_14._s(t_14.newsContent.dateFormat))]),
                      ],
                    ),
                    t_14._v(" "),
                    e_15("div", {
                      staticClass: "m-news-detail__content",
                      domProps: {
                        innerHTML: t_14._s(t_14.newsContent.sContent),
                      },
                    }),
                  ],
                ),
                t_14._v(" "),
                e_15(
                  "nuxt-link",
                  {
                    staticClass: "m-news-detail__foot",
                    attrs: {
                      to: {
                        name: "m-lang-news",
                      },
                    },
                    nativeOn: {
                      click: function (e_16) {
                        return t_14.handleBackUpload.apply(null, arguments);
                      },
                    },
                  },
                  [
                    e_15(
                      "div",
                      {
                        staticClass: "m-news-detail__back",
                      },
                      [t_14._v(t_14._s(t_14.$getI18nWord("textBack")))],
                    ),
                  ],
                ),
              ],
              1,
            ),
          ],
        );
      },
      [],
      !1,
      null,
      null,
      null,
    );
  webpackExports.default = component.exports;
};
