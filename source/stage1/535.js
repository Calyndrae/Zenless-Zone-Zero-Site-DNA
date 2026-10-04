// mhy-copy-input clipboard helper ($clipboard) — module 535 from be1f69b
// module 535 from be1f69b.js
// deps:
const module_535 = function (webpackModule, webpackExports, webpackRequire) {
  ("undefined" != typeof self && self,
    (webpackModule.exports = (function (e_1) {
      var t_2 = {};
      function n_3(r_4) {
        if (t_2[r_4]) return t_2[r_4].exports;
        var o_5 = (t_2[r_4] = {
          i: r_4,
          l: !1,
          exports: {},
        });
        return (e_1[r_4].call(o_5.exports, o_5, o_5.exports, n_3), (o_5.l = !0), o_5.exports);
      }
      return (
        (n_3.m = e_1),
        (n_3.c = t_2),
        (n_3.d = function (e_6, t_7, r_8) {
          n_3.o(e_6, t_7) ||
            Object.defineProperty(e_6, t_7, {
              enumerable: !0,
              get: r_8,
            });
        }),
        (n_3.r = function (e_9) {
          ("undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e_9, Symbol.toStringTag, {
              value: "Module",
            }),
            Object.defineProperty(e_9, "__esModule", {
              value: !0,
            }));
        }),
        (n_3.t = function (e_10, t_11) {
          if ((1 & t_11 && (e_10 = n_3(e_10)), 8 & t_11)) return e_10;
          if (4 & t_11 && "object" == typeof e_10 && e_10 && e_10.__esModule) return e_10;
          var r_12 = Object.create(null);
          if (
            (n_3.r(r_12),
            Object.defineProperty(r_12, "default", {
              enumerable: !0,
              value: e_10,
            }),
            2 & t_11 && "string" != typeof e_10)
          )
            for (var o_13 in e_10)
              n_3.d(
                r_12,
                o_13,
                function (t_14) {
                  return e_10[t_14];
                }.bind(null, o_13),
              );
          return r_12;
        }),
        (n_3.n = function (e_15) {
          var t_16 =
            e_15 && e_15.__esModule
              ? function () {
                  return e_15.default;
                }
              : function () {
                  return e_15;
                };
          return (n_3.d(t_16, "a", t_16), t_16);
        }),
        (n_3.o = function (e_17, t_18) {
          return Object.prototype.hasOwnProperty.call(e_17, t_18);
        }),
        (n_3.p = ""),
        n_3((n_3.s = 0))
      );
    })([
      function (e_19, t_20, n_21) {
        "use strict";

        function r_22(e_23) {
          var t_24 = e_23.text,
            n_25 = e_23.onSuccess,
            r_26 = e_23.onFail;
          try {
            var o_27 = document.createElement("input");
            if (
              ((o_27.className = "mhy-copy-input"),
              (o_27.style.fontSize = "14px"),
              o_27.setAttribute("readonly", "readonly"),
              o_27.setAttribute("value", t_24),
              document.body.appendChild(o_27),
              o_27.select(),
              o_27.setSelectionRange(0, o_27.value.length),
              !document.queryCommandSupported("copy"))
            )
              throw (document.body.removeChild(o_27), new Error("当前浏览器不支持 execCommand"));
            document.execCommand("copy")
              ? (document.body.removeChild(o_27), n_25())
              : (document.body.removeChild(o_27), r_26());
          } catch (e_28) {
            r_26(e_28);
          }
        }
        (Object.defineProperty(t_20, "__esModule", {
          value: !0,
        }),
          (r_22.install = function (e_29) {
            e_29.prototype.$clipboard = r_22;
          }),
          (t_20.default = r_22));
      },
    ]).default));
};
