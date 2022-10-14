import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PrivateRoute from 'Routes/PrivateRoute';
import RestrictedRoute from 'Routes/RestrictedRoute';
import Layout from './Layout';
import { fetchCurrentUser } from 'Redux/Auth/authOperation';
import DiaryDateСalendar from './Forms/DiaryDateСalendar';
import { getUserId } from 'Redux/ProductSearch/productsSearchSelector';
import { selectUserId } from 'Redux/Auth/authSelectors';
import {
  userInfo,
  // eatenProduct,
  // dayInfo,
} from 'Redux/ProductSearch/productsSearchOperations';
const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'));
const DailyPage = lazy(() => import('../Pages/DailyPage/DailyPage'));
const CalculatorPage = lazy(() => import('../Pages/CalculatorPage'));

// import RightSideBar from './RightSideBar/RightSideBar';

// import BurgerMenu from '../components/Modal/BurgerMenu/BurgerMenu'

export const App = () => {
  const authUserId = useSelector(selectUserId);
  const loginUserId = useSelector(getUserId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (authUserId === loginUserId) {
      dispatch(userInfo());
      // dispatch(dayInfo());
      // dispatch(eatenProduct());
    }
  }, [authUserId, dispatch, loginUserId]);

  return (
    <>
      {/* <BurgerMenu /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo="/diary" component={<HomePage />} />
            }
          />
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
