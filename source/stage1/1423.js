// page:m-lang-character — module 1423 from 564bae5
// module 1423 from 564bae5.js
// deps: 85, 84, 67, 105, 106, 56, 65, 32, 71, 98, 138, 119, 118, 136, 77, 137, 1143, 156, 1187, 1149, 1154, 354, 1249, 36, 1179
const module_1423 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  (webpackRequire(85), webpackRequire(84), webpackRequire(67), webpackRequire(105), webpackRequire(106));
  var vendorBundle = webpackRequire(56);
  webpackRequire(65);
  function n_1(object, e_8) {
    var t_9 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var r_10 = Object.getOwnPropertySymbols(object);
      (e_8 &&
        (r_10 = r_10.filter(function (e_11) {
          return Object.getOwnPropertyDescriptor(object, e_11).enumerable;
        })),
        t_9.push.apply(t_9, r_10));
    }
    return t_9;
  }
  function o_2(e_12) {
    for (var i_13 = 1; i_13 < arguments.length; i_13++) {
      var source = null != arguments[i_13] ? arguments[i_13] : {};
      i_13 % 2
        ? n_1(Object(source), !0).forEach(function (t_14) {
            Object(vendorBundle.a)(e_12, t_14, source[t_14]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e_12, Object.getOwnPropertyDescriptors(source))
          : n_1(Object(source)).forEach(function (t_15) {
              Object.defineProperty(e_12, t_15, Object.getOwnPropertyDescriptor(source, t_15));
            });
    }
    return e_12;
  }
  var vendorBundle2 = webpackRequire(32),
    vendorBundle3 = webpackRequire(71),
    m_3 =
      (webpackRequire(98),
      webpackRequire(138),
      webpackRequire(119),
      webpackRequire(118),
      webpackRequire(136),
      webpackRequire(77),
      webpackRequire(137),
      webpackRequire(1143),
      webpackRequire(156),
      webpackRequire(1187)),
    defaultOf_m = webpackRequire.n(m_3),
    pageTabComponent = webpackRequire(1149),
    characterAndCampCMSAPI = webpackRequire(1154);
  function A_4(object, e_16) {
    var t_17 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var r_18 = Object.getOwnPropertySymbols(object);
      (e_16 &&
        (r_18 = r_18.filter(function (e_19) {
          return Object.getOwnPropertyDescriptor(object, e_19).enumerable;
        })),
        t_17.push.apply(t_17, r_18));
    }
    return t_17;
  }
  function C_5(e_20) {
    for (var i_21 = 1; i_21 < arguments.length; i_21++) {
      var source = null != arguments[i_21] ? arguments[i_21] : {};
      i_21 % 2
        ? A_4(Object(source), !0).forEach(function (t_22) {
            Object(vendorBundle.a)(e_20, t_22, source[t_22]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e_20, Object.getOwnPropertyDescriptors(source))
          : A_4(Object(source)).forEach(function (t_23) {
              Object.defineProperty(e_20, t_23, Object.getOwnPropertyDescriptor(source, t_23));
            });
    }
    return e_20;
  }
  var w_6 = {
      layout: "m/default",
      name: "m-cha",
      scrollToTop: !0,
      head: function () {
        var e_24 = this.curActiveCha.sTitle,
          t_25 = (this.curActiveCha.word || "").replace(/<br\s*\/?>/gi, " "),
          title = "".concat(e_24).concat(this.$getI18nWord("seoTitlePrefix"));
        return {
          title: title,
          meta: [
            {
              hid: "description",
              name: "description",
              content: "".concat(e_24, " -- ").concat(t_25),
            },
            {
              hid: "og:description",
              name: "og:description",
              content: "".concat(e_24, " -- ").concat(t_25),
            },
            {
              hid: "twitter:description",
              name: "twitter:description",
              content: "".concat(e_24, " -- ").concat(t_25),
            },
            {
              hid: "og:title",
              name: "og:title",
              content: title,
            },
            {
              hid: "twitter:title",
              name: "twitter:title",
              content: title,
            },
          ],
        };
      },
      components: {
        pageTab: pageTabComponent.a,
        VueScroll: defaultOf_m.a,
      },
      data: function () {
        return {
          cvIdx: 0,
          subCvIdx: 0,
          shadowOpacity: 1,
          showCampSelection: !1,
          audioInstance: null,
          micTween: null,
          descShadowOpacity: 1,
          showLeftArrow: !1,
          showRightArrow: !1,
          isPlaying: !1,
          scrollOpts: {
            scrollPanel: {
              scrollingX: !1,
              scrollingY: !0,
            },
            rail: {
              size: "0.05rem",
              background: "#DEDEDE",
              opacity: 1,
            },
            bar: {
              keepShow: !0,
              size: "0.05rem",
              background: "#C0C0C0",
            },
          },
          chaScrollOpts: {
            scrollPanel: {
              scrollingX: !0,
              scrollingY: !1,
            },
            rail: {
              opacity: 0,
            },
            bar: {
              opacity: 0,
            },
          },
          campScrollOpts: {
            scrollPanel: {
              scrollingX: !1,
              scrollingY: !0,
            },
            rail: {
              opacity: 0,
            },
            bar: {
              opacity: 0,
            },
          },
        };
      },
      computed: {
        activeCamp: function () {
          return this.campList[this.activeIndex];
        },
        chaList: function () {
          var e_26,
            t_27 = this.activeCamp.channelId;
          return (
            (null === (e_26 = this.characterList) || void 0 === e_26
              ? void 0
              : e_26.filter(function (e_28) {
                  return e_28.sChanId.includes("".concat(t_27));
                })) || []
          );
        },
        curActiveCha: function () {
          return (this.chaList.length && this.chaList[this.curActiveChaIdx]) || {};
        },
        lang: function () {
          return this.$store.state.lang;
        },
      },
      watch: {
        curActiveCha: {
          handler: function (e_29) {
            var t_30 = this;
            if ((this.updateAudioIns(e_29), this.$refs.chaScrollRef)) {
              var r_31 = 2.42 * this.curActiveChaIdx - 0.38 - 0.16 * Math.max(0, this.curActiveChaIdx - 1),
                c_32 = this.$flex("rem");
              this.$refs.chaScrollRef.scrollTo({
                x: r_31 * c_32,
              });
            }
            (this.$refs.chaSwiperRef && this.$refs.chaSwiperRef.swiper.slideTo(this.curActiveChaIdx),
              (this.subCvIdx = 0),
              "".concat(this.$route.query.id) !== "".concat(e_29.iInfoId) &&
                this.$router.replace({
                  query: C_5(
                    C_5({}, this.$route.query),
                    {},
                    {
                      id: e_29.iInfoId,
                    },
                  ),
                }),
              this.$nextTick(function () {
                var e_33;
                null !== (e_33 = t_30.$refs.descScroll) &&
                  void 0 !== e_33 &&
                  e_33[t_30.curActiveChaIdx] &&
                  (t_30.$refs.descScroll[t_30.curActiveChaIdx].refresh(),
                  t_30.$refs.descScroll[t_30.curActiveChaIdx].scrollTo(
                    {
                      y: 0,
                    },
                    0,
                  ));
              }));
          },
          immediate: !0,
        },
      },
      asyncData: function (e_34) {
        e_34.res;
        var t_35 = e_34.redirect,
          r_36 = e_34.store,
          c_37 = e_34.query.id;
        return Promise.all([
          characterAndCampCMSAPI.a.getCampList({
            data: {
              sLangKey: r_36.state.lang,
            },
          }),
          characterAndCampCMSAPI.a.getAllCharacter({
            data: {
              sLangKey: r_36.state.lang,
            },
          }),
        ]).then(function (e_38) {
          var n_39 = Object(vendorBundle3.a)(e_38, 2),
            o_40 = n_39[0],
            h_41 = n_39[1];
          (h_41.list.length < 1 &&
            t_35({
              name: "m",
            }),
            r_36.commit("setCharacterCamps", o_40));
          var m_42 = h_41.list,
            d_43 = m_42.findIndex(function (e_51) {
              return e_51.iInfoId === +c_37;
            }),
            v_44 = -1 === d_43 ? 0 : d_43,
            f_45 = o_40.findIndex(function (e_52) {
              var t_53 = e_52.channelId;
              return m_42[v_44].sChanId.includes("".concat(t_53));
            }),
            A_46 = -1 === f_45 ? 0 : f_45,
            C_47 = o_40[A_46],
            w_48 = (
              (null == m_42
                ? void 0
                : m_42.filter(function (e_54) {
                    return e_54.sChanId.includes("".concat(C_47.channelId));
                  })) || []
            ).findIndex(function (e_55) {
              return e_55.iInfoId === +c_37;
            }),
            x_49 = -1 === w_48 ? 0 : w_48,
            I_50 = {
              effect: "fade",
              initialSlide: x_49,
              fadeEffect: {
                crossFade: !0,
              },
            };
          return {
            campList: o_40.concat({
              isEmpty: !0,
            }),
            characterList: h_41.list,
            activeIndex: A_46,
            curActiveChaIdx: x_49,
            chaSwiperOpts: I_50,
          };
        });
      },
      mounted: function () {
        var e_56 = this,
          t_57 = this.chaList.findIndex(function (t_58) {
            return t_58.iInfoId === +e_56.$route.query.id;
          });
        this.curActiveChaIdx = -1 === t_57 ? 0 : t_57;
      },
      methods: {
        handleSwitchClick: function (e_59) {
          var t_60 = this.curActiveChaIdx + e_59;
          t_60 < 0 || t_60 >= this.chaList.length || (this.curActiveChaIdx = t_60);
        },
        updateAudioIns: function (e_61) {
          var t_62 = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function c_63() {
              var n_64, o_65, h_66, l_67, m_68;
              return regeneratorRuntime.wrap(function (c_69) {
                for (;;)
                  switch ((c_69.prev = c_69.next)) {
                    case 0:
                      if (((n_64 = (e_61 || {}).cv), (o_65 = void 0 === n_64 ? [] : n_64).length)) {
                        c_69.next = 3;
                        break;
                      }
                      return c_69.abrupt("return");
                    case 3:
                      if (
                        (o_65.length <= 1 && (t_62.cvIdx = 0),
                        (h_66 = webpackRequire(354)),
                        (l_67 = h_66.eventAudio),
                        !t_62.audioInstance)
                      ) {
                        c_69.next = 10;
                        break;
                      }
                      return ((c_69.next = 8), t_62.audioInstance.stop());
                    case 8:
                      (t_62.audioInstance.unload(), (t_62.audioInstance = null));
                    case 10:
                      ((m_68 = o_65
                        .map(function (e_70) {
                          return e_70.audio;
                        })
                        .flat()),
                        (t_62.audioInstance = new l_67({
                          src: m_68,
                          cache: !1,
                          preload: !0,
                          loop: !1,
                          autoplay: !1,
                          fade: [0, 0],
                          html5: !1,
                          onPlayed: function (e_71) {
                            ((t_62.isPlaying = e_71), e_71 ? t_62.playMicAni() : t_62.stopMicAni());
                          },
                          onEnd: t_62.switchSubCv,
                        })));
                    case 12:
                    case "end":
                      return c_69.stop();
                  }
              }, c_63);
            }),
          )();
        },
        switchSubCv: function () {
          var e_72 = this.curActiveCha.cv[this.cvIdx].audio.length;
          this.subCvIdx < e_72 - 1 ? (this.subCvIdx += 1) : (this.subCvIdx = 0);
        },
        handleVoiceBtnClick: function () {
          if (this.audioInstance)
            if (0 !== this.curActiveCha.cv[this.cvIdx].audio.length) {
              if (this.isPlaying) return (this.audioInstance.stop(), void this.switchSubCv());
              var e_73 = (1 === this.cvIdx ? this.curActiveCha.cv[0].audio.length : 0) + this.subCvIdx;
              (this.audioInstance.switchSrcIndex(e_73),
                this.audioInstance.play(),
                this.$trackButton("character_voice", "".concat(this.curActiveCha.iInfoId), {
                  cvLang: this.curActiveCha.cv[this.cvIdx].lang,
                  cvId: this.subCvIdx + 1,
                }));
            } else this.$mtoast(this.$getI18nWord("textSoon"));
        },
        handleLangSwitcherClick: function () {
          var e_74 = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function t_75() {
              return regeneratorRuntime.wrap(function (t_76) {
                for (;;)
                  switch ((t_76.prev = t_76.next)) {
                    case 0:
                      if (!e_74.audioInstance) {
                        t_76.next = 3;
                        break;
                      }
                      return ((t_76.next = 3), e_74.audioInstance.stop());
                    case 3:
                      e_74.cvIdx = 0 === e_74.cvIdx ? 1 : 0;
                    case 4:
                    case "end":
                      return t_76.stop();
                  }
              }, t_75);
            }),
          )();
        },
        handleDescScroll: function (e_77) {
          this.descShadowOpacity = (1 - Math.max(0, e_77.process - 0.9) / 0.1).toFixed(2);
        },
        handlePaginationItemClick: function (e_78) {
          this.curActiveChaIdx = e_78;
        },
        toggleCampSelection: function () {
          var e_79 = this;
          if (
            ((this.showCampSelection = !this.showCampSelection),
            this.$trackButton(this.showCampSelection ? "view_all_camp" : "all_camp_back", ""),
            (document.body.style.overflow = this.showCampSelection ? "hidden" : "auto"),
            this.showCampSelection)
          ) {
            var t_80 = this.$gsap.timeline();
            (t_80.fromTo(
              ".character-camp-selection-header",
              {
                opacity: 0,
                y: "-100%",
              },
              {
                opacity: 1,
                y: "0",
                duration: 0.3,
                ease: "power2.inOut",
              },
            ),
              t_80.fromTo(
                ".character-camp-selection-bg",
                {
                  opacity: 0,
                  y: "-100%",
                },
                {
                  opacity: 1,
                  y: "0",
                  duration: 0.3,
                  ease: "power2.out",
                },
                "-=0.05",
              ),
              t_80.fromTo(
                ".character-camp-selection-content",
                {
                  opacity: 0,
                  y: "0.5rem",
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.3,
                  ease: "power2.inOut",
                  onStart: function () {
                    e_79.$refs.campScroll.scrollTo(
                      {
                        y: 0,
                      },
                      0,
                    );
                  },
                },
                "-=0.05",
              ),
              t_80.fromTo(
                [".character-camp-selection-cover-container", ".character-camp-selection-back"],
                {
                  opacity: 0,
                },
                {
                  opacity: 1,
                  duration: 0.3,
                  ease: "power2.inOut",
                },
                "<",
              ));
          }
        },
        handleCampItemClick: function (e_81) {
          (this.activeIndex !== e_81 && ((this.activeIndex = e_81), (this.curActiveChaIdx = 0)),
            this.$trackButton("camp_change", this.campList[this.activeIndex].iInfoId, {
              type: 2,
            }),
            (this.showCampSelection = !1),
            (document.body.style.overflow = "auto"));
        },
        playMicAni: function () {
          this.micTween = this.$gsap.to(".character-voice-btn-inner-highlight", {
            keyframes: {
              "--progress": ["100%", "35%", "60%", "35%", "70%", "0%", "100%"],
            },
            duration: 1,
            repeat: -1,
            ease: "none",
          });
        },
        stopMicAni: function () {
          this.micTween &&
            (this.micTween.kill(),
            this.$gsap.set(".character-voice-btn-inner-highlight", {
              "--progress": "100%",
            }),
            (this.micTween = null));
        },
        onChaSwiperChange: function () {
          this.curActiveChaIdx = this.$refs.chaSwiperRef.swiper.activeIndex;
        },
      },
    },
    x_7 = (webpackRequire(1249), webpackRequire(36)),
    component = Object(x_7.a)(
      w_6,
      function () {
        var e_82 = this,
          t_83 = e_82._self._c;
        return t_83(
          "div",
          {
            staticClass: "character",
          },
          [
            t_83("pageTab", {
              attrs: {
                "nav-num": 2,
                theme: e_82.curActiveCha.themeColor,
              },
            }),
            e_82._v(" "),
            t_83("div", {
              staticClass: "character-block",
              style: {
                background: e_82.curActiveCha.themeColor,
              },
            }),
            e_82._v(" "),
            t_83(
              "swiper",
              {
                ref: "chaSwiperRef",
                staticClass: "character-swiper",
                attrs: {
                  options: e_82.chaSwiperOpts,
                },
                on: {
                  slideChange: e_82.onChaSwiperChange,
                },
              },
              e_82._l(e_82.chaList, function (r_84) {
                return t_83(
                  "swiper-slide",
                  {
                    key: r_84.iInfoId,
                    staticClass: "character-swiper-slide",
                  },
                  [
                    t_83("img", {
                      key: r_84.iInfoId,
                      staticClass: "character-cover",
                      attrs: {
                        src: r_84.newCoverInnerM,
                      },
                    }),
                    e_82._v(" "),
                    t_83("div", {
                      staticClass: "character-cover-mist",
                    }),
                    e_82._v(" "),
                    t_83(
                      "div",
                      {
                        staticClass: "character-info",
                      },
                      [
                        t_83(
                          "div",
                          {
                            staticClass: "character-info-prop",
                          },
                          [
                            r_84.propIcon1
                              ? t_83("img", {
                                  attrs: {
                                    src: r_84.propIcon1,
                                    alt: "",
                                  },
                                })
                              : e_82._e(),
                            e_82._v(" "),
                            r_84.propIcon2
                              ? t_83("img", {
                                  attrs: {
                                    src: r_84.propIcon2,
                                    alt: "",
                                  },
                                })
                              : e_82._e(),
                          ],
                        ),
                        e_82._v(" "),
                        t_83(
                          "div",
                          {
                            staticClass: "character-info-name",
                          },
                          [
                            r_84.levelIcon
                              ? t_83("i", {
                                  style: {
                                    backgroundImage: "url(".concat(r_84.levelIcon, ")"),
                                  },
                                })
                              : e_82._e(),
                            e_82._v(" "),
                            t_83("span", [e_82._v(e_82._s(r_84.name))]),
                          ],
                        ),
                        e_82._v(" "),
                        r_84.cv.length
                          ? t_83(
                              "div",
                              {
                                staticClass: "character-voice-player",
                              },
                              [
                                t_83(
                                  "div",
                                  {
                                    staticClass: "character-voice-btn",
                                    on: {
                                      click: e_82.handleVoiceBtnClick,
                                    },
                                  },
                                  [
                                    t_83(
                                      "div",
                                      {
                                        staticClass: "character-voice-btn-inner",
                                      },
                                      [
                                        t_83("div", {
                                          staticClass: "character-voice-btn-inner-highlight",
                                        }),
                                      ],
                                    ),
                                  ],
                                ),
                                e_82._v(" "),
                                t_83(
                                  "span",
                                  {
                                    staticClass: "character-voice-player-name",
                                  },
                                  [
                                    t_83("span", [e_82._v("CV: ")]),
                                    e_82._v(" "),
                                    t_83(
                                      "span",
                                      {
                                        staticClass: "character-voice-player-name-text",
                                      },
                                      [e_82._v(e_82._s(r_84.cv[e_82.cvIdx].name))],
                                    ),
                                  ],
                                ),
                                e_82._v(" "),
                                r_84.cv.length > 1
                                  ? t_83(
                                      "div",
                                      {
                                        staticClass: "character-voice-lang-switcher",
                                        class: "character-voice-lang-switcher__".concat(e_82.cvIdx),
                                        on: {
                                          click: e_82.handleLangSwitcherClick,
                                        },
                                      },
                                      [t_83("span", [e_82._v(e_82._s(r_84.cv[e_82.cvIdx].lang))])],
                                    )
                                  : e_82._e(),
                              ],
                            )
                          : e_82._e(),
                        e_82._v(" "),
                        t_83(
                          "div",
                          {
                            staticClass: "character-info-desc-container",
                          },
                          [
                            t_83(
                              "vue-scroll",
                              {
                                ref: "descScroll",
                                refInFor: !0,
                                attrs: {
                                  ops: e_82.scrollOpts,
                                },
                                on: {
                                  "handle-scroll": e_82.handleDescScroll,
                                },
                              },
                              [
                                t_83("div", {
                                  staticClass: "character-info-desc",
                                  domProps: {
                                    innerHTML: e_82._s(r_84.intro),
                                  },
                                }),
                              ],
                            ),
                            e_82._v(" "),
                            t_83("div", {
                              staticClass: "character-info-desc-cover",
                              style: {
                                opacity: e_82.descShadowOpacity,
                              },
                            }),
                          ],
                          1,
                        ),
                      ],
                    ),
                  ],
                );
              }),
              1,
            ),
            e_82._v(" "),
            t_83(
              "transition",
              {
                attrs: {
                  name: "fadeIn",
                },
              },
              [
                t_83("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e_82.curActiveChaIdx > 0,
                      expression: "curActiveChaIdx > 0",
                    },
                  ],
                  staticClass: "switch-button switch-button-prev",
                  on: {
                    click: function (t_85) {
                      return e_82.handleSwitchClick(-1);
                    },
                  },
                }),
              ],
            ),
            e_82._v(" "),
            t_83(
              "transition",
              {
                attrs: {
                  name: "fadeIn",
                },
              },
              [
                t_83("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e_82.curActiveChaIdx < e_82.chaList.length - 1,
                      expression: "curActiveChaIdx < chaList.length - 1",
                    },
                  ],
                  staticClass: "switch-button switch-button-next",
                  on: {
                    click: function (t_86) {
                      return e_82.handleSwitchClick(1);
                    },
                  },
                }),
              ],
            ),
            e_82._v(" "),
            t_83(
              "div",
              {
                staticClass: "character-pagination-container",
              },
              [
                t_83(
                  "vue-scroll",
                  {
                    ref: "chaScrollRef",
                    attrs: {
                      ops: e_82.chaScrollOpts,
                    },
                  },
                  [
                    t_83(
                      "div",
                      {
                        staticClass: "character-pagination",
                        style: {
                          width: "".concat(2.42 * e_82.chaList.length, "rem"),
                        },
                      },
                      e_82._l(e_82.chaList, function (r_87, c_88) {
                        return t_83(
                          "div",
                          {
                            key: r_87.iInfoId,
                            staticClass: "character-pagination-item",
                            class: {
                              "character-pagination-item-active": c_88 === e_82.curActiveChaIdx,
                            },
                            on: {
                              click: function (t_89) {
                                return e_82.handlePaginationItemClick(c_88);
                              },
                            },
                          },
                          [
                            t_83("div", {
                              staticClass: "active-pagination-item-bg",
                              style: {
                                backgroundImage: "url(".concat(r_87.paginationItemBg, ")"),
                              },
                            }),
                            e_82._v(" "),
                            t_83("img", {
                              attrs: {
                                src: r_87.newNav,
                                alt: "",
                              },
                            }),
                          ],
                        );
                      }),
                      0,
                    ),
                  ],
                ),
              ],
              1,
            ),
            e_82._v(" "),
            t_83("div", {
              staticClass: "character-camp-mist",
            }),
            e_82._v(" "),
            t_83(
              "div",
              {
                key: e_82.activeCamp.iInfoId,
                staticClass: "character-camp",
                style: {
                  backgroundImage: "linear-gradient(45deg, "
                    .concat(e_82.activeCamp.gradientColorMob[0], " 0%, ")
                    .concat(e_82.activeCamp.gradientColorMob[1], " 100%)"),
                },
                on: {
                  click: e_82.toggleCampSelection,
                },
              },
              [
                t_83(
                  "div",
                  {
                    staticClass: "character-camp-inner",
                  },
                  [
                    t_83("img", {
                      staticClass: "character-camp-icon",
                      attrs: {
                        src: e_82.activeCamp.newIcon,
                        alt: "",
                      },
                    }),
                    e_82._v(" "),
                    t_83("span", {
                      domProps: {
                        innerHTML: e_82._s(e_82.activeCamp.name),
                      },
                    }),
                    e_82._v(" "),
                    t_83("i"),
                  ],
                ),
              ],
            ),
            e_82._v(" "),
            t_83(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e_82.showCampSelection,
                    expression: "showCampSelection",
                  },
                ],
                staticClass: "character-camp-selection",
              },
              [
                t_83(
                  "div",
                  {
                    staticClass: "character-camp-selection-bg",
                  },
                  [
                    t_83(
                      "vue-scroll",
                      {
                        ref: "campScroll",
                        attrs: {
                          ops: e_82.campScrollOpts,
                        },
                      },
                      [
                        t_83(
                          "div",
                          {
                            staticClass: "character-camp-selection-content",
                          },
                          e_82._l(e_82.campList, function (c_90, n_91) {
                            return t_83(
                              "div",
                              {
                                key: c_90.iInfoId,
                                staticClass: "character-camp-item",
                                class: {
                                  "character-camp-item-empty": c_90.isEmpty,
                                },
                                on: {
                                  click: function (t_92) {
                                    return e_82.handleCampItemClick(n_91);
                                  },
                                },
                              },
                              [
                                t_83("div", {
                                  staticClass: "character-camp-item-icon",
                                  style: {
                                    backgroundImage: "url(".concat(
                                      c_90.isEmpty ? webpackRequire(1179) : c_90.newIcon,
                                      ")",
                                    ),
                                  },
                                }),
                                e_82._v(" "),
                                t_83("div", {
                                  staticClass: "character-camp-item-name",
                                  domProps: {
                                    innerHTML: e_82._s(c_90.name || "EMPTY"),
                                  },
                                }),
                              ],
                            );
                          }),
                          0,
                        ),
                      ],
                    ),
                  ],
                  1,
                ),
                e_82._v(" "),
                e_82._m(0),
                e_82._v(" "),
                t_83("div", {
                  staticClass: "character-camp-selection-header",
                }),
                e_82._v(" "),
                t_83(
                  "div",
                  {
                    staticClass: "character-camp-selection-back",
                    on: {
                      click: e_82.toggleCampSelection,
                    },
                  },
                  [t_83("span", [e_82._v(e_82._s(e_82.$getI18nWord("textBack")))]), e_82._v(" "), t_83("i")],
                ),
              ],
            ),
            e_82._v(" "),
            t_83(
              "div",
              {
                staticClass: "character-detail-links",
              },
              e_82._l(e_82.characterList, function (r_93) {
                return t_83(
                  "nuxt-link",
                  {
                    key: r_93.iInfoId,
                    staticClass: "character-detail-link",
                    attrs: {
                      to: {
                        name: "m-lang-character",
                        query: o_2(
                          o_2({}, e_82.$router.query),
                          {},
                          {
                            id: r_93.iInfoId,
                          },
                        ),
                      },
                      "no-prefetch": "",
                    },
                  },
                  [
                    e_82._v(
                      "\n      " +
                        e_82._s("".concat(r_93.sTitle).concat(e_82.$getI18nWord("seoTitlePrefix"))) +
                        "\n    ",
                    ),
                  ],
                );
              }),
              1,
            ),
          ],
          1,
        );
      },
      [
        function () {
          var e_94 = this._self._c;
          return e_94(
            "div",
            {
              staticClass: "character-camp-selection-cover-container",
            },
            [
              e_94("div", {
                staticClass: "character-camp-selection-cover",
              }),
            ],
          );
        },
      ],
      !1,
      null,
      null,
      null,
    );
  webpackExports.default = component.exports;
};
