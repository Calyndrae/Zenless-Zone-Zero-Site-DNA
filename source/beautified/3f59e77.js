(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
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
      var r = n(49),
        c = {
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
        o = (n(1134), n(36)),
        component = Object(o.a)(
          c,
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
    1134: function (e, t, n) {
      "use strict";
      n(1122);
    },
    1135: function (e, t, n) {
      var r = n(54),
        c = n(117),
        o = n(1136),
        l = n(1137),
        h = n(1138),
        d = r(!1),
        m = c(o),
        v = c(l),
        f = c(h);
      (d.push([
        e.i,
        ".section-nav{position:absolute;z-index:3;top:1.6rem;left:-6.9rem;width:9.91rem;height:7.08rem;padding-top:.3rem;background:url(" +
          m +
          ") no-repeat 0 0/100% 100%;line-height:1;color:#222122;pointer-events:none}.section-nav.has-theme{background:none}.section-nav-bg{position:absolute;width:3.01rem;height:4.62rem;right:0;top:-0.17rem;z-index:1}.section-nav-bg path{transition:fill .2s}.section-nav-inner{position:absolute;right:0;z-index:2;width:3.02rem;padding-left:.2rem;text-align:left;pointer-events:auto}.section-nav-label{font-size:.54rem}[mi18n-lang=ru-ru].pc .section-nav-label,[mi18n-lang=pt-pt].pc .section-nav-label,[mi18n-lang=de-de].pc .section-nav-label,[mi18n-lang=vi-vn].pc .section-nav-label,[mi18n-lang=fr-fr].pc .section-nav-label{font-size:.4rem}.section-nav-en{margin-top:.06rem;padding-left:.04rem;font-size:.24rem;text-transform:uppercase}.section-nav-num{margin-top:.06rem;font-size:1.16rem}.section-nav.lg{top:3rem;left:-3.23rem;width:8.45rem;height:7.86rem;padding-top:.38rem;background-image:url(" +
          v +
          ")}.section-nav.lg .section-nav-inner{width:5.24rem;padding-left:.7rem}.section-nav.lg .section-nav-label{font-size:.65rem}.section-nav.lg .section-nav-en{font-size:.32rem;letter-spacing:.01em;padding-left:.05rem}.section-nav.lg .section-nav-num{font-size:1.86rem}.section-nav.right{top:0;right:0;width:8.43rem;height:7.86rem;left:unset;background-image:url(" +
          f +
          ");padding-top:0}.section-nav.right .section-nav-inner{width:5.24rem;margin-top:4.57rem;margin-right:1.49rem;text-align:right}.section-nav.right .section-nav-label{font-size:.65rem}.section-nav.right .section-nav-en{font-size:.32rem;letter-spacing:.01em;padding-left:.05rem}.section-nav.right .section-nav-num{font-size:1.86rem}",
        "",
      ]),
        (e.exports = d));
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
    1154: function (e, t, n) {
      "use strict";
      (n(65), n(77), n(204));
      var r = n(1117),
        c = n(28);
      t.a = {
        formatCharacter: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return (
            e.forEach(function (e) {
              var t, n, r, c, o, l, h, d, m, v, f, S, C, w, E, x;
              ((e.sExt = "string" == typeof e.sExt ? JSON.parse(e.sExt) : e.sExt),
                (e.id = e.iInfoId),
                (e.intro = e.sContent),
                (e.themeColor = e.sExt["chara-color"]),
                (e.name = e.sExt["chara-name"]),
                (e.nameHome = e.sExt["chara-name-home"]),
                (e.nameHomeM = e.sExt["chara-name-home-m"]),
                (e.nameEN = e.sExt["chara-name-en"]),
                (e.nav = e.sExt["chara-nav"][0].url),
                (e.cover = null === (t = e.sExt["chara-cover-home"][0]) || void 0 === t ? void 0 : t.url),
                (e.coverM = null === (n = e.sExt["chara-cover-m"][0]) || void 0 === n ? void 0 : n.url),
                (e.word = e.sExt["chara-line"]),
                (e.newCoverInner =
                  null === (r = e.sExt["new-chara-cover-inner"]) ||
                  void 0 === r ||
                  null === (c = r[0]) ||
                  void 0 === c
                    ? void 0
                    : c.url),
                (e.newCoverInnerM =
                  null === (o = e.sExt["new-chara-cover-inner-m"]) ||
                  void 0 === o ||
                  null === (l = o[0]) ||
                  void 0 === l
                    ? void 0
                    : l.url),
                (e.newNav =
                  null === (h = e.sExt["new-chara-nav"]) ||
                  void 0 === h ||
                  null === (d = h[0]) ||
                  void 0 === d
                    ? void 0
                    : d.url),
                (e.levelIcon =
                  null === (m = e.sExt["level-icon"]) || void 0 === m || null === (v = m[0]) || void 0 === v
                    ? void 0
                    : v.url),
                (e.propIcon1 =
                  null === (f = e.sExt["prop-icon-1"]) || void 0 === f || null === (S = f[0]) || void 0 === S
                    ? void 0
                    : S.url),
                (e.propIcon2 =
                  null === (C = e.sExt["prop-icon-2"]) || void 0 === C || null === (w = C[0]) || void 0 === w
                    ? void 0
                    : w.url),
                (e.paginationItemBg =
                  null === (E = e.sExt["pagination-item-bg"]) ||
                  void 0 === E ||
                  null === (x = E[0]) ||
                  void 0 === x
                    ? void 0
                    : x.url),
                (e.enNameScale = 0),
                (e.cv = []));
              for (var main = 1; main <= 2; main++)
                if (e.sExt["chara-cv".concat(main, "-lang")]) {
                  for (
                    var data = {
                        name: e.sExt["chara-cv".concat(main, "-name")],
                        lang: e.sExt["chara-cv".concat(main, "-lang")],
                        audio: [],
                      },
                      sub = 1;
                    sub <= 2;
                    sub++
                  ) {
                    var A,
                      audio =
                        null === (A = e.sExt["chara-cv".concat(main, "-audio").concat(sub)][0]) ||
                        void 0 === A
                          ? void 0
                          : A.url;
                    audio && data.audio.push(audio);
                  }
                  e.cv.push(data);
                }
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
          return new Promise(function (o, l) {
            Object(r.get)("".concat(c.apiBase, "/getContentList"), t, n, r.defaultFormatResult)
              .then(function (data) {
                ((data.list = e.formatCharacter(data.list)), o(data));
              })
              .catch(function (e) {
                l(e);
              });
          });
        },
        getAllCharacter: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 };
          return (
            (e.data = Object.assign(
              { iChanId: c.CHANNEL_ID_CONFIG.CHARACTER.CHARACTER, iPageSize: 200 },
              e.data || {},
            )),
            this.getList(e)
          );
        },
        getDetail: function () {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 };
          return (
            (t.data = Object.assign({ iChanId: c.CHANNEL_ID_CONFIG.CHARACTER, iAround: 1 }, t.data || {})),
            new Promise(function (n, o) {
              Object(r.get)(
                "".concat(c.apiBase, "/getContent"),
                t,
                r.defaultFormatParams,
                r.defaultFormatResult,
              )
                .then(function (data) {
                  var t = e.formatCharacter([data])[0];
                  n(t);
                })
                .catch(function (e) {
                  o(e);
                });
            })
          );
        },
        getCampList: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 },
            t = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = Object.assign(
                  { iChanId: c.CHANNEL_ID_CONFIG.CHARACTER.CAMP, iPageSize: 50, iPage: 1 },
                  e,
                );
              return t;
            };
          return new Promise(function (n, o) {
            Object(r.get)("".concat(c.apiBase, "/getContentList"), e, t, r.defaultFormatResult)
              .then(function (data) {
                (data.list.forEach(function (e) {
                  var t, n, r, c;
                  ((e.sExt = "string" == typeof e.sExt ? JSON.parse(e.sExt) : e.sExt),
                    (e.kv = null === (t = e.sExt["camp-kv"][0]) || void 0 === t ? void 0 : t.url),
                    (e.kvM = null === (n = e.sExt["camp-kv-m"][0]) || void 0 === n ? void 0 : n.url),
                    (e.icon = e.sExt["camp-icon"][0].url),
                    (e.shade = e.sExt["camp-shade"][0].url),
                    (e.shadeM =
                      e.sExt["camp-shade-m"] && e.sExt["camp-shade-m"][0]
                        ? e.sExt["camp-shade-m"][0].url
                        : ""),
                    (e.nameENImg =
                      e.sExt["camp-name-img"] && e.sExt["camp-name-img"][0]
                        ? e.sExt["camp-name-img"][0].url
                        : ""),
                    (e.nameENImgM =
                      e.sExt["camp-name-img-m"] && e.sExt["camp-name-img-m"][0]
                        ? e.sExt["camp-name-img-m"][0].url
                        : ""),
                    (e.name = e.sExt["camp-name"]),
                    (e.nameEN = e.sExt["camp-name-en"]),
                    (e.desc = e.sContent),
                    (e.isEmpty = !1),
                    (e.newIcon = null === (r = e.sExt["new-camp-icon"]) || void 0 === r ? void 0 : r[0].url),
                    (e.channelId = parseInt(e.sExt["camp-channel"], 10)),
                    (e.gradientColorMob =
                      (null === (c = e.sExt["gradient-color-mob"]) || void 0 === c ? void 0 : c.split("-")) ||
                      []));
                }),
                  n(data.list));
              })
              .catch(function (e) {
                o(e);
              });
          });
        },
        getCampCharacter: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 };
          return ((e.data = Object.assign({ pageSize: 20 }, e.data || {})), this.getList(e));
        },
      };
    },
    1179: function (e, t, n) {
      e.exports = n.p + "img/camp-icon-unknown.d7d4775.png";
    },
    1180: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    1181: function (e, t, n) {
      e.exports = n.p + "img/chara-pagination-bg.1452db0.png";
    },
    1214: function (e, t, n) {
      var content = n(1330);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, n(55).default)("ca59a95e", content, !0, { sourceMap: !1 });
    },
    1327: function (e, t, n) {
      var r = n(47);
      (r(r.P, "Array", { fill: n(1328) }), n(345)("fill"));
    },
    1328: function (e, t, n) {
      "use strict";
      var r = n(139),
        c = n(352),
        o = n(99);
      e.exports = function (e) {
        for (
          var t = r(this),
            n = o(t.length),
            l = arguments.length,
            h = c(l > 1 ? arguments[1] : void 0, n),
            d = l > 2 ? arguments[2] : void 0,
            m = void 0 === d ? n : c(d, n);
          m > h;
        )
          t[h++] = e;
        return t;
      };
    },
    1329: function (e, t, n) {
      "use strict";
      n(1214);
    },
    1330: function (e, t, n) {
      var r = n(54),
        c = n(117),
        o = n(1148),
        l = n(1180),
        h = n(1331),
        d = n(1332),
        m = n(1333),
        v = n(1181),
        f = n(1334),
        S = n(1335),
        C = n(1336),
        w = n(1337),
        E = r(!1),
        x = c(o),
        A = c(l),
        I = c(h),
        L = c(d),
        k = c(m),
        y = c(v),
        J = c(f),
        W = c(S),
        Q = c(C),
        R = c(w);
      (E.push([
        e.i,
        '.character{position:relative;overflow:hidden;margin-top:1rem;background-image:linear-gradient(to bottom, #E8E8E8, #E8E8E8 9.69rem, #EFEFEF 9.69rem, #EFEFEF 100%)}.character .section-nav{z-index:1}.character::before{content:"";position:absolute;top:-1rem;left:0;width:10.3rem;height:12rem;background-image:url(' +
          x +
          ");background-size:10.3rem auto;background-repeat:no-repeat}.character .backTop{position:absolute;left:auto;right:.34rem;z-index:2}.character-cover{width:16rem;height:12.97rem;background-size:auto 13.69rem;background-position:left -0.72rem;background-repeat:no-repeat;position:relative;pointer-events:none;transition:transform .3s ease-in-out;transform:translateX(-2rem)}.character .swiper-slide-active .character-cover{transform:translateX(0)}.character-info{position:absolute;left:12rem;top:2.14rem;width:10rem}.character-info-main{height:2.7rem;margin-bottom:.2rem}.character-info-row{position:relative;display:flex}.character-info-row .character-voice-player{min-width:3.92rem;height:.57rem;border:.06rem solid #000;border-radius:.3rem;display:flex;align-items:center;padding-left:.6rem;padding-right:.1rem;justify-content:space-between}.character-info-row .character-voice-player .character-voice-btn{width:.57rem;height:.57rem;position:absolute;border-radius:.3rem;background-color:#000;left:0;top:0;display:flex;align-items:center;justify-content:center;cursor:pointer}.character-info-row .character-voice-player .character-voice-btn-inner{width:.24rem;height:.33rem;background-image:url(" +
          A +
          ");background-size:100% 100%}.character-info-row .character-voice-player .character-voice-btn-inner-highlight{width:100%;height:100%;mask-image:url(" +
          A +
          ");-webkit-mask-image:url(" +
          A +
          ');mask-size:100% 100%;-webkit-mask-size:100% 100%;background-image:linear-gradient(to bottom, rgba(191, 219, 90, 0) 0%, rgba(191, 219, 90, 0) var(--progress), rgb(191, 219, 90) calc(var(--progress) + 10%), rgb(191, 219, 90) 100%)}.character-info-row .character-voice-player-name{display:flex;align-items:center;font-size:.2rem;line-height:.3rem;margin-right:.1rem}.character-info-row .character-voice-player-name-text{font-family:var(--mi18n-font-css);font-weight:bolder;margin-left:.1rem}.character-info-row .character-voice-player .character-voice-lang-switcher{width:.76rem;height:.3rem;background-color:#000;border-radius:.15rem;color:#e8e8e8;font-size:.16rem;position:relative;cursor:pointer;flex-shrink:0}.character-info-row .character-voice-player .character-voice-lang-switcher span{position:absolute;line-height:.24rem;top:.03rem}.character-info-row .character-voice-player .character-voice-lang-switcher__1 span{right:.1rem}.character-info-row .character-voice-player .character-voice-lang-switcher__1::after{left:.09rem}.character-info-row .character-voice-player .character-voice-lang-switcher__0 span{left:.1rem}.character-info-row .character-voice-player .character-voice-lang-switcher__0::after{left:.45rem}.character-info-row .character-voice-player .character-voice-lang-switcher::after{content:"";width:.2rem;height:.2rem;background-color:#e8e8e8;position:absolute;top:.045rem;border-radius:50%;transition:left .2s ease-in-out}.character-info-row .character-info-prop{width:fit-content;display:flex;align-items:center;height:.57rem;padding:0 .13rem;background-color:#000;border-radius:.3rem;margin-left:.16rem}.character-info-row .character-info-prop img{display:block;width:.46rem;height:.46rem}.character-info-row .character-info-prop img:not(:last-child){margin-right:.02rem}.character-info-name{font-size:.8rem;line-height:1.2;margin-bottom:.1rem;display:flex;align-items:flex-start;position:relative}.character-info-name i{display:block;width:.79rem;height:.82rem;margin-top:.07rem;margin-right:.15rem;flex-shrink:0;background-size:100% 100%;position:relative;z-index:1}.character-info-name span{position:relative;z-index:1}.character-info-name span.character-info-name-en{position:absolute;display:block;width:max-content;max-width:10rem;font-size:1.3rem;line-height:1.3;left:0;bottom:-1rem;z-index:0;background-image:linear-gradient(80deg, #e8e8e8, #dedede);background-clip:text;-webkit-text-fill-color:rgba(0,0,0,0);white-space:nowrap;transform-origin:left center}.character-info-word{height:.95rem;font-size:.28rem;line-height:.3rem}.character-info-desc-container{width:10rem;height:3rem;font-size:.22rem;color:#a6a6a6;position:relative}.character-info-desc{width:9.7rem;line-height:.4rem;padding-bottom:.4rem;font-family:var(--mi18n-font-css)}.character-info-desc p{margin:0;line-height:.4rem !important}.character .cha-pagination-static{position:absolute;width:7.8rem;height:.96rem;top:10.62rem;left:11.9rem;display:flex;justify-content:center;z-index:1}.character .pagination-dot-container{position:absolute;width:7.8rem;height:.21rem;left:11.9rem;top:11.77rem;display:flex;justify-content:center}.character .pagination-dot-container .pagination-dot-item{width:.21rem;height:.21rem;background-image:url(' +
          I +
          ");background-size:100% 100%}.character .pagination-dot-container .pagination-dot-item-active{background-image:url(" +
          L +
          ")}.character .pagination-dot-container .pagination-dot-item:not(:last-child){margin-right:.21rem}.character .swiper-container{width:100%;height:12.97rem}.character .cha-pagination-multi{width:9.52rem;height:.96rem;position:absolute;left:11.05rem;top:10.62rem;display:flex;justify-content:space-between;align-items:center;z-index:1}.character .cha-pagination-multi .cha-pagination-arrow{width:.41rem;height:.44rem;cursor:pointer;position:absolute;top:.26rem;background:url(" +
          k +
          ") center/contain no-repeat}.character .cha-pagination-multi .cha-pagination-arrow-left{left:0}.character .cha-pagination-multi .cha-pagination-arrow-right{transform:rotateZ(180deg);right:0}.character .cha-pagination-multi .cha-pagination-swiper{width:7.8rem;height:.96rem}.character .cha-pagination-item{width:2.6rem;height:.96rem;flex-shrink:0;display:flex;align-items:center;justify-content:center;cursor:pointer;position:relative;background:url(" +
          y +
          ") center/contain no-repeat}.character .cha-pagination-item .active-pagination-item-bg{width:100%;height:100%;position:absolute;left:0;top:0;opacity:0;background-size:100% 100%}.character .cha-pagination-item img{width:2.27rem;height:.7rem;opacity:.4;transition:opacity .2s;position:relative}.character .cha-pagination-item-active{background-image:none}.character .cha-pagination-item-active .active-pagination-item-bg{opacity:1}.character .cha-pagination-item-active img{opacity:1}.character .selection__shadow-container{height:2.68rem;width:100%;position:absolute;left:0;bottom:0;pointer-events:none}.character .selection__shadow-container .selection__shadow{width:100%;height:100%;background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))}.character-camp-selection{width:100%;height:calc(100vh - 1rem);position:fixed;top:1rem;left:0;z-index:100;padding-top:.95rem;display:flex}.character .selection__bg{width:100%;height:100%;background-image:url(" +
          J +
          ");background-size:cover;position:absolute;top:0;left:0;opacity:0}.character .selection__header{width:100%;height:1.77rem;position:absolute;top:0;left:0;opacity:0;pointer-events:none;z-index:2;background:url(" +
          W +
          ") center/auto 100% no-repeat}.character .selection__wrap{flex:1;opacity:0}.character .selection__container{padding:.75rem 0 2rem}.character .selection__content{width:23.5rem;border:.06rem solid #373737;background-color:#0b0b0b;padding:.06rem;display:flex;justify-content:space-between;flex-wrap:wrap;margin:0 auto}.character .selection__content-item{width:5.74rem;height:3.62rem;position:relative;cursor:pointer;background:url(" +
          Q +
          ') center/contain no-repeat}.character .selection__content-item:not(:nth-last-child(-n+4)){margin-bottom:.1rem}.character .selection__content-item::after{content:"";width:100%;height:100%;position:absolute;top:0;left:0;border:.08rem solid #d8fa00;pointer-events:none;opacity:0}.character .selection__content-item-icon{width:3.38rem;height:3.38rem;display:block;margin:0 auto}.character .selection__content-item-name{width:max-content;min-width:2rem;max-width:5rem;border-radius:.3rem;border:.04rem solid rgba(69,69,69,.46);background:rgba(0,0,0,.38);color:#fff;font-size:.24rem;line-height:.3rem;padding:.08rem .24rem;text-align:center;position:absolute;top:2.76rem;left:50%;transform:translateX(-50%)}.character .selection__content-item__empty{pointer-events:none}.character .selection__content-item__empty .selection__content-item-name{color:rgba(255,255,255,.12)}.character .selection__content-item__active::after,.character .selection__content-item:hover::after{opacity:1}.character .side-camp-selection-shadow{position:absolute;width:2.91rem;height:100%;right:0;top:0;background-color:#000;transition:transform .3s ease-in-out}.character .side-camp-selection-shadow-hide{transform:translateX(3rem)}.character .side-character-camp-selection{width:2.91rem;height:calc(100vh - 1rem);max-height:12.97rem;background-color:#000;right:0;z-index:10;overflow:hidden;transition:transform .3s ease-in-out}.character .side-character-camp-selection-hide{transform:translateX(3rem)}.character .side-character-camp-selection .side-camp-swiper{width:2.63rem;height:100%;overflow:visible;cursor:pointer}.character .side-character-camp-selection .side-camp-swiper .side-camp-item{height:3.62rem;background-image:url(' +
          R +
          ");background-size:100% 100%;opacity:.45}.character .side-character-camp-selection .side-camp-swiper .swiper-slide-active{opacity:1}.character .side-character-camp-selection .side-camp-swiper .side-camp-icon{height:2.76rem;width:100%;background-size:auto 120%;background-position:center 20%}.character .side-character-camp-selection .side-camp-swiper .side-camp-name-container{width:2.3rem;height:1.1rem;display:flex;position:absolute;left:.18rem;bottom:0rem;display:flex;align-items:center;justify-content:center}.character .side-character-camp-selection .side-camp-swiper .side-camp-name-container .side-camp-name{width:100%;border-radius:.34rem;border:.04rem solid #454545;background:rgba(0,0,0,.38);color:#fff;font-size:.16rem;line-height:1.3;padding:.08rem .1rem;text-align:center}[lang=zh-cn] .character .side-character-camp-selection .side-camp-swiper .side-camp-name-container .side-camp-name,[lang=zh-tw] .character .side-character-camp-selection .side-camp-swiper .side-camp-name-container .side-camp-name{font-size:.24rem}.character .side-character-camp-selection .side-camp-btm{width:100%;height:1.16rem;position:absolute;left:0;bottom:0;background:linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 30%, rgb(0, 0, 0));z-index:11;display:flex;align-items:center;justify-content:center}.character .side-character-camp-selection .side-camp-btm .side-camp-expand-btn{width:1.75rem;height:.52rem;border:.04rem solid #2e2e2e;border-radius:.26rem;font-size:.18rem;background-color:#d8fa00;color:#000;display:flex;align-items:center;justify-content:center;text-align:center;cursor:pointer}[lang=zh-cn] .character .side-character-camp-selection .side-camp-btm .side-camp-expand-btn,[lang=zh-tw] .character .side-character-camp-selection .side-camp-btm .side-camp-expand-btn{font-size:.2rem}.character .character-color-block{width:15rem;height:15rem;position:absolute;right:-7.58rem;top:6.69rem;transform:skewX(-45deg);transition:background-color .3s}.character .character-detail-links{display:none;font-size:.1rem}",
        "",
      ]),
        (e.exports = E));
    },
    1331: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAABA9JREFUWEfVmd2LG1UYxn9nJptNNrvbFcQWBTvJCVUWBC31XvwDxFovVBDvhCr4VcQr21XvRLRWpOqdXogiWvEPEO/9Qm8UyclMBLVbL+x+Jrs7M8c9Y1Kz28zkTLZsmwMJIXne933ynHPe8553BKMNIaU8GsN9wL3AEeBWtJ5O3AmxCvwJ/AZ868A3SqkfAD1aOBB5DKvV6kEc52ngccDLYwu0gI+I43d931/MaWtH1PO8Ocd1FzQ8CZTzBtmF7wh4P46ihSAILtv6GqqoJ+WDAs4Dh2ydWuIuajgZKPWlDT6LqFur19/QWj9rVp2NsxEwWsC5plKngCjLfiCB+fn5Ymdj4xMNx0cInttEwAVHiEcbjcZGmvEgom5Vyi+AB3JH3JvBV75SD6UpexXRWr3+ltb6ub3FHM1awNtNpQbG3kH0sJTHHfjcdk06jkOxWGSiUMB8Ni8z4jhOXlthyObmZvLZcugYTrSUurAbf4WoSUHCdX+x2d2GUKlUYrJYtIpvyLY7HVvCizqK7tyduq4QtZ1yo+BUuYwQ+RKB1pr1djtReNgQQpxtNhrP9+OSaJ7nHRKu2xyWzEuTk5TLe8v37Xabzkbq5u5xa+soqgVBcLH3RUK0Vq8vaK3PZP1To2RlamqYGFa/r62v2yj7mq/U6X6iolqrKYSopkUxa3J2Zib3dKf5M8tgeWVl2JoNfKVqvUJGHK7Xjzpaf58lRaVSoTgxYaWWLWhza4u1tbVMuAPHlFIJN1GV8kXg9Sw1D8zO2sbPhVtaXs5UVcNLgVIJNzPtnyHEw2kRTBoql0q5CNiCTcrqdDpZ8E99pR7pKfozcFcaemZ6mkKhYBs7Fy4MQ1ZWTY2dMoT4yW807u4R/Ru4OQ1rpr134uRiYQE2J5aZ/oyx6CuVlJdmjRrtJ9PAN83NWYQcHfLP5czaed1XqjJ2RK/f1GvN0tKS9dSPyWYao/Q0Hgl/bI7QbooyJV5qQ+E6FiXSXBiS9GTeqlK+un2pejlr+90IZZ594XwNzn2L893o1Y7DULZarb964v1/FZHyrAbTbMgc+3EVAd7xlXqmn8juy92vwMFhZM2aNRWVIW0zcl7uLukouiP1cmcC3gDXZYTWJ5rNpmmA7BhXNyAsl4CNknkx1g2IruPxaOkYsp7nlRzX/Xg/m2RxFD0WBEFquZ/ZdqxK+SawY/flnU4L/DlfqRdGajv2O+9usPeAWyyC5oFcElqfHLRxBjmx6st0+1KvbD9AMK3xvd70zPR+oKPozDVtjff/u27r5yngCeD2PPIBv2+f1h/GYXi+/8Sx9WGl6ABnjpTynhjuB46h9RGEuA347/ENrKL1HwhhHt9858DXSqkfewWGLbmBJ9MoxvtpM6qi+8kxifUvgSXaOqIyOCwAAAAASUVORK5CYII=";
    },
    1332: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAABNJJREFUWEfVWWtsFFUU/u6Mlja0SSlYCtp2du8GTRNfBI0/IEHRKBIrFWKwhqCpGpBIsWhUjFI1qDFIS9EUSUBtIkqItkJ8okiiP3yb8kON2bsz22LbLbY0aWNb2tlr79Kt27Jz58601vT+3fP49txzzv3OGQJ/h1BKF8eB5QCuA7AIwEJwnp0wR0gfgDYAfwD4QQNOMsZ+BsD9uQOIF8VAIDAfmrYZwHoAhhddAFEADYjHXzdNM+ZRVw2oYRi5mq5Xc+AhAFlenUyQHyDAG3HbrrYsq0fVlmtEDUpXE6AeQIGqUUW5Dg5sshhrUpGXAdWDodAuznmlyDoVYz5kOAHqIoxtA2DL9NMCKCkpyRgYHHyPA2U+nHtWIUCjRsg94XB40Ek5HVA9QOkHAEo9e5ycwlGTsbucInsB0GAoVMM53zo5n/60CbAnwlha3+OAFlNapgHvq+bkgqIhLF/Vh6uu70dx6Bxy555Ps54uHdFwBk59n4WTH2WjveViVeQ8DqyJMtY4UWEMqGhBRNd/U6nu/AXDuHdzN24p6wXR5BiE5+NNOXjntTx0tl+kAjjGbfuKia1rDKjqla+4sxePVJ/BrExvj8zgAMHe6kvw5Yc5rmAJIbWRcPjRVMEEUMMwCoiuR9ya+dqKHlQ81uXqSCZwcNdcHDmQ62ajn9t20LKsjqRgAmgwFKrmnO+Qad+8uhfbXup0c6D0+6tP5eOLJtfIvmAy9mwqUBIIBhkICTh5KbhsCPVHTyMzK64ExE1IpMHGOwrRcVpaZJbJWDBJZEhxKLRY4/wnmfHtNTEsu00Qoqk733yWjZ1b50sNasASxlgCGwlQ+jiAVxyjWTiEg5+2uFa3178gukHFyiJp6+LAExZjCWzi2o+AkLVOjtZtPIsNld1ecSjJN9Tl4d36OTLZwyZj65IRPQXgSifpl99sw9U39Cs59irU/F0WnrxvobMaIc1mOHxNEugZAPOcpA99bWHOPCmx8YpvTP7sXzrKl0n5d8xkLEEvRY4OAJjl5O3jX0VD8I1Fqsg5cHsJlcn8bTI2e8YB/f+uvktH+VL1q58hxTSD2pO04QvOeeCT/6bhP7CyCG0Srjqu4as8oU/XxrD01il+Qj+fjZ2V8sF23BM62qIExXPMakFK9h1r9cxBnfpOgpSUFqKj1ZWUiN6VYEKJDhmg9PmRoeoZWUMTbL7qxamhebu35+N4o3eap0yc736wB/dXTY44v1WTh8P7pe+7iFd/fHiYRqPR9mTw/h1FKK3lgFg2SM90jCIA9pqMbUkFMnG4+x2AnCQCEMPd+i3dWFGqNtydOJaDhj3Kw10nt+3LHYc7gd7PuHzjqr4EuyoMnhsjL4JstEYy0PxtFr7yNi6DcL4mEomIBci4c+ECQjEF3FLEz+/KC4hR4zNjpSPAGoaRqen6oelcksVtu9yyLEE50x7p2jFA6W4A46rPz5W66NSZjFX5WjumGh4tsH2i2KcYZCfhfFO6wknnR4m7j+6lnhv5gCBW45mTBCyudz+37R1TuhpPBTW6+nkYwAYARR4Bt4y81m/Hh4frU18cVRtKEU1jTKOUXhsHbgKwBJwvAiGXAjj/+QboA+d/ghDx+eZHDTjBGPslSTBUwaV9mfwoT6eO34hOJ8aEr38AZmDmOrVQHtcAAAAASUVORK5CYII=";
    },
    1333: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    1334: function (e, t, n) {
      e.exports = n.p + "img/camp-selection-bg-pc.2bc3641.png";
    },
    1335: function (e, t, n) {
      e.exports = n.p + "img/camp-selection-header-pc.f0127ef.png";
    },
    1336: function (e, t, n) {
      e.exports = n.p + "img/camp-block-pc.a3cdf91.png";
    },
    1337: function (e, t, n) {
      e.exports = n.p + "img/side-camp-bg.3a50dfc.png";
    },
    1439: function (e, t, n) {
      "use strict";
      n.r(t);
      (n(85), n(84), n(67), n(105), n(106));
      var r = n(56);
      n(65);
      function c(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          (e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n));
        }
        return t;
      }
      function o(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? c(Object(source), !0).forEach(function (t) {
                Object(r.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source))
              : c(Object(source)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t));
                });
        }
        return e;
      }
      var l = n(32),
        h = n(71),
        d = (n(98), n(138), n(119), n(118), n(1143), n(136), n(77), n(137), n(1327), n(156), n(1187)),
        m = n.n(d),
        v = n(1154),
        f = n(1126),
        S = n(347);
      function C(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          (e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, n));
        }
        return t;
      }
      function w(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? C(Object(source), !0).forEach(function (t) {
                Object(r.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source))
              : C(Object(source)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t));
                });
        }
        return e;
      }
      var E = {
          scrollToTop: !0,
          name: "character",
          components: { pageTab: f.a, backTop: S.a, VueScroll: m.a },
          head: function () {
            var e = this.curActiveCha.sTitle,
              t = (this.curActiveCha.word || "").replace(/<br\s*\/?>/gi, " "),
              title = "".concat(e).concat(this.$getI18nWord("seoTitlePrefix"));
            return {
              title: title,
              meta: [
                { hid: "description", name: "description", content: "".concat(e, " -- ").concat(t) },
                { hid: "og:description", name: "og:description", content: "".concat(e, " -- ").concat(t) },
                {
                  hid: "twitter:description",
                  name: "twitter:description",
                  content: "".concat(e, " -- ").concat(t),
                },
                { hid: "og:title", name: "og:title", content: title },
                { hid: "twitter:title", name: "twitter:title", content: title },
              ],
            };
          },
          data: function () {
            var e = this,
              t = this.$flex("rem");
            return {
              cvIdx: 0,
              subCvIdx: 0,
              showCampSelection: !1,
              audioInstance: null,
              micTween: null,
              showLeftArrow: !1,
              showRightArrow: !1,
              isPlaying: !1,
              isEnFontLoad: !1,
              paginationSwiper: null,
              sideCampSwiper: null,
              sideCampStyle: {
                height: "calc(100vh - 1rem)",
                bottom: "unset",
                top: "unset",
                position: "absolute",
              },
              activeIndex: 0,
              paginationSwiperOption: {
                slidesPerView: 3,
                shortSwipes: !1,
                on: {
                  slideChange: this.onSwiperSlideChange,
                  tap: function () {
                    e.onRoleClick(-1);
                  },
                },
              },
              campScrollOpts: { rail: { opacity: 0 }, bar: { opacity: 0 } },
              sideCampSwiperOption: {
                direction: "vertical",
                slidesPerView: "auto",
                spaceBetween: 0.1 * t,
                slideToClickedSlide: !0,
                centeredSlides: !0,
                loop: !0,
                shortSwipes: !1,
                longSwipesRatio: 0.3,
                on: { slideChangeTransitionStart: this.handleCampChange },
              },
              scrollOpts: {
                scrollPanel: { scrollingX: !1, scrollingY: !0 },
                rail: { size: "0.05rem", background: "#EFEFEF", opacity: 1 },
                bar: { keepShow: !0, size: "0.05rem", background: "#C0C0C0" },
              },
            };
          },
          computed: {
            lang: function () {
              return this.$store.state.lang;
            },
          },
          watch: {
            activeIndex: function () {
              var e,
                t = this.campList[this.activeIndex];
              this.chaList =
                (null === (e = this.characterList) || void 0 === e
                  ? void 0
                  : e.filter(function (e) {
                      return e.sChanId.includes("".concat(t.channelId));
                    })) || [];
            },
            curActiveCha: {
              handler: function (e) {
                var t, n;
                if (
                  (this.updateAudioIns(e),
                  (this.subCvIdx = 0),
                  null !== (t = this.$refs.chaSwiper) && void 0 !== t && t.swiper)
                ) {
                  var r = e.iInfoId,
                    c = this.characterList.findIndex(function (e) {
                      return e.iInfoId === r;
                    });
                  this.$refs.chaSwiper.swiper.slideTo(c);
                }
                (null !== (n = this.$refs.descScroll) &&
                  void 0 !== n &&
                  n[this.curActiveChaIdx] &&
                  (this.$refs.descScroll[this.curActiveChaIdx].refresh(),
                  this.$refs.descScroll[this.curActiveChaIdx].scrollTo({ y: 0 }, 0)),
                  "".concat(this.$route.query.id) !== "".concat(e.iInfoId) &&
                    this.$router.replace({ query: w(w({}, this.$route.query), {}, { id: e.iInfoId }) }),
                  this.updateEnNameScale());
              },
              immediate: !0,
            },
            curActiveChaIdx: function () {
              this.curActiveCha = this.chaList[this.curActiveChaIdx];
            },
            chaList: {
              immediate: !0,
              handler: function () {
                var e = this;
                ((this.curActiveCha = this.chaList[this.curActiveChaIdx]),
                  this.preloadImages(),
                  this.$nextTick(function () {
                    e.onSwiperSlideChange();
                  }));
              },
            },
            isEnFontLoad: function () {
              this.updateEnNameScale();
            },
          },
          asyncData: function (e) {
            e.res;
            var t = e.redirect,
              n = e.store,
              r = e.query.id;
            return (
              console.log("character", r),
              Promise.all([
                v.a.getCampList({ data: { sLangKey: n.state.lang } }),
                v.a.getAllCharacter({ data: { sLangKey: n.state.lang } }),
              ]).then(function (e) {
                var c = Object(h.a)(e, 2),
                  o = c[0],
                  l = c[1];
                (l.list.length < 1 && t({ name: "main" }), n.commit("setCharacterCamps", o));
                var d = 4 - (o.length % 4) || 4,
                  m = o.concat(new Array(d).fill({ isEmpty: !0 })),
                  v = l.list,
                  f = v.findIndex(function (e) {
                    return e.iInfoId === +r;
                  }),
                  S = -1 === f ? 0 : f,
                  C = o.findIndex(function (e) {
                    var t = e.channelId;
                    return v[S].sChanId.includes("".concat(t));
                  }),
                  w = -1 === C ? 0 : C,
                  E = o[w],
                  x =
                    (null == v
                      ? void 0
                      : v.filter(function (e) {
                          return e.sChanId.includes("".concat(E.channelId));
                        })) || [],
                  A = x.findIndex(function (e) {
                    return e.iInfoId === +r;
                  }),
                  I = -1 === A ? 0 : A,
                  L = x[I];
                return {
                  renderCampList: m,
                  campList: o,
                  chaList: x,
                  characterList: v,
                  activeIndex: w,
                  curActiveCha: L,
                  curActiveChaIdx: I,
                  chaSwiperOption: {
                    effect: "fade",
                    lazy: !0,
                    initialSlide: S,
                    fadeEffect: { crossFade: !0 },
                  },
                };
              })
            );
          },
          beforeMount: function () {
            this.loadEnFont();
          },
          mounted: function () {
            var e = this;
            (this.$nextTick(function () {
              var t, n;
              ((e.paginationSwiper =
                null === (t = e.$refs.paginationSwiper) || void 0 === t ? void 0 : t.swiper),
                (e.sideCampSwiper =
                  null === (n = e.$refs.sideCampSwiper) || void 0 === n ? void 0 : n.swiper),
                e.updateSideCampStyle(),
                e.onSwiperSlideChange(),
                e.preloadImages(),
                e.sideCampSwiper && e.sideCampSwiper.slideToLoop(e.activeIndex, 0),
                e.paginationSwiper && e.paginationSwiper.slideTo(e.curActiveChaIdx, 0));
            }),
              window.addEventListener("resize", this.updateSideCampStyle),
              window.addEventListener("scroll", this.updateSideCampStyle));
          },
          beforeDestroy: function () {
            (window.removeEventListener("resize", this.updateSideCampStyle),
              window.removeEventListener("scroll", this.updateSideCampStyle));
          },
          methods: {
            formatName: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
              return e.replace(/<br\s*\/?>/gi, " ");
            },
            handleCampChange: function () {
              if (this.sideCampSwiper && this.paginationSwiper) {
                var e = this.sideCampSwiper.realIndex;
                this.activeIndex !== e &&
                  (e > this.campList.length ||
                    ((this.activeIndex = e),
                    (this.curActiveChaIdx = 0),
                    this.$trackButton("camp_change", this.campList[this.activeIndex].iInfoId, { type: 1 }),
                    this.paginationSwiper.slideTo(this.curActiveChaIdx, 0)));
              }
            },
            handlePaginationArrowClick: function (e) {
              var t = this.paginationSwiper.realIndex;
              this.paginationSwiper.slideTo(t + 3 * e);
            },
            handleVoiceBtnClick: function () {
              if (this.audioInstance)
                if (0 !== this.curActiveCha.cv[this.cvIdx].audio.length) {
                  if (this.isPlaying) return (this.audioInstance.stop(), void this.switchSubCv());
                  var e = (1 === this.cvIdx ? this.curActiveCha.cv[0].audio.length : 0) + this.subCvIdx;
                  (this.audioInstance.switchSrcIndex(e),
                    this.audioInstance.play(),
                    this.$trackButton("character_voice", "".concat(this.curActiveCha.iInfoId), {
                      cvLang: this.curActiveCha.cv[this.cvIdx].lang,
                      cvId: this.subCvIdx + 1,
                    }));
                } else this.$mtoast(this.$getI18nWord("textSoon"));
            },
            handleLangSwitcherClick: function () {
              var e = this;
              return Object(l.a)(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!e.audioInstance) {
                            t.next = 4;
                            break;
                          }
                          return ((t.next = 3), e.audioInstance.stop());
                        case 3:
                          e.stopMicAni();
                        case 4:
                          e.cvIdx = 0 === e.cvIdx ? 1 : 0;
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              )();
            },
            playMicAni: function () {
              this.micTween = this.$gsap.to(".character-voice-btn-inner-highlight", {
                keyframes: { "--progress": ["100%", "35%", "60%", "35%", "70%", "0%", "100%"] },
                duration: 1,
                repeat: -1,
                ease: "none",
              });
            },
            stopMicAni: function () {
              this.micTween &&
                (this.micTween.kill(),
                this.$gsap.set(".character-voice-btn-inner-highlight", { "--progress": "100%" }),
                (this.micTween = null));
            },
            updateAudioIns: function (e) {
              var t = this;
              return Object(l.a)(
                regeneratorRuntime.mark(function r() {
                  var c, o, l, h, d;
                  return regeneratorRuntime.wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (((c = (e || {}).cv), (o = void 0 === c ? [] : c).length)) {
                            r.next = 3;
                            break;
                          }
                          return r.abrupt("return");
                        case 3:
                          if (
                            (o.length <= 1 && (t.cvIdx = 0),
                            (l = n(354)),
                            (h = l.eventAudio),
                            !t.audioInstance)
                          ) {
                            r.next = 11;
                            break;
                          }
                          return ((r.next = 8), t.audioInstance.stop());
                        case 8:
                          (t.audioInstance.unload(), t.stopMicAni(), (t.audioInstance = null));
                        case 11:
                          ((d = o
                            .map(function (e) {
                              return e.audio;
                            })
                            .flat()),
                            (t.audioInstance = new h({
                              src: d,
                              cache: !1,
                              preload: !0,
                              loop: !1,
                              autoplay: !1,
                              fade: [0, 0],
                              html5: !1,
                              onPlayed: function (e) {
                                ((t.isPlaying = e), e ? t.playMicAni() : t.stopMicAni());
                              },
                              onEnd: t.switchSubCv,
                            })));
                        case 13:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )();
            },
            switchSubCv: function () {
              var e = this.curActiveCha.cv[this.cvIdx].audio.length;
              this.subCvIdx < e - 1 ? (this.subCvIdx += 1) : (this.subCvIdx = 0);
            },
            toggleCampSelection: function () {
              var e = this;
              if (
                ((this.showCampSelection = !this.showCampSelection),
                this.$trackButton(this.showCampSelection ? "view_all_camp" : "all_camp_back", ""),
                this.showCampSelection)
              ) {
                var t = this.$gsap.timeline();
                (t.fromTo(
                  ".selection__header",
                  { opacity: 0, y: "-100%" },
                  { opacity: 1, y: "0", duration: 0.3, ease: "power2.inOut" },
                ),
                  t.fromTo(
                    ".selection__bg",
                    { opacity: 0, y: "-100%" },
                    { opacity: 1, y: "0", duration: 0.3, ease: "power2.out" },
                    "-=0.05",
                  ),
                  t.fromTo(
                    ".selection__wrap",
                    { opacity: 0, y: "0.5rem" },
                    {
                      opacity: 1,
                      y: 0,
                      duration: 0.3,
                      ease: "power2.inOut",
                      onStart: function () {
                        e.$refs.campScroll.scrollTo({ y: 0 }, 0);
                      },
                    },
                    "-=0.05",
                  ),
                  t.fromTo(
                    ".selection__shadow-container",
                    { opacity: 0 },
                    { opacity: 1, duration: 0.3, ease: "power2.inOut" },
                    "<",
                  ));
              }
            },
            onSwiperSlideChange: function () {
              if (this.chaList.length <= 3 || !this.paginationSwiper)
                return ((this.showLeftArrow = !1), void (this.showRightArrow = !1));
              ((this.showLeftArrow = this.paginationSwiper.activeIndex > 0),
                (this.showRightArrow = this.paginationSwiper.activeIndex + 3 < this.chaList.length));
            },
            onRoleClick: function (e) {
              this.curActiveChaIdx = -1 === e ? this.paginationSwiper.clickedIndex : e;
            },
            onCampClick: function (e) {
              (e !== this.activeIndex &&
                ((this.activeIndex = e),
                (this.curActiveChaIdx = 0),
                this.paginationSwiper.slideTo(this.curActiveChaIdx, 0),
                this.sideCampSwiper.slideToLoop(e, 0)),
                this.$trackButton("camp_change", this.campList[e].iInfoId, { type: 2 }),
                (this.showCampSelection = !1));
            },
            updateSideCampStyle: function () {
              var e = this.$flex("rem"),
                t = 12.97 * e,
                n = Math.min(document.documentElement.clientHeight - 1 * e, t),
                r = document.documentElement.scrollTop + n - t;
              ((this.sideCampStyle.height = "".concat(n, "px")),
                r <= 0
                  ? ((this.sideCampStyle.bottom = "unset"),
                    (this.sideCampStyle.top = "1rem"),
                    (this.sideCampStyle.position = "fixed"))
                  : ((this.sideCampStyle.bottom = 0),
                    (this.sideCampStyle.top = "unset"),
                    (this.sideCampStyle.position = "absolute")));
            },
            updateEnNameScale: function () {
              var e = this;
              return Object(l.a)(
                regeneratorRuntime.mark(function t() {
                  var n, r, c, o;
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ("en-us" !== e.lang) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return");
                        case 2:
                          if (e.isEnFontLoad) {
                            t.next = 4;
                            break;
                          }
                          return t.abrupt("return");
                        case 4:
                          return ((t.next = 6), e.$nextTick());
                        case 6:
                          if (e.curActiveCha.enNameScale) {
                            t.next = 14;
                            break;
                          }
                          if (
                            ((n = e.$flex("rem")),
                            (r = "character-info-name-en-".concat(e.curActiveCha.iInfoId)),
                            (c = document.querySelector(".".concat(r))))
                          ) {
                            t.next = 12;
                            break;
                          }
                          return t.abrupt("return");
                        case 12:
                          ((o = Math.min((10 * n) / c.clientWidth, 1)), (e.curActiveCha.enNameScale = o));
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              )();
            },
            loadEnFont: function () {
              var e = this;
              window.FontFace
                ? new FontFace("Mont-Heavy", "url(".concat(n(558), "), url(").concat(n(559), ")"))
                    .load()
                    .finally(function () {
                      e.isEnFontLoad = !0;
                    })
                : (this.isEnFontLoad = !0);
            },
            preloadImages: function () {
              var e = this;
              return Object(l.a)(
                regeneratorRuntime.mark(function t() {
                  var n;
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (null !== (n = e.$refs.chaSwiper) && void 0 !== n && n.swiper) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return");
                        case 2:
                          e.chaList.forEach(function (t) {
                            var n = t.iInfoId,
                              r = e.characterList.findIndex(function (e) {
                                return e.iInfoId === n;
                              });
                            e.$refs.chaSwiper.swiper.lazy.loadInSlide(r);
                          });
                        case 3:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              )();
            },
          },
        },
        x = E,
        A = (n(1329), n(36)),
        component = Object(A.a)(
          x,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              { staticClass: "character" },
              [
                t("pageTab", { attrs: { "nav-num": 2, theme: e.curActiveCha.themeColor } }),
                e._v(" "),
                t(
                  "client-only",
                  [
                    t(
                      "swiper",
                      { ref: "chaSwiper", staticClass: "cha-swiper", attrs: { options: e.chaSwiperOption } },
                      e._l(e.characterList, function (n) {
                        return t(
                          "swiper-slide",
                          { key: n.iInfoId, staticClass: "cha-swiper-slide swiper-no-swiping" },
                          [
                            t("div", {
                              staticClass: "character-cover swiper-lazy",
                              attrs: { "data-background": n.newCoverInner },
                            }),
                            e._v(" "),
                            t("div", { staticClass: "character-info" }, [
                              t("div", { staticClass: "character-info-main" }, [
                                t("div", { staticClass: "character-info-row" }, [
                                  t("div", { staticClass: "character-info-name" }, [
                                    n.levelIcon
                                      ? t("i", {
                                          style: { backgroundImage: "url(".concat(n.levelIcon, ")") },
                                        })
                                      : e._e(),
                                    e._v(" "),
                                    t("span", [e._v(e._s(n.name))]),
                                    e._v(" "),
                                    "en-us" !== e.lang
                                      ? t(
                                          "span",
                                          {
                                            staticClass: "character-info-name-en font-mont-heavy",
                                            class: "character-info-name-en-".concat(n.iInfoId),
                                            style:
                                              0 === n.enNameScale
                                                ? { visibility: "hidden" }
                                                : { transform: "scale(".concat(n.enNameScale, ")") },
                                          },
                                          [e._v(e._s(e.formatName(n.nameEN)))],
                                        )
                                      : e._e(),
                                  ]),
                                ]),
                                e._v(" "),
                                t("div", { staticClass: "character-info-row" }, [
                                  n.cv.length
                                    ? t("div", { staticClass: "character-voice-player" }, [
                                        t(
                                          "div",
                                          {
                                            staticClass: "character-voice-btn",
                                            on: { click: e.handleVoiceBtnClick },
                                          },
                                          [
                                            t("div", { staticClass: "character-voice-btn-inner" }, [
                                              t("div", {
                                                staticClass: "character-voice-btn-inner-highlight",
                                              }),
                                            ]),
                                          ],
                                        ),
                                        e._v(" "),
                                        t("span", { staticClass: "character-voice-player-name" }, [
                                          t("span", [e._v("CV: ")]),
                                          e._v(" "),
                                          t("span", { staticClass: "character-voice-player-name-text" }, [
                                            e._v(e._s(n.cv[e.cvIdx].name)),
                                          ]),
                                        ]),
                                        e._v(" "),
                                        n.cv.length > 1
                                          ? t(
                                              "div",
                                              {
                                                staticClass: "character-voice-lang-switcher",
                                                class: "character-voice-lang-switcher__".concat(e.cvIdx),
                                                on: { click: e.handleLangSwitcherClick },
                                              },
                                              [t("span", [e._v(e._s(n.cv[e.cvIdx].lang))])],
                                            )
                                          : e._e(),
                                      ])
                                    : e._e(),
                                  e._v(" "),
                                  t(
                                    "div",
                                    { key: "prop-".concat(n.iInfoId), staticClass: "character-info-prop" },
                                    [
                                      n.propIcon1
                                        ? t("img", { attrs: { src: n.propIcon1, alt: "" } })
                                        : e._e(),
                                      e._v(" "),
                                      n.propIcon2
                                        ? t("img", { attrs: { src: n.propIcon2, alt: "" } })
                                        : e._e(),
                                    ],
                                  ),
                                ]),
                              ]),
                              e._v(" "),
                              t("div", {
                                staticClass: "character-info-word",
                                domProps: { innerHTML: e._s(n.word) },
                              }),
                              e._v(" "),
                              t(
                                "div",
                                { staticClass: "character-info-desc-container" },
                                [
                                  t(
                                    "vue-scroll",
                                    {
                                      key: "desc-scroll-".concat(n.iInfoId),
                                      ref: "descScroll",
                                      refInFor: !0,
                                      attrs: { ops: e.scrollOpts },
                                    },
                                    [
                                      t("div", {
                                        staticClass: "character-info-desc",
                                        domProps: { innerHTML: e._s(n.intro) },
                                      }),
                                    ],
                                  ),
                                ],
                                1,
                              ),
                            ]),
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
                  { staticClass: "cha-pagination-multi" },
                  [
                    t("div", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.showLeftArrow,
                          expression: "showLeftArrow",
                        },
                      ],
                      staticClass: "cha-pagination-arrow cha-pagination-arrow-left",
                      on: {
                        click: function (t) {
                          return e.handlePaginationArrowClick(-1);
                        },
                      },
                    }),
                    e._v(" "),
                    t(
                      "client-only",
                      [
                        t(
                          "swiper",
                          {
                            ref: "paginationSwiper",
                            staticClass: "cha-pagination-swiper",
                            attrs: { options: e.paginationSwiperOption },
                          },
                          e._l(e.chaList, function (n, r) {
                            return t(
                              "swiper-slide",
                              {
                                key: "".concat(n.iInfoId, "-").concat(r),
                                staticClass: "cha-pagination-item",
                                class: { "cha-pagination-item-active": r === e.curActiveChaIdx },
                              },
                              [
                                t("div", {
                                  staticClass: "active-pagination-item-bg",
                                  style: { backgroundImage: "url(".concat(n.paginationItemBg, ")") },
                                }),
                                e._v(" "),
                                t("img", { attrs: { src: n.newNav, alt: "" } }),
                              ],
                            );
                          }),
                          1,
                        ),
                      ],
                      1,
                    ),
                    e._v(" "),
                    t("div", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.showRightArrow,
                          expression: "showRightArrow",
                        },
                      ],
                      staticClass: "cha-pagination-arrow cha-pagination-arrow-right",
                      on: {
                        click: function (t) {
                          return e.handlePaginationArrowClick(1);
                        },
                      },
                    }),
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
                        value: e.showCampSelection,
                        expression: "showCampSelection",
                      },
                    ],
                    staticClass: "character-camp-selection",
                  },
                  [
                    t("div", { staticClass: "selection__bg" }),
                    e._v(" "),
                    t("div", { staticClass: "selection__header" }),
                    e._v(" "),
                    t(
                      "div",
                      { staticClass: "selection__wrap" },
                      [
                        t("vue-scroll", { ref: "campScroll", attrs: { ops: e.campScrollOpts } }, [
                          t("div", { staticClass: "selection__container" }, [
                            t(
                              "div",
                              { staticClass: "selection__content" },
                              e._l(e.renderCampList, function (r, c) {
                                return t(
                                  "div",
                                  {
                                    key: r.iInfoId,
                                    staticClass: "selection__content-item",
                                    class: { "selection__content-item__empty": r.isEmpty },
                                    on: {
                                      click: function (t) {
                                        return e.onCampClick(c);
                                      },
                                    },
                                  },
                                  [
                                    t("img", {
                                      staticClass: "selection__content-item-icon",
                                      attrs: { src: r.isEmpty ? n(1179) : r.newIcon, alt: "" },
                                    }),
                                    e._v(" "),
                                    t("div", { staticClass: "selection__content-item-name" }, [
                                      e._v(e._s(r.sTitle || "EMPTY")),
                                    ]),
                                  ],
                                );
                              }),
                              0,
                            ),
                          ]),
                        ]),
                      ],
                      1,
                    ),
                    e._v(" "),
                    t(
                      "div",
                      { staticClass: "selection-back back-btn", on: { click: e.toggleCampSelection } },
                      [
                        t("div", { staticClass: "backArrow" }),
                        e._v(" "),
                        t("div", { staticClass: "backText" }, [e._v(e._s(e.$getI18nWord("textBack")))]),
                        e._v(" "),
                        t("div", { staticClass: "backSubtext" }, [e._v("back")]),
                      ],
                    ),
                    e._v(" "),
                    e._m(0),
                  ],
                ),
                e._v(" "),
                t("div", {
                  staticClass: "side-camp-selection-shadow",
                  class: e.showCampSelection && "side-camp-selection-shadow-hide",
                }),
                e._v(" "),
                t(
                  "div",
                  {
                    staticClass: "side-character-camp-selection",
                    class: e.showCampSelection && "side-character-camp-selection-hide",
                    style: e.sideCampStyle,
                  },
                  [
                    t(
                      "client-only",
                      [
                        t(
                          "swiper",
                          {
                            ref: "sideCampSwiper",
                            staticClass: "side-camp-swiper",
                            attrs: { options: e.sideCampSwiperOption },
                          },
                          e._l(e.campList, function (n) {
                            return t("swiper-slide", { key: n.iInfoId, staticClass: "side-camp-item" }, [
                              t("div", {
                                staticClass: "side-camp-icon",
                                style: { backgroundImage: "url('".concat(n.newIcon, "')") },
                              }),
                              e._v(" "),
                              t("div", { staticClass: "side-camp-name-container" }, [
                                t("div", { staticClass: "side-camp-name" }, [e._v(e._s(n.sTitle))]),
                              ]),
                            ]);
                          }),
                          1,
                        ),
                      ],
                      1,
                    ),
                    e._v(" "),
                    t("div", { staticClass: "side-camp-btm" }, [
                      t(
                        "div",
                        { staticClass: "side-camp-expand-btn", on: { click: e.toggleCampSelection } },
                        [e._v(e._s(e.$getI18nWord("more_camp")))],
                      ),
                    ]),
                  ],
                  1,
                ),
                e._v(" "),
                t("div", {
                  staticClass: "character-color-block",
                  style: { background: e.curActiveCha.themeColor },
                }),
                e._v(" "),
                t(
                  "div",
                  { staticClass: "character-detail-links" },
                  e._l(e.characterList, function (n) {
                    return t(
                      "nuxt-link",
                      {
                        key: n.iInfoId,
                        staticClass: "character-detail-link",
                        attrs: {
                          to: {
                            name: "lang-character",
                            query: o(o({}, e.$router.query), {}, { id: n.iInfoId }),
                          },
                          "no-prefetch": "",
                        },
                      },
                      [
                        e._v(
                          "\n      " +
                            e._s("".concat(n.sTitle).concat(e.$getI18nWord("seoTitlePrefix"))) +
                            "\n    ",
                        ),
                      ],
                    );
                  }),
                  1,
                ),
              ],
              1,
            );
          },
          [
            function () {
              var e = this._self._c;
              return e("div", { staticClass: "selection__shadow-container" }, [
                e("div", { staticClass: "selection__shadow" }),
              ]);
            },
          ],
          !1,
          null,
          null,
          null,
        );
      t.default = component.exports;
    },
  },
]);
