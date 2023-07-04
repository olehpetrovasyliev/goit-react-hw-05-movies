import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

const ReviewsList = ({ arr }) => {
  return (
    <ul>
      {arr.map(({ id, author, content }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
      ;
    </ul>
  );
};

export default ReviewsList;
