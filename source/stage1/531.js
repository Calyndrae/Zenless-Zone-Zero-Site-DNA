// HoYoverse OSS file-upload SDK — module 531 from be1f69b
// module 531 from be1f69b.js
// deps: 944, 945, 2, 3, 0, 4
const module_531 = function (webpackModule, webpackExports, webpackRequire) {
  var r_1, o_2;
  ("undefined" != typeof self && self,
    (webpackModule.exports =
      ((r_1 = webpackRequire(944)),
      (o_2 = webpackRequire(945)),
      (function (e_3) {
        var t_4 = {};
        function n_5(a_6) {
          if (t_4[a_6]) return t_4[a_6].exports;
          var r_7 = (t_4[a_6] = {
            i: a_6,
            l: !1,
            exports: {},
          });
          return (e_3[a_6].call(r_7.exports, r_7, r_7.exports, n_5), (r_7.l = !0), r_7.exports);
        }
        return (
          (n_5.m = e_3),
          (n_5.c = t_4),
          (n_5.d = function (e_8, t_9, a_10) {
            n_5.o(e_8, t_9) ||
              Object.defineProperty(e_8, t_9, {
                enumerable: !0,
                get: a_10,
              });
          }),
          (n_5.r = function (e_11) {
            ("undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e_11, Symbol.toStringTag, {
                value: "Module",
              }),
              Object.defineProperty(e_11, "__esModule", {
                value: !0,
              }));
          }),
          (n_5.t = function (e_12, t_13) {
            if ((1 & t_13 && (e_12 = n_5(e_12)), 8 & t_13)) return e_12;
            if (4 & t_13 && "object" == typeof e_12 && e_12 && e_12.__esModule) return e_12;
            var a_14 = Object.create(null);
            if (
              (n_5.r(a_14),
              Object.defineProperty(a_14, "default", {
                enumerable: !0,
                value: e_12,
              }),
              2 & t_13 && "string" != typeof e_12)
            )
              for (var r_15 in e_12)
                n_5.d(
                  a_14,
                  r_15,
                  function (t_16) {
                    return e_12[t_16];
                  }.bind(null, r_15),
                );
            return a_14;
          }),
          (n_5.n = function (e_17) {
            var t_18 =
              e_17 && e_17.__esModule
                ? function () {
                    return e_17.default;
                  }
                : function () {
                    return e_17;
                  };
            return (n_5.d(t_18, "a", t_18), t_18);
          }),
          (n_5.o = function (e_19, t_20) {
            return Object.prototype.hasOwnProperty.call(e_19, t_20);
          }),
          (n_5.p = ""),
          n_5((n_5.s = 1))
        );
      })([
        function (e_21, t_22, n_23) {
          "use strict";

          Object.defineProperty(t_22, "__esModule", {
            value: !0,
          });
          var a_24 =
              Object.assign ||
              function (e_103) {
                for (var t_104 = 1; t_104 < arguments.length; t_104++) {
                  var n_105 = arguments[t_104];
                  for (var a_106 in n_105)
                    Object.prototype.hasOwnProperty.call(n_105, a_106) && (e_103[a_106] = n_105[a_106]);
                }
                return e_103;
              },
            r_25 = function (e_107, t_108) {
              if (Array.isArray(e_107)) return e_107;
              if (Symbol.iterator in Object(e_107))
                return (function (e_109, t_110) {
                  var n_111 = [],
                    a_112 = !0,
                    r_113 = !1,
                    s_114 = void 0;
                  try {
                    for (
                      var i_115, o_116 = e_109[Symbol.iterator]();
                      !(a_112 = (i_115 = o_116.next()).done) &&
                      (n_111.push(i_115.value), !t_110 || n_111.length !== t_110);
                      a_112 = !0
                    );
                  } catch (e_117) {
                    ((r_113 = !0), (s_114 = e_117));
                  } finally {
                    try {
                      !a_112 && o_116.return && o_116.return();
                    } finally {
                      if (r_113) throw s_114;
                    }
                  }
                  return n_111;
                })(e_107, t_108);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          t_22.default = function (e_118) {
            var t_119 = e_118.needEncrypt,
              n_120 = e_118.outerFileUrl,
              s_121 = e_118.onError,
              i_122 = e_118.biz,
              o_123 = e_118.async,
              u_124 = void 0 === o_123 || o_123,
              f_125 = e_118.onSuccess,
              d_126 = e_118.file_name,
              h_127 = void 0 === d_126 ? "" : d_126,
              m_128 = e_118.inner,
              v_129 = e_118.onProgress,
              y_130 = e_118.checkLogin,
              g_131 = e_118.env,
              w_132 = e_118.directory,
              __133 = void 0 === w_132 ? "" : w_132,
              k_134 = e_118.watermarkText,
              x_135 = e_118.watermarkTextSize,
              S_136 = e_118.watermarkTextScale,
              A_137 = e_118.watermarkRequire,
              b_138 = void 0 === A_137 || A_137,
              C_139 = e_118.instance,
              E_140 = e_118.overseas,
              O_141 = void 0 !== E_140 && E_140,
              T_142 = e_118.lang,
              P_143 = e_118.fileWithCredentials,
              I_144 = void 0 !== P_143 && P_143,
              L_145 = e_118.controlFileName,
              j_146 = void 0 === L_145 || L_145;
            if (!c_29.includes(g_131)) throw Error("env: " + g_131 + " not exist!");
            var R_147 = l_30[g_131] || "prod",
              M_148 = new XMLHttpRequest(),
              N_149 = {
                abort: M_148.abort.bind(M_148),
              };
            if ("private" !== m_128 && __133) {
              var F_150 = "自定义目录参数 directory 只支持 inner 为 private";
              return (console.warn(F_150), s_121(F_150), N_149);
            }
            if ("private" === m_128) {
              if (!e_118.rowFile)
                return (
                  console.warn("文件上传缺少rowFile参数，请先传入"),
                  s_121("文件上传缺少rowFile参数，请先传入"),
                  N_149
                );
              var D_151 = function () {
                var t_164 = Te_102(
                  e_118,
                  function (t_165) {
                    var n_166 = e_118.rowFile.name.split(".").slice(-1),
                      a_167 = r_25(n_166, 1)[0],
                      o_168 = h_127
                        ? "" + h_127
                        : R_147 + "/" + __133 + t_165 + "_" + Date.now() + "." + a_167,
                      p_169 = function (t_179) {
                        var n_180 = t_179.data,
                          a_181 = n_180.url,
                          r_182 = n_180.form_data,
                          i_183 = n_180.preview_url,
                          p_184 = new FormData();
                        (Object.keys(r_182).forEach(function (e_185) {
                          p_184.append(e_185, r_182[e_185]);
                        }),
                          p_184.append("file", e_118.rowFile),
                          (M_148.withCredentials = I_144),
                          M_148.open("POST", a_181, !0),
                          T_142 && M_148.setRequestHeader("x-rpc-language", T_142),
                          M_148.upload &&
                            (M_148.upload.onprogress = function (e_186) {
                              e_186.lengthComputable && v_129 && v_129(e_186);
                            }),
                          (M_148.onreadystatechange = function () {
                            4 === M_148.readyState &&
                              (200 === M_148.status || 204 === M_148.status
                                ? f_125({
                                    retcode: 0,
                                    message: "success",
                                    data: {
                                      url: "" + a_181 + o_168,
                                      preview_url: i_183,
                                    },
                                  })
                                : s_121 && s_121());
                          }),
                          M_148.send(p_184));
                      },
                      c_170 = e_118.byAct,
                      l_171 = void 0 === c_170 || c_170,
                      d_172 = {
                        authKey: "Byatk",
                        iam: "Byiam",
                        iamMihoyo: "ByiamMihoyo",
                      },
                      w_173 = "",
                      k_174 = "",
                      x_175 = ["production", "release", "beta"].includes(g_131),
                      S_176 = ["pre", "prerelease"].includes(g_131),
                      A_177 = ["uat"].includes(g_131);
                    (void 0 !== e_118.checkLogin && (l_171 = e_118.checkLogin),
                      (w_173 = e_118.signUrl
                        ? e_118.signUrl
                        : Ee_100[
                            (O_141 ? "overseas" : "inland") +
                              (m_128 ? "Inner" : "Outer") +
                              ("s3" === O_141 ? "Aws" : "") +
                              (d_172[l_171] ? d_172[l_171] : l_171 ? "Byact" : "Noact") +
                              (x_175 ? "Prod" : S_176 ? "Pre" : A_177 ? "Uat" : "Dev") +
                              "Minio"
                          ]),
                      (k_174 = e_118.signUrl
                        ? e_118.signUrl
                        : Ee_100[
                            "inlandInnerByact" +
                              (x_175 ? "Prod" : S_176 ? "Pre" : A_177 ? "Uat" : "Dev") +
                              "Minio"
                          ]));
                    var b_178 = new XMLHttpRequest();
                    (e_118.signUrl
                      ? b_178.open("post", w_173, u_124)
                      : b_178.open(
                          "post",
                          l_171
                            ? "string" == typeof y_130 && y_130.includes("iam")
                              ? w_173
                              : k_174
                            : "https://op-takumi.mihoyo.com/mupload/minio/getTokenByAnonymous",
                          u_124,
                        ),
                      b_178.setRequestHeader("Content-Type", "application/json"),
                      T_142 && M_148.setRequestHeader("x-rpc-language", T_142),
                      e_118.app_key && b_178.setRequestHeader("X-Rpc-App_key", e_118.app_key),
                      (b_178.withCredentials = !0),
                      (b_178.onreadystatechange = function () {
                        if (4 === b_178.readyState)
                          if (200 === b_178.status && p_169) {
                            var e_187 = JSON.parse(b_178.responseText);
                            0 === e_187.retcode ? p_169(e_187) : s_121(e_187);
                          } else s_121 && s_121();
                      }),
                      b_178.send(
                        JSON.stringify({
                          bucket: i_122,
                          object: o_168,
                          instance: C_139,
                        }),
                      ));
                  },
                  function (e_188) {
                    s_121(e_188);
                  },
                );
                N_149.cancelFileReader = t_164.cancelFileReader.bind(t_164);
              };
              t_119
                ? (0, queryStringUtilities.encryptFromFile)(e_118.rowFile, {
                    needCache: !1,
                  })
                    .then(function (t_189) {
                      var n_190 = void 0;
                      (window.navigator.userAgent.indexOf("Edge") > -1
                        ? ((n_190 = new Blob([t_189], {
                            type: "image/png",
                          })).name = e_118.rowFile.name)
                        : (n_190 = new File([t_189], e_118.rowFile.name)),
                        (e_118.rowFile = n_190),
                        D_151());
                    })
                    .catch(function (e_191) {
                      s_121(e_191);
                    })
                : D_151();
            } else if (n_120) {
              var B_152 = e_118.byAct,
                q_153 = void 0 === B_152 || B_152;
              void 0 !== e_118.checkLogin && (q_153 = e_118.checkLogin);
              var z_154 = "https://devapi-takumi.mihoyo.com/upload/fetch",
                U_155 = ["production", "release", "beta"].includes(g_131),
                G_156 = ["pre", "prerelease"].includes(g_131),
                H_157 = ["uat"].includes(g_131),
                W_158 = {
                  authKey: "Byatk",
                  iam: "Byiam",
                  iamMihoyo: "ByiamMihoyo",
                };
              (m_128 &&
                (z_154 =
                  Oe_101[
                    (O_141 ? "overseas" : "inland") +
                      (m_128 ? "Inner" : "Outer") +
                      ("s3" === O_141 ? "Aws" : "") +
                      (W_158[q_153] ? W_158[q_153] : q_153 ? "Byact" : "Noact") +
                      (U_155 ? "Prod" : G_156 ? "Pre" : H_157 ? "Uat" : "Dev") +
                      "Fetch"
                  ]),
                M_148.open("post", z_154, u_124),
                M_148.setRequestHeader("Content-Type", "application/json"),
                T_142 && M_148.setRequestHeader("x-rpc-language", T_142),
                e_118.app_key && M_148.setRequestHeader("X-Rpc-App_key", e_118.app_key),
                (M_148.withCredentials = !0),
                (M_148.onreadystatechange = function () {
                  if (4 === M_148.readyState)
                    if (200 === M_148.status && f_125) {
                      var e_192 = JSON.parse(M_148.responseText);
                      0 === e_192.retcode ? f_125(e_192) : s_121(e_192);
                    } else s_121 && s_121();
                }),
                M_148.send(
                  JSON.stringify({
                    biz: i_122,
                    url: n_120,
                  }),
                ));
            } else {
              var V_159 = "beta" === g_131 ? "/beta/" : "",
                Y_160 = null;
              if (h_127 && !m_128 && j_146) s_121("file_name字段仅支持对内网关");
              else if (e_118.rowFile) {
                var X_161 = e_118.rowFile.name.split(".").slice(-1),
                  K_162 = r_25(X_161, 1);
                Y_160 = K_162[0];
                var Q_163 = Te_102(e_118, function (t_193) {
                  var n_194 = e_118.rowFile;
                  !(function (e_195, t_196, n_197) {
                    var a_198 = e_195.byAct,
                      r_199 = void 0 === a_198 || a_198,
                      s_200 = e_195.async,
                      i_201 = void 0 === s_200 || s_200,
                      o_202 = e_195.onError,
                      p_203 = e_195.md5,
                      u_204 = e_195.biz,
                      c_205 = e_195.signUrl,
                      l_206 = e_195.overseas,
                      f_207 = void 0 !== l_206 && l_206,
                      d_208 = e_195.inner,
                      h_209 = void 0 === d_208 || d_208,
                      m_210 = e_195.env,
                      v_211 = e_195.file_name,
                      y_212 = e_195.file_path,
                      g_213 = e_195.acl,
                      w_214 = e_195.rowFile,
                      __215 = e_195.host,
                      k_216 = e_195.enable_sgw,
                      x_217 = e_195.extra,
                      S_218 = e_195.lang,
                      A_219 = {
                        authKey: "Byatk",
                        iam: "Byiam",
                        iamMihoyo: "ByiamMihoyo",
                      },
                      b_220 = "",
                      C_221 = ["production", "release", "beta"].includes(m_210),
                      E_222 = ["pre", "prerelease"].includes(m_210),
                      O_223 = ["uat"].includes(m_210);
                    (c_205
                      ? (b_220 = c_205)
                      : (void 0 !== e_195.checkLogin && (r_199 = e_195.checkLogin),
                        (b_220 =
                          Ee_100[
                            (f_207 ? "overseas" : "inland") +
                              (h_209 ? "Inner" : "Outer") +
                              ("s3" === f_207 ? "Aws" : "") +
                              (A_219[r_199] ? A_219[r_199] : r_199 ? "Byact" : "Noact") +
                              (C_221 ? "Prod" : E_222 ? "Pre" : O_223 ? "Uat" : "Dev")
                          ]),
                        e_195.checkEventLogin &&
                          (b_220 =
                            Ee_100[
                              (f_207 ? "overseas" : "inland") +
                                "Outer" +
                                ("s3" === f_207 ? "Aws" : "") +
                                "ByEvent" +
                                (C_221 ? "Prod" : E_222 ? "Pre" : O_223 ? "Uat" : "Dev")
                            ] +
                            "?game=" +
                            e_195.game),
                        e_195.checkThirdpartyLogin &&
                          (b_220 =
                            Ee_100[
                              (f_207 ? "overseas" : "inland") +
                                "Outer" +
                                ("s3" === f_207 ? "Aws" : "") +
                                "ByThirdparty" +
                                (C_221 ? "Prod" : E_222 ? "Pre" : O_223 ? "Uat" : "Dev")
                            ] +
                            "?game=" +
                            e_195.game +
                            "&app_id=" +
                            e_195.app_id)),
                      __215 && (b_220 = b_220.replace(/mihayo.com|mihoyo.com|hoyoverse.com/, __215)));
                    var T_224 = new XMLHttpRequest();
                    (T_224.open("post", "" + b_220, i_201),
                      T_224.setRequestHeader("Content-Type", "application/json"),
                      S_218 && T_224.setRequestHeader("x-rpc-language", S_218),
                      e_195.app_key && T_224.setRequestHeader("X-Rpc-App_key", e_195.app_key),
                      (T_224.withCredentials = !0),
                      (T_224.onreadystatechange = function () {
                        if (4 === T_224.readyState)
                          if (200 === T_224.status && t_196) {
                            var e_226 = JSON.parse(T_224.responseText);
                            0 === e_226.retcode ? t_196(e_226) : o_202(e_226);
                          } else o_202 && o_202();
                      }));
                    var P_225 = {
                      md5: p_203,
                      ext: n_197,
                      biz: u_204,
                      file_name: v_211,
                      support_content_type: !0,
                      support_extra_form_data: !0,
                    };
                    (x_217 && (P_225.extra = x_217),
                      y_212 && (P_225.file_path = y_212),
                      "private" === g_213 && (P_225.acl = g_213),
                      "s3" === f_207 && (P_225.file_size = w_214.size),
                      k_216 && (P_225.file_size = w_214.size),
                      T_224.send(JSON.stringify(P_225)));
                  })(
                    a_24({}, e_118, {
                      md5: t_193,
                    }),
                    function (r_227) {
                      var o_228 = r_227.retcode,
                        p_229 = r_227.data,
                        c_230 = r_227.message;
                      if (0 === o_228) {
                        var l_231 = (function (e_234, t_235) {
                          var n_236 = new FormData(),
                            a_237 = t_235.name,
                            r_238 = t_235.dir,
                            s_239 = t_235.callback,
                            i_240 = t_235.callback_var,
                            o_241 = t_235.accessid,
                            p_242 = t_235.policy,
                            u_243 = t_235.signature,
                            c_244 = t_235.x_oss_content_type,
                            l_245 = t_235.object_acl,
                            f_246 = t_235.content_disposition,
                            d_247 = t_235.extra_form_data;
                          return (
                            n_236.append("name", a_237),
                            n_236.append("key", r_238 + a_237),
                            n_236.append("callback", s_239),
                            n_236.append("success_action_status", "200"),
                            i_240 &&
                              Object.keys(i_240).forEach(function (e_248) {
                                n_236.append(e_248, i_240[e_248]);
                              }),
                            c_244 && n_236.append("x-oss-content-type", c_244),
                            d_247 &&
                              d_247.forEach(function (e_249) {
                                n_236.append(e_249.key, e_249.value);
                              }),
                            n_236.append("OSSAccessKeyId", o_241),
                            n_236.append("policy", p_242),
                            n_236.append("signature", u_243),
                            l_245 && n_236.append("x-oss-object-acl", l_245),
                            f_246 && n_236.append("Content-Disposition", f_246),
                            n_236.append("file", e_234),
                            n_236
                          );
                        })(
                          n_194,
                          a_24(
                            {
                              name: "" + V_159 + t_193 + "_" + Date.now() + "." + Y_160,
                            },
                            p_229[p_229.type],
                          ),
                        );
                        if (
                          (M_148.upload &&
                            (M_148.upload.onprogress = function (e_250) {
                              e_250.lengthComputable && v_129 && v_129(e_250);
                            }),
                          "s3" === p_229.type && p_229[p_229.type] && p_229[p_229.type].headers)
                        ) {
                          M_148.open("put", p_229[p_229.type].upload_url, u_124);
                          var d_232 = p_229[p_229.type].headers;
                          Object.keys(d_232).forEach(function (e_251) {
                            M_148.setRequestHeader(e_251, d_232[e_251]);
                          });
                        } else if ("sgw" === p_229.type && p_229[p_229.type] && p_229[p_229.type].headers) {
                          M_148.open("put", p_229[p_229.type].upload_url, u_124);
                          var m_233 = p_229[p_229.type].headers;
                          Object.keys(m_233).forEach(function (e_252) {
                            M_148.setRequestHeader(e_252, m_233[e_252]);
                          });
                        } else M_148.open("post", p_229[p_229.type].host, u_124);
                        (T_142 && M_148.setRequestHeader("x-rpc-language", T_142),
                          (M_148.onerror = function (e_253) {
                            s_121(e_253);
                          }),
                          (M_148.onreadystatechange = function () {
                            if (4 === M_148.readyState)
                              if (200 === M_148.status && f_125) {
                                var r_254 = void 0;
                                0 ===
                                (r_254 =
                                  ("s3" !== p_229.type && "sgw" !== p_229.type) || !p_229[p_229.type]
                                    ? JSON.parse(M_148.responseText)
                                    : {
                                        retcode: 0,
                                        msg: "success",
                                        data: a_24({}, p_229[p_229.type]),
                                      }).retcode
                                  ? ((r_254.data.ext = {
                                      size: n_194.size,
                                      md5: t_193,
                                      name: h_127,
                                    }),
                                    k_134
                                      ? new Promise(function (e_255) {
                                          if (x_135) e_255(x_135);
                                          else {
                                            var t_256 = S_136 || 0.03,
                                              a_257 = new Image();
                                            ((a_257.src = URL.createObjectURL(n_194)),
                                              (a_257.onload = function () {
                                                "function" == typeof S_136 &&
                                                  (t_256 = S_136(a_257.width, a_257.height));
                                                var n_258 = Math.min(a_257.width, a_257.height);
                                                (e_255(n_258 * t_256), (a_257 = null));
                                              }));
                                          }
                                        }).then(function (t_259) {
                                          !(function (e_260, t_261, n_262, a_263) {
                                            var r_264 = e_260.env,
                                              s_265 = e_260.onError,
                                              i_266 = ["production", "release", "beta"].includes(r_264),
                                              o_267 = ["pre", "prerelease"].includes(r_264),
                                              p_268 = Se_97;
                                            o_267 ? (p_268 = Ae_98) : i_266 && (p_268 = Ce_99);
                                            var u_269 = new XMLHttpRequest();
                                            ((u_269.withCredentials = !0),
                                              u_269.open("POST", p_268 + "/upload/op/watermark", !0),
                                              (u_269.onreadystatechange = function () {
                                                if (4 === u_269.readyState)
                                                  if (200 === u_269.status) {
                                                    var e_270 = JSON.parse(u_269.responseText);
                                                    0 !== e_270.retcode && a_263
                                                      ? s_265 && s_265(e_270)
                                                      : n_262();
                                                  } else s_265 && (a_263 ? s_265() : n_262());
                                              }),
                                              u_269.send(JSON.stringify(t_261)));
                                          })(
                                            e_118,
                                            {
                                              biz: i_122,
                                              params: [
                                                {
                                                  object: r_254.data.object,
                                                  text: k_134,
                                                  size: parseInt(t_259, 10),
                                                },
                                              ],
                                            },
                                            function () {
                                              f_125(r_254);
                                            },
                                            b_138,
                                          );
                                        })
                                      : f_125(r_254))
                                  : s_121(r_254);
                              } else s_121 && s_121();
                          }),
                          ("s3" === p_229.type || "sgw" === p_229.type) &&
                          p_229[p_229.type] &&
                          p_229[p_229.type].headers
                            ? M_148.send(n_194)
                            : M_148.send(l_231));
                      } else
                        s_121 &&
                          s_121({
                            retcode: o_228,
                            data: p_229,
                            message: c_230,
                          });
                    },
                    Y_160,
                  );
                });
                N_149.cancelFileReader = Q_163.cancelFileReader.bind(Q_163);
              } else s_121 && s_121("未传入file文件");
            }
            return N_149;
          };
          var s_26,
            o_27 =
              (s_26 = n_23(2)) && s_26.__esModule
                ? s_26
                : {
                    default: s_26,
                  },
            queryStringUtilities = n_23(3),
            u_28 = function (e_271) {
              var t_272 = e_271;
              return (
                /authkey=/gi.test(window.location.search) &&
                  (t_272 += (e_271.indexOf("?") > -1 ? "&" : "?") + window.location.search.replace("?", "")),
                t_272
              );
            },
            c_29 = ["development", "test", "uat", "pre", "prerelease", "beta", "release", "production"],
            l_30 = {
              development: "dev",
              test: "dev",
              pre: "pre",
              prerelease: "pre",
              beta: "beta",
              release: "prod",
              production: "prod",
              uat: "uat",
            },
            f_31 = window.location.host.includes(".mihayo.com") ? ".mihayo.com" : ".mihoyo.com",
            d_32 = "https://devapi-takumi" + f_31 + "/upload/op/getParamsByOp",
            h_33 = "https://preop-takumi" + f_31 + "/upload/op/getParamsByOp",
            m_34 = "https://op-takumi" + f_31 + "/upload/op/getParamsByOp",
            v_35 = "https://devop-takumi.office" + f_31 + "/upload/iam_op/getParamsByOp",
            y_36 = "https://devop-test-api.office" + f_31 + "/upload/iam_op/getParamsByOp",
            g_37 = "https://preop-takumi.office" + f_31 + "/upload/iam_op/getParamsByOp",
            w_38 = "https://op-takumi.office" + f_31 + "/upload/iam_op/getParamsByOp",
            __39 = "https://devop-takumi.office" + f_31 + "/mupload/iam_op/minio/getToken",
            k_40 = "https://devop-test-api.office" + f_31 + "/mupload/iam_op/minio/getToken",
            x_41 = "https://preop-takumi.office" + f_31 + "/mupload/iam_op/minio/getToken",
            S_42 = "https://op-takumi.office" + f_31 + "/mupload/iam_op/minio/getToken",
            A_43 = "https://devop-takumi.office" + f_31 + "/upload/iam_op/getParamsByOp",
            b_44 = "https://devop-test-api.office" + f_31 + "/upload/iam_op/getParamsByOp",
            C_45 = "https://preop-takumi.office" + f_31 + "/upload/iam_op/getParamsByOp",
            E_46 = "https://op-takumi.office" + f_31 + "/upload/iam_op/getParamsByOp",
            O_47 = "https://devapi-takumi" + f_31 + "/upload/op/getParams",
            T_48 = "https://preop-takumi" + f_31 + "/upload/op/getParams",
            P_49 = "https://op-takumi" + f_31 + "/upload/op/getParams",
            I_50 = "https://devapi-takumi" + f_31 + "/upload/outer/getParamsByAccount",
            L_51 = "https://preapi-takumi" + f_31 + "/upload/outer/getParamsByAccount",
            j_52 = "https://api-takumi" + f_31 + "/upload/outer/getParamsByAccount",
            R_53 = "https://devapi-takumi" + f_31 + "/upload/outer/GetParamsByEventToken",
            M_54 = "https://preapi-takumi" + f_31 + "/upload/outer/GetParamsByEventToken",
            N_55 = "https://api-takumi" + f_31 + "/upload/outer/GetParamsByEventToken",
            F_56 = "https://dev-opdev-api" + f_31 + "/upload/iam_op_outer/getParamsByOp",
            D_57 = "https://public-operation-common" + f_31 + "/upload/iam_op_outer/getParamsByOp",
            B_58 = "https://dev-opdev-api" + f_31 + "/mupload/iam_op_outer/minio/getToken",
            q_59 = "https://public-operation-common" + f_31 + "/mupload/iam_op_outer/minio/getToken",
            z_60 = "https://devapi-takumi" + f_31 + "/upload/outer/GetParamsByCookie",
            U_61 = "https://preapi-takumi" + f_31 + "/upload/outer/GetParamsByCookie",
            G_62 = "https://api-takumi" + f_31 + "/upload/outer/GetParamsByCookie",
            H_63 = u_28("https://devapi-takumi" + f_31 + "/upload/outer/GetParamsByAuthKey"),
            W_64 = u_28("https://preapi-takumi" + f_31 + "/upload/outer/GetParamsByAuthKey"),
            V_65 = u_28("https://api-takumi" + f_31 + "/upload/outer/GetParamsByAuthKey"),
            Y_66 = "https://devapi-takumi" + f_31 + "/upload/outer/getParams",
            X_67 = "https://preapi-takumi" + f_31 + "/upload/outer/getParams",
            K_68 = "https://api-takumi" + f_31 + "/upload/outer/getParams",
            Q_69 = "https://devapi-os-takumi" + f_31 + "/upload/op/getParamsByOp",
            $_70 = "https://preop-os-takumi" + f_31 + "/upload/op/getParamsByOp",
            J_71 = "https://op-os-takumi" + f_31 + "/upload/op/getParamsByOp",
            Z_72 = "https://devop-os-takumi.office" + f_31 + "/upload/iam_op/getParamsByOp",
            ee_73 = "https://preop-os-takumi.office" + f_31 + "/upload/iam_op/getParamsByOp",
            te_74 = "https://op-os-takumi.office" + f_31 + "/upload/iam_op/getParamsByOp",
            ne_75 = "https://devop-os-takumi.office" + f_31 + "/mupload/iam_op/minio/getToken",
            re_76 = "https://devop-test-api.office" + f_31 + "/mupload/iam_op/minio/getToken",
            ie_77 = "https://preop-os-takumi.office" + f_31 + "/mupload/iam_op/minio/getToken",
            oe_78 = "https://op-os-takumi.office" + f_31 + "/mupload/iam_op/minio/getToken",
            ae_79 = "https://testing-sg-public-op" + f_31 + "/upload/op/getParamsByOp",
            se_80 = "https://pre-sg-public-op" + f_31 + "/upload/op/getParamsByOp",
            ce_81 = "https://sg-public-op" + f_31 + "/upload/op/getParamsByOp",
            le_82 = "https://testing-sg-public-op" + f_31 + "/upload/iam_op/getParamsByOp",
            ue_83 = "https://pre-sg-public-op" + f_31 + "/upload/iam_op/getParamsByOp",
            fe_84 = "https://sg-public-op" + f_31 + "/upload/iam_op/getParamsByOp",
            de_85 = "https://devapi-os-takumi" + f_31 + "/upload/op/getParams",
            he_86 = "https://preop-os-takumi" + f_31 + "/upload/op/getParams",
            pe_87 = "https://op-os-takumi" + f_31 + "/upload/op/getParams",
            me_88 = "https://testing-sg-public-op" + f_31 + "/upload/op/getParams",
            ve_89 = "https://pre-sg-public-op" + f_31 + "/upload/op/getParams",
            ge_90 = "https://sg-public-op" + f_31 + "/upload/op/getParams",
            ye_91 = u_28("https://devapi-os-takumi.hoyoverse.com/upload/outer/GetParamsByAuthKey"),
            be_92 = u_28("https://preapi-os-takumi.hoyoverse.com/upload/outer/GetParamsByAuthKey"),
            we_93 = u_28("https://api-os-takumi.hoyoverse.com/upload/outer/GetParamsByAuthKey"),
            _e_94 = u_28("https://testing-sg-public-api.hoyoverse.com/upload/outer/GetParamsByAuthKey"),
            ke_95 = u_28("https://pre-sg-public-api.hoyoverse.com/upload/outer/GetParamsByAuthKey"),
            xe_96 = u_28("https://sg-public-api.hoyoverse.com/upload/outer/GetParamsByAuthKey"),
            Se_97 = "https://devapi-takumi" + f_31,
            Ae_98 = "https://preop-takumi" + f_31,
            Ce_99 = "https://op-takumi" + f_31,
            Ee_100 = {
              inlandInnerByactDev: d_32,
              inlandInnerByactPre: h_33,
              inlandInnerByactProd: m_34,
              inlandInnerNoactDev: O_47,
              inlandInnerNoactPre: T_48,
              inlandInnerNoactProd: P_49,
              inlandOuterByactDev: I_50,
              inlandOuterByactPre: L_51,
              inlandOuterByactProd: j_52,
              inlandOuterByEventDev: R_53,
              inlandOuterByEventPre: M_54,
              inlandOuterByEventProd: N_55,
              inlandOuterByThirdpartyDev: z_60,
              inlandOuterByThirdpartyPre: U_61,
              inlandOuterByThirdpartyProd: G_62,
              inlandOuterByatkDev: H_63,
              inlandOuterByatkPre: W_64,
              inlandOuterByatkProd: V_65,
              inlandOuterNoactDev: Y_66,
              inlandOuterNoactPre: X_67,
              inlandOuterNoactProd: K_68,
              overseasInnerByactDev: Q_69,
              overseasInnerByactPre: $_70,
              overseasInnerByactProd: J_71,
              overseasOuterByatkPre: be_92,
              overseasOuterByatkDev: ye_91,
              overseasOuterByatkProd: we_93,
              overseasInnerNoactDev: de_85,
              overseasInnerNoactPre: he_86,
              overseasInnerNoactProd: pe_87,
              overseasOuterByactDev: "https://devapi-os-takumi.hoyoverse.com/upload/outer/getParamsByAccount",
              overseasOuterByactPre: "https://preapi-os-takumi.hoyoverse.com/upload/outer/getParamsByAccount",
              overseasOuterByactProd: "https://api-os-takumi.hoyoverse.com/upload/outer/getParamsByAccount",
              overseasOuterByEventDev:
                "https://devapi-os-takumi.hoyoverse.com/upload/outer/GetParamsByEventToken",
              overseasOuterByEventPre:
                "https://preapi-os-takumi.hoyoverse.com/upload/outer/GetParamsByEventToken",
              overseasOuterByEventProd:
                "https://api-os-takumi.hoyoverse.com/upload/outer/GetParamsByEventToken",
              overseasOuterByThirdpartyDev:
                "https://devapi-os-takumi.hoyoverse.com/upload/outer/GetParamsByCookie",
              overseasOuterByThirdpartyPre:
                "https://preapi-os-takumi.hoyoverse.com/upload/outer/GetParamsByCookie",
              overseasOuterByThirdpartyProd:
                "https://api-os-takumi.hoyoverse.com/upload/outer/GetParamsByCookie",
              overseasOuterNoactDev: "https://devapi-os-takumi.hoyoverse.com/upload/outer/getParams",
              overseasOuterNoactPre: "https://preapi-os-takumi.hoyoverse.com/upload/outer/getParams",
              overseasOuterNoactProd: "https://api-os-takumi.hoyoverse.com/upload/outer/getParams",
              overseasOuterAwsByactDev:
                "https://testing-sg-public-api.hoyoverse.com/upload/outer/getParamsByAccount",
              overseasOuterAwsByactPre:
                "https://pre-sg-public-api.hoyoverse.com/upload/outer/getParamsByAccount",
              overseasOuterAwsByactProd:
                "https://sg-public-api.hoyoverse.com/upload/outer/getParamsByAccount",
              overseasOuterAwsByEventDev:
                "https://testing-sg-public-api.hoyoverse.com/upload/outer/GetParamsByEventToken",
              overseasOuterAwsByEventPre:
                "https://pre-sg-public-api.hoyoverse.com/upload/outer/GetParamsByEventToken",
              overseasOuterAwsByEventProd:
                "https://sg-public-api.hoyoverse.com/upload/outer/GetParamsByEventToken",
              overseasOuterAwsByThirdpartyDev:
                "https://testing-sg-public-api.hoyoverse.com/upload/outer/GetParamsByCookie",
              overseasOuterAwsByThirdpartyPre:
                "https://pre-sg-public-api.hoyoverse.com/upload/outer/GetParamsByCookie",
              overseasOuterAwsByThirdpartyProd:
                "https://sg-public-api.hoyoverse.com/upload/outer/GetParamsByCookie",
              overseasOuterAwsByatkDev: _e_94,
              overseasOuterAwsByatkPre: ke_95,
              overseasOuterAwsByatkProd: xe_96,
              overseasOuterAwsNoactDev: "https://testing-sg-public-api.hoyoverse.com/upload/outer/getParams",
              overseasOuterAwsNoactPre: "https://pre-sg-public-api.hoyoverse.com/upload/outer/getParams",
              overseasOuterAwsNoactProd: "https://sg-public-api.hoyoverse.com/upload/outer/getParams",
              overseasInnerAwsByactDev: ae_79,
              overseasInnerAwsByactPre: se_80,
              overseasInnerAwsByactProd: ce_81,
              overseasInnerAwsNoactDev: me_88,
              overseasInnerAwsNoactPre: ve_89,
              overseasInnerAwsNoactProd: ge_90,
              inlandInnerByiamDev: v_35,
              inlandInnerByiamPre: g_37,
              inlandInnerByiamProd: w_38,
              overseasInnerByiamDev: Z_72,
              overseasInnerByiamPre: ee_73,
              overseasInnerByiamProd: te_74,
              overseasInnerAwsByiamDev:
                "https://devop-takumi.office.hoyoverse.com/upload/iam_op/getParamsByOp",
              overseasInnerAwsByiamPre:
                "https://preop-takumi.office.hoyoverse.com/upload/iam_op/getParamsByOp",
              overseasInnerAwsByiamProd: "https://op-takumi.office.hoyoverse.com/upload/iam_op/getParamsByOp",
              inlandInnerByiamDevMinio: __39,
              inlandInnerByiamPreMinio: x_41,
              inlandInnerByiamProdMinio: S_42,
              overseasInnerByiamDevMinio: ne_75,
              overseasInnerByiamPreMinio: ie_77,
              overseasInnerByiamProdMinio: oe_78,
              overseasInnerAwsByiamDevMinio:
                "https://testing-sg-public-op.office.hoyoverse.com/mupload/iam_op/minio/getToken",
              overseasInnerAwsByiamPreMinio:
                "https://pre-sg-public-op.office.hoyoverse.com/mupload/iam_op/minio/getToken",
              overseasInnerAwsByiamProdMinio:
                "https://sg-public-op.office.hoyoverse.com/mupload/iam_op/minio/getToken",
              inlandInnerByactDevMinio: "https://devapi-takumi" + f_31 + "/mupload/minio/getToken",
              inlandInnerByactPreMinio: "https://preop-takumi" + f_31 + "/mupload/minio/getToken",
              inlandInnerByactProdMinio: "https://op-takumi" + f_31 + "/mupload/minio/getToken",
              inlandInnerByiamUat: y_36,
              overseasInnerAwsByiamUat:
                "https://devop-test-api.office.hoyoverse.com/upload/iam_op/getParamsByOp",
              inlandInnerByiamUatMinio: k_40,
              overseasInnerByiamUatMinio: re_76,
              overseasInnerAwsByiamUatMinio:
                "https://devop-test-api.office.hoyoverse.com/mupload/iam_op/minio/getToken",
              inlandOuterByiamUat: F_56,
              inlandOuterByiamProd: D_57,
              inlandOuterByiamUatMinio: B_58,
              inlandOuterByiamProdMinio: q_59,
              overseasInnerAwsByiamMihoyoDev: le_82,
              overseasInnerAwsByiamMihoyoPre: ue_83,
              overseasInnerAwsByiamMihoyoProd: fe_84,
              inlandInnerByiamMihoyoDev: A_43,
              inlandInnerByiamMihoyoUat: b_44,
              inlandInnerByiamMihoyoPre: C_45,
              inlandInnerByiamMihoyoProd: E_46,
            },
            Oe_101 = {
              inlandInnerByactDevFetch: "https://devapi-takumi" + f_31 + "/upload/op/fetch",
              inlandInnerByactPreFetch: "https://preop-takumi" + f_31 + "/upload/op/fetch",
              inlandInnerByactProdFetch: "https://op-takumi" + f_31 + "/upload/op/fetch",
              inlandInnerByiamDevFetch: "https://devop-takumi.office" + f_31 + "/upload/iam_op/fetch",
              inlandInnerByiamPreFetch: "https://preop-takumi.office" + f_31 + "/upload/iam_op/fetch",
              inlandInnerByiamProdFetch: "https://op-takumi.office" + f_31 + "/upload/iam_op/fetch",
              inlandInnerNoactDevFetch: "https://devapi-takumi" + f_31 + "/upload/op/fetch",
              inlandInnerNoactPreFetch: "https://preop-takumi" + f_31 + "/upload/op/fetch",
              inlandInnerNoactProdFetch: "https://op-takumi" + f_31 + "/upload/op/fetch",
              overseasInnerByactDevFetch: "https://devapi-os-takumi" + f_31 + "/upload/op/fetch",
              overseasInnerByactPreFetch: "https://preop-os-takumi" + f_31 + "/upload/op/fetch",
              overseasInnerByactProdFetch: "https://op-os-takumi" + f_31 + "/upload/op/fetch",
              overseasInnerByiamDevFetch: "https://devop-os-takumi.office" + f_31 + "/upload/iam_op/fetch",
              overseasInnerByiamPreFetch: "https://preop-os-takumi.office" + f_31 + "/upload/iam_op/fetch",
              overseasInnerByiamProdFetch: "https://op-os-takumi.office" + f_31 + "/upload/iam_op/fetch",
              overseasInnerAwsByactDevFetch: "https://testing-sg-public-op" + f_31 + "/upload/op/fetch",
              overseasInnerAwsByactPreFetch: "https://pre-sg-public-op" + f_31 + "/upload/op/fetch",
              overseasInnerAwsByactProdFetch: "https://sg-public-op" + f_31 + "/upload/op/fetch",
              overseasInnerAwsByiamDevFetch: "https://devop-takumi.office.hoyoverse.com/upload/iam_op/fetch",
              overseasInnerAwsByiamPreFetch: "https://preop-takumi.office.hoyoverse.com/upload/iam_op/fetch",
              overseasInnerAwsByiamProdFetch: "https://op-takumi.office.hoyoverse.com/upload/iam_op/fetch",
              overseasInnerNoactDevFetch: "https://devapi-os-takumi" + f_31 + "/upload/op/fetch",
              overseasInnerNoactPreFetch: "https://preop-os-takumi" + f_31 + "/upload/op/fetch",
              overseasInnerNoactProdFetch: "https://op-os-takumi" + f_31 + "/upload/op/fetch",
              overseasInnerAwsNoactDevFetch: "https://testing-sg-public-op" + f_31 + "/upload/op/fetch",
              overseasInnerAwsNoactPreFetch: "https://pre-sg-public-op" + f_31 + "/upload/op/fetch",
              overseasInnerAwsNoactProdFetch: "https://sg-public-op" + f_31 + "/upload/op/fetch",
              inlandInnerByiamUatFetch: "https://devop-test-api.office" + f_31 + "/upload/iam_op/fetch",
              overseasInnerAwsByiamUatFetch:
                "https://devop-test-api.office.hoyoverse.com/upload/iam_op/fetch",
              inlandOuterByiamUatFetch: "https://dev-opdev-api" + f_31 + "/upload/iam_op_outer/fetch",
              inlandOuterByiamProdFetch:
                "https://public-operation-common" + f_31 + "/upload/iam_op_outer/fetch",
              overseasInnerAwsByiamMihoyoDevFetch:
                "https://testing-sg-public-op" + f_31 + "/upload/iam_op/fetch",
              overseasInnerAwsByiamMihoyoPreFetch: "https://pre-sg-public-op" + f_31 + "/upload/iam_op/fetch",
              overseasInnerAwsByiamMihoyoProdFetch: "https://sg-public-op" + f_31 + "/upload/iam_op/fetch",
              inlandInnerByiamMihoyoDevFetch: "https://devop-takumi.office" + f_31 + "/upload/iam_op/fetch",
              inlandInnerByiamMihoyoUatFetch: "https://devop-test-api.office" + f_31 + "/upload/iam_op/fetch",
              inlandInnerByiamMihoyoPreFetch: "https://preop-takumi.office" + f_31 + "/upload/iam_op/fetch",
              inlandInnerByiamMihoyoProdFetch: "https://op-takumi.office" + f_31 + "/upload/iam_op/fetch",
            };
          function Te_102(e_273, t_274, n_275) {
            var a_276 = e_273.rowFile,
              r_277 = e_273.chunkSize,
              s_278 = void 0 === r_277 ? 2097152 : r_277,
              i_279 = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
              p_280 = Math.ceil(a_276.size / s_278),
              u_281 = 0,
              c_282 = new o_27.default.ArrayBuffer(),
              l_283 = new FileReader();
            function f_284() {
              var e_285 = u_281 * s_278,
                t_286 = e_285 + s_278 >= a_276.size ? a_276.size : e_285 + s_278;
              l_283.readAsArrayBuffer(i_279.call(a_276, e_285, t_286));
            }
            return (
              (l_283.onload = function (e_287) {
                (console.log("read chunk nr", u_281 + 1, "of", p_280),
                  c_282.append(e_287.target.result),
                  (u_281 += 1) < p_280 ? f_284() : t_274 && t_274(c_282.end()));
              }),
              (l_283.onabort = function () {
                console.log("File reading operation has been aborted");
              }),
              (l_283.onerror = function () {
                (console.warn("oops, something went wrong."),
                  n_275(new Error("oops, something went wrong.")));
              }),
              f_284(),
              {
                cancelFileReader: function () {
                  l_283.abort();
                },
              }
            );
          }
        },
        function (e_288, t_289, n_290) {
          "use strict";

          (Object.defineProperty(t_289, "__esModule", {
            value: !0,
          }),
            (t_289.ossFileBatchUpload = t_289.ossFileUpload = void 0));
          var a_291 = s_293(n_290(0)),
            r_292 = s_293(n_290(4));
          function s_293(e_294) {
            return e_294 && e_294.__esModule
              ? e_294
              : {
                  default: e_294,
                };
          }
          ((t_289.ossFileUpload = a_291.default),
            (t_289.ossFileBatchUpload = r_292.default),
            (t_289.default = {
              ossFileUpload: a_291.default,
              ossFileBatchUpload: r_292.default,
              install: function (e_295) {
                ((e_295.prototype.$OssFileUpload = function () {
                  return a_291.default.apply(void 0, arguments);
                }),
                  (e_295.prototype.$OssFileBatchUpload = function () {
                    return r_292.default.apply(void 0, arguments);
                  }));
              },
            }));
        },
        function (e_296, t_297) {
          e_296.exports = r_1;
        },
        function (e_298, t_299) {
          e_298.exports = o_2;
        },
        function (e_300, t_301, n_302) {
          "use strict";

          Object.defineProperty(t_301, "__esModule", {
            value: !0,
          });
          var a_303 =
            Object.assign ||
            function (e_310) {
              for (var t_311 = 1; t_311 < arguments.length; t_311++) {
                var n_312 = arguments[t_311];
                for (var a_313 in n_312)
                  Object.prototype.hasOwnProperty.call(n_312, a_313) && (e_310[a_313] = n_312[a_313]);
              }
              return e_310;
            };
          t_301.default = function (e_314) {
            var t_315 = e_314.area,
              n_316 = e_314.files,
              r_317 = void 0 === n_316 ? [] : n_316,
              s_318 = e_314.onUpload,
              i_319 = (e_314.file_name, o_306(e_314, ["area", "files", "onUpload", "file_name"])),
              l_320 = Array.from(r_317).map(function (e_321) {
                return "both" === t_315
                  ? new Promise(function (t_322) {
                      c_309(
                        e_321,
                        a_303({}, i_319, {
                          overseas: !1,
                        }),
                      ).then(function (n_323) {
                        n_323.status === p_307
                          ? c_309(
                              e_321,
                              a_303({}, i_319, {
                                overseas: "s3" !== i_319.overseas || "s3",
                                file_name: i_319.inner ? n_323.url.split("/").pop() : void 0,
                              }),
                            ).then(function (e_324) {
                              t_322(
                                a_303({}, n_323, {
                                  url_os: e_324.url,
                                  ext_os: e_324.ext,
                                  status: e_324.status === p_307 ? p_307 : u_308,
                                }),
                              );
                            })
                          : t_322(
                              a_303({}, n_323, {
                                url_os: n_323.url,
                              }),
                            );
                      });
                    })
                  : c_309(
                      e_321,
                      a_303(
                        {},
                        i_319,
                        "os" === t_315
                          ? {
                              overseas: "s3" !== i_319.overseas || "s3",
                            }
                          : {
                              overseas: !1,
                            },
                      ),
                    );
              });
            Promise.all(l_320).then(function (e_325) {
              var t_326 = e_325.filter(function (e_327) {
                return "error" === e_327.status;
              });
              s_318(e_325, t_326);
            });
          };
          var r_304,
            i_305 =
              (r_304 = n_302(0)) && r_304.__esModule
                ? r_304
                : {
                    default: r_304,
                  };
          function o_306(e_328, t_329) {
            var n_330 = {};
            for (var a_331 in e_328)
              t_329.indexOf(a_331) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e_328, a_331) && (n_330[a_331] = e_328[a_331]));
            return n_330;
          }
          var p_307 = "success",
            u_308 = "error";
          function c_309(e_332, t_333) {
            var n_334 = t_333.onProgress,
              r_335 = o_306(t_333, ["onProgress"]);
            return new Promise(function (t_336) {
              var s_337 = a_303({}, r_335, {
                rowFile: e_332,
                onSuccess: function (n_338) {
                  0 === n_338.retcode
                    ? t_336({
                        name: e_332.name,
                        status: p_307,
                        url: n_338.data.url,
                        ext: n_338.data.ext,
                      })
                    : t_336({
                        name: e_332.name,
                        status: u_308,
                        url: URL.createObjectURL(e_332),
                      });
                },
                onProgress: function (t_339) {
                  n_334 && n_334(t_339, e_332);
                },
                onError: function () {
                  t_336({
                    name: e_332.name,
                    status: u_308,
                    url: URL.createObjectURL(e_332),
                  });
                },
              });
              (0, i_305.default)(s_337);
            });
          }
        },
      ]).default)));
};
