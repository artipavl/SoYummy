import Head from '../Head';
import Footer from '../Footer';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Loader } from 'components/Loader/Loader';
import { GoToTop } from 'utils/scrollToTop';
const Layout = styled.div`
  background-color: ${props =>
    props.theme.colors.modes.white.background};
`;


export const SharedLayout = ({ children }) => {
  return (
    <Layout style={{
      minHeight: '100vh',
      maxHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Head />
      <main style={{ flexGrow: 1, zIndex: 5 }}>
        <Suspense fallback={<Loader />}>
          <Outlet />
          <GoToTop />
        </Suspense>
      </main>
      <Footer styled={{ marginTop: 'auto' }} />
    </Layout>
  );
};
