// page:m-lang-video — module 1425 from fcdddd8
// module 1425 from fcdddd8.js
// deps: 77, 206, 207, 1150, 71, 1143, 556, 136, 137, 67, 28, 1149, 1174, 1153, 1157, 1314, 36
const module_1425 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  (webpackRequire(77), webpackRequire(206), webpackRequire(207));
  var babelToConsumableArrayHelper = webpackRequire(1150),
    vendorBundle = webpackRequire(71),
    c_1 =
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
    f_2 = c_1.CHANNEL_ID_CONFIG.VIDEO.ALL,
    v_3 = {
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
          return this.$route.query.category || f_2;
        },
        activeChannelIndex: function () {
          var e_5 = this;
          return (this.cates || []).findIndex(function (t_6) {
            return t_6.iChanId.toString() === e_5.cateId.toString();
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
        var e_7 = this;
        setTimeout(function () {
          return e_7.scrollActiveTabToStart();
        }, 100);
      },
      asyncData: function (e_8) {
        var t_9 = e_8.query,
          r_10 = e_8.store,
          c_11 = t_9.category,
          l_12 = Number(c_11 || f_2);
        return Promise.all([
          videoCMSAPI.a.getCates({
            data: {
              sLangKey: r_10.state.lang,
            },
          }),
          videoCMSAPI.a.getAllVideos({
            data: {
              iPageSize: 8,
              iPage: 1,
              iChanId: l_12,
              sLangKey: r_10.state.lang,
            },
          }),
        ]).then(function (e_13) {
          var t_14 = Object(vendorBundle.a)(e_13, 2),
            c_15 = t_14[0],
            l_16 = t_14[1];
          (console.log("catesRes", c_15), console.log("listRes", l_16));
          var d_17 = c_15.arrList,
            m_18 = d_17 && d_17[0],
            h_19 = (m_18 && m_18.children) || [],
            f_20 = [m_18]
              .concat(Object(babelToConsumableArrayHelper.a)((h_19 || []).reverse()))
              .filter(function (e_21) {
                return e_21 && e_21.sChanName;
              });
          return (
            r_10.commit("setVideoCates", h_19),
            {
              cates: f_20,
              videoList: l_16.list,
              total: Math.ceil(l_16.iTotal / 8),
            }
          );
        });
      },
      methods: {
        scrollActiveTabToStart: function () {
          var e_22 = this;
          this.$nextTick(function () {
            var t_23 = e_22.$refs.tabScroll,
              r_24 = e_22.activeChannelIndex;
            if (t_23 && !(r_24 < 0)) {
              var o_25 = t_23.querySelectorAll(".m-video-tab__item")[r_24];
              if (o_25) {
                var n_26 = t_23.scrollWidth - t_23.clientWidth;
                if (!(n_26 <= 0)) {
                  var c_27 = t_23.getBoundingClientRect(),
                    l_28 = o_25.getBoundingClientRect(),
                    d_29 = t_23.scrollLeft + (l_28.left - c_27.left),
                    m_30 = Math.min(Math.max(0, d_29), n_26);
                  $(t_23).stop(!0).animate(
                    {
                      scrollLeft: m_30,
                    },
                    300,
                  );
                }
              }
            }
          });
        },
        handleTabClick: function (e_31, t_32) {
          this.$trackButton("navigation_videos", t_32);
        },
        renderPage: function (e_33, t_34) {
          var r_35 = this;
          videoCMSAPI.a
            .getAllVideos({
              cache: !0,
              data: {
                iChanId: this.cateId,
                iPageSize: 8,
                iPage: e_33,
                sLangKey: this.$store.state.lang,
              },
            })
            .then(function (data) {
              if (
                ((r_35.videoList = data.list),
                (r_35.total = Math.ceil(data.iTotal / 8)),
                (r_35.initPage = e_33),
                "cate" !== t_34)
              ) {
                var o_36 = r_35.$refs.videoWrapper;
                if (o_36) {
                  var n_37 = o_36.offsetTop;
                  $("html,body").animate(
                    {
                      scrollTop: n_37 - 20,
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
          var e_38 = this.getVideoDialogInfo(video);
          e_38 &&
            (this.$openDialog(videoDialogComponent.a, {
              transitionType: "scale",
              zIndex: 100,
              maskClose: !0,
              bgOpacity: 0.8,
              dialogInfo: e_38,
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
    A_4 = (webpackRequire(1314), webpackRequire(36)),
    component = Object(A_4.a)(
      v_3,
      function () {
        var e_39 = this,
          t_40 = e_39._self._c;
        return t_40(
          "div",
          {
            staticClass: "m-video",
          },
          [
            t_40("pageTab", {
              attrs: {
                "nav-num": 3,
              },
            }),
            e_39._v(" "),
            t_40(
              "div",
              {
                staticClass: "m-video-container section-wrap",
              },
              [
                t_40(
                  "div",
                  {
                    staticClass: "m-video-slider",
                  },
                  [
                    t_40(
                      "div",
                      {
                        staticClass: "m-video-slider__title font-num",
                      },
                      [e_39._v(e_39._s(e_39.$getI18nWord("navVideoLabel")))],
                    ),
                  ],
                ),
                e_39._v(" "),
                t_40(
                  "div",
                  {
                    ref: "videoWrapper",
                    staticClass: "m-video-main",
                  },
                  [
                    t_40(
                      "div",
                      {
                        ref: "tabScroll",
                        staticClass: "m-video-tab",
                      },
                      e_39._l(e_39.cates, function (r_41, i_42) {
                        return t_40(
                          "nuxt-link",
                          {
                            key: r_41.iChanId,
                            staticClass: "m-video-tab__item",
                            class: {
                              "m-video-tab__item--active": r_41.iChanId.toString() === e_39.cateId.toString(),
                            },
                            attrs: {
                              to: {
                                path:
                                  0 !== i_42
                                    ? "/m/"
                                        .concat(e_39.lang, "/video?category=")
                                        .concat(r_41.iChanId)
                                        .concat(
                                          e_39.$route.query.shareType
                                            ? "&shareType=" + e_39.$route.query.shareType
                                            : "",
                                        )
                                    : "/m/"
                                        .concat(e_39.lang, "/video")
                                        .concat(
                                          e_39.$route.query.shareType
                                            ? "?shareType=" + e_39.$route.query.shareType
                                            : "",
                                        ),
                              },
                            },
                            nativeOn: {
                              click: function (t_43) {
                                return e_39.handleTabClick(r_41, i_42);
                              },
                            },
                          },
                          [
                            t_40(
                              "span",
                              {
                                staticClass: "m-video-tab__label",
                              },
                              [e_39._v(e_39._s(r_41.sChanName))],
                            ),
                          ],
                        );
                      }),
                      1,
                    ),
                    e_39._v(" "),
                    t_40(
                      "div",
                      {
                        staticClass: "m-video-list",
                      },
                      e_39._l(e_39.videoList, function (r_44) {
                        return t_40(
                          "div",
                          {
                            key: r_44.iInfoId,
                            staticClass: "m-video-list__item",
                            on: {
                              click: function (t_45) {
                                return e_39.openPlayer(r_44);
                              },
                            },
                          },
                          [
                            t_40(
                              "div",
                              {
                                staticClass: "m-video-list__item-banner",
                              },
                              [
                                t_40("img", {
                                  attrs: {
                                    src: r_44.innerCover,
                                    alt: "cover",
                                  },
                                }),
                              ],
                            ),
                            e_39._v(" "),
                            t_40(
                              "div",
                              {
                                staticClass: "m-video-list__item-content",
                              },
                              [
                                t_40(
                                  "div",
                                  {
                                    staticClass: "m-video-list__item-title",
                                  },
                                  [e_39._v("\n              " + e_39._s(r_44.title) + "\n            ")],
                                ),
                                e_39._v(" "),
                                t_40(
                                  "div",
                                  {
                                    staticClass: "m-video-list__item-date font-num",
                                  },
                                  [e_39._v("\n              " + e_39._s(r_44.date) + "\n            ")],
                                ),
                              ],
                            ),
                          ],
                        );
                      }),
                      0,
                    ),
                    e_39._v(" "),
                    e_39.total > 1 && e_39.cateId
                      ? t_40("mihoyo-pager-rich", {
                          staticClass: "m-video-pager",
                          attrs: {
                            "init-page": e_39.initPage,
                            "total-page": e_39.total,
                            "show-jump": !1,
                            "show-prev": !0,
                            "show-next": !0,
                            "next-text": "<",
                            "prev-text": ">",
                          },
                          on: {
                            go: e_39.renderPage,
                          },
                        })
                      : e_39._e(),
                    e_39._v(" "),
                    t_40(
                      "div",
                      {
                        staticClass: "m-video-foot",
                      },
                      [
                        t_40(
                          "div",
                          {
                            staticClass: "back-top font-hongmeng",
                            on: {
                              click: e_39.handleTop,
                            },
                          },
                          [
                            e_39._v(
                              "\n          " + e_39._s(e_39.$getI18nWord("textBackTop")) + "\n        ",
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
