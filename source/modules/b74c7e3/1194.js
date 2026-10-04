// module 1194 from b74c7e3.js
// deps: 1158, 1182
const module_1194 = function(e,t,n){var r=n(1158),o=n(1182);e.exports=function(e){var t=r(e),n=t.getFullYear(),c=new Date(0);c.setFullYear(n+1,0,4),c.setHours(0,0,0,0);var f=o(c),l=new Date(0);l.setFullYear(n,0,4),l.setHours(0,0,0,0);var d=o(l);return t.getTime()>=f.getTime()?n+1:t.getTime()>=d.getTime()?n:n-1}};
