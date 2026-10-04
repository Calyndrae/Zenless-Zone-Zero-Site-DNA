// footer-bar — module 203 from 8c4c131
// module 203 from 8c4c131.js
// deps: 65, 204, 402, 138, 28, 103, 347, 49, 680, 682, 36, 411, 412
const module_203 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(65), webpackRequire(204), webpackRequire(402), webpackRequire(138));
  var siteConfigConstants = webpackRequire(28),
    babelHelpers = webpackRequire(103),
    backTop = webpackRequire(347),
    siteConstants = webpackRequire(49),
    m_1 = {
      name: "footer-bar",
      components: {
        backTop: backTop.a,
      },
      data: function () {
        return {
          i18nKey: "m20231213hy4784y0w0",
          popoverOpts: {
            position: "top",
            arrowPos: "right",
            platsCn: ["shareQQZone", "shareQQ", "shareWeibo", "link"],
            platsSea: ["facebook", "twitter", "link"],
          },
        };
      },
      computed: {
        platform: function () {
          return this.isMobile ? "mobile" : "pc";
        },
        env: function () {
          return "development" === siteConfigConstants.environment ? "test" : siteConfigConstants.environment;
        },
        isMobile: function () {
          return this.$isMob;
        },
        mediaConfig: function () {
          return this.$store.getters.mediaConfig;
        },
      },
      mounted: function () {
        var t_3 = this;
        this.initFooter({
          target: "#footer",
          props: {
            biz: "nap_global",
            locale: this.$store.state.lang,
            locales: siteConstants.d,
            showSelector: !this.$isBBS,
          },
          onChange: function (e_4, footer) {
            (console.log("route", t_3.$route.fullPath, e_4),
              footer.collapse(),
              Object(babelHelpers.setLang)(e_4),
              t_3.$store.commit("setLang", e_4));
            var n_5 = t_3.$route.fullPath,
              o_6 = t_3.$route.params.lang;
            n_5.split("/").shift();
            var r_7 = new RegExp("/" + o_6, "i");
            ((n_5 = n_5.replace(r_7, "/".concat(e_4))), (window.location.href = n_5));
          },
        });
      },
      methods: {
        initFooter: function (t_8) {
          window.HYVFooter
            ? window.HYVFooter.init(t_8)
            : (window.HYVFooter = {
                config: t_8,
              });
        },
        handleShare: function (t_9) {
          var e_10 = this;
          (this.$trackButton("go_media", "share"),
            "link" === t_9 &&
              this.$clipboard({
                text: this.$getI18nWord("shareCopyText"),
                onSuccess: function () {
                  e_10.$mtoast(e_10.$getI18nWord("copySuccess"));
                },
              }));
        },
        getShareConfig: function () {
          return {
            key: "m03111446031031",
            lang: this.$store.state.lang,
            game_biz: "nap_global",
            title_key: "seoTitle",
            desc_key: "seoDesc",
            img_key: "share_img",
            url: window.location.href,
          };
        },
        onShared: function () {},
        handleFollow: function (t_11) {
          this.$trackButton("go_media", t_11);
        },
      },
    },
    d_2 = (webpackRequire(680), webpackRequire(682), webpackRequire(36)),
    component = Object(d_2.a)(
      m_1,
      function () {
        var t_12 = this,
          e_13 = t_12._self._c;
        return e_13(
          "div",
          {
            staticClass: "footer",
            class: {
              mob: t_12.isMobile,
            },
          },
          [
            e_13(
              "div",
              {
                staticClass: "footer__wrap",
              },
              [
                "lang-main" === t_12.$route.name ||
                "m-lang-main" === t_12.$route.name ||
                "lang-news" === t_12.$route.name
                  ? e_13("backTop")
                  : t_12._e(),
                t_12._v(" "),
                e_13("client-only", [
                  e_13(
                    "div",
                    {
                      class: ["footer__socialbar", t_12.isMobile && "mob"],
                    },
                    [
                      e_13(
                        "media-icon",
                        t_12._b(
                          {
                            on: {
                              "click-media": t_12.handleFollow,
                            },
                          },
                          "media-icon",
                          t_12.mediaConfig,
                          !1,
                        ),
                      ),
                      t_12._v(" "),
                      e_13("hover-btn", {
                        staticClass: "copy-btn",
                        attrs: {
                          img: webpackRequire(411),
                          "img-hover": webpackRequire(412),
                        },
                        on: {
                          click: function (e_14) {
                            return t_12.handleShare("link");
                          },
                        },
                      }),
                    ],
                    1,
                  ),
                ]),
              ],
              1,
            ),
            t_12._v(" "),
            e_13("client-only", [
              e_13(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !t_12.$store.state.isEnIp,
                      expression: "!$store.state.isEnIp",
                    },
                  ],
                  staticClass: "footer-crm",
                },
                [
                  e_13("crm-sub", {
                    attrs: {
                      "is-modal": !1,
                      lang: t_12.$store.state.lang,
                      env: t_12.env,
                      "i18n-key": t_12.i18nKey,
                      platform: t_12.platform,
                      biz: "nap_global",
                      source: "262",
                      "event-key": "nap_official_crm",
                    },
                  }),
                ],
                1,
              ),
            ]),
            t_12._v(" "),
            e_13("div", {
              attrs: {
                id: "footer",
              },
            }),
          ],
          1,
        );
      },
      [],
      !1,
      null,
      "2b67f5b0",
      null,
    );
  webpackExports.a = component.exports;
};
