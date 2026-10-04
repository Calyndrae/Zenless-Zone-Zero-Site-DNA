// news-tag component — module 1163 from f87ccae
// module 1163 from f87ccae.js
// deps: 32, 98, 556, 1120, 1124, 1159, 36
const module_1163 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(32),
    o_1 = (webpackRequire(98), webpackRequire(556), webpackRequire(1120), webpackRequire(1124)),
    c_2 = {
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
          var e_4 = this;
          return this.newsCates.find(function (t_5) {
            return Number(t_5.iChanId) === Number(e_4.channel);
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
          var e_6 = this;
          return Object(vendorBundle.a)(
            regeneratorRuntime.mark(function t_7() {
              var n_8, r_9;
              return regeneratorRuntime.wrap(function (t_10) {
                for (;;)
                  switch ((t_10.prev = t_10.next)) {
                    case 0:
                      return (
                        (t_10.next = 2),
                        o_1.a.getCates({
                          data: {
                            sLangKey: e_6.$store.state.lang,
                          },
                        })
                      );
                    case 2:
                      ((n_8 = t_10.sent),
                        (r_9 = n_8.arrList[0].children),
                        e_6.$store.commit("setNewsCates", r_9));
                    case 5:
                    case "end":
                      return t_10.stop();
                  }
              }, t_7);
            }),
          )();
        },
      },
    },
    l_3 = (webpackRequire(1159), webpackRequire(36)),
    component = Object(l_3.a)(
      c_2,
      function () {
        var e_11 = this;
        return (0, e_11._self._c)(
          "div",
          {
            staticClass: "news-tag",
            class: {
              mobile: e_11.mob,
            },
          },
          [e_11._v("\n  " + e_11._s(e_11.currentChannel && e_11.currentChannel.sChanName) + "\n")],
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
