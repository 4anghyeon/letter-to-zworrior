import React, {useState} from 'react';
import CharacterContainer from '../components/Home/CharacterContainer';
import {initLetters} from '../shared/data';

const Home = () => {
  return (
    <React.Fragment>
      {/* 1.  Z전사 나열 */}
      <CharacterContainer />
      {/* 2. 응원 메시지 나열  */}
    </React.Fragment>
  );
};

export default Home;
