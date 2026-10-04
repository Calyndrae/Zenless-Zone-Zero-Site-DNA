(window.webpackJsonp = window.webpackJsonp || []).push([
  [34],
  {
    1118: function (t, e, o) {
      "use strict";
      (o(85), o(84), o(67), o(105), o(106));
      var n = o(56),
        r = (o(77), o(1117)),
        c = o(28);
      function l(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(object);
          (t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, o));
        }
        return e;
      }
      function f(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? l(Object(source), !0).forEach(function (e) {
                Object(n.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source))
              : l(Object(source)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e));
                });
        }
        return t;
      }
      var param = {
        iPageSize: 1,
        iPage: 1,
        isPreview:
          "development" === c.environment || "test" === c.environment || "prerelease" === c.environment
            ? 1
            : 0,
      };
      e.a = {
        formatProtocol: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return (
            t.forEach(function (t) {
              ((t.sExt = "string" == typeof t.sExt ? JSON.parse(t.sExt) : t.sExt),
                (t.pdfUrl = t.sExt.link_pdf));
            }),
            t
          );
        },
        getPrivacy: function () {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            o = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = Object.assign(f(f({}, param), {}, { iChanId: c.CHANNEL_ID_CONFIG.PROTOCOL.PRIVACY }), t);
              return e;
            };
          return new Promise(function (n, l) {
            Object(r.get)("".concat(c.apiBase, "/getContentList"), e, o, r.defaultFormatResult)
              .then(function (data) {
                ((data.list = t.formatProtocol(data.list)), n(data.list[0]));
              })
              .catch(function (t) {
                l(t);
              });
          });
        },
        getUser: function () {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            o = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = Object.assign(f(f({}, param), {}, { iChanId: c.CHANNEL_ID_CONFIG.PROTOCOL.TERMS }), t);
              return e;
            };
          return new Promise(function (n, l) {
            Object(r.get)("".concat(c.apiBase, "/getContentList"), e, o, r.defaultFormatResult)
              .then(function (data) {
                ((data.list = t.formatProtocol(data.list)), n(data.list[0]));
              })
              .catch(function (t) {
                l(t);
              });
          });
        },
        getTerms2: function () {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            o = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = Object.assign(f(f({}, param), {}, { iChanId: c.CHANNEL_ID_CONFIG.PROTOCOL.TERMS2 }), t);
              return e;
            };
          return new Promise(function (n, l) {
            Object(r.get)("".concat(c.apiBase, "/getContentList"), e, o, r.defaultFormatResult)
              .then(function (data) {
                ((data.list = t.formatProtocol(data.list)), n(data.list[0]));
              })
              .catch(function (t) {
                l(t);
              });
          });
        },
        getTerms3: function () {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            o = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = Object.assign(f(f({}, param), {}, { iChanId: c.CHANNEL_ID_CONFIG.PROTOCOL.TERMS3 }), t);
              return e;
            };
          return new Promise(function (n, l) {
            Object(r.get)("".concat(c.apiBase, "/getContentList"), e, o, r.defaultFormatResult)
              .then(function (data) {
                ((data.list = t.formatProtocol(data.list)), n(data.list[0]));
              })
              .catch(function (t) {
                l(t);
              });
          });
        },
        getKrHistory: function () {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            o = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = Object.assign(f(f({}, param), {}, { iChanId: c.CHANNEL_ID_CONFIG.PROTOCOL.HISTORY }), t);
              return e;
            };
          return new Promise(function (n, l) {
            Object(r.get)("".concat(c.apiBase, "/getContentList"), e, o, r.defaultFormatResult)
              .then(function (data) {
                ((data.list = t.formatProtocol(data.list)), n(data.list[0]));
              })
              .catch(function (t) {
                l(t);
              });
          });
        },
        getJpFund: function () {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            o = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = Object.assign(
                  f(
                    f({}, param),
                    {},
                    { iInfoId: c.INFO_ID_CONFIG.FUND, iChanId: c.CHANNEL_ID_CONFIG.PROTOCOL.JP_FUND },
                  ),
                  t,
                );
              return e;
            };
          return new Promise(function (n, l) {
            Object(r.get)("".concat(c.apiBase, "/getContent"), e, o, r.defaultFormatResult)
              .then(function (data) {
                ((data.list = t.formatProtocol([data])), n(data.list[0]));
              })
              .catch(function (t) {
                l(t);
              });
          });
        },
        getJpAbout: function () {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            o = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = Object.assign(
                  f(
                    f({}, param),
                    {},
                    { iInfoId: c.INFO_ID_CONFIG.ABOUT, iChanId: c.CHANNEL_ID_CONFIG.PROTOCOL.JP_FUND },
                  ),
                  t,
                );
              return e;
            };
          return new Promise(function (n, l) {
            Object(r.get)("".concat(c.apiBase, "/getContent"), e, o, r.defaultFormatResult)
              .then(function (data) {
                ((data.list = t.formatProtocol([data])), n(data.list[0]));
              })
              .catch(function (t) {
                l(t);
              });
          });
        },
      };
    },
    1119: function (t, e, o) {
      var content = o(1130);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, o(55).default)("6bc63dc0", content, !0, { sourceMap: !1 });
    },
    1121: function (t, e, o) {
      var content = o(1133);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, o(55).default)("1167892a", content, !0, { sourceMap: !1 });
    },
    1129: function (t, e, o) {
      "use strict";
      o(1119);
    },
    1130: function (t, e, o) {
      var n = o(54)(!1);
      (n.push([
        t.i,
        ".protocol-pdf{position:absolute;top:0;left:0;width:100%;height:100vh}.protocol-pdf.mob{height:auto;min-height:100vh}.protocol-pdf iframe{width:100%;height:100%}",
        "",
      ]),
        (t.exports = n));
    },
    1131: function (t, e, o) {
      "use strict";
      var n = {
          layout: "empty",
          props: { isMob: { required: !0, type: Boolean }, pdfUrl: { required: !0, type: String } },
        },
        r = (o(1129), o(36)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return t.isMob
              ? e(
                  "div",
                  { staticClass: "protocol-pdf mob" },
                  [e("pdf-viewer", { attrs: { src: t.pdfUrl, "text-layer": !0, "annotation-layer": !0 } })],
                  1,
                )
              : e("div", { staticClass: "protocol-pdf" }, [
                  e("iframe", { attrs: { src: t.pdfUrl, frameborder: "0" } }),
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
    1132: function (t, e, o) {
      "use strict";
      o(1121);
    },
    1133: function (t, e, o) {
      var n = o(54)(!1);
      (n.push([
        t.i,
        '.m-web-protocol{margin:1.1rem auto 0;min-height:100%}.m-web-protocol.fromGame{width:80%}.m-web-protocol-container{padding:.9rem .4rem;text-align:center}.m-web-protocol__article{position:relative;text-align:left}.m-web-protocol__title{font-size:.42rem;font-weight:800;line-height:1.3;text-align:center;color:#222122}.m-web-protocol__info{display:flex;flex-direction:row;justify-content:space-between;align-items:center;height:.64rem;padding:0 .24rem;margin:.9rem 0;font-size:.24rem;color:#fff;background-color:#222122;border-radius:.32rem}.m-web-protocol__info .breadcrumb{display:flex;align-items:center}.m-web-protocol__info .news-tag{font-size:.24rem;color:#fff}.m-web-protocol__content{font-size:.26rem;line-height:1.5;color:#222122}.m-web-protocol__content .table-wrapper{overflow:auto}.m-web-protocol__content img,.m-web-protocol__content video{max-width:100% !important;height:auto !important}.m-web-protocol__content img{display:inline-block}.m-web-protocol__content table,.m-web-protocol__content td{border-collapse:collapse;border:solid 1px #c2c2c2}.m-web-protocol__content td{padding-left:10px}.m-web-protocol__content td p{text-align:inherit;max-width:90%}.m-web-protocol__content td a{white-space:nowrap}.m-web-protocol__content a{max-width:100%;word-break:break-word}.m-web-protocol__foot{display:block;margin-top:.9rem;text-align:center;font-size:0}.m-web-protocol__back{display:flex;flex-direction:row;justify-content:center;align-items:center;min-width:2.42rem;height:.82rem;padding:0 .14rem;background:#000;border:.08rem solid #767678;border-radius:.42rem;font-size:.28rem;font-weight:500;color:#fff}.m-web-protocol__back::after{margin-left:.26rem;font-size:.18rem;font-family:"icomoon",sans-serif !important;content:"";color:#d6d6d6;transform:rotate(-180deg)}',
        "",
      ]),
        (t.exports = n));
    },
    1141: function (t, e, o) {
      "use strict";
      var n = o(349),
        r = {
          name: "m-protocol",
          components: { footerBar: o(203).a, headerBar: n.a },
          props: { content: { type: String, default: "" }, title: { type: String, default: "" } },
          computed: {
            fromGame: function () {
              return this.$route.query.nolandscape && this.$route.query.fromGame;
            },
          },
        },
        c = (o(1132), o(36)),
        component = Object(c.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "page-protocol" },
              [
                e("header-bar"),
                t._v(" "),
                e("div", { staticClass: "m-web-protocol", class: { fromGame: t.fromGame } }, [
                  e("div", { staticClass: "m-web-protocol-container" }, [
                    e("div", { staticClass: "m-web-protocol__article" }, [
                      e("div", { staticClass: "m-web-protocol__title" }, [
                        t._v("\n          " + t._s(t.title) + "\n        "),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "m-web-protocol__info" }, [
                        e("span", { staticClass: "breadcrumb" }, [
                          t._v(
                            "\n            " +
                              t._s(t.$getI18nWord("gameName")) +
                              " > " +
                              t._s(t.title) +
                              "\n          ",
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", {
                        staticClass: "m-web-protocol__content",
                        domProps: { innerHTML: t._s(t.content) },
                      }),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("footer-bar"),
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
      e.a = component.exports;
    },
    1432: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o(32),
        r = (o(98), o(1118)),
        c = o(1131),
        l = {
          layout: "empty",
          components: { protocol: o(1141).a, protocolPdf: c.a },
          head: function () {
            return { title: "".concat(this.title).concat(this.$getI18nWord("seoTitlePrefix")) };
          },
          asyncData: function (t) {
            return Object(n.a)(
              regeneratorRuntime.mark(function e() {
                var o, n, c;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (o = t.redirect),
                          (n = t.store),
                          t.res,
                          (e.next = 3),
                          r.a.getUser({ data: { sLangKey: n.state.lang } })
                        );
                      case 3:
                        return (
                          (c = e.sent) || o({ name: "m-lang-main" }),
                          e.abrupt("return", { title: c.sTitle, content: c.sContent, pdfUrl: c.pdfUrl })
                        );
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )();
          },
        },
        f = o(36),
        component = Object(f.a)(
          l,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "client-only",
              [
                t.pdfUrl
                  ? e("protocol-pdf", { attrs: { "is-mob": !0, "pdf-url": t.pdfUrl } })
                  : e("protocol", { attrs: { title: t.title, content: t.content } }),
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
