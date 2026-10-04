/**
 * theme-mode-helper — readable reconstruction of webpack module 538 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * Small theme-mode helper library (UMD factory applied to webpack exports). It defines a `ThemeMode` enum (`dark`/`light`), `setGlogalTheme(mode)` which sets the `theme-mode` attribute on `<html>` (default `light`), and `setBrandTheme(brand, isDark)` which applies the dark/light theme mode and sets the `brand` attribute on `<html>`.
 *
 * Exports (minified key → meaning):
 *   setBrandTheme → setBrandTheme(brand, isDark) — sets theme-mode and brand attributes on document.documentElement
 *   setGlogalTheme → setGlogalTheme(mode) — sets the theme-mode attribute on document.documentElement
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 538 from be1f69b.js
// deps:
const module_538 = function (webpackModule, webpackExports, webpackRequire) {
  !(function (moduleExports) {
    "use strict";

    var ThemeMode;
    !(function (themeModeEnum) {
      ((themeModeEnum.DARK = "dark"), (themeModeEnum.LIGHT = "light"));
    })(ThemeMode || (ThemeMode = {}));
    const setGlobalTheme = (mode) => {
      document.documentElement.setAttribute("theme-mode", mode || ThemeMode.LIGHT);
    };
    ((moduleExports.setBrandTheme = (brand, isDark) => {
      const themeMode = isDark ? ThemeMode.DARK : ThemeMode.LIGHT;
      (setGlobalTheme(themeMode), document.documentElement.setAttribute("brand", brand));
    }),
      (moduleExports.setGlogalTheme = setGlobalTheme),
      Object.defineProperty(moduleExports, "__esModule", {
        value: !0,
      }));
  })(webpackExports);
};
