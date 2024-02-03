import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import TrendPage from "./pages/TrendPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TrendPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
