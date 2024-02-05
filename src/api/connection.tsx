// import axios from "axios";

// axios.defaults.headers = "Access-Control-Allow-Origin";
const API_KEY = "34a3f3c9cce4f4b9cc46f3708ad7a6e9";
const BASE_URL = "https://api.themoviedb.org/3";

import axios from "axios";

interface MovieListResponse {
  page: number;
  results: MovieData[];
  total_pages: number;
  total_results: number;
}

interface MovieData {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: "en-US",
};

export const fetchMovies = async (): Promise<MovieData[]> => {
  try {
    const { data } = await axios.get<MovieListResponse>("/trending/movie/day");
    return data.results;
  } catch (error) {
    window.alert(error);
    return [];
  }
};
