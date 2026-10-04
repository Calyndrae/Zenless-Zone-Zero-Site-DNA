/**
 * protocol-CMS-API — readable reconstruction of webpack module 1118 (chunk f5b0acd.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/f5b0acd.js
 *
 * CMS protocol API helpers for legal/policy pages. Each method builds query params from a base {iPageSize: 1, iPage: 1, isPreview (1 in development/test/prerelease)} plus a channel id from appBundle.CHANNEL_ID_CONFIG.PROTOCOL (PRIVACY, TERMS, TERMS2, TERMS3, HISTORY, JP_FUND) and calls the user-model get (module 1117) on appBundle.apiBase + "/getContentList" (getPrivacy, getUser, getTerms2, getTerms3, getKrHistory) or "/getContent" with iInfoId from INFO_ID_CONFIG.FUND/ABOUT (getJpFund, getJpAbout), resolving the first item. formatProtocol parses each item's sExt JSON string and copies sExt.link_pdf to pdfUrl.
 *
 * Exports (minified key → meaning):
 *   a → protocol CMS API object { formatProtocol, getPrivacy, getUser, getTerms2, getTerms3, getKrHistory, getJpFund, getJpAbout }
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1118 from f5b0acd.js
// deps: 85, 84, 67, 105, 106, 56, 77, 1117, 28
const module_1118 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(85), webpackRequire(84), webpackRequire(67), webpackRequire(105), webpackRequire(106));
  var vendorBundle = webpackRequire(56),
    userModelRequest = (webpackRequire(77), webpackRequire(1117)),
    siteConfigConstants = webpackRequire(28);
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      (enumerableOnly &&
        (symbols = symbols.filter(function (symbol) {
          return Object.getOwnPropertyDescriptor(object, symbol).enumerable;
        })),
        keys.push.apply(keys, symbols));
    }
    return keys;
  }
  function objectSpread(target) {
    for (var argIndex = 1; argIndex < arguments.length; argIndex++) {
      var source = null != arguments[argIndex] ? arguments[argIndex] : {};
      argIndex % 2
        ? ownKeys(Object(source), !0).forEach(function (key) {
            Object(vendorBundle.a)(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
          : ownKeys(Object(source)).forEach(function (descriptorKey) {
              Object.defineProperty(
                target,
                descriptorKey,
                Object.getOwnPropertyDescriptor(source, descriptorKey),
              );
            });
    }
    return target;
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
      var protocolList = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return (
        protocolList.forEach(function (protocolItem) {
          ((protocolItem.sExt =
            "string" == typeof protocolItem.sExt ? JSON.parse(protocolItem.sExt) : protocolItem.sExt),
            (protocolItem.pdfUrl = protocolItem.sExt.link_pdf));
        }),
        protocolList
      );
    },
    getPrivacy: function () {
      var privacySelf = this,
        privacyOptions =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        buildPrivacyParams = function () {
          var privacyExtraParams = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            privacyParams = Object.assign(
              objectSpread(
                objectSpread({}, param),
                {},
                {
                  iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.PROTOCOL.PRIVACY,
                },
              ),
              privacyExtraParams,
            );
          return privacyParams;
        };
      return new Promise(function (resolvePrivacy, rejectPrivacy) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          privacyOptions,
          buildPrivacyParams,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = privacySelf.formatProtocol(data.list)), resolvePrivacy(data.list[0]));
          })
          .catch(function (privacyError) {
            rejectPrivacy(privacyError);
          });
      });
    },
    getUser: function () {
      var userSelf = this,
        userOptions =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        buildUserParams = function () {
          var userExtraParams = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            userParams = Object.assign(
              objectSpread(
                objectSpread({}, param),
                {},
                {
                  iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.PROTOCOL.TERMS,
                },
              ),
              userExtraParams,
            );
          return userParams;
        };
      return new Promise(function (resolveUser, rejectUser) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          userOptions,
          buildUserParams,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = userSelf.formatProtocol(data.list)), resolveUser(data.list[0]));
          })
          .catch(function (userError) {
            rejectUser(userError);
          });
      });
    },
    getTerms2: function () {
      var terms2Self = this,
        terms2Options =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        buildTerms2Params = function () {
          var terms2ExtraParams = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            terms2Params = Object.assign(
              objectSpread(
                objectSpread({}, param),
                {},
                {
                  iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.PROTOCOL.TERMS2,
                },
              ),
              terms2ExtraParams,
            );
          return terms2Params;
        };
      return new Promise(function (resolveTerms2, rejectTerms2) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          terms2Options,
          buildTerms2Params,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = terms2Self.formatProtocol(data.list)), resolveTerms2(data.list[0]));
          })
          .catch(function (terms2Error) {
            rejectTerms2(terms2Error);
          });
      });
    },
    getTerms3: function () {
      var terms3Self = this,
        terms3Options =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        buildTerms3Params = function () {
          var terms3ExtraParams = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            terms3Params = Object.assign(
              objectSpread(
                objectSpread({}, param),
                {},
                {
                  iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.PROTOCOL.TERMS3,
                },
              ),
              terms3ExtraParams,
            );
          return terms3Params;
        };
      return new Promise(function (resolveTerms3, rejectTerms3) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          terms3Options,
          buildTerms3Params,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = terms3Self.formatProtocol(data.list)), resolveTerms3(data.list[0]));
          })
          .catch(function (terms3Error) {
            rejectTerms3(terms3Error);
          });
      });
    },
    getKrHistory: function () {
      var krHistorySelf = this,
        krHistoryOptions =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        buildKrHistoryParams = function () {
          var krHistoryExtraParams = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            krHistoryParams = Object.assign(
              objectSpread(
                objectSpread({}, param),
                {},
                {
                  iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.PROTOCOL.HISTORY,
                },
              ),
              krHistoryExtraParams,
            );
          return krHistoryParams;
        };
      return new Promise(function (resolveKrHistory, rejectKrHistory) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          krHistoryOptions,
          buildKrHistoryParams,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = krHistorySelf.formatProtocol(data.list)), resolveKrHistory(data.list[0]));
          })
          .catch(function (krHistoryError) {
            rejectKrHistory(krHistoryError);
          });
      });
    },
    getJpFund: function () {
      var jpFundSelf = this,
        jpFundOptions =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        buildJpFundParams = function () {
          var jpFundExtraParams = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            jpFundParams = Object.assign(
              objectSpread(
                objectSpread({}, param),
                {},
                {
                  iInfoId: siteConfigConstants.INFO_ID_CONFIG.FUND,
                  iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.PROTOCOL.JP_FUND,
                },
              ),
              jpFundExtraParams,
            );
          return jpFundParams;
        };
      return new Promise(function (resolveJpFund, rejectJpFund) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContent"),
          jpFundOptions,
          buildJpFundParams,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = jpFundSelf.formatProtocol([data])), resolveJpFund(data.list[0]));
          })
          .catch(function (jpFundError) {
            rejectJpFund(jpFundError);
          });
      });
    },
    getJpAbout: function () {
      var jpAboutSelf = this,
        jpAboutOptions =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        buildJpAboutParams = function () {
          var jpAboutExtraParams = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            jpAboutParams = Object.assign(
              objectSpread(
                objectSpread({}, param),
                {},
                {
                  iInfoId: siteConfigConstants.INFO_ID_CONFIG.ABOUT,
                  iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.PROTOCOL.JP_FUND,
                },
              ),
              jpAboutExtraParams,
            );
          return jpAboutParams;
        };
      return new Promise(function (resolveJpAbout, rejectJpAbout) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContent"),
          jpAboutOptions,
          buildJpAboutParams,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = jpAboutSelf.formatProtocol([data])), resolveJpAbout(data.list[0]));
          })
          .catch(function (jpAboutError) {
            rejectJpAbout(jpAboutError);
          });
      });
    },
  };
};
