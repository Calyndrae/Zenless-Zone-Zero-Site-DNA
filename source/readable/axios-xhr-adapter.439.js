/**
 * axios-xhr-adapter — readable reconstruction of webpack module 439 (chunk 2e4935f.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/2e4935f.js
 *
 * axios's browser XHR adapter (`lib/adapters/xhr.js`, CommonJS). It returns a Promise that builds an `XMLHttpRequest` from the request config: strips `Content-Type` for FormData, adds HTTP Basic `Authorization`, combines `baseURL`/`url` and serializes `params`, sets `timeout`, `withCredentials`, `responseType`, XSRF header from the cookie when same-origin or credentialed, request headers and progress listeners; on load it parses response headers and settles the promise via `settle`, rejects with `createError` on abort (`ECONNABORTED`), network error or timeout (`ETIMEDOUT` when `transitional.clarifyTimeoutError`), and supports cancellation through `cancelToken` and `AbortSignal` (rejecting with a `Cancel('canceled')`).
 *
 * Exports (minified key → meaning):
 *   module.exports → xhrAdapter(config) — performs the request and returns a Promise of the axios response
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 439 from 2e4935f.js
// deps: 73, 711, 712, 436, 713, 716, 717, 440, 438, 225
const module_439 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(73),
    vendorBundle2 = webpackRequire(711),
    vendorBundle3 = webpackRequire(712),
    vendorBundle4 = webpackRequire(436),
    vendorBundle5 = webpackRequire(713),
    axiosParseHeaders = webpackRequire(716),
    vendorBundle6 = webpackRequire(717),
    vendorBundle7 = webpackRequire(440),
    vendorBundle8 = webpackRequire(438),
    vendorBundle9 = webpackRequire(225);
  webpackModule.exports = function (config) {
    return new Promise(function (resolve, reject) {
      var onCanceled,
        requestData = config.data,
        requestHeaders = config.headers,
        responseType = config.responseType;
      function done() {
        (config.cancelToken && config.cancelToken.unsubscribe(onCanceled),
          config.signal && config.signal.removeEventListener("abort", onCanceled));
      }
      vendorBundle.isFormData(requestData) && delete requestHeaders["Content-Type"];
      var request = new XMLHttpRequest();
      if (config.auth) {
        var username = config.auth.username || "",
          password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
      }
      var fullPath = vendorBundle5(config.baseURL, config.url);
      function onloadend() {
        if (request) {
          var responseHeaders =
              "getAllResponseHeaders" in request ? axiosParseHeaders(request.getAllResponseHeaders()) : null,
            response = {
              data:
                responseType && "text" !== responseType && "json" !== responseType
                  ? request.response
                  : request.responseText,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config: config,
              request: request,
            };
          (vendorBundle2(
            function (settledValue) {
              (resolve(settledValue), done());
            },
            function (settledError) {
              (reject(settledError), done());
            },
            response,
          ),
            (request = null));
        }
      }
      if (
        (request.open(
          config.method.toUpperCase(),
          vendorBundle4(fullPath, config.params, config.paramsSerializer),
          !0,
        ),
        (request.timeout = config.timeout),
        "onloadend" in request
          ? (request.onloadend = onloadend)
          : (request.onreadystatechange = function () {
              request &&
                4 === request.readyState &&
                (0 !== request.status ||
                  (request.responseURL && 0 === request.responseURL.indexOf("file:"))) &&
                setTimeout(onloadend);
            }),
        (request.onabort = function () {
          request &&
            (reject(vendorBundle7("Request aborted", config, "ECONNABORTED", request)), (request = null));
        }),
        (request.onerror = function () {
          (reject(vendorBundle7("Network Error", config, null, request)), (request = null));
        }),
        (request.ontimeout = function () {
          var timeoutErrorMessage = config.timeout
              ? "timeout of " + config.timeout + "ms exceeded"
              : "timeout exceeded",
            transitional = config.transitional || vendorBundle8;
          (config.timeoutErrorMessage && (timeoutErrorMessage = config.timeoutErrorMessage),
            reject(
              vendorBundle7(
                timeoutErrorMessage,
                config,
                transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
                request,
              ),
            ),
            (request = null));
        }),
        vendorBundle.isStandardBrowserEnv())
      ) {
        var xsrfValue =
          (config.withCredentials || vendorBundle6(fullPath)) && config.xsrfCookieName
            ? vendorBundle3.read(config.xsrfCookieName)
            : void 0;
        xsrfValue && (requestHeaders[config.xsrfHeaderName] = xsrfValue);
      }
      ("setRequestHeader" in request &&
        vendorBundle.forEach(requestHeaders, function (headerValue, headerKey) {
          void 0 === requestData && "content-type" === headerKey.toLowerCase()
            ? delete requestHeaders[headerKey]
            : request.setRequestHeader(headerKey, headerValue);
        }),
        vendorBundle.isUndefined(config.withCredentials) ||
          (request.withCredentials = !!config.withCredentials),
        responseType && "json" !== responseType && (request.responseType = config.responseType),
        "function" == typeof config.onDownloadProgress &&
          request.addEventListener("progress", config.onDownloadProgress),
        "function" == typeof config.onUploadProgress &&
          request.upload &&
          request.upload.addEventListener("progress", config.onUploadProgress),
        (config.cancelToken || config.signal) &&
          ((onCanceled = function (cancel) {
            request &&
              (reject(!cancel || (cancel && cancel.type) ? new vendorBundle9("canceled") : cancel),
              request.abort(),
              (request = null));
          }),
          config.cancelToken && config.cancelToken.subscribe(onCanceled),
          config.signal &&
            (config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled))),
        requestData || (requestData = null),
        request.send(requestData));
    });
  };
};
