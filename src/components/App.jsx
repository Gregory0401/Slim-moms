// import { ButtonMain } from './Buttons/ButtonMain/ButtonMain';
// import { DiaryAddProductForm } from './Forms/DiaryAddProductForm/DiaryAddProductForm';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from 'Routes/PrivateRoute';
import RestrictedRoute from 'Routes/RestrictedRoute';
import Layout from './Layout';
import HomePage from 'Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';

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
          <Route
            path="/daily"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<div>daily page</div>}
              />
            }
          />
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
