/**
 * locale-and-route-path — readable reconstruction of webpack module 83 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Routing/locale helper functions built on the site constants module (`HoYoverseMi18n`, module 49) and a cookie library (module 40). It exports a matcher that tests a path against the configured path list (strings or RegExps), a route-name normalizer that falls back to the `lang` key, a builder that prefixes a path with the language segment (keeping or dropping the mobile `/m` prefix), a language resolver that validates against the supported locales or falls back to the `mi18nLang` cookie / default language, and a query sanitizer that strips the `catchSpider` key.
 *
 * Exports (minified key → meaning):
 *   a → isMatchedPath(path) — whether the path matches one of the configured route paths/regexes
 *   e → normalizeLangRouteName(name) — returns the name if it is a lang route name, otherwise the lang key
 *   c → buildLangPath(path, lang, dropMobilePrefix) — prefixes a path with /<lang> (and /m on mobile)
 *   d → resolveLang(lang) — supported lang or mi18nLang cookie or default lang
 *   b → omitCatchSpider(query) — copy of a query object without the catchSpider key
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 83 from 8c4c131.js
// deps: 77, 119, 118, 138, 67, 85, 49, 40
const module_83 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire.d(webpackExports, "a", function () {
    return isMatchedPath;
  }),
    webpackRequire.d(webpackExports, "e", function () {
      return normalizeLangRouteName;
    }),
    webpackRequire.d(webpackExports, "c", function () {
      return buildLangPath;
    }),
    webpackRequire.d(webpackExports, "d", function () {
      return resolveLang;
    }),
    webpackRequire.d(webpackExports, "b", function () {
      return omitCatchSpider;
    }));
  (webpackRequire(77),
    webpackRequire(119),
    webpackRequire(118),
    webpackRequire(138),
    webpackRequire(67),
    webpackRequire(85));
  var siteConstants = webpackRequire(49);
  function isMatchedPath(path) {
    return siteConstants.a.some(function (pattern) {
      return "[object RegExp]" === Object.prototype.toString.call(pattern)
        ? pattern.test(path)
        : path.includes(pattern);
    });
  }
  function normalizeLangRouteName(routeName) {
    return routeName && /(-lang)|(lang-)/.test(routeName) && "m-lang" !== routeName
      ? routeName
      : siteConstants.c;
  }
  function buildLangPath(path, lang) {
    var dropMobilePrefix = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      isMobilePath = /\/m($|\/)/.test(path);
    return ""
      .concat(isMobilePath && !dropMobilePrefix ? "/m" : "", "/")
      .concat(lang)
      .concat(isMobilePath ? path.replace("/m", "") : path);
  }
  function resolveLang(langCode) {
    return siteConstants.d.includes(langCode)
      ? langCode
      : webpackRequire(40).get("mi18nLang") || siteConstants.b;
  }
  function omitCatchSpider(query) {
    return query
      ? Object.keys(query)
          .filter(function (queryKey) {
            return "catchSpider" !== queryKey;
          })
          .reduce(function (result, key) {
            return ((result[key] = query[key]), result);
          }, {})
      : {};
  }
};
