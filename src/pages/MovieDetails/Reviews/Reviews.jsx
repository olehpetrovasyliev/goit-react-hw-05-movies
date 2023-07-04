import ReviewsList from 'components/ReviewsList/ReviewsList';
import { useReviewsByID } from 'hooks/useApi';
import React from 'react';
import { useParams } from 'react-router-dom';

/**
 *
 */
const Reviews = () => {
  const { movieId } = useParams();
  const [data] = useReviewsByID(movieId);
  const markup = data.length ? (
    <ReviewsList arr={data} />
  ) : (
    <h2>No reviews yet</h2>
  );

  return <ul>{markup}</ul>;
};

export default Reviews;
