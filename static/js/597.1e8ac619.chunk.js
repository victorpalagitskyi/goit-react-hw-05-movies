"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[597],{597:function(e,n,t){t.r(n),t.d(n,{Cast:function(){return s}});var r=t(439),a=t(243),o=t(614),i=t(791),c=t(689),u=t(184),s=function(){var e=(0,i.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1],g=(0,i.useState)("idle"),p=(0,r.Z)(g,2),d=p[0],h=p[1],l=(0,c.UO)().movieId;return(0,i.useEffect)((function(){try{a.Z.get("".concat(o.baseUrl).concat(l).concat(o.onURLFromCast)).then((function(e){s(e.data.cast),h("pending")}))}catch(e){console.log("error"),h("error")}}),[]),"error"===d?(0,u.jsx)("p",{children:"Some thing wrong"}):"pending"===d?(0,u.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.profile_path,r=e.character,a=e.name;return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{width:100,src:"".concat(o.baseUrl).concat(t),alt:""}),(0,u.jsxs)("p",{children:["Character: ",r]}),(0,u.jsxs)("p",{children:["Name: ",a]})]},n)}))}):void 0}},614:function(e,n,t){t.r(n),t.d(n,{API_KEY:function(){return a},baseImgURL:function(){return o},baseUrl:function(){return r},onMovieItems:function(){return u},onMovieSpec:function(){return c},onTrendings:function(){return g},onURLFromCast:function(){return i},onURLfromReviews:function(){return s}});var r="https://api.themoviedb.org/3/movie/",a="6380ba142025380893178538a290f18b",o="https://image.tmdb.org/t/p/original",i="/credits?api_key=".concat(a,"&language=en-US"),c="?api_key=".concat(a,"&language=en-US"),u="https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=en-US&page=1&include_adult=false&query="),s="/reviews?api_key=".concat(a,"&language=en-US&page=1"),g="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a)}}]);
//# sourceMappingURL=597.1e8ac619.chunk.js.map