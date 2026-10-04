// module 533 from be1f69b.js
// deps: 
const module_533 = function(e,t,n){"use strict";t.a=function(e){return{all:e=e||new Map,on:function(t,n){var i=e.get(t);i?i.push(n):e.set(t,[n])},off:function(t,n){var i=e.get(t);i&&(n?i.splice(i.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var i=e.get(t);i&&i.slice().map((function(e){e(n)})),(i=e.get("*"))&&i.slice().map((function(e){e(t,n)}))}}}};
