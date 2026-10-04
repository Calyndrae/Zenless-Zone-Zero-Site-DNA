/**
 * header-social — readable reconstruction of webpack module 262 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Vue component `header-social`, the share/follow popover in the header. It renders `.share` > `.share__info` with a `.share__icon` trigger and, client-only, a `.share__panel` / `.share__panel-wrap` containing a `.share__title` (`socialFollow` i18n text) and a `.share__list` with `media-icon` bound to `$store.getters.mediaConfig` plus a `hover-btn.copy-btn` in the `extra-media-end` slot. Methods track `Media_Share`, `Media_Sub_Follow` and `Media_Sub_Share` via `$trackButton`, and the copy button copies `shareCopyText` with `$clipboard` and shows `copySuccess` via `$mtoast`.
 *
 * Exports (minified key → meaning):
 *   a → the header-social Vue component (normalized component exports)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 262 from 8c4c131.js
// deps: 669, 36, 411, 412
const module_262 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var headerSocialOptions = {
      name: "header-social",
      computed: {
        mediaConfig: function () {
          return this.$store.getters.mediaConfig;
        },
      },
      methods: {
        handleNavShare: function () {
          this.$trackButton("Media_Share", "");
        },
        handleFollow: function (mediaName) {
          this.$trackButton("Media_Sub_Follow", mediaName);
        },
        handleShare: function (sharePlatform) {
          var self = this;
          "link" === sharePlatform &&
            (this.$clipboard({
              text: this.$getI18nWord("shareCopyText"),
              onSuccess: function () {
                self.$mtoast(self.$getI18nWord("copySuccess"));
              },
            }),
            this.$trackButton("Media_Sub_Share", "copy"));
        },
      },
    },
    componentNormalizer = (webpackRequire(669), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      headerSocialOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "share",
          },
          [
            h(
              "div",
              {
                staticClass: "share__info",
              },
              [
                h("div", {
                  staticClass: "share__icon",
                  on: {
                    click: vm.handleNavShare,
                  },
                }),
                vm._v(" "),
                h("client-only", [
                  h(
                    "div",
                    {
                      staticClass: "share__panel",
                    },
                    [
                      h(
                        "div",
                        {
                          staticClass: "share__panel-wrap",
                        },
                        [
                          h(
                            "div",
                            {
                              staticClass: "share__title",
                            },
                            [vm._v(vm._s(vm.$getI18nWord("socialFollow")))],
                          ),
                          vm._v(" "),
                          h(
                            "div",
                            {
                              staticClass: "share__list",
                            },
                            [
                              h(
                                "media-icon",
                                vm._b(
                                  {
                                    on: {
                                      "click-media": vm.handleFollow,
                                    },
                                  },
                                  "media-icon",
                                  vm.mediaConfig,
                                  !1,
                                ),
                                [
                                  h("hover-btn", {
                                    staticClass: "copy-btn",
                                    attrs: {
                                      slot: "extra-media-end",
                                      img: webpackRequire(411),
                                      "img-hover": webpackRequire(412),
                                    },
                                    on: {
                                      click: function (copyClickEvent) {
                                        return vm.handleShare("link");
                                      },
                                    },
                                    slot: "extra-media-end",
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                      ),
                    ],
                  ),
                ]),
              ],
              1,
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
