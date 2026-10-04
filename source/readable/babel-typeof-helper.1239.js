/**
 * babel-typeof-helper — readable reconstruction of webpack module 1239 (chunk fd57a96.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/fd57a96.js
 *
 * Babel runtime helper typeof (@babel/runtime/helpers/typeof, CommonJS build). On first call it replaces module.exports with a native typeof function when Symbol.iterator is a real symbol, or a fallback that reports "symbol" for polyfilled Symbol instances, and sets __esModule/default on the exports.
 *
 * Exports (minified key → meaning):
 *   module.exports → _typeof(value) Babel helper (also exposed as default)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1239 from fd57a96.js
// deps:
const module_1239 = function (webpackModule, webpackExports) {
  function _typeof(value) {
    return (
      (webpackModule.exports = _typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (nativeValue) {
              return typeof nativeValue;
            }
          : function (polyfillValue) {
              return polyfillValue &&
                "function" == typeof Symbol &&
                polyfillValue.constructor === Symbol &&
                polyfillValue !== Symbol.prototype
                ? "symbol"
                : typeof polyfillValue;
            }),
      (webpackModule.exports.__esModule = !0),
      (webpackModule.exports.default = webpackModule.exports),
      _typeof(value)
    );
  }
  ((webpackModule.exports = _typeof),
    (webpackModule.exports.__esModule = !0),
    (webpackModule.exports.default = webpackModule.exports));
};
