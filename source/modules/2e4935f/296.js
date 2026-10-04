// module 296 from 2e4935f.js
// deps: 222
const module_296 = function(t,e,n){"use strict";var r,o,c=n(222),f=RegExp.prototype.exec,l=String.prototype.replace,d=f,h=(r=/a/,o=/b*/g,f.call(r,"a"),f.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),v=void 0!==/()??/.exec("")[1];(h||v)&&(d=function(t){var e,n,r,i,o=this;return v&&(n=new RegExp("^"+o.source+"$(?!\\s)",c.call(o))),h&&(e=o.lastIndex),r=f.call(o,t),h&&r&&(o.lastIndex=o.global?r.index+r[0].length:e),v&&r&&r.length>1&&l.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=d};
