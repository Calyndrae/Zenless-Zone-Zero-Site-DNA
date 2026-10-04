// user-model request (get/post/formatParams/formatResult) — module 1117 from fd57a96
// module 1117 from fd57a96.js
// deps: 1239, 84, 136, 77, 137, 353, 138, 114, 28, 1176, 1240, 1241, 1243, 1166, 1244, 500
const module_1117 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var babelTypeofHelper = webpackRequire(1239);
  (webpackRequire(84),
    webpackRequire(136),
    webpackRequire(77),
    webpackRequire(137),
    webpackRequire(353),
    webpackRequire(138),
    Object.defineProperty(webpackExports, "__esModule", {
      value: !0,
    }),
    (webpackExports.del =
      webpackExports.put =
      webpackExports.post =
      webpackExports.get =
      webpackExports.requestIsSucc =
      webpackExports.defaultFormatResult =
      webpackExports.formatParams =
      webpackExports.formatResult =
      webpackExports.defaultFormatParams =
        void 0));
  var r_1 =
      "function" == typeof Symbol && "symbol" === babelTypeofHelper(Symbol.iterator)
        ? function (e_19) {
            return babelTypeofHelper(e_19);
          }
        : function (e_20) {
            return e_20 &&
              "function" == typeof Symbol &&
              e_20.constructor === Symbol &&
              e_20 !== Symbol.prototype
              ? "symbol"
              : babelTypeofHelper(e_20);
          },
    d_2 = y_8(webpackRequire(114)),
    siteConfigConstants = webpackRequire(28),
    c_3 = y_8(webpackRequire(1176)),
    f_4 = y_8(webpackRequire(1240)),
    m_5 = y_8(webpackRequire(1241)),
    I_6 = y_8(webpackRequire(1243)),
    userModelUtils = webpackRequire(1166),
    h_7 = y_8(webpackRequire(1244));
  function y_8(e_21) {
    return e_21 && e_21.__esModule
      ? e_21
      : {
          default: e_21,
        };
  }
  var S_9 = "GET",
    M_10 = "POST",
    w_11 = "DELETE",
    P_12 = function () {
      var e_22 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t_23 = arguments[1];
      userModelUtils.GLB.clearTimeout(c_3.default.get("hideDefaultLoadingTimer"));
      var o_24 = c_3.default.get("isRequestingCount") || 0;
      (c_3.default.set("isRequestingCount", o_24 + 1),
        (0, userModelUtils.log)("isRequestingCount+", o_24),
        0 === o_24 &&
          (!1 === t_23 || (void 0 === t_23 && !h_7.default.loadingDelay)
            ? h_7.default.showLoading(e_22)
            : setTimeout(function () {
                c_3.default.get("isRequestingCount") > 0 && h_7.default.showLoading(e_22);
              }, t_23 || h_7.default.loadingDelay)));
    },
    j_13 = function () {
      var e_25 = c_3.default.get("isRequestingCount") || 0;
      (e_25 > 0 && c_3.default.set("isRequestingCount", e_25 - 1),
        (0, userModelUtils.log)("isRequestingCount-", e_25));
      var t_26 = userModelUtils.GLB.setTimeout(function () {
        0 === c_3.default.get("isRequestingCount") &&
          ((0, userModelUtils.log)("isRequestingCount-", "hideLoading"), h_7.default.hideLoading());
      }, 300);
      c_3.default.set("hideDefaultLoadingTimer", t_26);
    },
    N_14 = function () {
      var e_27 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
        t_28 = arguments[1],
        o_29 = arguments[2];
      userModelUtils.isSSR ||
        (void 0 !== t_28 &&
          !1 !== t_28 &&
          ("function" == typeof t_28
            ? t_28(e_27)
            : e_27
              ? P_12("string" == typeof t_28 ? t_28 : "", o_29)
              : j_13()));
    },
    x_15 = (webpackExports.defaultFormatParams = function (e_30) {
      return e_30;
    }),
    D_16 =
      ((webpackExports.formatResult = function (data) {
        return data;
      }),
      (webpackExports.formatParams = function (e_31) {
        return e_31;
      }),
      (webpackExports.defaultFormatResult = function (data) {
        return data;
      })),
    i_17 = ((webpackExports.requestIsSucc = h_7.default.isSuccessResponse), 0),
    R_18 = function (e_32, t_33, n_34, c_35, y_36) {
      var M_37 = {};
      (void 0 === n_34.data &&
      void 0 === n_34.preParams &&
      void 0 === n_34.cache &&
      void 0 === n_34.loading &&
      void 0 === n_34.success &&
      void 0 === n_34.error &&
      void 0 === n_34.download &&
      void 0 === n_34.response
        ? (M_37.data = n_34)
        : (M_37 = n_34),
        (M_37.preParams = void 0 === M_37.preParams || M_37.preParams),
        userModelUtils.isSSR && ((M_37.cache = !1), (M_37.loading = !1), (M_37.success = !1)));
      var w_38 = h_7.default.formatParams(M_37.data) || {};
      if (
        (M_37.preParams &&
          "prerelease" === siteConfigConstants.environment &&
          ((w_38.isPreview = 1), (w_38.prerelease = 1), (w_38.timestamp = Date.now())),
        (w_38 = c_35(w_38)),
        M_37.download)
      )
        return (
          (0, I_6.default)(
            (0, userModelUtils.toUrlWithParams)(
              /^http/i.test(t_33) ? t_33 : (M_37.baseURL ? M_37.baseURL : siteConfigConstants.apiBase) + t_33,
              w_38,
            ),
          ),
          Promise.resolve({
            retcode: 0,
          })
        );
      (!userModelUtils.isSSR &&
        /authkey=/gi.test(window.location.search) &&
        (t_33 += (t_33.indexOf("?") > -1 ? "&" : "?") + window.location.search.replace("?", "")),
        (t_33 = h_7.default.formatURL(t_33)));
      var P_39 = (0, userModelUtils.encode)((0, userModelUtils.toUrlWithParams)(t_33, w_38));
      if (
        ((0, userModelUtils.log)("request from cache args.cache", P_39, M_37.cache),
        e_32 === S_9 && M_37.cache)
      ) {
        var j_40 = f_4.default.get(P_39);
        if (((0, userModelUtils.log)("request from cache ", P_39, j_40), j_40))
          return (
            (0, userModelUtils.log)("request from cache after"),
            j_40.then(function (data) {
              return y_36(M_37.response ? data : h_7.default.formatResult(data));
            })
          );
      }
      if (e_32 === S_9) {
        (0, userModelUtils.log)("request merge", P_39, (i_17 += 1));
        var x_41 = m_5.default.merge(P_39);
        if (((0, userModelUtils.log)("request merge result ", P_39, x_41), x_41))
          return (
            (0, userModelUtils.log)("request merge return", P_39),
            x_41.then(function (data) {
              return y_36(M_37.response ? data : h_7.default.formatResult(data));
            })
          );
      }
      return (
        (0, userModelUtils.log)("request merge return after xxx", P_39),
        N_14(!0, M_37.loading, M_37.loadingDelay),
        (0, userModelUtils.log)("request merge x", P_39, i_17),
        new Promise(function (n_42, c_43) {
          (0, userModelUtils.log)("request merge y", P_39, i_17);
          var I_44 = M_37,
            j_45 =
              (I_44.params,
              I_44.data,
              (function (e_47, t_48) {
                var o_49 = {};
                for (var i_50 in e_47)
                  t_48.indexOf(i_50) >= 0 ||
                    (Object.prototype.hasOwnProperty.call(e_47, i_50) && (o_49[i_50] = e_47[i_50]));
                return o_49;
              })(I_44, ["params", "data"]));
          e_32 === S_9 ? (j_45.params = w_38) : (j_45.data = w_38);
          var x_46 = d_2.default;
          if ("nuxt" === siteConfigConstants.axiosType)
            try {
              x_46 = webpackRequire(500).memoryCache.get("nuxtContext").$axios;
            } catch (e_51) {}
          x_46(
            Object.assign(
              {
                baseURL: siteConfigConstants.apiBase,
                url: t_33,
                method: e_32.toLowerCase(),
              },
              j_45,
            ),
          )
            .then(function (o_52) {
              var d_53,
                l_54,
                I_55 = o_52.data;
              if (
                (N_14(!1, M_37.loading),
                (0, userModelUtils.log)(t_33, "success", I_55),
                h_7.default.isSuccessResponse(I_55))
              ) {
                !(function (e_59) {
                  var t_60 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  void 0 !== e_59 &&
                    !1 !== e_59 &&
                    ("function" == typeof e_59
                      ? e_59(t_60)
                      : "string" == typeof e_59
                        ? h_7.default.showSuccMessage(e_59)
                        : "object" === (void 0 === e_59 ? "undefined" : r_1(e_59))
                          ? h_7.default.showSuccMessage(
                              e_59.content || t_60.msg || t_60.message || "操作处理完成",
                              e_59.title || "",
                            )
                          : h_7.default.showSuccMessage(t_60.msg || t_60.message || "操作处理完成"));
                })(M_37.success, I_55);
                var w_56 = JSON.parse(JSON.stringify(I_55)),
                  j_57 = y_36(M_37.response ? w_56 : h_7.default.formatResult(w_56));
                (e_32 === S_9 && (f_4.default.set(P_39, I_55), m_5.default.complete(P_39, !0, I_55)),
                  n_42(j_57));
              } else {
                if (I_55 && I_55.retcode && -100 === I_55.retcode) (0, userModelUtils.log)("未登录");
                else if (I_55 && I_55.retcode && -403 === I_55.retcode)
                  ((0, userModelUtils.log)("无权限"), m_5.default.complete(P_39, !0, I_55));
                else {
                  var x_58 = I_55.msg || I_55.message || "接口数据格式错误";
                  ((d_53 = M_37.error),
                    (l_54 = {
                      status: I_55 && I_55.retcode ? I_55.retcode : 1,
                      statusText: x_58,
                    }),
                    !1 !== d_53 &&
                      ("function" == typeof d_53
                        ? d_53(l_54)
                        : "string" == typeof d_53
                          ? h_7.default.showWarnMessage(d_53)
                          : "object" === (void 0 === d_53 ? "undefined" : r_1(d_53))
                            ? h_7.default.showWarnMessage(d_53.content || l_54.statusText, d_53.title || "")
                            : h_7.default.showWarnMessage(l_54.statusText)));
                }
                (e_32 === S_9 && m_5.default.remove(P_39), c_43(o_52));
              }
            })
            .catch(function (e_61) {
              (m_5.default.remove(P_39), N_14(!1, M_37.loading));
              var o_62 = 0,
                n_63 = "";
              if (e_61.response) {
                var d_64 = e_61.response;
                ((o_62 = d_64.status), (n_63 = d_64.statusText));
              } else n_63 = e_61.request ? "no response was received" : e_61.message;
              (!(function (e_65, t_66) {
                !1 !== e_65 &&
                  ("function" == typeof e_65
                    ? e_65(t_66)
                    : "string" == typeof e_65
                      ? h_7.default.showErrorMessage(e_65)
                      : "object" === (void 0 === e_65 ? "undefined" : r_1(e_65))
                        ? h_7.default.showErrorMessage(e_65.content || t_66.statusText, e_65.title || "")
                        : h_7.default.showErrorMessage(t_66.statusText));
              })(M_37.error, {
                status: o_62,
                statusText: n_63,
              }),
                (0, userModelUtils.log)(t_33, "error", e_61),
                c_43(e_61));
            });
        })
      );
    };
  webpackExports.default = {
    defaults: h_7.default,
  };
  ((webpackExports.get = function () {
    var e_67 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t_68 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      o_69 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x_15,
      n_70 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : D_16;
    return R_18(S_9, e_67, t_68, o_69, n_70);
  }),
    (webpackExports.post = function () {
      var e_71 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t_72 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o_73 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x_15,
        n_74 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : D_16;
      return R_18(M_10, e_71, t_72, o_73, n_74);
    }),
    (webpackExports.put = function () {
      var e_75 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t_76 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o_77 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x_15,
        n_78 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : D_16;
      return R_18("PUT", e_75, t_76, o_77, n_78);
    }),
    (webpackExports.del = function () {
      var e_79 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t_80 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o_81 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x_15,
        n_82 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : D_16;
      return R_18(w_11, e_79, t_80, o_81, n_82);
    }));
};
