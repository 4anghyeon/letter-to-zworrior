import React from 'react';
import styled from 'styled-components';

const LetterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  & span {
    font-style: italic;
  }
`;

const Envelope = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  width: 100px;
  height: 110px;
  margin: 10px;
  position: relative;

  &:hover {
    background-image: url(${props => props.hover});

    &::after {
      position: absolute;
      content: '${props => props.content}';
      top: 25%;
      left: 25%;
      width: 50%;
      height: 25%;
      font-size: 10px;
      white-space: pre-wrap;
    }
  }
`;

const Letter = ({letter}) => {
  const envelopeCloseImg = require('assets/img/envelope-close.png');
  const envelopeOpenImg = require('assets/img/envelope-open.png');
  const {content} = letter;

  let shortContent = content.length > 20 ? content.substring(0, 15).concat('\\A   ...더 보기') : content;

  return (
    <LetterContainer>
      <Envelope img={envelopeCloseImg} hover={envelopeOpenImg} content={shortContent}></Envelope>
      <span>From. {letter.from}</span>
    </LetterContainer>
  );
};

export default Letter;
