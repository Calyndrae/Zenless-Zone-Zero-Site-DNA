// page:lang-world — module 1441 from 1e69d9d
// module 1441 from 1e69d9d.js
// deps: 65, 32, 98, 1143, 77, 1152, 1126, 1405, 36
const module_1441 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  webpackRequire(65);
  var vendorBundle = webpackRequire(32),
    l_1 = (webpackRequire(98), webpackRequire(1143), webpackRequire(77), webpackRequire(1152)),
    r_2 = {
      name: "world",
      components: {
        pageTab: webpackRequire(1126).a,
      },
      data: function () {
        var e_4 = this,
          t_5 = this;
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
                var t_6 = e_4.swiper,
                  n_7 = t_6.realIndex,
                  o_8 = t_6.clickedSlide;
                o_8 &&
                  o_8.className.indexOf("swiper-slide-active") > -1 &&
                  e_4.gotoDetail(e_4.worldList[n_7], n_7);
              },
              progress: function () {
                for (var i_9 = 0; i_9 < this.slides.length; i_9++) {
                  var e_10 = this.slides.eq(i_9),
                    t_11 = this.slides[i_9].progress,
                    n_12 = 0;
                  Math.round(Math.abs(t_11)) > 1 && (n_12 = 0.3 * (Math.abs(t_11) - 1) + 1);
                  var o_13 = "".concat(t_11 * n_12 * 5.32, "rem"),
                    l_14 = 1 - Math.abs(t_11) / 3.24;
                  (e_10.transform("translateX(".concat(o_13, ") scale(").concat(l_14, ")")),
                    e_10.css("opacity", 1),
                    Math.round(Math.abs(t_11)) > 1 && e_10.css("opacity", 0));
                }
              },
              transitionStart: function () {
                for (var e_15 = this.activeIndex, i_16 = 0; i_16 < this.slides.length; i_16++) {
                  this.slides.eq(i_16).css("zIndex", 2);
                }
                if ("next" === t_5.dir) {
                  var n_17 = this.slides.eq(e_15 - 1),
                    o_18 = this.slides.eq(e_15);
                  (n_17.css("zIndex", 95), o_18.css("zIndex", 99));
                }
              },
              slideChange: function () {
                e_4.activeIndex = e_4.swiper.realIndex;
              },
              setTransition: function (e_19) {
                for (var i_20 = 0; i_20 < this.slides.length; i_20++) {
                  this.slides.eq(i_20).transition(e_19);
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
      asyncData: function (e_21) {
        var t_22 = e_21.store,
          n_23 = (e_21.res, e_21.redirect),
          o_24 = e_21.params.worldId;
        return l_1.a
          .getWorldList({
            data: {
              sLangKey: t_22.state.lang,
            },
          })
          .then(function (e_25) {
            e_25.list.length < 1 &&
              n_23({
                name: "lang-main",
              });
            var t_26 = e_25.list.findIndex(function (e_27) {
              return e_27.iInfoId === o_24;
            });
            return {
              worldList: e_25.list,
              activeIndex: t_26 < 0 ? 0 : t_26,
            };
          });
      },
      mounted: function () {
        this.initSwiper();
      },
      methods: {
        asyncTimeout: function (e_28) {
          return new Promise(function (t_29) {
            setTimeout(function () {
              t_29();
            }, e_28);
          });
        },
        initSwiper: function () {
          var e_30 = this;
          ((this.swiperVisible = !1),
            (this.swiperOption.initialSlide = this.activeIndex),
            this.$nextTick(function () {
              ((e_30.swiperVisible = !0), (e_30.isInitAnim = !0));
            }));
        },
        gotoDetail: function (e_31, t_32) {
          var n_33 = this;
          return Object(vendorBundle.a)(
            regeneratorRuntime.mark(function o_34() {
              return regeneratorRuntime.wrap(function (o_35) {
                for (;;)
                  switch ((o_35.prev = o_35.next)) {
                    case 0:
                      if (t_32 === n_33.activeIndex) {
                        o_35.next = 2;
                        break;
                      }
                      return o_35.abrupt("return");
                    case 2:
                      return (
                        (n_33.isClickAnim = !0),
                        (o_35.next = 5),
                        n_33.asyncTimeout(n_33.isHoverAnim ? 600 : 1e3)
                      );
                    case 5:
                      (n_33.$router.push({
                        name: "lang-world-id",
                        params: {
                          id: e_31.iInfoId,
                        },
                      }),
                        n_33.$trackButton("file_card", "".concat(e_31.iInfoId)));
                    case 7:
                    case "end":
                      return o_35.stop();
                  }
              }, o_34);
            }),
          )();
        },
        handleNavigatorUpload: function (e_36) {
          ((this.dir = e_36), this.$trackButton("file_next", ""));
        },
      },
    },
    c_3 = (webpackRequire(1405), webpackRequire(36)),
    component = Object(c_3.a)(
      r_2,
      function () {
        var e_37 = this,
          t_38 = e_37._self._c;
        return t_38(
          "div",
          {
            staticClass: "world",
          },
          [
            t_38(
              "div",
              {
                staticClass: "world-container",
              },
              [
                t_38("pageTab", {
                  attrs: {
                    "nav-num": 5,
                  },
                }),
                e_37._v(" "),
                t_38(
                  "div",
                  {
                    staticClass: "world-inner",
                  },
                  [
                    t_38(
                      "client-only",
                      [
                        e_37.swiperVisible
                          ? t_38(
                              "swiper",
                              {
                                ref: "worldSwiper",
                                staticClass: "world__swiper",
                                class: {
                                  isClickAnim: e_37.isClickAnim,
                                },
                                attrs: {
                                  options: e_37.swiperOption,
                                },
                              },
                              e_37._l(e_37.worldList, function (n_39, o_40) {
                                return t_38(
                                  "swiper-slide",
                                  {
                                    key: n_39.id,
                                    staticClass: "world__slide",
                                    class: {
                                      "swiper-slide-active": e_37.activeIndex === o_40,
                                      isInitAnim: e_37.isInitAnim,
                                    },
                                  },
                                  [
                                    t_38(
                                      "div",
                                      {
                                        staticClass: "world__slide-container",
                                      },
                                      [
                                        t_38("div", {
                                          staticClass: "world__slide-mask",
                                        }),
                                        e_37._v(" "),
                                        t_38(
                                          "div",
                                          {
                                            staticClass: "world__slide-cover",
                                            style: {
                                              backgroundImage: "url(".concat(n_39.cover, ")"),
                                            },
                                          },
                                          [
                                            t_38(
                                              "div",
                                              {
                                                staticClass: "cover-name",
                                              },
                                              [
                                                t_38("div", {
                                                  staticClass: "name-en",
                                                  domProps: {
                                                    innerHTML: e_37._s(n_39.nameEN),
                                                  },
                                                }),
                                                e_37._v(" "),
                                                t_38("div", {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value: !e_37.isEN,
                                                      expression: "!isEN",
                                                    },
                                                  ],
                                                  staticClass: "name",
                                                  attrs: {
                                                    "data-lang": e_37.$store.state.lang,
                                                  },
                                                  domProps: {
                                                    innerHTML: e_37._s(n_39.name),
                                                  },
                                                }),
                                              ],
                                            ),
                                            e_37._v(" "),
                                            t_38(
                                              "div",
                                              {
                                                staticClass: "cover-summary",
                                              },
                                              [e_37._v(e_37._s(n_39.summary))],
                                            ),
                                          ],
                                        ),
                                        e_37._v(" "),
                                        t_38(
                                          "div",
                                          {
                                            staticClass: "world__slide-tape",
                                          },
                                          [
                                            t_38(
                                              "div",
                                              {
                                                staticClass: "tape-name",
                                              },
                                              [
                                                t_38("div", {
                                                  staticClass: "name-en",
                                                  domProps: {
                                                    innerHTML: e_37._s(n_39.nameEN),
                                                  },
                                                }),
                                                e_37._v(" "),
                                                t_38("div", {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value: !e_37.isEN,
                                                      expression: "!isEN",
                                                    },
                                                  ],
                                                  staticClass: "name",
                                                  attrs: {
                                                    "data-lang": e_37.$store.state.lang,
                                                  },
                                                  domProps: {
                                                    innerHTML: e_37._s(n_39.name),
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
                          : e_37._e(),
                        e_37._v(" "),
                        e_37.worldList.length > 1
                          ? t_38(
                              "div",
                              {
                                staticClass: "world__navigation",
                              },
                              [
                                t_38("div", {
                                  staticClass: "swiper-button-prev",
                                  class: {
                                    isClickAnim: e_37.isClickAnim,
                                  },
                                  attrs: {
                                    slot: "button-prev",
                                  },
                                  on: {
                                    click: function (t_41) {
                                      return e_37.handleNavigatorUpload("prev");
                                    },
                                  },
                                  slot: "button-prev",
                                }),
                                e_37._v(" "),
                                t_38("div", {
                                  staticClass: "swiper-button-next",
                                  class: {
                                    isClickAnim: e_37.isClickAnim,
                                  },
                                  attrs: {
                                    slot: "button-next",
                                  },
                                  on: {
                                    click: function (t_42) {
                                      return e_37.handleNavigatorUpload("next");
                                    },
                                  },
                                  slot: "button-next",
                                }),
                              ],
                            )
                          : e_37._e(),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
                e_37._v(" "),
                t_38("div", {
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
