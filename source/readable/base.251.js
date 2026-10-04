/**
 * base — readable reconstruction of webpack module 251 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Renderless `base` Vue mixin component shared by page components. It exposes computed accessors over the Vuex store (`baseConfig`, `lang`, `mi18n`, `userInfo` with the `setUserInfo` mutation, `baseInfo` with the `setBaseInfo` mutation) and the build `environment` from the env config module, and methods: `getWelcomeText` (picks welcome survey/submit/detail i18n texts from `baseInfo.survey_flag`/`reserve_flag`), an async `logout` (calls `$accountRoleUtil.logout()`, clears userInfo, tracks `SDK_Logout` via `$trackEvent`, reloads the page), `onLogin` (stores user info and enables `canClick`) and `handleError` (toasts the API `message` or the `code-500` i18n text via `$mtoast`).
 *
 * Exports (minified key → meaning):
 *   a → the base mixin Vue component (normalized component exports, no render function)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 251 from 8c4c131.js
// deps: 32, 98, 28, 36
const module_251 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(32),
    envConfig = (webpackRequire(98), webpackRequire(28)),
    baseOptions = {
      name: "base",
      data: function () {
        return {
          device_id: "",
          canClick: !1,
        };
      },
      computed: {
        baseConfig: function () {
          return this.$store.state.baseConfig;
        },
        lang: function () {
          return this.$store.state.lang;
        },
        mi18n: function () {
          return this.$store.state.mi18n;
        },
        userInfo: {
          get: function () {
            return this.$store.state.userInfo;
          },
          set: function (userInfoValue) {
            this.$store.commit("setUserInfo", userInfoValue);
          },
        },
        baseInfo: {
          get: function () {
            return this.$store.state.baseInfo;
          },
          set: function (baseInfoValue) {
            this.$store.commit("setBaseInfo", baseInfoValue);
          },
        },
        environment: function () {
          return envConfig.environment;
        },
      },
      methods: {
        socialClick: function () {},
        getWelcomeText: function () {
          return this.baseInfo.survey_flag
            ? this.baseInfo.reserve_flag
              ? {
                  title: this.$getI18nWord("welcomeTitle"),
                  text: this.$getI18nWord("welcomeTextDetail"),
                  btn: this.$getI18nWord("welcomeBtnDetail"),
                }
              : {
                  title: this.$getI18nWord("welcomeTitle"),
                  text: this.$getI18nWord("welcomeTextSubmit"),
                  btn: this.$getI18nWord("welcomeBtnSubmit"),
                }
            : {
                title: this.$getI18nWord("welcomeTitle"),
                text: this.$getI18nWord("welcomeTextSurvey"),
                btn: this.$getI18nWord("welcomeBtnSurvey"),
              };
        },
        logout: function () {
          var self = this;
          return Object(vendorBundle.a)(
            regeneratorRuntime.mark(function logoutGenerator() {
              return regeneratorRuntime.wrap(
                function (context) {
                  for (;;)
                    switch ((context.prev = context.next)) {
                      case 0:
                        return ((context.prev = 0), (context.next = 3), self.$accountRoleUtil.logout());
                      case 3:
                        return (
                          (context.prev = 3),
                          (self.userInfo = ""),
                          self.$trackEvent("AppointPage", "Click", "SDK_Logout", ""),
                          window.location.reload(),
                          context.finish(3)
                        );
                      case 8:
                      case "end":
                        return context.stop();
                    }
                },
                logoutGenerator,
                null,
                [[0, , 3, 8]],
              );
            }),
          )();
        },
        onLogin: function (loginPayload) {
          var isLogin = loginPayload.isLogin,
            loggedInUserInfo = loginPayload.userInfo;
          ((this.userInfo = isLogin ? loggedInUserInfo : ""), (this.canClick = !0));
        },
        handleError: function (error) {
          var message = "";
          ((message =
            error && error.data && error.data.retcode ? error.data.message : this.$getI18nWord["code-500"]),
            this.$mtoast(message));
        },
      },
    },
    vendorBundle2 = webpackRequire(36),
    component = Object(vendorBundle2.a)(baseOptions, undefined, undefined, !1, null, null, null);
  webpackExports.a = component.exports;
};
