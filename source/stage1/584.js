// nuxt language middleware (setLang, i18n init, redirect) — module 584 from 8c4c131
// module 584 from 8c4c131.js
// deps: 85, 84, 67, 105, 106, 56, 119, 118, 65, 103, 49, 1, 83, 28
const module_584 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  (webpackRequire(85), webpackRequire(84), webpackRequire(67), webpackRequire(105), webpackRequire(106));
  var vendorBundle = webpackRequire(56),
    l_1 = (webpackRequire(119), webpackRequire(118), webpackRequire(65), webpackRequire(103)),
    siteConstants = webpackRequire(49),
    Vue = webpackRequire(1),
    localeAndRoutePathHelpers = webpackRequire(83),
    siteConfigConstants = webpackRequire(28);
  function c_2(object, t_4) {
    var e_5 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var n_6 = Object.getOwnPropertySymbols(object);
      (t_4 &&
        (n_6 = n_6.filter(function (t_7) {
          return Object.getOwnPropertyDescriptor(object, t_7).enumerable;
        })),
        e_5.push.apply(e_5, n_6));
    }
    return e_5;
  }
  function h_3(t_8) {
    for (var i_9 = 1; i_9 < arguments.length; i_9++) {
      var source = null != arguments[i_9] ? arguments[i_9] : {};
      i_9 % 2
        ? c_2(Object(source), !0).forEach(function (e_10) {
            Object(vendorBundle.a)(t_8, e_10, source[e_10]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t_8, Object.getOwnPropertyDescriptors(source))
          : c_2(Object(source)).forEach(function (e_11) {
              Object.defineProperty(t_8, e_11, Object.getOwnPropertyDescriptor(source, e_11));
            });
    }
    return t_8;
  }
  webpackExports.default = function (t_12) {
    var e_13 = t_12.params,
      n_14 = t_12.route,
      o_15 = t_12.redirect,
      c_16 = t_12.app,
      y_17 = e_13.lang,
      path = n_14.path,
      w_18 = Object(localeAndRoutePathHelpers.d)(y_17);
    return (
      c_16.store.commit("setLang", w_18),
      siteConstants.d.includes(y_17)
        ? t_12.isStatic
          ? Vue.default.prototype.$getI18nWord
            ? void 0
            : (["development", "test"].includes(siteConfigConstants.environment) ||
                Object(l_1.setCommonConfig)({
                  showError: !1,
                }),
              Object(l_1.initAppI18n)(Vue.default, {
                appId: "m03111446031031",
                gameBiz: "nap_global",
                env: siteConfigConstants.i18nEnv,
                lang: w_18,
                zone: "morax",
              }))
          : Object(l_1.setLang)(w_18)
        : Object(localeAndRoutePathHelpers.a)(path)
          ? void o_15({
              path: Object(localeAndRoutePathHelpers.c)(path, w_18),
              query: h_3({}, n_14.query),
            })
          : void (function (t_19, e_20, n_21) {
              var o_22 = t_19.app,
                l_23 = t_19.redirect,
                A_24 = {
                  name: e_20,
                  params: {
                    lang: n_21,
                  },
                  query: h_3({}, t_19.route.query),
                };
              if (e_20 === siteConstants.c) {
                var path = o_22.router.resolve(A_24).route.fullPath;
                setTimeout(function () {
                  window.location.href = ""
                    .concat(location.protocol, "//")
                    .concat(location.host)
                    .concat(path, "/");
                }, 200);
              } else l_23(A_24);
            })(t_12, Object(localeAndRoutePathHelpers.e)(n_14.name), w_18)
    );
  };
};
