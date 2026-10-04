/**
 * user-model-message-facade — readable reconstruction of webpack module 1244 (chunk fd57a96.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/fd57a96.js
 *
 * User-model message/config facade. Wraps the loading overlay (module 1245) with showLoading(text)/hideLoading(), and provides showErrorMessage/showWarnMessage/showSuccMessage which only console.log the level ("error"/"warning"/"success"), message and optional title. Also exposes request hooks used by the user-model request layer: isSuccessResponse (retcode === 0), identity formatURL/formatParams, formatResult (returns response.data) and loadingDelay = 0.
 *
 * Exports (minified key → meaning):
 *   default → message/config facade { showLoading, hideLoading, showErrorMessage, showWarnMessage, showSuccMessage, isSuccessResponse, formatURL, formatParams, formatResult, loadingDelay }
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1244 from fd57a96.js
// deps: 1245
const module_1244 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  Object.defineProperty(webpackExports, "__esModule", {
    value: !0,
  });
  var loadingOverlayModule,
    userModelLoadingOverlay = webpackRequire(1245),
    loadingOverlay =
      (loadingOverlayModule = userModelLoadingOverlay) && loadingOverlayModule.__esModule
        ? loadingOverlayModule
        : {
            default: loadingOverlayModule,
          };
  var errorLevel = "error",
    warningLevel = "warning",
    successLevel = "success",
    logMessage = function (level, message) {
      var title = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      console.log(level, message, title);
    };
  webpackExports.default = {
    showLoading: function () {
      var loadingText = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      loadingOverlay.default.show(loadingText);
    },
    hideLoading: function () {
      loadingOverlay.default.hide();
    },
    showErrorMessage: function (errorMessage) {
      var title = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      logMessage(errorLevel, errorMessage, title);
    },
    showWarnMessage: function (warnMessage) {
      var title = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      logMessage(warningLevel, warnMessage, title);
    },
    showSuccMessage: function (successMessage) {
      var title = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      logMessage(successLevel, successMessage, title);
    },
    isSuccessResponse: function (response) {
      return response && 0 === response.retcode;
    },
    formatURL: function (url) {
      return url;
    },
    formatParams: function (params) {
      return params;
    },
    formatResult: function (result) {
      return result.data;
    },
    loadingDelay: 0,
  };
};
