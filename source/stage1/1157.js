// video-dialog component — module 1157 from fcdddd8
// module 1157 from fcdddd8.js
// deps: 1167, 36
const module_1157 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var o_1 = {
      name: "video-dialog",
      props: {
        src: {
          type: String,
          default: "",
        },
        iframeSrc: {
          type: String,
          default: "",
        },
      },
      data: function () {
        return {
          isMobile: this.$isMob,
        };
      },
    },
    n_2 = (webpackRequire(1167), webpackRequire(36)),
    component = Object(n_2.a)(
      o_1,
      function () {
        var e_3 = this,
          t_4 = e_3._self._c;
        return t_4(
          "div",
          {
            staticClass: "video-container",
            class: [
              {
                mob: e_3.isMobile,
                pc: !e_3.isMobile,
              },
            ],
          },
          [
            e_3.src
              ? t_4("video", {
                  staticClass: "video",
                  attrs: {
                    src: e_3.src,
                    controls: "controls",
                    autoplay: "autoplay",
                    playsinline: "",
                    "webkit-playsinline": "",
                    "x5-playsinline": "",
                    "x-webkit-airplay": "allow",
                    "x5-video-orientation": "portraint",
                    "x5-video-player-type": "h5",
                    "x5-video-player-fullscreen": "true",
                    preload: "auto",
                  },
                })
              : t_4("iframe", {
                  staticClass: "video video-frame",
                  attrs: {
                    src: e_3.iframeSrc,
                    type: "text/html",
                    width: "1280",
                    height: "720",
                    frameborder: "0",
                    allowfullscreen: "",
                    allowautoplay: "",
                  },
                }),
          ],
        );
      },
      [],
      !1,
      null,
      "949ad85e",
      null,
    );
  webpackExports.a = component.exports;
};
