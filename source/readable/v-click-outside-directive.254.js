/**
 * v-click-outside-directive — readable reconstruction of webpack module 254 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * Bundled `v-click-outside` library (CommonJS export of an IIFE). It defines a `click-outside` Vue directive that, on bind, normalizes the binding value (function or `{handler, middleware, events, isActive, detectIframe, capture}`), attaches `touchstart` or `click` listeners on `document.documentElement` that call the handler when the event path does not contain the element, optionally adds a `window` blur listener that fires when focus moves into an `IFRAME` outside the element, stores the listeners on `el['__v-click-outside']`, re-binds on value change in `update`, and removes them on `unbind`. It exports `{ install(Vue), directive }`.
 *
 * Exports (minified key → meaning):
 *   module.exports → the v-click-outside plugin object ({ install, directive })
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 254 from be1f69b.js
// deps:
const module_254 = function (webpackModule, webpackExports, webpackRequire) {
  webpackModule.exports = (function () {
    var HANDLERS_PROPERTY = "__v-click-outside",
      hasWindow = "undefined" != typeof window,
      hasNavigator = "undefined" != typeof navigator,
      defaultEvents =
        hasWindow && ("ontouchstart" in window || (hasNavigator && navigator.msMaxTouchPoints > 0))
          ? ["touchstart"]
          : ["click"];
    function execHandler(execArgs) {
      var triggerEvent = execArgs.event,
        execHandlerFn = execArgs.handler;
      (0, execArgs.middleware)(triggerEvent) && execHandlerFn(triggerEvent);
    }
    function bind(el, binding) {
      var config = (function (bindingValue) {
          var isFunction = "function" == typeof bindingValue;
          if (!isFunction && "object" != typeof bindingValue)
            throw new Error("v-click-outside: Binding value must be a function or an object");
          return {
            handler: isFunction ? bindingValue : bindingValue.handler,
            middleware:
              bindingValue.middleware ||
              function (passedEvent) {
                return passedEvent;
              },
            events: bindingValue.events || defaultEvents,
            isActive: !(!1 === bindingValue.isActive),
            detectIframe: !(!1 === bindingValue.detectIframe),
            capture: !!bindingValue.capture,
          };
        })(binding.value),
        handler = config.handler,
        middleware = config.middleware,
        detectIframe = config.detectIframe,
        capture = config.capture;
      if (config.isActive) {
        if (
          ((el[HANDLERS_PROPERTY] = config.events.map(function (eventName) {
            return {
              event: eventName,
              srcTarget: document.documentElement,
              handler: function (outsideEvent) {
                return (function (onEventArgs) {
                  var targetEl = onEventArgs.el,
                    domEvent = onEventArgs.event,
                    eventHandler = onEventArgs.handler,
                    eventMiddleware = onEventArgs.middleware,
                    eventPath = (domEvent.composedPath && domEvent.composedPath()) || domEvent.path;
                  (eventPath ? eventPath.indexOf(targetEl) < 0 : !targetEl.contains(domEvent.target)) &&
                    execHandler({
                      event: domEvent,
                      handler: eventHandler,
                      middleware: eventMiddleware,
                    });
                })({
                  el: el,
                  event: outsideEvent,
                  handler: handler,
                  middleware: middleware,
                });
              },
              capture: capture,
            };
          })),
          detectIframe)
        ) {
          var blurListener = {
            event: "blur",
            srcTarget: window,
            handler: function (blurEvent) {
              return (function (blurArgs) {
                var blurEl = blurArgs.el,
                  blurDomEvent = blurArgs.event,
                  blurHandler = blurArgs.handler,
                  blurMiddleware = blurArgs.middleware;
                setTimeout(function () {
                  var activeElement = document.activeElement;
                  activeElement &&
                    "IFRAME" === activeElement.tagName &&
                    !blurEl.contains(activeElement) &&
                    execHandler({
                      event: blurDomEvent,
                      handler: blurHandler,
                      middleware: blurMiddleware,
                    });
                }, 0);
              })({
                el: el,
                event: blurEvent,
                handler: handler,
                middleware: middleware,
              });
            },
            capture: capture,
          };
          el[HANDLERS_PROPERTY] = [].concat(el[HANDLERS_PROPERTY], [blurListener]);
        }
        el[HANDLERS_PROPERTY].forEach(function (listener) {
          var listenerEvent = listener.event,
            srcTarget = listener.srcTarget,
            listenerHandler = listener.handler;
          return setTimeout(function () {
            el[HANDLERS_PROPERTY] && srcTarget.addEventListener(listenerEvent, listenerHandler, capture);
          }, 0);
        });
      }
    }
    function unbind(unbindEl) {
      ((unbindEl[HANDLERS_PROPERTY] || []).forEach(function (registeredListener) {
        return registeredListener.srcTarget.removeEventListener(
          registeredListener.event,
          registeredListener.handler,
          registeredListener.capture,
        );
      }),
        delete unbindEl[HANDLERS_PROPERTY]);
    }
    var directive = hasWindow
      ? {
          bind: bind,
          update: function (updateEl, updateBinding) {
            var value = updateBinding.value,
              oldValue = updateBinding.oldValue;
            JSON.stringify(value) !== JSON.stringify(oldValue) &&
              (unbind(updateEl),
              bind(updateEl, {
                value: value,
              }));
          },
          unbind: unbind,
        }
      : {};
    return {
      install: function (Vue) {
        Vue.directive("click-outside", directive);
      },
      directive: directive,
    };
  })();
};
