/**
 * user-model-memory-Store — readable reconstruction of webpack module 1176 (chunk fd57a96.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/fd57a96.js
 *
 * User-model in-memory key/value store. It initialises GLB.miHoYoUserModelMemoryCache = {} (GLB from userModelUtils, module 1166) and exports a Store class whose constructor(name = "defaultData") binds this.data to the named bucket in that global cache (creating it if missing), with get(key) and set(key, data). The default export is a Store instance on the "defaultData" bucket. Uses Babel createClass/classCallCheck helpers; no DOM or Vue.
 *
 * Exports (minified key → meaning):
 *   Store → Store class (named bucket in window.miHoYoUserModelMemoryCache) with get(key)/set(key, data)
 *   default → default Store instance ("defaultData" bucket)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1176 from fd57a96.js
// deps: 1166
const module_1176 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (Object.defineProperty(webpackExports, "__esModule", {
    value: !0,
  }),
    (webpackExports.Store = void 0));
  var createClass = (function () {
      function defineProperties(target, props) {
        for (var index = 0; index < props.length; index++) {
          var descriptor = props[index];
          ((descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            "value" in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor));
        }
      }
      return function (Constructor, protoProps, staticProps) {
        return (
          protoProps && defineProperties(Constructor.prototype, protoProps),
          staticProps && defineProperties(Constructor, staticProps),
          Constructor
        );
      };
    })(),
    userModelUtils = webpackRequire(1166);
  function classCallCheck(instance, ClassConstructor) {
    if (!(instance instanceof ClassConstructor)) throw new TypeError("Cannot call a class as a function");
  }
  userModelUtils.GLB.miHoYoUserModelMemoryCache = {};
  var DEFAULT_STORE_NAME = "defaultData",
    Store = (webpackExports.Store = (function () {
      function StoreClass() {
        var storeName = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DEFAULT_STORE_NAME;
        (classCallCheck(this, StoreClass),
          userModelUtils.GLB.miHoYoUserModelMemoryCache[storeName] ||
            (userModelUtils.GLB.miHoYoUserModelMemoryCache[storeName] = {}),
          (this.data = userModelUtils.GLB.miHoYoUserModelMemoryCache[storeName]));
      }
      return (
        createClass(StoreClass, [
          {
            key: "get",
            value: function (getKey) {
              return this.data[getKey];
            },
          },
          {
            key: "set",
            value: function (setKey, data) {
              this.data[setKey] = data;
            },
          },
        ]),
        StoreClass
      );
    })()),
    defaultStore = new Store();
  webpackExports.default = defaultStore;
};
