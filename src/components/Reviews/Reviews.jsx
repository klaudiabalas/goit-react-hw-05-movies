import { fetchReviewsMovies } from 'components/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviewsMovies(movieId).then(({ results }) => {
      setReviews(results);
    });
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <div key={id}>
              <ul className={css.reviews_list}>
                <li>
                  <b className={css.author}> Author: {author}</b>
                </li>
                <li className={css.content}>{content}</li>
              </ul>
            </div>
          );
        })
      ) : (
        <p>Sorry, we don`t have any review for this movie 🤷🏼‍♂️</p>
      )}
    </>
  );
};

export default MovieReviews;
