import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Header from './Header/Header';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound';
import MovieDeatails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Review from './ReviewComp/ReviewComp';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:moviesId/" element={<MovieDeatails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
