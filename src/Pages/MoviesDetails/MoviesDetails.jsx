import { fetchDetailsMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import ButtonBack from 'components/ButtonBack/ButtonBack';
import css from './MoviesDetails.module.css';

const MoviesDetails = () => {
  const [movie, setMovie] = useState({});

  const location = useLocation;
  const buttonBackToHome = location.state?.from ?? `/`;

  const { movieId } = useParams();

  console.log(movieId);

  useEffect(() => {
    fetchDetailsMovies(movieId).then(setMovie);
  }, [movieId]);

  const { poster_path, title, genres, overview, vote_average, release_date } =
    movie;

  return (
    <>
      <ButtonBack to={buttonBackToHome} />
      <div className={css.movie_container}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
            className={css.movie_image}
          />
        </div>
        <div className={css.movie_card}>
          {title && <h2 className={css.movie_header}>{title}</h2>}
          <p className={css.paragraph}>{release_date}</p>

          <p className={css.paragraph}> User Score: {vote_average}%</p>
          <h2 className={css.movie_header}>Overview</h2>
          <p className={css.paragraph}>{overview}</p>
          <h2 className={css.movie_header}>Genres</h2>
          {genres && (
            <p className={css.paragraph}>
              {genres.map(({ name }) => name).join(', ')}
            </p>
          )}
          <div className={css.movie_add}>
            <h3 className={css.movie_header}>Additional information</h3>
            <ul className={css.movie_list}>
              <li className={css.movie_item}>
                <Link to="cast">Cast</Link>
              </li>
              <li className={css.movie_item}>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default MoviesDetails;
