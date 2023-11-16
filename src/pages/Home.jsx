import React from 'react';
import CharacterContainer from '../components/Home/CharacterContainer';
import AllLetterContainer from '../components/Home/AllLetterContainer';

const Home = () => {
  return (
    <React.Fragment>
      {/* 1.  Z전사 나열 */}
      <CharacterContainer />
      {/* 2. 응원 메시지 나열  */}
      <AllLetterContainer />
    </React.Fragment>
  );
};

export default Home;
