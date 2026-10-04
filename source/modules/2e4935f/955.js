// module 955 from 2e4935f.js
// deps: 69, 956, 509
const module_955 = function(t,e,n){var r=n(69).parseInt,o=n(956).trim,c=n(509),f=/^[-+]?0[xX]/;t.exports=8!==r(c+"08")||22!==r(c+"0x16")?function(t,e){var n=o(String(t),3);return r(n,e>>>0||(f.test(n)?16:10))}:r};
