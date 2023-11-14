import {createContext, useContext, useMemo, useState} from 'react';
import {AlertOption} from '../shared/common';

const AlertContext = createContext(null);
const AlertOptionContext = createContext(null);
const AlertActionContext = createContext(null);

export const AlertProvider = ({children}) => {
  const showAlertState = useState(false);
  const alertOptionState = useState(new AlertOption());

  const actions = useMemo(
    () => ({
      makeAlert(cb, option, millis) {
        setTimeout(() => {
          alertOptionState[1](option);
          showAlertState[1](true);
          if (cb) cb();

          if (millis !== Number.POSITIVE_INFINITY) {
            setTimeout(() => {
              showAlertState[1](false);
            }, millis);
          }
        });
      },
    }),
    [],
  );

  return (
    <AlertActionContext.Provider value={actions}>
      <AlertContext.Provider value={showAlertState}>
        <AlertOptionContext.Provider value={alertOptionState}>{children}</AlertOptionContext.Provider>
      </AlertContext.Provider>
    </AlertActionContext.Provider>
  );
};

export const useShowAlertState = () => {
  const value = useContext(AlertContext);
  if (value === undefined) {
    throw new Error('letter context is null');
  }
  return value;
};

export const useAlertOptionState = () => {
  const value = useContext(AlertOptionContext);
  if (value === undefined) {
    throw new Error('letter context is null');
  }
  return value;
};

export const useAlertActions = () => {
  const value = useContext(AlertActionContext);
  if (value === undefined) {
    throw new Error('letter context is null');
  }
  return value;
};
