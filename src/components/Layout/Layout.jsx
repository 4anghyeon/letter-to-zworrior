import React from 'react';
import Header from './Header';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';
import styled from 'styled-components';
import Modal from '../Common/Modal';
import Alert from '../Common/Alert';
import {ModalProvider} from '../../context/modal-context';
import {AlertProvider} from '../../context/alert-context';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background: black;
`;

const Content = styled.section`
  height: calc(100% - 100px); // 100% - (header(px) + footer(px))
`;

const Layout = () => {
  return (
    <Main>
      <AlertProvider>
        <ModalProvider>
          <Modal />
          <Alert />
          <Header />
          <Content>
            <Outlet />
          </Content>
        </ModalProvider>
      </AlertProvider>

      <Footer />
    </Main>
  );
};

export default Layout;
