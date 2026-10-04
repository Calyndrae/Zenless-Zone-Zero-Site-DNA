// home CMS API (getKV, getFollowSocials, getFeature) — module 1164 from ded62d7
// module 1164 from ded62d7.js
// deps: 77, 1117, 28
const module_1164 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire(77);
  var userModelRequest = webpackRequire(1117),
    siteConfigConstants = webpackRequire(28);
  webpackExports.a = {
    getKV: function () {
      var e_1 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        t_2 = function () {
          var e_3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t_4 = Object.assign(
              {
                iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.KV,
                iPageSize: 1,
                iPage: 1,
              },
              e_3,
            );
          return t_4;
        };
      return new Promise(function (n_5, c_6) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          e_1,
          t_2,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            (data.list.forEach(function (e_7) {
              ((e_7.sExt = "string" == typeof e_7.sExt ? JSON.parse(e_7.sExt) : e_7.sExt),
                (e_7.kv = e_7.sExt["home-kv"][0].url),
                (e_7.kvMob = e_7.sExt["home-kv-m"][0].url),
                (e_7.youtobeUrl = e_7.sExt["home-youtobe"]));
            }),
              n_5(data.list[0]));
          })
          .catch(function (e_8) {
            c_6(e_8);
          });
      });
    },
    getFollowSocials: function () {
      var e_9 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        t_10 = function () {
          var e_11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t_12 = Object.assign(
              {
                iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.SOCIAL.FOLLOW,
                iPageSize: 10,
                iPage: 1,
              },
              e_11,
            );
          return t_12;
        };
      return new Promise(function (n_13, c_14) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          e_9,
          t_10,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            (data.list.forEach(function (e_15) {
              ((e_15.sExt = "string" == typeof e_15.sExt ? JSON.parse(e_15.sExt) : e_15.sExt),
                (e_15.socialName = e_15.sExt["social-name"]),
                (e_15.socialKey = e_15.sExt["social-name-key"]),
                (e_15.socialIcoName = e_15.sExt["social-ico-name"]),
                (e_15.socialLink = e_15.sExt["social-link"]),
                (e_15.socialIcon = e_15.sExt["social-icon"][0].url),
                (e_15.socialIconActive = e_15.sExt["social-icon-active"][0].url),
                (e_15.socialQrcode =
                  e_15.sExt["social-qrcode"] &&
                  e_15.sExt["social-qrcode"][0] &&
                  e_15.sExt["social-qrcode"][0].url));
            }),
              n_13(data.list));
          })
          .catch(function (e_16) {
            c_14(e_16);
          });
      });
    },
    getFeature: function () {
      var e_17 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        t_18 = function () {
          var e_19 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t_20 = Object.assign(
              {
                iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.FEATURE,
                iPageSize: 10,
                iPage: 1,
              },
              e_19,
            );
          return t_20;
        };
      return new Promise(function (n_21, c_22) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          e_17,
          t_18,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            (data.list.forEach(function (e_23) {
              var t_24, n_25;
              ((e_23.sExt = "string" == typeof e_23.sExt ? JSON.parse(e_23.sExt) : e_23.sExt),
                (e_23.title = e_23.sTitle),
                (e_23.summary = e_23.sIntro),
                (e_23.banner = e_23.sExt["feature-banner"][0].url),
                (e_23.bannerM =
                  e_23.sExt["feature-banner-m"] &&
                  (null === (t_24 = e_23.sExt["feature-banner-m"][0]) || void 0 === t_24
                    ? void 0
                    : t_24.url)),
                (e_23.bannerInner =
                  e_23.sExt["feature-inner"] &&
                  (null === (n_25 = e_23.sExt["feature-inner"][0]) || void 0 === n_25 ? void 0 : n_25.url)));
            }),
              n_21(data));
          })
          .catch(function (e_26) {
            c_22(e_26);
          });
      });
    },
  };
};
