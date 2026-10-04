// content-type (component) — module 397 from be1f69b
// module 397 from be1f69b.js
// deps: 618, 630
const module_397 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackExports.__esModule = !0;
  var vendorBundle = webpackRequire(618),
    vendorBundle2 = webpackRequire(630),
    c_1 = FormData;
  function l_2(e_3, t_4, n_5) {
    var c_6,
      l_7 = new XMLHttpRequest();
    if ("string" != typeof e_3) throw new TypeError("The method must be a string.");
    if ((t_4 && "object" == typeof t_4 && (t_4 = t_4.href), "string" != typeof t_4))
      throw new TypeError("The URL/path must be a string.");
    if ((null == n_5 && (n_5 = {}), "object" != typeof n_5))
      throw new TypeError("Options must be an object (or null).");
    ((e_3 = e_3.toUpperCase()), (n_5.headers = n_5.headers || {}));
    var f_8 = !(!(c_6 = /^([\w-]+:)?\/\/([^\/]+)/.exec(t_4)) || c_6[2] == location.host);
    for (var d_9 in (f_8 || (n_5.headers["X-Requested-With"] = "XMLHttpRequest"),
    n_5.qs && (t_4 = vendorBundle.default(t_4, n_5.qs)),
    n_5.json && ((n_5.body = JSON.stringify(n_5.json)), (n_5.headers["content-type"] = "application/json")),
    n_5.form && (n_5.body = n_5.form),
    l_7.open(e_3, t_4, !1),
    n_5.headers))
      l_7.setRequestHeader(d_9.toLowerCase(), "" + n_5.headers[d_9]);
    l_7.send(n_5.body ? n_5.body : null);
    var h_10 = {};
    return (
      l_7
        .getAllResponseHeaders()
        .split("\r\n")
        .forEach(function (header) {
          var e_11 = header.split(":");
          e_11.length > 1 && (h_10[e_11[0].toLowerCase()] = e_11.slice(1).join(":").trim());
        }),
      new vendorBundle2(l_7.status, h_10, l_7.responseText, t_4)
    );
  }
  ((webpackExports.FormData = c_1),
    (webpackExports.default = l_2),
    (webpackModule.exports = l_2),
    (webpackModule.exports.default = l_2),
    (webpackModule.exports.FormData = c_1));
};
