/**
 * show — readable reconstruction of webpack module 1437 (chunk 08021c5.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/08021c5.js
 *
 * Nuxt page component for the mobile world-entry detail route `m-lang-world-id` (layout `m/default`, `scrollToTop`). `validate` only accepts numeric `params.id`; `asyncData` loads the entry via the world API (module 1152) `getDetail` (`/getContent`, channel `CHANNEL_ID_CONFIG.WORLD`) with `iInfoId: params.id` and `sLangKey: store.state.lang`, raising a Nuxt 404 `error` on failure, and exposes it as `worldContent` (its `sTitle` plus i18n `seoTitlePrefix` is the `head()` title). It renders `m-world-detail` with the mobile `pageTab` (nav-num 5), a static "back / ground" `m-world-detail__title`, a `scaleIn` transition around a client-only vue-awesome-swiper (ref `worldSwiper`, centered `auto` slides with `autoHeight` and `.swiper-pagination`, shown when `worldContent.banner` has more than one item) of `bannerM` images whose click calls `gotoDetail`, then the entry name, HTML `sContent` and a `nuxt-link` (i18n `textClose`) back to `m-lang-world` with `params.worldId`.
 *
 * Exports (minified key → meaning):
 *   default → the `m-lang-world-id` mobile world-entry detail page Vue component (compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1437 from 08021c5.js
// deps: 32, 98, 1152, 1149, 1324, 36
const module_1437 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    worldApi = (webpackRequire(98), webpackRequire(1152)),
    worldDetailPageOptions = {
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
      validate: function (validateContext) {
        var routeParams = validateContext.params;
        return /^\d+$/.test(routeParams.id);
      },
    },
    componentNormalizer = (webpackRequire(1324), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      worldDetailPageOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "m-world-detail",
          },
          [
            h("pageTab", {
              attrs: {
                "nav-num": 5,
              },
            }),
            vm._v(" "),
            h("div", {
              staticClass: "section__foot",
            }),
            vm._v(" "),
            h(
              "div",
              {
                staticClass: "m-world-detail-container",
              },
              [
                vm._m(0),
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
                        staticClass: "m-world-detail__banner",
                      },
                      [
                        h(
                          "client-only",
                          [
                            h(
                              "swiper",
                              {
                                ref: "worldSwiper",
                                staticClass: "m-world-detail__banner-list",
                                attrs: {
                                  options: vm.swiperOption,
                                },
                              },
                              vm._l(vm.worldContent.bannerM, function (bannerImage, bannerIndex) {
                                return h(
                                  "swiper-slide",
                                  {
                                    key: bannerIndex,
                                    staticClass: "m-world-detail__banner-item",
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
                                staticClass: "m-world-detail__banner-pagination",
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
                                      (mousemoveEvent.stopPropagation(), mousemoveEvent.preventDefault());
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
                vm._v(" "),
                h(
                  "div",
                  {
                    staticClass: "m-world-detail__name",
                  },
                  [vm._v("\n      " + vm._s(vm.worldContent.title) + "\n    ")],
                ),
                vm._v(" "),
                h("div", {
                  staticClass: "m-world-detail__content",
                  domProps: {
                    innerHTML: vm._s(vm.worldContent.sContent),
                  },
                }),
                vm._v(" "),
                h(
                  "nuxt-link",
                  {
                    staticClass: "m-world-detail__foot",
                    attrs: {
                      to: {
                        name: "m-lang-world",
                        params: {
                          worldId: vm.worldContent.iInfoId,
                        },
                      },
                    },
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "m-world-detail__back",
                      },
                      [vm._v(vm._s(vm.$getI18nWord("textClose")))],
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
          var staticVm = this,
            staticH = staticVm._self._c;
          return staticH(
            "div",
            {
              staticClass: "m-world-detail__title",
            },
            [
              staticH(
                "div",
                {
                  staticClass: "m-world-detail__title-inner",
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
