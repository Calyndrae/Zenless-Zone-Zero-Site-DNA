/**
 * user-model-request-helper — readable reconstruction of webpack module 1240 (chunk fd57a96.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/fd57a96.js
 *
 * User-model response cache. Creates a Store named "responseData" (from module 1176) and exports a default object with get(key), which logs via userModelUtils.log and returns Promise.resolve(JSON.parse(value)) when a cached entry exists (null otherwise), and set(key, data), which logs, stores JSON.stringify(data) and returns true. Pure data layer: no DOM, no Vue component.
 *
 * Exports (minified key → meaning):
 *   default → response cache facade { get(key) -> Promise|null, set(key, data) -> true } backed by a Store("responseData")
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1240 from fd57a96.js
// deps: 77, 1166, 1176
const module_1240 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(77),
    Object.defineProperty(webpackExports, "__esModule", {
      value: !0,
    }));
  var userModelUtils = webpackRequire(1166),
    responseCacheStore = new (webpackRequire(1176).Store)("responseData");
  webpackExports.default = {
    get: function (cacheKey) {
      var cachedJson = responseCacheStore.get(cacheKey);
      return (
        (0, userModelUtils.log)("response cache get", cacheKey, cachedJson),
        cachedJson ? Promise.resolve(JSON.parse(cachedJson)) : null
      );
    },
    set: function (entryKey, data) {
      return (
        (0, userModelUtils.log)("response cache set", entryKey, data),
        responseCacheStore.set(entryKey, JSON.stringify(data)),
        !0
      );
    },
  };
};
