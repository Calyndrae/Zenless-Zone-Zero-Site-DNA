/**
 * babel-toConsumableArray-helper — readable reconstruction of webpack module 1150 (chunk fcdddd8.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/fcdddd8.js
 *
 * Babel runtime helper toConsumableArray. It converts an array (via arrayLikeToArray, module 265), an iterable (iterableToArray, module 350) or an array-like (unsupportedIterableToArray, module 205) into a new array, and throws a TypeError about spreading a non-iterable instance otherwise.
 *
 * Exports (minified key → meaning):
 *   a → toConsumableArray(value) Babel helper
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1150 from fcdddd8.js
// deps: 265, 350, 205
const module_1150 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.d(webpackExports, "a", function () {
    return toConsumableArray;
  });
  var vendorBundle = webpackRequire(265);
  var vendorBundle2 = webpackRequire(350),
    vendorBundle3 = webpackRequire(205);
  function toConsumableArray(value) {
    return (
      (function (maybeArray) {
        if (Array.isArray(maybeArray)) return Object(vendorBundle.a)(maybeArray);
      })(value) ||
      Object(vendorBundle2.a)(value) ||
      Object(vendorBundle3.a)(value) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
};
