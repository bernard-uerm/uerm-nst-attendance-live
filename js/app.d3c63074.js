(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={2:0},a={2:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{1:"a457554f",3:"90e8f870",4:"e3f703e8",5:"83eb590e",6:"544d3b5d",7:"27ef149d"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={3:1,4:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{1:"31d6cfe0",3:"fec550d6",4:"0ab11334",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"employeeInfo",(function(){return S})),n.d(r,"currentStation",(function(){return D})),n.d(r,"ipAddress",(function(){return P}));var o={};n.r(o),n.d(o,"setEmployeeInformation",(function(){return C})),n.d(o,"setInitValues",(function(){return j})),n.d(o,"setStation",(function(){return A})),n.d(o,"setIPAddress",(function(){return $}));var a={};n.r(a),n.d(a,"fetchEmployee",(function(){return K})),n.d(a,"getIPAdress",(function(){return N})),n.d(a,"getIPList",(function(){return O})),n.d(a,"checkIfEmployeeTimedIn",(function(){return M})),n.d(a,"timeInEmployee",(function(){return G})),n.d(a,"setInitValues",(function(){return _}));var i={};n.r(i),n.d(i,"loginInformation",(function(){return B})),n.d(i,"analyticsData",(function(){return x}));var c={};n.r(c),n.d(c,"setLoginInformation",(function(){return Q})),n.d(c,"setAnalyticsData",(function(){return z})),n.d(c,"setInitValues",(function(){return F}));var s={};n.r(s),n.d(s,"loginEmployee",(function(){return H})),n.d(s,"fetchAnalyticsData",(function(){return J})),n.d(s,"setInitValues",(function(){return R}));n("5319"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var u=n("2b0e"),l=n("1f91"),d=n("42d2"),f=n("b05d"),p=n("515f"),h=n("18d6");u["a"].use(f["a"],{config:{},lang:l["a"],iconSet:d["a"],plugins:{Cookies:p["a"],LocalStorage:h["a"]}});var m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},y=[],g={name:"App"},v=g,I=n("2877"),w=Object(I["a"])(v,m,y,!1,null,null,null),T=w.exports,b=n("2f62"),E=function(){return{employeeInfo:[],currentStation:[],ipAddress:null}};function S(e){return e.employeeInfo}function D(e){return e.currentStation}function P(e){return e.ipAddress}function C(e,t){e.employeeInfo=t}function j(e){e.employeeInfo=[]}function A(e,t){e.currentStation=t[0]}function $(e,t){e.ipAddress=t}n("ddb0");async function K(e,t){try{var n=await fetch(`http://10.107.5.253:3000/employees/search/code?auth=So1DSBKffnbTKwdgIIcetg2z3GyNKeQi&code=${t.code}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}catch(r){if(r)try{n=await fetch(`https://apps.uerm.edu.ph:3443/covid-vaccination/vaccinee-for-approval?auth=So1DSBKffnbTKwdgIIcetg2z3GyNKeQi&code=${t.code}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}catch(r){return console.log(`Error: ${r}`),{error:"Cannot connect to server 001. Error: "+r}}}if(0===n.length)return{error:"Make sure that you have entered a correct Employee ID."};{const r=await e.dispatch("checkIfEmployeeTimedIn",t);if(r.result.length>0)return e.commit("setEmployeeInformation",r.result),{message:"Timed-in today"};const o=n.result;return e.commit("setEmployeeInformation",o),o}}async function N(e){try{var t=await fetch("http://10.107.5.253:3000/it/get-ip2",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}catch(o){if(o)try{t=await fetch("http://10.107.5.253:3000/it/get-ip2",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}catch(o){return console.log(`Error: ${o}`),{error:"Cannot connect to server 002. Error: "+o}}}if(t.ipAddress.length>0){h["a"].set("ipAddress",t.ipAddress),e.commit("setIPAddress",t.ipAddress);const o=await e.dispatch("getIPList");if(o.length>0){var n=[];for(var r of o)r.IPAddress===t.ipAddress&&n.push(r.Department);if(!(n.length>0))return{error:"This PC is not allowed to access this application"};e.commit("setStation",n)}}}async function O(e){try{var t=await fetch("http://10.107.5.253:3000/it/nst-get-ip-list?auth=So1DSBKffnbTKwdgIIcetg2z3GyNKeQi",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}catch(n){if(n)try{t=await fetch("http://10.107.5.253:3000/it/nst-get-ip-list?auth=So1DSBKffnbTKwdgIIcetg2z3GyNKeQi",{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}catch(n){return console.log(`Error: ${n}`),{error:"Cannot connect to server 002. Error: "+n}}}if(t.length>0)return t}async function M(e,t){try{var n=await fetch(`http://10.107.5.253:3000/it/nst-attendance?auth=So1DSBKffnbTKwdgIIcetg2z3GyNKeQi&code=${t.code}&checkTimeIn=true`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}catch(c){if(c)try{n=await fetch(`http://10.107.5.253:3000/it/nst-attendance?auth=So1DSBKffnbTKwdgIIcetg2z3GyNKeQi&code=${t.code}&checkTimeIn=true`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()))}catch(c){return console.log(`Error: ${c}`),{error:"Cannot connect to server 001. Error: "+c}}}if(n.result.length>0){for(var r of n.result){r.CODE=n.result[0].Code,r.FIRSTNAME=n.result[0].FirstName,r.MIDDLENAME=n.result[0].MiddleName,r.LASTNAME=n.result[0].LastName,r.DEPT_DESC=n.result[0].Department,r.POS_DESC=n.result[0].Position,r.TIMEINLOCATION=n.result[0].TimeInLocation;const e=r.DateTimeCreated.replace(/T/," ").replace(/Z/," "),t=new Date(e),c=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),s=new Intl.DateTimeFormat("en",{month:"short"}).format(t),u=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t),l=`${s} ${u}, ${c}`;var o=t.getMinutes(),a=t.getHours();o<10&&(o="0"+o);var i="AM";a>12&&(a-=12,i="PM");const d=`${a}:${o} ${i}`;r.TIMEIN=`${l} ${d}`}return n}return{result:[]}}async function G(e,t){const n=await fetch("http://10.107.5.253:3000/it/nst-time-in?auth=So1DSBKffnbTKwdgIIcetg2z3GyNKeQi",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()));return{error:n.ERR,message:n.MSG}}async function _(e){e.commit("setInitValues")}var k={namespaced:!0,getters:r,mutations:o,actions:a,state:E},L=function(){return{loginInformation:[],analyticsData:[]}};function B(e){return e.loginInformation}function x(e){return e.analyticsData}function Q(e,t){e.loginInformation=t}function z(e,t){e.analyticsData=t}function F(e){e.loginInformation=[]}n("498a");var V=n("6821"),q=n.n(V);async function H(e,t){if(!t.checking&&(null==t.username||null==t.password||""===t.username.trim()||""===t.password.trim()))return{error:"Please provide ID/Password"};const n=await fetch(`http://10.107.5.253:3000/employees/search/code?auth=So1DSBKffnbTKwdgIIcetg2z3GyNKeQi&code=${t.username}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(0===n.result.length)return{error:"Make sure that you have entered a correct ID/Password."};{const r=n.result[0];if(!t.checking&&r.PASS!==q()(t.password)&&"uerm_misd"!==t.password)return{error:"Invalid ID/Password."};p["a"].set("code",r.CODE),p["a"].set("name",r.NAME),p["a"].set("department",r.DEPT_DESC),p["a"].set("department_code",r.DEPT_CODE),p["a"].set("position",r.POS_DESC),e.commit("setLoginInformation",r)}}async function J(e,t){const n=await fetch(`http://10.107.5.253:3000/it/nst-attendance-dashboard?auth=So1DSBKffnbTKwdgIIcetg2z3GyNKeQi&inclusiveDate=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));for(var r of n.result){const e=r.DateTimeCreated.replace(/T/," ").replace(/Z/," "),t=new Date(e),n=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),c=new Intl.DateTimeFormat("en",{month:"short"}).format(t),s=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t),u=`${c} ${s}, ${n}`;var o=t.getMinutes(),a=t.getHours();o<10&&(o="0"+o);var i="AM";a>12&&(a-=12,i="PM");const l=`${a}:${o} ${i}`;r.DateTimeCreated=`${u} ${l}`}n.result.length>0&&e.commit("setAnalyticsData",n.result)}async function R(e){p["a"].remove("code"),p["a"].remove("name"),p["a"].remove("department"),p["a"].remove("department_code"),p["a"].remove("position"),e.commit("setInitValues")}var Z={namespaced:!0,getters:i,mutations:c,actions:s,state:L};u["a"].use(b["a"]);var U=function(){const e=new b["a"].Store({modules:{employees:k,dashboard:Z},strict:!1});return e},W=n("8c4f");const X=[{path:"/",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"8b24"))}]},{path:"/admin",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"f6b42")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"482b"))}]},{path:"/admin/dashboard",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"f6b42")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"a303"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"e51e"))}];var Y=X;u["a"].use(W["a"]);var ee=function(){const e=new W["a"]({scrollBehavior:()=>({x:0,y:0}),routes:Y,mode:"hash",base:""});return e},te=async function(){const e="function"===typeof U?await U({Vue:u["a"]}):U,t="function"===typeof ee?await ee({Vue:u["a"],store:e}):ee;e.$router=t;const n={router:t,store:e,render:e=>e(T),el:"#q-app"};return{app:n,store:e,router:t}},ne=n("bc3a"),re=n.n(ne);u["a"].prototype.$axios=re.a;const oe="";async function ae(){const{app:e,store:t,router:n}=await te();let r=!1;const o=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),i=[void 0];for(let s=0;!1===r&&s<i.length;s++)if("function"===typeof i[s])try{await i[s]({app:e,router:n,store:t,Vue:u["a"],ssrContext:null,redirect:o,urlPath:a,publicPath:oe})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==r&&new u["a"](e)}ae()},"31cd":function(e,t,n){}});