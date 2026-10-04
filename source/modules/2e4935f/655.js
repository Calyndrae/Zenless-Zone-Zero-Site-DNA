// module 655 from 2e4935f.js
// deps: 175, 125
const module_655 = function(t,e,n){"use strict";var r=n(175),o=n(125);t.exports=function(t){var e=String(o(this)),n="",c=r(t);if(c<0||c==1/0)throw RangeError("Count can't be negative");for(;c>0;(c>>>=1)&&(e+=e))1&c&&(n+=e);return n}};
