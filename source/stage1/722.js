// scroll-snap-type (component) — module 722 from be1f69b
// module 722 from be1f69b.js
// deps:
const module_722 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire.r(webpackExports),
    webpackRequire.d(webpackExports, "ScrollToPlugin", function () {
      return C_17;
    }),
    webpackRequire.d(webpackExports, "default", function () {
      return C_17;
    }));
  var r_1,
    o_2,
    c_3,
    l_4,
    f_5,
    d_6,
    h_7,
    m_8 = function () {
      return "undefined" != typeof window;
    },
    v_9 = function () {
      return r_1 || (m_8() && (r_1 = window.gsap) && r_1.registerPlugin && r_1);
    },
    y_10 = function (e_18) {
      return "string" == typeof e_18;
    },
    w_11 = function (e_19) {
      return "function" == typeof e_19;
    },
    __12 = function (element, e_20) {
      var t_21 = "x" === e_20 ? "Width" : "Height",
        n_22 = "scroll" + t_21,
        r_23 = "client" + t_21;
      return element === c_3 || element === l_4 || element === f_5
        ? Math.max(l_4[n_22], f_5[n_22]) - (c_3["inner" + t_21] || l_4[r_23] || f_5[r_23])
        : element[n_22] - element["offset" + t_21];
    },
    k_13 = function (e_24, t_25) {
      var p_26 = "scroll" + ("x" === t_25 ? "Left" : "Top");
      return (
        e_24 === c_3 &&
          (null != e_24.pageXOffset
            ? (p_26 = "page" + t_25.toUpperCase() + "Offset")
            : (e_24 = null != l_4[p_26] ? l_4 : f_5)),
        function () {
          return e_24[p_26];
        }
      );
    },
    x_14 = function (element, e_27) {
      if (!(element = d_6(element)[0]) || !element.getBoundingClientRect)
        return (
          console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0,
          }
        );
      var rect = element.getBoundingClientRect(),
        t_28 = !e_27 || e_27 === c_3 || e_27 === f_5,
        n_29 = t_28
          ? {
              top: l_4.clientTop - (c_3.pageYOffset || l_4.scrollTop || f_5.scrollTop || 0),
              left: l_4.clientLeft - (c_3.pageXOffset || l_4.scrollLeft || f_5.scrollLeft || 0),
            }
          : e_27.getBoundingClientRect(),
        r_30 = {
          x: rect.left - n_29.left,
          y: rect.top - n_29.top,
        };
      return (!t_28 && e_27 && ((r_30.x += k_13(e_27, "x")()), (r_30.y += k_13(e_27, "y")())), r_30);
    },
    S_15 = function (e_31, t_32, n_33, r_34, o_35) {
      return isNaN(e_31) || "object" == typeof e_31
        ? y_10(e_31) && "=" === e_31.charAt(1)
          ? parseFloat(e_31.substr(2)) * ("-" === e_31.charAt(0) ? -1 : 1) + r_34 - o_35
          : "max" === e_31
            ? __12(t_32, n_33) - o_35
            : Math.min(__12(t_32, n_33), x_14(e_31, t_32)[n_33] - o_35)
        : parseFloat(e_31) - o_35;
    },
    A_16 = function () {
      ((r_1 = v_9()),
        m_8() &&
          r_1 &&
          document.body &&
          ((c_3 = window),
          (f_5 = document.body),
          (l_4 = document.documentElement),
          (d_6 = r_1.utils.toArray),
          r_1.config({
            autoKillThreshold: 7,
          }),
          (h_7 = r_1.config()),
          (o_2 = 1)));
    },
    C_17 = {
      version: "3.10.4",
      name: "scrollTo",
      rawVars: 1,
      register: function (e_36) {
        ((r_1 = e_36), A_16());
      },
      init: function (e_37, t_38, n_39, l_40, f_41) {
        o_2 || A_16();
        var data = this,
          d_42 = r_1.getProperty(e_37, "scrollSnapType");
        ((data.isWin = e_37 === c_3),
          (data.target = e_37),
          (data.tween = n_39),
          (t_38 = (function (e_43, t_44, n_45, r_46) {
            if ((w_11(e_43) && (e_43 = e_43(t_44, n_45, r_46)), "object" != typeof e_43))
              return y_10(e_43) && "max" !== e_43 && "=" !== e_43.charAt(1)
                ? {
                    x: e_43,
                    y: e_43,
                  }
                : {
                    y: e_43,
                  };
            if (e_43.nodeType)
              return {
                y: e_43,
                x: e_43,
              };
            var p_47,
              o_48 = {};
            for (p_47 in e_43)
              o_48[p_47] =
                "onAutoKill" !== p_47 && w_11(e_43[p_47]) ? e_43[p_47](t_44, n_45, r_46) : e_43[p_47];
            return o_48;
          })(t_38, l_40, e_37, f_41)),
          (data.vars = t_38),
          (data.autoKill = !!t_38.autoKill),
          (data.getX = k_13(e_37, "x")),
          (data.getY = k_13(e_37, "y")),
          (data.x = data.xPrev = data.getX()),
          (data.y = data.yPrev = data.getY()),
          d_42 &&
            "none" !== d_42 &&
            ((data.snap = 1),
            (data.snapInline = e_37.style.scrollSnapType),
            (e_37.style.scrollSnapType = "none")),
          null != t_38.x
            ? (data.add(data, "x", data.x, S_15(t_38.x, e_37, "x", data.x, t_38.offsetX || 0), l_40, f_41),
              data._props.push("scrollTo_x"))
            : (data.skipX = 1),
          null != t_38.y
            ? (data.add(data, "y", data.y, S_15(t_38.y, e_37, "y", data.y, t_38.offsetY || 0), l_40, f_41),
              data._props.push("scrollTo_y"))
            : (data.skipY = 1));
      },
      render: function (e_49, data) {
        for (
          var t_50,
            n_51,
            r_52,
            o_53,
            l_54,
            f_55 = data._pt,
            d_56 = data.target,
            m_57 = data.tween,
            v_58 = data.autoKill,
            y_59 = data.xPrev,
            w_60 = data.yPrev,
            k_61 = data.isWin,
            x_62 = data.snap,
            S_63 = data.snapInline;
          f_55;
        )
          (f_55.r(e_49, f_55.d), (f_55 = f_55._next));
        ((t_50 = k_61 || !data.skipX ? data.getX() : y_59),
          (r_52 = (n_51 = k_61 || !data.skipY ? data.getY() : w_60) - w_60),
          (o_53 = t_50 - y_59),
          (l_54 = h_7.autoKillThreshold),
          data.x < 0 && (data.x = 0),
          data.y < 0 && (data.y = 0),
          v_58 &&
            (!data.skipX && (o_53 > l_54 || o_53 < -l_54) && t_50 < __12(d_56, "x") && (data.skipX = 1),
            !data.skipY && (r_52 > l_54 || r_52 < -l_54) && n_51 < __12(d_56, "y") && (data.skipY = 1),
            data.skipX &&
              data.skipY &&
              (m_57.kill(),
              data.vars.onAutoKill && data.vars.onAutoKill.apply(m_57, data.vars.onAutoKillParams || []))),
          k_61
            ? c_3.scrollTo(data.skipX ? t_50 : data.x, data.skipY ? n_51 : data.y)
            : (data.skipY || (d_56.scrollTop = data.y), data.skipX || (d_56.scrollLeft = data.x)),
          !x_62 ||
            (1 !== e_49 && 0 !== e_49) ||
            ((n_51 = d_56.scrollTop),
            (t_50 = d_56.scrollLeft),
            S_63 ? (d_56.style.scrollSnapType = S_63) : d_56.style.removeProperty("scroll-snap-type"),
            (d_56.scrollTop = n_51 + 1),
            (d_56.scrollLeft = t_50 + 1),
            (d_56.scrollTop = n_51),
            (d_56.scrollLeft = t_50)),
          (data.xPrev = data.x),
          (data.yPrev = data.y));
      },
      kill: function (e_64) {
        var t_65 = "scrollTo" === e_64;
        ((t_65 || "scrollTo_x" === e_64) && (this.skipX = 1),
          (t_65 || "scrollTo_y" === e_64) && (this.skipY = 1));
      },
    };
  ((C_17.max = __12), (C_17.getOffset = x_14), (C_17.buildGetter = k_13), v_9() && r_1.registerPlugin(C_17));
};
