/**
 * news-CMS-API — readable reconstruction of webpack module 1124 (chunk f87ccae.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/f87ccae.js
 *
 * News CMS API helpers. formatNews parses each item's sExt JSON and maps sExt["news-banner"][0].url to banner, sTitle/sIntro/iInfoId to title/summary/id, and formats dtStartTime with date-fns format (module 1151) using the i18n word "dateFormat" ($getI18nWord). getList/getAllNews/getSliderNews call the user-model get (module 1117) on appBundle.apiBase + "/getContentList" with channel CHANNEL_ID_CONFIG.NEWS.ALL (page sizes 20/9/7), optionally dropping items flagged sExt["news-self-path"] and trimming to the page size; getDetail calls "/getContent" with iAround: 1 and exposes sContent as content; getCates calls "/getChildTree" and builds arrList (first 4 children, ensuring an ALL entry named sChanName) and objList keyed by iChanId.
 *
 * Exports (minified key → meaning):
 *   a → news CMS API object { formatNews, getList, getSliderNews, getAllNews, getDetail, getCates }
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1124 from f87ccae.js
// deps: 67, 155, 77, 1151, 1117, 28, 1
const module_1124 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(67), webpackRequire(155), webpackRequire(77));
  var dateFnsFormat = webpackRequire(1151),
    dateFnsFormatDefault = webpackRequire.n(dateFnsFormat),
    userModelRequest = webpackRequire(1117),
    siteConfigConstants = webpackRequire(28),
    Vue = webpackRequire(1),
    filterSelfPathNews = function (listResult) {
      var excludeSelfPath = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        limit = arguments.length > 2 ? arguments[2] : void 0,
        total = listResult.iTotal,
        list = listResult.list,
        filteredList = list.filter(function (newsItem) {
          return !excludeSelfPath || !newsItem.sExt["news-self-path"];
        });
      return {
        iTotal: total - (excludeSelfPath ? 1 : 0),
        list: filteredList.slice(0, limit),
      };
    };
  webpackExports.a = {
    formatNews: function () {
      var newsList = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return (
        newsList.forEach(function (news) {
          var dateFormatPattern = Vue.default.prototype.$getI18nWord("dateFormat");
          ((news.sExt = "string" == typeof news.sExt ? JSON.parse(news.sExt) : news.sExt),
            (news.banner = news.sExt["news-banner"][0].url),
            (news.title = news.sTitle),
            (news.summary = news.sIntro),
            (news.date = dateFnsFormatDefault()(news.dtStartTime, dateFormatPattern)),
            (news.dateFormat = dateFnsFormatDefault()(news.dtStartTime, dateFormatPattern)),
            (news.id = news.iInfoId));
        }),
        newsList
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
            ((data.list = listSelf.formatNews(data.list)), resolveList(data));
          })
          .catch(function (listError) {
            rejectList(listError);
          });
      });
    },
    getSliderNews: function () {
      var sliderOptions =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        sliderExcludeSelfPath = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return (
        (sliderOptions.data = Object.assign(
          {
            iPage: 1,
            iPageSize: 7,
          },
          sliderOptions.data || {},
        )),
        this.getAllNews(sliderOptions).then(function (data) {
          return filterSelfPathNews(data, sliderExcludeSelfPath, sliderOptions.data.iPageSize);
        })
      );
    },
    getAllNews: function () {
      var allNewsOptions =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        allNewsExcludeSelfPath = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        allNewsParams = Object.assign(
          {
            iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.NEWS.ALL,
            iPageSize: 9,
          },
          allNewsOptions.data || {},
        );
      return (
        (allNewsOptions.data = allNewsParams),
        this.getList(allNewsOptions).then(function (data) {
          return filterSelfPathNews(data, allNewsExcludeSelfPath, allNewsParams.iPageSize);
        })
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
            iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.NEWS.ALL,
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
              var detail = detailSelf.formatNews([data])[0];
              ((detail.content = detail.sContent), resolveDetail(detail));
            })
            .catch(function (detailError) {
              rejectDetail(detailError);
            });
        })
      );
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
                iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.NEWS.ALL,
                iPageSize: 10,
              },
              catesExtraParams,
            );
          return param;
        },
        formatCates = function (data) {
          var catesById = {},
            hasAllChannel = !1;
          return (
            data.children.forEach(function (childChannel) {
              ((catesById[childChannel.iChanId] = childChannel),
                hasAllChannel ||
                  (hasAllChannel = childChannel.iChanId === siteConfigConstants.CHANNEL_ID_CONFIG.NEWS.ALL));
            }),
            hasAllChannel ||
              data.children.splice(0, 0, {
                iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.NEWS.ALL,
                name: data.sChanName,
              }),
            (data.arrList = data.children.slice(0, 4)),
            (data.objList = catesById),
            data
          );
        };
      return Object(userModelRequest.get)("/getChildTree", catesOptions, buildCatesParams, formatCates);
    },
  };
};
