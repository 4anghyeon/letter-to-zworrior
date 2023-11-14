import React from 'react';
import styled from 'styled-components';
import LetterRow from '../Detail/LetterRow';

const AllLetterSection = styled.section`
  display: flex;
  justify-content: center;
  height: 50%;
`;

const LetterContainer = styled.div`
  margin: 10px;
  padding: 10px;
  width: 50%;
  //border: 2px solid #f03e3e;

  border-radius: 10px;
  overflow: auto;
`;

const AllLetterContainer = ({letters, setLetters, setShowModal, setModalOption, alert}) => {
  return (
    <AllLetterSection>
      <LetterContainer>
        {letters.map(letter => {
          return (
            <LetterRow
              key={letter.id}
              letter={letter}
              setLetters={setLetters}
              setShowModal={setShowModal}
              setModalOption={setModalOption}
              alert={alert}
            />
          );
        })}
      </LetterContainer>
    </AllLetterSection>
  );
};

export default AllLetterContainer;
