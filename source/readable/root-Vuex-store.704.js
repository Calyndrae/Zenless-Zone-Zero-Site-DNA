/**
 * root-Vuex-store — readable reconstruction of webpack module 704 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Root Vuex store module (store/index). State holds lang, mi18n words, isLoading, bgmMuted, newsCates, videoCates, videoMainChanName, characterCamps, navSection, homeSection, routePage, homeScroll, baseInfo, userInfo, isEnIp and a newsCache {pageIndex, newsIndex, mNews}. Getters expose those fields plus blockGachaAnnounce (non-EN-IP visitor on en-us) and mediaConfig (svg icon colours and basicConfig {biz: "nap_global", lang, environment}); mutations are plain setters (setIsEnIp, setLang, setMi18n, setLoading, muteBgm, setNewsCates, setVideoCates, setVideoMainChanName, setCharacterCamps, setHomeSection, setRoutePage, setHomeScroll, setNavSection, setBaseInfo, setUserInfo, setNewsCache merging into newsCache); actions is empty.
 *
 * Exports (minified key → meaning):
 *   state → root store state factory
 *   getters → root store getters (newsCates, videoCates, videoMainChanName, characterCamps, homeSection, routePage, homeScroll, blockGachaAnnounce, mediaConfig)
 *   mutations → root store mutations (setLang, setMi18n, setLoading, muteBgm, setNewsCache, ...)
 *   actions → root store actions (empty object)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 704 from 8c4c131.js
// deps: 85, 84, 67, 105, 106, 56, 28
const module_704 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire.r(webpackExports),
    webpackRequire.d(webpackExports, "state", function () {
      return state;
    }),
    webpackRequire.d(webpackExports, "getters", function () {
      return getters;
    }),
    webpackRequire.d(webpackExports, "mutations", function () {
      return mutations;
    }),
    webpackRequire.d(webpackExports, "actions", function () {
      return actions;
    }));
  (webpackRequire(85), webpackRequire(84), webpackRequire(67), webpackRequire(105), webpackRequire(106));
  var vendorBundle = webpackRequire(56),
    siteConfigConstants = webpackRequire(28);
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      (enumerableOnly &&
        (symbols = symbols.filter(function (symbol) {
          return Object.getOwnPropertyDescriptor(object, symbol).enumerable;
        })),
        keys.push.apply(keys, symbols));
    }
    return keys;
  }
  function objectSpread(target) {
    for (var argIndex = 1; argIndex < arguments.length; argIndex++) {
      var source = null != arguments[argIndex] ? arguments[argIndex] : {};
      argIndex % 2
        ? ownKeys(Object(source), !0).forEach(function (key) {
            Object(vendorBundle.a)(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
          : ownKeys(Object(source)).forEach(function (descriptorKey) {
              Object.defineProperty(
                target,
                descriptorKey,
                Object.getOwnPropertyDescriptor(source, descriptorKey),
              );
            });
    }
    return target;
  }
  var state = function () {
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
    getters = {
      newsCates: function (newsCatesState) {
        return newsCatesState.newsCates;
      },
      videoCates: function (videoCatesState) {
        return videoCatesState.videoCates;
      },
      videoMainChanName: function (videoMainChanNameState) {
        return videoMainChanNameState.videoMainChanName;
      },
      characterCamps: function (characterCampsState) {
        return characterCampsState.characterCamps;
      },
      homeSection: function (homeSectionState) {
        return homeSectionState.homeSection;
      },
      routePage: function (routePageState) {
        return routePageState.routePage;
      },
      homeScroll: function (homeScrollState) {
        return homeScrollState.homeScroll;
      },
      blockGachaAnnounce: function (gachaState) {
        return !gachaState.isEnIp && "en-us" === gachaState.lang;
      },
      mediaConfig: function (mediaConfigState) {
        return {
          svgIconColor: "#898989",
          svgHoverColor: {
            iconColor: "#f2f2ef",
          },
          basicConfig: {
            biz: "nap_global",
            lang: mediaConfigState.lang,
            environment: siteConfigConstants.environment,
          },
        };
      },
    },
    mutations = {
      setIsEnIp: function (isEnIpState, isEnIp) {
        isEnIpState.isEnIp = isEnIp;
      },
      setLang: function (langState, lang) {
        langState.lang = lang;
      },
      setMi18n: function (mi18nState, words) {
        mi18nState.mi18n.WORD = words;
      },
      setLoading: function (loadingState, isLoading) {
        loadingState.isLoading = isLoading;
      },
      muteBgm: function (bgmState) {
        var muted = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        bgmState.bgmMuted = muted;
      },
      setNewsCates: function (setNewsCatesState, newsCates) {
        setNewsCatesState.newsCates = newsCates;
      },
      setVideoCates: function (setVideoCatesState, videoCates) {
        setVideoCatesState.videoCates = videoCates;
      },
      setVideoMainChanName: function (setVideoMainChanNameState, chanName) {
        setVideoMainChanNameState.videoMainChanName = chanName || "";
      },
      setCharacterCamps: function (setCharacterCampsState, characterCamps) {
        setCharacterCampsState.characterCamps = characterCamps;
      },
      setHomeSection: function (setHomeSectionState, section) {
        setHomeSectionState.homeSection = section;
      },
      setRoutePage: function (setRoutePageState, section) {
        setRoutePageState.routePage = section;
      },
      setHomeScroll: function (setHomeScrollState, scrollTop) {
        setHomeScrollState.homeScroll = scrollTop;
      },
      setNavSection: function (navSectionState, section) {
        navSectionState.navSection = section;
      },
      setBaseInfo: function (baseInfoState, baseInfo) {
        baseInfoState.baseInfo = baseInfo;
      },
      setUserInfo: function (userInfoState, userInfo) {
        userInfoState.userInfo = userInfo;
      },
      setNewsCache: function (newsCacheState, cachePatch) {
        newsCacheState.newsCache = objectSpread(objectSpread({}, newsCacheState.newsCache), cachePatch);
      },
    },
    actions = {};
};
