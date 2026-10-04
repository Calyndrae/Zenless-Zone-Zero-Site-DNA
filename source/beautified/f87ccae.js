(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    1120: function (e, t, n) {
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
          find: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n(345)(c));
    },
    1124: function (e, t, n) {
      "use strict";
      (n(67), n(155), n(77));
      var r = n(1151),
        o = n.n(r),
        c = n(1117),
        l = n(28),
        d = n(1),
        m = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = e.iTotal,
            o = e.list,
            c = o.filter(function (e) {
              return !t || !e.sExt["news-self-path"];
            });
          return { iTotal: r - (t ? 1 : 0), list: c.slice(0, n) };
        };
      t.a = {
        formatNews: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return (
            e.forEach(function (e) {
              var t = d.default.prototype.$getI18nWord("dateFormat");
              ((e.sExt = "string" == typeof e.sExt ? JSON.parse(e.sExt) : e.sExt),
                (e.banner = e.sExt["news-banner"][0].url),
                (e.title = e.sTitle),
                (e.summary = e.sIntro),
                (e.date = o()(e.dtStartTime, t)),
                (e.dateFormat = o()(e.dtStartTime, t)),
                (e.id = e.iInfoId));
            }),
            e
          );
        },
        getList: function () {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            n = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = Object.assign({ iPageSize: 20, iPage: 1 }, e);
              return t;
            };
          return new Promise(function (r, o) {
            Object(c.get)("".concat(l.apiBase, "/getContentList"), t, n, c.defaultFormatResult)
              .then(function (data) {
                ((data.list = e.formatNews(data.list)), r(data));
              })
              .catch(function (e) {
                o(e);
              });
          });
        },
        getSliderNews: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (
            (e.data = Object.assign({ iPage: 1, iPageSize: 7 }, e.data || {})),
            this.getAllNews(e).then(function (data) {
              return m(data, t, e.data.iPageSize);
            })
          );
        },
        getAllNews: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Object.assign({ iChanId: l.CHANNEL_ID_CONFIG.NEWS.ALL, iPageSize: 9 }, e.data || {});
          return (
            (e.data = n),
            this.getList(e).then(function (data) {
              return m(data, t, n.iPageSize);
            })
          );
        },
        getDetail: function () {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 };
          return (
            (t.data = Object.assign({ iChanId: l.CHANNEL_ID_CONFIG.NEWS.ALL, iAround: 1 }, t.data || {})),
            new Promise(function (n, r) {
              Object(c.get)(
                "".concat(l.apiBase, "/getContent"),
                t,
                c.defaultFormatParams,
                c.defaultFormatResult,
              )
                .then(function (data) {
                  var t = e.formatNews([data])[0];
                  ((t.content = t.sContent), n(t));
                })
                .catch(function (e) {
                  r(e);
                });
            })
          );
        },
        getCates: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            t = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                param = Object.assign({ iChanId: l.CHANNEL_ID_CONFIG.NEWS.ALL, iPageSize: 10 }, e);
              return param;
            },
            n = function (data) {
              var e = {},
                t = !1;
              return (
                data.children.forEach(function (n) {
                  ((e[n.iChanId] = n), t || (t = n.iChanId === l.CHANNEL_ID_CONFIG.NEWS.ALL));
                }),
                t ||
                  data.children.splice(0, 0, { iChanId: l.CHANNEL_ID_CONFIG.NEWS.ALL, name: data.sChanName }),
                (data.arrList = data.children.slice(0, 4)),
                (data.objList = e),
                data
              );
            };
          return Object(c.get)("/getChildTree", e, t, n);
        },
      };
    },
    1127: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAABGxJREFUWEetl1toI2UYhp9M0iYt2m63Se2RZFmEbrYergQPVyKiN4qiIojLgt4pKyzrEcEzeCEKeuMJFxFEQVBkEb3SCwVBRRSkG9pkxWzrdm3TND0l7aaR9+9MmUwmnYn4wVBo/v9/v/P3fhGCJQoMAYeB64FrgQxwEEgAq8BFYAb42f6KQCno6cg+B/TbIHADcB9wI9AH9ADdgJSSNIBLQA3YAP4BvgY+BaaBtXYY7cC7gGuAR4FbgSSg/4UVKTEHfAycBv6ylWy67wcuy+4AngKytpVhQb3nFJLvgJeBX4C6+4AXvBd4wAY+BOwXlrAKKSQ/AU8CPwA7zkX343LrPcArgID/T5HFPwIngF+dEDjg+nsd8C5wVZDFUcsiGosRiUTY2dmhXq+bvwEiD3wOnATO66wDfgXwBnAvEPN7RECJRIJkKkVfXx/d3Up4aDQa1KpVSqWS+ba3t/fTYRl4EXgH2BS4wO4C3gKkRIvEYjGGR0YYSqWIWJaxGH0NVZldb40GW1tbnC8WWV4Whq/owm/A/UBO4GPAm8CdrtrduyngdDrNwcFBY+V+7o1Gd0v/XKHA0uKiaQA+smJb/7bAbwHeB9Leg7JwfGKC4eFhAyrwIJECOjuTy1FZVaW1iJLjW+AhgT8PPAYc8B7r7e1lcnISy34wCNj5XQqsr6+TO3vWJKOPqP0eF/gXwG1A3HsoncmQTCZDWey+a1mWuTM7M8PKirzcIkvASwL/HZjylpe0Pzo1ZbI6RBk1va5w6bu4sECxWPRTXvE4LfB5YMSrWzyRIJvN4sQwrMvdri+Xy+RnZ/2U31TNC1wu0Hhskp6eHo5ks8iFnVquh6S0XC7X+9zXBDwjcAV/3AuuhiLLO002t+XLpRKFQqGd5Z8JXNNGBMFyKyDNZbmU6NRyxVsem5ub4+/5eb+YV4D3BK6hrxEqVtIk7hrvJObylrI9Nz3N2povl1gEnhX448DTwEBL0sXjxvqurq529dqik6xWVywtLZHP59t57RzwoMBFjz60OVrLY6mhIQ5lMqZVtmkYe3cELEWr1appMJubSuoWUdc5AzwicJHDV20SsTuqXKIHR0ZHGRvTCGDPEnerdepaeVKr1Ux5rfq3Vj0hYili8ZHAlWg3Ax8AE36q6vGBgQHGxseJx3cboZlstjiKVCoVM9U2NkThfEUO/B44BvzpvKB4vwA8bLNT35tyaX9/v5nnUkIZfaleN318pVw2oAGhuQA8AXwCbLuZzBF7yIsqN5WdXyi8loeYeEoAMdnnAGV7E0F03P86cDRIgU5KT1YCXwGngFnnrpeditVowonqatg4i0GHWE3Hq8A3qmvgDzd/96PGUuAm4Bl7PbrsPyIrubS9iDS+BuS9i0M7Xq4QiD4ft1elUSCsEmIqGuI5tVDgSyfGLbkTYNXlwJXA3cDt9uh1djV5SMoLTLRY7lWNaT8ToPY1Da2tdhhhNxJRLDFbJeLVtle0RGrRUBYv2JaKmSqhtLX6tje3Iv8C8ltv3flgqjoAAAAASUVORK5CYII=";
    },
    1128: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    1143: function (e, t, n) {
      "use strict";
      var r = n(47),
        o = n(346)(6),
        c = "findIndex",
        l = !0;
      (c in [] &&
        Array(1)[c](function () {
          l = !1;
        }),
        r(r.P + r.F * l, "Array", {
          findIndex: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n(345)(c));
    },
    1144: function (e, t, n) {
      e.exports = n.p + "img/inner-top-m.329e7ed.png";
    },
    1147: function (e, t, n) {
      var content = n(1160);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, n(55).default)("753f2330", content, !0, { sourceMap: !1 });
    },
    1150: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var r = n(265);
      var o = n(350),
        c = n(205);
      function l(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Object(r.a)(e);
          })(e) ||
          Object(o.a)(e) ||
          Object(c.a)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
    },
    1159: function (e, t, n) {
      "use strict";
      n(1147);
    },
    1160: function (e, t, n) {
      var r = n(54),
        o = n(117),
        c = n(1161),
        l = r(!1),
        d = o(c);
      (l.push([
        e.i,
        '.news-tag{position:relative;min-width:.4rem;padding-left:.1rem;height:.26rem;font-size:.12rem;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:bold;white-space:nowrap;background:#000;color:#bfdb5a;border-top-left-radius:.14rem;border-bottom-left-radius:.14rem;line-height:.23rem}.news-tag::after{content:"";position:absolute;top:0;right:-0.16rem;z-index:-1;width:.2rem;height:.26rem;white-space:nowrap;background:url(' +
          d +
          ") right center/auto 100%}.news-tag.mobile::after{background-repeat:no-repeat}",
        "",
      ]),
        (e.exports = l));
    },
    1161: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAQCAYAAABgIu2QAAAAAXNSR0IArs4c6QAAARdJREFUSEvNljFLA0EQhd/jutTHLlxhYSuSRghW4i/IDxDEQmz9KXY2FnYWNqKdaGVpGbSwEC1vppVAOO4c2YOTcAnaJbPdLgvz8WbmzRC9E2McATgBsG9mGySz/p8V3r/M7KaqqlN2QYuiGNR1fU7yEMDv+wqh/gp13QIlyKZpHgHsOgHrY8xa0BDCJckjp5AJa8o8z3eyLHt2mO553R4YY7wAcOxYzYQ2TqDvADYdg76KyDZDCPWaLeg/jQ5E5Mo1qJm9qeoWgMZ76ls1k+Sem+lFRIYAvltQx/Y0FpG7roBdGr6ZPanq3nyXeRyhMzMbqepkAbSb9w6WkimA1EC3fc9a2JLWsOZVZvZB8p7kWVmWn8uM9QeQn2pHGIhaowAAAABJRU5ErkJggg==";
    },
    1163: function (e, t, n) {
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
              var e = this;
              return this.newsCates.find(function (t) {
                return Number(t.iChanId) === Number(e.channel);
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
              var e = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  var n, r;
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return ((t.next = 2), o.a.getCates({ data: { sLangKey: e.$store.state.lang } }));
                        case 2:
                          ((n = t.sent), (r = n.arrList[0].children), e.$store.commit("setNewsCates", r));
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              )();
            },
          },
        },
        l = (n(1159), n(36)),
        component = Object(l.a)(
          c,
          function () {
            var e = this;
            return (0, e._self._c)("div", { staticClass: "news-tag", class: { mobile: e.mob } }, [
              e._v("\n  " + e._s(e.currentChannel && e.currentChannel.sChanName) + "\n"),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        );
      t.a = component.exports;
    },
    1208: function (e, t, n) {
      var content = n(1312);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, n(55).default)("280c7ea6", content, !0, { sourceMap: !1 });
    },
    1311: function (e, t, n) {
      "use strict";
      n(1208);
    },
    1312: function (e, t, n) {
      var r = n(54),
        o = n(117),
        c = n(1144),
        l = n(1127),
        d = n(1128),
        m = n(1313),
        f = r(!1),
        h = o(c),
        w = o(l),
        A = o(d),
        v = o(m);
      (f.push([
        e.i,
        ".m-news{position:relative;margin-top:1.1rem;min-height:100%;background:url(" +
          h +
          ') no-repeat 0 0/4rem auto;overflow:hidden}.m-news img{width:100%;height:100%;object-fit:cover;object-position:center center}.m-news-container{padding-bottom:.98rem}.m-news-slider{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-end}.m-news-slider__title{width:4rem;margin-top:.7rem;margin-right:.4rem;font-size:1.4rem;color:#dfdfdf;line-height:.84;font-family:"Impact",sans-serif;font-style:italic;text-transform:uppercase;text-align:right}.m-news-slider__swiper{margin-top:.4rem;display:none}.m-news-slider__item{height:5rem}.m-news-slider__item-img{position:relative;display:block;width:6.7rem;height:5rem;margin:0 .4rem;border-bottom-left-radius:.55rem;border-top-right-radius:.55rem;overflow:hidden}.m-news-slider__pagination{display:none;position:relative;width:100%;height:.22rem;padding:0 .4rem;margin-top:.4rem}.m-news-slider__pagination .swiper-pagination{top:0;line-height:.2rem;text-align:left}.m-news-slider__pagination .swiper-pagination .swiper-pagination-bullet{display:inline-block;border-radius:0;width:.2rem;height:.2rem;margin-left:0;margin-right:.22rem;background-color:rgba(0,0,0,0);background:url(' +
          w +
          ") no-repeat center center/100% 100%;opacity:1;vertical-align:bottom}.m-news-slider__pagination .swiper-pagination .swiper-pagination-bullet-active{background-image:url(" +
          A +
          ")}.m-news-main{position:relative;margin:1.36rem auto 0;padding:0 .4rem}.m-news-tab{position:absolute;left:.4rem;top:-1rem;display:flex;flex-direction:row;align-items:center;width:6.72rem;height:.54rem;padding:0 .2rem;background-color:#222122;border-radius:.32rem;border:.01rem solid #353335}.m-news-tab__item{position:relative;z-index:2;width:1.58rem;font-size:.22rem;font-weight:800;text-align:center;color:#fff;white-space:nowrap;cursor:pointer;flex-shrink:0}.m-news-tab__item--active{color:#333}.m-news-tab__thumb{position:absolute;left:0;width:1.7rem;height:.44rem;background:url(" +
          v +
          ') no-repeat 0 0/100% 100%}.m-news-list{width:6.7rem;margin:.9rem auto 0;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.m-news-list__item{width:100%;margin-bottom:.9rem;cursor:pointer;transition:all 500ms}.m-news-list__item:nth-child(3n+3){margin-right:0}.m-news-list__item-banner{overflow:hidden;width:100%;height:3.74rem;flex-shrink:0;border-top-right-radius:.55rem;border-bottom-left-radius:.55rem}.m-news-list__item-content{margin-top:.58rem}.m-news-list__item-date{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;font-size:.28rem;color:#000}.m-news-list__item-date>div{margin-right:.2rem}.m-news-list__item-title{margin-top:.4rem;width:100%;font-size:.32rem;font-weight:800;color:#222122}.m-news-list__item-desc{margin-top:.16rem;width:100%;font-size:.24rem;color:#7a7a7a;overflow:hidden;height:.6rem;line-height:.32rem;text-overflow:ellipsis;white-space:break-spaces;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.m-news-list__item:hover::before{transform:scaleX(1)}.m-news-foot{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 .4rem;text-align:center}.m-news .load-more{display:flex;flex-direction:row;justify-content:center;align-items:center;min-width:2.42rem;height:.82rem;padding:0 .14rem;background:#000;border:.08rem solid #767678;border-radius:.42rem;font-size:.28rem;font-weight:500;color:#fff}.m-news .load-more::after{margin-left:.26rem;font-size:.18rem;font-family:"icomoon",sans-serif !important;content:"";color:#d6d6d6;transform:rotate(90deg)}.m-news .back-top{display:flex;flex-direction:row;justify-content:center;align-items:center;min-width:2.42rem;height:.82rem;padding:0 .14rem;background:#000;border:.08rem solid #767678;border-radius:.42rem;font-size:.28rem;font-weight:500;color:#fff;margin-top:.4rem;font-size:.22rem}.m-news .back-top::after{margin-left:.26rem;font-size:.18rem;font-family:"icomoon",sans-serif !important;content:"";color:#d6d6d6;transform:rotate(-90deg)}.m-news .no-more{font-size:.28rem;font-weight:500;color:#b0b0b0}',
        "",
      ]),
        (e.exports = f));
    },
    1313: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAsCAYAAAD1nyNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADO0lEQVR4nO3dvYscdRgH8M9e8JQURu0kkXRBPE/8A5QoYgwGI+IroqKtBt+IiIWFFikOTBOChU0StQha+IJwqBBJCKKFYqFRGxFDRJAYMeArGYvfHsSc2Zff/mbmbuf5dHe78zxTfJmdeea3s72qqqwA63EvbsJ8/++ZVvcotOkE3sYuHIdey0HdhBdxtwhmWO4UbsfhtoLaw7N4AbNt7EBYNX7BXBtBncVr0lE0hFHsaTqoa/AG7miyaVj1jjcd1L14tMmGYTo0eQHznAhpyPNHU0fUB/BqE43CVDrURFBvxnu4oO5GYWptr/uj/1q8KUIa8r2Cd+s8om7Ex7i8rgZh6i3iNvxTV1Avw1FcWUfx0AmfYTNOU89V/0XSfdoIacj1HW7VDynlg7pGuut0XeG6oTt+xlb8dPY/Swd1N+4sXDN0x+/Yjm/PfaFkUJ/B4wXrhW45g/ukC/BlSgX1fiwUqhW6aQfeOd+LJYJ6I/YVqBO6axdeHvSGScdT1+AILp6kSOi0/XgEA4M4SVCvkM4n1ucWCJ33vjTQ/2vYG3ODeok00L8qZ+MQ8Lk00P9tlDfnnKNeKJ30RkhDru+xzYghZfyg9qTletePuV0IS05KA/0fx9lo3KDuFt91CvmWBvpfj7vhOEF9Ck+O2yCEvjPSAvqjORuPejF1Dw7mNAihb4f0nbksowR1Mz4Qi59DvgXpOQ7ZhgV1TjpUr5ukSei01/GgIQP9YQYFdYM00N8wSYPQaR9KY6ihA/1hzhfUddKt0flJG4TO+kI6bfy1RLH/u+qfxVsipCHfD9IK/SIhZXlQeziAG0o1CJ1zShronyhZ9NygLkjPKQ0hx5/SQP+r0oXPDuoT2Fm6QeiMpYH+kTqKLwX1Lun2aAi5npYeNlKLXlVVm6QlV2vrahKm3ktq/jSewfMipCHfQemLnbXqVVV1EpfW3ShMpY9wiwID/WF61Qr5WZSw6nyKLQrOSgeZkRayhjCOwxoMKSmoi001C1Nhr/TM28ZCSvron5OenBY/oxMGOYbHcKiN5jP4Eg/j7zZ2IKx4n+AhXK2lkPLf1VPz0qhqi1h/2lWnpQUlx6Tz0EV80+oe9f0LD+677vb27W0AAAAASUVORK5CYII=";
    },
    1415: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(32),
        o = n(1150),
        c = n(71),
        l = (n(98), n(1143), n(556), n(136), n(77), n(137), n(67), n(1120), n(155), n(28)),
        d = n(1149),
        m = n(1163),
        f = n(1124),
        h = l.CHANNEL_ID_CONFIG.NEWS.ALL,
        w = 10,
        A = {
          layout: "m/default",
          name: "m-news",
          components: { pageTab: d.a, newsTag: m.a },
          data: function () {
            return { page: 1, isLoading: !1, btntext: this.$getI18nWord("loadMore") };
          },
          head: function () {
            return {
              title: "".concat(this.$getI18nWord("nav3")).concat(this.$getI18nWord("seoTitlePrefix")),
            };
          },
          computed: {
            cateId: function () {
              return +(this.$route.query.category || h);
            },
            activeChannelIndex: function () {
              var e = this;
              return this.cates.findIndex(function (t) {
                return t.iChanId === e.cateId;
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
          asyncData: function (e) {
            var t = e.params,
              n = e.store,
              r = t.cate,
              d = Number(r || l.CHANNEL_ID_CONFIG.NEWS.ALL),
              m = n.getters.blockGachaAnnounce,
              h = n.state.newsCache,
              A = h.newsIndex,
              v = h.mNews.newsList;
            return -1 !== A && v && 0 !== v.length
              ? JSON.parse(JSON.stringify(n.state.newsCache.mNews))
              : Promise.all([
                  f.a.getCates({ data: { sLangKey: n.state.lang } }),
                  f.a.getAllNews({ data: { iPageSize: w, iPage: 1, iChanId: d, sLangKey: n.state.lang } }, m),
                ]).then(function (e) {
                  var t = Object(c.a)(e, 2),
                    r = t[0].arrList,
                    l = t[1],
                    m = r[0],
                    f = m.children,
                    h = [m].concat(Object(o.a)(f.reverse())).filter(function (e) {
                      return e.sChanName;
                    });
                  return (
                    n.commit("setNewsCates", f),
                    {
                      cates: h,
                      cateChan: h.find(function (e) {
                        return e.iChanId === d;
                      }),
                      newsList: l.list,
                      total: Math.ceil(l.iTotal / w),
                      hasMore: l.iTotal > w,
                    }
                  );
                });
          },
          mounted: function () {
            var e,
              t = this.$store.state.newsCache,
              n = t.newsIndex,
              r = t.pageIndex;
            if (-1 !== n) {
              ((this.page = r),
                this.$store.commit("setNewsCache", { pageIndex: 1, newsIndex: -1, mNews: {} }));
              var o = document.querySelector(".m-news-main").offsetTop - 20,
                c = document.querySelectorAll(".m-news-list__item")[n];
              ((o += null !== (e = null == c ? void 0 : c.offsetTop) && void 0 !== e ? e : 0),
                setTimeout(function () {
                  $("html,body").animate({ scrollTop: o }, 0);
                }, 0));
            }
          },
          methods: {
            reload: function () {
              var e = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  var n, r, o, c;
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (e.page = 1),
                            (n = {
                              data: { iChanId: e.cateId, iPageSize: w, iPage: e.page, sLangKey: e.lang },
                            }),
                            (t.next = 4),
                            f.a.getAllNews(n, e.$store.getters.blockGachaAnnounce)
                          );
                        case 4:
                          ((r = t.sent), (o = r.iTotal), (c = r.list), (e.hasMore = o > w), (e.newsList = c));
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              )();
            },
            handleTop: function () {
              $("html,body").animate({ scrollTop: 0 }, 600);
            },
            handleMore: function () {
              var e = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (((e.page += 1), !e.isLoading)) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt("return");
                          case 3:
                            return (
                              (e.btntext = e.$getI18nWord("loadTxt")),
                              (e.isLoading = !0),
                              (t.prev = 5),
                              (t.next = 8),
                              e.getList()
                            );
                          case 8:
                            ((e.isLoading = !1), (e.btntext = e.$getI18nWord("loadMore")), (t.next = 16));
                            break;
                          case 12:
                            ((t.prev = 12),
                              (t.t0 = t.catch(5)),
                              (e.isLoading = !1),
                              (e.btntext = e.$getI18nWord("loadMore")));
                          case 16:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[5, 12]],
                  );
                }),
              )();
            },
            getList: function () {
              var e = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  var n, r;
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = {
                              data: {
                                iChanId: e.cateId,
                                iPageSize: w,
                                iPage: e.page,
                                sLangKey: e.$store.state.lang,
                              },
                            }),
                            (t.next = 3),
                            f.a.getAllNews(n, e.$store.getters.blockGachaAnnounce)
                          );
                        case 3:
                          return (
                            (r = t.sent),
                            (e.newsList = [].concat(Object(o.a)(e.newsList), Object(o.a)(r.list))),
                            (e.hasMore = e.newsList.length < r.iTotal),
                            t.abrupt("return", r)
                          );
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              )();
            },
            handlePicClick: function (e, t) {
              (this.$store.commit("setNewsCache", {
                mNews: { cates: this.cates, newsList: this.newsList.slice(), hasMore: this.hasMore },
                pageIndex: this.page,
                newsIndex: t,
              }),
                this.$trackButton("news_pics", "".concat(e.iInfoId)));
            },
          },
        },
        v = (n(1311), n(36)),
        component = Object(v.a)(
          A,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              { staticClass: "m-news" },
              [
                t("pageTab", { attrs: { "nav-num": 4 } }),
                e._v(" "),
                t("div", { staticClass: "m-news-container section-wrap" }, [
                  t("div", { staticClass: "m-news-slider" }, [
                    t("div", { staticClass: "m-news-slider__title" }, [
                      e._v(e._s(e.$getI18nWord("nav3Label"))),
                    ]),
                  ]),
                  e._v(" "),
                  t("div", { staticClass: "m-news-main" }, [
                    t(
                      "div",
                      { staticClass: "m-news-tab" },
                      [
                        t("div", {
                          staticClass: "m-news-tab__thumb",
                          style: { left: "".concat(1.58 * e.activeChannelIndex + 0.12, "rem") },
                        }),
                        e._v(" "),
                        e._l(e.cates, function (n, i) {
                          return t(
                            "nuxt-link",
                            {
                              key: n.iChanId,
                              staticClass: "m-news-tab__item",
                              class: { "m-news-tab__item--active": n.iChanId === e.cateId },
                              attrs: {
                                to: {
                                  path:
                                    0 !== i
                                      ? "/m/"
                                          .concat(e.lang, "/news?category=")
                                          .concat(n.iChanId)
                                          .concat(
                                            e.$route.query.shareType
                                              ? "&shareType=" + e.$route.query.shareType
                                              : "",
                                          )
                                      : "/m/"
                                          .concat(e.lang, "/news")
                                          .concat(
                                            e.$route.query.shareType
                                              ? "?shareType=" + e.$route.query.shareType
                                              : "",
                                          ),
                                },
                              },
                            },
                            [
                              t("div", { staticClass: "m-news-tab__label" }, [
                                e._v("\n            " + e._s(n.sChanName) + "\n          "),
                              ]),
                            ],
                          );
                        }),
                      ],
                      2,
                    ),
                    e._v(" "),
                    t(
                      "div",
                      { staticClass: "m-news-list" },
                      e._l(e.newsList, function (n, r) {
                        return t(
                          "nuxt-link",
                          {
                            key: n.iInfoId,
                            staticClass: "m-news-list__item",
                            attrs: {
                              to: n.sExt["news-self-path"]
                                ? { name: "m-lang-news".concat(n.sExt["news-self-path"]) }
                                : { name: "m-lang-news-id", params: { id: n.iInfoId } },
                            },
                            nativeOn: {
                              click: function (t) {
                                return e.handlePicClick(n, r);
                              },
                            },
                          },
                          [
                            t("div", { staticClass: "m-news-list__item-banner" }, [
                              t("img", { attrs: { src: n.banner, alt: "banner" } }),
                            ]),
                            e._v(" "),
                            t("div", { staticClass: "m-news-list__item-content" }, [
                              t(
                                "div",
                                { staticClass: "m-news-list__item-date" },
                                [
                                  t("div", [e._v(e._s(n.dateFormat))]),
                                  e._v(" "),
                                  t("news-tag", { attrs: { channel: n.sChanId[0], mob: !0 } }),
                                ],
                                1,
                              ),
                              e._v(" "),
                              t("div", { staticClass: "m-news-list__item-title ellipsis" }, [
                                e._v("\n              " + e._s(n.title) + "\n            "),
                              ]),
                              e._v(" "),
                              t("div", {
                                staticClass: "m-news-list__item-desc ellipsis",
                                domProps: { innerHTML: e._s(n.summary) },
                              }),
                            ]),
                          ],
                        );
                      }),
                      1,
                    ),
                  ]),
                  e._v(" "),
                  t("div", { staticClass: "m-news-foot" }, [
                    e.hasMore
                      ? t("div", { staticClass: "load-more", on: { click: e.handleMore } }, [
                          e._v("\n        " + e._s(e.$getI18nWord("loadMore")) + "\n      "),
                        ])
                      : t("div", { staticClass: "no-more" }, [
                          t("div", [e._v(e._s(e.$getI18nWord("noMore")))]),
                          e._v(" "),
                          t(
                            "div",
                            {
                              staticClass: "back-top",
                              on: {
                                click: function (t) {
                                  return e.handleTop();
                                },
                              },
                            },
                            [e._v(e._s(e.$getI18nWord("textBackTop")))],
                          ),
                        ]),
                  ]),
                ]),
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
      t.default = component.exports;
    },
  },
]);
