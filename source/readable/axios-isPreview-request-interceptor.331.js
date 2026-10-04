/**
 * axios-isPreview-request-interceptor — readable reconstruction of webpack module 331 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Axios setup module with no exports: it registers a global axios request interceptor that, when the build environment is `test` or `prerelease`, adds `isPreview: 1` to the request params and then copies the params into a new object (Babel `objectSpread2` helper using `ownKeys` and `defineProperty`).
 *
 * Exports (minified key → meaning):
 *   (none)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 331 from 8c4c131.js
// deps: 85, 84, 67, 105, 106, 56, 28, 114
const module_331 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(85), webpackRequire(84), webpackRequire(67), webpackRequire(105), webpackRequire(106));
  var vendorBundle = webpackRequire(56),
    siteConfigConstants = webpackRequire(28),
    vendorBundle2 = webpackRequire(114),
    vendorBundleDefault = webpackRequire.n(vendorBundle2);
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      (enumerableOnly &&
        (symbols = symbols.filter(function (symbol) {
          return Object.getOwnPropertyDescriptor(object, symbol).enumerable;
        })),
        keys.push.apply(keys, symbols));
    }
    return keys;
  }
  var isPreviewEnv = ["test", "prerelease"].indexOf(siteConfigConstants.environment) > -1;
  vendorBundleDefault.a.interceptors.request.use(function (requestConfig) {
    var rawParams = requestConfig.params,
      params = void 0 === rawParams ? {} : rawParams;
    return (
      isPreviewEnv && (params.isPreview = 1),
      (requestConfig.params = (function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                Object(vendorBundle.a)(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
              : ownKeys(Object(source)).forEach(function (propKey) {
                  Object.defineProperty(target, propKey, Object.getOwnPropertyDescriptor(source, propKey));
                });
        }
        return target;
      })({}, params)),
      requestConfig
    );
  });
};
