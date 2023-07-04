// import { fetchMovieDetails } from 'api/getApis';
import GoBackButton from 'components/Button/GoBackButton';
import { useApiByID } from 'hooks/useApi';
import React, { Suspense } from 'react';

import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [data] = useApiByID(movieId);
  const navigate = useNavigate();
  const location = useLocation();
  if (!data) {
    return;
  }
  const goBack = () => {
    navigate(location?.state?.from || -1);
    console.log(location);
  };
  return (
    <>
      <GoBackButton cb={goBack} />
      <div>
        <img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500/${data?.poster_path}`
              : 'https://placekitten.com/500/700'
          }
          alt={data.original_title}
        />
        <h1>{data.original_title}</h1>
        <p>User Score: {(data.vote_average * 10).toFixed(0)}%</p>
        <h2>Overview</h2>
        <p>{data.overview}</p>
        <h2>Genres</h2>
        <ul>
          {data.genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <p>Additional informaton</p>
        <ul>
          <li>
            <NavLink
              to={`/movies/${data.id}/cast`}
              state={{ from: location.state.from }}
            >
              Casts
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/movies/${data.id}/reviews`}
              state={{ from: location.state.from }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={'<h1>Loading</h1>'}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
