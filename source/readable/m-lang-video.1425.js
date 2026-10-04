/**
 * m-lang-video — readable reconstruction of webpack module 1425 (chunk fcdddd8.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/fcdddd8.js
 *
 * Nuxt page component `m-lang-video` for the mobile video-list route (layout `m/default`). `asyncData` uses the video API (module 1153) to fetch the category tree (`getCates`, `/getChildTree` under `CHANNEL_ID_CONFIG.VIDEO.ALL`) and the first page of 8 videos (`getAllVideos`) for `query.category` (default `VIDEO.ALL`), logs both responses, commits the child categories with the `setVideoCates` mutation and returns `cates` (root + reversed children with a `sChanName`), `videoList` and `total` pages; `$route.query.category` changes re-run `renderPage`. It renders the mobile `pageTab` (nav-num 3), a `m-video-slider__title` (i18n `navVideoLabel`), a horizontally scrolling `m-video-tab` of `nuxt-link` category tabs (`/m/<lang>/video?category=...`, keeping `shareType`, tracked as `navigation_videos`) whose active tab is scrolled into view with jQuery `animate({scrollLeft})`, a `m-video-list` of cover/title/date items that open the `videoDialog` (module 1157) via `$openDialog` with a YouTube iframe or `videoUrl` source (tracked as `video_pics`), a `mihoyo-pager-rich` pager (module 1174) whose `go` event calls `renderPage` (re-fetch with `cache: true` and scroll to the list), and a `back-top` link (i18n `textBackTop`) that animates `html,body` to the top.
 *
 * Exports (minified key → meaning):
 *   default → the `m-lang-video` mobile video-list page Vue component (compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1425 from fcdddd8.js
// deps: 77, 206, 207, 1150, 71, 1143, 556, 136, 137, 67, 28, 1149, 1174, 1153, 1157, 1314, 36
const module_1425 = function (webpackModule, webpackExports, webpackRequire) {
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
      webpackRequire(28)),
    pageTabComponent = webpackRequire(1149),
    miHoYoPagerRichPaginationComponent = webpackRequire(1174),
    videoCMSAPI = webpackRequire(1153),
    videoDialogComponent = webpackRequire(1157),
    defaultVideoChannelId = appConfig.CHANNEL_ID_CONFIG.VIDEO.ALL,
    videoPageOptions = {
      layout: "m/default",
      name: "m-lang-video",
      components: {
        pageTab: pageTabComponent.a,
        mihoyoPagerRich: miHoYoPagerRichPaginationComponent.a,
      },
      head: function () {
        return {
          title: "".concat(this.$getI18nWord("seoTitlePrefix")).concat(this.$getI18nWord("navVideo")),
        };
      },
      data: function () {
        return {
          initPage: 1,
        };
      },
      computed: {
        cateId: function () {
          return this.$route.query.category || defaultVideoChannelId;
        },
        activeChannelIndex: function () {
          var self = this;
          return (this.cates || []).findIndex(function (cate) {
            return cate.iChanId.toString() === self.cateId.toString();
          });
        },
        lang: function () {
          return this.$store.state.lang;
        },
      },
      watch: {
        "$route.query.category": function () {
          this.renderPage(1, "cate");
        },
        activeChannelIndex: function () {
          this.scrollActiveTabToStart();
        },
        cates: function () {
          this.scrollActiveTabToStart();
        },
      },
      mounted: function () {
        var mountedSelf = this;
        setTimeout(function () {
          return mountedSelf.scrollActiveTabToStart();
        }, 100);
      },
      asyncData: function (nuxtContext) {
        var query = nuxtContext.query,
          store = nuxtContext.store,
          category = query.category,
          channelId = Number(category || defaultVideoChannelId);
        return Promise.all([
          videoCMSAPI.a.getCates({
            data: {
              sLangKey: store.state.lang,
            },
          }),
          videoCMSAPI.a.getAllVideos({
            data: {
              iPageSize: 8,
              iPage: 1,
              iChanId: channelId,
              sLangKey: store.state.lang,
            },
          }),
        ]).then(function (responses) {
          var responsePair = Object(vendorBundle.a)(responses, 2),
            catesRes = responsePair[0],
            listRes = responsePair[1];
          (console.log("catesRes", catesRes), console.log("listRes", listRes));
          var cateTree = catesRes.arrList,
            rootCate = cateTree && cateTree[0],
            childCates = (rootCate && rootCate.children) || [],
            cates = [rootCate]
              .concat(Object(babelToConsumableArrayHelper.a)((childCates || []).reverse()))
              .filter(function (cateEntry) {
                return cateEntry && cateEntry.sChanName;
              });
          return (
            store.commit("setVideoCates", childCates),
            {
              cates: cates,
              videoList: listRes.list,
              total: Math.ceil(listRes.iTotal / 8),
            }
          );
        });
      },
      methods: {
        scrollActiveTabToStart: function () {
          var scrollSelf = this;
          this.$nextTick(function () {
            var tabScrollEl = scrollSelf.$refs.tabScroll,
              activeIndex = scrollSelf.activeChannelIndex;
            if (tabScrollEl && !(activeIndex < 0)) {
              var activeTabEl = tabScrollEl.querySelectorAll(".m-video-tab__item")[activeIndex];
              if (activeTabEl) {
                var maxScrollLeft = tabScrollEl.scrollWidth - tabScrollEl.clientWidth;
                if (!(maxScrollLeft <= 0)) {
                  var scrollRect = tabScrollEl.getBoundingClientRect(),
                    tabRect = activeTabEl.getBoundingClientRect(),
                    targetScrollLeft = tabScrollEl.scrollLeft + (tabRect.left - scrollRect.left),
                    clampedScrollLeft = Math.min(Math.max(0, targetScrollLeft), maxScrollLeft);
                  $(tabScrollEl).stop(!0).animate(
                    {
                      scrollLeft: clampedScrollLeft,
                    },
                    300,
                  );
                }
              }
            }
          });
        },
        handleTabClick: function (clickedCate, tabIndex) {
          this.$trackButton("navigation_videos", tabIndex);
        },
        renderPage: function (page, renderType) {
          var renderSelf = this;
          videoCMSAPI.a
            .getAllVideos({
              cache: !0,
              data: {
                iChanId: this.cateId,
                iPageSize: 8,
                iPage: page,
                sLangKey: this.$store.state.lang,
              },
            })
            .then(function (data) {
              if (
                ((renderSelf.videoList = data.list),
                (renderSelf.total = Math.ceil(data.iTotal / 8)),
                (renderSelf.initPage = page),
                "cate" !== renderType)
              ) {
                var videoWrapperEl = renderSelf.$refs.videoWrapper;
                if (videoWrapperEl) {
                  var wrapperOffsetTop = videoWrapperEl.offsetTop;
                  $("html,body").animate(
                    {
                      scrollTop: wrapperOffsetTop - 20,
                    },
                    0,
                  );
                }
              }
            });
        },
        handleTop: function () {
          $("html,body").animate(
            {
              scrollTop: 0,
            },
            600,
          );
        },
        openPlayer: function (video) {
          var dialogInfo = this.getVideoDialogInfo(video);
          dialogInfo &&
            (this.$openDialog(videoDialogComponent.a, {
              transitionType: "scale",
              zIndex: 100,
              maskClose: !0,
              bgOpacity: 0.8,
              dialogInfo: dialogInfo,
            }),
            this.$trackButton("video_pics", video.id));
        },
        getVideoDialogInfo: function (video) {
          return video
            ? video.youtubeUrl
              ? {
                  iframeSrc: video.youtubeUrl,
                }
              : video.videoUrl
                ? {
                    src: video.videoUrl,
                  }
                : null
            : null;
        },
      },
    },
    componentNormalizer = (webpackRequire(1314), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      videoPageOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "m-video",
          },
          [
            h("pageTab", {
              attrs: {
                "nav-num": 3,
              },
            }),
            vm._v(" "),
            h(
              "div",
              {
                staticClass: "m-video-container section-wrap",
              },
              [
                h(
                  "div",
                  {
                    staticClass: "m-video-slider",
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "m-video-slider__title font-num",
                      },
                      [vm._v(vm._s(vm.$getI18nWord("navVideoLabel")))],
                    ),
                  ],
                ),
                vm._v(" "),
                h(
                  "div",
                  {
                    ref: "videoWrapper",
                    staticClass: "m-video-main",
                  },
                  [
                    h(
                      "div",
                      {
                        ref: "tabScroll",
                        staticClass: "m-video-tab",
                      },
                      vm._l(vm.cates, function (cateTab, cateIndex) {
                        return h(
                          "nuxt-link",
                          {
                            key: cateTab.iChanId,
                            staticClass: "m-video-tab__item",
                            class: {
                              "m-video-tab__item--active":
                                cateTab.iChanId.toString() === vm.cateId.toString(),
                            },
                            attrs: {
                              to: {
                                path:
                                  0 !== cateIndex
                                    ? "/m/"
                                        .concat(vm.lang, "/video?category=")
                                        .concat(cateTab.iChanId)
                                        .concat(
                                          vm.$route.query.shareType
                                            ? "&shareType=" + vm.$route.query.shareType
                                            : "",
                                        )
                                    : "/m/"
                                        .concat(vm.lang, "/video")
                                        .concat(
                                          vm.$route.query.shareType
                                            ? "?shareType=" + vm.$route.query.shareType
                                            : "",
                                        ),
                              },
                            },
                            nativeOn: {
                              click: function (tabClickEvent) {
                                return vm.handleTabClick(cateTab, cateIndex);
                              },
                            },
                          },
                          [
                            h(
                              "span",
                              {
                                staticClass: "m-video-tab__label",
                              },
                              [vm._v(vm._s(cateTab.sChanName))],
                            ),
                          ],
                        );
                      }),
                      1,
                    ),
                    vm._v(" "),
                    h(
                      "div",
                      {
                        staticClass: "m-video-list",
                      },
                      vm._l(vm.videoList, function (videoItem) {
                        return h(
                          "div",
                          {
                            key: videoItem.iInfoId,
                            staticClass: "m-video-list__item",
                            on: {
                              click: function (videoClickEvent) {
                                return vm.openPlayer(videoItem);
                              },
                            },
                          },
                          [
                            h(
                              "div",
                              {
                                staticClass: "m-video-list__item-banner",
                              },
                              [
                                h("img", {
                                  attrs: {
                                    src: videoItem.innerCover,
                                    alt: "cover",
                                  },
                                }),
                              ],
                            ),
                            vm._v(" "),
                            h(
                              "div",
                              {
                                staticClass: "m-video-list__item-content",
                              },
                              [
                                h(
                                  "div",
                                  {
                                    staticClass: "m-video-list__item-title",
                                  },
                                  [vm._v("\n              " + vm._s(videoItem.title) + "\n            ")],
                                ),
                                vm._v(" "),
                                h(
                                  "div",
                                  {
                                    staticClass: "m-video-list__item-date font-num",
                                  },
                                  [vm._v("\n              " + vm._s(videoItem.date) + "\n            ")],
                                ),
                              ],
                            ),
                          ],
                        );
                      }),
                      0,
                    ),
                    vm._v(" "),
                    vm.total > 1 && vm.cateId
                      ? h("mihoyo-pager-rich", {
                          staticClass: "m-video-pager",
                          attrs: {
                            "init-page": vm.initPage,
                            "total-page": vm.total,
                            "show-jump": !1,
                            "show-prev": !0,
                            "show-next": !0,
                            "next-text": "<",
                            "prev-text": ">",
                          },
                          on: {
                            go: vm.renderPage,
                          },
                        })
                      : vm._e(),
                    vm._v(" "),
                    h(
                      "div",
                      {
                        staticClass: "m-video-foot",
                      },
                      [
                        h(
                          "div",
                          {
                            staticClass: "back-top font-hongmeng",
                            on: {
                              click: vm.handleTop,
                            },
                          },
                          [vm._v("\n          " + vm._s(vm.$getI18nWord("textBackTop")) + "\n        ")],
                        ),
                      ],
                    ),
                  ],
                  1,
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
