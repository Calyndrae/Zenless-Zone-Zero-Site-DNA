// page:lang-video — module 1420 from 53d09dd
// module 1420 from 53d09dd.js
// deps: 77, 206, 207, 71, 556, 136, 137, 155, 204, 1120, 119, 118, 28, 1126, 1174, 32, 98, 1153, 1399, 36, 347, 1157, 1402
const module_1420 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  (webpackRequire(77), webpackRequire(206), webpackRequire(207));
  var vendorBundle = webpackRequire(71),
    r_1 =
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
    m_2 = (webpackRequire(98), webpackRequire(1153)),
    h_3 = {
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
          return m_2.a.getCateDisplayName(
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
          var e_9 = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function t_10() {
              var n_11, o_12, r_13;
              return regeneratorRuntime.wrap(function (t_14) {
                for (;;)
                  switch ((t_14.prev = t_14.next)) {
                    case 0:
                      return ((t_14.next = 2), m_2.a.getCates());
                    case 2:
                      ((n_11 = t_14.sent),
                        (o_12 = m_2.a.parseCatesFromRes(n_11)),
                        (r_13 = o_12.children),
                        e_9.$store.commit("setVideoCates", r_13),
                        e_9.$store.commit("setVideoMainChanName", n_11.mainChanName || ""));
                    case 6:
                    case "end":
                      return t_14.stop();
                  }
              }, t_10);
            }),
          )();
        },
      },
    },
    v_4 = (webpackRequire(1399), webpackRequire(36)),
    A_5 = Object(v_4.a)(
      h_3,
      function () {
        var e_15 = this,
          t_16 = e_15._self._c;
        return e_15.displayName
          ? t_16(
              "div",
              {
                staticClass: "video-tag",
              },
              [
                t_16(
                  "div",
                  {
                    staticClass: "video-tag__text",
                  },
                  [e_15._v("\n      " + e_15._s(e_15.displayName) + "\n    ")],
                ),
              ],
            )
          : e_15._e();
      },
      [],
      !1,
      null,
      null,
      null,
    ).exports,
    backTop = webpackRequire(347),
    videoDialogComponent = webpackRequire(1157),
    y_6 = r_1.CHANNEL_ID_CONFIG.VIDEO.ALL,
    L_7 = {
      name: "lang-video",
      layout: "default",
      components: {
        pageTab: pageTabComponent.a,
        mihoyoPagerRich: miHoYoPagerRichPaginationComponent.a,
        videoTag: A_5,
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
              renderBullet: function (e_17, t_18) {
                return '<span class="'
                  .concat(t_18, " swiper-pagination-index-")
                  .concat(e_17 + 1, '"></span>');
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
          return this.$route.query.category || y_6;
        },
      },
      watch: {
        "$route.query.category": function () {
          this.renderPage(1, "cate");
        },
      },
      asyncData: function (e_19) {
        var t_20 = e_19.query,
          n_21 = e_19.store,
          r_22 = t_20.category,
          l_23 = Number(r_22 || y_6);
        return Promise.all([
          m_2.a.getSliderVideos({
            data: {
              sLangKey: n_21.state.lang,
            },
          }),
          m_2.a.getCates({
            data: {
              sLangKey: n_21.state.lang,
            },
          }),
          m_2.a.getAllVideos({
            data: {
              iPageSize: 9,
              iPage: 1,
              iChanId: l_23,
              sLangKey: n_21.state.lang,
            },
          }),
        ]).then(function (e_24) {
          var t_25 = Object(vendorBundle.a)(e_24, 3),
            r_26 = t_25[0],
            l_27 = t_25[1],
            c_28 = t_25[2],
            d_29 = m_2.a.parseCatesFromRes(l_27),
            h_30 = d_29.children,
            v_31 = d_29.tabCates;
          return (
            n_21.commit("setVideoCates", h_30),
            n_21.commit("setVideoMainChanName", l_27.mainChanName || ""),
            {
              latestVideoList: r_26.list.slice(0, 6),
              cates: v_31,
              videoList: c_28.list,
              total: Math.ceil(c_28.iTotal / 9),
            }
          );
        });
      },
      methods: {
        handlePaginationClick: function (e_32) {
          var t_33 = e_32.target || e_32.srcElement;
          if (t_33.className.indexOf("swiper-pagination-index") > -1) {
            var n_34 = t_33.className
              .split(" ")
              .find(function (e_35) {
                return e_35.includes("swiper-pagination-index-");
              })
              .split("-")
              .pop();
            this.$trackButton("video_point", "".concat(n_34));
          }
        },
        renderPage: function (e_36, t_37) {
          var n_38 = this;
          m_2.a
            .getAllVideos({
              cache: !0,
              data: {
                iChanId: this.cateId,
                iPageSize: 9,
                iPage: e_36,
                sLangKey: this.$store.state.lang,
              },
            })
            .then(function (data) {
              if (
                ((n_38.videoList = data.list),
                (n_38.total = Math.ceil(data.iTotal / 9)),
                (n_38.initPage = e_36),
                "cate" !== t_37)
              ) {
                var o_39 = document.querySelector(".video-wrap").offsetTop;
                $("html,body").animate(
                  {
                    scrollTop: o_39,
                  },
                  0,
                );
              }
            });
        },
        handleTabClick: function (e_40, t_41) {
          this.$trackButton("navigation_videos", t_41);
        },
        openPlayer: function (video) {
          var e_42 = this.getVideoDialogInfo(video);
          e_42 &&
            (this.$openDialog(videoDialogComponent.a, {
              transitionType: "scale",
              zIndex: 100,
              maskClose: !0,
              bgOpacity: 0.8,
              dialogInfo: e_42,
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
    C_8 =
      (webpackRequire(1402),
      Object(v_4.a)(
        L_7,
        function () {
          var e_43 = this,
            t_44 = e_43._self._c;
          return t_44(
            "div",
            {
              staticClass: "video",
            },
            [
              t_44(
                "div",
                {
                  staticClass: "video-container",
                },
                [
                  t_44("pageTab", {
                    attrs: {
                      "nav-num": 3,
                    },
                  }),
                  e_43._v(" "),
                  t_44(
                    "div",
                    {
                      staticClass: "video-slider",
                    },
                    [
                      t_44(
                        "div",
                        {
                          staticClass: "video-slider__title font-num",
                        },
                        [e_43._v(e_43._s(e_43.$getI18nWord("navVideoLabel")))],
                      ),
                      e_43._v(" "),
                      t_44(
                        "client-only",
                        [
                          e_43.latestVideoList.length < 3
                            ? t_44(
                                "ul",
                                {
                                  staticClass: "video-slider__latest ul",
                                },
                                e_43._l(e_43.latestVideoList, function (n_45) {
                                  return t_44(
                                    "li",
                                    {
                                      key: n_45.id,
                                      staticClass: "video-slider__latest-item",
                                    },
                                    [
                                      t_44(
                                        "div",
                                        {
                                          staticClass: "video-slider__latest-img",
                                          on: {
                                            click: function (t_46) {
                                              return e_43.openPlayer(n_45);
                                            },
                                          },
                                        },
                                        [
                                          t_44("img", {
                                            attrs: {
                                              src: n_45.innerCover,
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
                            : t_44(
                                "swiper",
                                {
                                  ref: "mySwiper",
                                  staticClass: "video-slider__latest",
                                  attrs: {
                                    options: e_43.swiperOption,
                                  },
                                },
                                e_43._l(e_43.latestVideoList, function (n_47) {
                                  return t_44(
                                    "swiper-slide",
                                    {
                                      key: n_47.id,
                                      staticClass: "video-slider__latest-item",
                                    },
                                    [
                                      t_44(
                                        "div",
                                        {
                                          staticClass: "video-slider__latest-img",
                                          on: {
                                            click: function (t_48) {
                                              return e_43.openPlayer(n_47);
                                            },
                                          },
                                        },
                                        [
                                          t_44("img", {
                                            attrs: {
                                              src: n_47.innerCover,
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
                      e_43._v(" "),
                      t_44(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e_43.latestVideoList.length > 1,
                              expression: "latestVideoList.length > 1",
                            },
                          ],
                          staticClass: "video-slider__pagination",
                          on: {
                            click: function (t_49) {
                              return e_43.handlePaginationClick(t_49);
                            },
                          },
                        },
                        [
                          t_44("div", {
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
                  e_43._v(" "),
                  t_44(
                    "div",
                    {
                      ref: "videoWrapper",
                      staticClass: "video-wrap",
                    },
                    [
                      t_44(
                        "div",
                        {
                          staticClass: "video-tab",
                        },
                        e_43._l(e_43.cates, function (n_50, i_51) {
                          return t_44(
                            "nuxt-link",
                            {
                              key: n_50.iChanId,
                              staticClass: "video-tab__item",
                              class: {
                                "video-tab__item--active": n_50.iChanId.toString() === e_43.cateId.toString(),
                              },
                              attrs: {
                                to: {
                                  path:
                                    0 !== i_51
                                      ? "/"
                                          .concat(e_43.lang, "/video?category=")
                                          .concat(n_50.iChanId)
                                          .concat(
                                            e_43.$route.query.shareType
                                              ? "&shareType=" + e_43.$route.query.shareType
                                              : "",
                                          )
                                      : "/"
                                          .concat(e_43.lang, "/video")
                                          .concat(
                                            e_43.$route.query.shareType
                                              ? "?shareType=" + e_43.$route.query.shareType
                                              : "",
                                          ),
                                },
                              },
                              nativeOn: {
                                click: function (t_52) {
                                  return e_43.handleTabClick(n_50, i_51);
                                },
                              },
                            },
                            [
                              t_44(
                                "div",
                                {
                                  staticClass: "video-tab__label",
                                },
                                [e_43._v("\n            " + e_43._s(n_50.sChanName) + "\n          ")],
                              ),
                              e_43._v(" "),
                              t_44("div", {
                                staticClass: "video-tab__label-active",
                              }),
                            ],
                          );
                        }),
                        1,
                      ),
                      e_43._v(" "),
                      t_44(
                        "div",
                        {
                          staticClass: "video-list",
                        },
                        e_43._l(e_43.videoList, function (n_53) {
                          return t_44(
                            "div",
                            {
                              key: n_53.iInfoId,
                              staticClass: "video-list__item",
                              on: {
                                click: function (t_54) {
                                  return e_43.openPlayer(n_53);
                                },
                              },
                            },
                            [
                              t_44(
                                "div",
                                {
                                  staticClass: "video-list__item-banner",
                                },
                                [
                                  t_44("img", {
                                    attrs: {
                                      src: n_53.innerCover,
                                      alt: "cover",
                                    },
                                  }),
                                ],
                              ),
                              e_43._v(" "),
                              t_44(
                                "div",
                                {
                                  staticClass: "video-list__item-content",
                                },
                                [
                                  t_44(
                                    "div",
                                    {
                                      staticClass: "video-list__item-date",
                                    },
                                    [
                                      t_44(
                                        "div",
                                        {
                                          staticClass: "font-num",
                                        },
                                        [e_43._v(e_43._s(n_53.date))],
                                      ),
                                      e_43._v(" "),
                                      t_44("video-tag", {
                                        attrs: {
                                          channel: n_53.sChanId && n_53.sChanId[0],
                                        },
                                      }),
                                    ],
                                    1,
                                  ),
                                  e_43._v(" "),
                                  t_44(
                                    "div",
                                    {
                                      staticClass: "video-list__item-title",
                                    },
                                    [e_43._v("\n              " + e_43._s(n_53.title) + "\n            ")],
                                  ),
                                ],
                              ),
                            ],
                          );
                        }),
                        0,
                      ),
                      e_43._v(" "),
                      e_43.total > 1 && e_43.cateId
                        ? t_44("mihoyo-pager-rich", {
                            staticClass: "video-pager",
                            attrs: {
                              "init-page": e_43.initPage,
                              "total-page": e_43.total,
                              "show-jump": !1,
                              "show-prev": !0,
                              "show-next": !0,
                              "next-text": "<",
                              "prev-text": ">",
                            },
                            on: {
                              go: e_43.renderPage,
                            },
                          })
                        : e_43._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              e_43._v(" "),
              t_44("div", {
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
  webpackExports.default = C_8.exports;
};
