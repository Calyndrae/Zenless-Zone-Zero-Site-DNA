// module 470 from be1f69b.js
// deps: 22, 51, 88, 74, 131, 165, 129
const module_470 = function(e,t,n){"use strict";var r=n(22),o=n(51),c=n(88),l=n(74),f=n(131),d=n(165),h=n(129),m="No one promise resolved";r({target:"Promise",stat:!0},{any:function(e){var t=this,n=l("AggregateError"),r=f.f(t),v=r.resolve,y=r.reject,w=d((function(){var r=c(t.resolve),l=[],f=0,d=1,w=!1;h(e,(function(e){var c=f++,h=!1;d++,o(r,t,e).then((function(e){h||w||(w=!0,v(e))}),(function(e){h||w||(h=!0,l[c]=e,--d||y(new n(l,m)))}))})),--d||y(new n(l,m))}));return w.error&&y(w.value),r.promise}})};
