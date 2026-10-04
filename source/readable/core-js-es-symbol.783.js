/**
 * core-js-es.symbol — readable reconstruction of webpack module 783 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * Vendored core-js polyfill es.symbol (Symbol constructor). When native Symbol is unavailable it installs a $Symbol wrapper that tracks symbols in shared stores ("symbols", "op-symbols", "wks"), keeps per-object hidden enumerability flags, and patches Object.create/defineProperty/defineProperties/getOwnPropertyDescriptor/getOwnPropertyNames plus propertyIsEnumerable, Symbol.prototype.description/toString, Symbol.useSetter/useSimple and well-known symbol definitions via core-js internals (_export, internal-state, object-define-property, etc.).
 *
 * Exports (minified key → meaning):
 *   (none)
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 783 from be1f69b.js
// deps: 22, 34, 51, 29, 89, 45, 159, 30, 52, 41, 79, 96, 228, 91, 127, 150, 191, 237, 479, 238, 147, 75, 309, 226, 101, 189, 235, 190, 230, 38, 313, 43, 480, 113, 130, 112
const module_783 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var vendorBundle = webpackRequire(22),
    vendorBundle2 = webpackRequire(34),
    vendorBundle3 = webpackRequire(51),
    vendorBundle4 = webpackRequire(29),
    vendorBundle5 = webpackRequire(89),
    vendorBundle6 = webpackRequire(45),
    vendorBundle7 = webpackRequire(159),
    vendorBundle8 = webpackRequire(30),
    vendorBundle9 = webpackRequire(52),
    vendorBundle10 = webpackRequire(41),
    vendorBundle11 = webpackRequire(79),
    vendorBundle12 = webpackRequire(96),
    vendorBundle13 = webpackRequire(228),
    vendorBundle14 = webpackRequire(91),
    vendorBundle15 = webpackRequire(127),
    vendorBundle16 = webpackRequire(150),
    vendorBundle17 = webpackRequire(191),
    vendorBundle18 = webpackRequire(237),
    vendorBundle19 = webpackRequire(479),
    vendorBundle20 = webpackRequire(238),
    vendorBundle21 = webpackRequire(147),
    vendorBundle22 = webpackRequire(75),
    vendorBundle23 = webpackRequire(309),
    vendorBundle24 = webpackRequire(226),
    vendorBundle25 = webpackRequire(101),
    vendorBundle26 = webpackRequire(189),
    vendorBundle27 = webpackRequire(235),
    vendorBundle28 = webpackRequire(190),
    vendorBundle29 = webpackRequire(230),
    vendorBundle30 = webpackRequire(38),
    vendorBundle31 = webpackRequire(313),
    vendorBundle32 = webpackRequire(43),
    vendorBundle33 = webpackRequire(480),
    vendorBundle34 = webpackRequire(113),
    vendorBundle35 = webpackRequire(130),
    arrayForEach = webpackRequire(112).forEach,
    HIDDEN = vendorBundle27("hidden"),
    SYMBOL = "Symbol",
    setInternalState = vendorBundle35.set,
    getInternalState = vendorBundle35.getterFor(SYMBOL),
    ObjectPrototype = Object.prototype,
    SymbolCtor = vendorBundle2.Symbol,
    SymbolPrototype = SymbolCtor && SymbolCtor.prototype,
    TypeErrorCtor = vendorBundle2.TypeError,
    QObject = vendorBundle2.QObject,
    nativeGetOwnPropertyDescriptor = vendorBundle21.f,
    nativeDefineProperty = vendorBundle22.f,
    nativeGetOwnPropertyNames = vendorBundle19.f,
    nativePropertyIsEnumerable = vendorBundle24.f,
    arrayPush = vendorBundle4([].push),
    AllSymbols = vendorBundle26("symbols"),
    ObjectPrototypeSymbols = vendorBundle26("op-symbols"),
    WellKnownSymbolsStore = vendorBundle26("wks"),
    useSetterFlag = !QObject || !QObject.prototype || !QObject.prototype.findChild,
    setSymbolDescriptor =
      vendorBundle6 &&
      vendorBundle8(function () {
        return (
          7 !=
          vendorBundle16(
            nativeDefineProperty({}, "a", {
              get: function () {
                return nativeDefineProperty(this, "a", {
                  value: 7,
                }).a;
              },
            }),
          ).a
        );
      })
        ? function (targetObject, propertyKey, attributes) {
            var protoDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, propertyKey);
            (protoDescriptor && delete ObjectPrototype[propertyKey],
              nativeDefineProperty(targetObject, propertyKey, attributes),
              protoDescriptor &&
                targetObject !== ObjectPrototype &&
                nativeDefineProperty(ObjectPrototype, propertyKey, protoDescriptor));
          }
        : nativeDefineProperty,
    wrapSymbol = function (tag, symbolDescription) {
      var symbol = (AllSymbols[tag] = vendorBundle16(SymbolPrototype));
      return (
        setInternalState(symbol, {
          type: SYMBOL,
          tag: tag,
          description: symbolDescription,
        }),
        vendorBundle6 || (symbol.description = symbolDescription),
        symbol
      );
    },
    definePropertyPolyfill = function (defineTarget, defineKey, defineAttributes) {
      (defineTarget === ObjectPrototype &&
        definePropertyPolyfill(ObjectPrototypeSymbols, defineKey, defineAttributes),
        vendorBundle11(defineTarget));
      var propKey = vendorBundle13(defineKey);
      return (
        vendorBundle11(defineAttributes),
        vendorBundle9(AllSymbols, propKey)
          ? (defineAttributes.enumerable
              ? (vendorBundle9(defineTarget, HIDDEN) &&
                  defineTarget[HIDDEN][propKey] &&
                  (defineTarget[HIDDEN][propKey] = !1),
                (defineAttributes = vendorBundle16(defineAttributes, {
                  enumerable: vendorBundle15(0, !1),
                })))
              : (vendorBundle9(defineTarget, HIDDEN) ||
                  nativeDefineProperty(defineTarget, HIDDEN, vendorBundle15(1, {})),
                (defineTarget[HIDDEN][propKey] = !0)),
            setSymbolDescriptor(defineTarget, propKey, defineAttributes))
          : nativeDefineProperty(defineTarget, propKey, defineAttributes)
      );
    },
    definePropertiesPolyfill = function (propsTarget, properties) {
      vendorBundle11(propsTarget);
      var indexedProperties = vendorBundle12(properties),
        propertyKeys = vendorBundle17(indexedProperties).concat(
          getOwnPropertySymbolsPolyfill(indexedProperties),
        );
      return (
        arrayForEach(propertyKeys, function (eachKey) {
          (vendorBundle6 && !vendorBundle3(propertyIsEnumerablePolyfill, indexedProperties, eachKey)) ||
            definePropertyPolyfill(propsTarget, eachKey, indexedProperties[eachKey]);
        }),
        propsTarget
      );
    },
    propertyIsEnumerablePolyfill = function (enumValue) {
      var enumKey = vendorBundle13(enumValue),
        isEnumerable = vendorBundle3(nativePropertyIsEnumerable, this, enumKey);
      return (
        !(
          this === ObjectPrototype &&
          vendorBundle9(AllSymbols, enumKey) &&
          !vendorBundle9(ObjectPrototypeSymbols, enumKey)
        ) &&
        (!(
          isEnumerable ||
          !vendorBundle9(this, enumKey) ||
          !vendorBundle9(AllSymbols, enumKey) ||
          (vendorBundle9(this, HIDDEN) && this[HIDDEN][enumKey])
        ) ||
          isEnumerable)
      );
    },
    getOwnPropertyDescriptorPolyfill = function (descriptorTarget, descriptorKey) {
      var indexedTarget = vendorBundle12(descriptorTarget),
        descriptorPropKey = vendorBundle13(descriptorKey);
      if (
        indexedTarget !== ObjectPrototype ||
        !vendorBundle9(AllSymbols, descriptorPropKey) ||
        vendorBundle9(ObjectPrototypeSymbols, descriptorPropKey)
      ) {
        var descriptor = nativeGetOwnPropertyDescriptor(indexedTarget, descriptorPropKey);
        return (
          !descriptor ||
            !vendorBundle9(AllSymbols, descriptorPropKey) ||
            (vendorBundle9(indexedTarget, HIDDEN) && indexedTarget[HIDDEN][descriptorPropKey]) ||
            (descriptor.enumerable = !0),
          descriptor
        );
      }
    },
    getOwnPropertyNamesPolyfill = function (namesTarget) {
      var ownNames = nativeGetOwnPropertyNames(vendorBundle12(namesTarget)),
        filteredNames = [];
      return (
        arrayForEach(ownNames, function (nameKey) {
          vendorBundle9(AllSymbols, nameKey) ||
            vendorBundle9(vendorBundle28, nameKey) ||
            arrayPush(filteredNames, nameKey);
        }),
        filteredNames
      );
    },
    getOwnPropertySymbolsPolyfill = function (symbolsTarget) {
      var isObjectPrototype = symbolsTarget === ObjectPrototype,
        candidateNames = nativeGetOwnPropertyNames(
          isObjectPrototype ? ObjectPrototypeSymbols : vendorBundle12(symbolsTarget),
        ),
        symbolsResult = [];
      return (
        arrayForEach(candidateNames, function (symbolKey) {
          !vendorBundle9(AllSymbols, symbolKey) ||
            (isObjectPrototype && !vendorBundle9(ObjectPrototype, symbolKey)) ||
            arrayPush(symbolsResult, AllSymbols[symbolKey]);
        }),
        symbolsResult
      );
    };
  (vendorBundle7 ||
    ((SymbolCtor = function () {
      if (vendorBundle10(SymbolPrototype, this)) throw TypeErrorCtor("Symbol is not a constructor");
      var descriptionArg =
          arguments.length && void 0 !== arguments[0] ? vendorBundle14(arguments[0]) : void 0,
        uidTag = vendorBundle29(descriptionArg),
        setter = function (setterValue) {
          (this === ObjectPrototype && vendorBundle3(setter, ObjectPrototypeSymbols, setterValue),
            vendorBundle9(this, HIDDEN) && vendorBundle9(this[HIDDEN], uidTag) && (this[HIDDEN][uidTag] = !1),
            setSymbolDescriptor(this, uidTag, vendorBundle15(1, setterValue)));
        };
      return (
        vendorBundle6 &&
          useSetterFlag &&
          setSymbolDescriptor(ObjectPrototype, uidTag, {
            configurable: !0,
            set: setter,
          }),
        wrapSymbol(uidTag, descriptionArg)
      );
    }),
    vendorBundle25((SymbolPrototype = SymbolCtor.prototype), "toString", function () {
      return getInternalState(this).tag;
    }),
    vendorBundle25(SymbolCtor, "withoutSetter", function (rawDescription) {
      return wrapSymbol(vendorBundle29(rawDescription), rawDescription);
    }),
    (vendorBundle24.f = propertyIsEnumerablePolyfill),
    (vendorBundle22.f = definePropertyPolyfill),
    (vendorBundle23.f = definePropertiesPolyfill),
    (vendorBundle21.f = getOwnPropertyDescriptorPolyfill),
    (vendorBundle18.f = vendorBundle19.f = getOwnPropertyNamesPolyfill),
    (vendorBundle20.f = getOwnPropertySymbolsPolyfill),
    (vendorBundle31.f = function (wellKnownName) {
      return wrapSymbol(vendorBundle30(wellKnownName), wellKnownName);
    }),
    vendorBundle6 &&
      (nativeDefineProperty(SymbolPrototype, "description", {
        configurable: !0,
        get: function () {
          return getInternalState(this).description;
        },
      }),
      vendorBundle5 ||
        vendorBundle25(ObjectPrototype, "propertyIsEnumerable", propertyIsEnumerablePolyfill, {
          unsafe: !0,
        }))),
    vendorBundle(
      {
        global: !0,
        constructor: !0,
        wrap: !0,
        forced: !vendorBundle7,
        sham: !vendorBundle7,
      },
      {
        Symbol: SymbolCtor,
      },
    ),
    arrayForEach(vendorBundle17(WellKnownSymbolsStore), function (wellKnownSymbolName) {
      vendorBundle32(wellKnownSymbolName);
    }),
    vendorBundle(
      {
        target: SYMBOL,
        stat: !0,
        forced: !vendorBundle7,
      },
      {
        useSetter: function () {
          useSetterFlag = !0;
        },
        useSimple: function () {
          useSetterFlag = !1;
        },
      },
    ),
    vendorBundle(
      {
        target: "Object",
        stat: !0,
        forced: !vendorBundle7,
        sham: !vendorBundle6,
      },
      {
        create: function (prototypeObject, createProperties) {
          return void 0 === createProperties
            ? vendorBundle16(prototypeObject)
            : definePropertiesPolyfill(vendorBundle16(prototypeObject), createProperties);
        },
        defineProperty: definePropertyPolyfill,
        defineProperties: definePropertiesPolyfill,
        getOwnPropertyDescriptor: getOwnPropertyDescriptorPolyfill,
      },
    ),
    vendorBundle(
      {
        target: "Object",
        stat: !0,
        forced: !vendorBundle7,
      },
      {
        getOwnPropertyNames: getOwnPropertyNamesPolyfill,
      },
    ),
    vendorBundle33(),
    vendorBundle34(SymbolCtor, SYMBOL),
    (vendorBundle28[HIDDEN] = !0));
};
