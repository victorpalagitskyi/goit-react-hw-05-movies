"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{681:function(e,n,t){t.r(n),t.d(n,{Reviews:function(){return s}});var r=t(439),o=t(243),i=t(614),a=t(791),c=t(689),u=t(184),s=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1],g=(0,a.useState)("idle"),p=(0,r.Z)(g,2),d=p[0],h=p[1],l=c.UO.movieId;return(0,a.useEffect)((function(){try{o.Z.get("".concat(i.baseUrl).concat(l).concat(i.onURLfromReviews)).then((function(e){s(e.data.results),h("pending")}))}catch(e){console.log("error"),h("error")}}),[]),"error"===d?(0,u.jsx)("p",{children:"Some thing wrong"}):"pending"===d&&0!==t.length?(0,u.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,u.jsxs)("li",{children:[(0,u.jsxs)("p",{children:["Author: ",t]}),(0,u.jsx)("p",{children:r})]},n)}))}):void 0}},614:function(e,n,t){t.r(n),t.d(n,{API_KEY:function(){return o},baseImgURL:function(){return i},baseUrl:function(){return r},onMovieItems:function(){return u},onMovieSpec:function(){return c},onTrendings:function(){return g},onURLFromCast:function(){return a},onURLfromReviews:function(){return s}});var r="https://api.themoviedb.org/3/movie/",o="6380ba142025380893178538a290f18b",i="https://image.tmdb.org/t/p/original",a="/credits?api_key=".concat(o,"&language=en-US"),c="?api_key=".concat(o,"&language=en-US"),u="https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query="),s="/reviews?api_key=".concat(o,"&language=en-US&page=1"),g="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o)}}]);
//# sourceMappingURL=681.589fe6d0.chunk.js.map