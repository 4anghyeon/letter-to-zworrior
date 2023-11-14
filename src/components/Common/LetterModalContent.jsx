import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {MAX_LETTER_LENGTH} from '../../shared/common';

const LetterModalContent = ({content, isEdit}) => {
  const textAreaRef = useRef(null);

  useEffect(() => {
    textAreaRef?.current?.focus();
  }, [isEdit]);
  return (
    <Content>
      {!isEdit && <span>{content}</span>}
      {isEdit && (
        <textarea
          id="content"
          defaultValue={content}
          ref={textAreaRef}
          placeholder={`최대 ${MAX_LETTER_LENGTH}자 까지 가능 합니다.`}
        ></textarea>
      )}
    </Content>
  );
};

const Content = styled.article`
  padding: 30px;
  font-size: 25px;
  line-height: 50px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  font-family: 'KOTRAHOPE', serif;
  & span {
    border-bottom: 1px solid lightgrey;
  }

  & textarea {
    height: calc(100% - 2ch);
    width: 100%;
    line-height: 4ch;
    background-image: linear-gradient(transparent, transparent calc(4ch - 1px), #adb5bd 0px);
    background-color: transparent;
    background-size: 100% 4ch;
    font-size: 25px;
    border: none;
    resize: none;
    font-family: 'KOTRAHOPE', serif;
  }
`;

export default LetterModalContent;
