/**
 * i18n-language-middleware — readable reconstruction of webpack module 340 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Async Nuxt route middleware that initializes i18n for the current language. It resolves the language from the route `lang` param via the locale helpers (module 83, falling back to the `mi18nLang` cookie / default), disables SDK error popups outside development/test via `setCommonConfig`, calls `initAppI18n(Vue, { appId: 'm03111446031031', gameBiz: 'nap_global', env: i18nEnv, lang, zone: 'morax' })` and commits the `setLang` mutation, then returns. The code also contains an (unreachable after the early return) branch that detects language from the cookie or `accept-language` header, sets `Cache-Control: no-cache` and redirects unsupported-language paths to a language-prefixed path or `lang` route.
 *
 * Exports (minified key → meaning):
 *   a → the async i18n/language Nuxt middleware function (context)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 340 from 8c4c131.js
// deps: 32, 98, 204, 119, 118, 65, 103, 28, 1, 49, 83
const module_340 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(32),
    i18nSdk =
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
  function detectLang(context, routeLang) {
    if (siteConstants.d.includes(routeLang)) return routeLang;
    var acceptLanguage,
      preferredLang,
      app = context.app,
      req = context.req,
      headerLang =
        ((acceptLanguage = req.headers["accept-language"] || siteConstants.b),
        (preferredLang = acceptLanguage.toLowerCase().split(",")[0]),
        siteConstants.d.includes(preferredLang) ? preferredLang : siteConstants.b);
    return app.$cookie.get("mi18nLang") || headerLang;
  }
  function langMiddlewareAsync() {
    return (langMiddlewareAsync = Object(vendorBundle.a)(
      regeneratorRuntime.mark(function langMiddlewareGenerator(middlewareContext) {
        var params,
          route,
          redirect,
          res,
          nuxtApp,
          paramLang,
          resolvedLang,
          path,
          detectedLang,
          query,
          langRouteName;
        return regeneratorRuntime.wrap(function (generatorContext) {
          for (;;)
            switch ((generatorContext.prev = generatorContext.next)) {
              case 0:
                return (
                  (params = middlewareContext.params),
                  (route = middlewareContext.route),
                  (redirect = middlewareContext.redirect),
                  (res = middlewareContext.res),
                  (nuxtApp = middlewareContext.app),
                  (paramLang = params.lang),
                  ["development", "test"].includes(siteConfigConstants.environment) ||
                    Object(i18nSdk.setCommonConfig)({
                      showError: !1,
                    }),
                  (resolvedLang = Object(localeAndRoutePathHelpers.d)(paramLang)),
                  (generatorContext.next = 7),
                  Object(i18nSdk.initAppI18n)(Vue.default, {
                    appId: "m03111446031031",
                    gameBiz: "nap_global",
                    env: siteConfigConstants.i18nEnv,
                    lang: resolvedLang,
                    zone: "morax",
                  })
                );
              case 7:
                return (nuxtApp.store.commit("setLang", resolvedLang), generatorContext.abrupt("return"));
              case 9:
                if (
                  ((path = route.path),
                  (detectedLang = detectLang(middlewareContext, paramLang)),
                  (query = Object(localeAndRoutePathHelpers.b)(route.query)),
                  siteConstants.d.includes(paramLang))
                ) {
                  generatorContext.next = 20;
                  break;
                }
                if (
                  (res.setHeader("Cache-Control", "no-cache"), !Object(localeAndRoutePathHelpers.a)(path))
                ) {
                  generatorContext.next = 17;
                  break;
                }
                return (
                  redirect({
                    path: Object(localeAndRoutePathHelpers.c)(path, detectedLang, !0),
                    query: query,
                  }),
                  generatorContext.abrupt("return")
                );
              case 17:
                return (
                  (langRouteName = Object(localeAndRoutePathHelpers.e)(route.name)),
                  redirect({
                    name: langRouteName,
                    params: {
                      lang: detectedLang,
                    },
                    query: query,
                  }),
                  generatorContext.abrupt("return")
                );
              case 20:
                return (
                  (generatorContext.next = 22),
                  Object(i18nSdk.initAppI18n)(Vue.default, {
                    appId: "m03111446031031",
                    gameBiz: "nap_global",
                    env: siteConfigConstants.i18nEnv,
                    lang: paramLang || "en-us",
                    zone: "morax",
                  })
                );
              case 22:
                nuxtApp.store.commit("setLang", detectedLang);
              case 23:
              case "end":
                return generatorContext.stop();
            }
        }, langMiddlewareGenerator);
      }),
    )).apply(this, arguments);
  }
  webpackExports.a = function (middlewareCtx) {
    return langMiddlewareAsync.apply(this, arguments);
  };
};
