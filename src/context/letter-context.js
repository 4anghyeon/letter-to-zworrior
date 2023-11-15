import {createContext, useContext, useMemo, useState} from 'react';
import {initLetters, Letter} from '../shared/data';

const LetterContext = createContext(null);
const LetterActionContext = createContext(null);

export const LetterProvider = ({children}) => {
  const data = localStorage.getItem('letters');
  const letterState = useState(JSON.parse(data) || initLetters);

  const actions = useMemo(
    () => ({
      add(name, from, content) {
        letterState[1](prev => {
          let newLetters = [...prev];
          newLetters.push(new Letter(name, from, content));
          localStorage.setItem('letters', JSON.stringify(newLetters));
          return newLetters;
        });
      },
      remove(id) {
        letterState[1](prev => {
          let findIndex = prev.findIndex(v => v.id === id);
          let newLetters = [...prev];
          newLetters.splice(findIndex, 1);
          localStorage.setItem('letters', JSON.stringify(newLetters));
          return newLetters;
        });
      },
      modify(id, content) {
        letterState[1](prev => {
          let findIndex = prev.findIndex(v => v.id === id);
          let newLetter = {...prev[findIndex], ...{content: content}};
          let newLetters = [...prev];
          newLetters.splice(findIndex, 1, newLetter);
          localStorage.setItem('letters', JSON.stringify(newLetters));
          return newLetters;
        });
      },
    }),
    [],
  );

  return (
    <LetterActionContext.Provider value={actions}>
      <LetterContext.Provider value={letterState}>{children}</LetterContext.Provider>
    </LetterActionContext.Provider>
  );
};

export const useLetterState = () => {
  const value = useContext(LetterContext);
  if (value === undefined) {
    throw new Error('letter context is null');
  }
  return value;
};

export const useLetterActions = () => {
  const value = useContext(LetterActionContext);
  if (value === undefined) {
    throw new Error('letter context is null');
  }
  return value;
};
