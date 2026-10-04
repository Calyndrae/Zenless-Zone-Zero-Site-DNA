// mi-ho-yo-pager-rich pagination component — module 1174 from fcdddd8
// module 1174 from fcdddd8.js
// deps: 556, 1169, 36
const module_1174 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire(556);
  var o_1 = {
      name: "mi-ho-yo-pager-rich",
      props: {
        totalPage: {
          type: Number,
          default: 1,
          required: !0,
        },
        showItems: {
          type: Number,
          default: 5,
        },
        showPrev: {
          type: Boolean,
          default: !0,
        },
        showNext: {
          type: Boolean,
          default: !0,
        },
        showJump: {
          type: Boolean,
          default: !0,
        },
        initPage: {
          type: Number,
          default: 1,
        },
        mode: {
          type: String,
          default: "event",
        },
        routeName: {
          type: String,
          default: "",
        },
        prevText: {
          type: String,
          default: "上一页",
        },
        nextText: {
          type: String,
          default: "下一页",
        },
        totalText: {
          type: Array,
          default: function () {
            return ["共", "页"];
          },
        },
        jumpText: {
          type: Array,
          default: function () {
            return ["跳至", "页", "确认"];
          },
        },
        pagerClass: {
          type: String,
          default: "",
        },
        simpleStyle: {
          type: Boolean,
          default: !1,
        },
      },
      data: function () {
        return {
          currentPage: this.initPage,
          jumpPage: this.initPage,
        };
      },
      computed: {
        pages: function () {
          var e_3 = this,
            t_4 = function (t_8, r_9) {
              ((t_8 <= 1 || t_8 > r_9 || t_8 >= e_3.totalPage) && (t_8 = 2),
                (r_9 >= e_3.totalPage || r_9 < t_8 || r_9 <= 1) && (r_9 = e_3.totalPage - 1));
              for (var o_10 = [], i_11 = t_8; i_11 <= r_9; i_11++) o_10.push(i_11);
              return o_10;
            },
            r_5 = this.showItems;
          if (this.totalPage < r_5 + 2) return t_4(2, this.totalPage);
          if (this.currentPage <= Math.ceil(r_5 / 2)) return t_4(2, r_5);
          if (this.currentPage >= this.totalPage - Math.floor(r_5 / 2))
            return t_4(this.totalPage + 1 - r_5, this.totalPage - 1);
          var o_6 = Math.ceil(r_5 / 2) - 1,
            n_7 = this.currentPage + o_6;
          return (r_5 % 2 == 0 && (n_7 += 1), t_4(this.currentPage - o_6, n_7));
        },
      },
      watch: {
        currentPage: function (e_12) {
          this.jumpPage = e_12;
        },
        initPage: function (e_13) {
          this.currentPage !== e_13 && (this.currentPage = e_13);
        },
      },
      created: function () {
        if (((this.currentPage = this.initPage), "params" === this.mode && !this.routeName))
          throw new Error("need a route name when choose params mode in pager component");
      },
      beforeMount: function () {},
      methods: {
        go: function (e_14) {
          if (
            (e_14 < 1 && (e_14 = 1),
            e_14 > this.totalPage && (e_14 = this.totalPage),
            e_14 !== this.currentPage)
          )
            if (((this.currentPage = parseInt(e_14, 10)), "query" === this.mode)) {
              var t_15 = this.$route.query;
              ((t_15.page = this.currentPage),
                this.$router.go({
                  query: t_15,
                }));
            } else if ("params" === this.mode) {
              var r_16 = this.$route.params;
              ((r_16.page = this.currentPage),
                this.$router.go({
                  name: this.routeName,
                  params: r_16,
                }));
            } else this.$emit("go", this.currentPage);
        },
      },
    },
    n_2 = (webpackRequire(1169), webpackRequire(36)),
    component = Object(n_2.a)(
      o_1,
      function () {
        var e_17 = this,
          t_18 = e_17._self._c;
        return e_17.totalPage > 0
          ? t_18(
              "div",
              {
                staticClass: "mihoyo-pager-rich",
                class: e_17.pagerClass,
              },
              [
                t_18(
                  "div",
                  {
                    staticClass: "mihoyo-pager-rich__pages",
                  },
                  [
                    t_18(
                      "a",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e_17.showPrev,
                            expression: "showPrev",
                          },
                        ],
                        staticClass: "mihoyo-pager-rich__prev",
                        class: {
                          "mihoyo-pager-rich__prev--simple": e_17.simpleStyle,
                        },
                        on: {
                          click: function (t_19) {
                            return e_17.go(e_17.currentPage - 1);
                          },
                        },
                      },
                      [e_17._v(e_17._s(e_17.prevText))],
                    ),
                    e_17._v(" "),
                    t_18(
                      "a",
                      {
                        class: [
                          "mihoyo-pager-rich__button",
                          1 == e_17.currentPage ? "mihoyo-pager-rich__current" : "",
                        ],
                        on: {
                          click: function (t_20) {
                            return e_17.go(1);
                          },
                        },
                      },
                      [e_17._v("1")],
                    ),
                    e_17._v(" "),
                    t_18(
                      "strong",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e_17.pages[0] > 2,
                            expression: "pages[0] > 2",
                          },
                        ],
                        staticClass: "mihoyo-pager-rich__ellipsis",
                      },
                      [e_17._v("...")],
                    ),
                    e_17._v(" "),
                    e_17._l(e_17.pages, function (r_21) {
                      return t_18(
                        "a",
                        {
                          key: r_21,
                          class: [
                            "mihoyo-pager-rich__button",
                            e_17.currentPage == r_21 ? "mihoyo-pager-rich__current" : "",
                          ],
                          on: {
                            click: function (t_22) {
                              return e_17.go(r_21);
                            },
                          },
                        },
                        [e_17._v(e_17._s(r_21))],
                      );
                    }),
                    e_17._v(" "),
                    t_18(
                      "strong",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e_17.pages[e_17.pages.length - 1] < e_17.totalPage - 1,
                            expression: "pages[pages.length-1] < totalPage - 1",
                          },
                        ],
                        staticClass: "mihoyo-pager-rich__ellipsis",
                      },
                      [e_17._v("...")],
                    ),
                    e_17._v(" "),
                    e_17.totalPage > 1
                      ? t_18(
                          "a",
                          {
                            class: [
                              "mihoyo-pager-rich__button",
                              e_17.currentPage == e_17.totalPage ? "mihoyo-pager-rich__current" : "",
                            ],
                            on: {
                              click: function (t_23) {
                                return e_17.go(e_17.totalPage);
                              },
                            },
                          },
                          [e_17._v(e_17._s(e_17.totalPage))],
                        )
                      : e_17._e(),
                    e_17._v(" "),
                    t_18(
                      "a",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e_17.showNext,
                            expression: "showNext",
                          },
                        ],
                        staticClass: "mihoyo-pager-rich__next",
                        class: {
                          "mihoyo-pager-rich__next--simple": e_17.simpleStyle,
                        },
                        on: {
                          click: function (t_24) {
                            return e_17.go(e_17.currentPage + 1);
                          },
                        },
                      },
                      [e_17._v(e_17._s(e_17.nextText))],
                    ),
                  ],
                  2,
                ),
                e_17._v(" "),
                !e_17.simpleStyle && e_17.showJump && e_17.totalPage > 1
                  ? t_18(
                      "div",
                      {
                        staticClass: "mihoyo-pager-rich__jump",
                      },
                      [
                        t_18(
                          "div",
                          {
                            staticClass: "mihoyo-pager-rich__text",
                          },
                          [
                            e_17._v("\n      " + e_17._s(e_17.totalText[0]) + "\n      "),
                            t_18(
                              "em",
                              {
                                staticClass: "mihoyo-pager-rich__total",
                              },
                              [e_17._v(e_17._s(e_17.totalPage))],
                            ),
                            e_17._v(" "),
                            t_18("span", [
                              e_17._v(e_17._s(e_17.totalText[1]) + ", " + e_17._s(e_17.jumpText[0])),
                            ]),
                          ],
                        ),
                        e_17._v(" "),
                        t_18("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e_17.jumpPage,
                              expression: "jumpPage",
                            },
                          ],
                          staticClass: "mihoyo-pager-rich__input",
                          attrs: {
                            max: e_17.totalPage,
                            type: "number",
                            min: "1",
                          },
                          domProps: {
                            value: e_17.jumpPage,
                          },
                          on: {
                            input: function (t_25) {
                              t_25.target.composing || (e_17.jumpPage = t_25.target.value);
                            },
                          },
                        }),
                        e_17._v(" "),
                        "" !== e_17.jumpText[1]
                          ? t_18("span", [e_17._v(e_17._s(e_17.jumpText[1]))])
                          : e_17._e(),
                        e_17._v(" "),
                        t_18(
                          "a",
                          {
                            staticClass: "mihoyo-pager-rich__button mihoyo-pager-rich__go",
                            on: {
                              click: function (t_26) {
                                return e_17.go(e_17.jumpPage);
                              },
                            },
                          },
                          [e_17._v(e_17._s(e_17.jumpText[2]))],
                        ),
                      ],
                    )
                  : e_17._e(),
              ],
            )
          : e_17._e();
      },
      [],
      !1,
      null,
      null,
      null,
    );
  webpackExports.a = component.exports;
};
