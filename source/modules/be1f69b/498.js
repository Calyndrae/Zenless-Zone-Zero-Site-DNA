// module 498 from be1f69b.js
// deps: 312
const module_498 = function(e,t,n){var r=n(312),o=Math.floor,c=function(e,t){var n=e.length,d=o(n/2);return n<8?l(e,t):f(e,c(r(e,0,d),t),c(r(e,d),t),t)},l=function(e,t){for(var element,n,r=e.length,i=1;i<r;){for(n=i,element=e[i];n&&t(e[n-1],element)>0;)e[n]=e[--n];n!==i++&&(e[n]=element)}return e},f=function(e,t,n,r){for(var o=t.length,c=n.length,l=0,f=0;l<o||f<c;)e[l+f]=l<o&&f<c?r(t[l],n[f])<=0?t[l++]:n[f++]:l<o?t[l++]:n[f++];return e};e.exports=c};
