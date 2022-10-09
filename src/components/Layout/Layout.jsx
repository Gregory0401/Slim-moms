import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Main } from './Main/Main';
import { Background } from '../Background/Background';

const Layout = () => {
  return (
    <Background>
      <AppBar />
      <Main>
        <Suspense fallback={<div>lLoading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Background>
  );
};

export default Layout;
