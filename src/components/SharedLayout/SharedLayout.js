import Head from '../Head';
import Footer from '../Footer';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = ({ children }) => {
  return (
    <>
      <Head />
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
