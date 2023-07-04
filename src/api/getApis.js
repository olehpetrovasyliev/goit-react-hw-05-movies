import axios from 'axios';
const API_KEY = '54f55dfa85993314f9a625429a3a68e0';

const BASE_URL = 'https://api.themoviedb.org';

const apiBase = axios.create({ baseURL: BASE_URL });

export const fetchMoviesList = async () => {
  const { data } = await apiBase.get('/3/trending/movie/day?language=en-US', {
    params: {
      api_key: API_KEY,
    },
  });
  return data.results;
};

export const fetchMovieDetails = async id => {
  const { data } = await apiBase.get(`/3/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await apiBase.get(`/3/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.results;
};

export const fetchMovieCasts = async id => {
  const { data } = await apiBase.get(`/3/movie/${id}/casts`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.cast;
};

export const filterMoviesByName = async query => {
  const { data } = await apiBase.get(`/3/search/movie?`, {
    params: {
      query,
      api_key: API_KEY,
    },
  });
  return data.results;
};
