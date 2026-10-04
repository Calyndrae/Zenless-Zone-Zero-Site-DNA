/**
 * back-top — readable reconstruction of webpack module 347 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Vue component `back-top`, a scroll-to-top button. It renders a `button.backTop` with the `backTop--show` modifier and the `theme` prop (default `light`) as classes; it listens to window `scroll` (bound on mount, removed before destroy) and shows itself once the scroll offset exceeds half the viewport height, and on click animates `html,body` to `scrollTop: 0` with jQuery and tracks `back_to_top` via `$trackButton`.
 *
 * Exports (minified key → meaning):
 *   a → the back-top Vue component (normalized component exports)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 347 from 8c4c131.js
// deps: 674, 36
const module_347 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var backTopOptions = {
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
          var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || 0,
            viewportHeight =
              window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          this.show = scrollTop > 0.5 * viewportHeight;
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
    componentNormalizer = (webpackRequire(674), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      backTopOptions,
      function () {
        var vm = this;
        return (0, vm._self._c)("button", {
          staticClass: "backTop",
          class: [
            {
              "backTop--show": vm.show,
            },
            vm.theme,
          ],
          on: {
            click: vm.handleTop,
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
