// module 618 from be1f69b.js
// deps: 320
const module_618 = function(e,t,n){"use strict";t.__esModule=!0;var r=n(320);t.default=function(e,t){var n=e.split("?"),o=n[0],c=n[1],l=(c||"").split("#")[0],f=c&&c.split("#").length>1?"#"+c.split("#")[1]:"",d=r.parse(l);for(var i in t)d[i]=t[i];return""!==(l=r.stringify(d))&&(l="?"+l),o+l+f}};
