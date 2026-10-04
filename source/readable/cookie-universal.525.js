/**
 * cookie-universal — readable reconstruction of webpack module 525 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * Bundled `cookie-universal` library (a self-contained webpack bundle with its own module runtime) that also embeds the `cookie` package (`parse`/`serialize`). The exported factory `(req, res, parseJSON = true)` detects client vs server context and returns an API `{ parseJSON, set, setAll, get, getAll, remove, removeAll, nodeCookie }` that reads cookies from `document.cookie` or the request `cookie` header / response `Set-Cookie` headers, writes via `document.cookie` or `res.setHeader('Set-Cookie', ...)`, JSON-stringifies object values and optionally JSON-parses values on read; removal sets `expires` to epoch. The embedded serializer validates names/values and supports Max-Age, Domain, Path, Expires, HttpOnly, Secure and SameSite.
 *
 * Exports (minified key → meaning):
 *   module.exports → cookie-universal factory (req, res, parseJSON) returning the cookie API object
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 525 from be1f69b.js
// deps:
const module_525 = function (webpackModule, webpackExports) {
  webpackModule.exports = (function (modules) {
    function innerRequire(moduleId) {
      if (installedModules[moduleId]) return installedModules[moduleId].exports;
      var installedModule = (installedModules[moduleId] = {
        i: moduleId,
        l: !1,
        exports: {},
      });
      return (
        modules[moduleId].call(
          installedModule.exports,
          installedModule,
          installedModule.exports,
          innerRequire,
        ),
        (installedModule.l = !0),
        installedModule.exports
      );
    }
    var installedModules = {};
    return (
      (innerRequire.m = modules),
      (innerRequire.c = installedModules),
      (innerRequire.d = function (exportsObj, propName, getter) {
        innerRequire.o(exportsObj, propName) ||
          Object.defineProperty(exportsObj, propName, {
            configurable: !1,
            enumerable: !0,
            get: getter,
          });
      }),
      (innerRequire.n = function (mod) {
        var getDefault =
          mod && mod.__esModule
            ? function () {
                return mod.default;
              }
            : function () {
                return mod;
              };
        return (innerRequire.d(getDefault, "a", getDefault), getDefault);
      }),
      (innerRequire.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      }),
      (innerRequire.p = ""),
      innerRequire((innerRequire.s = 0))
    );
  })([
    function (cookieUniversalModule, cookieUniversalExports, requireFn) {
      "use strict";

      var typeOf =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (typeofValue) {
                return typeof typeofValue;
              }
            : function (typeofObj) {
                return typeofObj &&
                  "function" == typeof Symbol &&
                  typeofObj.constructor === Symbol &&
                  typeofObj !== Symbol.prototype
                  ? "symbol"
                  : typeof typeofObj;
              },
        cookie = requireFn(1);
      cookieUniversalModule.exports = function (req, res) {
        var parseJSON = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          isClient =
            "object" === ("undefined" == typeof document ? "undefined" : typeOf(document)) &&
            "string" == typeof document.cookie,
          isServer =
            "object" === (void 0 === req ? "undefined" : typeOf(req)) &&
            "object" === (void 0 === res ? "undefined" : typeOf(res)) &&
            void 0 !== cookieUniversalModule,
          isUnavailable = (!isClient && !isServer) || (isClient && isServer),
          getCookieHeader = function (fromRes) {
            if (isServer) {
              var cookieHeader = req.headers.cookie || "";
              return (
                fromRes &&
                  (cookieHeader = (cookieHeader = res.getHeaders())["set-cookie"]
                    ? cookieHeader["set-cookie"]
                        .map(function (setCookieEntry) {
                          return setCookieEntry.split(";")[0];
                        })
                        .join(";")
                    : ""),
                cookieHeader
              );
            }
            if (isClient) return document.cookie || "";
          },
          getResponseCookies = function () {
            var setCookieHeader = res.getHeader("Set-Cookie");
            return (
              (setCookieHeader = "string" == typeof setCookieHeader ? [setCookieHeader] : setCookieHeader) ||
              []
            );
          },
          setResponseCookies = function (cookieList) {
            return res.setHeader("Set-Cookie", cookieList);
          },
          parseValue = function (rawValue, shouldParse) {
            if (!shouldParse) return rawValue;
            try {
              return JSON.parse(rawValue);
            } catch (parseError) {
              return rawValue;
            }
          },
          cookieApi = {
            parseJSON: parseJSON,
            set: function () {
              var cookieName = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                cookieValue = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                cookieOpts =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {
                        path: "/",
                      };
              if (!isUnavailable)
                if (
                  ((cookieValue =
                    "object" === (void 0 === cookieValue ? "undefined" : typeOf(cookieValue))
                      ? JSON.stringify(cookieValue)
                      : cookieValue),
                  isServer)
                ) {
                  var responseCookies = getResponseCookies();
                  (responseCookies.push(cookie.serialize(cookieName, cookieValue, cookieOpts)),
                    setResponseCookies(responseCookies));
                } else document.cookie = cookie.serialize(cookieName, cookieValue, cookieOpts);
            },
            setAll: function () {
              var cookieEntries = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
              isUnavailable ||
                (Array.isArray(cookieEntries) &&
                  cookieEntries.forEach(function (entry) {
                    var rawEntryName = entry.name,
                      entryName = void 0 === rawEntryName ? "" : rawEntryName,
                      rawEntryValue = entry.value,
                      entryValue = void 0 === rawEntryValue ? "" : rawEntryValue,
                      rawEntryOpts = entry.opts,
                      entryOpts =
                        void 0 === rawEntryOpts
                          ? {
                              path: "/",
                            }
                          : rawEntryOpts;
                    cookieApi.set(entryName, entryValue, entryOpts);
                  }));
            },
            get: function () {
              var getName = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                getOpts =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                        fromRes: !1,
                        parseJSON: cookieApi.parseJSON,
                      };
              if (isUnavailable) return "";
              var parsedCookies = cookie.parse(getCookieHeader(getOpts.fromRes)),
                rawCookieValue = parsedCookies[getName];
              return parseValue(rawCookieValue, getOpts.parseJSON);
            },
            getAll: function () {
              var getAllOpts =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {
                      fromRes: !1,
                      parseJSON: cookieApi.parseJSON,
                    };
              if (isUnavailable) return {};
              var allCookies = cookie.parse(getCookieHeader(getAllOpts.fromRes));
              for (var allKey in allCookies)
                allCookies[allKey] = parseValue(allCookies[allKey], getAllOpts.parseJSON);
              return allCookies;
            },
            remove: function () {
              var removeName = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                removeOpts =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {
                        path: "/",
                      };
              isUnavailable ||
                ((removeOpts.expires = new Date(0)), cookieApi.set(removeName, "", removeOpts));
            },
            removeAll: function () {
              var removeAllOpts =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {
                      path: "/",
                    };
              if (!isUnavailable) {
                var existingCookies = cookie.parse(getCookieHeader());
                for (var existingKey in existingCookies) cookieApi.remove(existingKey, removeAllOpts);
              }
            },
            nodeCookie: cookie,
          };
        return cookieApi;
      };
    },
    function (cookieModule, cookieExports, cookieRequire) {
      "use strict";

      function tryDecode(encodedStr, decodeFn) {
        try {
          return decodeFn(encodedStr);
        } catch (decodeError) {
          return encodedStr;
        }
      }
      ((cookieExports.parse = function (str, options) {
        if ("string" != typeof str) throw new TypeError("argument str must be a string");
        for (
          var obj = {},
            opt = options || {},
            pairs = str.split(pairSplitRegExp),
            dec = opt.decode || decode,
            i = 0;
          i < pairs.length;
          i++
        ) {
          var pair = pairs[i],
            eqIdx = pair.indexOf("=");
          if (!(eqIdx < 0)) {
            var key = pair.substr(0, eqIdx).trim(),
              val = pair.substr(++eqIdx, pair.length).trim();
            ('"' == val[0] && (val = val.slice(1, -1)), null == obj[key] && (obj[key] = tryDecode(val, dec)));
          }
        }
        return obj;
      }),
        (cookieExports.serialize = function (serializeName, serializeVal, serializeOptions) {
          var opts = serializeOptions || {},
            enc = opts.encode || encode;
          if ("function" != typeof enc) throw new TypeError("option encode is invalid");
          if (!fieldContentRegExp.test(serializeName)) throw new TypeError("argument name is invalid");
          var encodedValue = enc(serializeVal);
          if (encodedValue && !fieldContentRegExp.test(encodedValue))
            throw new TypeError("argument val is invalid");
          var serialized = serializeName + "=" + encodedValue;
          if (null != opts.maxAge) {
            var maxAge = opts.maxAge - 0;
            if (isNaN(maxAge)) throw new Error("maxAge should be a Number");
            serialized += "; Max-Age=" + Math.floor(maxAge);
          }
          if (opts.domain) {
            if (!fieldContentRegExp.test(opts.domain)) throw new TypeError("option domain is invalid");
            serialized += "; Domain=" + opts.domain;
          }
          if (opts.path) {
            if (!fieldContentRegExp.test(opts.path)) throw new TypeError("option path is invalid");
            serialized += "; Path=" + opts.path;
          }
          if (opts.expires) {
            if ("function" != typeof opts.expires.toUTCString)
              throw new TypeError("option expires is invalid");
            serialized += "; Expires=" + opts.expires.toUTCString();
          }
          if (
            (opts.httpOnly && (serialized += "; HttpOnly"),
            opts.secure && (serialized += "; Secure"),
            opts.sameSite)
          )
            switch ("string" == typeof opts.sameSite ? opts.sameSite.toLowerCase() : opts.sameSite) {
              case !0:
                serialized += "; SameSite=Strict";
                break;
              case "lax":
                serialized += "; SameSite=Lax";
                break;
              case "strict":
                serialized += "; SameSite=Strict";
                break;
              case "none":
                serialized += "; SameSite=None";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
          return serialized;
        }));
      var decode = decodeURIComponent,
        encode = encodeURIComponent,
        pairSplitRegExp = /; */,
        fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    },
  ]);
};
