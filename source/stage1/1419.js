// page:m-lang-main — module 1419 from a9873dc
// module 1419 from a9873dc.js
// deps: 1262, 1191, 1192, 1263, 1264, 85, 84, 105, 106, 56, 71, 32, 98, 136, 77, 137, 155, 67, 138, 208, 1164, 1124, 1154, 1152, 1153, 1195, 1157, 1279, 36, 1278, 1149, 1286, 1283, 1284, 1285, 65, 1120, 556, 1292, 1291, 204, 119, 118, 1296, 1295, 1298, 1303, 1202, 171, 28, 24, 1306, 250, 49, 1309
const module_1419 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var o_1 = [
      function () {
        var e_31 = this._self._c;
        return e_31(
          "div",
          {
            staticClass: "fill fill-bg",
          },
          [
            e_31("img", {
              attrs: {
                src: webpackRequire(1262),
                alt: "",
              },
            }),
          ],
        );
      },
      function () {
        var e_32 = this._self._c;
        return e_32(
          "div",
          {
            staticClass: "fill fill-black-right",
          },
          [
            e_32("img", {
              staticClass: "fill-black-bar",
              attrs: {
                src: webpackRequire(1191),
                alt: "",
              },
            }),
            this._v(" "),
            e_32("img", {
              attrs: {
                src: webpackRequire(1192),
                alt: "",
              },
            }),
          ],
        );
      },
      function () {
        var e_33 = this._self._c;
        return e_33(
          "div",
          {
            staticClass: "fill fill-black",
          },
          [
            e_33("img", {
              attrs: {
                src: webpackRequire(1263),
                alt: "",
              },
            }),
          ],
        );
      },
      function () {
        var e_34 = this._self._c;
        return e_34(
          "div",
          {
            staticClass: "fill fill-black-right",
          },
          [
            e_34("img", {
              staticClass: "fill-black-bar",
              attrs: {
                src: webpackRequire(1191),
                alt: "",
              },
            }),
            this._v(" "),
            e_34("img", {
              attrs: {
                src: webpackRequire(1192),
                alt: "",
              },
            }),
          ],
        );
      },
      function () {
        var e_35 = this._self._c;
        return e_35(
          "div",
          {
            staticClass: "fill fill-black",
          },
          [
            e_35("img", {
              attrs: {
                src: webpackRequire(1264),
                alt: "",
              },
            }),
          ],
        );
      },
    ],
    r_2 =
      (webpackRequire(85), webpackRequire(84), webpackRequire(105), webpackRequire(106), webpackRequire(56)),
    vendorBundle = webpackRequire(71),
    vendorBundle2 = webpackRequire(32),
    m_3 =
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
    I_4 = [
      function () {
        var e_36 = this._self._c;
        return e_36(
          "div",
          {
            staticClass: "m-home-kv__slogan",
          },
          [
            e_36("img", {
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
    v_5 = {
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
          var e_37 = this,
            t_38 = Date.now();
          (this.$store.commit("muteBgm", !0),
            this.$openDialog(videoDialogComponent.a, {
              transitionType: "scale",
              zIndex: 100,
              maskClose: !0,
              closeCb: function () {
                (e_37.$store.commit("muteBgm", !1),
                  e_37.$trackButton("AppointPage_PV_stop", Math.round((Date.now() - t_38) / 1e3)));
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
    f_6 = (webpackRequire(1279), webpackRequire(36)),
    Q_7 = Object(f_6.a)(
      v_5,
      function () {
        var e_39 = this,
          t_40 = e_39._self._c;
        return t_40(
          "div",
          {
            staticClass: "m-home-kv",
          },
          [
            t_40(
              "div",
              {
                staticClass: "m-home-kv-wrap",
              },
              [
                t_40(
                  "div",
                  {
                    staticClass: "m-home-kv__bg",
                  },
                  [
                    t_40("img", {
                      attrs: {
                        src: e_39.kvRes.kvMob,
                        alt: "",
                      },
                    }),
                  ],
                ),
                e_39._v(" "),
                e_39._m(0),
                e_39._v(" "),
                t_40(
                  "div",
                  {
                    staticClass: "m-home-kv__aside",
                  },
                  [
                    t_40(
                      "div",
                      {
                        staticClass: "m-home-kv__play",
                        on: {
                          click: function (t_41) {
                            return e_39.playPV();
                          },
                        },
                      },
                      [
                        t_40("img", {
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
      I_4,
      !1,
      null,
      null,
      null,
    ).exports,
    pageTabComponent = webpackRequire(1149),
    E_8 = {
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
          var e_42 = this.currentVideo.sChanId && this.currentVideo.sChanId[0];
          return videoCMSAPI.a.getCateDisplayName(
            e_42,
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
        videoList: function (e_43) {
          this.activeIndex > e_43.length - 1 && (this.activeIndex = 0);
        },
      },
      methods: {
        handleSlideChange: function () {
          var e_44 = this.$refs.mainSwiper && this.$refs.mainSwiper.swiper;
          e_44 && (this.activeIndex = e_44.activeIndex);
        },
        handleMoreClick: function () {
          this.$trackButton("video_more", "");
        },
        handlePrev: function () {
          if (this.canSlidePrev) {
            var e_45 = this.$refs.mainSwiper && this.$refs.mainSwiper.swiper;
            e_45 && (e_45.slidePrev(), this.$trackButton("next_video", ""));
          }
        },
        handleNext: function () {
          if (this.canSlideNext) {
            var e_46 = this.$refs.mainSwiper && this.$refs.mainSwiper.swiper;
            e_46 && (e_46.slideNext(), this.$trackButton("next_video", ""));
          }
        },
        openPlayer: function (video) {
          var e_47 = this,
            t_48 = this.getVideoDialogInfo(video);
          t_48 &&
            (this.$store.commit("muteBgm", !0),
            this.$openDialog(videoDialogComponent.a, {
              transitionType: "scale",
              zIndex: 100,
              maskClose: !0,
              bgOpacity: 0.8,
              closeCb: function () {
                e_47.$store.commit("muteBgm", !1);
              },
              dialogInfo: t_48,
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
    U_9 =
      (webpackRequire(1286),
      Object(f_6.a)(
        E_8,
        function () {
          var e_49 = this,
            t_50 = e_49._self._c;
          return t_50(
            "div",
            {
              staticClass: "m-home-video",
            },
            [
              t_50("pageTab", {
                attrs: {
                  "nav-num": 3,
                  size: "lg",
                  direction: "right",
                },
              }),
              e_49._v(" "),
              t_50(
                "div",
                {
                  staticClass: "m-home-video__banner",
                },
                [
                  t_50(
                    "client-only",
                    [
                      e_49.videoList.length
                        ? t_50(
                            "swiper",
                            {
                              ref: "mainSwiper",
                              staticClass: "m-home-video__banner-list",
                              attrs: {
                                options: e_49.swiperOption,
                              },
                              on: {
                                slideChange: e_49.handleSlideChange,
                              },
                            },
                            e_49._l(e_49.videoList, function (video) {
                              return t_50(
                                "swiper-slide",
                                {
                                  key: video.id,
                                  staticClass: "m-home-video__banner-item",
                                  nativeOn: {
                                    click: function (t_51) {
                                      return e_49.openPlayer(video);
                                    },
                                  },
                                },
                                [
                                  t_50("img", {
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
                        : e_49._e(),
                    ],
                    1,
                  ),
                  e_49._v(" "),
                  t_50(
                    "div",
                    {
                      staticClass: "m-home-video__action",
                    },
                    [
                      t_50("img", {
                        staticClass: "m-home-video__play",
                        attrs: {
                          src: webpackRequire(1283),
                          alt: "",
                        },
                        on: {
                          click: function (t_52) {
                            return (t_52.stopPropagation(), e_49.openPlayer(e_49.currentVideo));
                          },
                        },
                      }),
                      e_49._v(" "),
                      t_50(
                        "nuxt-link",
                        {
                          staticClass: "more",
                          attrs: {
                            to: {
                              name: "m-lang-video",
                              query: e_49.$route.query,
                            },
                          },
                          nativeOn: {
                            click: function (t_53) {
                              return e_49.handleMoreClick.apply(null, arguments);
                            },
                          },
                        },
                        [
                          t_50(
                            "div",
                            {
                              staticClass: "m-more-btn",
                            },
                            [e_49._v(e_49._s(e_49.$getI18nWord("learnMore")))],
                          ),
                        ],
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              e_49._v(" "),
              e_49.videoList.length > 1
                ? t_50(
                    "div",
                    {
                      staticClass: "swiper-navigation",
                    },
                    [
                      t_50("div", {
                        staticClass: "swiper-button-prev",
                        class: {
                          "swiper-button-disabled": !e_49.canSlidePrev,
                        },
                        on: {
                          click: e_49.handlePrev,
                        },
                      }),
                      e_49._v(" "),
                      t_50("div", {
                        staticClass: "swiper-button-next",
                        class: {
                          "swiper-button-disabled": !e_49.canSlideNext,
                        },
                        on: {
                          click: e_49.handleNext,
                        },
                      }),
                    ],
                  )
                : e_49._e(),
              e_49._v(" "),
              t_50(
                "div",
                {
                  staticClass: "m-home-video__summary",
                  on: {
                    click: function (t_54) {
                      return e_49.openPlayer(e_49.currentVideo);
                    },
                  },
                },
                [
                  e_49.currentVideoCateName
                    ? t_50(
                        "div",
                        {
                          staticClass: "m-home-video__summary-category",
                        },
                        [e_49._v("\n      " + e_49._s(e_49.currentVideoCateName) + "\n    ")],
                      )
                    : e_49._e(),
                  e_49._v(" "),
                  t_50(
                    "div",
                    {
                      staticClass: "m-home-video__summary-title",
                    },
                    [e_49._v("\n      " + e_49._s(e_49.currentVideo.title) + "\n    ")],
                  ),
                ],
              ),
              e_49._v(" "),
              t_50("img", {
                staticClass: "m-home-video__bottom-film-bg",
                attrs: {
                  src: webpackRequire(1284),
                  alt: "video-bottom-film-bg",
                },
              }),
              e_49._v(" "),
              t_50("img", {
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
    F_10 = U_9.exports;
  (webpackRequire(65), webpackRequire(1120), webpackRequire(556));
  function K_11(object, e_55) {
    var t_56 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var A_57 = Object.getOwnPropertySymbols(object);
      (e_55 &&
        (A_57 = A_57.filter(function (e_58) {
          return Object.getOwnPropertyDescriptor(object, e_58).enumerable;
        })),
        t_56.push.apply(t_56, A_57));
    }
    return t_56;
  }
  function R_12(e_59) {
    for (var i_60 = 1; i_60 < arguments.length; i_60++) {
      var source = null != arguments[i_60] ? arguments[i_60] : {};
      i_60 % 2
        ? K_11(Object(source), !0).forEach(function (t_61) {
            Object(r_2.a)(e_59, t_61, source[t_61]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e_59, Object.getOwnPropertyDescriptors(source))
          : K_11(Object(source)).forEach(function (t_62) {
              Object.defineProperty(e_59, t_62, Object.getOwnPropertyDescriptor(source, t_62));
            });
    }
    return e_59;
  }
  var k_13 = {
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
        var e_63 = Object(vendorBundle.a)(this.charaList, 1);
        ((this.characterInfo = e_63[0]),
          (this.characterCamps && this.characterCamps.length) || this.getCharacterCamps());
      },
      methods: {
        getCharacterCamps: function () {
          var e_64 = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function t_65() {
              var A_66;
              return regeneratorRuntime.wrap(function (t_67) {
                for (;;)
                  switch ((t_67.prev = t_67.next)) {
                    case 0:
                      return (
                        (t_67.next = 2),
                        characterAndCampCMSAPI.a.getCampList({
                          data: {
                            sLangKey: e_64.$store.state.lang,
                          },
                        })
                      );
                    case 2:
                      ((A_66 = t_67.sent), e_64.$store.commit("setCharacterCamps", A_66));
                    case 4:
                    case "end":
                      return t_67.stop();
                  }
              }, t_65);
            }),
          )();
        },
        campInfo: function (e_68) {
          return this.characterCamps.find(function (t_69) {
            return Number(t_69.channelId) === Number(e_68);
          });
        },
        toggleRole: function (e_70) {
          var t_71 = this;
          ((this.activeIndex = e_70),
            (this.characterInfo = this.charaList[e_70]),
            this.$refs.characterSwiper.swiper.slideTo(e_70),
            (this.showTitle = !1),
            this.$nextTick(function () {
              t_71.showTitle = !0;
            }));
        },
        handleCharaNavClick: function (e_72, t_73) {
          (this.toggleRole(e_72), this.$trackButton("character_icon", "".concat(t_73.iInfoId)));
        },
        handlePrev: function () {
          var e_74 = this.$refs.pageSwiper.swiper.activeIndex - 3;
          ((this.canSlidePrev = e_74 - 3 >= 0),
            (this.canSlideNext = e_74 + 3 <= this.charaList.length - 1),
            this.$refs.pageSwiper.swiper.slideTo(e_74),
            this.$trackButton("next_character", ""));
        },
        handleNext: function () {
          var e_75 = this.$refs.pageSwiper.swiper.activeIndex + 3;
          ((this.canSlidePrev = e_75 - 3 >= 0),
            (this.canSlideNext = e_75 + 3 <= this.charaList.length - 1),
            this.$refs.pageSwiper.swiper.slideTo(e_75),
            this.$trackButton("next_character", ""));
        },
        handleMoreClick: function () {
          (this.$trackButton("character_more", ""),
            this.$router.push({
              name: "m-lang-character",
              query: R_12(
                R_12({}, this.$route.query),
                {},
                {
                  id: this.characterInfo.iInfoId,
                },
              ),
            }));
        },
      },
    },
    V_14 =
      (webpackRequire(1292),
      Object(f_6.a)(
        k_13,
        function () {
          var e_76 = this,
            t_77 = e_76._self._c;
          return t_77(
            "div",
            {
              staticClass: "m-home-character",
            },
            [
              t_77("pageTab", {
                staticClass: "character-page-tab__m",
                attrs: {
                  "nav-num": 2,
                  size: "lg",
                },
              }),
              e_76._v(" "),
              e_76.characterInfo
                ? t_77(
                    "div",
                    {
                      staticClass: "m-home-character__anim",
                    },
                    [
                      t_77(
                        "transition",
                        {
                          attrs: {
                            name: "namefade",
                          },
                        },
                        [
                          e_76.showTitle
                            ? t_77("div", [e_76._v(e_76._s(e_76.characterInfo.nameEN))])
                            : e_76._e(),
                        ],
                      ),
                    ],
                    1,
                  )
                : e_76._e(),
              e_76._v(" "),
              t_77(
                "div",
                {
                  staticClass: "m-home-character__main",
                },
                [
                  t_77("div", {
                    staticClass: "m-home-character__main-panel",
                  }),
                  e_76._v(" "),
                  t_77(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e_76.charaList.length > 1,
                          expression: "charaList.length > 1",
                        },
                      ],
                      staticClass: "m-home-character__main-nav",
                    },
                    [
                      t_77(
                        "client-only",
                        [
                          t_77(
                            "swiper",
                            {
                              ref: "pageSwiper",
                              staticClass: "m-home-character__nav",
                              attrs: {
                                options: e_76.thumbOption,
                              },
                            },
                            e_76._l(e_76.charaList, function (A_78, o_79) {
                              return t_77(
                                "swiper-slide",
                                {
                                  key: o_79,
                                  staticClass: "m-home-character__nav-item swiper-no-swiping",
                                  class: {
                                    "swiper-slide-active": e_76.activeIndex === o_79,
                                    "swiper-slide-thumb-active": e_76.activeIndex === o_79,
                                  },
                                  nativeOn: {
                                    click: function (t_80) {
                                      return e_76.handleCharaNavClick(o_79, A_78);
                                    },
                                  },
                                },
                                [
                                  t_77("img", {
                                    attrs: {
                                      src: A_78.nav,
                                      alt: "",
                                    },
                                  }),
                                  e_76._v(" "),
                                  t_77("div", {
                                    staticClass: "m-home-character__nav-mask",
                                  }),
                                ],
                              );
                            }),
                            1,
                          ),
                          e_76._v(" "),
                          t_77(
                            "div",
                            {
                              staticClass: "swiper-navigation",
                            },
                            [
                              t_77("div", {
                                staticClass: "swiper-button-prev cha-swiper-button-prev",
                                class: {
                                  "swiper-button-disabled": !e_76.canSlidePrev,
                                },
                                attrs: {
                                  slot: "button-prev",
                                },
                                on: {
                                  click: e_76.handlePrev,
                                },
                                slot: "button-prev",
                              }),
                              e_76._v(" "),
                              t_77("div", {
                                staticClass: "swiper-button-next cha-swiper-button-next",
                                class: {
                                  "swiper-button-disabled": !e_76.canSlideNext,
                                },
                                attrs: {
                                  slot: "button-next",
                                },
                                on: {
                                  click: e_76.handleNext,
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
                  e_76._v(" "),
                  t_77(
                    "div",
                    {
                      staticClass: "m-home-character__main-swiper",
                    },
                    [
                      e_76.charaList.length
                        ? t_77(
                            "swiper",
                            {
                              ref: "characterSwiper",
                              staticClass: "m-home-character__list",
                              attrs: {
                                options: e_76.swiperOption,
                              },
                            },
                            e_76._l(e_76.charaList, function (A_81) {
                              return t_77(
                                "swiper-slide",
                                {
                                  key: A_81.id,
                                  staticClass: "m-home-character__list-item swiper-no-swiping",
                                },
                                [
                                  t_77(
                                    "div",
                                    {
                                      staticClass: "m-home-character__role",
                                    },
                                    [
                                      t_77("img", {
                                        attrs: {
                                          src: A_81.coverM,
                                          alt: "",
                                        },
                                      }),
                                    ],
                                  ),
                                  e_76._v(" "),
                                  t_77(
                                    "div",
                                    {
                                      staticClass: "m-home-character__shade",
                                    },
                                    [
                                      e_76.campInfo(A_81.sChanId[0])
                                        ? t_77("img", {
                                            attrs: {
                                              src: e_76.campInfo(A_81.sChanId[0]).shade,
                                              alt: "",
                                            },
                                          })
                                        : e_76._e(),
                                    ],
                                  ),
                                  e_76._v(" "),
                                  t_77(
                                    "div",
                                    {
                                      staticClass: "m-home-character__info",
                                    },
                                    [
                                      e_76.campInfo(A_81.sChanId[0])
                                        ? t_77("div", {
                                            staticClass: "m-home-character__camp",
                                            domProps: {
                                              innerHTML: e_76._s(e_76.campInfo(A_81.sChanId[0]).name),
                                            },
                                          })
                                        : e_76._e(),
                                      e_76._v(" "),
                                      t_77("div", {
                                        staticClass: "m-home-character__name",
                                        domProps: {
                                          innerHTML: e_76._s(A_81.nameHomeM || A_81.nameHome || A_81.name),
                                        },
                                      }),
                                    ],
                                  ),
                                ],
                              );
                            }),
                            1,
                          )
                        : t_77(
                            "div",
                            {
                              staticClass: "m-home-character__list-empty",
                            },
                            [
                              t_77("img", {
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
              e_76._v(" "),
              e_76.charaList.length
                ? t_77(
                    "div",
                    {
                      staticClass: "m-more-btn",
                      on: {
                        click: e_76.handleMoreClick,
                      },
                    },
                    [e_76._v(e_76._s(e_76.$getI18nWord("learnMore")))],
                  )
                : e_76._e(),
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
    x_15 =
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
                renderBullet: function (e_82, t_83) {
                  return '<span class="'
                    .concat(t_83, " swiper-pagination-index-")
                    .concat(e_82 + 1, '"></span>');
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
          var e_84 = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function t_85() {
              var A_86;
              return regeneratorRuntime.wrap(function (t_87) {
                for (;;)
                  switch ((t_87.prev = t_87.next)) {
                    case 0:
                      ((A_86 = Object(vendorBundle.a)(e_84.newsList, 1)),
                        (e_84.activeNews = A_86[0]),
                        (e_84.isWordsLoop = !0));
                    case 3:
                    case "end":
                      return t_87.stop();
                  }
              }, t_85);
            }),
          )();
        },
        methods: {
          handleTransitionStart: function () {
            var e_88 = this.$refs.mySwiper.swiper.realIndex;
            this.activeIndex !== e_88 && (this.isWordsLoop = !1);
          },
          handleTransitionEnd: function () {
            var e_89 = this.$refs.mySwiper.swiper.realIndex;
            this.activeIndex !== e_89 &&
              ((this.activeIndex = e_89), (this.activeNews = this.newsList[e_89]), (this.isWordsLoop = !0));
          },
          handlePaginationClick: function (e_90) {
            var t_91 = e_90.target || e_90.srcElement;
            if (t_91.className.indexOf("swiper-pagination-index") > -1) {
              var A_92 = t_91.className
                .split(" ")
                .find(function (e_93) {
                  return e_93.includes("swiper-pagination-index-");
                })
                .split("-")
                .pop();
              this.$trackButton("news_point", "".concat(A_92));
            }
          },
          handlePicClick: function (e_94) {
            this.$trackButton("news_pics", "".concat(e_94.iInfoId));
          },
          handleMoreClick: function () {
            this.$trackButton("news_more", "");
          },
        },
      }),
    N_16 = x_15,
    S_17 =
      (webpackRequire(1296),
      Object(f_6.a)(
        N_16,
        function () {
          var e_95 = this,
            t_96 = e_95._self._c;
          return t_96(
            "div",
            {
              staticClass: "m-home-news",
            },
            [
              t_96("pageTab", {
                attrs: {
                  "nav-num": 4,
                  size: "lg",
                },
              }),
              e_95._v(" "),
              t_96("img", {
                staticClass: "m-home-news__bg",
                attrs: {
                  src: webpackRequire(1295),
                  alt: "news-bg-m",
                },
              }),
              e_95._v(" "),
              t_96(
                "div",
                {
                  staticClass: "m-home-news__banner",
                },
                [
                  t_96(
                    "client-only",
                    [
                      e_95.newsList && e_95.newsList.length
                        ? t_96(
                            "swiper",
                            {
                              ref: "mySwiper",
                              staticClass: "m-home-news__banner-list",
                              attrs: {
                                options: e_95.swiperOption,
                              },
                              on: {
                                transitionStart: e_95.handleTransitionStart,
                                transitionEnd: e_95.handleTransitionEnd,
                              },
                            },
                            e_95._l(e_95.newsList, function (A_97) {
                              return t_96(
                                "swiper-slide",
                                {
                                  key: A_97.id,
                                  staticClass: "m-home-news__banner-item",
                                },
                                [
                                  t_96(
                                    "nuxt-link",
                                    {
                                      staticClass: "m-home-news__banner-img",
                                      attrs: {
                                        to: {
                                          name: "m-lang-news-id",
                                          params: {
                                            id: A_97.iInfoId,
                                          },
                                        },
                                      },
                                      nativeOn: {
                                        click: function (t_98) {
                                          return e_95.handlePicClick(A_97);
                                        },
                                      },
                                    },
                                    [
                                      t_96("img", {
                                        attrs: {
                                          src: A_97.banner,
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
                        : e_95._e(),
                    ],
                    1,
                  ),
                  e_95._v(" "),
                  t_96(
                    "transition",
                    {
                      attrs: {
                        name: "slide-bottom",
                      },
                    },
                    [
                      e_95.activeNews && e_95.activeNews.summary
                        ? t_96(
                            "div",
                            {
                              staticClass: "m-home-news__summary",
                            },
                            [
                              t_96(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: e_95.isWordsLoop,
                                      expression: "isWordsLoop",
                                    },
                                  ],
                                  staticClass: "m-home-news__summary-scroll",
                                },
                                [e_95._v(e_95._s(e_95.activeNews.summary))],
                              ),
                            ],
                          )
                        : e_95._e(),
                    ],
                  ),
                ],
                1,
              ),
              e_95._v(" "),
              t_96(
                "nuxt-link",
                {
                  staticClass: "more",
                  attrs: {
                    to: {
                      name: "m-lang-news",
                    },
                  },
                  nativeOn: {
                    click: function (t_99) {
                      return e_95.handleMoreClick.apply(null, arguments);
                    },
                  },
                },
                [
                  t_96(
                    "div",
                    {
                      staticClass: "m-more-btn",
                    },
                    [e_95._v(e_95._s(e_95.$getI18nWord("learnMore")))],
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
    M_18 = S_17.exports,
    L_19 = {
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
        var e_100 = this;
        return Object(vendorBundle2.a)(
          regeneratorRuntime.mark(function t_101() {
            var A_102;
            return regeneratorRuntime.wrap(function (t_103) {
              for (;;)
                switch ((t_103.prev = t_103.next)) {
                  case 0:
                    ((A_102 = Object(vendorBundle.a)(e_100.featureList, 1)),
                      (e_100.activeFeature = A_102[0]));
                  case 2:
                  case "end":
                    return t_103.stop();
                }
            }, t_101);
          }),
        )();
      },
      methods: {
        handleSlideChange: function () {
          var e_104 = this.$refs.homeFeatureSwiper.swiper.realIndex;
          ((this.activeFeature = this.featureList[e_104]),
            this.$trackButton("features_pics", "".concat(this.activeFeature.iInfoId)));
        },
        handleNavigatorUpload: function () {
          this.$trackButton("features_next", "");
        },
      },
    },
    O_20 =
      (webpackRequire(1298),
      Object(f_6.a)(
        L_19,
        function () {
          var e_105 = this,
            t_106 = e_105._self._c;
          return t_106(
            "div",
            {
              staticClass: "m-home-feature",
            },
            [
              t_106("pageTab", {
                attrs: {
                  "nav-num": 6,
                  size: "lg",
                },
              }),
              e_105._v(" "),
              t_106(
                "div",
                {
                  staticClass: "m-home-feature__swiper",
                },
                [
                  t_106(
                    "client-only",
                    [
                      t_106(
                        "swiper",
                        {
                          ref: "homeFeatureSwiper",
                          staticClass: "m-home-feature__list",
                          attrs: {
                            options: e_105.swiperOption,
                          },
                          on: {
                            slideChange: e_105.handleSlideChange,
                          },
                        },
                        e_105._l(e_105.featureList, function (e_107) {
                          return t_106(
                            "swiper-slide",
                            {
                              key: e_107.id,
                              staticClass: "m-home-feature__list-item",
                            },
                            [
                              t_106(
                                "div",
                                {
                                  staticClass: "m-home-feature__banner",
                                },
                                [
                                  t_106("img", {
                                    attrs: {
                                      src: e_107.bannerM,
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
                  e_105._v(" "),
                  e_105.activeFeature
                    ? t_106(
                        "div",
                        {
                          staticClass: "m-home-feature__info",
                        },
                        [
                          t_106("div", {
                            staticClass: "m-home-feature__info-bar",
                          }),
                          e_105._v(" "),
                          t_106("div", {
                            staticClass: "m-home-feature__info-title ellipsis",
                            domProps: {
                              innerHTML: e_105._s(e_105.activeFeature.title),
                            },
                          }),
                          e_105._v(" "),
                          t_106("div", {
                            staticClass: "m-home-feature__info-summary ellipsis",
                            domProps: {
                              innerHTML: e_105._s(e_105.activeFeature.summary),
                            },
                          }),
                        ],
                      )
                    : e_105._e(),
                ],
                1,
              ),
              e_105._v(" "),
              t_106(
                "div",
                {
                  staticClass: "m-home-feature__navigator",
                },
                [
                  t_106("div", {
                    staticClass: "swiper-button-prev feat-swiper-button-prev",
                    attrs: {
                      slot: "button-prev",
                    },
                    on: {
                      click: e_105.handleNavigatorUpload,
                    },
                    slot: "button-prev",
                  }),
                  e_105._v(" "),
                  t_106("div", {
                    staticClass: "swiper-button-next feat-swiper-button-next",
                    attrs: {
                      slot: "button-next",
                    },
                    on: {
                      click: e_105.handleNavigatorUpload,
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
    y_21 = {
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
        handlePicClick: function (e_108) {
          this.$trackButton("file_pics", "".concat(e_108.iInfoId));
        },
        handleNavigatorUpload: function () {
          this.$trackButton("file_next", "");
        },
      },
    },
    D_22 = y_21,
    Y_23 =
      (webpackRequire(1303),
      Object(f_6.a)(
        D_22,
        function () {
          var e_109 = this,
            t_110 = e_109._self._c;
          return t_110(
            "div",
            {
              staticClass: "m-home-world",
            },
            [
              t_110("pageTab", {
                attrs: {
                  "nav-num": 5,
                  size: "lg",
                },
              }),
              e_109._v(" "),
              t_110(
                "div",
                {
                  staticClass: "m-home-world__banner",
                },
                [
                  t_110(
                    "client-only",
                    [
                      e_109.worldList && e_109.worldList.length
                        ? t_110(
                            "swiper",
                            {
                              ref: "homeWorldSwiper",
                              staticClass: "m-home-world__banner-list",
                              class: {
                                "swiper-no-swiping": e_109.worldList.length <= 1,
                              },
                              attrs: {
                                options: e_109.swiperOption,
                              },
                            },
                            [
                              e_109._l(e_109.worldList, function (A_111) {
                                return t_110(
                                  "swiper-slide",
                                  {
                                    key: A_111.id,
                                    staticClass: "m-home-world__banner-item",
                                  },
                                  [
                                    t_110(
                                      "nuxt-link",
                                      {
                                        staticClass: "m-home-world__banner-img",
                                        attrs: {
                                          to: {
                                            name: "m-lang-world",
                                            params: {
                                              worldId: A_111.iInfoId,
                                            },
                                          },
                                        },
                                        nativeOn: {
                                          click: function (t_112) {
                                            return e_109.handlePicClick(A_111);
                                          },
                                        },
                                      },
                                      [
                                        t_110("img", {
                                          attrs: {
                                            src: A_111.homeBanner,
                                            alt: "world-banner",
                                          },
                                        }),
                                      ],
                                    ),
                                  ],
                                  1,
                                );
                              }),
                              e_109._v(" "),
                              t_110("div", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: e_109.worldList && e_109.worldList.length > 1,
                                    expression: "worldList && worldList.length > 1",
                                  },
                                ],
                                staticClass: "swiper-button-prev",
                                attrs: {
                                  slot: "button-prev",
                                },
                                on: {
                                  click: e_109.handleNavigatorUpload,
                                },
                                slot: "button-prev",
                              }),
                              e_109._v(" "),
                              t_110("div", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: e_109.worldList && e_109.worldList.length > 1,
                                    expression: "worldList && worldList.length > 1",
                                  },
                                ],
                                staticClass: "swiper-button-next",
                                attrs: {
                                  slot: "button-next",
                                },
                                on: {
                                  click: e_109.handleNavigatorUpload,
                                },
                                slot: "button-next",
                              }),
                            ],
                            2,
                          )
                        : t_110(
                            "div",
                            {
                              staticClass: "m-home-world__banner-empty",
                            },
                            [
                              t_110("img", {
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
              e_109._v(" "),
              t_110("client-only", [
                t_110(
                  "div",
                  {
                    staticClass: "section__concept",
                  },
                  [
                    t_110(
                      "a",
                      {
                        attrs: {
                          href: e_109.conceptUrl,
                          target: "_blank",
                        },
                      },
                      [
                        t_110(
                          "div",
                          {
                            staticClass: "section__concept-title",
                          },
                          [
                            t_110("div", {
                              staticClass: "section__concept-title-label",
                              domProps: {
                                innerHTML: e_109._s(e_109.$getI18nWord("conceptTitle")),
                              },
                            }),
                          ],
                        ),
                        e_109._v(" "),
                        t_110(
                          "div",
                          {
                            staticClass: "section__concept-video",
                            on: {
                              click: e_109.toggleTv,
                            },
                          },
                          [
                            t_110(
                              "div",
                              {
                                staticClass: "section__concept-video-mp4",
                              },
                              [
                                t_110("img", {
                                  attrs: {
                                    src: e_109.$getI18nWord("conceptVideo"),
                                    alt: "",
                                  },
                                }),
                              ],
                            ),
                            e_109._v(" "),
                            t_110("div", {
                              staticClass: "section__concept-video-tv",
                            }),
                            e_109._v(" "),
                            t_110("div", {
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
    W_24 = (webpackRequire(171), webpackRequire(28)),
    X_25 = {
      name: "m-preregister",
      data: function () {
        var e_113 = this.$getI18nWord("cloud_download_link_ios") || "",
          t_114 = this.$getI18nWord("cloud_download_link_android") || "",
          A_115 = e_113.startsWith("https") && t_114.startsWith("https");
        return {
          environment: W_24.environment,
          isExpand: !0,
          scrollPos: 0,
          scrollTimer: null,
          cloudDownloadLinkIos: e_113,
          cloudDownloadLinkAndroid: t_114,
          cloudDownloadBtnVisible: A_115,
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
          var e_116 = document.documentElement.scrollTop - this.scrollPos;
          this.isExpand = this.isExpand && Math.abs(e_116) < 100;
        },
        toLanding: function () {
          (this.$trackEvent("button", "click", "to_landingpage", ""),
            window.open("".concat(W_24.LANDING_URL, "/").concat(this.lang)));
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
    P_26 =
      (webpackRequire(1306),
      Object(f_6.a)(
        X_25,
        function () {
          var e_117 = this,
            t_118 = e_117._self._c;
          return e_117.showPreRegister && e_117.recruitBtnImg
            ? t_118(
                "div",
                {
                  class: ["m-preregister-container", e_117.isExpand && "expand"],
                },
                [
                  t_118(
                    "client-only",
                    [
                      t_118(
                        "transition",
                        {
                          attrs: {
                            name: "fadeIn",
                          },
                        },
                        [
                          t_118(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e_117.isExpand,
                                  expression: "isExpand",
                                },
                              ],
                              staticClass: "m-preregister-content",
                            },
                            [
                              e_117.cloudDownloadBtnVisible
                                ? t_118(
                                    "div",
                                    {
                                      staticClass: "download-btn",
                                      class: {
                                        "download-btn__half": e_117.cloudDownloadBtnVisible,
                                      },
                                      on: {
                                        click: e_117.handleCloudDownload,
                                      },
                                    },
                                    [
                                      t_118("span", [
                                        e_117._v(e_117._s(e_117.$getI18nWord("m_cloud_download"))),
                                      ]),
                                    ],
                                  )
                                : e_117._e(),
                              e_117._v(" "),
                              t_118(
                                "div",
                                {
                                  staticClass: "download-btn",
                                  class: {
                                    "download-btn__half": e_117.cloudDownloadBtnVisible,
                                  },
                                  on: {
                                    click: e_117.handleDownload,
                                  },
                                },
                                [t_118("span", [e_117._v(e_117._s(e_117.$getI18nWord("download_label")))])],
                              ),
                            ],
                          ),
                        ],
                      ),
                    ],
                    1,
                  ),
                  e_117._v(" "),
                  t_118("div", {
                    staticClass: "preregister-arrow",
                    on: {
                      click: e_117.toggleExpand,
                    },
                  }),
                ],
                1,
              )
            : e_117._e();
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports),
    loadingScreenComponent = webpackRequire(250),
    siteConstants = webpackRequire(49);
  function z_27(object, e_119) {
    var t_120 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var A_121 = Object.getOwnPropertySymbols(object);
      (e_119 &&
        (A_121 = A_121.filter(function (e_122) {
          return Object.getOwnPropertyDescriptor(object, e_122).enumerable;
        })),
        t_120.push.apply(t_120, A_121));
    }
    return t_120;
  }
  function J_28(e_123) {
    for (var i_124 = 1; i_124 < arguments.length; i_124++) {
      var source = null != arguments[i_124] ? arguments[i_124] : {};
      i_124 % 2
        ? z_27(Object(source), !0).forEach(function (t_125) {
            Object(r_2.a)(e_123, t_125, source[t_125]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e_123, Object.getOwnPropertyDescriptors(source))
          : z_27(Object(source)).forEach(function (t_126) {
              Object.defineProperty(e_123, t_126, Object.getOwnPropertyDescriptor(source, t_126));
            });
    }
    return e_123;
  }
  var T_29 = {
      name: "m-index",
      layout: "m/default",
      components: {
        kv: Q_7,
        videoSection: F_10,
        newsSlider: M_18,
        charaSection: V_14,
        featureSection: O_20,
        worldSection: Y_23,
        loading: loadingScreenComponent.a,
        mPreregister: P_26,
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
          set: function (e_127) {
            this.$store.commit("setLoading", e_127);
          },
        },
        fixedPos: function () {
          return this.scrollTop + this.windowHeight > this.eleHeight ? "absolute" : "fixed";
        },
      },
      asyncData: function (e_128) {
        return Object(vendorBundle2.a)(
          regeneratorRuntime.mark(function t_129() {
            var A_130,
              o_131,
              r_132,
              c_133,
              I_134,
              B_135,
              v_136,
              f_137,
              Q_138,
              w_139,
              E_140,
              U_141,
              F_142,
              K_143,
              R_144,
              k_145,
              V_146,
              x_147,
              N_148,
              S_149,
              M_150;
            return regeneratorRuntime.wrap(function (t_151) {
              for (;;)
                switch ((t_151.prev = t_151.next)) {
                  case 0:
                    return (
                      (A_130 = e_128.store),
                      (t_151.next = 3),
                      Promise.all([
                        m_3.a.getKV({
                          data: {
                            sLangKey: A_130.state.lang,
                          },
                        }),
                        newsCMSAPI.a.getSliderNews({
                          data: {
                            sLangKey: A_130.state.lang,
                          },
                        }),
                        characterAndCampCMSAPI.a.getAllCharacter({
                          data: {
                            sLangKey: A_130.state.lang,
                          },
                        }),
                        m_3.a.getFeature({
                          data: {
                            sLangKey: A_130.state.lang,
                          },
                        }),
                        worldCMSAPI.a.getWorldList({
                          data: {
                            sLangKey: A_130.state.lang,
                          },
                        }),
                        videoCMSAPI.a.getHomeVideoList({
                          data: {
                            sLangKey: A_130.state.lang,
                          },
                        }),
                        videoCMSAPI.a.getCates({
                          data: {
                            sLangKey: A_130.state.lang,
                          },
                        }),
                      ])
                    );
                  case 3:
                    return (
                      (o_131 = t_151.sent),
                      (r_132 = Object(vendorBundle.a)(o_131, 7)),
                      (c_133 = r_132[0]),
                      (I_134 = void 0 === c_133 ? {} : c_133),
                      (B_135 = r_132[1]),
                      (v_136 = void 0 === B_135 ? {} : B_135),
                      (f_137 = r_132[2]),
                      (Q_138 = void 0 === f_137 ? {} : f_137),
                      (w_139 = r_132[3]),
                      (E_140 = void 0 === w_139 ? {} : w_139),
                      (U_141 = r_132[4]),
                      (F_142 = void 0 === U_141 ? {} : U_141),
                      (K_143 = r_132[5]),
                      (R_144 = void 0 === K_143 ? {} : K_143),
                      (k_145 = r_132[6]),
                      (V_146 = void 0 === k_145 ? {} : k_145),
                      (x_147 = videoCMSAPI.a.parseCatesFromRes(V_146)),
                      (N_148 = x_147.children),
                      A_130.commit("setVideoCates", N_148),
                      A_130.commit("setVideoMainChanName", V_146.mainChanName || ""),
                      (S_149 = v_136.list
                        .filter(function (e_152) {
                          return !e_152.sExt["news-self-path"];
                        })
                        .slice(0, 6)),
                      (M_150 = J_28(
                        J_28({}, v_136),
                        {},
                        {
                          list: S_149,
                        },
                      )),
                      t_151.abrupt("return", {
                        kvRes: I_134,
                        newsRes: M_150,
                        characterRes: Q_138,
                        featureRes: E_140,
                        worldRes: F_142,
                        videoRes: R_144,
                      })
                    );
                  case 25:
                  case "end":
                    return t_151.stop();
                }
            }, t_129);
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
          var e_153,
            t_154 = document.documentElement.style.fontSize.replace("px", ""),
            A_155 =
              (null === (e_153 = this.$refs.homeEle) || void 0 === e_153 ? void 0 : e_153.clientHeight) || 0,
            o_156 = window.innerHeight;
          ((this.eleHeight = A_155 + 1.1 * t_154), (this.windowHeight = o_156));
        },
        registerTrigger: function () {
          var e_157 = this;
          this.$gsap.utils.toArray(".section").forEach(function (section, t_158) {
            e_157.$gsap.timeline({
              scrollTrigger: {
                trigger: section,
                id: "section".concat(t_158),
                onEnter: function (A_159) {
                  A_159.isActive && e_157.$trackEvent("Page", "enter", "", t_158);
                },
                onEnterBack: function (A_160) {
                  A_160.isActive && e_157.$trackEvent("Page", "enter", "", t_158);
                },
              },
            });
          });
        },
        slideTo: function (e_161) {
          var t_162 = 0;
          if (e_161) {
            var A_163 = siteConstants.e[e_161].link;
            t_162 = document.querySelector(".section-".concat(A_163));
          }
          this.$gsap.to(window, {
            scrollTo: {
              y: t_162,
              autoKill: !1,
            },
            duration: 1,
          });
        },
      },
    },
    H_30 =
      (webpackRequire(1309),
      Object(f_6.a)(
        T_29,
        function () {
          var e_164 = this,
            t_165 = e_164._self._c;
          return t_165(
            "div",
            {
              ref: "homeEle",
              staticClass: "home",
              class: {
                visible: !e_164.isLoading,
              },
            },
            [
              t_165(
                "div",
                {
                  staticClass: "section-wrap",
                },
                [
                  e_164._m(0),
                  e_164._v(" "),
                  t_165(
                    "section",
                    {
                      staticClass: "section section-index",
                    },
                    [
                      t_165("kv", {
                        attrs: {
                          "kv-res": e_164.kvRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  e_164._v(" "),
                  t_165(
                    "section",
                    {
                      staticClass: "section section-character",
                    },
                    [
                      e_164._m(1),
                      e_164._v(" "),
                      e_164._m(2),
                      e_164._v(" "),
                      t_165("chara-section", {
                        attrs: {
                          "character-res": e_164.characterRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  e_164._v(" "),
                  t_165(
                    "section",
                    {
                      staticClass: "section section-video",
                    },
                    [
                      t_165("video-section", {
                        attrs: {
                          "video-res": e_164.videoRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  e_164._v(" "),
                  t_165(
                    "section",
                    {
                      staticClass: "section section-news",
                    },
                    [
                      t_165("news-slider", {
                        attrs: {
                          "news-res": e_164.newsRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  e_164._v(" "),
                  t_165(
                    "section",
                    {
                      staticClass: "section section-world",
                    },
                    [
                      t_165("world-section", {
                        attrs: {
                          "world-res": e_164.worldRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  e_164._v(" "),
                  t_165(
                    "section",
                    {
                      staticClass: "section section-feature",
                    },
                    [
                      e_164._m(3),
                      e_164._v(" "),
                      e_164._m(4),
                      e_164._v(" "),
                      t_165("feature-section", {
                        attrs: {
                          "feature-res": e_164.featureRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  e_164._v(" "),
                  t_165("m-preregister", {
                    style: {
                      position: e_164.fixedPos,
                    },
                  }),
                ],
                1,
              ),
            ],
          );
        },
        o_1,
        !1,
        null,
        null,
        null,
      ));
  webpackExports.default = H_30.exports;
};
