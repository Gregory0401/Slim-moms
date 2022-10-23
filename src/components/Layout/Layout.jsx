import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Background } from '../Background/Background';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'Redux/Auth/authSelectors';
import Leaf2 from '../Background/Leaf2/Leaf2';
import { motion } from 'framer-motion';
import Footer from 'components/Footer/Footer';
import { Wrapper, ThemeWrapper } from './Layout.styled';
// import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '..//../Utils/theme';
import Switcher from 'components/Buttons/ThemeToggleButtom/switch';
import GlobalStyle from 'GlobalStyles';
import { useTheme } from 'components/Buttons/ThemeToggleButtom/useThemeHooks';

const Layout = () => {
  // const [theme, setTheme] = useState('light');
  // const isDarkTheme = theme === 'dark';

  // const themeToggle = () => {
  //   setTheme(isDarkTheme ? 'light' : 'dark');
  // };

  const [theme, themeToggler] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <ThemeProvider theme={themeMode}>
      <ThemeWrapper>
        <Switcher theme={theme} themeToggler={themeToggler} />
      </ThemeWrapper>

      {isLoggedIn ? (
        <>
          <motion.div
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.7, delay: 0 }}
          >
            <AppBar />
            <Leaf2 />
            <main>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </main>
          </motion.div>
        </>
      ) : (
        <Background>
          <Wrapper>
            <AppBar />
            <main>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </main>
            <Footer />
          </Wrapper>
        </Background>
      )}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Layout;
