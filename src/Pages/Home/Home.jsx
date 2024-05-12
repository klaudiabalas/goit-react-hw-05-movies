import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import Title from 'components/Title/Title';
import { fetchTrendingMovies } from 'components/api';

import { useEffect, useState } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchTrendingMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <>
      <Title title="Trending movies" />
      <MoviesList movies={movies} />
      {loader && <Loader />}
    </>
  );
};
