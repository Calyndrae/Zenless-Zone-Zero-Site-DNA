/**
 * sync-request-browser-XHR — readable reconstruction of webpack module 397 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * Browser implementation of the `sync-request` library. It exports a `doRequest(method, url, options)` function that validates its arguments, appends `options.qs` via a query-string helper (module 618), sets `X-Requested-With: XMLHttpRequest` for same-origin requests, serializes `options.json` (with `content-type: application/json`) or `options.form` as the body, performs a synchronous `XMLHttpRequest`, parses the raw response headers and returns an http-response-object (module 630) with status, headers, body text and URL. It also re-exports the global `FormData`.
 *
 * Exports (minified key → meaning):
 *   default → doRequest(method, url, options) — synchronous XHR request returning a Response object
 *   module.exports → doRequest (also exposed as .default and .FormData)
 *   FormData → the global FormData constructor
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 397 from be1f69b.js
// deps: 618, 630
const module_397 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackExports.__esModule = !0;
  var vendorBundle = webpackRequire(618),
    vendorBundle2 = webpackRequire(630),
    FormDataCtor = FormData;
  function doRequest(method, url, options) {
    var hostMatch,
      xhr = new XMLHttpRequest();
    if ("string" != typeof method) throw new TypeError("The method must be a string.");
    if ((url && "object" == typeof url && (url = url.href), "string" != typeof url))
      throw new TypeError("The URL/path must be a string.");
    if ((null == options && (options = {}), "object" != typeof options))
      throw new TypeError("Options must be an object (or null).");
    ((method = method.toUpperCase()), (options.headers = options.headers || {}));
    var crossDomain = !(!(hostMatch = /^([\w-]+:)?\/\/([^\/]+)/.exec(url)) || hostMatch[2] == location.host);
    for (var headerName in (crossDomain || (options.headers["X-Requested-With"] = "XMLHttpRequest"),
    options.qs && (url = vendorBundle.default(url, options.qs)),
    options.json &&
      ((options.body = JSON.stringify(options.json)), (options.headers["content-type"] = "application/json")),
    options.form && (options.body = options.form),
    xhr.open(method, url, !1),
    options.headers))
      xhr.setRequestHeader(headerName.toLowerCase(), "" + options.headers[headerName]);
    xhr.send(options.body ? options.body : null);
    var responseHeaders = {};
    return (
      xhr
        .getAllResponseHeaders()
        .split("\r\n")
        .forEach(function (header) {
          var headerParts = header.split(":");
          headerParts.length > 1 &&
            (responseHeaders[headerParts[0].toLowerCase()] = headerParts.slice(1).join(":").trim());
        }),
      new vendorBundle2(xhr.status, responseHeaders, xhr.responseText, url)
    );
  }
  ((webpackExports.FormData = FormDataCtor),
    (webpackExports.default = doRequest),
    (webpackModule.exports = doRequest),
    (webpackModule.exports.default = doRequest),
    (webpackModule.exports.FormData = FormDataCtor));
};
