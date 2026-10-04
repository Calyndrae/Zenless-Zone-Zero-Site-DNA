/**
 * qs-utils — readable reconstruction of webpack module 398 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * The `qs` library's `utils` module (CommonJS). It exports helpers used by qs parse/stringify: `arrayToObject`, `assign`, `combine`, `compact` (removes undefined array holes via a breadth-first queue with cycle tracking), `decode` (with `iso-8859-1` support), `encode` (UTF-8 percent-encoding via a hex table, RFC1738 parentheses handling from the formats module, iso-8859-1 numeric entity escaping), `isBuffer`, `isRegExp`, `maybeMap` and a recursive `merge`.
 *
 * Exports (minified key → meaning):
 *   module.exports → qs utils object { arrayToObject, assign, combine, compact, decode, encode, isBuffer, isRegExp, maybeMap, merge }
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 398 from be1f69b.js
// deps: 292
const module_398 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(292),
    hasOwn = Object.prototype.hasOwnProperty,
    isArray = Array.isArray,
    hexTable = (function () {
      for (var hexArray = [], byteValue = 0; byteValue < 256; ++byteValue)
        hexArray.push("%" + ((byteValue < 16 ? "0" : "") + byteValue.toString(16)).toUpperCase());
      return hexArray;
    })(),
    arrayToObject = function (source, options) {
      for (
        var result = options && options.plainObjects ? Object.create(null) : {}, itemIndex = 0;
        itemIndex < source.length;
        ++itemIndex
      )
        void 0 !== source[itemIndex] && (result[itemIndex] = source[itemIndex]);
      return result;
    };
  webpackModule.exports = {
    arrayToObject: arrayToObject,
    assign: function (assignTarget, source) {
      return Object.keys(source).reduce(function (acc, assignKey) {
        return ((acc[assignKey] = source[assignKey]), acc);
      }, assignTarget);
    },
    combine: function (a, b) {
      return [].concat(a, b);
    },
    compact: function (compactValue) {
      for (
        var queue = [
            {
              obj: {
                o: compactValue,
              },
              prop: "o",
            },
          ],
          refs = [],
          queueIndex = 0;
        queueIndex < queue.length;
        ++queueIndex
      )
        for (
          var item = queue[queueIndex], obj = item.obj[item.prop], keys = Object.keys(obj), keyIndex = 0;
          keyIndex < keys.length;
          ++keyIndex
        ) {
          var key = keys[keyIndex],
            val = obj[key];
          "object" == typeof val &&
            null !== val &&
            -1 === refs.indexOf(val) &&
            (queue.push({
              obj: obj,
              prop: key,
            }),
            refs.push(val));
        }
      return (
        (function (compactQueue) {
          for (; compactQueue.length > 1;) {
            var queueItem = compactQueue.pop(),
              queueObj = queueItem.obj[queueItem.prop];
            if (isArray(queueObj)) {
              for (var compacted = [], compactIndex = 0; compactIndex < queueObj.length; ++compactIndex)
                void 0 !== queueObj[compactIndex] && compacted.push(queueObj[compactIndex]);
              queueItem.obj[queueItem.prop] = compacted;
            }
          }
        })(queue),
        compactValue
      );
    },
    decode: function (str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if ("iso-8859-1" === charset) return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (decodeError) {
        return strWithoutPlus;
      }
    },
    encode: function (encodeStr, defaultEncoder, encodeCharset, kind, format) {
      if (0 === encodeStr.length) return encodeStr;
      var string = encodeStr;
      if (
        ("symbol" == typeof encodeStr
          ? (string = Symbol.prototype.toString.call(encodeStr))
          : "string" != typeof encodeStr && (string = String(encodeStr)),
        "iso-8859-1" === encodeCharset)
      )
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function (unicodeEscape) {
          return "%26%23" + parseInt(unicodeEscape.slice(2), 16) + "%3B";
        });
      for (var out = "", charPos = 0; charPos < string.length; ++charPos) {
        var charCode = string.charCodeAt(charPos);
        45 === charCode ||
        46 === charCode ||
        95 === charCode ||
        126 === charCode ||
        (charCode >= 48 && charCode <= 57) ||
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        (format === vendorBundle.RFC1738 && (40 === charCode || 41 === charCode))
          ? (out += string.charAt(charPos))
          : charCode < 128
            ? (out += hexTable[charCode])
            : charCode < 2048
              ? (out += hexTable[192 | (charCode >> 6)] + hexTable[128 | (63 & charCode)])
              : charCode < 55296 || charCode >= 57344
                ? (out +=
                    hexTable[224 | (charCode >> 12)] +
                    hexTable[128 | ((charCode >> 6) & 63)] +
                    hexTable[128 | (63 & charCode)])
                : ((charPos += 1),
                  (charCode = 65536 + (((1023 & charCode) << 10) | (1023 & string.charCodeAt(charPos)))),
                  (out +=
                    hexTable[240 | (charCode >> 18)] +
                    hexTable[128 | ((charCode >> 12) & 63)] +
                    hexTable[128 | ((charCode >> 6) & 63)] +
                    hexTable[128 | (63 & charCode)]));
      }
      return out;
    },
    isBuffer: function (bufferCandidate) {
      return (
        !(!bufferCandidate || "object" != typeof bufferCandidate) &&
        !!(
          bufferCandidate.constructor &&
          bufferCandidate.constructor.isBuffer &&
          bufferCandidate.constructor.isBuffer(bufferCandidate)
        )
      );
    },
    isRegExp: function (regexCandidate) {
      return "[object RegExp]" === Object.prototype.toString.call(regexCandidate);
    },
    maybeMap: function (mapValue, mapFn) {
      if (isArray(mapValue)) {
        for (var mapped = [], mapIndex = 0; mapIndex < mapValue.length; mapIndex += 1)
          mapped.push(mapFn(mapValue[mapIndex]));
        return mapped;
      }
      return mapFn(mapValue);
    },
    merge: function merge(mergeTarget, source, mergeOptions) {
      if (!source) return mergeTarget;
      if ("object" != typeof source) {
        if (isArray(mergeTarget)) mergeTarget.push(source);
        else {
          if (!mergeTarget || "object" != typeof mergeTarget) return [mergeTarget, source];
          ((mergeOptions && (mergeOptions.plainObjects || mergeOptions.allowPrototypes)) ||
            !hasOwn.call(Object.prototype, source)) &&
            (mergeTarget[source] = !0);
        }
        return mergeTarget;
      }
      if (!mergeTarget || "object" != typeof mergeTarget) return [mergeTarget].concat(source);
      var mergeTargetObj = mergeTarget;
      return (
        isArray(mergeTarget) &&
          !isArray(source) &&
          (mergeTargetObj = arrayToObject(mergeTarget, mergeOptions)),
        isArray(mergeTarget) && isArray(source)
          ? (source.forEach(function (sourceItem, sourceIndex) {
              if (hasOwn.call(mergeTarget, sourceIndex)) {
                var targetItem = mergeTarget[sourceIndex];
                targetItem && "object" == typeof targetItem && sourceItem && "object" == typeof sourceItem
                  ? (mergeTarget[sourceIndex] = merge(targetItem, sourceItem, mergeOptions))
                  : mergeTarget.push(sourceItem);
              } else mergeTarget[sourceIndex] = sourceItem;
            }),
            mergeTarget)
          : Object.keys(source).reduce(function (accumulator, sourceKey) {
              var sourceValue = source[sourceKey];
              return (
                hasOwn.call(accumulator, sourceKey)
                  ? (accumulator[sourceKey] = merge(accumulator[sourceKey], sourceValue, mergeOptions))
                  : (accumulator[sourceKey] = sourceValue),
                accumulator
              );
            }, mergeTargetObj)
      );
    },
  };
};
