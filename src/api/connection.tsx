import axios from "axios";
import {
  MovieByQueryResponse,
  MovieData,
  MovieDetailsResponse,
  MovieListResponse,
  MovieReviewResponse,
  MoviesCastResponse,
  PersonAdditionalDetailsResponse,
  PersonDetailsResponse,
  TVCastResponse,
  TVData,
  TVDetailsResponse,
  TVListResponse,
} from "@/utilities/interfaces";

const BASE_URL = "https://movie-search-backend.onrender.com";

axios.defaults.baseURL = BASE_URL;

export const fetchMovies = async (): Promise<MovieData[]> => {
  try {
    const { data } = await axios.get<MovieListResponse>("/trending/movies");
    return data.response;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchTVSeries = async (): Promise<TVData[]> => {
  try {
    const { data } = await axios.get<TVListResponse>("/trending/tv");
    return data.response;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchMovieByQuery = async (query: string, page: number) => {
  try {
    const { data } = await axios.get<MovieByQueryResponse>(
      `/search/movies?query=${query}&page=${page}`
    );
    const results = data.results;
    return results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetails = async (id: string) => {
  try {
    const { data } = await axios.get<MovieDetailsResponse>(`/movie/${id}`);
    const res = data.results;
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchTVsDetails = async (id: string) => {
  try {
    const { data } = await axios.get<TVDetailsResponse>(`/tv/${id}`);
    return data.results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchMovieCast = async (id: string) => {
  try {
    const { data } = await axios.get<MoviesCastResponse>(`movie/${id}/credits`);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTVCast = async (id: string) => {
  try {
    const { data } = await axios.get<TVCastResponse>(`tv/${id}/credits`);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPersonDetails = async (id: string) => {
  try {
    const { data } = await axios.get<PersonDetailsResponse>(
      `/person/${id}/combined_credits`
    );
    return data.results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchPersonDetailsById = async (id: string) => {
  try {
    const { data } = await axios.get<PersonAdditionalDetailsResponse>(
      `/person/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchMovieReview = async (id: string) => {
  try {
    const { data } = await axios.get<MovieReviewResponse>(
      `/movie/${id}/reviews`
    );
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFavoritesMovies = async (ids: number[]) => {
  try {
    const requests = ids.map((id) =>
      axios.get<MovieDetailsResponse>(`/movie/${id}`)
    );
    const responses = await Promise.all(requests);
    return responses.map((response) => response.data.results);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchFavoritesTVs = async (ids: number[]) => {
  try {
    const requests = ids.map((id) => axios.get<TVDetailsResponse>(`/tv/${id}`));
    const responses = await Promise.all(requests);
    return responses.map((response) => response.data.results);
  } catch (error) {
    console.log(error);
    return [];
  }
};
