/**
 * page-tab — readable reconstruction of webpack module 1126 (chunk ba4082a.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/ba4082a.js
 *
 * page-tab Vue component (section number tab). Props navNum, size, direction and theme; data navInfo is the (navNum-1)th entry of the nav list from module 49, and computed hideEnLabel is true for store lang "en-us"/"id-id". It renders div.section-nav (with size/direction classes and has-theme) containing an optional svg.section-nav-bg path filled with the theme colour, and .section-nav-inner with .section-nav-label (i18n word pageNavChara for navNum 2, else navInfo.mi18nKey, via innerHTML), a v-show .section-nav-en label (<mi18nKey>Label) and .section-nav-num ("0" + navNum). Normalised with the vue-loader componentNormalizer (module 36); styles from module 1134.
 *
 * Exports (minified key → meaning):
 *   a → page-tab Vue component (section nav label with number)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1126 from ba4082a.js
// deps: 556, 118, 49, 1134, 36
const module_1126 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(556), webpackRequire(118));
  var siteConstants = webpackRequire(49),
    pageTabOptions = {
      name: "page-tab",
      props: {
        navNum: {
          type: Number,
          default: 0,
        },
        size: {
          type: String,
          default: "",
        },
        direction: {
          type: String,
          default: "",
        },
        theme: {
          type: String,
          default: "",
        },
      },
      data: function () {
        return {
          navInfo: siteConstants.e[this.navNum - 1],
        };
      },
      computed: {
        hideEnLabel: function () {
          return ["en-us", "id-id"].includes(this.$store.state.lang);
        },
      },
    },
    componentNormalizer = (webpackRequire(1134), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      pageTabOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            class: [
              "section-nav",
              vm.size,
              {
                "has-theme": vm.theme,
              },
              vm.direction,
            ],
          },
          [
            vm.theme
              ? h(
                  "svg",
                  {
                    staticClass: "section-nav-bg",
                    attrs: {
                      viewBox: "0 0 291.28 414",
                    },
                  },
                  [
                    h("path", {
                      attrs: {
                        fill: vm.theme,
                        d: "m0,414V0h234.75c5.74.23,24.8,1.71,39.77,16.48,5.61,5.53,9.9,12.19,12.78,19.52,8.11,20.63,3.54,44.11-11.03,60.83C184.18,202.55,92.09,308.27,0,414Z",
                      },
                    }),
                  ],
                )
              : vm._e(),
            vm._v(" "),
            h(
              "div",
              {
                staticClass: "section-nav-inner",
              },
              [
                h("div", {
                  staticClass: "section-nav-label",
                  domProps: {
                    innerHTML: vm._s(vm.$getI18nWord(2 === vm.navNum ? "pageNavChara" : vm.navInfo.mi18nKey)),
                  },
                }),
                vm._v(" "),
                h(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !vm.hideEnLabel,
                        expression: "!hideEnLabel",
                      },
                    ],
                    staticClass: "section-nav-en",
                  },
                  [vm._v(vm._s(vm.$getI18nWord("".concat(vm.navInfo.mi18nKey, "Label"))))],
                ),
                vm._v(" "),
                h(
                  "div",
                  {
                    staticClass: "section-nav-num",
                  },
                  [vm._v("0" + vm._s(vm.navNum))],
                ),
              ],
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
  webpackExports.a = component.exports;
};
