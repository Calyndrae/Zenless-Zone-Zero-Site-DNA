// bar — module 1187 from df9cade
// module 1187 from df9cade.js
// deps: 1
const module_1187 = function (webpackModule, webpackExports, webpackRequire) {
  webpackModule.exports = (function (t_1) {
    "use strict";

    t_1 = t_1 && t_1.hasOwnProperty("default") ? t_1.default : t_1;
    var e_2 =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t_66) {
              return typeof t_66;
            }
          : function (t_67) {
              return t_67 &&
                "function" == typeof Symbol &&
                t_67.constructor === Symbol &&
                t_67 !== Symbol.prototype
                ? "symbol"
                : typeof t_67;
            },
      o_3 = function (t_68, e_69) {
        if (!(t_68 instanceof e_69)) throw new TypeError("Cannot call a class as a function");
      },
      r_4 = (function () {
        function t_70(t_71, e_72) {
          for (var i_73 = 0; i_73 < e_72.length; i_73++) {
            var o_74 = e_72[i_73];
            ((o_74.enumerable = o_74.enumerable || !1),
              (o_74.configurable = !0),
              "value" in o_74 && (o_74.writable = !0),
              Object.defineProperty(t_71, o_74.key, o_74));
          }
        }
        return function (e_75, o_76, r_77) {
          return (o_76 && t_70(e_75.prototype, o_76), r_77 && t_70(e_75, r_77), e_75);
        };
      })(),
      n_5 = function (t_78, e_79, o_80) {
        return (
          e_79 in t_78
            ? Object.defineProperty(t_78, e_79, {
                value: o_80,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t_78[e_79] = o_80),
          t_78
        );
      },
      l_6 =
        Object.assign ||
        function (t_81) {
          for (var i_82 = 1; i_82 < arguments.length; i_82++) {
            var source = arguments[i_82];
            for (var e_83 in source)
              Object.prototype.hasOwnProperty.call(source, e_83) && (t_81[e_83] = source[e_83]);
          }
          return t_81;
        },
      c_7 = function (t_84) {
        if (Array.isArray(t_84)) {
          for (var i_85 = 0, e_86 = Array(t_84.length); i_85 < t_84.length; i_85++) e_86[i_85] = t_84[i_85];
          return e_86;
        }
        return Array.from(t_84);
      };
    function h_8() {
      if (f_10()) return !1;
      var t_87 = navigator.userAgent.toLowerCase();
      return -1 !== t_87.indexOf("msie") || -1 !== t_87.indexOf("trident") || -1 !== t_87.indexOf(" edge/");
    }
    var d_9 = function () {
        return !f_10() && !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      },
      f_10 = function () {
        return t_1.prototype.$isServer;
      },
      v_11 = (function () {
        function t_88() {
          o_3(this, t_88);
        }
        return (
          r_4(t_88, [
            {
              key: "getEventObject",
              value: function (t_89) {
                return this.touchObject ? (this.isTouch ? t_89.touches : [t_89]) : null;
              },
            },
            {
              key: "getTouchObject",
              value: function () {
                if (f_10()) return null;
                this.isTouch = !1;
                var t_90 = navigator.userAgent,
                  e_91 = navigator.platform,
                  o_92 = {};
                switch (
                  ((o_92.touch = !!(
                    ("ontouchstart" in window && !window.opera) ||
                    "msmaxtouchpoints" in window.navigator ||
                    "maxtouchpoints" in window.navigator ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0
                  )),
                  (o_92.nonDeskTouch =
                    (o_92.touch && !/win32/i.test(e_91)) ||
                    (o_92.touch && /win32/i.test(e_91) && /mobile/i.test(t_90))),
                  (o_92.eventType =
                    "onmousedown" in window && !o_92.nonDeskTouch
                      ? "mouse"
                      : "ontouchstart" in window
                        ? "touch"
                        : "msmaxtouchpoints" in window.navigator || navigator.msMaxTouchPoints > 0
                          ? "mstouchpoints"
                          : "maxtouchpoints" in window.navigator || navigator.maxTouchPoints > 0
                            ? "touchpoints"
                            : "mouse"),
                  o_92.eventType)
                ) {
                  case "mouse":
                    ((o_92.touchstart = "mousedown"),
                      (o_92.touchend = "mouseup"),
                      (o_92.touchmove = "mousemove"),
                      (o_92.touchenter = "mouseenter"),
                      (o_92.touchmove = "mousemove"),
                      (o_92.touchleave = "mouseleave"));
                    break;
                  case "touch":
                    ((o_92.touchstart = "touchstart"),
                      (o_92.touchend = "touchend"),
                      (o_92.touchmove = "touchmove"),
                      (o_92.touchcancel = "touchcancel"),
                      (o_92.touchenter = "touchstart"),
                      (o_92.touchmove = "touchmove"),
                      (o_92.touchleave = "touchend"),
                      (this.isTouch = !0));
                    break;
                  case "mstouchpoints":
                    ((o_92.touchstart = "MSPointerDown"),
                      (o_92.touchend = "MSPointerUp"),
                      (o_92.touchmove = "MSPointerMove"),
                      (o_92.touchcancel = "MSPointerCancel"),
                      (o_92.touchenter = "MSPointerDown"),
                      (o_92.touchmove = "MSPointerMove"),
                      (o_92.touchleave = "MSPointerUp"));
                    break;
                  case "touchpoints":
                    ((o_92.touchstart = "pointerdown"),
                      (o_92.touchend = "pointerup"),
                      (o_92.touchmove = "pointermove"),
                      (o_92.touchcancel = "pointercancel"),
                      (o_92.touchenter = "pointerdown"),
                      (o_92.touchmove = "pointermove"),
                      (o_92.touchleave = "pointerup"));
                }
                return (this.touchObject = o_92);
              },
            },
          ]),
          t_88
        );
      })();
    function m_12(t_93, o_94, r_95) {
      if (r_95 && H_27(o_94)) return t_93;
      if (R_25(t_93))
        ((o_94 = []),
          t_93.forEach(function (t_97, e_98) {
            o_94[e_98] = m_12(t_97, o_94[e_98]);
          }));
      else if (t_93) {
        if (!D_26(t_93)) return t_93;
        for (var n_96 in ((o_94 = {}), t_93))
          o_94[n_96] = "object" === e_2(t_93[n_96]) ? m_12(t_93[n_96], o_94[n_96]) : t_93[n_96];
      }
      return o_94;
    }
    function y_13(t_99, o_100, r_101, n_102) {
      if (n_102 && H_27(o_100)) return t_99;
      if (((o_100 = o_100 || {}), R_25(t_99)))
        (!R_25(o_100) && r_101 && (o_100 = []),
          R_25(o_100) &&
            t_99.forEach(function (t_104, e_105) {
              o_100[e_105] = y_13(t_104, o_100[e_105], r_101, n_102);
            }));
      else if (t_99)
        if (D_26(t_99))
          for (var l_103 in t_99)
            "object" === e_2(t_99[l_103])
              ? H_27(o_100[l_103])
                ? (o_100[l_103] = m_12(t_99[l_103], o_100[l_103], n_102))
                : y_13(t_99[l_103], o_100[l_103], r_101, n_102)
              : (H_27(o_100[l_103]) || r_101) && (o_100[l_103] = t_99[l_103]);
        else r_101 && (o_100 = t_99);
      return o_100;
    }
    function w_14(t_106, e_107, source, o_108) {
      (source[e_107] || "function" == typeof source) &&
        ((o_108 = o_108 || e_107),
        Object.defineProperty(t_106, e_107, {
          get: function () {
            return source[o_108];
          },
          configurable: !0,
        }));
    }
    var S_15 = void 0;
    function B_16() {
      if (f_10()) return 0;
      if (void 0 !== S_15) return S_15;
      var t_109 = document.createElement("div");
      ((t_109.style.visibility = "hidden"),
        (t_109.style.width = "100px"),
        (t_109.style.position = "absolute"),
        (t_109.style.top = "-9999px"),
        document.body.appendChild(t_109));
      var e_110 = t_109.offsetWidth;
      t_109.style.overflow = "scroll";
      var o_111 = document.createElement("div");
      ((o_111.style.width = "100%"), t_109.appendChild(o_111));
      var r_112 = o_111.offsetWidth;
      return (t_109.parentNode.removeChild(t_109), (S_15 = e_110 - r_112));
    }
    function O_17(t_113, e_114, o_115) {
      var r_116 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "on" == (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "on")
        ? t_113.addEventListener(e_114, o_115, r_116)
        : t_113.removeEventListener(e_114, o_115, r_116);
    }
    var E_18 = function (t_117) {
      console.warn("[vuescroll] " + t_117);
    };
    function P_19(t_118, e_119) {
      var o_120 = !1;
      if (!t_118 || !e_119) return o_120;
      for (; t_118.parentNode !== e_119 && 9 !== t_118.parentNode.nodeType && !t_118.parentNode._isVuescroll;)
        t_118 = t_118.parentNode;
      return (t_118.parentNode == e_119 && (o_120 = !0), o_120);
    }
    function z_20(t_121) {
      var e_122,
        o_123 = document.documentElement.style;
      return (
        t_121.opera && "[object Opera]" === Object.prototype.toString.call(opera)
          ? (e_122 = "presto")
          : "MozAppearance" in o_123
            ? (e_122 = "gecko")
            : "WebkitAppearance" in o_123
              ? (e_122 = "webkit")
              : "string" == typeof navigator.cpuClass && (e_122 = "trident"),
        {
          trident: "ms",
          gecko: "moz",
          webkit: "webkit",
          presto: "O",
        }[e_122]
      );
    }
    function k_21(t_124, e_125) {
      if (f_10()) return !1;
      var o_126 = "-" + z_20(window) + "-" + e_125,
        r_127 = document.createElement("div");
      return ((r_127.style[t_124] = o_126), r_127.style[t_124] == o_126 && o_126);
    }
    function C_22(t_128) {
      var e_129 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        o_130 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        data = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r_131 = arguments[4];
      if (e_129 && e_129.length > 1)
        return r_131 ? [].concat(c_7(o_130), c_7(e_129)) : [].concat(c_7(e_129), c_7(o_130));
      var n_132 = x_23((e_129 = e_129[0])),
        l_133 = n_132.ch,
        h_134 = n_132.tag;
      return (
        n_132.isComponent &&
          (e_129.data = y_13(
            {
              attrs: e_129.componentOptions.propsData,
            },
            e_129.data,
            !1,
            !0,
          )),
        (l_133 = r_131 ? [].concat(c_7(o_130), c_7(l_133)) : [].concat(c_7(l_133), c_7(o_130))),
        delete e_129.data.slot,
        t_128(h_134, y_13(data, e_129.data, !1, !0), l_133)
      );
    }
    function x_23(t_135) {
      if (!t_135 || t_135.length > 1) return {};
      var e_136 = !!(t_135 = t_135[0] ? t_135[0] : t_135).componentOptions,
        o_137 = void 0,
        r_138 = void 0;
      return (
        e_136
          ? ((o_137 = t_135.componentOptions.children || []), (r_138 = t_135.componentOptions.tag))
          : ((o_137 = t_135.children || []), (r_138 = t_135.tag)),
        {
          isComponent: e_136,
          ch: o_137,
          tag: r_138,
        }
      );
    }
    function T_24(t_139) {
      var e_140 = t_139.$parent;
      return (!e_140._isVuescrollRoot && e_140 && (e_140 = e_140.$parent), e_140);
    }
    var R_25 = function (t_141) {
        return Array.isArray(t_141);
      },
      D_26 = function (t_142) {
        return "[object Object]" == Object.prototype.toString.call(t_142);
      },
      H_27 = function (t_143) {
        return void 0 === t_143;
      };
    function $_28(t_144, e_145) {
      var o_146 = void 0;
      return (o_146 = (o_146 = /(-?\d+(?:\.\d+?)?)%$/.exec(t_144))
        ? (e_145 * (o_146 = o_146[1] - 0)) / 100
        : t_144 - 0);
    }
    function M_29(t_147, e_148) {
      if (!f_10() && !document.getElementById(t_147)) {
        var head = document.head || doc.getElementsByTagName("head")[0],
          style = document.createElement("style");
        ((style.id = t_147),
          (style.type = "text/css"),
          style.styleSheet
            ? (style.styleSheet.cssText = e_148)
            : style.appendChild(document.createTextNode(e_148)),
          head.appendChild(style));
      }
    }
    function N_30() {
      M_29(
        "vuescroll-hide-ios-bar",
        ".__hidebar::-webkit-scrollbar {\n      width: 0;\n      height: 0;\n    }",
      );
    }
    var A_31 = {
        mounted: function () {
          I_32[this._uid] = this;
        },
        beforeDestroy: function () {
          delete I_32[this._uid];
        },
        methods: {
          scrollTo: function (t_149, e_150, o_151) {
            var r_152 = t_149.x,
              n_153 = t_149.y;
            ((!0 !== e_150 && void 0 !== e_150) || (e_150 = this.mergedOptions.scrollPanel.speed),
              this.internalScrollTo(r_152, n_153, e_150, o_151));
          },
          scrollBy: function (t_154, e_155, o_156) {
            var r_157 = t_154.dx,
              n_158 = void 0 === r_157 ? 0 : r_157,
              l_159 = t_154.dy,
              c_160 = void 0 === l_159 ? 0 : l_159,
              h_161 = this.getPosition(),
              d_162 = h_161.scrollLeft,
              f_163 = void 0 === d_162 ? 0 : d_162,
              v_164 = h_161.scrollTop,
              m_165 = void 0 === v_164 ? 0 : v_164;
            (n_158 && (f_163 += $_28(n_158, this.scrollPanelElm.scrollWidth - this.$el.clientWidth)),
              c_160 && (m_165 += $_28(c_160, this.scrollPanelElm.scrollHeight - this.$el.clientHeight)),
              this.internalScrollTo(f_163, m_165, e_155, o_156));
          },
          scrollIntoView: function (t_166) {
            var animate = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              e_167 = this.$el;
            if (("string" == typeof t_166 && (t_166 = e_167.querySelector(t_166)), P_19(t_166, e_167))) {
              var o_168 = this.$el.getBoundingClientRect(),
                r_169 = o_168.left,
                n_170 = o_168.top,
                l_171 = t_166.getBoundingClientRect(),
                c_172 = r_169 - l_171.left,
                h_173 = n_170 - l_171.top;
              this.scrollBy(
                {
                  dx: -c_172,
                  dy: -h_173,
                },
                animate,
              );
            } else
              E_18(
                "The element or selector you passed is not the element of Vuescroll, please pass the element that is in Vuescroll to scrollIntoView API. ",
              );
          },
          refresh: function () {
            (this.refreshInternalStatus(), this.$nextTick(this.refreshInternalStatus));
          },
        },
      },
      I_32 = {};
    function V_33() {
      for (var t_174 in I_32) I_32[t_174].refresh();
    }
    var L_34 = {
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
    function __35(t_175) {
      var e_176 = !1,
        o_177 = t_175.scrollPanel,
        r_178 = t_175.bar,
        n_179 = r_178.vBar,
        l_180 = r_178.hBar,
        c_181 = t_175.rail,
        h_182 = c_181.vRail,
        d_183 = c_181.hRail,
        f_184 = o_177.initialScrollY,
        v_185 = o_177.initialScrollX;
      return (
        f_184 &&
          !String(f_184).match(/^\d+(\.\d+)?(%)?$/) &&
          E_18(
            "The prop `initialScrollY` or `initialScrollX` should be a percent number like `10%` or an exact number that greater than or equal to 0 like `100`.",
          ),
        v_185 &&
          !String(v_185).match(/^\d+(\.\d+)?(%)?$/) &&
          E_18(
            "The prop `initialScrollY` or `initialScrollX` should be a percent number like `10%` or an exact number that greater than or equal to 0 like `100`.",
          ),
        (n_179 || l_180 || h_182 || d_183) &&
          E_18(
            "The options: vRail, hRail, vBar, hBar have been deprecated since v4.7.0,please use corresponing rail/bar instead!",
          ),
        j_36 &&
          (j_36 = [].concat(j_36)).forEach(function (o_186) {
            o_186(t_175) && (e_176 = !0);
          }),
        e_176
      );
    }
    var j_36 = null,
      X_37 = function (t_187, e_188) {
        ((t_187 = [].concat(t_187)).forEach(function (t_189) {
          y_13(t_189, L_34);
        }),
          (j_36 = e_188));
      },
      Y_38 = [
        "mergedOptions.vuescroll.pullRefresh.tips",
        "mergedOptions.vuescroll.pushLoad.tips",
        "mergedOptions.vuescroll.scroller.disable",
        "mergedOptions.rail",
        "mergedOptions.bar",
      ],
      W_39 = {
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
    function Q_40(t_190) {
      var e_191 =
          t_190.requestAnimationFrame ||
          t_190.webkitRequestAnimationFrame ||
          t_190.mozRequestAnimationFrame ||
          t_190.oRequestAnimationFrame,
        o_192 = !!e_191;
      if (
        (e_191 &&
          !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(e_191.toString()) &&
          (o_192 = !1),
        o_192)
      )
        return function (t_198, o_199) {
          e_191(t_198, o_199);
        };
      var r_193 = 60,
        n_194 = {},
        l_195 = 1,
        c_196 = null,
        h_197 = +new Date();
      return function (t_200) {
        var e_201 = l_195++;
        return (
          (n_194[e_201] = t_200),
          null === c_196 &&
            (c_196 = setInterval(function () {
              var time = +new Date(),
                t_202 = n_194;
              for (var e_203 in ((n_194 = {}), t_202))
                t_202.hasOwnProperty(e_203) && (t_202[e_203](time), (h_197 = time));
              time - h_197 > 2500 && (clearInterval(c_196), (c_196 = null));
            }, 1e3 / r_193)),
          e_201
        );
      };
    }
    var F_41 = {},
      U_42 = /rgb\(/,
      K_43 = /rgb\((.*)\)/;
    function J_44(t_204, e_205) {
      var o_206 = t_204 + "&" + e_205;
      if (F_41[o_206]) return F_41[o_206];
      var div = document.createElement("div");
      ((div.style.background = t_204), document.body.appendChild(div));
      var r_207 = window.getComputedStyle(div).backgroundColor;
      return (
        document.body.removeChild(div),
        U_42.test(r_207) ? (F_41[o_206] = "rgba(" + K_43.exec(r_207)[1] + ", " + e_205 + ")") : t_204
      );
    }
    var Z_45 = {
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
          return W_39[this.type];
        },
        barSize: function () {
          return Math.max(this.state.size, this.ops.bar.minSize);
        },
        barRatio: function () {
          return (1 - this.barSize) / (1 - this.state.size);
        },
      },
      render: function (t_208) {
        var e_209,
          o_210,
          r_211,
          l_212 = this,
          c_213 = J_44(l_212.ops.rail.background, l_212.ops.rail.opacity);
        this.touchManager || (this.touchManager = new v_11());
        var h_214,
          d_215 = l_212.ops.rail.size,
          f_216 = l_212.otherBarHide ? 0 : d_215,
          m_217 = l_212.touchManager.getTouchObject(),
          y_218 = {
            class: "__rail-is-" + l_212.type,
            style:
              ((e_209 = {
                position: "absolute",
                "z-index": "1",
                borderRadius: l_212.ops.rail.specifyBorderRadius || d_215,
                background: c_213,
                border: l_212.ops.rail.border,
              }),
              n_5(e_209, l_212.bar.opsSize, d_215),
              n_5(e_209, l_212.bar.posName, l_212.ops.rail.gutterOfEnds || 0),
              n_5(e_209, l_212.bar.opposName, l_212.ops.rail.gutterOfEnds || f_216),
              n_5(e_209, l_212.bar.sidePosName, l_212.ops.rail.gutterOfSide),
              e_209),
          };
        m_217 &&
          (y_218.on =
            (n_5((h_214 = {}), m_217.touchenter, function () {
              l_212.setRailHover();
            }),
            n_5(h_214, m_217.touchleave, function () {
              l_212.setRailLeave();
            }),
            h_214));
        var w_219 = l_212.ops.scrollButton.enable ? d_215 : 0,
          S_220 = {
            class: "__bar-wrap-is-" + l_212.type,
            style:
              ((o_210 = {
                position: "absolute",
                borderRadius: l_212.ops.rail.specifyBorderRadius || d_215,
              }),
              n_5(o_210, l_212.bar.posName, w_219),
              n_5(o_210, l_212.bar.opposName, w_219),
              o_210),
            on: {},
          },
          B_221 = (l_212.state.posValue * l_212.state.size * l_212.barRatio) / l_212.barSize,
          O_222 = l_212.state.opacity;
        T_24(this).setClassHook("vertical" == this.type ? "vBarVisible" : "hBarVisible", !!O_222);
        var E_223 = {
          style:
            (n_5(
              (r_211 = {
                cursor: "pointer",
                position: "absolute",
                margin: "auto",
                transition: "opacity 0.5s",
                "user-select": "none",
                "border-radius": "inherit",
              }),
              l_212.bar.size,
              100 * l_212.barSize + "%",
            ),
            n_5(r_211, "background", l_212.ops.bar.background),
            n_5(r_211, l_212.bar.opsSize, l_212.ops.bar.size),
            n_5(r_211, "opacity", O_222),
            n_5(r_211, "transform", "translate" + W_39[l_212.type].axis + "(" + B_221 + "%)"),
            r_211),
          class: "__bar-is-" + l_212.type,
          ref: "thumb",
          on: {},
        };
        "vertical" == l_212.type
          ? ((S_220.style.width = "100%"), (E_223.style.left = 0), (E_223.style.right = 0))
          : ((S_220.style.height = "100%"), (E_223.style.top = 0), (E_223.style.bottom = 0));
        var P_224 = this.touchManager.getTouchObject();
        return (
          (E_223.on[P_224.touchstart] = this.createBarEvent()),
          (S_220.on[P_224.touchstart] = this.createTrackEvent()),
          t_208("div", y_218, [
            this.createScrollbarButton(t_208, "start"),
            this.hideBar ? null : t_208("div", S_220, [t_208("div", E_223)]),
            this.createScrollbarButton(t_208, "end"),
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
          var t_225 = T_24(this),
            e_226 = t_225.vuescroll.state;
          e_226.isRailHover || ((e_226.isRailHover = !0), t_225.showBar());
        },
        setRailLeave: function () {
          var t_227 = T_24(this);
          ((t_227.vuescroll.state.isRailHover = !1), t_227.hideBar());
        },
        setBarDrag: function (t_228) {
          (this.$emit("setBarDrag", (this.isBarDragging = t_228)),
            T_24(this).setClassHook("vertical" == this.type ? "vBarDragging" : "hBarDragging", !!t_228));
        },
        createBarEvent: function () {
          var t_229 = this,
            e_230 = T_24(t_229),
            o_231 = t_229.touchManager.getTouchObject();
          function r_232(e_235) {
            var r_236 = t_229.touchManager.getEventObject(e_235);
            r_236 &&
              (e_235.stopImmediatePropagation(),
              e_235.preventDefault(),
              (r_236 = r_236[0]),
              (document.onselectstart = function () {
                return !1;
              }),
              (t_229.axisStartPos =
                r_236[t_229.bar.client] - t_229.$refs.thumb.getBoundingClientRect()[t_229.bar.posName]),
              t_229.setBarDrag(!0),
              O_17(document, o_231.touchmove, l_233),
              O_17(document, o_231.touchend, c_234));
          }
          function l_233(o_237) {
            if (t_229.axisStartPos) {
              var r_238 = t_229.touchManager.getEventObject(o_237);
              if (r_238) {
                r_238 = r_238[0];
                var l_239 = t_229.$refs.thumb.parentNode,
                  c_240 = r_238[t_229.bar.client] - l_239.getBoundingClientRect()[t_229.bar.posName],
                  h_241 = ((c_240 /= t_229.barRatio) - t_229.axisStartPos) / l_239[t_229.bar.offset];
                e_230.scrollTo(
                  n_5({}, t_229.bar.axis.toLowerCase(), e_230.scrollPanelElm[t_229.bar.scrollSize] * h_241),
                  !1,
                );
              }
            }
          }
          function c_234() {
            (t_229.setBarDrag(!1),
              e_230.hideBar(),
              (document.onselectstart = null),
              (t_229.axisStartPos = 0),
              O_17(document, o_231.touchmove, l_233, !1, "off"),
              O_17(document, o_231.touchend, c_234, !1, "off"));
          }
          return r_232;
        },
        createTrackEvent: function () {
          var t_242 = this;
          return function (e_243) {
            var o_244 = T_24(t_242),
              r_245 = t_242.bar,
              l_246 = r_245.client,
              c_247 = r_245.offset,
              h_248 = r_245.posName,
              d_249 = r_245.axis,
              f_250 = t_242.$refs.thumb;
            if ((e_243.preventDefault(), e_243.stopImmediatePropagation(), f_250)) {
              var v_251 = f_250[c_247],
                m_252 =
                  (t_242.touchManager.getEventObject(e_243)[0][l_246] -
                    e_243.currentTarget.getBoundingClientRect()[h_248] -
                    v_251 / 2) /
                  (e_243.currentTarget[c_247] - v_251);
              o_244.scrollTo(n_5({}, d_249.toLowerCase(), 100 * m_252 + "%"));
            }
          };
        },
        createScrollbarButton: function (t_253, e_254) {
          var o_255,
            r_256 = this;
          if (!r_256.ops.scrollButton.enable) return null;
          var l_257 = r_256.ops.rail.size,
            c_258 = r_256.ops.scrollButton,
            h_259 = c_258.opacity,
            d_260 = J_44(c_258.background, h_259),
            f_261 = {
              class: ["__bar-button", "__bar-button-is-" + r_256.type + "-" + e_254],
              style:
                ((o_255 = {}),
                n_5(o_255, r_256.bar.scrollButton[e_254], 0),
                n_5(o_255, "width", l_257),
                n_5(o_255, "height", l_257),
                n_5(o_255, "position", "absolute"),
                n_5(o_255, "cursor", "pointer"),
                n_5(o_255, "display", "table"),
                o_255),
              ref: e_254,
            },
            v_262 = {
              class: "__bar-button-inner",
              style: {
                border: "calc(" + l_257 + " / 2.5) solid transparent",
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
          "vertical" == r_256.type
            ? "start" == e_254
              ? ((v_262.style["border-bottom-color"] = d_260), (v_262.style.transform = "translateY(-25%)"))
              : ((v_262.style["border-top-color"] = d_260), (v_262.style.transform = "translateY(25%)"))
            : "start" == e_254
              ? ((v_262.style["border-right-color"] = d_260), (v_262.style.transform = "translateX(-25%)"))
              : ((v_262.style["border-left-color"] = d_260), (v_262.style.transform = "translateX(25%)"));
          var m_263 = this.touchManager.getTouchObject();
          return (
            (v_262.on[m_263.touchstart] = this.createScrollButtonEvent(e_254, m_263)),
            t_253("div", f_261, [t_253("div", v_262)])
          );
        },
        createScrollButtonEvent: function (t_264, e_265) {
          var o_266 = this,
            r_267 = T_24(o_266),
            l_268 = o_266.ops.scrollButton,
            c_269 = l_268.step,
            h_270 = l_268.mousedownStep,
            d_271 = "start" == t_264 ? -c_269 : c_269,
            f_272 = "start" == t_264 ? -h_270 : h_270,
            v_273 = Q_40(window),
            m_274 = o_266.type,
            y_275 = !1,
            w_276 = !0,
            S_277 = void 0;
          function B_278(l_283) {
            if (3 != l_283.which) {
              if (
                (r_267.setClassHook("cliking" + m_274 + t_264 + "Button", !0),
                l_283.stopImmediatePropagation(),
                l_283.preventDefault(),
                (w_276 = !1),
                r_267.scrollBy(n_5({}, "d" + o_266.bar.axis.toLowerCase(), d_271)),
                O_17(document, e_265.touchend, P_280, !1),
                "mousedown" == e_265.touchstart)
              ) {
                var c_284 = o_266.$refs[t_264];
                (O_17(c_284, "mouseenter", z_281, !1), O_17(c_284, "mouseleave", k_282, !1));
              }
              (clearTimeout(S_277),
                (S_277 = setTimeout(function () {
                  ((y_275 = !0), v_273(E_279, window));
                }, 500)));
            }
          }
          function E_279() {
            y_275 &&
              !w_276 &&
              (r_267.scrollBy(n_5({}, "d" + o_266.bar.axis.toLowerCase(), f_272), !1), v_273(E_279, window));
          }
          function P_280() {
            if (
              (clearTimeout(S_277),
              (y_275 = !1),
              O_17(document, e_265.touchend, P_280, !1, "off"),
              "mousedown" == e_265.touchstart)
            ) {
              var n_285 = o_266.$refs[t_264];
              (O_17(n_285, "mouseenter", z_281, !1, "off"), O_17(n_285, "mouseleave", k_282, !1, "off"));
            }
            r_267.setClassHook("cliking" + m_274 + t_264 + "Button", !1);
          }
          function z_281() {
            ((w_276 = !1), E_279());
          }
          function k_282() {
            w_276 = !0;
          }
          return B_278;
        },
      },
    };
    function G_46(t_286, e_287) {
      var o_288 = W_39[e_287].axis,
        r_289 = e_287.charAt(0) + "Bar",
        n_290 =
          !t_286.bar[r_289].state.size ||
          !t_286.mergedOptions.scrollPanel["scrolling" + o_288] ||
          (t_286.refreshLoad && "vertical" !== e_287) ||
          t_286.mergedOptions.bar.disable,
        l_291 = t_286.mergedOptions.rail.keepShow;
      return n_290 && !l_291
        ? null
        : {
            hideBar: n_290,
            props: {
              type: e_287,
              ops: {
                bar: t_286.mergedOptions.bar,
                rail: t_286.mergedOptions.rail,
                scrollButton: t_286.mergedOptions.scrollButton,
              },
              state: t_286.bar[r_289].state,
              hideBar: n_290,
            },
            on: {
              setBarDrag: t_286.setBarDrag,
            },
            ref: e_287 + "Bar",
            key: e_287,
          };
    }
    function tt_47(t_292, e_293) {
      var o_294 = G_46(e_293, "vertical"),
        r_295 = G_46(e_293, "horizontal");
      return (
        e_293.setClassHook("hasVBar", !(!o_294 || o_294.hideBar)),
        e_293.setClassHook("hasHBar", !(!r_295 || r_295.hideBar)),
        [
          o_294
            ? t_292(
                "bar",
                l_6({}, o_294, {
                  props: l_6(
                    {
                      otherBarHide: !r_295,
                    },
                    o_294.props,
                  ),
                }),
              )
            : null,
          r_295
            ? t_292(
                "bar",
                l_6({}, r_295, {
                  props: l_6(
                    {
                      otherBarHide: !o_294,
                    },
                    r_295.props,
                  ),
                }),
              )
            : null,
        ]
      );
    }
    var et_48 = function (t_296) {
        var e_297 = t_296.render,
          o_298 = t_296.components,
          r_299 = t_296.mixins;
        return {
          name: "vueScroll",
          props: {
            ops: {
              type: Object,
            },
          },
          components: o_298,
          mixins: [A_31].concat(c_7([].concat(r_299))),
          created: function () {
            var t_300 = this,
              e_301 = y_13(this.$vuescrollConfig || {}, {}),
              o_302 = y_13(L_34, e_301);
            ((this.$options.propsData.ops = this.$options.propsData.ops || {}),
              Object.keys(this.$options.propsData.ops).forEach(function (e_303) {
                w_14(t_300.mergedOptions, e_303, t_300.$options.propsData.ops);
              }),
              y_13(o_302, this.mergedOptions),
              (this._isVuescrollRoot = !0),
              (this.renderError = __35(this.mergedOptions)));
          },
          render: function (t_304) {
            var o_305 = this;
            if (o_305.renderError) return t_304("div", [[o_305.$slots.default]]);
            o_305.touchManager || (o_305.touchManager = new v_11());
            var r_306,
              data = {
                style: {
                  height: o_305.vuescroll.state.height,
                  width: o_305.vuescroll.state.width,
                  padding: 0,
                  position: "relative",
                  overflow: "hidden",
                },
                class: l_6(
                  {
                    __vuescroll: !0,
                  },
                  o_305.classHooks,
                ),
              },
              h_307 = o_305.touchManager.getTouchObject();
            h_307 &&
              (data.on =
                (n_5((r_306 = {}), h_307.touchenter, function () {
                  ((o_305.vuescroll.state.pointerLeave = !1),
                    o_305.updateBarStateAndEmitEvent(),
                    o_305.setClassHook("mouseEnter", !0));
                }),
                n_5(r_306, h_307.touchleave, function () {
                  ((o_305.vuescroll.state.pointerLeave = !0),
                    o_305.hideBar(),
                    o_305.setClassHook("mouseEnter", !1));
                }),
                n_5(r_306, h_307.touchmove, function () {
                  ((o_305.vuescroll.state.pointerLeave = !1), o_305.updateBarStateAndEmitEvent());
                }),
                r_306));
            var d_308 = [e_297(t_304, o_305)].concat(c_7(tt_47(t_304, o_305))),
              f_309 = this.$slots["scroll-container"];
            return f_309 ? C_22(t_304, f_309, d_308, data) : t_304("div", data, [d_308]);
          },
          mounted: function () {
            var t_310 = this;
            this.renderError ||
              (this.initVariables(),
              this.initWatchOpsChange(),
              this.refreshInternalStatus(),
              this.updatedCbs.push(function () {
                (t_310.scrollToAnchor(), t_310.updateBarStateAndEmitEvent());
              }));
          },
          updated: function () {
            var t_311 = this;
            (this.updatedCbs.forEach(function (e_312) {
              e_312.call(t_311);
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
            setBarDrag: function (t_313) {
              this.vuescroll.state.isDragging = t_313;
            },
            setClassHook: function (t_314, e_315) {
              this.classHooks[t_314] = e_315;
            },
            showAndDefferedHideBar: function (t_316) {
              var e_317 = this;
              (this.showBar(),
                this.timeoutId && (clearTimeout(this.timeoutId), (this.timeoutId = 0)),
                (this.timeoutId = setTimeout(function () {
                  ((e_317.timeoutId = 0), e_317.hideBar(t_316));
                }, this.mergedOptions.bar.showDelay)));
            },
            showBar: function () {
              var t_318 = this.mergedOptions.bar.opacity;
              ((this.bar.vBar.state.opacity = t_318), (this.bar.hBar.state.opacity = t_318));
            },
            hideBar: function (t_319) {
              var e_320 = this.vuescroll.state,
                o_321 = e_320.isDragging,
                r_322 = e_320.isRailHover;
              o_321 ||
                r_322 ||
                (t_319 &&
                  !this.mergedOptions.bar.keepShow &&
                  ((this.bar.hBar.state.opacity = 0), (this.bar.vBar.state.opacity = 0)),
                this.mergedOptions.bar.keepShow ||
                  this.vuescroll.state.isDragging ||
                  ((this.bar.vBar.state.opacity = 0), (this.bar.hBar.state.opacity = 0)));
            },
            useNumbericSize: function () {
              this.vuescroll.state.currentSizeStrategy = "number";
              var t_323 = this.mergedOptions.scrollPanel,
                e_324 = t_323.maxHeight,
                o_325 = t_323.maxWidth,
                r_326 = this.$el.parentNode,
                n_327 = r_326.clientHeight,
                l_328 = r_326.clientWidth,
                c_329 = this.scrollPanelElm,
                h_330 = c_329.scrollHeight,
                d_331 = c_329.scrollWidth,
                f_332 = void 0,
                v_333 = void 0;
              (e_324 || o_325
                ? ((v_333 = h_330 <= e_324 ? void 0 : e_324), (f_332 = d_331 <= o_325 ? void 0 : o_325))
                : ((v_333 = n_327), (f_332 = l_328)),
                (this.vuescroll.state.height = v_333 ? v_333 + "px" : void 0),
                (this.vuescroll.state.width = f_332 ? f_332 + "px" : void 0));
            },
            usePercentSize: function () {
              ((this.vuescroll.state.currentSizeStrategy = "percent"),
                (this.vuescroll.state.height = "100%"),
                (this.vuescroll.state.width = "100%"));
            },
            setVsSize: function () {
              var t_334 = this.mergedOptions.vuescroll.sizeStrategy,
                e_335 = this.mergedOptions.scrollPanel,
                o_336 = e_335.maxHeight,
                r_337 = e_335.maxWidth,
                n_338 = this.scrollPanelElm,
                l_339 = n_338.clientHeight,
                c_340 = n_338.clientWidth;
              "number" == t_334 || (o_336 && l_339 > o_336) || (r_337 && c_340 > r_337)
                ? this.useNumbericSize()
                : "percent" == t_334 && l_339 != o_336 && c_340 != r_337 && this.usePercentSize();
            },
            initWatchOpsChange: function () {
              var t_341 = this,
                e_342 = {
                  deep: !0,
                  sync: !0,
                };
              (this.$watch(
                "mergedOptions",
                function () {
                  setTimeout(function () {
                    if (t_341.isSmallChangeThisTick)
                      return (
                        (t_341.isSmallChangeThisTick = !1),
                        void t_341.updateBarStateAndEmitEvent("options-change")
                      );
                    t_341.refreshInternalStatus();
                  }, 0);
                },
                e_342,
              ),
                Y_38.forEach(function (o_343) {
                  t_341.$watch(
                    o_343,
                    function () {
                      t_341.isSmallChangeThisTick = !0;
                    },
                    e_342,
                  );
                }));
            },
            scrollToAnchor: function () {
              var t_344 = function (t_347) {
                  return /^#[a-zA-Z_]\d*$/.test(t_347);
                },
                e_345 = window.location.hash;
              if (e_345 && (!(e_345 = e_345.slice(e_345.lastIndexOf("#"))) || t_344(e_345))) {
                var o_346 = document.querySelector(e_345);
                !P_19(o_346, this.$el) ||
                  this.mergedOptions.scrollPanel.initialScrollY ||
                  this.mergedOptions.scrollPanel.initialScrollX ||
                  this.scrollIntoView(o_346);
              }
            },
          },
        };
      },
      ot_49 = {
        name: "scrollPanel",
        props: {
          ops: {
            type: Object,
            required: !0,
          },
        },
        methods: {
          updateInitialScroll: function () {
            var t_348 = 0,
              e_349 = 0,
              o_350 = T_24(this);
            (this.ops.initialScrollX && (t_348 = this.ops.initialScrollX),
              this.ops.initialScrollY && (e_349 = this.ops.initialScrollY),
              (t_348 || e_349) &&
                o_350.scrollTo({
                  x: t_348,
                  y: e_349,
                }));
          },
        },
        mounted: function () {
          var t_351 = this;
          setTimeout(function () {
            t_351._isDestroyed || t_351.updateInitialScroll();
          }, 0);
        },
        render: function (t_352) {
          var data = {
              class: ["__panel"],
              style: {
                position: "relative",
                boxSizing: "border-box",
              },
            },
            e_353 = T_24(this).$slots["scroll-panel"];
          return e_353
            ? C_22(t_352, e_353, this.$slots.default, data)
            : t_352("div", data, [[this.$slots.default]]);
        },
      };
    function it_50(t_354, e_355) {
      var o_356,
        r_357 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        l_358 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
        c_359 = (n_5((o_356 = {}), ot_49.name, ot_49), n_5(o_356, Z_45.name, Z_45), o_356),
        h_360 = {};
      ((h_360.components = c_359), (h_360.render = e_355), (h_360.mixins = t_354));
      var d_361 = et_48(h_360);
      return (X_37(r_357, l_358), d_361);
    }
    function nt_51(t_362, e_363) {
      for (
        var o_364 = t_362.children,
          r_365 = [],
          n_366 = function (t_369) {
            var o_370 = t_369.getBoundingClientRect(),
              r_371 = o_370.left,
              n_372 = o_370.top,
              l_373 = o_370.width,
              c_374 = o_370.height,
              h_375 = e_363.getBoundingClientRect(),
              d_376 = h_375.left,
              f_377 = h_375.top,
              v_378 = h_375.height,
              m_379 = h_375.width;
            return (
              r_371 - d_376 + l_373 > 0 &&
              r_371 - d_376 < m_379 &&
              n_372 - f_377 + c_374 > 0 &&
              n_372 - f_377 < v_378
            );
          },
          i_367 = 0;
        i_367 < o_364.length;
        i_367++
      ) {
        var l_368 = o_364.item(i_367);
        n_366(l_368) && !l_368.isResizeElm && r_365.push(l_368);
      }
      return r_365;
    }
    function st_52(t_380, e_381) {
      return function (time) {
        return e_381(t_380, time);
      };
    }
    function at_53(t_382, time) {
      var pattern = null;
      return (
        "easeInQuad" === t_382 && (pattern = time * time),
        "easeOutQuad" === t_382 && (pattern = time * (2 - time)),
        "easeInOutQuad" === t_382 && (pattern = time < 0.5 ? 2 * time * time : (4 - 2 * time) * time - 1),
        "easeInCubic" === t_382 && (pattern = time * time * time),
        "easeOutCubic" === t_382 && (pattern = --time * time * time + 1),
        "easeInOutCubic" === t_382 &&
          (pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1),
        "easeInQuart" === t_382 && (pattern = time * time * time * time),
        "easeOutQuart" === t_382 && (pattern = 1 - --time * time * time * time),
        "easeInOutQuart" === t_382 &&
          (pattern = time < 0.5 ? 8 * time * time * time * time : 1 - 8 * --time * time * time * time),
        "easeInQuint" === t_382 && (pattern = time * time * time * time * time),
        "easeOutQuint" === t_382 && (pattern = 1 + --time * time * time * time * time),
        "easeInOutQuint" === t_382 &&
          (pattern =
            time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * --time * time * time * time * time),
        pattern || time
      );
    }
    function lt_54() {
      return !0;
    }
    var ct_55 =
        Date.now ||
        function () {
          return new Date().getTime();
        },
      ut_56 = (function () {
        function t_383() {
          (o_3(this, t_383), this.init(), (this.isRunning = !1));
        }
        return (
          r_4(t_383, [
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
                  ((this.isPaused = !1), (this.ts = ct_55() - this.percent * this.spd), this.execScroll());
              },
            },
            {
              key: "startScroll",
              value: function (t_384, e_385, o_386) {
                var r_387 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lt_54,
                  n_388 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : lt_54,
                  l_389 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : lt_54,
                  c_390 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : lt_54,
                  h_391 = e_385 - t_384,
                  d_392 = h_391 > 0 ? -1 : 1,
                  f_393 = ct_55();
                (this.isRunning || this.init(),
                  d_392 != this.dir || f_393 - this.ts > 200
                    ? ((this.ts = f_393),
                      (this.dir = d_392),
                      (this.st = t_384),
                      (this.ed = e_385),
                      (this.df = h_391))
                    : (this.df += h_391),
                  (this.spd = o_386),
                  (this.completeCb = n_388),
                  (this.vertifyCb = l_389),
                  (this.stepCb = r_387),
                  (this.easingMethod = c_390),
                  this.isRunning || this.execScroll());
              },
            },
            {
              key: "execScroll",
              value: function () {
                var t_394 = this;
                if (this.df) {
                  var e_395 = this.percent || 0;
                  ((this.percent = 0), (this.isRunning = !0));
                  var o_396 = function o_397() {
                    if (t_394.isRunning && t_394.vertifyCb(e_395) && !t_394.isStopped) {
                      if (((e_395 = (ct_55() - t_394.ts) / t_394.spd), t_394.isPaused))
                        return ((t_394.percent = e_395), void (t_394.isRunning = !1));
                      if (e_395 < 1) {
                        var r_398 = t_394.st + t_394.df * t_394.easingMethod(e_395);
                        (t_394.stepCb(r_398), t_394.ref(o_397));
                      } else (t_394.stepCb(t_394.st + t_394.df), t_394.completeCb(), (t_394.isRunning = !1));
                    } else t_394.isRunning = !1;
                  };
                  this.ref(o_396);
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
                  (this.ref = Q_40(window)),
                  (this.isPaused = !1),
                  (this.isStopped = !1));
              },
            },
          ]),
          t_383
        );
      })();
    function ht_57(t_399, e_400, o_401) {
      var r_402 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 300,
        n_403 = arguments[4],
        l_404 = arguments[5],
        c_405 = void 0,
        h_406 = void 0,
        d_407 = void 0,
        f_408 = void 0,
        v_409 = void 0,
        m_410 = void 0,
        y_411 = t_399.nodeType,
        w_412 = new ut_56(),
        S_413 = new ut_56();
      if (y_411) {
        9 == y_411 && (t_399 = t_399.scrollingElement);
        var B_414 = t_399;
        ((c_405 = B_414.scrollLeft),
          (h_406 = B_414.scrollTop),
          (d_407 = B_414.scrollHeight),
          (f_408 = B_414.scrollWidth),
          (v_409 = B_414.clientWidth),
          (m_410 = B_414.clientHeight),
          (e_400 = void 0 === e_400 ? c_405 : $_28(e_400, f_408 - v_409)),
          (o_401 = void 0 === o_401 ? h_406 : $_28(o_401, d_407 - m_410)));
        var O_415 = st_52(n_403, at_53);
        (w_412.startScroll(
          c_405,
          e_400,
          r_402,
          function (e_416) {
            t_399.scrollLeft = e_416;
          },
          l_404,
          void 0,
          O_415,
        ),
          S_413.startScroll(
            h_406,
            o_401,
            r_402,
            function (e_417) {
              t_399.scrollTop = e_417;
            },
            l_404,
            void 0,
            O_415,
          ));
      } else
        E_18(
          "You must pass a dom for the first param, for window scrolling, you can pass document as the first param.",
        );
    }
    function pt_58(t_418) {
      var data = {
        ref: "scrollPanel",
        style: {
          height: "100%",
          overflowY: "scroll",
          overflowX: "scroll",
        },
        class: [],
        nativeOn: {
          "&scroll": t_418.handleScroll,
        },
        props: {
          ops: t_418.mergedOptions.scrollPanel,
        },
      };
      ((t_418.scrollYEnable = !0),
        (t_418.scrollXEnable = !0),
        (data.nativeOn.DOMMouseScroll = data.nativeOn.mousewheel = t_418.onMouseWheel));
      var e_419 = t_418.mergedOptions.scrollPanel,
        o_420 = e_419.scrollingY,
        r_421 = e_419.scrollingX;
      ((t_418.bar.hBar.state.size && r_421) ||
        ((t_418.scrollXEnable = !1), (data.style.overflowX = "hidden")),
        (t_418.bar.vBar.state.size && o_420) ||
          ((t_418.scrollYEnable = !1), (data.style.overflowY = "hidden")));
      var n_422 = B_16();
      return (
        n_422
          ? (t_418.bar.vBar.state.size &&
              t_418.mergedOptions.scrollPanel.scrollingY &&
              ("right" == t_418.mergedOptions.scrollPanel.verticalNativeBarPos
                ? (data.style.marginRight = "-" + n_422 + "px")
                : (data.style.marginLeft = "-" + n_422 + "px")),
            t_418.bar.hBar.state.size &&
              t_418.mergedOptions.scrollPanel.scrollingX &&
              (data.style.height = "calc(100% + " + n_422 + "px)"))
          : (N_30(),
            data.class.push("__hidebar"),
            d_9() && (data.style["-webkit-overflow-scrolling"] = "touch")),
        (data.style.transformOrigin = ""),
        (data.style.transform = ""),
        data
      );
    }
    function ft_59(t_423, e_424) {
      return t_423("scrollPanel", pt_58(e_424), [vt_60(t_423, e_424)]);
    }
    function vt_60(t_425, e_426) {
      var o_427 = {
          position: "relative",
          "box-sizing": "border-box",
          "min-width": "100%",
          "min-height": "100%",
        },
        data = {
          style: o_427,
          ref: "scrollContent",
          class: "__view",
        },
        r_428 = e_426.$slots["scroll-content"];
      return (
        e_426.mergedOptions.scrollPanel.scrollingX
          ? (o_427.width = k_21("width", "fit-content"))
          : (data.style.width = "100%"),
        e_426.mergedOptions.scrollPanel.padding && (data.style.paddingRight = e_426.mergedOptions.rail.size),
        r_428 ? C_22(t_425, r_428, e_426.$slots.default, data) : t_425("div", data, [e_426.$slots.default])
      );
    }
    function gt_61(element, t_429) {
      return mt_62(element, t_429);
    }
    function mt_62(element, t_430) {
      if (!element.hasResized) {
        var e_431 =
            "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",
          o_432 = document.createElement("div");
        o_432.style.cssText = e_431;
        var object = document.createElement("object");
        return (
          (object.style.cssText = e_431),
          (object.type = "text/html"),
          (object.tabIndex = -1),
          (object.onload = function () {
            O_17(object.contentDocument.defaultView, "resize", t_430);
          }),
          h_8() || (object.data = "about:blank"),
          (o_432.isResizeElm = !0),
          o_432.appendChild(object),
          element.appendChild(o_432),
          h_8() && (object.data = "about:blank"),
          function () {
            (object.contentDocument && O_17(object.contentDocument.defaultView, "resize", t_430, "off"),
              element.removeChild(o_432),
              (element.hasResized = !1));
          }
        );
      }
    }
    var bt_63 = {
        mixins: [
          {
            mounted: function () {
              ((this.scrollX = new ut_56()), (this.scrollY = new ut_56()));
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
              nativeScrollTo: function (t_433, e_434, o_435, r_436) {
                !1 === o_435 || (void 0 === o_435 && (o_435 = this.mergedOptions.scrollPanel.speed));
                var n_437 = this.scrollPanelElm,
                  l_438 = n_437.scrollTop,
                  c_439 = n_437.scrollLeft,
                  h_440 = n_437.scrollWidth,
                  d_441 = n_437.clientWidth,
                  f_442 = n_437.scrollHeight,
                  v_443 = n_437.clientHeight;
                if (
                  ((t_433 = void 0 === t_433 ? c_439 : $_28(t_433, h_440 - d_441)),
                  (e_434 = void 0 === e_434 ? l_438 : $_28(e_434, f_442 - v_443)),
                  o_435)
                ) {
                  var m_444 = st_52((r_436 = r_436 || this.mergedOptions.scrollPanel.easing), at_53);
                  (t_433 != c_439 &&
                    this.scrollX.startScroll(
                      c_439,
                      t_433,
                      o_435,
                      function (t_445) {
                        n_437.scrollLeft = t_445;
                      },
                      this.scrollingComplete.bind(this),
                      void 0,
                      m_444,
                    ),
                    e_434 != l_438 &&
                      this.scrollY.startScroll(
                        l_438,
                        e_434,
                        o_435,
                        function (t_446) {
                          n_437.scrollTop = t_446;
                        },
                        this.scrollingComplete.bind(this),
                        void 0,
                        m_444,
                      ));
                } else ((n_437.scrollTop = e_434), (n_437.scrollLeft = t_433));
              },
              getCurrentviewDomNative: function () {
                return nt_51(this.scrollContentElm, this.$el);
              },
            },
          },
          {
            methods: {
              updateNativeModeBarState: function () {
                var t_447 = this.scrollPanelElm,
                  e_448 = "percent" == this.vuescroll.state.currentSizeStrategy,
                  o_449 = this.vuescroll.state,
                  r_450 = o_449.width,
                  n_451 = o_449.height,
                  l_452 = e_448 || !r_450 ? t_447.clientWidth : r_450.slice(0, -2),
                  c_453 = e_448 || !n_451 ? t_447.clientHeight : n_451.slice(0, -2),
                  h_454 = c_453 / t_447.scrollHeight,
                  d_455 = l_452 / t_447.scrollWidth;
                ((this.bar.vBar.state.posValue = (100 * t_447.scrollTop) / c_453),
                  (this.bar.hBar.state.posValue = (100 * t_447.scrollLeft) / l_452),
                  (this.bar.vBar.state.size = h_454 < 1 ? h_454 : 0),
                  (this.bar.hBar.state.size = d_455 < 1 ? d_455 : 0));
              },
              getNativePosition: function () {
                return {
                  scrollTop: this.scrollPanelElm.scrollTop,
                  scrollLeft: this.scrollPanelElm.scrollLeft,
                };
              },
              css: function (t_456, style) {
                return window.getComputedStyle(t_456)[style];
              },
              checkScrollable: function (t_457, e_458, o_459) {
                for (
                  var r_460 = !1, n_461 = t_457.target ? t_457.target : t_457;
                  n_461 &&
                  1 == n_461.nodeType &&
                  n_461 !== this.scrollPanelElm.parentNode &&
                  !/^BODY|HTML/.test(n_461.nodeName);
                ) {
                  var l_462 = this.css(n_461, "overflow") || "";
                  if (/scroll|auto/.test(l_462)) {
                    var c_463 = this.getScrollProcess(n_461),
                      h_464 = c_463.v,
                      d_465 = c_463.h,
                      f_466 = "hidden" !== this.css(n_461, "overflowX"),
                      v_467 = "hidden" !== this.css(n_461, "overflowY");
                    if (
                      (f_466 && ((e_458 < 0 && d_465 > 0) || (e_458 > 0 && d_465 < 1))) ||
                      (v_467 && ((o_459 < 0 && h_464 > 0) || (o_459 > 0 && h_464 < 1)))
                    ) {
                      r_460 = n_461 == this.scrollPanelElm;
                      break;
                    }
                  }
                  n_461 = !!n_461.parentNode && n_461.parentNode;
                }
                return r_460;
              },
              onMouseWheel: function (t_468) {
                var e_469 = this.mergedOptions.vuescroll,
                  o_470 = e_469.wheelDirectionReverse,
                  r_471 = e_469.wheelScrollDuration,
                  n_472 = e_469.checkShiftKey,
                  l_473 = e_469.locking,
                  c_474 = void 0,
                  h_475 = void 0;
                (t_468.wheelDelta
                  ? t_468.deltaY || t_468.deltaX
                    ? ((c_474 = t_468.deltaX),
                      (h_475 = t_468.deltaY),
                      l_473 && (Math.abs(t_468.deltaX) > Math.abs(t_468.deltaY) ? (h_475 = 0) : (c_474 = 0)))
                    : ((c_474 = 0), (h_475 = (-1 * t_468.wheelDelta) / 2))
                  : t_468.detail &&
                    ((h_475 = c_474 = 16 * t_468.detail),
                    1 == t_468.axis ? (h_475 = 0) : 2 == t_468.axis && (c_474 = 0)),
                  n_472 && t_468.shiftKey && ((c_474 ^= h_475), (c_474 ^= h_475 ^= c_474)),
                  o_470 && ((c_474 ^= h_475), (c_474 ^= h_475 ^= c_474)),
                  this.checkScrollable(t_468, c_474, h_475) &&
                    (t_468.stopPropagation(),
                    t_468.preventDefault(),
                    this.scrollBy(
                      {
                        dx: c_474,
                        dy: h_475,
                      },
                      r_471,
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
          internalScrollTo: function (t_476, e_477, animate, o_478) {
            this.nativeScrollTo(t_476, e_477, animate, o_478);
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
          handleScroll: function (t_479) {
            this.updateBarStateAndEmitEvent("handle-scroll", t_479);
          },
          updateBarStateAndEmitEvent: function (t_480) {
            var e_481 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            (this.updateNativeModeBarState(),
              t_480 && this.emitEvent(t_480, e_481),
              this.mergedOptions.bar.onlyShowBarOnScroll
                ? ("handle-scroll" != t_480 &&
                    "handle-resize" != t_480 &&
                    "refresh-status" != t_480 &&
                    "window-resize" != t_480 &&
                    "options-change" != t_480) ||
                  this.showAndDefferedHideBar(!0)
                : this.showAndDefferedHideBar());
          },
          getScrollProcess: function (t_482) {
            var e_483 = t_482 || this.scrollPanelElm,
              o_484 = e_483.scrollHeight,
              r_485 = e_483.scrollWidth,
              n_486 = e_483.clientHeight,
              l_487 = e_483.clientWidth,
              c_488 = e_483.scrollTop,
              h_489 = e_483.scrollLeft;
            return {
              v: Math.min(c_488 / (o_484 - n_486 || 1), 1),
              h: Math.min(h_489 / (r_485 - l_487 || 1), 1),
            };
          },
          emitEvent: function (t_490) {
            var e_491 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              o_492 = this.scrollPanelElm,
              r_493 = o_492.scrollTop,
              n_494 = o_492.scrollLeft,
              l_495 = {
                type: "vertical",
              },
              c_496 = {
                type: "horizontal",
              },
              h_497 = this.getScrollProcess(),
              d_498 = h_497.v,
              f_499 = h_497.h;
            ((l_495.process = d_498),
              (c_496.process = f_499),
              (l_495.barSize = this.bar.vBar.state.size),
              (c_496.barSize = this.bar.hBar.state.size),
              (l_495.scrollTop = r_493),
              (c_496.scrollLeft = n_494),
              this.$emit(t_490, l_495, c_496, e_491));
          },
          initVariables: function () {
            this.$el._isVuescroll = !0;
          },
          refreshInternalStatus: function () {
            (this.setVsSize(), this.registryResize(), this.updateBarStateAndEmitEvent("refresh-status"));
          },
          registryResize: function () {
            var t_500 = this,
              e_501 = this.mergedOptions.vuescroll.detectResize;
            if ((!this.destroyResize || !e_501) && (this.destroyResize && this.destroyResize(), e_501)) {
              var o_502 = this.scrollContentElm,
                r_503 = this,
                n_504 = function () {
                  r_503.updateBarStateAndEmitEvent("window-resize");
                },
                l_505 = function () {
                  var e_508 = {};
                  ((e_508.width = t_500.scrollPanelElm.scrollWidth),
                    (e_508.height = t_500.scrollPanelElm.scrollHeight),
                    t_500.updateBarStateAndEmitEvent("handle-resize", e_508),
                    t_500.setVsSize());
                };
              window.addEventListener("resize", n_504, !1);
              var c_506 = gt_61(o_502, l_505),
                h_507 = function () {
                  window.removeEventListener("resize", n_504, !1);
                };
              this.destroyResize = function () {
                (h_507(), c_506(), (t_500.destroyResize = null));
              };
            }
          },
          getPosition: function () {
            return this.getNativePosition();
          },
        },
      },
      component = it_50(bt_63, ft_59, [
        {
          vuescroll: {
            wheelScrollDuration: 0,
            wheelDirectionReverse: !1,
            checkShiftKey: !0,
          },
        },
      ]);
    function yt_64(t_509) {
      var e_510 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (t_509.component(e_510.name || component.name, component),
        (t_509.prototype.$vuescrollConfig = e_510.ops || {}));
    }
    var wt_65 = l_6(
      {
        install: yt_64,
        version: "4.17.3",
        refreshAll: V_33,
        scrollTo: ht_57,
      },
      component,
    );
    return ("undefined" != typeof window && window.Vue && window.Vue.use(wt_65), wt_65);
  })(webpackRequire(1));
};
