/**
 * m-lang-video — readable reconstruction of webpack module 1419 (chunk a9873dc.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/a9873dc.js
 *
 * Nuxt page component `m-index` for the mobile home route `m-lang-main` (layout `m/default`), bundled with its inline section components: the KV (`m-home-kv`, plays the `youtobeUrl` PV in `videoDialog` via `$openDialog` while committing `muteBgm`, tracking `AppointPage_PV_start/stop`), the video section (`m-home-video`, swiper of `videoRes` covers with prev/next, category label from `getCateDisplayName`, `learnMore` link to `m-lang-video`), the character section (`m-home-character`, thumb + fade swipers, camp info from the `characterCamps` getter or `getCampList` -> `setCharacterCamps`, `learnMore` to `m-lang-character`), the news slider (`m-home-news`, autoplaying looped swiper with `swiper-pagination-index-N` bullets and a scrolling summary), the feature section (`m-home-feature`, fade swiper with `feat-swiper-button-*`) and the world section (`m-home-world`, banners linking to `m-lang-world` plus the i18n `conceptLink` concept-video card), and an `m-preregister` floating bar with download / cloud-download buttons (`$downloadIns.download()`, `$mJump` to the iOS/Android cloud link, `$trackEvent`). The page's `asyncData` fetches in parallel `getKV`/`getFeature` (module 1164), `getSliderNews` (1124), `getAllCharacter` (1154), `getWorldList` (1152), `getHomeVideoList` and `getCates` (1153), commits `setVideoCates`/`setVideoMainChanName`, filters out `news-self-path` news (max 6) and returns `kvRes`, `newsRes`, `characterRes`, `featureRes`, `worldRes` and `videoRes`. It renders `section-index/character/video/news/world/feature` blocks with `fill` decoration static renders, keeps `isLoading` bound to the store (`setLoading`), positions the pre-register bar from scroll/resize, registers `$gsap` ScrollTrigger timelines that `$trackEvent('Page','enter')` per `.section`, and `slideTo` scrolls to a section using the nav config from HoYoverse mi18n (module 49).
 *
 * Exports (minified key → meaning):
 *   default → the `m-index` mobile home page Vue component (route m-lang-main, compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1419 from a9873dc.js
// deps: 1262, 1191, 1192, 1263, 1264, 85, 84, 105, 106, 56, 71, 32, 98, 136, 77, 137, 155, 67, 138, 208, 1164, 1124, 1154, 1152, 1153, 1195, 1157, 1279, 36, 1278, 1149, 1286, 1283, 1284, 1285, 65, 1120, 556, 1292, 1291, 204, 119, 118, 1296, 1295, 1298, 1303, 1202, 171, 28, 24, 1306, 250, 49, 1309
const module_1419 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var homeStaticRenderFns = [
      function () {
        var fillBgH = this._self._c;
        return fillBgH(
          "div",
          {
            staticClass: "fill fill-bg",
          },
          [
            fillBgH("img", {
              attrs: {
                src: webpackRequire(1262),
                alt: "",
              },
            }),
          ],
        );
      },
      function () {
        var fillBlackRightH = this._self._c;
        return fillBlackRightH(
          "div",
          {
            staticClass: "fill fill-black-right",
          },
          [
            fillBlackRightH("img", {
              staticClass: "fill-black-bar",
              attrs: {
                src: webpackRequire(1191),
                alt: "",
              },
            }),
            this._v(" "),
            fillBlackRightH("img", {
              attrs: {
                src: webpackRequire(1192),
                alt: "",
              },
            }),
          ],
        );
      },
      function () {
        var fillBlackH = this._self._c;
        return fillBlackH(
          "div",
          {
            staticClass: "fill fill-black",
          },
          [
            fillBlackH("img", {
              attrs: {
                src: webpackRequire(1263),
                alt: "",
              },
            }),
          ],
        );
      },
      function () {
        var fillBlackRightH2 = this._self._c;
        return fillBlackRightH2(
          "div",
          {
            staticClass: "fill fill-black-right",
          },
          [
            fillBlackRightH2("img", {
              staticClass: "fill-black-bar",
              attrs: {
                src: webpackRequire(1191),
                alt: "",
              },
            }),
            this._v(" "),
            fillBlackRightH2("img", {
              attrs: {
                src: webpackRequire(1192),
                alt: "",
              },
            }),
          ],
        );
      },
      function () {
        var fillBlackShortH = this._self._c;
        return fillBlackShortH(
          "div",
          {
            staticClass: "fill fill-black",
          },
          [
            fillBlackShortH("img", {
              attrs: {
                src: webpackRequire(1264),
                alt: "",
              },
            }),
          ],
        );
      },
    ],
    definePropertyHelper =
      (webpackRequire(85), webpackRequire(84), webpackRequire(105), webpackRequire(106), webpackRequire(56)),
    vendorBundle = webpackRequire(71),
    vendorBundle2 = webpackRequire(32),
    homeContentApi =
      (webpackRequire(98),
      webpackRequire(136),
      webpackRequire(77),
      webpackRequire(137),
      webpackRequire(155),
      webpackRequire(67),
      webpackRequire(138),
      webpackRequire(208),
      webpackRequire(1164)),
    newsCMSAPI = webpackRequire(1124),
    characterAndCampCMSAPI = webpackRequire(1154),
    worldCMSAPI = webpackRequire(1152),
    videoCMSAPI = webpackRequire(1153),
    kvStaticRenderFns = [
      function () {
        var sloganH = this._self._c;
        return sloganH(
          "div",
          {
            staticClass: "m-home-kv__slogan",
          },
          [
            sloganH("img", {
              attrs: {
                src: webpackRequire(1195),
                alt: "",
              },
            }),
          ],
        );
      },
    ],
    videoDialogComponent = webpackRequire(1157),
    homeKvOptions = {
      props: {
        kvRes: {
          type: Object,
          default: function () {},
        },
      },
      data: function () {
        return {};
      },
      methods: {
        playPV: function () {
          var kvSelf = this,
            pvStartTime = Date.now();
          (this.$store.commit("muteBgm", !0),
            this.$openDialog(videoDialogComponent.a, {
              transitionType: "scale",
              zIndex: 100,
              maskClose: !0,
              closeCb: function () {
                (kvSelf.$store.commit("muteBgm", !1),
                  kvSelf.$trackButton("AppointPage_PV_stop", Math.round((Date.now() - pvStartTime) / 1e3)));
              },
              bgOpacity: 0.8,
              dialogInfo: {
                iframeSrc: this.kvRes.youtobeUrl,
              },
            }),
            this.$trackButton("AppointPage_PV_start", ""));
        },
      },
    },
    componentNormalizer = (webpackRequire(1279), webpackRequire(36)),
    HomeKv = Object(componentNormalizer.a)(
      homeKvOptions,
      function () {
        var kvVm = this,
          kvH = kvVm._self._c;
        return kvH(
          "div",
          {
            staticClass: "m-home-kv",
          },
          [
            kvH(
              "div",
              {
                staticClass: "m-home-kv-wrap",
              },
              [
                kvH(
                  "div",
                  {
                    staticClass: "m-home-kv__bg",
                  },
                  [
                    kvH("img", {
                      attrs: {
                        src: kvVm.kvRes.kvMob,
                        alt: "",
                      },
                    }),
                  ],
                ),
                kvVm._v(" "),
                kvVm._m(0),
                kvVm._v(" "),
                kvH(
                  "div",
                  {
                    staticClass: "m-home-kv__aside",
                  },
                  [
                    kvH(
                      "div",
                      {
                        staticClass: "m-home-kv__play",
                        on: {
                          click: function (playClickEvent) {
                            return kvVm.playPV();
                          },
                        },
                      },
                      [
                        kvH("img", {
                          attrs: {
                            src: webpackRequire(1278),
                            alt: "",
                          },
                        }),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ],
        );
      },
      kvStaticRenderFns,
      !1,
      null,
      null,
      null,
    ).exports,
    pageTabComponent = webpackRequire(1149),
    homeVideoOptions = {
      components: {
        pageTab: pageTabComponent.a,
      },
      props: {
        videoRes: {
          type: Object,
          default: function () {
            return {};
          },
        },
      },
      data: function () {
        return {
          activeIndex: 0,
        };
      },
      computed: {
        videoList: function () {
          return (this.videoRes && this.videoRes.list) || [];
        },
        currentVideo: function () {
          return this.videoList[this.activeIndex] || {};
        },
        videoCates: function () {
          return this.$store.getters.videoCates || [];
        },
        currentVideoCateName: function () {
          var videoChannelId = this.currentVideo.sChanId && this.currentVideo.sChanId[0];
          return videoCMSAPI.a.getCateDisplayName(
            videoChannelId,
            this.videoCates,
            this.$store.getters.videoMainChanName,
          );
        },
        canSlidePrev: function () {
          return this.activeIndex > 0;
        },
        canSlideNext: function () {
          return this.activeIndex < this.videoList.length - 1;
        },
        swiperOption: function () {
          return {
            slidesPerView: 1,
            loop: !1,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
          };
        },
      },
      watch: {
        videoList: function (newVideoList) {
          this.activeIndex > newVideoList.length - 1 && (this.activeIndex = 0);
        },
      },
      methods: {
        handleSlideChange: function () {
          var mainSwiper = this.$refs.mainSwiper && this.$refs.mainSwiper.swiper;
          mainSwiper && (this.activeIndex = mainSwiper.activeIndex);
        },
        handleMoreClick: function () {
          this.$trackButton("video_more", "");
        },
        handlePrev: function () {
          if (this.canSlidePrev) {
            var prevSwiper = this.$refs.mainSwiper && this.$refs.mainSwiper.swiper;
            prevSwiper && (prevSwiper.slidePrev(), this.$trackButton("next_video", ""));
          }
        },
        handleNext: function () {
          if (this.canSlideNext) {
            var nextSwiper = this.$refs.mainSwiper && this.$refs.mainSwiper.swiper;
            nextSwiper && (nextSwiper.slideNext(), this.$trackButton("next_video", ""));
          }
        },
        openPlayer: function (video) {
          var playerSelf = this,
            dialogInfo = this.getVideoDialogInfo(video);
          dialogInfo &&
            (this.$store.commit("muteBgm", !0),
            this.$openDialog(videoDialogComponent.a, {
              transitionType: "scale",
              zIndex: 100,
              maskClose: !0,
              bgOpacity: 0.8,
              closeCb: function () {
                playerSelf.$store.commit("muteBgm", !1);
              },
              dialogInfo: dialogInfo,
            }),
            this.$trackButton("video_play", video.id));
        },
        getVideoDialogInfo: function (video) {
          return video
            ? video.youtubeUrl
              ? {
                  iframeSrc: video.youtubeUrl,
                }
              : video.videoUrl
                ? {
                    src: video.videoUrl,
                  }
                : null
            : null;
        },
      },
    },
    homeVideoComponent =
      (webpackRequire(1286),
      Object(componentNormalizer.a)(
        homeVideoOptions,
        function () {
          var videoVm = this,
            videoH = videoVm._self._c;
          return videoH(
            "div",
            {
              staticClass: "m-home-video",
            },
            [
              videoH("pageTab", {
                attrs: {
                  "nav-num": 3,
                  size: "lg",
                  direction: "right",
                },
              }),
              videoVm._v(" "),
              videoH(
                "div",
                {
                  staticClass: "m-home-video__banner",
                },
                [
                  videoH(
                    "client-only",
                    [
                      videoVm.videoList.length
                        ? videoH(
                            "swiper",
                            {
                              ref: "mainSwiper",
                              staticClass: "m-home-video__banner-list",
                              attrs: {
                                options: videoVm.swiperOption,
                              },
                              on: {
                                slideChange: videoVm.handleSlideChange,
                              },
                            },
                            videoVm._l(videoVm.videoList, function (video) {
                              return videoH(
                                "swiper-slide",
                                {
                                  key: video.id,
                                  staticClass: "m-home-video__banner-item",
                                  nativeOn: {
                                    click: function (videoSlideClickEvent) {
                                      return videoVm.openPlayer(video);
                                    },
                                  },
                                },
                                [
                                  videoH("img", {
                                    staticClass: "m-home-video__cover",
                                    attrs: {
                                      src: video.cover,
                                      alt: "",
                                    },
                                  }),
                                ],
                              );
                            }),
                            1,
                          )
                        : videoVm._e(),
                    ],
                    1,
                  ),
                  videoVm._v(" "),
                  videoH(
                    "div",
                    {
                      staticClass: "m-home-video__action",
                    },
                    [
                      videoH("img", {
                        staticClass: "m-home-video__play",
                        attrs: {
                          src: webpackRequire(1283),
                          alt: "",
                        },
                        on: {
                          click: function (playButtonClickEvent) {
                            return (
                              playButtonClickEvent.stopPropagation(),
                              videoVm.openPlayer(videoVm.currentVideo)
                            );
                          },
                        },
                      }),
                      videoVm._v(" "),
                      videoH(
                        "nuxt-link",
                        {
                          staticClass: "more",
                          attrs: {
                            to: {
                              name: "m-lang-video",
                              query: videoVm.$route.query,
                            },
                          },
                          nativeOn: {
                            click: function (videoMoreClickEvent) {
                              return videoVm.handleMoreClick.apply(null, arguments);
                            },
                          },
                        },
                        [
                          videoH(
                            "div",
                            {
                              staticClass: "m-more-btn",
                            },
                            [videoVm._v(videoVm._s(videoVm.$getI18nWord("learnMore")))],
                          ),
                        ],
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              videoVm._v(" "),
              videoVm.videoList.length > 1
                ? videoH(
                    "div",
                    {
                      staticClass: "swiper-navigation",
                    },
                    [
                      videoH("div", {
                        staticClass: "swiper-button-prev",
                        class: {
                          "swiper-button-disabled": !videoVm.canSlidePrev,
                        },
                        on: {
                          click: videoVm.handlePrev,
                        },
                      }),
                      videoVm._v(" "),
                      videoH("div", {
                        staticClass: "swiper-button-next",
                        class: {
                          "swiper-button-disabled": !videoVm.canSlideNext,
                        },
                        on: {
                          click: videoVm.handleNext,
                        },
                      }),
                    ],
                  )
                : videoVm._e(),
              videoVm._v(" "),
              videoH(
                "div",
                {
                  staticClass: "m-home-video__summary",
                  on: {
                    click: function (summaryClickEvent) {
                      return videoVm.openPlayer(videoVm.currentVideo);
                    },
                  },
                },
                [
                  videoVm.currentVideoCateName
                    ? videoH(
                        "div",
                        {
                          staticClass: "m-home-video__summary-category",
                        },
                        [videoVm._v("\n      " + videoVm._s(videoVm.currentVideoCateName) + "\n    ")],
                      )
                    : videoVm._e(),
                  videoVm._v(" "),
                  videoH(
                    "div",
                    {
                      staticClass: "m-home-video__summary-title",
                    },
                    [videoVm._v("\n      " + videoVm._s(videoVm.currentVideo.title) + "\n    ")],
                  ),
                ],
              ),
              videoVm._v(" "),
              videoH("img", {
                staticClass: "m-home-video__bottom-film-bg",
                attrs: {
                  src: webpackRequire(1284),
                  alt: "video-bottom-film-bg",
                },
              }),
              videoVm._v(" "),
              videoH("img", {
                staticClass: "m-home-video__right-film-bg",
                attrs: {
                  src: webpackRequire(1285),
                  alt: "video-right-film-bg",
                },
              }),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "42ef7462",
        null,
      )),
    HomeVideo = homeVideoComponent.exports;
  (webpackRequire(65), webpackRequire(1120), webpackRequire(556));
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
            Object(definePropertyHelper.a)(target, key, source[key]);
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
  var homeCharacterOptions = {
      components: {
        pageTab: pageTabComponent.a,
      },
      props: {
        characterRes: {
          type: Object,
          default: function () {},
        },
      },
      data: function () {
        return {
          showTitle: !0,
          thumbOption: {
            slidesPerView: "auto",
            centerInsufficientSlides: !0,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            allowTouchMove: !1,
            shortSwipes: !1,
          },
          swiperOption: {
            watchSlidesProgress: !0,
            slidesPerView: "auto",
            parallax: !0,
            effect: "fade",
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            allowTouchMove: !1,
          },
          activeIndex: 0,
          characterInfo: null,
          canSlidePrev: !1,
          canSlideNext: !0,
        };
      },
      computed: {
        charaList: function () {
          return this.characterRes.list;
        },
        characterCamps: function () {
          return this.$store.getters.characterCamps || [];
        },
      },
      created: function () {
        var charaListHead = Object(vendorBundle.a)(this.charaList, 1);
        ((this.characterInfo = charaListHead[0]),
          (this.characterCamps && this.characterCamps.length) || this.getCharacterCamps());
      },
      methods: {
        getCharacterCamps: function () {
          var campsSelf = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function getCampsGenerator() {
              var campListRes;
              return regeneratorRuntime.wrap(function (campsContext) {
                for (;;)
                  switch ((campsContext.prev = campsContext.next)) {
                    case 0:
                      return (
                        (campsContext.next = 2),
                        characterAndCampCMSAPI.a.getCampList({
                          data: {
                            sLangKey: campsSelf.$store.state.lang,
                          },
                        })
                      );
                    case 2:
                      ((campListRes = campsContext.sent),
                        campsSelf.$store.commit("setCharacterCamps", campListRes));
                    case 4:
                    case "end":
                      return campsContext.stop();
                  }
              }, getCampsGenerator);
            }),
          )();
        },
        campInfo: function (chanId) {
          return this.characterCamps.find(function (camp) {
            return Number(camp.channelId) === Number(chanId);
          });
        },
        toggleRole: function (roleIndex) {
          var toggleSelf = this;
          ((this.activeIndex = roleIndex),
            (this.characterInfo = this.charaList[roleIndex]),
            this.$refs.characterSwiper.swiper.slideTo(roleIndex),
            (this.showTitle = !1),
            this.$nextTick(function () {
              toggleSelf.showTitle = !0;
            }));
        },
        handleCharaNavClick: function (navIndex, navChara) {
          (this.toggleRole(navIndex), this.$trackButton("character_icon", "".concat(navChara.iInfoId)));
        },
        handlePrev: function () {
          var prevTargetIndex = this.$refs.pageSwiper.swiper.activeIndex - 3;
          ((this.canSlidePrev = prevTargetIndex - 3 >= 0),
            (this.canSlideNext = prevTargetIndex + 3 <= this.charaList.length - 1),
            this.$refs.pageSwiper.swiper.slideTo(prevTargetIndex),
            this.$trackButton("next_character", ""));
        },
        handleNext: function () {
          var nextTargetIndex = this.$refs.pageSwiper.swiper.activeIndex + 3;
          ((this.canSlidePrev = nextTargetIndex - 3 >= 0),
            (this.canSlideNext = nextTargetIndex + 3 <= this.charaList.length - 1),
            this.$refs.pageSwiper.swiper.slideTo(nextTargetIndex),
            this.$trackButton("next_character", ""));
        },
        handleMoreClick: function () {
          (this.$trackButton("character_more", ""),
            this.$router.push({
              name: "m-lang-character",
              query: objectSpread(
                objectSpread({}, this.$route.query),
                {},
                {
                  id: this.characterInfo.iInfoId,
                },
              ),
            }));
        },
      },
    },
    HomeCharacter =
      (webpackRequire(1292),
      Object(componentNormalizer.a)(
        homeCharacterOptions,
        function () {
          var charaVm = this,
            charaH = charaVm._self._c;
          return charaH(
            "div",
            {
              staticClass: "m-home-character",
            },
            [
              charaH("pageTab", {
                staticClass: "character-page-tab__m",
                attrs: {
                  "nav-num": 2,
                  size: "lg",
                },
              }),
              charaVm._v(" "),
              charaVm.characterInfo
                ? charaH(
                    "div",
                    {
                      staticClass: "m-home-character__anim",
                    },
                    [
                      charaH(
                        "transition",
                        {
                          attrs: {
                            name: "namefade",
                          },
                        },
                        [
                          charaVm.showTitle
                            ? charaH("div", [charaVm._v(charaVm._s(charaVm.characterInfo.nameEN))])
                            : charaVm._e(),
                        ],
                      ),
                    ],
                    1,
                  )
                : charaVm._e(),
              charaVm._v(" "),
              charaH(
                "div",
                {
                  staticClass: "m-home-character__main",
                },
                [
                  charaH("div", {
                    staticClass: "m-home-character__main-panel",
                  }),
                  charaVm._v(" "),
                  charaH(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: charaVm.charaList.length > 1,
                          expression: "charaList.length > 1",
                        },
                      ],
                      staticClass: "m-home-character__main-nav",
                    },
                    [
                      charaH(
                        "client-only",
                        [
                          charaH(
                            "swiper",
                            {
                              ref: "pageSwiper",
                              staticClass: "m-home-character__nav",
                              attrs: {
                                options: charaVm.thumbOption,
                              },
                            },
                            charaVm._l(charaVm.charaList, function (thumbChara, thumbIndex) {
                              return charaH(
                                "swiper-slide",
                                {
                                  key: thumbIndex,
                                  staticClass: "m-home-character__nav-item swiper-no-swiping",
                                  class: {
                                    "swiper-slide-active": charaVm.activeIndex === thumbIndex,
                                    "swiper-slide-thumb-active": charaVm.activeIndex === thumbIndex,
                                  },
                                  nativeOn: {
                                    click: function (thumbClickEvent) {
                                      return charaVm.handleCharaNavClick(thumbIndex, thumbChara);
                                    },
                                  },
                                },
                                [
                                  charaH("img", {
                                    attrs: {
                                      src: thumbChara.nav,
                                      alt: "",
                                    },
                                  }),
                                  charaVm._v(" "),
                                  charaH("div", {
                                    staticClass: "m-home-character__nav-mask",
                                  }),
                                ],
                              );
                            }),
                            1,
                          ),
                          charaVm._v(" "),
                          charaH(
                            "div",
                            {
                              staticClass: "swiper-navigation",
                            },
                            [
                              charaH("div", {
                                staticClass: "swiper-button-prev cha-swiper-button-prev",
                                class: {
                                  "swiper-button-disabled": !charaVm.canSlidePrev,
                                },
                                attrs: {
                                  slot: "button-prev",
                                },
                                on: {
                                  click: charaVm.handlePrev,
                                },
                                slot: "button-prev",
                              }),
                              charaVm._v(" "),
                              charaH("div", {
                                staticClass: "swiper-button-next cha-swiper-button-next",
                                class: {
                                  "swiper-button-disabled": !charaVm.canSlideNext,
                                },
                                attrs: {
                                  slot: "button-next",
                                },
                                on: {
                                  click: charaVm.handleNext,
                                },
                                slot: "button-next",
                              }),
                            ],
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  charaVm._v(" "),
                  charaH(
                    "div",
                    {
                      staticClass: "m-home-character__main-swiper",
                    },
                    [
                      charaVm.charaList.length
                        ? charaH(
                            "swiper",
                            {
                              ref: "characterSwiper",
                              staticClass: "m-home-character__list",
                              attrs: {
                                options: charaVm.swiperOption,
                              },
                            },
                            charaVm._l(charaVm.charaList, function (slideChara) {
                              return charaH(
                                "swiper-slide",
                                {
                                  key: slideChara.id,
                                  staticClass: "m-home-character__list-item swiper-no-swiping",
                                },
                                [
                                  charaH(
                                    "div",
                                    {
                                      staticClass: "m-home-character__role",
                                    },
                                    [
                                      charaH("img", {
                                        attrs: {
                                          src: slideChara.coverM,
                                          alt: "",
                                        },
                                      }),
                                    ],
                                  ),
                                  charaVm._v(" "),
                                  charaH(
                                    "div",
                                    {
                                      staticClass: "m-home-character__shade",
                                    },
                                    [
                                      charaVm.campInfo(slideChara.sChanId[0])
                                        ? charaH("img", {
                                            attrs: {
                                              src: charaVm.campInfo(slideChara.sChanId[0]).shade,
                                              alt: "",
                                            },
                                          })
                                        : charaVm._e(),
                                    ],
                                  ),
                                  charaVm._v(" "),
                                  charaH(
                                    "div",
                                    {
                                      staticClass: "m-home-character__info",
                                    },
                                    [
                                      charaVm.campInfo(slideChara.sChanId[0])
                                        ? charaH("div", {
                                            staticClass: "m-home-character__camp",
                                            domProps: {
                                              innerHTML: charaVm._s(
                                                charaVm.campInfo(slideChara.sChanId[0]).name,
                                              ),
                                            },
                                          })
                                        : charaVm._e(),
                                      charaVm._v(" "),
                                      charaH("div", {
                                        staticClass: "m-home-character__name",
                                        domProps: {
                                          innerHTML: charaVm._s(
                                            slideChara.nameHomeM || slideChara.nameHome || slideChara.name,
                                          ),
                                        },
                                      }),
                                    ],
                                  ),
                                ],
                              );
                            }),
                            1,
                          )
                        : charaH(
                            "div",
                            {
                              staticClass: "m-home-character__list-empty",
                            },
                            [
                              charaH("img", {
                                attrs: {
                                  src: webpackRequire(1291),
                                  alt: "",
                                },
                              }),
                            ],
                          ),
                    ],
                    1,
                  ),
                ],
              ),
              charaVm._v(" "),
              charaVm.charaList.length
                ? charaH(
                    "div",
                    {
                      staticClass: "m-more-btn",
                      on: {
                        click: charaVm.handleMoreClick,
                      },
                    },
                    [charaVm._v(charaVm._s(charaVm.$getI18nWord("learnMore")))],
                  )
                : charaVm._e(),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "4cbeaaa9",
        null,
      ).exports),
    homeNewsOptions =
      (webpackRequire(204),
      webpackRequire(119),
      webpackRequire(118),
      {
        components: {
          pageTab: pageTabComponent.a,
        },
        props: {
          newsRes: {
            type: Object,
            default: function () {},
          },
        },
        data: function () {
          return {
            swiperOption: {
              watchSlidesProgress: !0,
              slidesPerView: "auto",
              loop: !0,
              observer: !0,
              observeParents: !0,
              observeSlideChildren: !0,
              autoplay: {
                delay: 8e3,
                disableOnInteraction: !1,
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: !0,
                renderBullet: function (bulletIndex, bulletClassName) {
                  return '<span class="'
                    .concat(bulletClassName, " swiper-pagination-index-")
                    .concat(bulletIndex + 1, '"></span>');
                },
              },
            },
            activeIndex: 0,
            activeNews: null,
            isWordsLoop: !1,
          };
        },
        computed: {
          newsList: function () {
            return this.newsRes.list;
          },
        },
        created: function () {
          var newsCreatedSelf = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function newsCreatedGenerator() {
              var newsListHead;
              return regeneratorRuntime.wrap(function (newsCreatedContext) {
                for (;;)
                  switch ((newsCreatedContext.prev = newsCreatedContext.next)) {
                    case 0:
                      ((newsListHead = Object(vendorBundle.a)(newsCreatedSelf.newsList, 1)),
                        (newsCreatedSelf.activeNews = newsListHead[0]),
                        (newsCreatedSelf.isWordsLoop = !0));
                    case 3:
                    case "end":
                      return newsCreatedContext.stop();
                  }
              }, newsCreatedGenerator);
            }),
          )();
        },
        methods: {
          handleTransitionStart: function () {
            var transitionStartIndex = this.$refs.mySwiper.swiper.realIndex;
            this.activeIndex !== transitionStartIndex && (this.isWordsLoop = !1);
          },
          handleTransitionEnd: function () {
            var transitionEndIndex = this.$refs.mySwiper.swiper.realIndex;
            this.activeIndex !== transitionEndIndex &&
              ((this.activeIndex = transitionEndIndex),
              (this.activeNews = this.newsList[transitionEndIndex]),
              (this.isWordsLoop = !0));
          },
          handlePaginationClick: function (paginationEvent) {
            var targetEl = paginationEvent.target || paginationEvent.srcElement;
            if (targetEl.className.indexOf("swiper-pagination-index") > -1) {
              var bulletNumber = targetEl.className
                .split(" ")
                .find(function (classToken) {
                  return classToken.includes("swiper-pagination-index-");
                })
                .split("-")
                .pop();
              this.$trackButton("news_point", "".concat(bulletNumber));
            }
          },
          handlePicClick: function (clickedNews) {
            this.$trackButton("news_pics", "".concat(clickedNews.iInfoId));
          },
          handleMoreClick: function () {
            this.$trackButton("news_more", "");
          },
        },
      }),
    homeNewsComponentOptions = homeNewsOptions,
    homeNewsComponent =
      (webpackRequire(1296),
      Object(componentNormalizer.a)(
        homeNewsComponentOptions,
        function () {
          var newsVm = this,
            newsH = newsVm._self._c;
          return newsH(
            "div",
            {
              staticClass: "m-home-news",
            },
            [
              newsH("pageTab", {
                attrs: {
                  "nav-num": 4,
                  size: "lg",
                },
              }),
              newsVm._v(" "),
              newsH("img", {
                staticClass: "m-home-news__bg",
                attrs: {
                  src: webpackRequire(1295),
                  alt: "news-bg-m",
                },
              }),
              newsVm._v(" "),
              newsH(
                "div",
                {
                  staticClass: "m-home-news__banner",
                },
                [
                  newsH(
                    "client-only",
                    [
                      newsVm.newsList && newsVm.newsList.length
                        ? newsH(
                            "swiper",
                            {
                              ref: "mySwiper",
                              staticClass: "m-home-news__banner-list",
                              attrs: {
                                options: newsVm.swiperOption,
                              },
                              on: {
                                transitionStart: newsVm.handleTransitionStart,
                                transitionEnd: newsVm.handleTransitionEnd,
                              },
                            },
                            newsVm._l(newsVm.newsList, function (bannerNews) {
                              return newsH(
                                "swiper-slide",
                                {
                                  key: bannerNews.id,
                                  staticClass: "m-home-news__banner-item",
                                },
                                [
                                  newsH(
                                    "nuxt-link",
                                    {
                                      staticClass: "m-home-news__banner-img",
                                      attrs: {
                                        to: {
                                          name: "m-lang-news-id",
                                          params: {
                                            id: bannerNews.iInfoId,
                                          },
                                        },
                                      },
                                      nativeOn: {
                                        click: function (newsBannerClickEvent) {
                                          return newsVm.handlePicClick(bannerNews);
                                        },
                                      },
                                    },
                                    [
                                      newsH("img", {
                                        attrs: {
                                          src: bannerNews.banner,
                                          alt: "news-banner",
                                        },
                                      }),
                                    ],
                                  ),
                                ],
                                1,
                              );
                            }),
                            1,
                          )
                        : newsVm._e(),
                    ],
                    1,
                  ),
                  newsVm._v(" "),
                  newsH(
                    "transition",
                    {
                      attrs: {
                        name: "slide-bottom",
                      },
                    },
                    [
                      newsVm.activeNews && newsVm.activeNews.summary
                        ? newsH(
                            "div",
                            {
                              staticClass: "m-home-news__summary",
                            },
                            [
                              newsH(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: newsVm.isWordsLoop,
                                      expression: "isWordsLoop",
                                    },
                                  ],
                                  staticClass: "m-home-news__summary-scroll",
                                },
                                [newsVm._v(newsVm._s(newsVm.activeNews.summary))],
                              ),
                            ],
                          )
                        : newsVm._e(),
                    ],
                  ),
                ],
                1,
              ),
              newsVm._v(" "),
              newsH(
                "nuxt-link",
                {
                  staticClass: "more",
                  attrs: {
                    to: {
                      name: "m-lang-news",
                    },
                  },
                  nativeOn: {
                    click: function (newsMoreClickEvent) {
                      return newsVm.handleMoreClick.apply(null, arguments);
                    },
                  },
                },
                [
                  newsH(
                    "div",
                    {
                      staticClass: "m-more-btn",
                    },
                    [newsVm._v(newsVm._s(newsVm.$getI18nWord("learnMore")))],
                  ),
                ],
              ),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "4271f3ad",
        null,
      )),
    HomeNews = homeNewsComponent.exports,
    homeFeatureOptions = {
      components: {
        pageTab: pageTabComponent.a,
      },
      props: {
        featureRes: {
          type: Object,
          default: function () {},
        },
      },
      data: function () {
        return {
          swiperOption: {
            watchSlidesProgress: !0,
            slidesPerView: "auto",
            loop: !0,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            effect: "fade",
            fadeEffect: {
              crossFade: !0,
            },
            navigation: {
              nextEl: ".feat-swiper-button-next",
              prevEl: ".feat-swiper-button-prev",
            },
          },
          activeFeature: null,
        };
      },
      computed: {
        featureList: function () {
          return this.featureRes.list;
        },
      },
      created: function () {
        var featureCreatedSelf = this;
        return Object(vendorBundle2.a)(
          regeneratorRuntime.mark(function featureCreatedGenerator() {
            var featureListHead;
            return regeneratorRuntime.wrap(function (featureCreatedContext) {
              for (;;)
                switch ((featureCreatedContext.prev = featureCreatedContext.next)) {
                  case 0:
                    ((featureListHead = Object(vendorBundle.a)(featureCreatedSelf.featureList, 1)),
                      (featureCreatedSelf.activeFeature = featureListHead[0]));
                  case 2:
                  case "end":
                    return featureCreatedContext.stop();
                }
            }, featureCreatedGenerator);
          }),
        )();
      },
      methods: {
        handleSlideChange: function () {
          var featureRealIndex = this.$refs.homeFeatureSwiper.swiper.realIndex;
          ((this.activeFeature = this.featureList[featureRealIndex]),
            this.$trackButton("features_pics", "".concat(this.activeFeature.iInfoId)));
        },
        handleNavigatorUpload: function () {
          this.$trackButton("features_next", "");
        },
      },
    },
    HomeFeature =
      (webpackRequire(1298),
      Object(componentNormalizer.a)(
        homeFeatureOptions,
        function () {
          var featureVm = this,
            featureH = featureVm._self._c;
          return featureH(
            "div",
            {
              staticClass: "m-home-feature",
            },
            [
              featureH("pageTab", {
                attrs: {
                  "nav-num": 6,
                  size: "lg",
                },
              }),
              featureVm._v(" "),
              featureH(
                "div",
                {
                  staticClass: "m-home-feature__swiper",
                },
                [
                  featureH(
                    "client-only",
                    [
                      featureH(
                        "swiper",
                        {
                          ref: "homeFeatureSwiper",
                          staticClass: "m-home-feature__list",
                          attrs: {
                            options: featureVm.swiperOption,
                          },
                          on: {
                            slideChange: featureVm.handleSlideChange,
                          },
                        },
                        featureVm._l(featureVm.featureList, function (feature) {
                          return featureH(
                            "swiper-slide",
                            {
                              key: feature.id,
                              staticClass: "m-home-feature__list-item",
                            },
                            [
                              featureH(
                                "div",
                                {
                                  staticClass: "m-home-feature__banner",
                                },
                                [
                                  featureH("img", {
                                    attrs: {
                                      src: feature.bannerM,
                                      alt: "",
                                    },
                                  }),
                                ],
                              ),
                            ],
                          );
                        }),
                        1,
                      ),
                    ],
                    1,
                  ),
                  featureVm._v(" "),
                  featureVm.activeFeature
                    ? featureH(
                        "div",
                        {
                          staticClass: "m-home-feature__info",
                        },
                        [
                          featureH("div", {
                            staticClass: "m-home-feature__info-bar",
                          }),
                          featureVm._v(" "),
                          featureH("div", {
                            staticClass: "m-home-feature__info-title ellipsis",
                            domProps: {
                              innerHTML: featureVm._s(featureVm.activeFeature.title),
                            },
                          }),
                          featureVm._v(" "),
                          featureH("div", {
                            staticClass: "m-home-feature__info-summary ellipsis",
                            domProps: {
                              innerHTML: featureVm._s(featureVm.activeFeature.summary),
                            },
                          }),
                        ],
                      )
                    : featureVm._e(),
                ],
                1,
              ),
              featureVm._v(" "),
              featureH(
                "div",
                {
                  staticClass: "m-home-feature__navigator",
                },
                [
                  featureH("div", {
                    staticClass: "swiper-button-prev feat-swiper-button-prev",
                    attrs: {
                      slot: "button-prev",
                    },
                    on: {
                      click: featureVm.handleNavigatorUpload,
                    },
                    slot: "button-prev",
                  }),
                  featureVm._v(" "),
                  featureH("div", {
                    staticClass: "swiper-button-next feat-swiper-button-next",
                    attrs: {
                      slot: "button-next",
                    },
                    on: {
                      click: featureVm.handleNavigatorUpload,
                    },
                    slot: "button-next",
                  }),
                ],
              ),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "5959da90",
        null,
      ).exports),
    homeWorldOptions = {
      components: {
        pageTab: pageTabComponent.a,
      },
      props: {
        worldRes: {
          type: Object,
          default: function () {},
        },
      },
      data: function () {
        return {
          swiperOption: {
            slidesPerView: "auto",
            loop: !0,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          },
        };
      },
      computed: {
        worldList: function () {
          return this.worldRes.list;
        },
        swiper: function () {
          return this.$refs.homeWorldSwiper.swiper;
        },
        conceptUrl: function () {
          return "".concat(this.$getI18nWord("conceptLink"));
        },
      },
      methods: {
        toggleTv: function () {
          this.$trackButton("file_tv", "");
        },
        handlePicClick: function (clickedWorld) {
          this.$trackButton("file_pics", "".concat(clickedWorld.iInfoId));
        },
        handleNavigatorUpload: function () {
          this.$trackButton("file_next", "");
        },
      },
    },
    homeWorldComponentOptions = homeWorldOptions,
    HomeWorld =
      (webpackRequire(1303),
      Object(componentNormalizer.a)(
        homeWorldComponentOptions,
        function () {
          var worldVm = this,
            worldH = worldVm._self._c;
          return worldH(
            "div",
            {
              staticClass: "m-home-world",
            },
            [
              worldH("pageTab", {
                attrs: {
                  "nav-num": 5,
                  size: "lg",
                },
              }),
              worldVm._v(" "),
              worldH(
                "div",
                {
                  staticClass: "m-home-world__banner",
                },
                [
                  worldH(
                    "client-only",
                    [
                      worldVm.worldList && worldVm.worldList.length
                        ? worldH(
                            "swiper",
                            {
                              ref: "homeWorldSwiper",
                              staticClass: "m-home-world__banner-list",
                              class: {
                                "swiper-no-swiping": worldVm.worldList.length <= 1,
                              },
                              attrs: {
                                options: worldVm.swiperOption,
                              },
                            },
                            [
                              worldVm._l(worldVm.worldList, function (bannerWorld) {
                                return worldH(
                                  "swiper-slide",
                                  {
                                    key: bannerWorld.id,
                                    staticClass: "m-home-world__banner-item",
                                  },
                                  [
                                    worldH(
                                      "nuxt-link",
                                      {
                                        staticClass: "m-home-world__banner-img",
                                        attrs: {
                                          to: {
                                            name: "m-lang-world",
                                            params: {
                                              worldId: bannerWorld.iInfoId,
                                            },
                                          },
                                        },
                                        nativeOn: {
                                          click: function (worldBannerClickEvent) {
                                            return worldVm.handlePicClick(bannerWorld);
                                          },
                                        },
                                      },
                                      [
                                        worldH("img", {
                                          attrs: {
                                            src: bannerWorld.homeBanner,
                                            alt: "world-banner",
                                          },
                                        }),
                                      ],
                                    ),
                                  ],
                                  1,
                                );
                              }),
                              worldVm._v(" "),
                              worldH("div", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: worldVm.worldList && worldVm.worldList.length > 1,
                                    expression: "worldList && worldList.length > 1",
                                  },
                                ],
                                staticClass: "swiper-button-prev",
                                attrs: {
                                  slot: "button-prev",
                                },
                                on: {
                                  click: worldVm.handleNavigatorUpload,
                                },
                                slot: "button-prev",
                              }),
                              worldVm._v(" "),
                              worldH("div", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: worldVm.worldList && worldVm.worldList.length > 1,
                                    expression: "worldList && worldList.length > 1",
                                  },
                                ],
                                staticClass: "swiper-button-next",
                                attrs: {
                                  slot: "button-next",
                                },
                                on: {
                                  click: worldVm.handleNavigatorUpload,
                                },
                                slot: "button-next",
                              }),
                            ],
                            2,
                          )
                        : worldH(
                            "div",
                            {
                              staticClass: "m-home-world__banner-empty",
                            },
                            [
                              worldH("img", {
                                attrs: {
                                  src: webpackRequire(1202),
                                  alt: "",
                                },
                              }),
                            ],
                          ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              worldVm._v(" "),
              worldH("client-only", [
                worldH(
                  "div",
                  {
                    staticClass: "section__concept",
                  },
                  [
                    worldH(
                      "a",
                      {
                        attrs: {
                          href: worldVm.conceptUrl,
                          target: "_blank",
                        },
                      },
                      [
                        worldH(
                          "div",
                          {
                            staticClass: "section__concept-title",
                          },
                          [
                            worldH("div", {
                              staticClass: "section__concept-title-label",
                              domProps: {
                                innerHTML: worldVm._s(worldVm.$getI18nWord("conceptTitle")),
                              },
                            }),
                          ],
                        ),
                        worldVm._v(" "),
                        worldH(
                          "div",
                          {
                            staticClass: "section__concept-video",
                            on: {
                              click: worldVm.toggleTv,
                            },
                          },
                          [
                            worldH(
                              "div",
                              {
                                staticClass: "section__concept-video-mp4",
                              },
                              [
                                worldH("img", {
                                  attrs: {
                                    src: worldVm.$getI18nWord("conceptVideo"),
                                    alt: "",
                                  },
                                }),
                              ],
                            ),
                            worldVm._v(" "),
                            worldH("div", {
                              staticClass: "section__concept-video-tv",
                            }),
                            worldVm._v(" "),
                            worldH("div", {
                              staticClass: "section__concept-video-play",
                            }),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
              ]),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "c09ee0ae",
        null,
      ).exports),
    appConfig = (webpackRequire(171), webpackRequire(28)),
    mPreregisterOptions = {
      name: "m-preregister",
      data: function () {
        var cloudLinkIos = this.$getI18nWord("cloud_download_link_ios") || "",
          cloudLinkAndroid = this.$getI18nWord("cloud_download_link_android") || "",
          cloudLinksValid = cloudLinkIos.startsWith("https") && cloudLinkAndroid.startsWith("https");
        return {
          environment: appConfig.environment,
          isExpand: !0,
          scrollPos: 0,
          scrollTimer: null,
          cloudDownloadLinkIos: cloudLinkIos,
          cloudDownloadLinkAndroid: cloudLinkAndroid,
          cloudDownloadBtnVisible: cloudLinksValid,
        };
      },
      computed: {
        lang: function () {
          return this.$store.state.lang;
        },
        showPreRegister: function () {
          return "1" === this.$getI18nWord("preRegisterBtn");
        },
        recruitBtnImg: function () {
          var img = this.$getI18nWord("recruit_btn_m");
          return -1 !== img.indexOf("https") ? img : "";
        },
      },
      mounted: function () {
        window.addEventListener("scroll", this.onScroll);
      },
      beforeDestroy: function () {
        window.removeEventListener("scroll", this.onScroll);
      },
      methods: {
        onScroll: function () {
          var scrollDelta = document.documentElement.scrollTop - this.scrollPos;
          this.isExpand = this.isExpand && Math.abs(scrollDelta) < 100;
        },
        toLanding: function () {
          (this.$trackEvent("button", "click", "to_landingpage", ""),
            window.open("".concat(appConfig.LANDING_URL, "/").concat(this.lang)));
        },
        toggleExpand: function () {
          ((this.isExpand = !this.isExpand),
            this.isExpand &&
              (this.$trackEvent("Button", "Click", "view_more_icon", ""),
              (this.scrollPos = document.documentElement.scrollTop)));
        },
        handleDownload: function () {
          (this.$trackEvent("Button", "Click", "to_download", 7), this.$downloadIns.download());
        },
        handleCloudDownload: function () {
          this.$trackEvent("button", "click", "download", "cloud_m");
          var link = webpackRequire(24).IS_IOS ? this.cloudDownloadLinkIos : this.cloudDownloadLinkAndroid;
          link &&
            this.$mJump({
              url: link,
              openType: "system",
            });
        },
      },
    },
    MPreregister =
      (webpackRequire(1306),
      Object(componentNormalizer.a)(
        mPreregisterOptions,
        function () {
          var preregisterVm = this,
            preregisterH = preregisterVm._self._c;
          return preregisterVm.showPreRegister && preregisterVm.recruitBtnImg
            ? preregisterH(
                "div",
                {
                  class: ["m-preregister-container", preregisterVm.isExpand && "expand"],
                },
                [
                  preregisterH(
                    "client-only",
                    [
                      preregisterH(
                        "transition",
                        {
                          attrs: {
                            name: "fadeIn",
                          },
                        },
                        [
                          preregisterH(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: preregisterVm.isExpand,
                                  expression: "isExpand",
                                },
                              ],
                              staticClass: "m-preregister-content",
                            },
                            [
                              preregisterVm.cloudDownloadBtnVisible
                                ? preregisterH(
                                    "div",
                                    {
                                      staticClass: "download-btn",
                                      class: {
                                        "download-btn__half": preregisterVm.cloudDownloadBtnVisible,
                                      },
                                      on: {
                                        click: preregisterVm.handleCloudDownload,
                                      },
                                    },
                                    [
                                      preregisterH("span", [
                                        preregisterVm._v(
                                          preregisterVm._s(preregisterVm.$getI18nWord("m_cloud_download")),
                                        ),
                                      ]),
                                    ],
                                  )
                                : preregisterVm._e(),
                              preregisterVm._v(" "),
                              preregisterH(
                                "div",
                                {
                                  staticClass: "download-btn",
                                  class: {
                                    "download-btn__half": preregisterVm.cloudDownloadBtnVisible,
                                  },
                                  on: {
                                    click: preregisterVm.handleDownload,
                                  },
                                },
                                [
                                  preregisterH("span", [
                                    preregisterVm._v(
                                      preregisterVm._s(preregisterVm.$getI18nWord("download_label")),
                                    ),
                                  ]),
                                ],
                              ),
                            ],
                          ),
                        ],
                      ),
                    ],
                    1,
                  ),
                  preregisterVm._v(" "),
                  preregisterH("div", {
                    staticClass: "preregister-arrow",
                    on: {
                      click: preregisterVm.toggleExpand,
                    },
                  }),
                ],
                1,
              )
            : preregisterVm._e();
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports),
    loadingScreenComponent = webpackRequire(250),
    siteConstants = webpackRequire(49);
  function ownKeys2(object, enumerableOnly2) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols2 = Object.getOwnPropertySymbols(object);
      (enumerableOnly2 &&
        (symbols2 = symbols2.filter(function (symbol2) {
          return Object.getOwnPropertyDescriptor(object, symbol2).enumerable;
        })),
        keys2.push.apply(keys2, symbols2));
    }
    return keys2;
  }
  function objectSpread2(target2) {
    for (var argIndex2 = 1; argIndex2 < arguments.length; argIndex2++) {
      var source = null != arguments[argIndex2] ? arguments[argIndex2] : {};
      argIndex2 % 2
        ? ownKeys2(Object(source), !0).forEach(function (key2) {
            Object(definePropertyHelper.a)(target2, key2, source[key2]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source))
          : ownKeys2(Object(source)).forEach(function (descriptorKey2) {
              Object.defineProperty(
                target2,
                descriptorKey2,
                Object.getOwnPropertyDescriptor(source, descriptorKey2),
              );
            });
    }
    return target2;
  }
  var mIndexPageOptions = {
      name: "m-index",
      layout: "m/default",
      components: {
        kv: HomeKv,
        videoSection: HomeVideo,
        newsSlider: HomeNews,
        charaSection: HomeCharacter,
        featureSection: HomeFeature,
        worldSection: HomeWorld,
        loading: loadingScreenComponent.a,
        mPreregister: MPreregister,
      },
      data: function () {
        return {
          scrollTop: 0,
          eleHeight: 0,
          windowHeight: 0,
        };
      },
      computed: {
        isLoading: {
          get: function () {
            return this.$store.state.isLoading;
          },
          set: function (loadingValue) {
            this.$store.commit("setLoading", loadingValue);
          },
        },
        fixedPos: function () {
          return this.scrollTop + this.windowHeight > this.eleHeight ? "absolute" : "fixed";
        },
      },
      asyncData: function (nuxtContext) {
        return Object(vendorBundle2.a)(
          regeneratorRuntime.mark(function asyncDataGenerator() {
            var store,
              responses,
              responseList,
              kvResRaw,
              kvRes,
              sliderNewsRaw,
              sliderNewsRes,
              characterResRaw,
              characterRes,
              featureResRaw,
              featureRes,
              worldResRaw,
              worldRes,
              videoResRaw,
              videoRes,
              videoCatesRaw,
              videoCatesRes,
              parsedVideoCates,
              videoChildCates,
              homeNewsList,
              newsRes;
            return regeneratorRuntime.wrap(function (context) {
              for (;;)
                switch ((context.prev = context.next)) {
                  case 0:
                    return (
                      (store = nuxtContext.store),
                      (context.next = 3),
                      Promise.all([
                        homeContentApi.a.getKV({
                          data: {
                            sLangKey: store.state.lang,
                          },
                        }),
                        newsCMSAPI.a.getSliderNews({
                          data: {
                            sLangKey: store.state.lang,
                          },
                        }),
                        characterAndCampCMSAPI.a.getAllCharacter({
                          data: {
                            sLangKey: store.state.lang,
                          },
                        }),
                        homeContentApi.a.getFeature({
                          data: {
                            sLangKey: store.state.lang,
                          },
                        }),
                        worldCMSAPI.a.getWorldList({
                          data: {
                            sLangKey: store.state.lang,
                          },
                        }),
                        videoCMSAPI.a.getHomeVideoList({
                          data: {
                            sLangKey: store.state.lang,
                          },
                        }),
                        videoCMSAPI.a.getCates({
                          data: {
                            sLangKey: store.state.lang,
                          },
                        }),
                      ])
                    );
                  case 3:
                    return (
                      (responses = context.sent),
                      (responseList = Object(vendorBundle.a)(responses, 7)),
                      (kvResRaw = responseList[0]),
                      (kvRes = void 0 === kvResRaw ? {} : kvResRaw),
                      (sliderNewsRaw = responseList[1]),
                      (sliderNewsRes = void 0 === sliderNewsRaw ? {} : sliderNewsRaw),
                      (characterResRaw = responseList[2]),
                      (characterRes = void 0 === characterResRaw ? {} : characterResRaw),
                      (featureResRaw = responseList[3]),
                      (featureRes = void 0 === featureResRaw ? {} : featureResRaw),
                      (worldResRaw = responseList[4]),
                      (worldRes = void 0 === worldResRaw ? {} : worldResRaw),
                      (videoResRaw = responseList[5]),
                      (videoRes = void 0 === videoResRaw ? {} : videoResRaw),
                      (videoCatesRaw = responseList[6]),
                      (videoCatesRes = void 0 === videoCatesRaw ? {} : videoCatesRaw),
                      (parsedVideoCates = videoCMSAPI.a.parseCatesFromRes(videoCatesRes)),
                      (videoChildCates = parsedVideoCates.children),
                      store.commit("setVideoCates", videoChildCates),
                      store.commit("setVideoMainChanName", videoCatesRes.mainChanName || ""),
                      (homeNewsList = sliderNewsRes.list
                        .filter(function (newsEntry) {
                          return !newsEntry.sExt["news-self-path"];
                        })
                        .slice(0, 6)),
                      (newsRes = objectSpread2(
                        objectSpread2({}, sliderNewsRes),
                        {},
                        {
                          list: homeNewsList,
                        },
                      )),
                      context.abrupt("return", {
                        kvRes: kvRes,
                        newsRes: newsRes,
                        characterRes: characterRes,
                        featureRes: featureRes,
                        worldRes: worldRes,
                        videoRes: videoRes,
                      })
                    );
                  case 25:
                  case "end":
                    return context.stop();
                }
            }, asyncDataGenerator);
          }),
        )();
      },
      mounted: function () {
        (this.onResize(),
          this.onScroll(),
          this.registerTrigger(),
          window.addEventListener("resize", this.onResize),
          window.addEventListener("scroll", this.onScroll));
      },
      beforeDestroy: function () {
        (window.removeEventListener("resize", this.onResize),
          window.removeEventListener("scroll", this.onScroll));
      },
      methods: {
        onScroll: function () {
          this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        },
        onResize: function () {
          var homeEleRef,
            rootFontSize = document.documentElement.style.fontSize.replace("px", ""),
            homeHeight =
              (null === (homeEleRef = this.$refs.homeEle) || void 0 === homeEleRef
                ? void 0
                : homeEleRef.clientHeight) || 0,
            viewportHeight = window.innerHeight;
          ((this.eleHeight = homeHeight + 1.1 * rootFontSize), (this.windowHeight = viewportHeight));
        },
        registerTrigger: function () {
          var triggerSelf = this;
          this.$gsap.utils.toArray(".section").forEach(function (section, sectionIndex) {
            triggerSelf.$gsap.timeline({
              scrollTrigger: {
                trigger: section,
                id: "section".concat(sectionIndex),
                onEnter: function (enterTrigger) {
                  enterTrigger.isActive && triggerSelf.$trackEvent("Page", "enter", "", sectionIndex);
                },
                onEnterBack: function (enterBackTrigger) {
                  enterBackTrigger.isActive && triggerSelf.$trackEvent("Page", "enter", "", sectionIndex);
                },
              },
            });
          });
        },
        slideTo: function (sectionKey) {
          var scrollTarget = 0;
          if (sectionKey) {
            var sectionLink = siteConstants.e[sectionKey].link;
            scrollTarget = document.querySelector(".section-".concat(sectionLink));
          }
          this.$gsap.to(window, {
            scrollTo: {
              y: scrollTarget,
              autoKill: !1,
            },
            duration: 1,
          });
        },
      },
    },
    mIndexComponent =
      (webpackRequire(1309),
      Object(componentNormalizer.a)(
        mIndexPageOptions,
        function () {
          var vm = this,
            h = vm._self._c;
          return h(
            "div",
            {
              ref: "homeEle",
              staticClass: "home",
              class: {
                visible: !vm.isLoading,
              },
            },
            [
              h(
                "div",
                {
                  staticClass: "section-wrap",
                },
                [
                  vm._m(0),
                  vm._v(" "),
                  h(
                    "section",
                    {
                      staticClass: "section section-index",
                    },
                    [
                      h("kv", {
                        attrs: {
                          "kv-res": vm.kvRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  vm._v(" "),
                  h(
                    "section",
                    {
                      staticClass: "section section-character",
                    },
                    [
                      vm._m(1),
                      vm._v(" "),
                      vm._m(2),
                      vm._v(" "),
                      h("chara-section", {
                        attrs: {
                          "character-res": vm.characterRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  vm._v(" "),
                  h(
                    "section",
                    {
                      staticClass: "section section-video",
                    },
                    [
                      h("video-section", {
                        attrs: {
                          "video-res": vm.videoRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  vm._v(" "),
                  h(
                    "section",
                    {
                      staticClass: "section section-news",
                    },
                    [
                      h("news-slider", {
                        attrs: {
                          "news-res": vm.newsRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  vm._v(" "),
                  h(
                    "section",
                    {
                      staticClass: "section section-world",
                    },
                    [
                      h("world-section", {
                        attrs: {
                          "world-res": vm.worldRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  vm._v(" "),
                  h(
                    "section",
                    {
                      staticClass: "section section-feature",
                    },
                    [
                      vm._m(3),
                      vm._v(" "),
                      vm._m(4),
                      vm._v(" "),
                      h("feature-section", {
                        attrs: {
                          "feature-res": vm.featureRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  vm._v(" "),
                  h("m-preregister", {
                    style: {
                      position: vm.fixedPos,
                    },
                  }),
                ],
                1,
              ),
            ],
          );
        },
        homeStaticRenderFns,
        !1,
        null,
        null,
        null,
      ));
  webpackExports.default = mIndexComponent.exports;
};
