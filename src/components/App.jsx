import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PrivateRoute from 'Routes/PrivateRoute';
import RestrictedRoute from 'Routes/RestrictedRoute';
import Layout from './Layout';
import HomePage from 'Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import DailyPage from '../Pages/DailyPage';
import { fetchCurrentUser } from 'Redux/Auth/authOperation';
import DiaryDateСalendar from './Forms/DiaryDateСalendar';
// =======
// import DiaryAddProductForm from './Forms/DiaryAddProductForm/DiaryAddProductForm';
// import RightSideBar from './RightSideBar/RightSideBar';
// =======
// import DiaryPage from 'Pages/DiaryPage';
// import BurgerMenu from '../components/Modal/BurgerMenu/BurgerMenu'

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
    {/* <BurgerMenu /> */}
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
              <PrivateRoute redirectTo="/login" component={<DailyPage />} />
            }
          />
          <Route path="/daily/:calendar" element={<DiaryDateСalendar />} />
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
