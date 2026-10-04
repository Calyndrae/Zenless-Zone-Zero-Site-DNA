/**
 * shared-helper — readable reconstruction of webpack module 1380 (chunk 8d80f48.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8d80f48.js
 *
 * Vendor helper: lodash toNumber. Returns numbers as-is, NaN for symbols (module 1383 isSymbol), unwraps objects via valueOf (module 351 isObject), coerces non-strings with unary plus, otherwise trims the string (module 1381 baseTrim) and parses binary (0b) and octal (0o) prefixes with parseInt, rejects signed hex (/^[-+]0x/) as NaN, and falls back to +value.
 *
 * Exports (minified key → meaning):
 *   module.exports → toNumber(value) -> number
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1380 from 8d80f48.js
// deps: 1381, 351, 1383
const module_1380 = function (webpackModule, webpackExports, webpackRequire) {
  var module1381 = webpackRequire(1381),
    vendorBundle = webpackRequire(351),
    module1383 = webpackRequire(1383),
    reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
    reIsBinary = /^0b[01]+$/i,
    reIsOctal = /^0o[0-7]+$/i,
    freeParseInt = parseInt;
  webpackModule.exports = function (value) {
    if ("number" == typeof value) return value;
    if (module1383(value)) return NaN;
    if (vendorBundle(value)) {
      var valueOfResult = "function" == typeof value.valueOf ? value.valueOf() : value;
      value = vendorBundle(valueOfResult) ? valueOfResult + "" : valueOfResult;
    }
    if ("string" != typeof value) return 0 === value ? value : +value;
    value = module1381(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value)
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : reIsBadHex.test(value)
        ? NaN
        : +value;
  };
};
