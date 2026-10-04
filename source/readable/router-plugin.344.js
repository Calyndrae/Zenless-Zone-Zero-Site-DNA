/**
 * router-plugin — readable reconstruction of webpack module 344 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Nuxt router plugin. It registers a pass-through `router.beforeEach` guard and a `router.afterEach` hook that computes which query keys changed between the previous and current route (lodash-style difference/intersection helpers); unless the path is unchanged and only `webpush*` keys changed, it sends a pageview with `window.mhyAna.trackPageview({ path, name })` and rewrites the browser URL via `history.replaceState`, stripping all `webpush*` query parameters using the `qs`/`addParamsToUrl` utilities.
 *
 * Exports (minified key → meaning):
 *   a → the Nuxt router plugin function (context)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 344 from 8c4c131.js
// deps: 71, 67, 401, 171, 85, 65, 546, 547, 24
const module_344 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(71),
    differenceModule =
      (webpackRequire(67),
      webpackRequire(401),
      webpackRequire(171),
      webpackRequire(85),
      webpackRequire(65),
      webpackRequire(546)),
    defaultOf_l = webpackRequire.n(differenceModule),
    vendorBundle2 = webpackRequire(547),
    vendorBundleDefault = webpackRequire.n(vendorBundle2);
  function beforeEachGuard(to, from, next) {
    next();
  }
  function afterEachHook(afterTo, afterFrom) {}
  webpackExports.a = function (context) {
    var router = context.app.router;
    (router.beforeEach(function (toRoute, fromRoute, nextFn) {
      beforeEachGuard.bind(context)(toRoute, fromRoute, nextFn);
    }),
      router.afterEach(function (currentRoute, previousRoute) {
        afterEachHook.bind(context)(currentRoute, previousRoute);
        var urlUtils,
          addParamsToUrl,
          qs,
          filteredQuery,
          cleanUrl,
          changedQueryKeys = (function (prevQuery, nextQuery) {
            var prevKeys = Object.keys(prevQuery),
              nextKeys = Object.keys(nextQuery),
              allKeys = prevKeys.concat(nextKeys);
            return defaultOf_l()(allKeys, vendorBundleDefault()(prevKeys, nextKeys));
          })(previousRoute.query, currentRoute.query);
        (currentRoute.path === previousRoute.path &&
          changedQueryKeys.length > 0 &&
          changedQueryKeys.every(function (queryKey) {
            return queryKey.startsWith("webpush");
          })) ||
          (window.mhyAna.trackPageview({
            path: currentRoute.path,
            name: currentRoute.name,
          }),
          (urlUtils = webpackRequire(24)),
          (addParamsToUrl = urlUtils.addParamsToUrl),
          (qs = urlUtils.qs),
          (filteredQuery = Object.fromEntries(
            Object.entries(qs()).filter(function (queryEntry) {
              return !Object(vendorBundle.a)(queryEntry, 1)[0].startsWith("webpush");
            }),
          )),
          (cleanUrl = addParamsToUrl(
            "".concat(window.location.origin).concat(window.location.pathname),
            filteredQuery,
          )),
          window.history.replaceState(null, "", cleanUrl));
      }));
  };
};
