// user-model request helper — module 1240 from fd57a96
// module 1240 from fd57a96.js
// deps: 77, 1166, 1176
const module_1240 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(77),
    Object.defineProperty(webpackExports, "__esModule", {
      value: !0,
    }));
  var userModelUtils = webpackRequire(1166),
    r_1 = new (webpackRequire(1176).Store)("responseData");
  webpackExports.default = {
    get: function (e_2) {
      var t_3 = r_1.get(e_2);
      return (
        (0, userModelUtils.log)("response cache get", e_2, t_3),
        t_3 ? Promise.resolve(JSON.parse(t_3)) : null
      );
    },
    set: function (e_4, data) {
      return (
        (0, userModelUtils.log)("response cache set", e_4, data),
        r_1.set(e_4, JSON.stringify(data)),
        !0
      );
    },
  };
};
