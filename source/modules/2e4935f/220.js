// module 220 from 2e4935f.js
// deps: 214
const module_220 = function(t,e,n){"use strict";var r=n(214),o=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var c=n.call(t,e);if("object"!=typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}};
