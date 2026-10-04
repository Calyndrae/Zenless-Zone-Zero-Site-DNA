/**
 * home-CMS-API — readable reconstruction of webpack module 1164 (chunk ded62d7.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/ded62d7.js
 *
 * Home page CMS API helpers, all calling the user-model get (module 1117) on appBundle.apiBase + "/getContentList". getKV loads channel CHANNEL_ID_CONFIG.KV (one item) and maps sExt home-kv, home-kv-m and home-youtobe to kv, kvMob and youtobeUrl, resolving the first item. getFollowSocials loads CHANNEL_ID_CONFIG.SOCIAL.FOLLOW and maps social-name, social-name-key, social-ico-name, social-link, social-icon, social-icon-active and social-qrcode onto each entry. getFeature loads CHANNEL_ID_CONFIG.FEATURE and maps sTitle/sIntro plus feature-banner, feature-banner-m and feature-inner to title, summary, banner, bannerM and bannerInner.
 *
 * Exports (minified key → meaning):
 *   a → home CMS API object { getKV, getFollowSocials, getFeature }
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1164 from ded62d7.js
// deps: 77, 1117, 28
const module_1164 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire(77);
  var userModelRequest = webpackRequire(1117),
    siteConfigConstants = webpackRequire(28);
  webpackExports.a = {
    getKV: function () {
      var kvOptions =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        buildKvParams = function () {
          var kvExtraParams = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            kvParams = Object.assign(
              {
                iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.KV,
                iPageSize: 1,
                iPage: 1,
              },
              kvExtraParams,
            );
          return kvParams;
        };
      return new Promise(function (resolveKv, rejectKv) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          kvOptions,
          buildKvParams,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            (data.list.forEach(function (kvItem) {
              ((kvItem.sExt = "string" == typeof kvItem.sExt ? JSON.parse(kvItem.sExt) : kvItem.sExt),
                (kvItem.kv = kvItem.sExt["home-kv"][0].url),
                (kvItem.kvMob = kvItem.sExt["home-kv-m"][0].url),
                (kvItem.youtobeUrl = kvItem.sExt["home-youtobe"]));
            }),
              resolveKv(data.list[0]));
          })
          .catch(function (kvError) {
            rejectKv(kvError);
          });
      });
    },
    getFollowSocials: function () {
      var socialOptions =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        buildSocialParams = function () {
          var socialExtraParams = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            socialParams = Object.assign(
              {
                iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.SOCIAL.FOLLOW,
                iPageSize: 10,
                iPage: 1,
              },
              socialExtraParams,
            );
          return socialParams;
        };
      return new Promise(function (resolveSocials, rejectSocials) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          socialOptions,
          buildSocialParams,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            (data.list.forEach(function (social) {
              ((social.sExt = "string" == typeof social.sExt ? JSON.parse(social.sExt) : social.sExt),
                (social.socialName = social.sExt["social-name"]),
                (social.socialKey = social.sExt["social-name-key"]),
                (social.socialIcoName = social.sExt["social-ico-name"]),
                (social.socialLink = social.sExt["social-link"]),
                (social.socialIcon = social.sExt["social-icon"][0].url),
                (social.socialIconActive = social.sExt["social-icon-active"][0].url),
                (social.socialQrcode =
                  social.sExt["social-qrcode"] &&
                  social.sExt["social-qrcode"][0] &&
                  social.sExt["social-qrcode"][0].url));
            }),
              resolveSocials(data.list));
          })
          .catch(function (socialError) {
            rejectSocials(socialError);
          });
      });
    },
    getFeature: function () {
      var featureOptions =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        buildFeatureParams = function () {
          var featureExtraParams = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            featureParams = Object.assign(
              {
                iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.FEATURE,
                iPageSize: 10,
                iPage: 1,
              },
              featureExtraParams,
            );
          return featureParams;
        };
      return new Promise(function (resolveFeature, rejectFeature) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          featureOptions,
          buildFeatureParams,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            (data.list.forEach(function (feature) {
              var bannerMobileAsset, bannerInnerAsset;
              ((feature.sExt = "string" == typeof feature.sExt ? JSON.parse(feature.sExt) : feature.sExt),
                (feature.title = feature.sTitle),
                (feature.summary = feature.sIntro),
                (feature.banner = feature.sExt["feature-banner"][0].url),
                (feature.bannerM =
                  feature.sExt["feature-banner-m"] &&
                  (null === (bannerMobileAsset = feature.sExt["feature-banner-m"][0]) ||
                  void 0 === bannerMobileAsset
                    ? void 0
                    : bannerMobileAsset.url)),
                (feature.bannerInner =
                  feature.sExt["feature-inner"] &&
                  (null === (bannerInnerAsset = feature.sExt["feature-inner"][0]) ||
                  void 0 === bannerInnerAsset
                    ? void 0
                    : bannerInnerAsset.url)));
            }),
              resolveFeature(data));
          })
          .catch(function (featureError) {
            rejectFeature(featureError);
          });
      });
    },
  };
};
