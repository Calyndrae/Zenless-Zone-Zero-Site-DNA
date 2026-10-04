/**
 * HoYoverse-OSS-file-upload-SDK — readable reconstruction of webpack module 531 (chunk be1f69b.js)
 * Original: https://zenless.hoyoverse.com/_nuxt/be1f69b.js
 *
 * Bundled HoYoverse/miHoYo OSS file-upload SDK (a self-contained webpack bundle with its own module runtime, depending on a SparkMD5 module and a file-encryption module). `ossFileUpload(options)` validates `env`, computes the file MD5 by reading 2MB chunks with `FileReader` + `SparkMD5.ArrayBuffer`, requests upload parameters from one of many takumi / sg-public-op / sg-public-api endpoints (e.g. `/upload/op/getParamsByOp`, `/upload/outer/getParamsByAccount`, `/upload/outer/GetParamsByAuthKey`, `/mupload/minio/getToken`) selected by inland/overseas, inner/outer, AWS (`s3`), login type and environment, then uploads via XHR as an OSS POST form (OSSAccessKeyId/policy/signature), an S3/SGW `PUT` with signed headers, or a private MinIO form; it also supports fetching remote URLs (`/upload/op/fetch`), optional client-side encryption (`encryptFromFile`), progress callbacks, `x-rpc-language`/`X-Rpc-App_key` headers and an optional watermark call to `/upload/op/watermark`. `ossFileBatchUpload` uploads multiple files to inland, overseas (`os`) or `both` areas and reports success/error lists, and the default export also provides a Vue `install` adding `$OssFileUpload`/`$OssFileBatchUpload`.
 *
 * Exports (minified key → meaning):
 *   module.exports → the SDK default export { ossFileUpload, ossFileBatchUpload, install(Vue) }
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 531 from be1f69b.js
// deps: 944, 945, 2, 3, 0, 4
const module_531 = function (webpackModule, webpackExports, webpackRequire) {
  var sparkMd5Module, fileEncryptModule;
  ("undefined" != typeof self && self,
    (webpackModule.exports =
      ((sparkMd5Module = webpackRequire(944)),
      (fileEncryptModule = webpackRequire(945)),
      (function (modules) {
        var installedModules = {};
        function innerRequire(moduleId) {
          if (installedModules[moduleId]) return installedModules[moduleId].exports;
          var installedModule = (installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {},
          });
          return (
            modules[moduleId].call(
              installedModule.exports,
              installedModule,
              installedModule.exports,
              innerRequire,
            ),
            (installedModule.l = !0),
            installedModule.exports
          );
        }
        return (
          (innerRequire.m = modules),
          (innerRequire.c = installedModules),
          (innerRequire.d = function (exportsObj, propName, getter) {
            innerRequire.o(exportsObj, propName) ||
              Object.defineProperty(exportsObj, propName, {
                enumerable: !0,
                get: getter,
              });
          }),
          (innerRequire.r = function (esModuleTarget) {
            ("undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(esModuleTarget, Symbol.toStringTag, {
                value: "Module",
              }),
              Object.defineProperty(esModuleTarget, "__esModule", {
                value: !0,
              }));
          }),
          (innerRequire.t = function (nsValue, nsMode) {
            if ((1 & nsMode && (nsValue = innerRequire(nsValue)), 8 & nsMode)) return nsValue;
            if (4 & nsMode && "object" == typeof nsValue && nsValue && nsValue.__esModule) return nsValue;
            var namespace = Object.create(null);
            if (
              (innerRequire.r(namespace),
              Object.defineProperty(namespace, "default", {
                enumerable: !0,
                value: nsValue,
              }),
              2 & nsMode && "string" != typeof nsValue)
            )
              for (var nsKey in nsValue)
                innerRequire.d(
                  namespace,
                  nsKey,
                  function (boundKey) {
                    return nsValue[boundKey];
                  }.bind(null, nsKey),
                );
            return namespace;
          }),
          (innerRequire.n = function (mod) {
            var getDefault =
              mod && mod.__esModule
                ? function () {
                    return mod.default;
                  }
                : function () {
                    return mod;
                  };
            return (innerRequire.d(getDefault, "a", getDefault), getDefault);
          }),
          (innerRequire.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          }),
          (innerRequire.p = ""),
          innerRequire((innerRequire.s = 1))
        );
      })([
        function (uploadModule, uploadExports, uploadRequire) {
          "use strict";

          Object.defineProperty(uploadExports, "__esModule", {
            value: !0,
          });
          var assign =
              Object.assign ||
              function (assignTarget) {
                for (var assignArgIndex = 1; assignArgIndex < arguments.length; assignArgIndex++) {
                  var assignSource = arguments[assignArgIndex];
                  for (var assignKey in assignSource)
                    Object.prototype.hasOwnProperty.call(assignSource, assignKey) &&
                      (assignTarget[assignKey] = assignSource[assignKey]);
                }
                return assignTarget;
              },
            slicedToArray = function (arrOrIterable, sliceLength) {
              if (Array.isArray(arrOrIterable)) return arrOrIterable;
              if (Symbol.iterator in Object(arrOrIterable))
                return (function (iterable, maxLength) {
                  var items = [],
                    iteratorNormalCompletion = !0,
                    didIteratorError = !1,
                    iteratorError = void 0;
                  try {
                    for (
                      var step, iterator = iterable[Symbol.iterator]();
                      !(iteratorNormalCompletion = (step = iterator.next()).done) &&
                      (items.push(step.value), !maxLength || items.length !== maxLength);
                      iteratorNormalCompletion = !0
                    );
                  } catch (iterationError) {
                    ((didIteratorError = !0), (iteratorError = iterationError));
                  } finally {
                    try {
                      !iteratorNormalCompletion && iterator.return && iterator.return();
                    } finally {
                      if (didIteratorError) throw iteratorError;
                    }
                  }
                  return items;
                })(arrOrIterable, sliceLength);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          uploadExports.default = function (uploadOptions) {
            var needEncrypt = uploadOptions.needEncrypt,
              outerFileUrl = uploadOptions.outerFileUrl,
              onError = uploadOptions.onError,
              biz = uploadOptions.biz,
              asyncOption = uploadOptions.async,
              isAsync = void 0 === asyncOption || asyncOption,
              onSuccess = uploadOptions.onSuccess,
              fileNameOption = uploadOptions.file_name,
              fileName = void 0 === fileNameOption ? "" : fileNameOption,
              inner = uploadOptions.inner,
              onProgress = uploadOptions.onProgress,
              checkLogin = uploadOptions.checkLogin,
              env = uploadOptions.env,
              directoryOption = uploadOptions.directory,
              directory = void 0 === directoryOption ? "" : directoryOption,
              watermarkText = uploadOptions.watermarkText,
              watermarkTextSize = uploadOptions.watermarkTextSize,
              watermarkTextScale = uploadOptions.watermarkTextScale,
              watermarkRequireOption = uploadOptions.watermarkRequire,
              watermarkRequire = void 0 === watermarkRequireOption || watermarkRequireOption,
              instance = uploadOptions.instance,
              overseasOption = uploadOptions.overseas,
              overseas = void 0 !== overseasOption && overseasOption,
              lang = uploadOptions.lang,
              fileWithCredentialsOption = uploadOptions.fileWithCredentials,
              fileWithCredentials = void 0 !== fileWithCredentialsOption && fileWithCredentialsOption,
              controlFileNameOption = uploadOptions.controlFileName,
              controlFileName = void 0 === controlFileNameOption || controlFileNameOption;
            if (!supportedEnvs.includes(env)) throw Error("env: " + env + " not exist!");
            var envDir = envDirMap[env] || "prod",
              xhr = new XMLHttpRequest(),
              uploadHandle = {
                abort: xhr.abort.bind(xhr),
              };
            if ("private" !== inner && directory) {
              var directoryWarning = "自定义目录参数 directory 只支持 inner 为 private";
              return (console.warn(directoryWarning), onError(directoryWarning), uploadHandle);
            }
            if ("private" === inner) {
              if (!uploadOptions.rowFile)
                return (
                  console.warn("文件上传缺少rowFile参数，请先传入"),
                  onError("文件上传缺少rowFile参数，请先传入"),
                  uploadHandle
                );
              var startPrivateUpload = function () {
                var privateReader = readFileChunks(
                  uploadOptions,
                  function (privateMd5) {
                    var privateExtParts = uploadOptions.rowFile.name.split(".").slice(-1),
                      privateExt = slicedToArray(privateExtParts, 1)[0],
                      objectName = fileName
                        ? "" + fileName
                        : envDir + "/" + directory + privateMd5 + "_" + Date.now() + "." + privateExt,
                      uploadToMinio = function (tokenResponse) {
                        var tokenData = tokenResponse.data,
                          minioUrl = tokenData.url,
                          minioFormData = tokenData.form_data,
                          previewUrl = tokenData.preview_url,
                          minioForm = new FormData();
                        (Object.keys(minioFormData).forEach(function (minioFormKey) {
                          minioForm.append(minioFormKey, minioFormData[minioFormKey]);
                        }),
                          minioForm.append("file", uploadOptions.rowFile),
                          (xhr.withCredentials = fileWithCredentials),
                          xhr.open("POST", minioUrl, !0),
                          lang && xhr.setRequestHeader("x-rpc-language", lang),
                          xhr.upload &&
                            (xhr.upload.onprogress = function (minioProgressEvent) {
                              minioProgressEvent.lengthComputable &&
                                onProgress &&
                                onProgress(minioProgressEvent);
                            }),
                          (xhr.onreadystatechange = function () {
                            4 === xhr.readyState &&
                              (200 === xhr.status || 204 === xhr.status
                                ? onSuccess({
                                    retcode: 0,
                                    message: "success",
                                    data: {
                                      url: "" + minioUrl + objectName,
                                      preview_url: previewUrl,
                                    },
                                  })
                                : onError && onError());
                          }),
                          xhr.send(minioForm));
                      },
                      privateByActOption = uploadOptions.byAct,
                      privateByAct = void 0 === privateByActOption || privateByActOption,
                      privateLoginTypeSuffix = {
                        authKey: "Byatk",
                        iam: "Byiam",
                        iamMihoyo: "ByiamMihoyo",
                      },
                      privateSignUrl = "",
                      fallbackSignUrl = "",
                      isPrivateProd = ["production", "release", "beta"].includes(env),
                      isPrivatePre = ["pre", "prerelease"].includes(env),
                      isPrivateUat = ["uat"].includes(env);
                    (void 0 !== uploadOptions.checkLogin && (privateByAct = uploadOptions.checkLogin),
                      (privateSignUrl = uploadOptions.signUrl
                        ? uploadOptions.signUrl
                        : signUrlMap[
                            (overseas ? "overseas" : "inland") +
                              (inner ? "Inner" : "Outer") +
                              ("s3" === overseas ? "Aws" : "") +
                              (privateLoginTypeSuffix[privateByAct]
                                ? privateLoginTypeSuffix[privateByAct]
                                : privateByAct
                                  ? "Byact"
                                  : "Noact") +
                              (isPrivateProd ? "Prod" : isPrivatePre ? "Pre" : isPrivateUat ? "Uat" : "Dev") +
                              "Minio"
                          ]),
                      (fallbackSignUrl = uploadOptions.signUrl
                        ? uploadOptions.signUrl
                        : signUrlMap[
                            "inlandInnerByact" +
                              (isPrivateProd ? "Prod" : isPrivatePre ? "Pre" : isPrivateUat ? "Uat" : "Dev") +
                              "Minio"
                          ]));
                    var tokenXhr = new XMLHttpRequest();
                    (uploadOptions.signUrl
                      ? tokenXhr.open("post", privateSignUrl, isAsync)
                      : tokenXhr.open(
                          "post",
                          privateByAct
                            ? "string" == typeof checkLogin && checkLogin.includes("iam")
                              ? privateSignUrl
                              : fallbackSignUrl
                            : "https://op-takumi.mihoyo.com/mupload/minio/getTokenByAnonymous",
                          isAsync,
                        ),
                      tokenXhr.setRequestHeader("Content-Type", "application/json"),
                      lang && xhr.setRequestHeader("x-rpc-language", lang),
                      uploadOptions.app_key &&
                        tokenXhr.setRequestHeader("X-Rpc-App_key", uploadOptions.app_key),
                      (tokenXhr.withCredentials = !0),
                      (tokenXhr.onreadystatechange = function () {
                        if (4 === tokenXhr.readyState)
                          if (200 === tokenXhr.status && uploadToMinio) {
                            var tokenResult = JSON.parse(tokenXhr.responseText);
                            0 === tokenResult.retcode ? uploadToMinio(tokenResult) : onError(tokenResult);
                          } else onError && onError();
                      }),
                      tokenXhr.send(
                        JSON.stringify({
                          bucket: biz,
                          object: objectName,
                          instance: instance,
                        }),
                      ));
                  },
                  function (privateReadError) {
                    onError(privateReadError);
                  },
                );
                uploadHandle.cancelFileReader = privateReader.cancelFileReader.bind(privateReader);
              };
              needEncrypt
                ? (0, queryStringUtilities.encryptFromFile)(uploadOptions.rowFile, {
                    needCache: !1,
                  })
                    .then(function (encryptedData) {
                      var encryptedFile = void 0;
                      (window.navigator.userAgent.indexOf("Edge") > -1
                        ? ((encryptedFile = new Blob([encryptedData], {
                            type: "image/png",
                          })).name = uploadOptions.rowFile.name)
                        : (encryptedFile = new File([encryptedData], uploadOptions.rowFile.name)),
                        (uploadOptions.rowFile = encryptedFile),
                        startPrivateUpload());
                    })
                    .catch(function (encryptError) {
                      onError(encryptError);
                    })
                : startPrivateUpload();
            } else if (outerFileUrl) {
              var fetchByActOption = uploadOptions.byAct,
                fetchByAct = void 0 === fetchByActOption || fetchByActOption;
              void 0 !== uploadOptions.checkLogin && (fetchByAct = uploadOptions.checkLogin);
              var fetchUrl = "https://devapi-takumi.mihoyo.com/upload/fetch",
                isFetchProd = ["production", "release", "beta"].includes(env),
                isFetchPre = ["pre", "prerelease"].includes(env),
                isFetchUat = ["uat"].includes(env),
                fetchLoginTypeSuffix = {
                  authKey: "Byatk",
                  iam: "Byiam",
                  iamMihoyo: "ByiamMihoyo",
                };
              (inner &&
                (fetchUrl =
                  fetchUrlMap[
                    (overseas ? "overseas" : "inland") +
                      (inner ? "Inner" : "Outer") +
                      ("s3" === overseas ? "Aws" : "") +
                      (fetchLoginTypeSuffix[fetchByAct]
                        ? fetchLoginTypeSuffix[fetchByAct]
                        : fetchByAct
                          ? "Byact"
                          : "Noact") +
                      (isFetchProd ? "Prod" : isFetchPre ? "Pre" : isFetchUat ? "Uat" : "Dev") +
                      "Fetch"
                  ]),
                xhr.open("post", fetchUrl, isAsync),
                xhr.setRequestHeader("Content-Type", "application/json"),
                lang && xhr.setRequestHeader("x-rpc-language", lang),
                uploadOptions.app_key && xhr.setRequestHeader("X-Rpc-App_key", uploadOptions.app_key),
                (xhr.withCredentials = !0),
                (xhr.onreadystatechange = function () {
                  if (4 === xhr.readyState)
                    if (200 === xhr.status && onSuccess) {
                      var fetchResult = JSON.parse(xhr.responseText);
                      0 === fetchResult.retcode ? onSuccess(fetchResult) : onError(fetchResult);
                    } else onError && onError();
                }),
                xhr.send(
                  JSON.stringify({
                    biz: biz,
                    url: outerFileUrl,
                  }),
                ));
            } else {
              var betaPrefix = "beta" === env ? "/beta/" : "",
                fileExt = null;
              if (fileName && !inner && controlFileName) onError("file_name字段仅支持对内网关");
              else if (uploadOptions.rowFile) {
                var fileExtParts = uploadOptions.rowFile.name.split(".").slice(-1),
                  fileExtTuple = slicedToArray(fileExtParts, 1);
                fileExt = fileExtTuple[0];
                var md5Reader = readFileChunks(uploadOptions, function (md5) {
                  var rowFile = uploadOptions.rowFile;
                  !(function (signOptions, onSignSuccess, signExt) {
                    var signByActOption = signOptions.byAct,
                      signByAct = void 0 === signByActOption || signByActOption,
                      signAsyncOption = signOptions.async,
                      signAsync = void 0 === signAsyncOption || signAsyncOption,
                      onSignError = signOptions.onError,
                      signMd5 = signOptions.md5,
                      signBiz = signOptions.biz,
                      customSignUrl = signOptions.signUrl,
                      signOverseasOption = signOptions.overseas,
                      signOverseas = void 0 !== signOverseasOption && signOverseasOption,
                      signInnerOption = signOptions.inner,
                      signInner = void 0 === signInnerOption || signInnerOption,
                      signEnv = signOptions.env,
                      signFileName = signOptions.file_name,
                      signFilePath = signOptions.file_path,
                      acl = signOptions.acl,
                      signRowFile = signOptions.rowFile,
                      host = signOptions.host,
                      enableSgw = signOptions.enable_sgw,
                      extra = signOptions.extra,
                      signLang = signOptions.lang,
                      signLoginTypeSuffix = {
                        authKey: "Byatk",
                        iam: "Byiam",
                        iamMihoyo: "ByiamMihoyo",
                      },
                      signUrl = "",
                      isSignProd = ["production", "release", "beta"].includes(signEnv),
                      isSignPre = ["pre", "prerelease"].includes(signEnv),
                      isSignUat = ["uat"].includes(signEnv);
                    (customSignUrl
                      ? (signUrl = customSignUrl)
                      : (void 0 !== signOptions.checkLogin && (signByAct = signOptions.checkLogin),
                        (signUrl =
                          signUrlMap[
                            (signOverseas ? "overseas" : "inland") +
                              (signInner ? "Inner" : "Outer") +
                              ("s3" === signOverseas ? "Aws" : "") +
                              (signLoginTypeSuffix[signByAct]
                                ? signLoginTypeSuffix[signByAct]
                                : signByAct
                                  ? "Byact"
                                  : "Noact") +
                              (isSignProd ? "Prod" : isSignPre ? "Pre" : isSignUat ? "Uat" : "Dev")
                          ]),
                        signOptions.checkEventLogin &&
                          (signUrl =
                            signUrlMap[
                              (signOverseas ? "overseas" : "inland") +
                                "Outer" +
                                ("s3" === signOverseas ? "Aws" : "") +
                                "ByEvent" +
                                (isSignProd ? "Prod" : isSignPre ? "Pre" : isSignUat ? "Uat" : "Dev")
                            ] +
                            "?game=" +
                            signOptions.game),
                        signOptions.checkThirdpartyLogin &&
                          (signUrl =
                            signUrlMap[
                              (signOverseas ? "overseas" : "inland") +
                                "Outer" +
                                ("s3" === signOverseas ? "Aws" : "") +
                                "ByThirdparty" +
                                (isSignProd ? "Prod" : isSignPre ? "Pre" : isSignUat ? "Uat" : "Dev")
                            ] +
                            "?game=" +
                            signOptions.game +
                            "&app_id=" +
                            signOptions.app_id)),
                      host && (signUrl = signUrl.replace(/mihayo.com|mihoyo.com|hoyoverse.com/, host)));
                    var signXhr = new XMLHttpRequest();
                    (signXhr.open("post", "" + signUrl, signAsync),
                      signXhr.setRequestHeader("Content-Type", "application/json"),
                      signLang && signXhr.setRequestHeader("x-rpc-language", signLang),
                      signOptions.app_key && signXhr.setRequestHeader("X-Rpc-App_key", signOptions.app_key),
                      (signXhr.withCredentials = !0),
                      (signXhr.onreadystatechange = function () {
                        if (4 === signXhr.readyState)
                          if (200 === signXhr.status && onSignSuccess) {
                            var signResult = JSON.parse(signXhr.responseText);
                            0 === signResult.retcode ? onSignSuccess(signResult) : onSignError(signResult);
                          } else onSignError && onSignError();
                      }));
                    var signPayload = {
                      md5: signMd5,
                      ext: signExt,
                      biz: signBiz,
                      file_name: signFileName,
                      support_content_type: !0,
                      support_extra_form_data: !0,
                    };
                    (extra && (signPayload.extra = extra),
                      signFilePath && (signPayload.file_path = signFilePath),
                      "private" === acl && (signPayload.acl = acl),
                      "s3" === signOverseas && (signPayload.file_size = signRowFile.size),
                      enableSgw && (signPayload.file_size = signRowFile.size),
                      signXhr.send(JSON.stringify(signPayload)));
                  })(
                    assign({}, uploadOptions, {
                      md5: md5,
                    }),
                    function (signResponse) {
                      var retcode = signResponse.retcode,
                        signData = signResponse.data,
                        signMessage = signResponse.message;
                      if (0 === retcode) {
                        var ossFormData = (function (ossFile, ossParams) {
                          var ossForm = new FormData(),
                            ossName = ossParams.name,
                            ossDir = ossParams.dir,
                            ossCallback = ossParams.callback,
                            ossCallbackVar = ossParams.callback_var,
                            ossAccessId = ossParams.accessid,
                            ossPolicy = ossParams.policy,
                            ossSignature = ossParams.signature,
                            ossContentType = ossParams.x_oss_content_type,
                            ossObjectAcl = ossParams.object_acl,
                            contentDisposition = ossParams.content_disposition,
                            extraFormData = ossParams.extra_form_data;
                          return (
                            ossForm.append("name", ossName),
                            ossForm.append("key", ossDir + ossName),
                            ossForm.append("callback", ossCallback),
                            ossForm.append("success_action_status", "200"),
                            ossCallbackVar &&
                              Object.keys(ossCallbackVar).forEach(function (callbackVarKey) {
                                ossForm.append(callbackVarKey, ossCallbackVar[callbackVarKey]);
                              }),
                            ossContentType && ossForm.append("x-oss-content-type", ossContentType),
                            extraFormData &&
                              extraFormData.forEach(function (extraField) {
                                ossForm.append(extraField.key, extraField.value);
                              }),
                            ossForm.append("OSSAccessKeyId", ossAccessId),
                            ossForm.append("policy", ossPolicy),
                            ossForm.append("signature", ossSignature),
                            ossObjectAcl && ossForm.append("x-oss-object-acl", ossObjectAcl),
                            contentDisposition && ossForm.append("Content-Disposition", contentDisposition),
                            ossForm.append("file", ossFile),
                            ossForm
                          );
                        })(
                          rowFile,
                          assign(
                            {
                              name: "" + betaPrefix + md5 + "_" + Date.now() + "." + fileExt,
                            },
                            signData[signData.type],
                          ),
                        );
                        if (
                          (xhr.upload &&
                            (xhr.upload.onprogress = function (uploadProgressEvent) {
                              uploadProgressEvent.lengthComputable &&
                                onProgress &&
                                onProgress(uploadProgressEvent);
                            }),
                          "s3" === signData.type &&
                            signData[signData.type] &&
                            signData[signData.type].headers)
                        ) {
                          xhr.open("put", signData[signData.type].upload_url, isAsync);
                          var s3Headers = signData[signData.type].headers;
                          Object.keys(s3Headers).forEach(function (s3HeaderKey) {
                            xhr.setRequestHeader(s3HeaderKey, s3Headers[s3HeaderKey]);
                          });
                        } else if (
                          "sgw" === signData.type &&
                          signData[signData.type] &&
                          signData[signData.type].headers
                        ) {
                          xhr.open("put", signData[signData.type].upload_url, isAsync);
                          var sgwHeaders = signData[signData.type].headers;
                          Object.keys(sgwHeaders).forEach(function (sgwHeaderKey) {
                            xhr.setRequestHeader(sgwHeaderKey, sgwHeaders[sgwHeaderKey]);
                          });
                        } else xhr.open("post", signData[signData.type].host, isAsync);
                        (lang && xhr.setRequestHeader("x-rpc-language", lang),
                          (xhr.onerror = function (uploadError) {
                            onError(uploadError);
                          }),
                          (xhr.onreadystatechange = function () {
                            if (4 === xhr.readyState)
                              if (200 === xhr.status && onSuccess) {
                                var uploadResult = void 0;
                                0 ===
                                (uploadResult =
                                  ("s3" !== signData.type && "sgw" !== signData.type) ||
                                  !signData[signData.type]
                                    ? JSON.parse(xhr.responseText)
                                    : {
                                        retcode: 0,
                                        msg: "success",
                                        data: assign({}, signData[signData.type]),
                                      }).retcode
                                  ? ((uploadResult.data.ext = {
                                      size: rowFile.size,
                                      md5: md5,
                                      name: fileName,
                                    }),
                                    watermarkText
                                      ? new Promise(function (resolveTextSize) {
                                          if (watermarkTextSize) resolveTextSize(watermarkTextSize);
                                          else {
                                            var textScale = watermarkTextScale || 0.03,
                                              image = new Image();
                                            ((image.src = URL.createObjectURL(rowFile)),
                                              (image.onload = function () {
                                                "function" == typeof watermarkTextScale &&
                                                  (textScale = watermarkTextScale(image.width, image.height));
                                                var minSide = Math.min(image.width, image.height);
                                                (resolveTextSize(minSide * textScale), (image = null));
                                              }));
                                          }
                                        }).then(function (textSize) {
                                          !(function (
                                            watermarkOptions,
                                            watermarkPayload,
                                            onWatermarkDone,
                                            isWatermarkRequired,
                                          ) {
                                            var watermarkEnv = watermarkOptions.env,
                                              onWatermarkError = watermarkOptions.onError,
                                              isWatermarkProd = ["production", "release", "beta"].includes(
                                                watermarkEnv,
                                              ),
                                              isWatermarkPre = ["pre", "prerelease"].includes(watermarkEnv),
                                              watermarkBase = watermarkDevBase;
                                            isWatermarkPre
                                              ? (watermarkBase = watermarkPreBase)
                                              : isWatermarkProd && (watermarkBase = watermarkProdBase);
                                            var watermarkXhr = new XMLHttpRequest();
                                            ((watermarkXhr.withCredentials = !0),
                                              watermarkXhr.open(
                                                "POST",
                                                watermarkBase + "/upload/op/watermark",
                                                !0,
                                              ),
                                              (watermarkXhr.onreadystatechange = function () {
                                                if (4 === watermarkXhr.readyState)
                                                  if (200 === watermarkXhr.status) {
                                                    var watermarkResult = JSON.parse(
                                                      watermarkXhr.responseText,
                                                    );
                                                    0 !== watermarkResult.retcode && isWatermarkRequired
                                                      ? onWatermarkError && onWatermarkError(watermarkResult)
                                                      : onWatermarkDone();
                                                  } else
                                                    onWatermarkError &&
                                                      (isWatermarkRequired
                                                        ? onWatermarkError()
                                                        : onWatermarkDone());
                                              }),
                                              watermarkXhr.send(JSON.stringify(watermarkPayload)));
                                          })(
                                            uploadOptions,
                                            {
                                              biz: biz,
                                              params: [
                                                {
                                                  object: uploadResult.data.object,
                                                  text: watermarkText,
                                                  size: parseInt(textSize, 10),
                                                },
                                              ],
                                            },
                                            function () {
                                              onSuccess(uploadResult);
                                            },
                                            watermarkRequire,
                                          );
                                        })
                                      : onSuccess(uploadResult))
                                  : onError(uploadResult);
                              } else onError && onError();
                          }),
                          ("s3" === signData.type || "sgw" === signData.type) &&
                          signData[signData.type] &&
                          signData[signData.type].headers
                            ? xhr.send(rowFile)
                            : xhr.send(ossFormData));
                      } else
                        onError &&
                          onError({
                            retcode: retcode,
                            data: signData,
                            message: signMessage,
                          });
                    },
                    fileExt,
                  );
                });
                uploadHandle.cancelFileReader = md5Reader.cancelFileReader.bind(md5Reader);
              } else onError && onError("未传入file文件");
            }
            return uploadHandle;
          };
          var sparkMd5Raw,
            SparkMD5 =
              (sparkMd5Raw = uploadRequire(2)) && sparkMd5Raw.__esModule
                ? sparkMd5Raw
                : {
                    default: sparkMd5Raw,
                  },
            queryStringUtilities = uploadRequire(3),
            appendAuthKeyQuery = function (baseUrl) {
              var urlWithAuthKey = baseUrl;
              return (
                /authkey=/gi.test(window.location.search) &&
                  (urlWithAuthKey +=
                    (baseUrl.indexOf("?") > -1 ? "&" : "?") + window.location.search.replace("?", "")),
                urlWithAuthKey
              );
            },
            supportedEnvs = [
              "development",
              "test",
              "uat",
              "pre",
              "prerelease",
              "beta",
              "release",
              "production",
            ],
            envDirMap = {
              development: "dev",
              test: "dev",
              pre: "pre",
              prerelease: "pre",
              beta: "beta",
              release: "prod",
              production: "prod",
              uat: "uat",
            },
            mihoyoDomain = window.location.host.includes(".mihayo.com") ? ".mihayo.com" : ".mihoyo.com",
            inlandInnerByactDevUrl = "https://devapi-takumi" + mihoyoDomain + "/upload/op/getParamsByOp",
            inlandInnerByactPreUrl = "https://preop-takumi" + mihoyoDomain + "/upload/op/getParamsByOp",
            inlandInnerByactProdUrl = "https://op-takumi" + mihoyoDomain + "/upload/op/getParamsByOp",
            inlandInnerByiamDevUrl =
              "https://devop-takumi.office" + mihoyoDomain + "/upload/iam_op/getParamsByOp",
            inlandInnerByiamUatUrl =
              "https://devop-test-api.office" + mihoyoDomain + "/upload/iam_op/getParamsByOp",
            inlandInnerByiamPreUrl =
              "https://preop-takumi.office" + mihoyoDomain + "/upload/iam_op/getParamsByOp",
            inlandInnerByiamProdUrl =
              "https://op-takumi.office" + mihoyoDomain + "/upload/iam_op/getParamsByOp",
            inlandInnerByiamDevMinioUrl =
              "https://devop-takumi.office" + mihoyoDomain + "/mupload/iam_op/minio/getToken",
            inlandInnerByiamUatMinioUrl =
              "https://devop-test-api.office" + mihoyoDomain + "/mupload/iam_op/minio/getToken",
            inlandInnerByiamPreMinioUrl =
              "https://preop-takumi.office" + mihoyoDomain + "/mupload/iam_op/minio/getToken",
            inlandInnerByiamProdMinioUrl =
              "https://op-takumi.office" + mihoyoDomain + "/mupload/iam_op/minio/getToken",
            inlandInnerByiamMihoyoDevUrl =
              "https://devop-takumi.office" + mihoyoDomain + "/upload/iam_op/getParamsByOp",
            inlandInnerByiamMihoyoUatUrl =
              "https://devop-test-api.office" + mihoyoDomain + "/upload/iam_op/getParamsByOp",
            inlandInnerByiamMihoyoPreUrl =
              "https://preop-takumi.office" + mihoyoDomain + "/upload/iam_op/getParamsByOp",
            inlandInnerByiamMihoyoProdUrl =
              "https://op-takumi.office" + mihoyoDomain + "/upload/iam_op/getParamsByOp",
            inlandInnerNoactDevUrl = "https://devapi-takumi" + mihoyoDomain + "/upload/op/getParams",
            inlandInnerNoactPreUrl = "https://preop-takumi" + mihoyoDomain + "/upload/op/getParams",
            inlandInnerNoactProdUrl = "https://op-takumi" + mihoyoDomain + "/upload/op/getParams",
            inlandOuterByactDevUrl =
              "https://devapi-takumi" + mihoyoDomain + "/upload/outer/getParamsByAccount",
            inlandOuterByactPreUrl =
              "https://preapi-takumi" + mihoyoDomain + "/upload/outer/getParamsByAccount",
            inlandOuterByactProdUrl =
              "https://api-takumi" + mihoyoDomain + "/upload/outer/getParamsByAccount",
            inlandOuterByEventDevUrl =
              "https://devapi-takumi" + mihoyoDomain + "/upload/outer/GetParamsByEventToken",
            inlandOuterByEventPreUrl =
              "https://preapi-takumi" + mihoyoDomain + "/upload/outer/GetParamsByEventToken",
            inlandOuterByEventProdUrl =
              "https://api-takumi" + mihoyoDomain + "/upload/outer/GetParamsByEventToken",
            inlandOuterByiamUatUrl =
              "https://dev-opdev-api" + mihoyoDomain + "/upload/iam_op_outer/getParamsByOp",
            inlandOuterByiamProdUrl =
              "https://public-operation-common" + mihoyoDomain + "/upload/iam_op_outer/getParamsByOp",
            inlandOuterByiamUatMinioUrl =
              "https://dev-opdev-api" + mihoyoDomain + "/mupload/iam_op_outer/minio/getToken",
            inlandOuterByiamProdMinioUrl =
              "https://public-operation-common" + mihoyoDomain + "/mupload/iam_op_outer/minio/getToken",
            inlandOuterByThirdpartyDevUrl =
              "https://devapi-takumi" + mihoyoDomain + "/upload/outer/GetParamsByCookie",
            inlandOuterByThirdpartyPreUrl =
              "https://preapi-takumi" + mihoyoDomain + "/upload/outer/GetParamsByCookie",
            inlandOuterByThirdpartyProdUrl =
              "https://api-takumi" + mihoyoDomain + "/upload/outer/GetParamsByCookie",
            inlandOuterByatkDevUrl = appendAuthKeyQuery(
              "https://devapi-takumi" + mihoyoDomain + "/upload/outer/GetParamsByAuthKey",
            ),
            inlandOuterByatkPreUrl = appendAuthKeyQuery(
              "https://preapi-takumi" + mihoyoDomain + "/upload/outer/GetParamsByAuthKey",
            ),
            inlandOuterByatkProdUrl = appendAuthKeyQuery(
              "https://api-takumi" + mihoyoDomain + "/upload/outer/GetParamsByAuthKey",
            ),
            inlandOuterNoactDevUrl = "https://devapi-takumi" + mihoyoDomain + "/upload/outer/getParams",
            inlandOuterNoactPreUrl = "https://preapi-takumi" + mihoyoDomain + "/upload/outer/getParams",
            inlandOuterNoactProdUrl = "https://api-takumi" + mihoyoDomain + "/upload/outer/getParams",
            overseasInnerByactDevUrl = "https://devapi-os-takumi" + mihoyoDomain + "/upload/op/getParamsByOp",
            overseasInnerByactPreUrl = "https://preop-os-takumi" + mihoyoDomain + "/upload/op/getParamsByOp",
            overseasInnerByactProdUrl = "https://op-os-takumi" + mihoyoDomain + "/upload/op/getParamsByOp",
            overseasInnerByiamDevUrl =
              "https://devop-os-takumi.office" + mihoyoDomain + "/upload/iam_op/getParamsByOp",
            overseasInnerByiamPreUrl =
              "https://preop-os-takumi.office" + mihoyoDomain + "/upload/iam_op/getParamsByOp",
            overseasInnerByiamProdUrl =
              "https://op-os-takumi.office" + mihoyoDomain + "/upload/iam_op/getParamsByOp",
            overseasInnerByiamDevMinioUrl =
              "https://devop-os-takumi.office" + mihoyoDomain + "/mupload/iam_op/minio/getToken",
            overseasInnerByiamUatMinioUrl =
              "https://devop-test-api.office" + mihoyoDomain + "/mupload/iam_op/minio/getToken",
            overseasInnerByiamPreMinioUrl =
              "https://preop-os-takumi.office" + mihoyoDomain + "/mupload/iam_op/minio/getToken",
            overseasInnerByiamProdMinioUrl =
              "https://op-os-takumi.office" + mihoyoDomain + "/mupload/iam_op/minio/getToken",
            overseasInnerAwsByactDevUrl =
              "https://testing-sg-public-op" + mihoyoDomain + "/upload/op/getParamsByOp",
            overseasInnerAwsByactPreUrl =
              "https://pre-sg-public-op" + mihoyoDomain + "/upload/op/getParamsByOp",
            overseasInnerAwsByactProdUrl = "https://sg-public-op" + mihoyoDomain + "/upload/op/getParamsByOp",
            overseasInnerAwsByiamMihoyoDevUrl =
              "https://testing-sg-public-op" + mihoyoDomain + "/upload/iam_op/getParamsByOp",
            overseasInnerAwsByiamMihoyoPreUrl =
              "https://pre-sg-public-op" + mihoyoDomain + "/upload/iam_op/getParamsByOp",
            overseasInnerAwsByiamMihoyoProdUrl =
              "https://sg-public-op" + mihoyoDomain + "/upload/iam_op/getParamsByOp",
            overseasInnerNoactDevUrl = "https://devapi-os-takumi" + mihoyoDomain + "/upload/op/getParams",
            overseasInnerNoactPreUrl = "https://preop-os-takumi" + mihoyoDomain + "/upload/op/getParams",
            overseasInnerNoactProdUrl = "https://op-os-takumi" + mihoyoDomain + "/upload/op/getParams",
            overseasInnerAwsNoactDevUrl =
              "https://testing-sg-public-op" + mihoyoDomain + "/upload/op/getParams",
            overseasInnerAwsNoactPreUrl = "https://pre-sg-public-op" + mihoyoDomain + "/upload/op/getParams",
            overseasInnerAwsNoactProdUrl = "https://sg-public-op" + mihoyoDomain + "/upload/op/getParams",
            overseasOuterByatkDevUrl = appendAuthKeyQuery(
              "https://devapi-os-takumi.hoyoverse.com/upload/outer/GetParamsByAuthKey",
            ),
            overseasOuterByatkPreUrl = appendAuthKeyQuery(
              "https://preapi-os-takumi.hoyoverse.com/upload/outer/GetParamsByAuthKey",
            ),
            overseasOuterByatkProdUrl = appendAuthKeyQuery(
              "https://api-os-takumi.hoyoverse.com/upload/outer/GetParamsByAuthKey",
            ),
            overseasOuterAwsByatkDevUrl = appendAuthKeyQuery(
              "https://testing-sg-public-api.hoyoverse.com/upload/outer/GetParamsByAuthKey",
            ),
            overseasOuterAwsByatkPreUrl = appendAuthKeyQuery(
              "https://pre-sg-public-api.hoyoverse.com/upload/outer/GetParamsByAuthKey",
            ),
            overseasOuterAwsByatkProdUrl = appendAuthKeyQuery(
              "https://sg-public-api.hoyoverse.com/upload/outer/GetParamsByAuthKey",
            ),
            watermarkDevBase = "https://devapi-takumi" + mihoyoDomain,
            watermarkPreBase = "https://preop-takumi" + mihoyoDomain,
            watermarkProdBase = "https://op-takumi" + mihoyoDomain,
            signUrlMap = {
              inlandInnerByactDev: inlandInnerByactDevUrl,
              inlandInnerByactPre: inlandInnerByactPreUrl,
              inlandInnerByactProd: inlandInnerByactProdUrl,
              inlandInnerNoactDev: inlandInnerNoactDevUrl,
              inlandInnerNoactPre: inlandInnerNoactPreUrl,
              inlandInnerNoactProd: inlandInnerNoactProdUrl,
              inlandOuterByactDev: inlandOuterByactDevUrl,
              inlandOuterByactPre: inlandOuterByactPreUrl,
              inlandOuterByactProd: inlandOuterByactProdUrl,
              inlandOuterByEventDev: inlandOuterByEventDevUrl,
              inlandOuterByEventPre: inlandOuterByEventPreUrl,
              inlandOuterByEventProd: inlandOuterByEventProdUrl,
              inlandOuterByThirdpartyDev: inlandOuterByThirdpartyDevUrl,
              inlandOuterByThirdpartyPre: inlandOuterByThirdpartyPreUrl,
              inlandOuterByThirdpartyProd: inlandOuterByThirdpartyProdUrl,
              inlandOuterByatkDev: inlandOuterByatkDevUrl,
              inlandOuterByatkPre: inlandOuterByatkPreUrl,
              inlandOuterByatkProd: inlandOuterByatkProdUrl,
              inlandOuterNoactDev: inlandOuterNoactDevUrl,
              inlandOuterNoactPre: inlandOuterNoactPreUrl,
              inlandOuterNoactProd: inlandOuterNoactProdUrl,
              overseasInnerByactDev: overseasInnerByactDevUrl,
              overseasInnerByactPre: overseasInnerByactPreUrl,
              overseasInnerByactProd: overseasInnerByactProdUrl,
              overseasOuterByatkPre: overseasOuterByatkPreUrl,
              overseasOuterByatkDev: overseasOuterByatkDevUrl,
              overseasOuterByatkProd: overseasOuterByatkProdUrl,
              overseasInnerNoactDev: overseasInnerNoactDevUrl,
              overseasInnerNoactPre: overseasInnerNoactPreUrl,
              overseasInnerNoactProd: overseasInnerNoactProdUrl,
              overseasOuterByactDev: "https://devapi-os-takumi.hoyoverse.com/upload/outer/getParamsByAccount",
              overseasOuterByactPre: "https://preapi-os-takumi.hoyoverse.com/upload/outer/getParamsByAccount",
              overseasOuterByactProd: "https://api-os-takumi.hoyoverse.com/upload/outer/getParamsByAccount",
              overseasOuterByEventDev:
                "https://devapi-os-takumi.hoyoverse.com/upload/outer/GetParamsByEventToken",
              overseasOuterByEventPre:
                "https://preapi-os-takumi.hoyoverse.com/upload/outer/GetParamsByEventToken",
              overseasOuterByEventProd:
                "https://api-os-takumi.hoyoverse.com/upload/outer/GetParamsByEventToken",
              overseasOuterByThirdpartyDev:
                "https://devapi-os-takumi.hoyoverse.com/upload/outer/GetParamsByCookie",
              overseasOuterByThirdpartyPre:
                "https://preapi-os-takumi.hoyoverse.com/upload/outer/GetParamsByCookie",
              overseasOuterByThirdpartyProd:
                "https://api-os-takumi.hoyoverse.com/upload/outer/GetParamsByCookie",
              overseasOuterNoactDev: "https://devapi-os-takumi.hoyoverse.com/upload/outer/getParams",
              overseasOuterNoactPre: "https://preapi-os-takumi.hoyoverse.com/upload/outer/getParams",
              overseasOuterNoactProd: "https://api-os-takumi.hoyoverse.com/upload/outer/getParams",
              overseasOuterAwsByactDev:
                "https://testing-sg-public-api.hoyoverse.com/upload/outer/getParamsByAccount",
              overseasOuterAwsByactPre:
                "https://pre-sg-public-api.hoyoverse.com/upload/outer/getParamsByAccount",
              overseasOuterAwsByactProd:
                "https://sg-public-api.hoyoverse.com/upload/outer/getParamsByAccount",
              overseasOuterAwsByEventDev:
                "https://testing-sg-public-api.hoyoverse.com/upload/outer/GetParamsByEventToken",
              overseasOuterAwsByEventPre:
                "https://pre-sg-public-api.hoyoverse.com/upload/outer/GetParamsByEventToken",
              overseasOuterAwsByEventProd:
                "https://sg-public-api.hoyoverse.com/upload/outer/GetParamsByEventToken",
              overseasOuterAwsByThirdpartyDev:
                "https://testing-sg-public-api.hoyoverse.com/upload/outer/GetParamsByCookie",
              overseasOuterAwsByThirdpartyPre:
                "https://pre-sg-public-api.hoyoverse.com/upload/outer/GetParamsByCookie",
              overseasOuterAwsByThirdpartyProd:
                "https://sg-public-api.hoyoverse.com/upload/outer/GetParamsByCookie",
              overseasOuterAwsByatkDev: overseasOuterAwsByatkDevUrl,
              overseasOuterAwsByatkPre: overseasOuterAwsByatkPreUrl,
              overseasOuterAwsByatkProd: overseasOuterAwsByatkProdUrl,
              overseasOuterAwsNoactDev: "https://testing-sg-public-api.hoyoverse.com/upload/outer/getParams",
              overseasOuterAwsNoactPre: "https://pre-sg-public-api.hoyoverse.com/upload/outer/getParams",
              overseasOuterAwsNoactProd: "https://sg-public-api.hoyoverse.com/upload/outer/getParams",
              overseasInnerAwsByactDev: overseasInnerAwsByactDevUrl,
              overseasInnerAwsByactPre: overseasInnerAwsByactPreUrl,
              overseasInnerAwsByactProd: overseasInnerAwsByactProdUrl,
              overseasInnerAwsNoactDev: overseasInnerAwsNoactDevUrl,
              overseasInnerAwsNoactPre: overseasInnerAwsNoactPreUrl,
              overseasInnerAwsNoactProd: overseasInnerAwsNoactProdUrl,
              inlandInnerByiamDev: inlandInnerByiamDevUrl,
              inlandInnerByiamPre: inlandInnerByiamPreUrl,
              inlandInnerByiamProd: inlandInnerByiamProdUrl,
              overseasInnerByiamDev: overseasInnerByiamDevUrl,
              overseasInnerByiamPre: overseasInnerByiamPreUrl,
              overseasInnerByiamProd: overseasInnerByiamProdUrl,
              overseasInnerAwsByiamDev:
                "https://devop-takumi.office.hoyoverse.com/upload/iam_op/getParamsByOp",
              overseasInnerAwsByiamPre:
                "https://preop-takumi.office.hoyoverse.com/upload/iam_op/getParamsByOp",
              overseasInnerAwsByiamProd: "https://op-takumi.office.hoyoverse.com/upload/iam_op/getParamsByOp",
              inlandInnerByiamDevMinio: inlandInnerByiamDevMinioUrl,
              inlandInnerByiamPreMinio: inlandInnerByiamPreMinioUrl,
              inlandInnerByiamProdMinio: inlandInnerByiamProdMinioUrl,
              overseasInnerByiamDevMinio: overseasInnerByiamDevMinioUrl,
              overseasInnerByiamPreMinio: overseasInnerByiamPreMinioUrl,
              overseasInnerByiamProdMinio: overseasInnerByiamProdMinioUrl,
              overseasInnerAwsByiamDevMinio:
                "https://testing-sg-public-op.office.hoyoverse.com/mupload/iam_op/minio/getToken",
              overseasInnerAwsByiamPreMinio:
                "https://pre-sg-public-op.office.hoyoverse.com/mupload/iam_op/minio/getToken",
              overseasInnerAwsByiamProdMinio:
                "https://sg-public-op.office.hoyoverse.com/mupload/iam_op/minio/getToken",
              inlandInnerByactDevMinio: "https://devapi-takumi" + mihoyoDomain + "/mupload/minio/getToken",
              inlandInnerByactPreMinio: "https://preop-takumi" + mihoyoDomain + "/mupload/minio/getToken",
              inlandInnerByactProdMinio: "https://op-takumi" + mihoyoDomain + "/mupload/minio/getToken",
              inlandInnerByiamUat: inlandInnerByiamUatUrl,
              overseasInnerAwsByiamUat:
                "https://devop-test-api.office.hoyoverse.com/upload/iam_op/getParamsByOp",
              inlandInnerByiamUatMinio: inlandInnerByiamUatMinioUrl,
              overseasInnerByiamUatMinio: overseasInnerByiamUatMinioUrl,
              overseasInnerAwsByiamUatMinio:
                "https://devop-test-api.office.hoyoverse.com/mupload/iam_op/minio/getToken",
              inlandOuterByiamUat: inlandOuterByiamUatUrl,
              inlandOuterByiamProd: inlandOuterByiamProdUrl,
              inlandOuterByiamUatMinio: inlandOuterByiamUatMinioUrl,
              inlandOuterByiamProdMinio: inlandOuterByiamProdMinioUrl,
              overseasInnerAwsByiamMihoyoDev: overseasInnerAwsByiamMihoyoDevUrl,
              overseasInnerAwsByiamMihoyoPre: overseasInnerAwsByiamMihoyoPreUrl,
              overseasInnerAwsByiamMihoyoProd: overseasInnerAwsByiamMihoyoProdUrl,
              inlandInnerByiamMihoyoDev: inlandInnerByiamMihoyoDevUrl,
              inlandInnerByiamMihoyoUat: inlandInnerByiamMihoyoUatUrl,
              inlandInnerByiamMihoyoPre: inlandInnerByiamMihoyoPreUrl,
              inlandInnerByiamMihoyoProd: inlandInnerByiamMihoyoProdUrl,
            },
            fetchUrlMap = {
              inlandInnerByactDevFetch: "https://devapi-takumi" + mihoyoDomain + "/upload/op/fetch",
              inlandInnerByactPreFetch: "https://preop-takumi" + mihoyoDomain + "/upload/op/fetch",
              inlandInnerByactProdFetch: "https://op-takumi" + mihoyoDomain + "/upload/op/fetch",
              inlandInnerByiamDevFetch: "https://devop-takumi.office" + mihoyoDomain + "/upload/iam_op/fetch",
              inlandInnerByiamPreFetch: "https://preop-takumi.office" + mihoyoDomain + "/upload/iam_op/fetch",
              inlandInnerByiamProdFetch: "https://op-takumi.office" + mihoyoDomain + "/upload/iam_op/fetch",
              inlandInnerNoactDevFetch: "https://devapi-takumi" + mihoyoDomain + "/upload/op/fetch",
              inlandInnerNoactPreFetch: "https://preop-takumi" + mihoyoDomain + "/upload/op/fetch",
              inlandInnerNoactProdFetch: "https://op-takumi" + mihoyoDomain + "/upload/op/fetch",
              overseasInnerByactDevFetch: "https://devapi-os-takumi" + mihoyoDomain + "/upload/op/fetch",
              overseasInnerByactPreFetch: "https://preop-os-takumi" + mihoyoDomain + "/upload/op/fetch",
              overseasInnerByactProdFetch: "https://op-os-takumi" + mihoyoDomain + "/upload/op/fetch",
              overseasInnerByiamDevFetch:
                "https://devop-os-takumi.office" + mihoyoDomain + "/upload/iam_op/fetch",
              overseasInnerByiamPreFetch:
                "https://preop-os-takumi.office" + mihoyoDomain + "/upload/iam_op/fetch",
              overseasInnerByiamProdFetch:
                "https://op-os-takumi.office" + mihoyoDomain + "/upload/iam_op/fetch",
              overseasInnerAwsByactDevFetch:
                "https://testing-sg-public-op" + mihoyoDomain + "/upload/op/fetch",
              overseasInnerAwsByactPreFetch: "https://pre-sg-public-op" + mihoyoDomain + "/upload/op/fetch",
              overseasInnerAwsByactProdFetch: "https://sg-public-op" + mihoyoDomain + "/upload/op/fetch",
              overseasInnerAwsByiamDevFetch: "https://devop-takumi.office.hoyoverse.com/upload/iam_op/fetch",
              overseasInnerAwsByiamPreFetch: "https://preop-takumi.office.hoyoverse.com/upload/iam_op/fetch",
              overseasInnerAwsByiamProdFetch: "https://op-takumi.office.hoyoverse.com/upload/iam_op/fetch",
              overseasInnerNoactDevFetch: "https://devapi-os-takumi" + mihoyoDomain + "/upload/op/fetch",
              overseasInnerNoactPreFetch: "https://preop-os-takumi" + mihoyoDomain + "/upload/op/fetch",
              overseasInnerNoactProdFetch: "https://op-os-takumi" + mihoyoDomain + "/upload/op/fetch",
              overseasInnerAwsNoactDevFetch:
                "https://testing-sg-public-op" + mihoyoDomain + "/upload/op/fetch",
              overseasInnerAwsNoactPreFetch: "https://pre-sg-public-op" + mihoyoDomain + "/upload/op/fetch",
              overseasInnerAwsNoactProdFetch: "https://sg-public-op" + mihoyoDomain + "/upload/op/fetch",
              inlandInnerByiamUatFetch:
                "https://devop-test-api.office" + mihoyoDomain + "/upload/iam_op/fetch",
              overseasInnerAwsByiamUatFetch:
                "https://devop-test-api.office.hoyoverse.com/upload/iam_op/fetch",
              inlandOuterByiamUatFetch: "https://dev-opdev-api" + mihoyoDomain + "/upload/iam_op_outer/fetch",
              inlandOuterByiamProdFetch:
                "https://public-operation-common" + mihoyoDomain + "/upload/iam_op_outer/fetch",
              overseasInnerAwsByiamMihoyoDevFetch:
                "https://testing-sg-public-op" + mihoyoDomain + "/upload/iam_op/fetch",
              overseasInnerAwsByiamMihoyoPreFetch:
                "https://pre-sg-public-op" + mihoyoDomain + "/upload/iam_op/fetch",
              overseasInnerAwsByiamMihoyoProdFetch:
                "https://sg-public-op" + mihoyoDomain + "/upload/iam_op/fetch",
              inlandInnerByiamMihoyoDevFetch:
                "https://devop-takumi.office" + mihoyoDomain + "/upload/iam_op/fetch",
              inlandInnerByiamMihoyoUatFetch:
                "https://devop-test-api.office" + mihoyoDomain + "/upload/iam_op/fetch",
              inlandInnerByiamMihoyoPreFetch:
                "https://preop-takumi.office" + mihoyoDomain + "/upload/iam_op/fetch",
              inlandInnerByiamMihoyoProdFetch:
                "https://op-takumi.office" + mihoyoDomain + "/upload/iam_op/fetch",
            };
          function readFileChunks(readOptions, onReadComplete, onReadError) {
            var file = readOptions.rowFile,
              chunkSizeOption = readOptions.chunkSize,
              chunkSize = void 0 === chunkSizeOption ? 2097152 : chunkSizeOption,
              blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
              chunkCount = Math.ceil(file.size / chunkSize),
              currentChunk = 0,
              spark = new SparkMD5.default.ArrayBuffer(),
              fileReader = new FileReader();
            function loadNextChunk() {
              var chunkStart = currentChunk * chunkSize,
                chunkEnd = chunkStart + chunkSize >= file.size ? file.size : chunkStart + chunkSize;
              fileReader.readAsArrayBuffer(blobSlice.call(file, chunkStart, chunkEnd));
            }
            return (
              (fileReader.onload = function (loadEvent) {
                (console.log("read chunk nr", currentChunk + 1, "of", chunkCount),
                  spark.append(loadEvent.target.result),
                  (currentChunk += 1) < chunkCount
                    ? loadNextChunk()
                    : onReadComplete && onReadComplete(spark.end()));
              }),
              (fileReader.onabort = function () {
                console.log("File reading operation has been aborted");
              }),
              (fileReader.onerror = function () {
                (console.warn("oops, something went wrong."),
                  onReadError(new Error("oops, something went wrong.")));
              }),
              loadNextChunk(),
              {
                cancelFileReader: function () {
                  fileReader.abort();
                },
              }
            );
          }
        },
        function (indexModule, indexExports, indexRequire) {
          "use strict";

          (Object.defineProperty(indexExports, "__esModule", {
            value: !0,
          }),
            (indexExports.ossFileBatchUpload = indexExports.ossFileUpload = void 0));
          var ossFileUploadModule = interopRequireDefault(indexRequire(0)),
            ossFileBatchUploadModule = interopRequireDefault(indexRequire(4));
          function interopRequireDefault(requiredModule) {
            return requiredModule && requiredModule.__esModule
              ? requiredModule
              : {
                  default: requiredModule,
                };
          }
          ((indexExports.ossFileUpload = ossFileUploadModule.default),
            (indexExports.ossFileBatchUpload = ossFileBatchUploadModule.default),
            (indexExports.default = {
              ossFileUpload: ossFileUploadModule.default,
              ossFileBatchUpload: ossFileBatchUploadModule.default,
              install: function (Vue) {
                ((Vue.prototype.$OssFileUpload = function () {
                  return ossFileUploadModule.default.apply(void 0, arguments);
                }),
                  (Vue.prototype.$OssFileBatchUpload = function () {
                    return ossFileBatchUploadModule.default.apply(void 0, arguments);
                  }));
              },
            }));
        },
        function (sparkMd5Wrapper, sparkMd5WrapperExports) {
          sparkMd5Wrapper.exports = sparkMd5Module;
        },
        function (encryptWrapper, encryptWrapperExports) {
          encryptWrapper.exports = fileEncryptModule;
        },
        function (batchModule, batchExports, batchRequire) {
          "use strict";

          Object.defineProperty(batchExports, "__esModule", {
            value: !0,
          });
          var batchAssign =
            Object.assign ||
            function (batchAssignTarget) {
              for (var batchAssignIndex = 1; batchAssignIndex < arguments.length; batchAssignIndex++) {
                var batchAssignSource = arguments[batchAssignIndex];
                for (var batchAssignKey in batchAssignSource)
                  Object.prototype.hasOwnProperty.call(batchAssignSource, batchAssignKey) &&
                    (batchAssignTarget[batchAssignKey] = batchAssignSource[batchAssignKey]);
              }
              return batchAssignTarget;
            };
          batchExports.default = function (batchOptions) {
            var area = batchOptions.area,
              filesOption = batchOptions.files,
              files = void 0 === filesOption ? [] : filesOption,
              onUpload = batchOptions.onUpload,
              restOptions =
                (batchOptions.file_name,
                objectWithoutProperties(batchOptions, ["area", "files", "onUpload", "file_name"])),
              uploadPromises = Array.from(files).map(function (batchFile) {
                return "both" === area
                  ? new Promise(function (resolveBoth) {
                      uploadSingleFile(
                        batchFile,
                        batchAssign({}, restOptions, {
                          overseas: !1,
                        }),
                      ).then(function (inlandResult) {
                        inlandResult.status === STATUS_SUCCESS
                          ? uploadSingleFile(
                              batchFile,
                              batchAssign({}, restOptions, {
                                overseas: "s3" !== restOptions.overseas || "s3",
                                file_name: restOptions.inner ? inlandResult.url.split("/").pop() : void 0,
                              }),
                            ).then(function (overseasResult) {
                              resolveBoth(
                                batchAssign({}, inlandResult, {
                                  url_os: overseasResult.url,
                                  ext_os: overseasResult.ext,
                                  status:
                                    overseasResult.status === STATUS_SUCCESS ? STATUS_SUCCESS : STATUS_ERROR,
                                }),
                              );
                            })
                          : resolveBoth(
                              batchAssign({}, inlandResult, {
                                url_os: inlandResult.url,
                              }),
                            );
                      });
                    })
                  : uploadSingleFile(
                      batchFile,
                      batchAssign(
                        {},
                        restOptions,
                        "os" === area
                          ? {
                              overseas: "s3" !== restOptions.overseas || "s3",
                            }
                          : {
                              overseas: !1,
                            },
                      ),
                    );
              });
            Promise.all(uploadPromises).then(function (results) {
              var failedResults = results.filter(function (result) {
                return "error" === result.status;
              });
              onUpload(results, failedResults);
            });
          };
          var uploadModuleRaw,
            ossFileUploadDefault =
              (uploadModuleRaw = batchRequire(0)) && uploadModuleRaw.__esModule
                ? uploadModuleRaw
                : {
                    default: uploadModuleRaw,
                  };
          function objectWithoutProperties(source, excludedKeys) {
            var picked = {};
            for (var pickKey in source)
              excludedKeys.indexOf(pickKey) >= 0 ||
                (Object.prototype.hasOwnProperty.call(source, pickKey) &&
                  (picked[pickKey] = source[pickKey]));
            return picked;
          }
          var STATUS_SUCCESS = "success",
            STATUS_ERROR = "error";
          function uploadSingleFile(singleFile, singleOptions) {
            var onFileProgress = singleOptions.onProgress,
              singleRestOptions = objectWithoutProperties(singleOptions, ["onProgress"]);
            return new Promise(function (resolveSingle) {
              var singleUploadOptions = batchAssign({}, singleRestOptions, {
                rowFile: singleFile,
                onSuccess: function (singleResponse) {
                  0 === singleResponse.retcode
                    ? resolveSingle({
                        name: singleFile.name,
                        status: STATUS_SUCCESS,
                        url: singleResponse.data.url,
                        ext: singleResponse.data.ext,
                      })
                    : resolveSingle({
                        name: singleFile.name,
                        status: STATUS_ERROR,
                        url: URL.createObjectURL(singleFile),
                      });
                },
                onProgress: function (progressEvent) {
                  onFileProgress && onFileProgress(progressEvent, singleFile);
                },
                onError: function () {
                  resolveSingle({
                    name: singleFile.name,
                    status: STATUS_ERROR,
                    url: URL.createObjectURL(singleFile),
                  });
                },
              });
              (0, ossFileUploadDefault.default)(singleUploadOptions);
            });
          }
        },
      ]).default)));
};
