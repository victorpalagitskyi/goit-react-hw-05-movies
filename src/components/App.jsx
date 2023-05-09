import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Trendings } from 'pages/Trending/Trending';
import { Movies } from 'pages/Movies/Movies';
import { MovieSpec } from 'pages/MovieSpec/MovieSpec';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';



export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Trendings/>} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieSpec/>}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};