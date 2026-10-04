/**
 * qs-stringify — readable reconstruction of webpack module 619 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * Vendored qs library stringify implementation (qs/lib/stringify). It serialises an object into a query string, supporting arrayFormat brackets/comma/indices/repeat, allowDots, encode/encodeValuesOnly with a custom encoder, filter, sort, skipNulls, strictNullHandling, serializeDate, RFC formats (module 292) and utf-8/iso-8859-1 charset sentinels. Cyclic references are detected with side-channel maps (module 620) and throw RangeError("Cyclic object value"); encoding/merging helpers come from qs utils (module 398).
 *
 * Exports (minified key → meaning):
 *   module.exports → qs stringify(object, options) -> query string
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 619 from be1f69b.js
// deps: 620, 398, 292
const module_619 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(620),
    qsUtils = webpackRequire(398),
    vendorBundle2 = webpackRequire(292),
    hasOwn = Object.prototype.hasOwnProperty,
    arrayPrefixGenerators = {
      brackets: function (bracketsPrefix) {
        return bracketsPrefix + "[]";
      },
      comma: "comma",
      indices: function (indicesPrefix, indexKey) {
        return indicesPrefix + "[" + indexKey + "]";
      },
      repeat: function (repeatPrefix) {
        return repeatPrefix;
      },
    },
    isArray = Array.isArray,
    stringSplit = String.prototype.split,
    arrayPush = Array.prototype.push,
    pushToArray = function (targetArray, valueOrArray) {
      arrayPush.apply(targetArray, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    },
    dateToISOString = Date.prototype.toISOString,
    defaultFormat = vendorBundle2.default,
    defaults = {
      addQueryPrefix: !1,
      allowDots: !1,
      charset: "utf-8",
      charsetSentinel: !1,
      delimiter: "&",
      encode: !0,
      encoder: qsUtils.encode,
      encodeValuesOnly: !1,
      format: defaultFormat,
      formatter: vendorBundle2.formatters[defaultFormat],
      indices: !1,
      serializeDate: function (date) {
        return dateToISOString.call(date);
      },
      skipNulls: !1,
      strictNullHandling: !1,
    },
    sentinelKey = {},
    stringifyValue = function stringifyRecursive(
      object,
      prefix,
      generateArrayPrefix,
      commaRoundTrip,
      strictNullHandling,
      skipNulls,
      encoder,
      filter,
      sort,
      allowDots,
      serializeDate,
      format,
      formatter,
      encodeValuesOnly,
      charset,
      sideChannel,
    ) {
      for (
        var primitiveCandidate, currentValue = object, channelCursor = sideChannel, step = 0, foundCycle = !1;
        void 0 !== (channelCursor = channelCursor.get(sentinelKey)) && !foundCycle;
      ) {
        var seenPosition = channelCursor.get(object);
        if (((step += 1), void 0 !== seenPosition)) {
          if (seenPosition === step) throw new RangeError("Cyclic object value");
          foundCycle = !0;
        }
        void 0 === channelCursor.get(sentinelKey) && (step = 0);
      }
      if (
        ("function" == typeof filter
          ? (currentValue = filter(prefix, currentValue))
          : currentValue instanceof Date
            ? (currentValue = serializeDate(currentValue))
            : "comma" === generateArrayPrefix &&
              isArray(currentValue) &&
              (currentValue = qsUtils.maybeMap(currentValue, function (mappedItem) {
                return mappedItem instanceof Date ? serializeDate(mappedItem) : mappedItem;
              })),
        null === currentValue)
      ) {
        if (strictNullHandling)
          return encoder && !encodeValuesOnly
            ? encoder(prefix, defaults.encoder, charset, "key", format)
            : prefix;
        currentValue = "";
      }
      if (
        "string" == typeof (primitiveCandidate = currentValue) ||
        "number" == typeof primitiveCandidate ||
        "boolean" == typeof primitiveCandidate ||
        "symbol" == typeof primitiveCandidate ||
        "bigint" == typeof primitiveCandidate ||
        qsUtils.isBuffer(currentValue)
      ) {
        if (encoder) {
          var encodedKey = encodeValuesOnly
            ? prefix
            : encoder(prefix, defaults.encoder, charset, "key", format);
          if ("comma" === generateArrayPrefix && encodeValuesOnly) {
            for (
              var commaParts = stringSplit.call(String(currentValue), ","), joinedValues = "", partIndex = 0;
              partIndex < commaParts.length;
              ++partIndex
            )
              joinedValues +=
                (0 === partIndex ? "" : ",") +
                formatter(encoder(commaParts[partIndex], defaults.encoder, charset, "value", format));
            return [
              formatter(encodedKey) +
                (commaRoundTrip && isArray(currentValue) && 1 === commaParts.length ? "[]" : "") +
                "=" +
                joinedValues,
            ];
          }
          return [
            formatter(encodedKey) +
              "=" +
              formatter(encoder(currentValue, defaults.encoder, charset, "value", format)),
          ];
        }
        return [formatter(prefix) + "=" + formatter(String(currentValue))];
      }
      var objectKeys,
        results = [];
      if (void 0 === currentValue) return results;
      if ("comma" === generateArrayPrefix && isArray(currentValue))
        objectKeys = [
          {
            value: currentValue.length > 0 ? currentValue.join(",") || null : void 0,
          },
        ];
      else if (isArray(filter)) objectKeys = filter;
      else {
        var ownKeys = Object.keys(currentValue);
        objectKeys = sort ? ownKeys.sort(sort) : ownKeys;
      }
      for (
        var adjustedPrefix =
            commaRoundTrip && isArray(currentValue) && 1 === currentValue.length ? prefix + "[]" : prefix,
          keyIndex = 0;
        keyIndex < objectKeys.length;
        ++keyIndex
      ) {
        var entryKey = objectKeys[keyIndex],
          entryValue =
            "object" == typeof entryKey && void 0 !== entryKey.value
              ? entryKey.value
              : currentValue[entryKey];
        if (!skipNulls || null !== entryValue) {
          var keyPrefix = isArray(currentValue)
            ? "function" == typeof generateArrayPrefix
              ? generateArrayPrefix(adjustedPrefix, entryKey)
              : adjustedPrefix
            : adjustedPrefix + (allowDots ? "." + entryKey : "[" + entryKey + "]");
          sideChannel.set(object, step);
          var childSideChannel = vendorBundle();
          (childSideChannel.set(sentinelKey, sideChannel),
            pushToArray(
              results,
              stringifyRecursive(
                entryValue,
                keyPrefix,
                generateArrayPrefix,
                commaRoundTrip,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                format,
                formatter,
                encodeValuesOnly,
                charset,
                childSideChannel,
              ),
            ));
        }
      }
      return results;
    };
  webpackModule.exports = function (object, options) {
    var keyList,
      targetObject = object,
      normalizedOptions = (function (rawOptions) {
        if (!rawOptions) return defaults;
        if (
          null !== rawOptions.encoder &&
          void 0 !== rawOptions.encoder &&
          "function" != typeof rawOptions.encoder
        )
          throw new TypeError("Encoder has to be a function.");
        var resolvedCharset = rawOptions.charset || defaults.charset;
        if (
          void 0 !== rawOptions.charset &&
          "utf-8" !== rawOptions.charset &&
          "iso-8859-1" !== rawOptions.charset
        )
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var resolvedFormat = vendorBundle2.default;
        if (void 0 !== rawOptions.format) {
          if (!hasOwn.call(vendorBundle2.formatters, rawOptions.format))
            throw new TypeError("Unknown format option provided.");
          resolvedFormat = rawOptions.format;
        }
        var resolvedFormatter = vendorBundle2.formatters[resolvedFormat],
          filter = defaults.filter;
        return (
          ("function" == typeof rawOptions.filter || isArray(rawOptions.filter)) &&
            (filter = rawOptions.filter),
          {
            addQueryPrefix:
              "boolean" == typeof rawOptions.addQueryPrefix
                ? rawOptions.addQueryPrefix
                : defaults.addQueryPrefix,
            allowDots: void 0 === rawOptions.allowDots ? defaults.allowDots : !!rawOptions.allowDots,
            charset: resolvedCharset,
            charsetSentinel:
              "boolean" == typeof rawOptions.charsetSentinel
                ? rawOptions.charsetSentinel
                : defaults.charsetSentinel,
            delimiter: void 0 === rawOptions.delimiter ? defaults.delimiter : rawOptions.delimiter,
            encode: "boolean" == typeof rawOptions.encode ? rawOptions.encode : defaults.encode,
            encoder: "function" == typeof rawOptions.encoder ? rawOptions.encoder : defaults.encoder,
            encodeValuesOnly:
              "boolean" == typeof rawOptions.encodeValuesOnly
                ? rawOptions.encodeValuesOnly
                : defaults.encodeValuesOnly,
            filter: filter,
            format: resolvedFormat,
            formatter: resolvedFormatter,
            serializeDate:
              "function" == typeof rawOptions.serializeDate
                ? rawOptions.serializeDate
                : defaults.serializeDate,
            skipNulls: "boolean" == typeof rawOptions.skipNulls ? rawOptions.skipNulls : defaults.skipNulls,
            sort: "function" == typeof rawOptions.sort ? rawOptions.sort : null,
            strictNullHandling:
              "boolean" == typeof rawOptions.strictNullHandling
                ? rawOptions.strictNullHandling
                : defaults.strictNullHandling,
          }
        );
      })(options);
    "function" == typeof normalizedOptions.filter
      ? (targetObject = (0, normalizedOptions.filter)("", targetObject))
      : isArray(normalizedOptions.filter) && (keyList = normalizedOptions.filter);
    var arrayFormat,
      parts = [];
    if ("object" != typeof targetObject || null === targetObject) return "";
    arrayFormat =
      options && options.arrayFormat in arrayPrefixGenerators
        ? options.arrayFormat
        : options && "indices" in options
          ? options.indices
            ? "indices"
            : "repeat"
          : "indices";
    var arrayPrefixGenerator = arrayPrefixGenerators[arrayFormat];
    if (options && "commaRoundTrip" in options && "boolean" != typeof options.commaRoundTrip)
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var useCommaRoundTrip = "comma" === arrayPrefixGenerator && options && options.commaRoundTrip;
    (keyList || (keyList = Object.keys(targetObject)),
      normalizedOptions.sort && keyList.sort(normalizedOptions.sort));
    for (var rootSideChannel = vendorBundle(), index = 0; index < keyList.length; ++index) {
      var topKey = keyList[index];
      (normalizedOptions.skipNulls && null === targetObject[topKey]) ||
        pushToArray(
          parts,
          stringifyValue(
            targetObject[topKey],
            topKey,
            arrayPrefixGenerator,
            useCommaRoundTrip,
            normalizedOptions.strictNullHandling,
            normalizedOptions.skipNulls,
            normalizedOptions.encode ? normalizedOptions.encoder : null,
            normalizedOptions.filter,
            normalizedOptions.sort,
            normalizedOptions.allowDots,
            normalizedOptions.serializeDate,
            normalizedOptions.format,
            normalizedOptions.formatter,
            normalizedOptions.encodeValuesOnly,
            normalizedOptions.charset,
            rootSideChannel,
          ),
        );
    }
    var joined = parts.join(normalizedOptions.delimiter),
      queryPrefix = !0 === normalizedOptions.addQueryPrefix ? "?" : "";
    return (
      normalizedOptions.charsetSentinel &&
        ("iso-8859-1" === normalizedOptions.charset
          ? (queryPrefix += "utf8=%26%2310003%3B&")
          : (queryPrefix += "utf8=%E2%9C%93&")),
      joined.length > 0 ? queryPrefix + joined : ""
    );
  };
};
