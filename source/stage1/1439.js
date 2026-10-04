// page:lang-character — module 1439 from 3f59e77
// module 1439 from 3f59e77.js
// deps: 85, 84, 67, 105, 106, 56, 65, 32, 71, 98, 138, 119, 118, 1143, 136, 77, 137, 1327, 156, 1187, 1154, 1126, 347, 354, 558, 559, 1329, 36, 1179
const module_1439 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  (webpackRequire(85), webpackRequire(84), webpackRequire(67), webpackRequire(105), webpackRequire(106));
  var vendorBundle = webpackRequire(56);
  webpackRequire(65);
  function c_1(object, e_9) {
    var t_10 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var n_11 = Object.getOwnPropertySymbols(object);
      (e_9 &&
        (n_11 = n_11.filter(function (e_12) {
          return Object.getOwnPropertyDescriptor(object, e_12).enumerable;
        })),
        t_10.push.apply(t_10, n_11));
    }
    return t_10;
  }
  function o_2(e_13) {
    for (var i_14 = 1; i_14 < arguments.length; i_14++) {
      var source = null != arguments[i_14] ? arguments[i_14] : {};
      i_14 % 2
        ? c_1(Object(source), !0).forEach(function (t_15) {
            Object(vendorBundle.a)(e_13, t_15, source[t_15]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e_13, Object.getOwnPropertyDescriptors(source))
          : c_1(Object(source)).forEach(function (t_16) {
              Object.defineProperty(e_13, t_16, Object.getOwnPropertyDescriptor(source, t_16));
            });
    }
    return e_13;
  }
  var vendorBundle2 = webpackRequire(32),
    vendorBundle3 = webpackRequire(71),
    d_3 =
      (webpackRequire(98),
      webpackRequire(138),
      webpackRequire(119),
      webpackRequire(118),
      webpackRequire(1143),
      webpackRequire(136),
      webpackRequire(77),
      webpackRequire(137),
      webpackRequire(1327),
      webpackRequire(156),
      webpackRequire(1187)),
    defaultOf_d = webpackRequire.n(d_3),
    characterAndCampCMSAPI = webpackRequire(1154),
    pageTabComponent = webpackRequire(1126),
    backTop = webpackRequire(347);
  function C_4(object, e_17) {
    var t_18 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var n_19 = Object.getOwnPropertySymbols(object);
      (e_17 &&
        (n_19 = n_19.filter(function (e_20) {
          return Object.getOwnPropertyDescriptor(object, e_20).enumerable;
        })),
        t_18.push.apply(t_18, n_19));
    }
    return t_18;
  }
  function w_5(e_21) {
    for (var i_22 = 1; i_22 < arguments.length; i_22++) {
      var source = null != arguments[i_22] ? arguments[i_22] : {};
      i_22 % 2
        ? C_4(Object(source), !0).forEach(function (t_23) {
            Object(vendorBundle.a)(e_21, t_23, source[t_23]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e_21, Object.getOwnPropertyDescriptors(source))
          : C_4(Object(source)).forEach(function (t_24) {
              Object.defineProperty(e_21, t_24, Object.getOwnPropertyDescriptor(source, t_24));
            });
    }
    return e_21;
  }
  var E_6 = {
      scrollToTop: !0,
      name: "character",
      components: {
        pageTab: pageTabComponent.a,
        backTop: backTop.a,
        VueScroll: defaultOf_d.a,
      },
      head: function () {
        var e_25 = this.curActiveCha.sTitle,
          t_26 = (this.curActiveCha.word || "").replace(/<br\s*\/?>/gi, " "),
          title = "".concat(e_25).concat(this.$getI18nWord("seoTitlePrefix"));
        return {
          title: title,
          meta: [
            {
              hid: "description",
              name: "description",
              content: "".concat(e_25, " -- ").concat(t_26),
            },
            {
              hid: "og:description",
              name: "og:description",
              content: "".concat(e_25, " -- ").concat(t_26),
            },
            {
              hid: "twitter:description",
              name: "twitter:description",
              content: "".concat(e_25, " -- ").concat(t_26),
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
      data: function () {
        var e_27 = this,
          t_28 = this.$flex("rem");
        return {
          cvIdx: 0,
          subCvIdx: 0,
          showCampSelection: !1,
          audioInstance: null,
          micTween: null,
          showLeftArrow: !1,
          showRightArrow: !1,
          isPlaying: !1,
          isEnFontLoad: !1,
          paginationSwiper: null,
          sideCampSwiper: null,
          sideCampStyle: {
            height: "calc(100vh - 1rem)",
            bottom: "unset",
            top: "unset",
            position: "absolute",
          },
          activeIndex: 0,
          paginationSwiperOption: {
            slidesPerView: 3,
            shortSwipes: !1,
            on: {
              slideChange: this.onSwiperSlideChange,
              tap: function () {
                e_27.onRoleClick(-1);
              },
            },
          },
          campScrollOpts: {
            rail: {
              opacity: 0,
            },
            bar: {
              opacity: 0,
            },
          },
          sideCampSwiperOption: {
            direction: "vertical",
            slidesPerView: "auto",
            spaceBetween: 0.1 * t_28,
            slideToClickedSlide: !0,
            centeredSlides: !0,
            loop: !0,
            shortSwipes: !1,
            longSwipesRatio: 0.3,
            on: {
              slideChangeTransitionStart: this.handleCampChange,
            },
          },
          scrollOpts: {
            scrollPanel: {
              scrollingX: !1,
              scrollingY: !0,
            },
            rail: {
              size: "0.05rem",
              background: "#EFEFEF",
              opacity: 1,
            },
            bar: {
              keepShow: !0,
              size: "0.05rem",
              background: "#C0C0C0",
            },
          },
        };
      },
      computed: {
        lang: function () {
          return this.$store.state.lang;
        },
      },
      watch: {
        activeIndex: function () {
          var e_29,
            t_30 = this.campList[this.activeIndex];
          this.chaList =
            (null === (e_29 = this.characterList) || void 0 === e_29
              ? void 0
              : e_29.filter(function (e_31) {
                  return e_31.sChanId.includes("".concat(t_30.channelId));
                })) || [];
        },
        curActiveCha: {
          handler: function (e_32) {
            var t_33, n_34;
            if (
              (this.updateAudioIns(e_32),
              (this.subCvIdx = 0),
              null !== (t_33 = this.$refs.chaSwiper) && void 0 !== t_33 && t_33.swiper)
            ) {
              var r_35 = e_32.iInfoId,
                c_36 = this.characterList.findIndex(function (e_37) {
                  return e_37.iInfoId === r_35;
                });
              this.$refs.chaSwiper.swiper.slideTo(c_36);
            }
            (null !== (n_34 = this.$refs.descScroll) &&
              void 0 !== n_34 &&
              n_34[this.curActiveChaIdx] &&
              (this.$refs.descScroll[this.curActiveChaIdx].refresh(),
              this.$refs.descScroll[this.curActiveChaIdx].scrollTo(
                {
                  y: 0,
                },
                0,
              )),
              "".concat(this.$route.query.id) !== "".concat(e_32.iInfoId) &&
                this.$router.replace({
                  query: w_5(
                    w_5({}, this.$route.query),
                    {},
                    {
                      id: e_32.iInfoId,
                    },
                  ),
                }),
              this.updateEnNameScale());
          },
          immediate: !0,
        },
        curActiveChaIdx: function () {
          this.curActiveCha = this.chaList[this.curActiveChaIdx];
        },
        chaList: {
          immediate: !0,
          handler: function () {
            var e_38 = this;
            ((this.curActiveCha = this.chaList[this.curActiveChaIdx]),
              this.preloadImages(),
              this.$nextTick(function () {
                e_38.onSwiperSlideChange();
              }));
          },
        },
        isEnFontLoad: function () {
          this.updateEnNameScale();
        },
      },
      asyncData: function (e_39) {
        e_39.res;
        var t_40 = e_39.redirect,
          n_41 = e_39.store,
          r_42 = e_39.query.id;
        return (
          console.log("character", r_42),
          Promise.all([
            characterAndCampCMSAPI.a.getCampList({
              data: {
                sLangKey: n_41.state.lang,
              },
            }),
            characterAndCampCMSAPI.a.getAllCharacter({
              data: {
                sLangKey: n_41.state.lang,
              },
            }),
          ]).then(function (e_43) {
            var c_44 = Object(vendorBundle3.a)(e_43, 2),
              o_45 = c_44[0],
              l_46 = c_44[1];
            (l_46.list.length < 1 &&
              t_40({
                name: "main",
              }),
              n_41.commit("setCharacterCamps", o_45));
            var d_47 = 4 - (o_45.length % 4) || 4,
              m_48 = o_45.concat(
                new Array(d_47).fill({
                  isEmpty: !0,
                }),
              ),
              v_49 = l_46.list,
              f_50 = v_49.findIndex(function (e_59) {
                return e_59.iInfoId === +r_42;
              }),
              S_51 = -1 === f_50 ? 0 : f_50,
              C_52 = o_45.findIndex(function (e_60) {
                var t_61 = e_60.channelId;
                return v_49[S_51].sChanId.includes("".concat(t_61));
              }),
              w_53 = -1 === C_52 ? 0 : C_52,
              E_54 = o_45[w_53],
              x_55 =
                (null == v_49
                  ? void 0
                  : v_49.filter(function (e_62) {
                      return e_62.sChanId.includes("".concat(E_54.channelId));
                    })) || [],
              A_56 = x_55.findIndex(function (e_63) {
                return e_63.iInfoId === +r_42;
              }),
              I_57 = -1 === A_56 ? 0 : A_56,
              L_58 = x_55[I_57];
            return {
              renderCampList: m_48,
              campList: o_45,
              chaList: x_55,
              characterList: v_49,
              activeIndex: w_53,
              curActiveCha: L_58,
              curActiveChaIdx: I_57,
              chaSwiperOption: {
                effect: "fade",
                lazy: !0,
                initialSlide: S_51,
                fadeEffect: {
                  crossFade: !0,
                },
              },
            };
          })
        );
      },
      beforeMount: function () {
        this.loadEnFont();
      },
      mounted: function () {
        var e_64 = this;
        (this.$nextTick(function () {
          var t_65, n_66;
          ((e_64.paginationSwiper =
            null === (t_65 = e_64.$refs.paginationSwiper) || void 0 === t_65 ? void 0 : t_65.swiper),
            (e_64.sideCampSwiper =
              null === (n_66 = e_64.$refs.sideCampSwiper) || void 0 === n_66 ? void 0 : n_66.swiper),
            e_64.updateSideCampStyle(),
            e_64.onSwiperSlideChange(),
            e_64.preloadImages(),
            e_64.sideCampSwiper && e_64.sideCampSwiper.slideToLoop(e_64.activeIndex, 0),
            e_64.paginationSwiper && e_64.paginationSwiper.slideTo(e_64.curActiveChaIdx, 0));
        }),
          window.addEventListener("resize", this.updateSideCampStyle),
          window.addEventListener("scroll", this.updateSideCampStyle));
      },
      beforeDestroy: function () {
        (window.removeEventListener("resize", this.updateSideCampStyle),
          window.removeEventListener("scroll", this.updateSideCampStyle));
      },
      methods: {
        formatName: function () {
          var e_67 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return e_67.replace(/<br\s*\/?>/gi, " ");
        },
        handleCampChange: function () {
          if (this.sideCampSwiper && this.paginationSwiper) {
            var e_68 = this.sideCampSwiper.realIndex;
            this.activeIndex !== e_68 &&
              (e_68 > this.campList.length ||
                ((this.activeIndex = e_68),
                (this.curActiveChaIdx = 0),
                this.$trackButton("camp_change", this.campList[this.activeIndex].iInfoId, {
                  type: 1,
                }),
                this.paginationSwiper.slideTo(this.curActiveChaIdx, 0)));
          }
        },
        handlePaginationArrowClick: function (e_69) {
          var t_70 = this.paginationSwiper.realIndex;
          this.paginationSwiper.slideTo(t_70 + 3 * e_69);
        },
        handleVoiceBtnClick: function () {
          if (this.audioInstance)
            if (0 !== this.curActiveCha.cv[this.cvIdx].audio.length) {
              if (this.isPlaying) return (this.audioInstance.stop(), void this.switchSubCv());
              var e_71 = (1 === this.cvIdx ? this.curActiveCha.cv[0].audio.length : 0) + this.subCvIdx;
              (this.audioInstance.switchSrcIndex(e_71),
                this.audioInstance.play(),
                this.$trackButton("character_voice", "".concat(this.curActiveCha.iInfoId), {
                  cvLang: this.curActiveCha.cv[this.cvIdx].lang,
                  cvId: this.subCvIdx + 1,
                }));
            } else this.$mtoast(this.$getI18nWord("textSoon"));
        },
        handleLangSwitcherClick: function () {
          var e_72 = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function t_73() {
              return regeneratorRuntime.wrap(function (t_74) {
                for (;;)
                  switch ((t_74.prev = t_74.next)) {
                    case 0:
                      if (!e_72.audioInstance) {
                        t_74.next = 4;
                        break;
                      }
                      return ((t_74.next = 3), e_72.audioInstance.stop());
                    case 3:
                      e_72.stopMicAni();
                    case 4:
                      e_72.cvIdx = 0 === e_72.cvIdx ? 1 : 0;
                    case 5:
                    case "end":
                      return t_74.stop();
                  }
              }, t_73);
            }),
          )();
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
        updateAudioIns: function (e_75) {
          var t_76 = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function r_77() {
              var c_78, o_79, l_80, h_81, d_82;
              return regeneratorRuntime.wrap(function (r_83) {
                for (;;)
                  switch ((r_83.prev = r_83.next)) {
                    case 0:
                      if (((c_78 = (e_75 || {}).cv), (o_79 = void 0 === c_78 ? [] : c_78).length)) {
                        r_83.next = 3;
                        break;
                      }
                      return r_83.abrupt("return");
                    case 3:
                      if (
                        (o_79.length <= 1 && (t_76.cvIdx = 0),
                        (l_80 = webpackRequire(354)),
                        (h_81 = l_80.eventAudio),
                        !t_76.audioInstance)
                      ) {
                        r_83.next = 11;
                        break;
                      }
                      return ((r_83.next = 8), t_76.audioInstance.stop());
                    case 8:
                      (t_76.audioInstance.unload(), t_76.stopMicAni(), (t_76.audioInstance = null));
                    case 11:
                      ((d_82 = o_79
                        .map(function (e_84) {
                          return e_84.audio;
                        })
                        .flat()),
                        (t_76.audioInstance = new h_81({
                          src: d_82,
                          cache: !1,
                          preload: !0,
                          loop: !1,
                          autoplay: !1,
                          fade: [0, 0],
                          html5: !1,
                          onPlayed: function (e_85) {
                            ((t_76.isPlaying = e_85), e_85 ? t_76.playMicAni() : t_76.stopMicAni());
                          },
                          onEnd: t_76.switchSubCv,
                        })));
                    case 13:
                    case "end":
                      return r_83.stop();
                  }
              }, r_77);
            }),
          )();
        },
        switchSubCv: function () {
          var e_86 = this.curActiveCha.cv[this.cvIdx].audio.length;
          this.subCvIdx < e_86 - 1 ? (this.subCvIdx += 1) : (this.subCvIdx = 0);
        },
        toggleCampSelection: function () {
          var e_87 = this;
          if (
            ((this.showCampSelection = !this.showCampSelection),
            this.$trackButton(this.showCampSelection ? "view_all_camp" : "all_camp_back", ""),
            this.showCampSelection)
          ) {
            var t_88 = this.$gsap.timeline();
            (t_88.fromTo(
              ".selection__header",
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
              t_88.fromTo(
                ".selection__bg",
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
              t_88.fromTo(
                ".selection__wrap",
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
                    e_87.$refs.campScroll.scrollTo(
                      {
                        y: 0,
                      },
                      0,
                    );
                  },
                },
                "-=0.05",
              ),
              t_88.fromTo(
                ".selection__shadow-container",
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
        onSwiperSlideChange: function () {
          if (this.chaList.length <= 3 || !this.paginationSwiper)
            return ((this.showLeftArrow = !1), void (this.showRightArrow = !1));
          ((this.showLeftArrow = this.paginationSwiper.activeIndex > 0),
            (this.showRightArrow = this.paginationSwiper.activeIndex + 3 < this.chaList.length));
        },
        onRoleClick: function (e_89) {
          this.curActiveChaIdx = -1 === e_89 ? this.paginationSwiper.clickedIndex : e_89;
        },
        onCampClick: function (e_90) {
          (e_90 !== this.activeIndex &&
            ((this.activeIndex = e_90),
            (this.curActiveChaIdx = 0),
            this.paginationSwiper.slideTo(this.curActiveChaIdx, 0),
            this.sideCampSwiper.slideToLoop(e_90, 0)),
            this.$trackButton("camp_change", this.campList[e_90].iInfoId, {
              type: 2,
            }),
            (this.showCampSelection = !1));
        },
        updateSideCampStyle: function () {
          var e_91 = this.$flex("rem"),
            t_92 = 12.97 * e_91,
            n_93 = Math.min(document.documentElement.clientHeight - 1 * e_91, t_92),
            r_94 = document.documentElement.scrollTop + n_93 - t_92;
          ((this.sideCampStyle.height = "".concat(n_93, "px")),
            r_94 <= 0
              ? ((this.sideCampStyle.bottom = "unset"),
                (this.sideCampStyle.top = "1rem"),
                (this.sideCampStyle.position = "fixed"))
              : ((this.sideCampStyle.bottom = 0),
                (this.sideCampStyle.top = "unset"),
                (this.sideCampStyle.position = "absolute")));
        },
        updateEnNameScale: function () {
          var e_95 = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function t_96() {
              var n_97, r_98, c_99, o_100;
              return regeneratorRuntime.wrap(function (t_101) {
                for (;;)
                  switch ((t_101.prev = t_101.next)) {
                    case 0:
                      if ("en-us" !== e_95.lang) {
                        t_101.next = 2;
                        break;
                      }
                      return t_101.abrupt("return");
                    case 2:
                      if (e_95.isEnFontLoad) {
                        t_101.next = 4;
                        break;
                      }
                      return t_101.abrupt("return");
                    case 4:
                      return ((t_101.next = 6), e_95.$nextTick());
                    case 6:
                      if (e_95.curActiveCha.enNameScale) {
                        t_101.next = 14;
                        break;
                      }
                      if (
                        ((n_97 = e_95.$flex("rem")),
                        (r_98 = "character-info-name-en-".concat(e_95.curActiveCha.iInfoId)),
                        (c_99 = document.querySelector(".".concat(r_98))))
                      ) {
                        t_101.next = 12;
                        break;
                      }
                      return t_101.abrupt("return");
                    case 12:
                      ((o_100 = Math.min((10 * n_97) / c_99.clientWidth, 1)),
                        (e_95.curActiveCha.enNameScale = o_100));
                    case 14:
                    case "end":
                      return t_101.stop();
                  }
              }, t_96);
            }),
          )();
        },
        loadEnFont: function () {
          var e_102 = this;
          window.FontFace
            ? new FontFace(
                "Mont-Heavy",
                "url(".concat(webpackRequire(558), "), url(").concat(webpackRequire(559), ")"),
              )
                .load()
                .finally(function () {
                  e_102.isEnFontLoad = !0;
                })
            : (this.isEnFontLoad = !0);
        },
        preloadImages: function () {
          var e_103 = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function t_104() {
              var n_105;
              return regeneratorRuntime.wrap(function (t_106) {
                for (;;)
                  switch ((t_106.prev = t_106.next)) {
                    case 0:
                      if (null !== (n_105 = e_103.$refs.chaSwiper) && void 0 !== n_105 && n_105.swiper) {
                        t_106.next = 2;
                        break;
                      }
                      return t_106.abrupt("return");
                    case 2:
                      e_103.chaList.forEach(function (t_107) {
                        var n_108 = t_107.iInfoId,
                          r_109 = e_103.characterList.findIndex(function (e_110) {
                            return e_110.iInfoId === n_108;
                          });
                        e_103.$refs.chaSwiper.swiper.lazy.loadInSlide(r_109);
                      });
                    case 3:
                    case "end":
                      return t_106.stop();
                  }
              }, t_104);
            }),
          )();
        },
      },
    },
    x_7 = E_6,
    A_8 = (webpackRequire(1329), webpackRequire(36)),
    component = Object(A_8.a)(
      x_7,
      function () {
        var e_111 = this,
          t_112 = e_111._self._c;
        return t_112(
          "div",
          {
            staticClass: "character",
          },
          [
            t_112("pageTab", {
              attrs: {
                "nav-num": 2,
                theme: e_111.curActiveCha.themeColor,
              },
            }),
            e_111._v(" "),
            t_112(
              "client-only",
              [
                t_112(
                  "swiper",
                  {
                    ref: "chaSwiper",
                    staticClass: "cha-swiper",
                    attrs: {
                      options: e_111.chaSwiperOption,
                    },
                  },
                  e_111._l(e_111.characterList, function (n_113) {
                    return t_112(
                      "swiper-slide",
                      {
                        key: n_113.iInfoId,
                        staticClass: "cha-swiper-slide swiper-no-swiping",
                      },
                      [
                        t_112("div", {
                          staticClass: "character-cover swiper-lazy",
                          attrs: {
                            "data-background": n_113.newCoverInner,
                          },
                        }),
                        e_111._v(" "),
                        t_112(
                          "div",
                          {
                            staticClass: "character-info",
                          },
                          [
                            t_112(
                              "div",
                              {
                                staticClass: "character-info-main",
                              },
                              [
                                t_112(
                                  "div",
                                  {
                                    staticClass: "character-info-row",
                                  },
                                  [
                                    t_112(
                                      "div",
                                      {
                                        staticClass: "character-info-name",
                                      },
                                      [
                                        n_113.levelIcon
                                          ? t_112("i", {
                                              style: {
                                                backgroundImage: "url(".concat(n_113.levelIcon, ")"),
                                              },
                                            })
                                          : e_111._e(),
                                        e_111._v(" "),
                                        t_112("span", [e_111._v(e_111._s(n_113.name))]),
                                        e_111._v(" "),
                                        "en-us" !== e_111.lang
                                          ? t_112(
                                              "span",
                                              {
                                                staticClass: "character-info-name-en font-mont-heavy",
                                                class: "character-info-name-en-".concat(n_113.iInfoId),
                                                style:
                                                  0 === n_113.enNameScale
                                                    ? {
                                                        visibility: "hidden",
                                                      }
                                                    : {
                                                        transform: "scale(".concat(n_113.enNameScale, ")"),
                                                      },
                                              },
                                              [e_111._v(e_111._s(e_111.formatName(n_113.nameEN)))],
                                            )
                                          : e_111._e(),
                                      ],
                                    ),
                                  ],
                                ),
                                e_111._v(" "),
                                t_112(
                                  "div",
                                  {
                                    staticClass: "character-info-row",
                                  },
                                  [
                                    n_113.cv.length
                                      ? t_112(
                                          "div",
                                          {
                                            staticClass: "character-voice-player",
                                          },
                                          [
                                            t_112(
                                              "div",
                                              {
                                                staticClass: "character-voice-btn",
                                                on: {
                                                  click: e_111.handleVoiceBtnClick,
                                                },
                                              },
                                              [
                                                t_112(
                                                  "div",
                                                  {
                                                    staticClass: "character-voice-btn-inner",
                                                  },
                                                  [
                                                    t_112("div", {
                                                      staticClass: "character-voice-btn-inner-highlight",
                                                    }),
                                                  ],
                                                ),
                                              ],
                                            ),
                                            e_111._v(" "),
                                            t_112(
                                              "span",
                                              {
                                                staticClass: "character-voice-player-name",
                                              },
                                              [
                                                t_112("span", [e_111._v("CV: ")]),
                                                e_111._v(" "),
                                                t_112(
                                                  "span",
                                                  {
                                                    staticClass: "character-voice-player-name-text",
                                                  },
                                                  [e_111._v(e_111._s(n_113.cv[e_111.cvIdx].name))],
                                                ),
                                              ],
                                            ),
                                            e_111._v(" "),
                                            n_113.cv.length > 1
                                              ? t_112(
                                                  "div",
                                                  {
                                                    staticClass: "character-voice-lang-switcher",
                                                    class: "character-voice-lang-switcher__".concat(
                                                      e_111.cvIdx,
                                                    ),
                                                    on: {
                                                      click: e_111.handleLangSwitcherClick,
                                                    },
                                                  },
                                                  [
                                                    t_112("span", [
                                                      e_111._v(e_111._s(n_113.cv[e_111.cvIdx].lang)),
                                                    ]),
                                                  ],
                                                )
                                              : e_111._e(),
                                          ],
                                        )
                                      : e_111._e(),
                                    e_111._v(" "),
                                    t_112(
                                      "div",
                                      {
                                        key: "prop-".concat(n_113.iInfoId),
                                        staticClass: "character-info-prop",
                                      },
                                      [
                                        n_113.propIcon1
                                          ? t_112("img", {
                                              attrs: {
                                                src: n_113.propIcon1,
                                                alt: "",
                                              },
                                            })
                                          : e_111._e(),
                                        e_111._v(" "),
                                        n_113.propIcon2
                                          ? t_112("img", {
                                              attrs: {
                                                src: n_113.propIcon2,
                                                alt: "",
                                              },
                                            })
                                          : e_111._e(),
                                      ],
                                    ),
                                  ],
                                ),
                              ],
                            ),
                            e_111._v(" "),
                            t_112("div", {
                              staticClass: "character-info-word",
                              domProps: {
                                innerHTML: e_111._s(n_113.word),
                              },
                            }),
                            e_111._v(" "),
                            t_112(
                              "div",
                              {
                                staticClass: "character-info-desc-container",
                              },
                              [
                                t_112(
                                  "vue-scroll",
                                  {
                                    key: "desc-scroll-".concat(n_113.iInfoId),
                                    ref: "descScroll",
                                    refInFor: !0,
                                    attrs: {
                                      ops: e_111.scrollOpts,
                                    },
                                  },
                                  [
                                    t_112("div", {
                                      staticClass: "character-info-desc",
                                      domProps: {
                                        innerHTML: e_111._s(n_113.intro),
                                      },
                                    }),
                                  ],
                                ),
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
              ],
              1,
            ),
            e_111._v(" "),
            t_112(
              "div",
              {
                staticClass: "cha-pagination-multi",
              },
              [
                t_112("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e_111.showLeftArrow,
                      expression: "showLeftArrow",
                    },
                  ],
                  staticClass: "cha-pagination-arrow cha-pagination-arrow-left",
                  on: {
                    click: function (t_114) {
                      return e_111.handlePaginationArrowClick(-1);
                    },
                  },
                }),
                e_111._v(" "),
                t_112(
                  "client-only",
                  [
                    t_112(
                      "swiper",
                      {
                        ref: "paginationSwiper",
                        staticClass: "cha-pagination-swiper",
                        attrs: {
                          options: e_111.paginationSwiperOption,
                        },
                      },
                      e_111._l(e_111.chaList, function (n_115, r_116) {
                        return t_112(
                          "swiper-slide",
                          {
                            key: "".concat(n_115.iInfoId, "-").concat(r_116),
                            staticClass: "cha-pagination-item",
                            class: {
                              "cha-pagination-item-active": r_116 === e_111.curActiveChaIdx,
                            },
                          },
                          [
                            t_112("div", {
                              staticClass: "active-pagination-item-bg",
                              style: {
                                backgroundImage: "url(".concat(n_115.paginationItemBg, ")"),
                              },
                            }),
                            e_111._v(" "),
                            t_112("img", {
                              attrs: {
                                src: n_115.newNav,
                                alt: "",
                              },
                            }),
                          ],
                        );
                      }),
                      1,
                    ),
                  ],
                  1,
                ),
                e_111._v(" "),
                t_112("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e_111.showRightArrow,
                      expression: "showRightArrow",
                    },
                  ],
                  staticClass: "cha-pagination-arrow cha-pagination-arrow-right",
                  on: {
                    click: function (t_117) {
                      return e_111.handlePaginationArrowClick(1);
                    },
                  },
                }),
              ],
              1,
            ),
            e_111._v(" "),
            t_112(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e_111.showCampSelection,
                    expression: "showCampSelection",
                  },
                ],
                staticClass: "character-camp-selection",
              },
              [
                t_112("div", {
                  staticClass: "selection__bg",
                }),
                e_111._v(" "),
                t_112("div", {
                  staticClass: "selection__header",
                }),
                e_111._v(" "),
                t_112(
                  "div",
                  {
                    staticClass: "selection__wrap",
                  },
                  [
                    t_112(
                      "vue-scroll",
                      {
                        ref: "campScroll",
                        attrs: {
                          ops: e_111.campScrollOpts,
                        },
                      },
                      [
                        t_112(
                          "div",
                          {
                            staticClass: "selection__container",
                          },
                          [
                            t_112(
                              "div",
                              {
                                staticClass: "selection__content",
                              },
                              e_111._l(e_111.renderCampList, function (r_118, c_119) {
                                return t_112(
                                  "div",
                                  {
                                    key: r_118.iInfoId,
                                    staticClass: "selection__content-item",
                                    class: {
                                      "selection__content-item__empty": r_118.isEmpty,
                                    },
                                    on: {
                                      click: function (t_120) {
                                        return e_111.onCampClick(c_119);
                                      },
                                    },
                                  },
                                  [
                                    t_112("img", {
                                      staticClass: "selection__content-item-icon",
                                      attrs: {
                                        src: r_118.isEmpty ? webpackRequire(1179) : r_118.newIcon,
                                        alt: "",
                                      },
                                    }),
                                    e_111._v(" "),
                                    t_112(
                                      "div",
                                      {
                                        staticClass: "selection__content-item-name",
                                      },
                                      [e_111._v(e_111._s(r_118.sTitle || "EMPTY"))],
                                    ),
                                  ],
                                );
                              }),
                              0,
                            ),
                          ],
                        ),
                      ],
                    ),
                  ],
                  1,
                ),
                e_111._v(" "),
                t_112(
                  "div",
                  {
                    staticClass: "selection-back back-btn",
                    on: {
                      click: e_111.toggleCampSelection,
                    },
                  },
                  [
                    t_112("div", {
                      staticClass: "backArrow",
                    }),
                    e_111._v(" "),
                    t_112(
                      "div",
                      {
                        staticClass: "backText",
                      },
                      [e_111._v(e_111._s(e_111.$getI18nWord("textBack")))],
                    ),
                    e_111._v(" "),
                    t_112(
                      "div",
                      {
                        staticClass: "backSubtext",
                      },
                      [e_111._v("back")],
                    ),
                  ],
                ),
                e_111._v(" "),
                e_111._m(0),
              ],
            ),
            e_111._v(" "),
            t_112("div", {
              staticClass: "side-camp-selection-shadow",
              class: e_111.showCampSelection && "side-camp-selection-shadow-hide",
            }),
            e_111._v(" "),
            t_112(
              "div",
              {
                staticClass: "side-character-camp-selection",
                class: e_111.showCampSelection && "side-character-camp-selection-hide",
                style: e_111.sideCampStyle,
              },
              [
                t_112(
                  "client-only",
                  [
                    t_112(
                      "swiper",
                      {
                        ref: "sideCampSwiper",
                        staticClass: "side-camp-swiper",
                        attrs: {
                          options: e_111.sideCampSwiperOption,
                        },
                      },
                      e_111._l(e_111.campList, function (n_121) {
                        return t_112(
                          "swiper-slide",
                          {
                            key: n_121.iInfoId,
                            staticClass: "side-camp-item",
                          },
                          [
                            t_112("div", {
                              staticClass: "side-camp-icon",
                              style: {
                                backgroundImage: "url('".concat(n_121.newIcon, "')"),
                              },
                            }),
                            e_111._v(" "),
                            t_112(
                              "div",
                              {
                                staticClass: "side-camp-name-container",
                              },
                              [
                                t_112(
                                  "div",
                                  {
                                    staticClass: "side-camp-name",
                                  },
                                  [e_111._v(e_111._s(n_121.sTitle))],
                                ),
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
                e_111._v(" "),
                t_112(
                  "div",
                  {
                    staticClass: "side-camp-btm",
                  },
                  [
                    t_112(
                      "div",
                      {
                        staticClass: "side-camp-expand-btn",
                        on: {
                          click: e_111.toggleCampSelection,
                        },
                      },
                      [e_111._v(e_111._s(e_111.$getI18nWord("more_camp")))],
                    ),
                  ],
                ),
              ],
              1,
            ),
            e_111._v(" "),
            t_112("div", {
              staticClass: "character-color-block",
              style: {
                background: e_111.curActiveCha.themeColor,
              },
            }),
            e_111._v(" "),
            t_112(
              "div",
              {
                staticClass: "character-detail-links",
              },
              e_111._l(e_111.characterList, function (n_122) {
                return t_112(
                  "nuxt-link",
                  {
                    key: n_122.iInfoId,
                    staticClass: "character-detail-link",
                    attrs: {
                      to: {
                        name: "lang-character",
                        query: o_2(
                          o_2({}, e_111.$router.query),
                          {},
                          {
                            id: n_122.iInfoId,
                          },
                        ),
                      },
                      "no-prefetch": "",
                    },
                  },
                  [
                    e_111._v(
                      "\n      " +
                        e_111._s("".concat(n_122.sTitle).concat(e_111.$getI18nWord("seoTitlePrefix"))) +
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
          var e_123 = this._self._c;
          return e_123(
            "div",
            {
              staticClass: "selection__shadow-container",
            },
            [
              e_123("div", {
                staticClass: "selection__shadow",
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
