// module 1242 from fd57a96.js
// deps: 1176
const module_1242 = function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={handlers:new(o(1176).Store)("eventHandlers"),on:function(e,t){void 0===n.handlers[e]&&(n.handlers[e]=[]),n.handlers[e].push(t)},emit:function(e){if(n.handlers[e.type]instanceof Array){for(var t=n.handlers[e.type],i=0;i<t.length;i++)t[i](e);n.handlers[e.type]=[]}},remove:function(e,t){if(n.handlers[e]instanceof Array)for(var o=n.handlers[e],i=0;i<o.length;i++)if(o[i]===t){o.splice(i,1);break}}};t.default=n};
