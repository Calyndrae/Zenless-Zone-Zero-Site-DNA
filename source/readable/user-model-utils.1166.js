/**
 * user-model-utils — readable reconstruction of webpack module 1166 (chunk fd57a96.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/fd57a96.js
 *
 * User-model utility module. Exports GLB (window, or the global object from module 42 outside the browser), isSSR (no window or document), encode (strips URL punctuation such as http, :, ., /, ?, &, =, #, , to build cache keys), toUrlWithParams(url, params) which appends key=value pairs with ? or &, log which forwards to console.log only in the browser when the page URL contains "debug=", and getTimestamp returning the current Unix time in seconds.
 *
 * Exports (minified key → meaning):
 *   GLB → global object (window in the browser)
 *   isSSR → true when window/document are unavailable
 *   encode → encode(url) -> cache-key string with URL punctuation removed
 *   toUrlWithParams → toUrlWithParams(url, params) -> url with query string
 *   log → debug logger enabled by ?debug= in the URL
 *   getTimestamp → current time in seconds (ceil)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1166 from fd57a96.js
// deps: 138, 85, 42
const module_1166 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (function (globalObject) {
    (webpackRequire(138),
      webpackRequire(85),
      Object.defineProperty(webpackExports, "__esModule", {
        value: !0,
      }));
    webpackExports.GLB = "undefined" == typeof window ? globalObject : window;
    var isSSR = (webpackExports.isSSR = "undefined" == typeof window || "undefined" == typeof document);
    ((webpackExports.encode = function (url) {
      return url.replace(/(http|https|:|\.|\/|\?|&|=|#|,)/gi, "");
    }),
      (webpackExports.toUrlWithParams = function (baseUrl) {
        for (
          var params = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            pairs = [],
            paramKeys = Object.keys(params),
            index = 0,
            keyCount = paramKeys.length;
          index < keyCount;
          index++
        )
          pairs.push(paramKeys[index] + "=" + params[paramKeys[index]]);
        return pairs.length > 0
          ? baseUrl + (baseUrl.indexOf("?") > 1 ? "&" : "?") + pairs.join("&")
          : baseUrl;
      }),
      (webpackExports.log = function () {
        var consoleRef;
        !isSSR &&
          window.location.href.indexOf("debug=") > -1 &&
          (consoleRef = console).log.apply(consoleRef, arguments);
      }),
      (webpackExports.getTimestamp = function () {
        return Math.ceil(new Date().getTime() / 1e3);
      }));
  }).call(this, webpackRequire(42));
};
