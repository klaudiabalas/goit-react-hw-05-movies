import { Route, Routes } from 'react-router-dom';

import { Home } from 'Pages/Home/Home';
import Movies from 'Pages/Movies/Movies';
import { Layout } from './Layout/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
