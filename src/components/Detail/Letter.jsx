import React from 'react';
import styled from 'styled-components';
import {AlertOption, ModalOption} from '../../shared/common';
import LetterModalContent from '../Common/LetterModalContent';

const MAX_LENGTH = 50;

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
    width: 100%;
    color: white;
    font-weight: bold;
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
  margin-right: 50px;
`;

const LetterContent = styled.article`
  margin-bottom: 10px;
  padding: 10px 10px;
`;

const LetterModalFooter = styled.footer`
  margin: 10px 20px;
  text-align: end;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalButton = styled.button`
  width: 70px;
  height: 40px;
  background: ${({background}) => background};
  border: none;
  margin-right: 10px;
  cursor: pointer;
  padding: 10px;
  color: white;
  font-size: 20px;
  border-radius: 5px;
`;

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
  background: ${({background}) => background};
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;

const DeletePopup = ({handleClickYes, handleClickNo}) => {
  return (
    <AlertContainer>
      <h1>해당 메시지를 삭제하시겠습니까?</h1>
      <div>
        <YesNoButton onClick={handleClickYes} background={'#228be6'}>
          네
        </YesNoButton>
        <YesNoButton onClick={handleClickNo} background={'#f03e3e'}>
          취소
        </YesNoButton>
      </div>
    </AlertContainer>
  );
};

const ModalFooter = ({letter, handleClickEdit, handleClickDelete, handleClickComplete, isEdit}) => {
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
          <ModalButton onClick={onClickEdit} background={'#69db7c'}>
            수정
          </ModalButton>
        ) : (
          <ModalButton onClick={onClickComplete} background={'#228be6'}>
            완료
          </ModalButton>
        )}
        {!isEdit && (
          <ModalButton onClick={handleClickDelete} background={'#f03e3e'}>
            삭제
          </ModalButton>
        )}
      </div>
      {letter.date} From. {letter.from}
    </LetterModalFooter>
  );
};

const Letter = ({letter, setLetters, setShowModal, setModalOption, setShowAlert, setAlertOption}) => {
  let {content} = letter;

  const envelopeCloseImg = require('assets/img/envelope-close.png');

  let shortContent = content.length > MAX_LENGTH ? content.substring(0, MAX_LENGTH).concat('...') : content;

  // 모달에 들어가야할 옵션을 바꿔줌.. 그래야 모달 리렌더링이 일어남
  const changeModalOption = (content, isEdit) => {
    setModalOption(
      new ModalOption(
        true,
        <LetterModalContent content={content} isEdit={isEdit}></LetterModalContent>,
        (
          <ModalFooter
            letter={letter}
            handleClickDelete={handleClickDelete}
            handleClickEdit={handleClickEdit}
            handleClickComplete={handleClickComplete}
            isEdit={isEdit}
          ></ModalFooter>
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
      setShowAlert(false);

      setTimeout(() => {
        setAlertOption(new AlertOption(<div>삭제 되었습니다.</div>, {}));
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 800);
      });
    };

    setAlertOption(
      new AlertOption(<DeletePopup handleClickYes={handleClick} handleClickNo={() => setShowAlert(false)} />, {}),
    );
    setShowAlert(true);
  };

  // 수정 버튼 누를 경우 동작하는 이벤트
  const handleClickEdit = () => {
    changeModalOption(content, true);
  };

  // 완료 버튼 누를 경우 동작하는 이벤트
  const handleClickComplete = () => {
    const $textarea = document.getElementById('content');

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
        <LetterContent>{shortContent}</LetterContent>
        <span>
          {letter.date} From. {letter.from}
        </span>
      </div>
    </LetterContainer>
  );
};

export default Letter;
