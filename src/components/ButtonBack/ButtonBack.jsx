import { FiChevronLeft } from 'react-icons/fi';
import { Button, LinkBack } from './ButtonBack.styled';

const ButtonBack = ({ to }) => {
  return (
    <LinkBack to={to}>
      <Button>
        <FiChevronLeft /> Back to Home
      </Button>
    </LinkBack>
  );
};

export default ButtonBack;
