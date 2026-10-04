// page:m-lang-news — module 1415 from f87ccae
// module 1415 from f87ccae.js
// deps: 32, 1150, 71, 98, 1143, 556, 136, 77, 137, 67, 1120, 155, 28, 1149, 1163, 1124, 1311, 36
const module_1415 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    babelToConsumableArrayHelper = webpackRequire(1150),
    vendorBundle2 = webpackRequire(71),
    l_1 =
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
    h_2 = l_1.CHANNEL_ID_CONFIG.NEWS.ALL,
    w_3 = 10,
    A_4 = {
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
          return +(this.$route.query.category || h_2);
        },
        activeChannelIndex: function () {
          var e_6 = this;
          return this.cates.findIndex(function (t_7) {
            return t_7.iChanId === e_6.cateId;
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
      asyncData: function (e_8) {
        var t_9 = e_8.params,
          n_10 = e_8.store,
          r_11 = t_9.cate,
          d_12 = Number(r_11 || l_1.CHANNEL_ID_CONFIG.NEWS.ALL),
          m_13 = n_10.getters.blockGachaAnnounce,
          h_14 = n_10.state.newsCache,
          A_15 = h_14.newsIndex,
          v_16 = h_14.mNews.newsList;
        return -1 !== A_15 && v_16 && 0 !== v_16.length
          ? JSON.parse(JSON.stringify(n_10.state.newsCache.mNews))
          : Promise.all([
              newsCMSAPI.a.getCates({
                data: {
                  sLangKey: n_10.state.lang,
                },
              }),
              newsCMSAPI.a.getAllNews(
                {
                  data: {
                    iPageSize: w_3,
                    iPage: 1,
                    iChanId: d_12,
                    sLangKey: n_10.state.lang,
                  },
                },
                m_13,
              ),
            ]).then(function (e_17) {
              var t_18 = Object(vendorBundle2.a)(e_17, 2),
                r_19 = t_18[0].arrList,
                l_20 = t_18[1],
                m_21 = r_19[0],
                f_22 = m_21.children,
                h_23 = [m_21]
                  .concat(Object(babelToConsumableArrayHelper.a)(f_22.reverse()))
                  .filter(function (e_24) {
                    return e_24.sChanName;
                  });
              return (
                n_10.commit("setNewsCates", f_22),
                {
                  cates: h_23,
                  cateChan: h_23.find(function (e_25) {
                    return e_25.iChanId === d_12;
                  }),
                  newsList: l_20.list,
                  total: Math.ceil(l_20.iTotal / w_3),
                  hasMore: l_20.iTotal > w_3,
                }
              );
            });
      },
      mounted: function () {
        var e_26,
          t_27 = this.$store.state.newsCache,
          n_28 = t_27.newsIndex,
          r_29 = t_27.pageIndex;
        if (-1 !== n_28) {
          ((this.page = r_29),
            this.$store.commit("setNewsCache", {
              pageIndex: 1,
              newsIndex: -1,
              mNews: {},
            }));
          var o_30 = document.querySelector(".m-news-main").offsetTop - 20,
            c_31 = document.querySelectorAll(".m-news-list__item")[n_28];
          ((o_30 += null !== (e_26 = null == c_31 ? void 0 : c_31.offsetTop) && void 0 !== e_26 ? e_26 : 0),
            setTimeout(function () {
              $("html,body").animate(
                {
                  scrollTop: o_30,
                },
                0,
              );
            }, 0));
        }
      },
      methods: {
        reload: function () {
          var e_32 = this;
          return Object(vendorBundle.a)(
            regeneratorRuntime.mark(function t_33() {
              var n_34, r_35, o_36, c_37;
              return regeneratorRuntime.wrap(function (t_38) {
                for (;;)
                  switch ((t_38.prev = t_38.next)) {
                    case 0:
                      return (
                        (e_32.page = 1),
                        (n_34 = {
                          data: {
                            iChanId: e_32.cateId,
                            iPageSize: w_3,
                            iPage: e_32.page,
                            sLangKey: e_32.lang,
                          },
                        }),
                        (t_38.next = 4),
                        newsCMSAPI.a.getAllNews(n_34, e_32.$store.getters.blockGachaAnnounce)
                      );
                    case 4:
                      ((r_35 = t_38.sent),
                        (o_36 = r_35.iTotal),
                        (c_37 = r_35.list),
                        (e_32.hasMore = o_36 > w_3),
                        (e_32.newsList = c_37));
                    case 9:
                    case "end":
                      return t_38.stop();
                  }
              }, t_33);
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
          var e_39 = this;
          return Object(vendorBundle.a)(
            regeneratorRuntime.mark(function t_40() {
              return regeneratorRuntime.wrap(
                function (t_41) {
                  for (;;)
                    switch ((t_41.prev = t_41.next)) {
                      case 0:
                        if (((e_39.page += 1), !e_39.isLoading)) {
                          t_41.next = 3;
                          break;
                        }
                        return t_41.abrupt("return");
                      case 3:
                        return (
                          (e_39.btntext = e_39.$getI18nWord("loadTxt")),
                          (e_39.isLoading = !0),
                          (t_41.prev = 5),
                          (t_41.next = 8),
                          e_39.getList()
                        );
                      case 8:
                        ((e_39.isLoading = !1),
                          (e_39.btntext = e_39.$getI18nWord("loadMore")),
                          (t_41.next = 16));
                        break;
                      case 12:
                        ((t_41.prev = 12),
                          (t_41.t0 = t_41.catch(5)),
                          (e_39.isLoading = !1),
                          (e_39.btntext = e_39.$getI18nWord("loadMore")));
                      case 16:
                      case "end":
                        return t_41.stop();
                    }
                },
                t_40,
                null,
                [[5, 12]],
              );
            }),
          )();
        },
        getList: function () {
          var e_42 = this;
          return Object(vendorBundle.a)(
            regeneratorRuntime.mark(function t_43() {
              var n_44, r_45;
              return regeneratorRuntime.wrap(function (t_46) {
                for (;;)
                  switch ((t_46.prev = t_46.next)) {
                    case 0:
                      return (
                        (n_44 = {
                          data: {
                            iChanId: e_42.cateId,
                            iPageSize: w_3,
                            iPage: e_42.page,
                            sLangKey: e_42.$store.state.lang,
                          },
                        }),
                        (t_46.next = 3),
                        newsCMSAPI.a.getAllNews(n_44, e_42.$store.getters.blockGachaAnnounce)
                      );
                    case 3:
                      return (
                        (r_45 = t_46.sent),
                        (e_42.newsList = [].concat(
                          Object(babelToConsumableArrayHelper.a)(e_42.newsList),
                          Object(babelToConsumableArrayHelper.a)(r_45.list),
                        )),
                        (e_42.hasMore = e_42.newsList.length < r_45.iTotal),
                        t_46.abrupt("return", r_45)
                      );
                    case 7:
                    case "end":
                      return t_46.stop();
                  }
              }, t_43);
            }),
          )();
        },
        handlePicClick: function (e_47, t_48) {
          (this.$store.commit("setNewsCache", {
            mNews: {
              cates: this.cates,
              newsList: this.newsList.slice(),
              hasMore: this.hasMore,
            },
            pageIndex: this.page,
            newsIndex: t_48,
          }),
            this.$trackButton("news_pics", "".concat(e_47.iInfoId)));
        },
      },
    },
    v_5 = (webpackRequire(1311), webpackRequire(36)),
    component = Object(v_5.a)(
      A_4,
      function () {
        var e_49 = this,
          t_50 = e_49._self._c;
        return t_50(
          "div",
          {
            staticClass: "m-news",
          },
          [
            t_50("pageTab", {
              attrs: {
                "nav-num": 4,
              },
            }),
            e_49._v(" "),
            t_50(
              "div",
              {
                staticClass: "m-news-container section-wrap",
              },
              [
                t_50(
                  "div",
                  {
                    staticClass: "m-news-slider",
                  },
                  [
                    t_50(
                      "div",
                      {
                        staticClass: "m-news-slider__title",
                      },
                      [e_49._v(e_49._s(e_49.$getI18nWord("nav3Label")))],
                    ),
                  ],
                ),
                e_49._v(" "),
                t_50(
                  "div",
                  {
                    staticClass: "m-news-main",
                  },
                  [
                    t_50(
                      "div",
                      {
                        staticClass: "m-news-tab",
                      },
                      [
                        t_50("div", {
                          staticClass: "m-news-tab__thumb",
                          style: {
                            left: "".concat(1.58 * e_49.activeChannelIndex + 0.12, "rem"),
                          },
                        }),
                        e_49._v(" "),
                        e_49._l(e_49.cates, function (n_51, i_52) {
                          return t_50(
                            "nuxt-link",
                            {
                              key: n_51.iChanId,
                              staticClass: "m-news-tab__item",
                              class: {
                                "m-news-tab__item--active": n_51.iChanId === e_49.cateId,
                              },
                              attrs: {
                                to: {
                                  path:
                                    0 !== i_52
                                      ? "/m/"
                                          .concat(e_49.lang, "/news?category=")
                                          .concat(n_51.iChanId)
                                          .concat(
                                            e_49.$route.query.shareType
                                              ? "&shareType=" + e_49.$route.query.shareType
                                              : "",
                                          )
                                      : "/m/"
                                          .concat(e_49.lang, "/news")
                                          .concat(
                                            e_49.$route.query.shareType
                                              ? "?shareType=" + e_49.$route.query.shareType
                                              : "",
                                          ),
                                },
                              },
                            },
                            [
                              t_50(
                                "div",
                                {
                                  staticClass: "m-news-tab__label",
                                },
                                [e_49._v("\n            " + e_49._s(n_51.sChanName) + "\n          ")],
                              ),
                            ],
                          );
                        }),
                      ],
                      2,
                    ),
                    e_49._v(" "),
                    t_50(
                      "div",
                      {
                        staticClass: "m-news-list",
                      },
                      e_49._l(e_49.newsList, function (n_53, r_54) {
                        return t_50(
                          "nuxt-link",
                          {
                            key: n_53.iInfoId,
                            staticClass: "m-news-list__item",
                            attrs: {
                              to: n_53.sExt["news-self-path"]
                                ? {
                                    name: "m-lang-news".concat(n_53.sExt["news-self-path"]),
                                  }
                                : {
                                    name: "m-lang-news-id",
                                    params: {
                                      id: n_53.iInfoId,
                                    },
                                  },
                            },
                            nativeOn: {
                              click: function (t_55) {
                                return e_49.handlePicClick(n_53, r_54);
                              },
                            },
                          },
                          [
                            t_50(
                              "div",
                              {
                                staticClass: "m-news-list__item-banner",
                              },
                              [
                                t_50("img", {
                                  attrs: {
                                    src: n_53.banner,
                                    alt: "banner",
                                  },
                                }),
                              ],
                            ),
                            e_49._v(" "),
                            t_50(
                              "div",
                              {
                                staticClass: "m-news-list__item-content",
                              },
                              [
                                t_50(
                                  "div",
                                  {
                                    staticClass: "m-news-list__item-date",
                                  },
                                  [
                                    t_50("div", [e_49._v(e_49._s(n_53.dateFormat))]),
                                    e_49._v(" "),
                                    t_50("news-tag", {
                                      attrs: {
                                        channel: n_53.sChanId[0],
                                        mob: !0,
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                                e_49._v(" "),
                                t_50(
                                  "div",
                                  {
                                    staticClass: "m-news-list__item-title ellipsis",
                                  },
                                  [e_49._v("\n              " + e_49._s(n_53.title) + "\n            ")],
                                ),
                                e_49._v(" "),
                                t_50("div", {
                                  staticClass: "m-news-list__item-desc ellipsis",
                                  domProps: {
                                    innerHTML: e_49._s(n_53.summary),
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
                e_49._v(" "),
                t_50(
                  "div",
                  {
                    staticClass: "m-news-foot",
                  },
                  [
                    e_49.hasMore
                      ? t_50(
                          "div",
                          {
                            staticClass: "load-more",
                            on: {
                              click: e_49.handleMore,
                            },
                          },
                          [e_49._v("\n        " + e_49._s(e_49.$getI18nWord("loadMore")) + "\n      ")],
                        )
                      : t_50(
                          "div",
                          {
                            staticClass: "no-more",
                          },
                          [
                            t_50("div", [e_49._v(e_49._s(e_49.$getI18nWord("noMore")))]),
                            e_49._v(" "),
                            t_50(
                              "div",
                              {
                                staticClass: "back-top",
                                on: {
                                  click: function (t_56) {
                                    return e_49.handleTop();
                                  },
                                },
                              },
                              [e_49._v(e_49._s(e_49.$getI18nWord("textBackTop")))],
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
