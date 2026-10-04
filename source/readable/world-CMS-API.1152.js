/**
 * world-CMS-API — readable reconstruction of webpack module 1152 (chunk b262029.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/b262029.js
 *
 * World (setting/region) CMS API helpers. formatWorld parses each item's sExt JSON and maps world-name, world-name-en, world-slide[0].url (cover), world-banner, world-banner-m, world-home-banner[0].url and sTitle/sIntro/iInfoId onto name, nameEN, cover, banner, bannerM, homeBanner, title, summary and id. getList and getWorldList call the user-model get (module 1117) on appBundle.apiBase + "/getContentList" (channel CHANNEL_ID_CONFIG.WORLD, sLangKey "zh-cn", page size 20/10), and getDetail calls "/getContent" with iAround: 1, returning the formatted item with sContent as content.
 *
 * Exports (minified key → meaning):
 *   a → world CMS API object { formatWorld, getList, getWorldList, getDetail }
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1152 from b262029.js
// deps: 65, 77, 1117, 28
const module_1152 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(65), webpackRequire(77));
  var userModelRequest = webpackRequire(1117),
    siteConfigConstants = webpackRequire(28);
  webpackExports.a = {
    formatWorld: function () {
      var worldList = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return (
        worldList.forEach(function (world) {
          ((world.sExt = "string" == typeof world.sExt ? JSON.parse(world.sExt) : world.sExt),
            (world.name = world.sExt["world-name"]),
            (world.nameEN = world.sExt["world-name-en"]),
            (world.cover = world.sExt["world-slide"][0].url),
            (world.banner = world.sExt["world-banner"]),
            (world.bannerM = world.sExt["world-banner-m"]),
            (world.homeBanner = world.sExt["world-home-banner"][0].url),
            (world.title = world.sTitle),
            (world.summary = world.sIntro),
            (world.id = world.iInfoId));
        }),
        worldList
      );
    },
    getList: function () {
      var listSelf = this,
        listOptions =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        buildListParams = function () {
          var listExtraParams = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            listParams = Object.assign(
              {
                iPageSize: 20,
                iPage: 1,
                sLangKey: "zh-cn",
              },
              listExtraParams,
            );
          return listParams;
        };
      return new Promise(function (resolveList, rejectList) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          listOptions,
          buildListParams,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = listSelf.formatWorld(data.list)), resolveList(data));
          })
          .catch(function (listError) {
            rejectList(listError);
          });
      });
    },
    getWorldList: function () {
      var worldListOptions =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {
              loading: !1,
            };
      return (
        (worldListOptions.data = Object.assign(
          {
            iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.WORLD,
            iPageSize: 10,
            sLangKey: "zh-cn",
          },
          worldListOptions.data || {},
        )),
        this.getList(worldListOptions)
      );
    },
    getDetail: function () {
      var detailSelf = this,
        detailOptions =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              };
      return (
        (detailOptions.data = Object.assign(
          {
            iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.WORLD,
            iAround: 1,
            sLangKey: "zh-cn",
          },
          detailOptions.data || {},
        )),
        new Promise(function (resolveDetail, rejectDetail) {
          Object(userModelRequest.get)(
            "".concat(siteConfigConstants.apiBase, "/getContent"),
            detailOptions,
            userModelRequest.defaultFormatParams,
            userModelRequest.defaultFormatResult,
          )
            .then(function (data) {
              var detail = detailSelf.formatWorld([data])[0];
              ((detail.content = detail.sContent), resolveDetail(detail));
            })
            .catch(function (detailError) {
              rejectDetail(detailError);
            });
        })
      );
    },
  };
};
