import Head from "../Head";
import Footer from "../Footer";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
const Layout = styled.div`
  background-color: ${props => props.theme.colors.modes.white.background};
`;

export const SharedLayout = ({ children }) => {

  return (
    <Layout>
      <Head />
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </Layout>
  );
}
