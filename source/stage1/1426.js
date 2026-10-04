// page:m-lang-world — module 1426 from b262029
// module 1426 from b262029.js
// deps: 65, 32, 98, 1143, 77, 1152, 1149, 1318, 36
const module_1426 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  webpackRequire(65);
  var vendorBundle = webpackRequire(32),
    o_1 = (webpackRequire(98), webpackRequire(1143), webpackRequire(77), webpackRequire(1152)),
    l_2 = {
      layout: "m/default",
      name: "m-world",
      components: {
        pageTab: webpackRequire(1149).a,
      },
      data: function () {
        var e_4 = this,
          t_5 = this;
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
                var t_6 = e_4.swiper,
                  n_7 = t_6.realIndex,
                  r_8 = t_6.clickedSlide;
                r_8 &&
                  r_8.className.indexOf("swiper-slide-active") > -1 &&
                  e_4.gotoDetail(e_4.worldList[n_7], n_7);
              },
              progress: function () {
                for (var i_9 = 0; i_9 < this.slides.length; i_9++) {
                  var e_10 = this.slides.eq(i_9),
                    t_11 = this.slides[i_9].progress,
                    n_12 = 0;
                  Math.round(Math.abs(t_11)) > 0 && (n_12 = 1.4 * (Math.abs(t_11) - 1) + 0.1);
                  var r_13 = "".concat(t_11 * n_12 * 6.62, "rem"),
                    o_14 = 1 - Math.abs(t_11) / 3.24;
                  (e_10.transform("translateX(".concat(r_13, ") scale(").concat(o_14, ")")),
                    e_10.css("opacity", 1),
                    Math.round(Math.abs(t_11)) > 3 && e_10.css("opacity", 0));
                }
              },
              transitionStart: function () {
                for (var e_15 = this.activeIndex, i_16 = 0; i_16 < this.slides.length; i_16++) {
                  this.slides.eq(i_16).css("zIndex", 0);
                }
                if (e_15 > t_5.swiperIndex) {
                  var n_17 = this.slides.eq(e_15 - 1),
                    r_18 = this.slides.eq(e_15);
                  (n_17.css("zIndex", 95), r_18.css("zIndex", 99));
                } else {
                  var o_19 = this.slides.eq(e_15),
                    l_20 = this.slides.eq(e_15 + 1);
                  (o_19.css("zIndex", 99), l_20.css("zIndex", 95));
                }
              },
              transitionEnd: function () {
                ((t_5.activeIndex = this.realIndex), (t_5.swiperIndex = this.activeIndex));
              },
              setTransition: function (e_21) {
                for (var i_22 = 0; i_22 < this.slides.length; i_22++) {
                  this.slides.eq(i_22).transition(e_21);
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
      asyncData: function (e_23) {
        var t_24 = e_23.store,
          n_25 = (e_23.res, e_23.redirect),
          r_26 = e_23.params.worldId;
        return o_1.a
          .getWorldList({
            data: {
              sLangKey: t_24.state.lang,
            },
          })
          .then(function (e_27) {
            e_27.list.length < 1 &&
              n_25({
                name: "m-lang-main",
              });
            var t_28 = e_27.list.findIndex(function (e_29) {
              return e_29.iInfoId === r_26;
            });
            return {
              worldList: e_27.list,
              activeIndex: t_28 < 0 ? 0 : t_28,
            };
          });
      },
      mounted: function () {
        var e_30 = this;
        ((this.swiperVisible = !1),
          (this.swiperOption.initialSlide = this.activeIndex),
          this.$nextTick(function () {
            ((e_30.swiperVisible = !0), (e_30.isInitAnim = !0));
          }));
      },
      methods: {
        asyncTimeout: function (e_31) {
          return new Promise(function (t_32) {
            setTimeout(function () {
              t_32();
            }, e_31);
          });
        },
        gotoDetail: function (e_33, t_34) {
          var n_35 = this;
          return Object(vendorBundle.a)(
            regeneratorRuntime.mark(function r_36() {
              return regeneratorRuntime.wrap(function (r_37) {
                for (;;)
                  switch ((r_37.prev = r_37.next)) {
                    case 0:
                      if (t_34 === n_35.activeIndex) {
                        r_37.next = 2;
                        break;
                      }
                      return r_37.abrupt("return");
                    case 2:
                      return (
                        (n_35.isClickAnim = !0),
                        (r_37.next = 5),
                        n_35.asyncTimeout(n_35.isHoverAnim ? 600 : 1e3)
                      );
                    case 5:
                      (n_35.$router.push({
                        name: "m-lang-world-id",
                        params: {
                          id: e_33.iInfoId,
                        },
                      }),
                        n_35.$trackButton("file_card", "".concat(e_33.iInfoId)));
                    case 7:
                    case "end":
                      return r_37.stop();
                  }
              }, r_36);
            }),
          )();
        },
        handleNavigatorUpload: function () {
          this.$trackButton("file_next", "");
        },
      },
    },
    d_3 = (webpackRequire(1318), webpackRequire(36)),
    component = Object(d_3.a)(
      l_2,
      function () {
        var e_38 = this,
          t_39 = e_38._self._c;
        return t_39(
          "div",
          {
            staticClass: "m-world",
          },
          [
            t_39("pageTab", {
              attrs: {
                "nav-num": 5,
              },
            }),
            e_38._v(" "),
            t_39(
              "div",
              {
                staticClass: "m-world-container",
              },
              [
                e_38._m(0),
                e_38._v(" "),
                t_39(
                  "client-only",
                  [
                    e_38.swiperVisible
                      ? t_39(
                          "swiper",
                          {
                            ref: "worldSwiper",
                            staticClass: "m-world__swiper",
                            class: {
                              isClickAnim: e_38.isClickAnim,
                            },
                            attrs: {
                              options: e_38.swiperOption,
                            },
                          },
                          e_38._l(e_38.worldList, function (n_40, r_41) {
                            return t_39(
                              "swiper-slide",
                              {
                                key: n_40.id,
                                staticClass: "m-world__slide",
                                class: {
                                  "swiper-slide-active": e_38.activeIndex === r_41,
                                  isInitAnim: e_38.isInitAnim,
                                },
                              },
                              [
                                t_39(
                                  "div",
                                  {
                                    staticClass: "m-world__slide-container",
                                  },
                                  [
                                    t_39("div", {
                                      staticClass: "m-world__slide-mask",
                                    }),
                                    e_38._v(" "),
                                    t_39(
                                      "div",
                                      {
                                        staticClass: "m-world__slide-cover",
                                        style: {
                                          backgroundImage: "url(".concat(n_40.cover, ")"),
                                        },
                                      },
                                      [
                                        t_39(
                                          "div",
                                          {
                                            staticClass: "cover-name",
                                          },
                                          [
                                            t_39("div", {
                                              staticClass: "name-en",
                                              domProps: {
                                                innerHTML: e_38._s(n_40.nameEN),
                                              },
                                            }),
                                            e_38._v(" "),
                                            t_39("div", {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: !e_38.isEN,
                                                  expression: "!isEN",
                                                },
                                              ],
                                              staticClass: "name",
                                              domProps: {
                                                innerHTML: e_38._s(n_40.name),
                                              },
                                            }),
                                          ],
                                        ),
                                        e_38._v(" "),
                                        t_39(
                                          "div",
                                          {
                                            staticClass: "cover-summary",
                                          },
                                          [e_38._v(e_38._s(n_40.summary))],
                                        ),
                                      ],
                                    ),
                                    e_38._v(" "),
                                    t_39(
                                      "div",
                                      {
                                        staticClass: "m-world__slide-tape",
                                      },
                                      [
                                        t_39(
                                          "div",
                                          {
                                            staticClass: "tape-name",
                                          },
                                          [
                                            t_39("div", {
                                              staticClass: "name-en",
                                              domProps: {
                                                innerHTML: e_38._s(n_40.nameEN),
                                              },
                                            }),
                                            e_38._v(" "),
                                            t_39("div", {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: !e_38.isEN,
                                                  expression: "!isEN",
                                                },
                                              ],
                                              staticClass: "name",
                                              domProps: {
                                                innerHTML: e_38._s(n_40.name),
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
                      : e_38._e(),
                  ],
                  1,
                ),
              ],
              1,
            ),
            e_38._v(" "),
            t_39("div", {
              staticClass: "section__foot",
            }),
          ],
          1,
        );
      },
      [
        function () {
          var e_42 = this,
            t_43 = e_42._self._c;
          return t_43(
            "div",
            {
              staticClass: "m-world__title",
            },
            [
              t_43(
                "div",
                {
                  staticClass: "m-world__title-inner",
                },
                [e_42._v("back"), t_43("br"), e_42._v("ground")],
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
