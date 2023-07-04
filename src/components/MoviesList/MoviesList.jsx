import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MoviesList = ({ arr }) => {
  return (
    <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none' }}>
      {arr.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

// MoviesList.propTypes = propTypes;

export default MoviesList;
