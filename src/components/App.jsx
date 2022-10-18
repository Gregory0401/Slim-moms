import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PrivateRoute from 'Routes/PrivateRoute';
import RestrictedRoute from 'Routes/RestrictedRoute';
import Layout from './Layout';
import { fetchCurrentUser } from 'Redux/Auth/authOperation';
import { userInfo } from '../Redux/ProductSearch/productsSearchOperations';
import DiaryDateСalendar from './Forms/DiaryDateСalendar';
// const PageNotFound = lazy(() => import('../Pages/PageNotFound/PageNotFound'));
import { PageNotFound } from 'Pages/PageNotFound/PageNotFound';
import { selectAccessToken } from 'Redux/Auth/authSelectors';

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'));
const DailyPage = lazy(() => import('../Pages/DailyPage/DailyPage'));
const CalculatorPage = lazy(() => import('../Pages/CalculatorPage'));

// import RightSideBar from './RightSideBar/RightSideBar';

// import BurgerMenu from '../components/Modal/BurgerMenu/BurgerMenu'

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAccessToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser());
      dispatch(userInfo());
    }
  }, [dispatch, token]);

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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
