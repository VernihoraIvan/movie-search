import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import TrendPage from "./pages/TrendPage";
import SearchPage from "./pages/SearchPage";
import MovieDeatails from "./components/MovieDetails";
import Cast from "./components/Cast";
import Review from "./components/Review";
import TVSeriesPage from "./pages/TVSeriesPage";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TrendPage />} />
        <Route path="/movies" element={<SearchPage />} />
        <Route path="/tv" element={<TVSeriesPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="movies/:moviesId/" element={<MovieDeatails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="tv/movies/:moviesId/" element={<MovieDeatails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
