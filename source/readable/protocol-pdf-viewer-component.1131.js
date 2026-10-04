/**
 * protocol-pdf-viewer-component — readable reconstruction of webpack module 1131 (chunk e502f5f.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/e502f5f.js
 *
 * Protocol PDF viewer Vue component (unnamed, layout "empty"). Props isMob (Boolean) and pdfUrl (String), both required. On mobile it renders div.protocol-pdf.mob containing a <pdf-viewer> with src pdfUrl and text/annotation layers enabled; on desktop it renders div.protocol-pdf with an <iframe> pointing at pdfUrl. Normalised with the vue-loader componentNormalizer (module 36); styles from module 1129.
 *
 * Exports (minified key → meaning):
 *   a → protocol PDF viewer Vue component (pdf-viewer on mobile, iframe on desktop)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1131 from e502f5f.js
// deps: 1129, 36
const module_1131 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var protocolPdfOptions = {
      layout: "empty",
      props: {
        isMob: {
          required: !0,
          type: Boolean,
        },
        pdfUrl: {
          required: !0,
          type: String,
        },
      },
    },
    componentNormalizer = (webpackRequire(1129), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      protocolPdfOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return vm.isMob
          ? h(
              "div",
              {
                staticClass: "protocol-pdf mob",
              },
              [
                h("pdf-viewer", {
                  attrs: {
                    src: vm.pdfUrl,
                    "text-layer": !0,
                    "annotation-layer": !0,
                  },
                }),
              ],
              1,
            )
          : h(
              "div",
              {
                staticClass: "protocol-pdf",
              },
              [
                h("iframe", {
                  attrs: {
                    src: vm.pdfUrl,
                    frameborder: "0",
                  },
                }),
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
