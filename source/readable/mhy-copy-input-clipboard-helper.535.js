/**
 * mhy-copy-input-clipboard-helper — readable reconstruction of webpack module 535 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * Bundled `mhy-copy-input` clipboard helper (a self-contained webpack bundle with its own module runtime). Its default export `clipboard({ text, onSuccess, onFail })` creates a temporary read-only `input.mhy-copy-input` (font-size 14px) holding the text, selects it, runs `document.execCommand('copy')` (throwing when `queryCommandSupported('copy')` is false), removes the input and calls `onSuccess` or `onFail`; its `install(Vue)` method sets `Vue.prototype.$clipboard`.
 *
 * Exports (minified key → meaning):
 *   module.exports → the clipboard copy function (with install(Vue) registering $clipboard)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 535 from be1f69b.js
// deps:
const module_535 = function (webpackModule, webpackExports, webpackRequire) {
  ("undefined" != typeof self && self,
    (webpackModule.exports = (function (modules) {
      var installedModules = {};
      function innerRequire(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var installedModule = (installedModules[moduleId] = {
          i: moduleId,
          l: !1,
          exports: {},
        });
        return (
          modules[moduleId].call(
            installedModule.exports,
            installedModule,
            installedModule.exports,
            innerRequire,
          ),
          (installedModule.l = !0),
          installedModule.exports
        );
      }
      return (
        (innerRequire.m = modules),
        (innerRequire.c = installedModules),
        (innerRequire.d = function (exportsObj, propName, getter) {
          innerRequire.o(exportsObj, propName) ||
            Object.defineProperty(exportsObj, propName, {
              enumerable: !0,
              get: getter,
            });
        }),
        (innerRequire.r = function (esModuleTarget) {
          ("undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(esModuleTarget, Symbol.toStringTag, {
              value: "Module",
            }),
            Object.defineProperty(esModuleTarget, "__esModule", {
              value: !0,
            }));
        }),
        (innerRequire.t = function (nsValue, nsMode) {
          if ((1 & nsMode && (nsValue = innerRequire(nsValue)), 8 & nsMode)) return nsValue;
          if (4 & nsMode && "object" == typeof nsValue && nsValue && nsValue.__esModule) return nsValue;
          var namespace = Object.create(null);
          if (
            (innerRequire.r(namespace),
            Object.defineProperty(namespace, "default", {
              enumerable: !0,
              value: nsValue,
            }),
            2 & nsMode && "string" != typeof nsValue)
          )
            for (var nsKey in nsValue)
              innerRequire.d(
                namespace,
                nsKey,
                function (boundKey) {
                  return nsValue[boundKey];
                }.bind(null, nsKey),
              );
          return namespace;
        }),
        (innerRequire.n = function (mod) {
          var getDefault =
            mod && mod.__esModule
              ? function () {
                  return mod.default;
                }
              : function () {
                  return mod;
                };
          return (innerRequire.d(getDefault, "a", getDefault), getDefault);
        }),
        (innerRequire.o = function (object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        }),
        (innerRequire.p = ""),
        innerRequire((innerRequire.s = 0))
      );
    })([
      function (clipboardModule, clipboardExports, clipboardRequire) {
        "use strict";

        function clipboard(copyOptions) {
          var text = copyOptions.text,
            onSuccess = copyOptions.onSuccess,
            onFail = copyOptions.onFail;
          try {
            var input = document.createElement("input");
            if (
              ((input.className = "mhy-copy-input"),
              (input.style.fontSize = "14px"),
              input.setAttribute("readonly", "readonly"),
              input.setAttribute("value", text),
              document.body.appendChild(input),
              input.select(),
              input.setSelectionRange(0, input.value.length),
              !document.queryCommandSupported("copy"))
            )
              throw (document.body.removeChild(input), new Error("当前浏览器不支持 execCommand"));
            document.execCommand("copy")
              ? (document.body.removeChild(input), onSuccess())
              : (document.body.removeChild(input), onFail());
          } catch (copyError) {
            onFail(copyError);
          }
        }
        (Object.defineProperty(clipboardExports, "__esModule", {
          value: !0,
        }),
          (clipboard.install = function (Vue) {
            Vue.prototype.$clipboard = clipboard;
          }),
          (clipboardExports.default = clipboard));
      },
    ]).default));
};
