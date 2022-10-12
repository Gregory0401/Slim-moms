import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
// import { Main } from './Main/Main';
import { Background } from '../Background/Background';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'Redux/Auth/authSelectors';


const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? (
    <>
      <AppBar />
      <main>
        {/* <Main> */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        {/* </Main> */}
      </main>
    </>
  ) : (
    <Background>
      <AppBar />
      <main>
        {/* <Main> */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        {/* </Main> */}
      </main>
    </Background>
  );
};

export default Layout;
