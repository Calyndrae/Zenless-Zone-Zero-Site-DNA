// AccountPopup component (account SDK) — module 1044 from be1f69b
// module 1044 from be1f69b.js
// deps:
const module_1044 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  function r_1(e_6, t_7, n_8) {
    return (
      t_7 in e_6
        ? Object.defineProperty(e_6, t_7, {
            value: n_8,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e_6[t_7] = n_8),
      e_6
    );
  }
  webpackRequire.r(webpackExports);
  var o_2 = function (template, style, script, e_9, t_10, n_11, r_12, o_13, c_14, l_15) {
      "boolean" != typeof r_12 && ((c_14 = o_13), (o_13 = r_12), (r_12 = !1));
      var f_16,
        d_17 = "function" == typeof script ? script.options : script;
      if (
        (template &&
          template.render &&
          ((d_17.render = template.render),
          (d_17.staticRenderFns = template.staticRenderFns),
          (d_17._compiled = !0),
          t_10 && (d_17.functional = !0)),
        e_9 && (d_17._scopeId = e_9),
        n_11
          ? ((f_16 = function (e_20) {
              ((e_20 =
                e_20 ||
                (this.$vnode && this.$vnode.ssrContext) ||
                (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                (e_20 = __VUE_SSR_CONTEXT__),
                style && style.call(this, c_14(e_20)),
                e_20 && e_20._registeredComponents && e_20._registeredComponents.add(n_11));
            }),
            (d_17._ssrRegister = f_16))
          : style &&
            (f_16 = r_12
              ? function (e_21) {
                  style.call(this, l_15(e_21, this.$root.$options.shadowRoot));
                }
              : function (e_22) {
                  style.call(this, o_13(e_22));
                }),
        f_16)
      )
        if (d_17.functional) {
          var h_18 = d_17.render;
          d_17.render = function (e_23, t_24) {
            return (f_16.call(t_24), h_18(e_23, t_24));
          };
        } else {
          var m_19 = d_17.beforeCreate;
          d_17.beforeCreate = m_19 ? [].concat(m_19, f_16) : [f_16];
        }
      return script;
    },
    c_3 = {
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
          var e_25;
          return (
            r_1((e_25 = {}), "account-popup-round", this.round),
            r_1(e_25, "account-popup--".concat(this.position), this.position),
            e_25
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
        onClick: function (e_26) {
          this.$emit("click", e_26);
        },
        onClickOverlay: function () {
          this.closeOnClickOverlay && this.$emit("update:visible", !this.visible);
        },
        onPopstate: function () {
          this.$emit("update:visible", !this.visible);
        },
        onOpened: function (e_27) {
          this.$emit("opened", e_27);
        },
        onClosed: function (e_28) {
          this.$emit("closed", e_28);
        },
      },
    },
    l_4 = function () {
      var e_29 = this,
        t_30 = e_29.$createElement,
        n_31 = e_29._self._c || t_30;
      return n_31(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: e_29.visible,
              expression: "visible",
            },
          ],
          staticClass: "account-popup--overlay",
          class: e_29.overlayClass,
          on: {
            click: e_29.onClickOverlay,
          },
        },
        [
          n_31(
            "transition",
            {
              attrs: {
                name: e_29.transitionName,
              },
              on: {
                "after-enter": e_29.onOpened,
                "after-leave": e_29.onClosed,
              },
            },
            [
              n_31(
                "div",
                e_29._b(
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e_29.visible,
                        expression: "visible",
                      },
                    ],
                    staticClass: "account-popup",
                    class: e_29.mainClass,
                    style: e_29.mainStyle,
                    on: {
                      click: function (t_32) {
                        return (t_32.stopPropagation(), t_32.preventDefault(), e_29.onClick(t_32));
                      },
                    },
                  },
                  "div",
                  e_29.$attrs,
                  !1,
                ),
                [e_29._t("default")],
                2,
              ),
            ],
          ),
        ],
        1,
      );
    };
  l_4._withStripped = !0;
  var f_5 = o_2(
    {
      render: l_4,
      staticRenderFns: [],
    },
    undefined,
    c_3,
    undefined,
    false,
    undefined,
    !1,
    void 0,
    void 0,
    void 0,
  );
  webpackExports.default = f_5;
};
