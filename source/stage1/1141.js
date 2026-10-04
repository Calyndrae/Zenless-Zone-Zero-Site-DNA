// m-protocol page component (mobile) — module 1141 from f5b0acd
// module 1141 from f5b0acd.js
// deps: 349, 203, 1132, 36
const module_1141 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var mHeaderBar = webpackRequire(349),
    r_1 = {
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
    c_2 = (webpackRequire(1132), webpackRequire(36)),
    component = Object(c_2.a)(
      r_1,
      function () {
        var t_3 = this,
          e_4 = t_3._self._c;
        return e_4(
          "div",
          {
            staticClass: "page-protocol",
          },
          [
            e_4("header-bar"),
            t_3._v(" "),
            e_4(
              "div",
              {
                staticClass: "m-web-protocol",
                class: {
                  fromGame: t_3.fromGame,
                },
              },
              [
                e_4(
                  "div",
                  {
                    staticClass: "m-web-protocol-container",
                  },
                  [
                    e_4(
                      "div",
                      {
                        staticClass: "m-web-protocol__article",
                      },
                      [
                        e_4(
                          "div",
                          {
                            staticClass: "m-web-protocol__title",
                          },
                          [t_3._v("\n          " + t_3._s(t_3.title) + "\n        ")],
                        ),
                        t_3._v(" "),
                        e_4(
                          "div",
                          {
                            staticClass: "m-web-protocol__info",
                          },
                          [
                            e_4(
                              "span",
                              {
                                staticClass: "breadcrumb",
                              },
                              [
                                t_3._v(
                                  "\n            " +
                                    t_3._s(t_3.$getI18nWord("gameName")) +
                                    " > " +
                                    t_3._s(t_3.title) +
                                    "\n          ",
                                ),
                              ],
                            ),
                          ],
                        ),
                        t_3._v(" "),
                        e_4("div", {
                          staticClass: "m-web-protocol__content",
                          domProps: {
                            innerHTML: t_3._s(t_3.content),
                          },
                        }),
                      ],
                    ),
                  ],
                ),
              ],
            ),
            t_3._v(" "),
            e_4("footer-bar"),
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
