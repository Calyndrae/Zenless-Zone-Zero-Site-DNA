// module 224 from 2e4935f.js
// deps: 66, 99, 295, 220, 221
const module_224 = function(t,e,n){"use strict";var r=n(66),o=n(99),c=n(295),f=n(220);n(221)("match",1,(function(t,e,n,l){return[function(n){var r=t(this),o=null==n?void 0:n[e];return void 0!==o?o.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=l(n,t,this);if(e.done)return e.value;var d=r(t),h=String(this);if(!d.global)return f(d,h);var v=d.unicode;d.lastIndex=0;for(var m,y=[],_=0;null!==(m=f(d,h));){var w=String(m[0]);y[_]=w,""===w&&(d.lastIndex=c(h,o(d.lastIndex),v)),_++}return 0===_?null:y}]}))};
