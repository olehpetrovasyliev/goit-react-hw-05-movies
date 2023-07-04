import {
  fetchMovieCasts,
  fetchMovieDetails,
  fetchMovieReviews,
  filterMoviesByName,
} from 'api/getApis';
import { useState, useEffect } from 'react';

export const useApi = apiFunc => {
  const [data, setData] = useState([]);
  useEffect(() => {
    apiFunc().then(resp => setData(resp));
  }, [apiFunc]);
  return [data, setData];
};

export const useApiByID = id => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchMovieDetails(id).then(resp => setData(resp));
  }, [id]);
  return [data, setData];
};

export const useReviewsByID = id => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchMovieReviews(id).then(resp => setData(resp));
  }, [id]);
  return [data, setData];
};

export const useCastsByID = id => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchMovieCasts(id).then(resp => setData(resp));
  }, [id]);
  return [data, setData];
};
