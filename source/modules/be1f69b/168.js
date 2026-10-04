// module 168 from be1f69b.js
// deps: 
const module_168 = function(e,t,n){"use strict";var r={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(e,t){var n=t.parent,r=t.slots,o=t.props,c=r(),l=c.default;void 0===l&&(l=[]);var f=c.placeholder;return n._isMounted?l:(n.$once("hook:mounted",(function(){n.$forceUpdate()})),o.placeholderTag&&(o.placeholder||f)?e(o.placeholderTag,{class:["no-ssr-placeholder"]},o.placeholder||f):l.length>0?l.map((function(){return e(!1)})):e(!1))}};e.exports=r};
