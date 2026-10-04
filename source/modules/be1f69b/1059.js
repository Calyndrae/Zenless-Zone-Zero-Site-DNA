// module 1059 from be1f69b.js
// deps: 513, 515, 516, 319, 517, 518
const module_1059 = function(e,t,n){var r=n(513),o=n(515),c=n(516),l=n(319),f=n(517),d=n(518);e.exports=function(e,t,n,h){var m=-1,v=o,y=!0,w=e.length,_=[],k=t.length;if(!w)return _;n&&(t=l(t,f(n))),h?(v=c,y=!1):t.length>=200&&(v=d,y=!1,t=new r(t));e:for(;++m<w;){var x=e[m],S=null==n?x:n(x);if(x=h||0!==x?x:0,y&&S==S){for(var A=k;A--;)if(t[A]===S)continue e;_.push(x)}else v(t,S,h)||_.push(x)}return _}};
