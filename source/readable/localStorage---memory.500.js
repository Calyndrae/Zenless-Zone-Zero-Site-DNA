/**
 * localStorage---memory — readable reconstruction of webpack module 500 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Cache utilities module (ES module named exports). It provides localStorage helpers that store values wrapped as JSON `{ timestamp, value }` (`setLocalStorageCache`, `getLocalStorageCache`, `removeLocalStorageCache`, `getLocalStorageInfo`) and an in-memory `memoryCache` object (backed by a closure map) with `set`, `get`, `remove` and `getInfo` methods using the same timestamped record shape.
 *
 * Exports (minified key → meaning):
 *   setLocalStorageCache → setLocalStorageCache(key, value) — stores a timestamped JSON record in localStorage
 *   getLocalStorageCache → getLocalStorageCache(key) — returns the stored value or null
 *   removeLocalStorageCache → removeLocalStorageCache(key) — removes the localStorage entry
 *   getLocalStorageInfo → getLocalStorageInfo(key) — returns the parsed { timestamp, value } record
 *   memoryCache → in-memory cache object { set, get, remove, getInfo }
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 500 from 8c4c131.js
// deps:
const module_500 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  function setLocalStorageCache(setKey, value) {
    var storage = window.localStorage,
      serialized = JSON.stringify({
        timestamp: new Date().getTime(),
        value: value,
      });
    storage.setItem(setKey, serialized);
  }
  function getLocalStorageCache(getKey) {
    var rawValue = window.localStorage.getItem(getKey);
    return null == rawValue ? null : JSON.parse(rawValue).value;
  }
  function removeLocalStorageCache(removeKey) {
    window.localStorage.removeItem(removeKey);
  }
  function getLocalStorageInfo(infoKey) {
    var rawInfo = window.localStorage.getItem(infoKey);
    if (void 0 !== rawInfo) return JSON.parse(rawInfo);
  }
  (webpackRequire.r(webpackExports),
    webpackRequire.d(webpackExports, "setLocalStorageCache", function () {
      return setLocalStorageCache;
    }),
    webpackRequire.d(webpackExports, "getLocalStorageCache", function () {
      return getLocalStorageCache;
    }),
    webpackRequire.d(webpackExports, "removeLocalStorageCache", function () {
      return removeLocalStorageCache;
    }),
    webpackRequire.d(webpackExports, "getLocalStorageInfo", function () {
      return getLocalStorageInfo;
    }),
    webpackRequire.d(webpackExports, "memoryCache", function () {
      return memoryCache;
    }));
  var memoryStore,
    memoryCache =
      ((memoryStore = {}),
      {
        set: function (memorySetKey, memoryValue) {
          memoryStore[memorySetKey] = {
            timestamp: Date.now(),
            value: memoryValue,
          };
        },
        get: function (memoryGetKey) {
          return memoryStore[memoryGetKey] ? memoryStore[memoryGetKey].value : null;
        },
        remove: function (memoryRemoveKey) {
          void 0 !== memoryRemoveKey && delete memoryStore[memoryRemoveKey];
        },
        getInfo: function (memoryInfoKey) {
          return memoryStore[memoryInfoKey];
        },
      });
};
