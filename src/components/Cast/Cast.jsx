import { fetchCastMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCastMovies(movieId).then(({ cast }) => {
      setCast(cast);
    });
  }, [movieId]);

  return (
    <>
      <div className={css.container_cast}>
        {cast.length > 0 ? (
          cast.map(({ id, profile_path, character, name }) => (
            <div key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                  className={css.cast_image}
                />
              ) : (
                <p>There is no image</p>
              )}

              <p className={css.cast_paragraph}>{name}</p>

              <p className={css.cast_paragraph}>Character : {character}</p>
            </div>
          ))
        ) : (
          <p> Sorry, there isn't any info</p>
        )}
      </div>
    </>
  );
};

export default MovieCast;
