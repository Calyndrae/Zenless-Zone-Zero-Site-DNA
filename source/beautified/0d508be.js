(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    1120: function (t, e, n) {
      "use strict";
      var r = n(47),
        o = n(346)(5),
        c = "find",
        l = !0;
      (c in [] &&
        Array(1).find(function () {
          l = !1;
        }),
        r(r.P + r.F * l, "Array", {
          find: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n(345)(c));
    },
    1124: function (t, e, n) {
      "use strict";
      (n(67), n(155), n(77));
      var r = n(1151),
        o = n.n(r),
        c = n(1117),
        l = n(28),
        d = n(1),
        h = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = t.iTotal,
            o = t.list,
            c = o.filter(function (t) {
              return !e || !t.sExt["news-self-path"];
            });
          return { iTotal: r - (e ? 1 : 0), list: c.slice(0, n) };
        };
      e.a = {
        formatNews: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return (
            t.forEach(function (t) {
              var e = d.default.prototype.$getI18nWord("dateFormat");
              ((t.sExt = "string" == typeof t.sExt ? JSON.parse(t.sExt) : t.sExt),
                (t.banner = t.sExt["news-banner"][0].url),
                (t.title = t.sTitle),
                (t.summary = t.sIntro),
                (t.date = o()(t.dtStartTime, e)),
                (t.dateFormat = o()(t.dtStartTime, e)),
                (t.id = t.iInfoId));
            }),
            t
          );
        },
        getList: function () {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            n = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = Object.assign({ iPageSize: 20, iPage: 1 }, t);
              return e;
            };
          return new Promise(function (r, o) {
            Object(c.get)("".concat(l.apiBase, "/getContentList"), e, n, c.defaultFormatResult)
              .then(function (data) {
                ((data.list = t.formatNews(data.list)), r(data));
              })
              .catch(function (t) {
                o(t);
              });
          });
        },
        getSliderNews: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (
            (t.data = Object.assign({ iPage: 1, iPageSize: 7 }, t.data || {})),
            this.getAllNews(t).then(function (data) {
              return h(data, e, t.data.iPageSize);
            })
          );
        },
        getAllNews: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Object.assign({ iChanId: l.CHANNEL_ID_CONFIG.NEWS.ALL, iPageSize: 9 }, t.data || {});
          return (
            (t.data = n),
            this.getList(t).then(function (data) {
              return h(data, e, n.iPageSize);
            })
          );
        },
        getDetail: function () {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 };
          return (
            (e.data = Object.assign({ iChanId: l.CHANNEL_ID_CONFIG.NEWS.ALL, iAround: 1 }, e.data || {})),
            new Promise(function (n, r) {
              Object(c.get)(
                "".concat(l.apiBase, "/getContent"),
                e,
                c.defaultFormatParams,
                c.defaultFormatResult,
              )
                .then(function (data) {
                  var e = t.formatNews([data])[0];
                  ((e.content = e.sContent), n(e));
                })
                .catch(function (t) {
                  r(t);
                });
            })
          );
        },
        getCates: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            e = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                param = Object.assign({ iChanId: l.CHANNEL_ID_CONFIG.NEWS.ALL, iPageSize: 10 }, t);
              return param;
            },
            n = function (data) {
              var t = {},
                e = !1;
              return (
                data.children.forEach(function (n) {
                  ((t[n.iChanId] = n), e || (e = n.iChanId === l.CHANNEL_ID_CONFIG.NEWS.ALL));
                }),
                e ||
                  data.children.splice(0, 0, { iChanId: l.CHANNEL_ID_CONFIG.NEWS.ALL, name: data.sChanName }),
                (data.arrList = data.children.slice(0, 4)),
                (data.objList = t),
                data
              );
            };
          return Object(c.get)("/getChildTree", t, e, n);
        },
      };
    },
    1125: function (t, e, n) {
      t.exports = n.p + "img/inner-top.5496864.png";
    },
    1147: function (t, e, n) {
      var content = n(1160);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, n(55).default)("753f2330", content, !0, { sourceMap: !1 });
    },
    1159: function (t, e, n) {
      "use strict";
      n(1147);
    },
    1160: function (t, e, n) {
      var r = n(54),
        o = n(117),
        c = n(1161),
        l = r(!1),
        d = o(c);
      (l.push([
        t.i,
        '.news-tag{position:relative;min-width:.4rem;padding-left:.1rem;height:.26rem;font-size:.12rem;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:bold;white-space:nowrap;background:#000;color:#bfdb5a;border-top-left-radius:.14rem;border-bottom-left-radius:.14rem;line-height:.23rem}.news-tag::after{content:"";position:absolute;top:0;right:-0.16rem;z-index:-1;width:.2rem;height:.26rem;white-space:nowrap;background:url(' +
          d +
          ") right center/auto 100%}.news-tag.mobile::after{background-repeat:no-repeat}",
        "",
      ]),
        (t.exports = l));
    },
    1161: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAQCAYAAABgIu2QAAAAAXNSR0IArs4c6QAAARdJREFUSEvNljFLA0EQhd/jutTHLlxhYSuSRghW4i/IDxDEQmz9KXY2FnYWNqKdaGVpGbSwEC1vppVAOO4c2YOTcAnaJbPdLgvz8WbmzRC9E2McATgBsG9mGySz/p8V3r/M7KaqqlN2QYuiGNR1fU7yEMDv+wqh/gp13QIlyKZpHgHsOgHrY8xa0BDCJckjp5AJa8o8z3eyLHt2mO553R4YY7wAcOxYzYQ2TqDvADYdg76KyDZDCPWaLeg/jQ5E5Mo1qJm9qeoWgMZ76ls1k+Sem+lFRIYAvltQx/Y0FpG7roBdGr6ZPanq3nyXeRyhMzMbqepkAbSb9w6WkimA1EC3fc9a2JLWsOZVZvZB8p7kWVmWn8uM9QeQn2pHGIhaowAAAABJRU5ErkJggg==";
    },
    1163: function (t, e, n) {
      "use strict";
      var r = n(32),
        o = (n(98), n(556), n(1120), n(1124)),
        c = {
          name: "news-tag",
          props: { channel: { type: [Number, String], default: "" }, mob: { type: Boolean, default: !1 } },
          computed: {
            newsCates: function () {
              return this.$store.getters.newsCates || [];
            },
            currentChannel: function () {
              var t = this;
              return this.newsCates.find(function (e) {
                return Number(e.iChanId) === Number(t.channel);
              });
            },
            color: function () {
              return "#BFDB5A";
            },
          },
          created: function () {
            (this.newsCates && this.newsCates.length) || this.getCates();
          },
          methods: {
            getCates: function () {
              var t = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return ((e.next = 2), o.a.getCates({ data: { sLangKey: t.$store.state.lang } }));
                        case 2:
                          ((n = e.sent), (r = n.arrList[0].children), t.$store.commit("setNewsCates", r));
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            },
          },
        },
        l = (n(1159), n(36)),
        component = Object(l.a)(
          c,
          function () {
            var t = this;
            return (0, t._self._c)("div", { staticClass: "news-tag", class: { mobile: t.mob } }, [
              t._v("\n  " + t._s(t.currentChannel && t.currentChannel.sChanName) + "\n"),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.a = component.exports;
    },
    1232: function (t, e, n) {
      var content = n(1411);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, n(55).default)("4be5256c", content, !0, { sourceMap: !1 });
    },
    1410: function (t, e, n) {
      "use strict";
      n(1232);
    },
    1411: function (t, e, n) {
      var r = n(54),
        o = n(117),
        c = n(1125),
        l = r(!1),
        d = o(c);
      (l.push([
        t.i,
        '.news-detail{position:relative;margin-top:1rem;min-height:100%}.news-detail-wrapper{overflow:hidden}.news-detail .backContainer{position:sticky;right:1.5rem;bottom:0;z-index:90;width:100%;height:1.8rem}.news-detail .backContainer .backTop{left:auto;right:1.5rem;background-position:bottom center}.news-detail .section__foot{width:3.4rem;height:9.8rem;right:0;background-size:auto 100%;z-index:-1}.news-detail::before{content:"";position:absolute;top:1.6rem;left:-6.9rem;width:9.9rem;height:4.8rem;background:url(' +
          d +
          ") no-repeat 0 0/100% auto}.news-detail-container{position:relative;z-index:2;width:12.8rem;padding-top:2.6rem;padding-bottom:1.6rem;margin:0 auto}.news-detail-article{position:relative}.news-detail__title{font-size:.46rem;font-weight:800;color:#222122;text-align:center;line-height:1.3}.news-detail__info{display:flex;flex-direction:row;justify-content:space-between;align-items:center;height:.64rem;padding:0 .54rem;margin:.9rem 0;font-size:.24rem;line-height:1;color:#fff;background-color:#222122;border-radius:.32rem}.news-detail__info .breadcrumb{display:flex;align-items:center}.news-detail__info .news-tag{min-width:auto;width:auto;font-size:.24rem;color:#fff;font-weight:normal;background:rgba(0,0,0,0)}.news-detail__info .news-tag::after{display:none}.news-detail__content{font-size:.2rem;padding-bottom:1.3rem;color:#222122;line-height:1.5}.news-detail__content .table-wrapper{overflow:auto}.news-detail__content img,.news-detail__content video{max-width:100% !important;height:auto !important}.news-detail__content img{display:inline-block}.news-detail__content table{width:100%}.news-detail__content table,.news-detail__content td{border-collapse:collapse;border:solid 1px #c2c2c2}.news-detail__content td{padding-left:10px}.news-detail__content td p{text-align:inherit;max-width:90%}.news-detail__content a{max-width:100%;word-break:break-word}",
        "",
      ]),
        (t.exports = l));
    },
    1451: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(32),
        o = (n(98), n(28)),
        c = n(1124),
        l = n(1163),
        d = n(347),
        h = {
          scrollToTop: !0,
          components: { newsTag: l.a, backTop: d.a },
          data: function () {
            return {};
          },
          head: function () {
            return { title: "".concat(this.newsContent.title).concat(this.$getI18nWord("seoTitlePrefix")) };
          },
          asyncData: function (t) {
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                var n, r, l, d, h;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.params),
                            (r = t.redirect),
                            (l = t.store),
                            t.res,
                            (d = n.id),
                            (e.prev = 2),
                            (e.next = 5),
                            c.a.getDetail({
                              data: {
                                iInfoId: d,
                                iChanId: o.CHANNEL_ID_CONFIG.NEWS.ALL,
                                sLangKey: l.state.lang,
                              },
                            })
                          );
                        case 5:
                          ((h = e.sent), (e.next = 12));
                          break;
                        case 8:
                          ((e.prev = 8), (e.t0 = e.catch(2)), r({ name: "lang-news" }));
                        case 12:
                          return e.abrupt("return", { newsContent: h });
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 8]],
                );
              }),
            )();
          },
          methods: {
            handleBackUpload: function () {
              this.$trackButton("news_back", "".concat(this.$route.params.id));
            },
          },
          validate: function (t) {
            var e = t.params;
            return /^\d+$/.test(e.id);
          },
        },
        f = (n(1410), n(36)),
        component = Object(f.a)(
          h,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "news-detail" },
              [
                e("nuxt-link", { attrs: { to: { name: "lang-news" } } }, [
                  e("div", { staticClass: "news-detail-back back-btn", on: { click: t.handleBackUpload } }, [
                    e("div", { staticClass: "backArrow" }),
                    t._v(" "),
                    e("div", { staticClass: "backText" }, [t._v(t._s(t.$getI18nWord("textBack")))]),
                    t._v(" "),
                    e("div", { staticClass: "backSubtext" }, [t._v("back")]),
                  ]),
                ]),
                t._v(" "),
                e("div", { staticClass: "news-detail-wrapper" }, [
                  e("div", { staticClass: "section-wrap" }, [
                    e("div", { staticClass: "news-detail-container" }, [
                      e("div", { staticClass: "news-detail-article" }, [
                        e("div", { staticClass: "news-detail__title" }, [
                          t._v("\n            " + t._s(t.newsContent.title) + "\n          "),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "news-detail__info" }, [
                          e(
                            "span",
                            { staticClass: "breadcrumb" },
                            [
                              t._v("\n              " + t._s(t.$getI18nWord("gameName")) + " > "),
                              e("news-tag", { attrs: { channel: t.newsContent.sChanId[0] } }),
                            ],
                            1,
                          ),
                          t._v(" "),
                          e("span", [t._v(t._s(t.newsContent.dateFormat))]),
                        ]),
                        t._v(" "),
                        e("div", {
                          staticClass: "news-detail__content",
                          domProps: { innerHTML: t._s(t.newsContent.sContent) },
                        }),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "section__foot" }),
                ]),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "backContainer" },
                  [e("backTop", { attrs: { theme: "reverse" } })],
                  1,
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
      e.default = component.exports;
    },
  },
]);
