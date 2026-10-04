// i18n language middleware (initAppI18n, setLang) — module 340 from 8c4c131
// module 340 from 8c4c131.js
// deps: 32, 98, 204, 119, 118, 65, 103, 28, 1, 49, 83
const module_340 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(32),
    l_1 =
      (webpackRequire(98),
      webpackRequire(204),
      webpackRequire(119),
      webpackRequire(118),
      webpackRequire(65),
      webpackRequire(103)),
    siteConfigConstants = webpackRequire(28),
    Vue = webpackRequire(1),
    siteConstants = webpackRequire(49),
    localeAndRoutePathHelpers = webpackRequire(83);
  function c_2(t_4, e_5) {
    if (siteConstants.d.includes(e_5)) return e_5;
    var n_6,
      o_7,
      l_8 = t_4.app,
      r_9 = t_4.req,
      A_10 =
        ((n_6 = r_9.headers["accept-language"] || siteConstants.b),
        (o_7 = n_6.toLowerCase().split(",")[0]),
        siteConstants.d.includes(o_7) ? o_7 : siteConstants.b);
    return l_8.$cookie.get("mi18nLang") || A_10;
  }
  function h_3() {
    return (h_3 = Object(vendorBundle.a)(
      regeneratorRuntime.mark(function t_12(e_11) {
        var n_13, o_14, h_15, y_16, w_17, f_18, v_19, path, M_20, I_21, B_22;
        return regeneratorRuntime.wrap(function (t_23) {
          for (;;)
            switch ((t_23.prev = t_23.next)) {
              case 0:
                return (
                  (n_13 = e_11.params),
                  (o_14 = e_11.route),
                  (h_15 = e_11.redirect),
                  (y_16 = e_11.res),
                  (w_17 = e_11.app),
                  (f_18 = n_13.lang),
                  ["development", "test"].includes(siteConfigConstants.environment) ||
                    Object(l_1.setCommonConfig)({
                      showError: !1,
                    }),
                  (v_19 = Object(localeAndRoutePathHelpers.d)(f_18)),
                  (t_23.next = 7),
                  Object(l_1.initAppI18n)(Vue.default, {
                    appId: "m03111446031031",
                    gameBiz: "nap_global",
                    env: siteConfigConstants.i18nEnv,
                    lang: v_19,
                    zone: "morax",
                  })
                );
              case 7:
                return (w_17.store.commit("setLang", v_19), t_23.abrupt("return"));
              case 9:
                if (
                  ((path = o_14.path),
                  (M_20 = c_2(e_11, f_18)),
                  (I_21 = Object(localeAndRoutePathHelpers.b)(o_14.query)),
                  siteConstants.d.includes(f_18))
                ) {
                  t_23.next = 20;
                  break;
                }
                if (
                  (y_16.setHeader("Cache-Control", "no-cache"), !Object(localeAndRoutePathHelpers.a)(path))
                ) {
                  t_23.next = 17;
                  break;
                }
                return (
                  h_15({
                    path: Object(localeAndRoutePathHelpers.c)(path, M_20, !0),
                    query: I_21,
                  }),
                  t_23.abrupt("return")
                );
              case 17:
                return (
                  (B_22 = Object(localeAndRoutePathHelpers.e)(o_14.name)),
                  h_15({
                    name: B_22,
                    params: {
                      lang: M_20,
                    },
                    query: I_21,
                  }),
                  t_23.abrupt("return")
                );
              case 20:
                return (
                  (t_23.next = 22),
                  Object(l_1.initAppI18n)(Vue.default, {
                    appId: "m03111446031031",
                    gameBiz: "nap_global",
                    env: siteConfigConstants.i18nEnv,
                    lang: f_18 || "en-us",
                    zone: "morax",
                  })
                );
              case 22:
                w_17.store.commit("setLang", M_20);
              case 23:
              case "end":
                return t_23.stop();
            }
        }, t_12);
      }),
    )).apply(this, arguments);
  }
  webpackExports.a = function (t_24) {
    return h_3.apply(this, arguments);
  };
};
