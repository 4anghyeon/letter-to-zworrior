import React from 'react';
import styled from 'styled-components';
import {AlertOption, convertDateToDateTimeString, popup, validation} from '../../shared/common';
import LetterModalContent from '../Common/LetterModalContent';
import DetailModalFooter from './DetailModalFooter';
import DeletePopup from './DeletePopup';
import {useDispatch} from 'react-redux';
import {removeLetter, updateLetter} from '../../redux/modules/letters';
import {showModal} from '../../redux/modules/modal';
import {hideAlert} from '../../redux/modules/customAlert';

const LetterRow = ({letter}) => {
  let {content} = letter;

  const dispatch = useDispatch();
  const envelopeCloseImg = require('assets/img/envelope-close.png');

  const changeModalOption = (content, isEdit, visible) => {
    dispatch(
      showModal(
        <LetterModalContent content={content} isEdit={isEdit}></LetterModalContent>,
        <DetailModalFooter
          letter={letter}
          handleClickDelete={handleClickDelete}
          handleClickEdit={handleClickEdit}
          handleClickComplete={handleClickComplete}
          isEdit={isEdit}
        ></DetailModalFooter>,
        {
          background: '#fff9db',
        },
        visible,
      ),
    );
  };

  // 삭제 버튼을 누를 경우 동작하는 이벤트
  const handleClickDelete = () => {
    const handleClick = () => {
      dispatch(removeLetter(letter.id));
      changeModalOption(content, false, false);
      popup(<div>삭제 되었습니다.</div>, {}, AlertOption.SUCCESS, 800, null, dispatch);
    };

    popup(
      <DeletePopup handleClickYes={handleClick} handleClickNo={() => dispatch(hideAlert())} />,
      {},
      AlertOption.SUCCESS,
      Number.POSITIVE_INFINITY,
      null,
      dispatch,
    );
  };

  // 수정 버튼 누를 경우 동작하는 이벤트
  const handleClickEdit = () => {
    changeModalOption(content, true, true);
  };

  // 완료 버튼 누를 경우 동작하는 이벤트
  const handleClickComplete = () => {
    const $textarea = document.getElementById('content');

    if (!validation($textarea.value, letter.from, dispatch)) return;

    if (content === $textarea.value) {
      popup(
        <div>수정 사항이 없습니다.</div>,
        {},
        AlertOption.WARN,
        800,
        () => {
          changeModalOption($textarea.value, false, true);
        },
        dispatch,
      );

      return;
    }

    dispatch(updateLetter(letter.id, $textarea.value));
    changeModalOption($textarea.value, false, true);
    content = $textarea.value;
  };

  // 편지 Row를 클릭할 경우
  // 모달 창 OPEN, EventBinding
  const handleClickLetter = () => {
    changeModalOption(content, false, true);
  };

  return (
    <LetterContainer onClick={handleClickLetter}>
      <ProfileImg src={envelopeCloseImg} />
      <div>
        <LetterContent>{content}</LetterContent>
        <span>{convertDateToDateTimeString(letter.date)}</span>
        <span>From. {letter.from}</span>
      </div>
    </LetterContainer>
  );
};

const LetterContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  & span {
    font-style: italic;
  }
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 80%;
    color: white;
    font-weight: bold;
    overflow: hidden;
  }
  & div span {
    text-align: end;
    margin-right: 50px;
  }
  border: 1px solid white;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
`;

const ProfileImg = styled.img`
  height: 100px;
  margin-right: 4vw;
`;

const LetterContent = styled.article`
  margin-bottom: 10px;
  padding: 10px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
`;

export default LetterRow;
