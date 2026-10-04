// header-social — module 262 from 8c4c131
// module 262 from 8c4c131.js
// deps: 669, 36, 411, 412
const module_262 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var o_1 = {
      name: "header-social",
      computed: {
        mediaConfig: function () {
          return this.$store.getters.mediaConfig;
        },
      },
      methods: {
        handleNavShare: function () {
          this.$trackButton("Media_Share", "");
        },
        handleFollow: function (t_3) {
          this.$trackButton("Media_Sub_Follow", t_3);
        },
        handleShare: function (t_4) {
          var e_5 = this;
          "link" === t_4 &&
            (this.$clipboard({
              text: this.$getI18nWord("shareCopyText"),
              onSuccess: function () {
                e_5.$mtoast(e_5.$getI18nWord("copySuccess"));
              },
            }),
            this.$trackButton("Media_Sub_Share", "copy"));
        },
      },
    },
    l_2 = (webpackRequire(669), webpackRequire(36)),
    component = Object(l_2.a)(
      o_1,
      function () {
        var t_6 = this,
          e_7 = t_6._self._c;
        return e_7(
          "div",
          {
            staticClass: "share",
          },
          [
            e_7(
              "div",
              {
                staticClass: "share__info",
              },
              [
                e_7("div", {
                  staticClass: "share__icon",
                  on: {
                    click: t_6.handleNavShare,
                  },
                }),
                t_6._v(" "),
                e_7("client-only", [
                  e_7(
                    "div",
                    {
                      staticClass: "share__panel",
                    },
                    [
                      e_7(
                        "div",
                        {
                          staticClass: "share__panel-wrap",
                        },
                        [
                          e_7(
                            "div",
                            {
                              staticClass: "share__title",
                            },
                            [t_6._v(t_6._s(t_6.$getI18nWord("socialFollow")))],
                          ),
                          t_6._v(" "),
                          e_7(
                            "div",
                            {
                              staticClass: "share__list",
                            },
                            [
                              e_7(
                                "media-icon",
                                t_6._b(
                                  {
                                    on: {
                                      "click-media": t_6.handleFollow,
                                    },
                                  },
                                  "media-icon",
                                  t_6.mediaConfig,
                                  !1,
                                ),
                                [
                                  e_7("hover-btn", {
                                    staticClass: "copy-btn",
                                    attrs: {
                                      slot: "extra-media-end",
                                      img: webpackRequire(411),
                                      "img-hover": webpackRequire(412),
                                    },
                                    on: {
                                      click: function (e_8) {
                                        return t_6.handleShare("link");
                                      },
                                    },
                                    slot: "extra-media-end",
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          ),
                        ],
                      ),
                    ],
                  ),
                ]),
              ],
              1,
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
