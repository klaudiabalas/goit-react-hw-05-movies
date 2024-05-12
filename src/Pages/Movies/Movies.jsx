import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/SearchBar/SearchBar';
import Title from 'components/Title/Title';
import { fetchSearchMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [params, setParams] = useSearchParams('');
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const nameMovie = params.get('query') ?? '';

  const handleOnSubmit = query => {
    const changeParams = query !== '' ? { query } : {};
    setParams(changeParams);
  };

  useEffect(() => {
    if (!nameMovie) return;

    setLoader(true);
    fetchSearchMovies(nameMovie)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => setError(error))
      .finally(() => setLoader(false));
  }, [nameMovie]);

  return (
    <>
      <Title title="Search your favourite movie :) " />
      {error && <h2>{error.message}</h2>}
      <Searchbar value={nameMovie} onSearch={handleOnSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {loader && <Loader />}
    </>
  );
};

export default Movies;
