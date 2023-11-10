import React, {useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {warriors} from '../shared/data';
import styled from 'styled-components';
import Letter from '../components/Detail/Letter';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    'menu header'
    'menu main';
  grid-template-rows: 0.1fr 1fr;
`;

const Img = styled.div`
  width: 30vw;
  height: 100%;
  background-image: url(${props => props.img});
  background-position-x: center;
  background-size: cover;
  grid-area: menu;
`;

const Header = styled.header`
  width: 70vw;
  height: fit-content;
  padding: 10px;
  & h1 {
    font-size: 3.5rem;
  }
  grid-area: header;
  text-align: center;
`;

const LetterListContainer = styled.section`
  grid-area: main;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  overflow: auto;
`;

const Detail = ({letters, setLetters}) => {
  const params = useParams();
  const nameRef = useRef(null);
  const {id} = params;

  const find = warriors.find(d => +d.id === +id);
  const {name, separatedName} = find;
  const image = require(`assets/img/${name.replace(/\s/g, '')}.png`);

  let timeoutIds = [];

  useEffect(() => {
    nameRef.current.innerText = '';
    (async () => {
      for (let i = 0; i < separatedName.length; i++) {
        let separated = separatedName[i];
        let name = nameRef.current?.innerText;

        for (let j = 0; j < separated.length; j++) {
          await new Promise(res => {
            let timeoutId = setTimeout(
              () => {
                nameRef.current.innerText = name + separated[j];
                res();
              },
              120 - separatedName.length * 10,
            );
            timeoutIds.push(timeoutId);
          });
        }
      }
    })();

    return () => {
      // 이름이 다 써지기 전에 페이지 이동되면 setTimeout 모두 클리어 해줘야함
      timeoutIds.forEach(tId => clearTimeout(tId));
    };
  }, []);

  console.log(letters);

  return (
    <Container>
      <Img img={image}></Img>
      <Header>
        <h1>
          <span ref={nameRef}></span>에게 응원의 메시지를 남겨보세요.
        </h1>
      </Header>
      <LetterListContainer>
        {letters
          .filter(letter => letter.to === name)
          .map(letter => (
            <Letter key={letter.id} letter={letter} />
          ))}
      </LetterListContainer>
    </Container>
  );
};

export default Detail;
