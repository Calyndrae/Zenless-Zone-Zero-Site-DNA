/**
 * qs-parse — readable reconstruction of webpack module 629 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * Vendored qs library parse implementation (qs/lib/parse). It splits a query string by delimiter (respecting parameterLimit, ignoreQueryPrefix and utf8 charset sentinels), decodes keys/values with the configured decoder, handles comma lists, interpretNumericEntities and [] suffixes, then expands bracket/dot keys into nested objects/arrays up to depth and arrayLimit while guarding prototype keys. Results are merged and compacted with qs utils (module 398).
 *
 * Exports (minified key → meaning):
 *   module.exports → qs parse(str, options) -> object
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 629 from be1f69b.js
// deps: 398
const module_629 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var qsUtils = webpackRequire(398),
    hasOwn = Object.prototype.hasOwnProperty,
    isArray = Array.isArray,
    defaults = {
      allowDots: !1,
      allowPrototypes: !1,
      allowSparse: !1,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: !1,
      comma: !1,
      decoder: qsUtils.decode,
      delimiter: "&",
      depth: 5,
      ignoreQueryPrefix: !1,
      interpretNumericEntities: !1,
      parameterLimit: 1e3,
      parseArrays: !0,
      plainObjects: !1,
      strictNullHandling: !1,
    },
    interpretNumericEntities = function (text) {
      return text.replace(/&#(\d+);/g, function (entityMatch, charCode) {
        return String.fromCharCode(parseInt(charCode, 10));
      });
    },
    parseArrayValue = function (rawValue, commaOptions) {
      return rawValue && "string" == typeof rawValue && commaOptions.comma && rawValue.indexOf(",") > -1
        ? rawValue.split(",")
        : rawValue;
    },
    parseKeys = function (givenKey, keyValue, keyOptions, valuesParsed) {
      if (givenKey) {
        var normalizedKey = keyOptions.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey,
          childPattern = /(\[[^[\]]*])/g,
          segment = keyOptions.depth > 0 && /(\[[^[\]]*])/.exec(normalizedKey),
          parentKey = segment ? normalizedKey.slice(0, segment.index) : normalizedKey,
          keyChain = [];
        if (parentKey) {
          if (
            !keyOptions.plainObjects &&
            hasOwn.call(Object.prototype, parentKey) &&
            !keyOptions.allowPrototypes
          )
            return;
          keyChain.push(parentKey);
        }
        for (
          var depthCount = 0;
          keyOptions.depth > 0 &&
          null !== (segment = childPattern.exec(normalizedKey)) &&
          depthCount < keyOptions.depth;
        ) {
          if (
            ((depthCount += 1),
            !keyOptions.plainObjects &&
              hasOwn.call(Object.prototype, segment[1].slice(1, -1)) &&
              !keyOptions.allowPrototypes)
          )
            return;
          keyChain.push(segment[1]);
        }
        return (
          segment && keyChain.push("[" + normalizedKey.slice(segment.index) + "]"),
          (function (chain, leafValue, objectOptions, isValueParsed) {
            for (
              var leaf = isValueParsed ? leafValue : parseArrayValue(leafValue, objectOptions),
                chainIndex = chain.length - 1;
              chainIndex >= 0;
              --chainIndex
            ) {
              var nestedObject,
                chainRoot = chain[chainIndex];
              if ("[]" === chainRoot && objectOptions.parseArrays) nestedObject = [].concat(leaf);
              else {
                nestedObject = objectOptions.plainObjects ? Object.create(null) : {};
                var cleanRoot =
                    "[" === chainRoot.charAt(0) && "]" === chainRoot.charAt(chainRoot.length - 1)
                      ? chainRoot.slice(1, -1)
                      : chainRoot,
                  arrayIndex = parseInt(cleanRoot, 10);
                objectOptions.parseArrays || "" !== cleanRoot
                  ? !isNaN(arrayIndex) &&
                    chainRoot !== cleanRoot &&
                    String(arrayIndex) === cleanRoot &&
                    arrayIndex >= 0 &&
                    objectOptions.parseArrays &&
                    arrayIndex <= objectOptions.arrayLimit
                    ? ((nestedObject = [])[arrayIndex] = leaf)
                    : "__proto__" !== cleanRoot && (nestedObject[cleanRoot] = leaf)
                  : (nestedObject = {
                      0: leaf,
                    });
              }
              leaf = nestedObject;
            }
            return leaf;
          })(keyChain, keyValue, keyOptions, valuesParsed)
        );
      }
    };
  webpackModule.exports = function (input, options) {
    var normalizedOptions = (function (rawOptions) {
      if (!rawOptions) return defaults;
      if (
        null !== rawOptions.decoder &&
        void 0 !== rawOptions.decoder &&
        "function" != typeof rawOptions.decoder
      )
        throw new TypeError("Decoder has to be a function.");
      if (
        void 0 !== rawOptions.charset &&
        "utf-8" !== rawOptions.charset &&
        "iso-8859-1" !== rawOptions.charset
      )
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      var resolvedCharset = void 0 === rawOptions.charset ? defaults.charset : rawOptions.charset;
      return {
        allowDots: void 0 === rawOptions.allowDots ? defaults.allowDots : !!rawOptions.allowDots,
        allowPrototypes:
          "boolean" == typeof rawOptions.allowPrototypes
            ? rawOptions.allowPrototypes
            : defaults.allowPrototypes,
        allowSparse:
          "boolean" == typeof rawOptions.allowSparse ? rawOptions.allowSparse : defaults.allowSparse,
        arrayLimit: "number" == typeof rawOptions.arrayLimit ? rawOptions.arrayLimit : defaults.arrayLimit,
        charset: resolvedCharset,
        charsetSentinel:
          "boolean" == typeof rawOptions.charsetSentinel
            ? rawOptions.charsetSentinel
            : defaults.charsetSentinel,
        comma: "boolean" == typeof rawOptions.comma ? rawOptions.comma : defaults.comma,
        decoder: "function" == typeof rawOptions.decoder ? rawOptions.decoder : defaults.decoder,
        delimiter:
          "string" == typeof rawOptions.delimiter || qsUtils.isRegExp(rawOptions.delimiter)
            ? rawOptions.delimiter
            : defaults.delimiter,
        depth:
          "number" == typeof rawOptions.depth || !1 === rawOptions.depth ? +rawOptions.depth : defaults.depth,
        ignoreQueryPrefix: !0 === rawOptions.ignoreQueryPrefix,
        interpretNumericEntities:
          "boolean" == typeof rawOptions.interpretNumericEntities
            ? rawOptions.interpretNumericEntities
            : defaults.interpretNumericEntities,
        parameterLimit:
          "number" == typeof rawOptions.parameterLimit ? rawOptions.parameterLimit : defaults.parameterLimit,
        parseArrays: !1 !== rawOptions.parseArrays,
        plainObjects:
          "boolean" == typeof rawOptions.plainObjects ? rawOptions.plainObjects : defaults.plainObjects,
        strictNullHandling:
          "boolean" == typeof rawOptions.strictNullHandling
            ? rawOptions.strictNullHandling
            : defaults.strictNullHandling,
      };
    })(options);
    if ("" === input || null == input) return normalizedOptions.plainObjects ? Object.create(null) : {};
    for (
      var tempObject =
          "string" == typeof input
            ? (function (queryString, parseOptions) {
                var partIndex,
                  parsedValues = {},
                  cleanString = parseOptions.ignoreQueryPrefix ? queryString.replace(/^\?/, "") : queryString,
                  limit = parseOptions.parameterLimit === 1 / 0 ? void 0 : parseOptions.parameterLimit,
                  parts = cleanString.split(parseOptions.delimiter, limit),
                  skipIndex = -1,
                  charset = parseOptions.charset;
                if (parseOptions.charsetSentinel)
                  for (partIndex = 0; partIndex < parts.length; ++partIndex)
                    0 === parts[partIndex].indexOf("utf8=") &&
                      ("utf8=%E2%9C%93" === parts[partIndex]
                        ? (charset = "utf-8")
                        : "utf8=%26%2310003%3B" === parts[partIndex] && (charset = "iso-8859-1"),
                      (skipIndex = partIndex),
                      (partIndex = parts.length));
                for (partIndex = 0; partIndex < parts.length; ++partIndex)
                  if (partIndex !== skipIndex) {
                    var decodedKey,
                      decodedValue,
                      part = parts[partIndex],
                      bracketEqualsPos = part.indexOf("]="),
                      equalsPos = -1 === bracketEqualsPos ? part.indexOf("=") : bracketEqualsPos + 1;
                    (-1 === equalsPos
                      ? ((decodedKey = parseOptions.decoder(part, defaults.decoder, charset, "key")),
                        (decodedValue = parseOptions.strictNullHandling ? null : ""))
                      : ((decodedKey = parseOptions.decoder(
                          part.slice(0, equalsPos),
                          defaults.decoder,
                          charset,
                          "key",
                        )),
                        (decodedValue = qsUtils.maybeMap(
                          parseArrayValue(part.slice(equalsPos + 1), parseOptions),
                          function (encodedValue) {
                            return parseOptions.decoder(encodedValue, defaults.decoder, charset, "value");
                          },
                        ))),
                      decodedValue &&
                        parseOptions.interpretNumericEntities &&
                        "iso-8859-1" === charset &&
                        (decodedValue = interpretNumericEntities(decodedValue)),
                      part.indexOf("[]=") > -1 &&
                        (decodedValue = isArray(decodedValue) ? [decodedValue] : decodedValue),
                      hasOwn.call(parsedValues, decodedKey)
                        ? (parsedValues[decodedKey] = qsUtils.combine(parsedValues[decodedKey], decodedValue))
                        : (parsedValues[decodedKey] = decodedValue));
                  }
                return parsedValues;
              })(input, normalizedOptions)
            : input,
        result = normalizedOptions.plainObjects ? Object.create(null) : {},
        keys = Object.keys(tempObject),
        keyIndex = 0;
      keyIndex < keys.length;
      ++keyIndex
    ) {
      var key = keys[keyIndex],
        parsedEntry = parseKeys(key, tempObject[key], normalizedOptions, "string" == typeof input);
      result = qsUtils.merge(result, parsedEntry, normalizedOptions);
    }
    return !0 === normalizedOptions.allowSparse ? result : qsUtils.compact(result);
  };
};
