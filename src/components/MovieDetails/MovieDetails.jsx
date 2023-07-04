import React from 'react';

import { useApiByID } from 'hooks/useApi';
import { NavLink, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  let { movieId } = useParams();
  const [data] = useApiByID(movieId);

  return (
    <>
      <button>Go back</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
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
            <NavLink to={`/movies/${data.id}/cast`}>Casts</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${data.id}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />;
    </>
  );
};

export default MovieDetails;
