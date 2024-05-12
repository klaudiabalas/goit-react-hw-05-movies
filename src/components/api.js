import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = 'cc5e154eef1a5f4b837eb970b7b620d1';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${apiKey}`);
  return response.data;
};

export const fetchSearchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return response.data;
};

export const fetchDetailsMovies = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${apiKey}&language=en-US`
  );
  return response.data;
};

export const fetchCastMovies = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
  );
  return response.data;
};

export const fetchReviewsMovies = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
  );
  return response.data;
};
