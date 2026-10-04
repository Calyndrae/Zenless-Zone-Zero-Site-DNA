(window.webpackJsonp = window.webpackJsonp || []).push([
  [29],
  {
    1144: function (e, t, r) {
      e.exports = r.p + "img/inner-top-m.329e7ed.png";
    },
    1154: function (e, t, r) {
      "use strict";
      (r(65), r(77), r(204));
      var c = r(1117),
        n = r(28);
      t.a = {
        formatCharacter: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return (
            e.forEach(function (e) {
              var t, r, c, n, o, h, l, m, d, v, f, A, C, w, x, I;
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
                (e.coverM = null === (r = e.sExt["chara-cover-m"][0]) || void 0 === r ? void 0 : r.url),
                (e.word = e.sExt["chara-line"]),
                (e.newCoverInner =
                  null === (c = e.sExt["new-chara-cover-inner"]) ||
                  void 0 === c ||
                  null === (n = c[0]) ||
                  void 0 === n
                    ? void 0
                    : n.url),
                (e.newCoverInnerM =
                  null === (o = e.sExt["new-chara-cover-inner-m"]) ||
                  void 0 === o ||
                  null === (h = o[0]) ||
                  void 0 === h
                    ? void 0
                    : h.url),
                (e.newNav =
                  null === (l = e.sExt["new-chara-nav"]) ||
                  void 0 === l ||
                  null === (m = l[0]) ||
                  void 0 === m
                    ? void 0
                    : m.url),
                (e.levelIcon =
                  null === (d = e.sExt["level-icon"]) || void 0 === d || null === (v = d[0]) || void 0 === v
                    ? void 0
                    : v.url),
                (e.propIcon1 =
                  null === (f = e.sExt["prop-icon-1"]) || void 0 === f || null === (A = f[0]) || void 0 === A
                    ? void 0
                    : A.url),
                (e.propIcon2 =
                  null === (C = e.sExt["prop-icon-2"]) || void 0 === C || null === (w = C[0]) || void 0 === w
                    ? void 0
                    : w.url),
                (e.paginationItemBg =
                  null === (x = e.sExt["pagination-item-bg"]) ||
                  void 0 === x ||
                  null === (I = x[0]) ||
                  void 0 === I
                    ? void 0
                    : I.url),
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
                    var y,
                      audio =
                        null === (y = e.sExt["chara-cv".concat(main, "-audio").concat(sub)][0]) ||
                        void 0 === y
                          ? void 0
                          : y.url;
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
            r = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = Object.assign({ iPageSize: 20, iPage: 1 }, e);
              return t;
            };
          return new Promise(function (o, h) {
            Object(c.get)("".concat(n.apiBase, "/getContentList"), t, r, c.defaultFormatResult)
              .then(function (data) {
                ((data.list = e.formatCharacter(data.list)), o(data));
              })
              .catch(function (e) {
                h(e);
              });
          });
        },
        getAllCharacter: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 };
          return (
            (e.data = Object.assign(
              { iChanId: n.CHANNEL_ID_CONFIG.CHARACTER.CHARACTER, iPageSize: 200 },
              e.data || {},
            )),
            this.getList(e)
          );
        },
        getDetail: function () {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { loading: !1 };
          return (
            (t.data = Object.assign({ iChanId: n.CHANNEL_ID_CONFIG.CHARACTER, iAround: 1 }, t.data || {})),
            new Promise(function (r, o) {
              Object(c.get)(
                "".concat(n.apiBase, "/getContent"),
                t,
                c.defaultFormatParams,
                c.defaultFormatResult,
              )
                .then(function (data) {
                  var t = e.formatCharacter([data])[0];
                  r(t);
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
                  { iChanId: n.CHANNEL_ID_CONFIG.CHARACTER.CAMP, iPageSize: 50, iPage: 1 },
                  e,
                );
              return t;
            };
          return new Promise(function (r, o) {
            Object(c.get)("".concat(n.apiBase, "/getContentList"), e, t, c.defaultFormatResult)
              .then(function (data) {
                (data.list.forEach(function (e) {
                  var t, r, c, n;
                  ((e.sExt = "string" == typeof e.sExt ? JSON.parse(e.sExt) : e.sExt),
                    (e.kv = null === (t = e.sExt["camp-kv"][0]) || void 0 === t ? void 0 : t.url),
                    (e.kvM = null === (r = e.sExt["camp-kv-m"][0]) || void 0 === r ? void 0 : r.url),
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
                    (e.newIcon = null === (c = e.sExt["new-camp-icon"]) || void 0 === c ? void 0 : c[0].url),
                    (e.channelId = parseInt(e.sExt["camp-channel"], 10)),
                    (e.gradientColorMob =
                      (null === (n = e.sExt["gradient-color-mob"]) || void 0 === n ? void 0 : n.split("-")) ||
                      []));
                }),
                  r(data.list));
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
    1179: function (e, t, r) {
      e.exports = r.p + "img/camp-icon-unknown.d7d4775.png";
    },
    1180: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    1181: function (e, t, r) {
      e.exports = r.p + "img/chara-pagination-bg.1452db0.png";
    },
    1189: function (e, t, r) {
      var content = r(1250);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, r(55).default)("1f8a46bc", content, !0, { sourceMap: !1 });
    },
    1249: function (e, t, r) {
      "use strict";
      r(1189);
    },
    1250: function (e, t, r) {
      var c = r(54),
        n = r(117),
        o = r(1251),
        h = r(1144),
        l = r(1252),
        m = r(1253),
        d = r(1180),
        v = r(1181),
        f = r(1254),
        A = r(1255),
        C = r(1256),
        w = r(1257),
        x = r(1258),
        I = r(1259),
        y = c(!1),
        k = n(o),
        E = n(h),
        O = n(l),
        S = n(m),
        B = n(d),
        R = n(v),
        j = n(f),
        T = n(A),
        P = n(C),
        L = n(w),
        z = n(x),
        F = n(I);
      (y.push([
        e.i,
        ".character{position:relative;overflow:hidden;margin-top:1rem;background-image:url(" +
          k +
          ');background-size:100% auto;background-position:center -1.1rem;background-repeat:no-repeat;background-color:#efefef;padding-bottom:1.8rem}.character .m-section-nav{z-index:1}.character::before{content:"";position:absolute;width:3.99rem;height:4.61rem;background-image:url(' +
          E +
          ");background-size:100% 100%;left:0;top:0}.character-block{width:2rem;height:2rem;position:absolute;transform:skewX(-40deg);right:-1.2rem;bottom:-0.5rem}.character-swiper{width:100%;height:13.45rem}.character-swiper .character-swiper-slide{position:relative;padding-top:9.17rem}.character-cover{width:7.5rem;height:11.7rem;position:absolute;left:0;top:0}.character-cover-mist{width:7.5rem;height:10.76rem;position:absolute;left:0;top:6.16rem;background-image:url(" +
          O +
          ");background-size:100% 100%}.character .switch-button{width:.55rem;height:1.99rem;background-image:url(" +
          S +
          ");background-size:100% 100%;position:absolute;top:5.23rem;z-index:1}.character .switch-button-prev{left:0}.character .switch-button-next{right:0;transform:rotateZ(180deg)}.character-info{position:relative;padding:0 .4rem}.character-info-prop{width:fit-content;height:.57rem;display:flex;padding:.08rem .13rem;background-color:#000;border-radius:.3rem}.character-info-prop img{width:.44rem;height:.43rem}.character-info-prop img:not(:last-child){margin-right:.02rem}.character-info-name{margin-top:.1rem;font-size:.48rem;line-height:.54rem;display:flex;align-items:center}.character-info-name i{display:block;width:.45rem;height:.46rem;background-size:100% 100%;margin-right:.08rem}.character-info .character-voice-player{width:fit-content;min-width:3.71rem;margin-top:.18rem;height:.54rem;border:.06rem solid #000;border-radius:.3rem;display:flex;align-items:center;padding-left:.6rem;padding-right:.1rem;justify-content:space-between;position:relative}.character-info .character-voice-player .character-voice-btn{width:.54rem;height:.54rem;position:absolute;border-radius:.3rem;background-color:#000;left:-0.06rem;top:-0.06rem;display:flex;align-items:center;justify-content:center;cursor:pointer}.character-info .character-voice-player .character-voice-btn-inner{width:.23rem;height:.31rem;background-image:url(" +
          B +
          ");background-size:100% 100%}.character-info .character-voice-player .character-voice-btn-inner-highlight{width:100%;height:100%;mask-image:url(" +
          B +
          ");-webkit-mask-image:url(" +
          B +
          ');mask-size:100% 100%;-webkit-mask-size:100% 100%;background-image:linear-gradient(to bottom, rgba(191, 219, 90, 0) 0%, rgba(191, 219, 90, 0) var(--progress), rgb(191, 219, 90) calc(var(--progress) + 10%), rgb(191, 219, 90) 100%)}.character-info .character-voice-player-name{display:flex;align-items:center;font-size:.16rem;margin-right:.1rem;line-height:.3rem;margin-right:.1rem}.character-info .character-voice-player-name-text{font-family:var(--mi18n-font-css);font-weight:bolder;margin-left:.1rem}[lang=zh-cn] .character-info .character-voice-player-name,[lang=zh-tw] .character-info .character-voice-player-name{font-size:.25rem}.character-info .character-voice-player .character-voice-lang-switcher{width:.76rem;height:.3rem;background-color:#000;border-radius:.15rem;color:#e8e8e8;font-size:.16rem;position:relative;cursor:pointer;flex-shrink:0}.character-info .character-voice-player .character-voice-lang-switcher span{position:absolute;line-height:.24rem;top:.03rem}.character-info .character-voice-player .character-voice-lang-switcher__1 span{right:.1rem}.character-info .character-voice-player .character-voice-lang-switcher__1::after{left:.09rem}.character-info .character-voice-player .character-voice-lang-switcher__0 span{left:.1rem}.character-info .character-voice-player .character-voice-lang-switcher__0::after{left:.45rem}.character-info .character-voice-player .character-voice-lang-switcher::after{content:"";width:.2rem;height:.2rem;background-color:#e8e8e8;position:absolute;top:.045rem;border-radius:50%;transition:left .2s ease-in-out}.character-info-desc-container{height:1.44rem;margin-top:.65rem;color:#a6a6a6;font-size:.22rem;line-height:.4rem;position:relative;font-family:var(--mi18n-font-css)}.character-info-desc-container p{margin:0;line-height:.4rem !important}.character-info-desc-cover{width:6.31rem;height:.2rem;position:absolute;left:0;bottom:0;z-index:1;background-image:linear-gradient(to bottom, rgba(239, 239, 239, 0), rgb(239, 239, 239))}.character-info-desc{width:6.31rem}.character-info-desc p{margin:0}.character-pagination-container{height:.95rem;margin-top:.81rem}.character-pagination-container .character-pagination{display:flex;height:.89rem;padding-left:.38rem}.character-pagination-container .character-pagination .character-pagination-item{width:2.42rem;height:.89rem;flex-shrink:0;background-image:url(' +
          R +
          ");background-size:100% 100%;position:relative;display:flex;align-items:center;justify-content:center}.character-pagination-container .character-pagination .character-pagination-item .active-pagination-item-bg{width:100%;height:100%;position:absolute;left:0;top:0;opacity:0;background-size:100% 100%}.character-pagination-container .character-pagination .character-pagination-item img{width:2.11rem;height:.65rem;opacity:.4;transition:opacity .2s;position:relative}.character-pagination-container .character-pagination .character-pagination-item-active{background-image:none}.character-pagination-container .character-pagination .character-pagination-item-active .active-pagination-item-bg{opacity:1}.character-pagination-container .character-pagination .character-pagination-item-active img{opacity:1}.character-pagination-container .character-pagination .character-pagination-item:not(:first-child){margin-left:-0.16rem}.character-camp{max-width:3.2rem;padding:.04rem;position:absolute;right:.1rem;top:.45rem;background-image:linear-gradient(45deg, #B4BAFF 0%, #727CFF 100%);border-radius:.33rem;z-index:1}.character-camp-inner{padding:.05rem .3rem .05rem .7rem;min-height:.52rem;border:.04rem solid #000;border-radius:.3rem;background-image:url(" +
          j +
          ");background-size:cover;background-position:center;color:#fff;font-size:.18rem;display:flex;align-items:center;position:relative}.character-camp-inner *{font-size:.18rem !important}.character-camp i{width:.18rem;height:.18rem;background-image:url(" +
          T +
          ");background-size:100% 100%;position:absolute;right:.05rem;top:50%;margin-top:-0.09rem}.character-camp-icon{width:.95rem;height:.95rem;position:absolute;left:-0.16rem;bottom:-0.2rem}.character-camp-mist{width:3.9rem;height:4.36rem;position:absolute;top:-1.1rem;right:0;background-image:url(" +
          P +
          ");background-size:100% 100%}.character .character-camp-selection{position:fixed;width:100%;height:calc(100% - 1.1rem);left:0;top:1.1rem;z-index:100;overflow:hidden}.character .character-camp-selection-header{width:100%;height:1.13rem;position:absolute;left:0;top:0;background-image:url(" +
          L +
          ");background-size:100% 100%;opacity:0}.character .character-camp-selection-bg{width:100%;height:100%;background-color:#101010;position:absolute;left:0;top:0;opacity:0}.character .character-camp-selection-content{width:7.12rem;padding:.05rem;background-color:#0b0b0b;border:.05rem solid #2e2e2e;margin:.9rem auto 1.84rem;opacity:0}.character .character-camp-selection-content .character-camp-item{height:2.74rem;background-image:url(" +
          z +
          ');background-size:100% 100%;display:flex;align-items:center;justify-content:space-between;padding-left:.42rem;padding-right:.62rem;position:relative}.character .character-camp-selection-content .character-camp-item::after{content:"";width:100%;height:100%;position:absolute;top:0;left:0;border:.04rem solid #d8fa00;pointer-events:none;opacity:0}.character .character-camp-selection-content .character-camp-item:not(:last-child){margin-bottom:.1rem}.character .character-camp-selection-content .character-camp-item-active::after{opacity:1}.character .character-camp-selection-content .character-camp-item-icon{width:2.08rem;height:2.1rem;background-size:130% 130%;background-position:center 25%}.character .character-camp-selection-content .character-camp-item-name{width:3.17rem;min-height:.68rem;border:.04rem solid #363636;background-color:#191919;border-radius:.34rem;font-size:.24rem;line-height:1.2;color:#fff;padding:.1rem .25rem;display:flex;align-items:center;justify-content:center;text-align:center}[lang=zh-cn] .character .character-camp-selection-content .character-camp-item-name,[lang=zh-tw] .character .character-camp-selection-content .character-camp-item-name{font-size:.32rem}.character .character-camp-selection-content .character-camp-item-empty{pointer-events:none;padding-left:.22rem}.character .character-camp-selection-content .character-camp-item-empty .character-camp-item-icon{width:2.48rem;height:2.5rem;background-size:110% 110%}.character .character-camp-selection-content .character-camp-item-empty .character-camp-item-name{color:rgba(255,255,255,.12)}.character .character-camp-selection-cover-container{position:absolute;width:7.5rem;height:7.71rem;left:0;bottom:0;pointer-events:none}.character .character-camp-selection-cover{width:100%;height:100%;background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0, 0, 0))}.character .character-camp-selection-back{width:2.38rem;height:.78rem;border:.04rem solid #767678;border-radius:.39rem;color:#fff;background-color:#000;font-size:.28rem;position:absolute;bottom:.53rem;left:2.56rem;display:flex;align-items:center;padding:0 .45rem;opacity:0}.character .character-camp-selection-back i{display:block;width:.16rem;height:.23rem;background-image:url(' +
          F +
          ");background-size:100% 100%;flex-shrink:0;margin-left:.2rem}.character .character-camp-selection-back span{display:block;flex:1;text-align:center}.character .character-detail-links{display:none;font-size:.1rem}",
        "",
      ]),
        (e.exports = y));
    },
    1251: function (e, t, r) {
      e.exports = r.p + "img/character-bg-m.c254895.jpg";
    },
    1252: function (e, t, r) {
      e.exports = r.p + "img/m-chara-mist.1bb4584.png";
    },
    1253: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAByCAYAAAA713NyAAAAAXNSR0IArs4c6QAABNxJREFUeF7tnFtLJEcUx/+nvcAGwSfBB2FFFLz7oPg48xn8Bt4+hs9CQogggWCC1yVvyUMg5CGB2DCOo5FJcHSjoMb4EFlNHJOM7jq3PuHUTpvZTbR6vGzXQxUMDlPt1G/+9T+nqnv6DEWj0VUAT5g5h/s3BpAjoktmPgFwyMzbRJTKZrMn6+vrf+uGoGg0+hMzv0dEWd3BQfqZmYnIA1AAkAcg7/s7M8cBfJvP539NJBKvbnovikQi60T0RD5ZkAGDHvOaixxmdohIlBOIFwC+8Tzv61gsJs/l9TfaowH9D3iVwAHIENEPRDTnuu7PAETN6/YugfxBBUwgthzH+dh13R/LocIAEjBRiph5s1AofLi6uvrcn76wgBRUKQBWcrncB4lE4jd5MUwgGV+m76XjOM/S6fSzVCp1GTYQmLlG8pXjOBOu6z43AaiqlKu+uLy8/Cx0oFLoVTPzAYAJk4D+JKIZI4BK2VyWmO9NAZJlRrLArhFAJR+JuU+NASqFf8YYIAC1kiRNA3plgW7Z4MmUWYVu2wFbhXTnB1Yhq5BOAV2/9ZBVSKeArt96yCqkU0DXbz1kFdIpoOu3HrIKKQWKxaJ6MP97TZyIUF1dDceRi683tof3kOd5auC6ujrU1Milw9ctn88jk8ko0FugHhZIBhOIwcFBDA0NoaGhQakkAPv7+5iensbZ2Rlqa2tvkujhgARGlBkYGMDw8DCam5sh0yQPUW1tbQ1TU1NIp9OPDyQwVVVV6O/vVzAtLS0oFOSLICiFUqkU5ufncXAg1zTxuFPmw/T19SmYtrY25RO/bW9vY3Z2Fnt7e0qtRzW1DCyD9PT0YGxsDK2trW9E1s7ODubm5iB/A8DIZ7i7h8QX0rq7u5Uy7e3t1zAy+O7uLhYWFiAKaaap3OB3AxIY8UZHRwdGRkbQ2dl5/aYCIxElyoh35DjxV8BWOZAPI16Raerq6lLTIU0GFhgx8ObmpvJSBTCVT5nAyEO8Mjo6it7eXmVSX4XDw0MsLi4imUyqKKsQpjIgH0byi0yThLjA+Jn56OhIwWxsbNwVJjiQb+CmpiZlYMnEvjIyXcfHx1haWlLJT5aIOyjjWyyYh0T++vp6jI+PIxKJqOVBIAXq9PRUwcTjceRyufvABFdIBmpsbMTk5CSePn2KbDarjCygiUQCMzMzujUqYJAFzEPGKWSch0Rvo6LMN4BReagcShKhEZn6bSgj1rJyKGNWex/KqP1QOZQsFUbsGN+GMmJPXQ5lzFlHOZQx52Xl0WfMmWu5Usac2wfdZ9xwXLAN2j0HqeTfLZBOLauQVUingK7fesgqpFNA1289ZBXSKaDrtx6yCukU0PVbD1mFdAro+q2Hgihkzg3eJt4CXw3gxIg7zkvVeuaUURhXaAJAaoPMKcURIAAHzBx+sRIzq3IuIvry4uLi09BNLeFOREee503EYrGtsIFUSSARfX5+fr4YdkmgXzQZz+Vy74ddNKnubGLmLc/zPlpZWUmFWVYqEZVn5pTjOJ+EVnhbiia/NHnVcZzZ5eXlvXdWmuwXb0stbWl6rmStkuJtx3G+cl1Xnv+3ePsRytvla/Tr8nZmltrDP4goTkTfZTKZX5LJ5Mub9iJSb//QPwBQkB8AkPI+/wcAisXi5tXV1YtkMvmXblP0D6KefR4n30WOAAAAAElFTkSuQmCC";
    },
    1254: function (e, t, r) {
      e.exports = r.p + "img/camp-texture-m.36115d3.png";
    },
    1255: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAUJJREFUWEftmEtOxDAMhu10wfCQeg0QR4G5C5EYwaKurKYLxKbcheEoiHNUYhjYOJAK0ICgaTsdMULO1q7z60v9SBC2bOFQPUR0DAAniLj3PYb3/gkA7pxz933jDxWERHSBiJOWDZdFUVwDgO8japAgZp6IyGVsI2PMFTM/x/xW7SooRksJKaFVApplsf/h3xFCa21bK/gEkqbpjoicdSB0U9f1S8wv2KuqChXdN3Uoy7IjRJz+1Ci7BBvDJzTkJEnmjSAiOkfEgzECrxPDe//YCMrznNcJNOa3KihGUwl1JTQDgP2Y86btIfWbI2PmQxGZ/rGohTHm9suAZq3d7UJhQ5V6GfbWiTF2AkpICelM/V5I9W7fmgxb9/oRKjwRzdpm8NAonXPhfajXGlQYPy4GxpjTXxryQkTmZVk+9FLz5vwKr2X8MSRY6e4AAAAASUVORK5CYII=";
    },
    1256: function (e, t, r) {
      e.exports = r.p + "img/camp-mist.80b3f9e.png";
    },
    1257: function (e, t, r) {
      e.exports = r.p + "img/camp-selection-header-m.0e6a56c.png";
    },
    1258: function (e, t, r) {
      e.exports = r.p + "img/camp-item-bg-m.baa0d5e.png";
    },
    1259: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAuCAYAAABJcBuEAAAAAXNSR0IArs4c6QAAAqlJREFUWEfNmL+LE0EUx7/PJIIhZmaFBAmiFqIgNsKdgoocosJho8JZnQhio6WFIGinNmKpBiyEA61OQQUFG/EQf2vhf2ATOULcmSBRY9wnIxfZu8tls8/A3LY73/l+mHnz5s0jDOGz1o4z800AG1JOV6WUgkXDjTEjAGYArBLMFf0XQKPRWJfJZN4BWCswd5L3YoBarZbP5/MvAGwXmjcAjIoAmJmstfcBHBaa/2Lm/UEQzIgAjDFXAJwXmoOZTwZBcNvpUwNYa48z85TUHMBVrfW5rj4VQLPZ3BVF0TMAKyUARPSwWCweJaLfqQHCMNxIRG8BlCTmAD612+3d5XL5W1w/0ArU6/XVuVzuJYBtQvNZZt4ZBMHnhfpEAGbOGGMeENEhoflPIhpTSr3upU8EsNZeY+azQnMQ0aRS6s5S+r4AxphTAG5JzZn5UhAEF/vplwQIw3CMiJ4CyAkBppVSx4iIUwNYazcx8xsAa4TmH1qt1t5KpdJK0i9agTAMNRG5gNmSJO71n5m/dDqdkVKpVBtEPw/ARby19gmAA4OIe4z5DmCP1vrjoPp5AMaYGwBODyruMW5Caz2dRv8PwFp7hpmvpxEvGHtBa305rf4vgDHmIAC39CvSTjA3/q5SajIp4nsmomazuTmKIpfjldD8lVJqHxH9kOjJGPMYwLhEDOBrNpvdWigUZoV6OIC2NNkQ0ZRS6oTU3OmWBYDfLfAehLFj6FYiI9xP+THsGnpNRF0Ir6nYQXi/jByE1+s4Fg/+CpIuxBBKsntKqYmkC2r5FqWx7fBXlndPhteHiYPw+jSLBaW/x2kXYgjP80fFYvGI6HkeC0p/DYrYneGvRTN3Mvw2qRzEkNp0OxL7A/0KFK+NylhQjjLzcy+t2hiEa1ZXAaxPWdJV/wAmRWq/9EOFyAAAAABJRU5ErkJggg==";
    },
    1423: function (e, t, r) {
      "use strict";
      r.r(t);
      (r(85), r(84), r(67), r(105), r(106));
      var c = r(56);
      r(65);
      function n(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, r));
        }
        return t;
      }
      function o(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? n(Object(source), !0).forEach(function (t) {
                Object(c.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source))
              : n(Object(source)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t));
                });
        }
        return e;
      }
      var h = r(32),
        l = r(71),
        m = (r(98), r(138), r(119), r(118), r(136), r(77), r(137), r(1143), r(156), r(1187)),
        d = r.n(m),
        v = r(1149),
        f = r(1154);
      function A(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          (e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, r));
        }
        return t;
      }
      function C(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? A(Object(source), !0).forEach(function (t) {
                Object(c.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source))
              : A(Object(source)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t));
                });
        }
        return e;
      }
      var w = {
          layout: "m/default",
          name: "m-cha",
          scrollToTop: !0,
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
          components: { pageTab: v.a, VueScroll: d.a },
          data: function () {
            return {
              cvIdx: 0,
              subCvIdx: 0,
              shadowOpacity: 1,
              showCampSelection: !1,
              audioInstance: null,
              micTween: null,
              descShadowOpacity: 1,
              showLeftArrow: !1,
              showRightArrow: !1,
              isPlaying: !1,
              scrollOpts: {
                scrollPanel: { scrollingX: !1, scrollingY: !0 },
                rail: { size: "0.05rem", background: "#DEDEDE", opacity: 1 },
                bar: { keepShow: !0, size: "0.05rem", background: "#C0C0C0" },
              },
              chaScrollOpts: {
                scrollPanel: { scrollingX: !0, scrollingY: !1 },
                rail: { opacity: 0 },
                bar: { opacity: 0 },
              },
              campScrollOpts: {
                scrollPanel: { scrollingX: !1, scrollingY: !0 },
                rail: { opacity: 0 },
                bar: { opacity: 0 },
              },
            };
          },
          computed: {
            activeCamp: function () {
              return this.campList[this.activeIndex];
            },
            chaList: function () {
              var e,
                t = this.activeCamp.channelId;
              return (
                (null === (e = this.characterList) || void 0 === e
                  ? void 0
                  : e.filter(function (e) {
                      return e.sChanId.includes("".concat(t));
                    })) || []
              );
            },
            curActiveCha: function () {
              return (this.chaList.length && this.chaList[this.curActiveChaIdx]) || {};
            },
            lang: function () {
              return this.$store.state.lang;
            },
          },
          watch: {
            curActiveCha: {
              handler: function (e) {
                var t = this;
                if ((this.updateAudioIns(e), this.$refs.chaScrollRef)) {
                  var r = 2.42 * this.curActiveChaIdx - 0.38 - 0.16 * Math.max(0, this.curActiveChaIdx - 1),
                    c = this.$flex("rem");
                  this.$refs.chaScrollRef.scrollTo({ x: r * c });
                }
                (this.$refs.chaSwiperRef && this.$refs.chaSwiperRef.swiper.slideTo(this.curActiveChaIdx),
                  (this.subCvIdx = 0),
                  "".concat(this.$route.query.id) !== "".concat(e.iInfoId) &&
                    this.$router.replace({ query: C(C({}, this.$route.query), {}, { id: e.iInfoId }) }),
                  this.$nextTick(function () {
                    var e;
                    null !== (e = t.$refs.descScroll) &&
                      void 0 !== e &&
                      e[t.curActiveChaIdx] &&
                      (t.$refs.descScroll[t.curActiveChaIdx].refresh(),
                      t.$refs.descScroll[t.curActiveChaIdx].scrollTo({ y: 0 }, 0));
                  }));
              },
              immediate: !0,
            },
          },
          asyncData: function (e) {
            e.res;
            var t = e.redirect,
              r = e.store,
              c = e.query.id;
            return Promise.all([
              f.a.getCampList({ data: { sLangKey: r.state.lang } }),
              f.a.getAllCharacter({ data: { sLangKey: r.state.lang } }),
            ]).then(function (e) {
              var n = Object(l.a)(e, 2),
                o = n[0],
                h = n[1];
              (h.list.length < 1 && t({ name: "m" }), r.commit("setCharacterCamps", o));
              var m = h.list,
                d = m.findIndex(function (e) {
                  return e.iInfoId === +c;
                }),
                v = -1 === d ? 0 : d,
                f = o.findIndex(function (e) {
                  var t = e.channelId;
                  return m[v].sChanId.includes("".concat(t));
                }),
                A = -1 === f ? 0 : f,
                C = o[A],
                w = (
                  (null == m
                    ? void 0
                    : m.filter(function (e) {
                        return e.sChanId.includes("".concat(C.channelId));
                      })) || []
                ).findIndex(function (e) {
                  return e.iInfoId === +c;
                }),
                x = -1 === w ? 0 : w,
                I = { effect: "fade", initialSlide: x, fadeEffect: { crossFade: !0 } };
              return {
                campList: o.concat({ isEmpty: !0 }),
                characterList: h.list,
                activeIndex: A,
                curActiveChaIdx: x,
                chaSwiperOpts: I,
              };
            });
          },
          mounted: function () {
            var e = this,
              t = this.chaList.findIndex(function (t) {
                return t.iInfoId === +e.$route.query.id;
              });
            this.curActiveChaIdx = -1 === t ? 0 : t;
          },
          methods: {
            handleSwitchClick: function (e) {
              var t = this.curActiveChaIdx + e;
              t < 0 || t >= this.chaList.length || (this.curActiveChaIdx = t);
            },
            updateAudioIns: function (e) {
              var t = this;
              return Object(h.a)(
                regeneratorRuntime.mark(function c() {
                  var n, o, h, l, m;
                  return regeneratorRuntime.wrap(function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          if (((n = (e || {}).cv), (o = void 0 === n ? [] : n).length)) {
                            c.next = 3;
                            break;
                          }
                          return c.abrupt("return");
                        case 3:
                          if (
                            (o.length <= 1 && (t.cvIdx = 0),
                            (h = r(354)),
                            (l = h.eventAudio),
                            !t.audioInstance)
                          ) {
                            c.next = 10;
                            break;
                          }
                          return ((c.next = 8), t.audioInstance.stop());
                        case 8:
                          (t.audioInstance.unload(), (t.audioInstance = null));
                        case 10:
                          ((m = o
                            .map(function (e) {
                              return e.audio;
                            })
                            .flat()),
                            (t.audioInstance = new l({
                              src: m,
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
                        case 12:
                        case "end":
                          return c.stop();
                      }
                  }, c);
                }),
              )();
            },
            switchSubCv: function () {
              var e = this.curActiveCha.cv[this.cvIdx].audio.length;
              this.subCvIdx < e - 1 ? (this.subCvIdx += 1) : (this.subCvIdx = 0);
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
              return Object(h.a)(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!e.audioInstance) {
                            t.next = 3;
                            break;
                          }
                          return ((t.next = 3), e.audioInstance.stop());
                        case 3:
                          e.cvIdx = 0 === e.cvIdx ? 1 : 0;
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              )();
            },
            handleDescScroll: function (e) {
              this.descShadowOpacity = (1 - Math.max(0, e.process - 0.9) / 0.1).toFixed(2);
            },
            handlePaginationItemClick: function (e) {
              this.curActiveChaIdx = e;
            },
            toggleCampSelection: function () {
              var e = this;
              if (
                ((this.showCampSelection = !this.showCampSelection),
                this.$trackButton(this.showCampSelection ? "view_all_camp" : "all_camp_back", ""),
                (document.body.style.overflow = this.showCampSelection ? "hidden" : "auto"),
                this.showCampSelection)
              ) {
                var t = this.$gsap.timeline();
                (t.fromTo(
                  ".character-camp-selection-header",
                  { opacity: 0, y: "-100%" },
                  { opacity: 1, y: "0", duration: 0.3, ease: "power2.inOut" },
                ),
                  t.fromTo(
                    ".character-camp-selection-bg",
                    { opacity: 0, y: "-100%" },
                    { opacity: 1, y: "0", duration: 0.3, ease: "power2.out" },
                    "-=0.05",
                  ),
                  t.fromTo(
                    ".character-camp-selection-content",
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
                    [".character-camp-selection-cover-container", ".character-camp-selection-back"],
                    { opacity: 0 },
                    { opacity: 1, duration: 0.3, ease: "power2.inOut" },
                    "<",
                  ));
              }
            },
            handleCampItemClick: function (e) {
              (this.activeIndex !== e && ((this.activeIndex = e), (this.curActiveChaIdx = 0)),
                this.$trackButton("camp_change", this.campList[this.activeIndex].iInfoId, { type: 2 }),
                (this.showCampSelection = !1),
                (document.body.style.overflow = "auto"));
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
            onChaSwiperChange: function () {
              this.curActiveChaIdx = this.$refs.chaSwiperRef.swiper.activeIndex;
            },
          },
        },
        x = (r(1249), r(36)),
        component = Object(x.a)(
          w,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              { staticClass: "character" },
              [
                t("pageTab", { attrs: { "nav-num": 2, theme: e.curActiveCha.themeColor } }),
                e._v(" "),
                t("div", {
                  staticClass: "character-block",
                  style: { background: e.curActiveCha.themeColor },
                }),
                e._v(" "),
                t(
                  "swiper",
                  {
                    ref: "chaSwiperRef",
                    staticClass: "character-swiper",
                    attrs: { options: e.chaSwiperOpts },
                    on: { slideChange: e.onChaSwiperChange },
                  },
                  e._l(e.chaList, function (r) {
                    return t("swiper-slide", { key: r.iInfoId, staticClass: "character-swiper-slide" }, [
                      t("img", {
                        key: r.iInfoId,
                        staticClass: "character-cover",
                        attrs: { src: r.newCoverInnerM },
                      }),
                      e._v(" "),
                      t("div", { staticClass: "character-cover-mist" }),
                      e._v(" "),
                      t("div", { staticClass: "character-info" }, [
                        t("div", { staticClass: "character-info-prop" }, [
                          r.propIcon1 ? t("img", { attrs: { src: r.propIcon1, alt: "" } }) : e._e(),
                          e._v(" "),
                          r.propIcon2 ? t("img", { attrs: { src: r.propIcon2, alt: "" } }) : e._e(),
                        ]),
                        e._v(" "),
                        t("div", { staticClass: "character-info-name" }, [
                          r.levelIcon
                            ? t("i", { style: { backgroundImage: "url(".concat(r.levelIcon, ")") } })
                            : e._e(),
                          e._v(" "),
                          t("span", [e._v(e._s(r.name))]),
                        ]),
                        e._v(" "),
                        r.cv.length
                          ? t("div", { staticClass: "character-voice-player" }, [
                              t(
                                "div",
                                { staticClass: "character-voice-btn", on: { click: e.handleVoiceBtnClick } },
                                [
                                  t("div", { staticClass: "character-voice-btn-inner" }, [
                                    t("div", { staticClass: "character-voice-btn-inner-highlight" }),
                                  ]),
                                ],
                              ),
                              e._v(" "),
                              t("span", { staticClass: "character-voice-player-name" }, [
                                t("span", [e._v("CV: ")]),
                                e._v(" "),
                                t("span", { staticClass: "character-voice-player-name-text" }, [
                                  e._v(e._s(r.cv[e.cvIdx].name)),
                                ]),
                              ]),
                              e._v(" "),
                              r.cv.length > 1
                                ? t(
                                    "div",
                                    {
                                      staticClass: "character-voice-lang-switcher",
                                      class: "character-voice-lang-switcher__".concat(e.cvIdx),
                                      on: { click: e.handleLangSwitcherClick },
                                    },
                                    [t("span", [e._v(e._s(r.cv[e.cvIdx].lang))])],
                                  )
                                : e._e(),
                            ])
                          : e._e(),
                        e._v(" "),
                        t(
                          "div",
                          { staticClass: "character-info-desc-container" },
                          [
                            t(
                              "vue-scroll",
                              {
                                ref: "descScroll",
                                refInFor: !0,
                                attrs: { ops: e.scrollOpts },
                                on: { "handle-scroll": e.handleDescScroll },
                              },
                              [
                                t("div", {
                                  staticClass: "character-info-desc",
                                  domProps: { innerHTML: e._s(r.intro) },
                                }),
                              ],
                            ),
                            e._v(" "),
                            t("div", {
                              staticClass: "character-info-desc-cover",
                              style: { opacity: e.descShadowOpacity },
                            }),
                          ],
                          1,
                        ),
                      ]),
                    ]);
                  }),
                  1,
                ),
                e._v(" "),
                t("transition", { attrs: { name: "fadeIn" } }, [
                  t("div", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.curActiveChaIdx > 0,
                        expression: "curActiveChaIdx > 0",
                      },
                    ],
                    staticClass: "switch-button switch-button-prev",
                    on: {
                      click: function (t) {
                        return e.handleSwitchClick(-1);
                      },
                    },
                  }),
                ]),
                e._v(" "),
                t("transition", { attrs: { name: "fadeIn" } }, [
                  t("div", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.curActiveChaIdx < e.chaList.length - 1,
                        expression: "curActiveChaIdx < chaList.length - 1",
                      },
                    ],
                    staticClass: "switch-button switch-button-next",
                    on: {
                      click: function (t) {
                        return e.handleSwitchClick(1);
                      },
                    },
                  }),
                ]),
                e._v(" "),
                t(
                  "div",
                  { staticClass: "character-pagination-container" },
                  [
                    t("vue-scroll", { ref: "chaScrollRef", attrs: { ops: e.chaScrollOpts } }, [
                      t(
                        "div",
                        {
                          staticClass: "character-pagination",
                          style: { width: "".concat(2.42 * e.chaList.length, "rem") },
                        },
                        e._l(e.chaList, function (r, c) {
                          return t(
                            "div",
                            {
                              key: r.iInfoId,
                              staticClass: "character-pagination-item",
                              class: { "character-pagination-item-active": c === e.curActiveChaIdx },
                              on: {
                                click: function (t) {
                                  return e.handlePaginationItemClick(c);
                                },
                              },
                            },
                            [
                              t("div", {
                                staticClass: "active-pagination-item-bg",
                                style: { backgroundImage: "url(".concat(r.paginationItemBg, ")") },
                              }),
                              e._v(" "),
                              t("img", { attrs: { src: r.newNav, alt: "" } }),
                            ],
                          );
                        }),
                        0,
                      ),
                    ]),
                  ],
                  1,
                ),
                e._v(" "),
                t("div", { staticClass: "character-camp-mist" }),
                e._v(" "),
                t(
                  "div",
                  {
                    key: e.activeCamp.iInfoId,
                    staticClass: "character-camp",
                    style: {
                      backgroundImage: "linear-gradient(45deg, "
                        .concat(e.activeCamp.gradientColorMob[0], " 0%, ")
                        .concat(e.activeCamp.gradientColorMob[1], " 100%)"),
                    },
                    on: { click: e.toggleCampSelection },
                  },
                  [
                    t("div", { staticClass: "character-camp-inner" }, [
                      t("img", {
                        staticClass: "character-camp-icon",
                        attrs: { src: e.activeCamp.newIcon, alt: "" },
                      }),
                      e._v(" "),
                      t("span", { domProps: { innerHTML: e._s(e.activeCamp.name) } }),
                      e._v(" "),
                      t("i"),
                    ]),
                  ],
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
                    t(
                      "div",
                      { staticClass: "character-camp-selection-bg" },
                      [
                        t("vue-scroll", { ref: "campScroll", attrs: { ops: e.campScrollOpts } }, [
                          t(
                            "div",
                            { staticClass: "character-camp-selection-content" },
                            e._l(e.campList, function (c, n) {
                              return t(
                                "div",
                                {
                                  key: c.iInfoId,
                                  staticClass: "character-camp-item",
                                  class: { "character-camp-item-empty": c.isEmpty },
                                  on: {
                                    click: function (t) {
                                      return e.handleCampItemClick(n);
                                    },
                                  },
                                },
                                [
                                  t("div", {
                                    staticClass: "character-camp-item-icon",
                                    style: {
                                      backgroundImage: "url(".concat(c.isEmpty ? r(1179) : c.newIcon, ")"),
                                    },
                                  }),
                                  e._v(" "),
                                  t("div", {
                                    staticClass: "character-camp-item-name",
                                    domProps: { innerHTML: e._s(c.name || "EMPTY") },
                                  }),
                                ],
                              );
                            }),
                            0,
                          ),
                        ]),
                      ],
                      1,
                    ),
                    e._v(" "),
                    e._m(0),
                    e._v(" "),
                    t("div", { staticClass: "character-camp-selection-header" }),
                    e._v(" "),
                    t(
                      "div",
                      { staticClass: "character-camp-selection-back", on: { click: e.toggleCampSelection } },
                      [t("span", [e._v(e._s(e.$getI18nWord("textBack")))]), e._v(" "), t("i")],
                    ),
                  ],
                ),
                e._v(" "),
                t(
                  "div",
                  { staticClass: "character-detail-links" },
                  e._l(e.characterList, function (r) {
                    return t(
                      "nuxt-link",
                      {
                        key: r.iInfoId,
                        staticClass: "character-detail-link",
                        attrs: {
                          to: {
                            name: "m-lang-character",
                            query: o(o({}, e.$router.query), {}, { id: r.iInfoId }),
                          },
                          "no-prefetch": "",
                        },
                      },
                      [
                        e._v(
                          "\n      " +
                            e._s("".concat(r.sTitle).concat(e.$getI18nWord("seoTitlePrefix"))) +
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
              return e("div", { staticClass: "character-camp-selection-cover-container" }, [
                e("div", { staticClass: "character-camp-selection-cover" }),
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
