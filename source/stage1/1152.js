// world CMS API (formatWorld, getList, getWorldList, getDetail) — module 1152 from b262029
// module 1152 from b262029.js
// deps: 65, 77, 1117, 28
const module_1152 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(65), webpackRequire(77));
  var userModelRequest = webpackRequire(1117),
    siteConfigConstants = webpackRequire(28);
  webpackExports.a = {
    formatWorld: function () {
      var e_1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return (
        e_1.forEach(function (e_2) {
          ((e_2.sExt = "string" == typeof e_2.sExt ? JSON.parse(e_2.sExt) : e_2.sExt),
            (e_2.name = e_2.sExt["world-name"]),
            (e_2.nameEN = e_2.sExt["world-name-en"]),
            (e_2.cover = e_2.sExt["world-slide"][0].url),
            (e_2.banner = e_2.sExt["world-banner"]),
            (e_2.bannerM = e_2.sExt["world-banner-m"]),
            (e_2.homeBanner = e_2.sExt["world-home-banner"][0].url),
            (e_2.title = e_2.sTitle),
            (e_2.summary = e_2.sIntro),
            (e_2.id = e_2.iInfoId));
        }),
        e_1
      );
    },
    getList: function () {
      var e_3 = this,
        t_4 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        n_5 = function () {
          var e_6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t_7 = Object.assign(
              {
                iPageSize: 20,
                iPage: 1,
                sLangKey: "zh-cn",
              },
              e_6,
            );
          return t_7;
        };
      return new Promise(function (l_8, d_9) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          t_4,
          n_5,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = e_3.formatWorld(data.list)), l_8(data));
          })
          .catch(function (e_10) {
            d_9(e_10);
          });
      });
    },
    getWorldList: function () {
      var e_11 =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {
              loading: !1,
            };
      return (
        (e_11.data = Object.assign(
          {
            iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.WORLD,
            iPageSize: 10,
            sLangKey: "zh-cn",
          },
          e_11.data || {},
        )),
        this.getList(e_11)
      );
    },
    getDetail: function () {
      var e_12 = this,
        t_13 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              };
      return (
        (t_13.data = Object.assign(
          {
            iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.WORLD,
            iAround: 1,
            sLangKey: "zh-cn",
          },
          t_13.data || {},
        )),
        new Promise(function (n_14, l_15) {
          Object(userModelRequest.get)(
            "".concat(siteConfigConstants.apiBase, "/getContent"),
            t_13,
            userModelRequest.defaultFormatParams,
            userModelRequest.defaultFormatResult,
          )
            .then(function (data) {
              var t_16 = e_12.formatWorld([data])[0];
              ((t_16.content = t_16.sContent), n_14(t_16));
            })
            .catch(function (e_17) {
              l_15(e_17);
            });
        })
      );
    },
  };
};
