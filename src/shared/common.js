export class ModalOption {
  constructor(showHeader, contentElem, footerElem, styleOption) {
    this.showHeader = showHeader;
    this.contentElem = contentElem;
    this.footerElem = footerElem;
    this.styleOption = styleOption;
  }
}

export class AlertOption {
  constructor(contentElem, styleOption) {
    this.contentElem = contentElem;
    this.styleOption = styleOption;
  }
}
