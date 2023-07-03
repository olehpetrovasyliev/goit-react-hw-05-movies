const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';
const BASE_URL = 'https://www.themoviedb.org';

export const fetchMoviesList = async () => {
  const resp = await axios.get(`${BASE_URL}/`);
  return resp.data;
};
