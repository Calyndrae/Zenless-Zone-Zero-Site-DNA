(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    1120: function (e, t, n) {
      "use strict";
      var o = n(47),
        r = n(346)(5),
        l = "find",
        c = !0;
      (l in [] &&
        Array(1).find(function () {
          c = !1;
        }),
        o(o.P + o.F * c, "Array", {
          find: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }),
        n(345)(l));
    },
    1122: function (e, t, n) {
      var content = n(1135);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, n(55).default)("72489e7e", content, !0, { sourceMap: !1 });
    },
    1126: function (e, t, n) {
      "use strict";
      (n(556), n(118));
      var o = n(49),
        r = {
          name: "page-tab",
          props: {
            navNum: { type: Number, default: 0 },
            size: { type: String, default: "" },
            direction: { type: String, default: "" },
            theme: { type: String, default: "" },
          },
          data: function () {
            return { navInfo: o.e[this.navNum - 1] };
          },
          computed: {
            hideEnLabel: function () {
              return ["en-us", "id-id"].includes(this.$store.state.lang);
            },
          },
        },
        l = (n(1134), n(36)),
        component = Object(l.a)(
          r,
          function () {
            var e = this,
              t = e._self._c;
            return t("div", { class: ["section-nav", e.size, { "has-theme": e.theme }, e.direction] }, [
              e.theme
                ? t("svg", { staticClass: "section-nav-bg", attrs: { viewBox: "0 0 291.28 414" } }, [
                    t("path", {
                      attrs: {
                        fill: e.theme,
                        d: "m0,414V0h234.75c5.74.23,24.8,1.71,39.77,16.48,5.61,5.53,9.9,12.19,12.78,19.52,8.11,20.63,3.54,44.11-11.03,60.83C184.18,202.55,92.09,308.27,0,414Z",
                      },
                    }),
                  ])
                : e._e(),
              e._v(" "),
              t("div", { staticClass: "section-nav-inner" }, [
                t("div", {
                  staticClass: "section-nav-label",
                  domProps: {
                    innerHTML: e._s(e.$getI18nWord(2 === e.navNum ? "pageNavChara" : e.navInfo.mi18nKey)),
                  },
                }),
                e._v(" "),
                t(
                  "div",
                  {
                    directives: [
                      { name: "show", rawName: "v-show", value: !e.hideEnLabel, expression: "!hideEnLabel" },
                    ],
                    staticClass: "section-nav-en",
                  },
                  [e._v(e._s(e.$getI18nWord("".concat(e.navInfo.mi18nKey, "Label"))))],
                ),
                e._v(" "),
                t("div", { staticClass: "section-nav-num" }, [e._v("0" + e._s(e.navNum))]),
              ]),
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
    1127: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAABGxJREFUWEetl1toI2UYhp9M0iYt2m63Se2RZFmEbrYergQPVyKiN4qiIojLgt4pKyzrEcEzeCEKeuMJFxFEQVBkEb3SCwVBRRSkG9pkxWzrdm3TND0l7aaR9+9MmUwmnYn4wVBo/v9/v/P3fhGCJQoMAYeB64FrgQxwEEgAq8BFYAb42f6KQCno6cg+B/TbIHADcB9wI9AH9ADdgJSSNIBLQA3YAP4BvgY+BaaBtXYY7cC7gGuAR4FbgSSg/4UVKTEHfAycBv6ylWy67wcuy+4AngKytpVhQb3nFJLvgJeBX4C6+4AXvBd4wAY+BOwXlrAKKSQ/AU8CPwA7zkX343LrPcArgID/T5HFPwIngF+dEDjg+nsd8C5wVZDFUcsiGosRiUTY2dmhXq+bvwEiD3wOnATO66wDfgXwBnAvEPN7RECJRIJkKkVfXx/d3Up4aDQa1KpVSqWS+ba3t/fTYRl4EXgH2BS4wO4C3gKkRIvEYjGGR0YYSqWIWJaxGH0NVZldb40GW1tbnC8WWV4Whq/owm/A/UBO4GPAm8CdrtrduyngdDrNwcFBY+V+7o1Gd0v/XKHA0uKiaQA+smJb/7bAbwHeB9Leg7JwfGKC4eFhAyrwIJECOjuTy1FZVaW1iJLjW+AhgT8PPAYc8B7r7e1lcnISy34wCNj5XQqsr6+TO3vWJKOPqP0eF/gXwG1A3HsoncmQTCZDWey+a1mWuTM7M8PKirzcIkvASwL/HZjylpe0Pzo1ZbI6RBk1va5w6bu4sECxWPRTXvE4LfB5YMSrWzyRIJvN4sQwrMvdri+Xy+RnZ/2U31TNC1wu0Hhskp6eHo5ks8iFnVquh6S0XC7X+9zXBDwjcAV/3AuuhiLLO002t+XLpRKFQqGd5Z8JXNNGBMFyKyDNZbmU6NRyxVsem5ub4+/5eb+YV4D3BK6hrxEqVtIk7hrvJObylrI9Nz3N2povl1gEnhX448DTwEBL0sXjxvqurq529dqik6xWVywtLZHP59t57RzwoMBFjz60OVrLY6mhIQ5lMqZVtmkYe3cELEWr1appMJubSuoWUdc5AzwicJHDV20SsTuqXKIHR0ZHGRvTCGDPEnerdepaeVKr1Ux5rfq3Vj0hYili8ZHAlWg3Ax8AE36q6vGBgQHGxseJx3cboZlstjiKVCoVM9U2NkThfEUO/B44BvzpvKB4vwA8bLNT35tyaX9/v5nnUkIZfaleN318pVw2oAGhuQA8AXwCbLuZzBF7yIsqN5WdXyi8loeYeEoAMdnnAGV7E0F03P86cDRIgU5KT1YCXwGngFnnrpeditVowonqatg4i0GHWE3Hq8A3qmvgDzd/96PGUuAm4Bl7PbrsPyIrubS9iDS+BuS9i0M7Xq4QiD4ft1elUSCsEmIqGuI5tVDgSyfGLbkTYNXlwJXA3cDt9uh1djV5SMoLTLRY7lWNaT8ToPY1Da2tdhhhNxJRLDFbJeLVtle0RGrRUBYv2JaKmSqhtLX6tje3Iv8C8ltv3flgqjoAAAAASUVORK5CYII=";
    },
    1128: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    1134: function (e, t, n) {
      "use strict";
      n(1122);
    },
    1135: function (e, t, n) {
      var o = n(54),
        r = n(117),
        l = n(1136),
        c = n(1137),
        d = n(1138),
        m = o(!1),
        h = r(l),
        v = r(c),
        A = r(d);
      (m.push([
        e.i,
        ".section-nav{position:absolute;z-index:3;top:1.6rem;left:-6.9rem;width:9.91rem;height:7.08rem;padding-top:.3rem;background:url(" +
          h +
          ") no-repeat 0 0/100% 100%;line-height:1;color:#222122;pointer-events:none}.section-nav.has-theme{background:none}.section-nav-bg{position:absolute;width:3.01rem;height:4.62rem;right:0;top:-0.17rem;z-index:1}.section-nav-bg path{transition:fill .2s}.section-nav-inner{position:absolute;right:0;z-index:2;width:3.02rem;padding-left:.2rem;text-align:left;pointer-events:auto}.section-nav-label{font-size:.54rem}[mi18n-lang=ru-ru].pc .section-nav-label,[mi18n-lang=pt-pt].pc .section-nav-label,[mi18n-lang=de-de].pc .section-nav-label,[mi18n-lang=vi-vn].pc .section-nav-label,[mi18n-lang=fr-fr].pc .section-nav-label{font-size:.4rem}.section-nav-en{margin-top:.06rem;padding-left:.04rem;font-size:.24rem;text-transform:uppercase}.section-nav-num{margin-top:.06rem;font-size:1.16rem}.section-nav.lg{top:3rem;left:-3.23rem;width:8.45rem;height:7.86rem;padding-top:.38rem;background-image:url(" +
          v +
          ")}.section-nav.lg .section-nav-inner{width:5.24rem;padding-left:.7rem}.section-nav.lg .section-nav-label{font-size:.65rem}.section-nav.lg .section-nav-en{font-size:.32rem;letter-spacing:.01em;padding-left:.05rem}.section-nav.lg .section-nav-num{font-size:1.86rem}.section-nav.right{top:0;right:0;width:8.43rem;height:7.86rem;left:unset;background-image:url(" +
          A +
          ");padding-top:0}.section-nav.right .section-nav-inner{width:5.24rem;margin-top:4.57rem;margin-right:1.49rem;text-align:right}.section-nav.right .section-nav-label{font-size:.65rem}.section-nav.right .section-nav-en{font-size:.32rem;letter-spacing:.01em;padding-left:.05rem}.section-nav.right .section-nav-num{font-size:1.86rem}",
        "",
      ]),
        (e.exports = m));
    },
    1136: function (e, t, n) {
      e.exports = n.p + "img/inner-title.3d621d1.png";
    },
    1137: function (e, t, n) {
      e.exports = n.p + "img/bg-nav.daea1f6.png";
    },
    1138: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    1148: function (e, t, n) {
      e.exports = n.p + "img/inner-top.224793e.png";
    },
    1150: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var o = n(265);
      var r = n(350),
        l = n(205);
      function c(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Object(o.a)(e);
          })(e) ||
          Object(r.a)(e) ||
          Object(l.a)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
    },
    1153: function (e, t, n) {
      "use strict";
      var o = n(1150),
        r = (n(77), n(556), n(67), n(1120), n(1151)),
        l = n.n(r),
        c = n(1117),
        d = n(28);
      t.a = {
        formatVideo: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return (
            e.forEach(function (e) {
              var t, n, o, r, c, d;
              e.sExt = "string" == typeof e.sExt ? JSON.parse(e.sExt) : e.sExt;
              var m = e.sExt || {};
              ((e.cover =
                (null === (t = m["video-cover"]) || void 0 === t || null === (n = t[0]) || void 0 === n
                  ? void 0
                  : n.url) || ""),
                (e.innerCover =
                  (null === (o = m["video-inner-cover"]) ||
                  void 0 === o ||
                  null === (r = o[0]) ||
                  void 0 === r
                    ? void 0
                    : r.url) || ""),
                (e.videoUrl =
                  (null === (c = m["video-url"]) || void 0 === c || null === (d = c[0]) || void 0 === d
                    ? void 0
                    : d.url) ||
                  m["video-url"] ||
                  ""),
                (e.youtubeUrl = m["video-youtube"] || ""),
                (e.cateName = e.sChanName || ""),
                (e.title = e.sTitle),
                (e.date = l()(e.dtStartTime, "YYYY-MM-DD")),
                (e.dateFormat = l()(e.dtStartTime, "MM/DD/YYYY")),
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
          return new Promise(function (o, r) {
            Object(c.get)("".concat(d.apiBase, "/getContentList"), t, n, c.defaultFormatResult)
              .then(function (data) {
                ((data.list = e.formatVideo(data.list)), o(data));
              })
              .catch(function (e) {
                r(e);
              });
          });
        },
        getAllVideos: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 };
          return (
            (e.data = Object.assign({ iChanId: d.CHANNEL_ID_CONFIG.VIDEO.ALL, iPageSize: 9 }, e.data || {})),
            this.getList(e)
          );
        },
        getHomeVideoList: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 };
          return ((e.data = Object.assign({ iPage: 1, iPageSize: 9 }, e.data || {})), this.getAllVideos(e));
        },
        getSliderVideos: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 };
          return ((e.data = Object.assign({ iPage: 1, iPageSize: 6 }, e.data || {})), this.getAllVideos(e));
        },
        isBlankVideoChan: function (e) {
          var t = d.CHANNEL_ID_CONFIG.VIDEO.BLANK;
          return !(!t || !e || Number(e) !== Number(t));
        },
        parseCatesFromRes: function () {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.arrList,
            r = n && n[0],
            l = (r && r.children) || [],
            c = [r].concat(Object(o.a)(l)).filter(function (t) {
              return t && t.sChanName && !e.isBlankVideoChan(t.iChanId);
            });
          return { allCate: r, children: l, tabCates: c };
        },
        getCateDisplayName: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          if (!e) return "";
          if (this.isBlankVideoChan(e)) return n;
          var o = t.find(function (t) {
            return Number(t.iChanId) === Number(e);
          });
          return (o && o.sChanName) || "";
        },
        getCates: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            t = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                param = Object.assign({ iChanId: d.CHANNEL_ID_CONFIG.VIDEO.ALL, iPageSize: 10 }, e);
              return param;
            },
            n = function (data) {
              var e = (data.children || [])[0] || {};
              return ((data.mainChanName = e.sChanName || ""), (data.arrList = data.children), data);
            };
          return Object(c.get)("/getChildTree", e, t, n);
        },
      };
    },
    1155: function (e, t, n) {
      var content = n(1168);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, n(55).default)("2accd326", content, !0, { sourceMap: !1 });
    },
    1156: function (e, t, n) {
      var content = n(1170);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, n(55).default)("2d6f0ea6", content, !0, { sourceMap: !1 });
    },
    1157: function (e, t, n) {
      "use strict";
      var o = {
          name: "video-dialog",
          props: { src: { type: String, default: "" }, iframeSrc: { type: String, default: "" } },
          data: function () {
            return { isMobile: this.$isMob };
          },
        },
        r = (n(1167), n(36)),
        component = Object(r.a)(
          o,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              { staticClass: "video-container", class: [{ mob: e.isMobile, pc: !e.isMobile }] },
              [
                e.src
                  ? t("video", {
                      staticClass: "video",
                      attrs: {
                        src: e.src,
                        controls: "controls",
                        autoplay: "autoplay",
                        playsinline: "",
                        "webkit-playsinline": "",
                        "x5-playsinline": "",
                        "x-webkit-airplay": "allow",
                        "x5-video-orientation": "portraint",
                        "x5-video-player-type": "h5",
                        "x5-video-player-fullscreen": "true",
                        preload: "auto",
                      },
                    })
                  : t("iframe", {
                      staticClass: "video video-frame",
                      attrs: {
                        src: e.iframeSrc,
                        type: "text/html",
                        width: "1280",
                        height: "720",
                        frameborder: "0",
                        allowfullscreen: "",
                        allowautoplay: "",
                      },
                    }),
              ],
            );
          },
          [],
          !1,
          null,
          "949ad85e",
          null,
        );
      t.a = component.exports;
    },
    1167: function (e, t, n) {
      "use strict";
      n(1155);
    },
    1168: function (e, t, n) {
      var o = n(54)(!1);
      (o.push([
        e.i,
        ".video-container[data-v-949ad85e]{overflow:hidden;display:flex;justify-content:center;align-items:center;width:12.8rem}.video-container .video[data-v-949ad85e]{background:#000;pointer-events:auto;flex:0 0 auto;width:100%;height:auto;object-fit:contain}.video-container .video.show[data-v-949ad85e]{transform:none}.video-container .video-frame[data-v-949ad85e]{height:7.2rem}.video-container.mob[data-v-949ad85e]{width:100%}.video-container.mob .video-frame[data-v-949ad85e]{height:4rem;width:7.4rem}.video-container.pc video[data-v-949ad85e]{aspect-ratio:16/9}",
        "",
      ]),
        (e.exports = o));
    },
    1169: function (e, t, n) {
      "use strict";
      n(1156);
    },
    1170: function (e, t, n) {
      var o = n(54),
        r = n(117),
        l = n(1171),
        c = n(1172),
        d = n(1173),
        m = o(!1),
        h = r(l),
        v = r(c),
        A = r(d);
      (m.push([
        e.i,
        ".mihoyo-pager-rich{text-align:center}.mihoyo-pager-rich__pages{display:flex;align-items:center;height:.52rem;line-height:.52rem;border-radius:.3rem;background-color:#222122}.mihoyo-pager-rich__button,.mihoyo-pager-rich__ellipsis{display:inline-block;min-width:.64rem;padding:0;margin:0 .06rem;vertical-align:middle;text-align:center;font-size:.2rem;color:#fff}.mihoyo-pager-rich__button{cursor:pointer}.mihoyo-pager-rich__prev,.mihoyo-pager-rich__next{margin:0 .06rem;width:.64rem;height:.4rem;background:url(" +
          h +
          ") no-repeat center/100%;transition:all 300ms;cursor:pointer}.mihoyo-pager-rich__prev:hover,.mihoyo-pager-rich__next:hover{transform:scale(1.12)}.mihoyo-pager-rich__prev{margin-right:.24rem}.mihoyo-pager-rich__next{background-image:url(" +
          v +
          ");margin-left:.24rem}.mihoyo-pager-rich__current{width:.64rem;background:#fff;color:#000;background:rgba(0,0,0,0) url(" +
          A +
          ") no-repeat center center/0.64rem .32rem}.mihoyo-pager-rich .mihoyo-pager-rich__button:hover{color:#000;width:.64rem;background:#fff;background:rgba(0,0,0,0) url(" +
          A +
          ") no-repeat center center/0.64rem .32rem}.mihoyo-pager-rich .mihoyo-pager-rich__button:hover:not(.mihoyo-pager-rich__current){transform:scale(1.12)}.mihoyo-pager-rich .mihoyo-pager-rich__text{display:inline-block}.mihoyo-pager-rich .mihoyo-pager-rich__jump{display:inline-block}.mihoyo-pager-rich .mihoyo-pager-rich__jump em{font-style:normal}.mihoyo-pager-rich .mihoyo-pager-rich__input{outline:none;border:0;vertical-align:top}",
        "",
      ]),
        (e.exports = m));
    },
    1171: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    1172: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    1173: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAgCAYAAACl36CRAAAAAXNSR0IArs4c6QAAAnFJREFUaEPdmLuPTVEYxX9LvEXoqKhEQSQiHomRkCCCkHhVSjM6FeNvMKPSeZQqryBeQUKCxCMaoVBS0RFhvGLJJ2dkcjNz73nsc2bunPbuvdb63XvOXefbosbL9grgILAJWArMrdEuj/RP4DHQL+ml8uwousb2IuAUsAuoxaNoppb1X4ENyYPZ3gJcAOZXDFj39jtJ4W1vBm4AM+pOnkD/ezJ428uz52legmBNSAwlgbe9EHgKLG4idSKPa5Xhbc8GHgKrE4VqQuZz5K0Eb3sKcBHY00TiRB6/gO2S7leFHwSOJgrVlEyvpHNhVhredh9wuqnEiXwGJB0f1ioFb3srcBOYmihUEzKXgAOSXBre9jLgCdAtlRasz+IVW9LQyG+50C9ve0Em1E2V9g5YK+lj6+2VG972rKzS1jRxjybyiEpbL+nNaHq54G3Huqi0vYlCNSETlbZD0r2xzPLCDwDHmkic0KNP0tl2eh3hbfcCZxKGakJqUFJ/J6O28Nl4GpU2rZPQBPr8MrB/ZKUVvu27tNKeAxtbK60Q/GSrtNzwk7HScsFnlRZHUPsm0DPcKcrvrNLudlrY9iXH9ok42SwqMs7rD0sq1Ub//+1tHwLa9uI4Q45mf1JS6fePf/DZweOtLqu0K1ml/Sn7o8j2EuBFl01pkTcq7VtZ8NgX8FeB3VVEGt4bU9o6SR+q+gZ8fHsxsXXDFVNaj6TXKcIGfAz4M1OI1azxA9gZB4+pfAL+NrAtlWBNOp+yI6gxx9MyvgG/EngEzCkjUPOeOG+7DhyR9D6113DVrQJiZu8Bpqc2Kaj3BXgLPADOS3pVcH/u5X8B9ni3uc8/x8MAAAAASUVORK5CYII=";
    },
    1174: function (e, t, n) {
      "use strict";
      n(556);
      var o = {
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
              var e = this,
                t = function (t, n) {
                  ((t <= 1 || t > n || t >= e.totalPage) && (t = 2),
                    (n >= e.totalPage || n < t || n <= 1) && (n = e.totalPage - 1));
                  for (var o = [], i = t; i <= n; i++) o.push(i);
                  return o;
                },
                n = this.showItems;
              if (this.totalPage < n + 2) return t(2, this.totalPage);
              if (this.currentPage <= Math.ceil(n / 2)) return t(2, n);
              if (this.currentPage >= this.totalPage - Math.floor(n / 2))
                return t(this.totalPage + 1 - n, this.totalPage - 1);
              var o = Math.ceil(n / 2) - 1,
                r = this.currentPage + o;
              return (n % 2 == 0 && (r += 1), t(this.currentPage - o, r));
            },
          },
          watch: {
            currentPage: function (e) {
              this.jumpPage = e;
            },
            initPage: function (e) {
              this.currentPage !== e && (this.currentPage = e);
            },
          },
          created: function () {
            if (((this.currentPage = this.initPage), "params" === this.mode && !this.routeName))
              throw new Error("need a route name when choose params mode in pager component");
          },
          beforeMount: function () {},
          methods: {
            go: function (e) {
              if ((e < 1 && (e = 1), e > this.totalPage && (e = this.totalPage), e !== this.currentPage))
                if (((this.currentPage = parseInt(e, 10)), "query" === this.mode)) {
                  var t = this.$route.query;
                  ((t.page = this.currentPage), this.$router.go({ query: t }));
                } else if ("params" === this.mode) {
                  var n = this.$route.params;
                  ((n.page = this.currentPage), this.$router.go({ name: this.routeName, params: n }));
                } else this.$emit("go", this.currentPage);
            },
          },
        },
        r = (n(1169), n(36)),
        component = Object(r.a)(
          o,
          function () {
            var e = this,
              t = e._self._c;
            return e.totalPage > 0
              ? t("div", { staticClass: "mihoyo-pager-rich", class: e.pagerClass }, [
                  t(
                    "div",
                    { staticClass: "mihoyo-pager-rich__pages" },
                    [
                      t(
                        "a",
                        {
                          directives: [
                            { name: "show", rawName: "v-show", value: e.showPrev, expression: "showPrev" },
                          ],
                          staticClass: "mihoyo-pager-rich__prev",
                          class: { "mihoyo-pager-rich__prev--simple": e.simpleStyle },
                          on: {
                            click: function (t) {
                              return e.go(e.currentPage - 1);
                            },
                          },
                        },
                        [e._v(e._s(e.prevText))],
                      ),
                      e._v(" "),
                      t(
                        "a",
                        {
                          class: [
                            "mihoyo-pager-rich__button",
                            1 == e.currentPage ? "mihoyo-pager-rich__current" : "",
                          ],
                          on: {
                            click: function (t) {
                              return e.go(1);
                            },
                          },
                        },
                        [e._v("1")],
                      ),
                      e._v(" "),
                      t(
                        "strong",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.pages[0] > 2,
                              expression: "pages[0] > 2",
                            },
                          ],
                          staticClass: "mihoyo-pager-rich__ellipsis",
                        },
                        [e._v("...")],
                      ),
                      e._v(" "),
                      e._l(e.pages, function (n) {
                        return t(
                          "a",
                          {
                            key: n,
                            class: [
                              "mihoyo-pager-rich__button",
                              e.currentPage == n ? "mihoyo-pager-rich__current" : "",
                            ],
                            on: {
                              click: function (t) {
                                return e.go(n);
                              },
                            },
                          },
                          [e._v(e._s(n))],
                        );
                      }),
                      e._v(" "),
                      t(
                        "strong",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.pages[e.pages.length - 1] < e.totalPage - 1,
                              expression: "pages[pages.length-1] < totalPage - 1",
                            },
                          ],
                          staticClass: "mihoyo-pager-rich__ellipsis",
                        },
                        [e._v("...")],
                      ),
                      e._v(" "),
                      e.totalPage > 1
                        ? t(
                            "a",
                            {
                              class: [
                                "mihoyo-pager-rich__button",
                                e.currentPage == e.totalPage ? "mihoyo-pager-rich__current" : "",
                              ],
                              on: {
                                click: function (t) {
                                  return e.go(e.totalPage);
                                },
                              },
                            },
                            [e._v(e._s(e.totalPage))],
                          )
                        : e._e(),
                      e._v(" "),
                      t(
                        "a",
                        {
                          directives: [
                            { name: "show", rawName: "v-show", value: e.showNext, expression: "showNext" },
                          ],
                          staticClass: "mihoyo-pager-rich__next",
                          class: { "mihoyo-pager-rich__next--simple": e.simpleStyle },
                          on: {
                            click: function (t) {
                              return e.go(e.currentPage + 1);
                            },
                          },
                        },
                        [e._v(e._s(e.nextText))],
                      ),
                    ],
                    2,
                  ),
                  e._v(" "),
                  !e.simpleStyle && e.showJump && e.totalPage > 1
                    ? t("div", { staticClass: "mihoyo-pager-rich__jump" }, [
                        t("div", { staticClass: "mihoyo-pager-rich__text" }, [
                          e._v("\n      " + e._s(e.totalText[0]) + "\n      "),
                          t("em", { staticClass: "mihoyo-pager-rich__total" }, [e._v(e._s(e.totalPage))]),
                          e._v(" "),
                          t("span", [e._v(e._s(e.totalText[1]) + ", " + e._s(e.jumpText[0]))]),
                        ]),
                        e._v(" "),
                        t("input", {
                          directives: [
                            { name: "model", rawName: "v-model", value: e.jumpPage, expression: "jumpPage" },
                          ],
                          staticClass: "mihoyo-pager-rich__input",
                          attrs: { max: e.totalPage, type: "number", min: "1" },
                          domProps: { value: e.jumpPage },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.jumpPage = t.target.value);
                            },
                          },
                        }),
                        e._v(" "),
                        "" !== e.jumpText[1] ? t("span", [e._v(e._s(e.jumpText[1]))]) : e._e(),
                        e._v(" "),
                        t(
                          "a",
                          {
                            staticClass: "mihoyo-pager-rich__button mihoyo-pager-rich__go",
                            on: {
                              click: function (t) {
                                return e.go(e.jumpPage);
                              },
                            },
                          },
                          [e._v(e._s(e.jumpText[2]))],
                        ),
                      ])
                    : e._e(),
                ])
              : e._e();
          },
          [],
          !1,
          null,
          null,
          null,
        );
      t.a = component.exports;
    },
    1228: function (e, t, n) {
      var content = n(1400);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, n(55).default)("7fe00ffd", content, !0, { sourceMap: !1 });
    },
    1229: function (e, t, n) {
      var content = n(1403);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, n(55).default)("2e0a0b57", content, !0, { sourceMap: !1 });
    },
    1399: function (e, t, n) {
      "use strict";
      n(1228);
    },
    1400: function (e, t, n) {
      var o = n(54),
        r = n(117),
        l = n(1401),
        c = o(!1),
        d = r(l);
      (c.push([
        e.i,
        ".video-tag{min-width:.44rem;padding:.02rem .1rem;background:url(" +
          d +
          ") center center/100% 100%}.video-tag__text{color:#d8fa00;font-size:.12rem;text-align:center;white-space:nowrap}",
        "",
      ]),
        (e.exports = c));
    },
    1401: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAeCAMAAADQFyqnAAAAP1BMVEUXFxcAAAAXFxcSEhIWFhYWFhYXFxcZGRkWFhYWFhYXFxcXFxcVFRUXFxcXFxcXFxcXFxcXFxcYGBgTExMXFxcWGeK9AAAAFHRSTlPzADUGR5uFEN3tyHQMsvnPeWEVG31lfqIAAAC4SURBVEjHxdeJEYMwDARAnfybJ5Co/1pDIB6o4LQN3Mjj5ywYiualNiGoSQNG8HvvRrTNV3CI3bjiGTxPxtYFQMjGJ0CYzIEA0TwI5moOqmAyD1lCMw8q0TykIsk8KORlDlKBiDlQgJt7DwyvgclLfQ/ssblWxcHhOOWAA/8CaYof/pW54UR/JF6KE/1Z3HFhF4Hlgwu5+kjEH7nsZQzcepsKBmahX/OdS/zCrD3igfNpa3XZNODpCzN9+CaR976uAAAAAElFTkSuQmCC";
    },
    1402: function (e, t, n) {
      "use strict";
      n(1229);
    },
    1403: function (e, t, n) {
      var o = n(54),
        r = n(117),
        l = n(1148),
        c = n(1127),
        d = n(1128),
        m = n(1404),
        h = o(!1),
        v = r(l),
        A = r(c),
        f = r(d),
        S = r(m);
      (h.push([
        e.i,
        ".video{position:relative;margin-top:1rem;min-height:100%;background:url(" +
          v +
          ') no-repeat 0 -1rem/10.3rem auto;font-size:0;overflow:hidden}.video-container{position:relative;margin-bottom:1.6rem}.video .section__foot{right:-6.4rem;z-index:-1}.video-slider{width:100%;padding-top:1.6rem;margin-left:6.4rem}.video-slider__title{position:absolute;top:1.6rem;right:.48rem;font-size:1.56rem;color:#dfdfdf;line-height:.84;font-family:"Impact",sans-serif;font-style:italic;text-transform:uppercase;text-align:right}.video-slider__latest{margin-top:2.56rem}.video-slider__latest.ul{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.video-slider__latest img{width:100%;height:100%;object-fit:cover;object-position:center center}.video-slider__latest-item{width:6.86rem;height:3.68rem;margin-right:.76rem;overflow:hidden}.video-slider__latest-img{position:relative;display:block;width:100%;height:100%;border-bottom-left-radius:.55rem;border-top-right-radius:.55rem;overflow:hidden;cursor:pointer}.video-slider__pagination{position:relative;width:12.8rem;height:.22rem;margin-top:.4rem;margin-left:.5rem}.video-slider__pagination .swiper-pagination{top:0;width:100%;line-height:.2rem;text-align:left}.video-slider__pagination .swiper-pagination .swiper-pagination-bullet{display:inline-block;width:.2rem;height:.2rem;margin-left:0;margin-right:.22rem;background-color:rgba(0,0,0,0);background:url(' +
          A +
          ") no-repeat center center/100% 100%;opacity:1;vertical-align:bottom}.video-slider__pagination .swiper-pagination .swiper-pagination-bullet-active{background-image:url(" +
          f +
          ")}.video-wrap{position:relative;width:12.9rem;margin-top:1.45rem;margin-left:6.4rem}.video-tab{width:fit-content;position:relative;display:flex;flex-direction:row;align-items:center;height:.64rem;padding:.12rem .3rem;background-color:#222122;border-radius:.32rem}.video-tab__item{position:relative;z-index:2;width:2.5rem;height:.41rem;font-size:.19rem;text-align:center;color:#fff;white-space:nowrap;cursor:pointer;flex-shrink:0;transition:all 300ms}[mi18n-lang=en-us] .video-tab__item,[mi18n-lang=zh-tw] .video-tab__item,[mi18n-lang=ja-jp] .video-tab__item,[mi18n-lang=ko-kr] .video-tab__item{font-weight:bold}[mi18n-lang=fr-fr] .video-tab__item,[mi18n-lang=pt-pt] .video-tab__item,[mi18n-lang=vi-vn] .video-tab__item,[mi18n-lang=ru-ru] .video-tab__item,[mi18n-lang=de-de] .video-tab__item,[mi18n-lang=es-es] .video-tab__item{font-size:.14rem}.video-tab__item:hover:not(.video-tab__item--active){transform:scale(1.12)}.video-tab__item:hover,.video-tab__item--active{color:#333}.video-tab__item:hover .video-tab__label-active,.video-tab__item--active .video-tab__label-active{opacity:1}.video-tab__label{height:100%;line-height:.41rem}.video-tab__label-active{position:absolute;top:50%;left:50%;z-index:-1;width:2.5rem;height:.41rem;background:url(" +
          S +
          ") no-repeat 0 0/100% 100%;transform:translate(-50%, -50%);opacity:0;transition:all 300ms}.video-list{margin:1.1rem auto .2rem;display:flex;flex-direction:row;flex-wrap:wrap}.video-list__item{width:3.96rem;margin-right:.46rem;margin-bottom:.8rem;cursor:pointer;transition:transform 500ms}.video-list__item:nth-child(3n+3){margin-right:0}.video-list__item-banner{display:flex;justify-content:center;overflow:hidden;width:100%;height:2.2rem;flex-shrink:0;border-top-right-radius:.35rem;border-bottom-left-radius:.35rem;cursor:pointer;transform:scale(1)}.video-list__item-banner:hover img{transform:scale(1.15)}.video-list__item-banner img{width:100%;height:100%;object-fit:cover;object-position:center center;transition:transform 300ms}.video-list__item-content{margin-top:.34rem}.video-list__item-date{font-size:.22rem;color:#000;display:flex;flex-direction:row;align-items:center}.video-list__item-date>div{margin-right:.2rem}.video-list__item-title{margin-top:.14rem;width:100%;font-size:.22rem;height:.84rem;line-height:.28rem;color:#222122;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;cursor:pointer}.video-list__item:hover::before{transform:scaleX(1)}.video-pager{display:flex;justify-content:center;position:relative;margin-top:0;font-size:0;color:#fff}.video-pager .mihoyo-pager-rich{display:flex;justify-content:center;align-items:center}",
        "",
      ]),
        (e.exports = h));
    },
    1404: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAABSCAMAAACVOtb/AAAC3FBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+GTFYVAAAA83RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8xMjM0NTc4OTo7PD4/QEFCQ0RFRkdISUpMTU5PUFFSU1RVVldYWVpbXF1eX2BhYmNmZ2hpamtsbW5vcHFyc3V2d3h5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";
    },
    1420: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(77), n(206), n(207));
      var o = n(71),
        r = (n(556), n(136), n(137), n(155), n(204), n(1120), n(119), n(118), n(28)),
        l = n(1126),
        c = n(1174),
        d = n(32),
        m = (n(98), n(1153)),
        h = {
          name: "video-tag",
          props: { channel: { type: [Number, String], default: "" } },
          computed: {
            videoCates: function () {
              return this.$store.getters.videoCates || [];
            },
            displayName: function () {
              return m.a.getCateDisplayName(
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
              var e = this;
              return Object(d.a)(
                regeneratorRuntime.mark(function t() {
                  var n, o, r;
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return ((t.next = 2), m.a.getCates());
                        case 2:
                          ((n = t.sent),
                            (o = m.a.parseCatesFromRes(n)),
                            (r = o.children),
                            e.$store.commit("setVideoCates", r),
                            e.$store.commit("setVideoMainChanName", n.mainChanName || ""));
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              )();
            },
          },
        },
        v = (n(1399), n(36)),
        A = Object(v.a)(
          h,
          function () {
            var e = this,
              t = e._self._c;
            return e.displayName
              ? t("div", { staticClass: "video-tag" }, [
                  t("div", { staticClass: "video-tag__text" }, [
                    e._v("\n      " + e._s(e.displayName) + "\n    "),
                  ]),
                ])
              : e._e();
          },
          [],
          !1,
          null,
          null,
          null,
        ).exports,
        f = n(347),
        S = n(1157),
        y = r.CHANNEL_ID_CONFIG.VIDEO.ALL,
        L = {
          name: "lang-video",
          layout: "default",
          components: { pageTab: l.a, mihoyoPagerRich: c.a, videoTag: A, backTop: f.a },
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
                  renderBullet: function (e, t) {
                    return '<span class="'.concat(t, " swiper-pagination-index-").concat(e + 1, '"></span>');
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
              return this.$route.query.category || y;
            },
          },
          watch: {
            "$route.query.category": function () {
              this.renderPage(1, "cate");
            },
          },
          asyncData: function (e) {
            var t = e.query,
              n = e.store,
              r = t.category,
              l = Number(r || y);
            return Promise.all([
              m.a.getSliderVideos({ data: { sLangKey: n.state.lang } }),
              m.a.getCates({ data: { sLangKey: n.state.lang } }),
              m.a.getAllVideos({ data: { iPageSize: 9, iPage: 1, iChanId: l, sLangKey: n.state.lang } }),
            ]).then(function (e) {
              var t = Object(o.a)(e, 3),
                r = t[0],
                l = t[1],
                c = t[2],
                d = m.a.parseCatesFromRes(l),
                h = d.children,
                v = d.tabCates;
              return (
                n.commit("setVideoCates", h),
                n.commit("setVideoMainChanName", l.mainChanName || ""),
                {
                  latestVideoList: r.list.slice(0, 6),
                  cates: v,
                  videoList: c.list,
                  total: Math.ceil(c.iTotal / 9),
                }
              );
            });
          },
          methods: {
            handlePaginationClick: function (e) {
              var t = e.target || e.srcElement;
              if (t.className.indexOf("swiper-pagination-index") > -1) {
                var n = t.className
                  .split(" ")
                  .find(function (e) {
                    return e.includes("swiper-pagination-index-");
                  })
                  .split("-")
                  .pop();
                this.$trackButton("video_point", "".concat(n));
              }
            },
            renderPage: function (e, t) {
              var n = this;
              m.a
                .getAllVideos({
                  cache: !0,
                  data: { iChanId: this.cateId, iPageSize: 9, iPage: e, sLangKey: this.$store.state.lang },
                })
                .then(function (data) {
                  if (
                    ((n.videoList = data.list),
                    (n.total = Math.ceil(data.iTotal / 9)),
                    (n.initPage = e),
                    "cate" !== t)
                  ) {
                    var o = document.querySelector(".video-wrap").offsetTop;
                    $("html,body").animate({ scrollTop: o }, 0);
                  }
                });
            },
            handleTabClick: function (e, t) {
              this.$trackButton("navigation_videos", t);
            },
            openPlayer: function (video) {
              var e = this.getVideoDialogInfo(video);
              e &&
                (this.$openDialog(S.a, {
                  transitionType: "scale",
                  zIndex: 100,
                  maskClose: !0,
                  bgOpacity: 0.8,
                  dialogInfo: e,
                }),
                this.$trackButton("video_pics", video.id));
            },
            getVideoDialogInfo: function (video) {
              return video
                ? video.youtubeUrl
                  ? { iframeSrc: video.youtubeUrl }
                  : video.videoUrl
                    ? { src: video.videoUrl }
                    : null
                : null;
            },
          },
        },
        C =
          (n(1402),
          Object(v.a)(
            L,
            function () {
              var e = this,
                t = e._self._c;
              return t("div", { staticClass: "video" }, [
                t(
                  "div",
                  { staticClass: "video-container" },
                  [
                    t("pageTab", { attrs: { "nav-num": 3 } }),
                    e._v(" "),
                    t(
                      "div",
                      { staticClass: "video-slider" },
                      [
                        t("div", { staticClass: "video-slider__title font-num" }, [
                          e._v(e._s(e.$getI18nWord("navVideoLabel"))),
                        ]),
                        e._v(" "),
                        t(
                          "client-only",
                          [
                            e.latestVideoList.length < 3
                              ? t(
                                  "ul",
                                  { staticClass: "video-slider__latest ul" },
                                  e._l(e.latestVideoList, function (n) {
                                    return t("li", { key: n.id, staticClass: "video-slider__latest-item" }, [
                                      t(
                                        "div",
                                        {
                                          staticClass: "video-slider__latest-img",
                                          on: {
                                            click: function (t) {
                                              return e.openPlayer(n);
                                            },
                                          },
                                        },
                                        [t("img", { attrs: { src: n.innerCover, alt: "" } })],
                                      ),
                                    ]);
                                  }),
                                  0,
                                )
                              : t(
                                  "swiper",
                                  {
                                    ref: "mySwiper",
                                    staticClass: "video-slider__latest",
                                    attrs: { options: e.swiperOption },
                                  },
                                  e._l(e.latestVideoList, function (n) {
                                    return t(
                                      "swiper-slide",
                                      { key: n.id, staticClass: "video-slider__latest-item" },
                                      [
                                        t(
                                          "div",
                                          {
                                            staticClass: "video-slider__latest-img",
                                            on: {
                                              click: function (t) {
                                                return e.openPlayer(n);
                                              },
                                            },
                                          },
                                          [t("img", { attrs: { src: n.innerCover, alt: "" } })],
                                        ),
                                      ],
                                    );
                                  }),
                                  1,
                                ),
                          ],
                          1,
                        ),
                        e._v(" "),
                        t(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: e.latestVideoList.length > 1,
                                expression: "latestVideoList.length > 1",
                              },
                            ],
                            staticClass: "video-slider__pagination",
                            on: {
                              click: function (t) {
                                return e.handlePaginationClick(t);
                              },
                            },
                          },
                          [
                            t("div", {
                              staticClass: "swiper-pagination",
                              attrs: { slot: "pagination" },
                              slot: "pagination",
                            }),
                          ],
                        ),
                      ],
                      1,
                    ),
                    e._v(" "),
                    t(
                      "div",
                      { ref: "videoWrapper", staticClass: "video-wrap" },
                      [
                        t(
                          "div",
                          { staticClass: "video-tab" },
                          e._l(e.cates, function (n, i) {
                            return t(
                              "nuxt-link",
                              {
                                key: n.iChanId,
                                staticClass: "video-tab__item",
                                class: {
                                  "video-tab__item--active": n.iChanId.toString() === e.cateId.toString(),
                                },
                                attrs: {
                                  to: {
                                    path:
                                      0 !== i
                                        ? "/"
                                            .concat(e.lang, "/video?category=")
                                            .concat(n.iChanId)
                                            .concat(
                                              e.$route.query.shareType
                                                ? "&shareType=" + e.$route.query.shareType
                                                : "",
                                            )
                                        : "/"
                                            .concat(e.lang, "/video")
                                            .concat(
                                              e.$route.query.shareType
                                                ? "?shareType=" + e.$route.query.shareType
                                                : "",
                                            ),
                                  },
                                },
                                nativeOn: {
                                  click: function (t) {
                                    return e.handleTabClick(n, i);
                                  },
                                },
                              },
                              [
                                t("div", { staticClass: "video-tab__label" }, [
                                  e._v("\n            " + e._s(n.sChanName) + "\n          "),
                                ]),
                                e._v(" "),
                                t("div", { staticClass: "video-tab__label-active" }),
                              ],
                            );
                          }),
                          1,
                        ),
                        e._v(" "),
                        t(
                          "div",
                          { staticClass: "video-list" },
                          e._l(e.videoList, function (n) {
                            return t(
                              "div",
                              {
                                key: n.iInfoId,
                                staticClass: "video-list__item",
                                on: {
                                  click: function (t) {
                                    return e.openPlayer(n);
                                  },
                                },
                              },
                              [
                                t("div", { staticClass: "video-list__item-banner" }, [
                                  t("img", { attrs: { src: n.innerCover, alt: "cover" } }),
                                ]),
                                e._v(" "),
                                t("div", { staticClass: "video-list__item-content" }, [
                                  t(
                                    "div",
                                    { staticClass: "video-list__item-date" },
                                    [
                                      t("div", { staticClass: "font-num" }, [e._v(e._s(n.date))]),
                                      e._v(" "),
                                      t("video-tag", { attrs: { channel: n.sChanId && n.sChanId[0] } }),
                                    ],
                                    1,
                                  ),
                                  e._v(" "),
                                  t("div", { staticClass: "video-list__item-title" }, [
                                    e._v("\n              " + e._s(n.title) + "\n            "),
                                  ]),
                                ]),
                              ],
                            );
                          }),
                          0,
                        ),
                        e._v(" "),
                        e.total > 1 && e.cateId
                          ? t("mihoyo-pager-rich", {
                              staticClass: "video-pager",
                              attrs: {
                                "init-page": e.initPage,
                                "total-page": e.total,
                                "show-jump": !1,
                                "show-prev": !0,
                                "show-next": !0,
                                "next-text": "<",
                                "prev-text": ">",
                              },
                              on: { go: e.renderPage },
                            })
                          : e._e(),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
                e._v(" "),
                t("div", { staticClass: "section__foot" }),
              ]);
            },
            [],
            !1,
            null,
            null,
            null,
          ));
      t.default = C.exports;
    },
  },
]);
