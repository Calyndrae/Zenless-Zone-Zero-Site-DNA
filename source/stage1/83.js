// locale and route path helpers (isMatchedPath) — module 83 from 8c4c131
// module 83 from 8c4c131.js
// deps: 77, 119, 118, 138, 67, 85, 49, 40
const module_83 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire.d(webpackExports, "a", function () {
    return l_1;
  }),
    webpackRequire.d(webpackExports, "e", function () {
      return r_2;
    }),
    webpackRequire.d(webpackExports, "c", function () {
      return A_3;
    }),
    webpackRequire.d(webpackExports, "d", function () {
      return m_4;
    }),
    webpackRequire.d(webpackExports, "b", function () {
      return d_5;
    }));
  (webpackRequire(77),
    webpackRequire(119),
    webpackRequire(118),
    webpackRequire(138),
    webpackRequire(67),
    webpackRequire(85));
  var siteConstants = webpackRequire(49);
  function l_1(path) {
    return siteConstants.a.some(function (t_6) {
      return "[object RegExp]" === Object.prototype.toString.call(t_6) ? t_6.test(path) : path.includes(t_6);
    });
  }
  function r_2(t_7) {
    return t_7 && /(-lang)|(lang-)/.test(t_7) && "m-lang" !== t_7 ? t_7 : siteConstants.c;
  }
  function A_3(path, t_8) {
    var e_9 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      n_10 = /\/m($|\/)/.test(path);
    return ""
      .concat(n_10 && !e_9 ? "/m" : "", "/")
      .concat(t_8)
      .concat(n_10 ? path.replace("/m", "") : path);
  }
  function m_4(t_11) {
    return siteConstants.d.includes(t_11) ? t_11 : webpackRequire(40).get("mi18nLang") || siteConstants.b;
  }
  function d_5(t_12) {
    return t_12
      ? Object.keys(t_12)
          .filter(function (t_13) {
            return "catchSpider" !== t_13;
          })
          .reduce(function (e_14, n_15) {
            return ((e_14[n_15] = t_12[n_15]), e_14);
          }, {})
      : {};
  }
};
