(this.webpackJsonprepo_list=this.webpackJsonprepo_list||[]).push([[0],{21:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(6),o=r.n(a),s=(r(21),r(15)),i=r(5),l=r(4),u=r.n(l),d=r(7),p=r(3),h=r(16);function b(e){return j.apply(this,arguments)}function j(){return(j=Object(d.a)(u.a.mark((function e(t){var r,n,c,a,o,s,i,l=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},n=r.body,c=Object(h.a)(r,["body"]),a={"Content-Type":"application/json"},o=Object(p.a)(Object(p.a)({method:"GET"},c),{},{headers:Object(p.a)(Object(p.a)({},a),c.headers)}),n&&(o.body=JSON.stringify(n)),e.prev=4,e.next=7,window.fetch(t,o);case 7:return i=e.sent,e.next=10,i.json();case 10:if(s=e.sent,!i.ok){e.next=13;break}return e.abrupt("return",s);case 13:throw new Error(i.statusText);case 16:return e.prev=16,e.t0=e.catch(4),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:s));case 19:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}b.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return b(e,Object(p.a)(Object(p.a)({},t),{},{method:"GET"}))};var x=r(1),f=function(){var e=Object(i.b)(),t=Object(n.useState)(null),r=Object(s.a)(t,2),c=r[0],a=r[1],o=Object(i.c)((function(e){return e.repos})),l="".concat("https://api.github.com/users","/").concat(c,"/repos");return Object(n.useEffect)((function(){null!==c&&e(function(e){return function(){var t=Object(d.a)(u.a.mark((function t(r,n){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get(e);case 2:c=t.sent,r({type:"repos/reposLoaded",payload:c});case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}(l))}),[c]),Object(x.jsxs)("div",{className:"flex flex-col flex-wrap content-center",children:[Object(x.jsx)("h1",{className:"text-6xl bold m-7 text-gray-700 text-center",children:"Find users repositories on GitHub"}),Object(x.jsxs)("form",{className:"m-7 self-center",onsubmit:"return false;",children:[Object(x.jsx)("input",{className:"input m-2 w-80 shadow appearance-none border rounded py-2 px-3 text-grey-darker",type:"text",placeholder:"Type user name and click search"}),Object(x.jsx)("button",{className:"italic font-bold border border-yellow-500 text-yellow-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-yellow-500 focus:outline-none focus:shadow-outline",onClick:function(){var e=document.querySelector(".input").value;a(e)},type:"button",children:"Search"})]}),Object(x.jsx)("div",{className:"flex flex-row flex-wrap",children:o&&o.sort((function(e,t){return t.stargazers_count-e.stargazers_count})).map((function(e){return Object(x.jsx)("div",{className:"flex flex-col self-center p-8 m-8 shadow-2xl",children:Object(x.jsxs)("a",{href:e.html_url,children:[Object(x.jsx)("h2",{className:"text-xl bold p-5 text-yellow-500",children:Object(x.jsx)("a",{href:e.html_url,children:e.name})}),Object(x.jsx)("p",{className:"text-l p-5 text-gray-700",children:e.description}),Object(x.jsxs)("p",{className:"text-s p-5 text-gray-500",children:["Stars: ",e.stargazers_count]})]})},e.id)}))})]})};r(30);var m=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(f,{})})},O=r(2);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=Object(O.combineReducers)({repos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"repos/reposLoaded":return t.payload;default:return e}}}),w=r(13),y=r(14),g=Object(O.createStore)(v,Object(y.composeWithDevTools)(Object(O.applyMiddleware)(w.a)));o.a.render(Object(x.jsx)(i.a,{store:g,children:Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(m,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.144991f7.chunk.js.map