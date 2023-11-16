import {initLetters, Letter} from '../../shared/data';

const data = localStorage.getItem('letters');
const initialState = JSON.parse(data) || initLetters;

// action values
const ADD = 'letters/add';
const REMOVE = 'letters/remove';
const UPDATE = 'letters/update';

// action creator
export const addLetter = (name, content, from) => {
  return {
    type: ADD,
    name: name,
    content: content,
    from: from,
  };
};

export const removeLetter = id => {
  return {
    type: REMOVE,
    id: id,
  };
};

export const updateLetter = (id, content) => {
  return {
    type: UPDATE,
    id: id,
    content: content,
  };
};

// reducer: 'state에 변화를 일으키는' 함수
// input: state와 action
const letters = (state = initialState, action) => {
  let findIndex = action.id && state.findIndex(v => v.id === action.id);
  let newLetters = [...state];

  switch (action.type) {
    case ADD:
      newLetters.push(new Letter(action.name, action.from, action.content));
      localStorage.setItem('letters', JSON.stringify(newLetters));
      return newLetters;
    case REMOVE:
      newLetters.splice(findIndex, 1);
      localStorage.setItem('letters', JSON.stringify(newLetters));
      return newLetters;
    case UPDATE:
      let newLetter = {...state[findIndex], ...{content: action.content}};
      newLetters.splice(findIndex, 1, newLetter);
      localStorage.setItem('letters', JSON.stringify(newLetters));
      return newLetters;
    default:
      return state;
  }
};

export default letters;
