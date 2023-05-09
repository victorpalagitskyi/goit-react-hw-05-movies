import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout';

 
const Trendings = lazy(() => import('../pages/Trending'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieSpec = lazy(() => import('../pages/MovieSpec'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));


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