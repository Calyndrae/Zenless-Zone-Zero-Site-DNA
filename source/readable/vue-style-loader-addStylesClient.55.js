/**
 * vue-style-loader-addStylesClient — readable reconstruction of webpack module 55 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * vue-style-loader's client-side style injector (`addStylesClient`). It converts css-loader module lists into style records keyed by id, injects `<style>` elements into `document.head` (reusing server-rendered tags marked with the `data-vue-ssr-id` attribute), reference-counts styles for hot updates/removal, appends source maps as base64 `sourceMappingURL` comments, and falls back to a single shared style tag with `styleSheet.cssText` replacement for old IE (msie 6-9). It throws if used outside a browser when DEBUG is set.
 *
 * Exports (minified key → meaning):
 *   default → addStylesClient(parentId, list, isProduction, options) — injects styles and returns an update/remove function
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 55 from be1f69b.js
// deps:
const module_55 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  function listToStyles(parentId, list) {
    for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
      var item = list[i],
        id = item[0],
        part = {
          id: parentId + ":" + i,
          css: item[1],
          media: item[2],
          sourceMap: item[3],
        };
      newStyles[id]
        ? newStyles[id].parts.push(part)
        : styles.push(
            (newStyles[id] = {
              id: id,
              parts: [part],
            }),
          );
    }
    return styles;
  }
  (webpackRequire.r(webpackExports),
    webpackRequire.d(webpackExports, "default", function () {
      return addStylesClient;
    }));
  var hasDocument = "undefined" != typeof document;
  if ("undefined" != typeof DEBUG && DEBUG && !hasDocument)
    throw new Error(
      "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
    );
  var stylesInDom = {},
    head = hasDocument && (document.head || document.getElementsByTagName("head")[0]),
    singletonElement = null,
    singletonCounter = 0,
    isProduction = !1,
    noop = function () {},
    options = null,
    ssrIdKey = "data-vue-ssr-id",
    isOldIE = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
  function addStylesClient(clientParentId, initialList, isProd, loaderOptions) {
    ((isProduction = isProd), (options = loaderOptions || {}));
    var currentStyles = listToStyles(clientParentId, initialList);
    return (
      addStylesToDom(currentStyles),
      function (newList) {
        for (var mayRemove = [], index = 0; index < currentStyles.length; index++) {
          var styleRecord = currentStyles[index];
          ((domStyle = stylesInDom[styleRecord.id]).refs--, mayRemove.push(domStyle));
        }
        newList
          ? addStylesToDom((currentStyles = listToStyles(clientParentId, newList)))
          : (currentStyles = []);
        for (index = 0; index < mayRemove.length; index++) {
          var domStyle;
          if (0 === (domStyle = mayRemove[index]).refs) {
            for (var partIdx = 0; partIdx < domStyle.parts.length; partIdx++) domStyle.parts[partIdx]();
            delete stylesInDom[domStyle.id];
          }
        }
      }
    );
  }
  function addStylesToDom(stylesToAdd) {
    for (var styleIdx = 0; styleIdx < stylesToAdd.length; styleIdx++) {
      var style = stylesToAdd[styleIdx],
        existingDomStyle = stylesInDom[style.id];
      if (existingDomStyle) {
        existingDomStyle.refs++;
        for (var partIndex = 0; partIndex < existingDomStyle.parts.length; partIndex++)
          existingDomStyle.parts[partIndex](style.parts[partIndex]);
        for (; partIndex < style.parts.length; partIndex++)
          existingDomStyle.parts.push(addStyle(style.parts[partIndex]));
        existingDomStyle.parts.length > style.parts.length &&
          (existingDomStyle.parts.length = style.parts.length);
      } else {
        var parts = [];
        for (partIndex = 0; partIndex < style.parts.length; partIndex++)
          parts.push(addStyle(style.parts[partIndex]));
        stylesInDom[style.id] = {
          id: style.id,
          refs: 1,
          parts: parts,
        };
      }
    }
  }
  function createStyleElement() {
    var newStyleElement = document.createElement("style");
    return ((newStyleElement.type = "text/css"), head.appendChild(newStyleElement), newStyleElement);
  }
  function addStyle(obj) {
    var update,
      remove,
      styleElement = document.querySelector("style[" + ssrIdKey + '~="' + obj.id + '"]');
    if (styleElement) {
      if (isProduction) return noop;
      styleElement.parentNode.removeChild(styleElement);
    }
    if (isOldIE) {
      var singletonIndex = singletonCounter++;
      ((styleElement = singletonElement || (singletonElement = createStyleElement())),
        (update = applyToSingletonTag.bind(null, styleElement, singletonIndex, !1)),
        (remove = applyToSingletonTag.bind(null, styleElement, singletonIndex, !0)));
    } else
      ((styleElement = createStyleElement()),
        (update = applyToTag.bind(null, styleElement)),
        (remove = function () {
          styleElement.parentNode.removeChild(styleElement);
        }));
    return (
      update(obj),
      function (newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
            return;
          update((obj = newObj));
        } else remove();
      }
    );
  }
  var textStore,
    replaceText =
      ((textStore = []),
      function (textIndex, replacement) {
        return ((textStore[textIndex] = replacement), textStore.filter(Boolean).join("\n"));
      });
  function applyToSingletonTag(singletonStyleEl, singletonPartIndex, shouldRemove, singletonObj) {
    var css = shouldRemove ? "" : singletonObj.css;
    if (singletonStyleEl.styleSheet)
      singletonStyleEl.styleSheet.cssText = replaceText(singletonPartIndex, css);
    else {
      var cssNode = document.createTextNode(css),
        childNodes = singletonStyleEl.childNodes;
      (childNodes[singletonPartIndex] && singletonStyleEl.removeChild(childNodes[singletonPartIndex]),
        childNodes.length
          ? singletonStyleEl.insertBefore(cssNode, childNodes[singletonPartIndex])
          : singletonStyleEl.appendChild(cssNode));
    }
  }
  function applyToTag(tagStyleEl, tagObj) {
    var tagCss = tagObj.css,
      media = tagObj.media,
      sourceMap = tagObj.sourceMap;
    if (
      (media && tagStyleEl.setAttribute("media", media),
      options.ssrId && tagStyleEl.setAttribute(ssrIdKey, tagObj.id),
      sourceMap &&
        ((tagCss += "\n/*# sourceURL=" + sourceMap.sources[0] + " */"),
        (tagCss +=
          "\n/*# sourceMappingURL=data:application/json;base64," +
          btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) +
          " */")),
      tagStyleEl.styleSheet)
    )
      tagStyleEl.styleSheet.cssText = tagCss;
    else {
      for (; tagStyleEl.firstChild;) tagStyleEl.removeChild(tagStyleEl.firstChild);
      tagStyleEl.appendChild(document.createTextNode(tagCss));
    }
  }
};
