/**
 * world — readable reconstruction of webpack module 1441 (chunk 1e69d9d.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/1e69d9d.js
 *
 * Nuxt page component `world` for the desktop world-archive route `lang-world`. `asyncData` loads entries via the world API (module 1152) `getWorldList` (channel `CHANNEL_ID_CONFIG.WORLD`) with `sLangKey: store.state.lang`, redirects to `lang-main` when the list is empty, and returns `worldList` plus the `activeIndex` matching `params.worldId`; `mounted` runs `initSwiper` (re-mounts the swiper at `initialSlide = activeIndex` and starts `isInitAnim`). It renders the desktop `pageTab` (nav-num 5) and a client-only looped vue-awesome-swiper coverflow (ref `worldSwiper`, no touch move, speed 800) whose `progress` handler applies `translateX(...rem) scale(...)`/opacity per slide, `transitionStart` re-stacks z-indexes when `dir` is `next`, `slideChange` stores `activeIndex`, and `click` on the active slide calls `gotoDetail`; each `world__slide` shows a cover with `name-en`/`name` (`data-lang`, hidden when `isEN`), `cover-summary` and `world__slide-tape`, plus `world__navigation` prev/next buttons that set `dir` and track `file_next`. `gotoDetail` plays the `isClickAnim` animation, waits via `asyncTimeout`, routes to `lang-world-id` and tracks `file_card` via `$trackButton`; `head()` uses i18n `nav5` + `seoTitlePrefix`.
 *
 * Exports (minified key → meaning):
 *   default → the `world` desktop world-archive carousel page Vue component (route lang-world, compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1441 from 1e69d9d.js
// deps: 65, 32, 98, 1143, 77, 1152, 1126, 1405, 36
const module_1441 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  webpackRequire(65);
  var vendorBundle = webpackRequire(32),
    worldApi = (webpackRequire(98), webpackRequire(1143), webpackRequire(77), webpackRequire(1152)),
    worldPageOptions = {
      name: "world",
      components: {
        pageTab: webpackRequire(1126).a,
      },
      data: function () {
        var self = this,
          selfForTransitions = this;
        return {
          dir: "",
          swiperVisible: !0,
          swiperOption: {
            slidesPerView: "auto",
            watchSlidesProgress: !0,
            centeredSlides: !0,
            speed: 800,
            initialSlide: 0,
            loop: !0,
            allowTouchMove: !1,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            on: {
              click: function () {
                var swiperInstance = self.swiper,
                  realIndex = swiperInstance.realIndex,
                  clickedSlide = swiperInstance.clickedSlide;
                clickedSlide &&
                  clickedSlide.className.indexOf("swiper-slide-active") > -1 &&
                  self.gotoDetail(self.worldList[realIndex], realIndex);
              },
              progress: function () {
                for (var slideIndex = 0; slideIndex < this.slides.length; slideIndex++) {
                  var slideEl = this.slides.eq(slideIndex),
                    slideProgress = this.slides[slideIndex].progress,
                    offsetFactor = 0;
                  Math.round(Math.abs(slideProgress)) > 1 &&
                    (offsetFactor = 0.3 * (Math.abs(slideProgress) - 1) + 1);
                  var translateXRem = "".concat(slideProgress * offsetFactor * 5.32, "rem"),
                    slideScale = 1 - Math.abs(slideProgress) / 3.24;
                  (slideEl.transform("translateX(".concat(translateXRem, ") scale(").concat(slideScale, ")")),
                    slideEl.css("opacity", 1),
                    Math.round(Math.abs(slideProgress)) > 1 && slideEl.css("opacity", 0));
                }
              },
              transitionStart: function () {
                for (
                  var currentActiveIndex = this.activeIndex, resetIndex = 0;
                  resetIndex < this.slides.length;
                  resetIndex++
                ) {
                  this.slides.eq(resetIndex).css("zIndex", 2);
                }
                if ("next" === selfForTransitions.dir) {
                  var previousSlide = this.slides.eq(currentActiveIndex - 1),
                    activeSlide = this.slides.eq(currentActiveIndex);
                  (previousSlide.css("zIndex", 95), activeSlide.css("zIndex", 99));
                }
              },
              slideChange: function () {
                self.activeIndex = self.swiper.realIndex;
              },
              setTransition: function (transitionDuration) {
                for (
                  var transitionSlideIndex = 0;
                  transitionSlideIndex < this.slides.length;
                  transitionSlideIndex++
                ) {
                  this.slides.eq(transitionSlideIndex).transition(transitionDuration);
                }
              },
            },
          },
          isInitAnim: !1,
          isHoverAnim: !1,
          isClickAnim: !1,
        };
      },
      head: function () {
        return {
          title: "".concat(this.$getI18nWord("nav5")).concat(this.$getI18nWord("seoTitlePrefix")),
        };
      },
      computed: {
        swiper: function () {
          return this.$refs.worldSwiper.swiper;
        },
        isEN: function () {
          return "en-us" === this.$store.state.lang;
        },
      },
      asyncData: function (nuxtContext) {
        var store = nuxtContext.store,
          redirect = (nuxtContext.res, nuxtContext.redirect),
          worldId = nuxtContext.params.worldId;
        return worldApi.a
          .getWorldList({
            data: {
              sLangKey: store.state.lang,
            },
          })
          .then(function (worldListRes) {
            worldListRes.list.length < 1 &&
              redirect({
                name: "lang-main",
              });
            var matchedIndex = worldListRes.list.findIndex(function (worldEntry) {
              return worldEntry.iInfoId === worldId;
            });
            return {
              worldList: worldListRes.list,
              activeIndex: matchedIndex < 0 ? 0 : matchedIndex,
            };
          });
      },
      mounted: function () {
        this.initSwiper();
      },
      methods: {
        asyncTimeout: function (delayMs) {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve();
            }, delayMs);
          });
        },
        initSwiper: function () {
          var initSelf = this;
          ((this.swiperVisible = !1),
            (this.swiperOption.initialSlide = this.activeIndex),
            this.$nextTick(function () {
              ((initSelf.swiperVisible = !0), (initSelf.isInitAnim = !0));
            }));
        },
        gotoDetail: function (worldItem, itemIndex) {
          var detailSelf = this;
          return Object(vendorBundle.a)(
            regeneratorRuntime.mark(function gotoDetailGenerator() {
              return regeneratorRuntime.wrap(function (context) {
                for (;;)
                  switch ((context.prev = context.next)) {
                    case 0:
                      if (itemIndex === detailSelf.activeIndex) {
                        context.next = 2;
                        break;
                      }
                      return context.abrupt("return");
                    case 2:
                      return (
                        (detailSelf.isClickAnim = !0),
                        (context.next = 5),
                        detailSelf.asyncTimeout(detailSelf.isHoverAnim ? 600 : 1e3)
                      );
                    case 5:
                      (detailSelf.$router.push({
                        name: "lang-world-id",
                        params: {
                          id: worldItem.iInfoId,
                        },
                      }),
                        detailSelf.$trackButton("file_card", "".concat(worldItem.iInfoId)));
                    case 7:
                    case "end":
                      return context.stop();
                  }
              }, gotoDetailGenerator);
            }),
          )();
        },
        handleNavigatorUpload: function (direction) {
          ((this.dir = direction), this.$trackButton("file_next", ""));
        },
      },
    },
    componentNormalizer = (webpackRequire(1405), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      worldPageOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "world",
          },
          [
            h(
              "div",
              {
                staticClass: "world-container",
              },
              [
                h("pageTab", {
                  attrs: {
                    "nav-num": 5,
                  },
                }),
                vm._v(" "),
                h(
                  "div",
                  {
                    staticClass: "world-inner",
                  },
                  [
                    h(
                      "client-only",
                      [
                        vm.swiperVisible
                          ? h(
                              "swiper",
                              {
                                ref: "worldSwiper",
                                staticClass: "world__swiper",
                                class: {
                                  isClickAnim: vm.isClickAnim,
                                },
                                attrs: {
                                  options: vm.swiperOption,
                                },
                              },
                              vm._l(vm.worldList, function (world, worldIndex) {
                                return h(
                                  "swiper-slide",
                                  {
                                    key: world.id,
                                    staticClass: "world__slide",
                                    class: {
                                      "swiper-slide-active": vm.activeIndex === worldIndex,
                                      isInitAnim: vm.isInitAnim,
                                    },
                                  },
                                  [
                                    h(
                                      "div",
                                      {
                                        staticClass: "world__slide-container",
                                      },
                                      [
                                        h("div", {
                                          staticClass: "world__slide-mask",
                                        }),
                                        vm._v(" "),
                                        h(
                                          "div",
                                          {
                                            staticClass: "world__slide-cover",
                                            style: {
                                              backgroundImage: "url(".concat(world.cover, ")"),
                                            },
                                          },
                                          [
                                            h(
                                              "div",
                                              {
                                                staticClass: "cover-name",
                                              },
                                              [
                                                h("div", {
                                                  staticClass: "name-en",
                                                  domProps: {
                                                    innerHTML: vm._s(world.nameEN),
                                                  },
                                                }),
                                                vm._v(" "),
                                                h("div", {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value: !vm.isEN,
                                                      expression: "!isEN",
                                                    },
                                                  ],
                                                  staticClass: "name",
                                                  attrs: {
                                                    "data-lang": vm.$store.state.lang,
                                                  },
                                                  domProps: {
                                                    innerHTML: vm._s(world.name),
                                                  },
                                                }),
                                              ],
                                            ),
                                            vm._v(" "),
                                            h(
                                              "div",
                                              {
                                                staticClass: "cover-summary",
                                              },
                                              [vm._v(vm._s(world.summary))],
                                            ),
                                          ],
                                        ),
                                        vm._v(" "),
                                        h(
                                          "div",
                                          {
                                            staticClass: "world__slide-tape",
                                          },
                                          [
                                            h(
                                              "div",
                                              {
                                                staticClass: "tape-name",
                                              },
                                              [
                                                h("div", {
                                                  staticClass: "name-en",
                                                  domProps: {
                                                    innerHTML: vm._s(world.nameEN),
                                                  },
                                                }),
                                                vm._v(" "),
                                                h("div", {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value: !vm.isEN,
                                                      expression: "!isEN",
                                                    },
                                                  ],
                                                  staticClass: "name",
                                                  attrs: {
                                                    "data-lang": vm.$store.state.lang,
                                                  },
                                                  domProps: {
                                                    innerHTML: vm._s(world.name),
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
                              }),
                              1,
                            )
                          : vm._e(),
                        vm._v(" "),
                        vm.worldList.length > 1
                          ? h(
                              "div",
                              {
                                staticClass: "world__navigation",
                              },
                              [
                                h("div", {
                                  staticClass: "swiper-button-prev",
                                  class: {
                                    isClickAnim: vm.isClickAnim,
                                  },
                                  attrs: {
                                    slot: "button-prev",
                                  },
                                  on: {
                                    click: function (prevClickEvent) {
                                      return vm.handleNavigatorUpload("prev");
                                    },
                                  },
                                  slot: "button-prev",
                                }),
                                vm._v(" "),
                                h("div", {
                                  staticClass: "swiper-button-next",
                                  class: {
                                    isClickAnim: vm.isClickAnim,
                                  },
                                  attrs: {
                                    slot: "button-next",
                                  },
                                  on: {
                                    click: function (nextClickEvent) {
                                      return vm.handleNavigatorUpload("next");
                                    },
                                  },
                                  slot: "button-next",
                                }),
                              ],
                            )
                          : vm._e(),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
                vm._v(" "),
                h("div", {
                  staticClass: "section__foot",
                }),
              ],
              1,
            ),
          ],
        );
      },
      [],
      !1,
      null,
      null,
      null,
    );
  webpackExports.default = component.exports;
};
