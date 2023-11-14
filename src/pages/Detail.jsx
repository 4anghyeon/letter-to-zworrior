import React, {useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Letter, warriors} from '../shared/data';
import styled from 'styled-components';
import LetterRow from '../components/Detail/LetterRow';
import {AlertOption, MAX_FROM_NAME_LENGTH, MAX_LETTER_LENGTH, ModalOption} from '../shared/common';
import LetterModalContent from '../components/Common/LetterModalContent';

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
  color: white;
`;

const LetterListContainer = styled.section`
  grid-area: main;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  overflow: auto;
  position: relative;
`;

const WriteButton = styled.button`
  position: fixed;
  width: 100px;
  height: 100px;
  font-size: 50px;
  bottom: 0;
  right: 0;
  background: rgba(211, 211, 211, 0.5);
  border: none;
  border-radius: 50px;
  margin: 0 40px 60px 0;
  cursor: pointer;
  &:hover {
    background: rgba(211, 211, 211, 0.9);
  }
`;

const ModalButtonContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
  font-size: 25px;

  & div {
    display: flex;
    align-items: center;
  }

  & button {
    border-radius: 5px;
  }

  & input {
    border: none;
    height: 30px;
    margin-left: 20px;
    background: transparent;
    border-bottom: 1px solid black;
    font-size: 20px;
  }
`;

const ModalEnrollButton = styled.button`
  font-size: 25px;
  padding: 10px;
  border: none;
  background: #37b24d;
  color: white;
  cursor: pointer;
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 50px;
  color: white;
`;

const Detail = ({letters, setLetters, setShowModal, setModalOption, alert}) => {
  const params = useParams();
  const nameRef = useRef(null);
  const fromNameRef = useRef(null);

  const {id} = params;

  const find = warriors.find(d => +d.id === +id);
  const {name, separatedName} = find;
  const image = require(`assets/img/${name.replace(/\s/g, '')}.png`);

  let timeoutIds = [];

  // 글자 하나씩 표시
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

  const onClickEnrollButton = () => {
    const $content = document.getElementById('content');
    const contentValue = $content.value;

    if (contentValue.length === 0) {
      alert(null, new AlertOption(<div>편지 내용을 입력해주세요.</div>, {}, 'fail'), 1000);
      return;
    }

    if (fromNameRef.current.value.length === 0) {
      alert(null, new AlertOption(<div>보내는 이를 입력해주세요.</div>, {}, 'fail'), 1000);
      return;
    }

    if (contentValue.length > MAX_LETTER_LENGTH) {
      alert(
        () => {
          $content.value = contentValue.substring(0, MAX_LETTER_LENGTH);
        },
        new AlertOption(<div>편지 내용은 {MAX_LETTER_LENGTH}자를 넘을 수 없습니다.</div>, {}, 'fail'),
        1000,
      );
      return;
    }

    if (fromNameRef.current.value.length > MAX_FROM_NAME_LENGTH) {
      alert(
        null,
        new AlertOption(<div>보내는 이름은 {MAX_FROM_NAME_LENGTH}자를 넘을 수 없습니다.</div>, {}, 'fail'),
        1000,
      );
      return;
    }

    let newLetters = [...letters];
    newLetters.push(new Letter(find.name, fromNameRef.current.value, contentValue));
    setLetters(newLetters);
    setShowModal(false);

    alert(
      () => {
        setTimeout(() => setModalOption(new ModalOption()));
      },
      new AlertOption(<div>등록 되었습니다.</div>, {}, 'success'),
      500,
    );
  };

  const onClickWriteButton = () => {
    setModalOption(
      new ModalOption(
        true,
        <LetterModalContent content="" isEdit={true}></LetterModalContent>,
        (
          <ModalButtonContainer>
            <ModalEnrollButton onClick={onClickEnrollButton}>등록</ModalEnrollButton>
            <div>
              <label htmlFor="fromName">From.</label>
              <input id="fromName" ref={fromNameRef} placeholder={`최대 ${MAX_FROM_NAME_LENGTH}자 까지 가능 합니다.`} />
            </div>
          </ModalButtonContainer>
        ),
        {
          background: '#fff9db',
        },
      ),
    );

    setShowModal(true);
  };

  const filtered = letters.filter(letter => letter.to === name);

  return (
    <Container>
      <Img img={image}></Img>
      <Header>
        <h1>
          <span ref={nameRef}></span>에게 응원의 메시지를 남겨보세요.
        </h1>
      </Header>
      <LetterListContainer>
        {filtered.length === 0 && (
          <EmptyContainer>
            <p>남겨진 응원 메시지가 없습니다. 🥺</p>
            <p>첫 번째 응원 메시지를 남겨주세요!</p>
          </EmptyContainer>
        )}
        {filtered.map(letter => (
          <LetterRow
            key={letter.id}
            letter={letter}
            setLetters={setLetters}
            setShowModal={setShowModal}
            setModalOption={setModalOption}
            alert={alert}
          />
        ))}
        <WriteButton onClick={onClickWriteButton}>📝</WriteButton>
      </LetterListContainer>
    </Container>
  );
};

export default Detail;
