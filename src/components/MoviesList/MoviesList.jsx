import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

const MoviesList = ({ arr }) => {
  const location = useLocation();
  return (
    <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none' }}>
      {arr.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

// MoviesList.propTypes = propTypes;

export default MoviesList;
