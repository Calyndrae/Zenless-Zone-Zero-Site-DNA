// base mixin (seo head, mi18n words, user info) — module 251 from 8c4c131
// module 251 from 8c4c131.js
// deps: 32, 98, 28, 36
const module_251 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(32),
    l_1 = (webpackRequire(98), webpackRequire(28)),
    r_2 = {
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
          set: function (t_3) {
            this.$store.commit("setUserInfo", t_3);
          },
        },
        baseInfo: {
          get: function () {
            return this.$store.state.baseInfo;
          },
          set: function (t_4) {
            this.$store.commit("setBaseInfo", t_4);
          },
        },
        environment: function () {
          return l_1.environment;
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
          var t_5 = this;
          return Object(vendorBundle.a)(
            regeneratorRuntime.mark(function e_6() {
              return regeneratorRuntime.wrap(
                function (e_7) {
                  for (;;)
                    switch ((e_7.prev = e_7.next)) {
                      case 0:
                        return ((e_7.prev = 0), (e_7.next = 3), t_5.$accountRoleUtil.logout());
                      case 3:
                        return (
                          (e_7.prev = 3),
                          (t_5.userInfo = ""),
                          t_5.$trackEvent("AppointPage", "Click", "SDK_Logout", ""),
                          window.location.reload(),
                          e_7.finish(3)
                        );
                      case 8:
                      case "end":
                        return e_7.stop();
                    }
                },
                e_6,
                null,
                [[0, , 3, 8]],
              );
            }),
          )();
        },
        onLogin: function (t_8) {
          var e_9 = t_8.isLogin,
            n_10 = t_8.userInfo;
          ((this.userInfo = e_9 ? n_10 : ""), (this.canClick = !0));
        },
        handleError: function (t_11) {
          var e_12 = "";
          ((e_12 =
            t_11 && t_11.data && t_11.data.retcode ? t_11.data.message : this.$getI18nWord["code-500"]),
            this.$mtoast(e_12));
        },
      },
    },
    vendorBundle2 = webpackRequire(36),
    component = Object(vendorBundle2.a)(r_2, undefined, undefined, !1, null, null, null);
  webpackExports.a = component.exports;
};
