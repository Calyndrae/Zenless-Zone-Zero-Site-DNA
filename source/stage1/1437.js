// page:m-lang-world-id — module 1437 from 08021c5
// module 1437 from 08021c5.js
// deps: 32, 98, 1152, 1149, 1324, 36
const module_1437 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    o_1 = (webpackRequire(98), webpackRequire(1152)),
    l_2 = {
      scrollToTop: !0,
      layout: "m/default",
      components: {
        pageTab: webpackRequire(1149).a,
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
          },
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
            var n_6, r_7;
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
                      ((r_7 = e_8.sent), (e_8.next = 10));
                      break;
                    case 7:
                      ((e_8.prev = 7),
                        (e_8.t0 = e_8.catch(1)),
                        t_4.error({
                          statusCode: 404,
                        }));
                    case 10:
                      return e_8.abrupt("return", {
                        worldContent: r_7,
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
      validate: function (t_9) {
        var e_10 = t_9.params;
        return /^\d+$/.test(e_10.id);
      },
    },
    d_3 = (webpackRequire(1324), webpackRequire(36)),
    component = Object(d_3.a)(
      l_2,
      function () {
        var t_11 = this,
          e_12 = t_11._self._c;
        return e_12(
          "div",
          {
            staticClass: "m-world-detail",
          },
          [
            e_12("pageTab", {
              attrs: {
                "nav-num": 5,
              },
            }),
            t_11._v(" "),
            e_12("div", {
              staticClass: "section__foot",
            }),
            t_11._v(" "),
            e_12(
              "div",
              {
                staticClass: "m-world-detail-container",
              },
              [
                t_11._m(0),
                t_11._v(" "),
                e_12(
                  "transition",
                  {
                    attrs: {
                      name: "scaleIn",
                      appear: "",
                    },
                  },
                  [
                    e_12(
                      "div",
                      {
                        staticClass: "m-world-detail__banner",
                      },
                      [
                        e_12(
                          "client-only",
                          [
                            e_12(
                              "swiper",
                              {
                                ref: "worldSwiper",
                                staticClass: "m-world-detail__banner-list",
                                attrs: {
                                  options: t_11.swiperOption,
                                },
                              },
                              t_11._l(t_11.worldContent.bannerM, function (n_13, r_14) {
                                return e_12(
                                  "swiper-slide",
                                  {
                                    key: r_14,
                                    staticClass: "m-world-detail__banner-item",
                                    on: {
                                      click: function (e_15) {
                                        return t_11.gotoDetail(n_13);
                                      },
                                    },
                                  },
                                  [
                                    e_12("img", {
                                      attrs: {
                                        src: n_13.url,
                                        alt: "",
                                      },
                                    }),
                                  ],
                                );
                              }),
                              1,
                            ),
                            t_11._v(" "),
                            e_12(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t_11.worldContent.banner.length > 1,
                                    expression: "worldContent.banner.length > 1",
                                  },
                                ],
                                staticClass: "m-world-detail__banner-pagination",
                              },
                              [
                                e_12("div", {
                                  staticClass: "swiper-pagination",
                                  attrs: {
                                    slot: "pagination",
                                  },
                                  on: {
                                    click: function (t_16) {
                                      t_16.stopPropagation();
                                    },
                                    mousemove: function (t_17) {
                                      (t_17.stopPropagation(), t_17.preventDefault());
                                    },
                                  },
                                  slot: "pagination",
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
                t_11._v(" "),
                e_12(
                  "div",
                  {
                    staticClass: "m-world-detail__name",
                  },
                  [t_11._v("\n      " + t_11._s(t_11.worldContent.title) + "\n    ")],
                ),
                t_11._v(" "),
                e_12("div", {
                  staticClass: "m-world-detail__content",
                  domProps: {
                    innerHTML: t_11._s(t_11.worldContent.sContent),
                  },
                }),
                t_11._v(" "),
                e_12(
                  "nuxt-link",
                  {
                    staticClass: "m-world-detail__foot",
                    attrs: {
                      to: {
                        name: "m-lang-world",
                        params: {
                          worldId: t_11.worldContent.iInfoId,
                        },
                      },
                    },
                  },
                  [
                    e_12(
                      "div",
                      {
                        staticClass: "m-world-detail__back",
                      },
                      [t_11._v(t_11._s(t_11.$getI18nWord("textClose")))],
                    ),
                  ],
                ),
              ],
              1,
            ),
          ],
          1,
        );
      },
      [
        function () {
          var t_18 = this,
            e_19 = t_18._self._c;
          return e_19(
            "div",
            {
              staticClass: "m-world-detail__title",
            },
            [
              e_19(
                "div",
                {
                  staticClass: "m-world-detail__title-inner",
                },
                [t_18._v("back"), e_19("br"), t_18._v("ground")],
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
