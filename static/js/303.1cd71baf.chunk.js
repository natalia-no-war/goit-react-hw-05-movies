"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[303],{1313:function(n,t,e){e.d(t,{$H:function(){return m},DL:function(){return w},VU:function(){return x},Z$:function(){return v},h7:function(){return Z}});var r=e(5861),a=e(4687),c=e.n(a),o=e(1243),u="https://api.themoviedb.org/3",i="60bdd84997c9f2a4c6cd2341c547ed98",s="/trending/movie/day",p="/search/movie",f="/movie",l="/credits",d="/reviews",h="language=en-US",g="include_adult=false",v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat(s,"?api_key=").concat(i,"&page=").concat(t,"&").concat(g));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat(p,"?api_key=").concat(i,"&").concat(h,"&").concat(g,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat(f,"/").concat(t,"?api_key=").concat(i,"&").concat(h));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),w=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat(f,"/").concat(t).concat(l,"?api_key=").concat(i,"&").concat(h));case 2:return e=n.sent,r=e.data,a=r.cast,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Z=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:1,n.next=3,o.Z.get("".concat(u).concat(f,"/").concat(t).concat(d,"?api_key=").concat(i,"&").concat(h,"&page=").concat(e));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2033:function(n,t,e){e.d(t,{o:function(){return i}});var r,a=e(9711),c=e(168),o=e(7691).ZP.div(r||(r=(0,c.Z)(["\n  position: absolute;\n  bottom: 10;\n  left: 50%;\n  transform: translate(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  & img {\n    width: 300px;\n    height: auto;\n    margin-bottom: 15px;\n  }\n\n  & p {\n    font-size: 18px;\n    color: #34495e;\n  }\n"]))),u=e(184),i=function(n){var t=n.message;return(0,u.jsxs)(o,{children:[(0,u.jsx)("img",{src:a,alt:"red button",width:"300"}),(0,u.jsx)("p",{children:t})]})}},5303:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a=e(1413),c=e(5861),o=e(9439),u=e(4687),i=e.n(u),s=e(2791),p=e(7689),f=e(5206),l=e(1313),d=e(168),h=e(7691).ZP.ul(r||(r=(0,d.Z)(["\n  margin: 0;\n  padding-left: 50px;\n  padding-bottom: 50px;\n  list-style: square;\n  text-align: justify;\n\n  & p {\n    font-style: italic;\n    color: #22313f;\n  }\n"]))),g=e(184),v=function(n){var t=n.reviewsInfo;return(0,g.jsx)(h,{children:t.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,g.jsxs)("li",{children:[(0,g.jsx)("h4",{children:e}),(0,g.jsx)("p",{children:r})]},t)}))})},m=e(9245),x=e(2033),w=e(7461),Z=function(){var n,t=(0,s.useState)([]),e=(0,o.Z)(t,2),r=e[0],u=e[1],d=(0,s.useState)(0),h=(0,o.Z)(d,2),Z=h[0],b=h[1],y=(0,s.useState)("idle"),j=(0,o.Z)(y,2),k=j[0],_=j[1],S=(0,s.useState)(null),C=(0,o.Z)(S,2),I=C[0],P=C[1],U=(0,p.UO)().movieId,B=(0,p.s0)(),H=(0,p.TH)(),L=null!==(n=new URLSearchParams(H.search).get("page"))&&void 0!==n?n:1;(0,s.useEffect)((function(){_("pending");var n=function(){var n=(0,c.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.h7)(t);case 3:if(e=n.sent,r=e.results,a=e.total_pages,0!==r.length){n.next=10;break}return f.Am.warning("Sorry, no results found",{toastId:"error"}),_("idle"),n.abrupt("return");case 10:u(r),b(a),_("resolved"),n.next=20;break;case 15:n.prev=15,n.t0=n.catch(0),console.log(n.t0),P("\u274c ".concat(n.t0.message)),_("rejected");case 20:case"end":return n.stop()}}),n,null,[[0,15]])})));return function(t){return n.apply(this,arguments)}}();n(U),q()}),[U]);var q=function(){window.scrollBy({top:document.documentElement.clientHeight-160,behavior:"smooth"})};return(0,g.jsxs)(g.Fragment,{children:["pending"===k&&(0,g.jsx)(m.a,{}),"rejected"===k&&(0,g.jsx)(x.o,{message:I}),"resolved"===k&&(0,g.jsx)(v,{reviewsInfo:r}),(0,g.jsx)(f.Ix,{autoClose:3e3,theme:"colored",position:"bottom-center",limit:1}),Z>1&&(0,g.jsx)(w.f,{count:Z,onChange:function(n,t){B((0,a.Z)((0,a.Z)({},H),{},{search:"page=".concat(t)}))},page:Number(L)})]})}},7461:function(n,t,e){e.d(t,{f:function(){return i}});var r,a=e(3348),c=e(168),o=e(7691).ZP.div(r||(r=(0,c.Z)(["\n  // margin-right: auto;\n  // margin-left: auto;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n"]))),u=e(184),i=function(n){var t=n.count,e=n.page,r=n.onChange;return(0,u.jsx)(o,{children:(0,u.jsx)(a.Z,{count:t,onChange:r,page:e,showFirstButton:!0,showLastButton:!0,size:"large"})})}},9711:function(n,t,e){n.exports=e.p+"static/media/errorImg.f340655446e287466997.jpeg"}}]);
//# sourceMappingURL=303.1cd71baf.chunk.js.map