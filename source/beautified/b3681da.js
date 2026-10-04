(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    1442: function (e, n, r) {
      "use strict";
      r.r(n);
      var t = {
          name: "character-detail",
          middleware: function (e) {
            (0, e.redirect)({ name: "lang-character", query: e.query });
          },
        },
        c = r(36),
        component = Object(c.a)(
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
