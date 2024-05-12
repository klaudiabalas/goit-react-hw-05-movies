import { PropTypes } from 'prop-types';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Card, Img, Li, List, Paragraph } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <Li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <Card>
                  {poster_path ? (
                    <Img
                      src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                      alt={title}
                    />
                  ) : (
                    <p size={200} />
                  )}
                  <Paragraph>{title}</Paragraph>
                </Card>
              </Link>
            </Li>
          );
        })}
      </List>
      <Outlet />
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
