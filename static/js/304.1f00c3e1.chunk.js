"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{304:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(439),a=r(791),c=r(87),s="SearchBox_form__GByKm",u="SearchBox_input__+nuoc",i="SearchBox_button__lPD4d",o=r(184),l=function(){var e=(0,a.useState)(""),t=(0,n.Z)(e,2),r=t[0],l=t[1],h=(0,c.lr)(),f=(0,n.Z)(h,2),p=f[0],m=f[1];(0,a.useEffect)((function(){var e=p.get("query");l(e||"")}),[p]);return(0,o.jsx)("div",{children:(0,o.jsxs)("form",{className:s,onSubmit:function(e){e.preventDefault(),""===r.trim()?alert("Please enter a search phrase!"):(m({query:r}),l(""))},children:[(0,o.jsx)("input",{className:u,placeholder:"Search Movie",type:"text",value:r,onChange:function(e){l(e.target.value)}}),(0,o.jsx)("button",{className:i,type:"submit",children:"Search"})]})})},h=r(861),f=r(757),p=r.n(f),m=r(689),v=r(759),d=r(684),x=function(){var e=(0,h.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(d.$));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching data:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),_={},j=function(){var e=(0,a.useState)([]),t=(0,n.Z)(e,2),r=t[0],s=t[1],u=(0,c.lr)(),i=(0,n.Z)(u,1)[0].get("query"),l=(0,m.TH)(),f=(0,a.useState)(!1),v=(0,n.Z)(f,2),d=v[0],j=v[1];(0,a.useEffect)((function(){i?b(i):s([])}),[i]);var b=function(){var e=(0,h.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(t);case 3:0===(r=e.sent).length?j(!0):(j(!1),s(r)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,o.jsxs)("div",{children:[i&&(0,o.jsx)("h2",{children:"Search Results:"}),d&&i&&(0,o.jsx)("p",{children:"No matching movies in our database."}),(0,o.jsx)("ul",{className:_.list,children:r.map((function(e){return(0,o.jsx)("li",{className:_.item,children:(0,o.jsx)(c.rU,{className:_.link,to:"/movies/".concat(e.id),state:{from:l},children:e.title||e.name})},e.id)}))})]})},b=function(e){var t=e.movies;return(0,o.jsxs)("main",{children:[(0,o.jsx)(l,{}),(0,o.jsx)(j,{movies:t})]})}},684:function(e,t,r){r.d(t,{$:function(){return n}});var n="3a20228651740e727cceb64ee336276a"}}]);
//# sourceMappingURL=304.1f00c3e1.chunk.js.map