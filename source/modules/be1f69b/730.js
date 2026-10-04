// module 730 from be1f69b.js
// deps: 51, 58, 229, 300, 731, 38
const module_730 = function(e,t,n){var r=n(51),o=n(58),c=n(229),l=n(300),f=n(731),d=n(38),h=TypeError,m=d("toPrimitive");e.exports=function(input,e){if(!o(input)||c(input))return input;var t,n=l(input,m);if(n){if(void 0===e&&(e="default"),t=r(n,input,e),!o(t)||c(t))return t;throw h("Can't convert object to primitive value")}return void 0===e&&(e="number"),f(input,e)}};
