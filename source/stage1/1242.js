// user-model event bus (on/emit/remove) — module 1242 from fd57a96
// module 1242 from fd57a96.js
// deps: 1176
const module_1242 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  Object.defineProperty(webpackExports, "__esModule", {
    value: !0,
  });
  var n_1 = {
    handlers: new (webpackRequire(1176).Store)("eventHandlers"),
    on: function (e_2, t_3) {
      (void 0 === n_1.handlers[e_2] && (n_1.handlers[e_2] = []), n_1.handlers[e_2].push(t_3));
    },
    emit: function (e_4) {
      if (n_1.handlers[e_4.type] instanceof Array) {
        for (var t_5 = n_1.handlers[e_4.type], i_6 = 0; i_6 < t_5.length; i_6++) t_5[i_6](e_4);
        n_1.handlers[e_4.type] = [];
      }
    },
    remove: function (e_7, t_8) {
      if (n_1.handlers[e_7] instanceof Array)
        for (var o_9 = n_1.handlers[e_7], i_10 = 0; i_10 < o_9.length; i_10++)
          if (o_9[i_10] === t_8) {
            o_9.splice(i_10, 1);
            break;
          }
    },
  };
  webpackExports.default = n_1;
};
