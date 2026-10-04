// page:lang-company-about — module 1443 from 9221d05
// module 1443 from 9221d05.js
// deps: 32, 98, 1142, 1118, 36
const module_1443 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    r_1 = (webpackRequire(98), webpackRequire(1142)),
    protocolCMSAPI = webpackRequire(1118),
    l_2 = {
      layout: "empty",
      components: {
        protocol: r_1.a,
      },
      head: function () {
        return {
          title: "".concat(this.title).concat(this.$getI18nWord("seoTitlePrefix")),
        };
      },
      asyncData: function (t_3) {
        return Object(vendorBundle.a)(
          regeneratorRuntime.mark(function e_4() {
            var o_5, n_6, r_7;
            return regeneratorRuntime.wrap(function (e_8) {
              for (;;)
                switch ((e_8.prev = e_8.next)) {
                  case 0:
                    return (
                      (o_5 = t_3.redirect),
                      (n_6 = t_3.store),
                      t_3.res,
                      (e_8.next = 3),
                      protocolCMSAPI.a.getJpAbout({
                        data: {
                          sLangKey: n_6.state.lang,
                        },
                      })
                    );
                  case 3:
                    return (
                      (r_7 = e_8.sent) ||
                        o_5({
                          name: "lang-main",
                          params: {
                            lang: n_6.state.lang,
                          },
                        }),
                      e_8.abrupt("return", {
                        title: r_7.sTitle,
                        content: r_7.sContent,
                      })
                    );
                  case 6:
                  case "end":
                    return e_8.stop();
                }
            }, e_4);
          }),
        )();
      },
    },
    vendorBundle2 = webpackRequire(36),
    component = Object(vendorBundle2.a)(
      l_2,
      function () {
        var t_9 = this,
          e_10 = t_9._self._c;
        return e_10(
          "client-only",
          [
            e_10("protocol", {
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
