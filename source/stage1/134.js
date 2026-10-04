// nuxt error page (404/500) — module 134 from 8c4c131
// module 134 from 8c4c131.js
// deps: 65, 659, 36, 657, 658
const module_134 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire(65);
  var o_1 = {
      layout: "errorLayout",
      props: {
        error: {
          type: Object,
          default: function () {
            return {
              statusCode: 500,
            };
          },
        },
      },
      methods: {
        handleBack: function () {
          var t_3 = this.$isMob ? "m-lang-main" : "lang-main";
          this.$router.push({
            name: t_3,
          });
        },
      },
    },
    l_2 = (webpackRequire(659), webpackRequire(36)),
    component = Object(l_2.a)(
      o_1,
      function () {
        var t_4 = this,
          e_5 = t_4._self._c;
        return e_5(
          "div",
          {
            staticClass: "error",
          },
          [
            404 === t_4.error.statusCode
              ? e_5(
                  "div",
                  {
                    staticClass: "error__404",
                  },
                  [
                    e_5("img", {
                      attrs: {
                        src: webpackRequire(657),
                        alt: "",
                      },
                    }),
                    t_4._v(" "),
                    e_5(
                      "div",
                      {
                        staticClass: "error__text",
                      },
                      [
                        e_5(
                          "div",
                          {
                            staticClass: "error__text-main",
                          },
                          [t_4._v(t_4._s(t_4.$getI18nWord("error404")))],
                        ),
                        t_4._v(" "),
                        e_5(
                          "div",
                          {
                            staticClass: "error__text-sub",
                          },
                          [t_4._v(t_4._s(t_4.$getI18nWord("error404Sub")))],
                        ),
                      ],
                    ),
                    t_4._v(" "),
                    e_5(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "m-lang-main" !== t_4.$route.name && "lang-main" !== t_4.$route.name,
                            expression: "$route.name !== 'm-lang-main' && $route.name !== 'lang-main'",
                          },
                        ],
                        staticClass: "error__btn",
                        on: {
                          click: function (e_6) {
                            return t_4.handleBack();
                          },
                        },
                      },
                      [t_4._v("\n      " + t_4._s(t_4.$getI18nWord("textBackHome")) + "\n    ")],
                    ),
                  ],
                )
              : t_4._e(),
            t_4._v(" "),
            500 === t_4.error.statusCode
              ? e_5(
                  "div",
                  {
                    staticClass: "error__500",
                  },
                  [
                    e_5("img", {
                      attrs: {
                        src: webpackRequire(658),
                        alt: "",
                      },
                    }),
                    t_4._v(" "),
                    e_5(
                      "div",
                      {
                        staticClass: "error__text",
                      },
                      [
                        e_5(
                          "div",
                          {
                            staticClass: "error__text-main",
                          },
                          [t_4._v(t_4._s(t_4.$getI18nWord("error502")))],
                        ),
                        t_4._v(" "),
                        e_5(
                          "div",
                          {
                            staticClass: "error__text-sub",
                          },
                          [t_4._v(t_4._s(t_4.$getI18nWord("error502Sub")))],
                        ),
                      ],
                    ),
                    t_4._v(" "),
                    e_5(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "m-lang-main" !== t_4.$route.name && "lang-main" !== t_4.$route.name,
                            expression: "$route.name !== 'm-lang-main' && $route.name !== 'lang-main'",
                          },
                        ],
                        staticClass: "error__btn",
                        on: {
                          click: function (e_7) {
                            return t_4.handleBack();
                          },
                        },
                      },
                      [t_4._v("\n      " + t_4._s(t_4.$getI18nWord("textBackHome")) + "\n    ")],
                    ),
                  ],
                )
              : t_4._e(),
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
