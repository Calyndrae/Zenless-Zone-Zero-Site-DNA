// ip-location plugin (setIsEnIp) — module 330 from 8c4c131
// module 330 from 8c4c131.js
// deps: 32, 98, 28, 114, 24
const module_330 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(32),
    l_1 = (webpackRequire(98), webpackRequire(28)),
    vendorBundle2 = webpackRequire(114),
    vendorBundleDefault = webpackRequire.n(vendorBundle2);
  webpackExports.a = (function () {
    var t_2 = Object(vendorBundle.a)(
      regeneratorRuntime.mark(function t_4(e_3) {
        var r_5, m_6, d_7, c_8;
        return regeneratorRuntime.wrap(
          function (t_9) {
            for (;;)
              switch ((t_9.prev = t_9.next)) {
                case 0:
                  return (
                    (r_5 = e_3.app),
                    (m_6 = (function () {
                      var t_10 = Object(vendorBundle.a)(
                        regeneratorRuntime.mark(function t_11() {
                          var e_12, o_13, r_14, m_15, d_16;
                          return regeneratorRuntime.wrap(function (t_17) {
                            for (;;)
                              switch ((t_17.prev = t_17.next)) {
                                case 0:
                                  return (
                                    (e_12 = {}),
                                    "production" !== l_1.environment &&
                                      !0 &&
                                      ((o_13 = webpackRequire(24)),
                                      (r_14 = o_13.QS),
                                      (m_15 = r_14.ip),
                                      (e_12 = m_15
                                        ? {
                                            "x-rpc-e_client_ip": m_15,
                                          }
                                        : {})),
                                    (t_17.next = 5),
                                    vendorBundleDefault.a.get(
                                      "".concat(
                                        l_1.ipApiBase,
                                        "/event/event_fe_info/ip_location?game_biz=nap_global&ip_location_type=1&ip_config_key=ftc_country_code",
                                      ),
                                      {
                                        headers: e_12,
                                        withCredentials: !0,
                                      },
                                    )
                                  );
                                case 5:
                                  return ((d_16 = t_17.sent), t_17.abrupt("return", d_16.data.data));
                                case 7:
                                case "end":
                                  return t_17.stop();
                              }
                          }, t_11);
                        }),
                      );
                      return function () {
                        return t_10.apply(this, arguments);
                      };
                    })()),
                    (t_9.prev = 2),
                    (t_9.next = 5),
                    m_6()
                  );
                case 5:
                  ((d_7 = t_9.sent),
                    (c_8 = d_7.fe_2299282),
                    r_5.store.commit("setIsEnIp", c_8),
                    (t_9.next = 12));
                  break;
                case 10:
                  ((t_9.prev = 10), (t_9.t0 = t_9.catch(2)));
                case 12:
                case "end":
                  return t_9.stop();
              }
          },
          t_4,
          null,
          [[2, 10]],
        );
      }),
    );
    return function (e_18) {
      return t_2.apply(this, arguments);
    };
  })();
};
