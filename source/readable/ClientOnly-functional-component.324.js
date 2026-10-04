/**
 * ClientOnly-functional-component — readable reconstruction of webpack module 324 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * The `ClientOnly` functional Vue component (from the vue-ClientOnly package used by Nuxt). Until its parent is mounted it renders either a placeholder element (tag from the `placeholderTag` prop, default `div`, with class `.client-only-placeholder`, content from the `placeholder` prop or the `placeholder` slot) or empty comment nodes; it registers a one-time `hook:mounted` listener on the parent that calls `$forceUpdate()`, after which the default slot content is rendered client-side.
 *
 * Exports (minified key → meaning):
 *   module.exports → the ClientOnly functional component options
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 324 from be1f69b.js
// deps:
const module_324 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var ClientOnly = {
    name: "ClientOnly",
    functional: !0,
    props: {
      placeholder: String,
      placeholderTag: {
        type: String,
        default: "div",
      },
    },
    render: function (h, context) {
      var parent = context.parent,
        slots = context.slots,
        props = context.props,
        resolvedSlots = slots(),
        defaultSlot = resolvedSlots.default;
      void 0 === defaultSlot && (defaultSlot = []);
      var placeholderSlot = resolvedSlots.placeholder;
      return parent._isMounted
        ? defaultSlot
        : (parent.$once("hook:mounted", function () {
            parent.$forceUpdate();
          }),
          props.placeholderTag && (props.placeholder || placeholderSlot)
            ? h(
                props.placeholderTag,
                {
                  class: ["client-only-placeholder"],
                },
                props.placeholder || placeholderSlot,
              )
            : defaultSlot.length > 0
              ? defaultSlot.map(function () {
                  return h(!1);
                })
              : h(!1));
    },
  };
  webpackModule.exports = ClientOnly;
};
