"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[464],{370:function(e,n,t){t.d(n,{r2:function(){return a},FH:function(){return r},jg:function(){return l},HU:function(){return o},Eu:function(){return s},jr:function(){return c},Rz:function(){return u}});var r="https://api.themoviedb.org/3/movie/",i="6380ba142025380893178538a290f18b",a="https://image.tmdb.org/t/p/original",c="/credits?api_key=".concat(i,"&language=en-US"),o="?api_key=".concat(i,"&language=en-US"),u="/reviews?api_key=".concat(i,"&language=en-US&page=1"),s="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i),l="https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=")},464:function(e,n,t){t.r(n),t.d(n,{Movies:function(){return f}});var r=t(439),i=t(243),a=t(370),c=t(791),o=t(689),u=t(87),s=t(184),l=function(e){var n=e.searchQuery,t=(0,c.useState)([]),l=(0,r.Z)(t,2),f=l[0],g=l[1],d=(0,c.useState)("idle"),h=(0,r.Z)(d,2),p=h[0],v=h[1],m=(0,o.TH)();if((0,c.useEffect)((function(){try{i.Z.get("".concat(a.jg).concat(n)).then((function(e){g(e.data.results),v("pending")}))}catch(e){console.log("error"),v("error")}}),[n]),"error"!==p)return"pending"===p?0===f.length?(0,s.jsx)("p",{children:"Sorry ........ no Movies"}):(0,s.jsx)("ul",{children:f.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"".concat(e.id),state:{from:m},children:e.title})},e.id)}))}):void 0},f=function(){var e=(0,c.useState)(""),n=(0,r.Z)(e,2),t=n[0],i=n[1],a=(0,u.lr)(),o=(0,r.Z)(a,2),f=o[0],g=o[1],d=f.get("name");(0,c.useEffect)((function(){""!==d&&i(d)}),[]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(d)},children:[(0,s.jsx)("button",{type:"submit",children:"Search movie"}),(0,s.jsx)("input",{type:"text",value:d,onChange:function(e){g({name:e.target.value})}})]}),(0,s.jsx)(c.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading......"}),children:t?(0,s.jsx)(l,{searchQuery:t}):null})]})}}}]);
//# sourceMappingURL=464.9f008e35.chunk.js.map