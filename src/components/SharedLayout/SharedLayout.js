import Head from '../Head';
import Footer from '../Footer';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Loader } from 'components/Loader/Loader';
const Layout = styled.div`
  background-color: ${props => props.theme.colors.modes.white.background};
`;

export const SharedLayout = ({ children }) => {
  return (
    <Layout style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Head />
      <main style={{flexGrow: 1}}>
      <Suspense fallback={<Loader/>}>
        <Outlet/>
        </Suspense>
      </main>
      <Footer styled={{marginTop: 'auto'}} />
    </Layout>
  );
};
