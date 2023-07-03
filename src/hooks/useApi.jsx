import { fetchMovieDetails } from 'api/getApis';
import { useState, useEffect } from 'react';

export const useApi = apiFunc => {
  const [data, setData] = useState([]);
  useEffect(() => {
    apiFunc().then(resp => setData(resp));
  }, [apiFunc]);
  return [data, setData];
};

export const useApiByID = id => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchMovieDetails(id).then(resp => setData(resp));
  }, [id]);
  return [data, setData];
};
