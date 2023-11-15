import React from 'react';
import styled from 'styled-components';
import {warriors} from '../../shared/data';
import CharacterCard from './CharacterCard';

const CharacterContainer = () => {
  return (
    <Container>
      {warriors.map(warrior => (
        <CharacterCard key={warrior.name} character={warrior} />
      ))}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50%;
  background: black;
  padding: 10px 0 10px 10px;
  cursor: pointer;
`;

export default CharacterContainer;
