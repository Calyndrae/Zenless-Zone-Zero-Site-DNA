// mobile nuxt layout — module 551 from 8c4c131
// module 551 from 8c4c131.js
// deps: 224, 28, 1, 250, 349, 203, 701, 702, 36
const module_551 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire(224);
  var siteConfigConstants = webpackRequire(28),
    Vue = webpackRequire(1),
    loadingScreenComponent = webpackRequire(250),
    mHeaderBar = webpackRequire(349),
    m_1 = {
      components: {
        footerBar: webpackRequire(203).a,
        headerBar: mHeaderBar.a,
        loading: loadingScreenComponent.a,
      },
      data: function () {
        return {
          landscapeTipOpts: {
            mode: "portrait",
            txt: this.$getI18nWord("landscapeTip"),
            pic: webpackRequire(701),
          },
        };
      },
      computed: {
        lang: function () {
          return this.$store.state.lang;
        },
        isLoading: function () {
          return this.$store.state.isLoading;
        },
        downloadIns: function () {
          return this.$store.state.downloadIns;
        },
      },
      head: function () {
        return {
          title: this.$getI18nWord("seoTitle"),
          htmlAttrs: {
            lang: this.lang,
          },
          meta: [
            {
              hid: "description",
              name: "description",
              content: this.$getI18nWord("seoDesc"),
            },
            {
              hid: "Keywords",
              name: "Keywords",
              content: this.$getI18nWord("seoKeywords"),
            },
            {
              hid: "og:title",
              name: "og:title",
              content: this.$getI18nWord("seoTitle"),
            },
            {
              hid: "og:description",
              name: "og:description",
              content: this.$getI18nWord("seoDesc"),
            },
            {
              hid: "og:image",
              name: "og:image",
              content: this.$getI18nWord("ogImage"),
            },
            {
              name: "twitter:card",
              content: "summary",
            },
            {
              hid: "twitter:title",
              name: "twitter:title",
              content: this.$getI18nWord("seoTitle"),
            },
            {
              hid: "twitter:description",
              name: "twitter:description",
              content: this.$getI18nWord("seoDesc"),
            },
            {
              hid: "twitter:image",
              name: "twitter:image",
              content: "https://zenless.hoyoverse.com/favicon.ico",
            },
          ],
        };
      },
      mounted: function () {
        ((navigator.userAgent.match(/MSIE 10/i) ||
          navigator.userAgent.match(/Trident\/7\./) ||
          navigator.userAgent.match(/Edge\/12\./)) &&
          $("body").on("mousewheel", function (t_3) {
            t_3.preventDefault();
            var e_4 = t_3.wheelDelta,
              n_5 = window.pageYOffset;
            window.scrollTo(0, n_5 - e_4);
          }),
          this.$route.query.nolandscape ||
            this.$flex("samsungTablet") ||
            this.$landscapeTip.init(this.landscapeTipOpts),
          this.initDownloadIns());
      },
      methods: {
        initDownloadIns: function () {
          if (!this.downloadIns) {
            var t_6 = new (0, window.MeSeaDownload.DownloadCore)({
              lang: this.lang,
              gameBiz: "nap_global",
              type: "fab",
              useOnlineConfig: !0,
              environment: siteConfigConstants.environment,
              source: "262",
            });
            Vue.default.prototype.$downloadIns = t_6;
          }
        },
      },
    },
    d_2 = (webpackRequire(702), webpackRequire(36)),
    component = Object(d_2.a)(
      m_1,
      function () {
        var t_7 = this,
          e_8 = t_7._self._c;
        return e_8(
          "div",
          {
            staticClass: "root",
          },
          [
            e_8("loading", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t_7.isLoading,
                  expression: "isLoading",
                },
              ],
            }),
            t_7._v(" "),
            [e_8("header-bar"), t_7._v(" "), e_8("nuxt"), t_7._v(" "), e_8("footer-bar")],
          ],
          2,
        );
      },
      [],
      !1,
      null,
      null,
      null,
    );
  webpackExports.a = component.exports;
};
