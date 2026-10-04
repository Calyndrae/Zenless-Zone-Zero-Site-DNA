// module 705 from 2e4935f.js
// deps: 73, 435, 706, 442, 298, 225, 719, 441, 443, 720, 721
const module_705 = function(t,e,n){"use strict";var r=n(73),o=n(435),c=n(706),f=n(442);var l=function t(e){var n=new c(e),l=o(c.prototype.request,n);return r.extend(l,c.prototype,n),r.extend(l,n),l.create=function(n){return t(f(e,n))},l}(n(298));l.Axios=c,l.Cancel=n(225),l.CancelToken=n(719),l.isCancel=n(441),l.VERSION=n(443).version,l.all=function(t){return Promise.all(t)},l.spread=n(720),l.isAxiosError=n(721),t.exports=l,t.exports.default=l};
