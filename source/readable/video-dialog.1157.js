/**
 * video-dialog — readable reconstruction of webpack module 1157 (chunk fcdddd8.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/fcdddd8.js
 *
 * video-dialog Vue component (scoped, data-v-949ad85e). Props src and iframeSrc; data isMobile from $isMob. It renders div.video-container with mob/pc classes containing either a <video class="video"> (controls, autoplay, inline-playback and x5 player attributes, preload auto) when src is set, or an <iframe class="video video-frame"> (1280x720, allowfullscreen) pointing at iframeSrc. Normalised with componentNormalizer (module 36); styles from module 1167.
 *
 * Exports (minified key → meaning):
 *   a → video-dialog Vue component (HTML5 video or embedded iframe player)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1157 from fcdddd8.js
// deps: 1167, 36
const module_1157 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var videoDialogOptions = {
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
    componentNormalizer = (webpackRequire(1167), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      videoDialogOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "div",
          {
            staticClass: "video-container",
            class: [
              {
                mob: vm.isMobile,
                pc: !vm.isMobile,
              },
            ],
          },
          [
            vm.src
              ? h("video", {
                  staticClass: "video",
                  attrs: {
                    src: vm.src,
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
              : h("iframe", {
                  staticClass: "video video-frame",
                  attrs: {
                    src: vm.iframeSrc,
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
