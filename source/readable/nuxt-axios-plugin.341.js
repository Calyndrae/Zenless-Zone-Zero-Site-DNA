/**
 * nuxt-axios-plugin — readable reconstruction of webpack module 341 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Nuxt axios plugin. It stores the Nuxt context in `memoryCache` under `nuxtContext`, merges `{ baseURL: apiBase, withCredentials: true }` into `$axios.defaults` with lodash `merge`, and registers `$axios` hooks: `onRequest` logs the request, `onResponse` handles `retcode` values (-100 toast + redirect to `/login`, -200 to `/initPersonInfo`, -300 to `/bindMobile`, 1001 router back), and `onError` shows a `$toast` for network errors or `code___message`.
 *
 * Exports (minified key → meaning):
 *   a → the Nuxt axios plugin function (context)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 341 from 8c4c131.js
// deps: 500, 322, 28
const module_341 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var localStorageMemoryCacheUtilities = webpackRequire(500),
    lodash = webpackRequire(322),
    lodashDefault = webpackRequire.n(lodash);
  function onRequest(requestConfig) {
    var axios = this.$axios;
    console.log(axios, requestConfig);
  }
  function onResponse(response) {
    var responseData = response.data,
      redirect = this.redirect,
      router = this.app.router;
    switch (responseData.retcode) {
      case -100:
        (this.$toast({
          content: "请登录后再操作",
        }),
          redirect("/login"));
        break;
      case -200:
        redirect("/initPersonInfo");
        break;
      case -300:
        redirect("/bindMobile");
        break;
      case 1001:
        router.go(-1);
    }
  }
  function onError(error) {
    "Network Error" === error.message && void 0 === error.response
      ? this.$toast({
          content: "网络错误，请检查您的网络",
        })
      : this.$toast({
          content: "".concat(error.code, "___").concat(error.message),
        });
  }
  var axiosDefaults = {
      baseURL: webpackRequire(28).apiBase,
      withCredentials: !0,
    },
    setupAxios = function (context) {
      var axiosInstance = context.$axios;
      (lodashDefault.a.merge(axiosInstance.defaults, axiosDefaults),
        axiosInstance.onRequest(function (request) {
          onRequest.bind(context)(request, context);
        }),
        axiosInstance.onResponse(function (axiosResponse) {
          onResponse.bind(context)(axiosResponse, context);
        }),
        axiosInstance.onError(function (axiosError) {
          onError.bind(context)(axiosError, context);
        }));
    };
  webpackExports.a = function (nuxtContext) {
    (localStorageMemoryCacheUtilities.memoryCache.set("nuxtContext", nuxtContext), setupAxios(nuxtContext));
  };
};
