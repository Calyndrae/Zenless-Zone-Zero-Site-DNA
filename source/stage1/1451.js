// page:lang-news-id — module 1451 from 0d508be
// module 1451 from 0d508be.js
// deps: 32, 98, 28, 1124, 1163, 347, 1410, 36
const module_1451 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    o_1 = (webpackRequire(98), webpackRequire(28)),
    newsCMSAPI = webpackRequire(1124),
    newsTagComponent = webpackRequire(1163),
    backTop = webpackRequire(347),
    h_2 = {
      scrollToTop: !0,
      components: {
        newsTag: newsTagComponent.a,
        backTop: backTop.a,
      },
      data: function () {
        return {};
      },
      head: function () {
        return {
          title: "".concat(this.newsContent.title).concat(this.$getI18nWord("seoTitlePrefix")),
        };
      },
      asyncData: function (t_4) {
        return Object(vendorBundle.a)(
          regeneratorRuntime.mark(function e_5() {
            var n_6, r_7, l_8, d_9, h_10;
            return regeneratorRuntime.wrap(
              function (e_11) {
                for (;;)
                  switch ((e_11.prev = e_11.next)) {
                    case 0:
                      return (
                        (n_6 = t_4.params),
                        (r_7 = t_4.redirect),
                        (l_8 = t_4.store),
                        t_4.res,
                        (d_9 = n_6.id),
                        (e_11.prev = 2),
                        (e_11.next = 5),
                        newsCMSAPI.a.getDetail({
                          data: {
                            iInfoId: d_9,
                            iChanId: o_1.CHANNEL_ID_CONFIG.NEWS.ALL,
                            sLangKey: l_8.state.lang,
                          },
                        })
                      );
                    case 5:
                      ((h_10 = e_11.sent), (e_11.next = 12));
                      break;
                    case 8:
                      ((e_11.prev = 8),
                        (e_11.t0 = e_11.catch(2)),
                        r_7({
                          name: "lang-news",
                        }));
                    case 12:
                      return e_11.abrupt("return", {
                        newsContent: h_10,
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
    f_3 = (webpackRequire(1410), webpackRequire(36)),
    component = Object(f_3.a)(
      h_2,
      function () {
        var t_14 = this,
          e_15 = t_14._self._c;
        return e_15(
          "div",
          {
            staticClass: "news-detail",
          },
          [
            e_15(
              "nuxt-link",
              {
                attrs: {
                  to: {
                    name: "lang-news",
                  },
                },
              },
              [
                e_15(
                  "div",
                  {
                    staticClass: "news-detail-back back-btn",
                    on: {
                      click: t_14.handleBackUpload,
                    },
                  },
                  [
                    e_15("div", {
                      staticClass: "backArrow",
                    }),
                    t_14._v(" "),
                    e_15(
                      "div",
                      {
                        staticClass: "backText",
                      },
                      [t_14._v(t_14._s(t_14.$getI18nWord("textBack")))],
                    ),
                    t_14._v(" "),
                    e_15(
                      "div",
                      {
                        staticClass: "backSubtext",
                      },
                      [t_14._v("back")],
                    ),
                  ],
                ),
              ],
            ),
            t_14._v(" "),
            e_15(
              "div",
              {
                staticClass: "news-detail-wrapper",
              },
              [
                e_15(
                  "div",
                  {
                    staticClass: "section-wrap",
                  },
                  [
                    e_15(
                      "div",
                      {
                        staticClass: "news-detail-container",
                      },
                      [
                        e_15(
                          "div",
                          {
                            staticClass: "news-detail-article",
                          },
                          [
                            e_15(
                              "div",
                              {
                                staticClass: "news-detail__title",
                              },
                              [t_14._v("\n            " + t_14._s(t_14.newsContent.title) + "\n          ")],
                            ),
                            t_14._v(" "),
                            e_15(
                              "div",
                              {
                                staticClass: "news-detail__info",
                              },
                              [
                                e_15(
                                  "span",
                                  {
                                    staticClass: "breadcrumb",
                                  },
                                  [
                                    t_14._v(
                                      "\n              " + t_14._s(t_14.$getI18nWord("gameName")) + " > ",
                                    ),
                                    e_15("news-tag", {
                                      attrs: {
                                        channel: t_14.newsContent.sChanId[0],
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                                t_14._v(" "),
                                e_15("span", [t_14._v(t_14._s(t_14.newsContent.dateFormat))]),
                              ],
                            ),
                            t_14._v(" "),
                            e_15("div", {
                              staticClass: "news-detail__content",
                              domProps: {
                                innerHTML: t_14._s(t_14.newsContent.sContent),
                              },
                            }),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
                t_14._v(" "),
                e_15("div", {
                  staticClass: "section__foot",
                }),
              ],
            ),
            t_14._v(" "),
            e_15(
              "div",
              {
                staticClass: "backContainer",
              },
              [
                e_15("backTop", {
                  attrs: {
                    theme: "reverse",
                  },
                }),
              ],
              1,
            ),
          ],
          1,
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
