// page:lang-feature — module 1440 from 44468dc
// module 1440 from 44468dc.js
// deps: 71, 32, 98, 1164, 1126, 1338, 36
const module_1440 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(71),
    vendorBundle2 = webpackRequire(32),
    r_1 = (webpackRequire(98), webpackRequire(1164)),
    c_2 = {
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
      asyncData: function (t_4) {
        var e_5 = t_4.store;
        t_4.res;
        return (
          (0, t_4.redirect)({
            name: "lang-main",
          }),
          r_1.a
            .getFeature({
              data: {
                sLangKey: e_5.state.lang,
              },
            })
            .then(function (t_6) {
              return {
                featureList: t_6.list,
              };
            })
        );
      },
      created: function () {
        var t_7 = this;
        return Object(vendorBundle2.a)(
          regeneratorRuntime.mark(function e_8() {
            var n_9;
            return regeneratorRuntime.wrap(function (e_10) {
              for (;;)
                switch ((e_10.prev = e_10.next)) {
                  case 0:
                    ((n_9 = Object(vendorBundle.a)(t_7.featureList, 1)), (t_7.activeFeature = n_9[0]));
                  case 2:
                  case "end":
                    return e_10.stop();
                }
            }, e_8);
          }),
        )();
      },
      methods: {
        handleSlideChange: function () {
          var t_11 = this.$refs.featureSwiper.swiper.realIndex;
          this.activeFeature = this.featureList[t_11];
        },
        handleNavigatorUpload: function () {
          this.$trackButton("features_next", "");
        },
      },
    },
    E_3 = (webpackRequire(1338), webpackRequire(36)),
    component = Object(E_3.a)(
      c_2,
      function () {
        var t_12 = this,
          e_13 = t_12._self._c;
        return e_13(
          "div",
          {
            staticClass: "feature",
          },
          [
            e_13("pageTab", {
              attrs: {
                "nav-num": 6,
              },
            }),
            t_12._v(" "),
            e_13(
              "div",
              {
                staticClass: "section-wrap",
              },
              [
                e_13(
                  "div",
                  {
                    staticClass: "feature__title font-num",
                  },
                  [t_12._v(t_12._s(t_12.$getI18nWord("nav4Label")))],
                ),
                t_12._v(" "),
                e_13(
                  "div",
                  {
                    staticClass: "feature-container",
                  },
                  [
                    e_13(
                      "client-only",
                      [
                        e_13(
                          "swiper",
                          {
                            ref: "featureSwiper",
                            staticClass: "feature__swiper",
                            attrs: {
                              options: t_12.swiperOption,
                            },
                            on: {
                              slideChange: t_12.handleSlideChange,
                            },
                          },
                          t_12._l(t_12.featureList, function (t_14) {
                            return e_13(
                              "swiper-slide",
                              {
                                key: t_14.id,
                                staticClass: "feature__slide",
                              },
                              [
                                e_13(
                                  "div",
                                  {
                                    staticClass: "feature__slide-banner",
                                  },
                                  [
                                    e_13("img", {
                                      attrs: {
                                        src: t_14.bannerInner,
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
                        t_12._v(" "),
                        e_13(
                          "div",
                          {
                            staticClass: "feature__pagination",
                          },
                          [
                            e_13("div", {
                              staticClass: "swiper-pagination",
                              attrs: {
                                slot: "pagination",
                              },
                              on: {
                                click: function (t_15) {
                                  t_15.stopPropagation();
                                },
                                mousemove: function (t_16) {
                                  (t_16.stopPropagation(), t_16.preventDefault());
                                },
                              },
                              slot: "pagination",
                            }),
                          ],
                        ),
                        t_12._v(" "),
                        t_12.featureList.length > 1
                          ? e_13(
                              "div",
                              {
                                staticClass: "feature__navigation",
                              },
                              [
                                e_13("div", {
                                  staticClass: "swiper-button-prev",
                                  attrs: {
                                    slot: "button-prev",
                                  },
                                  on: {
                                    click: t_12.handleNavigatorUpload,
                                  },
                                  slot: "button-prev",
                                }),
                                t_12._v(" "),
                                e_13("div", {
                                  staticClass: "swiper-button-next",
                                  attrs: {
                                    slot: "button-next",
                                  },
                                  on: {
                                    click: t_12.handleNavigatorUpload,
                                  },
                                  slot: "button-next",
                                }),
                              ],
                            )
                          : t_12._e(),
                      ],
                      1,
                    ),
                    t_12._v(" "),
                    t_12.activeFeature
                      ? e_13(
                          "div",
                          {
                            staticClass: "feature__info",
                          },
                          [
                            e_13(
                              "div",
                              {
                                staticClass: "feature__info-title",
                              },
                              [t_12._v("\n          " + t_12._s(t_12.activeFeature.title) + "\n        ")],
                            ),
                            t_12._v(" "),
                            e_13("div", {
                              staticClass: "feature__info-content",
                              domProps: {
                                innerHTML: t_12._s(t_12.activeFeature.sContent || t_12.activeFeature.summary),
                              },
                            }),
                          ],
                        )
                      : t_12._e(),
                  ],
                  1,
                ),
              ],
            ),
            t_12._v(" "),
            e_13("div", {
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
