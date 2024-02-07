import axios from "axios";
import { MovieData, MovieListResponse } from "@/utilities/interfaces";

// axios.defaults.headers = "Access-Control-Allow-Origin";
const API_KEY = "34a3f3c9cce4f4b9cc46f3708ad7a6e9";
const BASE_URL = "https://api.themoviedb.org/3";

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
