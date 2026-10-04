/**
 * lang-main — readable reconstruction of webpack module 1448 (chunk 5e4f8d9.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/5e4f8d9.js
 *
 * Nuxt page component for the desktop route `lang-company-terms2` (layout `empty`), the secondary terms page (terms2). In `asyncData` it calls the CMS content API (module 1118) `getTerms2`, which fetches the `/getContentList` entry for channel `CHANNEL_ID_CONFIG.PROTOCOL.TERMS2`, passing `sLangKey: store.state.lang`; when nothing is returned it redirects to `lang-main` (with `params.lang = store.state.lang`), otherwise it exposes `title`, `content` and `pdfUrl` (from `sTitle`/`sContent`/`pdfUrl`) as page data. `head()` sets the document title to the entry title plus the i18n `seoTitlePrefix`. The render function shows, inside `client-only`, either a `protocol-pdf` (HoYoverse PDF viewer, module 1131, with `is-mob` = false and `pdf-url`) when `pdfUrl` is set, or the `protocol` text component (desktop protocol, module 1142) with `title`/`content`.
 *
 * Exports (minified key → meaning):
 *   default → the `lang-company-terms2` desktop secondary terms page (terms2) Vue component (compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1448 from 5e4f8d9.js
// deps: 32, 98, 1131, 1142, 1118, 36
const module_1448 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    HoYoversePdfViewer = (webpackRequire(98), webpackRequire(1131)),
    protocolPageComponent = webpackRequire(1142),
    protocolCMSAPI = webpackRequire(1118),
    pageOptions = {
      layout: "empty",
      components: {
        protocol: protocolPageComponent.a,
        protocolPdf: HoYoversePdfViewer.a,
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
                      protocolCMSAPI.a.getTerms2({
                        data: {
                          sLangKey: store.state.lang,
                        },
                      })
                    );
                  case 3:
                    return (
                      (protocolEntry = context.sent) ||
                        redirect({
                          name: "lang-main",
                          params: {
                            lang: store.state.lang,
                          },
                        }),
                      context.abrupt("return", {
                        title: protocolEntry.sTitle,
                        content: protocolEntry.sContent,
                        pdfUrl: protocolEntry.pdfUrl,
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
                    "is-mob": !1,
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
