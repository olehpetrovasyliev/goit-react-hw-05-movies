import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

const CastsList = ({ arr }) => {
  return (
    <ul>
      {arr.map(cast => (
        <li key={cast.id}>
          {
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p//w200/${cast?.profile_path}`
                  : 'https://i.pravatar.cc/200'
              }
              alt={cast.name}
            />
          }
          <h3>{cast.name}</h3>
          <p>{cast.character}</p>
        </li>
      ))}
    </ul>
  );
};

// CastsList.propTypes = propTypes;

export default CastsList;
