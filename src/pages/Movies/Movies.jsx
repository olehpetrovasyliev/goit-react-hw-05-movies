import { filterMoviesByName } from 'api/getApis';
import SearchForm from 'components/Form/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import propTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');
    filterMoviesByName(query).then(resp => setMovies(resp));
  }, [searchParams]);

  const handleSubmit = q => {
    setSearchParams({ query: q });
  };

  return (
    <div>
      <SearchForm cb={handleSubmit} />
      <MoviesList arr={movies} />
    </div>
  );
};

Movies.propTypes = {
  cb: propTypes.func,
};

export default Movies;
