// page:lang-main — module 1418 from 3b23566
// module 1418 from 3b23566.js
// deps: 1344, 85, 84, 105, 106, 56, 71, 32, 98, 136, 77, 137, 155, 67, 208, 138, 65, 1164, 1154, 1124, 1152, 1153, 556, 49, 1345, 36, 171, 118, 1352, 1417, 28, 1157, 1353, 251, 24, 1357, 1195, 1349, 1350, 1351, 204, 1120, 1126, 1362, 1361, 119, 1367, 1366, 1369, 1373, 1202, 1378, 1224, 1384, 1377, 1392, 1340, 1341, 1342, 1343, 1216
const module_1418 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var o_1 = [
      function () {
        var e_34 = this._self._c;
        return e_34(
          "div",
          {
            staticClass: "fill fill-black fill-black-character",
          },
          [
            e_34("img", {
              attrs: {
                src: webpackRequire(1344),
                alt: "",
              },
            }),
          ],
        );
      },
    ],
    r_2 =
      (webpackRequire(85), webpackRequire(84), webpackRequire(105), webpackRequire(106), webpackRequire(56)),
    vendorBundle = webpackRequire(71),
    vendorBundle2 = webpackRequire(32),
    d_3 =
      (webpackRequire(98),
      webpackRequire(136),
      webpackRequire(77),
      webpackRequire(137),
      webpackRequire(155),
      webpackRequire(67),
      webpackRequire(208),
      webpackRequire(138),
      webpackRequire(65),
      webpackRequire(1164)),
    characterAndCampCMSAPI = webpackRequire(1154),
    newsCMSAPI = webpackRequire(1124),
    worldCMSAPI = webpackRequire(1152),
    videoCMSAPI = webpackRequire(1153),
    f_4 = (webpackRequire(556), webpackRequire(49)),
    w_5 = {
      name: "sidebar",
      props: {
        navIndex: {
          type: Number,
          default: 0,
        },
      },
      data: function () {
        return {
          Navs: f_4.e,
          navHeight: 2.12,
        };
      },
      computed: {
        activeIndex: function () {
          return this.navIndex;
        },
        pagerStyle: function () {
          return {
            transform: "translateY(-".concat(this.activeIndex * this.navHeight, "rem)"),
          };
        },
      },
      mounted: function () {
        var e_35 = this;
        (this.$nextTick(function () {
          e_35.measureNavHeight();
        }),
          (this.onResize = function () {
            e_35.measureNavHeight();
          }),
          window.addEventListener("resize", this.onResize));
      },
      beforeDestroy: function () {
        window.removeEventListener("resize", this.onResize);
      },
      methods: {
        measureNavHeight: function () {
          var e_36 = this.$el.querySelectorAll(".sidebar__pagers-num");
          if (!(e_36.length < 2) && this.$flex) {
            var t_37 = this.$flex("rem");
            if (t_37) {
              var n_38 = (e_36[1].offsetTop - e_36[0].offsetTop) / t_37;
              n_38 > 0 && (this.navHeight = n_38);
            }
          }
        },
        handleSlide: function (e_39) {
          var t_40 = this.navIndex;
          ("prev" === e_39 && (t_40 = Math.max(0, this.navIndex - 1)),
            "next" === e_39 && (t_40 = Math.min(this.Navs.length - 1, this.navIndex + 1)),
            this.$emit("toSection", t_40));
        },
        handleNav: function (e_41) {
          this.$emit("toSection", e_41);
        },
      },
    },
    C_6 = (webpackRequire(1345), webpackRequire(36)),
    x_7 = Object(C_6.a)(
      w_5,
      function () {
        var e_42 = this,
          t_43 = e_42._self._c;
        return t_43(
          "aside",
          {
            staticClass: "sidebar",
          },
          [
            t_43(
              "div",
              {
                staticClass: "sidebar__nav",
              },
              [
                t_43("div", {
                  staticClass: "sidebar__nav-prev",
                  class: {
                    disable: 0 === e_42.activeIndex,
                  },
                  on: {
                    click: function (t_44) {
                      return e_42.handleSlide("prev");
                    },
                  },
                }),
                e_42._v(" "),
                t_43("div", {
                  staticClass: "sidebar__nav-next",
                  class: {
                    disable: e_42.activeIndex === e_42.Navs.length - 1,
                  },
                  on: {
                    click: function (t_45) {
                      return e_42.handleSlide("next");
                    },
                  },
                }),
              ],
            ),
            e_42._v(" "),
            t_43(
              "div",
              {
                ref: "asideNav",
                staticClass: "sidebar__scroll",
              },
              [
                t_43(
                  "ul",
                  {
                    staticClass: "sidebar__pagers",
                    style: e_42.pagerStyle,
                  },
                  e_42._l(e_42.Navs, function (n_46, o_47) {
                    return t_43(
                      "li",
                      {
                        key: n_46.mi18nKey,
                        staticClass: "sidebar__pagers-num",
                        class: {
                          "sidebar__pagers-num--active": o_47 === e_42.activeIndex,
                        },
                        on: {
                          click: function (t_48) {
                            return e_42.handleNav(o_47);
                          },
                        },
                      },
                      [e_42._v("\n        0" + e_42._s(o_47 + 1) + "\n      ")],
                    );
                  }),
                  0,
                ),
              ],
            ),
          ],
        );
      },
      [],
      !1,
      null,
      null,
      null,
    ).exports,
    E_8 = (webpackRequire(171), webpackRequire(118), webpackRequire(1352)),
    firebase = webpackRequire(1417),
    siteConfigConstants = webpackRequire(28),
    videoDialogComponent = webpackRequire(1157),
    y_9 = {
      name: "cloud-download-dialog",
      mounted: function () {
        this.$trackEvent("popup_download", "view", "cloud", "");
      },
      methods: {
        handleClose: function () {
          this.$emit("close");
        },
        handleDownload: function (e_49) {
          this.$trackEvent(
            "popup_download",
            "click",
            "download_cloud",
            {
              win: "windows",
              mac: "macos",
            }[e_49],
          );
          var link = this.$getI18nWord("cloud_download_link_".concat(e_49));
          link &&
            this.$mJump({
              url: link,
              openType: "system",
            });
        },
      },
    },
    Q_10 =
      (webpackRequire(1353),
      Object(C_6.a)(
        y_9,
        function () {
          var e_50 = this,
            t_51 = e_50._self._c;
          return t_51(
            "div",
            {
              staticClass: "cloud-download-dialog",
            },
            [
              t_51(
                "div",
                {
                  staticClass: "cloud-download-dialog-title",
                },
                [e_50._v(e_50._s(e_50.$getI18nWord("cloud_download_modal_title")))],
              ),
              e_50._v(" "),
              t_51(
                "div",
                {
                  staticClass: "cloud-download-dialog-content",
                },
                [
                  t_51(
                    "div",
                    {
                      staticClass: "cloud-download-qrcode",
                    },
                    [
                      t_51("img", {
                        attrs: {
                          src: e_50.$getI18nWord("cloud_download_qrocde"),
                          alt: "",
                        },
                      }),
                      e_50._v(" "),
                      t_51("span", [e_50._v(e_50._s(e_50.$getI18nWord("cloud_download_scan_tip")))]),
                    ],
                  ),
                  e_50._v(" "),
                  t_51(
                    "div",
                    {
                      staticClass: "cloud-download-btn-container",
                    },
                    [
                      t_51("div", {
                        staticClass: "cloud-download-btn",
                        style: {
                          backgroundImage: "url(".concat(e_50.$getI18nWord("cloud_download_btn_win"), ")"),
                        },
                        on: {
                          click: function (t_52) {
                            return e_50.handleDownload("win");
                          },
                        },
                      }),
                      e_50._v(" "),
                      t_51("div", {
                        staticClass: "cloud-download-btn",
                        style: {
                          backgroundImage: "url(".concat(e_50.$getI18nWord("cloud_download_btn_mac"), ")"),
                        },
                        on: {
                          click: function (t_53) {
                            return e_50.handleDownload("mac");
                          },
                        },
                      }),
                    ],
                  ),
                ],
              ),
              e_50._v(" "),
              t_51("div", {
                staticClass: "cloud-download-dialog-close",
                on: {
                  click: e_50.handleClose,
                },
              }),
            ],
          );
        },
        [],
        !1,
        null,
        "138999ba",
        null,
      ).exports),
    baseMixin = webpackRequire(251),
    W_11 = "_cache_by_zenless-test.hoyoverse/main",
    L_12 = {
      extends: baseMixin.a,
      props: {
        kvRes: {
          type: Object,
          default: function () {},
        },
        triggerAnim: {
          type: Boolean,
          default: !1,
        },
      },
      data: function () {
        var e_54 = "1" === this.$getI18nWord("use_webpush"),
          t_55 = this.$getI18nWord("cloud_download_btn") || "";
        return {
          subscribed: !1,
          subscribeStage: "",
          retryCnt: 0,
          canFetch: !0,
          messagingRef: null,
          useWebpush: e_54,
          layerTag: "",
          cloudDownloadBtn: t_55.startsWith("https") ? t_55 : "",
        };
      },
      mounted: function () {
        var e_56 = this;
        return Object(vendorBundle2.a)(
          regeneratorRuntime.mark(function t_57() {
            var o_58, r_59;
            return regeneratorRuntime.wrap(function (t_60) {
              for (;;)
                switch ((t_60.prev = t_60.next)) {
                  case 0:
                    (e_56.initApp(),
                      (o_58 = webpackRequire(24)),
                      (r_59 = o_58.storage),
                      (e_56.subscribed = !(
                        !r_59.get("webpush_subscribe") && !r_59.get("webpush_subscribe", W_11)
                      )),
                      r_59.set("webpush_subscribe", e_56.subscribed ? 1 : 0, 0, W_11),
                      e_56.getUrl());
                  case 1:
                  case "end":
                    return t_60.stop();
                }
            }, t_57);
          }),
        )();
      },
      methods: {
        getUrl: function () {
          var e_61 = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function t_62() {
              var n_63, o_64, r_65;
              return regeneratorRuntime.wrap(function (t_66) {
                for (;;)
                  switch ((t_66.prev = t_66.next)) {
                    case 0:
                      return (
                        (n_63 = window.MeSeaDownload.getDownloadMi18n),
                        (t_66.next = 3),
                        n_63({
                          lang: e_61.lang,
                          environment: siteConfigConstants.environment,
                          game_biz: "nap_global",
                        })
                      );
                    case 3:
                      ((o_64 = t_66.sent),
                        (r_65 = o_64.layer_tag),
                        (e_61.layerTag = ["pt-pt", "fr-fr"].includes(e_61.$getLang()) ? "" : r_65));
                    case 6:
                    case "end":
                      return t_66.stop();
                  }
              }, t_62);
            }),
          )();
        },
        handleDownload: function () {
          (this.$trackButton("download", "0"),
            this.$ads.fa.trackCustomEvent("ClickButton", {
              label: "Normal",
            }),
            this.$ads.twitter.trackEvent("tw-rc4y1-rcl9p"));
          var e_67 = (0, webpackRequire(24).addParamsToUrl)(this.$getI18nWord("pc_download_link"), {
            url: encodeURIComponent(window.location.href),
            appid: 262,
          });
          this.$mJump(e_67);
        },
        handleSteamDownload: function () {
          this.$trackButton("steam_wishlist");
          var e_68 = this.$getI18nWord("pc_steam_download_link");
          this.$mJump(e_68);
        },
        getNotifyToken: function (e_69) {
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function t_70() {
              var n_71, o_72;
              return regeneratorRuntime.wrap(
                function (t_73) {
                  for (;;)
                    switch ((t_73.prev = t_73.next)) {
                      case 0:
                        if (((t_73.prev = 0), "Notification" in window)) {
                          t_73.next = 5;
                          break;
                        }
                        (console.info("This browser does not support desktop notification"),
                          (t_73.next = 25));
                        break;
                      case 5:
                        if ("granted" !== Notification.permission) {
                          t_73.next = 14;
                          break;
                        }
                        return (
                          (t_73.next = 8),
                          Object(firebase.b)(e_69, {
                            vapidKey:
                              "BOlB9jQXHfkcBoA04_CeqJDYYc9-4leaByX3fiPhlZC2yfyvAvyuuE5XpogZ36FyuzIOPbnRo2Z1-F54K3dOYSo",
                          })
                        );
                      case 8:
                        if ((n_71 = t_73.sent)) {
                          t_73.next = 11;
                          break;
                        }
                        return t_73.abrupt("return", null);
                      case 11:
                        return t_73.abrupt("return", n_71);
                      case 14:
                        if ("denied" === Notification.permission) {
                          t_73.next = 25;
                          break;
                        }
                        return ((t_73.next = 17), Notification.requestPermission());
                      case 17:
                        if ("granted" !== t_73.sent) {
                          t_73.next = 25;
                          break;
                        }
                        return (
                          (t_73.next = 21),
                          Object(firebase.b)(e_69, {
                            vapidKey:
                              "BOlB9jQXHfkcBoA04_CeqJDYYc9-4leaByX3fiPhlZC2yfyvAvyuuE5XpogZ36FyuzIOPbnRo2Z1-F54K3dOYSo",
                          })
                        );
                      case 21:
                        if ((o_72 = t_73.sent)) {
                          t_73.next = 24;
                          break;
                        }
                        return t_73.abrupt("return", null);
                      case 24:
                        return t_73.abrupt("return", o_72);
                      case 25:
                        return t_73.abrupt("return", null);
                      case 28:
                        return ((t_73.prev = 28), (t_73.t0 = t_73.catch(0)), t_73.abrupt("return", null));
                      case 31:
                      case "end":
                        return t_73.stop();
                    }
                },
                t_70,
                null,
                [[0, 28]],
              );
            }),
          )();
        },
        loadToken: function (e_74) {
          var t_75 = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function n_76() {
              var o_77;
              return regeneratorRuntime.wrap(function (n_78) {
                for (;;)
                  switch ((n_78.prev = n_78.next)) {
                    case 0:
                      if ("denied" !== Notification.permission) {
                        n_78.next = 2;
                        break;
                      }
                      return n_78.abrupt("return", null);
                    case 2:
                      return ((n_78.next = 4), t_75.getNotifyToken(e_74));
                    case 4:
                      o_77 = n_78.sent;
                    case 5:
                      if (o_77 || !(t_75.retryCnt < 3)) {
                        n_78.next = 12;
                        break;
                      }
                      return ((t_75.retryCnt += 1), (n_78.next = 9), t_75.getNotifyToken(e_74));
                    case 9:
                      ((o_77 = n_78.sent), (n_78.next = 5));
                      break;
                    case 12:
                      return n_78.abrupt("return", o_77);
                    case 13:
                    case "end":
                      return n_78.stop();
                  }
              }, n_76);
            }),
          )();
        },
        initApp: function () {
          var e_79 = Object(E_8.a)({
              apiKey: "AIzaSyAsg8L4HPd9usmBtR9QIRA_ykS9-yqw_rI",
              authDomain: "nap-webpush.firebaseapp.com",
              projectId: "nap-webpush",
              storageBucket: "nap-webpush.appspot.com",
              messagingSenderId: "714492885039",
              appId: "1:714492885039:web:de938d2747167becbbeeda",
              measurementId: "G-R6MEDC9FB2",
            }),
            t_80 = Object(firebase.a)(e_79);
          ((this.messagingRef = t_80),
            "Notification" in window && "granted" === Notification.permission && this.getNotifyToken(t_80));
        },
        subscribeWebpush: function () {
          var e_81 = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function t_82() {
              var o_83, r_84, c_85, l_86;
              return regeneratorRuntime.wrap(
                function (t_87) {
                  for (;;)
                    switch ((t_87.prev = t_87.next)) {
                      case 0:
                        if (e_81.messagingRef && e_81.canFetch && !e_81.subscribed) {
                          t_87.next = 2;
                          break;
                        }
                        return t_87.abrupt("return");
                      case 2:
                        return (
                          e_81.$trackButton("web_push", ""),
                          (o_83 = webpackRequire(24)),
                          (r_84 = o_83.storage),
                          (c_85 = e_81.$mtoast.loading({
                            duration: 0,
                          })),
                          (t_87.prev = 5),
                          (e_81.canFetch = !1),
                          (t_87.next = 9),
                          e_81.loadToken(e_81.messagingRef)
                        );
                      case 9:
                        ((l_86 = t_87.sent)
                          ? (r_84.set("webpush_subscribe", 1, 0, W_11), (e_81.subscribed = !0))
                          : e_81.$mtoast(e_81.$getI18nWord("subscribe_fail_toast")),
                          "production" !== siteConfigConstants.environment &&
                            console.log("webpush 令牌：    ".concat(l_86)),
                          (t_87.next = 18));
                        break;
                      case 14:
                        throw ((t_87.prev = 14), (t_87.t0 = t_87.catch(5)), (e_81.canFetch = !0), t_87.t0);
                      case 18:
                        return ((t_87.prev = 18), e_81.$mtoast.clear(c_85), t_87.finish(18));
                      case 21:
                      case "end":
                        return t_87.stop();
                    }
                },
                t_82,
                null,
                [[5, 14, 18, 21]],
              );
            }),
          )();
        },
        playPV: function () {
          var e_88 = this,
            t_89 = Date.now();
          (this.$store.commit("muteBgm", !0),
            this.$openDialog(videoDialogComponent.a, {
              transitionType: "scale",
              zIndex: 100,
              maskClose: !0,
              openedCb: function () {
                document.body.style.overflow = "hidden";
              },
              closeCb: function () {
                ((document.body.style.overflow = "auto"),
                  e_88.$store.commit("muteBgm", !1),
                  e_88.$trackButton("AppointPage_PV_stop", Math.round((Date.now() - t_89) / 1e3)));
              },
              bgOpacity: 0.8,
              dialogInfo: {
                iframeSrc: this.kvRes.youtobeUrl,
              },
            }),
            this.$trackButton("AppointPage_PV_start", ""));
        },
        onDownloadClick: function (e_90) {
          var t_91 = e_90.label.replace("download", "") || "",
            n_92 = {
              1: "PS",
              2: "xBox",
              3: "ios",
              4: "GP",
              5: "PC",
              6: "Steam",
              7: "Epic",
            }[t_91];
          (this.$trackEvent("Button", "Click", "download_icon", t_91),
            this.$ads.fa.trackCustomEvent("ClickButton", {
              label: n_92 || t_91,
            }),
            this.$ads.twitter.trackEvent("tw-rc4y1-rcl9c", {
              label: n_92 || t_91,
            }));
        },
        handleCloudDownload: function () {
          (this.$trackEvent("button", "click", "download", "cloud_pc"),
            this.$openDialog(Q_10, {
              transitionType: "scale",
              zIndex: 100,
              closeCb: function () {
                document.body.style.overflow = "auto";
              },
            }));
        },
      },
    },
    U_13 =
      (webpackRequire(1357),
      Object(C_6.a)(
        L_12,
        function () {
          var e_93 = this,
            t_94 = e_93._self._c;
          return t_94(
            "div",
            {
              staticClass: "home-kv",
            },
            [
              t_94(
                "div",
                {
                  staticClass: "home-kv-wrap",
                },
                [
                  t_94(
                    "div",
                    {
                      staticClass: "home-kv__bg",
                    },
                    [
                      t_94("img", {
                        attrs: {
                          src: e_93.kvRes.kv,
                          alt: "",
                        },
                      }),
                      e_93._v(" "),
                      t_94("p", {
                        staticClass: "pc_download_tip",
                        domProps: {
                          innerHTML: e_93._s(e_93.$getI18nWord("pc_download_tip")),
                        },
                      }),
                    ],
                  ),
                  e_93._v(" "),
                  t_94(
                    "div",
                    {
                      staticClass: "home-kv-aside",
                    },
                    [
                      t_94(
                        "transition",
                        {
                          attrs: {
                            name: "slide-left",
                          },
                        },
                        [
                          t_94("div", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: e_93.triggerAnim,
                                expression: "triggerAnim",
                              },
                            ],
                            staticClass: "home-kv__play",
                            on: {
                              click: function (t_95) {
                                return e_93.playPV();
                              },
                            },
                          }),
                        ],
                      ),
                      e_93._v(" "),
                      t_94(
                        "transition",
                        {
                          attrs: {
                            name: "slide-left",
                          },
                        },
                        [
                          t_94(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e_93.triggerAnim,
                                  expression: "triggerAnim",
                                },
                              ],
                              staticClass: "home-kv__slogan",
                            },
                            [
                              t_94("img", {
                                attrs: {
                                  src: webpackRequire(1195),
                                  alt: "",
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                    ],
                    1,
                  ),
                ],
              ),
              e_93._v(" "),
              t_94(
                "client-only",
                [
                  t_94(
                    "transition",
                    {
                      attrs: {
                        name: "zoom",
                      },
                    },
                    [
                      t_94(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e_93.triggerAnim,
                              expression: "triggerAnim",
                            },
                          ],
                          staticClass: "home-kv__download",
                          on: {
                            click: e_93.handleDownload,
                          },
                        },
                        [
                          t_94("img", {
                            attrs: {
                              src: e_93.$getI18nWord("home_download_icon"),
                              alt: "",
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                  e_93._v(" "),
                  t_94("img", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          e_93.$getI18nWord("pc_steam_download_icon") &&
                          e_93.$getI18nWord("pc_steam_download_link"),
                        expression:
                          "$getI18nWord('pc_steam_download_icon') && $getI18nWord('pc_steam_download_link')",
                      },
                    ],
                    staticClass: "steam-download",
                    class: {
                      "steam-download--no-webpush": !e_93.useWebpush,
                    },
                    attrs: {
                      src: e_93.$getI18nWord("pc_steam_download_icon"),
                      alt: "",
                    },
                    on: {
                      click: e_93.handleSteamDownload,
                    },
                  }),
                  e_93._v(" "),
                  t_94(
                    "div",
                    {
                      staticClass: "home-btn-container",
                      class: {
                        "home-btn-container__single": !e_93.useWebpush,
                      },
                    },
                    [
                      e_93.layerTag
                        ? t_94("img", {
                            staticClass: "layer-tag",
                            attrs: {
                              src: e_93.layerTag,
                            },
                          })
                        : e_93._e(),
                      e_93._v(" "),
                      t_94("sea-download-layout", {
                        class: {
                          "download-panel__cloud": !!e_93.cloudDownloadBtn,
                        },
                        attrs: {
                          "game-biz": "nap_global",
                          type: "fab",
                          lang: e_93.lang,
                          "use-online-config": !0,
                          environment: "development" === e_93.environment ? "test" : e_93.environment,
                          source: "262",
                        },
                        on: {
                          download: e_93.onDownloadClick,
                        },
                      }),
                      e_93._v(" "),
                      e_93.cloudDownloadBtn
                        ? t_94("div", {
                            staticClass: "cloud-download-btn",
                            style: {
                              backgroundImage: "url(".concat(e_93.cloudDownloadBtn, ")"),
                            },
                            on: {
                              click: e_93.handleCloudDownload,
                            },
                          })
                        : e_93._e(),
                      e_93._v(" "),
                      e_93.useWebpush
                        ? t_94(
                            "div",
                            {
                              staticClass: "web-push-subscribe",
                            },
                            [
                              t_94("hover-btn", {
                                staticClass: "subscribe-btn",
                                attrs: {
                                  img: webpackRequire(1349),
                                  "img-hover": webpackRequire(1350),
                                  "img-disable": webpackRequire(1351),
                                  "need-disable": !0,
                                  "is-disable": e_93.subscribed,
                                },
                                on: {
                                  click: e_93.subscribeWebpush,
                                },
                              }),
                              e_93._v(" "),
                              t_94("div", {
                                staticClass: "subscribe-tip",
                                domProps: {
                                  innerHTML: e_93._s(
                                    e_93.$getI18nWord(
                                      e_93.subscribed ? "subscribe_tip_disabled" : "subscribe_tip",
                                    ),
                                  ),
                                },
                              }),
                            ],
                            1,
                          )
                        : e_93._e(),
                    ],
                    1,
                  ),
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
      ).exports),
    V_14 = (webpackRequire(204), webpackRequire(1120), webpackRequire(1126));
  function F_15(object, e_96) {
    var t_97 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var n_98 = Object.getOwnPropertySymbols(object);
      (e_96 &&
        (n_98 = n_98.filter(function (e_99) {
          return Object.getOwnPropertyDescriptor(object, e_99).enumerable;
        })),
        t_97.push.apply(t_97, n_98));
    }
    return t_97;
  }
  function J_16(e_100) {
    for (var i_101 = 1; i_101 < arguments.length; i_101++) {
      var source = null != arguments[i_101] ? arguments[i_101] : {};
      i_101 % 2
        ? F_15(Object(source), !0).forEach(function (t_102) {
            Object(r_2.a)(e_100, t_102, source[t_102]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e_100, Object.getOwnPropertyDescriptors(source))
          : F_15(Object(source)).forEach(function (t_103) {
              Object.defineProperty(e_100, t_103, Object.getOwnPropertyDescriptor(source, t_103));
            });
    }
    return e_100;
  }
  var D_17 = {
      components: {
        pageTab: V_14.a,
      },
      props: {
        characterRes: {
          type: Object,
          default: function () {},
        },
      },
      data: function () {
        return {
          showTitle: !0,
          thumbOption: {
            slidesPerView: "auto",
            centerInsufficientSlides: !0,
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            allowTouchMove: !1,
            shortSwipes: !1,
          },
          swiperOption: {
            watchSlidesProgress: !0,
            slidesPerView: "auto",
            parallax: !0,
            effect: "fade",
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            allowTouchMove: !1,
          },
          activeIndex: 0,
          characterInfo: null,
          oldName: "",
          curName: "",
          canSlidePrev: !1,
          canSlideNext: !0,
        };
      },
      computed: {
        charaList: function () {
          return this.characterRes.list;
        },
        characterCamps: function () {
          return this.$store.getters.characterCamps || [];
        },
      },
      created: function () {
        var e_104 = this;
        return Object(vendorBundle2.a)(
          regeneratorRuntime.mark(function t_105() {
            var n_106;
            return regeneratorRuntime.wrap(function (t_107) {
              for (;;)
                switch ((t_107.prev = t_107.next)) {
                  case 0:
                    ((n_106 = Object(vendorBundle.a)(e_104.charaList, 1)),
                      (e_104.characterInfo = n_106[0]),
                      (e_104.curName = e_104.repeatName(e_104.characterInfo.nameEN.split(" ")[0])),
                      (e_104.characterCamps && e_104.characterCamps.length) || e_104.getCharacterCamps());
                  case 4:
                  case "end":
                    return t_107.stop();
                }
            }, t_105);
          }),
        )();
      },
      methods: {
        repeatName: function (e_108) {
          return e_108.length <= 6 ? "".concat(e_108, " ").concat(e_108) : e_108;
        },
        getCharacterCamps: function () {
          var e_109 = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function t_110() {
              var n_111;
              return regeneratorRuntime.wrap(function (t_112) {
                for (;;)
                  switch ((t_112.prev = t_112.next)) {
                    case 0:
                      return (
                        (t_112.next = 2),
                        characterAndCampCMSAPI.a.getCampList({
                          data: {
                            sLangKey: e_109.$store.state.lang,
                          },
                        })
                      );
                    case 2:
                      ((n_111 = t_112.sent), e_109.$store.commit("setCharacterCamps", n_111));
                    case 4:
                    case "end":
                      return t_112.stop();
                  }
              }, t_110);
            }),
          )();
        },
        campInfo: function (e_113) {
          return this.characterCamps.find(function (t_114) {
            return Number(t_114.channelId) === Number(e_113);
          });
        },
        toggleRole: function (e_115) {
          var t_116 = this;
          this.activeIndex !== e_115 &&
            ((this.oldInfo = this.charaList[this.activeIndex]),
            (this.activeIndex = e_115),
            (this.characterInfo = this.charaList[e_115]),
            (this.oldName = this.repeatName(this.oldInfo.nameEN.split(" ")[0])),
            (this.curName = this.repeatName(this.characterInfo.nameEN.split(" ")[0])),
            this.$refs.characterSwiper.swiper.slideTo(e_115),
            this.$nextTick(function () {
              var e_117 = parseFloat(document.documentElement.style.fontSize),
                n_118 = document.querySelector(".old-en-name").clientWidth / e_117;
              (t_116.$mtoast.loading({
                showContent: !1,
                duration: 100,
              }),
                t_116.$gsap.fromTo(
                  ".en-name-container",
                  {
                    x: "0",
                  },
                  {
                    x: "-".concat(n_118 + 1, "rem"),
                    duration: 0.5,
                    onComplete: function () {
                      ((t_116.oldName = ""),
                        t_116.$gsap.set(".en-name-container", {
                          x: "0",
                        }));
                    },
                  },
                ));
            }));
        },
        handleCharaNavClick: function (e_119, t_120) {
          (this.toggleRole(e_119), this.$trackButton("character_icon", "".concat(t_120.iInfoId)));
        },
        handlePrev: function () {
          var e_121 = this.$refs.pageSwiper.swiper.activeIndex - 3;
          ((this.canSlidePrev = e_121 - 3 >= 0),
            (this.canSlideNext = e_121 + 3 <= this.charaList.length - 1),
            this.$refs.pageSwiper.swiper.slideTo(e_121),
            this.$trackButton("next_character", ""));
        },
        handleNext: function () {
          var e_122 = this.$refs.pageSwiper.swiper.activeIndex + 3;
          ((this.canSlidePrev = e_122 - 3 >= 0),
            (this.canSlideNext = e_122 + 3 <= this.charaList.length - 1),
            this.$refs.pageSwiper.swiper.slideTo(e_122),
            this.$trackButton("next_character", ""));
        },
        handleMoreClick: function () {
          (this.$trackButton("character_more", ""),
            this.$router.push({
              name: "lang-character",
              query: J_16(
                J_16({}, this.$route.query),
                {},
                {
                  id: this.characterInfo.iInfoId,
                },
              ),
            }));
        },
      },
    },
    M_18 =
      (webpackRequire(1362),
      Object(C_6.a)(
        D_17,
        function () {
          var e_123 = this,
            t_124 = e_123._self._c;
          return t_124(
            "div",
            {
              staticClass: "home-character",
            },
            [
              t_124("pageTab", {
                attrs: {
                  "nav-num": 2,
                  size: "lg",
                },
              }),
              e_123._v(" "),
              e_123.characterInfo
                ? t_124(
                    "div",
                    {
                      staticClass: "home-character__anim font-num",
                    },
                    [
                      t_124(
                        "div",
                        {
                          staticClass: "en-name-container",
                        },
                        [
                          e_123.oldName
                            ? t_124(
                                "div",
                                {
                                  staticClass: "en-name old-en-name",
                                },
                                [e_123._v(e_123._s(e_123.oldName))],
                              )
                            : e_123._e(),
                          e_123._v(" "),
                          t_124(
                            "div",
                            {
                              staticClass: "en-name",
                            },
                            [e_123._v(e_123._s(e_123.curName))],
                          ),
                        ],
                      ),
                    ],
                  )
                : e_123._e(),
              e_123._v(" "),
              t_124(
                "div",
                {
                  staticClass: "home-character__main",
                },
                [
                  t_124("div", {
                    staticClass: "home-character__main-panel",
                  }),
                  e_123._v(" "),
                  t_124(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e_123.charaList.length > 1,
                          expression: "charaList.length > 1",
                        },
                      ],
                      staticClass: "home-character__main-nav",
                    },
                    [
                      t_124(
                        "client-only",
                        [
                          t_124(
                            "swiper",
                            {
                              ref: "pageSwiper",
                              staticClass: "home-character__nav",
                              attrs: {
                                options: e_123.thumbOption,
                              },
                            },
                            e_123._l(e_123.charaList, function (n_125, o_126) {
                              return t_124(
                                "swiper-slide",
                                {
                                  key: o_126,
                                  staticClass: "home-character__nav-item",
                                  class: {
                                    "swiper-slide-active": e_123.activeIndex === o_126,
                                    "swiper-slide-thumb-active": e_123.activeIndex === o_126,
                                  },
                                  nativeOn: {
                                    click: function (t_127) {
                                      return e_123.handleCharaNavClick(o_126, n_125);
                                    },
                                  },
                                },
                                [
                                  t_124("img", {
                                    attrs: {
                                      src: n_125.nav,
                                      alt: "",
                                    },
                                  }),
                                  e_123._v(" "),
                                  t_124("div", {
                                    staticClass: "home-character__nav-mask",
                                  }),
                                ],
                              );
                            }),
                            1,
                          ),
                          e_123._v(" "),
                          t_124(
                            "div",
                            {
                              staticClass: "swiper-navigation",
                            },
                            [
                              t_124("div", {
                                staticClass: "swiper-button-prev",
                                class: {
                                  "swiper-button-disabled": !e_123.canSlidePrev,
                                },
                                attrs: {
                                  slot: "button-prev",
                                },
                                on: {
                                  click: e_123.handlePrev,
                                },
                                slot: "button-prev",
                              }),
                              e_123._v(" "),
                              t_124("div", {
                                staticClass: "swiper-button-next",
                                class: {
                                  "swiper-button-disabled": !e_123.canSlideNext,
                                },
                                attrs: {
                                  slot: "button-next",
                                },
                                on: {
                                  click: e_123.handleNext,
                                },
                                slot: "button-next",
                              }),
                            ],
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  e_123._v(" "),
                  t_124(
                    "div",
                    {
                      staticClass: "home-character__main-swiper",
                    },
                    [
                      e_123.charaList.length
                        ? t_124(
                            "swiper",
                            {
                              ref: "characterSwiper",
                              staticClass: "home-character__list",
                              attrs: {
                                options: e_123.swiperOption,
                              },
                            },
                            e_123._l(e_123.charaList, function (n_128) {
                              return t_124(
                                "swiper-slide",
                                {
                                  key: n_128.id,
                                  staticClass: "home-character__list-item",
                                },
                                [
                                  t_124(
                                    "div",
                                    {
                                      staticClass: "home-character__role",
                                    },
                                    [
                                      t_124("img", {
                                        attrs: {
                                          src: n_128.cover,
                                          alt: "",
                                        },
                                      }),
                                    ],
                                  ),
                                  e_123._v(" "),
                                  t_124(
                                    "div",
                                    {
                                      staticClass: "home-character__shade",
                                    },
                                    [
                                      e_123.campInfo(n_128.sChanId[0])
                                        ? t_124("img", {
                                            attrs: {
                                              src: e_123.campInfo(n_128.sChanId[0]).shade,
                                              alt: "",
                                            },
                                          })
                                        : e_123._e(),
                                    ],
                                  ),
                                  e_123._v(" "),
                                  t_124(
                                    "div",
                                    {
                                      staticClass: "home-character__info",
                                    },
                                    [
                                      e_123.campInfo(n_128.sChanId[0])
                                        ? t_124(
                                            "div",
                                            {
                                              staticClass: "home-character__camp",
                                            },
                                            [
                                              t_124("span", {
                                                domProps: {
                                                  innerHTML: e_123._s(e_123.campInfo(n_128.sChanId[0]).name),
                                                },
                                              }),
                                            ],
                                          )
                                        : e_123._e(),
                                      e_123._v(" "),
                                      t_124(
                                        "div",
                                        {
                                          staticClass: "home-character__name",
                                        },
                                        [
                                          t_124("span", {
                                            domProps: {
                                              innerHTML: e_123._s(n_128.nameHome || n_128.name),
                                            },
                                          }),
                                        ],
                                      ),
                                    ],
                                  ),
                                ],
                              );
                            }),
                            1,
                          )
                        : t_124(
                            "div",
                            {
                              staticClass: "home-character__list-empty",
                            },
                            [
                              t_124("img", {
                                attrs: {
                                  src: webpackRequire(1361),
                                  alt: "",
                                },
                              }),
                            ],
                          ),
                    ],
                    1,
                  ),
                  e_123._v(" "),
                  e_123.charaList.length
                    ? t_124(
                        "div",
                        {
                          staticClass: "more-btn",
                          on: {
                            click: e_123.handleMoreClick,
                          },
                        },
                        [e_123._v(e_123._s(e_123.$getI18nWord("learnMore")))],
                      )
                    : e_123._e(),
                ],
              ),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "c6f7f9a8",
        null,
      ).exports),
    R_19 =
      (webpackRequire(119),
      {
        components: {
          pageTab: V_14.a,
        },
        props: {
          newsRes: {
            type: Object,
            default: function () {},
          },
        },
        data: function () {
          return {
            swiperOption: {
              watchSlidesProgress: !0,
              slidesPerView: "auto",
              loop: !0,
              observer: !0,
              observeParents: !0,
              observeSlideChildren: !0,
              pagination: {
                el: ".swiper-pagination",
                clickable: !0,
                renderBullet: function (e_129, t_130) {
                  return '<span class="'
                    .concat(t_130, " swiper-pagination-index-")
                    .concat(e_129 + 1, '"></span>');
                },
              },
            },
            activeIndex: 0,
            activeNews: null,
            isWordsLoop: !1,
          };
        },
        computed: {
          newsList: function () {
            return this.newsRes.list;
          },
        },
        created: function () {
          var e_131 = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function t_132() {
              var n_133;
              return regeneratorRuntime.wrap(function (t_134) {
                for (;;)
                  switch ((t_134.prev = t_134.next)) {
                    case 0:
                      ((n_133 = Object(vendorBundle.a)(e_131.newsList, 1)),
                        (e_131.activeNews = n_133[0]),
                        (e_131.isWordsLoop = !0));
                    case 3:
                    case "end":
                      return t_134.stop();
                  }
              }, t_132);
            }),
          )();
        },
        methods: {
          handleSlideChange: function () {},
          handleTransitionStart: function () {
            var e_135 = this.$refs.mySwiper.swiper.realIndex;
            this.activeIndex !== e_135 && (this.isWordsLoop = !1);
          },
          handleTransitionEnd: function () {
            var e_136 = this.$refs.mySwiper.swiper.realIndex;
            this.activeIndex !== e_136 &&
              ((this.activeIndex = e_136), (this.activeNews = this.newsList[e_136]), (this.isWordsLoop = !0));
          },
          handlePaginationClick: function (e_137) {
            var t_138 = e_137.target || e_137.srcElement;
            if (t_138.className.indexOf("swiper-pagination-index") > -1) {
              var n_139 = t_138.className
                .split(" ")
                .find(function (e_140) {
                  return e_140.includes("swiper-pagination-index-");
                })
                .split("-")
                .pop();
              this.$trackButton("news_point", "".concat(n_139));
            }
          },
          handlePicClick: function (e_141) {
            this.$trackButton("news_pics", "".concat(e_141.iInfoId));
          },
          handleMoreClick: function () {
            this.$trackButton("news_more", "");
          },
        },
      }),
    Y_20 = R_19,
    T_21 =
      (webpackRequire(1367),
      Object(C_6.a)(
        Y_20,
        function () {
          var e_142 = this,
            t_143 = e_142._self._c;
          return t_143(
            "div",
            {
              staticClass: "home-news",
            },
            [
              t_143(
                "div",
                {
                  staticClass: "home-news-wrap",
                },
                [
                  t_143("pageTab", {
                    attrs: {
                      "nav-num": 4,
                      size: "lg",
                    },
                  }),
                  e_142._v(" "),
                  t_143("img", {
                    staticClass: "home-news__page-bg",
                    attrs: {
                      src: webpackRequire(1366),
                      alt: "news-page-bg",
                    },
                  }),
                  e_142._v(" "),
                  t_143(
                    "div",
                    {
                      staticClass: "home-news-container",
                    },
                    [
                      t_143(
                        "div",
                        {
                          staticClass: "home-news__banner",
                        },
                        [
                          t_143(
                            "client-only",
                            [
                              e_142.newsList && e_142.newsList.length
                                ? t_143(
                                    "swiper",
                                    {
                                      ref: "mySwiper",
                                      staticClass: "home-news__banner-list",
                                      attrs: {
                                        options: e_142.swiperOption,
                                      },
                                      on: {
                                        slideChange: e_142.handleSlideChange,
                                        transitionStart: e_142.handleTransitionStart,
                                        transitionEnd: e_142.handleTransitionEnd,
                                      },
                                    },
                                    e_142._l(e_142.newsList, function (n_144) {
                                      return t_143(
                                        "swiper-slide",
                                        {
                                          key: n_144.id,
                                          staticClass: "home-news__banner-item",
                                        },
                                        [
                                          t_143(
                                            "nuxt-link",
                                            {
                                              staticClass: "home-news__banner-img",
                                              attrs: {
                                                to: {
                                                  name: "lang-news-id",
                                                  params: {
                                                    id: n_144.iInfoId,
                                                  },
                                                  query: e_142.$route.query,
                                                },
                                              },
                                              nativeOn: {
                                                click: function (t_145) {
                                                  return e_142.handlePicClick(n_144);
                                                },
                                              },
                                            },
                                            [
                                              t_143("img", {
                                                attrs: {
                                                  src: n_144.banner,
                                                  alt: "news-banner",
                                                },
                                              }),
                                            ],
                                          ),
                                        ],
                                        1,
                                      );
                                    }),
                                    1,
                                  )
                                : e_142._e(),
                            ],
                            1,
                          ),
                          e_142._v(" "),
                          t_143(
                            "transition",
                            {
                              attrs: {
                                name: "slide-bottom",
                              },
                            },
                            [
                              e_142.activeNews && e_142.activeNews.summary
                                ? t_143(
                                    "div",
                                    {
                                      staticClass: "home-news__summary",
                                    },
                                    [
                                      t_143(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: e_142.isWordsLoop,
                                              expression: "isWordsLoop",
                                            },
                                          ],
                                          staticClass: "home-news__summary-scroll",
                                        },
                                        [e_142._v(e_142._s(e_142.activeNews.summary))],
                                      ),
                                    ],
                                  )
                                : e_142._e(),
                            ],
                          ),
                        ],
                        1,
                      ),
                      e_142._v(" "),
                      e_142.activeNews
                        ? t_143(
                            "div",
                            {
                              staticClass: "home-news__info",
                            },
                            [
                              t_143(
                                "nuxt-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "lang-news-id",
                                      params: {
                                        id: e_142.activeNews.iInfoId,
                                      },
                                      query: e_142.$route.query,
                                    },
                                  },
                                },
                                [
                                  t_143(
                                    "div",
                                    {
                                      staticClass: "date",
                                    },
                                    [e_142._v(e_142._s(e_142.activeNews.dateFormat))],
                                  ),
                                  e_142._v(" "),
                                  t_143(
                                    "div",
                                    {
                                      staticClass: "title ellipsis",
                                    },
                                    [e_142._v(e_142._s(e_142.activeNews.title))],
                                  ),
                                ],
                              ),
                            ],
                            1,
                          )
                        : e_142._e(),
                      e_142._v(" "),
                      e_142.newsList.length > 1
                        ? t_143(
                            "div",
                            {
                              staticClass: "home-news__pagination",
                            },
                            [
                              t_143("div", {
                                staticClass: "swiper-pagination",
                                attrs: {
                                  slot: "pagination",
                                },
                                on: {
                                  click: function (t_146) {
                                    return e_142.handlePaginationClick(t_146);
                                  },
                                },
                                slot: "pagination",
                              }),
                            ],
                          )
                        : e_142._e(),
                      e_142._v(" "),
                      t_143(
                        "nuxt-link",
                        {
                          staticClass: "more",
                          attrs: {
                            to: {
                              name: "lang-news",
                            },
                          },
                          nativeOn: {
                            click: function (t_147) {
                              return e_142.handleMoreClick.apply(null, arguments);
                            },
                          },
                        },
                        [
                          t_143(
                            "div",
                            {
                              staticClass: "more-btn",
                            },
                            [e_142._v(e_142._s(e_142.$getI18nWord("learnMore")))],
                          ),
                        ],
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
          );
        },
        [],
        !1,
        null,
        "68b07d09",
        null,
      )),
    G_22 = T_21.exports,
    O_23 = {
      components: {
        pageTab: V_14.a,
      },
      props: {
        featureRes: {
          type: Object,
          default: function () {},
        },
      },
      data: function () {
        return {
          swiperOption: {
            slidesPerView: "auto",
            loop: !0,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            allowTouchMove: !1,
            effect: "fade",
            fadeEffect: {
              crossFade: !0,
            },
            navigation: {
              nextEl: ".feat-swiper-button-next",
              prevEl: ".feat-swiper-button-prev",
            },
          },
          activeFeature: null,
        };
      },
      computed: {
        featureList: function () {
          return this.featureRes.list;
        },
      },
      created: function () {
        var e_148 = this;
        return Object(vendorBundle2.a)(
          regeneratorRuntime.mark(function t_149() {
            var n_150;
            return regeneratorRuntime.wrap(function (t_151) {
              for (;;)
                switch ((t_151.prev = t_151.next)) {
                  case 0:
                    ((n_150 = Object(vendorBundle.a)(e_148.featureList, 1)),
                      (e_148.activeFeature = n_150[0]));
                  case 2:
                  case "end":
                    return t_151.stop();
                }
            }, t_149);
          }),
        )();
      },
      methods: {
        handleSlideChange: function () {
          var e_152 = this.$refs.homeFeatureSwiper.swiper.realIndex;
          ((this.activeFeature = this.featureList[e_152]),
            this.$trackButton("features_pics", "".concat(this.activeFeature.iInfoId)));
        },
        handleNavigatorUpload: function () {
          this.$trackButton("features_next", "");
        },
      },
    },
    K_24 =
      (webpackRequire(1369),
      Object(C_6.a)(
        O_23,
        function () {
          var e_153 = this,
            t_154 = e_153._self._c;
          return t_154(
            "div",
            {
              staticClass: "home-feature",
            },
            [
              t_154("pageTab", {
                attrs: {
                  "nav-num": 6,
                  size: "lg",
                },
              }),
              e_153._v(" "),
              t_154(
                "div",
                {
                  staticClass: "home-feature__swiper",
                },
                [
                  t_154(
                    "swiper",
                    {
                      ref: "homeFeatureSwiper",
                      staticClass: "home-feature__list",
                      attrs: {
                        options: e_153.swiperOption,
                      },
                      on: {
                        slideChange: e_153.handleSlideChange,
                      },
                    },
                    e_153._l(e_153.featureList, function (e_155) {
                      return t_154(
                        "swiper-slide",
                        {
                          key: e_155.id,
                          staticClass: "home-feature__list-item",
                        },
                        [
                          t_154(
                            "div",
                            {
                              staticClass: "home-feature__banner",
                            },
                            [
                              t_154("img", {
                                attrs: {
                                  src: e_155.banner,
                                  alt: "",
                                },
                              }),
                            ],
                          ),
                        ],
                      );
                    }),
                    1,
                  ),
                  e_153._v(" "),
                  t_154(
                    "div",
                    {
                      staticClass: "swiper-navigation",
                    },
                    [
                      t_154("div", {
                        staticClass: "swiper-button-prev feat-swiper-button-prev",
                        attrs: {
                          slot: "button-prev",
                        },
                        slot: "button-prev",
                      }),
                      e_153._v(" "),
                      t_154("div", {
                        staticClass: "swiper-button-next feat-swiper-button-next",
                        attrs: {
                          slot: "button-next",
                        },
                        slot: "button-next",
                      }),
                    ],
                  ),
                  e_153._v(" "),
                  e_153.activeFeature
                    ? t_154(
                        "div",
                        {
                          staticClass: "home-feature__info",
                        },
                        [
                          t_154("div", {
                            staticClass: "home-feature__info-bar",
                          }),
                          e_153._v(" "),
                          t_154("div", {
                            staticClass: "home-feature__info-title ellipsis",
                            domProps: {
                              innerHTML: e_153._s(e_153.activeFeature.title),
                            },
                          }),
                          e_153._v(" "),
                          t_154("div", {
                            staticClass: "home-feature__info-summary ellipsis",
                            domProps: {
                              innerHTML: e_153._s(e_153.activeFeature.summary),
                            },
                          }),
                        ],
                      )
                    : e_153._e(),
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
        "26432ee0",
        null,
      ).exports),
    N_25 = {
      components: {
        pageTab: V_14.a,
      },
      props: {
        worldRes: {
          type: Object,
          default: function () {},
        },
      },
      data: function () {
        return {
          swiperOption: {
            slidesPerView: "auto",
            loop: !0,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          },
        };
      },
      computed: {
        worldList: function () {
          return this.worldRes.list;
        },
        swiper: function () {
          return this.$refs.homeWorldSwiper.swiper;
        },
        conceptUrl: function () {
          return "".concat(this.$getI18nWord("conceptLink"));
        },
      },
      methods: {
        toggleTv: function () {
          this.$trackButton("file_tv", "");
        },
        handlePicClick: function (e_156) {
          this.$trackButton("file_pics", "".concat(e_156.iInfoId));
        },
        handleNavigatorUpload: function () {
          this.$trackButton("file_next", "");
        },
      },
    },
    X_26 = N_25,
    P_27 =
      (webpackRequire(1373),
      Object(C_6.a)(
        X_26,
        function () {
          var e_157 = this,
            t_158 = e_157._self._c;
          return t_158(
            "div",
            {
              staticClass: "home-world",
            },
            [
              t_158(
                "div",
                {
                  staticClass: "home-world-wrap",
                },
                [
                  t_158("pageTab", {
                    attrs: {
                      "nav-num": 5,
                      size: "lg",
                    },
                  }),
                  e_157._v(" "),
                  t_158(
                    "div",
                    {
                      staticClass: "home-world__banner",
                    },
                    [
                      t_158(
                        "client-only",
                        [
                          e_157.worldList && e_157.worldList.length
                            ? t_158(
                                "swiper",
                                {
                                  ref: "homeWorldSwiper",
                                  staticClass: "home-world__banner-list",
                                  class: {
                                    "swiper-no-swiping": e_157.worldList.length <= 1,
                                  },
                                  attrs: {
                                    options: e_157.swiperOption,
                                  },
                                },
                                [
                                  e_157._l(e_157.worldList, function (n_159) {
                                    return t_158(
                                      "swiper-slide",
                                      {
                                        key: n_159.id,
                                        staticClass: "home-world__banner-item",
                                      },
                                      [
                                        t_158(
                                          "nuxt-link",
                                          {
                                            staticClass: "home-world__banner-img",
                                            attrs: {
                                              to: {
                                                name: "lang-world",
                                                params: {
                                                  worldId: n_159.iInfoId,
                                                },
                                              },
                                            },
                                            nativeOn: {
                                              click: function (t_160) {
                                                return e_157.handlePicClick(n_159);
                                              },
                                            },
                                          },
                                          [
                                            t_158("img", {
                                              attrs: {
                                                src: n_159.homeBanner,
                                                alt: "world-banner",
                                              },
                                            }),
                                          ],
                                        ),
                                      ],
                                      1,
                                    );
                                  }),
                                  e_157._v(" "),
                                  t_158("div", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e_157.worldList.length > 1,
                                        expression: " worldList.length > 1",
                                      },
                                    ],
                                    staticClass: "swiper-button-prev",
                                    attrs: {
                                      slot: "button-prev",
                                    },
                                    on: {
                                      click: e_157.handleNavigatorUpload,
                                    },
                                    slot: "button-prev",
                                  }),
                                  e_157._v(" "),
                                  t_158("div", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e_157.worldList.length > 1,
                                        expression: "worldList.length > 1",
                                      },
                                    ],
                                    staticClass: "swiper-button-next",
                                    attrs: {
                                      slot: "button-next",
                                    },
                                    on: {
                                      click: e_157.handleNavigatorUpload,
                                    },
                                    slot: "button-next",
                                  }),
                                ],
                                2,
                              )
                            : t_158(
                                "div",
                                {
                                  staticClass: "home-world__banner-empty",
                                },
                                [
                                  t_158("img", {
                                    attrs: {
                                      src: webpackRequire(1202),
                                      alt: "",
                                    },
                                  }),
                                ],
                              ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              e_157._v(" "),
              t_158("client-only", [
                t_158(
                  "div",
                  {
                    staticClass: "section__concept",
                  },
                  [
                    t_158("div", {
                      staticClass: "section__concept-bg",
                    }),
                    e_157._v(" "),
                    t_158(
                      "a",
                      {
                        attrs: {
                          href: e_157.conceptUrl,
                          target: "_blank",
                        },
                      },
                      [
                        t_158(
                          "div",
                          {
                            staticClass: "section__concept-title",
                          },
                          [
                            t_158(
                              "div",
                              {
                                staticClass: "section__concept-title-content",
                              },
                              [
                                t_158("div", {
                                  staticClass: "section__concept-title-label",
                                  domProps: {
                                    innerHTML: e_157._s(e_157.$getI18nWord("conceptTitle")),
                                  },
                                }),
                                e_157._v(" "),
                                t_158(
                                  "div",
                                  {
                                    staticClass: "section__concept-title-sub",
                                  },
                                  [e_157._v(e_157._s(e_157.$getI18nWord("conceptSubtitle")))],
                                ),
                              ],
                            ),
                          ],
                        ),
                        e_157._v(" "),
                        t_158("div", {
                          staticClass: "section__concept-icon",
                        }),
                        e_157._v(" "),
                        t_158(
                          "div",
                          {
                            staticClass: "section__concept-video",
                            on: {
                              click: e_157.toggleTv,
                            },
                          },
                          [
                            t_158(
                              "div",
                              {
                                staticClass: "section__concept-video-mp4",
                              },
                              [
                                t_158("img", {
                                  attrs: {
                                    src: e_157.$getI18nWord("conceptVideo"),
                                    alt: "",
                                  },
                                }),
                              ],
                            ),
                            e_157._v(" "),
                            t_158("div", {
                              staticClass: "section__concept-video-tv",
                            }),
                            e_157._v(" "),
                            t_158("div", {
                              staticClass: "section__concept-video-play",
                            }),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
              ]),
            ],
            1,
          );
        },
        [],
        !1,
        null,
        "53daaf10",
        null,
      ).exports),
    module1378 = webpackRequire(1378),
    module1378Default = webpackRequire.n(module1378),
    lodashDebounce = webpackRequire(1224),
    lodashDebounceDefault = webpackRequire.n(lodashDebounce),
    H_28 = {
      components: {
        pageTab: V_14.a,
      },
      props: {
        videoRes: {
          type: Object,
          default: function () {
            return {};
          },
        },
      },
      data: function () {
        return {
          swiperOption: {
            slidesPerView: 1,
            observer: !0,
            observeParents: !0,
            observeSlideChildren: !0,
            allowTouchMove: !1,
            effect: "fade",
            fadeEffect: {
              crossFade: !0,
            },
          },
          activeIndex: 0,
          navTx: 0,
          navStep: 0,
          navContentWidth: 0,
        };
      },
      computed: {
        videoList: function () {
          return (this.videoRes && this.videoRes.list) || [];
        },
        canSlidePrev: function () {
          return this.activeIndex > 0;
        },
        canSlideNext: function () {
          return this.activeIndex < this.videoList.length - 1;
        },
        currentVideo: function () {
          return this.videoList[this.activeIndex] || {};
        },
        videoCates: function () {
          return this.$store.getters.videoCates || [];
        },
        currentVideoCateName: function () {
          var e_161 = this.currentVideo.sChanId && this.currentVideo.sChanId[0];
          return videoCMSAPI.a.getCateDisplayName(
            e_161,
            this.videoCates,
            this.$store.getters.videoMainChanName,
          );
        },
      },
      watch: {
        videoList: function (e_162) {
          var t_163 = this;
          (this.activeIndex > e_162.length - 1 && (this.activeIndex = 0),
            this.$nextTick(function () {
              (t_163.measureNav(), t_163.updateNavTranslate());
            }));
        },
      },
      created: function () {
        ((this.handlePrev = module1378Default()(this.handlePrev, 300, {
          leading: !0,
          trailing: !1,
        })),
          (this.handleNext = module1378Default()(this.handleNext, 300, {
            leading: !0,
            trailing: !1,
          })));
      },
      mounted: function () {
        var e_164 = this;
        (this.$nextTick(function () {
          (e_164.measureNav(), e_164.updateNavTranslate());
        }),
          (this.handleResize = lodashDebounceDefault()(function () {
            (e_164.measureNav(), e_164.updateNavTranslate());
          }, 200)),
          window.addEventListener("resize", this.handleResize));
      },
      beforeDestroy: function () {
        this.handleResize && window.removeEventListener("resize", this.handleResize);
      },
      methods: {
        handleVideoNavClick: function (e_165) {
          this.goTo(e_165);
        },
        goTo: function (e_166) {
          var t_167 = this;
          e_166 < 0 ||
            e_166 > this.videoList.length - 1 ||
            (this.$refs.mainSwiper && this.$refs.mainSwiper.swiper.slideTo(e_166),
            (this.activeIndex = e_166),
            this.$nextTick(function () {
              return t_167.updateNavTranslate();
            }));
        },
        measureNav: function () {
          var track = this.$refs.navTrack;
          if (track) {
            var e_168 = track.children;
            if (!e_168 || !e_168.length) return ((this.navStep = 0), void (this.navContentWidth = 0));
            var t_169 = e_168[e_168.length > 1 ? 1 : 0];
            ((this.navStep =
              t_169.getBoundingClientRect().width + (parseFloat(getComputedStyle(t_169).marginRight) || 0)),
              (this.navContentWidth = track.scrollWidth));
          }
        },
        updateNavTranslate: function () {
          var e_170 = this.$refs.navWrap;
          if (e_170 && this.navStep) {
            var t_171 = Math.max(0, this.navContentWidth - e_170.clientWidth),
              n_172 = Math.min(this.activeIndex * this.navStep, t_171);
            this.navTx = -n_172;
          } else this.navTx = 0;
        },
        handlePrev: function () {
          (this.goTo(this.activeIndex - 1), this.$trackButton("next_video", ""));
        },
        handleNext: function () {
          (this.goTo(this.activeIndex + 1), this.$trackButton("next_video", ""));
        },
        handleMoreClick: function () {
          (this.$router.push({
            name: "lang-video",
            query: this.$route.query,
          }),
            this.$trackButton("video_more", ""));
        },
        openPlayer: function (video) {
          var e_173 = this,
            t_174 = this.getVideoDialogInfo(video);
          t_174 &&
            (this.$store.commit("muteBgm", !0),
            this.$openDialog(videoDialogComponent.a, {
              transitionType: "scale",
              zIndex: 100,
              maskClose: !0,
              bgOpacity: 0.8,
              closeCb: function () {
                e_173.$store.commit("muteBgm", !1);
              },
              dialogInfo: t_174,
            }),
            this.$trackButton("video_play", video.id));
        },
        getVideoDialogInfo: function (video) {
          return video
            ? video.youtubeUrl
              ? {
                  iframeSrc: video.youtubeUrl,
                }
              : video.videoUrl
                ? {
                    src: video.videoUrl,
                  }
                : null
            : null;
        },
      },
    },
    $_29 =
      (webpackRequire(1384),
      Object(C_6.a)(
        H_28,
        function () {
          var e_175 = this,
            t_176 = e_175._self._c;
          return t_176(
            "div",
            {
              staticClass: "home-video",
            },
            [
              t_176("pageTab", {
                attrs: {
                  "nav-num": 3,
                  direction: "right",
                },
              }),
              e_175._v(" "),
              t_176(
                "div",
                {
                  staticClass: "home-video__content",
                },
                [
                  t_176(
                    "swiper",
                    {
                      ref: "mainSwiper",
                      staticClass: "home-video__main",
                      attrs: {
                        options: e_175.swiperOption,
                      },
                    },
                    e_175._l(e_175.videoList, function (video) {
                      return t_176(
                        "swiper-slide",
                        {
                          key: video.id,
                          staticClass: "home-video__main-item",
                          nativeOn: {
                            click: function (t_177) {
                              return e_175.openPlayer(video);
                            },
                          },
                        },
                        [
                          t_176("img", {
                            staticClass: "home-video__cover",
                            attrs: {
                              src: video.cover,
                              alt: "",
                            },
                          }),
                        ],
                      );
                    }),
                    1,
                  ),
                  e_175._v(" "),
                  t_176(
                    "div",
                    {
                      staticClass: "home-video__action",
                    },
                    [
                      t_176("img", {
                        staticClass: "home-video__action-icon",
                        attrs: {
                          src: webpackRequire(1377),
                          alt: "",
                        },
                        on: {
                          click: function (t_178) {
                            return e_175.openPlayer(e_175.currentVideo);
                          },
                        },
                      }),
                      e_175._v(" "),
                      t_176(
                        "nuxt-link",
                        {
                          staticClass: "more",
                          attrs: {
                            to: {
                              name: "lang-video",
                              query: e_175.$route.query,
                            },
                          },
                          nativeOn: {
                            click: function (t_179) {
                              return e_175.handleMoreClick.apply(null, arguments);
                            },
                          },
                        },
                        [
                          t_176(
                            "div",
                            {
                              staticClass: "more-btn",
                            },
                            [e_175._v(e_175._s(e_175.$getI18nWord("learnMore")))],
                          ),
                        ],
                      ),
                    ],
                    1,
                  ),
                  e_175._v(" "),
                  t_176(
                    "div",
                    {
                      staticClass: "home-video__list",
                    },
                    [
                      t_176(
                        "div",
                        {
                          staticClass: "home-video__summary",
                          on: {
                            click: function (t_180) {
                              return e_175.openPlayer(e_175.currentVideo);
                            },
                          },
                        },
                        [
                          t_176(
                            "div",
                            {
                              staticClass: "home-video__summary-item",
                            },
                            [
                              e_175.currentVideoCateName
                                ? t_176(
                                    "span",
                                    {
                                      staticClass: "home-video__summary-category",
                                    },
                                    [
                                      e_175._v(
                                        "\n            " +
                                          e_175._s(e_175.currentVideoCateName) +
                                          "\n          ",
                                      ),
                                    ],
                                  )
                                : e_175._e(),
                              e_175._v(" "),
                              t_176(
                                "span",
                                {
                                  staticClass: "home-video__summary-date",
                                },
                                [e_175._v(e_175._s(e_175.currentVideo.dateFormat))],
                              ),
                            ],
                          ),
                          e_175._v(" "),
                          t_176(
                            "div",
                            {
                              staticClass: "home-video__summary-title",
                            },
                            [e_175._v("\n          " + e_175._s(e_175.currentVideo.title) + "\n        ")],
                          ),
                        ],
                      ),
                      e_175._v(" "),
                      t_176(
                        "div",
                        {
                          staticClass: "home-video__nav-container",
                        },
                        [
                          t_176(
                            "div",
                            {
                              ref: "navWrap",
                              staticClass: "home-video__nav",
                            },
                            [
                              t_176(
                                "div",
                                {
                                  ref: "navTrack",
                                  staticClass: "home-video__nav-track",
                                  style: {
                                    transform: "translateX(".concat(e_175.navTx, "px)"),
                                  },
                                },
                                e_175._l(e_175.videoList, function (video, n_181) {
                                  return t_176(
                                    "div",
                                    {
                                      key: video.id,
                                      staticClass: "home-video__nav-item",
                                      class: {
                                        "is-active": e_175.activeIndex === n_181,
                                      },
                                      on: {
                                        click: function (t_182) {
                                          return e_175.handleVideoNavClick(n_181);
                                        },
                                      },
                                    },
                                    [
                                      t_176("img", {
                                        attrs: {
                                          src: video.cover,
                                          alt: "",
                                        },
                                      }),
                                      e_175._v(" "),
                                      t_176("div", {
                                        staticClass: "home-video__nav-mask",
                                      }),
                                    ],
                                  );
                                }),
                                0,
                              ),
                            ],
                          ),
                          e_175._v(" "),
                          t_176(
                            "div",
                            {
                              staticClass: "swiper-navigation",
                            },
                            [
                              t_176("div", {
                                staticClass: "swiper-button-prev",
                                class: {
                                  "swiper-button-disabled": !e_175.canSlidePrev,
                                },
                                on: {
                                  click: e_175.handlePrev,
                                },
                              }),
                              e_175._v(" "),
                              t_176("div", {
                                staticClass: "swiper-button-next",
                                class: {
                                  "swiper-button-disabled": !e_175.canSlideNext,
                                },
                                on: {
                                  click: e_175.handleNext,
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                    ],
                  ),
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
        "95fb0980",
        null,
      ));
  function ee_30(object, e_183) {
    var t_184 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var n_185 = Object.getOwnPropertySymbols(object);
      (e_183 &&
        (n_185 = n_185.filter(function (e_186) {
          return Object.getOwnPropertyDescriptor(object, e_186).enumerable;
        })),
        t_184.push.apply(t_184, n_185));
    }
    return t_184;
  }
  function te_31(e_187) {
    for (var i_188 = 1; i_188 < arguments.length; i_188++) {
      var source = null != arguments[i_188] ? arguments[i_188] : {};
      i_188 % 2
        ? ee_30(Object(source), !0).forEach(function (t_189) {
            Object(r_2.a)(e_187, t_189, source[t_189]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e_187, Object.getOwnPropertyDescriptors(source))
          : ee_30(Object(source)).forEach(function (t_190) {
              Object.defineProperty(e_187, t_190, Object.getOwnPropertyDescriptor(source, t_190));
            });
    }
    return e_187;
  }
  var ae_32 = {
      name: "index",
      layout: "default",
      scrollToTop: !1,
      components: {
        sideBar: x_7,
        kv: U_13,
        newsSlider: G_22,
        charaSection: M_18,
        featureSection: K_24,
        worldSection: P_27,
        videoSection: $_29.exports,
      },
      data: function () {
        return {
          currentIndex: -1,
          activePageIndex: 0,
          scrollTop: 0,
          needUpdate: !1,
          isProgrammaticScroll: !1,
        };
      },
      computed: {
        isLoading: function () {
          return this.$store.state.isLoading;
        },
      },
      watch: {
        isLoading: function () {
          var e_191 = this;
          setTimeout(function () {
            e_191.registerTrigger();
          }, 400);
        },
        activePageIndex: {
          immediate: !0,
          handler: function (e_192) {
            this.$trackEvent("Page", "enter", "", e_192);
          },
        },
      },
      asyncData: function (e_193) {
        return Object(vendorBundle2.a)(
          regeneratorRuntime.mark(function t_194() {
            var n_195,
              o_196,
              r_197,
              l_198,
              f_199,
              w_200,
              C_201,
              x_202,
              E_203,
              k_204,
              I_205,
              S_206,
              y_207,
              Q_208,
              B_209,
              W_210,
              L_211,
              U_212,
              V_213,
              F_214,
              J_215,
              D_216;
            return regeneratorRuntime.wrap(function (t_217) {
              for (;;)
                switch ((t_217.prev = t_217.next)) {
                  case 0:
                    return (
                      (n_195 = e_193.store),
                      (o_196 = {
                        sLangKey: n_195.state.lang,
                      }),
                      (t_217.next = 4),
                      Promise.all([
                        d_3.a.getKV({
                          data: o_196,
                        }),
                        newsCMSAPI.a.getSliderNews({
                          data: o_196,
                        }),
                        characterAndCampCMSAPI.a.getAllCharacter({
                          data: o_196,
                        }),
                        d_3.a.getFeature({
                          data: o_196,
                        }),
                        worldCMSAPI.a.getWorldList({
                          data: o_196,
                        }),
                        videoCMSAPI.a.getHomeVideoList({
                          data: o_196,
                        }),
                        videoCMSAPI.a.getCates({
                          data: o_196,
                        }),
                      ])
                    );
                  case 4:
                    return (
                      (r_197 = t_217.sent),
                      (l_198 = Object(vendorBundle.a)(r_197, 7)),
                      (f_199 = l_198[0]),
                      (w_200 = void 0 === f_199 ? {} : f_199),
                      (C_201 = l_198[1]),
                      (x_202 = void 0 === C_201 ? {} : C_201),
                      (E_203 = l_198[2]),
                      (k_204 = void 0 === E_203 ? {} : E_203),
                      (I_205 = l_198[3]),
                      (S_206 = void 0 === I_205 ? {} : I_205),
                      (y_207 = l_198[4]),
                      (Q_208 = void 0 === y_207 ? {} : y_207),
                      (B_209 = l_198[5]),
                      (W_210 = void 0 === B_209 ? {} : B_209),
                      (L_211 = l_198[6]),
                      (U_212 = void 0 === L_211 ? {} : L_211),
                      (V_213 = videoCMSAPI.a.parseCatesFromRes(U_212)),
                      (F_214 = V_213.children),
                      n_195.commit("setVideoCates", F_214),
                      n_195.commit("setVideoMainChanName", U_212.mainChanName || ""),
                      (J_215 = x_202.list
                        .filter(function (e_218) {
                          return !e_218.sExt["news-self-path"];
                        })
                        .slice(0, 6)),
                      (D_216 = te_31(
                        te_31({}, x_202),
                        {},
                        {
                          list: J_215,
                        },
                      )),
                      t_217.abrupt("return", {
                        kvRes: w_200,
                        newsRes: D_216,
                        characterRes: k_204,
                        featureRes: S_206,
                        worldRes: Q_208,
                        videoRes: W_210,
                      })
                    );
                  case 26:
                  case "end":
                    return t_217.stop();
                }
            }, t_194);
          }),
        )();
      },
      mounted: function () {
        var e_219 = this;
        (this.$store.commit("setHomeSection", f_4.e[this.activePageIndex].link),
          this.isLoading || this.registerTrigger(),
          setTimeout(function () {
            ((e_219.needUpdate = !0), e_219.updateActiveIndexFromScroll());
          }, 100),
          "index" !== this.$store.state.routePage
            ? this.$gsap.to(window, {
                scrollTo: {
                  y: this.$store.state.homeScroll,
                  autoKill: !1,
                },
                duration: 0,
                ease: "Power2.easeOut",
              })
            : this.$gsap.to(window, {
                scrollTo: {
                  y: 0,
                  autoKill: !1,
                },
                duration: 0,
                ease: "Power2.easeOut",
              }),
          (this.scrollRafId = null),
          (this.onHomeScroll = function () {
            ((e_219.scrollTop = document.body.scrollTop || document.documentElement.scrollTop),
              e_219.scrollRafId ||
                (e_219.scrollRafId = requestAnimationFrame(function () {
                  ((e_219.scrollRafId = null), e_219.updateActiveIndexFromScroll());
                })));
          }),
          window.addEventListener("scroll", this.onHomeScroll, {
            passive: !0,
          }));
      },
      beforeDestroy: function () {
        ((this.activePageIndex = 0),
          (this.currentIndex = 0),
          this.$ScrollTrigger.getAll().forEach(function (e_220) {
            return e_220.disable();
          }),
          this.$store.commit("setHomeScroll", this.scrollTop),
          this.scrollRafId && cancelAnimationFrame(this.scrollRafId),
          window.removeEventListener("scroll", this.onHomeScroll));
      },
      methods: {
        getActiveSectionIndex: function (e_221) {
          var t_222 = this.$gsap.utils.toArray(".section");
          if (!t_222.length) return 0;
          for (
            var n_223 = e_221 + 0.5 * window.innerHeight, o_224 = t_222.length - 1, i_225 = o_224;
            i_225 >= 0;
            i_225--
          ) {
            var r_226 = t_222[i_225].offsetTop,
              c_227 = r_226 + t_222[i_225].offsetHeight;
            if (n_223 >= r_226 && n_223 < c_227) return i_225;
          }
          return n_223 >= t_222[o_224].offsetTop ? o_224 : 0;
        },
        setActivePageIndex: function (e_228) {
          this.activePageIndex !== e_228 &&
            ((this.activePageIndex = e_228), this.$store.commit("setHomeSection", f_4.e[e_228].link));
        },
        updateActiveIndexFromScroll: function () {
          if (this.needUpdate && !this.isProgrammaticScroll) {
            var e_229 = document.body.scrollTop || document.documentElement.scrollTop;
            this.setActivePageIndex(this.getActiveSectionIndex(e_229));
          }
        },
        slideTo: function (e_230) {
          var t_231 = this,
            n_232 = 0;
          if (e_230) {
            var o_233 = f_4.e[e_230].link;
            n_232 = document.querySelector(".section-".concat(o_233));
          }
          ((this.isProgrammaticScroll = !0),
            (this.activePageIndex = e_230),
            this.$store.commit("setHomeSection", f_4.e[e_230].link),
            this.$gsap.to(window, {
              scrollTo: {
                y: n_232,
                autoKill: !1,
              },
              duration: 0.65,
              ease: "Power2.easeOut",
              onComplete: function () {
                t_231.isProgrammaticScroll = !1;
                var e_234 = document.body.scrollTop || document.documentElement.scrollTop;
                t_231.setActivePageIndex(t_231.getActiveSectionIndex(e_234));
              },
            }));
        },
        registerTrigger: function () {
          var e_235 = this;
          this.$gsap.utils.toArray(".section").forEach(function (section, t_236) {
            var n_237 = e_235.$gsap.timeline({
              scrollTrigger: {
                trigger: section,
                id: "section".concat(t_236),
                toggleActions: "play none resume reset",
                start: 0 === t_236 ? "top top" : "top bottom-=120",
                end: function (e_238) {
                  return "section0" === e_238.vars.id ? "" : "-=40";
                },
                onUpdate: function (t_239) {
                  var n_240 = t_239.vars.id.replace("section", "");
                  if (f_4.f[n_240]) {
                    var progress = Math.min(1.3 * t_239.progress.toFixed(3), 1);
                    f_4.f[n_240].forEach(function (t_241) {
                      var n_242 = t_241.ele;
                      t_241.attr.forEach(function (t_243) {
                        var o_244 = t_243.name,
                          c_245 = t_243.start,
                          l_246 = t_243.end - c_245;
                        e_235.$gsap.set(n_242, Object(r_2.a)({}, o_244, c_245 + l_246 * progress));
                      });
                    });
                  }
                },
              },
              defaults: {
                ease: "power2.easeIn",
              },
            });
            (t_236 % 2
              ? n_237
                  .fromTo(
                    section.querySelector(".section-nav-label"),
                    {
                      xPercent: -140,
                      x: 0,
                    },
                    {
                      xPercent: 0,
                    },
                    0,
                  )
                  .fromTo(
                    section.querySelector(".section-nav-en"),
                    {
                      xPercent: -140,
                      x: 0,
                    },
                    {
                      xPercent: 0,
                    },
                    0.1,
                  )
                  .fromTo(
                    section.querySelector(".section-nav-num"),
                    {
                      xPercent: -140,
                      x: 0,
                    },
                    {
                      xPercent: 0,
                    },
                    0.18,
                  )
              : n_237
                  .fromTo(
                    section.querySelector(".section-nav-label"),
                    {
                      xPercent: 140,
                      x: 0,
                    },
                    {
                      xPercent: 0,
                    },
                    0,
                  )
                  .fromTo(
                    section.querySelector(".section-nav-en"),
                    {
                      xPercent: 140,
                      x: 0,
                    },
                    {
                      xPercent: 0,
                    },
                    0.1,
                  )
                  .fromTo(
                    section.querySelector(".section-nav-num"),
                    {
                      xPercent: 120,
                      x: 0,
                    },
                    {
                      xPercent: 0,
                    },
                    0.18,
                  ),
              1 === t_236 &&
                n_237
                  .fromTo(
                    section.querySelector(".home-character__anim .en-name"),
                    {
                      xPercent: 100,
                      x: 0,
                    },
                    {
                      xPercent: 0,
                    },
                    0.1,
                  )
                  .fromTo(
                    section.querySelector(".home-character__main-panel"),
                    {
                      xPercent: 100,
                      x: 0,
                    },
                    {
                      xPercent: 0,
                    },
                    0.1,
                  )
                  .fromTo(
                    section.querySelector(".home-character__list-empty"),
                    {
                      xPercent: 140,
                      x: 0,
                    },
                    {
                      xPercent: 0,
                    },
                    0.2,
                  )
                  .fromTo(
                    section.querySelectorAll(".home-character__role"),
                    {
                      xPercent: 140,
                      x: 0,
                    },
                    {
                      xPercent: 0,
                    },
                    0.2,
                  )
                  .fromTo(
                    section.querySelectorAll(".home-character__shade"),
                    {
                      xPercent: 120,
                      x: 0,
                    },
                    {
                      xPercent: 0,
                    },
                    0.4,
                  )
                  .fromTo(
                    section.querySelectorAll(".home-character__info"),
                    {
                      xPercent: 120,
                      x: 0,
                    },
                    {
                      xPercent: 0,
                      duration: 1,
                      ease: "Power1.easeInOut",
                    },
                    0.3,
                  )
                  .fromTo(
                    section.querySelectorAll(".home-character__name"),
                    {
                      xPercent: 140,
                      x: 0,
                    },
                    {
                      xPercent: 0,
                      duration: 1,
                      ease: "Power1.easeInOut",
                    },
                    0.32,
                  ),
              3 === t_236 &&
                n_237.fromTo(
                  section.querySelector(".home-news-container"),
                  {
                    yPercent: 40,
                    x: 0,
                  },
                  {
                    yPercent: 0,
                  },
                  0.2,
                ),
              4 === t_236 &&
                n_237.fromTo(
                  section.querySelector(".home-world__banner"),
                  {
                    yPercent: 40,
                    x: 0,
                  },
                  {
                    yPercent: 0,
                  },
                  0.2,
                ),
              5 === t_236 &&
                n_237
                  .fromTo(
                    section.querySelector(".home-feature__info-title"),
                    {
                      xPercent: 100,
                      x: 0,
                    },
                    {
                      xPercent: 0,
                    },
                    0.2,
                  )
                  .fromTo(
                    section.querySelector(".home-feature__info-summary"),
                    {
                      xPercent: 140,
                      x: 0,
                    },
                    {
                      xPercent: 0,
                    },
                    0.3,
                  ));
          });
        },
      },
    },
    ie_33 =
      (webpackRequire(1392),
      Object(C_6.a)(
        ae_32,
        function () {
          var e_247 = this,
            t_248 = e_247._self._c;
          return t_248(
            "div",
            {
              staticClass: "home",
            },
            [
              t_248("sideBar", {
                attrs: {
                  "nav-index": e_247.activePageIndex,
                },
                on: {
                  toSection: e_247.slideTo,
                },
              }),
              e_247._v(" "),
              t_248(
                "div",
                {
                  staticClass: "section-wrap",
                },
                [
                  t_248(
                    "section",
                    {
                      staticClass: "section section-index",
                    },
                    [
                      t_248(
                        "transition",
                        {
                          attrs: {
                            name: "slide-left",
                            appear: "",
                          },
                        },
                        [
                          t_248(
                            "div",
                            {
                              staticClass: "fill fill-bg",
                            },
                            [
                              t_248("img", {
                                attrs: {
                                  src: webpackRequire(1340),
                                  alt: "",
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                      e_247._v(" "),
                      t_248(
                        "transition",
                        {
                          attrs: {
                            name: "slide-down",
                          },
                        },
                        [
                          t_248(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !e_247.isLoading,
                                  expression: "!isLoading",
                                },
                              ],
                              staticClass: "fill fill-text",
                            },
                            [
                              t_248("img", {
                                attrs: {
                                  src: webpackRequire(1341),
                                  alt: "",
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                      e_247._v(" "),
                      t_248("kv", {
                        attrs: {
                          "kv-res": e_247.kvRes,
                          "trigger-anim": !e_247.isLoading,
                        },
                      }),
                    ],
                    1,
                  ),
                  e_247._v(" "),
                  t_248(
                    "section",
                    {
                      staticClass: "section section-character",
                    },
                    [
                      t_248(
                        "transition",
                        {
                          attrs: {
                            name: "slide-from-rb",
                          },
                        },
                        [
                          t_248(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !e_247.isLoading,
                                  expression: "!isLoading",
                                },
                              ],
                              staticClass: "fill fill-black-right fill-black-right-character",
                            },
                            [
                              t_248("img", {
                                staticClass: "fill-black-bar",
                                attrs: {
                                  src: webpackRequire(1342),
                                  alt: "",
                                },
                              }),
                              e_247._v(" "),
                              t_248("img", {
                                attrs: {
                                  src: webpackRequire(1343),
                                  alt: "",
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                      e_247._v(" "),
                      e_247._m(0),
                      e_247._v(" "),
                      t_248("chara-section", {
                        attrs: {
                          "character-res": e_247.characterRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  e_247._v(" "),
                  t_248(
                    "section",
                    {
                      staticClass: "section section-video",
                    },
                    [
                      t_248("video-section", {
                        attrs: {
                          "video-res": e_247.videoRes,
                        },
                      }),
                      e_247._v(" "),
                      t_248("div", {
                        staticClass: "fill-film-bar",
                      }),
                      e_247._v(" "),
                      t_248("img", {
                        staticClass: "fill-black-bar-video",
                        attrs: {
                          src: webpackRequire(1216),
                          alt: "",
                        },
                      }),
                    ],
                    1,
                  ),
                  e_247._v(" "),
                  t_248(
                    "section",
                    {
                      staticClass: "section section-news",
                    },
                    [
                      t_248("news-slider", {
                        attrs: {
                          "news-res": e_247.newsRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  e_247._v(" "),
                  t_248(
                    "section",
                    {
                      staticClass: "section section-world",
                    },
                    [
                      t_248("world-section", {
                        attrs: {
                          "world-res": e_247.worldRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  e_247._v(" "),
                  t_248(
                    "section",
                    {
                      staticClass: "section section-feature",
                    },
                    [
                      t_248("img", {
                        staticClass: "fill-black-bar-feature",
                        attrs: {
                          src: webpackRequire(1216),
                          alt: "",
                        },
                      }),
                      e_247._v(" "),
                      t_248("feature-section", {
                        attrs: {
                          "feature-res": e_247.featureRes,
                        },
                      }),
                    ],
                    1,
                  ),
                ],
              ),
            ],
            1,
          );
        },
        o_1,
        !1,
        null,
        null,
        null,
      ));
  webpackExports.default = ie_33.exports;
};
