/**
 * user-model-event-bus — readable reconstruction of webpack module 1242 (chunk fd57a96.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/fd57a96.js
 *
 * User-model event bus. Exports a singleton object whose handlers map is a Store named "eventHandlers" (module 1176). on(type, handler) appends a handler to the list for that type; emit(event) calls every handler registered for event.type and then clears that list (one-shot semantics); remove(type, handler) splices a single handler out of the list. No DOM or Vue involvement.
 *
 * Exports (minified key → meaning):
 *   default → event bus singleton { handlers, on(type, handler), emit(event), remove(type, handler) }
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1242 from fd57a96.js
// deps: 1176
const module_1242 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  Object.defineProperty(webpackExports, "__esModule", {
    value: !0,
  });
  var eventBus = {
    handlers: new (webpackRequire(1176).Store)("eventHandlers"),
    on: function (eventType, handler) {
      (void 0 === eventBus.handlers[eventType] && (eventBus.handlers[eventType] = []),
        eventBus.handlers[eventType].push(handler));
    },
    emit: function (event) {
      if (eventBus.handlers[event.type] instanceof Array) {
        for (var handlerList = eventBus.handlers[event.type], index = 0; index < handlerList.length; index++)
          handlerList[index](event);
        eventBus.handlers[event.type] = [];
      }
    },
    remove: function (removeEventType, handlerToRemove) {
      if (eventBus.handlers[removeEventType] instanceof Array)
        for (
          var registeredHandlers = eventBus.handlers[removeEventType], removeIndex = 0;
          removeIndex < registeredHandlers.length;
          removeIndex++
        )
          if (registeredHandlers[removeIndex] === handlerToRemove) {
            registeredHandlers.splice(removeIndex, 1);
            break;
          }
    },
  };
  webpackExports.default = eventBus;
};
