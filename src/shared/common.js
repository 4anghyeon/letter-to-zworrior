export const MAX_LETTER_LENGTH = 200;
export const MAX_FROM_NAME_LENGTH = 20;

export class ModalOption {
  constructor(showHeader, contentElem, footerElem, styleOption) {
    this.showHeader = showHeader;
    this.contentElem = contentElem;
    this.footerElem = footerElem;
    this.styleOption = styleOption;
  }
}

export class AlertOption {
  constructor(contentElem, styleOption, type) {
    this.contentElem = contentElem;
    this.styleOption = styleOption;
    this.type = type;
  }

  static WARN = 'warn';
  static FAIL = 'fail';
  static SUCCESS = 'success';
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
