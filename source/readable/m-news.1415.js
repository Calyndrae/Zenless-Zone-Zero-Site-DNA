/**
 * m-news — readable reconstruction of webpack module 1415 (chunk f87ccae.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/f87ccae.js
 *
 * Nuxt page component `m-news` for the mobile news-list route `m-lang-news` (layout `m/default`). `asyncData` restores the list from `store.state.newsCache.mNews` when a cached `newsIndex` exists, otherwise loads the news category tree (`getCates`, `/getChildTree` under `CHANNEL_ID_CONFIG.NEWS.ALL`) and the first 10 items (`getAllNews`, honoring the `blockGachaAnnounce` getter) from the news API (module 1124), commits `setNewsCates` and returns `cates`, `cateChan`, `newsList`, `total` and `hasMore`; `mounted` consumes the cache (`setNewsCache` reset) and jQuery-scrolls back to the previously clicked `.m-news-list__item`. It renders the mobile `pageTab` (nav-num 4), a `m-news-slider__title` (i18n `nav3Label`), a `m-news-tab` of `nuxt-link` category tabs (`/m/<lang>/news?category=...`, keeping `shareType`) with a sliding `m-news-tab__thumb`, and a `m-news-list` of banner/date/`news-tag`/title/summary links to `m-lang-news-id` (or a `news-self-path` route) whose click (`handlePicClick`) stores the list in `setNewsCache` and tracks `news_pics`; the `m-news-foot` shows a `load-more` button (`handleMore` -> `getList` appends the next page, i18n `loadMore`/`loadTxt`) or `no-more` with a `back-top` that animates `html,body` to the top. Category query changes call `reload`.
 *
 * Exports (minified key → meaning):
 *   default → the `m-news` mobile news-list page Vue component (route m-lang-news, compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1415 from f87ccae.js
// deps: 32, 1150, 71, 98, 1143, 556, 136, 77, 137, 67, 1120, 155, 28, 1149, 1163, 1124, 1311, 36
const module_1415 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    babelToConsumableArrayHelper = webpackRequire(1150),
    vendorBundle2 = webpackRequire(71),
    appConfig =
      (webpackRequire(98),
      webpackRequire(1143),
      webpackRequire(556),
      webpackRequire(136),
      webpackRequire(77),
      webpackRequire(137),
      webpackRequire(67),
      webpackRequire(1120),
      webpackRequire(155),
      webpackRequire(28)),
    pageTabComponent = webpackRequire(1149),
    newsTagComponent = webpackRequire(1163),
    newsCMSAPI = webpackRequire(1124),
    defaultNewsChannelId = appConfig.CHANNEL_ID_CONFIG.NEWS.ALL,
    pageSize = 10,
    newsPageOptions = {
      layout: "m/default",
      name: "m-news",
      components: {
        pageTab: pageTabComponent.a,
        newsTag: newsTagComponent.a,
      },
      data: function () {
        return {
          page: 1,
          isLoading: !1,
          btntext: this.$getI18nWord("loadMore"),
        };
      },
      head: function () {
        return {
          title: "".concat(this.$getI18nWord("nav3")).concat(this.$getI18nWord("seoTitlePrefix")),
        };
      },
      computed: {
        cateId: function () {
          return +(this.$route.query.category || defaultNewsChannelId);
        },
        activeChannelIndex: function () {
          var self = this;
          return this.cates.findIndex(function (cate) {
            return cate.iChanId === self.cateId;
          });
        },
        swiper: function () {
          return this.$refs.mySwiper.swiper;
        },
        lang: function () {
          return this.$store.state.lang;
        },
      },
      watch: {
        "$route.query.category": function () {
          this.reload();
        },
      },
      asyncData: function (nuxtContext) {
        var params = nuxtContext.params,
          store = nuxtContext.store,
          cateParam = params.cate,
          channelId = Number(cateParam || appConfig.CHANNEL_ID_CONFIG.NEWS.ALL),
          blockGachaAnnounce = store.getters.blockGachaAnnounce,
          newsCache = store.state.newsCache,
          cachedNewsIndex = newsCache.newsIndex,
          cachedNewsList = newsCache.mNews.newsList;
        return -1 !== cachedNewsIndex && cachedNewsList && 0 !== cachedNewsList.length
          ? JSON.parse(JSON.stringify(store.state.newsCache.mNews))
          : Promise.all([
              newsCMSAPI.a.getCates({
                data: {
                  sLangKey: store.state.lang,
                },
              }),
              newsCMSAPI.a.getAllNews(
                {
                  data: {
                    iPageSize: pageSize,
                    iPage: 1,
                    iChanId: channelId,
                    sLangKey: store.state.lang,
                  },
                },
                blockGachaAnnounce,
              ),
            ]).then(function (responses) {
              var responsePair = Object(vendorBundle2.a)(responses, 2),
                cateTree = responsePair[0].arrList,
                listRes = responsePair[1],
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
                  cates: cates,
                  cateChan: cates.find(function (candidateCate) {
                    return candidateCate.iChanId === channelId;
                  }),
                  newsList: listRes.list,
                  total: Math.ceil(listRes.iTotal / pageSize),
                  hasMore: listRes.iTotal > pageSize,
                }
              );
            });
      },
      mounted: function () {
        var itemOffsetTemp,
          storedNewsCache = this.$store.state.newsCache,
          newsIndex = storedNewsCache.newsIndex,
          pageIndex = storedNewsCache.pageIndex;
        if (-1 !== newsIndex) {
          ((this.page = pageIndex),
            this.$store.commit("setNewsCache", {
              pageIndex: 1,
              newsIndex: -1,
              mNews: {},
            }));
          var scrollTarget = document.querySelector(".m-news-main").offsetTop - 20,
            newsItemEl = document.querySelectorAll(".m-news-list__item")[newsIndex];
          ((scrollTarget +=
            null !== (itemOffsetTemp = null == newsItemEl ? void 0 : newsItemEl.offsetTop) &&
            void 0 !== itemOffsetTemp
              ? itemOffsetTemp
              : 0),
            setTimeout(function () {
              $("html,body").animate(
                {
                  scrollTop: scrollTarget,
                },
                0,
              );
            }, 0));
        }
      },
      methods: {
        reload: function () {
          var reloadSelf = this;
          return Object(vendorBundle.a)(
            regeneratorRuntime.mark(function reloadGenerator() {
              var reloadParams, reloadRes, totalCount, reloadedList;
              return regeneratorRuntime.wrap(function (reloadContext) {
                for (;;)
                  switch ((reloadContext.prev = reloadContext.next)) {
                    case 0:
                      return (
                        (reloadSelf.page = 1),
                        (reloadParams = {
                          data: {
                            iChanId: reloadSelf.cateId,
                            iPageSize: pageSize,
                            iPage: reloadSelf.page,
                            sLangKey: reloadSelf.lang,
                          },
                        }),
                        (reloadContext.next = 4),
                        newsCMSAPI.a.getAllNews(reloadParams, reloadSelf.$store.getters.blockGachaAnnounce)
                      );
                    case 4:
                      ((reloadRes = reloadContext.sent),
                        (totalCount = reloadRes.iTotal),
                        (reloadedList = reloadRes.list),
                        (reloadSelf.hasMore = totalCount > pageSize),
                        (reloadSelf.newsList = reloadedList));
                    case 9:
                    case "end":
                      return reloadContext.stop();
                  }
              }, reloadGenerator);
            }),
          )();
        },
        handleTop: function () {
          $("html,body").animate(
            {
              scrollTop: 0,
            },
            600,
          );
        },
        handleMore: function () {
          var moreSelf = this;
          return Object(vendorBundle.a)(
            regeneratorRuntime.mark(function handleMoreGenerator() {
              return regeneratorRuntime.wrap(
                function (moreContext) {
                  for (;;)
                    switch ((moreContext.prev = moreContext.next)) {
                      case 0:
                        if (((moreSelf.page += 1), !moreSelf.isLoading)) {
                          moreContext.next = 3;
                          break;
                        }
                        return moreContext.abrupt("return");
                      case 3:
                        return (
                          (moreSelf.btntext = moreSelf.$getI18nWord("loadTxt")),
                          (moreSelf.isLoading = !0),
                          (moreContext.prev = 5),
                          (moreContext.next = 8),
                          moreSelf.getList()
                        );
                      case 8:
                        ((moreSelf.isLoading = !1),
                          (moreSelf.btntext = moreSelf.$getI18nWord("loadMore")),
                          (moreContext.next = 16));
                        break;
                      case 12:
                        ((moreContext.prev = 12),
                          (moreContext.t0 = moreContext.catch(5)),
                          (moreSelf.isLoading = !1),
                          (moreSelf.btntext = moreSelf.$getI18nWord("loadMore")));
                      case 16:
                      case "end":
                        return moreContext.stop();
                    }
                },
                handleMoreGenerator,
                null,
                [[5, 12]],
              );
            }),
          )();
        },
        getList: function () {
          var listSelf = this;
          return Object(vendorBundle.a)(
            regeneratorRuntime.mark(function getListGenerator() {
              var listParams, pageRes;
              return regeneratorRuntime.wrap(function (listContext) {
                for (;;)
                  switch ((listContext.prev = listContext.next)) {
                    case 0:
                      return (
                        (listParams = {
                          data: {
                            iChanId: listSelf.cateId,
                            iPageSize: pageSize,
                            iPage: listSelf.page,
                            sLangKey: listSelf.$store.state.lang,
                          },
                        }),
                        (listContext.next = 3),
                        newsCMSAPI.a.getAllNews(listParams, listSelf.$store.getters.blockGachaAnnounce)
                      );
                    case 3:
                      return (
                        (pageRes = listContext.sent),
                        (listSelf.newsList = [].concat(
                          Object(babelToConsumableArrayHelper.a)(listSelf.newsList),
                          Object(babelToConsumableArrayHelper.a)(pageRes.list),
                        )),
                        (listSelf.hasMore = listSelf.newsList.length < pageRes.iTotal),
                        listContext.abrupt("return", pageRes)
                      );
                    case 7:
                    case "end":
                      return listContext.stop();
                  }
              }, getListGenerator);
            }),
          )();
        },
        handlePicClick: function (newsItem, clickedIndex) {
          (this.$store.commit("setNewsCache", {
            mNews: {
              cates: this.cates,
              newsList: this.newsList.slice(),
              hasMore: this.hasMore,
            },
            pageIndex: this.page,
            newsIndex: clickedIndex,
          }),
            this.$trackButton("news_pics", "".concat(newsItem.iInfoId)));
        },
      },
    },
    componentNormalizer = (webpackRequire(1311), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      newsPageOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "m-news",
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
                staticClass: "m-news-container section-wrap",
              },
              [
                h(
                  "div",
                  {
                    staticClass: "m-news-slider",
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "m-news-slider__title",
                      },
                      [vm._v(vm._s(vm.$getI18nWord("nav3Label")))],
                    ),
                  ],
                ),
                vm._v(" "),
                h(
                  "div",
                  {
                    staticClass: "m-news-main",
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "m-news-tab",
                      },
                      [
                        h("div", {
                          staticClass: "m-news-tab__thumb",
                          style: {
                            left: "".concat(1.58 * vm.activeChannelIndex + 0.12, "rem"),
                          },
                        }),
                        vm._v(" "),
                        vm._l(vm.cates, function (cateTab, cateIndex) {
                          return h(
                            "nuxt-link",
                            {
                              key: cateTab.iChanId,
                              staticClass: "m-news-tab__item",
                              class: {
                                "m-news-tab__item--active": cateTab.iChanId === vm.cateId,
                              },
                              attrs: {
                                to: {
                                  path:
                                    0 !== cateIndex
                                      ? "/m/"
                                          .concat(vm.lang, "/news?category=")
                                          .concat(cateTab.iChanId)
                                          .concat(
                                            vm.$route.query.shareType
                                              ? "&shareType=" + vm.$route.query.shareType
                                              : "",
                                          )
                                      : "/m/"
                                          .concat(vm.lang, "/news")
                                          .concat(
                                            vm.$route.query.shareType
                                              ? "?shareType=" + vm.$route.query.shareType
                                              : "",
                                          ),
                                },
                              },
                            },
                            [
                              h(
                                "div",
                                {
                                  staticClass: "m-news-tab__label",
                                },
                                [vm._v("\n            " + vm._s(cateTab.sChanName) + "\n          ")],
                              ),
                            ],
                          );
                        }),
                      ],
                      2,
                    ),
                    vm._v(" "),
                    h(
                      "div",
                      {
                        staticClass: "m-news-list",
                      },
                      vm._l(vm.newsList, function (news, newsListIndex) {
                        return h(
                          "nuxt-link",
                          {
                            key: news.iInfoId,
                            staticClass: "m-news-list__item",
                            attrs: {
                              to: news.sExt["news-self-path"]
                                ? {
                                    name: "m-lang-news".concat(news.sExt["news-self-path"]),
                                  }
                                : {
                                    name: "m-lang-news-id",
                                    params: {
                                      id: news.iInfoId,
                                    },
                                  },
                            },
                            nativeOn: {
                              click: function (newsClickEvent) {
                                return vm.handlePicClick(news, newsListIndex);
                              },
                            },
                          },
                          [
                            h(
                              "div",
                              {
                                staticClass: "m-news-list__item-banner",
                              },
                              [
                                h("img", {
                                  attrs: {
                                    src: news.banner,
                                    alt: "banner",
                                  },
                                }),
                              ],
                            ),
                            vm._v(" "),
                            h(
                              "div",
                              {
                                staticClass: "m-news-list__item-content",
                              },
                              [
                                h(
                                  "div",
                                  {
                                    staticClass: "m-news-list__item-date",
                                  },
                                  [
                                    h("div", [vm._v(vm._s(news.dateFormat))]),
                                    vm._v(" "),
                                    h("news-tag", {
                                      attrs: {
                                        channel: news.sChanId[0],
                                        mob: !0,
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                                vm._v(" "),
                                h(
                                  "div",
                                  {
                                    staticClass: "m-news-list__item-title ellipsis",
                                  },
                                  [vm._v("\n              " + vm._s(news.title) + "\n            ")],
                                ),
                                vm._v(" "),
                                h("div", {
                                  staticClass: "m-news-list__item-desc ellipsis",
                                  domProps: {
                                    innerHTML: vm._s(news.summary),
                                  },
                                }),
                              ],
                            ),
                          ],
                        );
                      }),
                      1,
                    ),
                  ],
                ),
                vm._v(" "),
                h(
                  "div",
                  {
                    staticClass: "m-news-foot",
                  },
                  [
                    vm.hasMore
                      ? h(
                          "div",
                          {
                            staticClass: "load-more",
                            on: {
                              click: vm.handleMore,
                            },
                          },
                          [vm._v("\n        " + vm._s(vm.$getI18nWord("loadMore")) + "\n      ")],
                        )
                      : h(
                          "div",
                          {
                            staticClass: "no-more",
                          },
                          [
                            h("div", [vm._v(vm._s(vm.$getI18nWord("noMore")))]),
                            vm._v(" "),
                            h(
                              "div",
                              {
                                staticClass: "back-top",
                                on: {
                                  click: function (backTopClickEvent) {
                                    return vm.handleTop();
                                  },
                                },
                              },
                              [vm._v(vm._s(vm.$getI18nWord("textBackTop")))],
                            ),
                          ],
                        ),
                  ],
                ),
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
