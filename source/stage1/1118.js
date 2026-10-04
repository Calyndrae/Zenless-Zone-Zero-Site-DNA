// protocol CMS API (getPrivacy, getUser, getTerms2/3, getKrHistory, getJpFund, getJpAbout) — module 1118 from f5b0acd
// module 1118 from f5b0acd.js
// deps: 85, 84, 67, 105, 106, 56, 77, 1117, 28
const module_1118 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(85), webpackRequire(84), webpackRequire(67), webpackRequire(105), webpackRequire(106));
  var vendorBundle = webpackRequire(56),
    r_1 = (webpackRequire(77), webpackRequire(1117)),
    siteConfigConstants = webpackRequire(28);
  function l_2(object, t_4) {
    var e_5 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var o_6 = Object.getOwnPropertySymbols(object);
      (t_4 &&
        (o_6 = o_6.filter(function (t_7) {
          return Object.getOwnPropertyDescriptor(object, t_7).enumerable;
        })),
        e_5.push.apply(e_5, o_6));
    }
    return e_5;
  }
  function f_3(t_8) {
    for (var i_9 = 1; i_9 < arguments.length; i_9++) {
      var source = null != arguments[i_9] ? arguments[i_9] : {};
      i_9 % 2
        ? l_2(Object(source), !0).forEach(function (e_10) {
            Object(vendorBundle.a)(t_8, e_10, source[e_10]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t_8, Object.getOwnPropertyDescriptors(source))
          : l_2(Object(source)).forEach(function (e_11) {
              Object.defineProperty(t_8, e_11, Object.getOwnPropertyDescriptor(source, e_11));
            });
    }
    return t_8;
  }
  var param = {
    iPageSize: 1,
    iPage: 1,
    isPreview:
      "development" === siteConfigConstants.environment ||
      "test" === siteConfigConstants.environment ||
      "prerelease" === siteConfigConstants.environment
        ? 1
        : 0,
  };
  webpackExports.a = {
    formatProtocol: function () {
      var t_12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return (
        t_12.forEach(function (t_13) {
          ((t_13.sExt = "string" == typeof t_13.sExt ? JSON.parse(t_13.sExt) : t_13.sExt),
            (t_13.pdfUrl = t_13.sExt.link_pdf));
        }),
        t_12
      );
    },
    getPrivacy: function () {
      var t_14 = this,
        e_15 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        o_16 = function () {
          var t_17 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e_18 = Object.assign(
              f_3(
                f_3({}, param),
                {},
                {
                  iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.PROTOCOL.PRIVACY,
                },
              ),
              t_17,
            );
          return e_18;
        };
      return new Promise(function (n_19, l_20) {
        Object(r_1.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          e_15,
          o_16,
          r_1.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = t_14.formatProtocol(data.list)), n_19(data.list[0]));
          })
          .catch(function (t_21) {
            l_20(t_21);
          });
      });
    },
    getUser: function () {
      var t_22 = this,
        e_23 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        o_24 = function () {
          var t_25 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e_26 = Object.assign(
              f_3(
                f_3({}, param),
                {},
                {
                  iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.PROTOCOL.TERMS,
                },
              ),
              t_25,
            );
          return e_26;
        };
      return new Promise(function (n_27, l_28) {
        Object(r_1.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          e_23,
          o_24,
          r_1.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = t_22.formatProtocol(data.list)), n_27(data.list[0]));
          })
          .catch(function (t_29) {
            l_28(t_29);
          });
      });
    },
    getTerms2: function () {
      var t_30 = this,
        e_31 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        o_32 = function () {
          var t_33 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e_34 = Object.assign(
              f_3(
                f_3({}, param),
                {},
                {
                  iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.PROTOCOL.TERMS2,
                },
              ),
              t_33,
            );
          return e_34;
        };
      return new Promise(function (n_35, l_36) {
        Object(r_1.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          e_31,
          o_32,
          r_1.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = t_30.formatProtocol(data.list)), n_35(data.list[0]));
          })
          .catch(function (t_37) {
            l_36(t_37);
          });
      });
    },
    getTerms3: function () {
      var t_38 = this,
        e_39 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        o_40 = function () {
          var t_41 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e_42 = Object.assign(
              f_3(
                f_3({}, param),
                {},
                {
                  iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.PROTOCOL.TERMS3,
                },
              ),
              t_41,
            );
          return e_42;
        };
      return new Promise(function (n_43, l_44) {
        Object(r_1.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          e_39,
          o_40,
          r_1.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = t_38.formatProtocol(data.list)), n_43(data.list[0]));
          })
          .catch(function (t_45) {
            l_44(t_45);
          });
      });
    },
    getKrHistory: function () {
      var t_46 = this,
        e_47 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        o_48 = function () {
          var t_49 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e_50 = Object.assign(
              f_3(
                f_3({}, param),
                {},
                {
                  iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.PROTOCOL.HISTORY,
                },
              ),
              t_49,
            );
          return e_50;
        };
      return new Promise(function (n_51, l_52) {
        Object(r_1.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          e_47,
          o_48,
          r_1.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = t_46.formatProtocol(data.list)), n_51(data.list[0]));
          })
          .catch(function (t_53) {
            l_52(t_53);
          });
      });
    },
    getJpFund: function () {
      var t_54 = this,
        e_55 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        o_56 = function () {
          var t_57 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e_58 = Object.assign(
              f_3(
                f_3({}, param),
                {},
                {
                  iInfoId: siteConfigConstants.INFO_ID_CONFIG.FUND,
                  iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.PROTOCOL.JP_FUND,
                },
              ),
              t_57,
            );
          return e_58;
        };
      return new Promise(function (n_59, l_60) {
        Object(r_1.get)(
          "".concat(siteConfigConstants.apiBase, "/getContent"),
          e_55,
          o_56,
          r_1.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = t_54.formatProtocol([data])), n_59(data.list[0]));
          })
          .catch(function (t_61) {
            l_60(t_61);
          });
      });
    },
    getJpAbout: function () {
      var t_62 = this,
        e_63 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        o_64 = function () {
          var t_65 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e_66 = Object.assign(
              f_3(
                f_3({}, param),
                {},
                {
                  iInfoId: siteConfigConstants.INFO_ID_CONFIG.ABOUT,
                  iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.PROTOCOL.JP_FUND,
                },
              ),
              t_65,
            );
          return e_66;
        };
      return new Promise(function (n_67, l_68) {
        Object(r_1.get)(
          "".concat(siteConfigConstants.apiBase, "/getContent"),
          e_63,
          o_64,
          r_1.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = t_62.formatProtocol([data])), n_67(data.list[0]));
          })
          .catch(function (t_69) {
            l_68(t_69);
          });
      });
    },
  };
};
