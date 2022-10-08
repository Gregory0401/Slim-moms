import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />

      <main>
        <Suspense fallback={<div>lLoading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
