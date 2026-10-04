// module 1064 from be1f69b.js
// deps: 514, 1068, 351, 1070
const module_1064 = function(e,t,n){var r=n(514),o=n(1068),c=n(351),l=n(1070),f=/^\[object .+?Constructor\]$/,d=Function.prototype,h=Object.prototype,m=d.toString,v=h.hasOwnProperty,y=RegExp("^"+m.call(v).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!c(e)||o(e))&&(r(e)?y:f).test(l(e))}};
