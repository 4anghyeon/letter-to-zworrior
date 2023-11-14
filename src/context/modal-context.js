import {createContext, useContext, useState} from 'react';

const ModalContext = createContext(null);
const ModalOptionContext = createContext(null);

export const ModalProvider = ({children}) => {
  const showModalState = useState(false);
  const modalOptionState = useState({});

  return (
    <ModalContext.Provider value={showModalState}>
      <ModalOptionContext.Provider value={modalOptionState}>{children}</ModalOptionContext.Provider>
    </ModalContext.Provider>
  );
};

export const useModalShowState = () => {
  const value = useContext(ModalContext);
  if (value === undefined) {
    throw new Error('letter context is null');
  }
  return value;
};

export const useModalOptionState = () => {
  const value = useContext(ModalOptionContext);
  if (value === undefined) {
    throw new Error('letter context is null');
  }
  return value;
};
