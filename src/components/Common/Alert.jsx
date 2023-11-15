import React from 'react';
import styled from 'styled-components';
import {AlertOption} from '../../shared/common';
import {useAlertOptionState, useShowAlertState} from '../../context/alert-context';

const Alert = () => {
  const [showAlert] = useShowAlertState();
  const [alertOption] = useAlertOptionState();

  return (
    <AlertContainer $show={showAlert} style={alertOption.styleOption}>
      <MessageDiv>
        {alertOption.type === AlertOption.SUCCESS && <span>✅ </span>}
        {alertOption.type === AlertOption.WARN && <span>⚠️</span>}
        {alertOption.type === AlertOption.FAIL && <span>😢 </span>}
        {alertOption.contentElem}
      </MessageDiv>
    </AlertContainer>
  );
};

const AlertContainer = styled.section`
  display: ${({$show}) => ($show ? 'flex' : 'none')};
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

export default Alert;
