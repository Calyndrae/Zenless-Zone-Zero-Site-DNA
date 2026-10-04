// iso-8859-1 (component) — module 398 from be1f69b
// module 398 from be1f69b.js
// deps: 292
const module_398 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(292),
    o_1 = Object.prototype.hasOwnProperty,
    c_2 = Array.isArray,
    l_3 = (function () {
      for (var e_5 = [], i_6 = 0; i_6 < 256; ++i_6)
        e_5.push("%" + ((i_6 < 16 ? "0" : "") + i_6.toString(16)).toUpperCase());
      return e_5;
    })(),
    f_4 = function (source, e_7) {
      for (var t_8 = e_7 && e_7.plainObjects ? Object.create(null) : {}, i_9 = 0; i_9 < source.length; ++i_9)
        void 0 !== source[i_9] && (t_8[i_9] = source[i_9]);
      return t_8;
    };
  webpackModule.exports = {
    arrayToObject: f_4,
    assign: function (e_10, source) {
      return Object.keys(source).reduce(function (e_11, t_12) {
        return ((e_11[t_12] = source[t_12]), e_11);
      }, e_10);
    },
    combine: function (a_13, b_14) {
      return [].concat(a_13, b_14);
    },
    compact: function (e_15) {
      for (
        var t_16 = [
            {
              obj: {
                o: e_15,
              },
              prop: "o",
            },
          ],
          n_17 = [],
          i_18 = 0;
        i_18 < t_16.length;
        ++i_18
      )
        for (
          var r_19 = t_16[i_18], o_20 = r_19.obj[r_19.prop], l_21 = Object.keys(o_20), f_22 = 0;
          f_22 < l_21.length;
          ++f_22
        ) {
          var d_23 = l_21[f_22],
            h_24 = o_20[d_23];
          "object" == typeof h_24 &&
            null !== h_24 &&
            -1 === n_17.indexOf(h_24) &&
            (t_16.push({
              obj: o_20,
              prop: d_23,
            }),
            n_17.push(h_24));
        }
      return (
        (function (e_25) {
          for (; e_25.length > 1;) {
            var t_26 = e_25.pop(),
              n_27 = t_26.obj[t_26.prop];
            if (c_2(n_27)) {
              for (var r_28 = [], o_29 = 0; o_29 < n_27.length; ++o_29)
                void 0 !== n_27[o_29] && r_28.push(n_27[o_29]);
              t_26.obj[t_26.prop] = r_28;
            }
          }
        })(t_16),
        e_15
      );
    },
    decode: function (e_30, t_31, n_32) {
      var r_33 = e_30.replace(/\+/g, " ");
      if ("iso-8859-1" === n_32) return r_33.replace(/%[0-9a-f]{2}/gi, unescape);
      try {
        return decodeURIComponent(r_33);
      } catch (e_34) {
        return r_33;
      }
    },
    encode: function (e_35, t_36, n_37, o_38, c_39) {
      if (0 === e_35.length) return e_35;
      var f_40 = e_35;
      if (
        ("symbol" == typeof e_35
          ? (f_40 = Symbol.prototype.toString.call(e_35))
          : "string" != typeof e_35 && (f_40 = String(e_35)),
        "iso-8859-1" === n_37)
      )
        return escape(f_40).replace(/%u[0-9a-f]{4}/gi, function (e_44) {
          return "%26%23" + parseInt(e_44.slice(2), 16) + "%3B";
        });
      for (var d_41 = "", i_42 = 0; i_42 < f_40.length; ++i_42) {
        var h_43 = f_40.charCodeAt(i_42);
        45 === h_43 ||
        46 === h_43 ||
        95 === h_43 ||
        126 === h_43 ||
        (h_43 >= 48 && h_43 <= 57) ||
        (h_43 >= 65 && h_43 <= 90) ||
        (h_43 >= 97 && h_43 <= 122) ||
        (c_39 === vendorBundle.RFC1738 && (40 === h_43 || 41 === h_43))
          ? (d_41 += f_40.charAt(i_42))
          : h_43 < 128
            ? (d_41 += l_3[h_43])
            : h_43 < 2048
              ? (d_41 += l_3[192 | (h_43 >> 6)] + l_3[128 | (63 & h_43)])
              : h_43 < 55296 || h_43 >= 57344
                ? (d_41 += l_3[224 | (h_43 >> 12)] + l_3[128 | ((h_43 >> 6) & 63)] + l_3[128 | (63 & h_43)])
                : ((i_42 += 1),
                  (h_43 = 65536 + (((1023 & h_43) << 10) | (1023 & f_40.charCodeAt(i_42)))),
                  (d_41 +=
                    l_3[240 | (h_43 >> 18)] +
                    l_3[128 | ((h_43 >> 12) & 63)] +
                    l_3[128 | ((h_43 >> 6) & 63)] +
                    l_3[128 | (63 & h_43)]));
      }
      return d_41;
    },
    isBuffer: function (e_45) {
      return (
        !(!e_45 || "object" != typeof e_45) &&
        !!(e_45.constructor && e_45.constructor.isBuffer && e_45.constructor.isBuffer(e_45))
      );
    },
    isRegExp: function (e_46) {
      return "[object RegExp]" === Object.prototype.toString.call(e_46);
    },
    maybeMap: function (e_47, t_48) {
      if (c_2(e_47)) {
        for (var n_49 = [], i_50 = 0; i_50 < e_47.length; i_50 += 1) n_49.push(t_48(e_47[i_50]));
        return n_49;
      }
      return t_48(e_47);
    },
    merge: function e_53(t_51, source, n_52) {
      if (!source) return t_51;
      if ("object" != typeof source) {
        if (c_2(t_51)) t_51.push(source);
        else {
          if (!t_51 || "object" != typeof t_51) return [t_51, source];
          ((n_52 && (n_52.plainObjects || n_52.allowPrototypes)) || !o_1.call(Object.prototype, source)) &&
            (t_51[source] = !0);
        }
        return t_51;
      }
      if (!t_51 || "object" != typeof t_51) return [t_51].concat(source);
      var r_54 = t_51;
      return (
        c_2(t_51) && !c_2(source) && (r_54 = f_4(t_51, n_52)),
        c_2(t_51) && c_2(source)
          ? (source.forEach(function (r_55, i_56) {
              if (o_1.call(t_51, i_56)) {
                var c_57 = t_51[i_56];
                c_57 && "object" == typeof c_57 && r_55 && "object" == typeof r_55
                  ? (t_51[i_56] = e_53(c_57, r_55, n_52))
                  : t_51.push(r_55);
              } else t_51[i_56] = r_55;
            }),
            t_51)
          : Object.keys(source).reduce(function (t_58, r_59) {
              var c_60 = source[r_59];
              return (
                o_1.call(t_58, r_59) ? (t_58[r_59] = e_53(t_58[r_59], c_60, n_52)) : (t_58[r_59] = c_60),
                t_58
              );
            }, r_54)
      );
    },
  };
};
