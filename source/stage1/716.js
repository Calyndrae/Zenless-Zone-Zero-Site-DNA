// content-length (component) — module 716 from 2e4935f
// module 716 from 2e4935f.js
// deps: 73
const module_716 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(73),
    o_1 = [
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
  webpackModule.exports = function (t_2) {
    var e_3,
      n_4,
      i_5,
      c_6 = {};
    return t_2
      ? (vendorBundle.forEach(t_2.split("\n"), function (line) {
          if (
            ((i_5 = line.indexOf(":")),
            (e_3 = vendorBundle.trim(line.substr(0, i_5)).toLowerCase()),
            (n_4 = vendorBundle.trim(line.substr(i_5 + 1))),
            e_3)
          ) {
            if (c_6[e_3] && o_1.indexOf(e_3) >= 0) return;
            c_6[e_3] =
              "set-cookie" === e_3
                ? (c_6[e_3] ? c_6[e_3] : []).concat([n_4])
                : c_6[e_3]
                  ? c_6[e_3] + ", " + n_4
                  : n_4;
          }
        }),
        c_6)
      : c_6;
  };
};
