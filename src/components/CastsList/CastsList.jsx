import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

const CastsList = ({ arr }) => {
  return (
    <ul>
      {arr.map(cast => (
        <li key={cast.id}>
          <img
            src={`https://api.themoviedb.org/${cast.profile_path}`}
            alt={cast.name}
          />
          <h3>{cast.name}</h3>
          <p>{cast.character}</p>
        </li>
      ))}
    </ul>
  );
};

// CastsList.propTypes = propTypes;

export default CastsList;
