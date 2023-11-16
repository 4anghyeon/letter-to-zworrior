import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CharacterCard = ({character}) => {
  const {id, name} = character;
  const image = require(`assets/img/베지터.png`);

  return (
    <Card name={name}>
      <Link to={`/detail/${id}`}>
        <Img $img={image}></Img>
      </Link>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 10px 0 0;
  border: 1px solid #f03e3e;

  border-radius: 10px;
  overflow: hidden;
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({$img}) => $img});
  background-position-x: center;
  background-size: cover;
  transition: ease-in-out 0.5s;
  &:hover {
    transform: scale(1.3) translateY(20%);
  }
`;

export default CharacterCard;
