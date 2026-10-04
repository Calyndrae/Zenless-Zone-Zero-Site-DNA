// header-bar — module 348 from 8c4c131
// module 348 from 8c4c131.js
// deps: 65, 297, 208, 32, 98, 138, 171, 67, 119, 118, 28, 262, 251, 49, 672, 36, 408, 409, 410
const module_348 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(65), webpackRequire(297), webpackRequire(208));
  var vendorBundle = webpackRequire(32),
    l_1 =
      (webpackRequire(98),
      webpackRequire(138),
      webpackRequire(171),
      webpackRequire(67),
      webpackRequire(119),
      webpackRequire(118),
      webpackRequire(28)),
    headerSocial = webpackRequire(262),
    baseMixin = webpackRequire(251),
    siteConstants = webpackRequire(49),
    d_2 = {
      name: "header-bar",
      components: {
        headerSocial: headerSocial.a,
      },
      extends: baseMixin.a,
      data: function () {
        return {
          ltNav: this.getLtNavs(),
          rtNav: this.getRtNavs(),
          downloadIns: null,
        };
      },
      computed: {
        lang: function () {
          return this.$store.state.lang;
        },
        volume: function () {
          return this.$store.state.bgmMuted ? 0 : 0.8;
        },
        homeSection: function () {
          return this.$store.state.homeSection;
        },
        userInfo: {
          get: function () {
            return this.$store.state.userInfo;
          },
          set: function (t_5) {
            this.$store.commit("setUserInfo", t_5);
          },
        },
        userName: function () {
          var t_6;
          return (null === (t_6 = this.userInfo) || void 0 === t_6 ? void 0 : t_6.display_name) || "";
        },
      },
      mounted: function () {
        this.iniDownloadIns();
      },
      methods: {
        iniDownloadIns: function () {
          var t_7 = this,
            e_8 = window.MeSeaDownload.DownloadCore;
          this.downloadIns = new e_8({
            lang: this.lang,
            gameBiz: "nap_global",
            type: "fab",
            useOnlineConfig: !0,
            environment: l_1.environment,
            source: "262",
            platMiaCallback: function (e_9) {
              var n_10 = e_9.label,
                label = void 0 === n_10 ? "" : n_10;
              t_7.$trackEvent("Button", "Click", "to_download", label.replace("download", ""));
            },
          });
        },
        isUrl: function () {
          var t_11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return t_11.startsWith("https");
        },
        getRtNavs: function () {
          return [
            {
              type: "download",
              link: "",
              mi18nKey: "download_label",
            },
          ];
        },
        getLtNavs: function () {
          var t_12 = this,
            e_13 = siteConstants.e.filter(function (nav) {
              return "feature" !== nav.link;
            }),
            n_14 = [];
          return (
            ["exchange", "top_up", "community"].forEach(function (label) {
              var link = t_12.$getI18nWord("menu_".concat(label, "_link"));
              t_12.isUrl(link) &&
                n_14.push({
                  link: link,
                  mi18nKey: "menu_".concat(label, "_label"),
                });
            }),
            n_14.length &&
              e_13.push({
                link: "",
                mi18nKey: "menu_more_label",
                sub: n_14,
              }),
            e_13
          );
        },
        isNavActive: function (nav) {
          var t_15 = this.$route.name;
          return t_15.includes("company") || "lang-main" === t_15
            ? "main" === nav.link
            : t_15.includes(nav.link) && nav.link;
        },
        handleLogoClick: function () {
          if ("lang-main" !== this.$route.name) {
            var t_16 = _.omit(this.$route.query, ["page", "category", "id"]);
            this.$router.push({
              name: "lang-main",
              query: t_16,
            });
          }
        },
        handleNavClick: function (nav) {
          var t_17 = {
            menu_exchange_label: "to_cdkey",
            menu_community_label: "view_guides",
            menu_top_up_label: "view_paycenter",
          };
          if (
            (t_17[nav.mi18nKey] && this.$trackEvent("Button", "Click", t_17[nav.mi18nKey], 1),
            "download" === nav.type)
          )
            return (
              this.downloadIns.download(),
              this.$trackEvent("Button", "Click", "to_download", "0"),
              void this.$trackEvent("Button", "popup", "download_kit", "")
            );
          if (!this.isUrl(nav.link) && !this.$route.name.includes(nav.link)) {
            "lang-main" !== nav.link && this.$store.commit("setRoutePage", nav.link);
            var e_18 = _.omit(this.$route.query, ["page", "category", "id"]);
            (this.$router.push({
              name: "lang-".concat(nav.link),
              query: e_18,
            }),
              this.$trackButton("Navigation_".concat(nav.miaKey), ""));
          }
        },
        handleBgmClick: function (t_19) {
          t_19 ? this.$trackButton("Media_Music", "1") : this.$trackButton("Media_Music", "0");
        },
        handleUserClick: function () {
          this.userInfo ? this.$trackButton("login_button", "") : this.$accountRoleUtil.show();
        },
        logout: function () {
          var t_20 = this;
          return Object(vendorBundle.a)(
            regeneratorRuntime.mark(function e_21() {
              return regeneratorRuntime.wrap(function (e_22) {
                for (;;)
                  switch ((e_22.prev = e_22.next)) {
                    case 0:
                      return ((e_22.next = 2), t_20.$accountRoleUtil.logout());
                    case 2:
                      ((t_20.userInfo = ""),
                        t_20.$trackEvent("AppointPage", "Click", "SDK_Logout", ""),
                        window.location.reload());
                    case 5:
                    case "end":
                      return e_22.stop();
                  }
              }, e_21);
            }),
          )();
        },
        onMouseenter: function (t_23) {
          "menu_more_label" === t_23.mi18nKey && this.$trackButton("view_more", "");
        },
      },
    },
    c_3 = d_2,
    h_4 = (webpackRequire(672), webpackRequire(36)),
    component = Object(h_4.a)(
      c_3,
      function () {
        var t_24 = this,
          e_25 = t_24._self._c;
        return e_25(
          "header",
          {
            staticClass: "header",
          },
          [
            e_25(
              "div",
              {
                staticClass: "header-wrapper",
              },
              [
                e_25(
                  "div",
                  {
                    staticClass: "header-wrapper-lt",
                  },
                  [
                    e_25(
                      "div",
                      {
                        staticClass: "header__logo lg",
                        on: {
                          click: t_24.handleLogoClick,
                        },
                      },
                      [
                        e_25(
                          "transition",
                          {
                            attrs: {
                              name: "logoBig",
                            },
                          },
                          [
                            e_25("img", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "lang-main" === t_24.$route.name && "main" === t_24.homeSection,
                                  expression: "$route.name === 'lang-main' && homeSection === 'main'",
                                },
                              ],
                              staticClass: "logo-big",
                              attrs: {
                                src: webpackRequire(408),
                                alt: "miHoYo",
                              },
                            }),
                          ],
                        ),
                        t_24._v(" "),
                        e_25(
                          "transition",
                          {
                            attrs: {
                              name: "logoSmall",
                            },
                          },
                          [
                            e_25("img", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !("lang-main" === t_24.$route.name && "main" === t_24.homeSection),
                                  expression: "!($route.name === 'lang-main' && homeSection === 'main')",
                                },
                              ],
                              staticClass: "logo-sm",
                              attrs: {
                                src: t_24.$getI18nWord("logoMob"),
                                alt: "miHoYo",
                              },
                            }),
                          ],
                        ),
                      ],
                      1,
                    ),
                    t_24._v(" "),
                    e_25(
                      "div",
                      {
                        staticClass: "header__navbar-links",
                      },
                      t_24._l(t_24.ltNav, function (n_26) {
                        return e_25(
                          "nav",
                          {
                            key: n_26.mi18nKey,
                            staticClass: "header__navbar-link",
                            class: {
                              "header__navbar-link--active": t_24.isNavActive(n_26),
                            },
                            on: {
                              mouseenter: function (e_27) {
                                return t_24.onMouseenter(n_26);
                              },
                            },
                          },
                          [
                            e_25(
                              "div",
                              {
                                class: ["nav-content", n_26.sub && "nav-content-more"],
                                on: {
                                  click: function (e_28) {
                                    return t_24.handleNavClick(n_26, e_28);
                                  },
                                },
                              },
                              [
                                n_26.mi18nKey
                                  ? e_25("span", [
                                      t_24._v(
                                        t_24._s(t_24.$getI18nWord("".concat(n_26.mi18nKey), n_26.label)),
                                      ),
                                    ])
                                  : t_24._e(),
                              ],
                            ),
                            t_24._v(" "),
                            n_26.sub
                              ? e_25(
                                  "div",
                                  {
                                    staticClass: "nav-content-sub",
                                  },
                                  t_24._l(n_26.sub, function (n_29, o_30) {
                                    return e_25(
                                      "div",
                                      {
                                        key: o_30,
                                        class: [
                                          "nav-content-sub-item",
                                          t_24.isUrl(n_29.link) && "nav-content-sub-item-link",
                                        ],
                                        on: {
                                          click: function (e_31) {
                                            return t_24.handleNavClick(n_29, e_31);
                                          },
                                        },
                                      },
                                      [
                                        n_29.mi18nKey && t_24.isUrl(n_29.link)
                                          ? e_25(
                                              "a",
                                              {
                                                attrs: {
                                                  href: n_29.link,
                                                  target: "_blank",
                                                },
                                              },
                                              [t_24._v(t_24._s(t_24.$getI18nWord("".concat(n_29.mi18nKey))))],
                                            )
                                          : t_24._e(),
                                        t_24._v(" "),
                                        n_29.mi18nKey && !t_24.isUrl(n_29.link)
                                          ? e_25("span", [
                                              t_24._v(t_24._s(t_24.$getI18nWord("".concat(n_29.mi18nKey)))),
                                            ])
                                          : t_24._e(),
                                      ],
                                    );
                                  }),
                                  0,
                                )
                              : t_24._e(),
                          ],
                        );
                      }),
                      0,
                    ),
                  ],
                ),
                t_24._v(" "),
                e_25(
                  "div",
                  {
                    staticClass: "header__navbar",
                  },
                  [
                    e_25(
                      "div",
                      {
                        staticClass: "header__navbar-btns",
                      },
                      [
                        t_24._l(t_24.rtNav, function (n_32) {
                          return e_25(
                            "nav",
                            {
                              key: n_32.mi18nKey,
                              staticClass: "header__navbar-link",
                              class: {
                                "header__navbar-link--active": t_24.isNavActive(n_32),
                              },
                            },
                            [
                              e_25(
                                "div",
                                {
                                  class: [
                                    "nav-content",
                                    "download" === n_32.type && "nav-content-download",
                                    n_32.sub && "nav-content-more",
                                  ],
                                  on: {
                                    click: function (e_33) {
                                      return t_24.handleNavClick(n_32, e_33);
                                    },
                                  },
                                },
                                [
                                  n_32.mi18nKey
                                    ? e_25("span", [
                                        t_24._v(
                                          t_24._s(t_24.$getI18nWord("".concat(n_32.mi18nKey), n_32.label)),
                                        ),
                                      ])
                                    : t_24._e(),
                                ],
                              ),
                              t_24._v(" "),
                              n_32.sub
                                ? e_25(
                                    "div",
                                    {
                                      staticClass: "nav-content-sub",
                                    },
                                    t_24._l(n_32.sub, function (n_34, o_35) {
                                      return e_25(
                                        "div",
                                        {
                                          key: o_35,
                                          class: [
                                            "nav-content-sub-item",
                                            t_24.isUrl(n_34.link) && "nav-content-sub-item-link",
                                          ],
                                          on: {
                                            click: function (e_36) {
                                              return t_24.handleNavClick(n_34, e_36);
                                            },
                                          },
                                        },
                                        [
                                          n_34.img
                                            ? e_25("img", {
                                                attrs: {
                                                  src: n_34.img,
                                                  alt: "",
                                                },
                                              })
                                            : t_24._e(),
                                          t_24._v(" "),
                                          n_34.mi18nKey
                                            ? e_25("span", [
                                                t_24._v(t_24._s(t_24.$getI18nWord("".concat(n_34.mi18nKey)))),
                                              ])
                                            : t_24._e(),
                                        ],
                                      );
                                    }),
                                    0,
                                  )
                                : t_24._e(),
                            ],
                          );
                        }),
                        t_24._v(" "),
                        e_25(
                          "client-only",
                          [
                            e_25("me-audio", {
                              staticClass: "header__bgm",
                              attrs: {
                                volume: t_24.volume,
                                icon: webpackRequire(409),
                                "active-icon": webpackRequire(410),
                                cache: !0,
                                preload: !1,
                                "storage-key": "napSeaBgAudio",
                                "storage-key-suffix": "Official",
                                src: "https://webstatic.hoyoverse.com/upload/static-resource/2022/04/19/aeefeb96a2a294cf1d7ab7324fd9a492_568718570249589416.mp3",
                              },
                              on: {
                                tap: t_24.handleBgmClick,
                              },
                            }),
                          ],
                          1,
                        ),
                        t_24._v(" "),
                        e_25("header-social", {
                          staticClass: "header__share",
                        }),
                        t_24._v(" "),
                        e_25(
                          "div",
                          {
                            staticClass: "header__login",
                          },
                          [
                            e_25(
                              "div",
                              {
                                staticClass: "login",
                              },
                              [
                                e_25(
                                  "div",
                                  {
                                    staticClass: "login__info",
                                  },
                                  [
                                    e_25("div", {
                                      staticClass: "login__icon",
                                      on: {
                                        click: t_24.handleUserClick,
                                      },
                                    }),
                                    t_24._v(" "),
                                    t_24.userInfo
                                      ? e_25(
                                          "div",
                                          {
                                            staticClass: "login__dropdown",
                                          },
                                          [
                                            e_25(
                                              "div",
                                              {
                                                staticClass: "login__dropdown-wrap",
                                              },
                                              [
                                                e_25("a", [
                                                  t_24._v(
                                                    t_24._s(t_24.$getI18nWord("textUser")) +
                                                      t_24._s(t_24.userName),
                                                  ),
                                                ]),
                                                t_24._v(" "),
                                                e_25(
                                                  "a",
                                                  {
                                                    staticClass: "btn-logout",
                                                    on: {
                                                      click: function (e_37) {
                                                        return (
                                                          e_37.preventDefault(),
                                                          t_24.logout.apply(null, arguments)
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [t_24._v(t_24._s(t_24.$getI18nWord("textLogout")))],
                                                ),
                                              ],
                                            ),
                                          ],
                                        )
                                      : t_24._e(),
                                  ],
                                ),
                              ],
                            ),
                          ],
                        ),
                      ],
                      2,
                    ),
                  ],
                ),
              ],
            ),
            t_24._v(" "),
            e_25(
              "client-only",
              [
                e_25("account-role", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !1,
                      expression: "false",
                    },
                  ],
                  on: {
                    login: t_24.onLogin,
                  },
                }),
              ],
              1,
            ),
          ],
          1,
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
