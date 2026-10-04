// global Vue plugins and components installer — module 343 from 8c4c131
// module 343 from 8c4c131.js
// deps: 1, 28, 24, 527, 528, 534, 154, 535, 536, 354, 537, 538, 539, 540, 542, 552, 554, 555, 545, 1053, 1055, 83, 1057
const module_343 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var Vue = webpackRequire(1),
    siteConfigConstants = webpackRequire(28),
    regeneratorRuntime = webpackRequire(24),
    stylesModule = webpackRequire(527),
    styles = webpackRequire.n(stylesModule),
    regeneratorRuntime2 = webpackRequire(528),
    MeToastLibrary = webpackRequire(534),
    MeToastLibraryDefault = webpackRequire.n(MeToastLibrary),
    stylesModule2 = webpackRequire(154),
    styles2 = webpackRequire.n(stylesModule2),
    mhyCopyInputClipboardHelper = webpackRequire(535),
    mhyCopyInputClipboardHelperDefault = webpackRequire.n(mhyCopyInputClipboardHelper),
    Swiper = webpackRequire(536),
    SwiperDefault = webpackRequire.n(Swiper),
    MeAudioLibrary = webpackRequire(354),
    MeAudioLibraryDefault = webpackRequire.n(MeAudioLibrary),
    lodash = webpackRequire(537),
    lodashDefault = webpackRequire.n(lodash),
    themeModeHelper = webpackRequire(538),
    coreJsPolyfills = webpackRequire(539),
    coreJsPolyfillsDefault = webpackRequire.n(coreJsPolyfills),
    regeneratorRuntime3 = webpackRequire(540),
    coreJsPolyfills2 = webpackRequire(542),
    coreJsPolyfillsDefault2 = webpackRequire.n(coreJsPolyfills2),
    regeneratorRuntime4 = webpackRequire(552),
    regeneratorRuntime5 = webpackRequire(554),
    regeneratorRuntime6 = webpackRequire(555),
    regeneratorRuntime7 = webpackRequire(545),
    U_1 = (webpackRequire(1053), webpackRequire(1055), webpackRequire(83)),
    S_2 = (webpackRequire(1057), !1);
  webpackExports.a = function (t_3) {
    S_2 ||
      (!(function (t_4, e_5) {
        ((t_4.prototype.$isBBS = regeneratorRuntime.IS_BBS),
          (t_4.prototype.$isSea = siteConfigConstants.isSea),
          (t_4.prototype.$isMob = regeneratorRuntime.IS_MOB),
          Object(themeModeHelper.setBrandTheme)("nap", !1),
          t_4.component("meAudio", MeAudioLibraryDefault.a),
          t_4.component("share", regeneratorRuntime2.a),
          t_4.use(regeneratorRuntime3.a),
          t_4.use(styles2.a),
          t_4.use(MeToastLibraryDefault.a),
          t_4.use(mhyCopyInputClipboardHelperDefault.a),
          t_4.use(SwiperDefault.a),
          t_4.use(window.MeSeaDownload.default),
          t_4.use(regeneratorRuntime5.a),
          t_4.use(regeneratorRuntime6.a),
          t_4.use(regeneratorRuntime7.a, {
            lang: e_5.store.state.lang,
          }),
          t_4.component("CrmSub", lodashDefault.a),
          t_4.use(styles.a, {
            schemaName: "hoyolab",
            forceRepaint: !0,
          }));
        var n_6 = Object(U_1.d)(e_5.params.lang);
        (t_4.use(regeneratorRuntime4.a, {
          lang: n_6,
          isSea: !0,
          gameBiz: "nap_global",
          environment: siteConfigConstants.environment,
          appId: siteConfigConstants.accountSdkAppId,
          useType: "account",
        }),
          regeneratorRuntime.IS_BBS ||
            coreJsPolyfillsDefault()({
              env: siteConfigConstants.environment,
              source: "262",
              type: "official",
              tipOptions: {
                biz: "nap_global",
                host: "hoyoverse",
                defaultStorageKey: "napCookieTips",
                lang: n_6,
              },
            }),
          t_4.use(coreJsPolyfillsDefault2.a, {
            ga: "AW-10901298873",
            fa: 0x5dacbbc1fee48,
            pixel: "CHJJ2DBC77UCDSLIU2H0",
            twitter: "rc4y1",
          }));
      })(Vue.default, t_3),
      (S_2 = !0));
  };
};
