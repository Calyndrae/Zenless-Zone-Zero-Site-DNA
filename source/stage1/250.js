// loading screen component — module 250 from 8c4c131
// module 250 from 8c4c131.js
// deps: 667, 36
const module_250 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var o_1 = {
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
          set: function (t_4) {
            this.$store.commit("setLoading", t_4);
          },
        },
      },
      mounted: function () {
        (this.step(1, !0), (this.isLoading = !0), (document.body.style.overflow = "hidden"));
      },
      methods: {
        step: function () {
          var t_5 = this,
            e_6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            n_7 = arguments.length > 1 ? arguments[1] : void 0;
          ((this.amount += e_6),
            n_7 &&
              setTimeout(
                function () {
                  ((t_5.progress += 5),
                    t_5.progress >= 100
                      ? ((t_5.progress = 100), t_5.onLoaded())
                      : ((t_5.amount -= 1), t_5.step(0, !0)));
                },
                this.amount <= 0 ? 100 : 40,
              ));
        },
        onLoaded: function () {
          (this.$emit("loaded"), (this.isLoading = !1), (document.body.style.overflow = "auto"));
        },
      },
    },
    l_2 = o_1,
    r_3 = (webpackRequire(667), webpackRequire(36)),
    component = Object(r_3.a)(
      l_2,
      function () {
        var t_8 = this,
          e_9 = t_8._self._c;
        return e_9(
          "div",
          {
            staticClass: "loading",
          },
          [
            e_9(
              "div",
              {
                staticClass: "loading__field",
              },
              [
                t_8._l(t_8.source, function (n_10, o_11) {
                  return [
                    "img" === n_10.type
                      ? e_9("img", {
                          key: o_11,
                          attrs: {
                            src: n_10.src,
                          },
                          on: {
                            load: function (e_12) {
                              return t_8.step(t_8.fileStep);
                            },
                          },
                        })
                      : "video" === n_10.type
                        ? e_9("video", {
                            key: o_11,
                            attrs: {
                              src: n_10.src,
                              preload: "auto",
                              muted: "",
                              autoplay: "",
                            },
                            domProps: {
                              muted: !0,
                            },
                            on: {
                              canplaythrough: function (e_13) {
                                return t_8.step(t_8.fileStep);
                              },
                            },
                          })
                        : "audio" === n_10.type
                          ? e_9("audio", {
                              key: o_11,
                              attrs: {
                                src: n_10.src,
                                preload: "auto",
                                muted: "",
                              },
                              on: {
                                canplaythrough: function (e_14) {
                                  return t_8.step(t_8.fileStep);
                                },
                              },
                            })
                          : t_8._e(),
                  ];
                }),
              ],
              2,
            ),
            t_8._v(" "),
            e_9("div", {
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
