import React from 'react';
import styled from 'styled-components';
import LetterRow from '../Detail/LetterRow';
import {LetterProvider, useLetterState} from '../../context/letter-context';
import {useModalOptionState, useModalShowState} from '../../context/modal-context';

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

const AllLetterContainer = () => {
  const [letters] = useLetterState();
  const [showModal, setShowModal] = useModalShowState();
  const [, setModalOption] = useModalOptionState();

  return (
    <AllLetterSection>
      <LetterContainer>
        {letters.map(letter => {
          return (
            <LetterRow
              key={letter.id}
              letter={letter}
              showModal={showModal}
              setShowModal={setShowModal}
              setModalOption={setModalOption}
            />
          );
        })}
      </LetterContainer>
    </AllLetterSection>
  );
};

export default AllLetterContainer;
