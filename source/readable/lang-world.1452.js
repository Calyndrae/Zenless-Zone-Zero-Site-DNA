/**
 * lang-world — readable reconstruction of webpack module 1452 (chunk 8c53a05.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c53a05.js
 *
 * Nuxt page component for the desktop world-entry detail route `lang-world-id` (`scrollToTop`). `validate` only accepts numeric `params.id`; `asyncData` loads the entry via the world API (module 1152) `getDetail` (`/getContent`, channel `CHANNEL_ID_CONFIG.WORLD`) with `iInfoId: params.id` and `sLangKey: store.state.lang`, raising a Nuxt 404 `error` on failure, and exposes it as `worldContent` (its `sTitle` plus i18n `seoTitlePrefix` is the `head()` title). It renders `world-detail` with the desktop `pageTab` (nav-num 5), a `world-detail__back` `nuxt-link` to `lang-world` with `params.worldId`, and a `world-detail__article` (ref `desc`) holding `scaleIn` transitions around a client-only vue-awesome-swiper (ref `worldSwiper`, `.swiper-pagination` plus `.swiper-button-prev/next`, shown when `banner` has more than one image) of `banner` images whose click calls `gotoDetail`, the entry title and HTML `sContent`. A `world-detail__more` toggle (i18n `learnMore`/`textFold`) runs `handleMore`, which expands the article to `height: auto` or collapses it back to `8.5rem` and scrolls the window to the top with jQuery `$(window).scrollTop(0)`.
 *
 * Exports (minified key → meaning):
 *   default → the `lang-world-id` desktop world-entry detail page Vue component (compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1452 from 8c53a05.js
// deps: 32, 98, 1152, 1126, 1412, 36
const module_1452 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    worldApi = (webpackRequire(98), webpackRequire(1152)),
    worldDetailPageOptions = {
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
      asyncData: function (nuxtContext) {
        return Object(vendorBundle.a)(
          regeneratorRuntime.mark(function asyncDataGenerator() {
            var worldId, worldContent;
            return regeneratorRuntime.wrap(
              function (context) {
                for (;;)
                  switch ((context.prev = context.next)) {
                    case 0:
                      return (
                        (worldId = nuxtContext.params.id),
                        (context.prev = 1),
                        (context.next = 4),
                        worldApi.a.getDetail({
                          data: {
                            iInfoId: worldId,
                            sLangKey: nuxtContext.store.state.lang,
                          },
                        })
                      );
                    case 4:
                      ((worldContent = context.sent), (context.next = 10));
                      break;
                    case 7:
                      ((context.prev = 7),
                        (context.t0 = context.catch(1)),
                        nuxtContext.error({
                          statusCode: 404,
                        }));
                    case 10:
                      return context.abrupt("return", {
                        worldContent: worldContent,
                      });
                    case 11:
                    case "end":
                      return context.stop();
                  }
              },
              asyncDataGenerator,
              null,
              [[1, 7]],
            );
          }),
        )();
      },
      methods: {
        handleMore: function () {
          var descElement = this.$refs.desc;
          this.opened
            ? ((this.opened = !1),
              (descElement.style.height = "1rem"),
              (descElement.style.height = "8.5rem"),
              $(window).scrollTop(0))
            : ((this.opened = !0), (descElement.style.height = "auto"));
        },
      },
      validate: function (validateContext) {
        var routeParams = validateContext.params;
        return /^\d+$/.test(routeParams.id);
      },
    },
    componentNormalizer = (webpackRequire(1412), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      worldDetailPageOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "world-detail",
          },
          [
            h(
              "div",
              {
                staticClass: "world-detail-container",
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
                    staticClass: "section-wrap",
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "world-detail-inner",
                      },
                      [
                        h(
                          "transition",
                          {
                            attrs: {
                              name: "scaleIn",
                              appear: "",
                            },
                          },
                          [
                            h(
                              "nuxt-link",
                              {
                                attrs: {
                                  to: {
                                    name: "lang-world",
                                    params: {
                                      worldId: vm.worldContent.iInfoId,
                                    },
                                  },
                                },
                              },
                              [
                                h("div", {
                                  staticClass: "world-detail__back",
                                }),
                              ],
                            ),
                          ],
                          1,
                        ),
                        vm._v(" "),
                        h(
                          "div",
                          {
                            ref: "desc",
                            staticClass: "world-detail__article",
                          },
                          [
                            h(
                              "transition",
                              {
                                attrs: {
                                  name: "scaleIn",
                                  appear: "",
                                },
                              },
                              [
                                h(
                                  "div",
                                  {
                                    staticClass: "world-detail__banner",
                                  },
                                  [
                                    h(
                                      "client-only",
                                      [
                                        h(
                                          "swiper",
                                          {
                                            ref: "worldSwiper",
                                            staticClass: "world-detail__banner-list",
                                            attrs: {
                                              options: vm.swiperOption,
                                            },
                                          },
                                          vm._l(vm.worldContent.banner, function (bannerImage, bannerIndex) {
                                            return h(
                                              "swiper-slide",
                                              {
                                                key: bannerIndex,
                                                staticClass: "world-detail__banner-item",
                                                on: {
                                                  click: function (clickEvent) {
                                                    return vm.gotoDetail(bannerImage);
                                                  },
                                                },
                                              },
                                              [
                                                h("img", {
                                                  attrs: {
                                                    src: bannerImage.url,
                                                    alt: "",
                                                  },
                                                }),
                                              ],
                                            );
                                          }),
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
                                                value: vm.worldContent.banner.length > 1,
                                                expression: "worldContent.banner.length > 1",
                                              },
                                            ],
                                            staticClass: "world-detail__banner-pagination",
                                          },
                                          [
                                            h("div", {
                                              staticClass: "swiper-pagination",
                                              attrs: {
                                                slot: "pagination",
                                              },
                                              on: {
                                                click: function (paginationClickEvent) {
                                                  paginationClickEvent.stopPropagation();
                                                },
                                                mousemove: function (mousemoveEvent) {
                                                  (mousemoveEvent.stopPropagation(),
                                                    mousemoveEvent.preventDefault());
                                                },
                                              },
                                              slot: "pagination",
                                            }),
                                          ],
                                        ),
                                        vm._v(" "),
                                        h(
                                          "div",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: vm.worldContent.banner.length > 1,
                                                expression: "worldContent.banner.length > 1",
                                              },
                                            ],
                                            staticClass: "world-detail__banner-navigation",
                                          },
                                          [
                                            h("div", {
                                              staticClass: "swiper-button-prev",
                                              attrs: {
                                                slot: "button-prev",
                                              },
                                              slot: "button-prev",
                                            }),
                                            vm._v(" "),
                                            h("div", {
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
                            vm._v(" "),
                            h(
                              "transition",
                              {
                                attrs: {
                                  name: "scaleIn",
                                  appear: "",
                                },
                              },
                              [
                                h(
                                  "div",
                                  {
                                    staticClass: "world-detail__title",
                                  },
                                  [
                                    vm._v(
                                      "\n              " + vm._s(vm.worldContent.title) + "\n            ",
                                    ),
                                  ],
                                ),
                              ],
                            ),
                            vm._v(" "),
                            h(
                              "transition",
                              {
                                attrs: {
                                  name: "scaleIn",
                                  appear: "",
                                },
                              },
                              [
                                h(
                                  "div",
                                  {
                                    staticClass: "world-detail__content",
                                  },
                                  [
                                    h("div", {
                                      staticClass: "world-detail__content-inner",
                                      domProps: {
                                        innerHTML: vm._s(vm.worldContent.sContent),
                                      },
                                    }),
                                  ],
                                ),
                              ],
                            ),
                          ],
                          1,
                        ),
                        vm._v(" "),
                        h(
                          "transition",
                          {
                            attrs: {
                              name: "scaleIn",
                              appear: "",
                            },
                          },
                          [
                            h(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: vm.worldContent.sContent,
                                    expression: "worldContent.sContent",
                                  },
                                ],
                                staticClass: "world-detail__more",
                                class: [vm.opened ? "open" : "close"],
                                on: {
                                  click: vm.handleMore,
                                },
                              },
                              [
                                h(
                                  "div",
                                  {
                                    staticClass: "more-btn",
                                  },
                                  [
                                    vm._v(
                                      "\n              " +
                                        vm._s(
                                          vm.opened
                                            ? vm.$getI18nWord("textFold")
                                            : vm.$getI18nWord("learnMore"),
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
