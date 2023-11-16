import {AlertOption} from '../../shared/common';

const initialState = {};

// action values
const SHOW = 'customAlert/show';
const HIDE = 'customAlert/hide';

// action creator
export const showAlert = (content, styleOption, type) => {
  return {
    type: SHOW,
    option: new AlertOption(content, styleOption, type),
  };
};

export const hideAlert = (content, styleOption, type) => {
  return {
    type: HIDE,
    option: new AlertOption(content, styleOption, type),
  };
};

// reducer: 'state에 변화를 일으키는' 함수
// input: state와 action
const customAlert = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return {...state, ...action.option, ...{visible: true}};
    case HIDE:
      return {...state, ...action.option, ...{visible: false}};
    default:
      return state;
  }
};

export default customAlert;
