// page:m-lang-company-archive — module 1429 from f5b0acd
// module 1429 from f5b0acd.js
// deps: 32, 98, 1118, 1141, 36
const module_1429 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var vendorBundle = webpackRequire(32),
    r_1 = (webpackRequire(98), webpackRequire(1118)),
    c_2 = {
      layout: "empty",
      components: {
        protocol: webpackRequire(1141).a,
      },
      head: function () {
        return {
          title: "".concat(this.title).concat(this.$getI18nWord("seoTitlePrefix")),
        };
      },
      asyncData: function (t_3) {
        return Object(vendorBundle.a)(
          regeneratorRuntime.mark(function e_4() {
            var o_5, n_6, c_7;
            return regeneratorRuntime.wrap(function (e_8) {
              for (;;)
                switch ((e_8.prev = e_8.next)) {
                  case 0:
                    return (
                      (o_5 = t_3.redirect),
                      (n_6 = t_3.store),
                      t_3.res,
                      (e_8.next = 3),
                      r_1.a.getKrHistory({
                        data: {
                          sLangKey: n_6.state.lang,
                        },
                      })
                    );
                  case 3:
                    return (
                      (c_7 = e_8.sent) ||
                        o_5({
                          name: "m-lang-main",
                        }),
                      e_8.abrupt("return", {
                        title: c_7.sTitle,
                        content: c_7.sContent,
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
      c_2,
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
