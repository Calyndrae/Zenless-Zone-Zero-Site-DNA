// module 167 from be1f69b.js
// deps: 471, 91, 130, 311
const module_167 = function(e,t,n){"use strict";var r=n(471).charAt,o=n(91),c=n(130),l=n(311),f="String Iterator",d=c.set,h=c.getterFor(f);l(String,"String",(function(e){d(this,{type:f,string:o(e),index:0})}),(function(){var e,t=h(this),n=t.string,o=t.index;return o>=n.length?{value:void 0,done:!0}:(e=r(n,o),t.index+=e.length,{value:e,done:!1})}))};
