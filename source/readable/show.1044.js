/**
 * show — readable reconstruction of webpack module 1044 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * AccountPopup Vue component from the HoYoverse account SDK, bundled with the vue-runtime-helpers normalizeComponent helper. Props: round, duration, position (default "center"), overlay, closeOnClickOverlay, closeOnPopstate, visible, overlayClass; computed isCenter, mainClass (account-popup-round / account-popup--<position>), transitionName (account-popup-fade or account-popup-slide-<position>) and mainStyle (animation/transition duration). It renders a v-show div.account-popup--overlay wrapping a <transition> and div.account-popup with the default slot, emits click, update:visible (overlay click / popstate), opened and closed, and listens to window popstate when closeOnPopstate is set.
 *
 * Exports (minified key → meaning):
 *   default → AccountPopup Vue component (normalized options with render function)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1044 from be1f69b.js
// deps:
const module_1044 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  function defineProperty(obj, key, value) {
    return (
      key in obj
        ? Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (obj[key] = value),
      obj
    );
  }
  webpackRequire.r(webpackExports);
  var normalizeComponent = function (
      template,
      style,
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
        options = "function" == typeof script ? script.options : script;
      if (
        (template &&
          template.render &&
          ((options.render = template.render),
          (options.staticRenderFns = template.staticRenderFns),
          (options._compiled = !0),
          isFunctionalTemplate && (options.functional = !0)),
        scopeId && (options._scopeId = scopeId),
        moduleIdentifier
          ? ((hook = function (ssrContext) {
              ((ssrContext =
                ssrContext ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (ssrContext = __VUE_SSR_CONTEXT__),
                style && style.call(this, createInjectorSSR(ssrContext)),
                ssrContext &&
                  ssrContext._registeredComponents &&
                  ssrContext._registeredComponents.add(moduleIdentifier));
            }),
            (options._ssrRegister = hook))
          : style &&
            (hook = shadowMode
              ? function (shadowContext) {
                  style.call(this, createInjectorShadow(shadowContext, this.$root.$options.shadowRoot));
                }
              : function (injectContext) {
                  style.call(this, createInjector(injectContext));
                }),
        hook)
      )
        if (options.functional) {
          var originalRender = options.render;
          options.render = function (createElement, renderContext) {
            return (hook.call(renderContext), originalRender(createElement, renderContext));
          };
        } else {
          var existingBeforeCreate = options.beforeCreate;
          options.beforeCreate = existingBeforeCreate ? [].concat(existingBeforeCreate, hook) : [hook];
        }
      return script;
    },
    componentOptions = {
      name: "AccountPopup",
      props: {
        round: {
          type: Boolean,
        },
        duration: {
          type: [Number, String],
        },
        position: {
          type: String,
          default: "center",
        },
        overlay: {
          type: Boolean,
          default: !0,
        },
        closeOnClickOverlay: {
          type: Boolean,
          default: !0,
        },
        closeOnPopstate: {
          type: Boolean,
          default: !1,
        },
        visible: {
          type: Boolean,
        },
        overlayClass: {
          type: String,
        },
      },
      computed: {
        isCenter: function () {
          return "center" === this.position;
        },
        mainClass: function () {
          var classMap;
          return (
            defineProperty((classMap = {}), "account-popup-round", this.round),
            defineProperty(classMap, "account-popup--".concat(this.position), this.position),
            classMap
          );
        },
        transitionName: function () {
          return this.isCenter ? "account-popup-fade" : "account-popup-slide-".concat(this.position);
        },
        mainStyle: function () {
          var style = {};
          this.duration &&
            (style[this.isCenter ? "animationDuration" : "transitionDuration"] = "".concat(
              this.duration,
              "s",
            ));
          return style;
        },
      },
      mounted: function () {
        this.closeOnPopstate && window.addEventListener("popstate", this.onPopstate);
      },
      destroyed: function () {
        this.closeOnPopstate && window.removeEventListener("popstate", this.onPopstate);
      },
      methods: {
        onClick: function (event) {
          this.$emit("click", event);
        },
        onClickOverlay: function () {
          this.closeOnClickOverlay && this.$emit("update:visible", !this.visible);
        },
        onPopstate: function () {
          this.$emit("update:visible", !this.visible);
        },
        onOpened: function (openedEvent) {
          this.$emit("opened", openedEvent);
        },
        onClosed: function (closedEvent) {
          this.$emit("closed", closedEvent);
        },
      },
    },
    render = function () {
      var vm = this,
        createElementFn = vm.$createElement,
        h = vm._self._c || createElementFn;
      return h(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: vm.visible,
              expression: "visible",
            },
          ],
          staticClass: "account-popup--overlay",
          class: vm.overlayClass,
          on: {
            click: vm.onClickOverlay,
          },
        },
        [
          h(
            "transition",
            {
              attrs: {
                name: vm.transitionName,
              },
              on: {
                "after-enter": vm.onOpened,
                "after-leave": vm.onClosed,
              },
            },
            [
              h(
                "div",
                vm._b(
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: vm.visible,
                        expression: "visible",
                      },
                    ],
                    staticClass: "account-popup",
                    class: vm.mainClass,
                    style: vm.mainStyle,
                    on: {
                      click: function (clickEvent) {
                        return (
                          clickEvent.stopPropagation(),
                          clickEvent.preventDefault(),
                          vm.onClick(clickEvent)
                        );
                      },
                    },
                  },
                  "div",
                  vm.$attrs,
                  !1,
                ),
                [vm._t("default")],
                2,
              ),
            ],
          ),
        ],
        1,
      );
    };
  render._withStripped = !0;
  var AccountPopup = normalizeComponent(
    {
      render: render,
      staticRenderFns: [],
    },
    undefined,
    componentOptions,
    undefined,
    false,
    undefined,
    !1,
    void 0,
    void 0,
    void 0,
  );
  webpackExports.default = AccountPopup;
};
