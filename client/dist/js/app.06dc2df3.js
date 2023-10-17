(function(){"use strict";var n={2566:function(n,t,e){var r=e(9242),o=e(3396),a=e(7139),u=e(4870),i=e.p+"img/logo.9fd44f98.png";const c=n=>((0,o.dD)("data-v-d24c92f6"),n=n(),(0,o.Cn)(),n),s={class:"logo"},l=["src"],f={class:"menu"},d=c((()=>(0,o._)("span",{class:"material-icons"},"Assistants",-1))),p=c((()=>(0,o._)("span",{class:"material-icons"},"Description",-1))),v=c((()=>(0,o._)("span",{class:"material-icons"},"Journey",-1)));var m={__name:"sidebar",setup(n){const t=(0,u.iH)("true"===localStorage.getItem("is_expanded"));return(n,e)=>{const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("aside",{class:(0,a.C_)(""+(t.value?"is-expanded":""))},[(0,o._)("div",s,[(0,o._)("img",{src:(0,u.SU)(i),alt:"Vue"},null,8,l)]),(0,o._)("div",f,[(0,o.Wm)(r,{to:"/",class:"button"},{default:(0,o.w5)((()=>[d])),_:1}),(0,o.Wm)(r,{to:"/about",class:"button"},{default:(0,o.w5)((()=>[p])),_:1}),(0,o.Wm)(r,{to:"/team",class:"button"},{default:(0,o.w5)((()=>[v])),_:1})])],2)}}},b=e(89);const _=(0,b.Z)(m,[["__scopeId","data-v-d24c92f6"]]);var h=_;const g={class:"app"};var y={__name:"App",setup(n){return(n,t)=>{const e=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",g,[(0,o.Wm)(h),(0,o.Wm)(e)])}}};const w=y;var k=w,O=e(2483);const j=n=>((0,o.dD)("data-v-63cc8e9a"),n=n(),(0,o.Cn)(),n),C=j((()=>(0,o._)("h3",null,"Sample Table ",-1))),S={class:"table-container"},T=j((()=>(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"Name"),(0,o._)("th",null,"Skills"),(0,o._)("th",null,"Conversation"),(0,o._)("th",null,"Type"),(0,o._)("th",null,"Contacts")])],-1)));function D(n,t,e,r,u,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[C,(0,o._)("div",S,[(0,o._)("table",null,[T,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.users,(n=>((0,o.wg)(),(0,o.iD)("tr",{key:n.id},[(0,o._)("td",null,(0,a.zw)(n.name),1),(0,o._)("td",null,(0,a.zw)(n.skills),1),(0,o._)("td",null,(0,a.zw)(n.conversation),1),(0,o._)("td",null,(0,a.zw)(n.type),1),(0,o._)("td",null,(0,a.zw)(n.contacts),1)])))),128))])])])],64)}var x={data(){return{users:[{name:"abc",skills:"abc",conversation:"20",type:"sms",contacts:"3"},{name:"abc",skills:"abc",conversation:"50",type:"sms",contacts:"3"},{name:"abc",skills:"abc",conversation:"40",type:"sms",contacts:"3"}]}}};const P=(0,b.Z)(x,[["render",D],["__scopeId","data-v-63cc8e9a"]]);var A=P;const E=(0,O.p7)({history:(0,O.PO)(),routes:[{path:"/",component:A},{path:"/about",component:()=>e.e(410).then(e.bind(e,2410))}]});var z=E;(0,r.ri)(k).use(z).mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return n[r].call(a.exports,a,a.exports,e),a.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,a){if(!r){var u=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],a=n[l][2];for(var i=!0,c=0;c<r.length;c++)(!1&a||u>=a)&&Object.keys(e.O).every((function(n){return e.O[n](r[c])}))?r.splice(c--,1):(i=!1,a<u&&(u=a));if(i){n.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[r,o,a]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(t,r){return e.f[r](n,t),t}),[]))}}(),function(){e.u=function(n){return"js/"+n+".9f1186fd.js"}}(),function(){e.miniCssF=function(n){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={},t="conversica-app:";e.l=function(r,o,a,u){if(n[r])n[r].push(o);else{var i,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){i=f;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,e.nc&&i.setAttribute("nonce",e.nc),i.setAttribute("data-webpack",t+a),i.src=r),n[r]=[o];var d=function(t,e){i.onerror=i.onload=null,clearTimeout(p);var o=n[r];if(delete n[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(n){return n(e)})),t)return t(e)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var n={143:0};e.f.j=function(t,r){var o=e.o(n,t)?n[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(e,r){o=n[t]=[e,r]}));r.push(o[2]=a);var u=e.p+e.u(t),i=new Error,c=function(r){if(e.o(n,t)&&(o=n[t],0!==o&&(n[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,o[1](i)}};e.l(u,c,"chunk-"+t,t)}},e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,a,u=r[0],i=r[1],c=r[2],s=0;if(u.some((function(t){return 0!==n[t]}))){for(o in i)e.o(i,o)&&(e.m[o]=i[o]);if(c)var l=c(e)}for(t&&t(r);s<u.length;s++)a=u[s],e.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return e.O(l)},r=self["webpackChunkconversica_app"]=self["webpackChunkconversica_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(2566)}));r=e.O(r)})();
//# sourceMappingURL=app.06dc2df3.js.map