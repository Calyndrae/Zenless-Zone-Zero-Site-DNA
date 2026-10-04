// module 288 from 2e4935f.js
// deps: 126, 598, 282, 280, 283, 385
const module_288 = function(t,e,n){var r=n(126),o=n(598),c=n(282),f=n(280)("IE_PROTO"),l=function(){},d=function(){var t,iframe=n(283)("iframe"),i=c.length;for(iframe.style.display="none",n(385).appendChild(iframe),iframe.src="javascript:",(t=iframe.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),d=t.F;i--;)delete d.prototype[c[i]];return d()};t.exports=Object.create||function(t,e){var n;return null!==t?(l.prototype=r(t),n=new l,l.prototype=null,n[f]=t):n=d(),void 0===e?n:o(n,e)}};
