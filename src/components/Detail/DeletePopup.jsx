import React from 'react';
import styled from 'styled-components';

const DeletePopup = ({handleClickYes, handleClickNo}) => {
  return (
    <AlertContainer>
      <h1>해당 메시지를 삭제하시겠습니까?</h1>
      <div>
        <YesNoButton onClick={handleClickYes} $background={'#228be6'}>
          네
        </YesNoButton>
        <YesNoButton onClick={handleClickNo} $background={'#f03e3e'}>
          취소
        </YesNoButton>
      </div>
    </AlertContainer>
  );
};

const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    font-size: 25px;
    margin-bottom: 30px;
  }

  & div {
    display: flex;
    justify-content: space-around;
  }
`;

const YesNoButton = styled.button`
  width: 100px;
  height: 50px;
  font-size: 20px;
  border: none;
  background: ${({$background}) => $background};
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;

export default DeletePopup;
