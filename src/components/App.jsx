import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Header from './Header/Header';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <div>
      <Header />
      <div>im App</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
