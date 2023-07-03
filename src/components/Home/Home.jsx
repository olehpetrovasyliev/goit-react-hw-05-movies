import { fetchMoviesList } from 'api/getApis';
import { useApi } from 'hooks/useApi';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [data, setData] = useApi(fetchMoviesList);
  //   console.log(data);
  const moviesMarkup = (
    <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none' }}>
      {data.map(movie => (
        <li key={movie.id}>
          <NavLink to="/movies/:movieId">{movie.title}</NavLink>
        </li>
      ))}
    </ul>
  );
  return moviesMarkup;
};
