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

export const fetchDetailsMovies = async movieID => {
  const response = await axios.get(
    `movie/${movieID}?api_key=${apiKey}&language=en-US`
  );
  return response.data;
};

export const fetchCastMovies = async movieID => {
  const response = await axios.get(
    `movie/${movieID}/credits?api_key=${apiKey}&language=en-US`
  );
  return response.data;
};

export const fetchReviewsMovies = async movieID => {
  const response = await axios.get(
    `movie/${movieID}/reviews?api_key=${apiKey}&language=en-US&page=1`
  );
  return response.data;
};