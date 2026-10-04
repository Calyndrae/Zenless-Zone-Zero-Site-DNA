// module 273 from 2e4935f.js
// deps: 66, 566, 272, 271, 268, 269
const module_273 = function(t,e,n){var r=n(66),o=n(566),c=n(272),f=n(271)("IE_PROTO"),l=function(){},d=function(){var t,iframe=n(268)("iframe"),i=c.length;for(iframe.style.display="none",n(269).appendChild(iframe),iframe.src="javascript:",(t=iframe.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),d=t.F;i--;)delete d.prototype[c[i]];return d()};t.exports=Object.create||function(t,e){var n;return null!==t?(l.prototype=r(t),n=new l,l.prototype=null,n[f]=t):n=d(),void 0===e?n:o(n,e)}};
