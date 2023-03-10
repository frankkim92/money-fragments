import Layout from 'components/layouts/Layout';
import { Login, SignUp } from 'components/auth';
import AuthForgot from 'components/auth/AuthForgot';
import { Landing } from 'components/landing';
import { MyPage } from 'pages';
import Main from 'pages/Main';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/main"
            element={
              <AuthRoute>
                <Main />
              </AuthRoute>
            }
          />
          <Route
            path="/my-page"
            element={
              <AuthRoute>
                <MyPage />
              </AuthRoute>
            }
          />
          <Route path="/Forgot" element={<AuthForgot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
