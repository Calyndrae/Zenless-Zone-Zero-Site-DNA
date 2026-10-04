// module 47 from 2e4935f.js
// deps: 57, 121, 122, 95, 140
const module_47 = function(t,e,n){var r=n(57),o=n(121),c=n(122),f=n(95),l=n(140),d=function(t,e,source){var n,h,v,m,y=t&d.F,_=t&d.G,w=t&d.S,x=t&d.P,O=t&d.B,S=_?r:w?r[e]||(r[e]={}):(r[e]||{}).prototype,E=_?o:o[e]||(o[e]={}),C=E.prototype||(E.prototype={});for(n in _&&(source=e),source)v=((h=!y&&S&&void 0!==S[n])?S:source)[n],m=O&&h?l(v,r):x&&"function"==typeof v?l(Function.call,v):v,S&&f(S,n,v,t&d.U),E[n]!=v&&c(E,n,m),x&&C[n]!=v&&(C[n]=v)};r.core=o,d.F=1,d.G=2,d.S=4,d.P=8,d.B=16,d.W=32,d.U=64,d.R=128,t.exports=d};
