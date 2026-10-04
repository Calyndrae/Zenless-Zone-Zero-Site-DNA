/**
 * @me-toast-library — readable reconstruction of webpack module 534 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * Bundled `@me/toast` library (UMD factory called with webpack exports, core-js-pure/Babel runtime helpers, Vue and a shared utils module providing `IS_MOB` and `asyncTimeout`). It defines the `Toast` Vue component (props `duration`, `message`, `showContent`, `zIndex`, `opacity`, `isLoading`, `setInnerHtml`, `blockEvent`, `el`) rendering `.me-toast` with `me-toast__m`/`__pc`/`__pc__2k` and `__enter`/`__leave` modifiers, a loading `.me-toast-content__loading` block with an SVG `.me-toast__spinner`, or a `transition-group` of `.me-toast-content__toast` messages (`.me-toast-message`) that auto-remove after their duration; its scoped CSS (`data-v-634288c8_0`) is injected by an embedded style injector and `normalizeComponent`. A singleton toast manager mounts instances via `Vue.extend` into `document.body` or a given element and exposes `Toast(msg|options)` with `.loading`, `.clear`, `.allowToastMultiple` and `.disableToastMultiple`; the default export is a plugin whose `install(Vue, commonOptions)` sets `Vue.prototype.$mtoast`.
 *
 * Exports (minified key → meaning):
 *   Toast → the toast function (showToast) with loading/clear/allowToastMultiple/disableToastMultiple helpers
 *   default → the Vue plugin { install } that registers $mtoast
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 534 from be1f69b.js
// deps: 10, 15, 20, 16, 17, 25, 6, 21, 9, 92, 80, 81, 0, 44, 1, 8, 5, 511, 24, 2, 249, 33, 63
const module_534 = function (webpackModule, webpackExports, webpackRequire) {
  !(function (
    moduleExports,
    objectKeysModule,
    getOwnPropertySymbolsModule,
    filterModule,
    getOwnPropertyDescriptorModule,
    getOwnPropertyDescriptorsModule,
    definePropertiesModule,
    definePropertyModule,
    definePropertyHelperModule,
    typeofModule,
    classCallCheckModule,
    findIndexModule,
    spliceModule,
    forEachModule,
    findModule,
    VueModule,
    asyncToGeneratorModule,
    indexOfModule,
    regeneratorModule,
    meUtils,
    concatModule,
    setModule,
    mapModule,
    jsonStringifyModule,
  ) {
    "use strict";

    function interopDefault(moduleObj) {
      return moduleObj && "object" == typeof moduleObj && "default" in moduleObj
        ? moduleObj
        : {
            default: moduleObj,
          };
    }
    var headElement,
      objectKeys = interopDefault(objectKeysModule),
      getOwnPropertySymbols = interopDefault(getOwnPropertySymbolsModule),
      filter = interopDefault(filterModule),
      getOwnPropertyDescriptor = interopDefault(getOwnPropertyDescriptorModule),
      getOwnPropertyDescriptors = interopDefault(getOwnPropertyDescriptorsModule),
      defineProperties = interopDefault(definePropertiesModule),
      defineProperty = interopDefault(definePropertyModule),
      definePropertyHelper = interopDefault(definePropertyHelperModule),
      typeOf = interopDefault(typeofModule),
      classCallCheck = interopDefault(classCallCheckModule),
      findIndex = interopDefault(findIndexModule),
      splice = interopDefault(spliceModule),
      forEach = interopDefault(forEachModule),
      find = interopDefault(findModule),
      Vue = interopDefault(VueModule),
      asyncToGenerator = interopDefault(asyncToGeneratorModule),
      indexOf = interopDefault(indexOfModule),
      regenerator = interopDefault(regeneratorModule),
      concat = interopDefault(concatModule),
      SetCtor = interopDefault(setModule),
      mapInstanceProperty = interopDefault(mapModule),
      jsonStringify = interopDefault(jsonStringifyModule),
      toastOptions = {
        name: "Toast",
        props: {
          duration: {
            type: Number,
            default: 1e3,
          },
          message: {
            type: [String, Number],
            default: "",
          },
          showContent: {
            type: Boolean,
            default: !0,
          },
          zIndex: {
            type: Number,
            default: 9999,
          },
          opacity: {
            type: Number,
            default: 0.7,
          },
          isLoading: {
            type: Boolean,
            default: !1,
          },
          setInnerHtml: {
            type: Boolean,
            default: !1,
          },
          blockEvent: {
            type: Boolean,
            default: !0,
          },
          el: {
            type: null,
          },
        },
        data: function () {
          return {
            status: "enter",
            timer: [],
            IS_MOB: meUtils.IS_MOB,
            count: 0,
            toastArr: [],
            toastCount: 0,
          };
        },
        computed: {
          is2k: function () {
            return window.innerWidth >= 2e3;
          },
        },
        mounted: function () {
          var self = this;
          return asyncToGenerator.default(
            regenerator.default.mark(function mountedGenerator() {
              return regenerator.default.wrap(function (mountedContext) {
                for (;;)
                  switch ((mountedContext.prev = mountedContext.next)) {
                    case 0:
                      self.isLoading ? self.addTimer(self.duration) : self.addToast(self.$props);
                    case 1:
                    case "end":
                      return mountedContext.stop();
                  }
              }, mountedGenerator);
            }),
          )();
        },
        methods: {
          clear: function (toastId) {
            this.isLoading ? this.hide(!0) : this.removeToast(toastId);
          },
          addTimer: function (duration) {
            var timerSelf = this;
            return asyncToGenerator.default(
              regenerator.default.mark(function addTimerGenerator() {
                var timerList, timerListRef, timeout, timerIndex;
                return regenerator.default.wrap(function (addTimerContext) {
                  for (;;)
                    switch ((addTimerContext.prev = addTimerContext.next)) {
                      case 0:
                        if (((timerSelf.count += 1), !(duration > 0))) {
                          addTimerContext.next = 9;
                          break;
                        }
                        return (
                          (timeout = meUtils.asyncTimeout(duration)),
                          timerSelf.timer.push(timeout),
                          (addTimerContext.next = 6),
                          timeout.promise
                        );
                      case 6:
                        ((timerIndex = indexOf
                          .default((timerList = timerSelf.timer))
                          .call(timerList, timeout)),
                          splice.default((timerListRef = timerSelf.timer)).call(timerListRef, timerIndex, 1),
                          timerSelf.hide());
                      case 9:
                      case "end":
                        return addTimerContext.stop();
                    }
                }, addTimerGenerator);
              }),
            )();
          },
          hide: function (force) {
            ((this.count = 0 === this.count || force ? 0 : this.count - 1),
              0 === this.count && this.triggerLeave());
          },
          addToast: function (toastProps) {
            var newToastId = "toast_".concat(this.toastCount),
              formattedProps = this.formatProps(toastProps);
            return (this.pushToastToArr(formattedProps, newToastId), newToastId);
          },
          removeToast: function (removeId) {
            if (void 0 !== removeId) {
              var toastArrForFind,
                toastArrForSplice,
                toastIndex = findIndex
                  .default((toastArrForFind = this.toastArr))
                  .call(toastArrForFind, function (toastItem) {
                    return toastItem.id === removeId;
                  });
              -1 !== toastIndex &&
                splice.default((toastArrForSplice = this.toastArr)).call(toastArrForSplice, toastIndex, 1);
            } else this.toastArr = [];
            0 === this.toastArr.length && this.triggerLeave();
          },
          pushToastToArr: function (pushProps, pushId) {
            var pushSelf = this;
            return asyncToGenerator.default(
              regenerator.default.mark(function pushGenerator() {
                return regenerator.default.wrap(function (pushContext) {
                  for (;;)
                    switch ((pushContext.prev = pushContext.next)) {
                      case 0:
                        if (
                          (pushSelf.toastArr.push({
                            props: pushProps,
                            id: pushId,
                          }),
                          pushSelf.toastCount++,
                          !(pushProps.duration > 0))
                        ) {
                          pushContext.next = 6;
                          break;
                        }
                        return ((pushContext.next = 5), meUtils.asyncTimeout(pushProps.duration).promise);
                      case 5:
                        pushSelf.removeToast(pushId);
                      case 6:
                      case "end":
                        return pushContext.stop();
                    }
                }, pushGenerator);
              }),
            )();
          },
          addLoadingTime: function (loadingDuration) {
            addTimer(loadingDuration);
          },
          triggerLeave: function () {
            var leaveSelf = this;
            return asyncToGenerator.default(
              regenerator.default.mark(function leaveGenerator() {
                var rootEl, parentNode;
                return regenerator.default.wrap(function (leaveContext) {
                  for (;;)
                    switch ((leaveContext.prev = leaveContext.next)) {
                      case 0:
                        return (
                          leaveSelf.isLoading && (leaveSelf.status = "leave"),
                          (leaveContext.next = 3),
                          meUtils.asyncTimeout(500).promise
                        );
                      case 3:
                        0 === leaveSelf.count &&
                          0 === leaveSelf.toastArr.length &&
                          (leaveSelf.$destroy(!0),
                          null === (rootEl = leaveSelf.$el) ||
                            void 0 === rootEl ||
                            null === (parentNode = rootEl.parentNode) ||
                            void 0 === parentNode ||
                            parentNode.removeChild(leaveSelf.$el));
                      case 4:
                      case "end":
                        return leaveContext.stop();
                    }
                }, leaveGenerator);
              }),
            )();
          },
          formatProps: function (rawProps) {
            return {
              duration: this.getRealProp(rawProps.duration, 1e3),
              message: rawProps.message || "",
              showContent: rawProps.showContent || !0,
              zIndex: this.getRealProp(rawProps.zIndex, 9999),
              opacity: this.getRealProp(rawProps.opacity, 0.7),
              isLoading: rawProps.isLoading || !1,
              setInnerHtml: rawProps.setInnerHtml || !1,
            };
          },
          getRealProp: function (propValue, defaultValue) {
            return 0 === propValue ? 0 : propValue || defaultValue;
          },
        },
      },
      normalizeComponent = function (
        template,
        injectStyles,
        script,
        scopeId,
        isFunctionalTemplate,
        moduleIdentifier,
        shadowMode,
        createInjector,
        createInjectorSSR,
        createInjectorShadow,
      ) {
        "boolean" != typeof shadowMode &&
          ((createInjectorSSR = createInjector), (createInjector = shadowMode), (shadowMode = !1));
        var hook,
          componentOpts = "function" == typeof script ? script.options : script;
        if (
          (template &&
            template.render &&
            ((componentOpts.render = template.render),
            (componentOpts.staticRenderFns = template.staticRenderFns),
            (componentOpts._compiled = !0),
            isFunctionalTemplate && (componentOpts.functional = !0)),
          scopeId && (componentOpts._scopeId = scopeId),
          moduleIdentifier
            ? ((hook = function (ssrContext) {
                ((ssrContext =
                  ssrContext ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (ssrContext = __VUE_SSR_CONTEXT__),
                  injectStyles && injectStyles.call(this, createInjectorSSR(ssrContext)),
                  ssrContext &&
                    ssrContext._registeredComponents &&
                    ssrContext._registeredComponents.add(moduleIdentifier));
              }),
              (componentOpts._ssrRegister = hook))
            : injectStyles &&
              (hook = shadowMode
                ? function (shadowContext) {
                    injectStyles.call(
                      this,
                      createInjectorShadow(shadowContext, this.$root.$options.shadowRoot),
                    );
                  }
                : function (hookContext) {
                    injectStyles.call(this, createInjector(hookContext));
                  }),
          hook)
        )
          if (componentOpts.functional) {
            var originalRender = componentOpts.render;
            componentOpts.render = function (renderH, renderContext) {
              return (hook.call(renderContext), originalRender(renderH, renderContext));
            };
          } else {
            var hooksArray,
              existingBeforeCreate = componentOpts.beforeCreate;
            componentOpts.beforeCreate = existingBeforeCreate
              ? concat.default((hooksArray = [])).call(hooksArray, existingBeforeCreate, hook)
              : [hook];
          }
        return script;
      },
      isOldIE = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),
      styleGroups = {},
      createStyleInjector = function (injectorContext) {
        return function (styleId, styleDef) {
          return (function (id, css) {
            var groupKey = isOldIE ? css.media || "default" : id,
              styleGroup =
                styleGroups[groupKey] ||
                (styleGroups[groupKey] = {
                  ids: new SetCtor.default(),
                  styles: [],
                });
            if (!styleGroup.ids.has(id)) {
              styleGroup.ids.add(id);
              var code = css.source;
              if (
                (mapInstanceProperty.default(css) &&
                  ((code += "\n/*# sourceURL=" + mapInstanceProperty.default(css).sources[0] + " */"),
                  (code +=
                    "\n/*# sourceMappingURL=data:application/json;base64," +
                    btoa(
                      unescape(encodeURIComponent(jsonStringify.default(mapInstanceProperty.default(css)))),
                    ) +
                    " */")),
                styleGroup.element ||
                  ((styleGroup.element = document.createElement("style")),
                  (styleGroup.element.type = "text/css"),
                  css.media && styleGroup.element.setAttribute("media", css.media),
                  void 0 === headElement &&
                    (headElement = document.head || document.getElementsByTagName("head")[0]),
                  headElement.appendChild(styleGroup.element)),
                "styleSheet" in styleGroup.element)
              ) {
                var groupStyles;
                (styleGroup.styles.push(code),
                  (styleGroup.element.styleSheet.cssText = filter
                    .default((groupStyles = styleGroup.styles))
                    .call(groupStyles, Boolean)
                    .join("\n")));
              } else {
                var nodeIndex = styleGroup.ids.size - 1,
                  textNode = document.createTextNode(code),
                  childNodes = styleGroup.element.childNodes;
                (childNodes[nodeIndex] && styleGroup.element.removeChild(childNodes[nodeIndex]),
                  childNodes.length
                    ? styleGroup.element.insertBefore(textNode, childNodes[nodeIndex])
                    : styleGroup.element.appendChild(textNode));
              }
            }
          })(styleId, styleDef);
        };
      },
      componentOptions = toastOptions,
      render = function () {
        var vm = this,
          createElement = vm.$createElement,
          h = vm._self._c || createElement;
        return h(
          "div",
          {
            class: [
              "me-toast",
              vm.isLoading ? "me-toast__loading" : "",
              "me-toast__" + (vm.IS_MOB ? "m" : vm.is2k ? "pc__2k" : "pc"),
              "me-toast__" + vm.status,
            ],
            style: {
              pointerEvents: vm.blockEvent ? "auto" : "none",
              zIndex: vm.zIndex,
              position: vm.el ? "absolute" : "fixed",
            },
          },
          [
            vm.isLoading
              ? [
                  vm.showContent
                    ? h(
                        "div",
                        {
                          class: [
                            "me-toast-content",
                            "me-toast-content__loading",
                            vm.message ? "" : "me-toast-content__empty",
                          ],
                          style: {
                            backgroundColor: "rgba(0, 0, 0, " + vm.opacity + ")",
                          },
                        },
                        [
                          h(
                            "span",
                            {
                              staticClass: "me-toast__spinner me-toast__spinner--circular",
                            },
                            [
                              h(
                                "svg",
                                {
                                  staticClass: "me-toast__circular",
                                  attrs: {
                                    viewBox: "25 25 50 50",
                                  },
                                },
                                [
                                  h("circle", {
                                    attrs: {
                                      cx: "50",
                                      cy: "50",
                                      r: "20",
                                      fill: "none",
                                    },
                                  }),
                                ],
                              ),
                            ],
                          ),
                          vm._v(" "),
                          vm.message
                            ? [
                                vm.setInnerHtml
                                  ? h("div", {
                                      staticClass: "me-toast-message",
                                      domProps: {
                                        innerHTML: vm._s(vm.message),
                                      },
                                    })
                                  : h(
                                      "div",
                                      {
                                        staticClass: "me-toast-message",
                                      },
                                      [vm._v("\n          " + vm._s(vm.message) + "\n        ")],
                                    ),
                              ]
                            : vm._e(),
                        ],
                        2,
                      )
                    : vm._e(),
                ]
              : [
                  h(
                    "transition-group",
                    {
                      staticClass: "transition-group",
                      attrs: {
                        tag: "div",
                        "enter-active-class": "toast__fadeIn",
                        "leave-active-class": "toast__fadeOut",
                      },
                    },
                    vm._l(vm.toastArr, function (toast) {
                      return h(
                        "div",
                        {
                          key: toast.id,
                          class: [
                            "me-toast-content",
                            "me-toast-content__toast",
                            toast.props.message ? "" : "me-toast-content__empty",
                          ],
                          style: {
                            backgroundColor: toast.props.showContent
                              ? "rgba(0, 0, 0, " + toast.props.opacity + ")"
                              : "",
                          },
                        },
                        [
                          toast.props.message && toast.props.showContent
                            ? [
                                toast.props.setInnerHtml
                                  ? h("div", {
                                      staticClass: "me-toast-message",
                                      domProps: {
                                        innerHTML: vm._s(toast.props.message),
                                      },
                                    })
                                  : h(
                                      "div",
                                      {
                                        staticClass: "me-toast-message",
                                      },
                                      [vm._v("\n            " + vm._s(toast.props.message) + "\n          ")],
                                    ),
                              ]
                            : vm._e(),
                        ],
                        2,
                      );
                    }),
                    0,
                  ),
                ],
          ],
          2,
        );
      };
    render._withStripped = !0;
    var ToastComponent = normalizeComponent(
      {
        render: render,
        staticRenderFns: [],
      },
      function (inject) {
        inject &&
          inject("data-v-634288c8_0", {
            source:
              ".me-toast {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.me-toast__pc {\n  font-size: 50px;\n}\n.me-toast__pc__2k {\n  font-size: 70px;\n}\n.me-toast__m {\n  font-size: 40px;\n}\n.me-toast__enter {\n  -webkit-animation: toast_fadeIn 0.5s forwards;\n          animation: toast_fadeIn 0.5s forwards;\n}\n.me-toast__leave {\n  -webkit-animation: toast_fadeOut 0.5s forwards;\n          animation: toast_fadeOut 0.5s forwards;\n}\n.me-toast__loading .me-toast-content {\n  min-width: 4em;\n  min-height: 4em;\n  padding: 0.4em;\n}\n.me-toast__loading .me-toast-content .me-toast-message {\n  min-height: 3.25em;\n  min-width: 8em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.me-toast .transition-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.me-toast-content {\n  max-width: 7em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 0.2em;\n  color: white;\n  padding: 0.2em 0.4em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.me-toast-content__toast:not(:last-child) {\n  margin-bottom: 0.3em;\n}\n.me-toast-content .me-toast__spinner {\n  display: block;\n  width: 1em;\n  height: 1em;\n  margin: 0.6em auto 0.4em auto;\n}\n.me-toast-content__empty {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.me-toast-content__empty .me-toast__spinner {\n  margin: 0;\n}\n.me-toast-content svg {\n  -webkit-animation: toast-rotation 2s infinite linear;\n          animation: toast-rotation 2s infinite linear;\n}\n.me-toast-content circle {\n  stroke: currentColor;\n  stroke-width: 3;\n  stroke-linecap: round;\n  -webkit-animation: toast-circular 1.5s infinite linear;\n          animation: toast-circular 1.5s infinite linear;\n}\n.me-toast-message {\n  width: auto;\n  word-wrap: break-word;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-size: 0.4em;\n  text-align: center;\n}\n.me-toast-message p {\n  margin: 0;\n}\n.me-toast .toast__fadeIn {\n  -webkit-animation: toast_fadeInUp 0.5s forwards;\n          animation: toast_fadeInUp 0.5s forwards;\n}\n.me-toast .toast__fadeOut {\n  -webkit-animation: toast_fadeOut 0.5s forwards;\n          animation: toast_fadeOut 0.5s forwards;\n}\n@-webkit-keyframes toast-circular {\n0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -40;\n}\n100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -120;\n}\n}\n@keyframes toast-circular {\n0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n}\n50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -40;\n}\n100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -120;\n}\n}\n@-webkit-keyframes toast-rotation {\n0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes toast-rotation {\n0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@-webkit-keyframes toast_fadeIn {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes toast_fadeIn {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-webkit-keyframes toast_fadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@keyframes toast_fadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@-webkit-keyframes toast_fadeInUp {\nfrom {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n}\nto {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n}\n@keyframes toast_fadeInUp {\nfrom {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n}\nto {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n}",
            map: void 0,
            media: void 0,
          });
      },
      componentOptions,
      void 0,
      !1,
      void 0,
      !1,
      createStyleInjector,
      void 0,
      void 0,
    );
    function ownKeys(object, enumerableOnly) {
      var keys = objectKeys.default(object);
      if (getOwnPropertySymbols.default) {
        var symbols = getOwnPropertySymbols.default(object);
        (enumerableOnly &&
          (symbols = filter.default(symbols).call(symbols, function (symbol) {
            return getOwnPropertyDescriptor.default(object, symbol).enumerable;
          })),
          keys.push.apply(keys, symbols));
      }
      return keys;
    }
    function objectSpread(target) {
      for (var argIndex = 1; argIndex < arguments.length; argIndex++) {
        var sourceKeys,
          source = null != arguments[argIndex] ? arguments[argIndex] : {};
        if (argIndex % 2)
          forEach.default((sourceKeys = ownKeys(Object(source), !0))).call(sourceKeys, function (key) {
            definePropertyHelper.default(target, key, source[key]);
          });
        else if (getOwnPropertyDescriptors.default)
          defineProperties.default(target, getOwnPropertyDescriptors.default(source));
        else {
          var descriptorKeys;
          forEach
            .default((descriptorKeys = ownKeys(Object(source))))
            .call(descriptorKeys, function (descriptorKey) {
              defineProperty.default(
                target,
                descriptorKey,
                getOwnPropertyDescriptor.default(source, descriptorKey),
              );
            });
        }
      }
      return target;
    }
    var ToastConstructor = Vue.default.extend(ToastComponent),
      toastManager = new (function ToastManager() {
        var manager = this;
        (classCallCheck.default(this, ToastManager),
          (this.toastIns = void 0),
          (this.loadingToastIns = []),
          (this.loadingToastIdx = 0),
          (this.currentType = void 0),
          (this.allowMultiple = !1),
          (this.commonOptions = {}),
          (this.getElement = function () {
            var elSelector = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              element = document.body;
            return (
              elSelector &&
                (element = "string" == typeof elSelector ? document.querySelector(elSelector) : elSelector),
              element
            );
          }),
          (this.formatParams = function (params) {
            var paramsType = typeOf.default(params),
              normalizedParams = {};
            return (
              "string" === paramsType || "number" === paramsType
                ? (normalizedParams.message = params)
                : (normalizedParams = params),
              normalizedParams
            );
          }),
          (this.getComponent = function (propsData) {
            var instance = new ToastConstructor({
              propsData: propsData,
              destroyed: function () {
                if (instance.toastId) {
                  var loadingInsForFind,
                    loadingInsForSplice,
                    loadingIndex = findIndex
                      .default((loadingInsForFind = manager.loadingToastIns))
                      .call(loadingInsForFind, function (loadingEntry) {
                        return loadingEntry.id === instance.toastId;
                      });
                  -1 !== loadingIndex &&
                    splice
                      .default((loadingInsForSplice = manager.loadingToastIns))
                      .call(loadingInsForSplice, loadingIndex, 1);
                } else ((manager.toastIns = null), (manager.currentType = ""));
              },
            });
            return instance;
          }),
          (this.updateCommonOptions = function (commonOptions) {
            manager.commonOptions = commonOptions;
          }),
          (this.showLoadingToast = function () {
            var loadingParams = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              loadingProps = objectSpread(
                objectSpread(objectSpread({}, manager.commonOptions), manager.formatParams(loadingParams)),
                {
                  isLoading: !0,
                },
              );
            if (0 !== manager.loadingToastIns.length) {
              var existingLoadingIns,
                existingIndex = findIndex
                  .default((existingLoadingIns = manager.loadingToastIns))
                  .call(existingLoadingIns, function (loadingItem) {
                    return loadingItem.ins.message === loadingProps.message;
                  });
              if (-1 !== existingIndex) {
                var loadingDurationOption = loadingParams.duration;
                return (
                  manager.loadingToastIns[existingIndex].ins.addTimer(
                    0 === loadingDurationOption ? 0 : loadingDurationOption || 1e3,
                  ),
                  manager.loadingToastIns[existingIndex].ins.toastId
                );
              }
            }
            var loadingId = "loading_".concat(++manager.loadingToastIdx),
              loadingInstance = manager.getComponent(loadingProps);
            ((loadingInstance.toastId = loadingId),
              manager.loadingToastIns.push({
                id: loadingId,
                ins: loadingInstance,
              }));
            var loadingContainer = manager.getElement(loadingProps.el);
            if (!loadingContainer) throw new Error("The element wasn't found");
            return (loadingContainer.appendChild(loadingInstance.$mount().$el), loadingId);
          }),
          (this.showToast = function () {
            var toastParams = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              mergedToastProps = objectSpread(
                objectSpread({}, manager.commonOptions),
                manager.formatParams(toastParams),
              );
            if (manager.toastIns && "toast" === manager.currentType)
              return manager.allowMultiple ? manager.toastIns.addToast(mergedToastProps) : "";
            ((manager.currentType = "toast"), (manager.toastIns = manager.getComponent(mergedToastProps)));
            var toastContainer = manager.getElement(mergedToastProps.el);
            if (!toastContainer) throw new Error("The element wasn't found");
            return (toastContainer.appendChild(manager.toastIns.$mount().$el), "toast_0");
          }),
          (this.clearToast = function (clearId) {
            if (clearId) {
              var currentToastIns,
                clearType = clearId.split("_")[0];
              if ("toast" === clearType)
                null === (currentToastIns = manager.toastIns) ||
                  void 0 === currentToastIns ||
                  currentToastIns.clear(clearId);
              else if ("loading" === clearType) {
                var loadingInsForLookup,
                  matchedLoading = find
                    .default((loadingInsForLookup = manager.loadingToastIns))
                    .call(loadingInsForLookup, function (lookupEntry) {
                      return lookupEntry.id === clearId;
                    });
                null == matchedLoading || matchedLoading.ins.clear();
              }
            } else {
              var toastInsToClear, loadingInsToClear;
              (manager.loadingToastIns.length &&
                forEach
                  .default((loadingInsToClear = manager.loadingToastIns))
                  .call(loadingInsToClear, function (clearEntry) {
                    clearEntry.ins.clear();
                  }),
                null === (toastInsToClear = manager.toastIns) ||
                  void 0 === toastInsToClear ||
                  toastInsToClear.clear(clearId));
            }
          }),
          (this.allowToastMultiple = function () {
            manager.allowMultiple = !0;
          }),
          (this.disableToastMultiple = function () {
            manager.allowMultiple = !1;
          }));
      })(),
      Toast = toastManager.showToast;
    ((Toast.loading = toastManager.showLoadingToast),
      (Toast.clear = toastManager.clearToast),
      (Toast.allowToastMultiple = toastManager.allowToastMultiple),
      (Toast.disableToastMultiple = toastManager.disableToastMultiple));
    var toastPlugin = {
      install: function (VueInstall) {
        var installOptions = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          vuePrototype = VueInstall.prototype;
        (toastManager.updateCommonOptions(installOptions), (vuePrototype.$mtoast = Toast));
      },
    };
    ((moduleExports.Toast = Toast),
      (moduleExports.default = toastPlugin),
      Object.defineProperty(moduleExports, "__esModule", {
        value: !0,
      }));
  })(
    webpackExports,
    webpackRequire(10),
    webpackRequire(15),
    webpackRequire(20),
    webpackRequire(16),
    webpackRequire(17),
    webpackRequire(25),
    webpackRequire(6),
    webpackRequire(21),
    webpackRequire(9),
    webpackRequire(92),
    webpackRequire(80),
    webpackRequire(81),
    webpackRequire(0),
    webpackRequire(44),
    webpackRequire(1),
    webpackRequire(8),
    webpackRequire(5),
    webpackRequire(511),
    webpackRequire(24),
    webpackRequire(2),
    webpackRequire(249),
    webpackRequire(33),
    webpackRequire(63),
  );
};
