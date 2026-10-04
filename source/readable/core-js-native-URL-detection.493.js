/**
 * core-js-native-URL-detection — readable reconstruction of webpack module 493 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * core-js internal feature-detection module (`native-url`): it exports a boolean that is true when the native `URL`/`URLSearchParams` implementation is correct, checking pathname encoding, `searchParams` iteration/deletion and `sort`, `href`, URLSearchParams string conversion and copy construction, the iterator symbol, `username` parsing, punycode host conversion (`xn--e1aybc` for `http://тест`), hash encoding and an undefined base argument (with an extra `toJSON` check in pure mode).
 *
 * Exports (minified key → meaning):
 *   module.exports → boolean — whether native URL / URLSearchParams can be used
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 493 from be1f69b.js
// deps: 30, 38, 89
const module_493 = function (webpackModule, webpackExports, webpackRequire) {
  var vendorBundle = webpackRequire(30),
    vendorBundle2 = webpackRequire(38),
    vendorBundle3 = webpackRequire(89),
    ITERATOR = vendorBundle2("iterator");
  webpackModule.exports = !vendorBundle(function () {
    var url = new URL("b?a=1&b=2&c=3", "http://a"),
      searchParams = url.searchParams,
      result = "";
    return (
      (url.pathname = "c%20d"),
      searchParams.forEach(function (value, key) {
        (searchParams.delete("b"), (result += key + value));
      }),
      (vendorBundle3 && !url.toJSON) ||
        !searchParams.sort ||
        "http://a/c%20d?a=1&c=3" !== url.href ||
        "3" !== searchParams.get("c") ||
        "a=1" !== String(new URLSearchParams("?a=1")) ||
        !searchParams[ITERATOR] ||
        "a" !== new URL("https://a@b").username ||
        "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
        "xn--e1aybc" !== new URL("http://тест").host ||
        "#%D0%B1" !== new URL("http://a#б").hash ||
        "a1c3" !== result ||
        "x" !== new URL("http://x", void 0).host
    );
  });
};
