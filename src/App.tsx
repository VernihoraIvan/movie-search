import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import TrendPage from "./pages/TrendPage";
import SearchPage from "./pages/SearchPage";
import MovieDeatails from "./components/MovieDetails";
import Cast from "./components/Cast";
import Review from "./components/Review";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TrendPage />} />
        <Route path="/movies" element={<SearchPage />} />
        <Route path="movies/:moviesId/" element={<MovieDeatails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
