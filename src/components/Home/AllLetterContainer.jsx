import React from 'react';
import styled from 'styled-components';
import LetterRow from '../Detail/LetterRow';
import {useSelector} from 'react-redux';

const AllLetterContainer = () => {
  const letters = useSelector(state => state.letters);

  return (
    <AllLetterSection>
      <LetterContainer>
        {letters.map(letter => {
          return <LetterRow key={letter.id} letter={letter} />;
        })}
      </LetterContainer>
    </AllLetterSection>
  );
};

const AllLetterSection = styled.section`
  display: flex;
  justify-content: center;
  height: 50%;
`;

const LetterContainer = styled.div`
  margin: 10px;
  padding: 10px;
  width: 50%;
  border-radius: 10px;
  overflow: auto;
`;

export default AllLetterContainer;
