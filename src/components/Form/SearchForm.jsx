import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

const SearchForm = ({ cb }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setValue(target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    cb(value);
    setValue('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie name"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <Suspense fallback={<h1>Loading</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SearchForm;
