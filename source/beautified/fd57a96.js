(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1117: function (e, t, o) {
      "use strict";
      var n = o(1239);
      (o(84),
        o(136),
        o(77),
        o(137),
        o(353),
        o(138),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.del =
          t.put =
          t.post =
          t.get =
          t.requestIsSucc =
          t.defaultFormatResult =
          t.formatParams =
          t.formatResult =
          t.defaultFormatParams =
            void 0));
      var r =
          "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
            ? function (e) {
                return n(e);
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? "symbol"
                  : n(e);
              },
        d = y(o(114)),
        l = o(28),
        c = y(o(1176)),
        f = y(o(1240)),
        m = y(o(1241)),
        I = y(o(1243)),
        v = o(1166),
        h = y(o(1244));
      function y(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var S = "GET",
        M = "POST",
        w = "DELETE",
        P = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments[1];
          v.GLB.clearTimeout(c.default.get("hideDefaultLoadingTimer"));
          var o = c.default.get("isRequestingCount") || 0;
          (c.default.set("isRequestingCount", o + 1),
            (0, v.log)("isRequestingCount+", o),
            0 === o &&
              (!1 === t || (void 0 === t && !h.default.loadingDelay)
                ? h.default.showLoading(e)
                : setTimeout(function () {
                    c.default.get("isRequestingCount") > 0 && h.default.showLoading(e);
                  }, t || h.default.loadingDelay)));
        },
        j = function () {
          var e = c.default.get("isRequestingCount") || 0;
          (e > 0 && c.default.set("isRequestingCount", e - 1), (0, v.log)("isRequestingCount-", e));
          var t = v.GLB.setTimeout(function () {
            0 === c.default.get("isRequestingCount") &&
              ((0, v.log)("isRequestingCount-", "hideLoading"), h.default.hideLoading());
          }, 300);
          c.default.set("hideDefaultLoadingTimer", t);
        },
        N = function () {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = arguments[1],
            o = arguments[2];
          v.isSSR ||
            (void 0 !== t &&
              !1 !== t &&
              ("function" == typeof t ? t(e) : e ? P("string" == typeof t ? t : "", o) : j()));
        },
        x = (t.defaultFormatParams = function (e) {
          return e;
        }),
        D =
          ((t.formatResult = function (data) {
            return data;
          }),
          (t.formatParams = function (e) {
            return e;
          }),
          (t.defaultFormatResult = function (data) {
            return data;
          })),
        i = ((t.requestIsSucc = h.default.isSuccessResponse), 0),
        R = function (e, t, n, c, y) {
          var M = {};
          (void 0 === n.data &&
          void 0 === n.preParams &&
          void 0 === n.cache &&
          void 0 === n.loading &&
          void 0 === n.success &&
          void 0 === n.error &&
          void 0 === n.download &&
          void 0 === n.response
            ? (M.data = n)
            : (M = n),
            (M.preParams = void 0 === M.preParams || M.preParams),
            v.isSSR && ((M.cache = !1), (M.loading = !1), (M.success = !1)));
          var w = h.default.formatParams(M.data) || {};
          if (
            (M.preParams &&
              "prerelease" === l.environment &&
              ((w.isPreview = 1), (w.prerelease = 1), (w.timestamp = Date.now())),
            (w = c(w)),
            M.download)
          )
            return (
              (0, I.default)(
                (0, v.toUrlWithParams)(/^http/i.test(t) ? t : (M.baseURL ? M.baseURL : l.apiBase) + t, w),
              ),
              Promise.resolve({ retcode: 0 })
            );
          (!v.isSSR &&
            /authkey=/gi.test(window.location.search) &&
            (t += (t.indexOf("?") > -1 ? "&" : "?") + window.location.search.replace("?", "")),
            (t = h.default.formatURL(t)));
          var P = (0, v.encode)((0, v.toUrlWithParams)(t, w));
          if (((0, v.log)("request from cache args.cache", P, M.cache), e === S && M.cache)) {
            var j = f.default.get(P);
            if (((0, v.log)("request from cache ", P, j), j))
              return (
                (0, v.log)("request from cache after"),
                j.then(function (data) {
                  return y(M.response ? data : h.default.formatResult(data));
                })
              );
          }
          if (e === S) {
            (0, v.log)("request merge", P, (i += 1));
            var x = m.default.merge(P);
            if (((0, v.log)("request merge result ", P, x), x))
              return (
                (0, v.log)("request merge return", P),
                x.then(function (data) {
                  return y(M.response ? data : h.default.formatResult(data));
                })
              );
          }
          return (
            (0, v.log)("request merge return after xxx", P),
            N(!0, M.loading, M.loadingDelay),
            (0, v.log)("request merge x", P, i),
            new Promise(function (n, c) {
              (0, v.log)("request merge y", P, i);
              var I = M,
                j =
                  (I.params,
                  I.data,
                  (function (e, t) {
                    var o = {};
                    for (var i in e)
                      t.indexOf(i) >= 0 || (Object.prototype.hasOwnProperty.call(e, i) && (o[i] = e[i]));
                    return o;
                  })(I, ["params", "data"]));
              e === S ? (j.params = w) : (j.data = w);
              var x = d.default;
              if ("nuxt" === l.axiosType)
                try {
                  x = o(500).memoryCache.get("nuxtContext").$axios;
                } catch (e) {}
              x(Object.assign({ baseURL: l.apiBase, url: t, method: e.toLowerCase() }, j))
                .then(function (o) {
                  var d,
                    l,
                    I = o.data;
                  if ((N(!1, M.loading), (0, v.log)(t, "success", I), h.default.isSuccessResponse(I))) {
                    !(function (e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                      void 0 !== e &&
                        !1 !== e &&
                        ("function" == typeof e
                          ? e(t)
                          : "string" == typeof e
                            ? h.default.showSuccMessage(e)
                            : "object" === (void 0 === e ? "undefined" : r(e))
                              ? h.default.showSuccMessage(
                                  e.content || t.msg || t.message || "操作处理完成",
                                  e.title || "",
                                )
                              : h.default.showSuccMessage(t.msg || t.message || "操作处理完成"));
                    })(M.success, I);
                    var w = JSON.parse(JSON.stringify(I)),
                      j = y(M.response ? w : h.default.formatResult(w));
                    (e === S && (f.default.set(P, I), m.default.complete(P, !0, I)), n(j));
                  } else {
                    if (I && I.retcode && -100 === I.retcode) (0, v.log)("未登录");
                    else if (I && I.retcode && -403 === I.retcode)
                      ((0, v.log)("无权限"), m.default.complete(P, !0, I));
                    else {
                      var x = I.msg || I.message || "接口数据格式错误";
                      ((d = M.error),
                        (l = { status: I && I.retcode ? I.retcode : 1, statusText: x }),
                        !1 !== d &&
                          ("function" == typeof d
                            ? d(l)
                            : "string" == typeof d
                              ? h.default.showWarnMessage(d)
                              : "object" === (void 0 === d ? "undefined" : r(d))
                                ? h.default.showWarnMessage(d.content || l.statusText, d.title || "")
                                : h.default.showWarnMessage(l.statusText)));
                    }
                    (e === S && m.default.remove(P), c(o));
                  }
                })
                .catch(function (e) {
                  (m.default.remove(P), N(!1, M.loading));
                  var o = 0,
                    n = "";
                  if (e.response) {
                    var d = e.response;
                    ((o = d.status), (n = d.statusText));
                  } else n = e.request ? "no response was received" : e.message;
                  (!(function (e, t) {
                    !1 !== e &&
                      ("function" == typeof e
                        ? e(t)
                        : "string" == typeof e
                          ? h.default.showErrorMessage(e)
                          : "object" === (void 0 === e ? "undefined" : r(e))
                            ? h.default.showErrorMessage(e.content || t.statusText, e.title || "")
                            : h.default.showErrorMessage(t.statusText));
                  })(M.error, { status: o, statusText: n }),
                    (0, v.log)(t, "error", e),
                    c(e));
                });
            })
          );
        };
      t.default = { defaults: h.default };
      ((t.get = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x,
          n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : D;
        return R(S, e, t, o, n);
      }),
        (t.post = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : D;
          return R(M, e, t, o, n);
        }),
        (t.put = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : D;
          return R("PUT", e, t, o, n);
        }),
        (t.del = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : D;
          return R(w, e, t, o, n);
        }));
    },
    1166: function (e, t, o) {
      "use strict";
      (function (e) {
        (o(138), o(85), Object.defineProperty(t, "__esModule", { value: !0 }));
        t.GLB = "undefined" == typeof window ? e : window;
        var n = (t.isSSR = "undefined" == typeof window || "undefined" == typeof document);
        ((t.encode = function (e) {
          return e.replace(/(http|https|:|\.|\/|\?|&|=|#|,)/gi, "");
        }),
          (t.toUrlWithParams = function (e) {
            for (
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = [],
                n = Object.keys(t),
                i = 0,
                r = n.length;
              i < r;
              i++
            )
              o.push(n[i] + "=" + t[n[i]]);
            return o.length > 0 ? e + (e.indexOf("?") > 1 ? "&" : "?") + o.join("&") : e;
          }),
          (t.log = function () {
            var e;
            !n && window.location.href.indexOf("debug=") > -1 && (e = console).log.apply(e, arguments);
          }),
          (t.getTimestamp = function () {
            return Math.ceil(new Date().getTime() / 1e3);
          }));
      }).call(this, o(42));
    },
    1176: function (e, t, o) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.Store = void 0));
      var n = (function () {
          function e(e, t) {
            for (var i = 0; i < t.length; i++) {
              var o = t[i];
              ((o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o));
            }
          }
          return function (t, o, n) {
            return (o && e(t.prototype, o), n && e(t, n), t);
          };
        })(),
        r = o(1166);
      function d(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      r.GLB.miHoYoUserModelMemoryCache = {};
      var l = "defaultData",
        c = (t.Store = (function () {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
            (d(this, e),
              r.GLB.miHoYoUserModelMemoryCache[t] || (r.GLB.miHoYoUserModelMemoryCache[t] = {}),
              (this.data = r.GLB.miHoYoUserModelMemoryCache[t]));
          }
          return (
            n(e, [
              {
                key: "get",
                value: function (e) {
                  return this.data[e];
                },
              },
              {
                key: "set",
                value: function (e, data) {
                  this.data[e] = data;
                },
              },
            ]),
            e
          );
        })()),
        f = new c();
      t.default = f;
    },
    1239: function (e, t) {
      function o(t) {
        return (
          (e.exports = o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          o(t)
        );
      }
      ((e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports));
    },
    1240: function (e, t, o) {
      "use strict";
      (o(77), Object.defineProperty(t, "__esModule", { value: !0 }));
      var n = o(1166),
        r = new (o(1176).Store)("responseData");
      t.default = {
        get: function (e) {
          var t = r.get(e);
          return ((0, n.log)("response cache get", e, t), t ? Promise.resolve(JSON.parse(t)) : null);
        },
        set: function (e, data) {
          return ((0, n.log)("response cache set", e, data), r.set(e, JSON.stringify(data)), !0);
        },
      };
    },
    1241: function (e, t, o) {
      "use strict";
      (o(77), Object.defineProperty(t, "__esModule", { value: !0 }));
      var n,
        r = o(1176),
        d = o(1242),
        l = (n = d) && n.__esModule ? n : { default: n },
        c = o(1166);
      var f = new r.Store("requestQueue"),
        m = function (e) {
          return f.get(e);
        };
      t.default = {
        merge: function (e) {
          if (c.isSSR) return !1;
          var t = m(e);
          return (
            (0, c.log)("request merge start,urlKey & request", e, JSON.stringify(t)),
            t
              ? !!t.isRequesting &&
                ((0, c.log)("request merge success", e),
                new Promise(function (t, o) {
                  ((0, c.log)("request merge event bind "),
                    l.default.on(e, function (n) {
                      return (
                        (0, c.log)("request merge resolve", e, n),
                        n.rsp.isSuccess ? t(n.rsp.data) : o(n.rsp.data)
                      );
                    }));
                }))
              : ((function (e) {
                  (f.set(e, { isRequesting: !0, timestamp: (0, c.getTimestamp)() }),
                    (0, c.log)("request merge set after", e, m(e)));
                })(e),
                (0, c.log)("request merge first", e),
                !1)
          );
        },
        complete: function (e, t, data) {
          !(function (e, t, data) {
            (l.default.emit({ type: e, rsp: { isSuccess: t, data: data } }),
              f.set(e, null),
              (0, c.log)("request merge remove", e));
          })(e, t, data);
        },
        remove: function (e) {
          (f.set(e, null), (0, c.log)("merge request remove", e));
        },
      };
    },
    1242: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        handlers: new (o(1176).Store)("eventHandlers"),
        on: function (e, t) {
          (void 0 === n.handlers[e] && (n.handlers[e] = []), n.handlers[e].push(t));
        },
        emit: function (e) {
          if (n.handlers[e.type] instanceof Array) {
            for (var t = n.handlers[e.type], i = 0; i < t.length; i++) t[i](e);
            n.handlers[e.type] = [];
          }
        },
        remove: function (e, t) {
          if (n.handlers[e] instanceof Array)
            for (var o = n.handlers[e], i = 0; i < o.length; i++)
              if (o[i] === t) {
                o.splice(i, 1);
                break;
              }
        },
      };
      t.default = n;
    },
    1243: function (e, t, o) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t = "miHoYodownloadIFrame",
            o = document.querySelector("" + t);
          (o || ((o = document.createElement("iframe")).setAttribute("id", t), document.body.appendChild(o)),
            o.setAttribute("src", e));
        }));
    },
    1244: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        r = o(1245),
        d = (n = r) && n.__esModule ? n : { default: n };
      var l = "error",
        c = "warning",
        f = "success",
        m = function (e, t) {
          var title = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          console.log(e, t, title);
        };
      t.default = {
        showLoading: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          d.default.show(e);
        },
        hideLoading: function () {
          d.default.hide();
        },
        showErrorMessage: function (e) {
          var title = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          m(l, e, title);
        },
        showWarnMessage: function (e) {
          var title = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          m(c, e, title);
        },
        showSuccMessage: function (e) {
          var title = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          m(f, e, title);
        },
        isSuccessResponse: function (e) {
          return e && 0 === e.retcode;
        },
        formatURL: function (e) {
          return e;
        },
        formatParams: function (e) {
          return e;
        },
        formatResult: function (e) {
          return e.data;
        },
        loadingDelay: 0,
      };
    },
    1245: function (e, t, o) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), o(1246));
      var n = o(1166),
        r = function (e) {
          return document.getElementById(e);
        };
      if (!n.isSSR && !r("miHoYoUserModelLoading")) {
        var d = document.createElement("div");
        ((d.innerHTML = o(1248)), document.body.appendChild(d));
      }
      t.default = {
        show: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "数据加载中";
          n.isSSR ||
            ((r("miHoYoUserModelLoadingText").innerText = e),
            (r("miHoYoUserModelLoading").style.display = "block"));
        },
        hide: function () {
          n.isSSR || (r("miHoYoUserModelLoading").style.display = "none");
        },
      };
    },
    1246: function (e, t, o) {
      var content = o(1247);
      (content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals));
      (0, o(55).default)("3255fd60", content, !0, { sourceMap: !1 });
    },
    1247: function (e, t, o) {
      var n = o(54)(!1);
      (n.push([
        e.i,
        ".user-model-loading{display:none;font-size:14px}.user-model-loading__bg{position:fixed;z-index:2147483646;top:0;right:0;left:0;bottom:0;background:rgba(17,17,17,.5)}.user-model-loading__toast{position:fixed;z-index:2147483647;width:7.6em;min-height:7.6em;top:50%;left:50%;margin-left:-3.8em;margin-top:-3.8em;text-align:center;border-radius:5px;color:#fff}.user-model-loading__icon{width:38px;height:38px;margin:30px 0 0;display:inline-block;vertical-align:middle;animation:user-model-loading 1s steps(12, end) infinite;background:rgba(0,0,0,0) url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}.user-model-loading__text{margin:0 0 15px;font-size:14px}@keyframes user-model-loading{0%{transform:rotate3d(0, 0, 1, 0deg)}100%{transform:rotate3d(0, 0, 1, 360deg)}}",
        "",
      ]),
        (e.exports = n));
    },
    1248: function (e, t) {
      e.exports =
        '<div id="miHoYoUserModelLoading" class="user-model-loading">\n  <div class="user-model-loading__bg"></div>\n  <div class="user-model-loading__toast">\n    <div class="user-model-loading__icon"></div>\n    <div id="miHoYoUserModelLoadingText" class="user-model-loading_text">数据加载中</div>\n  </div>\n</div>\n';
    },
  },
]);
