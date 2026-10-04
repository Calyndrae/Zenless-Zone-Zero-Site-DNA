(window.webpackJsonp = window.webpackJsonp || []).push([
  [38],
  {
    1422: function (e, n, r) {
      "use strict";
      r.r(n);
      var t = {
          name: "home-page",
          middleware: function (e) {
            (0, e.redirect)({ name: "m-lang-main", query: e.query });
          },
        },
        l = r(36),
        component = Object(l.a)(
          t,
          function () {
            return (0, this._self._c)("div");
          },
          [],
          !1,
          null,
          null,
          null,
        );
      n.default = component.exports;
    },
  },
]);
