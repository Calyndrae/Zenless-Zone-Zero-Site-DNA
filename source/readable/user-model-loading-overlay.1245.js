/**
 * user-model-loading-overlay — readable reconstruction of webpack module 1245 (chunk fd57a96.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/fd57a96.js
 *
 * User-model loading overlay. Requires its stylesheet (module 1246) and, when not in SSR and #miHoYoUserModelLoading is absent, appends a div containing the HTML template from module 1248 to document.body. Exports show(text = "数据加载中") which sets #miHoYoUserModelLoadingText innerText and displays #miHoYoUserModelLoading as block, and hide() which sets display none; both are no-ops under userModelUtils.isSSR.
 *
 * Exports (minified key → meaning):
 *   default → loading overlay controller { show(text), hide() } for #miHoYoUserModelLoading
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1245 from fd57a96.js
// deps: 1246, 1166, 1248
const module_1245 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (Object.defineProperty(webpackExports, "__esModule", {
    value: !0,
  }),
    webpackRequire(1246));
  var userModelUtils = webpackRequire(1166),
    getById = function (elementId) {
      return document.getElementById(elementId);
    };
  if (!userModelUtils.isSSR && !getById("miHoYoUserModelLoading")) {
    var overlayContainer = document.createElement("div");
    ((overlayContainer.innerHTML = webpackRequire(1248)), document.body.appendChild(overlayContainer));
  }
  webpackExports.default = {
    show: function () {
      var loadingText = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "数据加载中";
      userModelUtils.isSSR ||
        ((getById("miHoYoUserModelLoadingText").innerText = loadingText),
        (getById("miHoYoUserModelLoading").style.display = "block"));
    },
    hide: function () {
      userModelUtils.isSSR || (getById("miHoYoUserModelLoading").style.display = "none");
    },
  };
};
