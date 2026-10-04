/**
 * character-and-camp-CMS — readable reconstruction of webpack module 1154 (chunk 7ff8829.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/7ff8829.js
 *
 * Character (agent) and camp (faction) CMS API helpers. formatCharacter parses each item's sExt JSON and maps chara-color, chara-name(-home/-home-m/-en), chara-nav, chara-cover-home/-m, chara-line, new-chara-cover-inner(-m), new-chara-nav, level-icon, prop-icon-1/2 and pagination-item-bg onto themeColor, name, nameHome, nameHomeM, nameEN, nav, cover, coverM, word, newCoverInner(M), newNav, levelIcon, propIcon1/2 and paginationItemBg, and builds a cv list from chara-cv1/2-name/-lang/-audio1..2. getList/getAllCharacter/getCampCharacter/getDetail call the user-model get (module 1117) on appBundle.apiBase + "/getContentList" or "/getContent" (channel CHANNEL_ID_CONFIG.CHARACTER.CHARACTER, page size 200 for all). getCampList loads CHANNEL_ID_CONFIG.CHARACTER.CAMP and maps camp-kv(-m), camp-icon, camp-shade(-m), camp-name-img(-m), camp-name(-en), new-camp-icon, camp-channel and gradient-color-mob (split on "-") onto each camp.
 *
 * Exports (minified key → meaning):
 *   a → character CMS API object { formatCharacter, getList, getAllCharacter, getDetail, getCampList, getCampCharacter }
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1154 from 7ff8829.js
// deps: 65, 77, 204, 1117, 28
const module_1154 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(65), webpackRequire(77), webpackRequire(204));
  var userModelRequest = webpackRequire(1117),
    siteConfigConstants = webpackRequire(28);
  webpackExports.a = {
    formatCharacter: function () {
      var charaList = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return (
        charaList.forEach(function (chara) {
          var coverHomeAsset,
            coverMobileAsset,
            newCoverInnerList,
            newCoverInnerAsset,
            newCoverInnerMobileList,
            newCoverInnerMobileAsset,
            newNavList,
            newNavAsset,
            levelIconList,
            levelIconAsset,
            propIcon1List,
            propIcon1Asset,
            propIcon2List,
            propIcon2Asset,
            paginationBgList,
            paginationBgAsset;
          ((chara.sExt = "string" == typeof chara.sExt ? JSON.parse(chara.sExt) : chara.sExt),
            (chara.id = chara.iInfoId),
            (chara.intro = chara.sContent),
            (chara.themeColor = chara.sExt["chara-color"]),
            (chara.name = chara.sExt["chara-name"]),
            (chara.nameHome = chara.sExt["chara-name-home"]),
            (chara.nameHomeM = chara.sExt["chara-name-home-m"]),
            (chara.nameEN = chara.sExt["chara-name-en"]),
            (chara.nav = chara.sExt["chara-nav"][0].url),
            (chara.cover =
              null === (coverHomeAsset = chara.sExt["chara-cover-home"][0]) || void 0 === coverHomeAsset
                ? void 0
                : coverHomeAsset.url),
            (chara.coverM =
              null === (coverMobileAsset = chara.sExt["chara-cover-m"][0]) || void 0 === coverMobileAsset
                ? void 0
                : coverMobileAsset.url),
            (chara.word = chara.sExt["chara-line"]),
            (chara.newCoverInner =
              null === (newCoverInnerList = chara.sExt["new-chara-cover-inner"]) ||
              void 0 === newCoverInnerList ||
              null === (newCoverInnerAsset = newCoverInnerList[0]) ||
              void 0 === newCoverInnerAsset
                ? void 0
                : newCoverInnerAsset.url),
            (chara.newCoverInnerM =
              null === (newCoverInnerMobileList = chara.sExt["new-chara-cover-inner-m"]) ||
              void 0 === newCoverInnerMobileList ||
              null === (newCoverInnerMobileAsset = newCoverInnerMobileList[0]) ||
              void 0 === newCoverInnerMobileAsset
                ? void 0
                : newCoverInnerMobileAsset.url),
            (chara.newNav =
              null === (newNavList = chara.sExt["new-chara-nav"]) ||
              void 0 === newNavList ||
              null === (newNavAsset = newNavList[0]) ||
              void 0 === newNavAsset
                ? void 0
                : newNavAsset.url),
            (chara.levelIcon =
              null === (levelIconList = chara.sExt["level-icon"]) ||
              void 0 === levelIconList ||
              null === (levelIconAsset = levelIconList[0]) ||
              void 0 === levelIconAsset
                ? void 0
                : levelIconAsset.url),
            (chara.propIcon1 =
              null === (propIcon1List = chara.sExt["prop-icon-1"]) ||
              void 0 === propIcon1List ||
              null === (propIcon1Asset = propIcon1List[0]) ||
              void 0 === propIcon1Asset
                ? void 0
                : propIcon1Asset.url),
            (chara.propIcon2 =
              null === (propIcon2List = chara.sExt["prop-icon-2"]) ||
              void 0 === propIcon2List ||
              null === (propIcon2Asset = propIcon2List[0]) ||
              void 0 === propIcon2Asset
                ? void 0
                : propIcon2Asset.url),
            (chara.paginationItemBg =
              null === (paginationBgList = chara.sExt["pagination-item-bg"]) ||
              void 0 === paginationBgList ||
              null === (paginationBgAsset = paginationBgList[0]) ||
              void 0 === paginationBgAsset
                ? void 0
                : paginationBgAsset.url),
            (chara.enNameScale = 0),
            (chara.cv = []));
          for (var main = 1; main <= 2; main++)
            if (chara.sExt["chara-cv".concat(main, "-lang")]) {
              for (
                var data = {
                    name: chara.sExt["chara-cv".concat(main, "-name")],
                    lang: chara.sExt["chara-cv".concat(main, "-lang")],
                    audio: [],
                  },
                  sub = 1;
                sub <= 2;
                sub++
              ) {
                var cvAudioAsset,
                  audio =
                    null === (cvAudioAsset = chara.sExt["chara-cv".concat(main, "-audio").concat(sub)][0]) ||
                    void 0 === cvAudioAsset
                      ? void 0
                      : cvAudioAsset.url;
                audio && data.audio.push(audio);
              }
              chara.cv.push(data);
            }
        }),
        charaList
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
            ((data.list = listSelf.formatCharacter(data.list)), resolveList(data));
          })
          .catch(function (listError) {
            rejectList(listError);
          });
      });
    },
    getAllCharacter: function () {
      var allCharaOptions =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {
              loading: !1,
            };
      return (
        (allCharaOptions.data = Object.assign(
          {
            iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.CHARACTER.CHARACTER,
            iPageSize: 200,
          },
          allCharaOptions.data || {},
        )),
        this.getList(allCharaOptions)
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
            iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.CHARACTER,
            iAround: 1,
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
              var detail = detailSelf.formatCharacter([data])[0];
              resolveDetail(detail);
            })
            .catch(function (detailError) {
              rejectDetail(detailError);
            });
        })
      );
    },
    getCampList: function () {
      var campOptions =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        buildCampParams = function () {
          var campExtraParams = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            campParams = Object.assign(
              {
                iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.CHARACTER.CAMP,
                iPageSize: 50,
                iPage: 1,
              },
              campExtraParams,
            );
          return campParams;
        };
      return new Promise(function (resolveCamps, rejectCamps) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          campOptions,
          buildCampParams,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            (data.list.forEach(function (camp) {
              var campKvAsset, campKvMobileAsset, newCampIconList, gradientColorMob;
              ((camp.sExt = "string" == typeof camp.sExt ? JSON.parse(camp.sExt) : camp.sExt),
                (camp.kv =
                  null === (campKvAsset = camp.sExt["camp-kv"][0]) || void 0 === campKvAsset
                    ? void 0
                    : campKvAsset.url),
                (camp.kvM =
                  null === (campKvMobileAsset = camp.sExt["camp-kv-m"][0]) || void 0 === campKvMobileAsset
                    ? void 0
                    : campKvMobileAsset.url),
                (camp.icon = camp.sExt["camp-icon"][0].url),
                (camp.shade = camp.sExt["camp-shade"][0].url),
                (camp.shadeM =
                  camp.sExt["camp-shade-m"] && camp.sExt["camp-shade-m"][0]
                    ? camp.sExt["camp-shade-m"][0].url
                    : ""),
                (camp.nameENImg =
                  camp.sExt["camp-name-img"] && camp.sExt["camp-name-img"][0]
                    ? camp.sExt["camp-name-img"][0].url
                    : ""),
                (camp.nameENImgM =
                  camp.sExt["camp-name-img-m"] && camp.sExt["camp-name-img-m"][0]
                    ? camp.sExt["camp-name-img-m"][0].url
                    : ""),
                (camp.name = camp.sExt["camp-name"]),
                (camp.nameEN = camp.sExt["camp-name-en"]),
                (camp.desc = camp.sContent),
                (camp.isEmpty = !1),
                (camp.newIcon =
                  null === (newCampIconList = camp.sExt["new-camp-icon"]) || void 0 === newCampIconList
                    ? void 0
                    : newCampIconList[0].url),
                (camp.channelId = parseInt(camp.sExt["camp-channel"], 10)),
                (camp.gradientColorMob =
                  (null === (gradientColorMob = camp.sExt["gradient-color-mob"]) ||
                  void 0 === gradientColorMob
                    ? void 0
                    : gradientColorMob.split("-")) || []));
            }),
              resolveCamps(data.list));
          })
          .catch(function (campError) {
            rejectCamps(campError);
          });
      });
    },
    getCampCharacter: function () {
      var campCharaOptions =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {
              loading: !1,
            };
      return (
        (campCharaOptions.data = Object.assign(
          {
            pageSize: 20,
          },
          campCharaOptions.data || {},
        )),
        this.getList(campCharaOptions)
      );
    },
  };
};
