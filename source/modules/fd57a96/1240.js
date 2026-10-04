// module 1240 from fd57a96.js
// deps: 77, 1166, 1176
const module_1240 = function(e,t,o){"use strict";o(77),Object.defineProperty(t,"__esModule",{value:!0});var n=o(1166),r=new(o(1176).Store)("responseData");t.default={get:function(e){var t=r.get(e);return(0,n.log)("response cache get",e,t),t?Promise.resolve(JSON.parse(t)):null},set:function(e,data){return(0,n.log)("response cache set",e,data),r.set(e,JSON.stringify(data)),!0}}};
