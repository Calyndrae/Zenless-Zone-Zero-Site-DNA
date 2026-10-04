// user-model memory Store — module 1176 from fd57a96
// module 1176 from fd57a96.js
// deps: 1166
const module_1176 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (Object.defineProperty(webpackExports, "__esModule", {
    value: !0,
  }),
    (webpackExports.Store = void 0));
  var n_1 = (function () {
      function e_6(e_7, t_8) {
        for (var i_9 = 0; i_9 < t_8.length; i_9++) {
          var o_10 = t_8[i_9];
          ((o_10.enumerable = o_10.enumerable || !1),
            (o_10.configurable = !0),
            "value" in o_10 && (o_10.writable = !0),
            Object.defineProperty(e_7, o_10.key, o_10));
        }
      }
      return function (t_11, o_12, n_13) {
        return (o_12 && e_6(t_11.prototype, o_12), n_13 && e_6(t_11, n_13), t_11);
      };
    })(),
    userModelUtils = webpackRequire(1166);
  function d_2(e_14, t_15) {
    if (!(e_14 instanceof t_15)) throw new TypeError("Cannot call a class as a function");
  }
  userModelUtils.GLB.miHoYoUserModelMemoryCache = {};
  var l_3 = "defaultData",
    c_4 = (webpackExports.Store = (function () {
      function e_16() {
        var t_17 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l_3;
        (d_2(this, e_16),
          userModelUtils.GLB.miHoYoUserModelMemoryCache[t_17] ||
            (userModelUtils.GLB.miHoYoUserModelMemoryCache[t_17] = {}),
          (this.data = userModelUtils.GLB.miHoYoUserModelMemoryCache[t_17]));
      }
      return (
        n_1(e_16, [
          {
            key: "get",
            value: function (e_18) {
              return this.data[e_18];
            },
          },
          {
            key: "set",
            value: function (e_19, data) {
              this.data[e_19] = data;
            },
          },
        ]),
        e_16
      );
    })()),
    f_5 = new c_4();
  webpackExports.default = f_5;
};
