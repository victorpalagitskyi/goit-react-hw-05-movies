"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,n,t){t.r(n),t.d(n,{Reviews:function(){return s}});var r=t(439),i=t(243),o=t(370),a=t(791),c=t(689),u=t(184),s=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1],g=(0,a.useState)("idle"),h=(0,r.Z)(g,2),l=h[0],p=h[1],d=(0,c.UO)().movieId;return(0,a.useEffect)((function(){try{i.Z.get("".concat(o.FH).concat(d).concat(o.Rz)).then((function(e){s(e.data.results),p("pending")}))}catch(e){console.log("error"),p("error")}}),[]),console.log(t),"error"===l?(0,u.jsx)("p",{children:"Some thing wrong"}):"pending"===l&&0!==t.length?(0,u.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,u.jsxs)("li",{children:[(0,u.jsxs)("p",{children:["Author: ",t]}),(0,u.jsx)("p",{children:r})]},n)}))}):void 0}},370:function(e,n,t){t.d(n,{r2:function(){return o},FH:function(){return r},jg:function(){return g},HU:function(){return c},Eu:function(){return s},jr:function(){return a},Rz:function(){return u}});var r="https://api.themoviedb.org/3/movie/",i="6380ba142025380893178538a290f18b",o="https://image.tmdb.org/t/p/original",a="/credits?api_key=".concat(i,"&language=en-US"),c="?api_key=".concat(i,"&language=en-US"),u="/reviews?api_key=".concat(i,"&language=en-US&page=1"),s="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i),g="https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=")}}]);
//# sourceMappingURL=186.41fd6944.chunk.js.map