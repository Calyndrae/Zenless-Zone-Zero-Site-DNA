/**
 * news — readable reconstruction of webpack module 1416 (chunk ba4082a.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/ba4082a.js
 *
 * Nuxt page component `news` for the desktop news-list route `lang-news`. `asyncData` reads the cached `newsCache.pageIndex` (then resets it with `setNewsCache`) and loads, via the news API (module 1124), the slider news (`getSliderNews`), the category tree (`getCates`, `/getChildTree` under `CHANNEL_ID_CONFIG.NEWS.ALL`) and a 9-item page of `getAllNews` for `query.category`, all honoring the `blockGachaAnnounce` getter; it commits `setNewsCates` and returns `latestNewsList` (first 6), `cates`, `initPage`, `newsList` and `total`. It renders the desktop `pageTab` (nav-num 4), a `news-slider` (i18n `nav3Label`) that shows the latest news as a plain list when fewer than 3 or as a looped vue-awesome-swiper (ref `mySwiper`) with custom `swiper-pagination-index-N` bullets whose clicks are tracked as `news_point`, a `news-wrap` with `news-tab` category links (`/<lang>/news?category=...`), a `news-list` of banner/date/`news-tag`/title/summary items linking to `lang-news-id` (or a `news-self-path` route) and a `mihoyo-pager-rich` pager (module 1174) whose `go` calls `renderPage`. `handlePicClick` saves `pageIndex`/`newsIndex` with `setNewsCache` and tracks `news_pics`; `mounted` jQuery-scrolls back to the list when returning from an article, and `renderPage` re-fetches (`cache: true`) and scrolls to `.news-wrap`.
 *
 * Exports (minified key → meaning):
 *   default → the `news` desktop news-list page Vue component (route lang-news, compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1416 from ba4082a.js
// deps: 77, 206, 207, 1150, 71, 1143, 556, 136, 137, 67, 155, 204, 1120, 119, 118, 28, 1126, 1174, 1163, 347, 1124, 1395, 36
const module_1416 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  (webpackRequire(77), webpackRequire(206), webpackRequire(207));
  var babelToConsumableArrayHelper = webpackRequire(1150),
    vendorBundle = webpackRequire(71),
    appConfig =
      (webpackRequire(1143),
      webpackRequire(556),
      webpackRequire(136),
      webpackRequire(137),
      webpackRequire(67),
      webpackRequire(155),
      webpackRequire(204),
      webpackRequire(1120),
      webpackRequire(119),
      webpackRequire(118),
      webpackRequire(28)),
    pageTabComponent = webpackRequire(1126),
    miHoYoPagerRichPaginationComponent = webpackRequire(1174),
    newsTagComponent = webpackRequire(1163),
    backTop = webpackRequire(347),
    newsCMSAPI = webpackRequire(1124),
    defaultNewsChannelId = appConfig.CHANNEL_ID_CONFIG.NEWS.ALL,
    newsPageOptions = {
      name: "news",
      components: {
        pageTab: pageTabComponent.a,
        mihoyoPagerRich: miHoYoPagerRichPaginationComponent.a,
        newsTag: newsTagComponent.a,
        backTop: backTop.a,
      },
      data: function () {
        return {
          swiperOption: {
            slidesPerView: "auto",
            threshold: 10,
            loop: !0,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            pagination: {
              el: ".swiper-pagination",
              clickable: !0,
              renderBullet: function (bulletIndex, bulletClassName) {
                return '<span class="'
                  .concat(bulletClassName, " swiper-pagination-index-")
                  .concat(bulletIndex + 1, '"></span>');
              },
            },
          },
        };
      },
      head: function () {
        return {
          title: "".concat(this.$getI18nWord("nav3")).concat(this.$getI18nWord("seoTitlePrefix")),
        };
      },
      computed: {
        lang: function () {
          return this.$store.state.lang;
        },
        cateId: function () {
          return this.$route.query.category || defaultNewsChannelId;
        },
        activeChannelIndex: function () {
          var self = this;
          return this.cates.findIndex(function (cate) {
            return cate.iChanId === self.cateId;
          });
        },
      },
      watch: {
        "$route.query.category": function () {
          this.renderPage(1, "cate");
        },
      },
      asyncData: function (nuxtContext) {
        var query = nuxtContext.query,
          store = nuxtContext.store,
          category = query.category,
          channelId = Number(category || defaultNewsChannelId),
          cachedPageIndex = store.state.newsCache.pageIndex,
          blockGachaAnnounce = store.getters.blockGachaAnnounce;
        return (
          store.commit("setNewsCache", {
            pageIndex: 1,
          }),
          Promise.all([
            newsCMSAPI.a.getSliderNews(
              {
                data: {
                  sLangKey: store.state.lang,
                },
              },
              blockGachaAnnounce,
            ),
            newsCMSAPI.a.getCates({
              data: {
                sLangKey: store.state.lang,
              },
            }),
            newsCMSAPI.a.getAllNews(
              {
                data: {
                  iPageSize: 9,
                  iPage: cachedPageIndex,
                  iChanId: channelId,
                  sLangKey: store.state.lang,
                },
              },
              blockGachaAnnounce,
            ),
          ]).then(function (responses) {
            var responseTriple = Object(vendorBundle.a)(responses, 3),
              sliderRes = responseTriple[0],
              cateTree = responseTriple[1].arrList,
              listRes = responseTriple[2],
              rootCate = cateTree[0],
              childCates = rootCate.children,
              cates = [rootCate]
                .concat(Object(babelToConsumableArrayHelper.a)(childCates.reverse()))
                .filter(function (cateEntry) {
                  return cateEntry.sChanName;
                });
            return (
              store.commit("setNewsCates", childCates),
              {
                latestNewsList: sliderRes.list.slice(0, 6),
                cates: cates,
                initPage: cachedPageIndex,
                newsList: listRes.list,
                total: Math.ceil(listRes.iTotal / 9),
              }
            );
          })
        );
      },
      mounted: function () {
        var mountedSelf = this,
          cachedNewsIndex = this.$store.state.newsCache.newsIndex;
        -1 !== cachedNewsIndex &&
          setTimeout(function () {
            var scrollTarget = document.querySelector(".news-wrap").offsetTop - 30;
            if (cachedNewsIndex >= 3) {
              var itemOffsetTemp,
                fourthNewsItemEl = document.querySelectorAll(".news-list__item")[3];
              scrollTarget +=
                null !== (itemOffsetTemp = null == fourthNewsItemEl ? void 0 : fourthNewsItemEl.offsetTop) &&
                void 0 !== itemOffsetTemp
                  ? itemOffsetTemp
                  : 0;
            }
            ($("html,body").animate(
              {
                scrollTop: scrollTarget,
              },
              0,
            ),
              mountedSelf.$store.commit("setNewsCache", {
                newsIndex: -1,
              }));
          }, 0);
      },
      methods: {
        renderPage: function (page, renderType) {
          var renderSelf = this;
          newsCMSAPI.a
            .getAllNews(
              {
                cache: !0,
                data: {
                  iChanId: this.cateId,
                  iPageSize: 9,
                  iPage: page,
                  sLangKey: this.$store.state.lang,
                },
              },
              this.$store.getters.blockGachaAnnounce,
            )
            .then(function (data) {
              if (
                ((renderSelf.newsList = data.list),
                (renderSelf.total = Math.ceil(data.iTotal / 9)),
                (renderSelf.initPage = page),
                "cate" !== renderType)
              ) {
                var wrapOffsetTop = document.querySelector(".news-wrap").offsetTop;
                $("html,body").animate(
                  {
                    scrollTop: wrapOffsetTop,
                  },
                  0,
                );
              }
            });
        },
        handlePaginationClick: function (paginationEvent) {
          var targetEl = paginationEvent.target || paginationEvent.srcElement;
          if (targetEl.className.indexOf("swiper-pagination-index") > -1) {
            var bulletNumber = targetEl.className
              .split(" ")
              .find(function (classToken) {
                return classToken.includes("swiper-pagination-index-");
              })
              .split("-")
              .pop();
            this.$trackButton("news_point", "".concat(bulletNumber));
          }
        },
        handlePicClick: function (newsItem, clickedIndex) {
          (this.$store.commit("setNewsCache", {
            pageIndex: this.initPage,
            newsIndex: clickedIndex,
          }),
            this.$trackButton("news_pics", "".concat(newsItem.iInfoId)));
        },
      },
    },
    componentNormalizer = (webpackRequire(1395), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      newsPageOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "news",
          },
          [
            h(
              "div",
              {
                staticClass: "news-container",
              },
              [
                h("pageTab", {
                  attrs: {
                    "nav-num": 4,
                  },
                }),
                vm._v(" "),
                h(
                  "div",
                  {
                    staticClass: "news-slider",
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "news-slider__title",
                      },
                      [vm._v(vm._s(vm.$getI18nWord("nav3Label")))],
                    ),
                    vm._v(" "),
                    h(
                      "client-only",
                      [
                        vm.latestNewsList.length < 3
                          ? h(
                              "ul",
                              {
                                staticClass: "news-slider__latest ul",
                              },
                              vm._l(vm.latestNewsList, function (latestNews) {
                                return h(
                                  "li",
                                  {
                                    key: latestNews.id,
                                    staticClass: "news-slider__latest-item",
                                  },
                                  [
                                    h(
                                      "nuxt-link",
                                      {
                                        staticClass: "news-slider__latest-img",
                                        attrs: {
                                          to: latestNews.sExt["news-self-path"]
                                            ? {
                                                name: "lang-news".concat(latestNews.sExt["news-self-path"]),
                                              }
                                            : {
                                                name: "lang-news-id",
                                                params: {
                                                  id: latestNews.iInfoId,
                                                },
                                              },
                                        },
                                        nativeOn: {
                                          click: function (latestClickEvent) {
                                            return vm.handlePicClick(latestNews);
                                          },
                                        },
                                      },
                                      [
                                        h("img", {
                                          attrs: {
                                            src: latestNews.banner,
                                            alt: "",
                                          },
                                        }),
                                      ],
                                    ),
                                  ],
                                  1,
                                );
                              }),
                              0,
                            )
                          : h(
                              "swiper",
                              {
                                ref: "mySwiper",
                                staticClass: "news-slider__latest",
                                attrs: {
                                  options: vm.swiperOption,
                                },
                              },
                              vm._l(vm.latestNewsList, function (sliderNews) {
                                return h(
                                  "swiper-slide",
                                  {
                                    key: sliderNews.id,
                                    staticClass: "news-slider__latest-item",
                                  },
                                  [
                                    h(
                                      "nuxt-link",
                                      {
                                        staticClass: "news-slider__latest-img",
                                        attrs: {
                                          to: sliderNews.sExt["news-self-path"]
                                            ? {
                                                name: "lang-news".concat(sliderNews.sExt["news-self-path"]),
                                              }
                                            : {
                                                name: "lang-news-id",
                                                params: {
                                                  id: sliderNews.iInfoId,
                                                },
                                              },
                                        },
                                        nativeOn: {
                                          click: function (sliderClickEvent) {
                                            return vm.handlePicClick(sliderNews);
                                          },
                                        },
                                      },
                                      [
                                        h("img", {
                                          attrs: {
                                            src: sliderNews.banner,
                                            alt: "",
                                          },
                                        }),
                                      ],
                                    ),
                                  ],
                                  1,
                                );
                              }),
                              1,
                            ),
                      ],
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
                            value: vm.latestNewsList.length > 1,
                            expression: "latestNewsList.length > 1",
                          },
                        ],
                        staticClass: "news-slider__pagination",
                      },
                      [
                        h("div", {
                          staticClass: "swiper-pagination",
                          attrs: {
                            slot: "pagination",
                          },
                          on: {
                            click: function (paginationClickEvent) {
                              return vm.handlePaginationClick(paginationClickEvent);
                            },
                          },
                          slot: "pagination",
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
                    ref: "newsWrapper",
                    staticClass: "news-wrap",
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "news-tab",
                      },
                      vm._l(vm.cates, function (cateTab, cateIndex) {
                        return h(
                          "nuxt-link",
                          {
                            key: cateTab.iChanId,
                            staticClass: "news-tab__item",
                            class: {
                              "news-tab__item--active": cateTab.iChanId.toString() === vm.cateId.toString(),
                            },
                            attrs: {
                              to: {
                                path:
                                  0 !== cateIndex
                                    ? "/".concat(vm.lang, "/news?category=").concat(cateTab.iChanId)
                                    : "/".concat(vm.lang, "/news"),
                              },
                            },
                          },
                          [
                            h(
                              "div",
                              {
                                staticClass: "news-tab__label",
                              },
                              [vm._v("\n            " + vm._s(cateTab.sChanName) + "\n          ")],
                            ),
                            vm._v(" "),
                            h("div", {
                              staticClass: "news-tab__label-active",
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
                        staticClass: "news-list",
                      },
                      vm._l(vm.newsList, function (news, newsIndex) {
                        return h(
                          "div",
                          {
                            key: news.iInfoId,
                            staticClass: "news-list__item",
                          },
                          [
                            h(
                              "nuxt-link",
                              {
                                attrs: {
                                  to: news.sExt["news-self-path"]
                                    ? {
                                        name: "lang-news".concat(news.sExt["news-self-path"]),
                                      }
                                    : {
                                        name: "lang-news-id",
                                        params: {
                                          id: news.iInfoId,
                                        },
                                      },
                                },
                                nativeOn: {
                                  click: function (newsClickEvent) {
                                    return vm.handlePicClick(news, newsIndex);
                                  },
                                },
                              },
                              [
                                h(
                                  "div",
                                  {
                                    staticClass: "news-list__item-banner",
                                  },
                                  [
                                    h("img", {
                                      attrs: {
                                        src: news.banner,
                                        alt: "",
                                      },
                                    }),
                                  ],
                                ),
                              ],
                            ),
                            vm._v(" "),
                            h(
                              "div",
                              {
                                staticClass: "news-list__item-content",
                              },
                              [
                                h(
                                  "div",
                                  {
                                    staticClass: "news-list__item-date",
                                  },
                                  [
                                    h("div", [vm._v(vm._s(news.dateFormat))]),
                                    vm._v(" "),
                                    h("news-tag", {
                                      attrs: {
                                        channel: news.sChanId[0],
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                                vm._v(" "),
                                h(
                                  "nuxt-link",
                                  {
                                    attrs: {
                                      to: news.sExt["news-self-path"]
                                        ? {
                                            name: "lang-news".concat(news.sExt["news-self-path"]),
                                          }
                                        : {
                                            name: "lang-news-id",
                                            params: {
                                              id: news.iInfoId,
                                            },
                                          },
                                    },
                                  },
                                  [
                                    h(
                                      "div",
                                      {
                                        staticClass: "news-list__item-title",
                                      },
                                      [vm._v("\n                " + vm._s(news.title) + "\n              ")],
                                    ),
                                    vm._v(" "),
                                    h("div", {
                                      staticClass: "news-list__item-desc",
                                      domProps: {
                                        innerHTML: vm._s(news.summary),
                                      },
                                    }),
                                  ],
                                ),
                              ],
                              1,
                            ),
                          ],
                          1,
                        );
                      }),
                      0,
                    ),
                    vm._v(" "),
                    vm.total > 1
                      ? h("mihoyo-pager-rich", {
                          staticClass: "news-pager",
                          attrs: {
                            "total-page": vm.total,
                            "show-jump": !1,
                            "show-prev": !0,
                            "show-next": !0,
                            "init-page": vm.initPage,
                            "next-text": "<",
                            "prev-text": ">",
                          },
                          on: {
                            go: vm.renderPage,
                          },
                        })
                      : vm._e(),
                  ],
                  1,
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
