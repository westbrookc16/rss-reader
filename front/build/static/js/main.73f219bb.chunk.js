(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{29:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(23),a=n.n(s),i=(n(29),n.p+"static/media/logo.6ce24c58.svg"),u=n(7),j=n(1),o=function(){var e=Object(u.b)().loginWithRedirect;return Object(j.jsx)("button",{onClick:function(){return e()},children:"Log In"})},b=function(){var e=Object(u.b)().logout;return Object(j.jsx)("button",{onClick:function(){return e({returnTo:window.location.origin})},children:"Log Out"})},d=n(12),l=function(){var e=Object(u.b)(),t=e.isLoading,n=e.isAuthenticated;return Object(j.jsx)("div",{children:!t&&Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"/",children:"Home"})}),n&&Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"/feeds",children:"View Feeds"})}),n&&Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"/addfeed",children:"Add Feed"})}),!n&&Object(j.jsx)("li",{children:Object(j.jsx)(o,{})}),n&&Object(j.jsx)("li",{children:Object(j.jsx)(b,{})})]})})},O=n(3),f=n.n(O),p=n(14),h=n(8),x=n(11);function v(e,t,n){return m.apply(this,arguments)}function m(){return(m=Object(h.a)(f.a.mark((function e(t,n,r){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:n,body:JSON.stringify(r),headers:{"Content-Type":"Application/JSON"}});case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=c.a.createContext({});function w(e){var t=Object(r.useState)({}),n=Object(x.a)(t,2),c=n[0],s=n[1],a=Object(u.b)(),i=a.user,o=a.isLoading,b=a.isAuthenticated;return Object(r.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o&&b){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v("/api/users","post",i);case 4:t=e.sent,n=Object(p.a)(Object(p.a)({},i),{},{dbID:t[0].id}),s(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,b,o,s]),Object(j.jsx)(g.Provider,{value:{user:c,setRetrievedUser:s},children:e.children})}var k=n(2),y=function(){var e=Object(u.b)(),t=e.user,n=e.isLoading,c=Object(k.f)(),s=Object(r.useContext)(g).setUser;return Object(r.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v("/api/users","post",t);case 4:r=e.sent,a=Object(p.a)(Object(p.a)({},t),{},{dbID:r[0].id}),s(a),c.push("/profile");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t,s,c]),Object(j.jsx)("div",{children:"Loading..."})},C=n(16),F=function(){var e=Object(r.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),a=Object(x.a)(s,2),i=a[0],u=a[1],o=Object(r.useState)(""),b=Object(x.a)(o,2),d=b[0],l=b[1],O=Object(r.useContext)(g).user,p=function(){var e=Object(h.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/api/feeds/".concat(O.dbID),"post",{url:n});case 2:(r=e.sent).feed.name?alert("".concat(r.feed.name," was added successfully.")):alert("an error occurred, please try again.");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function m(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}return Object(r.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m(n)){e.next=2;break}return e.abrupt("return");case 2:return t={url:n},e.next=5,v("/api/rss/info","post",t);case 5:r=e.sent,u(r.title),l(r.description);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"feed",children:"Feed Url"}),Object(j.jsx)("input",{type:"text",id:"feed",value:n,onChange:function(e){c(e.target.value)},name:"url"}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:p,children:"Add"}),Object(j.jsxs)("div",{children:["name:",i,Object(j.jsx)("br",{}),"Description:",d]}),Object(j.jsx)(C.b,{message:i,"aria-live":"polite"})]})},I=function(){var e=Object(r.useContext)(g).user;return Object(j.jsx)("div",{children:e&&Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:e.picture,alt:e.name}),Object(j.jsx)("h2",{children:e.name}),Object(j.jsx)("p",{children:e.email}),JSON.stringify(e)]})})},S=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),"Welcome to my fancy rss reader"]})},A=function(e){var t=e.items;console.log("items=".concat(t.length));var n=t.map((function(e){var t=e.id,n=e.title,r=e.url,s=e.description;return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("h3",{children:Object(j.jsx)("a",{rel:"noreferrer",target:"_blank",href:r,children:n})}),s," ",Object(j.jsx)("br",{})]},t)}));return Object(j.jsx)(j.Fragment,{children:n})},D=function(e){var t=e.titles,n=e.items,r=t.map((function(e){var t=e.name,r=e.id,s=n.filter((function(e){return e.feedid===r}));return console.log("filteredITems=".concat(s.length)),Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("h2",{children:t}),Object(j.jsx)(A,{id:r,items:s},r)]},r)}));return Object(j.jsx)("div",{children:r})},E=function(){var e=Object(r.useState)([]),t=Object(x.a)(e,2),n=t[0],c=t[1],s=Object(r.useContext)(g).user,a=Object(r.useState)([]),i=Object(x.a)(a,2),u=i[0],o=i[1];return Object(r.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s&&s.dbID){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,v("/api/items/".concat(s.dbID),"get");case 5:t=e.sent,o(t),console.log("setting items herer."),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.stack);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]),Object(r.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s.dbID){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,v("/api/feeds/".concat(s.dbID),"get");case 5:t=e.sent,c(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"View Stories"}),Object(j.jsx)(D,{titles:n,items:u})]})};n(44);var L=function(){return Object(j.jsx)(w,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)("img",{src:i,className:"App-logo",alt:"logo"})}),Object(j.jsxs)(d.a,{children:[Object(j.jsx)("nav",{children:Object(j.jsx)(l,{})}),Object(j.jsx)("main",{children:Object(j.jsxs)(k.c,{children:[Object(j.jsx)(k.a,{path:"/callback",children:Object(j.jsx)(y,{})}),Object(j.jsx)(k.a,{path:"/feeds",children:Object(j.jsx)(E,{})}),Object(j.jsx)(k.a,{path:"/profile",children:Object(j.jsx)(I,{})}),Object(j.jsx)(k.a,{path:"/addFeed",children:Object(j.jsx)(F,{})}),Object(j.jsx)(k.a,{path:"/",children:Object(j.jsx)(S,{})})]})})]})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C.a,{children:Object(j.jsx)(u.a,{domain:"rss-reader.us.auth0.com",clientId:"Xr72wW2ifM0PCpAAcTQ4MHt8htI9FkES",redirectUri:window.location.origin,children:Object(j.jsx)(L,{})})})}),document.getElementById("root")),z()}},[[45,1,2]]]);
//# sourceMappingURL=main.73f219bb.chunk.js.map