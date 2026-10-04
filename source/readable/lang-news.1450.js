/**
 * lang-news — readable reconstruction of webpack module 1450 (chunk 84ad6ad.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/84ad6ad.js
 *
 * Nuxt page component for the desktop route `lang-news-public` (`scrollToTop`), the gacha/public-notice article that embeds an external page. `asyncData` fetches the article via the news API (module 1124) `getDetail` with `iInfoId: GACHA_ID`, `iChanId: CHANNEL_ID_CONFIG.NEWS.ALL` and `sLangKey: store.state.lang` (from the app bundle, module 28), redirecting to `lang-news` if the request throws, and exposes it as `newsContent` (its title is also the `head()` title). It renders `gacha-detail` with a `nuxt-link` back button to `lang-news` (`gacha-detail-back back-btn`, `backArrow`/`backText` with i18n `textBack`/`backSubtext`, tracking `news_back` via `$trackButton`), a `gacha-detail__title` and a client-only `iframe` on `gachaUrl?lang=<store.state.lang>` whose height follows `frameHeight` (+50px), updated from `window` `message` events of type `sendHeight` (listener added on mount, removed before destroy), plus a `backTop` (module 347, theme `reverse`) in `backContainer`.
 *
 * Exports (minified key → meaning):
 *   default → the `lang-news-public` desktop gacha-notice (iframe) news page Vue component (compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1450 from 84ad6ad.js
// deps: 32, 98, 28, 1124, 347, 1408, 36
const module_1450 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    appConfig = (webpackRequire(98), webpackRequire(28)),
    newsCMSAPI = webpackRequire(1124),
    newsPublicPageOptions = {
      scrollToTop: !0,
      components: {
        backTop: webpackRequire(347).a,
      },
      data: function () {
        return {
          frameHeight: 200,
        };
      },
      head: function () {
        return {
          title: this.newsContent.title,
        };
      },
      computed: {
        gachaUrl: function () {
          return "".concat(appConfig.gachaUrl, "?lang=").concat(this.$store.state.lang);
        },
      },
      asyncData: function (nuxtContext) {
        return Object(vendorBundle.a)(
          regeneratorRuntime.mark(function asyncDataGenerator() {
            var redirect, store, newsContent;
            return regeneratorRuntime.wrap(
              function (context) {
                for (;;)
                  switch ((context.prev = context.next)) {
                    case 0:
                      return (
                        (redirect = nuxtContext.redirect),
                        (store = nuxtContext.store),
                        nuxtContext.res,
                        (context.prev = 1),
                        (context.next = 4),
                        newsCMSAPI.a.getDetail({
                          data: {
                            iInfoId: appConfig.GACHA_ID,
                            iChanId: appConfig.CHANNEL_ID_CONFIG.NEWS.ALL,
                            sLangKey: store.state.lang,
                          },
                        })
                      );
                    case 4:
                      ((newsContent = context.sent), (context.next = 11));
                      break;
                    case 7:
                      ((context.prev = 7),
                        (context.t0 = context.catch(1)),
                        redirect({
                          name: "lang-news",
                        }));
                    case 11:
                      return context.abrupt("return", {
                        newsContent: newsContent,
                      });
                    case 12:
                    case "end":
                      return context.stop();
                  }
              },
              asyncDataGenerator,
              null,
              [[1, 7]],
            );
          }),
        )();
      },
      mounted: function () {
        this.getFrameHeight(!0);
      },
      beforeDestroy: function () {
        this.getFrameHeight(!1);
      },
      methods: {
        handleBackUpload: function () {
          this.$trackButton("news_back", appConfig.GACHA_ID);
        },
        getFrameHeight: function () {
          var shouldListen = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            listenerMethod = shouldListen ? "addEventListener" : "removeEventListener";
          window[listenerMethod]("message", this.handleFrameMsg);
        },
        handleFrameMsg: function (messageEvent) {
          var messagePayload = messageEvent.data || {},
            data = messagePayload.data,
            messageType = messagePayload.type;
          "number" == typeof data &&
            "sendHeight" === (void 0 === messageType ? "" : messageType) &&
            (this.frameHeight = data);
        },
      },
    },
    componentOptions = newsPublicPageOptions,
    componentNormalizer = (webpackRequire(1408), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      componentOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "gacha-detail",
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
                    staticClass: "gacha-detail-back back-btn",
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
                staticClass: "gacha-detail-wrapper",
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
                        staticClass: "gacha-detail-container",
                      },
                      [
                        h(
                          "div",
                          {
                            staticClass: "gacha-detail-article",
                          },
                          [
                            h(
                              "div",
                              {
                                staticClass: "gacha-detail__title",
                              },
                              [vm._v("\n            " + vm._s(vm.newsContent.title) + "\n          ")],
                            ),
                            vm._v(" "),
                            h("client-only", [
                              h("iframe", {
                                style: {
                                  height: "".concat(vm.frameHeight + 50, "px"),
                                },
                                attrs: {
                                  src: vm.gachaUrl,
                                },
                              }),
                            ]),
                          ],
                          1,
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
