/**
 * date-fns-locale-helper — readable reconstruction of webpack module 1277 (chunk b74c7e3.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/b74c7e3.js
 *
 * Vendor helper (date-fns v1 style buildFormattingTokensRegExp). Holds a list of common date format tokens (M, MM, Q, D, DD, DDD, DDDD, d, E, W, WW, YY, YYYY, GG, GGGG, H, HH, h, hh, m, mm, s, ss, S, SS, SSS, Z, ZZ, X, x) and exports a function that merges them with the keys of a formatters object, sorts them in reverse so longer tokens match first, and returns a global RegExp matching escaped [literal] groups, a backslash escape, or any token / single character.
 *
 * Exports (minified key → meaning):
 *   module.exports → buildFormattingTokensRegExp(formatters) -> RegExp
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1277 from b74c7e3.js
// deps:
const module_1277 = function (webpackModule, webpackExports) {
  var commonFormatterKeys = [
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
  webpackModule.exports = function (formatters) {
    var customFormatterKeys = [];
    for (var key in formatters) formatters.hasOwnProperty(key) && customFormatterKeys.push(key);
    var allTokens = commonFormatterKeys.concat(customFormatterKeys).sort().reverse();
    return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + allTokens.join("|") + "|.)", "g");
  };
};
