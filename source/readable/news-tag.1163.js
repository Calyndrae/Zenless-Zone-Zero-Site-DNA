/**
 * news-tag — readable reconstruction of webpack module 1163 (chunk f87ccae.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/f87ccae.js
 *
 * news-tag Vue component. Props channel (Number|String) and mob; computed newsCates from the store getter newsCates, currentChannel (the cate whose iChanId equals channel) and a fixed color "#BFDB5A". On created, if no categories are cached it runs getCates, an async (asyncToGenerator, module 32 + regeneratorRuntime) call to the news API getCates (module 1124) with sLangKey from store state.lang, committing arrList[0].children via the "setNewsCates" mutation. It renders div.news-tag (mobile class when mob) showing the current channel's sChanName. Normalised with componentNormalizer (module 36); styles from module 1159.
 *
 * Exports (minified key → meaning):
 *   a → news-tag Vue component (news category label)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1163 from f87ccae.js
// deps: 32, 98, 556, 1120, 1124, 1159, 36
const module_1163 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(32),
    newsApi = (webpackRequire(98), webpackRequire(556), webpackRequire(1120), webpackRequire(1124)),
    newsTagOptions = {
      name: "news-tag",
      props: {
        channel: {
          type: [Number, String],
          default: "",
        },
        mob: {
          type: Boolean,
          default: !1,
        },
      },
      computed: {
        newsCates: function () {
          return this.$store.getters.newsCates || [];
        },
        currentChannel: function () {
          var self = this;
          return this.newsCates.find(function (cate) {
            return Number(cate.iChanId) === Number(self.channel);
          });
        },
        color: function () {
          return "#BFDB5A";
        },
      },
      created: function () {
        (this.newsCates && this.newsCates.length) || this.getCates();
      },
      methods: {
        getCates: function () {
          var vm = this;
          return Object(vendorBundle.a)(
            regeneratorRuntime.mark(function getCatesGenerator() {
              var catesRes, childCates;
              return regeneratorRuntime.wrap(function (context) {
                for (;;)
                  switch ((context.prev = context.next)) {
                    case 0:
                      return (
                        (context.next = 2),
                        newsApi.a.getCates({
                          data: {
                            sLangKey: vm.$store.state.lang,
                          },
                        })
                      );
                    case 2:
                      ((catesRes = context.sent),
                        (childCates = catesRes.arrList[0].children),
                        vm.$store.commit("setNewsCates", childCates));
                    case 5:
                    case "end":
                      return context.stop();
                  }
              }, getCatesGenerator);
            }),
          )();
        },
      },
    },
    componentNormalizer = (webpackRequire(1159), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      newsTagOptions,
      function () {
        var renderVm = this;
        return (0, renderVm._self._c)(
          "div",
          {
            staticClass: "news-tag",
            class: {
              mobile: renderVm.mob,
            },
          },
          [
            renderVm._v(
              "\n  " + renderVm._s(renderVm.currentChannel && renderVm.currentChannel.sChanName) + "\n",
            ),
          ],
        );
      },
      [],
      !1,
      null,
      null,
      null,
    );
  webpackExports.a = component.exports;
};
