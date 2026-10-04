// module 1380 from 8d80f48.js
// deps: 1381, 351, 1383
const module_1380 = function(e,t,n){var r=n(1381),o=n(351),c=n(1383),d=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,h=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(c(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||f.test(e)?h(e.slice(2),n?2:8):d.test(e)?NaN:+e}};
