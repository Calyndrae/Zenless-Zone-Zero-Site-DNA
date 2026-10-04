/**
 * @firebase-util-helpers — readable reconstruction of webpack module 1165 (chunk 8d80f48.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8d80f48.js
 *
 * Vendored @firebase/util helpers (wrapped with the global object, module 42, and process, module 120). It includes UTF-8 string-to-bytes conversion and a base64 codec (standard and web-safe alphabets, DecodeBase64StringError), base64urlEncodeWithoutPadding/base64Decode, lookup of __FIREBASE_DEFAULTS__ from the global, process.env or a cookie (getDefaultAppConfig returns its config), a Deferred promise wrapper with wrapCallback, isIndexedDBAvailable, validateIndexedDBOpenable (opens and deletes the probe database "validate-browser-context-for-indexeddb-analytics-module"), areCookiesEnabled, FirebaseError plus ErrorFactory (fills {$key} templates into "<serviceName>: <message> (<service>/<code>)."), deepEqual and getModularInstance.
 *
 * Exports (minified key → meaning):
 *   a → Deferred class (promise with resolve/reject and wrapCallback)
 *   b → ErrorFactory class (service, serviceName, errors) with create(code, data)
 *   c → FirebaseError class (code, message, customData)
 *   d → areCookiesEnabled()
 *   e → base64urlEncodeWithoutPadding(str)
 *   f → deepEqual(a, b)
 *   g → getDefaultAppConfig() from __FIREBASE_DEFAULTS__
 *   h → getModularInstance(instance) (unwraps _delegate)
 *   i → isIndexedDBAvailable()
 *   j → validateIndexedDBOpenable() -> Promise<boolean>
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1165 from 8d80f48.js
// deps: 42, 120
const module_1165 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (function (globalRef, nodeProcess) {
    (webpackRequire.d(webpackExports, "a", function () {
      return Deferred;
    }),
      webpackRequire.d(webpackExports, "b", function () {
        return ErrorFactory;
      }),
      webpackRequire.d(webpackExports, "c", function () {
        return FirebaseError;
      }),
      webpackRequire.d(webpackExports, "d", function () {
        return areCookiesEnabled;
      }),
      webpackRequire.d(webpackExports, "e", function () {
        return base64urlEncodeWithoutPadding;
      }),
      webpackRequire.d(webpackExports, "f", function () {
        return deepEqual;
      }),
      webpackRequire.d(webpackExports, "g", function () {
        return getDefaultAppConfig;
      }),
      webpackRequire.d(webpackExports, "h", function () {
        return getModularInstance;
      }),
      webpackRequire.d(webpackExports, "i", function () {
        return isIndexedDBAvailable;
      }),
      webpackRequire.d(webpackExports, "j", function () {
        return validateIndexedDBOpenable;
      }));
    const stringToByteArray = function (str) {
        const byteList = [];
        let byteIndex = 0;
        for (let charIndex = 0; charIndex < str.length; charIndex++) {
          let codePoint = str.charCodeAt(charIndex);
          codePoint < 128
            ? (byteList[byteIndex++] = codePoint)
            : codePoint < 2048
              ? ((byteList[byteIndex++] = (codePoint >> 6) | 192),
                (byteList[byteIndex++] = (63 & codePoint) | 128))
              : 55296 == (64512 & codePoint) &&
                  charIndex + 1 < str.length &&
                  56320 == (64512 & str.charCodeAt(charIndex + 1))
                ? ((codePoint = 65536 + ((1023 & codePoint) << 10) + (1023 & str.charCodeAt(++charIndex))),
                  (byteList[byteIndex++] = (codePoint >> 18) | 240),
                  (byteList[byteIndex++] = ((codePoint >> 12) & 63) | 128),
                  (byteList[byteIndex++] = ((codePoint >> 6) & 63) | 128),
                  (byteList[byteIndex++] = (63 & codePoint) | 128))
                : ((byteList[byteIndex++] = (codePoint >> 12) | 224),
                  (byteList[byteIndex++] = ((codePoint >> 6) & 63) | 128),
                  (byteList[byteIndex++] = (63 & codePoint) | 128));
        }
        return byteList;
      },
      base64 = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/=";
        },
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_.";
        },
        HAS_NATIVE_SUPPORT: "function" == typeof atob,
        encodeByteArray(input, encodeWebSafe) {
          if (!Array.isArray(input)) throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          const byteToCharMap = encodeWebSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
            output = [];
          for (let inputIndex = 0; inputIndex < input.length; inputIndex += 3) {
            const byte1 = input[inputIndex],
              haveByte2 = inputIndex + 1 < input.length,
              byte2 = haveByte2 ? input[inputIndex + 1] : 0,
              haveByte3 = inputIndex + 2 < input.length,
              byte3 = haveByte3 ? input[inputIndex + 2] : 0,
              outByte1 = byte1 >> 2,
              outByte2 = ((3 & byte1) << 4) | (byte2 >> 4);
            let outByte3 = ((15 & byte2) << 2) | (byte3 >> 6),
              outByte4 = 63 & byte3;
            (haveByte3 || ((outByte4 = 64), haveByte2 || (outByte3 = 64)),
              output.push(
                byteToCharMap[outByte1],
                byteToCharMap[outByte2],
                byteToCharMap[outByte3],
                byteToCharMap[outByte4],
              ));
          }
          return output.join("");
        },
        encodeString(input, encodeStringWebSafe) {
          return this.HAS_NATIVE_SUPPORT && !encodeStringWebSafe
            ? btoa(input)
            : this.encodeByteArray(stringToByteArray(input), encodeStringWebSafe);
        },
        decodeString(input, decodeStringWebSafe) {
          return this.HAS_NATIVE_SUPPORT && !decodeStringWebSafe
            ? atob(input)
            : (function (utf8Bytes) {
                const outChars = [];
                let bytePos = 0,
                  charPos = 0;
                for (; bytePos < utf8Bytes.length;) {
                  const leadByte = utf8Bytes[bytePos++];
                  if (leadByte < 128) outChars[charPos++] = String.fromCharCode(leadByte);
                  else if (leadByte > 191 && leadByte < 224) {
                    const contByte = utf8Bytes[bytePos++];
                    outChars[charPos++] = String.fromCharCode(((31 & leadByte) << 6) | (63 & contByte));
                  } else if (leadByte > 239 && leadByte < 365) {
                    const surrogateCode =
                      (((7 & leadByte) << 18) |
                        ((63 & utf8Bytes[bytePos++]) << 12) |
                        ((63 & utf8Bytes[bytePos++]) << 6) |
                        (63 & utf8Bytes[bytePos++])) -
                      65536;
                    ((outChars[charPos++] = String.fromCharCode(55296 + (surrogateCode >> 10))),
                      (outChars[charPos++] = String.fromCharCode(56320 + (1023 & surrogateCode))));
                  } else {
                    const midByte = utf8Bytes[bytePos++],
                      tailByte = utf8Bytes[bytePos++];
                    outChars[charPos++] = String.fromCharCode(
                      ((15 & leadByte) << 12) | ((63 & midByte) << 6) | (63 & tailByte),
                    );
                  }
                }
                return outChars.join("");
              })(this.decodeStringToByteArray(input, decodeStringWebSafe));
        },
        decodeStringToByteArray(input, decodeWebSafe) {
          this.init_();
          const charToByteMap = decodeWebSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_,
            output = [];
          for (let charIdx = 0; charIdx < input.length;) {
            const decByte1 = charToByteMap[input.charAt(charIdx++)],
              decByte2 = charIdx < input.length ? charToByteMap[input.charAt(charIdx)] : 0;
            ++charIdx;
            const decByte3 = charIdx < input.length ? charToByteMap[input.charAt(charIdx)] : 64;
            ++charIdx;
            const decByte4 = charIdx < input.length ? charToByteMap[input.charAt(charIdx)] : 64;
            if ((++charIdx, null == decByte1 || null == decByte2 || null == decByte3 || null == decByte4))
              throw new DecodeBase64StringError();
            const outputByte1 = (decByte1 << 2) | (decByte2 >> 4);
            if ((output.push(outputByte1), 64 !== decByte3)) {
              const outputByte2 = ((decByte2 << 4) & 240) | (decByte3 >> 2);
              if ((output.push(outputByte2), 64 !== decByte4)) {
                const outputByte3 = ((decByte3 << 6) & 192) | decByte4;
                output.push(outputByte3);
              }
            }
          }
          return output;
        },
        init_() {
          if (!this.byteToCharMap_) {
            ((this.byteToCharMap_ = {}),
              (this.charToByteMap_ = {}),
              (this.byteToCharMapWebSafe_ = {}),
              (this.charToByteMapWebSafe_ = {}));
            for (let mapIndex = 0; mapIndex < this.ENCODED_VALS.length; mapIndex++)
              ((this.byteToCharMap_[mapIndex] = this.ENCODED_VALS.charAt(mapIndex)),
                (this.charToByteMap_[this.byteToCharMap_[mapIndex]] = mapIndex),
                (this.byteToCharMapWebSafe_[mapIndex] = this.ENCODED_VALS_WEBSAFE.charAt(mapIndex)),
                (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[mapIndex]] = mapIndex),
                mapIndex >= this.ENCODED_VALS_BASE.length &&
                  ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(mapIndex)] = mapIndex),
                  (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(mapIndex)] = mapIndex)));
          }
        },
      };
    class DecodeBase64StringError extends Error {
      constructor() {
        (super(...arguments), (this.name = "DecodeBase64StringError"));
      }
    }
    const base64urlEncodeWithoutPadding = function (urlInput) {
        return (function (utf8Input) {
          const inputBytes = stringToByteArray(utf8Input);
          return base64.encodeByteArray(inputBytes, !0);
        })(urlInput).replace(/\./g, "");
      },
      base64Decode = function (base64Str) {
        try {
          return base64.decodeString(base64Str, !0);
        } catch (decodeError) {
          console.error("base64Decode failed: ", decodeError);
        }
        return null;
      };
    const getDefaultsFromGlobal = () =>
        (function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if (void 0 !== globalRef) return globalRef;
          throw new Error("Unable to locate global object.");
        })().__FIREBASE_DEFAULTS__,
      getDefaults = () => {
        try {
          return (
            getDefaultsFromGlobal() ||
            (() => {
              if (void 0 === nodeProcess || void 0 === nodeProcess.env) return;
              const defaultsJson = nodeProcess.env.__FIREBASE_DEFAULTS__;
              return defaultsJson ? JSON.parse(defaultsJson) : void 0;
            })() ||
            (() => {
              if ("undefined" == typeof document) return;
              let cookieMatch;
              try {
                cookieMatch = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
              } catch (cookieError) {
                return;
              }
              const decodedCookie = cookieMatch && base64Decode(cookieMatch[1]);
              return decodedCookie && JSON.parse(decodedCookie);
            })()
          );
        } catch (defaultsError) {
          return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${defaultsError}`);
        }
      },
      getDefaultAppConfig = () => {
        var firebaseDefaults;
        return null === (firebaseDefaults = getDefaults()) || void 0 === firebaseDefaults
          ? void 0
          : firebaseDefaults.config;
      };
    class Deferred {
      constructor() {
        ((this.reject = () => {}),
          (this.resolve = () => {}),
          (this.promise = new Promise((resolvePromise, rejectPromise) => {
            ((this.resolve = resolvePromise), (this.reject = rejectPromise));
          })));
      }
      wrapCallback(callback) {
        return (callbackError, callbackValue) => {
          (callbackError ? this.reject(callbackError) : this.resolve(callbackValue),
            "function" == typeof callback &&
              (this.promise.catch(() => {}),
              1 === callback.length ? callback(callbackError) : callback(callbackError, callbackValue)));
        };
      }
    }
    function isIndexedDBAvailable() {
      try {
        return "object" == typeof indexedDB;
      } catch (indexedDbError) {
        return !1;
      }
    }
    function validateIndexedDBOpenable() {
      return new Promise((resolveOpenable, rejectOpenable) => {
        try {
          let preExist = !0;
          const dbCheckName = "validate-browser-context-for-indexeddb-analytics-module",
            openRequest = self.indexedDB.open(dbCheckName);
          ((openRequest.onsuccess = () => {
            (openRequest.result.close(),
              preExist || self.indexedDB.deleteDatabase(dbCheckName),
              resolveOpenable(!0));
          }),
            (openRequest.onupgradeneeded = () => {
              preExist = !1;
            }),
            (openRequest.onerror = () => {
              var requestError;
              rejectOpenable(
                (null === (requestError = openRequest.error) || void 0 === requestError
                  ? void 0
                  : requestError.message) || "",
              );
            }));
        } catch (openError) {
          rejectOpenable(openError);
        }
      });
    }
    function areCookiesEnabled() {
      return !("undefined" == typeof navigator || !navigator.cookieEnabled);
    }
    class FirebaseError extends Error {
      constructor(code, message, customData) {
        (super(message),
          (this.code = code),
          (this.customData = customData),
          (this.name = "FirebaseError"),
          Object.setPrototypeOf(this, FirebaseError.prototype),
          Error.captureStackTrace && Error.captureStackTrace(this, ErrorFactory.prototype.create));
      }
    }
    class ErrorFactory {
      constructor(service, serviceName, errorMap) {
        ((this.service = service), (this.serviceName = serviceName), (this.errors = errorMap));
      }
      create(code, ...data) {
        const createCustomData = data[0] || {},
          fullCode = `${this.service}/${code}`,
          template = this.errors[code],
          formattedMessage = template
            ? (function (template, data) {
                return template.replace(templatePattern, (placeholderMatch, placeholderKey) => {
                  const replacement = data[placeholderKey];
                  return null != replacement ? String(replacement) : `<${placeholderKey}?>`;
                });
              })(template, createCustomData)
            : "Error",
          fullMessage = `${this.serviceName}: ${formattedMessage} (${fullCode}).`;
        return new FirebaseError(fullCode, fullMessage, createCustomData);
      }
    }
    const templatePattern = /\{\$([^}]+)}/g;
    function deepEqual(objA, objB) {
      if (objA === objB) return !0;
      const aKeys = Object.keys(objA),
        bKeys = Object.keys(objB);
      for (const aKey of aKeys) {
        if (!bKeys.includes(aKey)) return !1;
        const aProp = objA[aKey],
          bProp = objB[aKey];
        if (isObject(aProp) && isObject(bProp)) {
          if (!deepEqual(aProp, bProp)) return !1;
        } else if (aProp !== bProp) return !1;
      }
      for (const bKey of bKeys) if (!aKeys.includes(bKey)) return !1;
      return !0;
    }
    function isObject(candidate) {
      return null !== candidate && "object" == typeof candidate;
    }
    function getModularInstance(instance) {
      return instance && instance._delegate ? instance._delegate : instance;
    }
  }).call(this, webpackRequire(42), webpackRequire(120));
};
