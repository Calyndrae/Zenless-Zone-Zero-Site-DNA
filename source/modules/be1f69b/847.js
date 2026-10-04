// module 847 from be1f69b.js
// deps: 88, 90, 227, 100
const module_847 = function(e,t,n){var r=n(88),o=n(90),c=n(227),l=n(100),f=TypeError,d=function(e){return function(t,n,d,h){r(n);var m=o(t),v=c(m),y=l(m),w=e?y-1:0,i=e?-1:1;if(d<2)for(;;){if(w in v){h=v[w],w+=i;break}if(w+=i,e?w<0:y<=w)throw f("Reduce of empty array with no initial value")}for(;e?w>=0:y>w;w+=i)w in v&&(h=n(h,v[w],w,m));return h}};e.exports={left:d(!1),right:d(!0)}};
