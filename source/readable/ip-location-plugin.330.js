/**
 * ip-location-plugin — readable reconstruction of webpack module 330 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Async Nuxt plugin that detects the visitor's region. It requests `<ipApiBase>/event/event_fe_info/ip_location?game_biz=nap_global&ip_location_type=1&ip_config_key=ftc_country_code` with axios (credentials included, and in non-production builds an `x-rpc-e_client_ip` header taken from the `ip` query parameter), reads the `fe_2299282` flag from the response data and commits it to the store via the `setIsEnIp` mutation, silently ignoring request errors.
 *
 * Exports (minified key → meaning):
 *   a → the async Nuxt plugin function (context) that sets store.isEnIp
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 330 from 8c4c131.js
// deps: 32, 98, 28, 114, 24
const module_330 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(32),
    envConfig = (webpackRequire(98), webpackRequire(28)),
    vendorBundle2 = webpackRequire(114),
    vendorBundleDefault = webpackRequire.n(vendorBundle2);
  webpackExports.a = (function () {
    var pluginAsync = Object(vendorBundle.a)(
      regeneratorRuntime.mark(function ipLocationPlugin(nuxtContext) {
        var app, fetchIpLocation, ipLocationData, isEnIp;
        return regeneratorRuntime.wrap(
          function (generatorContext) {
            for (;;)
              switch ((generatorContext.prev = generatorContext.next)) {
                case 0:
                  return (
                    (app = nuxtContext.app),
                    (fetchIpLocation = (function () {
                      var fetchAsync = Object(vendorBundle.a)(
                        regeneratorRuntime.mark(function fetchIpLocationGenerator() {
                          var headers, urlUtils, queryString, debugIp, response;
                          return regeneratorRuntime.wrap(function (fetchContext) {
                            for (;;)
                              switch ((fetchContext.prev = fetchContext.next)) {
                                case 0:
                                  return (
                                    (headers = {}),
                                    "production" !== envConfig.environment &&
                                      !0 &&
                                      ((urlUtils = webpackRequire(24)),
                                      (queryString = urlUtils.QS),
                                      (debugIp = queryString.ip),
                                      (headers = debugIp
                                        ? {
                                            "x-rpc-e_client_ip": debugIp,
                                          }
                                        : {})),
                                    (fetchContext.next = 5),
                                    vendorBundleDefault.a.get(
                                      "".concat(
                                        envConfig.ipApiBase,
                                        "/event/event_fe_info/ip_location?game_biz=nap_global&ip_location_type=1&ip_config_key=ftc_country_code",
                                      ),
                                      {
                                        headers: headers,
                                        withCredentials: !0,
                                      },
                                    )
                                  );
                                case 5:
                                  return (
                                    (response = fetchContext.sent),
                                    fetchContext.abrupt("return", response.data.data)
                                  );
                                case 7:
                                case "end":
                                  return fetchContext.stop();
                              }
                          }, fetchIpLocationGenerator);
                        }),
                      );
                      return function () {
                        return fetchAsync.apply(this, arguments);
                      };
                    })()),
                    (generatorContext.prev = 2),
                    (generatorContext.next = 5),
                    fetchIpLocation()
                  );
                case 5:
                  ((ipLocationData = generatorContext.sent),
                    (isEnIp = ipLocationData.fe_2299282),
                    app.store.commit("setIsEnIp", isEnIp),
                    (generatorContext.next = 12));
                  break;
                case 10:
                  ((generatorContext.prev = 10), (generatorContext.t0 = generatorContext.catch(2)));
                case 12:
                case "end":
                  return generatorContext.stop();
              }
          },
          ipLocationPlugin,
          null,
          [[2, 10]],
        );
      }),
    );
    return function (pluginContext) {
      return pluginAsync.apply(this, arguments);
    };
  })();
};
