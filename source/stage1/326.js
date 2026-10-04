// rem / device plugin ($flex, $qs): html font-size from the viewport — module 326 from 8c4c131
// module 326 from 8c4c131.js
// deps: 224, 556, 204, 321, 299
const module_326 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  (webpackRequire(224), webpackRequire(556), webpackRequire(204));
  var vendorBundle = webpackRequire(321),
    vendorBundleDefault = webpackRequire.n(vendorBundle),
    r_1 = 0,
    A_2 = "mobile",
    m_3 = 3,
    d_4 = !1;
  function c_5(t_9, e_10) {
    var o_11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      l_12 = e_10.documentElement,
      A_13 = t_9.devicePixelRatio || 1,
      m_14 = navigator.userAgent.toLowerCase(),
      d_15 =
        m_14.indexOf("android") > -1 && m_14.indexOf("chrome") > -1 && m_14.match(/chrome\/([\d.]+)/i)[1],
      c_16 = d_15 && Number(d_15.split(".")[0]),
      h_17 = c_16 && c_16 >= 79,
      y_18 = o_11.designWidth,
      w_19 = o_11.designHeight,
      f_20 = o_11.maxFillWidth,
      v_21 = o_11.minScaleWidth;
    function M_22(t_26) {
      var babelHelpers = webpackRequire(299),
        o_27 = y_18;
      return (
        750 === y_18 && (o_27 = "landscape" === babelHelpers.getOrient() ? w_19 : y_18),
        t_26 > f_20 && (o_27 = f_20),
        o_27
      );
    }
    function I_23() {
      var n_28 = l_12.clientWidth;
      750 !== y_18 &&
        (y_18 < f_20 && n_28 > y_18 && n_28 <= f_20 && (n_28 = y_18), n_28 < v_21 && (n_28 = v_21));
      var o_29 = M_22(n_28);
      if (((r_1 = (100 * n_28) / o_29), (l_12.style.fontSize = "".concat(r_1, "px")), !h_17)) {
        var A_30 = parseFloat(t_9.getComputedStyle(l_12).fontSize);
        ((r_1 = (r_1 * r_1) / A_30), (l_12.style.fontSize = "".concat(r_1, "px")));
      }
      e_10.getElementById("__nuxt").style.visibility = "visible";
    }
    if (
      (I_23(),
      t_9.addEventListener("resize", I_23),
      t_9.addEventListener("pageshow", function (t_31) {
        t_31.persisted && I_23();
      }),
      A_13 >= 2)
    ) {
      var B_24 = e_10.createElement("body"),
        k_25 = e_10.createElement("div");
      ((k_25.style.border = ".5px solid transparent"),
        B_24.appendChild(k_25),
        l_12.appendChild(B_24),
        1 === k_25.offsetHeight && l_12.classList.add("hairlines"),
        l_12.removeChild(B_24));
    }
  }
  function h_6() {
    var t_32 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    c_5(window, document, t_32);
  }
  function y_7(t_33) {
    document.documentElement.classList.add(t_33);
  }
  function w_8(t_34) {
    switch (t_34) {
      case "rem":
        return r_1;
      case "deviceType":
      case "device":
        return A_2;
      case "clientType":
        return m_3;
      case "pc":
        return "pc" === A_2;
      case "mobile":
      case "mo":
        return "mobile" === A_2;
      case "samsungTablet":
        return d_4;
      default:
        return;
    }
  }
  webpackExports.a = function (t_35, e_36) {
    var o_37;
    t_35.app;
    (e_36("flex", w_8),
      e_36("qs", vendorBundleDefault.a),
      (o_37 = webpackRequire(299)),
      (A_2 = o_37.getDeviceType()),
      o_37.ios() ? (m_3 = 1) : o_37.android() && (m_3 = 2),
      (d_4 = o_37.samsungTablet()),
      "mobile" === A_2
        ? (y_7("mo"),
          h_6({
            designWidth: 750,
            designHeight: 1334,
          }))
        : (y_7("pc"),
          h_6({
            designWidth: 2560,
            maxFillWidth: 2560,
            minScaleWidth: 1440,
          })));
  };
};
