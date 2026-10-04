// validate-browser-context-for-indexeddb-analytics-module (component) — module 1165 from 8d80f48
// module 1165 from 8d80f48.js
// deps: 42, 120
const module_1165 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (function (e_1, r_2) {
    (webpackRequire.d(webpackExports, "a", function () {
      return v_11;
    }),
      webpackRequire.d(webpackExports, "b", function () {
        return __16;
      }),
      webpackRequire.d(webpackExports, "c", function () {
        return E_15;
      }),
      webpackRequire.d(webpackExports, "d", function () {
        return S_14;
      }),
      webpackRequire.d(webpackExports, "e", function () {
        return l_6;
      }),
      webpackRequire.d(webpackExports, "f", function () {
        return D_18;
      }),
      webpackRequire.d(webpackExports, "g", function () {
        return w_10;
      }),
      webpackRequire.d(webpackExports, "h", function () {
        return k_20;
      }),
      webpackRequire.d(webpackExports, "i", function () {
        return y_12;
      }),
      webpackRequire.d(webpackExports, "j", function () {
        return I_13;
      }));
    const o_3 = function (e_21) {
        const t_22 = [];
        let p_23 = 0;
        for (let i_24 = 0; i_24 < e_21.length; i_24++) {
          let n_25 = e_21.charCodeAt(i_24);
          n_25 < 128
            ? (t_22[p_23++] = n_25)
            : n_25 < 2048
              ? ((t_22[p_23++] = (n_25 >> 6) | 192), (t_22[p_23++] = (63 & n_25) | 128))
              : 55296 == (64512 & n_25) &&
                  i_24 + 1 < e_21.length &&
                  56320 == (64512 & e_21.charCodeAt(i_24 + 1))
                ? ((n_25 = 65536 + ((1023 & n_25) << 10) + (1023 & e_21.charCodeAt(++i_24))),
                  (t_22[p_23++] = (n_25 >> 18) | 240),
                  (t_22[p_23++] = ((n_25 >> 12) & 63) | 128),
                  (t_22[p_23++] = ((n_25 >> 6) & 63) | 128),
                  (t_22[p_23++] = (63 & n_25) | 128))
                : ((t_22[p_23++] = (n_25 >> 12) | 224),
                  (t_22[p_23++] = ((n_25 >> 6) & 63) | 128),
                  (t_22[p_23++] = (63 & n_25) | 128));
        }
        return t_22;
      },
      c_4 = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/=";
        },
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_.";
        },
        HAS_NATIVE_SUPPORT: "function" == typeof atob,
        encodeByteArray(input, e_26) {
          if (!Array.isArray(input)) throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          const t_27 = e_26 ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
            output = [];
          for (let i_28 = 0; i_28 < input.length; i_28 += 3) {
            const e_29 = input[i_28],
              n_30 = i_28 + 1 < input.length,
              r_31 = n_30 ? input[i_28 + 1] : 0,
              o_32 = i_28 + 2 < input.length,
              c_33 = o_32 ? input[i_28 + 2] : 0,
              d_34 = e_29 >> 2,
              l_35 = ((3 & e_29) << 4) | (r_31 >> 4);
            let f_36 = ((15 & r_31) << 2) | (c_33 >> 6),
              h_37 = 63 & c_33;
            (o_32 || ((h_37 = 64), n_30 || (f_36 = 64)),
              output.push(t_27[d_34], t_27[l_35], t_27[f_36], t_27[h_37]));
          }
          return output.join("");
        },
        encodeString(input, e_38) {
          return this.HAS_NATIVE_SUPPORT && !e_38 ? btoa(input) : this.encodeByteArray(o_3(input), e_38);
        },
        decodeString(input, e_39) {
          return this.HAS_NATIVE_SUPPORT && !e_39
            ? atob(input)
            : (function (e_40) {
                const t_41 = [];
                let n_42 = 0,
                  r_43 = 0;
                for (; n_42 < e_40.length;) {
                  const o_44 = e_40[n_42++];
                  if (o_44 < 128) t_41[r_43++] = String.fromCharCode(o_44);
                  else if (o_44 > 191 && o_44 < 224) {
                    const c_45 = e_40[n_42++];
                    t_41[r_43++] = String.fromCharCode(((31 & o_44) << 6) | (63 & c_45));
                  } else if (o_44 > 239 && o_44 < 365) {
                    const u_46 =
                      (((7 & o_44) << 18) |
                        ((63 & e_40[n_42++]) << 12) |
                        ((63 & e_40[n_42++]) << 6) |
                        (63 & e_40[n_42++])) -
                      65536;
                    ((t_41[r_43++] = String.fromCharCode(55296 + (u_46 >> 10))),
                      (t_41[r_43++] = String.fromCharCode(56320 + (1023 & u_46))));
                  } else {
                    const c_47 = e_40[n_42++],
                      d_48 = e_40[n_42++];
                    t_41[r_43++] = String.fromCharCode(
                      ((15 & o_44) << 12) | ((63 & c_47) << 6) | (63 & d_48),
                    );
                  }
                }
                return t_41.join("");
              })(this.decodeStringToByteArray(input, e_39));
        },
        decodeStringToByteArray(input, e_49) {
          this.init_();
          const t_50 = e_49 ? this.charToByteMapWebSafe_ : this.charToByteMap_,
            output = [];
          for (let i_51 = 0; i_51 < input.length;) {
            const e_52 = t_50[input.charAt(i_51++)],
              n_53 = i_51 < input.length ? t_50[input.charAt(i_51)] : 0;
            ++i_51;
            const r_54 = i_51 < input.length ? t_50[input.charAt(i_51)] : 64;
            ++i_51;
            const o_55 = i_51 < input.length ? t_50[input.charAt(i_51)] : 64;
            if ((++i_51, null == e_52 || null == n_53 || null == r_54 || null == o_55)) throw new d_5();
            const c_56 = (e_52 << 2) | (n_53 >> 4);
            if ((output.push(c_56), 64 !== r_54)) {
              const e_57 = ((n_53 << 4) & 240) | (r_54 >> 2);
              if ((output.push(e_57), 64 !== o_55)) {
                const e_58 = ((r_54 << 6) & 192) | o_55;
                output.push(e_58);
              }
            }
          }
          return output;
        },
        init_() {
          if (!this.byteToCharMap_) {
            ((this.byteToCharMap_ = {}),
              (this.charToByteMap_ = {}),
              (this.byteToCharMapWebSafe_ = {}),
              (this.charToByteMapWebSafe_ = {}));
            for (let i_59 = 0; i_59 < this.ENCODED_VALS.length; i_59++)
              ((this.byteToCharMap_[i_59] = this.ENCODED_VALS.charAt(i_59)),
                (this.charToByteMap_[this.byteToCharMap_[i_59]] = i_59),
                (this.byteToCharMapWebSafe_[i_59] = this.ENCODED_VALS_WEBSAFE.charAt(i_59)),
                (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i_59]] = i_59),
                i_59 >= this.ENCODED_VALS_BASE.length &&
                  ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i_59)] = i_59),
                  (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i_59)] = i_59)));
          }
        },
      };
    class d_5 extends Error {
      constructor() {
        (super(...arguments), (this.name = "DecodeBase64StringError"));
      }
    }
    const l_6 = function (e_60) {
        return (function (e_61) {
          const t_62 = o_3(e_61);
          return c_4.encodeByteArray(t_62, !0);
        })(e_60).replace(/\./g, "");
      },
      f_7 = function (e_63) {
        try {
          return c_4.decodeString(e_63, !0);
        } catch (e_64) {
          console.error("base64Decode failed: ", e_64);
        }
        return null;
      };
    const h_8 = () =>
        (function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if (void 0 !== e_1) return e_1;
          throw new Error("Unable to locate global object.");
        })().__FIREBASE_DEFAULTS__,
      m_9 = () => {
        try {
          return (
            h_8() ||
            (() => {
              if (void 0 === r_2 || void 0 === r_2.env) return;
              const e_65 = r_2.env.__FIREBASE_DEFAULTS__;
              return e_65 ? JSON.parse(e_65) : void 0;
            })() ||
            (() => {
              if ("undefined" == typeof document) return;
              let e_66;
              try {
                e_66 = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
              } catch (e_68) {
                return;
              }
              const t_67 = e_66 && f_7(e_66[1]);
              return t_67 && JSON.parse(t_67);
            })()
          );
        } catch (e_69) {
          return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e_69}`);
        }
      },
      w_10 = () => {
        var e_70;
        return null === (e_70 = m_9()) || void 0 === e_70 ? void 0 : e_70.config;
      };
    class v_11 {
      constructor() {
        ((this.reject = () => {}),
          (this.resolve = () => {}),
          (this.promise = new Promise((e_71, t_72) => {
            ((this.resolve = e_71), (this.reject = t_72));
          })));
      }
      wrapCallback(e_73) {
        return (t_74, n_75) => {
          (t_74 ? this.reject(t_74) : this.resolve(n_75),
            "function" == typeof e_73 &&
              (this.promise.catch(() => {}), 1 === e_73.length ? e_73(t_74) : e_73(t_74, n_75)));
        };
      }
    }
    function y_12() {
      try {
        return "object" == typeof indexedDB;
      } catch (e_76) {
        return !1;
      }
    }
    function I_13() {
      return new Promise((e_77, t_78) => {
        try {
          let n_79 = !0;
          const r_80 = "validate-browser-context-for-indexeddb-analytics-module",
            o_81 = self.indexedDB.open(r_80);
          ((o_81.onsuccess = () => {
            (o_81.result.close(), n_79 || self.indexedDB.deleteDatabase(r_80), e_77(!0));
          }),
            (o_81.onupgradeneeded = () => {
              n_79 = !1;
            }),
            (o_81.onerror = () => {
              var e_82;
              t_78((null === (e_82 = o_81.error) || void 0 === e_82 ? void 0 : e_82.message) || "");
            }));
        } catch (e_83) {
          t_78(e_83);
        }
      });
    }
    function S_14() {
      return !("undefined" == typeof navigator || !navigator.cookieEnabled);
    }
    class E_15 extends Error {
      constructor(code, e_84, t_85) {
        (super(e_84),
          (this.code = code),
          (this.customData = t_85),
          (this.name = "FirebaseError"),
          Object.setPrototypeOf(this, E_15.prototype),
          Error.captureStackTrace && Error.captureStackTrace(this, __16.prototype.create));
      }
    }
    class __16 {
      constructor(e_86, t_87, n_88) {
        ((this.service = e_86), (this.serviceName = t_87), (this.errors = n_88));
      }
      create(code, ...data) {
        const e_89 = data[0] || {},
          t_90 = `${this.service}/${code}`,
          template = this.errors[code],
          n_91 = template
            ? (function (template, data) {
                return template.replace(C_17, (e_93, t_94) => {
                  const n_95 = data[t_94];
                  return null != n_95 ? String(n_95) : `<${t_94}?>`;
                });
              })(template, e_89)
            : "Error",
          r_92 = `${this.serviceName}: ${n_91} (${t_90}).`;
        return new E_15(t_90, r_92, e_89);
      }
    }
    const C_17 = /\{\$([^}]+)}/g;
    function D_18(a_96, b_97) {
      if (a_96 === b_97) return !0;
      const e_98 = Object.keys(a_96),
        t_99 = Object.keys(b_97);
      for (const n_100 of e_98) {
        if (!t_99.includes(n_100)) return !1;
        const e_101 = a_96[n_100],
          r_102 = b_97[n_100];
        if (O_19(e_101) && O_19(r_102)) {
          if (!D_18(e_101, r_102)) return !1;
        } else if (e_101 !== r_102) return !1;
      }
      for (const n_103 of t_99) if (!e_98.includes(n_103)) return !1;
      return !0;
    }
    function O_19(e_104) {
      return null !== e_104 && "object" == typeof e_104;
    }
    function k_20(e_105) {
      return e_105 && e_105._delegate ? e_105._delegate : e_105;
    }
  }).call(this, webpackRequire(42), webpackRequire(120));
};
