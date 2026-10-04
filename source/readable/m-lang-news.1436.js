/**
 * m-lang-news — readable reconstruction of webpack module 1436 (chunk 39a3684.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/39a3684.js
 *
 * Nuxt page component for the mobile news-article route `m-lang-news-id` (layout `m/default`). `validate` only accepts numeric `params.id`; `asyncData` loads the article via the news API (module 1124) `getDetail` with `iInfoId: params.id`, `iChanId: CHANNEL_ID_CONFIG.NEWS.ALL` (app bundle, module 28) and `sLangKey: store.state.lang`, redirecting to `m-lang-news` on error, and exposes it as `newsContent`; `head()` uses its title plus i18n `seoTitlePrefix`. The render shows `m-news-detail` (class `fromGame` when `$route.query.nolandscape` and `fromGame` are set) with the `m-news-detail__title`, an `m-news-detail__info` breadcrumb (i18n `gameName` > `news-tag` for `sChanId[0]`) and `dateFormat`, the HTML `sContent` in `m-news-detail__content`, and a `nuxt-link` footer back to `m-lang-news` (i18n `textBack`) that tracks `news_back` with the article id via `$trackButton`.
 *
 * Exports (minified key → meaning):
 *   default → the `m-lang-news-id` mobile news-detail page Vue component (compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1436 from 39a3684.js
// deps: 32, 98, 28, 1124, 1163, 1322, 36
const module_1436 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    appConfig = (webpackRequire(98), webpackRequire(28)),
    newsCMSAPI = webpackRequire(1124),
    newsDetailPageOptions = {
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
                          name: "m-lang-news",
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
    componentNormalizer = (webpackRequire(1322), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      newsDetailPageOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "m-news-detail",
            class: {
              fromGame: vm.fromGame,
            },
          },
          [
            h(
              "div",
              {
                staticClass: "m-news-detail-container",
              },
              [
                h(
                  "article",
                  {
                    staticClass: "m-news-detail__article",
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "m-news-detail__title",
                      },
                      [vm._v("\n        " + vm._s(vm.newsContent.title) + "\n      ")],
                    ),
                    vm._v(" "),
                    h(
                      "div",
                      {
                        staticClass: "m-news-detail__info",
                      },
                      [
                        h(
                          "div",
                          {
                            staticClass: "breadcrumb",
                          },
                          [
                            h("span", [vm._v(vm._s(vm.$getI18nWord("gameName")))]),
                            vm._v("\n          >\n          "),
                            h("news-tag", {
                              attrs: {
                                channel: vm.newsContent.sChanId[0],
                              },
                            }),
                          ],
                          1,
                        ),
                        vm._v(" "),
                        h("div", [vm._v(vm._s(vm.newsContent.dateFormat))]),
                      ],
                    ),
                    vm._v(" "),
                    h("div", {
                      staticClass: "m-news-detail__content",
                      domProps: {
                        innerHTML: vm._s(vm.newsContent.sContent),
                      },
                    }),
                  ],
                ),
                vm._v(" "),
                h(
                  "nuxt-link",
                  {
                    staticClass: "m-news-detail__foot",
                    attrs: {
                      to: {
                        name: "m-lang-news",
                      },
                    },
                    nativeOn: {
                      click: function (clickEvent) {
                        return vm.handleBackUpload.apply(null, arguments);
                      },
                    },
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "m-news-detail__back",
                      },
                      [vm._v(vm._s(vm.$getI18nWord("textBack")))],
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
