import React from 'react';
import styled from 'styled-components';

const ModalShadow = styled.div`
  display: ${props => (props.show === 'true' ? 'flex' : 'none')};
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 10;
`;

const ModalContainer = styled.section`
  display: ${props => (props.show === 'true' ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  width: 50vw;
  height: 75vh;
  left: 25%;
  top: 12.5%;
  border: 1px solid white;
  z-index: 100;
  border-radius: 10px;
  background: ${props => (props.styleOption?.background ? props.styleOption.background : 'white')};
`;

const ModalHeader = styled.header`
  text-align: end;

  & button {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    color: red;
    border: none;
    background: orange;
    cursor: pointer;
  }
`;

const Modal = ({showModal, setShowModal, modalOption}) => {
  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ModalContainer show={showModal.toString()} styleOption={modalOption.styleOption}>
        {modalOption.showHeader && (
          <ModalHeader>
            <button onClick={hideModal}>X</button>
          </ModalHeader>
        )}
        {modalOption.contentElem}
        {modalOption.footerElem}
      </ModalContainer>
      <ModalShadow onClick={hideModal} id="modalShadow" show={showModal.toString()}></ModalShadow>
    </>
  );
};

export default Modal;
