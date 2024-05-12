import { Route, Routes } from 'react-router-dom';

import { Home } from 'Pages/Home/Home';
import Movies from 'Pages/Movies/Movies';
import MoviesDetails from 'Pages/MoviesDetails/MoviesDetails';
import { Layout } from './Layout/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
