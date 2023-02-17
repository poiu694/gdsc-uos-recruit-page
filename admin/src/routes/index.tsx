import { Route, Routes, BrowserRouter } from 'react-router-dom';

import {
  MainPage,
  LoginPage,
  ApplyPage,
  SendMailPage,
  ApplyDetailPage,
  ManageUserPage,
  InterviewRecordPage,
  ManageRecruitInfoPage,
  GoogleFormApplicationListPage,
  GoogleFormApplicationDetailPage,
} from '../pages';

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/apply/:id" element={<ApplyDetailPage />} />
        <Route path="/user" element={<ManageUserPage />} />
        <Route path="/recruit" element={<ManageRecruitInfoPage />} />
        <Route path="/list" element={<GoogleFormApplicationListPage />} />
        <Route path="/interview/:id" element={<InterviewRecordPage />} />
        <Route path="/email" element={<SendMailPage />} />
        <Route path="/detail/:id" element={<GoogleFormApplicationDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
