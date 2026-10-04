// module 581 from 2e4935f.js
// deps: 47, 121, 57, 274, 370
const module_581 = function(t,e,n){"use strict";var r=n(47),o=n(121),c=n(57),f=n(274),l=n(370);r(r.P+r.R,"Promise",{finally:function(t){var e=f(this,o.Promise||c.Promise),n="function"==typeof t;return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}})};
