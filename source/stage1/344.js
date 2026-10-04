// router plugin (pageview tracking, query cleanup) — module 344 from 8c4c131
// module 344 from 8c4c131.js
// deps: 71, 67, 401, 171, 85, 65, 546, 547, 24
const module_344 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(71),
    l_1 =
      (webpackRequire(67),
      webpackRequire(401),
      webpackRequire(171),
      webpackRequire(85),
      webpackRequire(65),
      webpackRequire(546)),
    defaultOf_l = webpackRequire.n(l_1),
    vendorBundle2 = webpackRequire(547),
    vendorBundleDefault = webpackRequire.n(vendorBundle2);
  function d_2(t_4, e_5, n_6) {
    n_6();
  }
  function c_3(t_7, e_8) {}
  webpackExports.a = function (t_9) {
    var e_10 = t_9.app.router;
    (e_10.beforeEach(function (e_11, n_12, o_13) {
      d_2.bind(t_9)(e_11, n_12, o_13);
    }),
      e_10.afterEach(function (e_14, l_15) {
        c_3.bind(t_9)(e_14, l_15);
        var A_16,
          d_17,
          h_18,
          y_19,
          w_20,
          f_21 = (function (t_22, e_23) {
            var n_24 = Object.keys(t_22),
              o_25 = Object.keys(e_23),
              l_26 = n_24.concat(o_25);
            return defaultOf_l()(l_26, vendorBundleDefault()(n_24, o_25));
          })(l_15.query, e_14.query);
        (e_14.path === l_15.path &&
          f_21.length > 0 &&
          f_21.every(function (t_27) {
            return t_27.startsWith("webpush");
          })) ||
          (window.mhyAna.trackPageview({
            path: e_14.path,
            name: e_14.name,
          }),
          (A_16 = webpackRequire(24)),
          (d_17 = A_16.addParamsToUrl),
          (h_18 = A_16.qs),
          (y_19 = Object.fromEntries(
            Object.entries(h_18()).filter(function (t_28) {
              return !Object(vendorBundle.a)(t_28, 1)[0].startsWith("webpush");
            }),
          )),
          (w_20 = d_17("".concat(window.location.origin).concat(window.location.pathname), y_19)),
          window.history.replaceState(null, "", w_20));
      }));
  };
};
