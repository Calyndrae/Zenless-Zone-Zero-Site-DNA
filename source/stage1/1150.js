// unresolved — module 1150 from fcdddd8
// module 1150 from fcdddd8.js
// deps: 265, 350, 205
const module_1150 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.d(webpackExports, "a", function () {
    return l_1;
  });
  var vendorBundle = webpackRequire(265);
  var vendorBundle2 = webpackRequire(350),
    vendorBundle3 = webpackRequire(205);
  function l_1(e_2) {
    return (
      (function (e_3) {
        if (Array.isArray(e_3)) return Object(vendorBundle.a)(e_3);
      })(e_2) ||
      Object(vendorBundle2.a)(e_2) ||
      Object(vendorBundle3.a)(e_2) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
};
