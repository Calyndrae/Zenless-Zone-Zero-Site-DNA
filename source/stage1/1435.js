// page:m-lang-news-public — module 1435 from 75ab81f
// module 1435 from 75ab81f.js
// deps: 32, 98, 28, 1124, 1320, 36
const module_1435 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    o_1 = (webpackRequire(98), webpackRequire(28)),
    newsCMSAPI = webpackRequire(1124),
    c_2 = {
      layout: "m/default",
      data: function () {
        return {
          frameHeight: 200,
        };
      },
      head: function () {
        return {
          title: this.newsContent.title,
        };
      },
      computed: {
        fromGame: function () {
          return this.$route.query.nolandscape && this.$route.query.fromGame;
        },
        gachaUrl: function () {
          return "".concat(o_1.gachaUrl, "?lang=").concat(this.$store.state.lang);
        },
      },
      asyncData: function (t_5) {
        return Object(vendorBundle.a)(
          regeneratorRuntime.mark(function e_6() {
            var n_7, r_8, c_9;
            return regeneratorRuntime.wrap(
              function (e_10) {
                for (;;)
                  switch ((e_10.prev = e_10.next)) {
                    case 0:
                      return (
                        (n_7 = t_5.redirect),
                        (r_8 = t_5.store),
                        t_5.res,
                        (e_10.prev = 1),
                        (e_10.next = 4),
                        newsCMSAPI.a.getDetail({
                          data: {
                            iInfoId: o_1.GACHA_ID,
                            iChanId: o_1.CHANNEL_ID_CONFIG.NEWS.ALL,
                            sLangKey: r_8.state.lang,
                          },
                        })
                      );
                    case 4:
                      ((c_9 = e_10.sent), (e_10.next = 11));
                      break;
                    case 7:
                      ((e_10.prev = 7),
                        (e_10.t0 = e_10.catch(1)),
                        n_7({
                          name: "m-lang-news",
                        }));
                    case 11:
                      return e_10.abrupt("return", {
                        newsContent: c_9,
                      });
                    case 12:
                    case "end":
                      return e_10.stop();
                  }
              },
              e_6,
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
          this.$trackButton("news_back", o_1.GACHA_ID);
        },
        getFrameHeight: function () {
          var t_11 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            e_12 = t_11 ? "addEventListener" : "removeEventListener";
          window[e_12]("message", this.handleFrameMsg);
        },
        handleFrameMsg: function (t_13) {
          var e_14 = t_13.data || {},
            data = e_14.data,
            n_15 = e_14.type;
          "number" == typeof data &&
            "sendHeight" === (void 0 === n_15 ? "" : n_15) &&
            (this.frameHeight = data);
        },
      },
    },
    d_3 = c_2,
    f_4 = (webpackRequire(1320), webpackRequire(36)),
    component = Object(f_4.a)(
      d_3,
      function () {
        var t_16 = this,
          e_17 = t_16._self._c;
        return e_17(
          "div",
          {
            staticClass: "m-news-detail",
            class: {
              fromGame: t_16.fromGame,
            },
          },
          [
            e_17(
              "div",
              {
                staticClass: "m-news-detail-container",
              },
              [
                e_17(
                  "article",
                  {
                    staticClass: "m-news-detail__article",
                  },
                  [
                    e_17(
                      "div",
                      {
                        staticClass: "m-news-detail__title",
                      },
                      [t_16._v("\n        " + t_16._s(t_16.newsContent.title) + "\n      ")],
                    ),
                    t_16._v(" "),
                    e_17("client-only", [
                      e_17("iframe", {
                        style: {
                          height: "".concat(t_16.frameHeight + 50, "px"),
                        },
                        attrs: {
                          src: t_16.gachaUrl,
                        },
                      }),
                    ]),
                  ],
                  1,
                ),
                t_16._v(" "),
                e_17(
                  "nuxt-link",
                  {
                    staticClass: "m-news-detail__foot",
                    attrs: {
                      to: {
                        name: "m-lang-news",
                      },
                    },
                    nativeOn: {
                      click: function (e_18) {
                        return t_16.handleBackUpload.apply(null, arguments);
                      },
                    },
                  },
                  [
                    e_17(
                      "div",
                      {
                        staticClass: "m-news-detail__back",
                      },
                      [t_16._v(t_16._s(t_16.$getI18nWord("textBack")))],
                    ),
                  ],
                ),
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
