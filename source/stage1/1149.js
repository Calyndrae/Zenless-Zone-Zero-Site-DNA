// page-tab component (mobile m-section-nav) — module 1149 from b5b7858
// module 1149 from b5b7858.js
// deps: 556, 118, 49, 1234, 36
const module_1149 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(556), webpackRequire(118));
  var siteConstants = webpackRequire(49),
    m_1 = {
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
    l_2 = (webpackRequire(1234), webpackRequire(36)),
    component = Object(l_2.a)(
      m_1,
      function () {
        var n_3 = this,
          D_4 = n_3._self._c;
        return D_4(
          "div",
          {
            class: [
              "m-section-nav font-num",
              n_3.size,
              {
                "has-theme": n_3.theme,
              },
              n_3.direction,
            ],
          },
          [
            n_3.theme
              ? D_4(
                  "svg",
                  {
                    staticClass: "m-section-nav-bg",
                    attrs: {
                      viewBox: "0 0 406.62 624",
                    },
                  },
                  [
                    D_4("path", {
                      attrs: {
                        fill: n_3.theme,
                        d: "m0,624V0h293.77c17.87,0,35.57,4.1,51.37,12.45,5.05,2.67,10.21,5.89,15.31,9.77,33.66,25.63,50.77,69.34,45.11,110.33-3.58,25.95-15.47,44.85-23.33,55.22L0,624Z",
                      },
                    }),
                  ],
                )
              : n_3._e(),
            n_3._v(" "),
            D_4(
              "div",
              {
                staticClass: "m-section-nav-inner",
              },
              [
                D_4("div", {
                  staticClass: "m-section-nav-label",
                  domProps: {
                    innerHTML: n_3._s(
                      n_3.$getI18nWord(2 === n_3.navNum ? "pageNavChara" : n_3.navInfo.mi18nKey),
                    ),
                  },
                }),
                n_3._v(" "),
                D_4(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !n_3.hideEnLabel,
                        expression: "!hideEnLabel",
                      },
                    ],
                    staticClass: "m-section-nav-en",
                  },
                  [n_3._v(n_3._s(n_3.$getI18nWord("".concat(n_3.navInfo.mi18nKey, "Label"))))],
                ),
                n_3._v(" "),
                D_4(
                  "div",
                  {
                    staticClass: "m-section-nav-num",
                  },
                  [n_3._v("0" + n_3._s(n_3.navNum))],
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
