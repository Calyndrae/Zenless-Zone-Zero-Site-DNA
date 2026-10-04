/**
 * footer-bar — readable reconstruction of webpack module 203 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Vue component `footer-bar`, the site footer. On mount it initializes the external `window.HYVFooter` widget on `#footer` (biz `nap_global`, locale from `$store.state.lang`, supported locales from `HoYoverseMi18n.d`, selector hidden on `$isBBS`) and on language change collapses the footer, calls `setLang`, commits the `setLang` mutation and reloads the page with the language segment replaced in the URL. It renders `.footer` / `.footer__wrap` with a `backTop` button on the main/news routes, a `.footer__socialbar` with `media-icon` (bound to `$store.getters.mediaConfig`, tracking follows via `$trackButton('go_media', ...)`) and a `hover-btn.copy-btn` that copies the `shareCopyText` via `$clipboard` and toasts with `$mtoast`, plus a `.footer-crm` `crm-sub` subscription widget (shown unless `$store.state.isEnIp`, i18n key `m20231213hy4784y0w0`, event key `nap_official_crm`).
 *
 * Exports (minified key → meaning):
 *   a → the footer-bar Vue component (normalized component exports)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 203 from 8c4c131.js
// deps: 65, 204, 402, 138, 28, 103, 347, 49, 680, 682, 36, 411, 412
const module_203 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(65), webpackRequire(204), webpackRequire(402), webpackRequire(138));
  var siteConfigConstants = webpackRequire(28),
    babelHelpers = webpackRequire(103),
    backTop = webpackRequire(347),
    siteConstants = webpackRequire(49),
    footerBarOptions = {
      name: "footer-bar",
      components: {
        backTop: backTop.a,
      },
      data: function () {
        return {
          i18nKey: "m20231213hy4784y0w0",
          popoverOpts: {
            position: "top",
            arrowPos: "right",
            platsCn: ["shareQQZone", "shareQQ", "shareWeibo", "link"],
            platsSea: ["facebook", "twitter", "link"],
          },
        };
      },
      computed: {
        platform: function () {
          return this.isMobile ? "mobile" : "pc";
        },
        env: function () {
          return "development" === siteConfigConstants.environment ? "test" : siteConfigConstants.environment;
        },
        isMobile: function () {
          return this.$isMob;
        },
        mediaConfig: function () {
          return this.$store.getters.mediaConfig;
        },
      },
      mounted: function () {
        var self = this;
        this.initFooter({
          target: "#footer",
          props: {
            biz: "nap_global",
            locale: this.$store.state.lang,
            locales: siteConstants.d,
            showSelector: !this.$isBBS,
          },
          onChange: function (newLang, footer) {
            (console.log("route", self.$route.fullPath, newLang),
              footer.collapse(),
              Object(babelHelpers.setLang)(newLang),
              self.$store.commit("setLang", newLang));
            var fullPath = self.$route.fullPath,
              currentLang = self.$route.params.lang;
            fullPath.split("/").shift();
            var langPattern = new RegExp("/" + currentLang, "i");
            ((fullPath = fullPath.replace(langPattern, "/".concat(newLang))),
              (window.location.href = fullPath));
          },
        });
      },
      methods: {
        initFooter: function (footerConfig) {
          window.HYVFooter
            ? window.HYVFooter.init(footerConfig)
            : (window.HYVFooter = {
                config: footerConfig,
              });
        },
        handleShare: function (sharePlatform) {
          var shareSelf = this;
          (this.$trackButton("go_media", "share"),
            "link" === sharePlatform &&
              this.$clipboard({
                text: this.$getI18nWord("shareCopyText"),
                onSuccess: function () {
                  shareSelf.$mtoast(shareSelf.$getI18nWord("copySuccess"));
                },
              }));
        },
        getShareConfig: function () {
          return {
            key: "m03111446031031",
            lang: this.$store.state.lang,
            game_biz: "nap_global",
            title_key: "seoTitle",
            desc_key: "seoDesc",
            img_key: "share_img",
            url: window.location.href,
          };
        },
        onShared: function () {},
        handleFollow: function (mediaName) {
          this.$trackButton("go_media", mediaName);
        },
      },
    },
    componentNormalizer = (webpackRequire(680), webpackRequire(682), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      footerBarOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "footer",
            class: {
              mob: vm.isMobile,
            },
          },
          [
            h(
              "div",
              {
                staticClass: "footer__wrap",
              },
              [
                "lang-main" === vm.$route.name ||
                "m-lang-main" === vm.$route.name ||
                "lang-news" === vm.$route.name
                  ? h("backTop")
                  : vm._e(),
                vm._v(" "),
                h("client-only", [
                  h(
                    "div",
                    {
                      class: ["footer__socialbar", vm.isMobile && "mob"],
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
                      ),
                      vm._v(" "),
                      h("hover-btn", {
                        staticClass: "copy-btn",
                        attrs: {
                          img: webpackRequire(411),
                          "img-hover": webpackRequire(412),
                        },
                        on: {
                          click: function (copyClickEvent) {
                            return vm.handleShare("link");
                          },
                        },
                      }),
                    ],
                    1,
                  ),
                ]),
              ],
              1,
            ),
            vm._v(" "),
            h("client-only", [
              h(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !vm.$store.state.isEnIp,
                      expression: "!$store.state.isEnIp",
                    },
                  ],
                  staticClass: "footer-crm",
                },
                [
                  h("crm-sub", {
                    attrs: {
                      "is-modal": !1,
                      lang: vm.$store.state.lang,
                      env: vm.env,
                      "i18n-key": vm.i18nKey,
                      platform: vm.platform,
                      biz: "nap_global",
                      source: "262",
                      "event-key": "nap_official_crm",
                    },
                  }),
                ],
                1,
              ),
            ]),
            vm._v(" "),
            h("div", {
              attrs: {
                id: "footer",
              },
            }),
          ],
          1,
        );
      },
      [],
      !1,
      null,
      "2b67f5b0",
      null,
    );
  webpackExports.a = component.exports;
};
