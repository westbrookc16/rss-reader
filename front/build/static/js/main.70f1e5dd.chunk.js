(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{49:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(2),i=n.n(a),s=n(23),o=n(6),u=n(4);function d(e,t,n){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(i.a.mark((function e(t,n,c){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:n,body:JSON.stringify(c),headers:{"Content-Type":"Application/JSON"}});case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l=n(11),b=n(1),f=r.a.createContext({});function h(e){var t=Object(c.useState)({}),n=Object(u.a)(t,2),r=n[0],a=n[1],j=Object(l.b)(),h=j.user,O=j.isLoading,p=j.isAuthenticated;return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O&&p){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,d("/api/users","post",h);case 4:t=e.sent,n=Object(s.a)(Object(s.a)({},h),{},{dbID:t[0].id}),a(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h,p,O,a]),Object(b.jsx)(f.Provider,{value:{user:r,setRetrievedUser:a},children:e.children})}var O=n(19),p=n.n(O),x=(n(49),n(32)),v=n(20),m=function(e){var t=e.onClose,n=e.onAdd;Object(c.useEffect)((function(){document.title="add Feed"}),[]);var r=Object(c.useState)(""),a=Object(u.a)(r,2),s=a[0],j=a[1],l=Object(c.useState)(""),h=Object(u.a)(l,2),O=h[0],p=h[1],x=Object(c.useState)(""),m=Object(u.a)(x,2),g=m[0],w=m[1],k=Object(c.useContext)(f).user,y=function(){var e=Object(o.a)(i.a.mark((function e(c){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/api/feeds/".concat(k.dbID),"post",{url:s,isAudio:!1});case 2:(r=e.sent).feed.name?(n(r.feed),t()):alert("an error occurred, please try again.");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function S(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S(s)){e.next=2;break}return e.abrupt("return");case 2:return t={url:s},e.next=5,d("/api/rss/info","post",t);case 5:n=e.sent,p(n.title),w(n.description);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"add Feed"}),Object(b.jsx)("label",{htmlFor:"feed",children:"Feed Url"}),Object(b.jsx)("input",{type:"text",id:"feed",value:s,onChange:function(e){j(e.target.value)},name:"url"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:y,children:"Add"})," \xa0",Object(b.jsx)("button",{onClick:function(e){t()},children:"Cancel"}),Object(b.jsxs)("div",{children:["name: ",O,Object(b.jsx)("br",{}),"Description: ",g]}),Object(b.jsx)(v.b,{message:O,"aria-live":"polite"})]})},g=n(16),w=(n(29),function(){var e=Object(l.b)().loginWithRedirect;return Object(b.jsx)("button",{onClick:function(){return e()},children:"Log In"})}),k=function(){var e=Object(l.b)().logout;return Object(b.jsx)("button",{onClick:function(){return e({returnTo:window.location.origin})},children:"Log Out"})},y=n(13),S=function(e){var t=e.onAdd,n=e.onClose,r=Object(c.useState)(""),a=Object(u.a)(r,2),s=a[0],j=a[1],l=Object(c.useState)([]),h=Object(u.a)(l,2),O=h[0],p=h[1],x=Object(c.useContext)(f).user,v=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d("/api/podcasts/search?q=".concat(encodeURIComponent(s)),"get");case 3:n=e.sent,p(n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(i.a.mark((function e(c,r){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===x||void 0===x?void 0:x.dbID){e.next=2;break}return e.abrupt("return");case 2:return(a={name:r,url:c}).isAudio=!0,e.next=6,d("api/feeds/".concat(x.dbID),"post",a);case 6:s=e.sent,t(s.feed),n();case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=O.map((function(e){var t=e.collectionId,n=e.trackName,c=e.feedUrl;return Object(b.jsxs)("li",{children:[n,Object(b.jsx)("button",{id:"btnSubscribe",onClick:function(e){m(c,n)},children:"Subscribe"})]},t)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"search",children:"Enter Search Terms"}),Object(b.jsx)("input",{type:"text",id:"search",value:s,onChange:function(e){j(e.target.value)}}),Object(b.jsx)("button",{onClick:v,children:"Search"}),Object(b.jsx)("ul",{children:g})]})},C=function(e){var t=e.onAdd,n=Object(l.b)(),r=n.isLoading,a=n.isAuthenticated,i=c.useState(!1),s=Object(u.a)(i,2),o=s[0],d=s[1],j=c.useState(!1),f=Object(u.a)(j,2),h=f[0],O=f[1];return Object(b.jsxs)("div",{children:[!r&&Object(b.jsxs)("ul",{id:"mainmenu",children:[Object(b.jsx)("li",{children:Object(b.jsx)(y.b,{to:"/",children:"Home"})}),a&&Object(b.jsx)("li",{children:Object(b.jsx)(y.b,{to:"/feeds",children:"View Feeds/podcasts"})}),a&&Object(b.jsx)("li",{children:Object(b.jsx)("button",{onClick:function(e){d(!0)},children:"add Feed"})}),a&&Object(b.jsx)("li",{children:Object(b.jsx)("button",{onClick:function(e){O(!0)},children:"add Podcast"})}),!a&&Object(b.jsx)("li",{children:Object(b.jsx)(w,{})}),a&&Object(b.jsx)("li",{children:Object(b.jsx)(k,{})})]}),Object(b.jsx)(g.a,{isOpen:o,children:Object(b.jsx)(m,{onClose:function(){d(!1)},onAdd:t})}),Object(b.jsx)(g.a,{isOpen:h,children:Object(b.jsx)(S,{onAdd:t,onClose:function(){O(!1)}})})]})},I=function(e){var t=e.items,n=(e.isaudio,t.map((function(e){var t=e.id,n=e.title,c=e.url,a=e.description;return Object(b.jsxs)(r.a.Fragment,{children:[Object(b.jsx)("h3",{children:Object(b.jsx)("a",{rel:"noreferrer",target:"_blank",href:c,children:n})}),Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})," ",Object(b.jsx)("br",{})]},t)})));return Object(b.jsx)(b.Fragment,{children:n})},D=n(5),A=function(){var e,t=Object(D.f)().id,n=c.useState([]),r=Object(u.a)(n,2),a=r[0],s=r[1];return c.useEffect((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,d("/api/items/".concat(t));case 4:n=e.sent,s(n),document.title=n[0].name;case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"All Stories"}),Object(b.jsx)("h2",{children:null===(e=a[0])||void 0===e?void 0:e.name}),Object(b.jsx)(I,{items:a,isaudio:!1})]})},F=function(){var e=Object(c.useContext)(f).user;return Object(b.jsx)("div",{children:e&&Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:e.picture,alt:e.name}),Object(b.jsx)("h2",{children:e.name}),Object(b.jsx)("p",{children:e.email}),JSON.stringify(e)]})})},E=function(){var e=Object(c.useContext)(f).user;Object(c.useEffect)((function(){document.title="Home"}),[]);var t=Object(c.useState)([]),n=Object(u.a)(t,2),r=n[0],a=n[1];Object(c.useEffect)((function(){function t(){return(t=Object(o.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.dbID){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,d("/api/feeds/".concat(e.dbID));case 4:n=t.sent,a(n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.dbID]);var s=r.map((function(e){var t=e.id,n=e.name;return Object(b.jsx)("li",{children:Object(b.jsx)(y.b,{to:"/all/".concat(t),children:n})},t)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"View Archived Stories"}),Object(b.jsx)("ul",{children:s}),"Welcome to my RSS reader. RSS stands for really simple syndication. This is a format offered by most publications that allows you to grab stories from that publication's website without having to go to the website of that publication and search for them. You can therefore make your own newspaper. Simply google the name of your favorite publication and rss to see a list of feeds that publication may offer."]})},T=function(e){var t=e.name,n=e.id,r=e.isaudio,a=e.onDelete,s=c.useState([]),j=Object(u.a)(s,2),l=j[0],h=j[1],O=c.useContext(f).user,p=c.useState(!1),x=Object(u.a)(p,2),v=x[0],m=x[1],w=function(){m(!1)};c.useEffect((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.dir(O),O.dbID){e.next=4;break}return e.abrupt("return");case 4:return console.log("good"),e.next=7,d("/api/items/".concat(n,"/").concat(O.dbID));case 7:t=e.sent,h(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.stack);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,O]);var k=c.useState(!0),y=Object(u.a)(k,2),S=y[0],C=y[1];return 0===l.length?null:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("button",{onClick:function(){return C((function(e){return!e}))},children:S?"Hide":"Show"}),Object(b.jsx)("button",{onClick:function(e){m(!0)},children:"Delete"}),S&&Object(b.jsx)(I,{items:l,isaudio:r}),Object(b.jsxs)(g.a,{isOpen:v,onClose:w,children:["Are you sure you want to delete ",t,"?",Object(b.jsx)("button",{onClick:function(e){a(n)},children:"Delete"}),Object(b.jsx)("button",{onClick:w,children:"No"})]})]})},z=function(e){var t=e.titles,n=e.deleteFeed;Object(c.useEffect)((function(){document.title="View  Stories"}),[]);var r=t.map((function(e){var t=e.name,c=e.id,r=e.isaudio;return Object(b.jsx)(T,{name:t,id:c,isaudio:r,onDelete:n},c)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"View Stories"}),r]})};n(55);var L=function(){var e=c.useState([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=c.useContext(f).user;c.useEffect((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a.dbID){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,d("/api/feeds/".concat(a.dbID),"get");case 5:t=e.sent,r(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]);var s=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/api/feeds/".concat(t,"/").concat(a.dbID),"delete");case 2:r((function(e){return e.filter((function(e){return e.id!==t}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(y.a,{children:[Object(b.jsx)("nav",{children:Object(b.jsx)(C,{onAdd:function(e){r((function(t){return console.log("adding"),[].concat(Object(x.a)(t),[e])}))}})}),Object(b.jsx)("main",{children:Object(b.jsxs)(D.c,{children:[Object(b.jsx)(D.a,{path:"/all/:id",children:Object(b.jsx)(A,{})}),Object(b.jsx)(D.a,{path:"/feeds",children:Object(b.jsx)(z,{titles:n,deleteFeed:s})}),Object(b.jsx)(D.a,{path:"/profile",children:Object(b.jsx)(F,{})}),Object(b.jsx)(D.a,{path:"/addFeed",children:Object(b.jsx)(m,{})}),Object(b.jsx)(D.a,{path:"/addPodcast",children:Object(b.jsx)(S,{})}),Object(b.jsx)(D.a,{path:"/",children:Object(b.jsx)(E,{})})]})})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};p.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(v.a,{children:Object(b.jsx)(l.a,{domain:"rss-reader.us.auth0.com",clientId:"Xr72wW2ifM0PCpAAcTQ4MHt8htI9FkES",redirectUri:window.location.origin,children:Object(b.jsx)(h,{children:Object(b.jsx)(L,{})})})})}),document.getElementById("root")),N()}},[[56,1,2]]]);
//# sourceMappingURL=main.70f1e5dd.chunk.js.map