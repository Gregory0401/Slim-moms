import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from 'Routes/PrivateRoute';
import RestrictedRoute from 'Routes/RestrictedRoute';
import Layout from './Layout';
import HomePage from 'Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
// =======
import DiaryAddProductForm from './Forms/DiaryAddProductForm/DiaryAddProductForm';
// import RightSideBar from './RightSideBar/RightSideBar';
// =======

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/daily"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/daily" component={<LoginPage />} />
            }
          />
          {/*  Додав для тесту замість dailyPage*/}
          <Route
            path="/daily"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<DiaryAddProductForm />}
              />
            }
          />
          {/* Додав для тесту замість dailyPage */}
          <Route
            path="/calculator"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<div>calculator page</div>}
              />
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
};
