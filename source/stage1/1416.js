// page:lang-news — module 1416 from ba4082a
// module 1416 from ba4082a.js
// deps: 77, 206, 207, 1150, 71, 1143, 556, 136, 137, 67, 155, 204, 1120, 119, 118, 28, 1126, 1174, 1163, 347, 1124, 1395, 36
const module_1416 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  (webpackRequire(77), webpackRequire(206), webpackRequire(207));
  var babelToConsumableArrayHelper = webpackRequire(1150),
    vendorBundle = webpackRequire(71),
    l_1 =
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
    v_2 = l_1.CHANNEL_ID_CONFIG.NEWS.ALL,
    w_3 = {
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
              renderBullet: function (t_5, e_6) {
                return '<span class="'.concat(e_6, " swiper-pagination-index-").concat(t_5 + 1, '"></span>');
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
          return this.$route.query.category || v_2;
        },
        activeChannelIndex: function () {
          var t_7 = this;
          return this.cates.findIndex(function (e_8) {
            return e_8.iChanId === t_7.cateId;
          });
        },
      },
      watch: {
        "$route.query.category": function () {
          this.renderPage(1, "cate");
        },
      },
      asyncData: function (t_9) {
        var e_10 = t_9.query,
          n_11 = t_9.store,
          l_12 = e_10.category,
          c_13 = Number(l_12 || v_2),
          h_14 = n_11.state.newsCache.pageIndex,
          m_15 = n_11.getters.blockGachaAnnounce;
        return (
          n_11.commit("setNewsCache", {
            pageIndex: 1,
          }),
          Promise.all([
            newsCMSAPI.a.getSliderNews(
              {
                data: {
                  sLangKey: n_11.state.lang,
                },
              },
              m_15,
            ),
            newsCMSAPI.a.getCates({
              data: {
                sLangKey: n_11.state.lang,
              },
            }),
            newsCMSAPI.a.getAllNews(
              {
                data: {
                  iPageSize: 9,
                  iPage: h_14,
                  iChanId: c_13,
                  sLangKey: n_11.state.lang,
                },
              },
              m_15,
            ),
          ]).then(function (t_16) {
            var e_17 = Object(vendorBundle.a)(t_16, 3),
              l_18 = e_17[0],
              c_19 = e_17[1].arrList,
              m_20 = e_17[2],
              d_21 = c_19[0],
              A_22 = d_21.children,
              v_23 = [d_21]
                .concat(Object(babelToConsumableArrayHelper.a)(A_22.reverse()))
                .filter(function (t_24) {
                  return t_24.sChanName;
                });
            return (
              n_11.commit("setNewsCates", A_22),
              {
                latestNewsList: l_18.list.slice(0, 6),
                cates: v_23,
                initPage: h_14,
                newsList: m_20.list,
                total: Math.ceil(m_20.iTotal / 9),
              }
            );
          })
        );
      },
      mounted: function () {
        var t_25 = this,
          e_26 = this.$store.state.newsCache.newsIndex;
        -1 !== e_26 &&
          setTimeout(function () {
            var n_27 = document.querySelector(".news-wrap").offsetTop - 30;
            if (e_26 >= 3) {
              var r_28,
                o_29 = document.querySelectorAll(".news-list__item")[3];
              n_27 += null !== (r_28 = null == o_29 ? void 0 : o_29.offsetTop) && void 0 !== r_28 ? r_28 : 0;
            }
            ($("html,body").animate(
              {
                scrollTop: n_27,
              },
              0,
            ),
              t_25.$store.commit("setNewsCache", {
                newsIndex: -1,
              }));
          }, 0);
      },
      methods: {
        renderPage: function (t_30, e_31) {
          var n_32 = this;
          newsCMSAPI.a
            .getAllNews(
              {
                cache: !0,
                data: {
                  iChanId: this.cateId,
                  iPageSize: 9,
                  iPage: t_30,
                  sLangKey: this.$store.state.lang,
                },
              },
              this.$store.getters.blockGachaAnnounce,
            )
            .then(function (data) {
              if (
                ((n_32.newsList = data.list),
                (n_32.total = Math.ceil(data.iTotal / 9)),
                (n_32.initPage = t_30),
                "cate" !== e_31)
              ) {
                var r_33 = document.querySelector(".news-wrap").offsetTop;
                $("html,body").animate(
                  {
                    scrollTop: r_33,
                  },
                  0,
                );
              }
            });
        },
        handlePaginationClick: function (t_34) {
          var e_35 = t_34.target || t_34.srcElement;
          if (e_35.className.indexOf("swiper-pagination-index") > -1) {
            var n_36 = e_35.className
              .split(" ")
              .find(function (t_37) {
                return t_37.includes("swiper-pagination-index-");
              })
              .split("-")
              .pop();
            this.$trackButton("news_point", "".concat(n_36));
          }
        },
        handlePicClick: function (t_38, e_39) {
          (this.$store.commit("setNewsCache", {
            pageIndex: this.initPage,
            newsIndex: e_39,
          }),
            this.$trackButton("news_pics", "".concat(t_38.iInfoId)));
        },
      },
    },
    f_4 = (webpackRequire(1395), webpackRequire(36)),
    component = Object(f_4.a)(
      w_3,
      function () {
        var t_40 = this,
          e_41 = t_40._self._c;
        return e_41(
          "div",
          {
            staticClass: "news",
          },
          [
            e_41(
              "div",
              {
                staticClass: "news-container",
              },
              [
                e_41("pageTab", {
                  attrs: {
                    "nav-num": 4,
                  },
                }),
                t_40._v(" "),
                e_41(
                  "div",
                  {
                    staticClass: "news-slider",
                  },
                  [
                    e_41(
                      "div",
                      {
                        staticClass: "news-slider__title",
                      },
                      [t_40._v(t_40._s(t_40.$getI18nWord("nav3Label")))],
                    ),
                    t_40._v(" "),
                    e_41(
                      "client-only",
                      [
                        t_40.latestNewsList.length < 3
                          ? e_41(
                              "ul",
                              {
                                staticClass: "news-slider__latest ul",
                              },
                              t_40._l(t_40.latestNewsList, function (n_42) {
                                return e_41(
                                  "li",
                                  {
                                    key: n_42.id,
                                    staticClass: "news-slider__latest-item",
                                  },
                                  [
                                    e_41(
                                      "nuxt-link",
                                      {
                                        staticClass: "news-slider__latest-img",
                                        attrs: {
                                          to: n_42.sExt["news-self-path"]
                                            ? {
                                                name: "lang-news".concat(n_42.sExt["news-self-path"]),
                                              }
                                            : {
                                                name: "lang-news-id",
                                                params: {
                                                  id: n_42.iInfoId,
                                                },
                                              },
                                        },
                                        nativeOn: {
                                          click: function (e_43) {
                                            return t_40.handlePicClick(n_42);
                                          },
                                        },
                                      },
                                      [
                                        e_41("img", {
                                          attrs: {
                                            src: n_42.banner,
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
                          : e_41(
                              "swiper",
                              {
                                ref: "mySwiper",
                                staticClass: "news-slider__latest",
                                attrs: {
                                  options: t_40.swiperOption,
                                },
                              },
                              t_40._l(t_40.latestNewsList, function (n_44) {
                                return e_41(
                                  "swiper-slide",
                                  {
                                    key: n_44.id,
                                    staticClass: "news-slider__latest-item",
                                  },
                                  [
                                    e_41(
                                      "nuxt-link",
                                      {
                                        staticClass: "news-slider__latest-img",
                                        attrs: {
                                          to: n_44.sExt["news-self-path"]
                                            ? {
                                                name: "lang-news".concat(n_44.sExt["news-self-path"]),
                                              }
                                            : {
                                                name: "lang-news-id",
                                                params: {
                                                  id: n_44.iInfoId,
                                                },
                                              },
                                        },
                                        nativeOn: {
                                          click: function (e_45) {
                                            return t_40.handlePicClick(n_44);
                                          },
                                        },
                                      },
                                      [
                                        e_41("img", {
                                          attrs: {
                                            src: n_44.banner,
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
                    t_40._v(" "),
                    e_41(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t_40.latestNewsList.length > 1,
                            expression: "latestNewsList.length > 1",
                          },
                        ],
                        staticClass: "news-slider__pagination",
                      },
                      [
                        e_41("div", {
                          staticClass: "swiper-pagination",
                          attrs: {
                            slot: "pagination",
                          },
                          on: {
                            click: function (e_46) {
                              return t_40.handlePaginationClick(e_46);
                            },
                          },
                          slot: "pagination",
                        }),
                      ],
                    ),
                  ],
                  1,
                ),
                t_40._v(" "),
                e_41(
                  "div",
                  {
                    ref: "newsWrapper",
                    staticClass: "news-wrap",
                  },
                  [
                    e_41(
                      "div",
                      {
                        staticClass: "news-tab",
                      },
                      t_40._l(t_40.cates, function (n_47, i_48) {
                        return e_41(
                          "nuxt-link",
                          {
                            key: n_47.iChanId,
                            staticClass: "news-tab__item",
                            class: {
                              "news-tab__item--active": n_47.iChanId.toString() === t_40.cateId.toString(),
                            },
                            attrs: {
                              to: {
                                path:
                                  0 !== i_48
                                    ? "/".concat(t_40.lang, "/news?category=").concat(n_47.iChanId)
                                    : "/".concat(t_40.lang, "/news"),
                              },
                            },
                          },
                          [
                            e_41(
                              "div",
                              {
                                staticClass: "news-tab__label",
                              },
                              [t_40._v("\n            " + t_40._s(n_47.sChanName) + "\n          ")],
                            ),
                            t_40._v(" "),
                            e_41("div", {
                              staticClass: "news-tab__label-active",
                            }),
                          ],
                        );
                      }),
                      1,
                    ),
                    t_40._v(" "),
                    e_41(
                      "div",
                      {
                        staticClass: "news-list",
                      },
                      t_40._l(t_40.newsList, function (n_49, r_50) {
                        return e_41(
                          "div",
                          {
                            key: n_49.iInfoId,
                            staticClass: "news-list__item",
                          },
                          [
                            e_41(
                              "nuxt-link",
                              {
                                attrs: {
                                  to: n_49.sExt["news-self-path"]
                                    ? {
                                        name: "lang-news".concat(n_49.sExt["news-self-path"]),
                                      }
                                    : {
                                        name: "lang-news-id",
                                        params: {
                                          id: n_49.iInfoId,
                                        },
                                      },
                                },
                                nativeOn: {
                                  click: function (e_51) {
                                    return t_40.handlePicClick(n_49, r_50);
                                  },
                                },
                              },
                              [
                                e_41(
                                  "div",
                                  {
                                    staticClass: "news-list__item-banner",
                                  },
                                  [
                                    e_41("img", {
                                      attrs: {
                                        src: n_49.banner,
                                        alt: "",
                                      },
                                    }),
                                  ],
                                ),
                              ],
                            ),
                            t_40._v(" "),
                            e_41(
                              "div",
                              {
                                staticClass: "news-list__item-content",
                              },
                              [
                                e_41(
                                  "div",
                                  {
                                    staticClass: "news-list__item-date",
                                  },
                                  [
                                    e_41("div", [t_40._v(t_40._s(n_49.dateFormat))]),
                                    t_40._v(" "),
                                    e_41("news-tag", {
                                      attrs: {
                                        channel: n_49.sChanId[0],
                                      },
                                    }),
                                  ],
                                  1,
                                ),
                                t_40._v(" "),
                                e_41(
                                  "nuxt-link",
                                  {
                                    attrs: {
                                      to: n_49.sExt["news-self-path"]
                                        ? {
                                            name: "lang-news".concat(n_49.sExt["news-self-path"]),
                                          }
                                        : {
                                            name: "lang-news-id",
                                            params: {
                                              id: n_49.iInfoId,
                                            },
                                          },
                                    },
                                  },
                                  [
                                    e_41(
                                      "div",
                                      {
                                        staticClass: "news-list__item-title",
                                      },
                                      [
                                        t_40._v(
                                          "\n                " + t_40._s(n_49.title) + "\n              ",
                                        ),
                                      ],
                                    ),
                                    t_40._v(" "),
                                    e_41("div", {
                                      staticClass: "news-list__item-desc",
                                      domProps: {
                                        innerHTML: t_40._s(n_49.summary),
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
                    t_40._v(" "),
                    t_40.total > 1
                      ? e_41("mihoyo-pager-rich", {
                          staticClass: "news-pager",
                          attrs: {
                            "total-page": t_40.total,
                            "show-jump": !1,
                            "show-prev": !0,
                            "show-next": !0,
                            "init-page": t_40.initPage,
                            "next-text": "<",
                            "prev-text": ">",
                          },
                          on: {
                            go: t_40.renderPage,
                          },
                        })
                      : t_40._e(),
                  ],
                  1,
                ),
                t_40._v(" "),
                e_41("div", {
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
