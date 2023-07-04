import { fetchMoviesList } from 'api/getApis';
import MoviesList from 'components/MoviesList/MoviesList';
import { useApi } from 'hooks/useApi';
// import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [data] = useApi(fetchMoviesList);
  //   console.log(data);

  return <MoviesList arr={data} />;
};
