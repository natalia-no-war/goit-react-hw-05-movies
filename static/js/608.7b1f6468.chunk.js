"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[608],{1313:function(n,e,t){t.d(e,{$H:function(){return m},DL:function(){return h},VU:function(){return g},Z$:function(){return v},h7:function(){return k}});var r=t(5861),a=t(4687),A=t.n(a),i=t(1243),s="https://api.themoviedb.org/3",c="60bdd84997c9f2a4c6cd2341c547ed98",o="/trending/movie/day",l="/search/movie",d="/movie",u="/credits",p="/reviews",f="language=en-US",x="include_adult=false",v=function(){var n=(0,r.Z)(A().mark((function n(e){var t,r;return A().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s).concat(o,"?api_key=").concat(c,"&page=").concat(e,"&").concat(x));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(A().mark((function n(e,t){var r,a;return A().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s).concat(l,"?api_key=").concat(c,"&").concat(f,"&").concat(x,"&query=").concat(e,"&page=").concat(t));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(A().mark((function n(e){var t,r;return A().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s).concat(d,"/").concat(e,"?api_key=").concat(c,"&").concat(f));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(A().mark((function n(e){var t,r,a;return A().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s).concat(d,"/").concat(e).concat(u,"?api_key=").concat(c,"&").concat(f));case 2:return t=n.sent,r=t.data,a=r.cast,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),k=function(){var n=(0,r.Z)(A().mark((function n(e){var t,r,a,o=arguments;return A().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:1,n.next=3,i.Z.get("".concat(s).concat(d,"/").concat(e).concat(p,"?api_key=").concat(c,"&").concat(f,"&page=").concat(t));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2033:function(n,e,t){t.d(e,{o:function(){return c}});var r,a=t(9711),A=t(168),i=t(7691).ZP.div(r||(r=(0,A.Z)(["\n  position: absolute;\n  bottom: 10;\n  left: 50%;\n  transform: translate(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  & img {\n    width: 300px;\n    height: auto;\n    margin-bottom: 15px;\n  }\n\n  & p {\n    font-size: 18px;\n    color: #34495e;\n  }\n"]))),s=t(184),c=function(n){var e=n.message;return(0,s.jsxs)(i,{children:[(0,s.jsx)("img",{src:a,alt:"red button",width:"300"}),(0,s.jsx)("p",{children:e})]})}},9245:function(n,e,t){t.d(e,{a:function(){return s}});var r,a=t(168),A=t(7691).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n\n  .lds-ellipsis {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-ellipsis div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #5e87b8;\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n  .lds-ellipsis div:nth-child(1) {\n    left: 8px;\n    animation: lds-ellipsis1 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(2) {\n    left: 8px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(3) {\n    left: 32px;\n    animation: lds-ellipsis2 0.6s infinite;\n  }\n  .lds-ellipsis div:nth-child(4) {\n    left: 56px;\n    animation: lds-ellipsis3 0.6s infinite;\n  }\n  @keyframes lds-ellipsis1 {\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n  @keyframes lds-ellipsis3 {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n  @keyframes lds-ellipsis2 {\n    0% {\n      transform: translate(0, 0);\n    }\n    100% {\n      transform: translate(24px, 0);\n    }\n  }\n"]))),i=t(184),s=function(){return(0,i.jsx)(A,{children:(0,i.jsxs)("div",{className:"lds-ellipsis",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]})})}},5608:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r,a=t(5861),A=t(9439),i=t(4687),s=t.n(i),c=t(2791),o=t(7689),l=t(1087),d=t(168),u=t(7691).ZP.div(r||(r=(0,d.Z)(["\n  padding-bottom: 40px;\n\n  & .MainInfoContainer {\n    display: flex;\n    gap: 30px;\n  }\n\n  & img {\n    display: block;\n    height: auto;\n    border-radius: 5px;\n  }\n\n  & .InfoContainer {\n    color: #22313f;\n  }\n\n  & p {\n    font-size: 20px;\n  }\n\n  & .AdditionalInfoContainer {\n    color: #22313f;\n  }\n\n  & .Link {\n    color: #113f67;\n    font-size: 18px;\n    text-decoration: none;\n  }\n\n  & .Link:hover {\n    color: #142d4c;\n    text-decoration: underline;\n  }\n\n  & .Link.active {\n    color: #ec729c;\n  }\n\n  & .Link.active:hover {\n    text-decoration: none;\n    cursor: default;\n  }\n\n  & .FirstLink {\n    margin-bottom: 15px;\n  }\n\n  & .Genres {\n    display: flex;\n    gap: 15px;\n  }\n\n  & button {\n    margin-bottom: 20px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 15px;\n    padding-right: 15px;\n    color: #113f67;\n    border: 1px solid #113f67;\n    border-radius: 5px;\n  }\n\n  & button:hover {\n    scale: 1.05;\n  }\n"]))),p=t(8644),f=t(184),x=function(n){var e,t,r,a,A=n.movieDetails,i=A.poster_path,s=A.title,c=A.releaseYear,d=A.voteAverage,x=A.overview,v=A.genres,m=(0,o.TH)(),g=(0,o.s0)(),h=null!==(e=null===(t=m.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";return(0,f.jsxs)(u,{children:[(0,f.jsx)("button",{onClick:function(){g(null!==h&&void 0!==h?h:"/")},type:"button",children:"\ud83d\udc48 Go back"}),(0,f.jsxs)("div",{className:"MainInfoContainer",children:[(0,f.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w300".concat(i):p,alt:s}),(0,f.jsxs)("div",{className:"InfoContainer",children:[(0,f.jsxs)("h1",{children:[s," (",c,")"]}),(0,f.jsxs)("p",{children:["User Score: ",d,"%"]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:x}),(0,f.jsx)("h2",{children:"Genres"}),(0,f.jsx)("p",{className:"Genres",children:v.map((function(n){var e=n.id,t=n.name;return(0,f.jsx)("span",{children:t},e)}))})]})]}),(0,f.jsxs)("div",{className:"AdditionalInfoContainer",children:[(0,f.jsx)("h3",{children:"Addditional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{className:"FirstLink",children:(0,f.jsx)(l.OL,{state:{from:null===(r=m.state)||void 0===r?void 0:r.from},to:"cast",className:"Link",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(l.OL,{state:{from:null===(a=m.state)||void 0===a?void 0:a.from},to:"reviews",className:"Link",children:"Reviews"})})]}),(0,f.jsx)(o.j3,{})]})]})},v=t(1313),m=t(9245),g=t(2033),h=function(){var n=(0,c.useState)({poster_path:"",title:"",releaseYear:0,voteAverage:0,overview:"",genres:[]}),e=(0,A.Z)(n,2),t=e[0],r=e[1],i=(0,c.useState)(null),l=(0,A.Z)(i,2),d=l[0],u=l[1],p=(0,c.useState)("idle"),h=(0,A.Z)(p,2),k=h[0],w=h[1],j=(0,o.UO)().movieId;return(0,c.useEffect)((function(){if(j){var n=function(){var n=(0,a.Z)(s().mark((function n(e){var t,a,A,i,c,o,l;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w("pending"),n.next=4,(0,v.VU)(e);case 4:t=n.sent,a=t.poster_path,A=t.title,i=t.release_date,c=t.vote_average,o=t.overview,l=t.genres,r({poster_path:a,title:A,releaseYear:new Date(i).getFullYear(),voteAverage:Math.round(10*c),overview:o,genres:l}),w("resolved"),n.next=20;break;case 15:n.prev=15,n.t0=n.catch(0),console.log(n.t0.message),u("\u274c".concat(n.t0.message,". Try again later, please.")),w("rejected");case 20:case"end":return n.stop()}}),n,null,[[0,15]])})));return function(e){return n.apply(this,arguments)}}();n(j)}}),[j]),(0,f.jsxs)(f.Fragment,{children:["pending"===k&&(0,f.jsx)(m.a,{}),"resolved"===k&&(0,f.jsx)(x,{movieDetails:t}),"rejected"===k&&(0,f.jsx)(g.o,{message:d})]})}},9711:function(n,e,t){n.exports=t.p+"static/media/errorImg.f340655446e287466997.jpeg"},8644:function(n){n.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=608.7b1f6468.chunk.js.map