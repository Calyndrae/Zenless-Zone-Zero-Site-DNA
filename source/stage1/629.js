// utf-8 (component) — module 629 from be1f69b
// module 629 from be1f69b.js
// deps: 398
const module_629 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var iso88591 = webpackRequire(398),
    o_1 = Object.prototype.hasOwnProperty,
    c_2 = Array.isArray,
    l_3 = {
      allowDots: !1,
      allowPrototypes: !1,
      allowSparse: !1,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: !1,
      comma: !1,
      decoder: iso88591.decode,
      delimiter: "&",
      depth: 5,
      ignoreQueryPrefix: !1,
      interpretNumericEntities: !1,
      parameterLimit: 1e3,
      parseArrays: !0,
      plainObjects: !1,
      strictNullHandling: !1,
    },
    f_4 = function (e_7) {
      return e_7.replace(/&#(\d+);/g, function (e_8, t_9) {
        return String.fromCharCode(parseInt(t_9, 10));
      });
    },
    d_5 = function (e_10, t_11) {
      return e_10 && "string" == typeof e_10 && t_11.comma && e_10.indexOf(",") > -1 ? e_10.split(",") : e_10;
    },
    h_6 = function (e_12, t_13, n_14, r_15) {
      if (e_12) {
        var c_16 = n_14.allowDots ? e_12.replace(/\.([^.[]+)/g, "[$1]") : e_12,
          l_17 = /(\[[^[\]]*])/g,
          f_18 = n_14.depth > 0 && /(\[[^[\]]*])/.exec(c_16),
          h_19 = f_18 ? c_16.slice(0, f_18.index) : c_16,
          m_20 = [];
        if (h_19) {
          if (!n_14.plainObjects && o_1.call(Object.prototype, h_19) && !n_14.allowPrototypes) return;
          m_20.push(h_19);
        }
        for (var i_21 = 0; n_14.depth > 0 && null !== (f_18 = l_17.exec(c_16)) && i_21 < n_14.depth;) {
          if (
            ((i_21 += 1),
            !n_14.plainObjects && o_1.call(Object.prototype, f_18[1].slice(1, -1)) && !n_14.allowPrototypes)
          )
            return;
          m_20.push(f_18[1]);
        }
        return (
          f_18 && m_20.push("[" + c_16.slice(f_18.index) + "]"),
          (function (e_22, t_23, n_24, r_25) {
            for (var o_26 = r_25 ? t_23 : d_5(t_23, n_24), i_27 = e_22.length - 1; i_27 >= 0; --i_27) {
              var c_28,
                l_29 = e_22[i_27];
              if ("[]" === l_29 && n_24.parseArrays) c_28 = [].concat(o_26);
              else {
                c_28 = n_24.plainObjects ? Object.create(null) : {};
                var f_30 =
                    "[" === l_29.charAt(0) && "]" === l_29.charAt(l_29.length - 1) ? l_29.slice(1, -1) : l_29,
                  h_31 = parseInt(f_30, 10);
                n_24.parseArrays || "" !== f_30
                  ? !isNaN(h_31) &&
                    l_29 !== f_30 &&
                    String(h_31) === f_30 &&
                    h_31 >= 0 &&
                    n_24.parseArrays &&
                    h_31 <= n_24.arrayLimit
                    ? ((c_28 = [])[h_31] = o_26)
                    : "__proto__" !== f_30 && (c_28[f_30] = o_26)
                  : (c_28 = {
                      0: o_26,
                    });
              }
              o_26 = c_28;
            }
            return o_26;
          })(m_20, t_13, n_14, r_15)
        );
      }
    };
  webpackModule.exports = function (e_32, t_33) {
    var n_34 = (function (e_41) {
      if (!e_41) return l_3;
      if (null !== e_41.decoder && void 0 !== e_41.decoder && "function" != typeof e_41.decoder)
        throw new TypeError("Decoder has to be a function.");
      if (void 0 !== e_41.charset && "utf-8" !== e_41.charset && "iso-8859-1" !== e_41.charset)
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      var t_42 = void 0 === e_41.charset ? l_3.charset : e_41.charset;
      return {
        allowDots: void 0 === e_41.allowDots ? l_3.allowDots : !!e_41.allowDots,
        allowPrototypes:
          "boolean" == typeof e_41.allowPrototypes ? e_41.allowPrototypes : l_3.allowPrototypes,
        allowSparse: "boolean" == typeof e_41.allowSparse ? e_41.allowSparse : l_3.allowSparse,
        arrayLimit: "number" == typeof e_41.arrayLimit ? e_41.arrayLimit : l_3.arrayLimit,
        charset: t_42,
        charsetSentinel:
          "boolean" == typeof e_41.charsetSentinel ? e_41.charsetSentinel : l_3.charsetSentinel,
        comma: "boolean" == typeof e_41.comma ? e_41.comma : l_3.comma,
        decoder: "function" == typeof e_41.decoder ? e_41.decoder : l_3.decoder,
        delimiter:
          "string" == typeof e_41.delimiter || iso88591.isRegExp(e_41.delimiter)
            ? e_41.delimiter
            : l_3.delimiter,
        depth: "number" == typeof e_41.depth || !1 === e_41.depth ? +e_41.depth : l_3.depth,
        ignoreQueryPrefix: !0 === e_41.ignoreQueryPrefix,
        interpretNumericEntities:
          "boolean" == typeof e_41.interpretNumericEntities
            ? e_41.interpretNumericEntities
            : l_3.interpretNumericEntities,
        parameterLimit: "number" == typeof e_41.parameterLimit ? e_41.parameterLimit : l_3.parameterLimit,
        parseArrays: !1 !== e_41.parseArrays,
        plainObjects: "boolean" == typeof e_41.plainObjects ? e_41.plainObjects : l_3.plainObjects,
        strictNullHandling:
          "boolean" == typeof e_41.strictNullHandling ? e_41.strictNullHandling : l_3.strictNullHandling,
      };
    })(t_33);
    if ("" === e_32 || null == e_32) return n_34.plainObjects ? Object.create(null) : {};
    for (
      var m_35 =
          "string" == typeof e_32
            ? (function (e_43, t_44) {
                var i_45,
                  n_46 = {},
                  h_47 = t_44.ignoreQueryPrefix ? e_43.replace(/^\?/, "") : e_43,
                  m_48 = t_44.parameterLimit === 1 / 0 ? void 0 : t_44.parameterLimit,
                  v_49 = h_47.split(t_44.delimiter, m_48),
                  y_50 = -1,
                  w_51 = t_44.charset;
                if (t_44.charsetSentinel)
                  for (i_45 = 0; i_45 < v_49.length; ++i_45)
                    0 === v_49[i_45].indexOf("utf8=") &&
                      ("utf8=%E2%9C%93" === v_49[i_45]
                        ? (w_51 = "utf-8")
                        : "utf8=%26%2310003%3B" === v_49[i_45] && (w_51 = "iso-8859-1"),
                      (y_50 = i_45),
                      (i_45 = v_49.length));
                for (i_45 = 0; i_45 < v_49.length; ++i_45)
                  if (i_45 !== y_50) {
                    var __52,
                      k_53,
                      x_54 = v_49[i_45],
                      S_55 = x_54.indexOf("]="),
                      A_56 = -1 === S_55 ? x_54.indexOf("=") : S_55 + 1;
                    (-1 === A_56
                      ? ((__52 = t_44.decoder(x_54, l_3.decoder, w_51, "key")),
                        (k_53 = t_44.strictNullHandling ? null : ""))
                      : ((__52 = t_44.decoder(x_54.slice(0, A_56), l_3.decoder, w_51, "key")),
                        (k_53 = iso88591.maybeMap(d_5(x_54.slice(A_56 + 1), t_44), function (e_57) {
                          return t_44.decoder(e_57, l_3.decoder, w_51, "value");
                        }))),
                      k_53 && t_44.interpretNumericEntities && "iso-8859-1" === w_51 && (k_53 = f_4(k_53)),
                      x_54.indexOf("[]=") > -1 && (k_53 = c_2(k_53) ? [k_53] : k_53),
                      o_1.call(n_46, __52)
                        ? (n_46[__52] = iso88591.combine(n_46[__52], k_53))
                        : (n_46[__52] = k_53));
                  }
                return n_46;
              })(e_32, n_34)
            : e_32,
        v_36 = n_34.plainObjects ? Object.create(null) : {},
        y_37 = Object.keys(m_35),
        i_38 = 0;
      i_38 < y_37.length;
      ++i_38
    ) {
      var w_39 = y_37[i_38],
        __40 = h_6(w_39, m_35[w_39], n_34, "string" == typeof e_32);
      v_36 = iso88591.merge(v_36, __40, n_34);
    }
    return !0 === n_34.allowSparse ? v_36 : iso88591.compact(v_36);
  };
};
