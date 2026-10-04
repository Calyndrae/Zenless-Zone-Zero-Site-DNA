// character and camp CMS API (formatCharacter, getCampList, …) — module 1154 from 7ff8829
// module 1154 from 7ff8829.js
// deps: 65, 77, 204, 1117, 28
const module_1154 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(65), webpackRequire(77), webpackRequire(204));
  var userModelRequest = webpackRequire(1117),
    siteConfigConstants = webpackRequire(28);
  webpackExports.a = {
    formatCharacter: function () {
      var t_1 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return (
        t_1.forEach(function (t_2) {
          var n_3, e_4, o_5, r_6, A_7, c_8, l_9, d_10, v_11, E_12, C_13, m_14, h_15, f_16, w_17, I_18;
          ((t_2.sExt = "string" == typeof t_2.sExt ? JSON.parse(t_2.sExt) : t_2.sExt),
            (t_2.id = t_2.iInfoId),
            (t_2.intro = t_2.sContent),
            (t_2.themeColor = t_2.sExt["chara-color"]),
            (t_2.name = t_2.sExt["chara-name"]),
            (t_2.nameHome = t_2.sExt["chara-name-home"]),
            (t_2.nameHomeM = t_2.sExt["chara-name-home-m"]),
            (t_2.nameEN = t_2.sExt["chara-name-en"]),
            (t_2.nav = t_2.sExt["chara-nav"][0].url),
            (t_2.cover =
              null === (n_3 = t_2.sExt["chara-cover-home"][0]) || void 0 === n_3 ? void 0 : n_3.url),
            (t_2.coverM = null === (e_4 = t_2.sExt["chara-cover-m"][0]) || void 0 === e_4 ? void 0 : e_4.url),
            (t_2.word = t_2.sExt["chara-line"]),
            (t_2.newCoverInner =
              null === (o_5 = t_2.sExt["new-chara-cover-inner"]) ||
              void 0 === o_5 ||
              null === (r_6 = o_5[0]) ||
              void 0 === r_6
                ? void 0
                : r_6.url),
            (t_2.newCoverInnerM =
              null === (A_7 = t_2.sExt["new-chara-cover-inner-m"]) ||
              void 0 === A_7 ||
              null === (c_8 = A_7[0]) ||
              void 0 === c_8
                ? void 0
                : c_8.url),
            (t_2.newNav =
              null === (l_9 = t_2.sExt["new-chara-nav"]) ||
              void 0 === l_9 ||
              null === (d_10 = l_9[0]) ||
              void 0 === d_10
                ? void 0
                : d_10.url),
            (t_2.levelIcon =
              null === (v_11 = t_2.sExt["level-icon"]) ||
              void 0 === v_11 ||
              null === (E_12 = v_11[0]) ||
              void 0 === E_12
                ? void 0
                : E_12.url),
            (t_2.propIcon1 =
              null === (C_13 = t_2.sExt["prop-icon-1"]) ||
              void 0 === C_13 ||
              null === (m_14 = C_13[0]) ||
              void 0 === m_14
                ? void 0
                : m_14.url),
            (t_2.propIcon2 =
              null === (h_15 = t_2.sExt["prop-icon-2"]) ||
              void 0 === h_15 ||
              null === (f_16 = h_15[0]) ||
              void 0 === f_16
                ? void 0
                : f_16.url),
            (t_2.paginationItemBg =
              null === (w_17 = t_2.sExt["pagination-item-bg"]) ||
              void 0 === w_17 ||
              null === (I_18 = w_17[0]) ||
              void 0 === I_18
                ? void 0
                : I_18.url),
            (t_2.enNameScale = 0),
            (t_2.cv = []));
          for (var main = 1; main <= 2; main++)
            if (t_2.sExt["chara-cv".concat(main, "-lang")]) {
              for (
                var data = {
                    name: t_2.sExt["chara-cv".concat(main, "-name")],
                    lang: t_2.sExt["chara-cv".concat(main, "-lang")],
                    audio: [],
                  },
                  sub = 1;
                sub <= 2;
                sub++
              ) {
                var B_19,
                  audio =
                    null === (B_19 = t_2.sExt["chara-cv".concat(main, "-audio").concat(sub)][0]) ||
                    void 0 === B_19
                      ? void 0
                      : B_19.url;
                audio && data.audio.push(audio);
              }
              t_2.cv.push(data);
            }
        }),
        t_1
      );
    },
    getList: function () {
      var t_20 = this,
        n_21 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        e_22 = function () {
          var t_23 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n_24 = Object.assign(
              {
                iPageSize: 20,
                iPage: 1,
              },
              t_23,
            );
          return n_24;
        };
      return new Promise(function (A_25, c_26) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          n_21,
          e_22,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            ((data.list = t_20.formatCharacter(data.list)), A_25(data));
          })
          .catch(function (t_27) {
            c_26(t_27);
          });
      });
    },
    getAllCharacter: function () {
      var t_28 =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {
              loading: !1,
            };
      return (
        (t_28.data = Object.assign(
          {
            iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.CHARACTER.CHARACTER,
            iPageSize: 200,
          },
          t_28.data || {},
        )),
        this.getList(t_28)
      );
    },
    getDetail: function () {
      var t_29 = this,
        n_30 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              };
      return (
        (n_30.data = Object.assign(
          {
            iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.CHARACTER,
            iAround: 1,
          },
          n_30.data || {},
        )),
        new Promise(function (e_31, A_32) {
          Object(userModelRequest.get)(
            "".concat(siteConfigConstants.apiBase, "/getContent"),
            n_30,
            userModelRequest.defaultFormatParams,
            userModelRequest.defaultFormatResult,
          )
            .then(function (data) {
              var n_33 = t_29.formatCharacter([data])[0];
              e_31(n_33);
            })
            .catch(function (t_34) {
              A_32(t_34);
            });
        })
      );
    },
    getCampList: function () {
      var t_35 =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {
                loading: !1,
              },
        n_36 = function () {
          var t_37 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n_38 = Object.assign(
              {
                iChanId: siteConfigConstants.CHANNEL_ID_CONFIG.CHARACTER.CAMP,
                iPageSize: 50,
                iPage: 1,
              },
              t_37,
            );
          return n_38;
        };
      return new Promise(function (e_39, A_40) {
        Object(userModelRequest.get)(
          "".concat(siteConfigConstants.apiBase, "/getContentList"),
          t_35,
          n_36,
          userModelRequest.defaultFormatResult,
        )
          .then(function (data) {
            (data.list.forEach(function (t_41) {
              var n_42, e_43, o_44, r_45;
              ((t_41.sExt = "string" == typeof t_41.sExt ? JSON.parse(t_41.sExt) : t_41.sExt),
                (t_41.kv = null === (n_42 = t_41.sExt["camp-kv"][0]) || void 0 === n_42 ? void 0 : n_42.url),
                (t_41.kvM =
                  null === (e_43 = t_41.sExt["camp-kv-m"][0]) || void 0 === e_43 ? void 0 : e_43.url),
                (t_41.icon = t_41.sExt["camp-icon"][0].url),
                (t_41.shade = t_41.sExt["camp-shade"][0].url),
                (t_41.shadeM =
                  t_41.sExt["camp-shade-m"] && t_41.sExt["camp-shade-m"][0]
                    ? t_41.sExt["camp-shade-m"][0].url
                    : ""),
                (t_41.nameENImg =
                  t_41.sExt["camp-name-img"] && t_41.sExt["camp-name-img"][0]
                    ? t_41.sExt["camp-name-img"][0].url
                    : ""),
                (t_41.nameENImgM =
                  t_41.sExt["camp-name-img-m"] && t_41.sExt["camp-name-img-m"][0]
                    ? t_41.sExt["camp-name-img-m"][0].url
                    : ""),
                (t_41.name = t_41.sExt["camp-name"]),
                (t_41.nameEN = t_41.sExt["camp-name-en"]),
                (t_41.desc = t_41.sContent),
                (t_41.isEmpty = !1),
                (t_41.newIcon =
                  null === (o_44 = t_41.sExt["new-camp-icon"]) || void 0 === o_44 ? void 0 : o_44[0].url),
                (t_41.channelId = parseInt(t_41.sExt["camp-channel"], 10)),
                (t_41.gradientColorMob =
                  (null === (r_45 = t_41.sExt["gradient-color-mob"]) || void 0 === r_45
                    ? void 0
                    : r_45.split("-")) || []));
            }),
              e_39(data.list));
          })
          .catch(function (t_46) {
            A_40(t_46);
          });
      });
    },
    getCampCharacter: function () {
      var t_47 =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : {
              loading: !1,
            };
      return (
        (t_47.data = Object.assign(
          {
            pageSize: 20,
          },
          t_47.data || {},
        )),
        this.getList(t_47)
      );
    },
  };
};
