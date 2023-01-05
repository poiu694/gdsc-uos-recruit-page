import { Route, Routes, BrowserRouter } from 'react-router-dom';

import {
  MainPage,
  LoginPage,
  ApplyPage,
  GoogleFormApplicationListPage,
  GoogleFormApplicationDetailPage,
  ManageAdminUserPage,
} from '../pages';

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/admin-user" element={<ManageAdminUserPage />} />
        <Route path="/list" element={<GoogleFormApplicationListPage />} />
        <Route
          path="/detail/:id"
          element={<GoogleFormApplicationDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
