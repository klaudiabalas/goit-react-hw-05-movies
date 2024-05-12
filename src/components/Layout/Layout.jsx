import { Outlet } from 'react-router-dom';
import { Link } from './Layout.styled';

import { Container, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
        <Outlet />
      </Container>
    </>
  );
};
