/**
 * mi-ho-yo-pager-rich — readable reconstruction of webpack module 1174 (chunk fcdddd8.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/fcdddd8.js
 *
 * mi-ho-yo-pager-rich Vue component (rich pagination). Props totalPage, showItems (5), showPrev/showNext/showJump, initPage, mode ("event" | "query" | "params"), routeName (required for params mode, else created throws), prevText/nextText (上一页/下一页), totalText, jumpText, pagerClass and simpleStyle; data currentPage/jumpPage and a computed pages window around the current page. go(page) clamps to 1..totalPage and then updates $route.query.page or $route.params.page via $router.go, or emits "go". It renders div.mihoyo-pager-rich with __pages (prev/next links with --simple variants, first/last __button, __ellipsis markers, page buttons with __current) and, unless simpleStyle, a __jump block (__text, __total, number __input bound to jumpPage, __go button). Normalised with componentNormalizer (module 36); styles from module 1169.
 *
 * Exports (minified key → meaning):
 *   a → mi-ho-yo-pager-rich Vue component (pagination with jump-to-page)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1174 from fcdddd8.js
// deps: 556, 1169, 36
const module_1174 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  webpackRequire(556);
  var pagerOptions = {
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
          var self = this,
            buildRange = function (start, end) {
              ((start <= 1 || start > end || start >= self.totalPage) && (start = 2),
                (end >= self.totalPage || end < start || end <= 1) && (end = self.totalPage - 1));
              for (var range = [], page = start; page <= end; page++) range.push(page);
              return range;
            },
            showItems = this.showItems;
          if (this.totalPage < showItems + 2) return buildRange(2, this.totalPage);
          if (this.currentPage <= Math.ceil(showItems / 2)) return buildRange(2, showItems);
          if (this.currentPage >= this.totalPage - Math.floor(showItems / 2))
            return buildRange(this.totalPage + 1 - showItems, this.totalPage - 1);
          var halfWindow = Math.ceil(showItems / 2) - 1,
            rangeEnd = this.currentPage + halfWindow;
          return (showItems % 2 == 0 && (rangeEnd += 1), buildRange(this.currentPage - halfWindow, rangeEnd));
        },
      },
      watch: {
        currentPage: function (newCurrentPage) {
          this.jumpPage = newCurrentPage;
        },
        initPage: function (newInitPage) {
          this.currentPage !== newInitPage && (this.currentPage = newInitPage);
        },
      },
      created: function () {
        if (((this.currentPage = this.initPage), "params" === this.mode && !this.routeName))
          throw new Error("need a route name when choose params mode in pager component");
      },
      beforeMount: function () {},
      methods: {
        go: function (targetPage) {
          if (
            (targetPage < 1 && (targetPage = 1),
            targetPage > this.totalPage && (targetPage = this.totalPage),
            targetPage !== this.currentPage)
          )
            if (((this.currentPage = parseInt(targetPage, 10)), "query" === this.mode)) {
              var routeQuery = this.$route.query;
              ((routeQuery.page = this.currentPage),
                this.$router.go({
                  query: routeQuery,
                }));
            } else if ("params" === this.mode) {
              var routeParams = this.$route.params;
              ((routeParams.page = this.currentPage),
                this.$router.go({
                  name: this.routeName,
                  params: routeParams,
                }));
            } else this.$emit("go", this.currentPage);
        },
      },
    },
    componentNormalizer = (webpackRequire(1169), webpackRequire(36)),
    component = Object(componentNormalizer.a)(
      pagerOptions,
      function () {
        var vm = this,
          h = vm._self._c;
        return vm.totalPage > 0
          ? h(
              "div",
              {
                staticClass: "mihoyo-pager-rich",
                class: vm.pagerClass,
              },
              [
                h(
                  "div",
                  {
                    staticClass: "mihoyo-pager-rich__pages",
                  },
                  [
                    h(
                      "a",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: vm.showPrev,
                            expression: "showPrev",
                          },
                        ],
                        staticClass: "mihoyo-pager-rich__prev",
                        class: {
                          "mihoyo-pager-rich__prev--simple": vm.simpleStyle,
                        },
                        on: {
                          click: function (prevClickEvent) {
                            return vm.go(vm.currentPage - 1);
                          },
                        },
                      },
                      [vm._v(vm._s(vm.prevText))],
                    ),
                    vm._v(" "),
                    h(
                      "a",
                      {
                        class: [
                          "mihoyo-pager-rich__button",
                          1 == vm.currentPage ? "mihoyo-pager-rich__current" : "",
                        ],
                        on: {
                          click: function (firstClickEvent) {
                            return vm.go(1);
                          },
                        },
                      },
                      [vm._v("1")],
                    ),
                    vm._v(" "),
                    h(
                      "strong",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: vm.pages[0] > 2,
                            expression: "pages[0] > 2",
                          },
                        ],
                        staticClass: "mihoyo-pager-rich__ellipsis",
                      },
                      [vm._v("...")],
                    ),
                    vm._v(" "),
                    vm._l(vm.pages, function (pageNum) {
                      return h(
                        "a",
                        {
                          key: pageNum,
                          class: [
                            "mihoyo-pager-rich__button",
                            vm.currentPage == pageNum ? "mihoyo-pager-rich__current" : "",
                          ],
                          on: {
                            click: function (pageClickEvent) {
                              return vm.go(pageNum);
                            },
                          },
                        },
                        [vm._v(vm._s(pageNum))],
                      );
                    }),
                    vm._v(" "),
                    h(
                      "strong",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: vm.pages[vm.pages.length - 1] < vm.totalPage - 1,
                            expression: "pages[pages.length-1] < totalPage - 1",
                          },
                        ],
                        staticClass: "mihoyo-pager-rich__ellipsis",
                      },
                      [vm._v("...")],
                    ),
                    vm._v(" "),
                    vm.totalPage > 1
                      ? h(
                          "a",
                          {
                            class: [
                              "mihoyo-pager-rich__button",
                              vm.currentPage == vm.totalPage ? "mihoyo-pager-rich__current" : "",
                            ],
                            on: {
                              click: function (lastClickEvent) {
                                return vm.go(vm.totalPage);
                              },
                            },
                          },
                          [vm._v(vm._s(vm.totalPage))],
                        )
                      : vm._e(),
                    vm._v(" "),
                    h(
                      "a",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: vm.showNext,
                            expression: "showNext",
                          },
                        ],
                        staticClass: "mihoyo-pager-rich__next",
                        class: {
                          "mihoyo-pager-rich__next--simple": vm.simpleStyle,
                        },
                        on: {
                          click: function (nextClickEvent) {
                            return vm.go(vm.currentPage + 1);
                          },
                        },
                      },
                      [vm._v(vm._s(vm.nextText))],
                    ),
                  ],
                  2,
                ),
                vm._v(" "),
                !vm.simpleStyle && vm.showJump && vm.totalPage > 1
                  ? h(
                      "div",
                      {
                        staticClass: "mihoyo-pager-rich__jump",
                      },
                      [
                        h(
                          "div",
                          {
                            staticClass: "mihoyo-pager-rich__text",
                          },
                          [
                            vm._v("\n      " + vm._s(vm.totalText[0]) + "\n      "),
                            h(
                              "em",
                              {
                                staticClass: "mihoyo-pager-rich__total",
                              },
                              [vm._v(vm._s(vm.totalPage))],
                            ),
                            vm._v(" "),
                            h("span", [vm._v(vm._s(vm.totalText[1]) + ", " + vm._s(vm.jumpText[0]))]),
                          ],
                        ),
                        vm._v(" "),
                        h("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: vm.jumpPage,
                              expression: "jumpPage",
                            },
                          ],
                          staticClass: "mihoyo-pager-rich__input",
                          attrs: {
                            max: vm.totalPage,
                            type: "number",
                            min: "1",
                          },
                          domProps: {
                            value: vm.jumpPage,
                          },
                          on: {
                            input: function (inputEvent) {
                              inputEvent.target.composing || (vm.jumpPage = inputEvent.target.value);
                            },
                          },
                        }),
                        vm._v(" "),
                        "" !== vm.jumpText[1] ? h("span", [vm._v(vm._s(vm.jumpText[1]))]) : vm._e(),
                        vm._v(" "),
                        h(
                          "a",
                          {
                            staticClass: "mihoyo-pager-rich__button mihoyo-pager-rich__go",
                            on: {
                              click: function (goClickEvent) {
                                return vm.go(vm.jumpPage);
                              },
                            },
                          },
                          [vm._v(vm._s(vm.jumpText[2]))],
                        ),
                      ],
                    )
                  : vm._e(),
              ],
            )
          : vm._e();
      },
      [],
      !1,
      null,
      null,
      null,
    );
  webpackExports.a = component.exports;
};
