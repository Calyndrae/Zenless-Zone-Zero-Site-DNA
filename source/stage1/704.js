// root Vuex store (state, getters, mutations, actions) — module 704 from 8c4c131
// module 704 from 8c4c131.js
// deps: 85, 84, 67, 105, 106, 56, 28
const module_704 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire.r(webpackExports),
    webpackRequire.d(webpackExports, "state", function () {
      return m_3;
    }),
    webpackRequire.d(webpackExports, "getters", function () {
      return d_4;
    }),
    webpackRequire.d(webpackExports, "mutations", function () {
      return c_5;
    }),
    webpackRequire.d(webpackExports, "actions", function () {
      return h_6;
    }));
  (webpackRequire(85), webpackRequire(84), webpackRequire(67), webpackRequire(105), webpackRequire(106));
  var vendorBundle = webpackRequire(56),
    siteConfigConstants = webpackRequire(28);
  function r_1(object, t_7) {
    var e_8 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var n_9 = Object.getOwnPropertySymbols(object);
      (t_7 &&
        (n_9 = n_9.filter(function (t_10) {
          return Object.getOwnPropertyDescriptor(object, t_10).enumerable;
        })),
        e_8.push.apply(e_8, n_9));
    }
    return e_8;
  }
  function A_2(t_11) {
    for (var i_12 = 1; i_12 < arguments.length; i_12++) {
      var source = null != arguments[i_12] ? arguments[i_12] : {};
      i_12 % 2
        ? r_1(Object(source), !0).forEach(function (e_13) {
            Object(vendorBundle.a)(t_11, e_13, source[e_13]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t_11, Object.getOwnPropertyDescriptors(source))
          : r_1(Object(source)).forEach(function (e_14) {
              Object.defineProperty(t_11, e_14, Object.getOwnPropertyDescriptor(source, e_14));
            });
    }
    return t_11;
  }
  var m_3 = function () {
      return {
        lang: "",
        mi18n: {},
        isLoading: !0,
        bgmMuted: !1,
        newsCates: [],
        videoCates: [],
        videoMainChanName: "",
        characterCamps: [],
        navSection: "",
        homeSection: "index",
        routePage: "index",
        homeScroll: 0,
        baseInfo: "",
        userInfo: "",
        isEnIp: !1,
        newsCache: {
          pageIndex: 1,
          newsIndex: -1,
          mNews: {},
        },
      };
    },
    d_4 = {
      newsCates: function (t_15) {
        return t_15.newsCates;
      },
      videoCates: function (t_16) {
        return t_16.videoCates;
      },
      videoMainChanName: function (t_17) {
        return t_17.videoMainChanName;
      },
      characterCamps: function (t_18) {
        return t_18.characterCamps;
      },
      homeSection: function (t_19) {
        return t_19.homeSection;
      },
      routePage: function (t_20) {
        return t_20.routePage;
      },
      homeScroll: function (t_21) {
        return t_21.homeScroll;
      },
      blockGachaAnnounce: function (t_22) {
        return !t_22.isEnIp && "en-us" === t_22.lang;
      },
      mediaConfig: function (t_23) {
        return {
          svgIconColor: "#898989",
          svgHoverColor: {
            iconColor: "#f2f2ef",
          },
          basicConfig: {
            biz: "nap_global",
            lang: t_23.lang,
            environment: siteConfigConstants.environment,
          },
        };
      },
    },
    c_5 = {
      setIsEnIp: function (t_24, e_25) {
        t_24.isEnIp = e_25;
      },
      setLang: function (t_26, e_27) {
        t_26.lang = e_27;
      },
      setMi18n: function (t_28, e_29) {
        t_28.mi18n.WORD = e_29;
      },
      setLoading: function (t_30, e_31) {
        t_30.isLoading = e_31;
      },
      muteBgm: function (t_32) {
        var e_33 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        t_32.bgmMuted = e_33;
      },
      setNewsCates: function (t_34, e_35) {
        t_34.newsCates = e_35;
      },
      setVideoCates: function (t_36, e_37) {
        t_36.videoCates = e_37;
      },
      setVideoMainChanName: function (t_38, e_39) {
        t_38.videoMainChanName = e_39 || "";
      },
      setCharacterCamps: function (t_40, e_41) {
        t_40.characterCamps = e_41;
      },
      setHomeSection: function (t_42, section) {
        t_42.homeSection = section;
      },
      setRoutePage: function (t_43, section) {
        t_43.routePage = section;
      },
      setHomeScroll: function (t_44, e_45) {
        t_44.homeScroll = e_45;
      },
      setNavSection: function (t_46, section) {
        t_46.navSection = section;
      },
      setBaseInfo: function (t_47, e_48) {
        t_47.baseInfo = e_48;
      },
      setUserInfo: function (t_49, e_50) {
        t_49.userInfo = e_50;
      },
      setNewsCache: function (t_51, e_52) {
        t_51.newsCache = A_2(A_2({}, t_51.newsCache), e_52);
      },
    },
    h_6 = {};
};
