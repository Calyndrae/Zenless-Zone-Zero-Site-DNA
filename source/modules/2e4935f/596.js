// module 596 from 2e4935f.js
// deps: 279, 215
const module_596 = function(t,e,n){var r=n(279),o=n(215);t.exports=function(t){return function(e,n){var a,b,s=String(o(e)),i=r(n),c=s.length;return i<0||i>=c?t?"":void 0:(a=s.charCodeAt(i))<55296||a>56319||i+1===c||(b=s.charCodeAt(i+1))<56320||b>57343?t?s.charAt(i):a:t?s.slice(i,i+2):b-56320+(a-55296<<10)+65536}}};
