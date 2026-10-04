/**
 * description — readable reconstruction of webpack module 551 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Mobile Nuxt layout component. It registers `footerBar`, the mobile `headerBar` (m-header-bar) and `loading`, renders `.root` with the `loading` screen (shown while `$store.state.isLoading`), `header-bar`, `<nuxt>` and `footer-bar`, and sets the same SEO `head()` metadata as the desktop layout (`seoTitle`, `seoDesc`, `seoKeywords`, `ogImage`, html `lang`). On mount it adds the IE/Edge `mousewheel` scroll workaround, initializes `$landscapeTip` with a portrait-mode tip (`landscapeTip` text) unless the `nolandscape` query or `$flex('samsungTablet')` is set, and creates a shared `window.MeSeaDownload.DownloadCore` instance (gameBiz `nap_global`, type `fab`, source `262`) on `Vue.prototype.$downloadIns` if `$store.state.downloadIns` is not set.
 *
 * Exports (minified key → meaning):
 *   a → the mobile layout Vue component (normalized component exports)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 551 from 8c4c131.js
// deps: 224, 28, 1, 250, 349, 203, 701, 702, 36
const module_551 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire(224);
  var siteConfigConstants = webpackRequire(28),
    Vue = webpackRequire(1),
    loadingScreenComponent = webpackRequire(250),
    mHeaderBar = webpackRequire(349),
    mobileLayoutOptions = {
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
          $("body").on("mousewheel", function (wheelEvent) {
            wheelEvent.preventDefault();
            var wheelDelta = wheelEvent.wheelDelta,
              pageYOffset = window.pageYOffset;
            window.scrollTo(0, pageYOffset - wheelDelta);
          }),
          this.$route.query.nolandscape ||
            this.$flex("samsungTablet") ||
            this.$landscapeTip.init(this.landscapeTipOpts),
          this.initDownloadIns());
      },
      methods: {
        initDownloadIns: function () {
          if (!this.downloadIns) {
            var downloadIns = new (0, window.MeSeaDownload.DownloadCore)({
              lang: this.lang,
              gameBiz: "nap_global",
              type: "fab",
              useOnlineConfig: !0,
              environment: siteConfigConstants.environment,
              source: "262",
            });
            Vue.default.prototype.$downloadIns = downloadIns;
          }
        },
      },
    },
    componentNormalizer = (webpackRequire(702), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      mobileLayoutOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "root",
          },
          [
            h("loading", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: vm.isLoading,
                  expression: "isLoading",
                },
              ],
            }),
            vm._v(" "),
            [h("header-bar"), vm._v(" "), h("nuxt"), vm._v(" "), h("footer-bar")],
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
