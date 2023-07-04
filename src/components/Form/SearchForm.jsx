import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

const SearchForm = ({ cb }) => {
  return (
    <form onSubmit={cb}>
      <input type="text" placeholder="Enter movie name" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
