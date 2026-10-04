/**
 * lang-news — readable reconstruction of webpack module 1451 (chunk 0d508be.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/0d508be.js
 *
 * Nuxt page component for the desktop news-article route `lang-news-id` (`scrollToTop`). `validate` only accepts numeric `params.id`; `asyncData` loads the article via the news API (module 1124) `getDetail` with `iInfoId: params.id`, `iChanId: CHANNEL_ID_CONFIG.NEWS.ALL` (app bundle, module 28) and `sLangKey: store.state.lang`, redirecting to `lang-news` on error, and exposes it as `newsContent`; `head()` uses its title plus i18n `seoTitlePrefix`. It renders `news-detail` with a `nuxt-link` back button to `lang-news` (`news-detail-back back-btn`, `backArrow`/`backText` i18n `textBack`/`backSubtext`) that tracks `news_back` with the article id via `$trackButton`, then the `news-detail__title`, a `news-detail__info` breadcrumb (i18n `gameName` > `news-tag` for `sChanId[0]`) with `dateFormat`, the HTML `sContent` in `news-detail__content`, and a `backTop` (module 347, theme `reverse`) in `backContainer`.
 *
 * Exports (minified key → meaning):
 *   default → the `lang-news-id` desktop news-detail page Vue component (compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1451 from 0d508be.js
// deps: 32, 98, 28, 1124, 1163, 347, 1410, 36
const module_1451 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    appConfig = (webpackRequire(98), webpackRequire(28)),
    newsCMSAPI = webpackRequire(1124),
    newsTagComponent = webpackRequire(1163),
    backTop = webpackRequire(347),
    newsDetailPageOptions = {
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
      asyncData: function (nuxtContext) {
        return Object(vendorBundle.a)(
          regeneratorRuntime.mark(function asyncDataGenerator() {
            var params, redirect, store, newsId, newsContent;
            return regeneratorRuntime.wrap(
              function (context) {
                for (;;)
                  switch ((context.prev = context.next)) {
                    case 0:
                      return (
                        (params = nuxtContext.params),
                        (redirect = nuxtContext.redirect),
                        (store = nuxtContext.store),
                        nuxtContext.res,
                        (newsId = params.id),
                        (context.prev = 2),
                        (context.next = 5),
                        newsCMSAPI.a.getDetail({
                          data: {
                            iInfoId: newsId,
                            iChanId: appConfig.CHANNEL_ID_CONFIG.NEWS.ALL,
                            sLangKey: store.state.lang,
                          },
                        })
                      );
                    case 5:
                      ((newsContent = context.sent), (context.next = 12));
                      break;
                    case 8:
                      ((context.prev = 8),
                        (context.t0 = context.catch(2)),
                        redirect({
                          name: "lang-news",
                        }));
                    case 12:
                      return context.abrupt("return", {
                        newsContent: newsContent,
                      });
                    case 13:
                    case "end":
                      return context.stop();
                  }
              },
              asyncDataGenerator,
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
      validate: function (validateContext) {
        var routeParams = validateContext.params;
        return /^\d+$/.test(routeParams.id);
      },
    },
    componentNormalizer = (webpackRequire(1410), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      newsDetailPageOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "news-detail",
          },
          [
            h(
              "nuxt-link",
              {
                attrs: {
                  to: {
                    name: "lang-news",
                  },
                },
              },
              [
                h(
                  "div",
                  {
                    staticClass: "news-detail-back back-btn",
                    on: {
                      click: vm.handleBackUpload,
                    },
                  },
                  [
                    h("div", {
                      staticClass: "backArrow",
                    }),
                    vm._v(" "),
                    h(
                      "div",
                      {
                        staticClass: "backText",
                      },
                      [vm._v(vm._s(vm.$getI18nWord("textBack")))],
                    ),
                    vm._v(" "),
                    h(
                      "div",
                      {
                        staticClass: "backSubtext",
                      },
                      [vm._v("back")],
                    ),
                  ],
                ),
              ],
            ),
            vm._v(" "),
            h(
              "div",
              {
                staticClass: "news-detail-wrapper",
              },
              [
                h(
                  "div",
                  {
                    staticClass: "section-wrap",
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "news-detail-container",
                      },
                      [
                        h(
                          "div",
                          {
                            staticClass: "news-detail-article",
                          },
                          [
                            h(
                              "div",
                              {
                                staticClass: "news-detail__title",
                              },
                              [vm._v("\n            " + vm._s(vm.newsContent.title) + "\n          ")],
                            ),
                            vm._v(" "),
                            h(
                              "div",
                              {
                                staticClass: "news-detail__info",
                              },
                              [
                                h(
                                  "span",
                                  {
                                    staticClass: "breadcrumb",
                                  },
                                  [
                                    vm._v("\n              " + vm._s(vm.$getI18nWord("gameName")) + " > "),
                                    h("news-tag", {
                                      attrs: {
                                        channel: vm.newsContent.sChanId[0],
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                                vm._v(" "),
                                h("span", [vm._v(vm._s(vm.newsContent.dateFormat))]),
                              ],
                            ),
                            vm._v(" "),
                            h("div", {
                              staticClass: "news-detail__content",
                              domProps: {
                                innerHTML: vm._s(vm.newsContent.sContent),
                              },
                            }),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
                vm._v(" "),
                h("div", {
                  staticClass: "section__foot",
                }),
              ],
            ),
            vm._v(" "),
            h(
              "div",
              {
                staticClass: "backContainer",
              },
              [
                h("backTop", {
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
