import React from 'react';
import styled from 'styled-components';
import envelopeCloseImg from '../../assets/img/envelope-close.png';
import Modal from '../Common/Modal';
import {ModalOption} from '../../shared/common';

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

const LetterModalContent = styled.article`
  padding: 30px;
  font-size: 25px;
  line-height: 50px;
  height: 100%;
  & span {
    border-bottom: 1px solid lightgrey;
  }
`;

const LetterModalFooter = styled.footer`
  margin: 10px 20px;
  text-align: end;
  font-size: 25px;
`;

const Letter = ({letter, setShowModal, setModalOption}) => {
  const {content} = letter;
  const envelopeCloseImg = require('assets/img/envelope-close.png');

  let shortContent = content.length > 50 ? content.substring(0, 50).concat('...') : content;

  const handleClickLetter = () => {
    setShowModal(true);
    setModalOption(
      new ModalOption(
        true,
        (
          <LetterModalContent>
            <span>{content}</span>
          </LetterModalContent>
        ),
        (
          <LetterModalFooter>
            {letter.date} From. {letter.from}
          </LetterModalFooter>
        ),
        {
          background: 'lightYellow',
        },
      ),
    );
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
