/**
 * analytics-plugin — readable reconstruction of webpack module 327 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Nuxt client plugin that sets up analytics. It initializes Google Analytics (module 897, measurement id `G-8BR44XDKVQ`) and `window.miHoYoAnalysis` (appId 262, isSea/environment from the env config, `dataBelong: ['nap']`, deviceType from `$flex`, plat 1/2/3 for Android/iOS/PC), falling back to a console-warning stub when the SDK is missing, stores it as `window.mhyAna`, and injects `$trackEvent`, `$updateUid` and `$trackButton` (which prefixes `Button`, `Click` to the tracked event arguments).
 *
 * Exports (minified key → meaning):
 *   a → the Nuxt analytics plugin function (context, inject)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 327 from 8c4c131.js
// deps: 28, 24, 897
const module_327 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var siteConfigConstants = webpackRequire(28);
  webpackExports.a = function (context, inject) {
    var analytics,
      flex = context.$flex,
      regeneratorRuntime = webpackRequire(24),
      isIOS = regeneratorRuntime.IS_IOS,
      isMobile = regeneratorRuntime.IS_MOB;
    (webpackRequire(897).init("G-8BR44XDKVQ", !0),
      (analytics = window.miHoYoAnalysis
        ? window.miHoYoAnalysis.init({
            isSea: siteConfigConstants.isSea,
            appId: 262,
            env: siteConfigConstants.environment,
            needSessionInfo: !0,
            dataBelong: ["nap"],
            type: "event",
            pageExtrainfo: {
              deviceType: flex("deviceType"),
            },
            userExtrainfo: {
              plat: isMobile ? (isIOS ? 2 : 1) : 3,
            },
          })
        : {
            updateUid: function () {
              for (
                var uidArgCount = arguments.length, uidArgs = new Array(uidArgCount), uidArgIndex = 0;
                uidArgIndex < uidArgCount;
                uidArgIndex++
              )
                uidArgs[uidArgIndex] = arguments[uidArgIndex];
              console.warn("updateUid", uidArgs);
            },
            trackEvent: function () {
              for (
                var stubArgCount = arguments.length, stubArgs = new Array(stubArgCount), stubArgIndex = 0;
                stubArgIndex < stubArgCount;
                stubArgIndex++
              )
                stubArgs[stubArgIndex] = arguments[stubArgIndex];
              console.warn("trackEvent", stubArgs);
            },
          }),
      (window.mhyAna = analytics));
    var trackEvent = function () {
      for (
        var trackTarget,
          eventArgCount = arguments.length,
          eventArgs = new Array(eventArgCount),
          eventArgIndex = 0;
        eventArgIndex < eventArgCount;
        eventArgIndex++
      )
        eventArgs[eventArgIndex] = arguments[eventArgIndex];
      (trackTarget = analytics).trackEvent.apply(trackTarget, eventArgs);
    };
    (inject("trackEvent", trackEvent),
      inject("updateUid", function () {
        for (
          var uidTarget,
            updateArgCount = arguments.length,
            updateArgs = new Array(updateArgCount),
            updateArgIndex = 0;
          updateArgIndex < updateArgCount;
          updateArgIndex++
        )
          updateArgs[updateArgIndex] = arguments[updateArgIndex];
        (uidTarget = analytics).updateUid.apply(uidTarget, updateArgs);
      }),
      inject("trackButton", function () {
        for (
          var buttonArgCount = arguments.length, buttonArgs = new Array(buttonArgCount), buttonArgIndex = 0;
          buttonArgIndex < buttonArgCount;
          buttonArgIndex++
        )
          buttonArgs[buttonArgIndex] = arguments[buttonArgIndex];
        return trackEvent.apply(void 0, ["Button", "Click"].concat(buttonArgs));
      }));
  };
};
