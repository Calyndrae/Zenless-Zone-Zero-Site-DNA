/**
 * m-lang-main — readable reconstruction of webpack module 1434 (chunk 01cc6f8.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/01cc6f8.js
 *
 * Nuxt page component for the mobile route `m-lang-company-terms3` (layout `empty`). In `asyncData` it calls the CMS content API (module 1118) `getTerms3` with `sLangKey: store.state.lang`, which fetches the `getContentList` entry for channel `CHANNEL_ID_CONFIG.PROTOCOL.TERMS3`, redirects to `m-lang-main` when nothing is returned, and otherwise exposes `title`, `content` and `pdfUrl` as page data. `head()` sets the document title to the entry title plus the i18n `seoTitlePrefix`. The render function wraps either a `protocol-pdf` (HoYoverse PDF viewer, with `is-mob`) when `pdfUrl` is set, or the `protocol` text component (m-protocol, module 1141) with `title`/`content`, inside `client-only`.
 *
 * Exports (minified key → meaning):
 *   default → the `m-lang-company-terms3` mobile terms/protocol page Vue component (compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1434 from 01cc6f8.js
// deps: 32, 98, 1118, 1131, 1141, 36
const module_1434 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    cmsApi = (webpackRequire(98), webpackRequire(1118)),
    protocolPdfViewerComponent = webpackRequire(1131),
    pageOptions = {
      layout: "empty",
      components: {
        protocol: webpackRequire(1141).a,
        protocolPdf: protocolPdfViewerComponent.a,
      },
      head: function () {
        return {
          title: "".concat(this.title).concat(this.$getI18nWord("seoTitlePrefix")),
        };
      },
      asyncData: function (nuxtContext) {
        return Object(vendorBundle.a)(
          regeneratorRuntime.mark(function asyncDataGenerator() {
            var redirect, store, termsEntry;
            return regeneratorRuntime.wrap(function (context) {
              for (;;)
                switch ((context.prev = context.next)) {
                  case 0:
                    return (
                      (redirect = nuxtContext.redirect),
                      (store = nuxtContext.store),
                      nuxtContext.res,
                      (context.next = 3),
                      cmsApi.a.getTerms3({
                        data: {
                          sLangKey: store.state.lang,
                        },
                      })
                    );
                  case 3:
                    return (
                      (termsEntry = context.sent) ||
                        redirect({
                          name: "m-lang-main",
                        }),
                      context.abrupt("return", {
                        title: termsEntry.sTitle,
                        content: termsEntry.sContent,
                        pdfUrl: termsEntry.pdfUrl,
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
            vm.pdfUrl
              ? h("protocol-pdf", {
                  attrs: {
                    "is-mob": !0,
                    "pdf-url": vm.pdfUrl,
                  },
                })
              : h("protocol", {
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
