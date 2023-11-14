import React from 'react';
import styled from 'styled-components';
import {AlertOption, convertDateToDateTimeString, ModalOption, validation} from '../../shared/common';
import LetterModalContent from '../Common/LetterModalContent';
import DetailModalFooter from './DetailModalFooter';
import DeletePopup from './DeletePopup';

const LetterRow = ({letter, setLetters, setShowModal, setModalOption, makeAlert}) => {
  let {content} = letter;

  const envelopeCloseImg = require('assets/img/envelope-close.png');

  // 모달에 들어가야할 옵션을 바꿔줌.. 그래야 모달 리렌더링이 일어남
  const changeModalOption = (content, isEdit) => {
    setModalOption(
      new ModalOption(
        true,
        <LetterModalContent content={content} isEdit={isEdit}></LetterModalContent>,
        (
          <DetailModalFooter
            letter={letter}
            handleClickDelete={handleClickDelete}
            handleClickEdit={handleClickEdit}
            handleClickComplete={handleClickComplete}
            isEdit={isEdit}
          ></DetailModalFooter>
        ),
        {
          background: '#fff9db',
        },
      ),
    );
  };

  // 삭제 버튼을 누를 경우 동작하는 이벤트
  const handleClickDelete = () => {
    const handleClick = () => {
      setLetters(prev => {
        let findIndex = prev.findIndex(v => v.id === letter.id);
        let newLetters = [...prev];
        newLetters.splice(findIndex, 1);
        return newLetters;
      });

      setShowModal(false);

      makeAlert(null, new AlertOption(<div>삭제 되었습니다.</div>, {}, 'success'), 800);
    };

    makeAlert(
      null,
      new AlertOption(<DeletePopup handleClickYes={handleClick} handleClickNo={() => makeAlert(null, {}, 0)} />, {}),
      Number.POSITIVE_INFINITY,
    );
  };

  // 수정 버튼 누를 경우 동작하는 이벤트
  const handleClickEdit = () => {
    changeModalOption(content, true);
  };

  // 완료 버튼 누를 경우 동작하는 이벤트
  const handleClickComplete = () => {
    const $textarea = document.getElementById('content');

    if (!validation($textarea.value, letter.from, makeAlert)) return;

    if (content === $textarea.value) {
      makeAlert(
        () => {
          changeModalOption($textarea.value, false);
        },
        new AlertOption(<div>수정 사항이 없습니다.</div>, {}, 'warn'),
        800,
      );
      return;
    }

    setLetters(prev => {
      let findIndex = prev.findIndex(v => v.id === letter.id);
      let newLetter = {...prev[findIndex], ...{content: $textarea.value}};
      let newLetters = [...prev];
      newLetters.splice(findIndex, 1, newLetter);
      return newLetters;
    });
    changeModalOption($textarea.value, false);
    content = $textarea.value;
  };

  // 편지 Row를 클릭할 경우
  // 모달 창 OPEN, EventBinding
  const handleClickLetter = () => {
    setShowModal(true);
    changeModalOption(content, false);
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
