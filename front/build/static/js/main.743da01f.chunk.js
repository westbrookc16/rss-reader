(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{36:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(15),i=n.n(a),s=(n(36),n(11)),o=n(1),u=function(){var e=Object(s.b)().loginWithRedirect;return Object(o.jsx)("button",{onClick:function(){return e()},children:"Log In"})},j=function(){var e=Object(s.b)().logout;return Object(o.jsx)("button",{onClick:function(){return e({returnTo:window.location.origin})},children:"Log Out"})},d=n(12),b=function(){var e=Object(s.b)(),t=e.isLoading,n=e.isAuthenticated;return Object(o.jsx)("div",{children:!t&&Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/",children:"Home"})}),n&&Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/feeds",children:"View Feeds/podcasts"})}),n&&Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/addfeed",children:"Add Feed"})}),n&&Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/addpodcast",children:"Add Podcast"})}),!n&&Object(o.jsx)("li",{children:Object(o.jsx)(u,{})}),n&&Object(o.jsx)("li",{children:Object(o.jsx)(j,{})})]})})},l=n(2),f=n.n(l),h=n(22),p=n(5),O=n(6);function x(e,t,n){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(f.a.mark((function e(t,n,c){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:n,body:JSON.stringify(c),headers:{"Content-Type":"Application/JSON"}});case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=r.a.createContext({});function w(e){var t=Object(c.useState)({}),n=Object(O.a)(t,2),r=n[0],a=n[1],i=Object(s.b)(),u=i.user,j=i.isLoading,d=i.isAuthenticated;return Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j&&d){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,x("/api/users","post",u);case 4:t=e.sent,n=Object(h.a)(Object(h.a)({},u),{},{dbID:t[0].id}),a(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[u,d,j,a]),Object(o.jsx)(m.Provider,{value:{user:r,setRetrievedUser:a},children:e.children})}var g=function(e){var t=e.items,n=(e.isaudio,t.map((function(e){var t=e.id,n=e.title,c=e.url,a=e.description;return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:c,children:n})}),Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})," ",Object(o.jsx)("br",{})]},t)})));return Object(o.jsx)(o.Fragment,{children:n})},y=n(4),k=function(){var e,t=Object(y.f)().id,n=c.useState([]),r=Object(O.a)(n,2),a=r[0],i=r[1];return c.useEffect((function(){function e(){return(e=Object(p.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,x("/api/items/".concat(t));case 4:n=e.sent,i(n),document.title=n[0].name;case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"All Stories"}),Object(o.jsx)("h2",{children:null===(e=a[0])||void 0===e?void 0:e.name}),Object(o.jsx)(g,{items:a,isaudio:!1})]})},S=n(17),C=function(){Object(c.useEffect)((function(){document.title="add Feed"}),[]);var e=Object(c.useState)(""),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(O.a)(a,2),s=i[0],u=i[1],j=Object(c.useState)(""),d=Object(O.a)(j,2),b=d[0],l=d[1],h=Object(c.useContext)(m).user,v=function(){var e=Object(p.a)(f.a.mark((function e(t){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/api/feeds/".concat(h.dbID),"post",{url:n});case 2:(c=e.sent).feed.name?alert("".concat(c.feed.name," was added successfully.")):alert("an error occurred, please try again.");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function w(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}return Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w(n)){e.next=2;break}return e.abrupt("return");case 2:return t={url:n},e.next=5,x("/api/rss/info","post",t);case 5:c=e.sent,u(c.title),l(c.description);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"feed",children:"Feed Url"}),Object(o.jsx)("input",{type:"text",id:"feed",value:n,onChange:function(e){r(e.target.value)},name:"url"}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:v,children:"Add"}),Object(o.jsxs)("div",{children:["name:",s,Object(o.jsx)("br",{}),"Description:",b]}),Object(o.jsx)(S.b,{message:s,"aria-live":"polite"})]})},I=function(){var e=Object(c.useContext)(m).user;return Object(o.jsx)("div",{children:e&&Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:e.picture,alt:e.name}),Object(o.jsx)("h2",{children:e.name}),Object(o.jsx)("p",{children:e.email}),JSON.stringify(e)]})})},D=function(){var e=Object(c.useContext)(m).user;Object(c.useEffect)((function(){document.title="Home"}),[]);var t=Object(c.useState)([]),n=Object(O.a)(t,2),r=n[0],a=n[1];Object(c.useEffect)((function(){function t(){return(t=Object(p.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.dbID){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,x("/api/feeds/".concat(e.dbID));case 4:n=t.sent,a(n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.dbID]);var i=r.map((function(e){var t=e.id,n=e.name;return Object(o.jsx)("li",{children:Object(o.jsx)(d.b,{to:"/all/".concat(t),children:n})},t)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"View Archived Stories"}),Object(o.jsx)("ul",{children:i}),"Welcome to my RSS reader. RSS stands for really simple syndication. This is a format offered by most publications that allows you to grab stories from that publication's website without having to go to the website of that publication and search for them. You can therefore make your own newspaper. Simply google the name of your favorite publication and rss to see a list of feeds that publication may offer."]})},F=n(28),A=(n(51),function(e){var t=e.name,n=e.id,r=e.isaudio,a=e.onDelete,i=c.useState([]),s=Object(O.a)(i,2),u=s[0],j=s[1],d=c.useContext(m).user,b=c.useState(!1),l=Object(O.a)(b,2),h=l[0],v=l[1],w=function(){v(!1)};c.useEffect((function(){function e(){return(e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.dir(d),d.dbID){e.next=4;break}return e.abrupt("return");case 4:return console.log("good"),e.next=7,x("/api/items/".concat(n,"/").concat(d.dbID));case 7:t=e.sent,j(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.stack);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,d]);var y=c.useState(!0),k=Object(O.a)(y,2),S=k[0],C=k[1];return 0===u.length?null:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:t}),Object(o.jsx)("button",{onClick:function(){return C((function(e){return!e}))},children:S?"Hide":"Show"}),Object(o.jsx)("button",{onClick:function(e){v(!0)},children:"Delete"}),S&&Object(o.jsx)(g,{items:u,isaudio:r}),Object(o.jsxs)(F.a,{isOpen:h,onClose:w,children:["Are you sure you want to delete ",t,"?",Object(o.jsx)("button",{onClick:function(e){a(n)},children:"Delete"}),Object(o.jsx)("button",{onClick:w,children:"No"})]})]})}),E=function(){Object(c.useEffect)((function(){document.title="View  Stories"}),[]);var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useContext)(m).user;Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a.dbID){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,x("/api/feeds/".concat(a.dbID),"get");case 5:t=e.sent,r(t),console.dir(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]);var i=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/api/feeds/".concat(t,"/").concat(a.dbID),"delete");case 2:r((function(e){return e.filter((function(e){return e.id!==t}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=n.map((function(e){var t=e.name,n=e.id,c=e.isaudio;return Object(o.jsx)(A,{name:t,id:n,isaudio:c,onDelete:i},n)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"View Stories"}),s]})},T=(n(52),function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(O.a)(a,2),s=i[0],u=i[1],j=Object(c.useContext)(m).user,d=function(){var e=Object(p.a)(f.a.mark((function e(t){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x("/api/podcasts/search?q=".concat(encodeURIComponent(n)),"get");case 3:c=e.sent,u(c.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(f.a.mark((function e(t,n){var c,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c={name:n,url:t}).isAudio=!0,e.next=4,x("api/feeds/".concat(j.dbID),"post",c);case 4:r=e.sent,console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=s.map((function(e){var t=e.collectionId,n=e.trackName,c=e.feedUrl;return Object(o.jsxs)("li",{children:[n,Object(o.jsx)("button",{id:"btnSubscribe",onClick:function(e){b(c,n)},children:"Subscribe"})]},t)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"search",children:"Enter Search Terms"}),Object(o.jsx)("input",{type:"text",id:"search",value:n,onChange:function(e){r(e.target.value)}}),Object(o.jsx)("button",{onClick:d,children:"Search"}),Object(o.jsx)("ul",{children:l})]})});var z=function(){return Object(o.jsx)(w,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(d.a,{children:[Object(o.jsx)("nav",{children:Object(o.jsx)(b,{})}),Object(o.jsx)("main",{children:Object(o.jsxs)(y.c,{children:[Object(o.jsx)(y.a,{path:"/all/:id",children:Object(o.jsx)(k,{})}),Object(o.jsx)(y.a,{path:"/feeds",children:Object(o.jsx)(E,{})}),Object(o.jsx)(y.a,{path:"/profile",children:Object(o.jsx)(I,{})}),Object(o.jsx)(y.a,{path:"/addFeed",children:Object(o.jsx)(C,{})}),Object(o.jsx)(y.a,{path:"/addPodcast",children:Object(o.jsx)(T,{})}),Object(o.jsx)(y.a,{path:"/",children:Object(o.jsx)(D,{})})]})})]})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(S.a,{children:Object(o.jsx)(s.a,{domain:"rss-reader.us.auth0.com",clientId:"Xr72wW2ifM0PCpAAcTQ4MHt8htI9FkES",redirectUri:window.location.origin,children:Object(o.jsx)(z,{})})})}),document.getElementById("root")),L()}},[[53,1,2]]]);
//# sourceMappingURL=main.743da01f.chunk.js.map