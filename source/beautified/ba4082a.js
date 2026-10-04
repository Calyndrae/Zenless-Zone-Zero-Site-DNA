(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    1120: function (t, e, n) {
      "use strict";
      var r = n(47),
        o = n(346)(5),
        l = "find",
        c = !0;
      (l in [] &&
        Array(1).find(function () {
          c = !1;
        }),
        r(r.P + r.F * c, "Array", {
          find: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n(345)(l));
    },
    1122: function (t, e, n) {
      var content = n(1135);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, n(55).default)("72489e7e", content, !0, { sourceMap: !1 });
    },
    1124: function (t, e, n) {
      "use strict";
      (n(67), n(155), n(77));
      var r = n(1151),
        o = n.n(r),
        l = n(1117),
        c = n(28),
        h = n(1),
        m = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = t.iTotal,
            o = t.list,
            l = o.filter(function (t) {
              return !e || !t.sExt["news-self-path"];
            });
          return { iTotal: r - (e ? 1 : 0), list: l.slice(0, n) };
        };
      e.a = {
        formatNews: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return (
            t.forEach(function (t) {
              var e = h.default.prototype.$getI18nWord("dateFormat");
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
            Object(l.get)("".concat(c.apiBase, "/getContentList"), e, n, l.defaultFormatResult)
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
              return m(data, e, t.data.iPageSize);
            })
          );
        },
        getAllNews: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Object.assign({ iChanId: c.CHANNEL_ID_CONFIG.NEWS.ALL, iPageSize: 9 }, t.data || {});
          return (
            (t.data = n),
            this.getList(t).then(function (data) {
              return m(data, e, n.iPageSize);
            })
          );
        },
        getDetail: function () {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 };
          return (
            (e.data = Object.assign({ iChanId: c.CHANNEL_ID_CONFIG.NEWS.ALL, iAround: 1 }, e.data || {})),
            new Promise(function (n, r) {
              Object(l.get)(
                "".concat(c.apiBase, "/getContent"),
                e,
                l.defaultFormatParams,
                l.defaultFormatResult,
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
                param = Object.assign({ iChanId: c.CHANNEL_ID_CONFIG.NEWS.ALL, iPageSize: 10 }, t);
              return param;
            },
            n = function (data) {
              var t = {},
                e = !1;
              return (
                data.children.forEach(function (n) {
                  ((t[n.iChanId] = n), e || (e = n.iChanId === c.CHANNEL_ID_CONFIG.NEWS.ALL));
                }),
                e ||
                  data.children.splice(0, 0, { iChanId: c.CHANNEL_ID_CONFIG.NEWS.ALL, name: data.sChanName }),
                (data.arrList = data.children.slice(0, 4)),
                (data.objList = t),
                data
              );
            };
          return Object(l.get)("/getChildTree", t, e, n);
        },
      };
    },
    1126: function (t, e, n) {
      "use strict";
      (n(556), n(118));
      var r = n(49),
        o = {
          name: "page-tab",
          props: {
            navNum: { type: Number, default: 0 },
            size: { type: String, default: "" },
            direction: { type: String, default: "" },
            theme: { type: String, default: "" },
          },
          data: function () {
            return { navInfo: r.e[this.navNum - 1] };
          },
          computed: {
            hideEnLabel: function () {
              return ["en-us", "id-id"].includes(this.$store.state.lang);
            },
          },
        },
        l = (n(1134), n(36)),
        component = Object(l.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { class: ["section-nav", t.size, { "has-theme": t.theme }, t.direction] }, [
              t.theme
                ? e("svg", { staticClass: "section-nav-bg", attrs: { viewBox: "0 0 291.28 414" } }, [
                    e("path", {
                      attrs: {
                        fill: t.theme,
                        d: "m0,414V0h234.75c5.74.23,24.8,1.71,39.77,16.48,5.61,5.53,9.9,12.19,12.78,19.52,8.11,20.63,3.54,44.11-11.03,60.83C184.18,202.55,92.09,308.27,0,414Z",
                      },
                    }),
                  ])
                : t._e(),
              t._v(" "),
              e("div", { staticClass: "section-nav-inner" }, [
                e("div", {
                  staticClass: "section-nav-label",
                  domProps: {
                    innerHTML: t._s(t.$getI18nWord(2 === t.navNum ? "pageNavChara" : t.navInfo.mi18nKey)),
                  },
                }),
                t._v(" "),
                e(
                  "div",
                  {
                    directives: [
                      { name: "show", rawName: "v-show", value: !t.hideEnLabel, expression: "!hideEnLabel" },
                    ],
                    staticClass: "section-nav-en",
                  },
                  [t._v(t._s(t.$getI18nWord("".concat(t.navInfo.mi18nKey, "Label"))))],
                ),
                t._v(" "),
                e("div", { staticClass: "section-nav-num" }, [t._v("0" + t._s(t.navNum))]),
              ]),
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
    1127: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAABGxJREFUWEetl1toI2UYhp9M0iYt2m63Se2RZFmEbrYergQPVyKiN4qiIojLgt4pKyzrEcEzeCEKeuMJFxFEQVBkEb3SCwVBRRSkG9pkxWzrdm3TND0l7aaR9+9MmUwmnYn4wVBo/v9/v/P3fhGCJQoMAYeB64FrgQxwEEgAq8BFYAb42f6KQCno6cg+B/TbIHADcB9wI9AH9ADdgJSSNIBLQA3YAP4BvgY+BaaBtXYY7cC7gGuAR4FbgSSg/4UVKTEHfAycBv6ylWy67wcuy+4AngKytpVhQb3nFJLvgJeBX4C6+4AXvBd4wAY+BOwXlrAKKSQ/AU8CPwA7zkX343LrPcArgID/T5HFPwIngF+dEDjg+nsd8C5wVZDFUcsiGosRiUTY2dmhXq+bvwEiD3wOnATO66wDfgXwBnAvEPN7RECJRIJkKkVfXx/d3Up4aDQa1KpVSqWS+ba3t/fTYRl4EXgH2BS4wO4C3gKkRIvEYjGGR0YYSqWIWJaxGH0NVZldb40GW1tbnC8WWV4Whq/owm/A/UBO4GPAm8CdrtrduyngdDrNwcFBY+V+7o1Gd0v/XKHA0uKiaQA+smJb/7bAbwHeB9Leg7JwfGKC4eFhAyrwIJECOjuTy1FZVaW1iJLjW+AhgT8PPAYc8B7r7e1lcnISy34wCNj5XQqsr6+TO3vWJKOPqP0eF/gXwG1A3HsoncmQTCZDWey+a1mWuTM7M8PKirzcIkvASwL/HZjylpe0Pzo1ZbI6RBk1va5w6bu4sECxWPRTXvE4LfB5YMSrWzyRIJvN4sQwrMvdri+Xy+RnZ/2U31TNC1wu0Hhskp6eHo5ks8iFnVquh6S0XC7X+9zXBDwjcAV/3AuuhiLLO002t+XLpRKFQqGd5Z8JXNNGBMFyKyDNZbmU6NRyxVsem5ub4+/5eb+YV4D3BK6hrxEqVtIk7hrvJObylrI9Nz3N2povl1gEnhX448DTwEBL0sXjxvqurq529dqik6xWVywtLZHP59t57RzwoMBFjz60OVrLY6mhIQ5lMqZVtmkYe3cELEWr1appMJubSuoWUdc5AzwicJHDV20SsTuqXKIHR0ZHGRvTCGDPEnerdepaeVKr1Ux5rfq3Vj0hYili8ZHAlWg3Ax8AE36q6vGBgQHGxseJx3cboZlstjiKVCoVM9U2NkThfEUO/B44BvzpvKB4vwA8bLNT35tyaX9/v5nnUkIZfaleN318pVw2oAGhuQA8AXwCbLuZzBF7yIsqN5WdXyi8loeYeEoAMdnnAGV7E0F03P86cDRIgU5KT1YCXwGngFnnrpeditVowonqatg4i0GHWE3Hq8A3qmvgDzd/96PGUuAm4Bl7PbrsPyIrubS9iDS+BuS9i0M7Xq4QiD4ft1elUSCsEmIqGuI5tVDgSyfGLbkTYNXlwJXA3cDt9uh1djV5SMoLTLRY7lWNaT8ToPY1Da2tdhhhNxJRLDFbJeLVtle0RGrRUBYv2JaKmSqhtLX6tje3Iv8C8ltv3flgqjoAAAAASUVORK5CYII=";
    },
    1128: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    1134: function (t, e, n) {
      "use strict";
      n(1122);
    },
    1135: function (t, e, n) {
      var r = n(54),
        o = n(117),
        l = n(1136),
        c = n(1137),
        h = n(1138),
        m = r(!1),
        d = o(l),
        A = o(c),
        v = o(h);
      (m.push([
        t.i,
        ".section-nav{position:absolute;z-index:3;top:1.6rem;left:-6.9rem;width:9.91rem;height:7.08rem;padding-top:.3rem;background:url(" +
          d +
          ") no-repeat 0 0/100% 100%;line-height:1;color:#222122;pointer-events:none}.section-nav.has-theme{background:none}.section-nav-bg{position:absolute;width:3.01rem;height:4.62rem;right:0;top:-0.17rem;z-index:1}.section-nav-bg path{transition:fill .2s}.section-nav-inner{position:absolute;right:0;z-index:2;width:3.02rem;padding-left:.2rem;text-align:left;pointer-events:auto}.section-nav-label{font-size:.54rem}[mi18n-lang=ru-ru].pc .section-nav-label,[mi18n-lang=pt-pt].pc .section-nav-label,[mi18n-lang=de-de].pc .section-nav-label,[mi18n-lang=vi-vn].pc .section-nav-label,[mi18n-lang=fr-fr].pc .section-nav-label{font-size:.4rem}.section-nav-en{margin-top:.06rem;padding-left:.04rem;font-size:.24rem;text-transform:uppercase}.section-nav-num{margin-top:.06rem;font-size:1.16rem}.section-nav.lg{top:3rem;left:-3.23rem;width:8.45rem;height:7.86rem;padding-top:.38rem;background-image:url(" +
          A +
          ")}.section-nav.lg .section-nav-inner{width:5.24rem;padding-left:.7rem}.section-nav.lg .section-nav-label{font-size:.65rem}.section-nav.lg .section-nav-en{font-size:.32rem;letter-spacing:.01em;padding-left:.05rem}.section-nav.lg .section-nav-num{font-size:1.86rem}.section-nav.right{top:0;right:0;width:8.43rem;height:7.86rem;left:unset;background-image:url(" +
          v +
          ");padding-top:0}.section-nav.right .section-nav-inner{width:5.24rem;margin-top:4.57rem;margin-right:1.49rem;text-align:right}.section-nav.right .section-nav-label{font-size:.65rem}.section-nav.right .section-nav-en{font-size:.32rem;letter-spacing:.01em;padding-left:.05rem}.section-nav.right .section-nav-num{font-size:1.86rem}",
        "",
      ]),
        (t.exports = m));
    },
    1136: function (t, e, n) {
      t.exports = n.p + "img/inner-title.3d621d1.png";
    },
    1137: function (t, e, n) {
      t.exports = n.p + "img/bg-nav.daea1f6.png";
    },
    1138: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    1143: function (t, e, n) {
      "use strict";
      var r = n(47),
        o = n(346)(6),
        l = "findIndex",
        c = !0;
      (l in [] &&
        Array(1)[l](function () {
          c = !1;
        }),
        r(r.P + r.F * c, "Array", {
          findIndex: function (t) {
            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n(345)(l));
    },
    1147: function (t, e, n) {
      var content = n(1160);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, n(55).default)("753f2330", content, !0, { sourceMap: !1 });
    },
    1148: function (t, e, n) {
      t.exports = n.p + "img/inner-top.224793e.png";
    },
    1150: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      var r = n(265);
      var o = n(350),
        l = n(205);
      function c(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Object(r.a)(t);
          })(t) ||
          Object(o.a)(t) ||
          Object(l.a)(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
    },
    1156: function (t, e, n) {
      var content = n(1170);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, n(55).default)("2d6f0ea6", content, !0, { sourceMap: !1 });
    },
    1159: function (t, e, n) {
      "use strict";
      n(1147);
    },
    1160: function (t, e, n) {
      var r = n(54),
        o = n(117),
        l = n(1161),
        c = r(!1),
        h = o(l);
      (c.push([
        t.i,
        '.news-tag{position:relative;min-width:.4rem;padding-left:.1rem;height:.26rem;font-size:.12rem;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:bold;white-space:nowrap;background:#000;color:#bfdb5a;border-top-left-radius:.14rem;border-bottom-left-radius:.14rem;line-height:.23rem}.news-tag::after{content:"";position:absolute;top:0;right:-0.16rem;z-index:-1;width:.2rem;height:.26rem;white-space:nowrap;background:url(' +
          h +
          ") right center/auto 100%}.news-tag.mobile::after{background-repeat:no-repeat}",
        "",
      ]),
        (t.exports = c));
    },
    1161: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAQCAYAAABgIu2QAAAAAXNSR0IArs4c6QAAARdJREFUSEvNljFLA0EQhd/jutTHLlxhYSuSRghW4i/IDxDEQmz9KXY2FnYWNqKdaGVpGbSwEC1vppVAOO4c2YOTcAnaJbPdLgvz8WbmzRC9E2McATgBsG9mGySz/p8V3r/M7KaqqlN2QYuiGNR1fU7yEMDv+wqh/gp13QIlyKZpHgHsOgHrY8xa0BDCJckjp5AJa8o8z3eyLHt2mO553R4YY7wAcOxYzYQ2TqDvADYdg76KyDZDCPWaLeg/jQ5E5Mo1qJm9qeoWgMZ76ls1k+Sem+lFRIYAvltQx/Y0FpG7roBdGr6ZPanq3nyXeRyhMzMbqepkAbSb9w6WkimA1EC3fc9a2JLWsOZVZvZB8p7kWVmWn8uM9QeQn2pHGIhaowAAAABJRU5ErkJggg==";
    },
    1163: function (t, e, n) {
      "use strict";
      var r = n(32),
        o = (n(98), n(556), n(1120), n(1124)),
        l = {
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
        c = (n(1159), n(36)),
        component = Object(c.a)(
          l,
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
    1169: function (t, e, n) {
      "use strict";
      n(1156);
    },
    1170: function (t, e, n) {
      var r = n(54),
        o = n(117),
        l = n(1171),
        c = n(1172),
        h = n(1173),
        m = r(!1),
        d = o(l),
        A = o(c),
        v = o(h);
      (m.push([
        t.i,
        ".mihoyo-pager-rich{text-align:center}.mihoyo-pager-rich__pages{display:flex;align-items:center;height:.52rem;line-height:.52rem;border-radius:.3rem;background-color:#222122}.mihoyo-pager-rich__button,.mihoyo-pager-rich__ellipsis{display:inline-block;min-width:.64rem;padding:0;margin:0 .06rem;vertical-align:middle;text-align:center;font-size:.2rem;color:#fff}.mihoyo-pager-rich__button{cursor:pointer}.mihoyo-pager-rich__prev,.mihoyo-pager-rich__next{margin:0 .06rem;width:.64rem;height:.4rem;background:url(" +
          d +
          ") no-repeat center/100%;transition:all 300ms;cursor:pointer}.mihoyo-pager-rich__prev:hover,.mihoyo-pager-rich__next:hover{transform:scale(1.12)}.mihoyo-pager-rich__prev{margin-right:.24rem}.mihoyo-pager-rich__next{background-image:url(" +
          A +
          ");margin-left:.24rem}.mihoyo-pager-rich__current{width:.64rem;background:#fff;color:#000;background:rgba(0,0,0,0) url(" +
          v +
          ") no-repeat center center/0.64rem .32rem}.mihoyo-pager-rich .mihoyo-pager-rich__button:hover{color:#000;width:.64rem;background:#fff;background:rgba(0,0,0,0) url(" +
          v +
          ") no-repeat center center/0.64rem .32rem}.mihoyo-pager-rich .mihoyo-pager-rich__button:hover:not(.mihoyo-pager-rich__current){transform:scale(1.12)}.mihoyo-pager-rich .mihoyo-pager-rich__text{display:inline-block}.mihoyo-pager-rich .mihoyo-pager-rich__jump{display:inline-block}.mihoyo-pager-rich .mihoyo-pager-rich__jump em{font-style:normal}.mihoyo-pager-rich .mihoyo-pager-rich__input{outline:none;border:0;vertical-align:top}",
        "",
      ]),
        (t.exports = m));
    },
    1171: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    1172: function (t, e) {
      t.exports =
        "data:image/png;base64,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";
    },
    1173: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAgCAYAAACl36CRAAAAAXNSR0IArs4c6QAAAnFJREFUaEPdmLuPTVEYxX9LvEXoqKhEQSQiHomRkCCCkHhVSjM6FeNvMKPSeZQqryBeQUKCxCMaoVBS0RFhvGLJJ2dkcjNz73nsc2bunPbuvdb63XvOXefbosbL9grgILAJWArMrdEuj/RP4DHQL+ml8uwousb2IuAUsAuoxaNoppb1X4ENyYPZ3gJcAOZXDFj39jtJ4W1vBm4AM+pOnkD/ezJ428uz52legmBNSAwlgbe9EHgKLG4idSKPa5Xhbc8GHgKrE4VqQuZz5K0Eb3sKcBHY00TiRB6/gO2S7leFHwSOJgrVlEyvpHNhVhredh9wuqnEiXwGJB0f1ioFb3srcBOYmihUEzKXgAOSXBre9jLgCdAtlRasz+IVW9LQyG+50C9ve0Em1E2V9g5YK+lj6+2VG972rKzS1jRxjybyiEpbL+nNaHq54G3Huqi0vYlCNSETlbZD0r2xzPLCDwDHmkic0KNP0tl2eh3hbfcCZxKGakJqUFJ/J6O28Nl4GpU2rZPQBPr8MrB/ZKUVvu27tNKeAxtbK60Q/GSrtNzwk7HScsFnlRZHUPsm0DPcKcrvrNLudlrY9iXH9ok42SwqMs7rD0sq1Ub//+1tHwLa9uI4Q45mf1JS6fePf/DZweOtLqu0K1ml/Sn7o8j2EuBFl01pkTcq7VtZ8NgX8FeB3VVEGt4bU9o6SR+q+gZ8fHsxsXXDFVNaj6TXKcIGfAz4M1OI1azxA9gZB4+pfAL+NrAtlWBNOp+yI6gxx9MyvgG/EngEzCkjUPOeOG+7DhyR9D6113DVrQJiZu8Bpqc2Kaj3BXgLPADOS3pVcH/u5X8B9ni3uc8/x8MAAAAASUVORK5CYII=";
    },
    1174: function (t, e, n) {
      "use strict";
      n(556);
      var r = {
          name: "mi-ho-yo-pager-rich",
          props: {
            totalPage: { type: Number, default: 1, required: !0 },
            showItems: { type: Number, default: 5 },
            showPrev: { type: Boolean, default: !0 },
            showNext: { type: Boolean, default: !0 },
            showJump: { type: Boolean, default: !0 },
            initPage: { type: Number, default: 1 },
            mode: { type: String, default: "event" },
            routeName: { type: String, default: "" },
            prevText: { type: String, default: "上一页" },
            nextText: { type: String, default: "下一页" },
            totalText: {
              type: Array,
              default: function () {
                return ["共", "页"];
              },
            },
            jumpText: {
              type: Array,
              default: function () {
                return ["跳至", "页", "确认"];
              },
            },
            pagerClass: { type: String, default: "" },
            simpleStyle: { type: Boolean, default: !1 },
          },
          data: function () {
            return { currentPage: this.initPage, jumpPage: this.initPage };
          },
          computed: {
            pages: function () {
              var t = this,
                e = function (e, n) {
                  ((e <= 1 || e > n || e >= t.totalPage) && (e = 2),
                    (n >= t.totalPage || n < e || n <= 1) && (n = t.totalPage - 1));
                  for (var r = [], i = e; i <= n; i++) r.push(i);
                  return r;
                },
                n = this.showItems;
              if (this.totalPage < n + 2) return e(2, this.totalPage);
              if (this.currentPage <= Math.ceil(n / 2)) return e(2, n);
              if (this.currentPage >= this.totalPage - Math.floor(n / 2))
                return e(this.totalPage + 1 - n, this.totalPage - 1);
              var r = Math.ceil(n / 2) - 1,
                o = this.currentPage + r;
              return (n % 2 == 0 && (o += 1), e(this.currentPage - r, o));
            },
          },
          watch: {
            currentPage: function (t) {
              this.jumpPage = t;
            },
            initPage: function (t) {
              this.currentPage !== t && (this.currentPage = t);
            },
          },
          created: function () {
            if (((this.currentPage = this.initPage), "params" === this.mode && !this.routeName))
              throw new Error("need a route name when choose params mode in pager component");
          },
          beforeMount: function () {},
          methods: {
            go: function (t) {
              if ((t < 1 && (t = 1), t > this.totalPage && (t = this.totalPage), t !== this.currentPage))
                if (((this.currentPage = parseInt(t, 10)), "query" === this.mode)) {
                  var e = this.$route.query;
                  ((e.page = this.currentPage), this.$router.go({ query: e }));
                } else if ("params" === this.mode) {
                  var n = this.$route.params;
                  ((n.page = this.currentPage), this.$router.go({ name: this.routeName, params: n }));
                } else this.$emit("go", this.currentPage);
            },
          },
        },
        o = (n(1169), n(36)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            return t.totalPage > 0
              ? e("div", { staticClass: "mihoyo-pager-rich", class: t.pagerClass }, [
                  e(
                    "div",
                    { staticClass: "mihoyo-pager-rich__pages" },
                    [
                      e(
                        "a",
                        {
                          directives: [
                            { name: "show", rawName: "v-show", value: t.showPrev, expression: "showPrev" },
                          ],
                          staticClass: "mihoyo-pager-rich__prev",
                          class: { "mihoyo-pager-rich__prev--simple": t.simpleStyle },
                          on: {
                            click: function (e) {
                              return t.go(t.currentPage - 1);
                            },
                          },
                        },
                        [t._v(t._s(t.prevText))],
                      ),
                      t._v(" "),
                      e(
                        "a",
                        {
                          class: [
                            "mihoyo-pager-rich__button",
                            1 == t.currentPage ? "mihoyo-pager-rich__current" : "",
                          ],
                          on: {
                            click: function (e) {
                              return t.go(1);
                            },
                          },
                        },
                        [t._v("1")],
                      ),
                      t._v(" "),
                      e(
                        "strong",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.pages[0] > 2,
                              expression: "pages[0] > 2",
                            },
                          ],
                          staticClass: "mihoyo-pager-rich__ellipsis",
                        },
                        [t._v("...")],
                      ),
                      t._v(" "),
                      t._l(t.pages, function (n) {
                        return e(
                          "a",
                          {
                            key: n,
                            class: [
                              "mihoyo-pager-rich__button",
                              t.currentPage == n ? "mihoyo-pager-rich__current" : "",
                            ],
                            on: {
                              click: function (e) {
                                return t.go(n);
                              },
                            },
                          },
                          [t._v(t._s(n))],
                        );
                      }),
                      t._v(" "),
                      e(
                        "strong",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.pages[t.pages.length - 1] < t.totalPage - 1,
                              expression: "pages[pages.length-1] < totalPage - 1",
                            },
                          ],
                          staticClass: "mihoyo-pager-rich__ellipsis",
                        },
                        [t._v("...")],
                      ),
                      t._v(" "),
                      t.totalPage > 1
                        ? e(
                            "a",
                            {
                              class: [
                                "mihoyo-pager-rich__button",
                                t.currentPage == t.totalPage ? "mihoyo-pager-rich__current" : "",
                              ],
                              on: {
                                click: function (e) {
                                  return t.go(t.totalPage);
                                },
                              },
                            },
                            [t._v(t._s(t.totalPage))],
                          )
                        : t._e(),
                      t._v(" "),
                      e(
                        "a",
                        {
                          directives: [
                            { name: "show", rawName: "v-show", value: t.showNext, expression: "showNext" },
                          ],
                          staticClass: "mihoyo-pager-rich__next",
                          class: { "mihoyo-pager-rich__next--simple": t.simpleStyle },
                          on: {
                            click: function (e) {
                              return t.go(t.currentPage + 1);
                            },
                          },
                        },
                        [t._v(t._s(t.nextText))],
                      ),
                    ],
                    2,
                  ),
                  t._v(" "),
                  !t.simpleStyle && t.showJump && t.totalPage > 1
                    ? e("div", { staticClass: "mihoyo-pager-rich__jump" }, [
                        e("div", { staticClass: "mihoyo-pager-rich__text" }, [
                          t._v("\n      " + t._s(t.totalText[0]) + "\n      "),
                          e("em", { staticClass: "mihoyo-pager-rich__total" }, [t._v(t._s(t.totalPage))]),
                          t._v(" "),
                          e("span", [t._v(t._s(t.totalText[1]) + ", " + t._s(t.jumpText[0]))]),
                        ]),
                        t._v(" "),
                        e("input", {
                          directives: [
                            { name: "model", rawName: "v-model", value: t.jumpPage, expression: "jumpPage" },
                          ],
                          staticClass: "mihoyo-pager-rich__input",
                          attrs: { max: t.totalPage, type: "number", min: "1" },
                          domProps: { value: t.jumpPage },
                          on: {
                            input: function (e) {
                              e.target.composing || (t.jumpPage = e.target.value);
                            },
                          },
                        }),
                        t._v(" "),
                        "" !== t.jumpText[1] ? e("span", [t._v(t._s(t.jumpText[1]))]) : t._e(),
                        t._v(" "),
                        e(
                          "a",
                          {
                            staticClass: "mihoyo-pager-rich__button mihoyo-pager-rich__go",
                            on: {
                              click: function (e) {
                                return t.go(t.jumpPage);
                              },
                            },
                          },
                          [t._v(t._s(t.jumpText[2]))],
                        ),
                      ])
                    : t._e(),
                ])
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null,
        );
      e.a = component.exports;
    },
    1227: function (t, e, n) {
      var content = n(1396);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals));
      (0, n(55).default)("73aefb4c", content, !0, { sourceMap: !1 });
    },
    1395: function (t, e, n) {
      "use strict";
      n(1227);
    },
    1396: function (t, e, n) {
      var r = n(54),
        o = n(117),
        l = n(1148),
        c = n(1127),
        h = n(1128),
        m = n(1397),
        d = n(1398),
        A = r(!1),
        v = o(l),
        w = o(c),
        f = o(h),
        S = o(m),
        E = o(d);
      (A.push([
        t.i,
        ".news{position:relative;margin-top:1rem;min-height:100%;background:url(" +
          v +
          ') no-repeat 0 -1rem/10.3rem auto;overflow:hidden}.news-container{position:relative;margin-bottom:1.6rem;overflow:hidden}.news .section__foot{right:-6.4rem;z-index:-1}.news-slider{padding-top:1.6rem;margin-left:6.4rem}.news-slider__title{margin-right:.4rem;font-size:1.56rem;color:#dfdfdf;line-height:.84;font-family:"Impact",sans-serif;font-style:italic;text-transform:uppercase;text-align:right}.news-slider__latest{margin-top:1rem}.news-slider__latest.ul{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.news-slider__latest img{width:100%;height:100%;object-fit:cover;object-position:center}.news-slider__latest-item{width:6.86rem;height:3.68rem;margin-right:.76rem;overflow:hidden}.news-slider__latest-img{position:relative;display:block;width:100%;height:100%;border-bottom-left-radius:.55rem;border-top-right-radius:.55rem;overflow:hidden}.news-slider__pagination{position:relative;width:12.8rem;height:.22rem;margin-top:.4rem;margin-left:.5rem}.news-slider__pagination .swiper-pagination{top:0;width:100%;line-height:.2rem;text-align:left}.news-slider__pagination .swiper-pagination .swiper-pagination-bullet{display:inline-block;width:.2rem;height:.2rem;margin-left:0;margin-right:.22rem;background-color:rgba(0,0,0,0);background:url(' +
          w +
          ") no-repeat center center/100% 100%;opacity:1;vertical-align:bottom}.news-slider__pagination .swiper-pagination .swiper-pagination-bullet-active{background-image:url(" +
          f +
          ")}.news-wrap{position:relative;width:12.8rem;margin-top:1.45rem;margin-left:6.4rem}.news-tab{position:relative;display:flex;flex-direction:row;align-items:center;width:8.2rem;font-weight:bold;height:.64rem;padding:0 .2rem;background-color:#222122;border-radius:.32rem}.news-tab__item{position:relative;z-index:2;width:1.95rem;font-size:.22rem;text-align:center;color:#fff;white-space:nowrap;cursor:pointer;flex-shrink:0;transition:transform 300ms,opacity 300ms,color 300ms}[mi18n-lang=fr-fr] .news-tab__item,[mi18n-lang=pt-pt] .news-tab__item,[mi18n-lang=vi-vn] .news-tab__item,[mi18n-lang=ru-ru] .news-tab__item,[mi18n-lang=de-de] .news-tab__item{font-size:.16rem}.news-tab__item:hover:not(.news-tab__item--active){transform:scale(1.12)}.news-tab__item:hover,.news-tab__item--active{color:#333}.news-tab__item:hover .news-tab__label-active,.news-tab__item--active .news-tab__label-active{opacity:1}.news-tab__item--active{color:#333;line-height:.64rem}.news-tab__label-active{position:absolute;top:50%;left:50%;z-index:-1;width:1.34rem;height:.44rem;background:url(" +
          S +
          ") no-repeat 0 0/100% 100%;transform:translate(-50%, -50%);opacity:0;transition:all 300ms}[mi18n-lang=fr-fr] .news-tab__label-active,[mi18n-lang=pt-pt] .news-tab__label-active,[mi18n-lang=vi-vn] .news-tab__label-active,[mi18n-lang=ru-ru] .news-tab__label-active,[mi18n-lang=de-de] .news-tab__label-active{width:1.5rem;background-image:url(" +
          E +
          ")}.news-list{margin:1.1rem auto .2rem;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}.news-list__item{width:3.96rem;margin-right:.46rem;margin-bottom:.84rem;transition:transform 500ms,opacity 500ms,color 500ms}.news-list__item:nth-child(3n+3),.news-list__item:last-child{margin-right:0}.news-list__item-banner{display:flex;justify-content:center;overflow:hidden;width:100%;height:2.2rem;flex-shrink:0;border-top-right-radius:.35rem;border-bottom-left-radius:.35rem;cursor:pointer;transform:scale(1)}.news-list__item-banner:hover img{transform:scale(1.15)}.news-list__item-banner img{width:100%;height:100%;object-fit:cover;object-position:center center;transition:transform 300ms}.news-list__item-content{margin-top:.34rem}.news-list__item-date{font-size:.2rem;color:#000;display:flex;flex-direction:row;align-items:center}.news-list__item-date>div{margin-right:.2rem}.news-list__item-title{margin-top:.34rem;width:100%;font-size:.22rem;line-height:1.3;font-weight:800;color:#222122;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:pointer}.news-list__item-desc{margin-top:.16rem;width:100%;font-size:.16rem;color:#7a7a7a;overflow:hidden;text-overflow:ellipsis;height:.54rem;white-space:break-spaces;line-height:.26rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;cursor:pointer}.news-list__item:hover::before{transform:scaleX(1)}.news-pager{display:flex;justify-content:center;position:relative;margin-top:0;font-size:0;color:#fff}.news-pager .mihoyo-pager-rich{display:flex;justify-content:center;align-items:center}",
        "",
      ]),
        (t.exports = A));
    },
    1397: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAAsCAYAAACg/sAZAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tnFvIZlMYx39/5yTnEhcioXBDpowRkrlAynAjXFDDxTRN44oZIWR8dxS5cMqFkQvTJOHCIeRUipuhHMrkgpRzkvNfz9ceDd753r33u9fe7+57ntu91nqe9Xv/7XftZ61nibQkMIGAhqZi+0RgDXAecCpwFHDA0HEtM/8/AK8BC5LejrkPJgzbq4A7gAuGjGOZCWDadP8E1kl6qHdh2D4EeAC4ZlqU+XwQAn8AK3sVhu0TgOeBkwaZcjqtS2Bbb8KwfTzwBnBM3eiy3WAEvutFGLYPB94CTh5squm4CQEXF4bt/YAXgXObRJZtByWwsw9hPAFcPeg003lTAgtFhWH7TuDWplFl+0EJ7AROLyYM29cCj2WOYtAfuanzSHSdI2lHEWHYjqTVC0CsL9LGQeB34BJJsR7sPvNp+xTgTeDQcfDIKCsCayU9uotGp28M27HP8Q5wXOIeFYEtkm7ZPeLOhGH7QOBVYMWokGSwTwFXSXLnwrC9F7ANuCw5j4pAZKIvlPTrf6Pu5I1h+15g46iQZLCfLG6WSd9MQjGzMGyvB+5PzqMi8DVwtqQQx0SbSRi2LwW2A3uPCsvyDvaX6u8jvhz3aK2FYfuM6tTPQcub86hm/1dsT0iKBeeS1koYto+tPkuPnuYgn88Vgc2S7qkTUWNh2D64SmCdVsdBtpkbAo9Iur5uNI2EYXuf6gTW6roOst1cEIg098WS4theLWsqjIeBtbVGzkbzQmAHsErSj00Cqi0M25uALU0Gz7aDE/gSOEvS500jqSUM21cCW4HIcKaNg8BPUasj6b024U4VRlX/8VIWAbXBO1ifqA9ZI+nZthEsKYyqSiwO8R7Z1kH2G4TABkkzZaP3KAzbRwBRrhYlhGnjIXCfpBtnDXeiMGzvD7wcq9lZHWT/Xgk8A1wuKTKcM9n/hGEvlhQ8CcSCM208BN4Fzpf0cxchTxLG3cDmLgbPMXojECe747P0q648/ksYtiN5FUmstPEQ+L5KYH3YZcj/CMN2pLmfA/bt0kGOVZTAb8BFkl7p2suiMGzHhlgc84orCtLGQ+A6SY+XCFe245j/+3myuwTeomPeJem2Uh5CGAvATaUc5LhFCGyVVPTimRDGZ/m2KPLjlRr0dWC1pFhfFLMQRiRDpu6ZFIsgB25C4KPqEO+3TTq1aRvCCCeHtemcfXol8EVVcBxv+OIWwngauKK4p3QwC4GPq4LjT2cZpEnfEMaZ1WZZHNtLmz8CcfHMeklxRUFvtiuPcQPwYNaH9MZ9mqOoI42k1e2Slqz/mDZQ2+e7Zz5XAjdXN/Rmoqst0Xb9oggo9jk+qGp1ti9VJdbORbNefwM/I/ZaCddmAgAAAABJRU5ErkJggg==";
    },
    1398: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAsCAYAAACHUEHxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ5QUFEMEY5REFDRjExRUVBMTM3QTkwMzg5OEU1QUUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ5QUFEMEZBREFDRjExRUVBMTM3QTkwMzg5OEU1QUUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDlBQUQwRjdEQUNGMTFFRUExMzdBOTAzODk4RTVBRTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDlBQUQwRjhEQUNGMTFFRUExMzdBOTAzODk4RTVBRTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5as6JYAAADVklEQVR42uydW4hNURjH17cxJBmhlAeRUHihqDEyJecBTRl5mERRJJeXeaNQLmlelKKUW/NgNKVpyO0BE3J5IE9DMWrGCykNI4kxzvH/7K1O05mZc9l7n5n9/f/17+ucs/dap2//WuvsddlHMpmMo6iwJeX+AgB7HkIdXAMvgmfAE3hpRpV64Ydwo4g8KytYAKoa4Qi8eiQAToWiP/AewHVOygBUJcIZeAuvQyLVD1dJzFDNRbgNz2f+E61WiRGqOQiP4ZnMe+L1RWKCairCU3gBc25CGS8GqCoQ2giVKb33YqjkEryKuTallki7QrRWRxEOMc+m1A0vkQih2ha0VhyjsiMdKF0pIh0SEVQ66HkHrmCuzeg3vB5Q3dUXXgRQLURoJVTmtPs/VKGDBah0nu8WPIV5NqUTgOpi9hsSIlQTER7Ay5hnW3eA8GaAlQkdLEDlBd3fBubZlHQmZQ2g+jXwg7C6wpOEypw69ZrngiqUFgut1T6E08yzKX2GVwCqzsEOkBKhqnX+dM0Y5tqMfgbd35OhDvJKgGopwhVCZUppePtwUBUNFqCahXATnsRcm9JBQNWSz4FSBFSTEZTYxcyzKV0AVDvzPVgKhGqs81eApphnU9IR9XUAqz/fEwrtCs8SKnPqgDcVAlVBYKG1OoCwg3k2pY/On1j+VuiJkidU9QjNLoJJa2rE6jtcA6heFnOy5AGV7v+757iJ1JJ0f2AdoLpRbAHeMFDpLuVrhMqcGkqBakiwANU05y+Bmc48m9IpQFXyFJ0MAtV4hPtwNfNsStfhjQArXWpBXg6oFLYmQmVOz52/riodRmG5usLjcD3zbErdcC2g+hFWgTKgtdJxqvPMsyl91d4JUL0Os1DJgioV/Fgfx1ybUR+8FlC1h12wF0ClE8pXCZU57YoCqn9gASrdUaNjFpXMsykdA1RNURWuLdZ+eDbzbErNgOpwlBUIWqwugmVKj+AUwOqLGqy04/MVrOiN8zdB9ERdkRfcblLJ14fgDrAnjsoUrHbmPPF66/wlMF1xVahgNTr/SbdUMnUZXg6o3sVZqYcKXyDudf4aHCoZ0uco6CICfVbVVrg37i+QPfJeFQw96D9EcExrdEk3kX6CXzn/HyLahtqlHIf+CjAAeu7fkAOBY9gAAAAASUVORK5CYII=";
    },
    1416: function (t, e, n) {
      "use strict";
      n.r(e);
      (n(77), n(206), n(207));
      var r = n(1150),
        o = n(71),
        l = (n(1143), n(556), n(136), n(137), n(67), n(155), n(204), n(1120), n(119), n(118), n(28)),
        c = n(1126),
        h = n(1174),
        m = n(1163),
        d = n(347),
        A = n(1124),
        v = l.CHANNEL_ID_CONFIG.NEWS.ALL,
        w = {
          name: "news",
          components: { pageTab: c.a, mihoyoPagerRich: h.a, newsTag: m.a, backTop: d.a },
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
                  renderBullet: function (t, e) {
                    return '<span class="'.concat(e, " swiper-pagination-index-").concat(t + 1, '"></span>');
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
              return this.$route.query.category || v;
            },
            activeChannelIndex: function () {
              var t = this;
              return this.cates.findIndex(function (e) {
                return e.iChanId === t.cateId;
              });
            },
          },
          watch: {
            "$route.query.category": function () {
              this.renderPage(1, "cate");
            },
          },
          asyncData: function (t) {
            var e = t.query,
              n = t.store,
              l = e.category,
              c = Number(l || v),
              h = n.state.newsCache.pageIndex,
              m = n.getters.blockGachaAnnounce;
            return (
              n.commit("setNewsCache", { pageIndex: 1 }),
              Promise.all([
                A.a.getSliderNews({ data: { sLangKey: n.state.lang } }, m),
                A.a.getCates({ data: { sLangKey: n.state.lang } }),
                A.a.getAllNews({ data: { iPageSize: 9, iPage: h, iChanId: c, sLangKey: n.state.lang } }, m),
              ]).then(function (t) {
                var e = Object(o.a)(t, 3),
                  l = e[0],
                  c = e[1].arrList,
                  m = e[2],
                  d = c[0],
                  A = d.children,
                  v = [d].concat(Object(r.a)(A.reverse())).filter(function (t) {
                    return t.sChanName;
                  });
                return (
                  n.commit("setNewsCates", A),
                  {
                    latestNewsList: l.list.slice(0, 6),
                    cates: v,
                    initPage: h,
                    newsList: m.list,
                    total: Math.ceil(m.iTotal / 9),
                  }
                );
              })
            );
          },
          mounted: function () {
            var t = this,
              e = this.$store.state.newsCache.newsIndex;
            -1 !== e &&
              setTimeout(function () {
                var n = document.querySelector(".news-wrap").offsetTop - 30;
                if (e >= 3) {
                  var r,
                    o = document.querySelectorAll(".news-list__item")[3];
                  n += null !== (r = null == o ? void 0 : o.offsetTop) && void 0 !== r ? r : 0;
                }
                ($("html,body").animate({ scrollTop: n }, 0),
                  t.$store.commit("setNewsCache", { newsIndex: -1 }));
              }, 0);
          },
          methods: {
            renderPage: function (t, e) {
              var n = this;
              A.a
                .getAllNews(
                  {
                    cache: !0,
                    data: { iChanId: this.cateId, iPageSize: 9, iPage: t, sLangKey: this.$store.state.lang },
                  },
                  this.$store.getters.blockGachaAnnounce,
                )
                .then(function (data) {
                  if (
                    ((n.newsList = data.list),
                    (n.total = Math.ceil(data.iTotal / 9)),
                    (n.initPage = t),
                    "cate" !== e)
                  ) {
                    var r = document.querySelector(".news-wrap").offsetTop;
                    $("html,body").animate({ scrollTop: r }, 0);
                  }
                });
            },
            handlePaginationClick: function (t) {
              var e = t.target || t.srcElement;
              if (e.className.indexOf("swiper-pagination-index") > -1) {
                var n = e.className
                  .split(" ")
                  .find(function (t) {
                    return t.includes("swiper-pagination-index-");
                  })
                  .split("-")
                  .pop();
                this.$trackButton("news_point", "".concat(n));
              }
            },
            handlePicClick: function (t, e) {
              (this.$store.commit("setNewsCache", { pageIndex: this.initPage, newsIndex: e }),
                this.$trackButton("news_pics", "".concat(t.iInfoId)));
            },
          },
        },
        f = (n(1395), n(36)),
        component = Object(f.a)(
          w,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "news" }, [
              e(
                "div",
                { staticClass: "news-container" },
                [
                  e("pageTab", { attrs: { "nav-num": 4 } }),
                  t._v(" "),
                  e(
                    "div",
                    { staticClass: "news-slider" },
                    [
                      e("div", { staticClass: "news-slider__title" }, [
                        t._v(t._s(t.$getI18nWord("nav3Label"))),
                      ]),
                      t._v(" "),
                      e(
                        "client-only",
                        [
                          t.latestNewsList.length < 3
                            ? e(
                                "ul",
                                { staticClass: "news-slider__latest ul" },
                                t._l(t.latestNewsList, function (n) {
                                  return e(
                                    "li",
                                    { key: n.id, staticClass: "news-slider__latest-item" },
                                    [
                                      e(
                                        "nuxt-link",
                                        {
                                          staticClass: "news-slider__latest-img",
                                          attrs: {
                                            to: n.sExt["news-self-path"]
                                              ? { name: "lang-news".concat(n.sExt["news-self-path"]) }
                                              : { name: "lang-news-id", params: { id: n.iInfoId } },
                                          },
                                          nativeOn: {
                                            click: function (e) {
                                              return t.handlePicClick(n);
                                            },
                                          },
                                        },
                                        [e("img", { attrs: { src: n.banner, alt: "" } })],
                                      ),
                                    ],
                                    1,
                                  );
                                }),
                                0,
                              )
                            : e(
                                "swiper",
                                {
                                  ref: "mySwiper",
                                  staticClass: "news-slider__latest",
                                  attrs: { options: t.swiperOption },
                                },
                                t._l(t.latestNewsList, function (n) {
                                  return e(
                                    "swiper-slide",
                                    { key: n.id, staticClass: "news-slider__latest-item" },
                                    [
                                      e(
                                        "nuxt-link",
                                        {
                                          staticClass: "news-slider__latest-img",
                                          attrs: {
                                            to: n.sExt["news-self-path"]
                                              ? { name: "lang-news".concat(n.sExt["news-self-path"]) }
                                              : { name: "lang-news-id", params: { id: n.iInfoId } },
                                          },
                                          nativeOn: {
                                            click: function (e) {
                                              return t.handlePicClick(n);
                                            },
                                          },
                                        },
                                        [e("img", { attrs: { src: n.banner, alt: "" } })],
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
                      t._v(" "),
                      e(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.latestNewsList.length > 1,
                              expression: "latestNewsList.length > 1",
                            },
                          ],
                          staticClass: "news-slider__pagination",
                        },
                        [
                          e("div", {
                            staticClass: "swiper-pagination",
                            attrs: { slot: "pagination" },
                            on: {
                              click: function (e) {
                                return t.handlePaginationClick(e);
                              },
                            },
                            slot: "pagination",
                          }),
                        ],
                      ),
                    ],
                    1,
                  ),
                  t._v(" "),
                  e(
                    "div",
                    { ref: "newsWrapper", staticClass: "news-wrap" },
                    [
                      e(
                        "div",
                        { staticClass: "news-tab" },
                        t._l(t.cates, function (n, i) {
                          return e(
                            "nuxt-link",
                            {
                              key: n.iChanId,
                              staticClass: "news-tab__item",
                              class: {
                                "news-tab__item--active": n.iChanId.toString() === t.cateId.toString(),
                              },
                              attrs: {
                                to: {
                                  path:
                                    0 !== i
                                      ? "/".concat(t.lang, "/news?category=").concat(n.iChanId)
                                      : "/".concat(t.lang, "/news"),
                                },
                              },
                            },
                            [
                              e("div", { staticClass: "news-tab__label" }, [
                                t._v("\n            " + t._s(n.sChanName) + "\n          "),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "news-tab__label-active" }),
                            ],
                          );
                        }),
                        1,
                      ),
                      t._v(" "),
                      e(
                        "div",
                        { staticClass: "news-list" },
                        t._l(t.newsList, function (n, r) {
                          return e(
                            "div",
                            { key: n.iInfoId, staticClass: "news-list__item" },
                            [
                              e(
                                "nuxt-link",
                                {
                                  attrs: {
                                    to: n.sExt["news-self-path"]
                                      ? { name: "lang-news".concat(n.sExt["news-self-path"]) }
                                      : { name: "lang-news-id", params: { id: n.iInfoId } },
                                  },
                                  nativeOn: {
                                    click: function (e) {
                                      return t.handlePicClick(n, r);
                                    },
                                  },
                                },
                                [
                                  e("div", { staticClass: "news-list__item-banner" }, [
                                    e("img", { attrs: { src: n.banner, alt: "" } }),
                                  ]),
                                ],
                              ),
                              t._v(" "),
                              e(
                                "div",
                                { staticClass: "news-list__item-content" },
                                [
                                  e(
                                    "div",
                                    { staticClass: "news-list__item-date" },
                                    [
                                      e("div", [t._v(t._s(n.dateFormat))]),
                                      t._v(" "),
                                      e("news-tag", { attrs: { channel: n.sChanId[0] } }),
                                    ],
                                    1,
                                  ),
                                  t._v(" "),
                                  e(
                                    "nuxt-link",
                                    {
                                      attrs: {
                                        to: n.sExt["news-self-path"]
                                          ? { name: "lang-news".concat(n.sExt["news-self-path"]) }
                                          : { name: "lang-news-id", params: { id: n.iInfoId } },
                                      },
                                    },
                                    [
                                      e("div", { staticClass: "news-list__item-title" }, [
                                        t._v("\n                " + t._s(n.title) + "\n              "),
                                      ]),
                                      t._v(" "),
                                      e("div", {
                                        staticClass: "news-list__item-desc",
                                        domProps: { innerHTML: t._s(n.summary) },
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
                      t._v(" "),
                      t.total > 1
                        ? e("mihoyo-pager-rich", {
                            staticClass: "news-pager",
                            attrs: {
                              "total-page": t.total,
                              "show-jump": !1,
                              "show-prev": !0,
                              "show-next": !0,
                              "init-page": t.initPage,
                              "next-text": "<",
                              "prev-text": ">",
                            },
                            on: { go: t.renderPage },
                          })
                        : t._e(),
                    ],
                    1,
                  ),
                  t._v(" "),
                  e("div", { staticClass: "section__foot" }),
                ],
                1,
              ),
            ]);
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
