import React from 'react';
import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';

const Card = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 10px 0 0;
  border: 1px solid red;
  overflow: hidden;
`;

const Img = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.img});
  background-position-x: center;
  background-size: cover;
  transition: ease-in-out 0.5s;
  &:hover {
    transform: scale(1.3) translateY(20%);
  }
`;

const CharacterCard = ({character}) => {
  const {id, name} = character;
  const image = require(`assets/img/${name.replace(/\s/g, '')}.png`);

  return (
    <Card name={name}>
      <Link to={`/detail/${id}`}>
        <Img img={image}></Img>
      </Link>
    </Card>
  );
};

export default CharacterCard;