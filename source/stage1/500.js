// localStorage / memory cache utilities — module 500 from 8c4c131
// module 500 from 8c4c131.js
// deps:
const module_500 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  function o_1(t_7, e_8) {
    var n_9 = window.localStorage,
      o_10 = JSON.stringify({
        timestamp: new Date().getTime(),
        value: e_8,
      });
    n_9.setItem(t_7, o_10);
  }
  function l_2(t_11) {
    var e_12 = window.localStorage.getItem(t_11);
    return null == e_12 ? null : JSON.parse(e_12).value;
  }
  function r_3(t_13) {
    window.localStorage.removeItem(t_13);
  }
  function A_4(t_14) {
    var e_15 = window.localStorage.getItem(t_14);
    if (void 0 !== e_15) return JSON.parse(e_15);
  }
  (webpackRequire.r(webpackExports),
    webpackRequire.d(webpackExports, "setLocalStorageCache", function () {
      return o_1;
    }),
    webpackRequire.d(webpackExports, "getLocalStorageCache", function () {
      return l_2;
    }),
    webpackRequire.d(webpackExports, "removeLocalStorageCache", function () {
      return r_3;
    }),
    webpackRequire.d(webpackExports, "getLocalStorageInfo", function () {
      return A_4;
    }),
    webpackRequire.d(webpackExports, "memoryCache", function () {
      return d_6;
    }));
  var m_5,
    d_6 =
      ((m_5 = {}),
      {
        set: function (t_16, e_17) {
          m_5[t_16] = {
            timestamp: Date.now(),
            value: e_17,
          };
        },
        get: function (t_18) {
          return m_5[t_18] ? m_5[t_18].value : null;
        },
        remove: function (t_19) {
          void 0 !== t_19 && delete m_5[t_19];
        },
        getInfo: function (t_20) {
          return m_5[t_20];
        },
      });
};
