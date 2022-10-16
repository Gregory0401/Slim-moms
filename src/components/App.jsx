import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PrivateRoute from 'Routes/PrivateRoute';
import RestrictedRoute from 'Routes/RestrictedRoute';
import Layout from './Layout';
import { fetchCurrentUser } from 'Redux/Auth/authOperation';
import DiaryDateСalendar from './Forms/DiaryDateСalendar';
import {GlobalStyles} from '../components/DarkTheme/GlobalStyles'
import { lightTheme, darkTheme } from '../components/DarkTheme/Theme'
import { ThemeProvider } from 'styled-components';
import {useDarkMode} from '../components/DarkTheme/useDarkMode'

const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'));
const DailyPage = lazy(() => import('../Pages/DailyPage/DailyPage'));
const CalculatorPage = lazy(() => import('../Pages/CalculatorPage'));

// import RightSideBar from './RightSideBar/RightSideBar';
// import BurgerMenu from '../components/Modal/BurgerMenu/BurgerMenu'





export const App = () => {
  // темная тема
// const [theme, setTheme] = useState('light');
// const themeToggler = () => {
// theme === 'light' ? setTheme('dark') : setTheme('light')
// }

const [theme, themeToggler] = useDarkMode();
const themeMode = theme === 'light' ? lightTheme : darkTheme;



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles />
   
     {/* <Toggle toggleTheme={themeToggler} /> */}
      <Routes>
        <Route path="/" element={<Layout theme={theme} toggleTheme={themeToggler}/>}>
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
    </ThemeProvider>
  );
};
