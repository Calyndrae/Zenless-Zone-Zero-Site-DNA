// desktop nuxt layout — module 549 from 8c4c131
// module 549 from 8c4c131.js
// deps: 224, 250, 348, 203, 684, 36
const module_549 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire(224);
  var loadingScreenComponent = webpackRequire(250),
    headerBar = webpackRequire(348),
    footerBar = webpackRequire(203),
    A_1 = {
      components: {
        headerBar: headerBar.a,
        footerBar: footerBar.a,
        loading: loadingScreenComponent.a,
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
      computed: {
        lang: function () {
          return this.$store.state.lang;
        },
        isLoading: function () {
          return this.$store.state.isLoading;
        },
      },
      mounted: function () {
        (navigator.userAgent.match(/MSIE 10/i) ||
          navigator.userAgent.match(/Trident\/7\./) ||
          navigator.userAgent.match(/Edge\/12\./)) &&
          $("body").on("mousewheel", function (t_3) {
            t_3.preventDefault();
            var e_4 = t_3.wheelDelta,
              n_5 = window.pageYOffset;
            window.scrollTo(0, n_5 - e_4);
          });
      },
    },
    m_2 = (webpackRequire(684), webpackRequire(36)),
    component = Object(m_2.a)(
      A_1,
      function () {
        var t_6 = this,
          e_7 = t_6._self._c;
        return e_7(
          "div",
          {
            staticClass: "root",
          },
          [
            e_7("loading", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t_6.isLoading,
                  expression: "isLoading",
                },
              ],
            }),
            t_6._v(" "),
            [e_7("header-bar"), t_6._v(" "), e_7("nuxt"), t_6._v(" "), e_7("footer-bar")],
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
