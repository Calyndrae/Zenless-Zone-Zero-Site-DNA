/**
 * page-tab — readable reconstruction of webpack module 1149 (chunk b5b7858.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/b5b7858.js
 *
 * page-tab Vue component, mobile variant. Props navNum, size, theme and direction; data navInfo is the (navNum-1)th entry of the nav list from module 49, and computed hideEnLabel is true for store lang "en-us"/"id-id". It renders div.m-section-nav.font-num (size/direction classes, has-theme) with an optional svg.m-section-nav-bg path filled with the theme colour and .m-section-nav-inner containing .m-section-nav-label (i18n pageNavChara for navNum 2, else navInfo.mi18nKey, via innerHTML), a v-show .m-section-nav-en label and .m-section-nav-num ("0" + navNum). Normalised with componentNormalizer (module 36); styles from module 1234.
 *
 * Exports (minified key → meaning):
 *   a → mobile page-tab Vue component (m-section-nav label with number)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1149 from b5b7858.js
// deps: 556, 118, 49, 1234, 36
const module_1149 = function (webpackModule, webpackExports, webpackRequire) {
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
        theme: {
          type: String,
          default: "",
        },
        direction: {
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
    componentNormalizer = (webpackRequire(1234), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      pageTabOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            class: [
              "m-section-nav font-num",
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
                    staticClass: "m-section-nav-bg",
                    attrs: {
                      viewBox: "0 0 406.62 624",
                    },
                  },
                  [
                    h("path", {
                      attrs: {
                        fill: vm.theme,
                        d: "m0,624V0h293.77c17.87,0,35.57,4.1,51.37,12.45,5.05,2.67,10.21,5.89,15.31,9.77,33.66,25.63,50.77,69.34,45.11,110.33-3.58,25.95-15.47,44.85-23.33,55.22L0,624Z",
                      },
                    }),
                  ],
                )
              : vm._e(),
            vm._v(" "),
            h(
              "div",
              {
                staticClass: "m-section-nav-inner",
              },
              [
                h("div", {
                  staticClass: "m-section-nav-label",
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
                    staticClass: "m-section-nav-en",
                  },
                  [vm._v(vm._s(vm.$getI18nWord("".concat(vm.navInfo.mi18nKey, "Label"))))],
                ),
                vm._v(" "),
                h(
                  "div",
                  {
                    staticClass: "m-section-nav-num",
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
