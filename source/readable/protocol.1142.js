/**
 * protocol — readable reconstruction of webpack module 1142 (chunk f28487d.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/f28487d.js
 *
 * protocol Vue component: the desktop layout for legal/protocol pages. It registers headerBar (module 348), footerBar (module 203) and backTop (module 347), takes props content and title, and exposes computed isMobile from $isMob. It renders div.page-protocol with <header-bar>, div.web-protocol > .web-protocol-container > .web-protocol__article holding .web-protocol__title, a .web-protocol__info breadcrumb (i18n gameName > title) and .web-protocol__content via innerHTML, a .backContainer with <backTop theme="reverse">, then <footer-bar>. Normalised with componentNormalizer (module 36); styles from module 1139.
 *
 * Exports (minified key → meaning):
 *   a → protocol Vue component (desktop protocol article page)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1142 from f28487d.js
// deps: 348, 203, 347, 1139, 36
const module_1142 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var headerBar = webpackRequire(348),
    footerBar = webpackRequire(203),
    backTop = webpackRequire(347),
    protocolOptions = {
      name: "protocol",
      components: {
        footerBar: footerBar.a,
        headerBar: headerBar.a,
        backTop: backTop.a,
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
        isMobile: function () {
          return this.$isMob;
        },
      },
    },
    componentNormalizer = (webpackRequire(1139), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      protocolOptions,
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
                staticClass: "web-protocol",
              },
              [
                h(
                  "div",
                  {
                    staticClass: "web-protocol-container",
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "web-protocol__article",
                      },
                      [
                        h(
                          "div",
                          {
                            staticClass: "web-protocol__title",
                          },
                          [vm._v("\n          " + vm._s(vm.title) + "\n        ")],
                        ),
                        vm._v(" "),
                        h(
                          "div",
                          {
                            staticClass: "web-protocol__info",
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
                          staticClass: "web-protocol__content",
                          domProps: {
                            innerHTML: vm._s(vm.content),
                          },
                        }),
                      ],
                    ),
                  ],
                ),
                vm._v(" "),
                h(
                  "div",
                  {
                    staticClass: "backContainer",
                  },
                  [
                    h("backTop", {
                      attrs: {
                        theme: "reverse",
                      },
                    }),
                  ],
                  1,
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
