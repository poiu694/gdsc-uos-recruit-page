import { Route, Routes, BrowserRouter } from 'react-router-dom';

import {
  LoginPage,
  MainPage,
  GoogleFormApplicationListPage,
  GoogleFormApplicationDetailPage,
} from '../pages';

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/list' element={<GoogleFormApplicationListPage />} />
        <Route
          path='/detail/:id'
          element={<GoogleFormApplicationDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
