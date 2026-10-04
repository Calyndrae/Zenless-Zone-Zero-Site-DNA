// protocol page component (desktop) — module 1142 from f28487d
// module 1142 from f28487d.js
// deps: 348, 203, 347, 1139, 36
const module_1142 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var headerBar = webpackRequire(348),
    footerBar = webpackRequire(203),
    backTop = webpackRequire(347),
    l_1 = {
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
    f_2 = (webpackRequire(1139), webpackRequire(36)),
    component = Object(f_2.a)(
      l_1,
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
                staticClass: "web-protocol",
              },
              [
                e_4(
                  "div",
                  {
                    staticClass: "web-protocol-container",
                  },
                  [
                    e_4(
                      "div",
                      {
                        staticClass: "web-protocol__article",
                      },
                      [
                        e_4(
                          "div",
                          {
                            staticClass: "web-protocol__title",
                          },
                          [t_3._v("\n          " + t_3._s(t_3.title) + "\n        ")],
                        ),
                        t_3._v(" "),
                        e_4(
                          "div",
                          {
                            staticClass: "web-protocol__info",
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
                          staticClass: "web-protocol__content",
                          domProps: {
                            innerHTML: t_3._s(t_3.content),
                          },
                        }),
                      ],
                    ),
                  ],
                ),
                t_3._v(" "),
                e_4(
                  "div",
                  {
                    staticClass: "backContainer",
                  },
                  [
                    e_4("backTop", {
                      attrs: {
                        theme: "reverse",
                      },
                    }),
                  ],
                  1,
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
