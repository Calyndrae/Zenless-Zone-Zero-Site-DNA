// page:lang-world-id — module 1452 from 8c53a05
// module 1452 from 8c53a05.js
// deps: 32, 98, 1152, 1126, 1412, 36
const module_1452 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    o_1 = (webpackRequire(98), webpackRequire(1152)),
    r_2 = {
      scrollToTop: !0,
      components: {
        pageTab: webpackRequire(1126).a,
      },
      data: function () {
        return {
          swiperOption: {
            slidesPerView: "auto",
            centeredSlides: !0,
            autoHeight: !0,
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
          opened: !1,
        };
      },
      head: function () {
        return {
          title: "".concat(this.worldContent.sTitle).concat(this.$getI18nWord("seoTitlePrefix")),
        };
      },
      asyncData: function (t_4) {
        return Object(vendorBundle.a)(
          regeneratorRuntime.mark(function e_5() {
            var n_6, l_7;
            return regeneratorRuntime.wrap(
              function (e_8) {
                for (;;)
                  switch ((e_8.prev = e_8.next)) {
                    case 0:
                      return (
                        (n_6 = t_4.params.id),
                        (e_8.prev = 1),
                        (e_8.next = 4),
                        o_1.a.getDetail({
                          data: {
                            iInfoId: n_6,
                            sLangKey: t_4.store.state.lang,
                          },
                        })
                      );
                    case 4:
                      ((l_7 = e_8.sent), (e_8.next = 10));
                      break;
                    case 7:
                      ((e_8.prev = 7),
                        (e_8.t0 = e_8.catch(1)),
                        t_4.error({
                          statusCode: 404,
                        }));
                    case 10:
                      return e_8.abrupt("return", {
                        worldContent: l_7,
                      });
                    case 11:
                    case "end":
                      return e_8.stop();
                  }
              },
              e_5,
              null,
              [[1, 7]],
            );
          }),
        )();
      },
      methods: {
        handleMore: function () {
          var t_9 = this.$refs.desc;
          this.opened
            ? ((this.opened = !1),
              (t_9.style.height = "1rem"),
              (t_9.style.height = "8.5rem"),
              $(window).scrollTop(0))
            : ((this.opened = !0), (t_9.style.height = "auto"));
        },
      },
      validate: function (t_10) {
        var e_11 = t_10.params;
        return /^\d+$/.test(e_11.id);
      },
    },
    c_3 = (webpackRequire(1412), webpackRequire(36)),
    component = Object(c_3.a)(
      r_2,
      function () {
        var t_12 = this,
          e_13 = t_12._self._c;
        return e_13(
          "div",
          {
            staticClass: "world-detail",
          },
          [
            e_13(
              "div",
              {
                staticClass: "world-detail-container",
              },
              [
                e_13("pageTab", {
                  attrs: {
                    "nav-num": 5,
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
                        staticClass: "world-detail-inner",
                      },
                      [
                        e_13(
                          "transition",
                          {
                            attrs: {
                              name: "scaleIn",
                              appear: "",
                            },
                          },
                          [
                            e_13(
                              "nuxt-link",
                              {
                                attrs: {
                                  to: {
                                    name: "lang-world",
                                    params: {
                                      worldId: t_12.worldContent.iInfoId,
                                    },
                                  },
                                },
                              },
                              [
                                e_13("div", {
                                  staticClass: "world-detail__back",
                                }),
                              ],
                            ),
                          ],
                          1,
                        ),
                        t_12._v(" "),
                        e_13(
                          "div",
                          {
                            ref: "desc",
                            staticClass: "world-detail__article",
                          },
                          [
                            e_13(
                              "transition",
                              {
                                attrs: {
                                  name: "scaleIn",
                                  appear: "",
                                },
                              },
                              [
                                e_13(
                                  "div",
                                  {
                                    staticClass: "world-detail__banner",
                                  },
                                  [
                                    e_13(
                                      "client-only",
                                      [
                                        e_13(
                                          "swiper",
                                          {
                                            ref: "worldSwiper",
                                            staticClass: "world-detail__banner-list",
                                            attrs: {
                                              options: t_12.swiperOption,
                                            },
                                          },
                                          t_12._l(t_12.worldContent.banner, function (n_14, l_15) {
                                            return e_13(
                                              "swiper-slide",
                                              {
                                                key: l_15,
                                                staticClass: "world-detail__banner-item",
                                                on: {
                                                  click: function (e_16) {
                                                    return t_12.gotoDetail(n_14);
                                                  },
                                                },
                                              },
                                              [
                                                e_13("img", {
                                                  attrs: {
                                                    src: n_14.url,
                                                    alt: "",
                                                  },
                                                }),
                                              ],
                                            );
                                          }),
                                          1,
                                        ),
                                        t_12._v(" "),
                                        e_13(
                                          "div",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: t_12.worldContent.banner.length > 1,
                                                expression: "worldContent.banner.length > 1",
                                              },
                                            ],
                                            staticClass: "world-detail__banner-pagination",
                                          },
                                          [
                                            e_13("div", {
                                              staticClass: "swiper-pagination",
                                              attrs: {
                                                slot: "pagination",
                                              },
                                              on: {
                                                click: function (t_17) {
                                                  t_17.stopPropagation();
                                                },
                                                mousemove: function (t_18) {
                                                  (t_18.stopPropagation(), t_18.preventDefault());
                                                },
                                              },
                                              slot: "pagination",
                                            }),
                                          ],
                                        ),
                                        t_12._v(" "),
                                        e_13(
                                          "div",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: t_12.worldContent.banner.length > 1,
                                                expression: "worldContent.banner.length > 1",
                                              },
                                            ],
                                            staticClass: "world-detail__banner-navigation",
                                          },
                                          [
                                            e_13("div", {
                                              staticClass: "swiper-button-prev",
                                              attrs: {
                                                slot: "button-prev",
                                              },
                                              slot: "button-prev",
                                            }),
                                            t_12._v(" "),
                                            e_13("div", {
                                              staticClass: "swiper-button-next",
                                              attrs: {
                                                slot: "button-next",
                                              },
                                              slot: "button-next",
                                            }),
                                          ],
                                        ),
                                      ],
                                      1,
                                    ),
                                  ],
                                  1,
                                ),
                              ],
                            ),
                            t_12._v(" "),
                            e_13(
                              "transition",
                              {
                                attrs: {
                                  name: "scaleIn",
                                  appear: "",
                                },
                              },
                              [
                                e_13(
                                  "div",
                                  {
                                    staticClass: "world-detail__title",
                                  },
                                  [
                                    t_12._v(
                                      "\n              " +
                                        t_12._s(t_12.worldContent.title) +
                                        "\n            ",
                                    ),
                                  ],
                                ),
                              ],
                            ),
                            t_12._v(" "),
                            e_13(
                              "transition",
                              {
                                attrs: {
                                  name: "scaleIn",
                                  appear: "",
                                },
                              },
                              [
                                e_13(
                                  "div",
                                  {
                                    staticClass: "world-detail__content",
                                  },
                                  [
                                    e_13("div", {
                                      staticClass: "world-detail__content-inner",
                                      domProps: {
                                        innerHTML: t_12._s(t_12.worldContent.sContent),
                                      },
                                    }),
                                  ],
                                ),
                              ],
                            ),
                          ],
                          1,
                        ),
                        t_12._v(" "),
                        e_13(
                          "transition",
                          {
                            attrs: {
                              name: "scaleIn",
                              appear: "",
                            },
                          },
                          [
                            e_13(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t_12.worldContent.sContent,
                                    expression: "worldContent.sContent",
                                  },
                                ],
                                staticClass: "world-detail__more",
                                class: [t_12.opened ? "open" : "close"],
                                on: {
                                  click: t_12.handleMore,
                                },
                              },
                              [
                                e_13(
                                  "div",
                                  {
                                    staticClass: "more-btn",
                                  },
                                  [
                                    t_12._v(
                                      "\n              " +
                                        t_12._s(
                                          t_12.opened
                                            ? t_12.$getI18nWord("textFold")
                                            : t_12.$getI18nWord("learnMore"),
                                        ) +
                                        "\n            ",
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ],
                        ),
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
