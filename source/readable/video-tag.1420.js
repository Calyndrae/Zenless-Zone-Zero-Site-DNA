/**
 * video-tag — readable reconstruction of webpack module 1420 (chunk 53d09dd.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/53d09dd.js
 *
 * Desktop video-list page for the route `lang-video` (component name `lang-video`, layout `default`), bundled with an inline `video-tag` child component. `video-tag` takes a `channel` prop and shows a `video-tag__text` label from the video API (module 1153) `getCateDisplayName`, using the `videoCates`/`videoMainChanName` getters and, when they are empty, fetching `getCates` and committing `setVideoCates`/`setVideoMainChanName`. The page's `asyncData` loads `getSliderVideos`, `getCates` and a 9-item `getAllVideos` page for `query.category` (default `CHANNEL_ID_CONFIG.VIDEO.ALL`), commits the parsed categories and returns `latestVideoList` (first 6), `cates` (`tabCates`), `videoList` and `total`. It renders the desktop `pageTab` (nav-num 3), a `video-slider` (i18n `navVideoLabel`) with the latest videos as a list (fewer than 3) or a looped vue-awesome-swiper (ref `mySwiper`) with `swiper-pagination-index-N` bullets tracked as `video_point`, a `video-wrap` of `video-tab` category links (`/<lang>/video?category=...`, keeping `shareType`, tracked as `navigation_videos`), a `video-list` of cover/date/`video-tag`/title items and a `mihoyo-pager-rich` pager (module 1174) driving `renderPage` (re-fetch with `cache: true`, jQuery scroll to `.video-wrap`). Clicking a video calls `openPlayer`, which opens `videoDialog` (module 1157) via `$openDialog` with a YouTube iframe or `videoUrl` source and tracks `video_pics`.
 *
 * Exports (minified key → meaning):
 *   default → the `lang-video` desktop video-list page Vue component (with an inline `video-tag` child, compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1420 from 53d09dd.js
// deps: 77, 206, 207, 71, 556, 136, 137, 155, 204, 1120, 119, 118, 28, 1126, 1174, 32, 98, 1153, 1399, 36, 347, 1157, 1402
const module_1420 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  (webpackRequire(77), webpackRequire(206), webpackRequire(207));
  var vendorBundle = webpackRequire(71),
    appConfig =
      (webpackRequire(556),
      webpackRequire(136),
      webpackRequire(137),
      webpackRequire(155),
      webpackRequire(204),
      webpackRequire(1120),
      webpackRequire(119),
      webpackRequire(118),
      webpackRequire(28)),
    pageTabComponent = webpackRequire(1126),
    miHoYoPagerRichPaginationComponent = webpackRequire(1174),
    vendorBundle2 = webpackRequire(32),
    videoApi = (webpackRequire(98), webpackRequire(1153)),
    videoTagOptions = {
      name: "video-tag",
      props: {
        channel: {
          type: [Number, String],
          default: "",
        },
      },
      computed: {
        videoCates: function () {
          return this.$store.getters.videoCates || [];
        },
        displayName: function () {
          return videoApi.a.getCateDisplayName(
            this.channel,
            this.videoCates,
            this.$store.getters.videoMainChanName,
          );
        },
      },
      created: function () {
        (this.videoCates && this.videoCates.length) || this.getCates();
      },
      methods: {
        getCates: function () {
          var self = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function getCatesGenerator() {
              var catesRes, parsedCates, childCates;
              return regeneratorRuntime.wrap(function (context) {
                for (;;)
                  switch ((context.prev = context.next)) {
                    case 0:
                      return ((context.next = 2), videoApi.a.getCates());
                    case 2:
                      ((catesRes = context.sent),
                        (parsedCates = videoApi.a.parseCatesFromRes(catesRes)),
                        (childCates = parsedCates.children),
                        self.$store.commit("setVideoCates", childCates),
                        self.$store.commit("setVideoMainChanName", catesRes.mainChanName || ""));
                    case 6:
                    case "end":
                      return context.stop();
                  }
              }, getCatesGenerator);
            }),
          )();
        },
      },
    },
    componentNormalizer = (webpackRequire(1399), webpackRequire(36)),
    VideoTag = Object(componentNormalizer.a)(
      videoTagOptions,
      function () {
        var tagVm = this,
          tagH = tagVm._self._c;
        return tagVm.displayName
          ? tagH(
              "div",
              {
                staticClass: "video-tag",
              },
              [
                tagH(
                  "div",
                  {
                    staticClass: "video-tag__text",
                  },
                  [tagVm._v("\n      " + tagVm._s(tagVm.displayName) + "\n    ")],
                ),
              ],
            )
          : tagVm._e();
      },
      [],
      !1,
      null,
      null,
      null,
    ).exports,
    backTop = webpackRequire(347),
    videoDialogComponent = webpackRequire(1157),
    defaultVideoChannelId = appConfig.CHANNEL_ID_CONFIG.VIDEO.ALL,
    videoPageOptions = {
      name: "lang-video",
      layout: "default",
      components: {
        pageTab: pageTabComponent.a,
        mihoyoPagerRich: miHoYoPagerRichPaginationComponent.a,
        videoTag: VideoTag,
        backTop: backTop.a,
      },
      head: function () {
        return {
          title: "".concat(this.$getI18nWord("seoTitlePrefix")).concat(this.$getI18nWord("navVideo")),
        };
      },
      data: function () {
        return {
          initPage: 1,
          swiperOption: {
            slidesPerView: "auto",
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
      computed: {
        lang: function () {
          return this.$store.state.lang;
        },
        cateId: function () {
          return this.$route.query.category || defaultVideoChannelId;
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
          channelId = Number(category || defaultVideoChannelId);
        return Promise.all([
          videoApi.a.getSliderVideos({
            data: {
              sLangKey: store.state.lang,
            },
          }),
          videoApi.a.getCates({
            data: {
              sLangKey: store.state.lang,
            },
          }),
          videoApi.a.getAllVideos({
            data: {
              iPageSize: 9,
              iPage: 1,
              iChanId: channelId,
              sLangKey: store.state.lang,
            },
          }),
        ]).then(function (responses) {
          var responseTriple = Object(vendorBundle.a)(responses, 3),
            sliderRes = responseTriple[0],
            allCatesRes = responseTriple[1],
            listRes = responseTriple[2],
            parsedCateTree = videoApi.a.parseCatesFromRes(allCatesRes),
            videoChildCates = parsedCateTree.children,
            tabCates = parsedCateTree.tabCates;
          return (
            store.commit("setVideoCates", videoChildCates),
            store.commit("setVideoMainChanName", allCatesRes.mainChanName || ""),
            {
              latestVideoList: sliderRes.list.slice(0, 6),
              cates: tabCates,
              videoList: listRes.list,
              total: Math.ceil(listRes.iTotal / 9),
            }
          );
        });
      },
      methods: {
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
            this.$trackButton("video_point", "".concat(bulletNumber));
          }
        },
        renderPage: function (page, renderType) {
          var renderSelf = this;
          videoApi.a
            .getAllVideos({
              cache: !0,
              data: {
                iChanId: this.cateId,
                iPageSize: 9,
                iPage: page,
                sLangKey: this.$store.state.lang,
              },
            })
            .then(function (data) {
              if (
                ((renderSelf.videoList = data.list),
                (renderSelf.total = Math.ceil(data.iTotal / 9)),
                (renderSelf.initPage = page),
                "cate" !== renderType)
              ) {
                var wrapOffsetTop = document.querySelector(".video-wrap").offsetTop;
                $("html,body").animate(
                  {
                    scrollTop: wrapOffsetTop,
                  },
                  0,
                );
              }
            });
        },
        handleTabClick: function (clickedCate, tabIndex) {
          this.$trackButton("navigation_videos", tabIndex);
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
    pageComponent =
      (webpackRequire(1402),
      Object(componentNormalizer.a)(
        videoPageOptions,
        function () {
          var vm = this,
            h = vm._self._c;
          return h(
            "div",
            {
              staticClass: "video",
            },
            [
              h(
                "div",
                {
                  staticClass: "video-container",
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
                      staticClass: "video-slider",
                    },
                    [
                      h(
                        "div",
                        {
                          staticClass: "video-slider__title font-num",
                        },
                        [vm._v(vm._s(vm.$getI18nWord("navVideoLabel")))],
                      ),
                      vm._v(" "),
                      h(
                        "client-only",
                        [
                          vm.latestVideoList.length < 3
                            ? h(
                                "ul",
                                {
                                  staticClass: "video-slider__latest ul",
                                },
                                vm._l(vm.latestVideoList, function (latestVideo) {
                                  return h(
                                    "li",
                                    {
                                      key: latestVideo.id,
                                      staticClass: "video-slider__latest-item",
                                    },
                                    [
                                      h(
                                        "div",
                                        {
                                          staticClass: "video-slider__latest-img",
                                          on: {
                                            click: function (latestClickEvent) {
                                              return vm.openPlayer(latestVideo);
                                            },
                                          },
                                        },
                                        [
                                          h("img", {
                                            attrs: {
                                              src: latestVideo.innerCover,
                                              alt: "",
                                            },
                                          }),
                                        ],
                                      ),
                                    ],
                                  );
                                }),
                                0,
                              )
                            : h(
                                "swiper",
                                {
                                  ref: "mySwiper",
                                  staticClass: "video-slider__latest",
                                  attrs: {
                                    options: vm.swiperOption,
                                  },
                                },
                                vm._l(vm.latestVideoList, function (sliderVideo) {
                                  return h(
                                    "swiper-slide",
                                    {
                                      key: sliderVideo.id,
                                      staticClass: "video-slider__latest-item",
                                    },
                                    [
                                      h(
                                        "div",
                                        {
                                          staticClass: "video-slider__latest-img",
                                          on: {
                                            click: function (sliderClickEvent) {
                                              return vm.openPlayer(sliderVideo);
                                            },
                                          },
                                        },
                                        [
                                          h("img", {
                                            attrs: {
                                              src: sliderVideo.innerCover,
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
                              value: vm.latestVideoList.length > 1,
                              expression: "latestVideoList.length > 1",
                            },
                          ],
                          staticClass: "video-slider__pagination",
                          on: {
                            click: function (paginationClickEvent) {
                              return vm.handlePaginationClick(paginationClickEvent);
                            },
                          },
                        },
                        [
                          h("div", {
                            staticClass: "swiper-pagination",
                            attrs: {
                              slot: "pagination",
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
                      ref: "videoWrapper",
                      staticClass: "video-wrap",
                    },
                    [
                      h(
                        "div",
                        {
                          staticClass: "video-tab",
                        },
                        vm._l(vm.cates, function (cateTab, cateIndex) {
                          return h(
                            "nuxt-link",
                            {
                              key: cateTab.iChanId,
                              staticClass: "video-tab__item",
                              class: {
                                "video-tab__item--active":
                                  cateTab.iChanId.toString() === vm.cateId.toString(),
                              },
                              attrs: {
                                to: {
                                  path:
                                    0 !== cateIndex
                                      ? "/"
                                          .concat(vm.lang, "/video?category=")
                                          .concat(cateTab.iChanId)
                                          .concat(
                                            vm.$route.query.shareType
                                              ? "&shareType=" + vm.$route.query.shareType
                                              : "",
                                          )
                                      : "/"
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
                                "div",
                                {
                                  staticClass: "video-tab__label",
                                },
                                [vm._v("\n            " + vm._s(cateTab.sChanName) + "\n          ")],
                              ),
                              vm._v(" "),
                              h("div", {
                                staticClass: "video-tab__label-active",
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
                          staticClass: "video-list",
                        },
                        vm._l(vm.videoList, function (videoItem) {
                          return h(
                            "div",
                            {
                              key: videoItem.iInfoId,
                              staticClass: "video-list__item",
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
                                  staticClass: "video-list__item-banner",
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
                                  staticClass: "video-list__item-content",
                                },
                                [
                                  h(
                                    "div",
                                    {
                                      staticClass: "video-list__item-date",
                                    },
                                    [
                                      h(
                                        "div",
                                        {
                                          staticClass: "font-num",
                                        },
                                        [vm._v(vm._s(videoItem.date))],
                                      ),
                                      vm._v(" "),
                                      h("video-tag", {
                                        attrs: {
                                          channel: videoItem.sChanId && videoItem.sChanId[0],
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                  vm._v(" "),
                                  h(
                                    "div",
                                    {
                                      staticClass: "video-list__item-title",
                                    },
                                    [vm._v("\n              " + vm._s(videoItem.title) + "\n            ")],
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
                            staticClass: "video-pager",
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
                    ],
                    1,
                  ),
                ],
                1,
              ),
              vm._v(" "),
              h("div", {
                staticClass: "section__foot",
              }),
            ],
          );
        },
        [],
        !1,
        null,
        null,
        null,
      ));
  webpackExports.default = pageComponent.exports;
};
