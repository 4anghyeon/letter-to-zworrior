import {convertDateToDateTimeString} from '../../shared/common';
import React from 'react';
import styled from 'styled-components';

const LetterModalFooter = styled.footer`
  margin: 10px 20px;
  text-align: end;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalButton = styled.button`
  width: 70px;
  height: 40px;
  background: ${({$background}) => $background};
  border: none;
  margin-right: 10px;
  cursor: pointer;
  padding: 10px;
  color: white;
  font-size: 20px;
  border-radius: 5px;
`;

const DetailModalFooter = ({letter, handleClickEdit, handleClickDelete, handleClickComplete, isEdit}) => {
  const onClickEdit = () => {
    handleClickEdit();
  };

  const onClickComplete = () => {
    handleClickComplete();
  };

  return (
    <LetterModalFooter>
      <div>
        {!isEdit ? (
          <ModalButton onClick={onClickEdit} $background={'#69db7c'}>
            수정
          </ModalButton>
        ) : (
          <ModalButton onClick={onClickComplete} $background={'#228be6'}>
            완료
          </ModalButton>
        )}
        {!isEdit && (
          <ModalButton onClick={handleClickDelete} $background={'#f03e3e'}>
            삭제
          </ModalButton>
        )}
      </div>
      <span>{convertDateToDateTimeString(letter.date)}</span>
      <span>From. {letter.from}</span>
    </LetterModalFooter>
  );
};

export default DetailModalFooter;
