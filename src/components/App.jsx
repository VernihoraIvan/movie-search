// import { Routes, Route } from 'react-router-dom';
// import Home from 'pages/Home/Home';
// import Header from './Header/Header';
// import Movies from 'pages/Movies/Movies';
// import NotFound from 'pages/NotFound/NotFound';
// import MovieDeatails from './MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Review from './ReviewComp/ReviewComp';

import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Header = lazy(() => import('./Header/Header'));
const Cast = lazy(() => import('./Cast/Cast'));
const ReviewComp = lazy(() => import('./ReviewComp/ReviewComp'));
// const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:moviesId/" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<ReviewComp />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
