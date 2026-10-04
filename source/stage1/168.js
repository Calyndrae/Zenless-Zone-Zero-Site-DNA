// no-ssr-placeholder (component) — module 168 from be1f69b
// module 168 from be1f69b.js
// deps:
const module_168 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var r_1 = {
    name: "NoSsr",
    functional: !0,
    props: {
      placeholder: String,
      placeholderTag: {
        type: String,
        default: "div",
      },
    },
    render: function (e_2, t_3) {
      var n_4 = t_3.parent,
        r_5 = t_3.slots,
        o_6 = t_3.props,
        c_7 = r_5(),
        l_8 = c_7.default;
      void 0 === l_8 && (l_8 = []);
      var f_9 = c_7.placeholder;
      return n_4._isMounted
        ? l_8
        : (n_4.$once("hook:mounted", function () {
            n_4.$forceUpdate();
          }),
          o_6.placeholderTag && (o_6.placeholder || f_9)
            ? e_2(
                o_6.placeholderTag,
                {
                  class: ["no-ssr-placeholder"],
                },
                o_6.placeholder || f_9,
              )
            : l_8.length > 0
              ? l_8.map(function () {
                  return e_2(!1);
                })
              : e_2(!1));
    },
  };
  webpackModule.exports = r_1;
};
