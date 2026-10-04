// nuxt axios plugin (baseURL, retcode handling, memoryCache) — module 341 from 8c4c131
// module 341 from 8c4c131.js
// deps: 500, 322, 28
const module_341 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var localStorageMemoryCacheUtilities = webpackRequire(500),
    lodash = webpackRequire(322),
    lodashDefault = webpackRequire.n(lodash);
  function A_1(t_6) {
    var e_7 = this.$axios;
    console.log(e_7, t_6);
  }
  function m_2(t_8) {
    var e_9 = t_8.data,
      n_10 = this.redirect,
      o_11 = this.app.router;
    switch (e_9.retcode) {
      case -100:
        (this.$toast({
          content: "请登录后再操作",
        }),
          n_10("/login"));
        break;
      case -200:
        n_10("/initPersonInfo");
        break;
      case -300:
        n_10("/bindMobile");
        break;
      case 1001:
        o_11.go(-1);
    }
  }
  function d_3(t_12) {
    "Network Error" === t_12.message && void 0 === t_12.response
      ? this.$toast({
          content: "网络错误，请检查您的网络",
        })
      : this.$toast({
          content: "".concat(t_12.code, "___").concat(t_12.message),
        });
  }
  var c_4 = {
      baseURL: webpackRequire(28).apiBase,
      withCredentials: !0,
    },
    h_5 = function (t_13) {
      var e_14 = t_13.$axios;
      (lodashDefault.a.merge(e_14.defaults, c_4),
        e_14.onRequest(function (e_15) {
          A_1.bind(t_13)(e_15, t_13);
        }),
        e_14.onResponse(function (e_16) {
          m_2.bind(t_13)(e_16, t_13);
        }),
        e_14.onError(function (e_17) {
          d_3.bind(t_13)(e_17, t_13);
        }));
    };
  webpackExports.a = function (t_18) {
    (localStorageMemoryCacheUtilities.memoryCache.set("nuxtContext", t_18), h_5(t_18));
  };
};
