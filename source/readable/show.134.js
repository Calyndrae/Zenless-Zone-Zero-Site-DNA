/**
 * show — readable reconstruction of webpack module 134 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Nuxt error page component (uses the `errorLayout` layout) that receives an `error` prop (default statusCode 500). It renders `.error` with either an `.error__404` block or an `.error__500` block, each showing an illustration image, i18n texts (`error404`/`error404Sub` or `error502`/`error502Sub` via `$getI18nWord`) in `.error__text-main`/`.error__text-sub`, and an `.error__btn` "back home" button (hidden when already on `lang-main`/`m-lang-main`) whose `handleBack` method pushes the `m-lang-main` or `lang-main` route depending on `$isMob`.
 *
 * Exports (minified key → meaning):
 *   a → the error page Vue component (normalized component exports)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 134 from 8c4c131.js
// deps: 65, 659, 36, 657, 658
const module_134 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire(65);
  var errorPageOptions = {
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
          var mainRouteName = this.$isMob ? "m-lang-main" : "lang-main";
          this.$router.push({
            name: mainRouteName,
          });
        },
      },
    },
    componentNormalizer = (webpackRequire(659), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      errorPageOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "error",
          },
          [
            404 === vm.error.statusCode
              ? h(
                  "div",
                  {
                    staticClass: "error__404",
                  },
                  [
                    h("img", {
                      attrs: {
                        src: webpackRequire(657),
                        alt: "",
                      },
                    }),
                    vm._v(" "),
                    h(
                      "div",
                      {
                        staticClass: "error__text",
                      },
                      [
                        h(
                          "div",
                          {
                            staticClass: "error__text-main",
                          },
                          [vm._v(vm._s(vm.$getI18nWord("error404")))],
                        ),
                        vm._v(" "),
                        h(
                          "div",
                          {
                            staticClass: "error__text-sub",
                          },
                          [vm._v(vm._s(vm.$getI18nWord("error404Sub")))],
                        ),
                      ],
                    ),
                    vm._v(" "),
                    h(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "m-lang-main" !== vm.$route.name && "lang-main" !== vm.$route.name,
                            expression: "$route.name !== 'm-lang-main' && $route.name !== 'lang-main'",
                          },
                        ],
                        staticClass: "error__btn",
                        on: {
                          click: function (backClickEvent404) {
                            return vm.handleBack();
                          },
                        },
                      },
                      [vm._v("\n      " + vm._s(vm.$getI18nWord("textBackHome")) + "\n    ")],
                    ),
                  ],
                )
              : vm._e(),
            vm._v(" "),
            500 === vm.error.statusCode
              ? h(
                  "div",
                  {
                    staticClass: "error__500",
                  },
                  [
                    h("img", {
                      attrs: {
                        src: webpackRequire(658),
                        alt: "",
                      },
                    }),
                    vm._v(" "),
                    h(
                      "div",
                      {
                        staticClass: "error__text",
                      },
                      [
                        h(
                          "div",
                          {
                            staticClass: "error__text-main",
                          },
                          [vm._v(vm._s(vm.$getI18nWord("error502")))],
                        ),
                        vm._v(" "),
                        h(
                          "div",
                          {
                            staticClass: "error__text-sub",
                          },
                          [vm._v(vm._s(vm.$getI18nWord("error502Sub")))],
                        ),
                      ],
                    ),
                    vm._v(" "),
                    h(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "m-lang-main" !== vm.$route.name && "lang-main" !== vm.$route.name,
                            expression: "$route.name !== 'm-lang-main' && $route.name !== 'lang-main'",
                          },
                        ],
                        staticClass: "error__btn",
                        on: {
                          click: function (backClickEvent500) {
                            return vm.handleBack();
                          },
                        },
                      },
                      [vm._v("\n      " + vm._s(vm.$getI18nWord("textBackHome")) + "\n    ")],
                    ),
                  ],
                )
              : vm._e(),
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
