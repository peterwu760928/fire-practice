(function(){"use strict";var e={3879:function(e,n,t){var r=t(5130),o=t(3367),i=t(3165),u=t(6768),a=t(4232),c=t(144),s=t(3697);const f={class:"header"};var l=(0,u.pM)({__name:"TheHeader",setup(e){const n=(0,s.o)();return(e,t)=>{const r=(0,u.g2)("router-link");return(0,u.uX)(),(0,u.CE)("div",f,[(0,u.Lk)("p",null,"isLogin: "+(0,a.v_)((0,c.R1)(n).isLoggedIn),1),(0,u.Lk)("p",null,"Uid: "+(0,a.v_)((0,c.R1)(n).isUser.uid),1),(0,u.Lk)("p",null,"Email: "+(0,a.v_)((0,c.R1)(n).isUser.email),1),(0,u.Lk)("nav",null,[(0,u.bF)(r,{to:"/"},{default:(0,u.k6)((()=>[(0,u.eW)("首頁")])),_:1}),(0,c.R1)(n).isLoggedIn?((0,u.uX)(),(0,u.Wv)(r,{key:0,to:"/mine"},{default:(0,u.k6)((()=>[(0,u.eW)("我的")])),_:1})):(0,u.Q3)("",!0),(0,c.R1)(n).isLoggedIn?(0,u.Q3)("",!0):((0,u.uX)(),(0,u.Wv)(r,{key:1,to:"/signIn"},{default:(0,u.k6)((()=>[(0,u.eW)("登入")])),_:1})),(0,c.R1)(n).isLoggedIn?(0,u.Q3)("",!0):((0,u.uX)(),(0,u.Wv)(r,{key:2,to:"/signUp"},{default:(0,u.k6)((()=>[(0,u.eW)("註冊")])),_:1}))]),(0,c.R1)(n).isLoggedIn?((0,u.uX)(),(0,u.CE)("button",{key:0,type:"button",onClick:t[0]||(t[0]=(...e)=>(0,c.R1)(n).handleSignOut&&(0,c.R1)(n).handleSignOut(...e))}," 登出 ")):(0,u.Q3)("",!0)])}}}),d=t(1241);const p=(0,d.A)(l,[["__scopeId","data-v-49130786"]]);var h=p,g=(0,u.pM)({__name:"App",setup(e){return(e,n)=>{const t=(0,u.g2)("router-view");return(0,u.uX)(),(0,u.CE)(u.FK,null,[(0,u.bF)(h),(0,u.bF)(t)],64)}}});const v=g;var m=v,b=t(1387),y=t(2621);const k=[{path:"/",name:"home",component:()=>t.e(424).then(t.bind(t,6424))},{path:"/mine",name:"mine",component:()=>t.e(876).then(t.bind(t,1876)),meta:{requiresAuth:!0}},{path:"/signIn",name:"signIn",component:()=>t.e(241).then(t.bind(t,6241)),meta:{requiresAuth:!1}},{path:"/signUp",name:"signUp",component:()=>t.e(712).then(t.bind(t,7712)),meta:{requiresAuth:!1}}],_=(0,b.aE)({history:(0,b.LA)("/"),routes:k}),w=()=>new Promise(((e,n)=>{const t=(0,y.hg)((0,y.xI)(),(n=>{t(),e(n)}),n)}));_.beforeEach((async(e,n)=>{if(e.meta.requiresAuth&&!await w())return{path:"/",query:{redirect:e.fullPath}}})),_.beforeEach((async(e,n,t)=>{const r=await w();!r||"signIn"!==e.name&&"signUp"!==e.name?t():t("/")}));var E=_;i.v;const I=(0,r.Ef)(m),C=(0,o.Ey)();I.use(C),I.use(E),I.mount("#app")},3165:function(e,n,t){t.d(n,{db:function(){return s},v:function(){return c}});var r=t(6400),o=t(9675),i=t(5942);const u={apiKey:"AIzaSyB7QHg-QpznXhqsMWwz2jb_h0G-trSUs3M",authDomain:"fire-db-4c2c1.firebaseapp.com",projectId:"fire-db-4c2c1",storageBucket:"fire-db-4c2c1.appspot.com",messagingSenderId:"69901425522",appId:"1:69901425522:web:33a8f1c36150d44ea69beb",measurementId:"G-Y5XRF05BLR"},a=(0,r.Wp)(u);(0,i.P5)(a);console.log("firebase~",a);const c=()=>a,s=(0,o.aU)(a)},3697:function(e,n,t){t.d(n,{o:function(){return c}});t(4114);var r=t(144),o=t(6768),i=t(1387),u=t(3367),a=t(2621);const c=(0,u.nY)("global",(()=>{const e=(0,a.xI)(),n=(0,r.KR)(!1),t=(0,r.KR)(""),u=(0,i.rd)(),c=()=>{(0,a.CI)(e).then((()=>{console.log("已登出"),n.value=!1,u.push("/")})).catch((e=>{console.log("登出失敗",e)}))};return(0,o.sV)((()=>{(0,a.hg)(e,(e=>{e?(n.value=!0,t.value=e):(n.value=!1,t.value="")}))})),{isLoggedIn:n,isUser:t,handleSignOut:c}}))}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(f--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{241:"589d010b",424:"1ca8ef72",712:"2f2e9480",876:"15772215"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{241:"8376956c",712:"ab9b60c0",876:"d17d150d"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="fire-practice:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",t.nc&&(u.nonce=t.nc);var a=function(t){if(u.onerror=u.onload=null,"load"===t.type)o();else{var r=t&&t.type,a=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+a+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=a,u.parentNode&&u.parentNode.removeChild(u),i(c)}};return u.onerror=u.onload=a,u.href=n,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={241:1,712:1,876:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var f=c(t)}for(n&&n(r);s<u.length;s++)i=u[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},r=self["webpackChunkfire_practice"]=self["webpackChunkfire_practice"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(3879)}));r=t.O(r)})();
//# sourceMappingURL=app.469c7080.js.map