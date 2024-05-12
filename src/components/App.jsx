import { Route, Routes } from 'react-router-dom';

import { Home } from 'Pages/Home/Home';
import { Layout } from './Layout/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
