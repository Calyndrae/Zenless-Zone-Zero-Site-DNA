// news CMS API (formatNews, getList, getAllNews, getSliderNews, getDetail, getCates) — module 1124 from f87ccae
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
    m_1 = function (e_2) {
      var t_3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n_4 = arguments.length > 2 ? arguments[2] : void 0,
        r_5 = e_2.iTotal,
        o_6 = e_2.list,
        c_7 = o_6.filter(function (e_8) {
          return !t_3 || !e_8.sExt["news-self-path"];
        });
      return {
        iTotal: r_5 - (t_3 ? 1 : 0),
        list: c_7.slice(0, n_4),
      };
    };
  webpackExports.a = {
    formatNews: function () {
      var e_9 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return (
        e_9.forEach(function (e_10) {
          var t_11 = Vue.default.prototype.$getI18nWord("dateFormat");
          ((e_10.sExt = "string" == typeof e_10.sExt ? JSON.parse(e_10.sExt) : e_10.sExt),
            (e_10.banner = e_10.sExt["news-banner"][0].url),
            (e_10.title = e_10.sTitle),
            (e_10.summary = e_10.sIntro),
            (e_10.date = dateFnsFormatDefault()(e_10.dtStartTime, t_11)),
            (e_10.dateFormat = dateFnsFormatDefault()(e_10.dtStartTime, t_11)),
            (e_10.id = e_10.iInfoId));
        }),
        e_9
      );
    },
    getList: function () {
      var e_12 = this,
        t_13 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        n_14 = function () {
          var e_15 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t_16 = Object.assign(
              {
                iPageSize: 20,
                iPage: 1,
              },
              e_15,
            );
          return t_16;
        };
      return new Promise(function (r_17, o_18) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          t_13,
          n_14,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = e_12.formatNews(data.list)), r_17(data));
          })
          .catch(function (e_19) {
            o_18(e_19);
          });
      });
    },
    getSliderNews: function () {
      var e_20 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        t_21 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return (
        (e_20.data = Object.assign(
          {
            iPage: 1,
            iPageSize: 7,
          },
          e_20.data || {},
        )),
        this.getAllNews(e_20).then(function (data) {
          return m_1(data, t_21, e_20.data.iPageSize);
        })
      );
    },
    getAllNews: function () {
      var e_22 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        t_23 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n_24 = Object.assign(
          {
            iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.NEWS.ALL,
            iPageSize: 9,
          },
          e_22.data || {},
        );
      return (
        (e_22.data = n_24),
        this.getList(e_22).then(function (data) {
          return m_1(data, t_23, n_24.iPageSize);
        })
      );
    },
    getDetail: function () {
      var e_25 = this,
        t_26 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              };
      return (
        (t_26.data = Object.assign(
          {
            iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.NEWS.ALL,
            iAround: 1,
          },
          t_26.data || {},
        )),
        new Promise(function (n_27, r_28) {
          Object(userModelRequest.get)(
            "".concat(siteConfigConstants.apiBase, "/getContent"),
            t_26,
            userModelRequest.defaultFormatParams,
            userModelRequest.defaultFormatResult,
          )
            .then(function (data) {
              var t_29 = e_25.formatNews([data])[0];
              ((t_29.content = t_29.sContent), n_27(t_29));
            })
            .catch(function (e_30) {
              r_28(e_30);
            });
        })
      );
    },
    getCates: function () {
      var e_31 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        t_32 = function () {
          var e_34 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            param = Object.assign(
              {
                iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.NEWS.ALL,
                iPageSize: 10,
              },
              e_34,
            );
          return param;
        },
        n_33 = function (data) {
          var e_35 = {},
            t_36 = !1;
          return (
            data.children.forEach(function (n_37) {
              ((e_35[n_37.iChanId] = n_37),
                t_36 || (t_36 = n_37.iChanId === siteConfigConstants.CHANNEL_ID_CONFIG.NEWS.ALL));
            }),
            t_36 ||
              data.children.splice(0, 0, {
                iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.NEWS.ALL,
                name: data.sChanName,
              }),
            (data.arrList = data.children.slice(0, 4)),
            (data.objList = e_35),
            data
          );
        };
      return Object(userModelRequest.get)("/getChildTree", e_31, t_32, n_33);
    },
  };
};
