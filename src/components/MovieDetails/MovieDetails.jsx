import React from 'react';

import { fetchMovieDetails } from 'api/getApis';
import { useApi, useApiByID, useSingleMovieApi } from 'hooks/useApi';
import { Outlet, useParams } from 'react-router-dom';

const MovieDetails = ({ id }) => {
  const [data, setData] = useApiByID(id);
  return <div>q</div>;
  <Outlet />;
};

export default MovieDetails;
