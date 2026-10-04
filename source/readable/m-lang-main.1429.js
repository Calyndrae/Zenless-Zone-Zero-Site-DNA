/**
 * m-lang-main — readable reconstruction of webpack module 1429 (chunk f5b0acd.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/f5b0acd.js
 *
 * Nuxt page component for the mobile route `m-lang-company-archive` (layout `empty`), the company archive/history page. In `asyncData` it calls the CMS content API (module 1118) `getKrHistory`, which fetches the `/getContentList` entry for channel `CHANNEL_ID_CONFIG.PROTOCOL.HISTORY`, passing `sLangKey: store.state.lang`; when nothing is returned it redirects to `m-lang-main`, otherwise it exposes `title` and `content` (from `sTitle`/`sContent`) as page data. `head()` sets the document title to the entry title plus the i18n `seoTitlePrefix`. The render function shows the `protocol` text component (m-protocol, module 1141) with `title`/`content` inside `client-only`.
 *
 * Exports (minified key → meaning):
 *   default → the `m-lang-company-archive` mobile company archive/history page Vue component (compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1429 from f5b0acd.js
// deps: 32, 98, 1118, 1141, 36
const module_1429 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    cmsApi = (webpackRequire(98), webpackRequire(1118)),
    pageOptions = {
      layout: "empty",
      components: {
        protocol: webpackRequire(1141).a,
      },
      head: function () {
        return {
          title: "".concat(this.title).concat(this.$getI18nWord("seoTitlePrefix")),
        };
      },
      asyncData: function (nuxtContext) {
        return Object(vendorBundle.a)(
          regeneratorRuntime.mark(function asyncDataGenerator() {
            var redirect, store, protocolEntry;
            return regeneratorRuntime.wrap(function (context) {
              for (;;)
                switch ((context.prev = context.next)) {
                  case 0:
                    return (
                      (redirect = nuxtContext.redirect),
                      (store = nuxtContext.store),
                      nuxtContext.res,
                      (context.next = 3),
                      cmsApi.a.getKrHistory({
                        data: {
                          sLangKey: store.state.lang,
                        },
                      })
                    );
                  case 3:
                    return (
                      (protocolEntry = context.sent) ||
                        redirect({
                          name: "m-lang-main",
                        }),
                      context.abrupt("return", {
                        title: protocolEntry.sTitle,
                        content: protocolEntry.sContent,
                      })
                    );
                  case 6:
                  case "end":
                    return context.stop();
                }
            }, asyncDataGenerator);
          }),
        )();
      },
    },
    vendorBundle2 = webpackRequire(36),
    component = Object(vendorBundle2.a)(
      pageOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "client-only",
          [
            h("protocol", {
              attrs: {
                title: vm.title,
                content: vm.content,
              },
            }),
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
