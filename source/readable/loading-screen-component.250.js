/**
 * loading-screen-component — readable reconstruction of webpack module 250 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Anonymous loading-screen Vue component. It renders `.loading` with a hidden `.loading__field` that preloads each entry of its `source` list as an `img`, `video` or `audio` element (advancing progress on `load`/`canplaythrough`) and a `.loading__anim` animation block. On mount it sets the `isLoading` computed (backed by `$store.state.isLoading` / the `setLoading` mutation) to true and locks `document.body` scrolling; the `step` method increments `progress` by 5 on timers until 100, then `onLoaded` emits `loaded`, clears `isLoading` and restores body overflow.
 *
 * Exports (minified key → meaning):
 *   a → the loading Vue component (normalized component exports)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 250 from 8c4c131.js
// deps: 667, 36
const module_250 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var loadingOptions = {
      data: function () {
        return {
          progress: 0,
          amount: 0,
          source: [],
        };
      },
      computed: {
        fileStep: function () {
          return 100 / (this.source.length || 1);
        },
        isLoading: {
          get: function () {
            return this.$store.state.isLoading;
          },
          set: function (isLoadingValue) {
            this.$store.commit("setLoading", isLoadingValue);
          },
        },
      },
      mounted: function () {
        (this.step(1, !0), (this.isLoading = !0), (document.body.style.overflow = "hidden"));
      },
      methods: {
        step: function () {
          var self = this,
            amountDelta = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            shouldTick = arguments.length > 1 ? arguments[1] : void 0;
          ((this.amount += amountDelta),
            shouldTick &&
              setTimeout(
                function () {
                  ((self.progress += 5),
                    self.progress >= 100
                      ? ((self.progress = 100), self.onLoaded())
                      : ((self.amount -= 1), self.step(0, !0)));
                },
                this.amount <= 0 ? 100 : 40,
              ));
        },
        onLoaded: function () {
          (this.$emit("loaded"), (this.isLoading = !1), (document.body.style.overflow = "auto"));
        },
      },
    },
    componentOptions = loadingOptions,
    componentNormalizer = (webpackRequire(667), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      componentOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "loading",
          },
          [
            h(
              "div",
              {
                staticClass: "loading__field",
              },
              [
                vm._l(vm.source, function (asset, assetIndex) {
                  return [
                    "img" === asset.type
                      ? h("img", {
                          key: assetIndex,
                          attrs: {
                            src: asset.src,
                          },
                          on: {
                            load: function (imgLoadEvent) {
                              return vm.step(vm.fileStep);
                            },
                          },
                        })
                      : "video" === asset.type
                        ? h("video", {
                            key: assetIndex,
                            attrs: {
                              src: asset.src,
                              preload: "auto",
                              muted: "",
                              autoplay: "",
                            },
                            domProps: {
                              muted: !0,
                            },
                            on: {
                              canplaythrough: function (videoCanPlayEvent) {
                                return vm.step(vm.fileStep);
                              },
                            },
                          })
                        : "audio" === asset.type
                          ? h("audio", {
                              key: assetIndex,
                              attrs: {
                                src: asset.src,
                                preload: "auto",
                                muted: "",
                              },
                              on: {
                                canplaythrough: function (audioCanPlayEvent) {
                                  return vm.step(vm.fileStep);
                                },
                              },
                            })
                          : vm._e(),
                  ];
                }),
              ],
              2,
            ),
            vm._v(" "),
            h("div", {
              staticClass: "loading__anim",
            }),
          ],
        );
      },
      [],
      !1,
      null,
      "4ed1ddcf",
      null,
    );
  webpackExports.a = component.exports;
};
