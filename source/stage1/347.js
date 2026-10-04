// back-top — module 347 from 8c4c131
// module 347 from 8c4c131.js
// deps: 674, 36
const module_347 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var o_1 = {
      name: "back-top",
      props: {
        theme: {
          type: String,
          default: "light",
        },
      },
      data: function () {
        return {
          show: !1,
        };
      },
      computed: {},
      mounted: function () {
        this.bindEvents();
      },
      beforeDestroy: function () {
        this.removeEvents();
      },
      methods: {
        bindEvents: function () {
          window.addEventListener("scroll", this.handleScroll);
        },
        removeEvents: function () {
          window.removeEventListener("scroll", this.handleScroll);
        },
        handleScroll: function () {
          var t_3 = document.body.scrollTop || document.documentElement.scrollTop || 0,
            e_4 = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          this.show = t_3 > 0.5 * e_4;
        },
        handleTop: function () {
          (this.show &&
            $("html,body").animate(
              {
                scrollTop: 0,
              },
              600,
            ),
            this.$trackButton("back_to_top", ""));
        },
      },
    },
    l_2 = (webpackRequire(674), webpackRequire(36)),
    component = Object(l_2.a)(
      o_1,
      function () {
        var t_5 = this;
        return (0, t_5._self._c)("button", {
          staticClass: "backTop",
          class: [
            {
              "backTop--show": t_5.show,
            },
            t_5.theme,
          ],
          on: {
            click: t_5.handleTop,
          },
        });
      },
      [],
      !1,
      null,
      null,
      null,
    );
  webpackExports.a = component.exports;
};
