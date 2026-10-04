// axios isPreview request interceptor — module 331 from 8c4c131
// module 331 from 8c4c131.js
// deps: 85, 84, 67, 105, 106, 56, 28, 114
const module_331 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(85), webpackRequire(84), webpackRequire(67), webpackRequire(105), webpackRequire(106));
  var vendorBundle = webpackRequire(56),
    siteConfigConstants = webpackRequire(28),
    vendorBundle2 = webpackRequire(114),
    vendorBundleDefault = webpackRequire.n(vendorBundle2);
  function m_1(object, t_3) {
    var e_4 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var n_5 = Object.getOwnPropertySymbols(object);
      (t_3 &&
        (n_5 = n_5.filter(function (t_6) {
          return Object.getOwnPropertyDescriptor(object, t_6).enumerable;
        })),
        e_4.push.apply(e_4, n_5));
    }
    return e_4;
  }
  var d_2 = ["test", "prerelease"].indexOf(siteConfigConstants.environment) > -1;
  vendorBundleDefault.a.interceptors.request.use(function (t_7) {
    var e_8 = t_7.params,
      n_9 = void 0 === e_8 ? {} : e_8;
    return (
      d_2 && (n_9.isPreview = 1),
      (t_7.params = (function (t_10) {
        for (var i_11 = 1; i_11 < arguments.length; i_11++) {
          var source = null != arguments[i_11] ? arguments[i_11] : {};
          i_11 % 2
            ? m_1(Object(source), !0).forEach(function (e_12) {
                Object(vendorBundle.a)(t_10, e_12, source[e_12]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t_10, Object.getOwnPropertyDescriptors(source))
              : m_1(Object(source)).forEach(function (e_13) {
                  Object.defineProperty(t_10, e_13, Object.getOwnPropertyDescriptor(source, e_13));
                });
        }
        return t_10;
      })({}, n_9)),
      t_7
    );
  });
};
