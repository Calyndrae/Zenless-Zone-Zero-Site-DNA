/**
 * bar — readable reconstruction of webpack module 1187 (chunk df9cade.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/df9cade.js
 *
 * Vendored vuescroll v4.17.3 (native mode build) wrapped around Vue (module 1). It defines the "bar" component (rail __rail-is-*, bar wrapper __bar-wrap-is-*, thumb __bar-is-* and optional __bar-button scroll buttons with drag, track-click and press-to-scroll handlers), the "scrollPanel" component (__panel), and a "vueScroll" root component (__vuescroll) that merges $vuescrollConfig/ops with defaults (rail/bar/scrollButton/scrollPanel/vuescroll), hides native scrollbars via negative margins or an injected __hidebar style, tracks bar size/position/opacity, handles mouse-wheel and touch/pointer events, smooth-scrolls with a requestAnimationFrame-driven ScrollControl and easing functions, detects resize via an injected <object>, and exposes scrollTo/scrollBy/scrollIntoView/refresh APIs and events such as handle-scroll and handle-resize. The returned plugin object has install (registers the component and $vuescrollConfig), version, refreshAll and a static scrollTo, and auto-installs on window.Vue.
 *
 * Exports (minified key → meaning):
 *   module.exports → vuescroll plugin/component object { install, version: "4.17.3", refreshAll, scrollTo, ...vueScroll component options }
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1187 from df9cade.js
// deps: 1
const module_1187 = function (webpackModule, webpackExports, webpackRequire) {
  webpackModule.exports = (function (Vue) {
    "use strict";

    Vue = Vue && Vue.hasOwnProperty("default") ? Vue.default : Vue;
    var typeOf =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (nativeTypeofValue) {
              return typeof nativeTypeofValue;
            }
          : function (polyfillTypeofValue) {
              return polyfillTypeofValue &&
                "function" == typeof Symbol &&
                polyfillTypeofValue.constructor === Symbol &&
                polyfillTypeofValue !== Symbol.prototype
                ? "symbol"
                : typeof polyfillTypeofValue;
            },
      classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
      },
      createClass = (function () {
        function defineProperties(target, props) {
          for (var propIndex = 0; propIndex < props.length; propIndex++) {
            var descriptor = props[propIndex];
            ((descriptor.enumerable = descriptor.enumerable || !1),
              (descriptor.configurable = !0),
              "value" in descriptor && (descriptor.writable = !0),
              Object.defineProperty(target, descriptor.key, descriptor));
          }
        }
        return function (ConstructorFn, protoProps, staticProps) {
          return (
            protoProps && defineProperties(ConstructorFn.prototype, protoProps),
            staticProps && defineProperties(ConstructorFn, staticProps),
            ConstructorFn
          );
        };
      })(),
      defineProperty = function (obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      },
      extend =
        Object.assign ||
        function (extendTarget) {
          for (var argIndex = 1; argIndex < arguments.length; argIndex++) {
            var source = arguments[argIndex];
            for (var sourceKey in source)
              Object.prototype.hasOwnProperty.call(source, sourceKey) &&
                (extendTarget[sourceKey] = source[sourceKey]);
          }
          return extendTarget;
        },
      toConsumableArray = function (arr) {
        if (Array.isArray(arr)) {
          for (var arrIndex = 0, arrCopy = Array(arr.length); arrIndex < arr.length; arrIndex++)
            arrCopy[arrIndex] = arr[arrIndex];
          return arrCopy;
        }
        return Array.from(arr);
      };
    function isIE() {
      if (isServer()) return !1;
      var userAgent = navigator.userAgent.toLowerCase();
      return (
        -1 !== userAgent.indexOf("msie") ||
        -1 !== userAgent.indexOf("trident") ||
        -1 !== userAgent.indexOf(" edge/")
      );
    }
    var isIos = function () {
        return !isServer() && !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      },
      isServer = function () {
        return Vue.prototype.$isServer;
      },
      TouchManager = (function () {
        function TouchManagerClass() {
          classCallCheck(this, TouchManagerClass);
        }
        return (
          createClass(TouchManagerClass, [
            {
              key: "getEventObject",
              value: function (touchEvent) {
                return this.touchObject ? (this.isTouch ? touchEvent.touches : [touchEvent]) : null;
              },
            },
            {
              key: "getTouchObject",
              value: function () {
                if (isServer()) return null;
                this.isTouch = !1;
                var navUserAgent = navigator.userAgent,
                  platform = navigator.platform,
                  touchObject = {};
                switch (
                  ((touchObject.touch = !!(
                    ("ontouchstart" in window && !window.opera) ||
                    "msmaxtouchpoints" in window.navigator ||
                    "maxtouchpoints" in window.navigator ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0
                  )),
                  (touchObject.nonDeskTouch =
                    (touchObject.touch && !/win32/i.test(platform)) ||
                    (touchObject.touch && /win32/i.test(platform) && /mobile/i.test(navUserAgent))),
                  (touchObject.eventType =
                    "onmousedown" in window && !touchObject.nonDeskTouch
                      ? "mouse"
                      : "ontouchstart" in window
                        ? "touch"
                        : "msmaxtouchpoints" in window.navigator || navigator.msMaxTouchPoints > 0
                          ? "mstouchpoints"
                          : "maxtouchpoints" in window.navigator || navigator.maxTouchPoints > 0
                            ? "touchpoints"
                            : "mouse"),
                  touchObject.eventType)
                ) {
                  case "mouse":
                    ((touchObject.touchstart = "mousedown"),
                      (touchObject.touchend = "mouseup"),
                      (touchObject.touchmove = "mousemove"),
                      (touchObject.touchenter = "mouseenter"),
                      (touchObject.touchmove = "mousemove"),
                      (touchObject.touchleave = "mouseleave"));
                    break;
                  case "touch":
                    ((touchObject.touchstart = "touchstart"),
                      (touchObject.touchend = "touchend"),
                      (touchObject.touchmove = "touchmove"),
                      (touchObject.touchcancel = "touchcancel"),
                      (touchObject.touchenter = "touchstart"),
                      (touchObject.touchmove = "touchmove"),
                      (touchObject.touchleave = "touchend"),
                      (this.isTouch = !0));
                    break;
                  case "mstouchpoints":
                    ((touchObject.touchstart = "MSPointerDown"),
                      (touchObject.touchend = "MSPointerUp"),
                      (touchObject.touchmove = "MSPointerMove"),
                      (touchObject.touchcancel = "MSPointerCancel"),
                      (touchObject.touchenter = "MSPointerDown"),
                      (touchObject.touchmove = "MSPointerMove"),
                      (touchObject.touchleave = "MSPointerUp"));
                    break;
                  case "touchpoints":
                    ((touchObject.touchstart = "pointerdown"),
                      (touchObject.touchend = "pointerup"),
                      (touchObject.touchmove = "pointermove"),
                      (touchObject.touchcancel = "pointercancel"),
                      (touchObject.touchenter = "pointerdown"),
                      (touchObject.touchmove = "pointermove"),
                      (touchObject.touchleave = "pointerup"));
                }
                return (this.touchObject = touchObject);
              },
            },
          ]),
          TouchManagerClass
        );
      })();
    function deepCopy(copySource, copyDest, shallow) {
      if (shallow && isUndef(copyDest)) return copySource;
      if (isArray(copySource))
        ((copyDest = []),
          copySource.forEach(function (copyItem, copyIndex) {
            copyDest[copyIndex] = deepCopy(copyItem, copyDest[copyIndex]);
          }));
      else if (copySource) {
        if (!isPlainObj(copySource)) return copySource;
        for (var copyKey in ((copyDest = {}), copySource))
          copyDest[copyKey] =
            "object" === typeOf(copySource[copyKey])
              ? deepCopy(copySource[copyKey], copyDest[copyKey])
              : copySource[copyKey];
      }
      return copyDest;
    }
    function merge(mergeFrom, mergeTo, force, mergeShallow) {
      if (mergeShallow && isUndef(mergeTo)) return mergeFrom;
      if (((mergeTo = mergeTo || {}), isArray(mergeFrom)))
        (!isArray(mergeTo) && force && (mergeTo = []),
          isArray(mergeTo) &&
            mergeFrom.forEach(function (mergeItem, mergeIndex) {
              mergeTo[mergeIndex] = merge(mergeItem, mergeTo[mergeIndex], force, mergeShallow);
            }));
      else if (mergeFrom)
        if (isPlainObj(mergeFrom))
          for (var mergeKey in mergeFrom)
            "object" === typeOf(mergeFrom[mergeKey])
              ? isUndef(mergeTo[mergeKey])
                ? (mergeTo[mergeKey] = deepCopy(mergeFrom[mergeKey], mergeTo[mergeKey], mergeShallow))
                : merge(mergeFrom[mergeKey], mergeTo[mergeKey], force, mergeShallow)
              : (isUndef(mergeTo[mergeKey]) || force) && (mergeTo[mergeKey] = mergeFrom[mergeKey]);
        else force && (mergeTo = mergeFrom);
      return mergeTo;
    }
    function defineReactive(reactiveTarget, reactiveKey, source, sourceProp) {
      (source[reactiveKey] || "function" == typeof source) &&
        ((sourceProp = sourceProp || reactiveKey),
        Object.defineProperty(reactiveTarget, reactiveKey, {
          get: function () {
            return source[sourceProp];
          },
          configurable: !0,
        }));
    }
    var scrollBarWidth = void 0;
    function getGutter() {
      if (isServer()) return 0;
      if (void 0 !== scrollBarWidth) return scrollBarWidth;
      var outerDiv = document.createElement("div");
      ((outerDiv.style.visibility = "hidden"),
        (outerDiv.style.width = "100px"),
        (outerDiv.style.position = "absolute"),
        (outerDiv.style.top = "-9999px"),
        document.body.appendChild(outerDiv));
      var widthNoScroll = outerDiv.offsetWidth;
      outerDiv.style.overflow = "scroll";
      var innerDiv = document.createElement("div");
      ((innerDiv.style.width = "100%"), outerDiv.appendChild(innerDiv));
      var widthWithScroll = innerDiv.offsetWidth;
      return (outerDiv.parentNode.removeChild(outerDiv), (scrollBarWidth = widthNoScroll - widthWithScroll));
    }
    function eventCenter(eventTarget, eventName, handler) {
      var capture = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "on" == (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "on")
        ? eventTarget.addEventListener(eventName, handler, capture)
        : eventTarget.removeEventListener(eventName, handler, capture);
    }
    var warn = function (warnMessage) {
      console.warn("[vuescroll] " + warnMessage);
    };
    function isChildInParent(childElm, parentElm) {
      var isChild = !1;
      if (!childElm || !parentElm) return isChild;
      for (
        ;
        childElm.parentNode !== parentElm &&
        9 !== childElm.parentNode.nodeType &&
        !childElm.parentNode._isVuescroll;
      )
        childElm = childElm.parentNode;
      return (childElm.parentNode == parentElm && (isChild = !0), isChild);
    }
    function getPrefix(globalObj) {
      var engine,
        docStyle = document.documentElement.style;
      return (
        globalObj.opera && "[object Opera]" === Object.prototype.toString.call(opera)
          ? (engine = "presto")
          : "MozAppearance" in docStyle
            ? (engine = "gecko")
            : "WebkitAppearance" in docStyle
              ? (engine = "webkit")
              : "string" == typeof navigator.cpuClass && (engine = "trident"),
        {
          trident: "ms",
          gecko: "moz",
          webkit: "webkit",
          presto: "O",
        }[engine]
      );
    }
    function getComplitableStyle(cssProperty, cssValue) {
      if (isServer()) return !1;
      var compatibleValue = "-" + getPrefix(window) + "-" + cssValue,
        testElm = document.createElement("div");
      return (
        (testElm.style[cssProperty] = compatibleValue),
        testElm.style[cssProperty] == compatibleValue && compatibleValue
      );
    }
    function insertChildrenIntoSlot(slotH) {
      var parentVnode = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        childVnodes = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        data = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        swapChildren = arguments[4];
      if (parentVnode && parentVnode.length > 1)
        return swapChildren
          ? [].concat(toConsumableArray(childVnodes), toConsumableArray(parentVnode))
          : [].concat(toConsumableArray(parentVnode), toConsumableArray(childVnodes));
      var vnodeInfo = getVnodeInfo((parentVnode = parentVnode[0])),
        slotChildren = vnodeInfo.ch,
        slotTag = vnodeInfo.tag;
      return (
        vnodeInfo.isComponent &&
          (parentVnode.data = merge(
            {
              attrs: parentVnode.componentOptions.propsData,
            },
            parentVnode.data,
            !1,
            !0,
          )),
        (slotChildren = swapChildren
          ? [].concat(toConsumableArray(childVnodes), toConsumableArray(slotChildren))
          : [].concat(toConsumableArray(slotChildren), toConsumableArray(childVnodes))),
        delete parentVnode.data.slot,
        slotH(slotTag, merge(data, parentVnode.data, !1, !0), slotChildren)
      );
    }
    function getVnodeInfo(vnode) {
      if (!vnode || vnode.length > 1) return {};
      var isComponent = !!(vnode = vnode[0] ? vnode[0] : vnode).componentOptions,
        vnodeChildren = void 0,
        vnodeTag = void 0;
      return (
        isComponent
          ? ((vnodeChildren = vnode.componentOptions.children || []), (vnodeTag = vnode.componentOptions.tag))
          : ((vnodeChildren = vnode.children || []), (vnodeTag = vnode.tag)),
        {
          isComponent: isComponent,
          ch: vnodeChildren,
          tag: vnodeTag,
        }
      );
    }
    function getRealParent(childVm) {
      var parentVm = childVm.$parent;
      return (!parentVm._isVuescrollRoot && parentVm && (parentVm = parentVm.$parent), parentVm);
    }
    var isArray = function (arrCandidate) {
        return Array.isArray(arrCandidate);
      },
      isPlainObj = function (objCandidate) {
        return "[object Object]" == Object.prototype.toString.call(objCandidate);
      },
      isUndef = function (undefCandidate) {
        return void 0 === undefCandidate;
      };
    function getNumericValue(distance, totalSize) {
      var percentMatch = void 0;
      return (percentMatch = (percentMatch = /(-?\d+(?:\.\d+?)?)%$/.exec(distance))
        ? (totalSize * (percentMatch = percentMatch[1] - 0)) / 100
        : distance - 0);
    }
    function createStyle(styleId, cssText) {
      if (!isServer() && !document.getElementById(styleId)) {
        var head = document.head || doc.getElementsByTagName("head")[0],
          style = document.createElement("style");
        ((style.id = styleId),
          (style.type = "text/css"),
          style.styleSheet
            ? (style.styleSheet.cssText = cssText)
            : style.appendChild(document.createTextNode(cssText)),
          head.appendChild(style));
      }
    }
    function createHideBarStyle() {
      createStyle(
        "vuescroll-hide-ios-bar",
        ".__hidebar::-webkit-scrollbar {\n      width: 0;\n      height: 0;\n    }",
      );
    }
    var apiMixin = {
        mounted: function () {
          vsInstances[this._uid] = this;
        },
        beforeDestroy: function () {
          delete vsInstances[this._uid];
        },
        methods: {
          scrollTo: function (scrollToPos, scrollToSpeed, scrollToEasing) {
            var targetX = scrollToPos.x,
              targetY = scrollToPos.y;
            ((!0 !== scrollToSpeed && void 0 !== scrollToSpeed) ||
              (scrollToSpeed = this.mergedOptions.scrollPanel.speed),
              this.internalScrollTo(targetX, targetY, scrollToSpeed, scrollToEasing));
          },
          scrollBy: function (scrollByDelta, scrollBySpeed, scrollByEasing) {
            var rawDx = scrollByDelta.dx,
              dx = void 0 === rawDx ? 0 : rawDx,
              rawDy = scrollByDelta.dy,
              dy = void 0 === rawDy ? 0 : rawDy,
              currentPosition = this.getPosition(),
              rawScrollLeft = currentPosition.scrollLeft,
              newScrollLeft = void 0 === rawScrollLeft ? 0 : rawScrollLeft,
              rawScrollTop = currentPosition.scrollTop,
              newScrollTop = void 0 === rawScrollTop ? 0 : rawScrollTop;
            (dx &&
              (newScrollLeft += getNumericValue(dx, this.scrollPanelElm.scrollWidth - this.$el.clientWidth)),
              dy &&
                (newScrollTop += getNumericValue(
                  dy,
                  this.scrollPanelElm.scrollHeight - this.$el.clientHeight,
                )),
              this.internalScrollTo(newScrollLeft, newScrollTop, scrollBySpeed, scrollByEasing));
          },
          scrollIntoView: function (targetElm) {
            var animate = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              rootElm = this.$el;
            if (
              ("string" == typeof targetElm && (targetElm = rootElm.querySelector(targetElm)),
              isChildInParent(targetElm, rootElm))
            ) {
              var parentRect = this.$el.getBoundingClientRect(),
                parentLeft = parentRect.left,
                parentTop = parentRect.top,
                childRect = targetElm.getBoundingClientRect(),
                diffX = parentLeft - childRect.left,
                diffY = parentTop - childRect.top;
              this.scrollBy(
                {
                  dx: -diffX,
                  dy: -diffY,
                },
                animate,
              );
            } else
              warn(
                "The element or selector you passed is not the element of Vuescroll, please pass the element that is in Vuescroll to scrollIntoView API. ",
              );
          },
          refresh: function () {
            (this.refreshInternalStatus(), this.$nextTick(this.refreshInternalStatus));
          },
        },
      },
      vsInstances = {};
    function refreshAll() {
      for (var instanceUid in vsInstances) vsInstances[instanceUid].refresh();
    }
    var baseConfig = {
      vuescroll: {
        sizeStrategy: "percent",
        detectResize: !0,
        locking: !0,
      },
      scrollPanel: {
        initialScrollY: !1,
        initialScrollX: !1,
        scrollingX: !0,
        scrollingY: !0,
        speed: 300,
        easing: void 0,
        verticalNativeBarPos: "right",
        maxHeight: void 0,
        maxWidth: void 0,
      },
      rail: {
        background: "#01a99a",
        opacity: 0,
        border: "none",
        size: "6px",
        specifyBorderRadius: !1,
        gutterOfEnds: null,
        gutterOfSide: "2px",
        keepShow: !1,
      },
      bar: {
        showDelay: 500,
        specifyBorderRadius: !1,
        onlyShowBarOnScroll: !0,
        keepShow: !1,
        background: "rgb(3, 185, 118)",
        opacity: 1,
        size: "6px",
        minSize: 0,
        disable: !1,
      },
      scrollButton: {
        enable: !1,
        background: "rgb(3, 185, 118)",
        opacity: 1,
        step: 180,
        mousedownStep: 30,
      },
    };
    function validateOps(validateOptions) {
      var hasRenderError = !1,
        scrollPanelOps = validateOptions.scrollPanel,
        barOps = validateOptions.bar,
        vBarOps = barOps.vBar,
        hBarOps = barOps.hBar,
        railOps = validateOptions.rail,
        vRailOps = railOps.vRail,
        hRailOps = railOps.hRail,
        initialScrollY = scrollPanelOps.initialScrollY,
        initialScrollX = scrollPanelOps.initialScrollX;
      return (
        initialScrollY &&
          !String(initialScrollY).match(/^\d+(\.\d+)?(%)?$/) &&
          warn(
            "The prop `initialScrollY` or `initialScrollX` should be a percent number like `10%` or an exact number that greater than or equal to 0 like `100`.",
          ),
        initialScrollX &&
          !String(initialScrollX).match(/^\d+(\.\d+)?(%)?$/) &&
          warn(
            "The prop `initialScrollY` or `initialScrollX` should be a percent number like `10%` or an exact number that greater than or equal to 0 like `100`.",
          ),
        (vBarOps || hBarOps || vRailOps || hRailOps) &&
          warn(
            "The options: vRail, hRail, vBar, hBar have been deprecated since v4.7.0,please use corresponing rail/bar instead!",
          ),
        extraValidators &&
          (extraValidators = [].concat(extraValidators)).forEach(function (extraValidator) {
            extraValidator(validateOptions) && (hasRenderError = !0);
          }),
        hasRenderError
      );
    }
    var extraValidators = null,
      extendOpts = function (extraOpts, newValidators) {
        ((extraOpts = [].concat(extraOpts)).forEach(function (extraOpt) {
          merge(extraOpt, baseConfig);
        }),
          (extraValidators = newValidators));
      },
      smallChangeArray = [
        "mergedOptions.vuescroll.pullRefresh.tips",
        "mergedOptions.vuescroll.pushLoad.tips",
        "mergedOptions.vuescroll.scroller.disable",
        "mergedOptions.rail",
        "mergedOptions.bar",
      ],
      scrollMap = {
        vertical: {
          size: "height",
          opsSize: "width",
          posName: "top",
          opposName: "bottom",
          sidePosName: "right",
          page: "pageY",
          scroll: "scrollTop",
          scrollSize: "scrollHeight",
          offset: "offsetHeight",
          client: "clientY",
          axis: "Y",
          scrollButton: {
            start: "top",
            end: "bottom",
          },
        },
        horizontal: {
          size: "width",
          opsSize: "height",
          posName: "left",
          opposName: "right",
          sidePosName: "bottom",
          page: "pageX",
          scroll: "scrollLeft",
          scrollSize: "scrollWidth",
          offset: "offsetWidth",
          client: "clientX",
          axis: "X",
          scrollButton: {
            start: "left",
            end: "right",
          },
        },
      };
    function createRequestAnimationFrame(globalWin) {
      var nativeRaf =
          globalWin.requestAnimationFrame ||
          globalWin.webkitRequestAnimationFrame ||
          globalWin.mozRequestAnimationFrame ||
          globalWin.oRequestAnimationFrame,
        isNativeRaf = !!nativeRaf;
      if (
        (nativeRaf &&
          !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(nativeRaf.toString()) &&
          (isNativeRaf = !1),
        isNativeRaf)
      )
        return function (rafCallback, rafRoot) {
          nativeRaf(rafCallback, rafRoot);
        };
      var TARGET_FPS = 60,
        requests = {},
        rafHandle = 1,
        intervalHandle = null,
        lastActive = +new Date();
      return function (pendingCallback) {
        var callbackHandle = rafHandle++;
        return (
          (requests[callbackHandle] = pendingCallback),
          null === intervalHandle &&
            (intervalHandle = setInterval(function () {
              var time = +new Date(),
                currentRequests = requests;
              for (var requestKey in ((requests = {}), currentRequests))
                currentRequests.hasOwnProperty(requestKey) &&
                  (currentRequests[requestKey](time), (lastActive = time));
              time - lastActive > 2500 && (clearInterval(intervalHandle), (intervalHandle = null));
            }, 1e3 / TARGET_FPS)),
          callbackHandle
        );
      };
    }
    var colorCache = {},
      rgbReg = /rgb\(/,
      extractRgbColor = /rgb\((.*)\)/;
    function getRgbAColor(color, opacity) {
      var colorCacheId = color + "&" + opacity;
      if (colorCache[colorCacheId]) return colorCache[colorCacheId];
      var div = document.createElement("div");
      ((div.style.background = color), document.body.appendChild(div));
      var computedColor = window.getComputedStyle(div).backgroundColor;
      return (
        document.body.removeChild(div),
        rgbReg.test(computedColor)
          ? (colorCache[colorCacheId] =
              "rgba(" + extractRgbColor.exec(computedColor)[1] + ", " + opacity + ")")
          : color
      );
    }
    var BarComponent = {
      name: "bar",
      props: {
        ops: Object,
        state: Object,
        hideBar: Boolean,
        otherBarHide: Boolean,
        type: String,
      },
      computed: {
        bar: function () {
          return scrollMap[this.type];
        },
        barSize: function () {
          return Math.max(this.state.size, this.ops.bar.minSize);
        },
        barRatio: function () {
          return (1 - this.barSize) / (1 - this.state.size);
        },
      },
      render: function (barH) {
        var railStyle,
          barWrapStyle,
          barStyle,
          barVm = this,
          railBackground = getRgbAColor(barVm.ops.rail.background, barVm.ops.rail.opacity);
        this.touchManager || (this.touchManager = new TouchManager());
        var railEvents,
          railSize = barVm.ops.rail.size,
          endGutter = barVm.otherBarHide ? 0 : railSize,
          railTouchObj = barVm.touchManager.getTouchObject(),
          railConfig = {
            class: "__rail-is-" + barVm.type,
            style:
              ((railStyle = {
                position: "absolute",
                "z-index": "1",
                borderRadius: barVm.ops.rail.specifyBorderRadius || railSize,
                background: railBackground,
                border: barVm.ops.rail.border,
              }),
              defineProperty(railStyle, barVm.bar.opsSize, railSize),
              defineProperty(railStyle, barVm.bar.posName, barVm.ops.rail.gutterOfEnds || 0),
              defineProperty(railStyle, barVm.bar.opposName, barVm.ops.rail.gutterOfEnds || endGutter),
              defineProperty(railStyle, barVm.bar.sidePosName, barVm.ops.rail.gutterOfSide),
              railStyle),
          };
        railTouchObj &&
          (railConfig.on =
            (defineProperty((railEvents = {}), railTouchObj.touchenter, function () {
              barVm.setRailHover();
            }),
            defineProperty(railEvents, railTouchObj.touchleave, function () {
              barVm.setRailLeave();
            }),
            railEvents));
        var buttonSize = barVm.ops.scrollButton.enable ? railSize : 0,
          barWrapper = {
            class: "__bar-wrap-is-" + barVm.type,
            style:
              ((barWrapStyle = {
                position: "absolute",
                borderRadius: barVm.ops.rail.specifyBorderRadius || railSize,
              }),
              defineProperty(barWrapStyle, barVm.bar.posName, buttonSize),
              defineProperty(barWrapStyle, barVm.bar.opposName, buttonSize),
              barWrapStyle),
            on: {},
          },
          barTranslate = (barVm.state.posValue * barVm.state.size * barVm.barRatio) / barVm.barSize,
          barOpacity = barVm.state.opacity;
        getRealParent(this).setClassHook(
          "vertical" == this.type ? "vBarVisible" : "hBarVisible",
          !!barOpacity,
        );
        var barConfig = {
          style:
            (defineProperty(
              (barStyle = {
                cursor: "pointer",
                position: "absolute",
                margin: "auto",
                transition: "opacity 0.5s",
                "user-select": "none",
                "border-radius": "inherit",
              }),
              barVm.bar.size,
              100 * barVm.barSize + "%",
            ),
            defineProperty(barStyle, "background", barVm.ops.bar.background),
            defineProperty(barStyle, barVm.bar.opsSize, barVm.ops.bar.size),
            defineProperty(barStyle, "opacity", barOpacity),
            defineProperty(
              barStyle,
              "transform",
              "translate" + scrollMap[barVm.type].axis + "(" + barTranslate + "%)",
            ),
            barStyle),
          class: "__bar-is-" + barVm.type,
          ref: "thumb",
          on: {},
        };
        "vertical" == barVm.type
          ? ((barWrapper.style.width = "100%"), (barConfig.style.left = 0), (barConfig.style.right = 0))
          : ((barWrapper.style.height = "100%"), (barConfig.style.top = 0), (barConfig.style.bottom = 0));
        var barTouchObj = this.touchManager.getTouchObject();
        return (
          (barConfig.on[barTouchObj.touchstart] = this.createBarEvent()),
          (barWrapper.on[barTouchObj.touchstart] = this.createTrackEvent()),
          barH("div", railConfig, [
            this.createScrollbarButton(barH, "start"),
            this.hideBar ? null : barH("div", barWrapper, [barH("div", barConfig)]),
            this.createScrollbarButton(barH, "end"),
          ])
        );
      },
      data: function () {
        return {
          isBarDragging: !1,
        };
      },
      methods: {
        setRailHover: function () {
          var hoverParent = getRealParent(this),
            vsState = hoverParent.vuescroll.state;
          vsState.isRailHover || ((vsState.isRailHover = !0), hoverParent.showBar());
        },
        setRailLeave: function () {
          var leaveParent = getRealParent(this);
          ((leaveParent.vuescroll.state.isRailHover = !1), leaveParent.hideBar());
        },
        setBarDrag: function (dragging) {
          (this.$emit("setBarDrag", (this.isBarDragging = dragging)),
            getRealParent(this).setClassHook(
              "vertical" == this.type ? "vBarDragging" : "hBarDragging",
              !!dragging,
            ));
        },
        createBarEvent: function () {
          var barCtx = this,
            dragParent = getRealParent(barCtx),
            dragTouchObj = barCtx.touchManager.getTouchObject();
          function onBarMousedown(downEvent) {
            var downPoint = barCtx.touchManager.getEventObject(downEvent);
            downPoint &&
              (downEvent.stopImmediatePropagation(),
              downEvent.preventDefault(),
              (downPoint = downPoint[0]),
              (document.onselectstart = function () {
                return !1;
              }),
              (barCtx.axisStartPos =
                downPoint[barCtx.bar.client] -
                barCtx.$refs.thumb.getBoundingClientRect()[barCtx.bar.posName]),
              barCtx.setBarDrag(!0),
              eventCenter(document, dragTouchObj.touchmove, onBarMousemove),
              eventCenter(document, dragTouchObj.touchend, onBarMouseup));
          }
          function onBarMousemove(moveEvent) {
            if (barCtx.axisStartPos) {
              var movePoint = barCtx.touchManager.getEventObject(moveEvent);
              if (movePoint) {
                movePoint = movePoint[0];
                var thumbParent = barCtx.$refs.thumb.parentNode,
                  thumbDelta =
                    movePoint[barCtx.bar.client] - thumbParent.getBoundingClientRect()[barCtx.bar.posName],
                  dragPercent =
                    ((thumbDelta /= barCtx.barRatio) - barCtx.axisStartPos) / thumbParent[barCtx.bar.offset];
                dragParent.scrollTo(
                  defineProperty(
                    {},
                    barCtx.bar.axis.toLowerCase(),
                    dragParent.scrollPanelElm[barCtx.bar.scrollSize] * dragPercent,
                  ),
                  !1,
                );
              }
            }
          }
          function onBarMouseup() {
            (barCtx.setBarDrag(!1),
              dragParent.hideBar(),
              (document.onselectstart = null),
              (barCtx.axisStartPos = 0),
              eventCenter(document, dragTouchObj.touchmove, onBarMousemove, !1, "off"),
              eventCenter(document, dragTouchObj.touchend, onBarMouseup, !1, "off"));
          }
          return onBarMousedown;
        },
        createTrackEvent: function () {
          var trackCtx = this;
          return function (trackEvent) {
            var trackParent = getRealParent(trackCtx),
              barMeta = trackCtx.bar,
              clientProp = barMeta.client,
              offsetProp = barMeta.offset,
              posNameProp = barMeta.posName,
              axisName = barMeta.axis,
              thumb = trackCtx.$refs.thumb;
            if ((trackEvent.preventDefault(), trackEvent.stopImmediatePropagation(), thumb)) {
              var thumbSize = thumb[offsetProp],
                trackPercent =
                  (trackCtx.touchManager.getEventObject(trackEvent)[0][clientProp] -
                    trackEvent.currentTarget.getBoundingClientRect()[posNameProp] -
                    thumbSize / 2) /
                  (trackEvent.currentTarget[offsetProp] - thumbSize);
              trackParent.scrollTo(defineProperty({}, axisName.toLowerCase(), 100 * trackPercent + "%"));
            }
          };
        },
        createScrollbarButton: function (buttonH, buttonType) {
          var buttonStyle,
            buttonCtx = this;
          if (!buttonCtx.ops.scrollButton.enable) return null;
          var buttonRailSize = buttonCtx.ops.rail.size,
            scrollButtonOps = buttonCtx.ops.scrollButton,
            buttonOpacity = scrollButtonOps.opacity,
            buttonColor = getRgbAColor(scrollButtonOps.background, buttonOpacity),
            buttonWrapperProps = {
              class: ["__bar-button", "__bar-button-is-" + buttonCtx.type + "-" + buttonType],
              style:
                ((buttonStyle = {}),
                defineProperty(buttonStyle, buttonCtx.bar.scrollButton[buttonType], 0),
                defineProperty(buttonStyle, "width", buttonRailSize),
                defineProperty(buttonStyle, "height", buttonRailSize),
                defineProperty(buttonStyle, "position", "absolute"),
                defineProperty(buttonStyle, "cursor", "pointer"),
                defineProperty(buttonStyle, "display", "table"),
                buttonStyle),
              ref: buttonType,
            },
            buttonInnerProps = {
              class: "__bar-button-inner",
              style: {
                border: "calc(" + buttonRailSize + " / 2.5) solid transparent",
                width: "0",
                height: "0",
                margin: "auto",
                position: "absolute",
                top: "0",
                bottom: "0",
                right: "0",
                left: "0",
              },
              on: {},
            };
          "vertical" == buttonCtx.type
            ? "start" == buttonType
              ? ((buttonInnerProps.style["border-bottom-color"] = buttonColor),
                (buttonInnerProps.style.transform = "translateY(-25%)"))
              : ((buttonInnerProps.style["border-top-color"] = buttonColor),
                (buttonInnerProps.style.transform = "translateY(25%)"))
            : "start" == buttonType
              ? ((buttonInnerProps.style["border-right-color"] = buttonColor),
                (buttonInnerProps.style.transform = "translateX(-25%)"))
              : ((buttonInnerProps.style["border-left-color"] = buttonColor),
                (buttonInnerProps.style.transform = "translateX(25%)"));
          var buttonTouchObj = this.touchManager.getTouchObject();
          return (
            (buttonInnerProps.on[buttonTouchObj.touchstart] = this.createScrollButtonEvent(
              buttonType,
              buttonTouchObj,
            )),
            buttonH("div", buttonWrapperProps, [buttonH("div", buttonInnerProps)])
          );
        },
        createScrollButtonEvent: function (btnType, btnTouchObj) {
          var btnCtx = this,
            btnParent = getRealParent(btnCtx),
            btnOps = btnCtx.ops.scrollButton,
            step = btnOps.step,
            mousedownStep = btnOps.mousedownStep,
            directedStep = "start" == btnType ? -step : step,
            directedMousedownStep = "start" == btnType ? -mousedownStep : mousedownStep,
            raf = createRequestAnimationFrame(window),
            barType = btnCtx.type,
            isMouseDown = !1,
            isMouseout = !0,
            pressTimeoutId = void 0;
          function onButtonPress(pressEvent) {
            if (3 != pressEvent.which) {
              if (
                (btnParent.setClassHook("cliking" + barType + btnType + "Button", !0),
                pressEvent.stopImmediatePropagation(),
                pressEvent.preventDefault(),
                (isMouseout = !1),
                btnParent.scrollBy(defineProperty({}, "d" + btnCtx.bar.axis.toLowerCase(), directedStep)),
                eventCenter(document, btnTouchObj.touchend, onButtonRelease, !1),
                "mousedown" == btnTouchObj.touchstart)
              ) {
                var pressedElm = btnCtx.$refs[btnType];
                (eventCenter(pressedElm, "mouseenter", onButtonEnter, !1),
                  eventCenter(pressedElm, "mouseleave", onButtonLeave, !1));
              }
              (clearTimeout(pressTimeoutId),
                (pressTimeoutId = setTimeout(function () {
                  ((isMouseDown = !0), raf(pressingButton, window));
                }, 500)));
            }
          }
          function pressingButton() {
            isMouseDown &&
              !isMouseout &&
              (btnParent.scrollBy(
                defineProperty({}, "d" + btnCtx.bar.axis.toLowerCase(), directedMousedownStep),
                !1,
              ),
              raf(pressingButton, window));
          }
          function onButtonRelease() {
            if (
              (clearTimeout(pressTimeoutId),
              (isMouseDown = !1),
              eventCenter(document, btnTouchObj.touchend, onButtonRelease, !1, "off"),
              "mousedown" == btnTouchObj.touchstart)
            ) {
              var releasedElm = btnCtx.$refs[btnType];
              (eventCenter(releasedElm, "mouseenter", onButtonEnter, !1, "off"),
                eventCenter(releasedElm, "mouseleave", onButtonLeave, !1, "off"));
            }
            btnParent.setClassHook("cliking" + barType + btnType + "Button", !1);
          }
          function onButtonEnter() {
            ((isMouseout = !1), pressingButton());
          }
          function onButtonLeave() {
            isMouseout = !0;
          }
          return onButtonPress;
        },
      },
    };
    function getBarData(vsVm, barDirection) {
      var barAxis = scrollMap[barDirection].axis,
        barName = barDirection.charAt(0) + "Bar",
        shouldHideBar =
          !vsVm.bar[barName].state.size ||
          !vsVm.mergedOptions.scrollPanel["scrolling" + barAxis] ||
          (vsVm.refreshLoad && "vertical" !== barDirection) ||
          vsVm.mergedOptions.bar.disable,
        keepShowRail = vsVm.mergedOptions.rail.keepShow;
      return shouldHideBar && !keepShowRail
        ? null
        : {
            hideBar: shouldHideBar,
            props: {
              type: barDirection,
              ops: {
                bar: vsVm.mergedOptions.bar,
                rail: vsVm.mergedOptions.rail,
                scrollButton: vsVm.mergedOptions.scrollButton,
              },
              state: vsVm.bar[barName].state,
              hideBar: shouldHideBar,
            },
            on: {
              setBarDrag: vsVm.setBarDrag,
            },
            ref: barDirection + "Bar",
            key: barDirection,
          };
    }
    function createBar(barsH, barsVm) {
      var verticalBarData = getBarData(barsVm, "vertical"),
        horizontalBarData = getBarData(barsVm, "horizontal");
      return (
        barsVm.setClassHook("hasVBar", !(!verticalBarData || verticalBarData.hideBar)),
        barsVm.setClassHook("hasHBar", !(!horizontalBarData || horizontalBarData.hideBar)),
        [
          verticalBarData
            ? barsH(
                "bar",
                extend({}, verticalBarData, {
                  props: extend(
                    {
                      otherBarHide: !horizontalBarData,
                    },
                    verticalBarData.props,
                  ),
                }),
              )
            : null,
          horizontalBarData
            ? barsH(
                "bar",
                extend({}, horizontalBarData, {
                  props: extend(
                    {
                      otherBarHide: !verticalBarData,
                    },
                    horizontalBarData.props,
                  ),
                }),
              )
            : null,
        ]
      );
    }
    var createComponent = function (componentConfig) {
        var renderPanel = componentConfig.render,
          subComponents = componentConfig.components,
          extraMixins = componentConfig.mixins;
        return {
          name: "vueScroll",
          props: {
            ops: {
              type: Object,
            },
          },
          components: subComponents,
          mixins: [apiMixin].concat(toConsumableArray([].concat(extraMixins))),
          created: function () {
            var createdVm = this,
              globalConfig = merge(this.$vuescrollConfig || {}, {}),
              mergedConfig = merge(baseConfig, globalConfig);
            ((this.$options.propsData.ops = this.$options.propsData.ops || {}),
              Object.keys(this.$options.propsData.ops).forEach(function (opKey) {
                defineReactive(createdVm.mergedOptions, opKey, createdVm.$options.propsData.ops);
              }),
              merge(mergedConfig, this.mergedOptions),
              (this._isVuescrollRoot = !0),
              (this.renderError = validateOps(this.mergedOptions)));
          },
          render: function (rootH) {
            var rootVm = this;
            if (rootVm.renderError) return rootH("div", [[rootVm.$slots.default]]);
            rootVm.touchManager || (rootVm.touchManager = new TouchManager());
            var rootEvents,
              data = {
                style: {
                  height: rootVm.vuescroll.state.height,
                  width: rootVm.vuescroll.state.width,
                  padding: 0,
                  position: "relative",
                  overflow: "hidden",
                },
                class: extend(
                  {
                    __vuescroll: !0,
                  },
                  rootVm.classHooks,
                ),
              },
              rootTouchObj = rootVm.touchManager.getTouchObject();
            rootTouchObj &&
              (data.on =
                (defineProperty((rootEvents = {}), rootTouchObj.touchenter, function () {
                  ((rootVm.vuescroll.state.pointerLeave = !1),
                    rootVm.updateBarStateAndEmitEvent(),
                    rootVm.setClassHook("mouseEnter", !0));
                }),
                defineProperty(rootEvents, rootTouchObj.touchleave, function () {
                  ((rootVm.vuescroll.state.pointerLeave = !0),
                    rootVm.hideBar(),
                    rootVm.setClassHook("mouseEnter", !1));
                }),
                defineProperty(rootEvents, rootTouchObj.touchmove, function () {
                  ((rootVm.vuescroll.state.pointerLeave = !1), rootVm.updateBarStateAndEmitEvent());
                }),
                rootEvents));
            var rootChildren = [renderPanel(rootH, rootVm)].concat(
                toConsumableArray(createBar(rootH, rootVm)),
              ),
              customContainerSlot = this.$slots["scroll-container"];
            return customContainerSlot
              ? insertChildrenIntoSlot(rootH, customContainerSlot, rootChildren, data)
              : rootH("div", data, [rootChildren]);
          },
          mounted: function () {
            var mountedVm = this;
            this.renderError ||
              (this.initVariables(),
              this.initWatchOpsChange(),
              this.refreshInternalStatus(),
              this.updatedCbs.push(function () {
                (mountedVm.scrollToAnchor(), mountedVm.updateBarStateAndEmitEvent());
              }));
          },
          updated: function () {
            var updatedVm = this;
            (this.updatedCbs.forEach(function (updatedCb) {
              updatedCb.call(updatedVm);
            }),
              (this.updatedCbs = []));
          },
          beforeDestroy: function () {
            this.destroy && this.destroy();
          },
          computed: {
            scrollPanelElm: function () {
              return this.$refs.scrollPanel._isVue ? this.$refs.scrollPanel.$el : this.$refs.scrollPanel;
            },
          },
          data: function () {
            return {
              vuescroll: {
                state: {
                  isDragging: !1,
                  pointerLeave: !0,
                  isRailHover: !1,
                  height: "100%",
                  width: "100%",
                  currentSizeStrategy: "percent",
                  currentScrollState: null,
                  currentScrollInfo: null,
                },
              },
              bar: {
                vBar: {
                  state: {
                    posValue: 0,
                    size: 0,
                    opacity: 0,
                  },
                },
                hBar: {
                  state: {
                    posValue: 0,
                    size: 0,
                    opacity: 0,
                  },
                },
              },
              mergedOptions: {
                vuescroll: {},
                scrollPanel: {},
                scrollContent: {},
                rail: {},
                bar: {},
              },
              updatedCbs: [],
              renderError: !1,
              classHooks: {
                hasVBar: !1,
                hasHBar: !1,
                vBarVisible: !1,
                hBarVisible: !1,
                vBarDragging: !1,
                hBarDragging: !1,
                clikingVerticalStartButton: !1,
                clikingVerticalEndButton: !1,
                clikingHorizontalStartButton: !1,
                clikingHorizontalEndButton: !1,
                mouseEnter: !1,
              },
            };
          },
          methods: {
            scrollingComplete: function () {
              this.updateBarStateAndEmitEvent("handle-scroll-complete");
            },
            setBarDrag: function (barDragging) {
              this.vuescroll.state.isDragging = barDragging;
            },
            setClassHook: function (hookKey, hookValue) {
              this.classHooks[hookKey] = hookValue;
            },
            showAndDefferedHideBar: function (forceHideBar) {
              var deferredVm = this;
              (this.showBar(),
                this.timeoutId && (clearTimeout(this.timeoutId), (this.timeoutId = 0)),
                (this.timeoutId = setTimeout(function () {
                  ((deferredVm.timeoutId = 0), deferredVm.hideBar(forceHideBar));
                }, this.mergedOptions.bar.showDelay)));
            },
            showBar: function () {
              var barOpacitySetting = this.mergedOptions.bar.opacity;
              ((this.bar.vBar.state.opacity = barOpacitySetting),
                (this.bar.hBar.state.opacity = barOpacitySetting));
            },
            hideBar: function (forceHide) {
              var hideState = this.vuescroll.state,
                isDragging = hideState.isDragging,
                isRailHover = hideState.isRailHover;
              isDragging ||
                isRailHover ||
                (forceHide &&
                  !this.mergedOptions.bar.keepShow &&
                  ((this.bar.hBar.state.opacity = 0), (this.bar.vBar.state.opacity = 0)),
                this.mergedOptions.bar.keepShow ||
                  this.vuescroll.state.isDragging ||
                  ((this.bar.vBar.state.opacity = 0), (this.bar.hBar.state.opacity = 0)));
            },
            useNumbericSize: function () {
              this.vuescroll.state.currentSizeStrategy = "number";
              var sizePanelOps = this.mergedOptions.scrollPanel,
                maxHeight = sizePanelOps.maxHeight,
                maxWidth = sizePanelOps.maxWidth,
                parentNodeElm = this.$el.parentNode,
                parentHeight = parentNodeElm.clientHeight,
                parentWidth = parentNodeElm.clientWidth,
                panelElm = this.scrollPanelElm,
                panelScrollHeight = panelElm.scrollHeight,
                panelScrollWidth = panelElm.scrollWidth,
                finalWidth = void 0,
                finalHeight = void 0;
              (maxHeight || maxWidth
                ? ((finalHeight = panelScrollHeight <= maxHeight ? void 0 : maxHeight),
                  (finalWidth = panelScrollWidth <= maxWidth ? void 0 : maxWidth))
                : ((finalHeight = parentHeight), (finalWidth = parentWidth)),
                (this.vuescroll.state.height = finalHeight ? finalHeight + "px" : void 0),
                (this.vuescroll.state.width = finalWidth ? finalWidth + "px" : void 0));
            },
            usePercentSize: function () {
              ((this.vuescroll.state.currentSizeStrategy = "percent"),
                (this.vuescroll.state.height = "100%"),
                (this.vuescroll.state.width = "100%"));
            },
            setVsSize: function () {
              var sizeStrategy = this.mergedOptions.vuescroll.sizeStrategy,
                setSizePanelOps = this.mergedOptions.scrollPanel,
                setSizeMaxHeight = setSizePanelOps.maxHeight,
                setSizeMaxWidth = setSizePanelOps.maxWidth,
                setSizePanelElm = this.scrollPanelElm,
                panelClientHeight = setSizePanelElm.clientHeight,
                panelClientWidth = setSizePanelElm.clientWidth;
              "number" == sizeStrategy ||
              (setSizeMaxHeight && panelClientHeight > setSizeMaxHeight) ||
              (setSizeMaxWidth && panelClientWidth > setSizeMaxWidth)
                ? this.useNumbericSize()
                : "percent" == sizeStrategy &&
                  panelClientHeight != setSizeMaxHeight &&
                  panelClientWidth != setSizeMaxWidth &&
                  this.usePercentSize();
            },
            initWatchOpsChange: function () {
              var watchVm = this,
                watchOpts = {
                  deep: !0,
                  sync: !0,
                };
              (this.$watch(
                "mergedOptions",
                function () {
                  setTimeout(function () {
                    if (watchVm.isSmallChangeThisTick)
                      return (
                        (watchVm.isSmallChangeThisTick = !1),
                        void watchVm.updateBarStateAndEmitEvent("options-change")
                      );
                    watchVm.refreshInternalStatus();
                  }, 0);
                },
                watchOpts,
              ),
                smallChangeArray.forEach(function (watchPath) {
                  watchVm.$watch(
                    watchPath,
                    function () {
                      watchVm.isSmallChangeThisTick = !0;
                    },
                    watchOpts,
                  );
                }));
            },
            scrollToAnchor: function () {
              var isValidHash = function (hashCandidate) {
                  return /^#[a-zA-Z_]\d*$/.test(hashCandidate);
                },
                hash = window.location.hash;
              if (hash && (!(hash = hash.slice(hash.lastIndexOf("#"))) || isValidHash(hash))) {
                var anchorElm = document.querySelector(hash);
                !isChildInParent(anchorElm, this.$el) ||
                  this.mergedOptions.scrollPanel.initialScrollY ||
                  this.mergedOptions.scrollPanel.initialScrollX ||
                  this.scrollIntoView(anchorElm);
              }
            },
          },
        };
      },
      ScrollPanelComponent = {
        name: "scrollPanel",
        props: {
          ops: {
            type: Object,
            required: !0,
          },
        },
        methods: {
          updateInitialScroll: function () {
            var initialX = 0,
              initialY = 0,
              panelParent = getRealParent(this);
            (this.ops.initialScrollX && (initialX = this.ops.initialScrollX),
              this.ops.initialScrollY && (initialY = this.ops.initialScrollY),
              (initialX || initialY) &&
                panelParent.scrollTo({
                  x: initialX,
                  y: initialY,
                }));
          },
        },
        mounted: function () {
          var panelVm = this;
          setTimeout(function () {
            panelVm._isDestroyed || panelVm.updateInitialScroll();
          }, 0);
        },
        render: function (panelH) {
          var data = {
              class: ["__panel"],
              style: {
                position: "relative",
                boxSizing: "border-box",
              },
            },
            customPanelSlot = getRealParent(this).$slots["scroll-panel"];
          return customPanelSlot
            ? insertChildrenIntoSlot(panelH, customPanelSlot, this.$slots.default, data)
            : panelH("div", data, [[this.$slots.default]]);
        },
      };
    function installVuescrollCore(coreMixins, renderFn) {
      var componentMap,
        extConfigs = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        extValidators = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
        registeredComponents =
          (defineProperty((componentMap = {}), ScrollPanelComponent.name, ScrollPanelComponent),
          defineProperty(componentMap, BarComponent.name, BarComponent),
          componentMap),
        componentOpts = {};
      ((componentOpts.components = registeredComponents),
        (componentOpts.render = renderFn),
        (componentOpts.mixins = coreMixins));
      var vuescrollComponent = createComponent(componentOpts);
      return (extendOpts(extConfigs, extValidators), vuescrollComponent);
    }
    function getCurrentViewportDom(contentParent, viewportContainer) {
      for (
        var childNodes = contentParent.children,
          visibleDoms = [],
          isInView = function (domElm) {
            var domRect = domElm.getBoundingClientRect(),
              domLeft = domRect.left,
              domTop = domRect.top,
              domWidth = domRect.width,
              domHeight = domRect.height,
              containerRect = viewportContainer.getBoundingClientRect(),
              containerLeft = containerRect.left,
              containerTop = containerRect.top,
              containerHeight = containerRect.height,
              containerWidth = containerRect.width;
            return (
              domLeft - containerLeft + domWidth > 0 &&
              domLeft - containerLeft < containerWidth &&
              domTop - containerTop + domHeight > 0 &&
              domTop - containerTop < containerHeight
            );
          },
          childIndex = 0;
        childIndex < childNodes.length;
        childIndex++
      ) {
        var childNode = childNodes.item(childIndex);
        isInView(childNode) && !childNode.isResizeElm && visibleDoms.push(childNode);
      }
      return visibleDoms;
    }
    function createEasingFunction(easingName, easingFn) {
      return function (time) {
        return easingFn(easingName, time);
      };
    }
    function easingPattern(easingType, time) {
      var pattern = null;
      return (
        "easeInQuad" === easingType && (pattern = time * time),
        "easeOutQuad" === easingType && (pattern = time * (2 - time)),
        "easeInOutQuad" === easingType &&
          (pattern = time < 0.5 ? 2 * time * time : (4 - 2 * time) * time - 1),
        "easeInCubic" === easingType && (pattern = time * time * time),
        "easeOutCubic" === easingType && (pattern = --time * time * time + 1),
        "easeInOutCubic" === easingType &&
          (pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1),
        "easeInQuart" === easingType && (pattern = time * time * time * time),
        "easeOutQuart" === easingType && (pattern = 1 - --time * time * time * time),
        "easeInOutQuart" === easingType &&
          (pattern = time < 0.5 ? 8 * time * time * time * time : 1 - 8 * --time * time * time * time),
        "easeInQuint" === easingType && (pattern = time * time * time * time * time),
        "easeOutQuint" === easingType && (pattern = 1 + --time * time * time * time * time),
        "easeInOutQuint" === easingType &&
          (pattern =
            time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * --time * time * time * time * time),
        pattern || time
      );
    }
    function noop() {
      return !0;
    }
    var now =
        Date.now ||
        function () {
          return new Date().getTime();
        },
      ScrollControl = (function () {
        function ScrollControlClass() {
          (classCallCheck(this, ScrollControlClass), this.init(), (this.isRunning = !1));
        }
        return (
          createClass(ScrollControlClass, [
            {
              key: "pause",
              value: function () {
                this.isRunning && (this.isPaused = !0);
              },
            },
            {
              key: "stop",
              value: function () {
                this.isStopped = !0;
              },
            },
            {
              key: "continue",
              value: function () {
                this.isPaused &&
                  ((this.isPaused = !1), (this.ts = now() - this.percent * this.spd), this.execScroll());
              },
            },
            {
              key: "startScroll",
              value: function (startPos, endPos, duration) {
                var stepCb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : noop,
                  completeCb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : noop,
                  vertifyCb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : noop,
                  easingMethod = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : noop,
                  scrollDistance = endPos - startPos,
                  direction = scrollDistance > 0 ? -1 : 1,
                  nowTs = now();
                (this.isRunning || this.init(),
                  direction != this.dir || nowTs - this.ts > 200
                    ? ((this.ts = nowTs),
                      (this.dir = direction),
                      (this.st = startPos),
                      (this.ed = endPos),
                      (this.df = scrollDistance))
                    : (this.df += scrollDistance),
                  (this.spd = duration),
                  (this.completeCb = completeCb),
                  (this.vertifyCb = vertifyCb),
                  (this.stepCb = stepCb),
                  (this.easingMethod = easingMethod),
                  this.isRunning || this.execScroll());
              },
            },
            {
              key: "execScroll",
              value: function () {
                var control = this;
                if (this.df) {
                  var progress = this.percent || 0;
                  ((this.percent = 0), (this.isRunning = !0));
                  var scrollStep = function runStep() {
                    if (control.isRunning && control.vertifyCb(progress) && !control.isStopped) {
                      if (((progress = (now() - control.ts) / control.spd), control.isPaused))
                        return ((control.percent = progress), void (control.isRunning = !1));
                      if (progress < 1) {
                        var currentPos = control.st + control.df * control.easingMethod(progress);
                        (control.stepCb(currentPos), control.ref(runStep));
                      } else
                        (control.stepCb(control.st + control.df),
                          control.completeCb(),
                          (control.isRunning = !1));
                    } else control.isRunning = !1;
                  };
                  this.ref(scrollStep);
                }
              },
            },
            {
              key: "init",
              value: function () {
                ((this.st = 0),
                  (this.ed = 0),
                  (this.df = 0),
                  (this.spd = 0),
                  (this.ts = 0),
                  (this.dir = 0),
                  (this.ref = createRequestAnimationFrame(window)),
                  (this.isPaused = !1),
                  (this.isStopped = !1));
              },
            },
          ]),
          ScrollControlClass
        );
      })();
    function scrollToElement(scrollElm, destX, destY) {
      var scrollSpeed = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 300,
        scrollEasing = arguments[4],
        scrollingComplete = arguments[5],
        startLeft = void 0,
        startTop = void 0,
        elmScrollHeight = void 0,
        elmScrollWidth = void 0,
        elmClientWidth = void 0,
        elmClientHeight = void 0,
        nodeType = scrollElm.nodeType,
        scrollXControl = new ScrollControl(),
        scrollYControl = new ScrollControl();
      if (nodeType) {
        9 == nodeType && (scrollElm = scrollElm.scrollingElement);
        var scrollNode = scrollElm;
        ((startLeft = scrollNode.scrollLeft),
          (startTop = scrollNode.scrollTop),
          (elmScrollHeight = scrollNode.scrollHeight),
          (elmScrollWidth = scrollNode.scrollWidth),
          (elmClientWidth = scrollNode.clientWidth),
          (elmClientHeight = scrollNode.clientHeight),
          (destX = void 0 === destX ? startLeft : getNumericValue(destX, elmScrollWidth - elmClientWidth)),
          (destY = void 0 === destY ? startTop : getNumericValue(destY, elmScrollHeight - elmClientHeight)));
        var easingFunction = createEasingFunction(scrollEasing, easingPattern);
        (scrollXControl.startScroll(
          startLeft,
          destX,
          scrollSpeed,
          function (leftValue) {
            scrollElm.scrollLeft = leftValue;
          },
          scrollingComplete,
          void 0,
          easingFunction,
        ),
          scrollYControl.startScroll(
            startTop,
            destY,
            scrollSpeed,
            function (topValue) {
              scrollElm.scrollTop = topValue;
            },
            scrollingComplete,
            void 0,
            easingFunction,
          ));
      } else
        warn(
          "You must pass a dom for the first param, for window scrolling, you can pass document as the first param.",
        );
    }
    function getPanelData(panelContext) {
      var data = {
        ref: "scrollPanel",
        style: {
          height: "100%",
          overflowY: "scroll",
          overflowX: "scroll",
        },
        class: [],
        nativeOn: {
          "&scroll": panelContext.handleScroll,
        },
        props: {
          ops: panelContext.mergedOptions.scrollPanel,
        },
      };
      ((panelContext.scrollYEnable = !0),
        (panelContext.scrollXEnable = !0),
        (data.nativeOn.DOMMouseScroll = data.nativeOn.mousewheel = panelContext.onMouseWheel));
      var panelOps = panelContext.mergedOptions.scrollPanel,
        scrollingY = panelOps.scrollingY,
        scrollingX = panelOps.scrollingX;
      ((panelContext.bar.hBar.state.size && scrollingX) ||
        ((panelContext.scrollXEnable = !1), (data.style.overflowX = "hidden")),
        (panelContext.bar.vBar.state.size && scrollingY) ||
          ((panelContext.scrollYEnable = !1), (data.style.overflowY = "hidden")));
      var gutter = getGutter();
      return (
        gutter
          ? (panelContext.bar.vBar.state.size &&
              panelContext.mergedOptions.scrollPanel.scrollingY &&
              ("right" == panelContext.mergedOptions.scrollPanel.verticalNativeBarPos
                ? (data.style.marginRight = "-" + gutter + "px")
                : (data.style.marginLeft = "-" + gutter + "px")),
            panelContext.bar.hBar.state.size &&
              panelContext.mergedOptions.scrollPanel.scrollingX &&
              (data.style.height = "calc(100% + " + gutter + "px)"))
          : (createHideBarStyle(),
            data.class.push("__hidebar"),
            isIos() && (data.style["-webkit-overflow-scrolling"] = "touch")),
        (data.style.transformOrigin = ""),
        (data.style.transform = ""),
        data
      );
    }
    function createPanel(createPanelH, createPanelContext) {
      return createPanelH("scrollPanel", getPanelData(createPanelContext), [
        createContent(createPanelH, createPanelContext),
      ]);
    }
    function createContent(contentH, contentContext) {
      var contentStyle = {
          position: "relative",
          "box-sizing": "border-box",
          "min-width": "100%",
          "min-height": "100%",
        },
        data = {
          style: contentStyle,
          ref: "scrollContent",
          class: "__view",
        },
        customContentSlot = contentContext.$slots["scroll-content"];
      return (
        contentContext.mergedOptions.scrollPanel.scrollingX
          ? (contentStyle.width = getComplitableStyle("width", "fit-content"))
          : (data.style.width = "100%"),
        contentContext.mergedOptions.scrollPanel.padding &&
          (data.style.paddingRight = contentContext.mergedOptions.rail.size),
        customContentSlot
          ? insertChildrenIntoSlot(contentH, customContentSlot, contentContext.$slots.default, data)
          : contentH("div", data, [contentContext.$slots.default])
      );
    }
    function installResizeDetection(element, resizeCallback) {
      return injectResizeObject(element, resizeCallback);
    }
    function injectResizeObject(element, onResize) {
      if (!element.hasResized) {
        var objectCssText =
            "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",
          resizeWrapper = document.createElement("div");
        resizeWrapper.style.cssText = objectCssText;
        var object = document.createElement("object");
        return (
          (object.style.cssText = objectCssText),
          (object.type = "text/html"),
          (object.tabIndex = -1),
          (object.onload = function () {
            eventCenter(object.contentDocument.defaultView, "resize", onResize);
          }),
          isIE() || (object.data = "about:blank"),
          (resizeWrapper.isResizeElm = !0),
          resizeWrapper.appendChild(object),
          element.appendChild(resizeWrapper),
          isIE() && (object.data = "about:blank"),
          function () {
            (object.contentDocument &&
              eventCenter(object.contentDocument.defaultView, "resize", onResize, "off"),
              element.removeChild(resizeWrapper),
              (element.hasResized = !1));
          }
        );
      }
    }
    var nativeModeCore = {
        mixins: [
          {
            mounted: function () {
              ((this.scrollX = new ScrollControl()), (this.scrollY = new ScrollControl()));
            },
            methods: {
              nativeStop: function () {
                (this.scrollX.stop(), this.scrollY.stop());
              },
              nativePause: function () {
                (this.scrollX.pause(), this.scrollY.pause());
              },
              nativeContinue: function () {
                (this.scrollX.continue(), this.scrollY.continue());
              },
              nativeScrollTo: function (nativeX, nativeY, nativeSpeed, nativeEasing) {
                !1 === nativeSpeed ||
                  (void 0 === nativeSpeed && (nativeSpeed = this.mergedOptions.scrollPanel.speed));
                var nativePanelElm = this.scrollPanelElm,
                  currentScrollTop = nativePanelElm.scrollTop,
                  currentScrollLeft = nativePanelElm.scrollLeft,
                  nativeScrollWidth = nativePanelElm.scrollWidth,
                  nativeClientWidth = nativePanelElm.clientWidth,
                  nativeScrollHeight = nativePanelElm.scrollHeight,
                  nativeClientHeight = nativePanelElm.clientHeight;
                if (
                  ((nativeX =
                    void 0 === nativeX
                      ? currentScrollLeft
                      : getNumericValue(nativeX, nativeScrollWidth - nativeClientWidth)),
                  (nativeY =
                    void 0 === nativeY
                      ? currentScrollTop
                      : getNumericValue(nativeY, nativeScrollHeight - nativeClientHeight)),
                  nativeSpeed)
                ) {
                  var nativeEasingFn = createEasingFunction(
                    (nativeEasing = nativeEasing || this.mergedOptions.scrollPanel.easing),
                    easingPattern,
                  );
                  (nativeX != currentScrollLeft &&
                    this.scrollX.startScroll(
                      currentScrollLeft,
                      nativeX,
                      nativeSpeed,
                      function (nextLeft) {
                        nativePanelElm.scrollLeft = nextLeft;
                      },
                      this.scrollingComplete.bind(this),
                      void 0,
                      nativeEasingFn,
                    ),
                    nativeY != currentScrollTop &&
                      this.scrollY.startScroll(
                        currentScrollTop,
                        nativeY,
                        nativeSpeed,
                        function (nextTop) {
                          nativePanelElm.scrollTop = nextTop;
                        },
                        this.scrollingComplete.bind(this),
                        void 0,
                        nativeEasingFn,
                      ));
                } else ((nativePanelElm.scrollTop = nativeY), (nativePanelElm.scrollLeft = nativeX));
              },
              getCurrentviewDomNative: function () {
                return getCurrentViewportDom(this.scrollContentElm, this.$el);
              },
            },
          },
          {
            methods: {
              updateNativeModeBarState: function () {
                var barStatePanel = this.scrollPanelElm,
                  isPercentStrategy = "percent" == this.vuescroll.state.currentSizeStrategy,
                  vsStateInfo = this.vuescroll.state,
                  stateWidth = vsStateInfo.width,
                  stateHeight = vsStateInfo.height,
                  viewWidth =
                    isPercentStrategy || !stateWidth ? barStatePanel.clientWidth : stateWidth.slice(0, -2),
                  viewHeight =
                    isPercentStrategy || !stateHeight ? barStatePanel.clientHeight : stateHeight.slice(0, -2),
                  heightPercentage = viewHeight / barStatePanel.scrollHeight,
                  widthPercentage = viewWidth / barStatePanel.scrollWidth;
                ((this.bar.vBar.state.posValue = (100 * barStatePanel.scrollTop) / viewHeight),
                  (this.bar.hBar.state.posValue = (100 * barStatePanel.scrollLeft) / viewWidth),
                  (this.bar.vBar.state.size = heightPercentage < 1 ? heightPercentage : 0),
                  (this.bar.hBar.state.size = widthPercentage < 1 ? widthPercentage : 0));
              },
              getNativePosition: function () {
                return {
                  scrollTop: this.scrollPanelElm.scrollTop,
                  scrollLeft: this.scrollPanelElm.scrollLeft,
                };
              },
              css: function (cssElm, style) {
                return window.getComputedStyle(cssElm)[style];
              },
              checkScrollable: function (wheelTarget, deltaX, deltaY) {
                for (
                  var scrollable = !1, currentNode = wheelTarget.target ? wheelTarget.target : wheelTarget;
                  currentNode &&
                  1 == currentNode.nodeType &&
                  currentNode !== this.scrollPanelElm.parentNode &&
                  !/^BODY|HTML/.test(currentNode.nodeName);
                ) {
                  var overflow = this.css(currentNode, "overflow") || "";
                  if (/scroll|auto/.test(overflow)) {
                    var scrollProcess = this.getScrollProcess(currentNode),
                      verticalProgress = scrollProcess.v,
                      horizontalProgress = scrollProcess.h,
                      canScrollX = "hidden" !== this.css(currentNode, "overflowX"),
                      canScrollY = "hidden" !== this.css(currentNode, "overflowY");
                    if (
                      (canScrollX &&
                        ((deltaX < 0 && horizontalProgress > 0) || (deltaX > 0 && horizontalProgress < 1))) ||
                      (canScrollY &&
                        ((deltaY < 0 && verticalProgress > 0) || (deltaY > 0 && verticalProgress < 1)))
                    ) {
                      scrollable = currentNode == this.scrollPanelElm;
                      break;
                    }
                  }
                  currentNode = !!currentNode.parentNode && currentNode.parentNode;
                }
                return scrollable;
              },
              onMouseWheel: function (wheelEvent) {
                var vuescrollOps = this.mergedOptions.vuescroll,
                  wheelDirectionReverse = vuescrollOps.wheelDirectionReverse,
                  wheelScrollDuration = vuescrollOps.wheelScrollDuration,
                  checkShiftKey = vuescrollOps.checkShiftKey,
                  locking = vuescrollOps.locking,
                  wheelDeltaX = void 0,
                  wheelDeltaY = void 0;
                (wheelEvent.wheelDelta
                  ? wheelEvent.deltaY || wheelEvent.deltaX
                    ? ((wheelDeltaX = wheelEvent.deltaX),
                      (wheelDeltaY = wheelEvent.deltaY),
                      locking &&
                        (Math.abs(wheelEvent.deltaX) > Math.abs(wheelEvent.deltaY)
                          ? (wheelDeltaY = 0)
                          : (wheelDeltaX = 0)))
                    : ((wheelDeltaX = 0), (wheelDeltaY = (-1 * wheelEvent.wheelDelta) / 2))
                  : wheelEvent.detail &&
                    ((wheelDeltaY = wheelDeltaX = 16 * wheelEvent.detail),
                    1 == wheelEvent.axis ? (wheelDeltaY = 0) : 2 == wheelEvent.axis && (wheelDeltaX = 0)),
                  checkShiftKey &&
                    wheelEvent.shiftKey &&
                    ((wheelDeltaX ^= wheelDeltaY), (wheelDeltaX ^= wheelDeltaY ^= wheelDeltaX)),
                  wheelDirectionReverse &&
                    ((wheelDeltaX ^= wheelDeltaY), (wheelDeltaX ^= wheelDeltaY ^= wheelDeltaX)),
                  this.checkScrollable(wheelEvent, wheelDeltaX, wheelDeltaY) &&
                    (wheelEvent.stopPropagation(),
                    wheelEvent.preventDefault(),
                    this.scrollBy(
                      {
                        dx: wheelDeltaX,
                        dy: wheelDeltaY,
                      },
                      wheelScrollDuration,
                    )));
              },
            },
            computed: {
              scrollContentElm: function () {
                return this.$refs.scrollContent._isVue
                  ? this.$refs.scrollContent.$el
                  : this.$refs.scrollContent;
              },
            },
          },
        ],
        methods: {
          destroy: function () {
            this.destroyResize && this.destroyResize();
          },
          getCurrentviewDom: function () {
            return this.getCurrentviewDomNative();
          },
          internalScrollTo: function (internalX, internalY, animate, internalEasing) {
            this.nativeScrollTo(internalX, internalY, animate, internalEasing);
          },
          internalStop: function () {
            this.nativeStop();
          },
          internalPause: function () {
            this.nativePause();
          },
          internalContinue: function () {
            this.nativeContinue();
          },
          handleScroll: function (nativeScrollEvent) {
            this.updateBarStateAndEmitEvent("handle-scroll", nativeScrollEvent);
          },
          updateBarStateAndEmitEvent: function (eventType) {
            var eventPayload = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            (this.updateNativeModeBarState(),
              eventType && this.emitEvent(eventType, eventPayload),
              this.mergedOptions.bar.onlyShowBarOnScroll
                ? ("handle-scroll" != eventType &&
                    "handle-resize" != eventType &&
                    "refresh-status" != eventType &&
                    "window-resize" != eventType &&
                    "options-change" != eventType) ||
                  this.showAndDefferedHideBar(!0)
                : this.showAndDefferedHideBar());
          },
          getScrollProcess: function (processTarget) {
            var processElm = processTarget || this.scrollPanelElm,
              processScrollHeight = processElm.scrollHeight,
              processScrollWidth = processElm.scrollWidth,
              processClientHeight = processElm.clientHeight,
              processClientWidth = processElm.clientWidth,
              processScrollTop = processElm.scrollTop,
              processScrollLeft = processElm.scrollLeft;
            return {
              v: Math.min(processScrollTop / (processScrollHeight - processClientHeight || 1), 1),
              h: Math.min(processScrollLeft / (processScrollWidth - processClientWidth || 1), 1),
            };
          },
          emitEvent: function (emitEventType) {
            var emitNativeEvent = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              emitPanelElm = this.scrollPanelElm,
              emitScrollTop = emitPanelElm.scrollTop,
              emitScrollLeft = emitPanelElm.scrollLeft,
              verticalInfo = {
                type: "vertical",
              },
              horizontalInfo = {
                type: "horizontal",
              },
              emitProcess = this.getScrollProcess(),
              verticalProcessValue = emitProcess.v,
              horizontalProcessValue = emitProcess.h;
            ((verticalInfo.process = verticalProcessValue),
              (horizontalInfo.process = horizontalProcessValue),
              (verticalInfo.barSize = this.bar.vBar.state.size),
              (horizontalInfo.barSize = this.bar.hBar.state.size),
              (verticalInfo.scrollTop = emitScrollTop),
              (horizontalInfo.scrollLeft = emitScrollLeft),
              this.$emit(emitEventType, verticalInfo, horizontalInfo, emitNativeEvent));
          },
          initVariables: function () {
            this.$el._isVuescroll = !0;
          },
          refreshInternalStatus: function () {
            (this.setVsSize(), this.registryResize(), this.updateBarStateAndEmitEvent("refresh-status"));
          },
          registryResize: function () {
            var resizeVm = this,
              detectResize = this.mergedOptions.vuescroll.detectResize;
            if (
              (!this.destroyResize || !detectResize) &&
              (this.destroyResize && this.destroyResize(), detectResize)
            ) {
              var contentElm = this.scrollContentElm,
                resizeSelf = this,
                handleWindowResize = function () {
                  resizeSelf.updateBarStateAndEmitEvent("window-resize");
                },
                handleDomResize = function () {
                  var resizeInfo = {};
                  ((resizeInfo.width = resizeVm.scrollPanelElm.scrollWidth),
                    (resizeInfo.height = resizeVm.scrollPanelElm.scrollHeight),
                    resizeVm.updateBarStateAndEmitEvent("handle-resize", resizeInfo),
                    resizeVm.setVsSize());
                };
              window.addEventListener("resize", handleWindowResize, !1);
              var destroyDomResize = installResizeDetection(contentElm, handleDomResize),
                destroyWindowResize = function () {
                  window.removeEventListener("resize", handleWindowResize, !1);
                };
              this.destroyResize = function () {
                (destroyWindowResize(), destroyDomResize(), (resizeVm.destroyResize = null));
              };
            }
          },
          getPosition: function () {
            return this.getNativePosition();
          },
        },
      },
      component = installVuescrollCore(nativeModeCore, createPanel, [
        {
          vuescroll: {
            wheelScrollDuration: 0,
            wheelDirectionReverse: !1,
            checkShiftKey: !0,
          },
        },
      ]);
    function install(VueCtor) {
      var installOpts = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (VueCtor.component(installOpts.name || component.name, component),
        (VueCtor.prototype.$vuescrollConfig = installOpts.ops || {}));
    }
    var Vuescroll = extend(
      {
        install: install,
        version: "4.17.3",
        refreshAll: refreshAll,
        scrollTo: scrollToElement,
      },
      component,
    );
    return ("undefined" != typeof window && window.Vue && window.Vue.use(Vuescroll), Vuescroll);
  })(webpackRequire(1));
};
