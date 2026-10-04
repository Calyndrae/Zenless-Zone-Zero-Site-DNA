// xn--e1aybc (component) — module 493 from be1f69b
// module 493 from be1f69b.js
// deps: 30, 38, 89
const module_493 = function (webpackModule, webpackExports, webpackRequire) {
  var vendorBundle = webpackRequire(30),
    vendorBundle2 = webpackRequire(38),
    vendorBundle3 = webpackRequire(89),
    l_1 = vendorBundle2("iterator");
  webpackModule.exports = !vendorBundle(function () {
    var e_2 = new URL("b?a=1&b=2&c=3", "http://a"),
      t_3 = e_2.searchParams,
      n_4 = "";
    return (
      (e_2.pathname = "c%20d"),
      t_3.forEach(function (e_5, r_6) {
        (t_3.delete("b"), (n_4 += r_6 + e_5));
      }),
      (vendorBundle3 && !e_2.toJSON) ||
        !t_3.sort ||
        "http://a/c%20d?a=1&c=3" !== e_2.href ||
        "3" !== t_3.get("c") ||
        "a=1" !== String(new URLSearchParams("?a=1")) ||
        !t_3[l_1] ||
        "a" !== new URL("https://a@b").username ||
        "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
        "xn--e1aybc" !== new URL("http://тест").host ||
        "#%D0%B1" !== new URL("http://a#б").hash ||
        "a1c3" !== n_4 ||
        "x" !== new URL("http://x", void 0).host
    );
  });
};
