// protocol pdf viewer component — module 1131 from e502f5f
// module 1131 from e502f5f.js
// deps: 1129, 36
const module_1131 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var n_1 = {
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
    r_2 = (webpackRequire(1129), webpackRequire(36)),
    component = Object(r_2.a)(
      n_1,
      function () {
        var t_3 = this,
          e_4 = t_3._self._c;
        return t_3.isMob
          ? e_4(
              "div",
              {
                staticClass: "protocol-pdf mob",
              },
              [
                e_4("pdf-viewer", {
                  attrs: {
                    src: t_3.pdfUrl,
                    "text-layer": !0,
                    "annotation-layer": !0,
                  },
                }),
              ],
              1,
            )
          : e_4(
              "div",
              {
                staticClass: "protocol-pdf",
              },
              [
                e_4("iframe", {
                  attrs: {
                    src: t_3.pdfUrl,
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
