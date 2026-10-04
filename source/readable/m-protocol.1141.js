/**
 * m-protocol — readable reconstruction of webpack module 1141 (chunk f5b0acd.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/f5b0acd.js
 *
 * m-protocol Vue component: the mobile layout for legal/protocol pages. It uses headerBar (module 349) and footerBar (module 203), takes props content and title, and computes fromGame from $route.query.nolandscape && $route.query.fromGame. It renders div.page-protocol with <header-bar>, div.m-web-protocol (fromGame class) > .m-web-protocol-container > .m-web-protocol__article holding .m-web-protocol__title, a .m-web-protocol__info breadcrumb (i18n gameName > title) and .m-web-protocol__content via innerHTML, then <footer-bar>. Normalised with componentNormalizer (module 36); styles from module 1132.
 *
 * Exports (minified key → meaning):
 *   a → m-protocol Vue component (mobile protocol article page)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1141 from f5b0acd.js
// deps: 349, 203, 1132, 36
const module_1141 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var mHeaderBar = webpackRequire(349),
    mProtocolOptions = {
      name: "m-protocol",
      components: {
        footerBar: webpackRequire(203).a,
        headerBar: mHeaderBar.a,
      },
      props: {
        content: {
          type: String,
          default: "",
        },
        title: {
          type: String,
          default: "",
        },
      },
      computed: {
        fromGame: function () {
          return this.$route.query.nolandscape && this.$route.query.fromGame;
        },
      },
    },
    componentNormalizer = (webpackRequire(1132), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      mProtocolOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "page-protocol",
          },
          [
            h("header-bar"),
            vm._v(" "),
            h(
              "div",
              {
                staticClass: "m-web-protocol",
                class: {
                  fromGame: vm.fromGame,
                },
              },
              [
                h(
                  "div",
                  {
                    staticClass: "m-web-protocol-container",
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "m-web-protocol__article",
                      },
                      [
                        h(
                          "div",
                          {
                            staticClass: "m-web-protocol__title",
                          },
                          [vm._v("\n          " + vm._s(vm.title) + "\n        ")],
                        ),
                        vm._v(" "),
                        h(
                          "div",
                          {
                            staticClass: "m-web-protocol__info",
                          },
                          [
                            h(
                              "span",
                              {
                                staticClass: "breadcrumb",
                              },
                              [
                                vm._v(
                                  "\n            " +
                                    vm._s(vm.$getI18nWord("gameName")) +
                                    " > " +
                                    vm._s(vm.title) +
                                    "\n          ",
                                ),
                              ],
                            ),
                          ],
                        ),
                        vm._v(" "),
                        h("div", {
                          staticClass: "m-web-protocol__content",
                          domProps: {
                            innerHTML: vm._s(vm.content),
                          },
                        }),
                      ],
                    ),
                  ],
                ),
              ],
            ),
            vm._v(" "),
            h("footer-bar"),
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
  webpackExports.a = component.exports;
};
