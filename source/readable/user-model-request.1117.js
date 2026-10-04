/**
 * user-model-request — readable reconstruction of webpack module 1117 (chunk fd57a96.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/fd57a96.js
 *
 * User-model HTTP request layer. It exports get/post/put/del, each calling a shared request(method, url, options, formatParams, formatResult) that normalises options (data, preParams, cache, loading, success, error, download, response), adds isPreview/prerelease/timestamp in the "prerelease" environment, forwards authkey query params, serves GET responses from the response cache (module 1240) or merges duplicate in-flight GETs (module 1241), and otherwise calls axios (module 114, or nuxtContext.$axios from module 500 when appBundle.axiosType is "nuxt") with baseURL appBundle.apiBase. It manages a global loading overlay via a memory Store counter (isRequestingCount / hideDefaultLoadingTimer, module 1176) and the defaults facade (module 1244), shows success/warn/error messages, treats retcode -100 (not logged in) and -403 (no permission) specially, and supports download via module 1243; it also exports identity defaultFormatParams/formatParams/formatResult/defaultFormatResult and requestIsSucc.
 *
 * Exports (minified key → meaning):
 *   default → { defaults } — the user-model request defaults/message facade (module 1244)
 *   get → get(url, options, formatParams, formatResult) -> Promise
 *   post → post(url, options, formatParams, formatResult) -> Promise
 *   put → put(url, options, formatParams, formatResult) -> Promise
 *   del → del(url, options, formatParams, formatResult) -> Promise (DELETE)
 *   requestIsSucc → isSuccessResponse check from the defaults facade
 *   defaultFormatParams → identity params formatter
 *   formatParams → identity params formatter
 *   formatResult → identity result formatter
 *   defaultFormatResult → identity result formatter
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1117 from fd57a96.js
// deps: 1239, 84, 136, 77, 137, 353, 138, 114, 28, 1176, 1240, 1241, 1243, 1166, 1244, 500
const module_1117 = function (webpackModule, webpackExports, webpackRequire) {
  "use strict";

  var babelTypeofHelper = webpackRequire(1239);
  (webpackRequire(84),
    webpackRequire(136),
    webpackRequire(77),
    webpackRequire(137),
    webpackRequire(353),
    webpackRequire(138),
    Object.defineProperty(webpackExports, "__esModule", {
      value: !0,
    }),
    (webpackExports.del =
      webpackExports.put =
      webpackExports.post =
      webpackExports.get =
      webpackExports.requestIsSucc =
      webpackExports.defaultFormatResult =
      webpackExports.formatParams =
      webpackExports.formatResult =
      webpackExports.defaultFormatParams =
        void 0));
  var typeOf =
      "function" == typeof Symbol && "symbol" === babelTypeofHelper(Symbol.iterator)
        ? function (symbolValue) {
            return babelTypeofHelper(symbolValue);
          }
        : function (typeofValue) {
            return typeofValue &&
              "function" == typeof Symbol &&
              typeofValue.constructor === Symbol &&
              typeofValue !== Symbol.prototype
              ? "symbol"
              : babelTypeofHelper(typeofValue);
          },
    axiosModule = interopRequireDefault(webpackRequire(114)),
    siteConfigConstants = webpackRequire(28),
    memoryStore = interopRequireDefault(webpackRequire(1176)),
    responseCache = interopRequireDefault(webpackRequire(1240)),
    requestMerge = interopRequireDefault(webpackRequire(1241)),
    downloadFile = interopRequireDefault(webpackRequire(1243)),
    userModelUtils = webpackRequire(1166),
    requestDefaults = interopRequireDefault(webpackRequire(1244));
  function interopRequireDefault(requiredModule) {
    return requiredModule && requiredModule.__esModule
      ? requiredModule
      : {
          default: requiredModule,
        };
  }
  var METHOD_GET = "GET",
    METHOD_POST = "POST",
    METHOD_DELETE = "DELETE",
    showLoading = function () {
      var loadingText = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        loadingDelay = arguments[1];
      userModelUtils.GLB.clearTimeout(memoryStore.default.get("hideDefaultLoadingTimer"));
      var requestingCount = memoryStore.default.get("isRequestingCount") || 0;
      (memoryStore.default.set("isRequestingCount", requestingCount + 1),
        (0, userModelUtils.log)("isRequestingCount+", requestingCount),
        0 === requestingCount &&
          (!1 === loadingDelay || (void 0 === loadingDelay && !requestDefaults.default.loadingDelay)
            ? requestDefaults.default.showLoading(loadingText)
            : setTimeout(function () {
                memoryStore.default.get("isRequestingCount") > 0 &&
                  requestDefaults.default.showLoading(loadingText);
              }, loadingDelay || requestDefaults.default.loadingDelay)));
    },
    hideLoading = function () {
      var remainingCount = memoryStore.default.get("isRequestingCount") || 0;
      (remainingCount > 0 && memoryStore.default.set("isRequestingCount", remainingCount - 1),
        (0, userModelUtils.log)("isRequestingCount-", remainingCount));
      var hideTimer = userModelUtils.GLB.setTimeout(function () {
        0 === memoryStore.default.get("isRequestingCount") &&
          ((0, userModelUtils.log)("isRequestingCount-", "hideLoading"),
          requestDefaults.default.hideLoading());
      }, 300);
      memoryStore.default.set("hideDefaultLoadingTimer", hideTimer);
    },
    toggleLoading = function () {
      var isShow = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
        loadingOption = arguments[1],
        loadingDelayOption = arguments[2];
      userModelUtils.isSSR ||
        (void 0 !== loadingOption &&
          !1 !== loadingOption &&
          ("function" == typeof loadingOption
            ? loadingOption(isShow)
            : isShow
              ? showLoading("string" == typeof loadingOption ? loadingOption : "", loadingDelayOption)
              : hideLoading()));
    },
    defaultFormatParams = (webpackExports.defaultFormatParams = function (rawParams) {
      return rawParams;
    }),
    defaultFormatResult =
      ((webpackExports.formatResult = function (data) {
        return data;
      }),
      (webpackExports.formatParams = function (paramsInput) {
        return paramsInput;
      }),
      (webpackExports.defaultFormatResult = function (data) {
        return data;
      })),
    mergeDebugCounter = ((webpackExports.requestIsSucc = requestDefaults.default.isSuccessResponse), 0),
    request = function (method, url, rawOptions, formatParamsFn, formatResultFn) {
      var requestArgs = {};
      (void 0 === rawOptions.data &&
      void 0 === rawOptions.preParams &&
      void 0 === rawOptions.cache &&
      void 0 === rawOptions.loading &&
      void 0 === rawOptions.success &&
      void 0 === rawOptions.error &&
      void 0 === rawOptions.download &&
      void 0 === rawOptions.response
        ? (requestArgs.data = rawOptions)
        : (requestArgs = rawOptions),
        (requestArgs.preParams = void 0 === requestArgs.preParams || requestArgs.preParams),
        userModelUtils.isSSR &&
          ((requestArgs.cache = !1), (requestArgs.loading = !1), (requestArgs.success = !1)));
      var requestParams = requestDefaults.default.formatParams(requestArgs.data) || {};
      if (
        (requestArgs.preParams &&
          "prerelease" === siteConfigConstants.environment &&
          ((requestParams.isPreview = 1),
          (requestParams.prerelease = 1),
          (requestParams.timestamp = Date.now())),
        (requestParams = formatParamsFn(requestParams)),
        requestArgs.download)
      )
        return (
          (0, downloadFile.default)(
            (0, userModelUtils.toUrlWithParams)(
              /^http/i.test(url)
                ? url
                : (requestArgs.baseURL ? requestArgs.baseURL : siteConfigConstants.apiBase) + url,
              requestParams,
            ),
          ),
          Promise.resolve({
            retcode: 0,
          })
        );
      (!userModelUtils.isSSR &&
        /authkey=/gi.test(window.location.search) &&
        (url += (url.indexOf("?") > -1 ? "&" : "?") + window.location.search.replace("?", "")),
        (url = requestDefaults.default.formatURL(url)));
      var cacheKey = (0, userModelUtils.encode)((0, userModelUtils.toUrlWithParams)(url, requestParams));
      if (
        ((0, userModelUtils.log)("request from cache args.cache", cacheKey, requestArgs.cache),
        method === METHOD_GET && requestArgs.cache)
      ) {
        var cachedPromise = responseCache.default.get(cacheKey);
        if (((0, userModelUtils.log)("request from cache ", cacheKey, cachedPromise), cachedPromise))
          return (
            (0, userModelUtils.log)("request from cache after"),
            cachedPromise.then(function (data) {
              return formatResultFn(requestArgs.response ? data : requestDefaults.default.formatResult(data));
            })
          );
      }
      if (method === METHOD_GET) {
        (0, userModelUtils.log)("request merge", cacheKey, (mergeDebugCounter += 1));
        var mergedPromise = requestMerge.default.merge(cacheKey);
        if (((0, userModelUtils.log)("request merge result ", cacheKey, mergedPromise), mergedPromise))
          return (
            (0, userModelUtils.log)("request merge return", cacheKey),
            mergedPromise.then(function (data) {
              return formatResultFn(requestArgs.response ? data : requestDefaults.default.formatResult(data));
            })
          );
      }
      return (
        (0, userModelUtils.log)("request merge return after xxx", cacheKey),
        toggleLoading(!0, requestArgs.loading, requestArgs.loadingDelay),
        (0, userModelUtils.log)("request merge x", cacheKey, mergeDebugCounter),
        new Promise(function (resolve, reject) {
          (0, userModelUtils.log)("request merge y", cacheKey, mergeDebugCounter);
          var argsRef = requestArgs,
            axiosOptions =
              (argsRef.params,
              argsRef.data,
              (function (sourceObject, excludedKeys) {
                var restObject = {};
                for (var propKey in sourceObject)
                  excludedKeys.indexOf(propKey) >= 0 ||
                    (Object.prototype.hasOwnProperty.call(sourceObject, propKey) &&
                      (restObject[propKey] = sourceObject[propKey]));
                return restObject;
              })(argsRef, ["params", "data"]));
          method === METHOD_GET ? (axiosOptions.params = requestParams) : (axiosOptions.data = requestParams);
          var httpClient = axiosModule.default;
          if ("nuxt" === siteConfigConstants.axiosType)
            try {
              httpClient = webpackRequire(500).memoryCache.get("nuxtContext").$axios;
            } catch (nuxtAxiosError) {}
          httpClient(
            Object.assign(
              {
                baseURL: siteConfigConstants.apiBase,
                url: url,
                method: method.toLowerCase(),
              },
              axiosOptions,
            ),
          )
            .then(function (response) {
              var errorOption,
                errorInfo,
                responseData = response.data;
              if (
                (toggleLoading(!1, requestArgs.loading),
                (0, userModelUtils.log)(url, "success", responseData),
                requestDefaults.default.isSuccessResponse(responseData))
              ) {
                !(function (successOption) {
                  var successData = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  void 0 !== successOption &&
                    !1 !== successOption &&
                    ("function" == typeof successOption
                      ? successOption(successData)
                      : "string" == typeof successOption
                        ? requestDefaults.default.showSuccMessage(successOption)
                        : "object" === (void 0 === successOption ? "undefined" : typeOf(successOption))
                          ? requestDefaults.default.showSuccMessage(
                              successOption.content ||
                                successData.msg ||
                                successData.message ||
                                "操作处理完成",
                              successOption.title || "",
                            )
                          : requestDefaults.default.showSuccMessage(
                              successData.msg || successData.message || "操作处理完成",
                            ));
                })(requestArgs.success, responseData);
                var clonedData = JSON.parse(JSON.stringify(responseData)),
                  formattedResult = formatResultFn(
                    requestArgs.response ? clonedData : requestDefaults.default.formatResult(clonedData),
                  );
                (method === METHOD_GET &&
                  (responseCache.default.set(cacheKey, responseData),
                  requestMerge.default.complete(cacheKey, !0, responseData)),
                  resolve(formattedResult));
              } else {
                if (responseData && responseData.retcode && -100 === responseData.retcode)
                  (0, userModelUtils.log)("未登录");
                else if (responseData && responseData.retcode && -403 === responseData.retcode)
                  ((0, userModelUtils.log)("无权限"),
                    requestMerge.default.complete(cacheKey, !0, responseData));
                else {
                  var errorMessage = responseData.msg || responseData.message || "接口数据格式错误";
                  ((errorOption = requestArgs.error),
                    (errorInfo = {
                      status: responseData && responseData.retcode ? responseData.retcode : 1,
                      statusText: errorMessage,
                    }),
                    !1 !== errorOption &&
                      ("function" == typeof errorOption
                        ? errorOption(errorInfo)
                        : "string" == typeof errorOption
                          ? requestDefaults.default.showWarnMessage(errorOption)
                          : "object" === (void 0 === errorOption ? "undefined" : typeOf(errorOption))
                            ? requestDefaults.default.showWarnMessage(
                                errorOption.content || errorInfo.statusText,
                                errorOption.title || "",
                              )
                            : requestDefaults.default.showWarnMessage(errorInfo.statusText)));
                }
                (method === METHOD_GET && requestMerge.default.remove(cacheKey), reject(response));
              }
            })
            .catch(function (requestError) {
              (requestMerge.default.remove(cacheKey), toggleLoading(!1, requestArgs.loading));
              var errorStatus = 0,
                errorStatusText = "";
              if (requestError.response) {
                var errorResponse = requestError.response;
                ((errorStatus = errorResponse.status), (errorStatusText = errorResponse.statusText));
              } else
                errorStatusText = requestError.request ? "no response was received" : requestError.message;
              (!(function (catchErrorOption, catchErrorInfo) {
                !1 !== catchErrorOption &&
                  ("function" == typeof catchErrorOption
                    ? catchErrorOption(catchErrorInfo)
                    : "string" == typeof catchErrorOption
                      ? requestDefaults.default.showErrorMessage(catchErrorOption)
                      : "object" === (void 0 === catchErrorOption ? "undefined" : typeOf(catchErrorOption))
                        ? requestDefaults.default.showErrorMessage(
                            catchErrorOption.content || catchErrorInfo.statusText,
                            catchErrorOption.title || "",
                          )
                        : requestDefaults.default.showErrorMessage(catchErrorInfo.statusText));
              })(requestArgs.error, {
                status: errorStatus,
                statusText: errorStatusText,
              }),
                (0, userModelUtils.log)(url, "error", requestError),
                reject(requestError));
            });
        })
      );
    };
  webpackExports.default = {
    defaults: requestDefaults.default,
  };
  ((webpackExports.get = function () {
    var getUrl = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      getOptions = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      getFormatParams = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : defaultFormatParams,
      getFormatResult = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : defaultFormatResult;
    return request(METHOD_GET, getUrl, getOptions, getFormatParams, getFormatResult);
  }),
    (webpackExports.post = function () {
      var postUrl = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        postOptions = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        postFormatParams =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : defaultFormatParams,
        postFormatResult =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : defaultFormatResult;
      return request(METHOD_POST, postUrl, postOptions, postFormatParams, postFormatResult);
    }),
    (webpackExports.put = function () {
      var putUrl = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        putOptions = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        putFormatParams =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : defaultFormatParams,
        putFormatResult =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : defaultFormatResult;
      return request("PUT", putUrl, putOptions, putFormatParams, putFormatResult);
    }),
    (webpackExports.del = function () {
      var delUrl = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        delOptions = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        delFormatParams =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : defaultFormatParams,
        delFormatResult =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : defaultFormatResult;
      return request(METHOD_DELETE, delUrl, delOptions, delFormatParams, delFormatResult);
    }));
};
