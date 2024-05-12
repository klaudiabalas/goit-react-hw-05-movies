import { PropTypes } from 'prop-types';
import css from './Title.module.css';

const Title = ({ title }) => {
  return (
    <>
      <h1 className={css.title}>{title}</h1>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
