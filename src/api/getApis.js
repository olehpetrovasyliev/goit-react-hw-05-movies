import axios from 'axios';
const API_KEY = '54f55dfa85993314f9a625429a3a68e0';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGY1NWRmYTg1OTkzMzE0ZjlhNjI1NDI5YTNhNjhlMCIsInN1YiI6IjY0YTJiZWYzZTlkYTY5MDBhZTJlZjViZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UsoaECvqhiqiyoet5WzqN9jRppr9Uis6tBOU-QFjbl4';

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

export const flterMoviesByName = async query => {
  const { data } = await apiBase.get(`/3/search/keyword?`, {
    params: {
      query,
      api_key: API_KEY,
    },
  });
  return data.results;
};
