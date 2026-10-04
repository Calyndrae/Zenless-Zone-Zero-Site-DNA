// page:lang-company-terms3 — module 1449 from 0065aaf
// module 1449 from 0065aaf.js
// deps: 32, 98, 1131, 1142, 1118, 36
const module_1449 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    r_1 = (webpackRequire(98), webpackRequire(1131)),
    protocolPageComponent = webpackRequire(1142),
    protocolCMSAPI = webpackRequire(1118),
    f_2 = {
      layout: "empty",
      components: {
        protocol: protocolPageComponent.a,
        protocolPdf: r_1.a,
      },
      head: function () {
        return {
          title: "".concat(this.title).concat(this.$getI18nWord("seoTitlePrefix")),
        };
      },
      asyncData: function (t_3) {
        return Object(vendorBundle.a)(
          regeneratorRuntime.mark(function o_4() {
            var e_5, n_6, r_7;
            return regeneratorRuntime.wrap(function (o_8) {
              for (;;)
                switch ((o_8.prev = o_8.next)) {
                  case 0:
                    return (
                      (e_5 = t_3.redirect),
                      (n_6 = t_3.store),
                      t_3.res,
                      (o_8.next = 3),
                      protocolCMSAPI.a.getTerms3({
                        data: {
                          sLangKey: n_6.state.lang,
                        },
                      })
                    );
                  case 3:
                    return (
                      (r_7 = o_8.sent) ||
                        e_5({
                          name: "lang-main",
                          params: {
                            lang: n_6.state.lang,
                          },
                        }),
                      o_8.abrupt("return", {
                        title: r_7.sTitle,
                        content: r_7.sContent,
                        pdfUrl: r_7.pdfUrl,
                      })
                    );
                  case 6:
                  case "end":
                    return o_8.stop();
                }
            }, o_4);
          }),
        )();
      },
    },
    vendorBundle2 = webpackRequire(36),
    component = Object(vendorBundle2.a)(
      f_2,
      function () {
        var t_9 = this,
          o_10 = t_9._self._c;
        return o_10(
          "client-only",
          [
            t_9.pdfUrl
              ? o_10("protocol-pdf", {
                  attrs: {
                    "is-mob": !1,
                    "pdf-url": t_9.pdfUrl,
                  },
                })
              : o_10("protocol", {
                  attrs: {
                    title: t_9.title,
                    content: t_9.content,
                  },
                }),
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
  webpackExports.default = component.exports;
};
