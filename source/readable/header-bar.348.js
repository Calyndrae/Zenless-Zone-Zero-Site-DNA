/**
 * header-bar — readable reconstruction of webpack module 348 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Vue component `header-bar`, the desktop site header; it extends the `base` mixin and registers `headerSocial`. On mount it creates a `window.MeSeaDownload.DownloadCore` instance (gameBiz `nap_global`, type `fab`, source `262`) used by the download nav button; left navs come from `HoYoverseMi18n.e` (minus `feature`) plus a `menu_more_label` group of exchange/top_up/community external links resolved via `$getI18nWord`. It renders `header.header` / `.header-wrapper` with the `.header__logo` (big/small logos switched by `$store.state.homeSection` on `lang-main`), `.header__navbar-links` / `.header__navbar-link(--active)` items with `.nav-content-sub` dropdowns, `.header__navbar-btns` with the download button, a `me-audio` `.header__bgm` BGM player (volume from `$store.state.bgmMuted`, storage key `napSeaBgAudio`), `header-social`, a `.login` block with `.login__dropdown` and logout, and a hidden `account-role` component. It reads `$store.state.lang`/`userInfo`, commits `setUserInfo` and `setRoutePage`, navigates to `lang-<link>` routes with lodash `_.omit` query cleanup, and tracks via `$trackEvent`/`$trackButton`.
 *
 * Exports (minified key → meaning):
 *   a → the header-bar Vue component (normalized component exports)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 348 from 8c4c131.js
// deps: 65, 297, 208, 32, 98, 138, 171, 67, 119, 118, 28, 262, 251, 49, 672, 36, 408, 409, 410
const module_348 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(65), webpackRequire(297), webpackRequire(208));
  var vendorBundle = webpackRequire(32),
    envConfig =
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
    headerBarOptions = {
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
          set: function (userInfoValue) {
            this.$store.commit("setUserInfo", userInfoValue);
          },
        },
        userName: function () {
          var currentUserInfo;
          return (
            (null === (currentUserInfo = this.userInfo) || void 0 === currentUserInfo
              ? void 0
              : currentUserInfo.display_name) || ""
          );
        },
      },
      mounted: function () {
        this.iniDownloadIns();
      },
      methods: {
        iniDownloadIns: function () {
          var self = this,
            DownloadCore = window.MeSeaDownload.DownloadCore;
          this.downloadIns = new DownloadCore({
            lang: this.lang,
            gameBiz: "nap_global",
            type: "fab",
            useOnlineConfig: !0,
            environment: envConfig.environment,
            source: "262",
            platMiaCallback: function (platInfo) {
              var platLabel = platInfo.label,
                label = void 0 === platLabel ? "" : platLabel;
              self.$trackEvent("Button", "Click", "to_download", label.replace("download", ""));
            },
          });
        },
        isUrl: function () {
          var url = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return url.startsWith("https");
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
          var navSelf = this,
            navs = siteConstants.e.filter(function (nav) {
              return "feature" !== nav.link;
            }),
            moreSubNavs = [];
          return (
            ["exchange", "top_up", "community"].forEach(function (label) {
              var link = navSelf.$getI18nWord("menu_".concat(label, "_link"));
              navSelf.isUrl(link) &&
                moreSubNavs.push({
                  link: link,
                  mi18nKey: "menu_".concat(label, "_label"),
                });
            }),
            moreSubNavs.length &&
              navs.push({
                link: "",
                mi18nKey: "menu_more_label",
                sub: moreSubNavs,
              }),
            navs
          );
        },
        isNavActive: function (nav) {
          var routeName = this.$route.name;
          return routeName.includes("company") || "lang-main" === routeName
            ? "main" === nav.link
            : routeName.includes(nav.link) && nav.link;
        },
        handleLogoClick: function () {
          if ("lang-main" !== this.$route.name) {
            var logoQuery = _.omit(this.$route.query, ["page", "category", "id"]);
            this.$router.push({
              name: "lang-main",
              query: logoQuery,
            });
          }
        },
        handleNavClick: function (nav) {
          var navTrackLabels = {
            menu_exchange_label: "to_cdkey",
            menu_community_label: "view_guides",
            menu_top_up_label: "view_paycenter",
          };
          if (
            (navTrackLabels[nav.mi18nKey] &&
              this.$trackEvent("Button", "Click", navTrackLabels[nav.mi18nKey], 1),
            "download" === nav.type)
          )
            return (
              this.downloadIns.download(),
              this.$trackEvent("Button", "Click", "to_download", "0"),
              void this.$trackEvent("Button", "popup", "download_kit", "")
            );
          if (!this.isUrl(nav.link) && !this.$route.name.includes(nav.link)) {
            "lang-main" !== nav.link && this.$store.commit("setRoutePage", nav.link);
            var navQuery = _.omit(this.$route.query, ["page", "category", "id"]);
            (this.$router.push({
              name: "lang-".concat(nav.link),
              query: navQuery,
            }),
              this.$trackButton("Navigation_".concat(nav.miaKey), ""));
          }
        },
        handleBgmClick: function (isPlaying) {
          isPlaying ? this.$trackButton("Media_Music", "1") : this.$trackButton("Media_Music", "0");
        },
        handleUserClick: function () {
          this.userInfo ? this.$trackButton("login_button", "") : this.$accountRoleUtil.show();
        },
        logout: function () {
          var logoutSelf = this;
          return Object(vendorBundle.a)(
            regeneratorRuntime.mark(function logoutGenerator() {
              return regeneratorRuntime.wrap(function (context) {
                for (;;)
                  switch ((context.prev = context.next)) {
                    case 0:
                      return ((context.next = 2), logoutSelf.$accountRoleUtil.logout());
                    case 2:
                      ((logoutSelf.userInfo = ""),
                        logoutSelf.$trackEvent("AppointPage", "Click", "SDK_Logout", ""),
                        window.location.reload());
                    case 5:
                    case "end":
                      return context.stop();
                  }
              }, logoutGenerator);
            }),
          )();
        },
        onMouseenter: function (hoveredNav) {
          "menu_more_label" === hoveredNav.mi18nKey && this.$trackButton("view_more", "");
        },
      },
    },
    componentOptions = headerBarOptions,
    componentNormalizer = (webpackRequire(672), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      componentOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "header",
          {
            staticClass: "header",
          },
          [
            h(
              "div",
              {
                staticClass: "header-wrapper",
              },
              [
                h(
                  "div",
                  {
                    staticClass: "header-wrapper-lt",
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "header__logo lg",
                        on: {
                          click: vm.handleLogoClick,
                        },
                      },
                      [
                        h(
                          "transition",
                          {
                            attrs: {
                              name: "logoBig",
                            },
                          },
                          [
                            h("img", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: "lang-main" === vm.$route.name && "main" === vm.homeSection,
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
                        vm._v(" "),
                        h(
                          "transition",
                          {
                            attrs: {
                              name: "logoSmall",
                            },
                          },
                          [
                            h("img", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !("lang-main" === vm.$route.name && "main" === vm.homeSection),
                                  expression: "!($route.name === 'lang-main' && homeSection === 'main')",
                                },
                              ],
                              staticClass: "logo-sm",
                              attrs: {
                                src: vm.$getI18nWord("logoMob"),
                                alt: "miHoYo",
                              },
                            }),
                          ],
                        ),
                      ],
                      1,
                    ),
                    vm._v(" "),
                    h(
                      "div",
                      {
                        staticClass: "header__navbar-links",
                      },
                      vm._l(vm.ltNav, function (ltNavItem) {
                        return h(
                          "nav",
                          {
                            key: ltNavItem.mi18nKey,
                            staticClass: "header__navbar-link",
                            class: {
                              "header__navbar-link--active": vm.isNavActive(ltNavItem),
                            },
                            on: {
                              mouseenter: function (navMouseenterEvent) {
                                return vm.onMouseenter(ltNavItem);
                              },
                            },
                          },
                          [
                            h(
                              "div",
                              {
                                class: ["nav-content", ltNavItem.sub && "nav-content-more"],
                                on: {
                                  click: function (navClickEvent) {
                                    return vm.handleNavClick(ltNavItem, navClickEvent);
                                  },
                                },
                              },
                              [
                                ltNavItem.mi18nKey
                                  ? h("span", [
                                      vm._v(
                                        vm._s(
                                          vm.$getI18nWord("".concat(ltNavItem.mi18nKey), ltNavItem.label),
                                        ),
                                      ),
                                    ])
                                  : vm._e(),
                              ],
                            ),
                            vm._v(" "),
                            ltNavItem.sub
                              ? h(
                                  "div",
                                  {
                                    staticClass: "nav-content-sub",
                                  },
                                  vm._l(ltNavItem.sub, function (ltSubNav, ltSubIndex) {
                                    return h(
                                      "div",
                                      {
                                        key: ltSubIndex,
                                        class: [
                                          "nav-content-sub-item",
                                          vm.isUrl(ltSubNav.link) && "nav-content-sub-item-link",
                                        ],
                                        on: {
                                          click: function (ltSubNavClickEvent) {
                                            return vm.handleNavClick(ltSubNav, ltSubNavClickEvent);
                                          },
                                        },
                                      },
                                      [
                                        ltSubNav.mi18nKey && vm.isUrl(ltSubNav.link)
                                          ? h(
                                              "a",
                                              {
                                                attrs: {
                                                  href: ltSubNav.link,
                                                  target: "_blank",
                                                },
                                              },
                                              [vm._v(vm._s(vm.$getI18nWord("".concat(ltSubNav.mi18nKey))))],
                                            )
                                          : vm._e(),
                                        vm._v(" "),
                                        ltSubNav.mi18nKey && !vm.isUrl(ltSubNav.link)
                                          ? h("span", [
                                              vm._v(vm._s(vm.$getI18nWord("".concat(ltSubNav.mi18nKey)))),
                                            ])
                                          : vm._e(),
                                      ],
                                    );
                                  }),
                                  0,
                                )
                              : vm._e(),
                          ],
                        );
                      }),
                      0,
                    ),
                  ],
                ),
                vm._v(" "),
                h(
                  "div",
                  {
                    staticClass: "header__navbar",
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "header__navbar-btns",
                      },
                      [
                        vm._l(vm.rtNav, function (rtNavItem) {
                          return h(
                            "nav",
                            {
                              key: rtNavItem.mi18nKey,
                              staticClass: "header__navbar-link",
                              class: {
                                "header__navbar-link--active": vm.isNavActive(rtNavItem),
                              },
                            },
                            [
                              h(
                                "div",
                                {
                                  class: [
                                    "nav-content",
                                    "download" === rtNavItem.type && "nav-content-download",
                                    rtNavItem.sub && "nav-content-more",
                                  ],
                                  on: {
                                    click: function (rtNavClickEvent) {
                                      return vm.handleNavClick(rtNavItem, rtNavClickEvent);
                                    },
                                  },
                                },
                                [
                                  rtNavItem.mi18nKey
                                    ? h("span", [
                                        vm._v(
                                          vm._s(
                                            vm.$getI18nWord("".concat(rtNavItem.mi18nKey), rtNavItem.label),
                                          ),
                                        ),
                                      ])
                                    : vm._e(),
                                ],
                              ),
                              vm._v(" "),
                              rtNavItem.sub
                                ? h(
                                    "div",
                                    {
                                      staticClass: "nav-content-sub",
                                    },
                                    vm._l(rtNavItem.sub, function (rtSubNav, rtSubIndex) {
                                      return h(
                                        "div",
                                        {
                                          key: rtSubIndex,
                                          class: [
                                            "nav-content-sub-item",
                                            vm.isUrl(rtSubNav.link) && "nav-content-sub-item-link",
                                          ],
                                          on: {
                                            click: function (rtSubNavClickEvent) {
                                              return vm.handleNavClick(rtSubNav, rtSubNavClickEvent);
                                            },
                                          },
                                        },
                                        [
                                          rtSubNav.img
                                            ? h("img", {
                                                attrs: {
                                                  src: rtSubNav.img,
                                                  alt: "",
                                                },
                                              })
                                            : vm._e(),
                                          vm._v(" "),
                                          rtSubNav.mi18nKey
                                            ? h("span", [
                                                vm._v(vm._s(vm.$getI18nWord("".concat(rtSubNav.mi18nKey)))),
                                              ])
                                            : vm._e(),
                                        ],
                                      );
                                    }),
                                    0,
                                  )
                                : vm._e(),
                            ],
                          );
                        }),
                        vm._v(" "),
                        h(
                          "client-only",
                          [
                            h("me-audio", {
                              staticClass: "header__bgm",
                              attrs: {
                                volume: vm.volume,
                                icon: webpackRequire(409),
                                "active-icon": webpackRequire(410),
                                cache: !0,
                                preload: !1,
                                "storage-key": "napSeaBgAudio",
                                "storage-key-suffix": "Official",
                                src: "https://webstatic.hoyoverse.com/upload/static-resource/2022/04/19/aeefeb96a2a294cf1d7ab7324fd9a492_568718570249589416.mp3",
                              },
                              on: {
                                tap: vm.handleBgmClick,
                              },
                            }),
                          ],
                          1,
                        ),
                        vm._v(" "),
                        h("header-social", {
                          staticClass: "header__share",
                        }),
                        vm._v(" "),
                        h(
                          "div",
                          {
                            staticClass: "header__login",
                          },
                          [
                            h(
                              "div",
                              {
                                staticClass: "login",
                              },
                              [
                                h(
                                  "div",
                                  {
                                    staticClass: "login__info",
                                  },
                                  [
                                    h("div", {
                                      staticClass: "login__icon",
                                      on: {
                                        click: vm.handleUserClick,
                                      },
                                    }),
                                    vm._v(" "),
                                    vm.userInfo
                                      ? h(
                                          "div",
                                          {
                                            staticClass: "login__dropdown",
                                          },
                                          [
                                            h(
                                              "div",
                                              {
                                                staticClass: "login__dropdown-wrap",
                                              },
                                              [
                                                h("a", [
                                                  vm._v(
                                                    vm._s(vm.$getI18nWord("textUser")) + vm._s(vm.userName),
                                                  ),
                                                ]),
                                                vm._v(" "),
                                                h(
                                                  "a",
                                                  {
                                                    staticClass: "btn-logout",
                                                    on: {
                                                      click: function (logoutClickEvent) {
                                                        return (
                                                          logoutClickEvent.preventDefault(),
                                                          vm.logout.apply(null, arguments)
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [vm._v(vm._s(vm.$getI18nWord("textLogout")))],
                                                ),
                                              ],
                                            ),
                                          ],
                                        )
                                      : vm._e(),
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
            vm._v(" "),
            h(
              "client-only",
              [
                h("account-role", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !1,
                      expression: "false",
                    },
                  ],
                  on: {
                    login: vm.onLogin,
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
