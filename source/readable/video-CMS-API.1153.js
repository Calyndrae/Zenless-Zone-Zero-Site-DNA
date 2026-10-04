/**
 * video-CMS-API — readable reconstruction of webpack module 1153 (chunk fcdddd8.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/fcdddd8.js
 *
 * Video CMS API helpers. formatVideo parses each item's sExt JSON and maps video-cover[0].url, video-inner-cover[0].url, video-url (asset url or raw string), video-youtube, sChanName, sTitle and iInfoId onto cover, innerCover, videoUrl, youtubeUrl, cateName, title and id, with dates formatted by date-fns format (module 1151) as YYYY-MM-DD and MM/DD/YYYY. getList/getAllVideos/getHomeVideoList/getSliderVideos call the user-model get (module 1117) on appBundle.apiBase + "/getContentList" for channel CHANNEL_ID_CONFIG.VIDEO.ALL (page sizes 20/9/9/6); getCates calls "/getChildTree" and sets mainChanName/arrList. isBlankVideoChan compares against CHANNEL_ID_CONFIG.VIDEO.BLANK, parseCatesFromRes builds {allCate, children, tabCates} (named, non-blank channels, using toConsumableArray from module 1150) and getCateDisplayName resolves a channel's sChanName with a fallback for the blank channel.
 *
 * Exports (minified key → meaning):
 *   a → video CMS API object { formatVideo, getList, getAllVideos, getHomeVideoList, getSliderVideos, isBlankVideoChan, parseCatesFromRes, getCateDisplayName, getCates }
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1153 from fcdddd8.js
// deps: 1150, 77, 556, 67, 1120, 1151, 1117, 28
const module_1153 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var babelToConsumableArrayHelper = webpackRequire(1150),
    dateFnsFormat =
      (webpackRequire(77),
      webpackRequire(556),
      webpackRequire(67),
      webpackRequire(1120),
      webpackRequire(1151)),
    defaultOf_n = webpackRequire.n(dateFnsFormat),
    userModelRequest = webpackRequire(1117),
    siteConfigConstants = webpackRequire(28);
  webpackExports.a = {
    formatVideo: function () {
      var videoList = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return (
        videoList.forEach(function (video) {
          var coverList, coverAsset, innerCoverList, innerCoverAsset, videoUrlList, videoUrlAsset;
          video.sExt = "string" == typeof video.sExt ? JSON.parse(video.sExt) : video.sExt;
          var ext = video.sExt || {};
          ((video.cover =
            (null === (coverList = ext["video-cover"]) ||
            void 0 === coverList ||
            null === (coverAsset = coverList[0]) ||
            void 0 === coverAsset
              ? void 0
              : coverAsset.url) || ""),
            (video.innerCover =
              (null === (innerCoverList = ext["video-inner-cover"]) ||
              void 0 === innerCoverList ||
              null === (innerCoverAsset = innerCoverList[0]) ||
              void 0 === innerCoverAsset
                ? void 0
                : innerCoverAsset.url) || ""),
            (video.videoUrl =
              (null === (videoUrlList = ext["video-url"]) ||
              void 0 === videoUrlList ||
              null === (videoUrlAsset = videoUrlList[0]) ||
              void 0 === videoUrlAsset
                ? void 0
                : videoUrlAsset.url) ||
              ext["video-url"] ||
              ""),
            (video.youtubeUrl = ext["video-youtube"] || ""),
            (video.cateName = video.sChanName || ""),
            (video.title = video.sTitle),
            (video.date = defaultOf_n()(video.dtStartTime, "YYYY-MM-DD")),
            (video.dateFormat = defaultOf_n()(video.dtStartTime, "MM/DD/YYYY")),
            (video.id = video.iInfoId));
        }),
        videoList
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
            ((data.list = listSelf.formatVideo(data.list)), resolveList(data));
          })
          .catch(function (listError) {
            rejectList(listError);
          });
      });
    },
    getAllVideos: function () {
      var allVideosOptions =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {
              loading: !1,
            };
      return (
        (allVideosOptions.data = Object.assign(
          {
            iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.VIDEO.ALL,
            iPageSize: 9,
          },
          allVideosOptions.data || {},
        )),
        this.getList(allVideosOptions)
      );
    },
    getHomeVideoList: function () {
      var homeVideoOptions =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {
              loading: !1,
            };
      return (
        (homeVideoOptions.data = Object.assign(
          {
            iPage: 1,
            iPageSize: 9,
          },
          homeVideoOptions.data || {},
        )),
        this.getAllVideos(homeVideoOptions)
      );
    },
    getSliderVideos: function () {
      var sliderVideoOptions =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {
              loading: !1,
            };
      return (
        (sliderVideoOptions.data = Object.assign(
          {
            iPage: 1,
            iPageSize: 6,
          },
          sliderVideoOptions.data || {},
        )),
        this.getAllVideos(sliderVideoOptions)
      );
    },
    isBlankVideoChan: function (chanId) {
      var blankChanId = siteConfigConstants.CHANNEL_ID_CONFIG.VIDEO.BLANK;
      return !(!blankChanId || !chanId || Number(chanId) !== Number(blankChanId));
    },
    parseCatesFromRes: function () {
      var parseSelf = this,
        cateRes = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        arrList = cateRes.arrList,
        allCate = arrList && arrList[0],
        childCates = (allCate && allCate.children) || [],
        tabCates = [allCate]
          .concat(Object(babelToConsumableArrayHelper.a)(childCates))
          .filter(function (cate) {
            return cate && cate.sChanName && !parseSelf.isBlankVideoChan(cate.iChanId);
          });
      return {
        allCate: allCate,
        children: childCates,
        tabCates: tabCates,
      };
    },
    getCateDisplayName: function (targetChanId) {
      var cateList = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        blankLabel = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      if (!targetChanId) return "";
      if (this.isBlankVideoChan(targetChanId)) return blankLabel;
      var matchedCate = cateList.find(function (candidateCate) {
        return Number(candidateCate.iChanId) === Number(targetChanId);
      });
      return (matchedCate && matchedCate.sChanName) || "";
    },
    getCates: function () {
      var catesOptions =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        buildCatesParams = function () {
          var catesExtraParams = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            param = Object.assign(
              {
                iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.VIDEO.ALL,
                iPageSize: 10,
              },
              catesExtraParams,
            );
          return param;
        },
        formatCates = function (data) {
          var mainChan = (data.children || [])[0] || {};
          return ((data.mainChanName = mainChan.sChanName || ""), (data.arrList = data.children), data);
        };
      return Object(userModelRequest.get)("/getChildTree", catesOptions, buildCatesParams, formatCates);
    },
  };
};
