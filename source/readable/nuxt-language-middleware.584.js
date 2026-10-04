/**
 * nuxt-language-middleware — readable reconstruction of webpack module 584 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Nuxt route middleware for language handling. It normalises params.lang via module 83's helper, commits the store mutation "setLang", and when the lang is in the supported list (module 49 .d) either initialises @mihoyo i18n (setCommonConfig/initAppI18n with appId "m03111446031031", gameBiz "nap_global", zone "morax", env from appBundle.i18nEnv) on static builds or calls setLang at runtime. For an unsupported lang it redirects to a lang-prefixed path, or resolves a named route with lang/query and either redirects to it or (for the special route name module 49 .c) hard-navigates window.location after 200 ms.
 *
 * Exports (minified key → meaning):
 *   default → Nuxt middleware function ({ params, route, redirect, app, isStatic }) that sets the store language, initialises i18n and redirects unsupported-language URLs
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 584 from 8c4c131.js
// deps: 85, 84, 67, 105, 106, 56, 119, 118, 65, 103, 49, 1, 83, 28
const module_584 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  (webpackRequire(85), webpackRequire(84), webpackRequire(67), webpackRequire(105), webpackRequire(106));
  var vendorBundle = webpackRequire(56),
    mi18nSdk = (webpackRequire(119), webpackRequire(118), webpackRequire(65), webpackRequire(103)),
    siteConstants = webpackRequire(49),
    Vue = webpackRequire(1),
    localeAndRoutePathHelpers = webpackRequire(83),
    siteConfigConstants = webpackRequire(28);
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      (enumerableOnly &&
        (symbols = symbols.filter(function (symbol) {
          return Object.getOwnPropertyDescriptor(object, symbol).enumerable;
        })),
        keys.push.apply(keys, symbols));
    }
    return keys;
  }
  function objectSpread(target) {
    for (var argIndex = 1; argIndex < arguments.length; argIndex++) {
      var source = null != arguments[argIndex] ? arguments[argIndex] : {};
      argIndex % 2
        ? ownKeys(Object(source), !0).forEach(function (key) {
            Object(vendorBundle.a)(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
          : ownKeys(Object(source)).forEach(function (descriptorKey) {
              Object.defineProperty(
                target,
                descriptorKey,
                Object.getOwnPropertyDescriptor(source, descriptorKey),
              );
            });
    }
    return target;
  }
  webpackExports.default = function (context) {
    var params = context.params,
      route = context.route,
      redirect = context.redirect,
      app = context.app,
      langParam = params.lang,
      path = route.path,
      normalizedLang = Object(localeAndRoutePathHelpers.d)(langParam);
    return (
      app.store.commit("setLang", normalizedLang),
      siteConstants.d.includes(langParam)
        ? context.isStatic
          ? Vue.default.prototype.$getI18nWord
            ? void 0
            : (["development", "test"].includes(siteConfigConstants.environment) ||
                Object(mi18nSdk.setCommonConfig)({
                  showError: !1,
                }),
              Object(mi18nSdk.initAppI18n)(Vue.default, {
                appId: "m03111446031031",
                gameBiz: "nap_global",
                env: siteConfigConstants.i18nEnv,
                lang: normalizedLang,
                zone: "morax",
              }))
          : Object(mi18nSdk.setLang)(normalizedLang)
        : Object(localeAndRoutePathHelpers.a)(path)
          ? void redirect({
              path: Object(localeAndRoutePathHelpers.c)(path, normalizedLang),
              query: objectSpread({}, route.query),
            })
          : void (function (middlewareContext, routeName, targetLang) {
              var nuxtApp = middlewareContext.app,
                redirectTo = middlewareContext.redirect,
                routeLocation = {
                  name: routeName,
                  params: {
                    lang: targetLang,
                  },
                  query: objectSpread({}, middlewareContext.route.query),
                };
              if (routeName === siteConstants.c) {
                var path = nuxtApp.router.resolve(routeLocation).route.fullPath;
                setTimeout(function () {
                  window.location.href = ""
                    .concat(location.protocol, "//")
                    .concat(location.host)
                    .concat(path, "/");
                }, 200);
              } else redirectTo(routeLocation);
            })(context, Object(localeAndRoutePathHelpers.e)(route.name), normalizedLang)
    );
  };
};
