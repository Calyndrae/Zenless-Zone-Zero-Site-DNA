/**
 * GSAP-ScrollToPlugin-3.10.4 — readable reconstruction of webpack module 722 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * Vendored GSAP ScrollToPlugin v3.10.4 (name "scrollTo"). It lazily grabs gsap (window.gsap or the registering instance), sets autoKillThreshold 7, and tweens window or element scrollLeft/scrollTop toward numeric, relative ("+="/"-="), "max" or element targets with offsetX/offsetY, temporarily disabling scroll-snap-type and auto-killing the tween when the user scrolls away (calling onAutoKill). It also exposes max, getOffset and buildGetter helpers and self-registers when gsap is on window.
 *
 * Exports (minified key → meaning):
 *   ScrollToPlugin → GSAP ScrollToPlugin plugin object
 *   default → same GSAP ScrollToPlugin plugin object
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 722 from be1f69b.js
// deps:
const module_722 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire.r(webpackExports),
    webpackRequire.d(webpackExports, "ScrollToPlugin", function () {
      return ScrollToPlugin;
    }),
    webpackRequire.d(webpackExports, "default", function () {
      return ScrollToPlugin;
    }));
  var gsap,
    coreInitted,
    win,
    docEl,
    body,
    toArray,
    config,
    windowExists = function () {
      return "undefined" != typeof window;
    },
    getGSAP = function () {
      return gsap || (windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap);
    },
    isString = function (maybeString) {
      return "string" == typeof maybeString;
    },
    isFunction = function (maybeFunction) {
      return "function" == typeof maybeFunction;
    },
    getMaxScroll = function (element, axis) {
      var dimension = "x" === axis ? "Width" : "Height",
        scrollProp = "scroll" + dimension,
        clientProp = "client" + dimension;
      return element === win || element === docEl || element === body
        ? Math.max(docEl[scrollProp], body[scrollProp]) -
            (win["inner" + dimension] || docEl[clientProp] || body[clientProp])
        : element[scrollProp] - element["offset" + dimension];
    },
    buildGetter = function (scrollElement, getterAxis) {
      var positionProp = "scroll" + ("x" === getterAxis ? "Left" : "Top");
      return (
        scrollElement === win &&
          (null != scrollElement.pageXOffset
            ? (positionProp = "page" + getterAxis.toUpperCase() + "Offset")
            : (scrollElement = null != docEl[positionProp] ? docEl : body)),
        function () {
          return scrollElement[positionProp];
        }
      );
    },
    getOffset = function (element, container) {
      if (!(element = toArray(element)[0]) || !element.getBoundingClientRect)
        return (
          console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0,
          }
        );
      var rect = element.getBoundingClientRect(),
        isRoot = !container || container === win || container === body,
        containerRect = isRoot
          ? {
              top: docEl.clientTop - (win.pageYOffset || docEl.scrollTop || body.scrollTop || 0),
              left: docEl.clientLeft - (win.pageXOffset || docEl.scrollLeft || body.scrollLeft || 0),
            }
          : container.getBoundingClientRect(),
        offsets = {
          x: rect.left - containerRect.left,
          y: rect.top - containerRect.top,
        };
      return (
        !isRoot &&
          container &&
          ((offsets.x += buildGetter(container, "x")()), (offsets.y += buildGetter(container, "y")())),
        offsets
      );
    },
    parseVal = function (value, parseTarget, parseAxis, currentVal, offset) {
      return isNaN(value) || "object" == typeof value
        ? isString(value) && "=" === value.charAt(1)
          ? parseFloat(value.substr(2)) * ("-" === value.charAt(0) ? -1 : 1) + currentVal - offset
          : "max" === value
            ? getMaxScroll(parseTarget, parseAxis) - offset
            : Math.min(
                getMaxScroll(parseTarget, parseAxis),
                getOffset(value, parseTarget)[parseAxis] - offset,
              )
        : parseFloat(value) - offset;
    },
    initCore = function () {
      ((gsap = getGSAP()),
        windowExists() &&
          gsap &&
          document.body &&
          ((win = window),
          (body = document.body),
          (docEl = document.documentElement),
          (toArray = gsap.utils.toArray),
          gsap.config({
            autoKillThreshold: 7,
          }),
          (config = gsap.config()),
          (coreInitted = 1)));
    },
    ScrollToPlugin = {
      version: "3.10.4",
      name: "scrollTo",
      rawVars: 1,
      register: function (core) {
        ((gsap = core), initCore());
      },
      init: function (target, vars, tween, index, targets) {
        coreInitted || initCore();
        var data = this,
          snapType = gsap.getProperty(target, "scrollSnapType");
        ((data.isWin = target === win),
          (data.target = target),
          (data.tween = tween),
          (vars = (function (rawVars, clonedIndex, clonedTarget, clonedTargets) {
            if (
              (isFunction(rawVars) && (rawVars = rawVars(clonedIndex, clonedTarget, clonedTargets)),
              "object" != typeof rawVars)
            )
              return isString(rawVars) && "max" !== rawVars && "=" !== rawVars.charAt(1)
                ? {
                    x: rawVars,
                    y: rawVars,
                  }
                : {
                    y: rawVars,
                  };
            if (rawVars.nodeType)
              return {
                y: rawVars,
                x: rawVars,
              };
            var prop,
              clonedVars = {};
            for (prop in rawVars)
              clonedVars[prop] =
                "onAutoKill" !== prop && isFunction(rawVars[prop])
                  ? rawVars[prop](clonedIndex, clonedTarget, clonedTargets)
                  : rawVars[prop];
            return clonedVars;
          })(vars, index, target, targets)),
          (data.vars = vars),
          (data.autoKill = !!vars.autoKill),
          (data.getX = buildGetter(target, "x")),
          (data.getY = buildGetter(target, "y")),
          (data.x = data.xPrev = data.getX()),
          (data.y = data.yPrev = data.getY()),
          snapType &&
            "none" !== snapType &&
            ((data.snap = 1),
            (data.snapInline = target.style.scrollSnapType),
            (target.style.scrollSnapType = "none")),
          null != vars.x
            ? (data.add(
                data,
                "x",
                data.x,
                parseVal(vars.x, target, "x", data.x, vars.offsetX || 0),
                index,
                targets,
              ),
              data._props.push("scrollTo_x"))
            : (data.skipX = 1),
          null != vars.y
            ? (data.add(
                data,
                "y",
                data.y,
                parseVal(vars.y, target, "y", data.y, vars.offsetY || 0),
                index,
                targets,
              ),
              data._props.push("scrollTo_y"))
            : (data.skipY = 1));
      },
      render: function (ratio, data) {
        for (
          var x,
            y,
            yDiff,
            xDiff,
            threshold,
            propTween = data._pt,
            renderTarget = data.target,
            renderTween = data.tween,
            autoKill = data.autoKill,
            xPrev = data.xPrev,
            yPrev = data.yPrev,
            isWin = data.isWin,
            snap = data.snap,
            snapInline = data.snapInline;
          propTween;
        )
          (propTween.r(ratio, propTween.d), (propTween = propTween._next));
        ((x = isWin || !data.skipX ? data.getX() : xPrev),
          (yDiff = (y = isWin || !data.skipY ? data.getY() : yPrev) - yPrev),
          (xDiff = x - xPrev),
          (threshold = config.autoKillThreshold),
          data.x < 0 && (data.x = 0),
          data.y < 0 && (data.y = 0),
          autoKill &&
            (!data.skipX &&
              (xDiff > threshold || xDiff < -threshold) &&
              x < getMaxScroll(renderTarget, "x") &&
              (data.skipX = 1),
            !data.skipY &&
              (yDiff > threshold || yDiff < -threshold) &&
              y < getMaxScroll(renderTarget, "y") &&
              (data.skipY = 1),
            data.skipX &&
              data.skipY &&
              (renderTween.kill(),
              data.vars.onAutoKill &&
                data.vars.onAutoKill.apply(renderTween, data.vars.onAutoKillParams || []))),
          isWin
            ? win.scrollTo(data.skipX ? x : data.x, data.skipY ? y : data.y)
            : (data.skipY || (renderTarget.scrollTop = data.y),
              data.skipX || (renderTarget.scrollLeft = data.x)),
          !snap ||
            (1 !== ratio && 0 !== ratio) ||
            ((y = renderTarget.scrollTop),
            (x = renderTarget.scrollLeft),
            snapInline
              ? (renderTarget.style.scrollSnapType = snapInline)
              : renderTarget.style.removeProperty("scroll-snap-type"),
            (renderTarget.scrollTop = y + 1),
            (renderTarget.scrollLeft = x + 1),
            (renderTarget.scrollTop = y),
            (renderTarget.scrollLeft = x)),
          (data.xPrev = data.x),
          (data.yPrev = data.y));
      },
      kill: function (property) {
        var killAll = "scrollTo" === property;
        ((killAll || "scrollTo_x" === property) && (this.skipX = 1),
          (killAll || "scrollTo_y" === property) && (this.skipY = 1));
      },
    };
  ((ScrollToPlugin.max = getMaxScroll),
    (ScrollToPlugin.getOffset = getOffset),
    (ScrollToPlugin.buildGetter = buildGetter),
    getGSAP() && gsap.registerPlugin(ScrollToPlugin));
};
