// module 471 from be1f69b.js
// deps: 29, 232, 91, 158
const module_471 = function(e,t,n){var r=n(29),o=n(232),c=n(91),l=n(158),f=r("".charAt),d=r("".charCodeAt),h=r("".slice),m=function(e){return function(t,n){var r,m,v=c(l(t)),y=o(n),w=v.length;return y<0||y>=w?e?"":void 0:(r=d(v,y))<55296||r>56319||y+1===w||(m=d(v,y+1))<56320||m>57343?e?f(v,y):r:e?h(v,y,y+2):m-56320+(r-55296<<10)+65536}};e.exports={codeAt:m(!1),charAt:m(!0)}};
