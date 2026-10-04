// module 469 from be1f69b.js
// deps: 22, 51, 88, 131, 165, 129
const module_469 = function(e,t,n){"use strict";var r=n(22),o=n(51),c=n(88),l=n(131),f=n(165),d=n(129);r({target:"Promise",stat:!0},{allSettled:function(e){var t=this,n=l.f(t),r=n.resolve,h=n.reject,m=f((function(){var n=c(t.resolve),l=[],f=0,h=1;d(e,(function(e){var c=f++,d=!1;h++,o(n,t,e).then((function(e){d||(d=!0,l[c]={status:"fulfilled",value:e},--h||r(l))}),(function(e){d||(d=!0,l[c]={status:"rejected",reason:e},--h||r(l))}))})),--h||r(l)}));return m.error&&h(m.value),n.promise}})};
