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
    console.log(error);
    return [];
  }
};

export const fetchTVSeries = async (): Promise<TVData[]> => {
  try {
    const { data } = await axios.get<TVListResponse>("/trending/tv/day");
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchData = async (query: string) => {
  try {
    const { data } = await axios.get(`/search/movie?${API_KEY}query=${query}`);
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchMovieByQuery = async (query: string, page: number) => {
  try {
    const { data } = await axios.get(
      `/search/movie?query=${query}&page=${page}`
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetails = async (id: string) => {
  try {
    const { data } = await axios.get(`/movie/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchTVsDetails = async (id: string) => {
  try {
    const { data } = await axios.get(`/tv/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchMovieCast = async (id: string) => {
  try {
    const { data } = await axios.get(`movie/${id}/credits`);
    return data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReview = async (id: string) => {
  try {
    const { data } = await axios.get(`/movie/${id}/reviews`);
    return data.results[0];
  } catch (error) {
    console.log(error);
  }
};

export const fetchFavorites = async (ids: number[]) => {
  try {
    const requests = ids.map((id) => axios.get(`/movie/${id}`));
    const responses = await Promise.all(requests);
    return responses.map((response) => response.data);
  } catch (error) {
    console.log(error);
    return [];
  }
};
