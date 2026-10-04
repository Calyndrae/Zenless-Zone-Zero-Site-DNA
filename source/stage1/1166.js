// user-model utils (GLB, isSSR, log, toUrlWithParams, getTimestamp) — module 1166 from fd57a96
// module 1166 from fd57a96.js
// deps: 138, 85, 42
const module_1166 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (function (e_1) {
    (webpackRequire(138),
      webpackRequire(85),
      Object.defineProperty(webpackExports, "__esModule", {
        value: !0,
      }));
    webpackExports.GLB = "undefined" == typeof window ? e_1 : window;
    var n_2 = (webpackExports.isSSR = "undefined" == typeof window || "undefined" == typeof document);
    ((webpackExports.encode = function (e_3) {
      return e_3.replace(/(http|https|:|\.|\/|\?|&|=|#|,)/gi, "");
    }),
      (webpackExports.toUrlWithParams = function (e_4) {
        for (
          var t_5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o_6 = [],
            n_7 = Object.keys(t_5),
            i_8 = 0,
            r_9 = n_7.length;
          i_8 < r_9;
          i_8++
        )
          o_6.push(n_7[i_8] + "=" + t_5[n_7[i_8]]);
        return o_6.length > 0 ? e_4 + (e_4.indexOf("?") > 1 ? "&" : "?") + o_6.join("&") : e_4;
      }),
      (webpackExports.log = function () {
        var e_10;
        !n_2 && window.location.href.indexOf("debug=") > -1 && (e_10 = console).log.apply(e_10, arguments);
      }),
      (webpackExports.getTimestamp = function () {
        return Math.ceil(new Date().getTime() / 1e3);
      }));
  }).call(this, webpackRequire(42));
};
