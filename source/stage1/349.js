// m-header-bar — module 349 from 8c4c131
// module 349 from 8c4c131.js
// deps: 65, 297, 208, 171, 67, 119, 118, 262, 251, 49, 694, 36, 409, 410
const module_349 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(65),
    webpackRequire(297),
    webpackRequire(208),
    webpackRequire(171),
    webpackRequire(67),
    webpackRequire(119),
    webpackRequire(118));
  var headerSocial = webpackRequire(262),
    baseMixin = webpackRequire(251),
    siteConstants = webpackRequire(49),
    A_1 = {
      name: "m-header-bar",
      components: {
        headerSocial: headerSocial.a,
      },
      extends: baseMixin.a,
      data: function () {
        return {
          isStartScroll: !1,
          Navs: this.getNavs(),
          showPanel: !1,
          showMenuBtn: !1,
          subscribeStage: "",
          expandId: -1,
        };
      },
      computed: {
        isEN: function () {
          return "en-us" === this.$store.state.lang;
        },
        volume: function () {
          return this.$store.state.bgmMuted ? 0 : 1;
        },
        isInBBS: function () {
          return this.$isBBS;
        },
        fromGame: function () {
          return this.$route.query.nolandscape && this.$route.query.fromGame;
        },
        homeSectionName: function () {
          return this.$store.state.homeSection;
        },
        iconStopped: function () {
          return !this.bgmPlaying;
        },
        platform: function () {
          return this.$isBBS ? "mobile" : "";
        },
        muted: {
          get: function () {
            return this.$store.state.bgmMuted;
          },
          set: function (t_4) {
            this.$store.commit("muteBgm", t_4);
          },
        },
        userName: function () {
          var t_5;
          return (null === (t_5 = this.userInfo) || void 0 === t_5 ? void 0 : t_5.display_name) || "";
        },
      },
      watch: {
        "$route.name": {
          immediate: !0,
          handler: function () {
            this.handleScroll();
          },
        },
      },
      mounted: function () {
        this.bindEvents();
      },
      beforeDestroy: function () {
        this.removeEvents();
      },
      methods: {
        handleDownload: function () {
          (this.$trackEvent("Button", "Click", "download", "0"), this.$downloadIns.download());
        },
        isUrl: function () {
          var t_6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return t_6.startsWith("https");
        },
        getNavs: function () {
          var t_7 = this,
            e_8 = siteConstants.e.filter(function (nav) {
              return "feature" !== nav.link;
            }),
            n_9 = [];
          return (
            ["exchange", "top_up", "community"].forEach(function (label) {
              var link = t_7.$getI18nWord("menu_".concat(label, "_link"));
              t_7.isUrl(link) &&
                n_9.push({
                  link: link,
                  mi18nKey: "menu_".concat(label, "_label"),
                });
            }),
            n_9.length &&
              e_8.push({
                link: "",
                mi18nKey: "menu_more_label",
                sub: n_9,
              }),
            this.isUrl(this.$getI18nWord("menu_care_link")) &&
              e_8.push({
                link: this.$getI18nWord("menu_care_link"),
                mi18nKey: "menu_care_label",
              }),
            e_8
          );
        },
        handleLogoClick: function () {
          this.$router.push({
            name: "m-lang-main",
          });
        },
        handleBgmClick: function (t_10) {
          t_10 ? this.$trackButton("Media_Music", "1") : this.$trackButton("Media_Music", "0");
        },
        showMenu: function () {
          ((this.showPanel = !0), (document.body.style.overflow = "hidden"));
        },
        closeMenu: function () {
          ((this.showPanel = !1), (document.body.style.overflow = "auto"));
        },
        isNavActive: function (nav) {
          var t_11 = this.$route.name;
          return t_11.includes("company") || "m-lang-main" === t_11
            ? "main" === nav.link
            : t_11.includes(nav.link) && nav.link;
        },
        handleNavClick: function (nav, t_12) {
          var e_13 = {
            menu_exchange_label: "to_cdkey",
            menu_community_label: "view_guides",
            menu_top_up_label: "view_paycenter",
          };
          if ((e_13[nav.mi18nKey] && this.$trackEvent("Button", "Click", e_13[nav.mi18nKey], 2), nav.sub))
            return (
              (this.expandId = this.expandId === t_12 ? -1 : t_12),
              void (
                -1 !== this.expandId &&
                "menu_more_label" === nav.mi18nKey &&
                this.$trackButton("view_more", "")
              )
            );
          if ((this.closeMenu(), this.isUrl(nav.link))) this.$mJump(nav.link);
          else if (!this.$route.name.includes(nav.link)) {
            var n_14 = _.omit(this.$route.query, ["page", "category", "id"]);
            (this.$router.push({
              name: "m-lang-".concat(nav.link),
              query: n_14,
            }),
              this.$trackButton("Navigation_".concat(nav.miaKey), ""));
          }
        },
        handleUserClick: function () {
          (this.$trackButton("login_button", ""), this.closeMenu(), this.$accountRoleUtil.show());
        },
        copyLink: function () {
          var t_15 = this;
          this.$clipboard({
            text: this.$getI18nWord("shareCopyText"),
            onSuccess: function () {
              t_15.$mtoast(t_15.$getI18nWord("copySuccess"));
            },
          });
        },
        bindEvents: function () {
          window.addEventListener("scroll", this.handleScroll);
        },
        removeEvents: function () {
          window.removeEventListener("scroll", this.handleScroll);
        },
        handleScroll: function () {
          var t_16 = document.body.scrollTop || document.documentElement.scrollTop || 0,
            e_17 = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          ((this.showMenuBtn = t_16 > (1 / 3) * e_17), (this.isStartScroll = t_16 > 0));
        },
        onGuideClick: function (t_18) {
          this.$trackEvent("button", "click", "preappoint", "".concat(t_18 + 1), {
            extra_info: 2,
          });
        },
      },
    },
    m_2 = A_1,
    d_3 = (webpackRequire(694), webpackRequire(36)),
    component = Object(d_3.a)(
      m_2,
      function () {
        var t_19 = this,
          e_20 = t_19._self._c;
        return e_20(
          "header",
          {
            staticClass: "m-header",
          },
          [
            e_20(
              "div",
              {
                staticClass: "m-header-wrap",
              },
              [
                e_20(
                  "div",
                  {
                    staticClass: "m-header__logo",
                    on: {
                      click: function (e_21) {
                        !t_19.fromGame && t_19.handleLogoClick();
                      },
                    },
                  },
                  [
                    e_20(
                      "transition",
                      {
                        attrs: {
                          name: "logoBig",
                        },
                      },
                      [
                        e_20("div", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "m-lang-main" === t_19.$route.name && !t_19.isStartScroll,
                              expression: "($route.name === 'm-lang-main' && !isStartScroll)",
                            },
                          ],
                          class: ["logo-icon", "logo-icon__light"],
                        }),
                      ],
                    ),
                    t_19._v(" "),
                    e_20(
                      "transition",
                      {
                        attrs: {
                          name: "fadeIn",
                        },
                      },
                      [
                        e_20("img", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "m-lang-main" !== t_19.$route.name || t_19.isStartScroll,
                              expression: "$route.name !== 'm-lang-main' || isStartScroll",
                            },
                          ],
                          staticClass: "logoSmall-img",
                          attrs: {
                            src: t_19.$getI18nWord("logoMob"),
                            alt: "miHoYo",
                          },
                        }),
                      ],
                    ),
                  ],
                  1,
                ),
                t_19._v(" "),
                e_20(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !t_19.fromGame,
                        expression: "!fromGame",
                      },
                    ],
                    staticClass: "m-header-right",
                  },
                  [
                    e_20(
                      "client-only",
                      [
                        e_20(
                          "div",
                          {
                            staticClass: "m-header__download",
                            on: {
                              click: function (e_22) {
                                return t_19.handleDownload();
                              },
                            },
                          },
                          [
                            e_20("img", {
                              attrs: {
                                src: t_19.$getI18nWord("m_download_btn"),
                              },
                            }),
                          ],
                        ),
                        t_19._v(" "),
                        t_19.isInBBS
                          ? t_19._e()
                          : e_20("me-audio", {
                              staticClass: "m-header__bgm",
                              attrs: {
                                volume: t_19.volume,
                                icon: webpackRequire(409),
                                "active-icon": webpackRequire(410),
                                cache: !0,
                                preload: !1,
                                storageKey: "napSeaBgAudio",
                                storageKeySuffix: "Official",
                                src: "https://webstatic.hoyoverse.com/upload/static-resource/2022/04/19/aeefeb96a2a294cf1d7ab7324fd9a492_568718570249589416.mp3",
                              },
                              on: {
                                tap: t_19.handleBgmClick,
                              },
                            }),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ],
            ),
            t_19._v(" "),
            e_20(
              "transition",
              {
                attrs: {
                  name: "fadeIn",
                },
              },
              [
                e_20("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t_19.showMenuBtn && !t_19.fromGame,
                      expression: "showMenuBtn && !fromGame",
                    },
                  ],
                  staticClass: "m-header__menu-btn",
                  on: {
                    click: function (e_23) {
                      return t_19.showMenu();
                    },
                  },
                }),
              ],
            ),
            t_19._v(" "),
            e_20(
              "transition",
              {
                attrs: {
                  name: "fadeIn",
                },
              },
              [
                e_20(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: t_19.showPanel,
                        expression: "showPanel",
                      },
                    ],
                    staticClass: "m-header__menu",
                    on: {
                      click: function (e_24) {
                        return t_19.closeMenu();
                      },
                      touchmove: function (t_25) {
                        t_25.stopPropagation();
                      },
                    },
                  },
                  [
                    e_20(
                      "div",
                      {
                        staticClass: "m-header__menu-header",
                        on: {
                          click: function (t_26) {
                            t_26.stopPropagation();
                          },
                        },
                      },
                      [
                        e_20("div", {
                          staticClass: "m-header__menu-close",
                          on: {
                            click: function (e_27) {
                              return t_19.closeMenu();
                            },
                          },
                        }),
                      ],
                    ),
                    t_19._v(" "),
                    e_20(
                      "div",
                      {
                        staticClass: "m-header__menu-content",
                        on: {
                          click: function (t_28) {
                            t_28.stopPropagation();
                          },
                        },
                      },
                      [
                        e_20(
                          "div",
                          {
                            staticClass: "m-header__menu-links",
                          },
                          t_19._l(t_19.Navs, function (n_29, o_30) {
                            return e_20(
                              "nav",
                              {
                                key: n_29.mi18nKey,
                                staticClass: "m-header__menu-link",
                                class: {
                                  "m-header__menu-link--active": t_19.isNavActive(n_29),
                                  "m-header__menu-link--expand": t_19.expandId === o_30,
                                },
                              },
                              [
                                e_20(
                                  "div",
                                  {
                                    class: [
                                      "nav-content",
                                      n_29.sub && "nav-content-more",
                                      t_19.isUrl(n_29.link) && "nav-content-link",
                                    ],
                                    on: {
                                      click: function (e_31) {
                                        return t_19.handleNavClick(n_29, o_30, e_31);
                                      },
                                    },
                                  },
                                  [
                                    e_20("span", [
                                      t_19._v(
                                        t_19._s(t_19.$getI18nWord("".concat(n_29.mi18nKey), n_29.label)),
                                      ),
                                    ]),
                                  ],
                                ),
                                t_19._v(" "),
                                n_29.sub
                                  ? e_20(
                                      "div",
                                      {
                                        staticClass: "nav-content-sub",
                                      },
                                      t_19._l(n_29.sub, function (n_32) {
                                        return e_20(
                                          "div",
                                          {
                                            class: [
                                              "nav-content-sub-item",
                                              t_19.isUrl(n_32.link) && "nav-content-sub-item-link",
                                            ],
                                            on: {
                                              click: function (e_33) {
                                                return t_19.handleNavClick(n_32, o_30, e_33);
                                              },
                                            },
                                          },
                                          [
                                            e_20("span", [
                                              t_19._v(t_19._s(t_19.$getI18nWord("".concat(n_32.mi18nKey)))),
                                            ]),
                                          ],
                                        );
                                      }),
                                      0,
                                    )
                                  : t_19._e(),
                              ],
                            );
                          }),
                          0,
                        ),
                        t_19._v(" "),
                        t_19.userInfo
                          ? e_20(
                              "div",
                              {
                                staticClass: "header-user-info",
                              },
                              [
                                e_20(
                                  "div",
                                  {
                                    staticClass: "header-user-info__lt",
                                  },
                                  [
                                    e_20("div", {
                                      staticClass: "login__icon",
                                      on: {
                                        click: t_19.handleUserClick,
                                      },
                                    }),
                                    t_19._v(" "),
                                    e_20("span", [
                                      t_19._v(
                                        t_19._s(t_19.$getI18nWord("textUser")) + t_19._s(t_19.userName),
                                      ),
                                    ]),
                                  ],
                                ),
                                t_19._v(" "),
                                e_20(
                                  "div",
                                  {
                                    staticClass: "header-logout-btn",
                                    on: {
                                      click: t_19.logout,
                                    },
                                  },
                                  [t_19._v(t_19._s(t_19.$getI18nWord("textLogout")))],
                                ),
                              ],
                            )
                          : e_20(
                              "div",
                              {
                                staticClass: "header-login-btn",
                                on: {
                                  click: t_19.handleUserClick,
                                },
                              },
                              [t_19._v(t_19._s(t_19.$getI18nWord("login_btn")))],
                            ),
                      ],
                    ),
                  ],
                ),
              ],
            ),
            t_19._v(" "),
            e_20(
              "client-only",
              [
                e_20("account-role", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !1,
                      expression: "false",
                    },
                  ],
                  on: {
                    login: t_19.onLogin,
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
