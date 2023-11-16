import {ModalOption} from '../../shared/common';

const initialState = new ModalOption();

// action values
const SHOW = 'modal/show';

// action creator
export const showModal = (content, footer, styleOption, visible) => {
  return {
    type: SHOW,
    option: new ModalOption(true, content, footer, styleOption, visible),
  };
};

// reducer: 'state에 변화를 일으키는' 함수
// input: state와 action
const modal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return {...state, ...action.option};
    default:
      return state;
  }
};

export default modal;
