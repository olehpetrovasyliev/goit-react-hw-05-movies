import CastsList from 'components/CastsList/CastsList';
import { useCastsByID } from 'hooks/useApi';
import React from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [data] = useCastsByID(movieId);
  if (!data.length) {
    return;
  }
  const markup = data.length ? (
    <CastsList arr={data} />
  ) : (
    <h3>No info about casts!</h3>
  );

  return markup;
};

export default Cast;
