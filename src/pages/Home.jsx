import React from 'react';
import CharacterContainer from '../components/Home/CharacterContainer';
import AllLetterContainer from '../components/Home/AllLetterContainer';

const Home = ({letters, setLetters, setShowModal, setModalOption, alert}) => {
  return (
    <React.Fragment>
      {/* 1.  Z전사 나열 */}
      <CharacterContainer />
      {/* 2. 응원 메시지 나열  */}
      <AllLetterContainer
        letters={letters}
        setLetters={setLetters}
        setShowModal={setShowModal}
        setModalOption={setModalOption}
        alert={alert}
      />
    </React.Fragment>
  );
};

export default Home;
