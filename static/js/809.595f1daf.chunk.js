"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[809],{370:function(e,t,n){n.d(t,{r2:function(){return i},FH:function(){return r},jg:function(){return g},HU:function(){return o},Eu:function(){return s},jr:function(){return c},Rz:function(){return u}});var r="https://api.themoviedb.org/3/movie/",a="6380ba142025380893178538a290f18b",i="https://image.tmdb.org/t/p/original",c="/credits?api_key=".concat(a,"&language=en-US"),o="?api_key=".concat(a,"&language=en-US"),u="/reviews?api_key=".concat(a,"&language=en-US&page=1"),s="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a),g="https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=en-US&page=1&include_adult=false&query=")},809:function(e,t,n){n.r(t);var r=n(439),a=n(243),i=n(370),c=n(791),o=n(689),u=n(87),s=n(184);t.default=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],g=t[1],f=(0,o.TH)();return(0,c.useEffect)((function(){try{a.Z.get("".concat(i.Eu)).then((function(e){return g(e.data.results)}))}catch(e){console.error()}}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Now in trading...."}),(0,s.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.title;return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"/movies/".concat(t),state:{from:f},children:n})},t)}))})]})}}}]);
//# sourceMappingURL=809.595f1daf.chunk.js.map