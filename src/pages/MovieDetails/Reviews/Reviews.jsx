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
    data.map(({ author, content }) => (
      <li>
        <h3>Author: {author}</h3>
        <p>{content}</p>
      </li>
    ))
  ) : (
    <h2>No reviews yet</h2>
  );
  console.log(data.results);
  return <ul>{markup}</ul>;
};

export default Reviews;
