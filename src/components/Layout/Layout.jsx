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
import { Wrapper } from './Layout.styled';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? (
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
  );
};

export default Layout;
