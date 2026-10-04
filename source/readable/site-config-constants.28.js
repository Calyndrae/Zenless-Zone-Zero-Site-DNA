/**
 * site-config-constants — readable reconstruction of webpack module 28 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Build-time environment configuration module (ES module with named exports). It defines the production/sea environment flags, the HoYoverse API base URLs (content_v2_user static content API, the e20220610reserve event API, sg-public-api IP API, account management site), the gacha probability page URL and GACHA_ID 123483, the landing URL https://zenless.hoyoverse.com, the content CHANNEL_ID_CONFIG map (social follow 292, KV 285, news 288/295/296/297, protocol pages 294/293/303/305/789/836, character camp 286 / character 287, feature 289, world 290, video 1332/1337), INFO_ID_CONFIG (FUND 123774, ABOUT 123763) and the account SDK app id.
 *
 * Exports (minified key → meaning):
 *   environment → build environment name ("production")
 *   i18nEnv → i18n region environment ("sea")
 *   isSea → boolean flag that this is the overseas (sea) build
 *   apiBase → content_v2_user static content API base URL
 *   normalBase → e20220610reserve event API base URL
 *   accountMangementUrl → HoYoverse account management site URL
 *   ipApiBase → sg-public-api base URL used for IP/region lookups
 *   gachaUrl → gacha probability static page URL
 *   GACHA_ID → content id of the gacha probability entry
 *   LANDING_URL → official site landing URL
 *   CHANNEL_ID_CONFIG → map of content channel ids (social, KV, news, protocol, character, feature, world, video)
 *   INFO_ID_CONFIG → map of single content info ids (FUND, ABOUT)
 *   accountSdkAppId → HoYoverse account SDK app id
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 28 from 8c4c131.js
// deps:
const module_28 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire.r(webpackExports),
    webpackRequire.d(webpackExports, "environment", function () {
      return environment;
    }),
    webpackRequire.d(webpackExports, "i18nEnv", function () {
      return i18nEnv;
    }),
    webpackRequire.d(webpackExports, "isSea", function () {
      return isSea;
    }),
    webpackRequire.d(webpackExports, "apiBase", function () {
      return apiBase;
    }),
    webpackRequire.d(webpackExports, "normalBase", function () {
      return normalBase;
    }),
    webpackRequire.d(webpackExports, "accountMangementUrl", function () {
      return accountManagementUrl;
    }),
    webpackRequire.d(webpackExports, "ipApiBase", function () {
      return ipApiBase;
    }),
    webpackRequire.d(webpackExports, "gachaUrl", function () {
      return gachaUrl;
    }),
    webpackRequire.d(webpackExports, "GACHA_ID", function () {
      return gachaId;
    }),
    webpackRequire.d(webpackExports, "LANDING_URL", function () {
      return landingUrl;
    }),
    webpackRequire.d(webpackExports, "CHANNEL_ID_CONFIG", function () {
      return channelIdConfig;
    }),
    webpackRequire.d(webpackExports, "INFO_ID_CONFIG", function () {
      return infoIdConfig;
    }),
    webpackRequire.d(webpackExports, "accountSdkAppId", function () {
      return accountSdkAppId;
    }));
  var environment = "production",
    i18nEnv = "sea",
    isSea = !0,
    apiBase = "https://sg-public-api-static.hoyoverse.com/content_v2_user/app/3e9196a4b9274bd7",
    normalBase = "https://sg-public-api.hoyoverse.com/event/e20220610reserve/",
    accountManagementUrl = "https://account.hoyoverse.com",
    ipApiBase = "https://sg-public-api.hoyoverse.com",
    gachaUrl = "https://gs.hoyoverse.com/static/nap-official-gacha-probability/index.html",
    gachaId = 123483,
    landingUrl = "https://zenless.hoyoverse.com",
    channelIdConfig = {
      SOCIAL: {
        FOLLOW: 292,
      },
      KV: 285,
      NEWS: {
        ALL: 288,
        NEWS: 295,
        ANNOUNCE: 296,
        EVENT: 297,
      },
      PROTOCOL: {
        PRIVACY: 294,
        TERMS: 293,
        TERMS2: 303,
        TERMS3: 305,
        HISTORY: 789,
        JP_FUND: 836,
      },
      CHARACTER: {
        CAMP: 286,
        CHARACTER: 287,
      },
      FEATURE: 289,
      WORLD: 290,
      VIDEO: {
        ALL: 1332,
        BLANK: 1337,
      },
    },
    infoIdConfig = {
      FUND: 123774,
      ABOUT: 123763,
    },
    accountSdkAppId = "dny1be34nvnk";
};
