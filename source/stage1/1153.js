// video CMS API (formatVideo, getAllVideos, getCates) — module 1153 from fcdddd8
// module 1153 from fcdddd8.js
// deps: 1150, 77, 556, 67, 1120, 1151, 1117, 28
const module_1153 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var babelToConsumableArrayHelper = webpackRequire(1150),
    n_1 =
      (webpackRequire(77),
      webpackRequire(556),
      webpackRequire(67),
      webpackRequire(1120),
      webpackRequire(1151)),
    defaultOf_n = webpackRequire.n(n_1),
    userModelRequest = webpackRequire(1117),
    siteConfigConstants = webpackRequire(28);
  webpackExports.a = {
    formatVideo: function () {
      var e_2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return (
        e_2.forEach(function (e_3) {
          var t_4, r_5, o_6, n_7, l_8, d_9;
          e_3.sExt = "string" == typeof e_3.sExt ? JSON.parse(e_3.sExt) : e_3.sExt;
          var m_10 = e_3.sExt || {};
          ((e_3.cover =
            (null === (t_4 = m_10["video-cover"]) ||
            void 0 === t_4 ||
            null === (r_5 = t_4[0]) ||
            void 0 === r_5
              ? void 0
              : r_5.url) || ""),
            (e_3.innerCover =
              (null === (o_6 = m_10["video-inner-cover"]) ||
              void 0 === o_6 ||
              null === (n_7 = o_6[0]) ||
              void 0 === n_7
                ? void 0
                : n_7.url) || ""),
            (e_3.videoUrl =
              (null === (l_8 = m_10["video-url"]) ||
              void 0 === l_8 ||
              null === (d_9 = l_8[0]) ||
              void 0 === d_9
                ? void 0
                : d_9.url) ||
              m_10["video-url"] ||
              ""),
            (e_3.youtubeUrl = m_10["video-youtube"] || ""),
            (e_3.cateName = e_3.sChanName || ""),
            (e_3.title = e_3.sTitle),
            (e_3.date = defaultOf_n()(e_3.dtStartTime, "YYYY-MM-DD")),
            (e_3.dateFormat = defaultOf_n()(e_3.dtStartTime, "MM/DD/YYYY")),
            (e_3.id = e_3.iInfoId));
        }),
        e_2
      );
    },
    getList: function () {
      var e_11 = this,
        t_12 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        r_13 = function () {
          var e_14 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t_15 = Object.assign(
              {
                iPageSize: 20,
                iPage: 1,
              },
              e_14,
            );
          return t_15;
        };
      return new Promise(function (o_16, n_17) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          t_12,
          r_13,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = e_11.formatVideo(data.list)), o_16(data));
          })
          .catch(function (e_18) {
            n_17(e_18);
          });
      });
    },
    getAllVideos: function () {
      var e_19 =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {
              loading: !1,
            };
      return (
        (e_19.data = Object.assign(
          {
            iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.VIDEO.ALL,
            iPageSize: 9,
          },
          e_19.data || {},
        )),
        this.getList(e_19)
      );
    },
    getHomeVideoList: function () {
      var e_20 =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {
              loading: !1,
            };
      return (
        (e_20.data = Object.assign(
          {
            iPage: 1,
            iPageSize: 9,
          },
          e_20.data || {},
        )),
        this.getAllVideos(e_20)
      );
    },
    getSliderVideos: function () {
      var e_21 =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {
              loading: !1,
            };
      return (
        (e_21.data = Object.assign(
          {
            iPage: 1,
            iPageSize: 6,
          },
          e_21.data || {},
        )),
        this.getAllVideos(e_21)
      );
    },
    isBlankVideoChan: function (e_22) {
      var t_23 = siteConfigConstants.CHANNEL_ID_CONFIG.VIDEO.BLANK;
      return !(!t_23 || !e_22 || Number(e_22) !== Number(t_23));
    },
    parseCatesFromRes: function () {
      var e_24 = this,
        t_25 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r_26 = t_25.arrList,
        n_27 = r_26 && r_26[0],
        c_28 = (n_27 && n_27.children) || [],
        l_29 = [n_27].concat(Object(babelToConsumableArrayHelper.a)(c_28)).filter(function (t_30) {
          return t_30 && t_30.sChanName && !e_24.isBlankVideoChan(t_30.iChanId);
        });
      return {
        allCate: n_27,
        children: c_28,
        tabCates: l_29,
      };
    },
    getCateDisplayName: function (e_31) {
      var t_32 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        r_33 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      if (!e_31) return "";
      if (this.isBlankVideoChan(e_31)) return r_33;
      var o_34 = t_32.find(function (t_35) {
        return Number(t_35.iChanId) === Number(e_31);
      });
      return (o_34 && o_34.sChanName) || "";
    },
    getCates: function () {
      var e_36 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        t_37 = function () {
          var e_39 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            param = Object.assign(
              {
                iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.VIDEO.ALL,
                iPageSize: 10,
              },
              e_39,
            );
          return param;
        },
        r_38 = function (data) {
          var e_40 = (data.children || [])[0] || {};
          return ((data.mainChanName = e_40.sChanName || ""), (data.arrList = data.children), data);
        };
      return Object(userModelRequest.get)("/getChildTree", e_36, t_37, r_38);
    },
  };
};
