/**
 * feature — readable reconstruction of webpack module 1440 (chunk 44468dc.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/44468dc.js
 *
 * Nuxt page component `feature` for the desktop route `lang-feature`. `asyncData` calls the Nuxt `redirect` to `lang-main` unconditionally and also loads the feature list via the home content API (module 1164) `getFeature` (`/getContentList`, channel `CHANNEL_ID_CONFIG.FEATURE`) with `sLangKey: store.state.lang`, exposing it as `featureList`; `created` sets `activeFeature` to the first entry. It renders the desktop `pageTab` (nav-num 6), a `feature__title font-num` heading with the i18n `nav4Label`, and a vue-awesome-swiper `swiper` (ref `featureSwiper`, centered `auto` slides, `.swiper-pagination`) of `feature__slide` banners (`bannerInner`) plus, when there is more than one feature, `swiper-button-prev`/`swiper-button-next` arrows in `feature__navigation` whose clicks call `handleNavigatorUpload` (`$trackButton("features_next")`). `slideChange` sets `activeFeature` from the swiper `realIndex`, and the active feature's title and HTML content (`sContent` or `summary`) render in `feature__info`; `head()` builds the title from i18n `nav4` + `seoTitlePrefix`.
 *
 * Exports (minified key → meaning):
 *   default → the `feature` desktop game-features page Vue component (route lang-feature, compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1440 from 44468dc.js
// deps: 71, 32, 98, 1164, 1126, 1338, 36
const module_1440 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(71),
    vendorBundle2 = webpackRequire(32),
    homeContentApi = (webpackRequire(98), webpackRequire(1164)),
    featurePageOptions = {
      name: "feature",
      components: {
        pageTab: webpackRequire(1126).a,
      },
      data: function () {
        return {
          swiperOption: {
            slidesPerView: "auto",
            centeredSlides: !0,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            pagination: {
              el: ".swiper-pagination",
              clickable: !0,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          },
          activeFeature: null,
        };
      },
      head: function () {
        return {
          title: "".concat(this.$getI18nWord("nav4")).concat(this.$getI18nWord("seoTitlePrefix")),
        };
      },
      computed: {
        swiper: function () {
          return this.$refs.featureSwiper.swiper;
        },
      },
      asyncData: function (nuxtContext) {
        var store = nuxtContext.store;
        nuxtContext.res;
        return (
          (0, nuxtContext.redirect)({
            name: "lang-main",
          }),
          homeContentApi.a
            .getFeature({
              data: {
                sLangKey: store.state.lang,
              },
            })
            .then(function (featureResponse) {
              return {
                featureList: featureResponse.list,
              };
            })
        );
      },
      created: function () {
        var self = this;
        return Object(vendorBundle2.a)(
          regeneratorRuntime.mark(function createdGenerator() {
            var featureListHead;
            return regeneratorRuntime.wrap(function (context) {
              for (;;)
                switch ((context.prev = context.next)) {
                  case 0:
                    ((featureListHead = Object(vendorBundle.a)(self.featureList, 1)),
                      (self.activeFeature = featureListHead[0]));
                  case 2:
                  case "end":
                    return context.stop();
                }
            }, createdGenerator);
          }),
        )();
      },
      methods: {
        handleSlideChange: function () {
          var realIndex = this.$refs.featureSwiper.swiper.realIndex;
          this.activeFeature = this.featureList[realIndex];
        },
        handleNavigatorUpload: function () {
          this.$trackButton("features_next", "");
        },
      },
    },
    componentNormalizer = (webpackRequire(1338), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      featurePageOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "feature",
          },
          [
            h("pageTab", {
              attrs: {
                "nav-num": 6,
              },
            }),
            vm._v(" "),
            h(
              "div",
              {
                staticClass: "section-wrap",
              },
              [
                h(
                  "div",
                  {
                    staticClass: "feature__title font-num",
                  },
                  [vm._v(vm._s(vm.$getI18nWord("nav4Label")))],
                ),
                vm._v(" "),
                h(
                  "div",
                  {
                    staticClass: "feature-container",
                  },
                  [
                    h(
                      "client-only",
                      [
                        h(
                          "swiper",
                          {
                            ref: "featureSwiper",
                            staticClass: "feature__swiper",
                            attrs: {
                              options: vm.swiperOption,
                            },
                            on: {
                              slideChange: vm.handleSlideChange,
                            },
                          },
                          vm._l(vm.featureList, function (feature) {
                            return h(
                              "swiper-slide",
                              {
                                key: feature.id,
                                staticClass: "feature__slide",
                              },
                              [
                                h(
                                  "div",
                                  {
                                    staticClass: "feature__slide-banner",
                                  },
                                  [
                                    h("img", {
                                      attrs: {
                                        src: feature.bannerInner,
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
                        vm._v(" "),
                        h(
                          "div",
                          {
                            staticClass: "feature__pagination",
                          },
                          [
                            h("div", {
                              staticClass: "swiper-pagination",
                              attrs: {
                                slot: "pagination",
                              },
                              on: {
                                click: function (clickEvent) {
                                  clickEvent.stopPropagation();
                                },
                                mousemove: function (mousemoveEvent) {
                                  (mousemoveEvent.stopPropagation(), mousemoveEvent.preventDefault());
                                },
                              },
                              slot: "pagination",
                            }),
                          ],
                        ),
                        vm._v(" "),
                        vm.featureList.length > 1
                          ? h(
                              "div",
                              {
                                staticClass: "feature__navigation",
                              },
                              [
                                h("div", {
                                  staticClass: "swiper-button-prev",
                                  attrs: {
                                    slot: "button-prev",
                                  },
                                  on: {
                                    click: vm.handleNavigatorUpload,
                                  },
                                  slot: "button-prev",
                                }),
                                vm._v(" "),
                                h("div", {
                                  staticClass: "swiper-button-next",
                                  attrs: {
                                    slot: "button-next",
                                  },
                                  on: {
                                    click: vm.handleNavigatorUpload,
                                  },
                                  slot: "button-next",
                                }),
                              ],
                            )
                          : vm._e(),
                      ],
                      1,
                    ),
                    vm._v(" "),
                    vm.activeFeature
                      ? h(
                          "div",
                          {
                            staticClass: "feature__info",
                          },
                          [
                            h(
                              "div",
                              {
                                staticClass: "feature__info-title",
                              },
                              [vm._v("\n          " + vm._s(vm.activeFeature.title) + "\n        ")],
                            ),
                            vm._v(" "),
                            h("div", {
                              staticClass: "feature__info-content",
                              domProps: {
                                innerHTML: vm._s(vm.activeFeature.sContent || vm.activeFeature.summary),
                              },
                            }),
                          ],
                        )
                      : vm._e(),
                  ],
                  1,
                ),
              ],
            ),
            vm._v(" "),
            h("div", {
              staticClass: "section__foot",
            }),
          ],
          1,
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
