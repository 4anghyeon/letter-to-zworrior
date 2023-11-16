import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Header = () => {
  const logoImage = require('assets/img/logo.png');

  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={logoImage} alt={'logo image'} />
      </Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: black;

  & img {
    height: 50px;
    padding-top: 5px;
  }
`;

export default Header;
