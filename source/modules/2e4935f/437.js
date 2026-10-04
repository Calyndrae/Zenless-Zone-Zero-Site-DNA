// module 437 from 2e4935f.js
// deps: 
const module_437 = function(t,e,n){"use strict";t.exports=function(t,e,code,n,r){return t.config=e,code&&(t.code=code),t.request=n,t.response=r,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},t}};
