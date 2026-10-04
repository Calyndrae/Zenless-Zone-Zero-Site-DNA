/**
 * character — readable reconstruction of webpack module 1439 (chunk 3f59e77.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/3f59e77.js
 *
 * Nuxt page component `character` for the desktop character route `lang-character` (`scrollToTop`). `asyncData` loads the camp list (`getCampList`, channel `CHANNEL_ID_CONFIG.CHARACTER.CAMP`) and all characters (`getAllCharacter`) from the character API (module 1154), redirects to `main` when there are none, commits `setCharacterCamps`, pads `renderCampList` to a multiple of 4 with empty camps, and derives `activeIndex`, `chaList`, `curActiveCha`/`curActiveChaIdx` from `query.id` plus a lazy fade `chaSwiperOption`; `head()` builds title and description/og/twitter meta from the active character's `sTitle` and `word`. It renders the desktop `pageTab` (nav-num 2, themed), a client-only fade vue-awesome-swiper (ref `chaSwiper`) of lazy `character-cover` slides with `character-info` (level icon, name, `Mont-Heavy` English name scaled by `updateEnNameScale`, a `character-voice-player`, prop icons, `character-info-word` and a `vue-scroll` (vuescroll) intro), a 3-per-view `cha-pagination-swiper` with arrow buttons, a vertical looped `side-camp-swiper` whose sticky position/height `updateSideCampStyle` recomputes on window `resize`/`scroll`, a `character-camp-selection` overlay (`selection__*`, animated by a `$gsap` timeline) and hidden SEO `character-detail-link` nuxt-links. Voice playback uses `eventAudio` from module 354 with a looping `$gsap` `--progress` mic animation, `loadEnFont` loads the `Mont-Heavy` FontFace from modules 558/559, `preloadImages` calls the swiper `lazy.loadInSlide`, and the `curActiveCha` watcher syncs the swiper and `$router.replace`s `query.id`; clicks are tracked with `$trackButton` (`character_voice`, `camp_change`, `view_all_camp`/`all_camp_back`).
 *
 * Exports (minified key → meaning):
 *   default → the `character` desktop character showcase page Vue component (route lang-character, compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1439 from 3f59e77.js
// deps: 85, 84, 67, 105, 106, 56, 65, 32, 71, 98, 138, 119, 118, 1143, 136, 77, 137, 1327, 156, 1187, 1154, 1126, 347, 354, 558, 559, 1329, 36, 1179
const module_1439 = function (webpackModule, webpackExports, webpackRequire) {
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
      webpackRequire(1143),
      webpackRequire(136),
      webpackRequire(77),
      webpackRequire(137),
      webpackRequire(1327),
      webpackRequire(156),
      webpackRequire(1187)),
    defaultOf_d = webpackRequire.n(vuescrollModule),
    characterAndCampCMSAPI = webpackRequire(1154),
    pageTabComponent = webpackRequire(1126),
    backTop = webpackRequire(347);
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
      scrollToTop: !0,
      name: "character",
      components: {
        pageTab: pageTabComponent.a,
        backTop: backTop.a,
        VueScroll: defaultOf_d.a,
      },
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
      data: function () {
        var dataSelf = this,
          remPx = this.$flex("rem");
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
                dataSelf.onRoleClick(-1);
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
            spaceBetween: 0.1 * remPx,
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
          var characterListRef,
            activeCamp = this.campList[this.activeIndex];
          this.chaList =
            (null === (characterListRef = this.characterList) || void 0 === characterListRef
              ? void 0
              : characterListRef.filter(function (character) {
                  return character.sChanId.includes("".concat(activeCamp.channelId));
                })) || [];
        },
        curActiveCha: {
          handler: function (activeCha) {
            var chaSwiperRef, descScrollRefs;
            if (
              (this.updateAudioIns(activeCha),
              (this.subCvIdx = 0),
              null !== (chaSwiperRef = this.$refs.chaSwiper) &&
                void 0 !== chaSwiperRef &&
                chaSwiperRef.swiper)
            ) {
              var activeChaId = activeCha.iInfoId,
                slideIndex = this.characterList.findIndex(function (listCharacter) {
                  return listCharacter.iInfoId === activeChaId;
                });
              this.$refs.chaSwiper.swiper.slideTo(slideIndex);
            }
            (null !== (descScrollRefs = this.$refs.descScroll) &&
              void 0 !== descScrollRefs &&
              descScrollRefs[this.curActiveChaIdx] &&
              (this.$refs.descScroll[this.curActiveChaIdx].refresh(),
              this.$refs.descScroll[this.curActiveChaIdx].scrollTo(
                {
                  y: 0,
                },
                0,
              )),
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
            var chaListSelf = this;
            ((this.curActiveCha = this.chaList[this.curActiveChaIdx]),
              this.preloadImages(),
              this.$nextTick(function () {
                chaListSelf.onSwiperSlideChange();
              }));
          },
        },
        isEnFontLoad: function () {
          this.updateEnNameScale();
        },
      },
      asyncData: function (nuxtContext) {
        nuxtContext.res;
        var redirect = nuxtContext.redirect,
          store = nuxtContext.store,
          queryId = nuxtContext.query.id;
        return (
          console.log("character", queryId),
          Promise.all([
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
                name: "main",
              }),
              store.commit("setCharacterCamps", campList));
            var emptyCampCount = 4 - (campList.length % 4) || 4,
              renderCampList = campList.concat(
                new Array(emptyCampCount).fill({
                  isEmpty: !0,
                }),
              ),
              allCharacters = characterRes.list,
              queryCharaIndex = allCharacters.findIndex(function (chara) {
                return chara.iInfoId === +queryId;
              }),
              charaIndex = -1 === queryCharaIndex ? 0 : queryCharaIndex,
              matchedCampIndex = campList.findIndex(function (camp) {
                var channelId = camp.channelId;
                return allCharacters[charaIndex].sChanId.includes("".concat(channelId));
              }),
              activeCampIndex = -1 === matchedCampIndex ? 0 : matchedCampIndex,
              initialCamp = campList[activeCampIndex],
              campCharaList =
                (null == allCharacters
                  ? void 0
                  : allCharacters.filter(function (campChara) {
                      return campChara.sChanId.includes("".concat(initialCamp.channelId));
                    })) || [],
              indexInCamp = campCharaList.findIndex(function (campCharaItem) {
                return campCharaItem.iInfoId === +queryId;
              }),
              initialChaIdx = -1 === indexInCamp ? 0 : indexInCamp,
              initialCha = campCharaList[initialChaIdx];
            return {
              renderCampList: renderCampList,
              campList: campList,
              chaList: campCharaList,
              characterList: allCharacters,
              activeIndex: activeCampIndex,
              curActiveCha: initialCha,
              curActiveChaIdx: initialChaIdx,
              chaSwiperOption: {
                effect: "fade",
                lazy: !0,
                initialSlide: charaIndex,
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
        var mountedSelf = this;
        (this.$nextTick(function () {
          var paginationSwiperRef, sideCampSwiperRef;
          ((mountedSelf.paginationSwiper =
            null === (paginationSwiperRef = mountedSelf.$refs.paginationSwiper) ||
            void 0 === paginationSwiperRef
              ? void 0
              : paginationSwiperRef.swiper),
            (mountedSelf.sideCampSwiper =
              null === (sideCampSwiperRef = mountedSelf.$refs.sideCampSwiper) || void 0 === sideCampSwiperRef
                ? void 0
                : sideCampSwiperRef.swiper),
            mountedSelf.updateSideCampStyle(),
            mountedSelf.onSwiperSlideChange(),
            mountedSelf.preloadImages(),
            mountedSelf.sideCampSwiper && mountedSelf.sideCampSwiper.slideToLoop(mountedSelf.activeIndex, 0),
            mountedSelf.paginationSwiper &&
              mountedSelf.paginationSwiper.slideTo(mountedSelf.curActiveChaIdx, 0));
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
          var rawName = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return rawName.replace(/<br\s*\/?>/gi, " ");
        },
        handleCampChange: function () {
          if (this.sideCampSwiper && this.paginationSwiper) {
            var sideRealIndex = this.sideCampSwiper.realIndex;
            this.activeIndex !== sideRealIndex &&
              (sideRealIndex > this.campList.length ||
                ((this.activeIndex = sideRealIndex),
                (this.curActiveChaIdx = 0),
                this.$trackButton("camp_change", this.campList[this.activeIndex].iInfoId, {
                  type: 1,
                }),
                this.paginationSwiper.slideTo(this.curActiveChaIdx, 0)));
          }
        },
        handlePaginationArrowClick: function (direction) {
          var paginationRealIndex = this.paginationSwiper.realIndex;
          this.paginationSwiper.slideTo(paginationRealIndex + 3 * direction);
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
                        langSwitchContext.next = 4;
                        break;
                      }
                      return ((langSwitchContext.next = 3), langSwitchSelf.audioInstance.stop());
                    case 3:
                      langSwitchSelf.stopMicAni();
                    case 4:
                      langSwitchSelf.cvIdx = 0 === langSwitchSelf.cvIdx ? 1 : 0;
                    case 5:
                    case "end":
                      return langSwitchContext.stop();
                  }
              }, langSwitchGenerator);
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
                        audioContext.next = 11;
                        break;
                      }
                      return ((audioContext.next = 8), audioSelf.audioInstance.stop());
                    case 8:
                      (audioSelf.audioInstance.unload(),
                        audioSelf.stopMicAni(),
                        (audioSelf.audioInstance = null));
                    case 11:
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
                    case 13:
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
        toggleCampSelection: function () {
          var campSelf = this;
          if (
            ((this.showCampSelection = !this.showCampSelection),
            this.$trackButton(this.showCampSelection ? "view_all_camp" : "all_camp_back", ""),
            this.showCampSelection)
          ) {
            var campTimeline = this.$gsap.timeline();
            (campTimeline.fromTo(
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
              campTimeline.fromTo(
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
              campTimeline.fromTo(
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
        onRoleClick: function (roleIndex) {
          this.curActiveChaIdx = -1 === roleIndex ? this.paginationSwiper.clickedIndex : roleIndex;
        },
        onCampClick: function (campIndex) {
          (campIndex !== this.activeIndex &&
            ((this.activeIndex = campIndex),
            (this.curActiveChaIdx = 0),
            this.paginationSwiper.slideTo(this.curActiveChaIdx, 0),
            this.sideCampSwiper.slideToLoop(campIndex, 0)),
            this.$trackButton("camp_change", this.campList[campIndex].iInfoId, {
              type: 2,
            }),
            (this.showCampSelection = !1));
        },
        updateSideCampStyle: function () {
          var remSize = this.$flex("rem"),
            maxSideHeight = 12.97 * remSize,
            sideHeight = Math.min(document.documentElement.clientHeight - 1 * remSize, maxSideHeight),
            stickyOverflow = document.documentElement.scrollTop + sideHeight - maxSideHeight;
          ((this.sideCampStyle.height = "".concat(sideHeight, "px")),
            stickyOverflow <= 0
              ? ((this.sideCampStyle.bottom = "unset"),
                (this.sideCampStyle.top = "1rem"),
                (this.sideCampStyle.position = "fixed"))
              : ((this.sideCampStyle.bottom = 0),
                (this.sideCampStyle.top = "unset"),
                (this.sideCampStyle.position = "absolute")));
        },
        updateEnNameScale: function () {
          var enNameSelf = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function enNameScaleGenerator() {
              var remUnit, enNameClass, enNameEl, enNameScale;
              return regeneratorRuntime.wrap(function (enNameContext) {
                for (;;)
                  switch ((enNameContext.prev = enNameContext.next)) {
                    case 0:
                      if ("en-us" !== enNameSelf.lang) {
                        enNameContext.next = 2;
                        break;
                      }
                      return enNameContext.abrupt("return");
                    case 2:
                      if (enNameSelf.isEnFontLoad) {
                        enNameContext.next = 4;
                        break;
                      }
                      return enNameContext.abrupt("return");
                    case 4:
                      return ((enNameContext.next = 6), enNameSelf.$nextTick());
                    case 6:
                      if (enNameSelf.curActiveCha.enNameScale) {
                        enNameContext.next = 14;
                        break;
                      }
                      if (
                        ((remUnit = enNameSelf.$flex("rem")),
                        (enNameClass = "character-info-name-en-".concat(enNameSelf.curActiveCha.iInfoId)),
                        (enNameEl = document.querySelector(".".concat(enNameClass))))
                      ) {
                        enNameContext.next = 12;
                        break;
                      }
                      return enNameContext.abrupt("return");
                    case 12:
                      ((enNameScale = Math.min((10 * remUnit) / enNameEl.clientWidth, 1)),
                        (enNameSelf.curActiveCha.enNameScale = enNameScale));
                    case 14:
                    case "end":
                      return enNameContext.stop();
                  }
              }, enNameScaleGenerator);
            }),
          )();
        },
        loadEnFont: function () {
          var fontSelf = this;
          window.FontFace
            ? new FontFace(
                "Mont-Heavy",
                "url(".concat(webpackRequire(558), "), url(").concat(webpackRequire(559), ")"),
              )
                .load()
                .finally(function () {
                  fontSelf.isEnFontLoad = !0;
                })
            : (this.isEnFontLoad = !0);
        },
        preloadImages: function () {
          var preloadSelf = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function preloadGenerator() {
              var lazySwiperRef;
              return regeneratorRuntime.wrap(function (preloadContext) {
                for (;;)
                  switch ((preloadContext.prev = preloadContext.next)) {
                    case 0:
                      if (
                        null !== (lazySwiperRef = preloadSelf.$refs.chaSwiper) &&
                        void 0 !== lazySwiperRef &&
                        lazySwiperRef.swiper
                      ) {
                        preloadContext.next = 2;
                        break;
                      }
                      return preloadContext.abrupt("return");
                    case 2:
                      preloadSelf.chaList.forEach(function (preloadCha) {
                        var preloadChaId = preloadCha.iInfoId,
                          lazySlideIndex = preloadSelf.characterList.findIndex(function (lookupCha) {
                            return lookupCha.iInfoId === preloadChaId;
                          });
                        preloadSelf.$refs.chaSwiper.swiper.lazy.loadInSlide(lazySlideIndex);
                      });
                    case 3:
                    case "end":
                      return preloadContext.stop();
                  }
              }, preloadGenerator);
            }),
          )();
        },
      },
    },
    componentOptions = characterPageOptions,
    componentNormalizer = (webpackRequire(1329), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      componentOptions,
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
            h(
              "client-only",
              [
                h(
                  "swiper",
                  {
                    ref: "chaSwiper",
                    staticClass: "cha-swiper",
                    attrs: {
                      options: vm.chaSwiperOption,
                    },
                  },
                  vm._l(vm.characterList, function (slideCha) {
                    return h(
                      "swiper-slide",
                      {
                        key: slideCha.iInfoId,
                        staticClass: "cha-swiper-slide swiper-no-swiping",
                      },
                      [
                        h("div", {
                          staticClass: "character-cover swiper-lazy",
                          attrs: {
                            "data-background": slideCha.newCoverInner,
                          },
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
                                staticClass: "character-info-main",
                              },
                              [
                                h(
                                  "div",
                                  {
                                    staticClass: "character-info-row",
                                  },
                                  [
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
                                        vm._v(" "),
                                        "en-us" !== vm.lang
                                          ? h(
                                              "span",
                                              {
                                                staticClass: "character-info-name-en font-mont-heavy",
                                                class: "character-info-name-en-".concat(slideCha.iInfoId),
                                                style:
                                                  0 === slideCha.enNameScale
                                                    ? {
                                                        visibility: "hidden",
                                                      }
                                                    : {
                                                        transform: "scale(".concat(slideCha.enNameScale, ")"),
                                                      },
                                              },
                                              [vm._v(vm._s(vm.formatName(slideCha.nameEN)))],
                                            )
                                          : vm._e(),
                                      ],
                                    ),
                                  ],
                                ),
                                vm._v(" "),
                                h(
                                  "div",
                                  {
                                    staticClass: "character-info-row",
                                  },
                                  [
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
                                        key: "prop-".concat(slideCha.iInfoId),
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
                                  ],
                                ),
                              ],
                            ),
                            vm._v(" "),
                            h("div", {
                              staticClass: "character-info-word",
                              domProps: {
                                innerHTML: vm._s(slideCha.word),
                              },
                            }),
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
                                    key: "desc-scroll-".concat(slideCha.iInfoId),
                                    ref: "descScroll",
                                    refInFor: !0,
                                    attrs: {
                                      ops: vm.scrollOpts,
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
            vm._v(" "),
            h(
              "div",
              {
                staticClass: "cha-pagination-multi",
              },
              [
                h("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: vm.showLeftArrow,
                      expression: "showLeftArrow",
                    },
                  ],
                  staticClass: "cha-pagination-arrow cha-pagination-arrow-left",
                  on: {
                    click: function (leftArrowClickEvent) {
                      return vm.handlePaginationArrowClick(-1);
                    },
                  },
                }),
                vm._v(" "),
                h(
                  "client-only",
                  [
                    h(
                      "swiper",
                      {
                        ref: "paginationSwiper",
                        staticClass: "cha-pagination-swiper",
                        attrs: {
                          options: vm.paginationSwiperOption,
                        },
                      },
                      vm._l(vm.chaList, function (paginationCha, paginationIdx) {
                        return h(
                          "swiper-slide",
                          {
                            key: "".concat(paginationCha.iInfoId, "-").concat(paginationIdx),
                            staticClass: "cha-pagination-item",
                            class: {
                              "cha-pagination-item-active": paginationIdx === vm.curActiveChaIdx,
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
                      1,
                    ),
                  ],
                  1,
                ),
                vm._v(" "),
                h("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: vm.showRightArrow,
                      expression: "showRightArrow",
                    },
                  ],
                  staticClass: "cha-pagination-arrow cha-pagination-arrow-right",
                  on: {
                    click: function (rightArrowClickEvent) {
                      return vm.handlePaginationArrowClick(1);
                    },
                  },
                }),
              ],
              1,
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
                h("div", {
                  staticClass: "selection__bg",
                }),
                vm._v(" "),
                h("div", {
                  staticClass: "selection__header",
                }),
                vm._v(" "),
                h(
                  "div",
                  {
                    staticClass: "selection__wrap",
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
                            staticClass: "selection__container",
                          },
                          [
                            h(
                              "div",
                              {
                                staticClass: "selection__content",
                              },
                              vm._l(vm.renderCampList, function (renderCamp, renderCampIndex) {
                                return h(
                                  "div",
                                  {
                                    key: renderCamp.iInfoId,
                                    staticClass: "selection__content-item",
                                    class: {
                                      "selection__content-item__empty": renderCamp.isEmpty,
                                    },
                                    on: {
                                      click: function (campClickEvent) {
                                        return vm.onCampClick(renderCampIndex);
                                      },
                                    },
                                  },
                                  [
                                    h("img", {
                                      staticClass: "selection__content-item-icon",
                                      attrs: {
                                        src: renderCamp.isEmpty ? webpackRequire(1179) : renderCamp.newIcon,
                                        alt: "",
                                      },
                                    }),
                                    vm._v(" "),
                                    h(
                                      "div",
                                      {
                                        staticClass: "selection__content-item-name",
                                      },
                                      [vm._v(vm._s(renderCamp.sTitle || "EMPTY"))],
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
                vm._v(" "),
                h(
                  "div",
                  {
                    staticClass: "selection-back back-btn",
                    on: {
                      click: vm.toggleCampSelection,
                    },
                  },
                  [
                    h("div", {
                      staticClass: "backArrow",
                    }),
                    vm._v(" "),
                    h(
                      "div",
                      {
                        staticClass: "backText",
                      },
                      [vm._v(vm._s(vm.$getI18nWord("textBack")))],
                    ),
                    vm._v(" "),
                    h(
                      "div",
                      {
                        staticClass: "backSubtext",
                      },
                      [vm._v("back")],
                    ),
                  ],
                ),
                vm._v(" "),
                vm._m(0),
              ],
            ),
            vm._v(" "),
            h("div", {
              staticClass: "side-camp-selection-shadow",
              class: vm.showCampSelection && "side-camp-selection-shadow-hide",
            }),
            vm._v(" "),
            h(
              "div",
              {
                staticClass: "side-character-camp-selection",
                class: vm.showCampSelection && "side-character-camp-selection-hide",
                style: vm.sideCampStyle,
              },
              [
                h(
                  "client-only",
                  [
                    h(
                      "swiper",
                      {
                        ref: "sideCampSwiper",
                        staticClass: "side-camp-swiper",
                        attrs: {
                          options: vm.sideCampSwiperOption,
                        },
                      },
                      vm._l(vm.campList, function (sideCamp) {
                        return h(
                          "swiper-slide",
                          {
                            key: sideCamp.iInfoId,
                            staticClass: "side-camp-item",
                          },
                          [
                            h("div", {
                              staticClass: "side-camp-icon",
                              style: {
                                backgroundImage: "url('".concat(sideCamp.newIcon, "')"),
                              },
                            }),
                            vm._v(" "),
                            h(
                              "div",
                              {
                                staticClass: "side-camp-name-container",
                              },
                              [
                                h(
                                  "div",
                                  {
                                    staticClass: "side-camp-name",
                                  },
                                  [vm._v(vm._s(sideCamp.sTitle))],
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
                vm._v(" "),
                h(
                  "div",
                  {
                    staticClass: "side-camp-btm",
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "side-camp-expand-btn",
                        on: {
                          click: vm.toggleCampSelection,
                        },
                      },
                      [vm._v(vm._s(vm.$getI18nWord("more_camp")))],
                    ),
                  ],
                ),
              ],
              1,
            ),
            vm._v(" "),
            h("div", {
              staticClass: "character-color-block",
              style: {
                background: vm.curActiveCha.themeColor,
              },
            }),
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
                        name: "lang-character",
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
              staticClass: "selection__shadow-container",
            },
            [
              staticH("div", {
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
