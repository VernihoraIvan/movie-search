import axios from "axios";
import {
  MovieData,
  MovieListResponse,
  TVData,
  TVListResponse,
} from "@/utilities/interfaces";

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

export const fetchTVSeries = async (): Promise<TVData[]> => {
  try {
    const { data } = await axios.get<TVListResponse>("/trending/tv/day");
    console.log(data);
    return data.results;
  } catch (error) {
    window.alert(error);
    return [];
  }
};

export const fetchData = async (query: string) => {
  try {
    const { data } = await axios.get(`/search/movie?${API_KEY}query=${query}`);
    console.log(data);

    return data.results;
  } catch (error) {
    window.alert(error);
    return [];
  }
};

export const fetchMovieByQuery = async (query: string) => {
  try {
    const { data } = await axios.get(`/search/movie?query=${query}`);
    console.log(data);

    return data.results;
  } catch (error) {
    window.alert(error);
  }
};

export const fetchMovieDetails = async (id: string) => {
  try {
    const { data } = await axios.get(`/movie/${id}`);
    console.log(data);

    return data;
  } catch (error) {
    window.alert(error);
    return [];
  }
};

export const fetchMovieCast = async (id: string) => {
  try {
    const { data } = await axios.get(`movie/${id}/credits`);
    console.log(data);

    return data.cast;
  } catch (error) {
    window.alert(error);
  }
};

export const fetchMovieReview = async (id: string) => {
  try {
    const { data } = await axios.get(`/movie/${id}/reviews`);
    console.log(data.results[0]);
    return data.results[0];
  } catch (error) {
    window.alert(error);
  }
};
