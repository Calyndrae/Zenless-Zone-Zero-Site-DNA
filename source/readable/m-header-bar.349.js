/**
 * m-header-bar — readable reconstruction of webpack module 349 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Vue component `m-header-bar`, the mobile site header. It extends the shared `base` mixin, registers `headerSocial`, builds its nav list from `HoYoverseMi18n.e` plus i18n-driven extra links (exchange/top_up/community under a `menu_more_label` group and `menu_care_link`), and renders `.m-header` with the logo (`.m-header__logo`, `.logo-icon`, `.logoSmall-img`), a download button (`.m-header__download` calling `$downloadIns.download()`), a `me-audio` BGM player (`.m-header__bgm`, storageKey `napSeaBgAudio`), a slide-in menu panel (`.m-header__menu`, `.m-header__menu-link`, `.nav-content-sub`) and login/user info blocks (`.header-user-info`, `.header-login-btn`). It reads `$store.state.lang`, `bgmMuted`, `homeSection`, commits `muteBgm`, navigates via `$router.push({ name: 'm-lang-<link>' })`, tracks clicks with `$trackEvent`/`$trackButton`, uses lodash `_.omit`, `$clipboard`, `$mtoast`, `$mJump` and `$accountRoleUtil.show()`, and toggles `showMenuBtn`/`isStartScroll` from the window scroll position.
 *
 * Exports (minified key → meaning):
 *   a → the m-header-bar Vue component (normalized component exports)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
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
    headerBarOptions = {
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
          set: function (isMuted) {
            this.$store.commit("muteBgm", isMuted);
          },
        },
        userName: function () {
          var info;
          return (null === (info = this.userInfo) || void 0 === info ? void 0 : info.display_name) || "";
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
          var url = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return url.startsWith("https");
        },
        getNavs: function () {
          var self = this,
            navs = siteConstants.e.filter(function (nav) {
              return "feature" !== nav.link;
            }),
            moreSubNavs = [];
          return (
            ["exchange", "top_up", "community"].forEach(function (label) {
              var link = self.$getI18nWord("menu_".concat(label, "_link"));
              self.isUrl(link) &&
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
            this.isUrl(this.$getI18nWord("menu_care_link")) &&
              navs.push({
                link: this.$getI18nWord("menu_care_link"),
                mi18nKey: "menu_care_label",
              }),
            navs
          );
        },
        handleLogoClick: function () {
          this.$router.push({
            name: "m-lang-main",
          });
        },
        handleBgmClick: function (isPlaying) {
          isPlaying ? this.$trackButton("Media_Music", "1") : this.$trackButton("Media_Music", "0");
        },
        showMenu: function () {
          ((this.showPanel = !0), (document.body.style.overflow = "hidden"));
        },
        closeMenu: function () {
          ((this.showPanel = !1), (document.body.style.overflow = "auto"));
        },
        isNavActive: function (nav) {
          var routeName = this.$route.name;
          return routeName.includes("company") || "m-lang-main" === routeName
            ? "main" === nav.link
            : routeName.includes(nav.link) && nav.link;
        },
        handleNavClick: function (nav, navIndex) {
          var navTrackLabels = {
            menu_exchange_label: "to_cdkey",
            menu_community_label: "view_guides",
            menu_top_up_label: "view_paycenter",
          };
          if (
            (navTrackLabels[nav.mi18nKey] &&
              this.$trackEvent("Button", "Click", navTrackLabels[nav.mi18nKey], 2),
            nav.sub)
          )
            return (
              (this.expandId = this.expandId === navIndex ? -1 : navIndex),
              void (
                -1 !== this.expandId &&
                "menu_more_label" === nav.mi18nKey &&
                this.$trackButton("view_more", "")
              )
            );
          if ((this.closeMenu(), this.isUrl(nav.link))) this.$mJump(nav.link);
          else if (!this.$route.name.includes(nav.link)) {
            var routeQuery = _.omit(this.$route.query, ["page", "category", "id"]);
            (this.$router.push({
              name: "m-lang-".concat(nav.link),
              query: routeQuery,
            }),
              this.$trackButton("Navigation_".concat(nav.miaKey), ""));
          }
        },
        handleUserClick: function () {
          (this.$trackButton("login_button", ""), this.closeMenu(), this.$accountRoleUtil.show());
        },
        copyLink: function () {
          var copyLinkSelf = this;
          this.$clipboard({
            text: this.$getI18nWord("shareCopyText"),
            onSuccess: function () {
              copyLinkSelf.$mtoast(copyLinkSelf.$getI18nWord("copySuccess"));
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
          var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || 0,
            viewportHeight =
              window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          ((this.showMenuBtn = scrollTop > (1 / 3) * viewportHeight), (this.isStartScroll = scrollTop > 0));
        },
        onGuideClick: function (guideIndex) {
          this.$trackEvent("button", "click", "preappoint", "".concat(guideIndex + 1), {
            extra_info: 2,
          });
        },
      },
    },
    componentOptions = headerBarOptions,
    componentNormalizer = (webpackRequire(694), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      componentOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return h(
          "header",
          {
            staticClass: "m-header",
          },
          [
            h(
              "div",
              {
                staticClass: "m-header-wrap",
              },
              [
                h(
                  "div",
                  {
                    staticClass: "m-header__logo",
                    on: {
                      click: function (logoClickEvent) {
                        !vm.fromGame && vm.handleLogoClick();
                      },
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
                        h("div", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "m-lang-main" === vm.$route.name && !vm.isStartScroll,
                              expression: "($route.name === 'm-lang-main' && !isStartScroll)",
                            },
                          ],
                          class: ["logo-icon", "logo-icon__light"],
                        }),
                      ],
                    ),
                    vm._v(" "),
                    h(
                      "transition",
                      {
                        attrs: {
                          name: "fadeIn",
                        },
                      },
                      [
                        h("img", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "m-lang-main" !== vm.$route.name || vm.isStartScroll,
                              expression: "$route.name !== 'm-lang-main' || isStartScroll",
                            },
                          ],
                          staticClass: "logoSmall-img",
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
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !vm.fromGame,
                        expression: "!fromGame",
                      },
                    ],
                    staticClass: "m-header-right",
                  },
                  [
                    h(
                      "client-only",
                      [
                        h(
                          "div",
                          {
                            staticClass: "m-header__download",
                            on: {
                              click: function (downloadClickEvent) {
                                return vm.handleDownload();
                              },
                            },
                          },
                          [
                            h("img", {
                              attrs: {
                                src: vm.$getI18nWord("m_download_btn"),
                              },
                            }),
                          ],
                        ),
                        vm._v(" "),
                        vm.isInBBS
                          ? vm._e()
                          : h("me-audio", {
                              staticClass: "m-header__bgm",
                              attrs: {
                                volume: vm.volume,
                                icon: webpackRequire(409),
                                "active-icon": webpackRequire(410),
                                cache: !0,
                                preload: !1,
                                storageKey: "napSeaBgAudio",
                                storageKeySuffix: "Official",
                                src: "https://webstatic.hoyoverse.com/upload/static-resource/2022/04/19/aeefeb96a2a294cf1d7ab7324fd9a492_568718570249589416.mp3",
                              },
                              on: {
                                tap: vm.handleBgmClick,
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
            vm._v(" "),
            h(
              "transition",
              {
                attrs: {
                  name: "fadeIn",
                },
              },
              [
                h("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: vm.showMenuBtn && !vm.fromGame,
                      expression: "showMenuBtn && !fromGame",
                    },
                  ],
                  staticClass: "m-header__menu-btn",
                  on: {
                    click: function (menuBtnClickEvent) {
                      return vm.showMenu();
                    },
                  },
                }),
              ],
            ),
            vm._v(" "),
            h(
              "transition",
              {
                attrs: {
                  name: "fadeIn",
                },
              },
              [
                h(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: vm.showPanel,
                        expression: "showPanel",
                      },
                    ],
                    staticClass: "m-header__menu",
                    on: {
                      click: function (menuClickEvent) {
                        return vm.closeMenu();
                      },
                      touchmove: function (menuTouchmoveEvent) {
                        menuTouchmoveEvent.stopPropagation();
                      },
                    },
                  },
                  [
                    h(
                      "div",
                      {
                        staticClass: "m-header__menu-header",
                        on: {
                          click: function (menuHeaderClickEvent) {
                            menuHeaderClickEvent.stopPropagation();
                          },
                        },
                      },
                      [
                        h("div", {
                          staticClass: "m-header__menu-close",
                          on: {
                            click: function (menuCloseClickEvent) {
                              return vm.closeMenu();
                            },
                          },
                        }),
                      ],
                    ),
                    vm._v(" "),
                    h(
                      "div",
                      {
                        staticClass: "m-header__menu-content",
                        on: {
                          click: function (menuContentClickEvent) {
                            menuContentClickEvent.stopPropagation();
                          },
                        },
                      },
                      [
                        h(
                          "div",
                          {
                            staticClass: "m-header__menu-links",
                          },
                          vm._l(vm.Navs, function (nav, index) {
                            return h(
                              "nav",
                              {
                                key: nav.mi18nKey,
                                staticClass: "m-header__menu-link",
                                class: {
                                  "m-header__menu-link--active": vm.isNavActive(nav),
                                  "m-header__menu-link--expand": vm.expandId === index,
                                },
                              },
                              [
                                h(
                                  "div",
                                  {
                                    class: [
                                      "nav-content",
                                      nav.sub && "nav-content-more",
                                      vm.isUrl(nav.link) && "nav-content-link",
                                    ],
                                    on: {
                                      click: function (navClickEvent) {
                                        return vm.handleNavClick(nav, index, navClickEvent);
                                      },
                                    },
                                  },
                                  [
                                    h("span", [
                                      vm._v(vm._s(vm.$getI18nWord("".concat(nav.mi18nKey), nav.label))),
                                    ]),
                                  ],
                                ),
                                vm._v(" "),
                                nav.sub
                                  ? h(
                                      "div",
                                      {
                                        staticClass: "nav-content-sub",
                                      },
                                      vm._l(nav.sub, function (subNav) {
                                        return h(
                                          "div",
                                          {
                                            class: [
                                              "nav-content-sub-item",
                                              vm.isUrl(subNav.link) && "nav-content-sub-item-link",
                                            ],
                                            on: {
                                              click: function (subNavClickEvent) {
                                                return vm.handleNavClick(subNav, index, subNavClickEvent);
                                              },
                                            },
                                          },
                                          [
                                            h("span", [
                                              vm._v(vm._s(vm.$getI18nWord("".concat(subNav.mi18nKey)))),
                                            ]),
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
                        vm._v(" "),
                        vm.userInfo
                          ? h(
                              "div",
                              {
                                staticClass: "header-user-info",
                              },
                              [
                                h(
                                  "div",
                                  {
                                    staticClass: "header-user-info__lt",
                                  },
                                  [
                                    h("div", {
                                      staticClass: "login__icon",
                                      on: {
                                        click: vm.handleUserClick,
                                      },
                                    }),
                                    vm._v(" "),
                                    h("span", [
                                      vm._v(vm._s(vm.$getI18nWord("textUser")) + vm._s(vm.userName)),
                                    ]),
                                  ],
                                ),
                                vm._v(" "),
                                h(
                                  "div",
                                  {
                                    staticClass: "header-logout-btn",
                                    on: {
                                      click: vm.logout,
                                    },
                                  },
                                  [vm._v(vm._s(vm.$getI18nWord("textLogout")))],
                                ),
                              ],
                            )
                          : h(
                              "div",
                              {
                                staticClass: "header-login-btn",
                                on: {
                                  click: vm.handleUserClick,
                                },
                              },
                              [vm._v(vm._s(vm.$getI18nWord("login_btn")))],
                            ),
                      ],
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
