(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(10),i=t.n(r),c=(t(79),t(22)),s=(t(80),t(81),t(133)),l=t(132);var u=function(){var e,n=Object(o.useState)(0),t=Object(c.a)(n,2),r=t[0],i=t[1],u=Object(o.useState)(!1),d=Object(c.a)(u,2),f=d[0],v=d[1],h=Object(o.useState)(""),w=Object(c.a)(h,2),g=w[0],b=w[1],p=Object(o.useState)(100),m=Object(c.a)(p,2),y=m[0],E=m[1],j=Object(o.useState)(!1),k=Object(c.a)(j,2),O=k[0],I=k[1];return function(e,n){var t=Object(o.useRef)();Object(o.useEffect)(function(){t.current=e}),Object(o.useEffect)(function(){var e=setInterval(function(){t.current()},n);return function(){return clearInterval(e)}},[n])}(function(){var e=document.getElementById("water").offsetHeight;0!==e||f?e>=window.innerHeight-1&&(I(!1),v(!1),b("")):(s.a.success(a.a.createElement("strong",null,"You have drunk ",a.a.createElement("span",{style:{color:"#66ccff"}},r+1)," times"),3),i(r+1),b("POUR IN"),v(!0),I(!0),E(100))},100),e=O?"flex":"none",a.a.createElement("div",null,a.a.createElement("div",{id:"water",style:{height:y+"vh"}}),a.a.createElement("div",{id:"button-area"},a.a.createElement(l.a,{id:"drink-button",type:"dashed",ghost:!0,onMouseEnter:function(){E(0),b("DRINKING")},onMouseLeave:function(){E(100),f||b("")},style:{display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement("p",{style:{wordBreak:"break-all",whiteSpace:"normal"}},g))),a.a.createElement("div",{id:"spinner-area"},a.a.createElement("div",{style:{height:"100vh",width:"100vw",background:"rgba(0,0,0,0.3)",zIndex:999,display:e}})))},d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(u,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat(".","/service-worker.js");d?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):f(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):f(n,e)})}}()},74:function(e,n,t){e.exports=t(130)},79:function(e,n,t){},80:function(e,n,t){}},[[74,1,2]]]);
//# sourceMappingURL=main.21e9008e.chunk.js.map