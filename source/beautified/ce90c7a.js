(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    1118: function (t, o, e) {
      "use strict";
      (e(85), e(84), e(67), e(105), e(106));
      var n = e(56),
        r = (e(77), e(1117)),
        c = e(28);
      function l(object, t) {
        var o = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(object);
          (t &&
            (e = e.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            o.push.apply(o, e));
        }
        return o;
      }
      function f(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? l(Object(source), !0).forEach(function (o) {
                Object(n.a)(t, o, source[o]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source))
              : l(Object(source)).forEach(function (o) {
                  Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(source, o));
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
      o.a = {
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
            o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            e = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                o = Object.assign(f(f({}, param), {}, { iChanId: c.CHANNEL_ID_CONFIG.PROTOCOL.PRIVACY }), t);
              return o;
            };
          return new Promise(function (n, l) {
            Object(r.get)("".concat(c.apiBase, "/getContentList"), o, e, r.defaultFormatResult)
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
            o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            e = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                o = Object.assign(f(f({}, param), {}, { iChanId: c.CHANNEL_ID_CONFIG.PROTOCOL.TERMS }), t);
              return o;
            };
          return new Promise(function (n, l) {
            Object(r.get)("".concat(c.apiBase, "/getContentList"), o, e, r.defaultFormatResult)
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
            o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            e = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                o = Object.assign(f(f({}, param), {}, { iChanId: c.CHANNEL_ID_CONFIG.PROTOCOL.TERMS2 }), t);
              return o;
            };
          return new Promise(function (n, l) {
            Object(r.get)("".concat(c.apiBase, "/getContentList"), o, e, r.defaultFormatResult)
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
            o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            e = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                o = Object.assign(f(f({}, param), {}, { iChanId: c.CHANNEL_ID_CONFIG.PROTOCOL.TERMS3 }), t);
              return o;
            };
          return new Promise(function (n, l) {
            Object(r.get)("".concat(c.apiBase, "/getContentList"), o, e, r.defaultFormatResult)
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
            o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            e = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                o = Object.assign(f(f({}, param), {}, { iChanId: c.CHANNEL_ID_CONFIG.PROTOCOL.HISTORY }), t);
              return o;
            };
          return new Promise(function (n, l) {
            Object(r.get)("".concat(c.apiBase, "/getContentList"), o, e, r.defaultFormatResult)
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
            o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            e = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                o = Object.assign(
                  f(
                    f({}, param),
                    {},
                    { iInfoId: c.INFO_ID_CONFIG.FUND, iChanId: c.CHANNEL_ID_CONFIG.PROTOCOL.JP_FUND },
                  ),
                  t,
                );
              return o;
            };
          return new Promise(function (n, l) {
            Object(r.get)("".concat(c.apiBase, "/getContent"), o, e, r.defaultFormatResult)
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
            o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            e = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                o = Object.assign(
                  f(
                    f({}, param),
                    {},
                    { iInfoId: c.INFO_ID_CONFIG.ABOUT, iChanId: c.CHANNEL_ID_CONFIG.PROTOCOL.JP_FUND },
                  ),
                  t,
                );
              return o;
            };
          return new Promise(function (n, l) {
            Object(r.get)("".concat(c.apiBase, "/getContent"), o, e, r.defaultFormatResult)
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
    1119: function (t, o, e) {
      var content = e(1130);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, e(55).default)("6bc63dc0", content, !0, { sourceMap: !1 });
    },
    1123: function (t, o, e) {
      var content = e(1140);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, e(55).default)("f28f7f26", content, !0, { sourceMap: !1 });
    },
    1125: function (t, o, e) {
      t.exports = e.p + "img/inner-top.5496864.png";
    },
    1129: function (t, o, e) {
      "use strict";
      e(1119);
    },
    1130: function (t, o, e) {
      var n = e(54)(!1);
      (n.push([
        t.i,
        ".protocol-pdf{position:absolute;top:0;left:0;width:100%;height:100vh}.protocol-pdf.mob{height:auto;min-height:100vh}.protocol-pdf iframe{width:100%;height:100%}",
        "",
      ]),
        (t.exports = n));
    },
    1131: function (t, o, e) {
      "use strict";
      var n = {
          layout: "empty",
          props: { isMob: { required: !0, type: Boolean }, pdfUrl: { required: !0, type: String } },
        },
        r = (e(1129), e(36)),
        component = Object(r.a)(
          n,
          function () {
            var t = this,
              o = t._self._c;
            return t.isMob
              ? o(
                  "div",
                  { staticClass: "protocol-pdf mob" },
                  [o("pdf-viewer", { attrs: { src: t.pdfUrl, "text-layer": !0, "annotation-layer": !0 } })],
                  1,
                )
              : o("div", { staticClass: "protocol-pdf" }, [
                  o("iframe", { attrs: { src: t.pdfUrl, frameborder: "0" } }),
                ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      o.a = component.exports;
    },
    1139: function (t, o, e) {
      "use strict";
      e(1123);
    },
    1140: function (t, o, e) {
      var n = e(54),
        r = e(117),
        c = e(1125),
        l = e(557),
        f = n(!1),
        d = r(c),
        m = r(l);
      (f.push([
        t.i,
        '.web-protocol{position:relative;min-height:100%}.web-protocol-container{position:relative;z-index:2;padding:3.6rem 0 1.6rem;overflow:hidden}.web-protocol-container::before{content:"";position:absolute;top:2.6rem;left:-6.9rem;width:9.9rem;height:4.8rem;background:url(' +
          d +
          ') no-repeat 0 0/100% auto}.web-protocol-container::after{content:"";position:absolute;right:-6.5rem;bottom:1.6rem;z-index:-1;width:9.91rem;height:7.08rem;background:url(' +
          m +
          ') no-repeat 0 0/100% 100%}.web-protocol-container{position:relative;z-index:2;padding:3.6rem 0 1.6rem}.web-protocol .backContainer{position:sticky;right:1.5rem;bottom:0;z-index:90;width:100%;height:1.8rem}.web-protocol .backContainer .backTop{left:auto;right:1.5rem;background-position:bottom center}.web-protocol__article{position:relative;width:12.8rem;margin:0 auto}.web-protocol__title{font-size:.8rem;font-weight:800;color:#222122;text-align:center}.web-protocol__info{display:flex;flex-direction:row;justify-content:space-between;align-items:center;height:.64rem;padding:0 .54rem;margin:.9rem 0;font-size:.24rem;line-height:1;color:#fff;background-color:#222122;border-radius:.32rem}.web-protocol__info .breadcrumb{display:flex;align-items:center}.web-protocol__info .news-tag{font-size:.24rem;color:#fff}.web-protocol__content{font-size:.2rem;padding-bottom:1.3rem;color:#222122;line-height:1.5}.web-protocol__content .table-wrapper{overflow:auto}.web-protocol__content img,.web-protocol__content video{max-width:100% !important;height:auto !important}.web-protocol__content img{display:inline-block}.web-protocol__content table{width:100%;min-width:auto !important}.web-protocol__content table,.web-protocol__content td{border-collapse:collapse;border:solid 1px #c2c2c2}.web-protocol__content td{padding-left:10px}.web-protocol__content td p{text-align:inherit;max-width:90%}.web-protocol__content td a{white-space:nowrap}.web-protocol__content a{max-width:100%;word-break:break-word}.web-protocol.mob{margin-top:1.1rem;min-height:100%}.web-protocol.mob::before{display:none}.web-protocol.mob::after{display:none}.web-protocol.mob .web-protocol-container{padding:.9rem .4rem;text-align:center}.web-protocol.mob .web-protocol__article{position:relative;text-align:left;width:100%}.web-protocol.mob .web-protocol__title{font-size:.42rem}.web-protocol.mob .web-protocol__info{padding:0 .24rem;margin:.9rem 0;font-size:.24rem}.web-protocol.mob .web-protocol__info .breadcrumb{display:flex;align-items:center}.web-protocol.mob .web-protocol__info .news-tag{font-size:.24rem}.web-protocol.mob .web-protocol__content{font-size:.26rem}.web-protocol.mob .web-protocol-back{display:flex;flex-direction:row;justify-content:center;align-items:center;min-width:2.42rem;height:.82rem;padding:0 .14rem;background:#000;border:.08rem solid #767678;border-radius:.42rem;font-size:.28rem;font-weight:500;color:#fff}.web-protocol.mob .web-protocol-back::after{margin-left:.26rem;font-size:.18rem;font-family:"icomoon",sans-serif !important;content:"";color:#d6d6d6;transform:rotate(-180deg)}',
        "",
      ]),
        (t.exports = f));
    },
    1142: function (t, o, e) {
      "use strict";
      var n = e(348),
        r = e(203),
        c = e(347),
        l = {
          name: "protocol",
          components: { footerBar: r.a, headerBar: n.a, backTop: c.a },
          props: { content: { type: String, default: "" }, title: { type: String, default: "" } },
          computed: {
            isMobile: function () {
              return this.$isMob;
            },
          },
        },
        f = (e(1139), e(36)),
        component = Object(f.a)(
          l,
          function () {
            var t = this,
              o = t._self._c;
            return o(
              "div",
              { staticClass: "page-protocol" },
              [
                o("header-bar"),
                t._v(" "),
                o("div", { staticClass: "web-protocol" }, [
                  o("div", { staticClass: "web-protocol-container" }, [
                    o("div", { staticClass: "web-protocol__article" }, [
                      o("div", { staticClass: "web-protocol__title" }, [
                        t._v("\n          " + t._s(t.title) + "\n        "),
                      ]),
                      t._v(" "),
                      o("div", { staticClass: "web-protocol__info" }, [
                        o("span", { staticClass: "breadcrumb" }, [
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
                      o("div", {
                        staticClass: "web-protocol__content",
                        domProps: { innerHTML: t._s(t.content) },
                      }),
                    ]),
                  ]),
                  t._v(" "),
                  o(
                    "div",
                    { staticClass: "backContainer" },
                    [o("backTop", { attrs: { theme: "reverse" } })],
                    1,
                  ),
                ]),
                t._v(" "),
                o("footer-bar"),
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
      o.a = component.exports;
    },
    1446: function (t, o, e) {
      "use strict";
      e.r(o);
      var n = e(32),
        r = (e(98), e(1131)),
        c = e(1142),
        l = e(1118),
        f = {
          layout: "empty",
          components: { protocol: c.a, protocolPdf: r.a },
          head: function () {
            return { title: "".concat(this.title).concat(this.$getI18nWord("seoTitlePrefix")) };
          },
          asyncData: function (t) {
            return Object(n.a)(
              regeneratorRuntime.mark(function o() {
                var e, n, r;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (e = t.redirect),
                          (n = t.store),
                          t.res,
                          (o.next = 3),
                          l.a.getPrivacy({ data: { sLangKey: n.state.lang } })
                        );
                      case 3:
                        return (
                          (r = o.sent) || e({ name: "lang-main", params: { lang: n.state.lang } }),
                          o.abrupt("return", { title: r.sTitle, content: r.sContent, pdfUrl: r.pdfUrl })
                        );
                      case 6:
                      case "end":
                        return o.stop();
                    }
                }, o);
              }),
            )();
          },
        },
        d = e(36),
        component = Object(d.a)(
          f,
          function () {
            var t = this,
              o = t._self._c;
            return o(
              "client-only",
              [
                t.pdfUrl
                  ? o("protocol-pdf", { attrs: { "is-mob": !1, "pdf-url": t.pdfUrl } })
                  : o("protocol", { attrs: { title: t.title, content: t.content } }),
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
      o.default = component.exports;
    },
  },
]);
