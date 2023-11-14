import React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.section`
  display: ${({show}) => (show === 'true' ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: fit-content;
  height: fit-content;
  padding: 30px;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;
  border: 1px solid white;
  z-index: 100;
  border-radius: 10px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;

  animation: show-popup 0.3s;

  @keyframes show-popup {
    0% {
      transform: scale(0.7);

      opacity: 0;
    }
    45% {
      transform: scale(1.05);

      opacity: 1;
    }
    80% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const MessageDiv = styled.div`
  display: flex;
  & span {
    margin-right: 10px;
  }
`;

const renderByType = ({type, contentElem}) => {
  switch (type) {
    case 'warn':
      return (
        <MessageDiv>
          <span>⚠️</span>️{contentElem}
        </MessageDiv>
      );
    case 'success':
      return (
        <MessageDiv>
          <span>✅ </span>
          {contentElem}
        </MessageDiv>
      );
    case 'fail':
      return (
        <MessageDiv>
          <span>😢 </span>
          {contentElem}
        </MessageDiv>
      );
    default:
      return <MessageDiv>{contentElem}</MessageDiv>;
  }
};

const Alert = ({showAlert, alertOption}) => {
  return (
    <AlertContainer show={showAlert.toString()} style={alertOption.styleOption}>
      {renderByType(alertOption)}
    </AlertContainer>
  );
};

export default Alert;
