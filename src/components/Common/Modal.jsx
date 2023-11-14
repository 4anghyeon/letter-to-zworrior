import React from 'react';
import styled from 'styled-components';
import {ModalOption} from '../../shared/common';

const ModalShadow = styled.div`
  display: ${({$show}) => ($show === 'true' ? 'flex' : 'none')};
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 10;
  background: rgba(211, 211, 211, 0.2);
`;

const ModalContainer = styled.section`
  display: ${({$show}) => ($show === 'true' ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  width: 50vw;
  height: 75vh;
  left: 25%;
  top: 12.5%;
  border: 1px solid white;
  z-index: 100;
  border-radius: 10px;
  background: ${props => (props.style?.background ? props.style.background : 'white')};
  box-shadow:
    rgba(255, 255, 255, 1) 0px 6px 12px -2px,
    rgba(255, 255, 255, 1) 0px 3px 7px -3px;
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: end;
  & button {
    display: flex;
    align-items: center;
    margin: 10px;
    padding: 10px;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    color: red;
    border: none;
    background: orange;
    cursor: pointer;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  & button:hover {
    color: black;
  }
`;

const Modal = ({showModal, setShowModal, modalOption, setModalOption}) => {
  const hideModal = () => {
    setShowModal(false);
    setModalOption(new ModalOption());
  };

  return (
    <>
      <ModalContainer $show={showModal.toString()} style={modalOption.styleOption}>
        {modalOption.showHeader && (
          <ModalHeader>
            <button onClick={hideModal}>X</button>
          </ModalHeader>
        )}
        {modalOption.contentElem}
        {modalOption.footerElem}
      </ModalContainer>
      <ModalShadow onClick={hideModal} id="modalShadow" $show={showModal.toString()}></ModalShadow>
    </>
  );
};

export default Modal;
