import React from 'react';
import Header from './Header';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';
import styled from 'styled-components';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background: aliceblue;
`;

const Content = styled.section`
  height: calc(100% - 100px); // 100% - (header(px) + footer(px))
`;

const Layout = () => {
  return (
    <Main>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Main>
  );
};

export default Layout;
