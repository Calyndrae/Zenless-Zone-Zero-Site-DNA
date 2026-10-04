// module 1052 from be1f69b.js
// deps: 22, 29, 147, 449, 91, 486, 158, 487, 89
const module_1052 = function(e,t,n){"use strict";var r,o=n(22),c=n(29),l=n(147).f,f=n(449),d=n(91),h=n(486),m=n(158),v=n(487),y=n(89),w=c("".startsWith),_=c("".slice),k=Math.min,x=v("startsWith");o({target:"String",proto:!0,forced:!!(y||x||(r=l(String.prototype,"startsWith"),!r||r.writable))&&!x},{startsWith:function(e){var t=d(m(this));h(e);var n=f(k(arguments.length>1?arguments[1]:void 0,t.length)),r=d(e);return w?w(t,r,n):_(t,n,n+r.length)===r}})};
