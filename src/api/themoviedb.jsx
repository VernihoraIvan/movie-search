import axios from 'axios';

const API_KEY = '34a3f3c9cce4f4b9cc46f3708ad7a6e9';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};
axios.defaults.headers = 'Access-Control-Allow-Origin';

export const fetchTrends = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day');
    return data.results;
  } catch (error) {
    window.alert('fetch trend');
  }
};

export const fetchData = async query => {
  try {
    const { data } = await axios.get(`/search/movie?${API_KEY}query=${query}`);

    return data.results;
  } catch (error) {
    window.alert(error);
    return [];
  }
};

export const fetchMovieDetails = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}`);
    return data;
  } catch (error) {
    window.alert(error);
    return [];
  }
};

export const fetchMovieImage = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}/images`);
    return data;
  } catch (error) {
    window.alert(error);
    return [];
  }
};

export const fetchMovieReview = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}/reviews`);
    return data;
  } catch (error) {
    window.alert(error);
  }
};

export const fetchMovieCast = async id => {
  try {
    const { data } = await axios.get(`movie/${id}/credits`);
    return data.cast;
  } catch (error) {
    window.alert(error);
  }
};

export const fetchMovieByQuery = async query => {
  try {
    const { data } = await axios.get(`/search/movie?query=${query}`);
    return data.results;
  } catch (error) {
    window.alert(error);
  }
};
