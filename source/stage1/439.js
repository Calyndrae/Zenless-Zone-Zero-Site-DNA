// content-type (component) — module 439 from 2e4935f
// module 439 from 2e4935f.js
// deps: 73, 711, 712, 436, 713, 716, 717, 440, 438, 225
const module_439 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(73),
    vendorBundle2 = webpackRequire(711),
    vendorBundle3 = webpackRequire(712),
    vendorBundle4 = webpackRequire(436),
    vendorBundle5 = webpackRequire(713),
    contentLength = webpackRequire(716),
    vendorBundle6 = webpackRequire(717),
    vendorBundle7 = webpackRequire(440),
    vendorBundle8 = webpackRequire(438),
    vendorBundle9 = webpackRequire(225);
  webpackModule.exports = function (t_1) {
    return new Promise(function (e_2, n_3) {
      var __4,
        w_5 = t_1.data,
        x_6 = t_1.headers,
        O_7 = t_1.responseType;
      function S_8() {
        (t_1.cancelToken && t_1.cancelToken.unsubscribe(__4),
          t_1.signal && t_1.signal.removeEventListener("abort", __4));
      }
      vendorBundle.isFormData(w_5) && delete x_6["Content-Type"];
      var E_9 = new XMLHttpRequest();
      if (t_1.auth) {
        var C_10 = t_1.auth.username || "",
          k_11 = t_1.auth.password ? unescape(encodeURIComponent(t_1.auth.password)) : "";
        x_6.Authorization = "Basic " + btoa(C_10 + ":" + k_11);
      }
      var A_12 = vendorBundle5(t_1.baseURL, t_1.url);
      function T_13() {
        if (E_9) {
          var r_15 = "getAllResponseHeaders" in E_9 ? contentLength(E_9.getAllResponseHeaders()) : null,
            c_16 = {
              data: O_7 && "text" !== O_7 && "json" !== O_7 ? E_9.response : E_9.responseText,
              status: E_9.status,
              statusText: E_9.statusText,
              headers: r_15,
              config: t_1,
              request: E_9,
            };
          (vendorBundle2(
            function (t_17) {
              (e_2(t_17), S_8());
            },
            function (t_18) {
              (n_3(t_18), S_8());
            },
            c_16,
          ),
            (E_9 = null));
        }
      }
      if (
        (E_9.open(t_1.method.toUpperCase(), vendorBundle4(A_12, t_1.params, t_1.paramsSerializer), !0),
        (E_9.timeout = t_1.timeout),
        "onloadend" in E_9
          ? (E_9.onloadend = T_13)
          : (E_9.onreadystatechange = function () {
              E_9 &&
                4 === E_9.readyState &&
                (0 !== E_9.status || (E_9.responseURL && 0 === E_9.responseURL.indexOf("file:"))) &&
                setTimeout(T_13);
            }),
        (E_9.onabort = function () {
          E_9 && (n_3(vendorBundle7("Request aborted", t_1, "ECONNABORTED", E_9)), (E_9 = null));
        }),
        (E_9.onerror = function () {
          (n_3(vendorBundle7("Network Error", t_1, null, E_9)), (E_9 = null));
        }),
        (E_9.ontimeout = function () {
          var e_19 = t_1.timeout ? "timeout of " + t_1.timeout + "ms exceeded" : "timeout exceeded",
            r_20 = t_1.transitional || vendorBundle8;
          (t_1.timeoutErrorMessage && (e_19 = t_1.timeoutErrorMessage),
            n_3(vendorBundle7(e_19, t_1, r_20.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", E_9)),
            (E_9 = null));
        }),
        vendorBundle.isStandardBrowserEnv())
      ) {
        var j_14 =
          (t_1.withCredentials || vendorBundle6(A_12)) && t_1.xsrfCookieName
            ? vendorBundle3.read(t_1.xsrfCookieName)
            : void 0;
        j_14 && (x_6[t_1.xsrfHeaderName] = j_14);
      }
      ("setRequestHeader" in E_9 &&
        vendorBundle.forEach(x_6, function (t_21, e_22) {
          void 0 === w_5 && "content-type" === e_22.toLowerCase()
            ? delete x_6[e_22]
            : E_9.setRequestHeader(e_22, t_21);
        }),
        vendorBundle.isUndefined(t_1.withCredentials) || (E_9.withCredentials = !!t_1.withCredentials),
        O_7 && "json" !== O_7 && (E_9.responseType = t_1.responseType),
        "function" == typeof t_1.onDownloadProgress &&
          E_9.addEventListener("progress", t_1.onDownloadProgress),
        "function" == typeof t_1.onUploadProgress &&
          E_9.upload &&
          E_9.upload.addEventListener("progress", t_1.onUploadProgress),
        (t_1.cancelToken || t_1.signal) &&
          ((__4 = function (t_23) {
            E_9 &&
              (n_3(!t_23 || (t_23 && t_23.type) ? new vendorBundle9("canceled") : t_23),
              E_9.abort(),
              (E_9 = null));
          }),
          t_1.cancelToken && t_1.cancelToken.subscribe(__4),
          t_1.signal && (t_1.signal.aborted ? __4() : t_1.signal.addEventListener("abort", __4))),
        w_5 || (w_5 = null),
        E_9.send(w_5));
    });
  };
};
