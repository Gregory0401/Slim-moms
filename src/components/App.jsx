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
import { selectIsLoggedIn } from 'Redux/Auth/authSelectors';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../Utils/theme';
import { useState } from 'react';
import Switcher from './Buttons/ThemeToggleButtom/switch';
import GlobalStyle from '../GlobalStyles';

const PageNotFound = lazy(() => import('../Pages/PageNotFound/PageNotFound'));
const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'));
const DailyPage = lazy(() => import('../Pages/DailyPage/DailyPage'));
const CalculatorPage = lazy(() => import('../Pages/CalculatorPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCurrentUser());
      dispatch(userInfo());
    }
  }, [dispatch, isLoggedIn]);

  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';

  const themeToggle = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  return (
    <>
      <Switcher themeToggle={themeToggle} isDarkTheme={isDarkTheme} />
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
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
                <RestrictedRoute
                  redirectTo="/diary"
                  component={<LoginPage />}
                />
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
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};
