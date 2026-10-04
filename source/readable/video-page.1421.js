/**
 * video-page — readable reconstruction of webpack module 1421 (chunk 6850d84.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/6850d84.js
 *
 * Nuxt page component "video-page" for the non-localized /video route. Its only logic is a middleware that reads redirect and query from the Nuxt context and redirects to the named route "lang-video" with params.lang = store.state.lang, preserving the query. The render function outputs an empty div. Compiled with the vendor normalizeComponent helper (module 36).
 *
 * Exports (minified key → meaning):
 *   default → the "video-page" Vue component (redirect-only page to lang-video)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1421 from 6850d84.js
// deps: 36
const module_1421 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var videoPageOptions = {
      name: "video-page",
      middleware: function (context) {
        var redirect = context.redirect,
          query = context.query;
        redirect({
          name: "lang-video",
          params: {
            lang: context.store.state.lang,
          },
          query: query,
        });
      },
    },
    vendorBundle = webpackRequire(36),
    component = Object(vendorBundle.a)(
      videoPageOptions,
      function () {
        return (0, this._self._c)("div");
      },
      [],
      !1,
      null,
      null,
      null,
    );
  webpackExports.default = component.exports;
};
