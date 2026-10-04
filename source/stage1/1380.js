// shared helper — module 1380 from 8d80f48
// module 1380 from 8d80f48.js
// deps: 1381, 351, 1383
const module_1380 = function (webpackModule, webpackExports, webpackRequire) {
  var module1381 = webpackRequire(1381),
    vendorBundle = webpackRequire(351),
    module1383 = webpackRequire(1383),
    d_1 = /^[-+]0x[0-9a-f]+$/i,
    l_2 = /^0b[01]+$/i,
    f_3 = /^0o[0-7]+$/i,
    h_4 = parseInt;
  webpackModule.exports = function (e_5) {
    if ("number" == typeof e_5) return e_5;
    if (module1383(e_5)) return NaN;
    if (vendorBundle(e_5)) {
      var t_6 = "function" == typeof e_5.valueOf ? e_5.valueOf() : e_5;
      e_5 = vendorBundle(t_6) ? t_6 + "" : t_6;
    }
    if ("string" != typeof e_5) return 0 === e_5 ? e_5 : +e_5;
    e_5 = module1381(e_5);
    var n_7 = l_2.test(e_5);
    return n_7 || f_3.test(e_5) ? h_4(e_5.slice(2), n_7 ? 2 : 8) : d_1.test(e_5) ? NaN : +e_5;
  };
};
