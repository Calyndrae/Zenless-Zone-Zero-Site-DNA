/**
 * sidebar — readable reconstruction of webpack module 1418 (chunk 3b23566.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/3b23566.js
 *
 * Nuxt page component `index` for the desktop home route `lang-main` (layout `default`), bundled with its inline children: the `sidebar` section pager (prev/next and `0N` numbers from the HoYoverse mi18n nav config `Navs`, translateY by a measured nav height, emits `toSection`), a `cloud-download-dialog` (QR code and Windows/macOS cloud-download buttons via `$mJump`, `popup_download` events), the KV (`home-kv`, extends `base`; PV playback in `videoDialog` with `muteBgm`, PC download via `addParamsToUrl(pc_download_link)` + `$ads` FB/Twitter tracking, Steam wishlist link, `sea-download-layout` platform buttons using `window.MeSeaDownload.getDownloadMi18n` for `layer_tag`, cloud download, and an optional Firebase web-push subscribe button using `initializeApp`/messaging `getToken` with a VAPID key and the `webpush_subscribe` storage flag), the character section (`home-character`, thumb + fade swipers, sliding English-name marquee via `$gsap`, camps from the `characterCamps` getter or `getCampList` -> `setCharacterCamps`), the news slider (`home-news`), feature (`home-feature`), world (`home-world` with the concept-video card) and video (`home-video`, fade swiper with a translating thumbnail nav, throttled prev/next and debounced resize) sections. The page's `asyncData` fetches `getKV`/`getFeature` (module 1164), `getSliderNews` (1124), `getAllCharacter` (1154), `getWorldList` (1152), `getHomeVideoList` and `getCates` (1153), commits `setVideoCates`/`setVideoMainChanName`, keeps up to 6 non-`news-self-path` news and returns `kvRes`, `newsRes`, `characterRes`, `featureRes`, `worldRes` and `videoRes`. It renders `section-index/character/video/news/world/feature` blocks with `fill` decorations, tracks the active section from scroll (`setHomeSection`, `$trackEvent('Page','enter')`), restores `homeScroll` / saves it with `setHomeScroll`, scrolls between sections with `$gsap` `scrollTo`, and registers per-section `$gsap` ScrollTrigger timelines that slide in `.section-nav-*` labels and animate mi18n-configured attributes.
 *
 * Exports (minified key → meaning):
 *   default → the `index` desktop home page Vue component (route lang-main, compiled with vue-loader normalizer)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1418 from 3b23566.js
// deps: 1344, 85, 84, 105, 106, 56, 71, 32, 98, 136, 77, 137, 155, 67, 208, 138, 65, 1164, 1154, 1124, 1152, 1153, 556, 49, 1345, 36, 171, 118, 1352, 1417, 28, 1157, 1353, 251, 24, 1357, 1195, 1349, 1350, 1351, 204, 1120, 1126, 1362, 1361, 119, 1367, 1366, 1369, 1373, 1202, 1378, 1224, 1384, 1377, 1392, 1340, 1341, 1342, 1343, 1216
const module_1418 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire.r(webpackExports);
  var homeStaticRenderFns = [
      function () {
        var fillBlackCharacterH = this._self._c;
        return fillBlackCharacterH(
          "div",
          {
            staticClass: "fill fill-black fill-black-character",
          },
          [
            fillBlackCharacterH("img", {
              attrs: {
                src: webpackRequire(1344),
                alt: "",
              },
            }),
          ],
        );
      },
    ],
    definePropertyHelper =
      (webpackRequire(85), webpackRequire(84), webpackRequire(105), webpackRequire(106), webpackRequire(56)),
    vendorBundle = webpackRequire(71),
    vendorBundle2 = webpackRequire(32),
    homeContentApi =
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
    mi18nModule = (webpackRequire(556), webpackRequire(49)),
    sidebarOptions = {
      name: "sidebar",
      props: {
        navIndex: {
          type: Number,
          default: 0,
        },
      },
      data: function () {
        return {
          Navs: mi18nModule.e,
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
        var sidebarSelf = this;
        (this.$nextTick(function () {
          sidebarSelf.measureNavHeight();
        }),
          (this.onResize = function () {
            sidebarSelf.measureNavHeight();
          }),
          window.addEventListener("resize", this.onResize));
      },
      beforeDestroy: function () {
        window.removeEventListener("resize", this.onResize);
      },
      methods: {
        measureNavHeight: function () {
          var pagerEls = this.$el.querySelectorAll(".sidebar__pagers-num");
          if (!(pagerEls.length < 2) && this.$flex) {
            var remPx = this.$flex("rem");
            if (remPx) {
              var measuredNavHeight = (pagerEls[1].offsetTop - pagerEls[0].offsetTop) / remPx;
              measuredNavHeight > 0 && (this.navHeight = measuredNavHeight);
            }
          }
        },
        handleSlide: function (slideDirection) {
          var targetNavIndex = this.navIndex;
          ("prev" === slideDirection && (targetNavIndex = Math.max(0, this.navIndex - 1)),
            "next" === slideDirection && (targetNavIndex = Math.min(this.Navs.length - 1, this.navIndex + 1)),
            this.$emit("toSection", targetNavIndex));
        },
        handleNav: function (clickedNavIndex) {
          this.$emit("toSection", clickedNavIndex);
        },
      },
    },
    componentNormalizer = (webpackRequire(1345), webpackRequire(36)),
    Sidebar = Object(componentNormalizer.a)(
      sidebarOptions,
      function () {
        var sidebarVm = this,
          sidebarH = sidebarVm._self._c;
        return sidebarH(
          "aside",
          {
            staticClass: "sidebar",
          },
          [
            sidebarH(
              "div",
              {
                staticClass: "sidebar__nav",
              },
              [
                sidebarH("div", {
                  staticClass: "sidebar__nav-prev",
                  class: {
                    disable: 0 === sidebarVm.activeIndex,
                  },
                  on: {
                    click: function (prevClickEvent) {
                      return sidebarVm.handleSlide("prev");
                    },
                  },
                }),
                sidebarVm._v(" "),
                sidebarH("div", {
                  staticClass: "sidebar__nav-next",
                  class: {
                    disable: sidebarVm.activeIndex === sidebarVm.Navs.length - 1,
                  },
                  on: {
                    click: function (nextClickEvent) {
                      return sidebarVm.handleSlide("next");
                    },
                  },
                }),
              ],
            ),
            sidebarVm._v(" "),
            sidebarH(
              "div",
              {
                ref: "asideNav",
                staticClass: "sidebar__scroll",
              },
              [
                sidebarH(
                  "ul",
                  {
                    staticClass: "sidebar__pagers",
                    style: sidebarVm.pagerStyle,
                  },
                  sidebarVm._l(sidebarVm.Navs, function (nav, navItemIndex) {
                    return sidebarH(
                      "li",
                      {
                        key: nav.mi18nKey,
                        staticClass: "sidebar__pagers-num",
                        class: {
                          "sidebar__pagers-num--active": navItemIndex === sidebarVm.activeIndex,
                        },
                        on: {
                          click: function (navClickEvent) {
                            return sidebarVm.handleNav(navItemIndex);
                          },
                        },
                      },
                      [sidebarVm._v("\n        0" + sidebarVm._s(navItemIndex + 1) + "\n      ")],
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
    firebaseAppModule = (webpackRequire(171), webpackRequire(118), webpackRequire(1352)),
    firebase = webpackRequire(1417),
    siteConfigConstants = webpackRequire(28),
    videoDialogComponent = webpackRequire(1157),
    cloudDownloadDialogOptions = {
      name: "cloud-download-dialog",
      mounted: function () {
        this.$trackEvent("popup_download", "view", "cloud", "");
      },
      methods: {
        handleClose: function () {
          this.$emit("close");
        },
        handleDownload: function (platform) {
          this.$trackEvent(
            "popup_download",
            "click",
            "download_cloud",
            {
              win: "windows",
              mac: "macos",
            }[platform],
          );
          var link = this.$getI18nWord("cloud_download_link_".concat(platform));
          link &&
            this.$mJump({
              url: link,
              openType: "system",
            });
        },
      },
    },
    CloudDownloadDialog =
      (webpackRequire(1353),
      Object(componentNormalizer.a)(
        cloudDownloadDialogOptions,
        function () {
          var dialogVm = this,
            dialogH = dialogVm._self._c;
          return dialogH(
            "div",
            {
              staticClass: "cloud-download-dialog",
            },
            [
              dialogH(
                "div",
                {
                  staticClass: "cloud-download-dialog-title",
                },
                [dialogVm._v(dialogVm._s(dialogVm.$getI18nWord("cloud_download_modal_title")))],
              ),
              dialogVm._v(" "),
              dialogH(
                "div",
                {
                  staticClass: "cloud-download-dialog-content",
                },
                [
                  dialogH(
                    "div",
                    {
                      staticClass: "cloud-download-qrcode",
                    },
                    [
                      dialogH("img", {
                        attrs: {
                          src: dialogVm.$getI18nWord("cloud_download_qrocde"),
                          alt: "",
                        },
                      }),
                      dialogVm._v(" "),
                      dialogH("span", [
                        dialogVm._v(dialogVm._s(dialogVm.$getI18nWord("cloud_download_scan_tip"))),
                      ]),
                    ],
                  ),
                  dialogVm._v(" "),
                  dialogH(
                    "div",
                    {
                      staticClass: "cloud-download-btn-container",
                    },
                    [
                      dialogH("div", {
                        staticClass: "cloud-download-btn",
                        style: {
                          backgroundImage: "url(".concat(
                            dialogVm.$getI18nWord("cloud_download_btn_win"),
                            ")",
                          ),
                        },
                        on: {
                          click: function (winClickEvent) {
                            return dialogVm.handleDownload("win");
                          },
                        },
                      }),
                      dialogVm._v(" "),
                      dialogH("div", {
                        staticClass: "cloud-download-btn",
                        style: {
                          backgroundImage: "url(".concat(
                            dialogVm.$getI18nWord("cloud_download_btn_mac"),
                            ")",
                          ),
                        },
                        on: {
                          click: function (macClickEvent) {
                            return dialogVm.handleDownload("mac");
                          },
                        },
                      }),
                    ],
                  ),
                ],
              ),
              dialogVm._v(" "),
              dialogH("div", {
                staticClass: "cloud-download-dialog-close",
                on: {
                  click: dialogVm.handleClose,
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
    webpushCacheKey = "_cache_by_zenless-test.hoyoverse/main",
    homeKvOptions = {
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
        var useWebpush = "1" === this.$getI18nWord("use_webpush"),
          cloudDownloadBtnUrl = this.$getI18nWord("cloud_download_btn") || "";
        return {
          subscribed: !1,
          subscribeStage: "",
          retryCnt: 0,
          canFetch: !0,
          messagingRef: null,
          useWebpush: useWebpush,
          layerTag: "",
          cloudDownloadBtn: cloudDownloadBtnUrl.startsWith("https") ? cloudDownloadBtnUrl : "",
        };
      },
      mounted: function () {
        var kvMountedSelf = this;
        return Object(vendorBundle2.a)(
          regeneratorRuntime.mark(function kvMountedGenerator() {
            var commonUtils, storage;
            return regeneratorRuntime.wrap(function (kvMountedContext) {
              for (;;)
                switch ((kvMountedContext.prev = kvMountedContext.next)) {
                  case 0:
                    (kvMountedSelf.initApp(),
                      (commonUtils = webpackRequire(24)),
                      (storage = commonUtils.storage),
                      (kvMountedSelf.subscribed = !(
                        !storage.get("webpush_subscribe") &&
                        !storage.get("webpush_subscribe", webpushCacheKey)
                      )),
                      storage.set("webpush_subscribe", kvMountedSelf.subscribed ? 1 : 0, 0, webpushCacheKey),
                      kvMountedSelf.getUrl());
                  case 1:
                  case "end":
                    return kvMountedContext.stop();
                }
            }, kvMountedGenerator);
          }),
        )();
      },
      methods: {
        getUrl: function () {
          var getUrlSelf = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function getUrlGenerator() {
              var getDownloadMi18n, downloadMi18nRes, layerTagUrl;
              return regeneratorRuntime.wrap(function (getUrlContext) {
                for (;;)
                  switch ((getUrlContext.prev = getUrlContext.next)) {
                    case 0:
                      return (
                        (getDownloadMi18n = window.MeSeaDownload.getDownloadMi18n),
                        (getUrlContext.next = 3),
                        getDownloadMi18n({
                          lang: getUrlSelf.lang,
                          environment: siteConfigConstants.environment,
                          game_biz: "nap_global",
                        })
                      );
                    case 3:
                      ((downloadMi18nRes = getUrlContext.sent),
                        (layerTagUrl = downloadMi18nRes.layer_tag),
                        (getUrlSelf.layerTag = ["pt-pt", "fr-fr"].includes(getUrlSelf.$getLang())
                          ? ""
                          : layerTagUrl));
                    case 6:
                    case "end":
                      return getUrlContext.stop();
                  }
              }, getUrlGenerator);
            }),
          )();
        },
        handleDownload: function () {
          (this.$trackButton("download", "0"),
            this.$ads.fa.trackCustomEvent("ClickButton", {
              label: "Normal",
            }),
            this.$ads.twitter.trackEvent("tw-rc4y1-rcl9p"));
          var pcDownloadUrl = (0, webpackRequire(24).addParamsToUrl)(this.$getI18nWord("pc_download_link"), {
            url: encodeURIComponent(window.location.href),
            appid: 262,
          });
          this.$mJump(pcDownloadUrl);
        },
        handleSteamDownload: function () {
          this.$trackButton("steam_wishlist");
          var steamDownloadUrl = this.$getI18nWord("pc_steam_download_link");
          this.$mJump(steamDownloadUrl);
        },
        getNotifyToken: function (tokenMessaging) {
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function getNotifyTokenGenerator() {
              var grantedToken, requestedToken;
              return regeneratorRuntime.wrap(
                function (notifyTokenContext) {
                  for (;;)
                    switch ((notifyTokenContext.prev = notifyTokenContext.next)) {
                      case 0:
                        if (((notifyTokenContext.prev = 0), "Notification" in window)) {
                          notifyTokenContext.next = 5;
                          break;
                        }
                        (console.info("This browser does not support desktop notification"),
                          (notifyTokenContext.next = 25));
                        break;
                      case 5:
                        if ("granted" !== Notification.permission) {
                          notifyTokenContext.next = 14;
                          break;
                        }
                        return (
                          (notifyTokenContext.next = 8),
                          Object(firebase.b)(tokenMessaging, {
                            vapidKey:
                              "BOlB9jQXHfkcBoA04_CeqJDYYc9-4leaByX3fiPhlZC2yfyvAvyuuE5XpogZ36FyuzIOPbnRo2Z1-F54K3dOYSo",
                          })
                        );
                      case 8:
                        if ((grantedToken = notifyTokenContext.sent)) {
                          notifyTokenContext.next = 11;
                          break;
                        }
                        return notifyTokenContext.abrupt("return", null);
                      case 11:
                        return notifyTokenContext.abrupt("return", grantedToken);
                      case 14:
                        if ("denied" === Notification.permission) {
                          notifyTokenContext.next = 25;
                          break;
                        }
                        return ((notifyTokenContext.next = 17), Notification.requestPermission());
                      case 17:
                        if ("granted" !== notifyTokenContext.sent) {
                          notifyTokenContext.next = 25;
                          break;
                        }
                        return (
                          (notifyTokenContext.next = 21),
                          Object(firebase.b)(tokenMessaging, {
                            vapidKey:
                              "BOlB9jQXHfkcBoA04_CeqJDYYc9-4leaByX3fiPhlZC2yfyvAvyuuE5XpogZ36FyuzIOPbnRo2Z1-F54K3dOYSo",
                          })
                        );
                      case 21:
                        if ((requestedToken = notifyTokenContext.sent)) {
                          notifyTokenContext.next = 24;
                          break;
                        }
                        return notifyTokenContext.abrupt("return", null);
                      case 24:
                        return notifyTokenContext.abrupt("return", requestedToken);
                      case 25:
                        return notifyTokenContext.abrupt("return", null);
                      case 28:
                        return (
                          (notifyTokenContext.prev = 28),
                          (notifyTokenContext.t0 = notifyTokenContext.catch(0)),
                          notifyTokenContext.abrupt("return", null)
                        );
                      case 31:
                      case "end":
                        return notifyTokenContext.stop();
                    }
                },
                getNotifyTokenGenerator,
                null,
                [[0, 28]],
              );
            }),
          )();
        },
        loadToken: function (loadMessaging) {
          var loadTokenSelf = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function loadTokenGenerator() {
              var pushToken;
              return regeneratorRuntime.wrap(function (loadTokenContext) {
                for (;;)
                  switch ((loadTokenContext.prev = loadTokenContext.next)) {
                    case 0:
                      if ("denied" !== Notification.permission) {
                        loadTokenContext.next = 2;
                        break;
                      }
                      return loadTokenContext.abrupt("return", null);
                    case 2:
                      return ((loadTokenContext.next = 4), loadTokenSelf.getNotifyToken(loadMessaging));
                    case 4:
                      pushToken = loadTokenContext.sent;
                    case 5:
                      if (pushToken || !(loadTokenSelf.retryCnt < 3)) {
                        loadTokenContext.next = 12;
                        break;
                      }
                      return (
                        (loadTokenSelf.retryCnt += 1),
                        (loadTokenContext.next = 9),
                        loadTokenSelf.getNotifyToken(loadMessaging)
                      );
                    case 9:
                      ((pushToken = loadTokenContext.sent), (loadTokenContext.next = 5));
                      break;
                    case 12:
                      return loadTokenContext.abrupt("return", pushToken);
                    case 13:
                    case "end":
                      return loadTokenContext.stop();
                  }
              }, loadTokenGenerator);
            }),
          )();
        },
        initApp: function () {
          var firebaseApp = Object(firebaseAppModule.a)({
              apiKey: "AIzaSyAsg8L4HPd9usmBtR9QIRA_ykS9-yqw_rI",
              authDomain: "nap-webpush.firebaseapp.com",
              projectId: "nap-webpush",
              storageBucket: "nap-webpush.appspot.com",
              messagingSenderId: "714492885039",
              appId: "1:714492885039:web:de938d2747167becbbeeda",
              measurementId: "G-R6MEDC9FB2",
            }),
            messaging = Object(firebase.a)(firebaseApp);
          ((this.messagingRef = messaging),
            "Notification" in window &&
              "granted" === Notification.permission &&
              this.getNotifyToken(messaging));
        },
        subscribeWebpush: function () {
          var subscribeSelf = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function subscribeGenerator() {
              var commonUtils2, subscribeStorage, loadingToast, subscribedToken;
              return regeneratorRuntime.wrap(
                function (subscribeContext) {
                  for (;;)
                    switch ((subscribeContext.prev = subscribeContext.next)) {
                      case 0:
                        if (
                          subscribeSelf.messagingRef &&
                          subscribeSelf.canFetch &&
                          !subscribeSelf.subscribed
                        ) {
                          subscribeContext.next = 2;
                          break;
                        }
                        return subscribeContext.abrupt("return");
                      case 2:
                        return (
                          subscribeSelf.$trackButton("web_push", ""),
                          (commonUtils2 = webpackRequire(24)),
                          (subscribeStorage = commonUtils2.storage),
                          (loadingToast = subscribeSelf.$mtoast.loading({
                            duration: 0,
                          })),
                          (subscribeContext.prev = 5),
                          (subscribeSelf.canFetch = !1),
                          (subscribeContext.next = 9),
                          subscribeSelf.loadToken(subscribeSelf.messagingRef)
                        );
                      case 9:
                        ((subscribedToken = subscribeContext.sent)
                          ? (subscribeStorage.set("webpush_subscribe", 1, 0, webpushCacheKey),
                            (subscribeSelf.subscribed = !0))
                          : subscribeSelf.$mtoast(subscribeSelf.$getI18nWord("subscribe_fail_toast")),
                          "production" !== siteConfigConstants.environment &&
                            console.log("webpush 令牌：    ".concat(subscribedToken)),
                          (subscribeContext.next = 18));
                        break;
                      case 14:
                        throw (
                          (subscribeContext.prev = 14),
                          (subscribeContext.t0 = subscribeContext.catch(5)),
                          (subscribeSelf.canFetch = !0),
                          subscribeContext.t0
                        );
                      case 18:
                        return (
                          (subscribeContext.prev = 18),
                          subscribeSelf.$mtoast.clear(loadingToast),
                          subscribeContext.finish(18)
                        );
                      case 21:
                      case "end":
                        return subscribeContext.stop();
                    }
                },
                subscribeGenerator,
                null,
                [[5, 14, 18, 21]],
              );
            }),
          )();
        },
        playPV: function () {
          var pvSelf = this,
            pvStartTime = Date.now();
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
                  pvSelf.$store.commit("muteBgm", !1),
                  pvSelf.$trackButton("AppointPage_PV_stop", Math.round((Date.now() - pvStartTime) / 1e3)));
              },
              bgOpacity: 0.8,
              dialogInfo: {
                iframeSrc: this.kvRes.youtobeUrl,
              },
            }),
            this.$trackButton("AppointPage_PV_start", ""));
        },
        onDownloadClick: function (downloadItem) {
          var downloadIndex = downloadItem.label.replace("download", "") || "",
            platformName = {
              1: "PS",
              2: "xBox",
              3: "ios",
              4: "GP",
              5: "PC",
              6: "Steam",
              7: "Epic",
            }[downloadIndex];
          (this.$trackEvent("Button", "Click", "download_icon", downloadIndex),
            this.$ads.fa.trackCustomEvent("ClickButton", {
              label: platformName || downloadIndex,
            }),
            this.$ads.twitter.trackEvent("tw-rc4y1-rcl9c", {
              label: platformName || downloadIndex,
            }));
        },
        handleCloudDownload: function () {
          (this.$trackEvent("button", "click", "download", "cloud_pc"),
            this.$openDialog(CloudDownloadDialog, {
              transitionType: "scale",
              zIndex: 100,
              closeCb: function () {
                document.body.style.overflow = "auto";
              },
            }));
        },
      },
    },
    HomeKv =
      (webpackRequire(1357),
      Object(componentNormalizer.a)(
        homeKvOptions,
        function () {
          var kvVm = this,
            kvH = kvVm._self._c;
          return kvH(
            "div",
            {
              staticClass: "home-kv",
            },
            [
              kvH(
                "div",
                {
                  staticClass: "home-kv-wrap",
                },
                [
                  kvH(
                    "div",
                    {
                      staticClass: "home-kv__bg",
                    },
                    [
                      kvH("img", {
                        attrs: {
                          src: kvVm.kvRes.kv,
                          alt: "",
                        },
                      }),
                      kvVm._v(" "),
                      kvH("p", {
                        staticClass: "pc_download_tip",
                        domProps: {
                          innerHTML: kvVm._s(kvVm.$getI18nWord("pc_download_tip")),
                        },
                      }),
                    ],
                  ),
                  kvVm._v(" "),
                  kvH(
                    "div",
                    {
                      staticClass: "home-kv-aside",
                    },
                    [
                      kvH(
                        "transition",
                        {
                          attrs: {
                            name: "slide-left",
                          },
                        },
                        [
                          kvH("div", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: kvVm.triggerAnim,
                                expression: "triggerAnim",
                              },
                            ],
                            staticClass: "home-kv__play",
                            on: {
                              click: function (playClickEvent) {
                                return kvVm.playPV();
                              },
                            },
                          }),
                        ],
                      ),
                      kvVm._v(" "),
                      kvH(
                        "transition",
                        {
                          attrs: {
                            name: "slide-left",
                          },
                        },
                        [
                          kvH(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: kvVm.triggerAnim,
                                  expression: "triggerAnim",
                                },
                              ],
                              staticClass: "home-kv__slogan",
                            },
                            [
                              kvH("img", {
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
              kvVm._v(" "),
              kvH(
                "client-only",
                [
                  kvH(
                    "transition",
                    {
                      attrs: {
                        name: "zoom",
                      },
                    },
                    [
                      kvH(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: kvVm.triggerAnim,
                              expression: "triggerAnim",
                            },
                          ],
                          staticClass: "home-kv__download",
                          on: {
                            click: kvVm.handleDownload,
                          },
                        },
                        [
                          kvH("img", {
                            attrs: {
                              src: kvVm.$getI18nWord("home_download_icon"),
                              alt: "",
                            },
                          }),
                        ],
                      ),
                    ],
                  ),
                  kvVm._v(" "),
                  kvH("img", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          kvVm.$getI18nWord("pc_steam_download_icon") &&
                          kvVm.$getI18nWord("pc_steam_download_link"),
                        expression:
                          "$getI18nWord('pc_steam_download_icon') && $getI18nWord('pc_steam_download_link')",
                      },
                    ],
                    staticClass: "steam-download",
                    class: {
                      "steam-download--no-webpush": !kvVm.useWebpush,
                    },
                    attrs: {
                      src: kvVm.$getI18nWord("pc_steam_download_icon"),
                      alt: "",
                    },
                    on: {
                      click: kvVm.handleSteamDownload,
                    },
                  }),
                  kvVm._v(" "),
                  kvH(
                    "div",
                    {
                      staticClass: "home-btn-container",
                      class: {
                        "home-btn-container__single": !kvVm.useWebpush,
                      },
                    },
                    [
                      kvVm.layerTag
                        ? kvH("img", {
                            staticClass: "layer-tag",
                            attrs: {
                              src: kvVm.layerTag,
                            },
                          })
                        : kvVm._e(),
                      kvVm._v(" "),
                      kvH("sea-download-layout", {
                        class: {
                          "download-panel__cloud": !!kvVm.cloudDownloadBtn,
                        },
                        attrs: {
                          "game-biz": "nap_global",
                          type: "fab",
                          lang: kvVm.lang,
                          "use-online-config": !0,
                          environment: "development" === kvVm.environment ? "test" : kvVm.environment,
                          source: "262",
                        },
                        on: {
                          download: kvVm.onDownloadClick,
                        },
                      }),
                      kvVm._v(" "),
                      kvVm.cloudDownloadBtn
                        ? kvH("div", {
                            staticClass: "cloud-download-btn",
                            style: {
                              backgroundImage: "url(".concat(kvVm.cloudDownloadBtn, ")"),
                            },
                            on: {
                              click: kvVm.handleCloudDownload,
                            },
                          })
                        : kvVm._e(),
                      kvVm._v(" "),
                      kvVm.useWebpush
                        ? kvH(
                            "div",
                            {
                              staticClass: "web-push-subscribe",
                            },
                            [
                              kvH("hover-btn", {
                                staticClass: "subscribe-btn",
                                attrs: {
                                  img: webpackRequire(1349),
                                  "img-hover": webpackRequire(1350),
                                  "img-disable": webpackRequire(1351),
                                  "need-disable": !0,
                                  "is-disable": kvVm.subscribed,
                                },
                                on: {
                                  click: kvVm.subscribeWebpush,
                                },
                              }),
                              kvVm._v(" "),
                              kvH("div", {
                                staticClass: "subscribe-tip",
                                domProps: {
                                  innerHTML: kvVm._s(
                                    kvVm.$getI18nWord(
                                      kvVm.subscribed ? "subscribe_tip_disabled" : "subscribe_tip",
                                    ),
                                  ),
                                },
                              }),
                            ],
                            1,
                          )
                        : kvVm._e(),
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
    pageTabModule = (webpackRequire(204), webpackRequire(1120), webpackRequire(1126));
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      (enumerableOnly &&
        (symbols = symbols.filter(function (symbol) {
          return Object.getOwnPropertyDescriptor(object, symbol).enumerable;
        })),
        keys.push.apply(keys, symbols));
    }
    return keys;
  }
  function objectSpread(target) {
    for (var argIndex = 1; argIndex < arguments.length; argIndex++) {
      var source = null != arguments[argIndex] ? arguments[argIndex] : {};
      argIndex % 2
        ? ownKeys(Object(source), !0).forEach(function (key) {
            Object(definePropertyHelper.a)(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
          : ownKeys(Object(source)).forEach(function (descriptorKey) {
              Object.defineProperty(
                target,
                descriptorKey,
                Object.getOwnPropertyDescriptor(source, descriptorKey),
              );
            });
    }
    return target;
  }
  var homeCharacterOptions = {
      components: {
        pageTab: pageTabModule.a,
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
        var charaCreatedSelf = this;
        return Object(vendorBundle2.a)(
          regeneratorRuntime.mark(function charaCreatedGenerator() {
            var charaListHead;
            return regeneratorRuntime.wrap(function (charaCreatedContext) {
              for (;;)
                switch ((charaCreatedContext.prev = charaCreatedContext.next)) {
                  case 0:
                    ((charaListHead = Object(vendorBundle.a)(charaCreatedSelf.charaList, 1)),
                      (charaCreatedSelf.characterInfo = charaListHead[0]),
                      (charaCreatedSelf.curName = charaCreatedSelf.repeatName(
                        charaCreatedSelf.characterInfo.nameEN.split(" ")[0],
                      )),
                      (charaCreatedSelf.characterCamps && charaCreatedSelf.characterCamps.length) ||
                        charaCreatedSelf.getCharacterCamps());
                  case 4:
                  case "end":
                    return charaCreatedContext.stop();
                }
            }, charaCreatedGenerator);
          }),
        )();
      },
      methods: {
        repeatName: function (firstName) {
          return firstName.length <= 6 ? "".concat(firstName, " ").concat(firstName) : firstName;
        },
        getCharacterCamps: function () {
          var campsSelf = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function getCampsGenerator() {
              var campListRes;
              return regeneratorRuntime.wrap(function (campsContext) {
                for (;;)
                  switch ((campsContext.prev = campsContext.next)) {
                    case 0:
                      return (
                        (campsContext.next = 2),
                        characterAndCampCMSAPI.a.getCampList({
                          data: {
                            sLangKey: campsSelf.$store.state.lang,
                          },
                        })
                      );
                    case 2:
                      ((campListRes = campsContext.sent),
                        campsSelf.$store.commit("setCharacterCamps", campListRes));
                    case 4:
                    case "end":
                      return campsContext.stop();
                  }
              }, getCampsGenerator);
            }),
          )();
        },
        campInfo: function (chanId) {
          return this.characterCamps.find(function (camp) {
            return Number(camp.channelId) === Number(chanId);
          });
        },
        toggleRole: function (roleIndex) {
          var toggleSelf = this;
          this.activeIndex !== roleIndex &&
            ((this.oldInfo = this.charaList[this.activeIndex]),
            (this.activeIndex = roleIndex),
            (this.characterInfo = this.charaList[roleIndex]),
            (this.oldName = this.repeatName(this.oldInfo.nameEN.split(" ")[0])),
            (this.curName = this.repeatName(this.characterInfo.nameEN.split(" ")[0])),
            this.$refs.characterSwiper.swiper.slideTo(roleIndex),
            this.$nextTick(function () {
              var rootFontSize = parseFloat(document.documentElement.style.fontSize),
                oldNameWidthRem = document.querySelector(".old-en-name").clientWidth / rootFontSize;
              (toggleSelf.$mtoast.loading({
                showContent: !1,
                duration: 100,
              }),
                toggleSelf.$gsap.fromTo(
                  ".en-name-container",
                  {
                    x: "0",
                  },
                  {
                    x: "-".concat(oldNameWidthRem + 1, "rem"),
                    duration: 0.5,
                    onComplete: function () {
                      ((toggleSelf.oldName = ""),
                        toggleSelf.$gsap.set(".en-name-container", {
                          x: "0",
                        }));
                    },
                  },
                ));
            }));
        },
        handleCharaNavClick: function (navIndex, navChara) {
          (this.toggleRole(navIndex), this.$trackButton("character_icon", "".concat(navChara.iInfoId)));
        },
        handlePrev: function () {
          var prevTargetIndex = this.$refs.pageSwiper.swiper.activeIndex - 3;
          ((this.canSlidePrev = prevTargetIndex - 3 >= 0),
            (this.canSlideNext = prevTargetIndex + 3 <= this.charaList.length - 1),
            this.$refs.pageSwiper.swiper.slideTo(prevTargetIndex),
            this.$trackButton("next_character", ""));
        },
        handleNext: function () {
          var nextTargetIndex = this.$refs.pageSwiper.swiper.activeIndex + 3;
          ((this.canSlidePrev = nextTargetIndex - 3 >= 0),
            (this.canSlideNext = nextTargetIndex + 3 <= this.charaList.length - 1),
            this.$refs.pageSwiper.swiper.slideTo(nextTargetIndex),
            this.$trackButton("next_character", ""));
        },
        handleMoreClick: function () {
          (this.$trackButton("character_more", ""),
            this.$router.push({
              name: "lang-character",
              query: objectSpread(
                objectSpread({}, this.$route.query),
                {},
                {
                  id: this.characterInfo.iInfoId,
                },
              ),
            }));
        },
      },
    },
    HomeCharacter =
      (webpackRequire(1362),
      Object(componentNormalizer.a)(
        homeCharacterOptions,
        function () {
          var charaVm = this,
            charaH = charaVm._self._c;
          return charaH(
            "div",
            {
              staticClass: "home-character",
            },
            [
              charaH("pageTab", {
                attrs: {
                  "nav-num": 2,
                  size: "lg",
                },
              }),
              charaVm._v(" "),
              charaVm.characterInfo
                ? charaH(
                    "div",
                    {
                      staticClass: "home-character__anim font-num",
                    },
                    [
                      charaH(
                        "div",
                        {
                          staticClass: "en-name-container",
                        },
                        [
                          charaVm.oldName
                            ? charaH(
                                "div",
                                {
                                  staticClass: "en-name old-en-name",
                                },
                                [charaVm._v(charaVm._s(charaVm.oldName))],
                              )
                            : charaVm._e(),
                          charaVm._v(" "),
                          charaH(
                            "div",
                            {
                              staticClass: "en-name",
                            },
                            [charaVm._v(charaVm._s(charaVm.curName))],
                          ),
                        ],
                      ),
                    ],
                  )
                : charaVm._e(),
              charaVm._v(" "),
              charaH(
                "div",
                {
                  staticClass: "home-character__main",
                },
                [
                  charaH("div", {
                    staticClass: "home-character__main-panel",
                  }),
                  charaVm._v(" "),
                  charaH(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: charaVm.charaList.length > 1,
                          expression: "charaList.length > 1",
                        },
                      ],
                      staticClass: "home-character__main-nav",
                    },
                    [
                      charaH(
                        "client-only",
                        [
                          charaH(
                            "swiper",
                            {
                              ref: "pageSwiper",
                              staticClass: "home-character__nav",
                              attrs: {
                                options: charaVm.thumbOption,
                              },
                            },
                            charaVm._l(charaVm.charaList, function (thumbChara, thumbIndex) {
                              return charaH(
                                "swiper-slide",
                                {
                                  key: thumbIndex,
                                  staticClass: "home-character__nav-item",
                                  class: {
                                    "swiper-slide-active": charaVm.activeIndex === thumbIndex,
                                    "swiper-slide-thumb-active": charaVm.activeIndex === thumbIndex,
                                  },
                                  nativeOn: {
                                    click: function (thumbClickEvent) {
                                      return charaVm.handleCharaNavClick(thumbIndex, thumbChara);
                                    },
                                  },
                                },
                                [
                                  charaH("img", {
                                    attrs: {
                                      src: thumbChara.nav,
                                      alt: "",
                                    },
                                  }),
                                  charaVm._v(" "),
                                  charaH("div", {
                                    staticClass: "home-character__nav-mask",
                                  }),
                                ],
                              );
                            }),
                            1,
                          ),
                          charaVm._v(" "),
                          charaH(
                            "div",
                            {
                              staticClass: "swiper-navigation",
                            },
                            [
                              charaH("div", {
                                staticClass: "swiper-button-prev",
                                class: {
                                  "swiper-button-disabled": !charaVm.canSlidePrev,
                                },
                                attrs: {
                                  slot: "button-prev",
                                },
                                on: {
                                  click: charaVm.handlePrev,
                                },
                                slot: "button-prev",
                              }),
                              charaVm._v(" "),
                              charaH("div", {
                                staticClass: "swiper-button-next",
                                class: {
                                  "swiper-button-disabled": !charaVm.canSlideNext,
                                },
                                attrs: {
                                  slot: "button-next",
                                },
                                on: {
                                  click: charaVm.handleNext,
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
                  charaVm._v(" "),
                  charaH(
                    "div",
                    {
                      staticClass: "home-character__main-swiper",
                    },
                    [
                      charaVm.charaList.length
                        ? charaH(
                            "swiper",
                            {
                              ref: "characterSwiper",
                              staticClass: "home-character__list",
                              attrs: {
                                options: charaVm.swiperOption,
                              },
                            },
                            charaVm._l(charaVm.charaList, function (slideChara) {
                              return charaH(
                                "swiper-slide",
                                {
                                  key: slideChara.id,
                                  staticClass: "home-character__list-item",
                                },
                                [
                                  charaH(
                                    "div",
                                    {
                                      staticClass: "home-character__role",
                                    },
                                    [
                                      charaH("img", {
                                        attrs: {
                                          src: slideChara.cover,
                                          alt: "",
                                        },
                                      }),
                                    ],
                                  ),
                                  charaVm._v(" "),
                                  charaH(
                                    "div",
                                    {
                                      staticClass: "home-character__shade",
                                    },
                                    [
                                      charaVm.campInfo(slideChara.sChanId[0])
                                        ? charaH("img", {
                                            attrs: {
                                              src: charaVm.campInfo(slideChara.sChanId[0]).shade,
                                              alt: "",
                                            },
                                          })
                                        : charaVm._e(),
                                    ],
                                  ),
                                  charaVm._v(" "),
                                  charaH(
                                    "div",
                                    {
                                      staticClass: "home-character__info",
                                    },
                                    [
                                      charaVm.campInfo(slideChara.sChanId[0])
                                        ? charaH(
                                            "div",
                                            {
                                              staticClass: "home-character__camp",
                                            },
                                            [
                                              charaH("span", {
                                                domProps: {
                                                  innerHTML: charaVm._s(
                                                    charaVm.campInfo(slideChara.sChanId[0]).name,
                                                  ),
                                                },
                                              }),
                                            ],
                                          )
                                        : charaVm._e(),
                                      charaVm._v(" "),
                                      charaH(
                                        "div",
                                        {
                                          staticClass: "home-character__name",
                                        },
                                        [
                                          charaH("span", {
                                            domProps: {
                                              innerHTML: charaVm._s(slideChara.nameHome || slideChara.name),
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
                        : charaH(
                            "div",
                            {
                              staticClass: "home-character__list-empty",
                            },
                            [
                              charaH("img", {
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
                  charaVm._v(" "),
                  charaVm.charaList.length
                    ? charaH(
                        "div",
                        {
                          staticClass: "more-btn",
                          on: {
                            click: charaVm.handleMoreClick,
                          },
                        },
                        [charaVm._v(charaVm._s(charaVm.$getI18nWord("learnMore")))],
                      )
                    : charaVm._e(),
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
    homeNewsOptions =
      (webpackRequire(119),
      {
        components: {
          pageTab: pageTabModule.a,
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
                renderBullet: function (bulletIndex, bulletClassName) {
                  return '<span class="'
                    .concat(bulletClassName, " swiper-pagination-index-")
                    .concat(bulletIndex + 1, '"></span>');
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
          var newsCreatedSelf = this;
          return Object(vendorBundle2.a)(
            regeneratorRuntime.mark(function newsCreatedGenerator() {
              var newsListHead;
              return regeneratorRuntime.wrap(function (newsCreatedContext) {
                for (;;)
                  switch ((newsCreatedContext.prev = newsCreatedContext.next)) {
                    case 0:
                      ((newsListHead = Object(vendorBundle.a)(newsCreatedSelf.newsList, 1)),
                        (newsCreatedSelf.activeNews = newsListHead[0]),
                        (newsCreatedSelf.isWordsLoop = !0));
                    case 3:
                    case "end":
                      return newsCreatedContext.stop();
                  }
              }, newsCreatedGenerator);
            }),
          )();
        },
        methods: {
          handleSlideChange: function () {},
          handleTransitionStart: function () {
            var transitionStartIndex = this.$refs.mySwiper.swiper.realIndex;
            this.activeIndex !== transitionStartIndex && (this.isWordsLoop = !1);
          },
          handleTransitionEnd: function () {
            var transitionEndIndex = this.$refs.mySwiper.swiper.realIndex;
            this.activeIndex !== transitionEndIndex &&
              ((this.activeIndex = transitionEndIndex),
              (this.activeNews = this.newsList[transitionEndIndex]),
              (this.isWordsLoop = !0));
          },
          handlePaginationClick: function (paginationEvent) {
            var targetEl = paginationEvent.target || paginationEvent.srcElement;
            if (targetEl.className.indexOf("swiper-pagination-index") > -1) {
              var bulletNumber = targetEl.className
                .split(" ")
                .find(function (classToken) {
                  return classToken.includes("swiper-pagination-index-");
                })
                .split("-")
                .pop();
              this.$trackButton("news_point", "".concat(bulletNumber));
            }
          },
          handlePicClick: function (clickedNews) {
            this.$trackButton("news_pics", "".concat(clickedNews.iInfoId));
          },
          handleMoreClick: function () {
            this.$trackButton("news_more", "");
          },
        },
      }),
    homeNewsComponentOptions = homeNewsOptions,
    homeNewsComponent =
      (webpackRequire(1367),
      Object(componentNormalizer.a)(
        homeNewsComponentOptions,
        function () {
          var newsVm = this,
            newsH = newsVm._self._c;
          return newsH(
            "div",
            {
              staticClass: "home-news",
            },
            [
              newsH(
                "div",
                {
                  staticClass: "home-news-wrap",
                },
                [
                  newsH("pageTab", {
                    attrs: {
                      "nav-num": 4,
                      size: "lg",
                    },
                  }),
                  newsVm._v(" "),
                  newsH("img", {
                    staticClass: "home-news__page-bg",
                    attrs: {
                      src: webpackRequire(1366),
                      alt: "news-page-bg",
                    },
                  }),
                  newsVm._v(" "),
                  newsH(
                    "div",
                    {
                      staticClass: "home-news-container",
                    },
                    [
                      newsH(
                        "div",
                        {
                          staticClass: "home-news__banner",
                        },
                        [
                          newsH(
                            "client-only",
                            [
                              newsVm.newsList && newsVm.newsList.length
                                ? newsH(
                                    "swiper",
                                    {
                                      ref: "mySwiper",
                                      staticClass: "home-news__banner-list",
                                      attrs: {
                                        options: newsVm.swiperOption,
                                      },
                                      on: {
                                        slideChange: newsVm.handleSlideChange,
                                        transitionStart: newsVm.handleTransitionStart,
                                        transitionEnd: newsVm.handleTransitionEnd,
                                      },
                                    },
                                    newsVm._l(newsVm.newsList, function (bannerNews) {
                                      return newsH(
                                        "swiper-slide",
                                        {
                                          key: bannerNews.id,
                                          staticClass: "home-news__banner-item",
                                        },
                                        [
                                          newsH(
                                            "nuxt-link",
                                            {
                                              staticClass: "home-news__banner-img",
                                              attrs: {
                                                to: {
                                                  name: "lang-news-id",
                                                  params: {
                                                    id: bannerNews.iInfoId,
                                                  },
                                                  query: newsVm.$route.query,
                                                },
                                              },
                                              nativeOn: {
                                                click: function (newsBannerClickEvent) {
                                                  return newsVm.handlePicClick(bannerNews);
                                                },
                                              },
                                            },
                                            [
                                              newsH("img", {
                                                attrs: {
                                                  src: bannerNews.banner,
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
                                : newsVm._e(),
                            ],
                            1,
                          ),
                          newsVm._v(" "),
                          newsH(
                            "transition",
                            {
                              attrs: {
                                name: "slide-bottom",
                              },
                            },
                            [
                              newsVm.activeNews && newsVm.activeNews.summary
                                ? newsH(
                                    "div",
                                    {
                                      staticClass: "home-news__summary",
                                    },
                                    [
                                      newsH(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: newsVm.isWordsLoop,
                                              expression: "isWordsLoop",
                                            },
                                          ],
                                          staticClass: "home-news__summary-scroll",
                                        },
                                        [newsVm._v(newsVm._s(newsVm.activeNews.summary))],
                                      ),
                                    ],
                                  )
                                : newsVm._e(),
                            ],
                          ),
                        ],
                        1,
                      ),
                      newsVm._v(" "),
                      newsVm.activeNews
                        ? newsH(
                            "div",
                            {
                              staticClass: "home-news__info",
                            },
                            [
                              newsH(
                                "nuxt-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "lang-news-id",
                                      params: {
                                        id: newsVm.activeNews.iInfoId,
                                      },
                                      query: newsVm.$route.query,
                                    },
                                  },
                                },
                                [
                                  newsH(
                                    "div",
                                    {
                                      staticClass: "date",
                                    },
                                    [newsVm._v(newsVm._s(newsVm.activeNews.dateFormat))],
                                  ),
                                  newsVm._v(" "),
                                  newsH(
                                    "div",
                                    {
                                      staticClass: "title ellipsis",
                                    },
                                    [newsVm._v(newsVm._s(newsVm.activeNews.title))],
                                  ),
                                ],
                              ),
                            ],
                            1,
                          )
                        : newsVm._e(),
                      newsVm._v(" "),
                      newsVm.newsList.length > 1
                        ? newsH(
                            "div",
                            {
                              staticClass: "home-news__pagination",
                            },
                            [
                              newsH("div", {
                                staticClass: "swiper-pagination",
                                attrs: {
                                  slot: "pagination",
                                },
                                on: {
                                  click: function (paginationClickEvent) {
                                    return newsVm.handlePaginationClick(paginationClickEvent);
                                  },
                                },
                                slot: "pagination",
                              }),
                            ],
                          )
                        : newsVm._e(),
                      newsVm._v(" "),
                      newsH(
                        "nuxt-link",
                        {
                          staticClass: "more",
                          attrs: {
                            to: {
                              name: "lang-news",
                            },
                          },
                          nativeOn: {
                            click: function (newsMoreClickEvent) {
                              return newsVm.handleMoreClick.apply(null, arguments);
                            },
                          },
                        },
                        [
                          newsH(
                            "div",
                            {
                              staticClass: "more-btn",
                            },
                            [newsVm._v(newsVm._s(newsVm.$getI18nWord("learnMore")))],
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
    HomeNews = homeNewsComponent.exports,
    homeFeatureOptions = {
      components: {
        pageTab: pageTabModule.a,
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
        var featureCreatedSelf = this;
        return Object(vendorBundle2.a)(
          regeneratorRuntime.mark(function featureCreatedGenerator() {
            var featureListHead;
            return regeneratorRuntime.wrap(function (featureCreatedContext) {
              for (;;)
                switch ((featureCreatedContext.prev = featureCreatedContext.next)) {
                  case 0:
                    ((featureListHead = Object(vendorBundle.a)(featureCreatedSelf.featureList, 1)),
                      (featureCreatedSelf.activeFeature = featureListHead[0]));
                  case 2:
                  case "end":
                    return featureCreatedContext.stop();
                }
            }, featureCreatedGenerator);
          }),
        )();
      },
      methods: {
        handleSlideChange: function () {
          var featureRealIndex = this.$refs.homeFeatureSwiper.swiper.realIndex;
          ((this.activeFeature = this.featureList[featureRealIndex]),
            this.$trackButton("features_pics", "".concat(this.activeFeature.iInfoId)));
        },
        handleNavigatorUpload: function () {
          this.$trackButton("features_next", "");
        },
      },
    },
    HomeFeature =
      (webpackRequire(1369),
      Object(componentNormalizer.a)(
        homeFeatureOptions,
        function () {
          var featureVm = this,
            featureH = featureVm._self._c;
          return featureH(
            "div",
            {
              staticClass: "home-feature",
            },
            [
              featureH("pageTab", {
                attrs: {
                  "nav-num": 6,
                  size: "lg",
                },
              }),
              featureVm._v(" "),
              featureH(
                "div",
                {
                  staticClass: "home-feature__swiper",
                },
                [
                  featureH(
                    "swiper",
                    {
                      ref: "homeFeatureSwiper",
                      staticClass: "home-feature__list",
                      attrs: {
                        options: featureVm.swiperOption,
                      },
                      on: {
                        slideChange: featureVm.handleSlideChange,
                      },
                    },
                    featureVm._l(featureVm.featureList, function (feature) {
                      return featureH(
                        "swiper-slide",
                        {
                          key: feature.id,
                          staticClass: "home-feature__list-item",
                        },
                        [
                          featureH(
                            "div",
                            {
                              staticClass: "home-feature__banner",
                            },
                            [
                              featureH("img", {
                                attrs: {
                                  src: feature.banner,
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
                  featureVm._v(" "),
                  featureH(
                    "div",
                    {
                      staticClass: "swiper-navigation",
                    },
                    [
                      featureH("div", {
                        staticClass: "swiper-button-prev feat-swiper-button-prev",
                        attrs: {
                          slot: "button-prev",
                        },
                        slot: "button-prev",
                      }),
                      featureVm._v(" "),
                      featureH("div", {
                        staticClass: "swiper-button-next feat-swiper-button-next",
                        attrs: {
                          slot: "button-next",
                        },
                        slot: "button-next",
                      }),
                    ],
                  ),
                  featureVm._v(" "),
                  featureVm.activeFeature
                    ? featureH(
                        "div",
                        {
                          staticClass: "home-feature__info",
                        },
                        [
                          featureH("div", {
                            staticClass: "home-feature__info-bar",
                          }),
                          featureVm._v(" "),
                          featureH("div", {
                            staticClass: "home-feature__info-title ellipsis",
                            domProps: {
                              innerHTML: featureVm._s(featureVm.activeFeature.title),
                            },
                          }),
                          featureVm._v(" "),
                          featureH("div", {
                            staticClass: "home-feature__info-summary ellipsis",
                            domProps: {
                              innerHTML: featureVm._s(featureVm.activeFeature.summary),
                            },
                          }),
                        ],
                      )
                    : featureVm._e(),
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
    homeWorldOptions = {
      components: {
        pageTab: pageTabModule.a,
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
        handlePicClick: function (clickedWorld) {
          this.$trackButton("file_pics", "".concat(clickedWorld.iInfoId));
        },
        handleNavigatorUpload: function () {
          this.$trackButton("file_next", "");
        },
      },
    },
    homeWorldComponentOptions = homeWorldOptions,
    HomeWorld =
      (webpackRequire(1373),
      Object(componentNormalizer.a)(
        homeWorldComponentOptions,
        function () {
          var worldVm = this,
            worldH = worldVm._self._c;
          return worldH(
            "div",
            {
              staticClass: "home-world",
            },
            [
              worldH(
                "div",
                {
                  staticClass: "home-world-wrap",
                },
                [
                  worldH("pageTab", {
                    attrs: {
                      "nav-num": 5,
                      size: "lg",
                    },
                  }),
                  worldVm._v(" "),
                  worldH(
                    "div",
                    {
                      staticClass: "home-world__banner",
                    },
                    [
                      worldH(
                        "client-only",
                        [
                          worldVm.worldList && worldVm.worldList.length
                            ? worldH(
                                "swiper",
                                {
                                  ref: "homeWorldSwiper",
                                  staticClass: "home-world__banner-list",
                                  class: {
                                    "swiper-no-swiping": worldVm.worldList.length <= 1,
                                  },
                                  attrs: {
                                    options: worldVm.swiperOption,
                                  },
                                },
                                [
                                  worldVm._l(worldVm.worldList, function (bannerWorld) {
                                    return worldH(
                                      "swiper-slide",
                                      {
                                        key: bannerWorld.id,
                                        staticClass: "home-world__banner-item",
                                      },
                                      [
                                        worldH(
                                          "nuxt-link",
                                          {
                                            staticClass: "home-world__banner-img",
                                            attrs: {
                                              to: {
                                                name: "lang-world",
                                                params: {
                                                  worldId: bannerWorld.iInfoId,
                                                },
                                              },
                                            },
                                            nativeOn: {
                                              click: function (worldBannerClickEvent) {
                                                return worldVm.handlePicClick(bannerWorld);
                                              },
                                            },
                                          },
                                          [
                                            worldH("img", {
                                              attrs: {
                                                src: bannerWorld.homeBanner,
                                                alt: "world-banner",
                                              },
                                            }),
                                          ],
                                        ),
                                      ],
                                      1,
                                    );
                                  }),
                                  worldVm._v(" "),
                                  worldH("div", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: worldVm.worldList.length > 1,
                                        expression: " worldList.length > 1",
                                      },
                                    ],
                                    staticClass: "swiper-button-prev",
                                    attrs: {
                                      slot: "button-prev",
                                    },
                                    on: {
                                      click: worldVm.handleNavigatorUpload,
                                    },
                                    slot: "button-prev",
                                  }),
                                  worldVm._v(" "),
                                  worldH("div", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: worldVm.worldList.length > 1,
                                        expression: "worldList.length > 1",
                                      },
                                    ],
                                    staticClass: "swiper-button-next",
                                    attrs: {
                                      slot: "button-next",
                                    },
                                    on: {
                                      click: worldVm.handleNavigatorUpload,
                                    },
                                    slot: "button-next",
                                  }),
                                ],
                                2,
                              )
                            : worldH(
                                "div",
                                {
                                  staticClass: "home-world__banner-empty",
                                },
                                [
                                  worldH("img", {
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
              worldVm._v(" "),
              worldH("client-only", [
                worldH(
                  "div",
                  {
                    staticClass: "section__concept",
                  },
                  [
                    worldH("div", {
                      staticClass: "section__concept-bg",
                    }),
                    worldVm._v(" "),
                    worldH(
                      "a",
                      {
                        attrs: {
                          href: worldVm.conceptUrl,
                          target: "_blank",
                        },
                      },
                      [
                        worldH(
                          "div",
                          {
                            staticClass: "section__concept-title",
                          },
                          [
                            worldH(
                              "div",
                              {
                                staticClass: "section__concept-title-content",
                              },
                              [
                                worldH("div", {
                                  staticClass: "section__concept-title-label",
                                  domProps: {
                                    innerHTML: worldVm._s(worldVm.$getI18nWord("conceptTitle")),
                                  },
                                }),
                                worldVm._v(" "),
                                worldH(
                                  "div",
                                  {
                                    staticClass: "section__concept-title-sub",
                                  },
                                  [worldVm._v(worldVm._s(worldVm.$getI18nWord("conceptSubtitle")))],
                                ),
                              ],
                            ),
                          ],
                        ),
                        worldVm._v(" "),
                        worldH("div", {
                          staticClass: "section__concept-icon",
                        }),
                        worldVm._v(" "),
                        worldH(
                          "div",
                          {
                            staticClass: "section__concept-video",
                            on: {
                              click: worldVm.toggleTv,
                            },
                          },
                          [
                            worldH(
                              "div",
                              {
                                staticClass: "section__concept-video-mp4",
                              },
                              [
                                worldH("img", {
                                  attrs: {
                                    src: worldVm.$getI18nWord("conceptVideo"),
                                    alt: "",
                                  },
                                }),
                              ],
                            ),
                            worldVm._v(" "),
                            worldH("div", {
                              staticClass: "section__concept-video-tv",
                            }),
                            worldVm._v(" "),
                            worldH("div", {
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
    homeVideoOptions = {
      components: {
        pageTab: pageTabModule.a,
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
          var videoChannelId = this.currentVideo.sChanId && this.currentVideo.sChanId[0];
          return videoCMSAPI.a.getCateDisplayName(
            videoChannelId,
            this.videoCates,
            this.$store.getters.videoMainChanName,
          );
        },
      },
      watch: {
        videoList: function (newVideoList) {
          var videoWatchSelf = this;
          (this.activeIndex > newVideoList.length - 1 && (this.activeIndex = 0),
            this.$nextTick(function () {
              (videoWatchSelf.measureNav(), videoWatchSelf.updateNavTranslate());
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
        var videoMountedSelf = this;
        (this.$nextTick(function () {
          (videoMountedSelf.measureNav(), videoMountedSelf.updateNavTranslate());
        }),
          (this.handleResize = lodashDebounceDefault()(function () {
            (videoMountedSelf.measureNav(), videoMountedSelf.updateNavTranslate());
          }, 200)),
          window.addEventListener("resize", this.handleResize));
      },
      beforeDestroy: function () {
        this.handleResize && window.removeEventListener("resize", this.handleResize);
      },
      methods: {
        handleVideoNavClick: function (navVideoIndex) {
          this.goTo(navVideoIndex);
        },
        goTo: function (gotoIndex) {
          var goToSelf = this;
          gotoIndex < 0 ||
            gotoIndex > this.videoList.length - 1 ||
            (this.$refs.mainSwiper && this.$refs.mainSwiper.swiper.slideTo(gotoIndex),
            (this.activeIndex = gotoIndex),
            this.$nextTick(function () {
              return goToSelf.updateNavTranslate();
            }));
        },
        measureNav: function () {
          var track = this.$refs.navTrack;
          if (track) {
            var navItems = track.children;
            if (!navItems || !navItems.length) return ((this.navStep = 0), void (this.navContentWidth = 0));
            var sampleNavItem = navItems[navItems.length > 1 ? 1 : 0];
            ((this.navStep =
              sampleNavItem.getBoundingClientRect().width +
              (parseFloat(getComputedStyle(sampleNavItem).marginRight) || 0)),
              (this.navContentWidth = track.scrollWidth));
          }
        },
        updateNavTranslate: function () {
          var navWrapEl = this.$refs.navWrap;
          if (navWrapEl && this.navStep) {
            var maxTranslate = Math.max(0, this.navContentWidth - navWrapEl.clientWidth),
              translateDistance = Math.min(this.activeIndex * this.navStep, maxTranslate);
            this.navTx = -translateDistance;
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
          var playerSelf = this,
            dialogInfo = this.getVideoDialogInfo(video);
          dialogInfo &&
            (this.$store.commit("muteBgm", !0),
            this.$openDialog(videoDialogComponent.a, {
              transitionType: "scale",
              zIndex: 100,
              maskClose: !0,
              bgOpacity: 0.8,
              closeCb: function () {
                playerSelf.$store.commit("muteBgm", !1);
              },
              dialogInfo: dialogInfo,
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
    homeVideoComponent =
      (webpackRequire(1384),
      Object(componentNormalizer.a)(
        homeVideoOptions,
        function () {
          var videoVm = this,
            videoH = videoVm._self._c;
          return videoH(
            "div",
            {
              staticClass: "home-video",
            },
            [
              videoH("pageTab", {
                attrs: {
                  "nav-num": 3,
                  direction: "right",
                },
              }),
              videoVm._v(" "),
              videoH(
                "div",
                {
                  staticClass: "home-video__content",
                },
                [
                  videoH(
                    "swiper",
                    {
                      ref: "mainSwiper",
                      staticClass: "home-video__main",
                      attrs: {
                        options: videoVm.swiperOption,
                      },
                    },
                    videoVm._l(videoVm.videoList, function (video) {
                      return videoH(
                        "swiper-slide",
                        {
                          key: video.id,
                          staticClass: "home-video__main-item",
                          nativeOn: {
                            click: function (videoSlideClickEvent) {
                              return videoVm.openPlayer(video);
                            },
                          },
                        },
                        [
                          videoH("img", {
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
                  videoVm._v(" "),
                  videoH(
                    "div",
                    {
                      staticClass: "home-video__action",
                    },
                    [
                      videoH("img", {
                        staticClass: "home-video__action-icon",
                        attrs: {
                          src: webpackRequire(1377),
                          alt: "",
                        },
                        on: {
                          click: function (playIconClickEvent) {
                            return videoVm.openPlayer(videoVm.currentVideo);
                          },
                        },
                      }),
                      videoVm._v(" "),
                      videoH(
                        "nuxt-link",
                        {
                          staticClass: "more",
                          attrs: {
                            to: {
                              name: "lang-video",
                              query: videoVm.$route.query,
                            },
                          },
                          nativeOn: {
                            click: function (videoMoreClickEvent) {
                              return videoVm.handleMoreClick.apply(null, arguments);
                            },
                          },
                        },
                        [
                          videoH(
                            "div",
                            {
                              staticClass: "more-btn",
                            },
                            [videoVm._v(videoVm._s(videoVm.$getI18nWord("learnMore")))],
                          ),
                        ],
                      ),
                    ],
                    1,
                  ),
                  videoVm._v(" "),
                  videoH(
                    "div",
                    {
                      staticClass: "home-video__list",
                    },
                    [
                      videoH(
                        "div",
                        {
                          staticClass: "home-video__summary",
                          on: {
                            click: function (summaryClickEvent) {
                              return videoVm.openPlayer(videoVm.currentVideo);
                            },
                          },
                        },
                        [
                          videoH(
                            "div",
                            {
                              staticClass: "home-video__summary-item",
                            },
                            [
                              videoVm.currentVideoCateName
                                ? videoH(
                                    "span",
                                    {
                                      staticClass: "home-video__summary-category",
                                    },
                                    [
                                      videoVm._v(
                                        "\n            " +
                                          videoVm._s(videoVm.currentVideoCateName) +
                                          "\n          ",
                                      ),
                                    ],
                                  )
                                : videoVm._e(),
                              videoVm._v(" "),
                              videoH(
                                "span",
                                {
                                  staticClass: "home-video__summary-date",
                                },
                                [videoVm._v(videoVm._s(videoVm.currentVideo.dateFormat))],
                              ),
                            ],
                          ),
                          videoVm._v(" "),
                          videoH(
                            "div",
                            {
                              staticClass: "home-video__summary-title",
                            },
                            [
                              videoVm._v(
                                "\n          " + videoVm._s(videoVm.currentVideo.title) + "\n        ",
                              ),
                            ],
                          ),
                        ],
                      ),
                      videoVm._v(" "),
                      videoH(
                        "div",
                        {
                          staticClass: "home-video__nav-container",
                        },
                        [
                          videoH(
                            "div",
                            {
                              ref: "navWrap",
                              staticClass: "home-video__nav",
                            },
                            [
                              videoH(
                                "div",
                                {
                                  ref: "navTrack",
                                  staticClass: "home-video__nav-track",
                                  style: {
                                    transform: "translateX(".concat(videoVm.navTx, "px)"),
                                  },
                                },
                                videoVm._l(videoVm.videoList, function (video, thumbVideoIndex) {
                                  return videoH(
                                    "div",
                                    {
                                      key: video.id,
                                      staticClass: "home-video__nav-item",
                                      class: {
                                        "is-active": videoVm.activeIndex === thumbVideoIndex,
                                      },
                                      on: {
                                        click: function (thumbVideoClickEvent) {
                                          return videoVm.handleVideoNavClick(thumbVideoIndex);
                                        },
                                      },
                                    },
                                    [
                                      videoH("img", {
                                        attrs: {
                                          src: video.cover,
                                          alt: "",
                                        },
                                      }),
                                      videoVm._v(" "),
                                      videoH("div", {
                                        staticClass: "home-video__nav-mask",
                                      }),
                                    ],
                                  );
                                }),
                                0,
                              ),
                            ],
                          ),
                          videoVm._v(" "),
                          videoH(
                            "div",
                            {
                              staticClass: "swiper-navigation",
                            },
                            [
                              videoH("div", {
                                staticClass: "swiper-button-prev",
                                class: {
                                  "swiper-button-disabled": !videoVm.canSlidePrev,
                                },
                                on: {
                                  click: videoVm.handlePrev,
                                },
                              }),
                              videoVm._v(" "),
                              videoH("div", {
                                staticClass: "swiper-button-next",
                                class: {
                                  "swiper-button-disabled": !videoVm.canSlideNext,
                                },
                                on: {
                                  click: videoVm.handleNext,
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
  function ownKeys2(object, enumerableOnly2) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols2 = Object.getOwnPropertySymbols(object);
      (enumerableOnly2 &&
        (symbols2 = symbols2.filter(function (symbol2) {
          return Object.getOwnPropertyDescriptor(object, symbol2).enumerable;
        })),
        keys2.push.apply(keys2, symbols2));
    }
    return keys2;
  }
  function objectSpread2(target2) {
    for (var argIndex2 = 1; argIndex2 < arguments.length; argIndex2++) {
      var source = null != arguments[argIndex2] ? arguments[argIndex2] : {};
      argIndex2 % 2
        ? ownKeys2(Object(source), !0).forEach(function (key2) {
            Object(definePropertyHelper.a)(target2, key2, source[key2]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source))
          : ownKeys2(Object(source)).forEach(function (descriptorKey2) {
              Object.defineProperty(
                target2,
                descriptorKey2,
                Object.getOwnPropertyDescriptor(source, descriptorKey2),
              );
            });
    }
    return target2;
  }
  var indexPageOptions = {
      name: "index",
      layout: "default",
      scrollToTop: !1,
      components: {
        sideBar: Sidebar,
        kv: HomeKv,
        newsSlider: HomeNews,
        charaSection: HomeCharacter,
        featureSection: HomeFeature,
        worldSection: HomeWorld,
        videoSection: homeVideoComponent.exports,
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
          var loadingWatchSelf = this;
          setTimeout(function () {
            loadingWatchSelf.registerTrigger();
          }, 400);
        },
        activePageIndex: {
          immediate: !0,
          handler: function (pageIndex) {
            this.$trackEvent("Page", "enter", "", pageIndex);
          },
        },
      },
      asyncData: function (nuxtContext) {
        return Object(vendorBundle2.a)(
          regeneratorRuntime.mark(function asyncDataGenerator() {
            var store,
              langParams,
              responses,
              responseList,
              kvResRaw,
              kvRes,
              sliderNewsRaw,
              sliderNewsRes,
              characterResRaw,
              characterRes,
              featureResRaw,
              featureRes,
              worldResRaw,
              worldRes,
              videoResRaw,
              videoRes,
              videoCatesRaw,
              videoCatesRes,
              parsedVideoCates,
              videoChildCates,
              homeNewsList,
              newsRes;
            return regeneratorRuntime.wrap(function (context) {
              for (;;)
                switch ((context.prev = context.next)) {
                  case 0:
                    return (
                      (store = nuxtContext.store),
                      (langParams = {
                        sLangKey: store.state.lang,
                      }),
                      (context.next = 4),
                      Promise.all([
                        homeContentApi.a.getKV({
                          data: langParams,
                        }),
                        newsCMSAPI.a.getSliderNews({
                          data: langParams,
                        }),
                        characterAndCampCMSAPI.a.getAllCharacter({
                          data: langParams,
                        }),
                        homeContentApi.a.getFeature({
                          data: langParams,
                        }),
                        worldCMSAPI.a.getWorldList({
                          data: langParams,
                        }),
                        videoCMSAPI.a.getHomeVideoList({
                          data: langParams,
                        }),
                        videoCMSAPI.a.getCates({
                          data: langParams,
                        }),
                      ])
                    );
                  case 4:
                    return (
                      (responses = context.sent),
                      (responseList = Object(vendorBundle.a)(responses, 7)),
                      (kvResRaw = responseList[0]),
                      (kvRes = void 0 === kvResRaw ? {} : kvResRaw),
                      (sliderNewsRaw = responseList[1]),
                      (sliderNewsRes = void 0 === sliderNewsRaw ? {} : sliderNewsRaw),
                      (characterResRaw = responseList[2]),
                      (characterRes = void 0 === characterResRaw ? {} : characterResRaw),
                      (featureResRaw = responseList[3]),
                      (featureRes = void 0 === featureResRaw ? {} : featureResRaw),
                      (worldResRaw = responseList[4]),
                      (worldRes = void 0 === worldResRaw ? {} : worldResRaw),
                      (videoResRaw = responseList[5]),
                      (videoRes = void 0 === videoResRaw ? {} : videoResRaw),
                      (videoCatesRaw = responseList[6]),
                      (videoCatesRes = void 0 === videoCatesRaw ? {} : videoCatesRaw),
                      (parsedVideoCates = videoCMSAPI.a.parseCatesFromRes(videoCatesRes)),
                      (videoChildCates = parsedVideoCates.children),
                      store.commit("setVideoCates", videoChildCates),
                      store.commit("setVideoMainChanName", videoCatesRes.mainChanName || ""),
                      (homeNewsList = sliderNewsRes.list
                        .filter(function (newsEntry) {
                          return !newsEntry.sExt["news-self-path"];
                        })
                        .slice(0, 6)),
                      (newsRes = objectSpread2(
                        objectSpread2({}, sliderNewsRes),
                        {},
                        {
                          list: homeNewsList,
                        },
                      )),
                      context.abrupt("return", {
                        kvRes: kvRes,
                        newsRes: newsRes,
                        characterRes: characterRes,
                        featureRes: featureRes,
                        worldRes: worldRes,
                        videoRes: videoRes,
                      })
                    );
                  case 26:
                  case "end":
                    return context.stop();
                }
            }, asyncDataGenerator);
          }),
        )();
      },
      mounted: function () {
        var mountedSelf = this;
        (this.$store.commit("setHomeSection", mi18nModule.e[this.activePageIndex].link),
          this.isLoading || this.registerTrigger(),
          setTimeout(function () {
            ((mountedSelf.needUpdate = !0), mountedSelf.updateActiveIndexFromScroll());
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
            ((mountedSelf.scrollTop = document.body.scrollTop || document.documentElement.scrollTop),
              mountedSelf.scrollRafId ||
                (mountedSelf.scrollRafId = requestAnimationFrame(function () {
                  ((mountedSelf.scrollRafId = null), mountedSelf.updateActiveIndexFromScroll());
                })));
          }),
          window.addEventListener("scroll", this.onHomeScroll, {
            passive: !0,
          }));
      },
      beforeDestroy: function () {
        ((this.activePageIndex = 0),
          (this.currentIndex = 0),
          this.$ScrollTrigger.getAll().forEach(function (scrollTriggerInstance) {
            return scrollTriggerInstance.disable();
          }),
          this.$store.commit("setHomeScroll", this.scrollTop),
          this.scrollRafId && cancelAnimationFrame(this.scrollRafId),
          window.removeEventListener("scroll", this.onHomeScroll));
      },
      methods: {
        getActiveSectionIndex: function (scrollPosition) {
          var sections = this.$gsap.utils.toArray(".section");
          if (!sections.length) return 0;
          for (
            var probeY = scrollPosition + 0.5 * window.innerHeight,
              lastSectionIndex = sections.length - 1,
              sectionIdx = lastSectionIndex;
            sectionIdx >= 0;
            sectionIdx--
          ) {
            var sectionTop = sections[sectionIdx].offsetTop,
              sectionBottom = sectionTop + sections[sectionIdx].offsetHeight;
            if (probeY >= sectionTop && probeY < sectionBottom) return sectionIdx;
          }
          return probeY >= sections[lastSectionIndex].offsetTop ? lastSectionIndex : 0;
        },
        setActivePageIndex: function (nextPageIndex) {
          this.activePageIndex !== nextPageIndex &&
            ((this.activePageIndex = nextPageIndex),
            this.$store.commit("setHomeSection", mi18nModule.e[nextPageIndex].link));
        },
        updateActiveIndexFromScroll: function () {
          if (this.needUpdate && !this.isProgrammaticScroll) {
            var currentScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            this.setActivePageIndex(this.getActiveSectionIndex(currentScrollTop));
          }
        },
        slideTo: function (targetSectionIndex) {
          var slideSelf = this,
            scrollTarget = 0;
          if (targetSectionIndex) {
            var sectionLink = mi18nModule.e[targetSectionIndex].link;
            scrollTarget = document.querySelector(".section-".concat(sectionLink));
          }
          ((this.isProgrammaticScroll = !0),
            (this.activePageIndex = targetSectionIndex),
            this.$store.commit("setHomeSection", mi18nModule.e[targetSectionIndex].link),
            this.$gsap.to(window, {
              scrollTo: {
                y: scrollTarget,
                autoKill: !1,
              },
              duration: 0.65,
              ease: "Power2.easeOut",
              onComplete: function () {
                slideSelf.isProgrammaticScroll = !1;
                var settledScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                slideSelf.setActivePageIndex(slideSelf.getActiveSectionIndex(settledScrollTop));
              },
            }));
        },
        registerTrigger: function () {
          var triggerSelf = this;
          this.$gsap.utils.toArray(".section").forEach(function (section, sectionIndex) {
            var sectionTimeline = triggerSelf.$gsap.timeline({
              scrollTrigger: {
                trigger: section,
                id: "section".concat(sectionIndex),
                toggleActions: "play none resume reset",
                start: 0 === sectionIndex ? "top top" : "top bottom-=120",
                end: function (endTrigger) {
                  return "section0" === endTrigger.vars.id ? "" : "-=40";
                },
                onUpdate: function (updateTrigger) {
                  var sectionId = updateTrigger.vars.id.replace("section", "");
                  if (mi18nModule.f[sectionId]) {
                    var progress = Math.min(1.3 * updateTrigger.progress.toFixed(3), 1);
                    mi18nModule.f[sectionId].forEach(function (animItem) {
                      var animElement = animItem.ele;
                      animItem.attr.forEach(function (animAttr) {
                        var attrName = animAttr.name,
                          attrStart = animAttr.start,
                          attrRange = animAttr.end - attrStart;
                        triggerSelf.$gsap.set(
                          animElement,
                          Object(definePropertyHelper.a)({}, attrName, attrStart + attrRange * progress),
                        );
                      });
                    });
                  }
                },
              },
              defaults: {
                ease: "power2.easeIn",
              },
            });
            (sectionIndex % 2
              ? sectionTimeline
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
              : sectionTimeline
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
              1 === sectionIndex &&
                sectionTimeline
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
              3 === sectionIndex &&
                sectionTimeline.fromTo(
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
              4 === sectionIndex &&
                sectionTimeline.fromTo(
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
              5 === sectionIndex &&
                sectionTimeline
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
    indexComponent =
      (webpackRequire(1392),
      Object(componentNormalizer.a)(
        indexPageOptions,
        function () {
          var vm = this,
            h = vm._self._c;
          return h(
            "div",
            {
              staticClass: "home",
            },
            [
              h("sideBar", {
                attrs: {
                  "nav-index": vm.activePageIndex,
                },
                on: {
                  toSection: vm.slideTo,
                },
              }),
              vm._v(" "),
              h(
                "div",
                {
                  staticClass: "section-wrap",
                },
                [
                  h(
                    "section",
                    {
                      staticClass: "section section-index",
                    },
                    [
                      h(
                        "transition",
                        {
                          attrs: {
                            name: "slide-left",
                            appear: "",
                          },
                        },
                        [
                          h(
                            "div",
                            {
                              staticClass: "fill fill-bg",
                            },
                            [
                              h("img", {
                                attrs: {
                                  src: webpackRequire(1340),
                                  alt: "",
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                      vm._v(" "),
                      h(
                        "transition",
                        {
                          attrs: {
                            name: "slide-down",
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
                                  value: !vm.isLoading,
                                  expression: "!isLoading",
                                },
                              ],
                              staticClass: "fill fill-text",
                            },
                            [
                              h("img", {
                                attrs: {
                                  src: webpackRequire(1341),
                                  alt: "",
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                      vm._v(" "),
                      h("kv", {
                        attrs: {
                          "kv-res": vm.kvRes,
                          "trigger-anim": !vm.isLoading,
                        },
                      }),
                    ],
                    1,
                  ),
                  vm._v(" "),
                  h(
                    "section",
                    {
                      staticClass: "section section-character",
                    },
                    [
                      h(
                        "transition",
                        {
                          attrs: {
                            name: "slide-from-rb",
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
                                  value: !vm.isLoading,
                                  expression: "!isLoading",
                                },
                              ],
                              staticClass: "fill fill-black-right fill-black-right-character",
                            },
                            [
                              h("img", {
                                staticClass: "fill-black-bar",
                                attrs: {
                                  src: webpackRequire(1342),
                                  alt: "",
                                },
                              }),
                              vm._v(" "),
                              h("img", {
                                attrs: {
                                  src: webpackRequire(1343),
                                  alt: "",
                                },
                              }),
                            ],
                          ),
                        ],
                      ),
                      vm._v(" "),
                      vm._m(0),
                      vm._v(" "),
                      h("chara-section", {
                        attrs: {
                          "character-res": vm.characterRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  vm._v(" "),
                  h(
                    "section",
                    {
                      staticClass: "section section-video",
                    },
                    [
                      h("video-section", {
                        attrs: {
                          "video-res": vm.videoRes,
                        },
                      }),
                      vm._v(" "),
                      h("div", {
                        staticClass: "fill-film-bar",
                      }),
                      vm._v(" "),
                      h("img", {
                        staticClass: "fill-black-bar-video",
                        attrs: {
                          src: webpackRequire(1216),
                          alt: "",
                        },
                      }),
                    ],
                    1,
                  ),
                  vm._v(" "),
                  h(
                    "section",
                    {
                      staticClass: "section section-news",
                    },
                    [
                      h("news-slider", {
                        attrs: {
                          "news-res": vm.newsRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  vm._v(" "),
                  h(
                    "section",
                    {
                      staticClass: "section section-world",
                    },
                    [
                      h("world-section", {
                        attrs: {
                          "world-res": vm.worldRes,
                        },
                      }),
                    ],
                    1,
                  ),
                  vm._v(" "),
                  h(
                    "section",
                    {
                      staticClass: "section section-feature",
                    },
                    [
                      h("img", {
                        staticClass: "fill-black-bar-feature",
                        attrs: {
                          src: webpackRequire(1216),
                          alt: "",
                        },
                      }),
                      vm._v(" "),
                      h("feature-section", {
                        attrs: {
                          "feature-res": vm.featureRes,
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
        homeStaticRenderFns,
        !1,
        null,
        null,
        null,
      ));
  webpackExports.default = indexComponent.exports;
};
