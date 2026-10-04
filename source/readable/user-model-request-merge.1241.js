/**
 * user-model-request-merge — readable reconstruction of webpack module 1241 (chunk fd57a96.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/fd57a96.js
 *
 * User-model in-flight request de-duplication ("request merge"). Keeps a Store named "requestQueue" (module 1176) keyed by URL key; merge(urlKey) returns false on SSR or when this is the first request (marking it isRequesting with a timestamp), otherwise returns a Promise that subscribes to the user-model event bus (module 1242) and resolves/rejects with rsp.data when the original request completes. complete(urlKey, isSuccess, data) emits the event and clears the queue entry; remove(urlKey) clears it. All steps are logged through userModelUtils.log.
 *
 * Exports (minified key → meaning):
 *   default → request-merge facade { merge(urlKey) -> false|Promise, complete(urlKey, isSuccess, data), remove(urlKey) }
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1241 from fd57a96.js
// deps: 77, 1176, 1242, 1166
const module_1241 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(77),
    Object.defineProperty(webpackExports, "__esModule", {
      value: !0,
    }));
  var eventBusModule,
    userModelMemoryStore = webpackRequire(1176),
    userModelEventBus = webpackRequire(1242),
    eventBus =
      (eventBusModule = userModelEventBus) && eventBusModule.__esModule
        ? eventBusModule
        : {
            default: eventBusModule,
          },
    userModelUtils = webpackRequire(1166);
  var requestQueueStore = new userModelMemoryStore.Store("requestQueue"),
    getQueueEntry = function (queueKey) {
      return requestQueueStore.get(queueKey);
    };
  webpackExports.default = {
    merge: function (urlKey) {
      if (userModelUtils.isSSR) return !1;
      var queueEntry = getQueueEntry(urlKey);
      return (
        (0, userModelUtils.log)("request merge start,urlKey & request", urlKey, JSON.stringify(queueEntry)),
        queueEntry
          ? !!queueEntry.isRequesting &&
            ((0, userModelUtils.log)("request merge success", urlKey),
            new Promise(function (resolve, reject) {
              ((0, userModelUtils.log)("request merge event bind "),
                eventBus.default.on(urlKey, function (mergeEvent) {
                  return (
                    (0, userModelUtils.log)("request merge resolve", urlKey, mergeEvent),
                    mergeEvent.rsp.isSuccess ? resolve(mergeEvent.rsp.data) : reject(mergeEvent.rsp.data)
                  );
                }));
            }))
          : ((function (startUrlKey) {
              (requestQueueStore.set(startUrlKey, {
                isRequesting: !0,
                timestamp: (0, userModelUtils.getTimestamp)(),
              }),
                (0, userModelUtils.log)("request merge set after", startUrlKey, getQueueEntry(startUrlKey)));
            })(urlKey),
            (0, userModelUtils.log)("request merge first", urlKey),
            !1)
      );
    },
    complete: function (completeUrlKey, isSuccess, data) {
      !(function (emitUrlKey, succeeded, data) {
        (eventBus.default.emit({
          type: emitUrlKey,
          rsp: {
            isSuccess: succeeded,
            data: data,
          },
        }),
          requestQueueStore.set(emitUrlKey, null),
          (0, userModelUtils.log)("request merge remove", emitUrlKey));
      })(completeUrlKey, isSuccess, data);
    },
    remove: function (removeUrlKey) {
      (requestQueueStore.set(removeUrlKey, null),
        (0, userModelUtils.log)("merge request remove", removeUrlKey));
    },
  };
};
