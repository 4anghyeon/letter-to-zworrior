import React from 'react';
import Header from './Header';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';
import styled from 'styled-components';
import Modal from '../Common/Modal';
import Alert from '../Common/Alert';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background: black;
`;

const Content = styled.section`
  height: calc(100% - 100px); // 100% - (header(px) + footer(px))
`;

const Layout = ({showModal, setShowModal, modalOption, showAlert, alertOption}) => {
  return (
    <Main>
      <Modal showModal={showModal} setShowModal={setShowModal} modalOption={modalOption} />
      <Alert showAlert={showAlert} alertOption={alertOption} />
      <Header />
      <Content>
        <Outlet setShowModal={setShowModal} />
      </Content>
      <Footer />
    </Main>
  );
};

export default Layout;
