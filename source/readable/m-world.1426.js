/**
 * m-world — readable reconstruction of webpack module 1426 (chunk b262029.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/b262029.js
 *
 * Nuxt page component `m-world` for the mobile world-archive route `m-lang-world` (layout `m/default`). `asyncData` loads entries via the world API (module 1152) `getWorldList` (channel `CHANNEL_ID_CONFIG.WORLD`) with `sLangKey: store.state.lang`, redirects to `m-lang-main` when the list is empty, and returns `worldList` plus the `activeIndex` matching `params.worldId`. It renders the mobile `pageTab` (nav-num 5), a static "back / ground" `m-world__title`, and a client-only looped vue-awesome-swiper coverflow (ref `worldSwiper`, centered `auto` slides, `.swiper-button-next/prev`) whose `progress` handler applies `translateX(...rem) scale(...)` and opacity per slide, `transitionStart` re-stacks z-indexes, `transitionEnd` stores `activeIndex`/`swiperIndex`, and `click` on the active slide calls `gotoDetail`; each `m-world__slide` shows a cover with `name-en`/`name` (hidden when `isEN`), `cover-summary` and a `m-world__slide-tape`. `gotoDetail` plays the `isClickAnim` animation, waits via `asyncTimeout`, then routes to `m-lang-world-id` and tracks `file_card` via `$trackButton` (`handleNavigatorUpload` tracks `file_next`); `head()` uses i18n `nav5` + `seoTitlePrefix`.
 *
 * Exports (minified key → meaning):
 *   default → the `m-world` mobile world-archive carousel page Vue component (route m-lang-world, compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1426 from b262029.js
// deps: 65, 32, 98, 1143, 77, 1152, 1149, 1318, 36
const module_1426 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  webpackRequire(65);
  var vendorBundle = webpackRequire(32),
    worldApi = (webpackRequire(98), webpackRequire(1143), webpackRequire(77), webpackRequire(1152)),
    worldPageOptions = {
      layout: "m/default",
      name: "m-world",
      components: {
        pageTab: webpackRequire(1149).a,
      },
      data: function () {
        var self = this,
          selfForTransitions = this;
        return {
          swiperVisible: !0,
          swiperOption: {
            slidesPerView: "auto",
            watchSlidesProgress: !0,
            centeredSlides: !0,
            speed: 600,
            initialSlide: 0,
            loop: !0,
            loopedSlides: 3,
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
                  Math.round(Math.abs(slideProgress)) > 0 &&
                    (offsetFactor = 1.4 * (Math.abs(slideProgress) - 1) + 0.1);
                  var translateXRem = "".concat(slideProgress * offsetFactor * 6.62, "rem"),
                    slideScale = 1 - Math.abs(slideProgress) / 3.24;
                  (slideEl.transform("translateX(".concat(translateXRem, ") scale(").concat(slideScale, ")")),
                    slideEl.css("opacity", 1),
                    Math.round(Math.abs(slideProgress)) > 3 && slideEl.css("opacity", 0));
                }
              },
              transitionStart: function () {
                for (
                  var currentActiveIndex = this.activeIndex, resetIndex = 0;
                  resetIndex < this.slides.length;
                  resetIndex++
                ) {
                  this.slides.eq(resetIndex).css("zIndex", 0);
                }
                if (currentActiveIndex > selfForTransitions.swiperIndex) {
                  var previousSlide = this.slides.eq(currentActiveIndex - 1),
                    activeSlide = this.slides.eq(currentActiveIndex);
                  (previousSlide.css("zIndex", 95), activeSlide.css("zIndex", 99));
                } else {
                  var currentSlide = this.slides.eq(currentActiveIndex),
                    nextSlide = this.slides.eq(currentActiveIndex + 1);
                  (currentSlide.css("zIndex", 99), nextSlide.css("zIndex", 95));
                }
              },
              transitionEnd: function () {
                ((selfForTransitions.activeIndex = this.realIndex),
                  (selfForTransitions.swiperIndex = this.activeIndex));
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
          isClickAnim: !1,
          swiperIndex: 0,
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
                name: "m-lang-main",
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
        var mountedSelf = this;
        ((this.swiperVisible = !1),
          (this.swiperOption.initialSlide = this.activeIndex),
          this.$nextTick(function () {
            ((mountedSelf.swiperVisible = !0), (mountedSelf.isInitAnim = !0));
          }));
      },
      methods: {
        asyncTimeout: function (delayMs) {
          return new Promise(function (resolve) {
            setTimeout(function () {
              resolve();
            }, delayMs);
          });
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
                        name: "m-lang-world-id",
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
        handleNavigatorUpload: function () {
          this.$trackButton("file_next", "");
        },
      },
    },
    componentNormalizer = (webpackRequire(1318), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      worldPageOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "m-world",
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
                staticClass: "m-world-container",
              },
              [
                vm._m(0),
                vm._v(" "),
                h(
                  "client-only",
                  [
                    vm.swiperVisible
                      ? h(
                          "swiper",
                          {
                            ref: "worldSwiper",
                            staticClass: "m-world__swiper",
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
                                staticClass: "m-world__slide",
                                class: {
                                  "swiper-slide-active": vm.activeIndex === worldIndex,
                                  isInitAnim: vm.isInitAnim,
                                },
                              },
                              [
                                h(
                                  "div",
                                  {
                                    staticClass: "m-world__slide-container",
                                  },
                                  [
                                    h("div", {
                                      staticClass: "m-world__slide-mask",
                                    }),
                                    vm._v(" "),
                                    h(
                                      "div",
                                      {
                                        staticClass: "m-world__slide-cover",
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
                                        staticClass: "m-world__slide-tape",
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
        );
      },
      [
        function () {
          var staticVm = this,
            staticH = staticVm._self._c;
          return staticH(
            "div",
            {
              staticClass: "m-world__title",
            },
            [
              staticH(
                "div",
                {
                  staticClass: "m-world__title-inner",
                },
                [staticVm._v("back"), staticH("br"), staticVm._v("ground")],
              ),
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
