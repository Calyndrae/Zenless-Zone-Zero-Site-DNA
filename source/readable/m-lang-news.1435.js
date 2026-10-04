/**
 * m-lang-news — readable reconstruction of webpack module 1435 (chunk 75ab81f.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/75ab81f.js
 *
 * Nuxt page component for the mobile route `m-lang-news-public` (layout `m/default`), the gacha/public-notice article that embeds an external page. `asyncData` fetches the article via the news API (module 1124) `getDetail` with `iInfoId: GACHA_ID`, `iChanId: CHANNEL_ID_CONFIG.NEWS.ALL` and `sLangKey: store.state.lang` (both from the app bundle, module 28), redirecting to `m-lang-news` if the request throws, and exposes it as `newsContent` (its title is also the `head()` title). The render shows `m-news-detail` (class `fromGame` when `$route.query.nolandscape` and `fromGame` are set) with an `m-news-detail__article` title and a client-only `iframe` pointing at `gachaUrl?lang=<store.state.lang>`, whose height tracks `frameHeight` (+50px) updated from `window` `message` events of type `sendHeight` (listener added on mount, removed before destroy). A `nuxt-link` footer (`m-news-detail__foot`, i18n `textBack`) returns to `m-lang-news` and tracks `news_back` via `$trackButton`.
 *
 * Exports (minified key → meaning):
 *   default → the `m-lang-news-public` mobile gacha-notice (iframe) news page Vue component (compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1435 from 75ab81f.js
// deps: 32, 98, 28, 1124, 1320, 36
const module_1435 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    appConfig = (webpackRequire(98), webpackRequire(28)),
    newsCMSAPI = webpackRequire(1124),
    newsPublicPageOptions = {
      layout: "m/default",
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
        fromGame: function () {
          return this.$route.query.nolandscape && this.$route.query.fromGame;
        },
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
                          name: "m-lang-news",
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
    componentNormalizer = (webpackRequire(1320), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      componentOptions,
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
