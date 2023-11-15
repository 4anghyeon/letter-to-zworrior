import React from 'react';
import CharacterContainer from '../components/Home/CharacterContainer';
import AllLetterContainer from '../components/Home/AllLetterContainer';
import {LetterProvider} from '../context/letter-context';

const Home = () => {
  return (
    <>
      {/* 1.  Z전사 나열 */}
      <CharacterContainer />
      {/* 2. 응원 메시지 나열  */}
      <LetterProvider>
        <AllLetterContainer />
      </LetterProvider>
    </>
  );
};

export default Home;
