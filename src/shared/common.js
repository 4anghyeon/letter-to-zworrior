import {usePopup} from './hooks';

export const MAX_LETTER_LENGTH = 200;
export const MAX_FROM_NAME_LENGTH = 20;

export class ModalOption {
  constructor(showHeader, contentElem, footerElem, styleOption, visible) {
    this.showHeader = showHeader;
    this.contentElem = contentElem;
    this.footerElem = footerElem;
    this.styleOption = styleOption;
    this.visible = visible;
  }
}

export class AlertOption {
  constructor(contentElem, styleOption, type, visible) {
    this.contentElem = contentElem;
    this.styleOption = styleOption;
    this.type = type;
    this.visible = visible;
  }

  static WARN = 'warn';
  static FAIL = 'fail';
  static SUCCESS = 'success';
  static DEFAULT = 'default';
}

export const convertDateToDateTimeString = arg => {
  const date = new Date(arg);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초`;
};

// 입력값 검증
export const validation = (contentValue, fromNameValue, popup) => {
  if (contentValue.length === 0) {
    popup(<div>편지 내용을 입력해주세요.</div>, {}, AlertOption.FAIL, 1000, null);
    return false;
  }

  if (fromNameValue.length === 0) {
    popup(<div>보내는 이를 입력해주세요.</div>, {}, AlertOption.FAIL, 1000, null);
    return false;
  }

  if (contentValue.length > MAX_LETTER_LENGTH) {
    popup(<div>편지 내용은 {MAX_LETTER_LENGTH}자를 넘을 수 없습니다.</div>, {}, AlertOption.FAIL, 1000, null);
    return false;
  }

  if (fromNameValue.length > MAX_FROM_NAME_LENGTH) {
    popup(<div>보내는 이름은 {MAX_FROM_NAME_LENGTH}자를 넘을 수 없습니다.</div>, {}, AlertOption.FAIL, 1000, null);
    return false;
  }
  return true;
};
