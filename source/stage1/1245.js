// user-model loading overlay (#miHoYoUserModelLoading) — module 1245 from fd57a96
// module 1245 from fd57a96.js
// deps: 1246, 1166, 1248
const module_1245 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (Object.defineProperty(webpackExports, "__esModule", {
    value: !0,
  }),
    webpackRequire(1246));
  var userModelUtils = webpackRequire(1166),
    r_1 = function (e_3) {
      return document.getElementById(e_3);
    };
  if (!userModelUtils.isSSR && !r_1("miHoYoUserModelLoading")) {
    var d_2 = document.createElement("div");
    ((d_2.innerHTML = webpackRequire(1248)), document.body.appendChild(d_2));
  }
  webpackExports.default = {
    show: function () {
      var e_4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "数据加载中";
      userModelUtils.isSSR ||
        ((r_1("miHoYoUserModelLoadingText").innerText = e_4),
        (r_1("miHoYoUserModelLoading").style.display = "block"));
    },
    hide: function () {
      userModelUtils.isSSR || (r_1("miHoYoUserModelLoading").style.display = "none");
    },
  };
};
