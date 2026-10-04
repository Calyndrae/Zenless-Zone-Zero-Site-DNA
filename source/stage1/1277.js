// unresolved — module 1277 from b74c7e3
// module 1277 from b74c7e3.js
// deps:
const module_1277 = function (webpackModule, webpackExports) {
  var n_1 = [
    "M",
    "MM",
    "Q",
    "D",
    "DD",
    "DDD",
    "DDDD",
    "d",
    "E",
    "W",
    "WW",
    "YY",
    "YYYY",
    "GG",
    "GGGG",
    "H",
    "HH",
    "h",
    "hh",
    "m",
    "mm",
    "s",
    "ss",
    "S",
    "SS",
    "SSS",
    "Z",
    "ZZ",
    "X",
    "x",
  ];
  webpackModule.exports = function (e_2) {
    var t_3 = [];
    for (var r_4 in e_2) e_2.hasOwnProperty(r_4) && t_3.push(r_4);
    var o_5 = n_1.concat(t_3).sort().reverse();
    return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + o_5.join("|") + "|.)", "g");
  };
};
