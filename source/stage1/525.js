// set-cookie (component) — module 525 from be1f69b
// module 525 from be1f69b.js
// deps:
const module_525 = function (webpackModule, webpackExports) {
  webpackModule.exports = (function (e_1) {
    function t_2(r_4) {
      if (n_3[r_4]) return n_3[r_4].exports;
      var o_5 = (n_3[r_4] = {
        i: r_4,
        l: !1,
        exports: {},
      });
      return (e_1[r_4].call(o_5.exports, o_5, o_5.exports, t_2), (o_5.l = !0), o_5.exports);
    }
    var n_3 = {};
    return (
      (t_2.m = e_1),
      (t_2.c = n_3),
      (t_2.d = function (e_6, n_7, r_8) {
        t_2.o(e_6, n_7) ||
          Object.defineProperty(e_6, n_7, {
            configurable: !1,
            enumerable: !0,
            get: r_8,
          });
      }),
      (t_2.n = function (e_9) {
        var n_10 =
          e_9 && e_9.__esModule
            ? function () {
                return e_9.default;
              }
            : function () {
                return e_9;
              };
        return (t_2.d(n_10, "a", n_10), n_10);
      }),
      (t_2.o = function (e_11, t_12) {
        return Object.prototype.hasOwnProperty.call(e_11, t_12);
      }),
      (t_2.p = ""),
      t_2((t_2.s = 0))
    );
  })([
    function (e_13, t_14, n_15) {
      "use strict";

      var r_16 =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e_18) {
                return typeof e_18;
              }
            : function (e_19) {
                return e_19 &&
                  "function" == typeof Symbol &&
                  e_19.constructor === Symbol &&
                  e_19 !== Symbol.prototype
                  ? "symbol"
                  : typeof e_19;
              },
        o_17 = n_15(1);
      e_13.exports = function (t_20, n_21) {
        var i_22 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          a_23 =
            "object" === ("undefined" == typeof document ? "undefined" : r_16(document)) &&
            "string" == typeof document.cookie,
          s_24 =
            "object" === (void 0 === t_20 ? "undefined" : r_16(t_20)) &&
            "object" === (void 0 === n_21 ? "undefined" : r_16(n_21)) &&
            void 0 !== e_13,
          u_25 = (!a_23 && !s_24) || (a_23 && s_24),
          c_26 = function (e_31) {
            if (s_24) {
              var r_32 = t_20.headers.cookie || "";
              return (
                e_31 &&
                  (r_32 = (r_32 = n_21.getHeaders())["set-cookie"]
                    ? r_32["set-cookie"]
                        .map(function (e_33) {
                          return e_33.split(";")[0];
                        })
                        .join(";")
                    : ""),
                r_32
              );
            }
            if (a_23) return document.cookie || "";
          },
          l_27 = function () {
            var e_34 = n_21.getHeader("Set-Cookie");
            return (e_34 = "string" == typeof e_34 ? [e_34] : e_34) || [];
          },
          p_28 = function (e_35) {
            return n_21.setHeader("Set-Cookie", e_35);
          },
          f_29 = function (e_36, t_37) {
            if (!t_37) return e_36;
            try {
              return JSON.parse(e_36);
            } catch (t_38) {
              return e_36;
            }
          },
          d_30 = {
            parseJSON: i_22,
            set: function () {
              var e_39 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t_40 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n_41 =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {
                        path: "/",
                      };
              if (!u_25)
                if (
                  ((t_40 =
                    "object" === (void 0 === t_40 ? "undefined" : r_16(t_40)) ? JSON.stringify(t_40) : t_40),
                  s_24)
                ) {
                  var i_42 = l_27();
                  (i_42.push(o_17.serialize(e_39, t_40, n_41)), p_28(i_42));
                } else document.cookie = o_17.serialize(e_39, t_40, n_41);
            },
            setAll: function () {
              var e_43 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
              u_25 ||
                (Array.isArray(e_43) &&
                  e_43.forEach(function (e_44) {
                    var t_45 = e_44.name,
                      n_46 = void 0 === t_45 ? "" : t_45,
                      r_47 = e_44.value,
                      o_48 = void 0 === r_47 ? "" : r_47,
                      i_49 = e_44.opts,
                      a_50 =
                        void 0 === i_49
                          ? {
                              path: "/",
                            }
                          : i_49;
                    d_30.set(n_46, o_48, a_50);
                  }));
            },
            get: function () {
              var e_51 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t_52 =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                        fromRes: !1,
                        parseJSON: d_30.parseJSON,
                      };
              if (u_25) return "";
              var n_53 = o_17.parse(c_26(t_52.fromRes)),
                r_54 = n_53[e_51];
              return f_29(r_54, t_52.parseJSON);
            },
            getAll: function () {
              var e_55 =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {
                      fromRes: !1,
                      parseJSON: d_30.parseJSON,
                    };
              if (u_25) return {};
              var t_56 = o_17.parse(c_26(e_55.fromRes));
              for (var n_57 in t_56) t_56[n_57] = f_29(t_56[n_57], e_55.parseJSON);
              return t_56;
            },
            remove: function () {
              var e_58 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t_59 =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                        path: "/",
                      };
              u_25 || ((t_59.expires = new Date(0)), d_30.set(e_58, "", t_59));
            },
            removeAll: function () {
              var e_60 =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {
                      path: "/",
                    };
              if (!u_25) {
                var t_61 = o_17.parse(c_26());
                for (var n_62 in t_61) d_30.remove(n_62, e_60);
              }
            },
            nodeCookie: o_17,
          };
        return d_30;
      };
    },
    function (e_63, t_64, n_65) {
      "use strict";

      function i_66(e_71, t_72) {
        try {
          return t_72(e_71);
        } catch (t_73) {
          return e_71;
        }
      }
      ((t_64.parse = function (e_74, t_75) {
        if ("string" != typeof e_74) throw new TypeError("argument str must be a string");
        for (
          var n_76 = {}, r_77 = t_75 || {}, o_78 = e_74.split(u_69), s_79 = r_77.decode || a_67, c_80 = 0;
          c_80 < o_78.length;
          c_80++
        ) {
          var l_81 = o_78[c_80],
            p_82 = l_81.indexOf("=");
          if (!(p_82 < 0)) {
            var f_83 = l_81.substr(0, p_82).trim(),
              d_84 = l_81.substr(++p_82, l_81.length).trim();
            ('"' == d_84[0] && (d_84 = d_84.slice(1, -1)),
              null == n_76[f_83] && (n_76[f_83] = i_66(d_84, s_79)));
          }
        }
        return n_76;
      }),
        (t_64.serialize = function (e_85, t_86, n_87) {
          var o_88 = n_87 || {},
            c_89 = o_88.encode || s_68;
          if ("function" != typeof c_89) throw new TypeError("option encode is invalid");
          if (!r_70.test(e_85)) throw new TypeError("argument name is invalid");
          var i_90 = c_89(t_86);
          if (i_90 && !r_70.test(i_90)) throw new TypeError("argument val is invalid");
          var a_91 = e_85 + "=" + i_90;
          if (null != o_88.maxAge) {
            var u_92 = o_88.maxAge - 0;
            if (isNaN(u_92)) throw new Error("maxAge should be a Number");
            a_91 += "; Max-Age=" + Math.floor(u_92);
          }
          if (o_88.domain) {
            if (!r_70.test(o_88.domain)) throw new TypeError("option domain is invalid");
            a_91 += "; Domain=" + o_88.domain;
          }
          if (o_88.path) {
            if (!r_70.test(o_88.path)) throw new TypeError("option path is invalid");
            a_91 += "; Path=" + o_88.path;
          }
          if (o_88.expires) {
            if ("function" != typeof o_88.expires.toUTCString)
              throw new TypeError("option expires is invalid");
            a_91 += "; Expires=" + o_88.expires.toUTCString();
          }
          if ((o_88.httpOnly && (a_91 += "; HttpOnly"), o_88.secure && (a_91 += "; Secure"), o_88.sameSite))
            switch ("string" == typeof o_88.sameSite ? o_88.sameSite.toLowerCase() : o_88.sameSite) {
              case !0:
                a_91 += "; SameSite=Strict";
                break;
              case "lax":
                a_91 += "; SameSite=Lax";
                break;
              case "strict":
                a_91 += "; SameSite=Strict";
                break;
              case "none":
                a_91 += "; SameSite=None";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
          return a_91;
        }));
      var a_67 = decodeURIComponent,
        s_68 = encodeURIComponent,
        u_69 = /; */,
        r_70 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    },
  ]);
};
