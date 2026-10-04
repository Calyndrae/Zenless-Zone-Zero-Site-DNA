// theme-mode helper (setBrandTheme) — module 538 from be1f69b
// module 538 from be1f69b.js
// deps:
const module_538 = function (webpackModule, webpackExports, webpackRequire) {
  !(function (e_1) {
    "use strict";

    var t_2;
    !(function (e_4) {
      ((e_4.DARK = "dark"), (e_4.LIGHT = "light"));
    })(t_2 || (t_2 = {}));
    const n_3 = (e_5) => {
      document.documentElement.setAttribute("theme-mode", e_5 || t_2.LIGHT);
    };
    ((e_1.setBrandTheme = (e_6, r_7) => {
      const o_8 = r_7 ? t_2.DARK : t_2.LIGHT;
      (n_3(o_8), document.documentElement.setAttribute("brand", e_6));
    }),
      (e_1.setGlogalTheme = n_3),
      Object.defineProperty(e_1, "__esModule", {
        value: !0,
      }));
  })(webpackExports);
};
