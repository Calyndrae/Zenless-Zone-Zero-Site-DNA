// page:m-lang-feature — module 1424 from ded62d7
// module 1424 from ded62d7.js
// deps: 71, 32, 98, 1164, 1149, 1260, 36
const module_1424 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(71),
    vendorBundle2 = webpackRequire(32),
    c_1 = (webpackRequire(98), webpackRequire(1164)),
    l_2 = {
      layout: "m/default",
      name: "m-feature",
      components: {
        pageTab: webpackRequire(1149).a,
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
      asyncData: function (e_4) {
        var t_5 = e_4.store;
        e_4.res;
        return (
          (0, e_4.redirect)({
            name: "m-lang-main",
          }),
          c_1.a
            .getFeature({
              data: {
                sLangKey: t_5.state.lang,
              },
            })
            .then(function (e_6) {
              return {
                featureList: e_6.list,
              };
            })
        );
      },
      created: function () {
        var e_7 = this;
        return Object(vendorBundle2.a)(
          regeneratorRuntime.mark(function t_8() {
            var n_9;
            return regeneratorRuntime.wrap(function (t_10) {
              for (;;)
                switch ((t_10.prev = t_10.next)) {
                  case 0:
                    ((n_9 = Object(vendorBundle.a)(e_7.featureList, 1)), (e_7.activeFeature = n_9[0]));
                  case 2:
                  case "end":
                    return t_10.stop();
                }
            }, t_8);
          }),
        )();
      },
      methods: {
        handleSlideChange: function () {
          var e_11 = this.$refs.featureSwiper.swiper.realIndex;
          this.activeFeature = this.featureList[e_11];
        },
        handleNavigatorUpload: function () {
          this.$trackButton("m-features_next", "");
        },
      },
    },
    A_3 = (webpackRequire(1260), webpackRequire(36)),
    component = Object(A_3.a)(
      l_2,
      function () {
        var e_12 = this,
          t_13 = e_12._self._c;
        return t_13(
          "div",
          {
            staticClass: "m-feature",
          },
          [
            t_13("pageTab", {
              attrs: {
                "nav-num": 6,
              },
            }),
            e_12._v(" "),
            t_13(
              "div",
              {
                staticClass: "section-wrap",
              },
              [
                t_13(
                  "div",
                  {
                    staticClass: "m-feature__title",
                  },
                  [e_12._v(e_12._s(e_12.$getI18nWord("nav4Label")))],
                ),
                e_12._v(" "),
                t_13(
                  "div",
                  {
                    staticClass: "m-feature-container",
                  },
                  [
                    t_13(
                      "client-only",
                      [
                        t_13(
                          "swiper",
                          {
                            ref: "featureSwiper",
                            staticClass: "m-feature__swiper",
                            attrs: {
                              options: e_12.swiperOption,
                            },
                            on: {
                              slideChange: e_12.handleSlideChange,
                            },
                          },
                          e_12._l(e_12.featureList, function (e_14) {
                            return t_13(
                              "swiper-slide",
                              {
                                key: e_14.id,
                                staticClass: "m-feature__slide",
                              },
                              [
                                t_13(
                                  "div",
                                  {
                                    staticClass: "m-feature__slide-banner",
                                  },
                                  [
                                    t_13("img", {
                                      attrs: {
                                        src: e_14.bannerInner,
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
                        e_12._v(" "),
                        t_13(
                          "div",
                          {
                            staticClass: "m-feature__pagination",
                          },
                          [
                            t_13("div", {
                              staticClass: "swiper-pagination",
                              attrs: {
                                slot: "pagination",
                              },
                              on: {
                                click: function (e_15) {
                                  e_15.stopPropagation();
                                },
                                mousemove: function (e_16) {
                                  (e_16.stopPropagation(), e_16.preventDefault());
                                },
                              },
                              slot: "pagination",
                            }),
                          ],
                        ),
                      ],
                      1,
                    ),
                    e_12._v(" "),
                    e_12.activeFeature
                      ? t_13(
                          "div",
                          {
                            staticClass: "m-feature__info",
                          },
                          [
                            t_13(
                              "div",
                              {
                                staticClass: "m-feature__info-title",
                              },
                              [e_12._v("\n          " + e_12._s(e_12.activeFeature.title) + "\n        ")],
                            ),
                            e_12._v(" "),
                            t_13("div", {
                              staticClass: "m-feature__info-content",
                              domProps: {
                                innerHTML: e_12._s(e_12.activeFeature.sContent || e_12.activeFeature.summary),
                              },
                            }),
                          ],
                        )
                      : e_12._e(),
                  ],
                  1,
                ),
                e_12._v(" "),
                t_13("div", {
                  staticClass: "section__foot",
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
      null,
      null,
    );
  webpackExports.default = component.exports;
};
