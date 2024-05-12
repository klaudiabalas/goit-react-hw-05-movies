import { PropTypes } from "prop-types";

const Title = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

Title.PropTypes = {
    title : PropTypes.string.isRequired;
}

export default Title;