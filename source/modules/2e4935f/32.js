// module 32 from 2e4935f.js
// deps: 
const module_32 = function(t,e,n){"use strict";function r(t,e,n,r,o,c,f){try{var l=t[c](f),d=l.value}catch(t){return void n(t)}l.done?e(d):Promise.resolve(d).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,c){var f=t.apply(e,n);function l(t){r(f,o,c,l,d,"next",t)}function d(t){r(f,o,c,l,d,"throw",t)}l(void 0)}))}}n.d(e,"a",(function(){return o}))};
