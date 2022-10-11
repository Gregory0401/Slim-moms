import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PrivateRoute from 'Routes/PrivateRoute';
import RestrictedRoute from 'Routes/RestrictedRoute';
import Layout from './Layout';
import { fetchCurrentUser } from 'Redux/Auth/authOperation';
import DiaryDateСalendar from './Forms/DiaryDateСalendar';
const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'));
const DailyPage = lazy(() => import('../Pages/DailyPage/DailyPage'));
const CalculatorPage = lazy(() => import('../Pages/CalculatorPage'));

// CalculatorPage;
// =======
// import DiaryAddProductForm from './Forms/DiaryAddProductForm/DiaryAddProductForm';
// import RightSideBar from './RightSideBar/RightSideBar';
// =======

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/diary"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/diary" component={<LoginPage />} />
            }
          />

          <Route
            path="/diary"
            element={
              <PrivateRoute redirectTo="/login" component={<DailyPage />} />
            }
          />
          <Route path="/diary/:calendar" element={<DiaryDateСalendar />} />
          {/* Додав для тесту замість dailyPage */}
          <Route
            path="/calculator"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<CalculatorPage />}
              />
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
};
