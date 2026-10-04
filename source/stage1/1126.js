// page-tab component (desktop section-nav) — module 1126 from ba4082a
// module 1126 from ba4082a.js
// deps: 556, 118, 49, 1134, 36
const module_1126 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(556), webpackRequire(118));
  var siteConstants = webpackRequire(49),
    o_1 = {
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
    l_2 = (webpackRequire(1134), webpackRequire(36)),
    component = Object(l_2.a)(
      o_1,
      function () {
        var t_3 = this,
          e_4 = t_3._self._c;
        return e_4(
          "div",
          {
            class: [
              "section-nav",
              t_3.size,
              {
                "has-theme": t_3.theme,
              },
              t_3.direction,
            ],
          },
          [
            t_3.theme
              ? e_4(
                  "svg",
                  {
                    staticClass: "section-nav-bg",
                    attrs: {
                      viewBox: "0 0 291.28 414",
                    },
                  },
                  [
                    e_4("path", {
                      attrs: {
                        fill: t_3.theme,
                        d: "m0,414V0h234.75c5.74.23,24.8,1.71,39.77,16.48,5.61,5.53,9.9,12.19,12.78,19.52,8.11,20.63,3.54,44.11-11.03,60.83C184.18,202.55,92.09,308.27,0,414Z",
                      },
                    }),
                  ],
                )
              : t_3._e(),
            t_3._v(" "),
            e_4(
              "div",
              {
                staticClass: "section-nav-inner",
              },
              [
                e_4("div", {
                  staticClass: "section-nav-label",
                  domProps: {
                    innerHTML: t_3._s(
                      t_3.$getI18nWord(2 === t_3.navNum ? "pageNavChara" : t_3.navInfo.mi18nKey),
                    ),
                  },
                }),
                t_3._v(" "),
                e_4(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !t_3.hideEnLabel,
                        expression: "!hideEnLabel",
                      },
                    ],
                    staticClass: "section-nav-en",
                  },
                  [t_3._v(t_3._s(t_3.$getI18nWord("".concat(t_3.navInfo.mi18nKey, "Label"))))],
                ),
                t_3._v(" "),
                e_4(
                  "div",
                  {
                    staticClass: "section-nav-num",
                  },
                  [t_3._v("0" + t_3._s(t_3.navNum))],
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
