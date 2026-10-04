/**
 * rem---device — readable reconstruction of webpack module 326 (chunk 8c4c131.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/8c4c131.js
 *
 * Nuxt client plugin that sets up responsive rem scaling (a lib-flexible variant) and device detection. It reads device info from a device-utils module (`getDeviceType`, `ios`, `android`, `samsungTablet`, `getOrient`), adds a `mo` or `pc` class to `<html>`, and computes the root font-size from `clientWidth` against a design width (750x1334 for mobile with landscape handling, 2560 with min-scale 1440 for PC), correcting for older Android Chrome (<79) font-size clamping, recalculating on `resize`/`pageshow`, adding a `hairlines` class on high-DPR screens, and revealing `#__nuxt`. It injects `$flex` (a getter for `rem`, `deviceType`/`device`, `clientType`, `pc`, `mobile`/`mo`, `samsungTablet`) and `$qs` (the qs library).
 *
 * Exports (minified key → meaning):
 *   a → the Nuxt plugin function (context, inject) registering $flex and $qs
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 326 from 8c4c131.js
// deps: 224, 556, 204, 321, 299
const module_326 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(224), webpackRequire(556), webpackRequire(204));
  var vendorBundle = webpackRequire(321),
    vendorBundleDefault = webpackRequire.n(vendorBundle),
    rem = 0,
    deviceType = "mobile",
    clientType = 3,
    isSamsungTablet = !1;
  function initFlexible(win, doc) {
    var options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      docEl = doc.documentElement,
      dpr = win.devicePixelRatio || 1,
      userAgent = navigator.userAgent.toLowerCase(),
      chromeVersion =
        userAgent.indexOf("android") > -1 &&
        userAgent.indexOf("chrome") > -1 &&
        userAgent.match(/chrome\/([\d.]+)/i)[1],
      chromeMajorVersion = chromeVersion && Number(chromeVersion.split(".")[0]),
      isModernChrome = chromeMajorVersion && chromeMajorVersion >= 79,
      designWidth = options.designWidth,
      designHeight = options.designHeight,
      maxFillWidth = options.maxFillWidth,
      minScaleWidth = options.minScaleWidth;
    function getBaseWidth(clientWidth) {
      var babelHelpers = webpackRequire(299),
        baseWidth = designWidth;
      return (
        750 === designWidth &&
          (baseWidth = "landscape" === babelHelpers.getOrient() ? designHeight : designWidth),
        clientWidth > maxFillWidth && (baseWidth = maxFillWidth),
        baseWidth
      );
    }
    function refreshRem() {
      var width = docEl.clientWidth;
      750 !== designWidth &&
        (designWidth < maxFillWidth && width > designWidth && width <= maxFillWidth && (width = designWidth),
        width < minScaleWidth && (width = minScaleWidth));
      var resolvedBaseWidth = getBaseWidth(width);
      if (
        ((rem = (100 * width) / resolvedBaseWidth),
        (docEl.style.fontSize = "".concat(rem, "px")),
        !isModernChrome)
      ) {
        var computedFontSize = parseFloat(win.getComputedStyle(docEl).fontSize);
        ((rem = (rem * rem) / computedFontSize), (docEl.style.fontSize = "".concat(rem, "px")));
      }
      doc.getElementById("__nuxt").style.visibility = "visible";
    }
    if (
      (refreshRem(),
      win.addEventListener("resize", refreshRem),
      win.addEventListener("pageshow", function (pageshowEvent) {
        pageshowEvent.persisted && refreshRem();
      }),
      dpr >= 2)
    ) {
      var fakeBody = doc.createElement("body"),
        testDiv = doc.createElement("div");
      ((testDiv.style.border = ".5px solid transparent"),
        fakeBody.appendChild(testDiv),
        docEl.appendChild(fakeBody),
        1 === testDiv.offsetHeight && docEl.classList.add("hairlines"),
        docEl.removeChild(fakeBody));
    }
  }
  function flexible() {
    var flexOptions = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    initFlexible(window, document, flexOptions);
  }
  function addRootClass(className) {
    document.documentElement.classList.add(className);
  }
  function getFlexValue(key) {
    switch (key) {
      case "rem":
        return rem;
      case "deviceType":
      case "device":
        return deviceType;
      case "clientType":
        return clientType;
      case "pc":
        return "pc" === deviceType;
      case "mobile":
      case "mo":
        return "mobile" === deviceType;
      case "samsungTablet":
        return isSamsungTablet;
      default:
        return;
    }
  }
  webpackExports.a = function (context, inject) {
    var deviceUtils;
    context.app;
    (inject("flex", getFlexValue),
      inject("qs", vendorBundleDefault.a),
      (deviceUtils = webpackRequire(299)),
      (deviceType = deviceUtils.getDeviceType()),
      deviceUtils.ios() ? (clientType = 1) : deviceUtils.android() && (clientType = 2),
      (isSamsungTablet = deviceUtils.samsungTablet()),
      "mobile" === deviceType
        ? (addRootClass("mo"),
          flexible({
            designWidth: 750,
            designHeight: 1334,
          }))
        : (addRootClass("pc"),
          flexible({
            designWidth: 2560,
            maxFillWidth: 2560,
            minScaleWidth: 1440,
          })));
  };
};
