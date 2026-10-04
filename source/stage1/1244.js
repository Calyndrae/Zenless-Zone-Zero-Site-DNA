// user-model message facade (loading / error / warn / success) — module 1244 from fd57a96
// module 1244 from fd57a96.js
// deps: 1245
const module_1244 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  Object.defineProperty(webpackExports, "__esModule", {
    value: !0,
  });
  var n_1,
    userModelLoadingOverlay = webpackRequire(1245),
    d_2 =
      (n_1 = userModelLoadingOverlay) && n_1.__esModule
        ? n_1
        : {
            default: n_1,
          };
  var l_3 = "error",
    c_4 = "warning",
    f_5 = "success",
    m_6 = function (e_7, t_8) {
      var title = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      console.log(e_7, t_8, title);
    };
  webpackExports.default = {
    showLoading: function () {
      var e_9 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      d_2.default.show(e_9);
    },
    hideLoading: function () {
      d_2.default.hide();
    },
    showErrorMessage: function (e_10) {
      var title = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      m_6(l_3, e_10, title);
    },
    showWarnMessage: function (e_11) {
      var title = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      m_6(c_4, e_11, title);
    },
    showSuccMessage: function (e_12) {
      var title = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      m_6(f_5, e_12, title);
    },
    isSuccessResponse: function (e_13) {
      return e_13 && 0 === e_13.retcode;
    },
    formatURL: function (e_14) {
      return e_14;
    },
    formatParams: function (e_15) {
      return e_15;
    },
    formatResult: function (e_16) {
      return e_16.data;
    },
    loadingDelay: 0,
  };
};
