import SearchForm from 'components/Form/SearchForm';
import propTypes from 'prop-types';
import React from 'react';

const Movies = () => {
  const
  const getFilteredMovies = (q) => {

  }
  return (
    <div>
      <SearchForm cb={console.log(1)} />
    </div>
  );
};

Movies.propTypes = {
  cb: propTypes.func,
};

export default Movies;
