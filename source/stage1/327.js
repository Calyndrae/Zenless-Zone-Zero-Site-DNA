// analytics plugin (GA + miHoYoAnalysis, $trackEvent/$trackButton) — module 327 from 8c4c131
// module 327 from 8c4c131.js
// deps: 28, 24, 897
const module_327 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var siteConfigConstants = webpackRequire(28);
  webpackExports.a = function (t_1, e_2) {
    var l_3,
      r_4 = t_1.$flex,
      regeneratorRuntime = webpackRequire(24),
      m_5 = regeneratorRuntime.IS_IOS,
      d_6 = regeneratorRuntime.IS_MOB;
    (webpackRequire(897).init("G-8BR44XDKVQ", !0),
      (l_3 = window.miHoYoAnalysis
        ? window.miHoYoAnalysis.init({
            isSea: siteConfigConstants.isSea,
            appId: 262,
            env: siteConfigConstants.environment,
            needSessionInfo: !0,
            dataBelong: ["nap"],
            type: "event",
            pageExtrainfo: {
              deviceType: r_4("deviceType"),
            },
            userExtrainfo: {
              plat: d_6 ? (m_5 ? 2 : 1) : 3,
            },
          })
        : {
            updateUid: function () {
              for (var t_8 = arguments.length, e_9 = new Array(t_8), n_10 = 0; n_10 < t_8; n_10++)
                e_9[n_10] = arguments[n_10];
              console.warn("updateUid", e_9);
            },
            trackEvent: function () {
              for (var t_11 = arguments.length, e_12 = new Array(t_11), n_13 = 0; n_13 < t_11; n_13++)
                e_12[n_13] = arguments[n_13];
              console.warn("trackEvent", e_12);
            },
          }),
      (window.mhyAna = l_3));
    var c_7 = function () {
      for (var t_14, e_15 = arguments.length, n_16 = new Array(e_15), o_17 = 0; o_17 < e_15; o_17++)
        n_16[o_17] = arguments[o_17];
      (t_14 = l_3).trackEvent.apply(t_14, n_16);
    };
    (e_2("trackEvent", c_7),
      e_2("updateUid", function () {
        for (var t_18, e_19 = arguments.length, n_20 = new Array(e_19), o_21 = 0; o_21 < e_19; o_21++)
          n_20[o_21] = arguments[o_21];
        (t_18 = l_3).updateUid.apply(t_18, n_20);
      }),
      e_2("trackButton", function () {
        for (var t_22 = arguments.length, e_23 = new Array(t_22), n_24 = 0; n_24 < t_22; n_24++)
          e_23[n_24] = arguments[n_24];
        return c_7.apply(void 0, ["Button", "Click"].concat(e_23));
      }));
  };
};
