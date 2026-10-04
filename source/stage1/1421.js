// video page redirect (route video) — module 1421 from 6850d84
// module 1421 from 6850d84.js
// deps: 36
const module_1421 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var t_1 = {
      name: "video-page",
      middleware: function (e_2) {
        var n_3 = e_2.redirect,
          r_4 = e_2.query;
        n_3({
          name: "lang-video",
          params: {
            lang: e_2.store.state.lang,
          },
          query: r_4,
        });
      },
    },
    vendorBundle = webpackRequire(36),
    component = Object(vendorBundle.a)(
      t_1,
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
