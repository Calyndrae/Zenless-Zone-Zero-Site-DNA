/**
 * global-Vue-plugins-and — readable reconstruction of webpack module 343 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Nuxt plugin that installs the site's global Vue extensions exactly once (guarded by a module-level flag). It sets `Vue.prototype.$isBBS`, `$isSea` and `$isMob`, calls `setBrandTheme('nap', false)`, registers the `meAudio`, `share` and `CrmSub` components, `Vue.use`s a series of UI/utility plugins (toast, copy-input, Swiper, `window.MeSeaDownload`, a plugin given `{ lang: store.state.lang }`, a deep-link plugin with `schemaName: 'hoyolab'`), installs the account SDK plugin with `{ lang, isSea: true, gameBiz: 'nap_global', environment, appId: accountSdkAppId, useType: 'account' }` using the language resolved from `params.lang`, shows the cookie-tips banner outside BBS (`source: '262'`, storage key `napCookieTips`), and installs an ad-tracking plugin with Google Ads `AW-10901298873`, Facebook, pixel and Twitter ids.
 *
 * Exports (minified key → meaning):
 *   a → the Nuxt plugin function (context) that installs global components/plugins
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
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
    localeHelpers = (webpackRequire(1053), webpackRequire(1055), webpackRequire(83)),
    isInstalled = (webpackRequire(1057), !1);
  webpackExports.a = function (context) {
    isInstalled ||
      (!(function (VueCtor, nuxtContext) {
        ((VueCtor.prototype.$isBBS = regeneratorRuntime.IS_BBS),
          (VueCtor.prototype.$isSea = siteConfigConstants.isSea),
          (VueCtor.prototype.$isMob = regeneratorRuntime.IS_MOB),
          Object(themeModeHelper.setBrandTheme)("nap", !1),
          VueCtor.component("meAudio", MeAudioLibraryDefault.a),
          VueCtor.component("share", regeneratorRuntime2.a),
          VueCtor.use(regeneratorRuntime3.a),
          VueCtor.use(styles2.a),
          VueCtor.use(MeToastLibraryDefault.a),
          VueCtor.use(mhyCopyInputClipboardHelperDefault.a),
          VueCtor.use(SwiperDefault.a),
          VueCtor.use(window.MeSeaDownload.default),
          VueCtor.use(regeneratorRuntime5.a),
          VueCtor.use(regeneratorRuntime6.a),
          VueCtor.use(regeneratorRuntime7.a, {
            lang: nuxtContext.store.state.lang,
          }),
          VueCtor.component("CrmSub", lodashDefault.a),
          VueCtor.use(styles.a, {
            schemaName: "hoyolab",
            forceRepaint: !0,
          }));
        var lang = Object(localeHelpers.d)(nuxtContext.params.lang);
        (VueCtor.use(regeneratorRuntime4.a, {
          lang: lang,
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
                lang: lang,
              },
            }),
          VueCtor.use(coreJsPolyfillsDefault2.a, {
            ga: "AW-10901298873",
            fa: 0x5dacbbc1fee48,
            pixel: "CHJJ2DBC77UCDSLIU2H0",
            twitter: "rc4y1",
          }));
      })(Vue.default, context),
      (isInstalled = !0));
  };
};
