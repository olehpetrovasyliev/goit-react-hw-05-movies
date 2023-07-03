import axios from 'axios';
const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';
const BASE_URL = 'https://api.themoviedb.org';

export const fetchMoviesList = async () => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/3/trending/movie/day?language=en-US`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    return resp.data.results;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovieDetails = async id => {
  try {
    const resp = await axios.get(`${BASE_URL}/3/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    console.log(resp);
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
