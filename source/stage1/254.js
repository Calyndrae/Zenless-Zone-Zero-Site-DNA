// click-outside (component) — module 254 from be1f69b
// module 254 from be1f69b.js
// deps:
const module_254 = function (webpackModule, webpackExports, webpackRequire) {
  webpackModule.exports = (function () {
    var e_1 = "__v-click-outside",
      t_2 = "undefined" != typeof window,
      n_3 = "undefined" != typeof navigator,
      r_4 =
        t_2 && ("ontouchstart" in window || (n_3 && navigator.msMaxTouchPoints > 0))
          ? ["touchstart"]
          : ["click"];
    function i_5(e_9) {
      var t_10 = e_9.event,
        n_11 = e_9.handler;
      (0, e_9.middleware)(t_10) && n_11(t_10);
    }
    function a_6(t_12, n_13) {
      var a_14 = (function (e_20) {
          var t_21 = "function" == typeof e_20;
          if (!t_21 && "object" != typeof e_20)
            throw new Error("v-click-outside: Binding value must be a function or an object");
          return {
            handler: t_21 ? e_20 : e_20.handler,
            middleware:
              e_20.middleware ||
              function (e_22) {
                return e_22;
              },
            events: e_20.events || r_4,
            isActive: !(!1 === e_20.isActive),
            detectIframe: !(!1 === e_20.detectIframe),
            capture: !!e_20.capture,
          };
        })(n_13.value),
        o_15 = a_14.handler,
        c_16 = a_14.middleware,
        l_17 = a_14.detectIframe,
        u_18 = a_14.capture;
      if (a_14.isActive) {
        if (
          ((t_12[e_1] = a_14.events.map(function (e_23) {
            return {
              event: e_23,
              srcTarget: document.documentElement,
              handler: function (e_24) {
                return (function (e_25) {
                  var t_26 = e_25.el,
                    n_27 = e_25.event,
                    r_28 = e_25.handler,
                    a_29 = e_25.middleware,
                    o_30 = (n_27.composedPath && n_27.composedPath()) || n_27.path;
                  (o_30 ? o_30.indexOf(t_26) < 0 : !t_26.contains(n_27.target)) &&
                    i_5({
                      event: n_27,
                      handler: r_28,
                      middleware: a_29,
                    });
                })({
                  el: t_12,
                  event: e_24,
                  handler: o_15,
                  middleware: c_16,
                });
              },
              capture: u_18,
            };
          })),
          l_17)
        ) {
          var f_19 = {
            event: "blur",
            srcTarget: window,
            handler: function (e_31) {
              return (function (e_32) {
                var t_33 = e_32.el,
                  n_34 = e_32.event,
                  r_35 = e_32.handler,
                  a_36 = e_32.middleware;
                setTimeout(function () {
                  var e_37 = document.activeElement;
                  e_37 &&
                    "IFRAME" === e_37.tagName &&
                    !t_33.contains(e_37) &&
                    i_5({
                      event: n_34,
                      handler: r_35,
                      middleware: a_36,
                    });
                }, 0);
              })({
                el: t_12,
                event: e_31,
                handler: o_15,
                middleware: c_16,
              });
            },
            capture: u_18,
          };
          t_12[e_1] = [].concat(t_12[e_1], [f_19]);
        }
        t_12[e_1].forEach(function (n_38) {
          var r_39 = n_38.event,
            i_40 = n_38.srcTarget,
            a_41 = n_38.handler;
          return setTimeout(function () {
            t_12[e_1] && i_40.addEventListener(r_39, a_41, u_18);
          }, 0);
        });
      }
    }
    function o_7(t_42) {
      ((t_42[e_1] || []).forEach(function (e_43) {
        return e_43.srcTarget.removeEventListener(e_43.event, e_43.handler, e_43.capture);
      }),
        delete t_42[e_1]);
    }
    var c_8 = t_2
      ? {
          bind: a_6,
          update: function (e_44, t_45) {
            var n_46 = t_45.value,
              r_47 = t_45.oldValue;
            JSON.stringify(n_46) !== JSON.stringify(r_47) &&
              (o_7(e_44),
              a_6(e_44, {
                value: n_46,
              }));
          },
          unbind: o_7,
        }
      : {};
    return {
      install: function (e_48) {
        e_48.directive("click-outside", c_8);
      },
      directive: c_8,
    };
  })();
};
