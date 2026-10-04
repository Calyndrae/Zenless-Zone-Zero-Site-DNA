/**
 * axios-parseHeaders — readable reconstruction of webpack module 716 (chunk 2e4935f.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/2e4935f.js
 *
 * Vendored axios helper parseHeaders (axios/lib/helpers/parseHeaders). It splits a raw HTTP response header string on newlines, trims and lower-cases each header name using axios utils (module 73), ignores duplicates of a fixed list of single-value headers (age, authorization, content-length, content-type, etag, ... user-agent), collects set-cookie into an array and joins other repeated headers with ", ".
 *
 * Exports (minified key → meaning):
 *   module.exports → parseHeaders(rawHeaders) -> parsed header object
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 716 from 2e4935f.js
// deps: 73
const module_716 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(73),
    ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ];
  webpackModule.exports = function (rawHeaders) {
    var headerKey,
      headerValue,
      colonIndex,
      parsed = {};
    return rawHeaders
      ? (vendorBundle.forEach(rawHeaders.split("\n"), function (line) {
          if (
            ((colonIndex = line.indexOf(":")),
            (headerKey = vendorBundle.trim(line.substr(0, colonIndex)).toLowerCase()),
            (headerValue = vendorBundle.trim(line.substr(colonIndex + 1))),
            headerKey)
          ) {
            if (parsed[headerKey] && ignoreDuplicateOf.indexOf(headerKey) >= 0) return;
            parsed[headerKey] =
              "set-cookie" === headerKey
                ? (parsed[headerKey] ? parsed[headerKey] : []).concat([headerValue])
                : parsed[headerKey]
                  ? parsed[headerKey] + ", " + headerValue
                  : headerValue;
          }
        }),
        parsed)
      : parsed;
  };
};
