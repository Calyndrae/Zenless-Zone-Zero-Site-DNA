/**
 * m-cha — readable reconstruction of webpack module 1423 (chunk 564bae5.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/564bae5.js
 *
 * Nuxt page component `m-cha` for the mobile character route `m-lang-character` (layout `m/default`, `scrollToTop`). `asyncData` loads the camp list (`getCampList`, channel `CHANNEL_ID_CONFIG.CHARACTER.CAMP`) and all characters (`getAllCharacter`) from the character API (module 1154), redirects to `m` when there are none, commits `setCharacterCamps`, and derives `activeIndex` (camp) and `curActiveChaIdx` from `query.id`, plus a fade-effect `chaSwiperOpts`; `head()` builds title and description/og/twitter meta from the active character's `sTitle` and `word`. It renders the mobile `pageTab` (nav-num 2, themed by `themeColor`), a fade vue-awesome-swiper (ref `chaSwiperRef`) of `character-swiper-slide` covers with `character-info` (prop/level icons, name, a `character-voice-player` with CV name and language switcher, and a `vue-scroll` (vuescroll) description), prev/next `switch-button`s, a horizontally scrolling `character-pagination`, the active `character-camp` button and a `character-camp-selection` overlay animated with a `$gsap` timeline, plus hidden SEO `character-detail-link` nuxt-links. Voice playback uses `eventAudio` from module 354 (stop/unload/switchSrcIndex/play, `$mtoast` i18n `textSoon` when empty) with a looping `$gsap` `--progress` mic animation; the `curActiveCha` watcher rebuilds the audio, scrolls the pagination via `$flex('rem')`, syncs the swiper and `$router.replace`s `query.id`, and clicks are tracked with `$trackButton` (`character_voice`, `view_all_camp`/`all_camp_back`, `camp_change`).
 *
 * Exports (minified key → meaning):
 *   default → the `m-cha` mobile character showcase page Vue component (route m-lang-character, compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1423 from 564bae5.js
// deps: 85, 84, 67, 105, 106, 56, 65, 32, 71, 98, 138, 119, 118, 136, 77, 137, 1143, 156, 1187, 1149, 1154, 354, 1249, 36, 1179
const module_1423 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  (webpackRequire(85), webpackRequire(84), webpackRequire(67), webpackRequire(105), webpackRequire(106));
  var vendorBundle = webpackRequire(56);
  webpackRequire(65);
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
  var vendorBundle2 = webpackRequire(32),
    vendorBundle3 = webpackRequire(71),
    vuescrollModule =
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
    defaultOf_m = webpackRequire.n(vuescrollModule),
    pageTabComponent = webpackRequire(1149),
    characterAndCampCMSAPI = webpackRequire(1154);
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
            Object(vendorBundle.a)(target2, key2, source[key2]);
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
  var characterPageOptions = {
      layout: "m/default",
      name: "m-cha",
      scrollToTop: !0,
      head: function () {
        var chaTitle = this.curActiveCha.sTitle,
          chaWordPlain = (this.curActiveCha.word || "").replace(/<br\s*\/?>/gi, " "),
          title = "".concat(chaTitle).concat(this.$getI18nWord("seoTitlePrefix"));
        return {
          title: title,
          meta: [
            {
              hid: "description",
              name: "description",
              content: "".concat(chaTitle, " -- ").concat(chaWordPlain),
            },
            {
              hid: "og:description",
              name: "og:description",
              content: "".concat(chaTitle, " -- ").concat(chaWordPlain),
            },
            {
              hid: "twitter:description",
              name: "twitter:description",
              content: "".concat(chaTitle, " -- ").concat(chaWordPlain),
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
          var characterListRef,
            campChannelId = this.activeCamp.channelId;
          return (
            (null === (characterListRef = this.characterList) || void 0 === characterListRef
              ? void 0
              : characterListRef.filter(function (character) {
                  return character.sChanId.includes("".concat(campChannelId));
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
          handler: function (activeCha) {
            var watchSelf = this;
            if ((this.updateAudioIns(activeCha), this.$refs.chaScrollRef)) {
              var scrollOffsetRem =
                  2.42 * this.curActiveChaIdx - 0.38 - 0.16 * Math.max(0, this.curActiveChaIdx - 1),
                remPx = this.$flex("rem");
              this.$refs.chaScrollRef.scrollTo({
                x: scrollOffsetRem * remPx,
              });
            }
            (this.$refs.chaSwiperRef && this.$refs.chaSwiperRef.swiper.slideTo(this.curActiveChaIdx),
              (this.subCvIdx = 0),
              "".concat(this.$route.query.id) !== "".concat(activeCha.iInfoId) &&
                this.$router.replace({
                  query: objectSpread2(
                    objectSpread2({}, this.$route.query),
                    {},
                    {
                      id: activeCha.iInfoId,
                    },
                  ),
                }),
              this.$nextTick(function () {
                var descScrollRefs;
                null !== (descScrollRefs = watchSelf.$refs.descScroll) &&
                  void 0 !== descScrollRefs &&
                  descScrollRefs[watchSelf.curActiveChaIdx] &&
                  (watchSelf.$refs.descScroll[watchSelf.curActiveChaIdx].refresh(),
                  watchSelf.$refs.descScroll[watchSelf.curActiveChaIdx].scrollTo(
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
      asyncData: function (nuxtContext) {
        nuxtContext.res;
        var redirect = nuxtContext.redirect,
          store = nuxtContext.store,
          queryId = nuxtContext.query.id;
        return Promise.all([
          characterAndCampCMSAPI.a.getCampList({
            data: {
              sLangKey: store.state.lang,
            },
          }),
          characterAndCampCMSAPI.a.getAllCharacter({
            data: {
              sLangKey: store.state.lang,
            },
          }),
        ]).then(function (responses) {
          var responsePair = Object(vendorBundle3.a)(responses, 2),
            campList = responsePair[0],
            characterRes = responsePair[1];
          (characterRes.list.length < 1 &&
            redirect({
              name: "m",
            }),
            store.commit("setCharacterCamps", campList));
          var allCharacters = characterRes.list,
            queryCharaIndex = allCharacters.findIndex(function (chara) {
              return chara.iInfoId === +queryId;
            }),
            charaIndex = -1 === queryCharaIndex ? 0 : queryCharaIndex,
            matchedCampIndex = campList.findIndex(function (camp) {
              var channelId = camp.channelId;
              return allCharacters[charaIndex].sChanId.includes("".concat(channelId));
            }),
            activeCampIndex = -1 === matchedCampIndex ? 0 : matchedCampIndex,
            activeCamp = campList[activeCampIndex],
            indexInCamp = (
              (null == allCharacters
                ? void 0
                : allCharacters.filter(function (campChara) {
                    return campChara.sChanId.includes("".concat(activeCamp.channelId));
                  })) || []
            ).findIndex(function (campCharaItem) {
              return campCharaItem.iInfoId === +queryId;
            }),
            initialChaIdx = -1 === indexInCamp ? 0 : indexInCamp,
            chaSwiperOpts = {
              effect: "fade",
              initialSlide: initialChaIdx,
              fadeEffect: {
                crossFade: !0,
              },
            };
          return {
            campList: campList.concat({
              isEmpty: !0,
            }),
            characterList: characterRes.list,
            activeIndex: activeCampIndex,
            curActiveChaIdx: initialChaIdx,
            chaSwiperOpts: chaSwiperOpts,
          };
        });
      },
      mounted: function () {
        var mountedSelf = this,
          routeChaIndex = this.chaList.findIndex(function (cha) {
            return cha.iInfoId === +mountedSelf.$route.query.id;
          });
        this.curActiveChaIdx = -1 === routeChaIndex ? 0 : routeChaIndex;
      },
      methods: {
        handleSwitchClick: function (step) {
          var nextChaIdx = this.curActiveChaIdx + step;
          nextChaIdx < 0 || nextChaIdx >= this.chaList.length || (this.curActiveChaIdx = nextChaIdx);
        },
        updateAudioIns: function (targetCha) {
          var audioSelf = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function updateAudioGenerator() {
              var cvRaw, cvList, audioModule, EventAudio, audioSrcList;
              return regeneratorRuntime.wrap(function (audioContext) {
                for (;;)
                  switch ((audioContext.prev = audioContext.next)) {
                    case 0:
                      if (((cvRaw = (targetCha || {}).cv), (cvList = void 0 === cvRaw ? [] : cvRaw).length)) {
                        audioContext.next = 3;
                        break;
                      }
                      return audioContext.abrupt("return");
                    case 3:
                      if (
                        (cvList.length <= 1 && (audioSelf.cvIdx = 0),
                        (audioModule = webpackRequire(354)),
                        (EventAudio = audioModule.eventAudio),
                        !audioSelf.audioInstance)
                      ) {
                        audioContext.next = 10;
                        break;
                      }
                      return ((audioContext.next = 8), audioSelf.audioInstance.stop());
                    case 8:
                      (audioSelf.audioInstance.unload(), (audioSelf.audioInstance = null));
                    case 10:
                      ((audioSrcList = cvList
                        .map(function (cvEntry) {
                          return cvEntry.audio;
                        })
                        .flat()),
                        (audioSelf.audioInstance = new EventAudio({
                          src: audioSrcList,
                          cache: !1,
                          preload: !0,
                          loop: !1,
                          autoplay: !1,
                          fade: [0, 0],
                          html5: !1,
                          onPlayed: function (isPlayed) {
                            ((audioSelf.isPlaying = isPlayed),
                              isPlayed ? audioSelf.playMicAni() : audioSelf.stopMicAni());
                          },
                          onEnd: audioSelf.switchSubCv,
                        })));
                    case 12:
                    case "end":
                      return audioContext.stop();
                  }
              }, updateAudioGenerator);
            }),
          )();
        },
        switchSubCv: function () {
          var subCvCount = this.curActiveCha.cv[this.cvIdx].audio.length;
          this.subCvIdx < subCvCount - 1 ? (this.subCvIdx += 1) : (this.subCvIdx = 0);
        },
        handleVoiceBtnClick: function () {
          if (this.audioInstance)
            if (0 !== this.curActiveCha.cv[this.cvIdx].audio.length) {
              if (this.isPlaying) return (this.audioInstance.stop(), void this.switchSubCv());
              var srcIndex = (1 === this.cvIdx ? this.curActiveCha.cv[0].audio.length : 0) + this.subCvIdx;
              (this.audioInstance.switchSrcIndex(srcIndex),
                this.audioInstance.play(),
                this.$trackButton("character_voice", "".concat(this.curActiveCha.iInfoId), {
                  cvLang: this.curActiveCha.cv[this.cvIdx].lang,
                  cvId: this.subCvIdx + 1,
                }));
            } else this.$mtoast(this.$getI18nWord("textSoon"));
        },
        handleLangSwitcherClick: function () {
          var langSwitchSelf = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function langSwitchGenerator() {
              return regeneratorRuntime.wrap(function (langSwitchContext) {
                for (;;)
                  switch ((langSwitchContext.prev = langSwitchContext.next)) {
                    case 0:
                      if (!langSwitchSelf.audioInstance) {
                        langSwitchContext.next = 3;
                        break;
                      }
                      return ((langSwitchContext.next = 3), langSwitchSelf.audioInstance.stop());
                    case 3:
                      langSwitchSelf.cvIdx = 0 === langSwitchSelf.cvIdx ? 1 : 0;
                    case 4:
                    case "end":
                      return langSwitchContext.stop();
                  }
              }, langSwitchGenerator);
            }),
          )();
        },
        handleDescScroll: function (scrollState) {
          this.descShadowOpacity = (1 - Math.max(0, scrollState.process - 0.9) / 0.1).toFixed(2);
        },
        handlePaginationItemClick: function (paginationIndex) {
          this.curActiveChaIdx = paginationIndex;
        },
        toggleCampSelection: function () {
          var campSelf = this;
          if (
            ((this.showCampSelection = !this.showCampSelection),
            this.$trackButton(this.showCampSelection ? "view_all_camp" : "all_camp_back", ""),
            (document.body.style.overflow = this.showCampSelection ? "hidden" : "auto"),
            this.showCampSelection)
          ) {
            var campTimeline = this.$gsap.timeline();
            (campTimeline.fromTo(
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
              campTimeline.fromTo(
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
              campTimeline.fromTo(
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
                    campSelf.$refs.campScroll.scrollTo(
                      {
                        y: 0,
                      },
                      0,
                    );
                  },
                },
                "-=0.05",
              ),
              campTimeline.fromTo(
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
        handleCampItemClick: function (campIndex) {
          (this.activeIndex !== campIndex && ((this.activeIndex = campIndex), (this.curActiveChaIdx = 0)),
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
    componentNormalizer = (webpackRequire(1249), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      characterPageOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "character",
          },
          [
            h("pageTab", {
              attrs: {
                "nav-num": 2,
                theme: vm.curActiveCha.themeColor,
              },
            }),
            vm._v(" "),
            h("div", {
              staticClass: "character-block",
              style: {
                background: vm.curActiveCha.themeColor,
              },
            }),
            vm._v(" "),
            h(
              "swiper",
              {
                ref: "chaSwiperRef",
                staticClass: "character-swiper",
                attrs: {
                  options: vm.chaSwiperOpts,
                },
                on: {
                  slideChange: vm.onChaSwiperChange,
                },
              },
              vm._l(vm.chaList, function (slideCha) {
                return h(
                  "swiper-slide",
                  {
                    key: slideCha.iInfoId,
                    staticClass: "character-swiper-slide",
                  },
                  [
                    h("img", {
                      key: slideCha.iInfoId,
                      staticClass: "character-cover",
                      attrs: {
                        src: slideCha.newCoverInnerM,
                      },
                    }),
                    vm._v(" "),
                    h("div", {
                      staticClass: "character-cover-mist",
                    }),
                    vm._v(" "),
                    h(
                      "div",
                      {
                        staticClass: "character-info",
                      },
                      [
                        h(
                          "div",
                          {
                            staticClass: "character-info-prop",
                          },
                          [
                            slideCha.propIcon1
                              ? h("img", {
                                  attrs: {
                                    src: slideCha.propIcon1,
                                    alt: "",
                                  },
                                })
                              : vm._e(),
                            vm._v(" "),
                            slideCha.propIcon2
                              ? h("img", {
                                  attrs: {
                                    src: slideCha.propIcon2,
                                    alt: "",
                                  },
                                })
                              : vm._e(),
                          ],
                        ),
                        vm._v(" "),
                        h(
                          "div",
                          {
                            staticClass: "character-info-name",
                          },
                          [
                            slideCha.levelIcon
                              ? h("i", {
                                  style: {
                                    backgroundImage: "url(".concat(slideCha.levelIcon, ")"),
                                  },
                                })
                              : vm._e(),
                            vm._v(" "),
                            h("span", [vm._v(vm._s(slideCha.name))]),
                          ],
                        ),
                        vm._v(" "),
                        slideCha.cv.length
                          ? h(
                              "div",
                              {
                                staticClass: "character-voice-player",
                              },
                              [
                                h(
                                  "div",
                                  {
                                    staticClass: "character-voice-btn",
                                    on: {
                                      click: vm.handleVoiceBtnClick,
                                    },
                                  },
                                  [
                                    h(
                                      "div",
                                      {
                                        staticClass: "character-voice-btn-inner",
                                      },
                                      [
                                        h("div", {
                                          staticClass: "character-voice-btn-inner-highlight",
                                        }),
                                      ],
                                    ),
                                  ],
                                ),
                                vm._v(" "),
                                h(
                                  "span",
                                  {
                                    staticClass: "character-voice-player-name",
                                  },
                                  [
                                    h("span", [vm._v("CV: ")]),
                                    vm._v(" "),
                                    h(
                                      "span",
                                      {
                                        staticClass: "character-voice-player-name-text",
                                      },
                                      [vm._v(vm._s(slideCha.cv[vm.cvIdx].name))],
                                    ),
                                  ],
                                ),
                                vm._v(" "),
                                slideCha.cv.length > 1
                                  ? h(
                                      "div",
                                      {
                                        staticClass: "character-voice-lang-switcher",
                                        class: "character-voice-lang-switcher__".concat(vm.cvIdx),
                                        on: {
                                          click: vm.handleLangSwitcherClick,
                                        },
                                      },
                                      [h("span", [vm._v(vm._s(slideCha.cv[vm.cvIdx].lang))])],
                                    )
                                  : vm._e(),
                              ],
                            )
                          : vm._e(),
                        vm._v(" "),
                        h(
                          "div",
                          {
                            staticClass: "character-info-desc-container",
                          },
                          [
                            h(
                              "vue-scroll",
                              {
                                ref: "descScroll",
                                refInFor: !0,
                                attrs: {
                                  ops: vm.scrollOpts,
                                },
                                on: {
                                  "handle-scroll": vm.handleDescScroll,
                                },
                              },
                              [
                                h("div", {
                                  staticClass: "character-info-desc",
                                  domProps: {
                                    innerHTML: vm._s(slideCha.intro),
                                  },
                                }),
                              ],
                            ),
                            vm._v(" "),
                            h("div", {
                              staticClass: "character-info-desc-cover",
                              style: {
                                opacity: vm.descShadowOpacity,
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
            vm._v(" "),
            h(
              "transition",
              {
                attrs: {
                  name: "fadeIn",
                },
              },
              [
                h("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: vm.curActiveChaIdx > 0,
                      expression: "curActiveChaIdx > 0",
                    },
                  ],
                  staticClass: "switch-button switch-button-prev",
                  on: {
                    click: function (prevClickEvent) {
                      return vm.handleSwitchClick(-1);
                    },
                  },
                }),
              ],
            ),
            vm._v(" "),
            h(
              "transition",
              {
                attrs: {
                  name: "fadeIn",
                },
              },
              [
                h("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: vm.curActiveChaIdx < vm.chaList.length - 1,
                      expression: "curActiveChaIdx < chaList.length - 1",
                    },
                  ],
                  staticClass: "switch-button switch-button-next",
                  on: {
                    click: function (nextClickEvent) {
                      return vm.handleSwitchClick(1);
                    },
                  },
                }),
              ],
            ),
            vm._v(" "),
            h(
              "div",
              {
                staticClass: "character-pagination-container",
              },
              [
                h(
                  "vue-scroll",
                  {
                    ref: "chaScrollRef",
                    attrs: {
                      ops: vm.chaScrollOpts,
                    },
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "character-pagination",
                        style: {
                          width: "".concat(2.42 * vm.chaList.length, "rem"),
                        },
                      },
                      vm._l(vm.chaList, function (paginationCha, paginationIdx) {
                        return h(
                          "div",
                          {
                            key: paginationCha.iInfoId,
                            staticClass: "character-pagination-item",
                            class: {
                              "character-pagination-item-active": paginationIdx === vm.curActiveChaIdx,
                            },
                            on: {
                              click: function (paginationClickEvent) {
                                return vm.handlePaginationItemClick(paginationIdx);
                              },
                            },
                          },
                          [
                            h("div", {
                              staticClass: "active-pagination-item-bg",
                              style: {
                                backgroundImage: "url(".concat(paginationCha.paginationItemBg, ")"),
                              },
                            }),
                            vm._v(" "),
                            h("img", {
                              attrs: {
                                src: paginationCha.newNav,
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
            vm._v(" "),
            h("div", {
              staticClass: "character-camp-mist",
            }),
            vm._v(" "),
            h(
              "div",
              {
                key: vm.activeCamp.iInfoId,
                staticClass: "character-camp",
                style: {
                  backgroundImage: "linear-gradient(45deg, "
                    .concat(vm.activeCamp.gradientColorMob[0], " 0%, ")
                    .concat(vm.activeCamp.gradientColorMob[1], " 100%)"),
                },
                on: {
                  click: vm.toggleCampSelection,
                },
              },
              [
                h(
                  "div",
                  {
                    staticClass: "character-camp-inner",
                  },
                  [
                    h("img", {
                      staticClass: "character-camp-icon",
                      attrs: {
                        src: vm.activeCamp.newIcon,
                        alt: "",
                      },
                    }),
                    vm._v(" "),
                    h("span", {
                      domProps: {
                        innerHTML: vm._s(vm.activeCamp.name),
                      },
                    }),
                    vm._v(" "),
                    h("i"),
                  ],
                ),
              ],
            ),
            vm._v(" "),
            h(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: vm.showCampSelection,
                    expression: "showCampSelection",
                  },
                ],
                staticClass: "character-camp-selection",
              },
              [
                h(
                  "div",
                  {
                    staticClass: "character-camp-selection-bg",
                  },
                  [
                    h(
                      "vue-scroll",
                      {
                        ref: "campScroll",
                        attrs: {
                          ops: vm.campScrollOpts,
                        },
                      },
                      [
                        h(
                          "div",
                          {
                            staticClass: "character-camp-selection-content",
                          },
                          vm._l(vm.campList, function (campItem, campItemIndex) {
                            return h(
                              "div",
                              {
                                key: campItem.iInfoId,
                                staticClass: "character-camp-item",
                                class: {
                                  "character-camp-item-empty": campItem.isEmpty,
                                },
                                on: {
                                  click: function (campClickEvent) {
                                    return vm.handleCampItemClick(campItemIndex);
                                  },
                                },
                              },
                              [
                                h("div", {
                                  staticClass: "character-camp-item-icon",
                                  style: {
                                    backgroundImage: "url(".concat(
                                      campItem.isEmpty ? webpackRequire(1179) : campItem.newIcon,
                                      ")",
                                    ),
                                  },
                                }),
                                vm._v(" "),
                                h("div", {
                                  staticClass: "character-camp-item-name",
                                  domProps: {
                                    innerHTML: vm._s(campItem.name || "EMPTY"),
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
                vm._v(" "),
                vm._m(0),
                vm._v(" "),
                h("div", {
                  staticClass: "character-camp-selection-header",
                }),
                vm._v(" "),
                h(
                  "div",
                  {
                    staticClass: "character-camp-selection-back",
                    on: {
                      click: vm.toggleCampSelection,
                    },
                  },
                  [h("span", [vm._v(vm._s(vm.$getI18nWord("textBack")))]), vm._v(" "), h("i")],
                ),
              ],
            ),
            vm._v(" "),
            h(
              "div",
              {
                staticClass: "character-detail-links",
              },
              vm._l(vm.characterList, function (detailLinkCha) {
                return h(
                  "nuxt-link",
                  {
                    key: detailLinkCha.iInfoId,
                    staticClass: "character-detail-link",
                    attrs: {
                      to: {
                        name: "m-lang-character",
                        query: objectSpread(
                          objectSpread({}, vm.$router.query),
                          {},
                          {
                            id: detailLinkCha.iInfoId,
                          },
                        ),
                      },
                      "no-prefetch": "",
                    },
                  },
                  [
                    vm._v(
                      "\n      " +
                        vm._s("".concat(detailLinkCha.sTitle).concat(vm.$getI18nWord("seoTitlePrefix"))) +
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
          var staticH = this._self._c;
          return staticH(
            "div",
            {
              staticClass: "character-camp-selection-cover-container",
            },
            [
              staticH("div", {
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
