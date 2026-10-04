/**
 * description — readable reconstruction of webpack module 549 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Desktop Nuxt layout component. It registers `headerBar`, `footerBar` and `loading`, renders `.root` containing the `loading` screen (shown while `$store.state.isLoading`), `header-bar`, the `<nuxt>` page outlet and `footer-bar`, and sets page `head()` metadata (title, html `lang` from `$store.state.lang`, description/Keywords/og:*/twitter:* meta from the `seoTitle`, `seoDesc`, `seoKeywords`, `ogImage` i18n words). On mount it adds a jQuery `mousewheel` handler on `body` that scrolls manually for IE10/IE11/Edge 12.
 *
 * Exports (minified key → meaning):
 *   a → the desktop layout Vue component (normalized component exports)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 549 from 8c4c131.js
// deps: 224, 250, 348, 203, 684, 36
const module_549 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire(224);
  var loadingScreenComponent = webpackRequire(250),
    headerBar = webpackRequire(348),
    footerBar = webpackRequire(203),
    layoutOptions = {
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
          $("body").on("mousewheel", function (wheelEvent) {
            wheelEvent.preventDefault();
            var wheelDelta = wheelEvent.wheelDelta,
              pageYOffset = window.pageYOffset;
            window.scrollTo(0, pageYOffset - wheelDelta);
          });
      },
    },
    componentNormalizer = (webpackRequire(684), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      layoutOptions,
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
