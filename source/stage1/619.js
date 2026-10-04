// utf-8 (component) — module 619 from be1f69b
// module 619 from be1f69b.js
// deps: 620, 398, 292
const module_619 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(620),
    iso88591 = webpackRequire(398),
    vendorBundle2 = webpackRequire(292),
    l_1 = Object.prototype.hasOwnProperty,
    f_2 = {
      brackets: function (e_12) {
        return e_12 + "[]";
      },
      comma: "comma",
      indices: function (e_13, t_14) {
        return e_13 + "[" + t_14 + "]";
      },
      repeat: function (e_15) {
        return e_15;
      },
    },
    d_3 = Array.isArray,
    h_4 = String.prototype.split,
    m_5 = Array.prototype.push,
    v_6 = function (e_16, t_17) {
      m_5.apply(e_16, d_3(t_17) ? t_17 : [t_17]);
    },
    y_7 = Date.prototype.toISOString,
    w_8 = vendorBundle2.default,
    __9 = {
      addQueryPrefix: !1,
      allowDots: !1,
      charset: "utf-8",
      charsetSentinel: !1,
      delimiter: "&",
      encode: !0,
      encoder: iso88591.encode,
      encodeValuesOnly: !1,
      format: w_8,
      formatter: vendorBundle2.formatters[w_8],
      indices: !1,
      serializeDate: function (e_18) {
        return y_7.call(e_18);
      },
      skipNulls: !1,
      strictNullHandling: !1,
    },
    k_10 = {},
    x_11 = function e_33(
      object,
      t_19,
      n_20,
      c_21,
      l_22,
      f_23,
      m_24,
      filter,
      y_25,
      w_26,
      x_27,
      S_28,
      A_29,
      C_30,
      E_31,
      O_32,
    ) {
      for (
        var T_34, P_35 = object, I_36 = O_32, L_37 = 0, j_38 = !1;
        void 0 !== (I_36 = I_36.get(k_10)) && !j_38;
      ) {
        var R_39 = I_36.get(object);
        if (((L_37 += 1), void 0 !== R_39)) {
          if (R_39 === L_37) throw new RangeError("Cyclic object value");
          j_38 = !0;
        }
        void 0 === I_36.get(k_10) && (L_37 = 0);
      }
      if (
        ("function" == typeof filter
          ? (P_35 = filter(t_19, P_35))
          : P_35 instanceof Date
            ? (P_35 = x_27(P_35))
            : "comma" === n_20 &&
              d_3(P_35) &&
              (P_35 = iso88591.maybeMap(P_35, function (e_53) {
                return e_53 instanceof Date ? x_27(e_53) : e_53;
              })),
        null === P_35)
      ) {
        if (l_22) return m_24 && !C_30 ? m_24(t_19, __9.encoder, E_31, "key", S_28) : t_19;
        P_35 = "";
      }
      if (
        "string" == typeof (T_34 = P_35) ||
        "number" == typeof T_34 ||
        "boolean" == typeof T_34 ||
        "symbol" == typeof T_34 ||
        "bigint" == typeof T_34 ||
        iso88591.isBuffer(P_35)
      ) {
        if (m_24) {
          var M_40 = C_30 ? t_19 : m_24(t_19, __9.encoder, E_31, "key", S_28);
          if ("comma" === n_20 && C_30) {
            for (var N_41 = h_4.call(String(P_35), ","), F_42 = "", i_43 = 0; i_43 < N_41.length; ++i_43)
              F_42 += (0 === i_43 ? "" : ",") + A_29(m_24(N_41[i_43], __9.encoder, E_31, "value", S_28));
            return [A_29(M_40) + (c_21 && d_3(P_35) && 1 === N_41.length ? "[]" : "") + "=" + F_42];
          }
          return [A_29(M_40) + "=" + A_29(m_24(P_35, __9.encoder, E_31, "value", S_28))];
        }
        return [A_29(t_19) + "=" + A_29(String(P_35))];
      }
      var D_44,
        B_45 = [];
      if (void 0 === P_35) return B_45;
      if ("comma" === n_20 && d_3(P_35))
        D_44 = [
          {
            value: P_35.length > 0 ? P_35.join(",") || null : void 0,
          },
        ];
      else if (d_3(filter)) D_44 = filter;
      else {
        var z_46 = Object.keys(P_35);
        D_44 = y_25 ? z_46.sort(y_25) : z_46;
      }
      for (
        var U_47 = c_21 && d_3(P_35) && 1 === P_35.length ? t_19 + "[]" : t_19, G_48 = 0;
        G_48 < D_44.length;
        ++G_48
      ) {
        var H_49 = D_44[G_48],
          W_50 = "object" == typeof H_49 && void 0 !== H_49.value ? H_49.value : P_35[H_49];
        if (!f_23 || null !== W_50) {
          var V_51 = d_3(P_35)
            ? "function" == typeof n_20
              ? n_20(U_47, H_49)
              : U_47
            : U_47 + (w_26 ? "." + H_49 : "[" + H_49 + "]");
          O_32.set(object, L_37);
          var Y_52 = vendorBundle();
          (Y_52.set(k_10, O_32),
            v_6(
              B_45,
              e_33(
                W_50,
                V_51,
                n_20,
                c_21,
                l_22,
                f_23,
                m_24,
                filter,
                y_25,
                w_26,
                x_27,
                S_28,
                A_29,
                C_30,
                E_31,
                Y_52,
              ),
            ));
        }
      }
      return B_45;
    };
  webpackModule.exports = function (object, e_54) {
    var t_55,
      n_56 = object,
      o_57 = (function (e_67) {
        if (!e_67) return __9;
        if (null !== e_67.encoder && void 0 !== e_67.encoder && "function" != typeof e_67.encoder)
          throw new TypeError("Encoder has to be a function.");
        var t_68 = e_67.charset || __9.charset;
        if (void 0 !== e_67.charset && "utf-8" !== e_67.charset && "iso-8859-1" !== e_67.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n_69 = vendorBundle2.default;
        if (void 0 !== e_67.format) {
          if (!l_1.call(vendorBundle2.formatters, e_67.format))
            throw new TypeError("Unknown format option provided.");
          n_69 = e_67.format;
        }
        var r_70 = vendorBundle2.formatters[n_69],
          filter = __9.filter;
        return (
          ("function" == typeof e_67.filter || d_3(e_67.filter)) && (filter = e_67.filter),
          {
            addQueryPrefix:
              "boolean" == typeof e_67.addQueryPrefix ? e_67.addQueryPrefix : __9.addQueryPrefix,
            allowDots: void 0 === e_67.allowDots ? __9.allowDots : !!e_67.allowDots,
            charset: t_68,
            charsetSentinel:
              "boolean" == typeof e_67.charsetSentinel ? e_67.charsetSentinel : __9.charsetSentinel,
            delimiter: void 0 === e_67.delimiter ? __9.delimiter : e_67.delimiter,
            encode: "boolean" == typeof e_67.encode ? e_67.encode : __9.encode,
            encoder: "function" == typeof e_67.encoder ? e_67.encoder : __9.encoder,
            encodeValuesOnly:
              "boolean" == typeof e_67.encodeValuesOnly ? e_67.encodeValuesOnly : __9.encodeValuesOnly,
            filter: filter,
            format: n_69,
            formatter: r_70,
            serializeDate: "function" == typeof e_67.serializeDate ? e_67.serializeDate : __9.serializeDate,
            skipNulls: "boolean" == typeof e_67.skipNulls ? e_67.skipNulls : __9.skipNulls,
            sort: "function" == typeof e_67.sort ? e_67.sort : null,
            strictNullHandling:
              "boolean" == typeof e_67.strictNullHandling ? e_67.strictNullHandling : __9.strictNullHandling,
          }
        );
      })(e_54);
    "function" == typeof o_57.filter
      ? (n_56 = (0, o_57.filter)("", n_56))
      : d_3(o_57.filter) && (t_55 = o_57.filter);
    var h_58,
      m_59 = [];
    if ("object" != typeof n_56 || null === n_56) return "";
    h_58 =
      e_54 && e_54.arrayFormat in f_2
        ? e_54.arrayFormat
        : e_54 && "indices" in e_54
          ? e_54.indices
            ? "indices"
            : "repeat"
          : "indices";
    var y_60 = f_2[h_58];
    if (e_54 && "commaRoundTrip" in e_54 && "boolean" != typeof e_54.commaRoundTrip)
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var w_61 = "comma" === y_60 && e_54 && e_54.commaRoundTrip;
    (t_55 || (t_55 = Object.keys(n_56)), o_57.sort && t_55.sort(o_57.sort));
    for (var k_62 = vendorBundle(), i_63 = 0; i_63 < t_55.length; ++i_63) {
      var S_64 = t_55[i_63];
      (o_57.skipNulls && null === n_56[S_64]) ||
        v_6(
          m_59,
          x_11(
            n_56[S_64],
            S_64,
            y_60,
            w_61,
            o_57.strictNullHandling,
            o_57.skipNulls,
            o_57.encode ? o_57.encoder : null,
            o_57.filter,
            o_57.sort,
            o_57.allowDots,
            o_57.serializeDate,
            o_57.format,
            o_57.formatter,
            o_57.encodeValuesOnly,
            o_57.charset,
            k_62,
          ),
        );
    }
    var A_65 = m_59.join(o_57.delimiter),
      C_66 = !0 === o_57.addQueryPrefix ? "?" : "";
    return (
      o_57.charsetSentinel &&
        ("iso-8859-1" === o_57.charset ? (C_66 += "utf8=%26%2310003%3B&") : (C_66 += "utf8=%E2%9C%93&")),
      A_65.length > 0 ? C_66 + A_65 : ""
    );
  };
};
