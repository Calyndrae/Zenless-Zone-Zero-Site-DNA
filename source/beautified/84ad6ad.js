(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
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
    1231: function (t, e, n) {
      var content = n(1409);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, n(55).default)("b0600422", content, !0, { sourceMap: !1 });
    },
    1408: function (t, e, n) {
      "use strict";
      n(1231);
    },
    1409: function (t, e, n) {
      var r = n(54),
        o = n(117),
        c = n(1125),
        l = r(!1),
        d = o(c);
      (l.push([
        t.i,
        '.gacha-detail{position:relative;margin-top:1rem;min-height:100%}.gacha-detail-wrapper{overflow:hidden}.gacha-detail .backContainer{position:sticky;right:1.5rem;bottom:0;z-index:90;width:100%;height:1.8rem}.gacha-detail .backContainer .backTop{left:auto;right:1.5rem;background-position:bottom center}.gacha-detail .section__foot{width:3.4rem;height:9.8rem;right:0;background-size:auto 100%;z-index:-1}.gacha-detail::before{content:"";position:absolute;top:1.6rem;left:-6.9rem;width:9.9rem;height:4.8rem;background:url(' +
          d +
          ") no-repeat 0 0/100% auto}.gacha-detail-container{position:relative;z-index:2;width:17.12rem;padding-top:2.6rem;padding-bottom:1.6rem;margin:0 auto}.gacha-detail-article{position:relative}.gacha-detail__title{font-size:.46rem;font-weight:800;color:#222122;text-align:center;line-height:1.3}.gacha-detail iframe{border:0;width:100%}",
        "",
      ]),
        (t.exports = l));
    },
    1450: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(32),
        o = (n(98), n(28)),
        c = n(1124),
        l = {
          scrollToTop: !0,
          components: { backTop: n(347).a },
          data: function () {
            return { frameHeight: 200 };
          },
          head: function () {
            return { title: this.newsContent.title };
          },
          computed: {
            gachaUrl: function () {
              return "".concat(o.gachaUrl, "?lang=").concat(this.$store.state.lang);
            },
          },
          asyncData: function (t) {
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                var n, r, l;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.redirect),
                            (r = t.store),
                            t.res,
                            (e.prev = 1),
                            (e.next = 4),
                            c.a.getDetail({
                              data: {
                                iInfoId: o.GACHA_ID,
                                iChanId: o.CHANNEL_ID_CONFIG.NEWS.ALL,
                                sLangKey: r.state.lang,
                              },
                            })
                          );
                        case 4:
                          ((l = e.sent), (e.next = 11));
                          break;
                        case 7:
                          ((e.prev = 7), (e.t0 = e.catch(1)), n({ name: "lang-news" }));
                        case 11:
                          return e.abrupt("return", { newsContent: l });
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 7]],
                );
              }),
            )();
          },
          mounted: function () {
            this.getFrameHeight(!0);
          },
          beforeDestroy: function () {
            this.getFrameHeight(!1);
          },
          methods: {
            handleBackUpload: function () {
              this.$trackButton("news_back", o.GACHA_ID);
            },
            getFrameHeight: function () {
              var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                e = t ? "addEventListener" : "removeEventListener";
              window[e]("message", this.handleFrameMsg);
            },
            handleFrameMsg: function (t) {
              var e = t.data || {},
                data = e.data,
                n = e.type;
              "number" == typeof data &&
                "sendHeight" === (void 0 === n ? "" : n) &&
                (this.frameHeight = data);
            },
          },
        },
        d = l,
        h = (n(1408), n(36)),
        component = Object(h.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "gacha-detail" },
              [
                e("nuxt-link", { attrs: { to: { name: "lang-news" } } }, [
                  e("div", { staticClass: "gacha-detail-back back-btn", on: { click: t.handleBackUpload } }, [
                    e("div", { staticClass: "backArrow" }),
                    t._v(" "),
                    e("div", { staticClass: "backText" }, [t._v(t._s(t.$getI18nWord("textBack")))]),
                    t._v(" "),
                    e("div", { staticClass: "backSubtext" }, [t._v("back")]),
                  ]),
                ]),
                t._v(" "),
                e("div", { staticClass: "gacha-detail-wrapper" }, [
                  e("div", { staticClass: "section-wrap" }, [
                    e("div", { staticClass: "gacha-detail-container" }, [
                      e(
                        "div",
                        { staticClass: "gacha-detail-article" },
                        [
                          e("div", { staticClass: "gacha-detail__title" }, [
                            t._v("\n            " + t._s(t.newsContent.title) + "\n          "),
                          ]),
                          t._v(" "),
                          e("client-only", [
                            e("iframe", {
                              style: { height: "".concat(t.frameHeight + 50, "px") },
                              attrs: { src: t.gachaUrl },
                            }),
                          ]),
                        ],
                        1,
                      ),
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
