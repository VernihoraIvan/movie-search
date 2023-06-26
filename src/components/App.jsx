import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Header from './Header/Header';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound';
import MovieDeatails from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <div>
      <Header />
      <div>im App</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="get-movie-details/:moviesId" element={<MovieDeatails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
