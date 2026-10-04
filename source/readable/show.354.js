/**
 * show — readable reconstruction of webpack module 354 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * Bundled `@me/audio` library (UMD factory called with webpack exports and core-js-pure/Babel runtime helpers, howler, a shared utils module and Vue). It defines an `AudioPlayer` class wrapping `Howl` instances (multi-src index switching, sprites, fade in/out, volume change, play/pause/stop/unload, play state cached in `storage` under `storageKey` default `@me/audio`, pause on page `visibilitychange`, and an html5 first-click autoplay unlock with iOS 15 detection) and the `MeAudio` Vue component (props `src`, `effectSrc`, `effectConfig`, `index`, `loop`, `icon`/`activeIcon`/`hoverIcon`, `volume`, `autoplay`, `preload`, `fade`, `doPlay`, `html5`, `cache`, `storageKey`) that renders `.m-audio-player` with `.m-audio-player__icon` (`--hover`, `--active`) images, emits `tap`/`played`/`end`, and exposes `Vue.prototype.$effectPlayer` for sound effects. It includes the vue-runtime-helpers `normalizeComponent` and a browser style injector for its scoped CSS (`data-v-201c2d6f_0`).
 *
 * Exports (minified key → meaning):
 *   Howl → re-export of howler's Howl
 *   Howler → re-export of howler's Howler global
 *   bgAudio → the MeAudio Vue component (with install method)
 *   default → the MeAudio Vue component (with install method)
 *   eventAudio → the AudioPlayer class wrapping Howl instances
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 354 from be1f69b.js
// deps: 10, 15, 20, 16, 0, 17, 25, 6, 21, 197, 8, 92, 97, 511, 33, 12, 14, 46, 1001, 24, 1, 2, 249, 63
const module_354 = function (webpackModule, webpackExports, webpackRequire) {
  !(function (
    moduleExports,
    objectKeysModule,
    getOwnPropertySymbolsModule,
    filterModule,
    getOwnPropertyDescriptorModule,
    forEachModule,
    getOwnPropertyDescriptorsModule,
    definePropertiesModule,
    definePropertyModule,
    definePropertyHelperModule,
    isArrayModule,
    asyncToGeneratorModule,
    classCallCheckModule,
    createClassModule,
    regeneratorModule,
    mapModule,
    includesModule,
    promiseModule,
    setTimeoutModule,
    howler,
    meUtils,
    VueModule,
    concatModule,
    setModule,
    jsonStringifyModule,
  ) {
    "use strict";

    function interopDefault(moduleObj) {
      return moduleObj && "object" == typeof moduleObj && "default" in moduleObj
        ? moduleObj
        : {
            default: moduleObj,
          };
    }
    var objectKeys = interopDefault(objectKeysModule),
      getOwnPropertySymbols = interopDefault(getOwnPropertySymbolsModule),
      filter = interopDefault(filterModule),
      getOwnPropertyDescriptor = interopDefault(getOwnPropertyDescriptorModule),
      forEach = interopDefault(forEachModule),
      getOwnPropertyDescriptors = interopDefault(getOwnPropertyDescriptorsModule),
      defineProperties = interopDefault(definePropertiesModule),
      defineProperty = interopDefault(definePropertyModule),
      definePropertyHelper = interopDefault(definePropertyHelperModule),
      isArray = interopDefault(isArrayModule),
      asyncToGenerator = interopDefault(asyncToGeneratorModule),
      classCallCheck = interopDefault(classCallCheckModule),
      createClass = interopDefault(createClassModule),
      regenerator = interopDefault(regeneratorModule),
      mapInstanceProperty = interopDefault(mapModule),
      includes = interopDefault(includesModule),
      PromiseCtor = interopDefault(promiseModule),
      setTimeoutFn = interopDefault(setTimeoutModule),
      Vue = interopDefault(VueModule),
      concat = interopDefault(concatModule),
      SetCtor = interopDefault(setModule),
      jsonStringify = interopDefault(jsonStringifyModule);
    function getHiddenProp() {
      var vendorPrefixes = ["webkit", "moz", "ms", "o"];
      if ("hidden" in document) return "hidden";
      for (var prefixIndex = 0; prefixIndex < vendorPrefixes.length; prefixIndex++)
        if (vendorPrefixes[prefixIndex] + "Hidden" in document) return vendorPrefixes[prefixIndex] + "Hidden";
      return "";
    }
    var visibilityChangeEvent = getHiddenProp().replace(/[H|h]idden/, "") + "visibilitychange";
    function createVisibilityListener(onVisibilityChange) {
      if (getHiddenProp()) {
        var handleVisibilityChange = function () {
          "visible" ==
          document[
            (function () {
              var statePrefixes = ["webkit", "moz", "ms", "o"];
              if ("visibilityState" in document) return "visibilityState";
              for (var statePrefixIndex = 0; statePrefixIndex < statePrefixes.length; statePrefixIndex++)
                if (statePrefixes[statePrefixIndex] + "VisibilityState" in document)
                  return statePrefixes[statePrefixIndex] + "VisibilityState";
              return null;
            })()
          ]
            ? onVisibilityChange(!0)
            : onVisibilityChange(!1);
        };
        return {
          on: function () {
            document.addEventListener(visibilityChangeEvent, handleVisibilityChange, !1);
          },
          off: function () {
            document.removeEventListener(visibilityChangeEvent, handleVisibilityChange, !1);
          },
        };
      }
    }
    var isIOS15 = 15 == +meUtils.IOS_VERSION.split(".")[0],
      canSwitchSrc = !0,
      AudioPlayer = (function () {
        function AudioPlayerImpl(options) {
          (classCallCheck.default(this, AudioPlayerImpl),
            (this.sounds = void 0),
            (this.src = void 0),
            (this.loop = void 0),
            (this.preload = void 0),
            (this.autoplay = void 0),
            (this.cache = void 0),
            (this.storageKey = void 0),
            (this.storageKeySuffix = void 0),
            (this.index = void 0),
            (this.isplayed = void 0),
            (this.onPlayed = void 0),
            (this.fade = void 0),
            (this.volume = void 0),
            (this.hidden = void 0),
            (this.html5 = void 0),
            (this.onEnd = void 0),
            (this.clickEvent = void 0),
            (this.sprite = void 0));
          var src = options.src,
            indexOption = options.index,
            index = void 0 === indexOption ? 0 : indexOption,
            autoplayOption = options.autoplay,
            autoplay = void 0 === autoplayOption || autoplayOption,
            loopOption = options.loop,
            loop = void 0 === loopOption || loopOption,
            preloadOption = options.preload,
            preload = void 0 === preloadOption || preloadOption,
            cacheOption = options.cache,
            cache = void 0 === cacheOption || cacheOption,
            storageKey = options.storageKey,
            storageKeySuffix = options.storageKeySuffix,
            onPlayed = options.onPlayed,
            onEnd = options.onEnd,
            fadeOption = options.fade,
            fade = void 0 === fadeOption ? [1e3, 1e3] : fadeOption,
            volumeOption = options.volume,
            volume = void 0 === volumeOption ? 1 : volumeOption,
            html5Option = options.html5,
            html5 = void 0 === html5Option ? isIOS15 : html5Option,
            spriteOption = options.sprite,
            sprite = void 0 === spriteOption ? {} : spriteOption;
          ((this.src = isArray.default(src) ? src : [src]),
            (this.sounds = []),
            (this.loop = loop),
            (this.autoplay = autoplay),
            (this.preload = preload),
            (this.cache = cache),
            (this.storageKey = storageKey || "@me/audio"),
            (this.storageKeySuffix = storageKeySuffix),
            (this.index = index),
            (this.isplayed = !1),
            (this.onPlayed = onPlayed),
            (this.onEnd = onEnd),
            (this.volume = volume),
            (this.fade = fade),
            (this.hidden = null),
            (this.html5 = html5),
            (this.clickEvent = null),
            (this.sprite = sprite),
            this.init());
        }
        var playAsync, switchSrcIndexAsync;
        return (
          createClass.default(AudioPlayerImpl, [
            {
              key: "sound",
              get: function () {
                return this.sounds[this.index];
              },
            },
            {
              key: "init",
              value: function () {
                var cachedPlayed,
                  srcList,
                  playerSelf = this;
                if (!this.src[0]) throw "props src is required";
                if (
                  ((this.isplayed =
                    this.cache &&
                    null !== (cachedPlayed = meUtils.storage.get(this.storageKey, this.storageKeySuffix)) &&
                    void 0 !== cachedPlayed
                      ? cachedPlayed
                      : this.autoplay),
                  this.emitPlayed(),
                  (this.sounds = mapInstanceProperty
                    .default((srcList = this.src))
                    .call(srcList, function (srcItem) {
                      return new howler.Howl({
                        src: srcItem,
                        loop: playerSelf.loop,
                        preload: playerSelf.preload,
                        volume: playerSelf.volume,
                        html5: playerSelf.html5,
                        sprite: playerSelf.sprite,
                        onend: function () {
                          playerSelf.loop ||
                            ((playerSelf.isplayed = !1),
                            playerSelf.emitPlayed(),
                            playerSelf.onEnd && playerSelf.onEnd(playerSelf.index));
                        },
                      });
                    })),
                  this.isplayed)
                ) {
                  if (!this.sound) throw "error src'index";
                  (this._play(),
                    this.html5 && ((this.clickEvent = this.initClickEvent()), this.clickEvent.on()));
                }
                this.bindHiddenEvent();
              },
            },
            {
              key: "emitPlayed",
              value: function () {
                this.onPlayed && this.onPlayed(this.isplayed);
              },
            },
            {
              key: "bindHiddenEvent",
              value: function () {
                var hiddenListener,
                  hiddenSelf = this;
                ((this.hidden = createVisibilityListener(function (isVisible) {
                  isVisible ? hiddenSelf.isplayed && hiddenSelf._play() : hiddenSelf._pause();
                })),
                  null === (hiddenListener = this.hidden) ||
                    void 0 === hiddenListener ||
                    hiddenListener.on());
              },
            },
            {
              key: "switchSrcIndex",
              value:
                ((switchSrcIndexAsync = asyncToGenerator.default(
                  regenerator.default.mark(function switchSrcIndexGenerator(newIndex) {
                    return regenerator.default.wrap(
                      function (switchContext) {
                        for (;;)
                          switch ((switchContext.prev = switchContext.next)) {
                            case 0:
                              if (this.sounds[newIndex]) {
                                switchContext.next = 2;
                                break;
                              }
                              throw "error src'index";
                            case 2:
                              if (canSwitchSrc) {
                                switchContext.next = 4;
                                break;
                              }
                              return switchContext.abrupt("return");
                            case 4:
                              if (((canSwitchSrc = !1), !this.isplayed)) {
                                switchContext.next = 8;
                                break;
                              }
                              return ((switchContext.next = 8), this._stop());
                            case 8:
                              ((this.index = newIndex), this.isplayed && this._play(), (canSwitchSrc = !0));
                            case 11:
                            case "end":
                              return switchContext.stop();
                          }
                      },
                      switchSrcIndexGenerator,
                      this,
                    );
                  }),
                )),
                function (switchIndexArg) {
                  return switchSrcIndexAsync.apply(this, arguments);
                }),
            },
            {
              key: "play",
              value:
                ((playAsync = asyncToGenerator.default(
                  regenerator.default.mark(function playGenerator(spriteName) {
                    var spriteKeys, hasSprite;
                    return regenerator.default.wrap(
                      function (playContext) {
                        for (;;)
                          switch ((playContext.prev = playContext.next)) {
                            case 0:
                              if (
                                ((spriteKeys = this.sprite ? objectKeys.default(this.sprite) : []),
                                (hasSprite = 0 !== spriteKeys.length),
                                !this.isplayed || hasSprite)
                              ) {
                                playContext.next = 4;
                                break;
                              }
                              return playContext.abrupt("return");
                            case 4:
                              if (!this.isplayed || !hasSprite) {
                                playContext.next = 7;
                                break;
                              }
                              return ((playContext.next = 7), this._stop());
                            case 7:
                              if (
                                !hasSprite ||
                                !spriteName ||
                                includes.default(spriteKeys).call(spriteKeys, spriteName)
                              ) {
                                playContext.next = 9;
                                break;
                              }
                              throw Error("音效 ".concat(spriteName, " 不存在"));
                            case 9:
                              ((this.isplayed = !0),
                                this.emitPlayed(),
                                this.cache &&
                                  meUtils.storage.set(
                                    this.storageKey,
                                    this.isplayed,
                                    0,
                                    this.storageKeySuffix,
                                  ),
                                this._play(spriteName));
                            case 13:
                            case "end":
                              return playContext.stop();
                          }
                      },
                      playGenerator,
                      this,
                    );
                  }),
                )),
                function (playArg) {
                  return playAsync.apply(this, arguments);
                }),
            },
            {
              key: "pause",
              value: function () {
                this.isplayed &&
                  ((this.isplayed = !1),
                  this.emitPlayed(),
                  this.cache && meUtils.storage.set(this.storageKey, this.isplayed, 0, this.storageKeySuffix),
                  this._pause());
              },
            },
            {
              key: "_play",
              value: function (playSprite) {
                var playSelf = this,
                  sound = this.sounds[this.index],
                  startPlayback = function () {
                    (sound.once("play", function () {
                      sound.fade(0, playSelf.volume, playSelf.fade[0]);
                    }),
                      !sound.playing() && playSelf.isplayed && sound.play(playSprite));
                  };
                "loaded" !== sound.state()
                  ? (sound.once("load", startPlayback), sound.load())
                  : startPlayback();
              },
            },
            {
              key: "_pause",
              value: function () {
                var pauseSounds;
                forEach.default((pauseSounds = this.sounds)).call(pauseSounds, function (pausedSound) {
                  pausedSound.pause();
                });
              },
            },
            {
              key: "stop",
              value: function () {
                return (
                  (this.isplayed = !1),
                  this.emitPlayed(),
                  this.cache && meUtils.storage.set(this.storageKey, this.isplayed, 0, this.storageKeySuffix),
                  this._stop()
                );
              },
            },
            {
              key: "changeVolume",
              value: function (newVolume) {
                var volumeSounds;
                ((this.volume = newVolume),
                  forEach.default((volumeSounds = this.sounds)).call(volumeSounds, function (volumeSound) {
                    volumeSound.volume(newVolume);
                  }));
              },
            },
            {
              key: "_stop",
              value: function () {
                var stopSelf = this;
                return new PromiseCtor.default(function (resolve) {
                  (stopSelf.sound.once("fade", function () {
                    (stopSelf.sound.stop(),
                      setTimeoutFn.default(function () {
                        resolve(!0);
                      }, 0));
                  }),
                    stopSelf.sound.fade(stopSelf.volume, 0, stopSelf.fade[1]));
                });
              },
            },
            {
              key: "unload",
              value: function () {
                var unloadSounds, hiddenHandle, clickHandle;
                (forEach.default((unloadSounds = this.sounds)).call(unloadSounds, function (unloadedSound) {
                  unloadedSound.unload();
                }),
                  null === (hiddenHandle = this.hidden) || void 0 === hiddenHandle || hiddenHandle.off(),
                  null === (clickHandle = this.clickEvent) || void 0 === clickHandle || clickHandle.off());
              },
            },
            {
              key: "initClickEvent",
              value: function () {
                var clickSelf = this,
                  onFirstClick = function firstClickHandler() {
                    (clickSelf._play(), window.removeEventListener("click", firstClickHandler, !0));
                  };
                return {
                  on: function () {
                    window.addEventListener("click", onFirstClick, !0);
                  },
                  off: function () {
                    window.removeEventListener("click", onFirstClick, !0);
                  },
                };
              },
            },
          ]),
          AudioPlayerImpl
        );
      })();
    function ownKeys(object, enumerableOnly) {
      var keys = objectKeys.default(object);
      if (getOwnPropertySymbols.default) {
        var symbols = getOwnPropertySymbols.default(object);
        (enumerableOnly &&
          (symbols = filter.default(symbols).call(symbols, function (symbol) {
            return getOwnPropertyDescriptor.default(object, symbol).enumerable;
          })),
          keys.push.apply(keys, symbols));
      }
      return keys;
    }
    function objectSpread(target) {
      for (var argIndex = 1; argIndex < arguments.length; argIndex++) {
        var sourceKeys,
          source = null != arguments[argIndex] ? arguments[argIndex] : {};
        if (argIndex % 2)
          forEach.default((sourceKeys = ownKeys(Object(source), !0))).call(sourceKeys, function (key) {
            definePropertyHelper.default(target, key, source[key]);
          });
        else if (getOwnPropertyDescriptors.default)
          defineProperties.default(target, getOwnPropertyDescriptors.default(source));
        else {
          var descriptorKeys;
          forEach
            .default((descriptorKeys = ownKeys(Object(source))))
            .call(descriptorKeys, function (descriptorKey) {
              defineProperty.default(
                target,
                descriptorKey,
                getOwnPropertyDescriptor.default(source, descriptorKey),
              );
            });
        }
      }
      return target;
    }
    var headElement,
      meAudioOptions = {
        name: "MeAudio",
        props: {
          cache: {
            default: !0,
            type: Boolean,
          },
          storageKey: {
            default: "",
            type: String,
          },
          storageKeySuffix: {
            type: String,
          },
          src: {
            type: String | Array,
            required: !0,
          },
          effectSrc: {
            type: String | Array,
            required: !1,
          },
          effectConfig: {
            type: Object,
            required: !1,
            default: function () {
              return {};
            },
          },
          index: {
            type: Number,
            default: 0,
          },
          loop: {
            type: Boolean,
            default: !0,
          },
          icon: {
            type: String,
            default: "",
          },
          activeIcon: {
            type: String,
            default: "",
          },
          hoverIcon: {
            type: String,
            default: "",
          },
          volume: {
            type: Number,
            default: 1,
            validator: function (volumeValue) {
              return volumeValue >= 0 || volumeValue <= 1;
            },
          },
          autoplay: {
            type: Boolean,
            default: !0,
          },
          preload: {
            type: Boolean,
            default: !0,
          },
          fade: {
            type: Array,
            default: function () {
              return [1e3, 1e3];
            },
          },
          doPlay: {
            type: Boolean,
            default: !0,
          },
          html5: {
            type: Boolean,
          },
        },
        data: function () {
          return {
            sounds: [],
            player: null,
            effectPlayer: null,
            isplayed: !1,
            isSprite: !1,
          };
        },
        watch: {
          index: function (newIndexValue) {
            this.player && this.player.switchSrcIndex(newIndexValue);
          },
          effectSrc: function (newEffectSrc) {
            var oldEffectPlayer;
            newEffectSrc &&
              (null === (oldEffectPlayer = this.effectPlayer) ||
                void 0 === oldEffectPlayer ||
                oldEffectPlayer.unload(),
              this.initEffectPlayer(newEffectSrc));
          },
          volume: function (newVolumeValue) {
            this.player && this.player.changeVolume(newVolumeValue);
          },
        },
        mounted: function () {
          var self = this;
          ((this.player = new AudioPlayer({
            src: this.src,
            index: this.index,
            loop: this.loop,
            volume: this.volume,
            preload: this.preload,
            autoplay: this.autoplay,
            cache: this.cache,
            storageKey: this.storageKey,
            storageKeySuffix: this.storageKeySuffix,
            fade: this.fade,
            html5: this.html5,
            onEnd: function (endedIndex) {
              self.$emit("end", endedIndex);
            },
            onPlayed: function (isPlayed) {
              ((self.isplayed = isPlayed), self.$emit("played", self.isplayed));
            },
          })),
            this.effectSrc && this.initEffectPlayer(this.effectSrc),
            (Vue.default.prototype.$effectPlayer = {
              play: this.playEffect,
              stop: this.stopEffect,
            }));
        },
        beforeDestroy: function () {
          var player, effectPlayer;
          (null === (player = this.player) || void 0 === player || player.unload(),
            null === (effectPlayer = this.effectPlayer) || void 0 === effectPlayer || effectPlayer.unload());
        },
        methods: {
          handlePlay: function () {
            (this.doPlay && (this.isplayed ? this.pause() : this.play()), this.$emit("tap", this.isplayed));
          },
          play: function () {
            this.player.play();
          },
          pause: function () {
            this.player.pause();
          },
          stop: function () {
            this.player.stop();
          },
          initEffectPlayer: function (effectSrc) {
            if (
              ((this.isSprite = !!effectSrc.sprite),
              !effectSrc || !isArray.default(effectSrc) || 0 !== effectSrc.length)
            ) {
              var effectOptions = isArray.default(effectSrc)
                ? {
                    src: effectSrc,
                  }
                : effectSrc;
              this.effectPlayer = new AudioPlayer(
                objectSpread(
                  objectSpread(
                    {
                      cache: !1,
                      preload: !0,
                      loop: !1,
                      autoplay: !1,
                      fade: [0, 0],
                    },
                    effectOptions,
                  ),
                  this.effectConfig,
                ),
              );
            }
          },
          playEffect: function (effectKey, force) {
            if (!this.effectPlayer) throw Error("请先初始化音效播放器！");
            (this.isplayed || force) &&
              (this.isSprite
                ? this.effectPlayer.play(effectKey)
                : (this.effectPlayer.switchSrcIndex(effectKey), this.effectPlayer.play()));
          },
          stopEffect: function () {
            var currentEffectPlayer;
            null === (currentEffectPlayer = this.effectPlayer) ||
              void 0 === currentEffectPlayer ||
              currentEffectPlayer.stop();
          },
        },
      },
      normalizeComponent = function (
        template,
        injectStyles,
        script,
        scopeId,
        isFunctionalTemplate,
        moduleIdentifier,
        shadowMode,
        createInjector,
        createInjectorSSR,
        createInjectorShadow,
      ) {
        "boolean" != typeof shadowMode &&
          ((createInjectorSSR = createInjector), (createInjector = shadowMode), (shadowMode = !1));
        var hook,
          componentOpts = "function" == typeof script ? script.options : script;
        if (
          (template &&
            template.render &&
            ((componentOpts.render = template.render),
            (componentOpts.staticRenderFns = template.staticRenderFns),
            (componentOpts._compiled = !0),
            isFunctionalTemplate && (componentOpts.functional = !0)),
          scopeId && (componentOpts._scopeId = scopeId),
          moduleIdentifier
            ? ((hook = function (ssrContext) {
                ((ssrContext =
                  ssrContext ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (ssrContext = __VUE_SSR_CONTEXT__),
                  injectStyles && injectStyles.call(this, createInjectorSSR(ssrContext)),
                  ssrContext &&
                    ssrContext._registeredComponents &&
                    ssrContext._registeredComponents.add(moduleIdentifier));
              }),
              (componentOpts._ssrRegister = hook))
            : injectStyles &&
              (hook = shadowMode
                ? function (shadowContext) {
                    injectStyles.call(
                      this,
                      createInjectorShadow(shadowContext, this.$root.$options.shadowRoot),
                    );
                  }
                : function (hookContext) {
                    injectStyles.call(this, createInjector(hookContext));
                  }),
          hook)
        )
          if (componentOpts.functional) {
            var originalRender = componentOpts.render;
            componentOpts.render = function (renderH, renderContext) {
              return (hook.call(renderContext), originalRender(renderH, renderContext));
            };
          } else {
            var hooksArray,
              existingBeforeCreate = componentOpts.beforeCreate;
            componentOpts.beforeCreate = existingBeforeCreate
              ? concat.default((hooksArray = [])).call(hooksArray, existingBeforeCreate, hook)
              : [hook];
          }
        return script;
      },
      isOldIE = "undefined" != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),
      styleGroups = {},
      createStyleInjector = function (injectorContext) {
        return function (styleId, styleDef) {
          return (function (id, css) {
            var groupKey = isOldIE ? css.media || "default" : id,
              styleGroup =
                styleGroups[groupKey] ||
                (styleGroups[groupKey] = {
                  ids: new SetCtor.default(),
                  styles: [],
                });
            if (!styleGroup.ids.has(id)) {
              styleGroup.ids.add(id);
              var code = css.source;
              if (
                (mapInstanceProperty.default(css) &&
                  ((code += "\n/*# sourceURL=" + mapInstanceProperty.default(css).sources[0] + " */"),
                  (code +=
                    "\n/*# sourceMappingURL=data:application/json;base64," +
                    btoa(
                      unescape(encodeURIComponent(jsonStringify.default(mapInstanceProperty.default(css)))),
                    ) +
                    " */")),
                styleGroup.element ||
                  ((styleGroup.element = document.createElement("style")),
                  (styleGroup.element.type = "text/css"),
                  css.media && styleGroup.element.setAttribute("media", css.media),
                  void 0 === headElement &&
                    (headElement = document.head || document.getElementsByTagName("head")[0]),
                  headElement.appendChild(styleGroup.element)),
                "styleSheet" in styleGroup.element)
              ) {
                var groupStyles;
                (styleGroup.styles.push(code),
                  (styleGroup.element.styleSheet.cssText = filter
                    .default((groupStyles = styleGroup.styles))
                    .call(groupStyles, Boolean)
                    .join("\n")));
              } else {
                var nodeIndex = styleGroup.ids.size - 1,
                  textNode = document.createTextNode(code),
                  childNodes = styleGroup.element.childNodes;
                (childNodes[nodeIndex] && styleGroup.element.removeChild(childNodes[nodeIndex]),
                  childNodes.length
                    ? styleGroup.element.insertBefore(textNode, childNodes[nodeIndex])
                    : styleGroup.element.appendChild(textNode));
              }
            }
          })(styleId, styleDef);
        };
      },
      componentOptions = meAudioOptions,
      render = function () {
        var vm = this,
          createElement = vm.$createElement,
          h = vm._self._c || createElement;
        return h(
          "div",
          {
            staticClass: "m-audio-player",
            on: {
              click: vm.handlePlay,
            },
          },
          [
            h("img", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: (vm.icon && !vm.isplayed) || !vm.activeIcon,
                  expression: "(icon && !isplayed) || !activeIcon",
                },
              ],
              staticClass: "m-audio-player__icon",
              attrs: {
                src: vm.icon,
                alt: "",
              },
            }),
            vm._v(" "),
            h("img", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !vm.isplayed && vm.hoverIcon,
                  expression: "!isplayed && hoverIcon",
                },
              ],
              staticClass: "m-audio-player__icon m-audio-player__icon--hover",
              attrs: {
                src: vm.hoverIcon,
                alt: "",
              },
            }),
            vm._v(" "),
            h("img", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: vm.activeIcon && vm.isplayed,
                  expression: "activeIcon && isplayed",
                },
              ],
              staticClass: "m-audio-player__icon m-audio-player__icon--active",
              attrs: {
                src: vm.activeIcon,
                alt: "",
              },
            }),
          ],
        );
      };
    render._withStripped = !0;
    var MeAudio = normalizeComponent(
      {
        render: render,
        staticRenderFns: [],
      },
      function (inject) {
        inject &&
          inject("data-v-201c2d6f_0", {
            source:
              ".m-audio-player {\n  position: relative;\n}\n.m-audio-player__icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.m-audio-player__icon--hover {\n  opacity: 0;\n}\n.m-audio-player__icon--hover:hover {\n  opacity: 1;\n}",
            map: void 0,
            media: void 0,
          });
      },
      componentOptions,
      void 0,
      !1,
      void 0,
      !1,
      createStyleInjector,
      void 0,
      void 0,
    );
    ((MeAudio.install = function (VueInstall) {
      var installOptions = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      VueInstall.component(installOptions.name || MeAudio.name, MeAudio);
    }),
      Object.defineProperty(moduleExports, "Howl", {
        enumerable: !0,
        get: function () {
          return howler.Howl;
        },
      }),
      Object.defineProperty(moduleExports, "Howler", {
        enumerable: !0,
        get: function () {
          return howler.Howler;
        },
      }),
      (moduleExports.bgAudio = MeAudio),
      (moduleExports.default = MeAudio),
      (moduleExports.eventAudio = AudioPlayer),
      Object.defineProperty(moduleExports, "__esModule", {
        value: !0,
      }));
  })(
    webpackExports,
    webpackRequire(10),
    webpackRequire(15),
    webpackRequire(20),
    webpackRequire(16),
    webpackRequire(0),
    webpackRequire(17),
    webpackRequire(25),
    webpackRequire(6),
    webpackRequire(21),
    webpackRequire(197),
    webpackRequire(8),
    webpackRequire(92),
    webpackRequire(97),
    webpackRequire(511),
    webpackRequire(33),
    webpackRequire(12),
    webpackRequire(14),
    webpackRequire(46),
    webpackRequire(1001),
    webpackRequire(24),
    webpackRequire(1),
    webpackRequire(2),
    webpackRequire(249),
    webpackRequire(63),
  );
};
