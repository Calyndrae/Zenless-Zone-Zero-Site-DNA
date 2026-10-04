// user-model request merge (in-flight de-duplication) — module 1241 from fd57a96
// module 1241 from fd57a96.js
// deps: 77, 1176, 1242, 1166
const module_1241 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(77),
    Object.defineProperty(webpackExports, "__esModule", {
      value: !0,
    }));
  var n_1,
    userModelMemoryStore = webpackRequire(1176),
    userModelEventBus = webpackRequire(1242),
    l_2 =
      (n_1 = userModelEventBus) && n_1.__esModule
        ? n_1
        : {
            default: n_1,
          },
    userModelUtils = webpackRequire(1166);
  var f_3 = new userModelMemoryStore.Store("requestQueue"),
    m_4 = function (e_5) {
      return f_3.get(e_5);
    };
  webpackExports.default = {
    merge: function (e_6) {
      if (userModelUtils.isSSR) return !1;
      var t_7 = m_4(e_6);
      return (
        (0, userModelUtils.log)("request merge start,urlKey & request", e_6, JSON.stringify(t_7)),
        t_7
          ? !!t_7.isRequesting &&
            ((0, userModelUtils.log)("request merge success", e_6),
            new Promise(function (t_8, o_9) {
              ((0, userModelUtils.log)("request merge event bind "),
                l_2.default.on(e_6, function (n_10) {
                  return (
                    (0, userModelUtils.log)("request merge resolve", e_6, n_10),
                    n_10.rsp.isSuccess ? t_8(n_10.rsp.data) : o_9(n_10.rsp.data)
                  );
                }));
            }))
          : ((function (e_11) {
              (f_3.set(e_11, {
                isRequesting: !0,
                timestamp: (0, userModelUtils.getTimestamp)(),
              }),
                (0, userModelUtils.log)("request merge set after", e_11, m_4(e_11)));
            })(e_6),
            (0, userModelUtils.log)("request merge first", e_6),
            !1)
      );
    },
    complete: function (e_12, t_13, data) {
      !(function (e_14, t_15, data) {
        (l_2.default.emit({
          type: e_14,
          rsp: {
            isSuccess: t_15,
            data: data,
          },
        }),
          f_3.set(e_14, null),
          (0, userModelUtils.log)("request merge remove", e_14));
      })(e_12, t_13, data);
    },
    remove: function (e_16) {
      (f_3.set(e_16, null), (0, userModelUtils.log)("merge request remove", e_16));
    },
  };
};
