import {technicalModel} from '../script.js';
import {getDocumentConstructor, getLimitationModel} from '../script.js';
import {StartCalculator} from './startCalculator.js';

export class GenerateNumbers extends StartCalculator {
  constructor(field, field2, fieldText, field2Text) {
    super(field, field2, fieldText, field2Text);
    this.isCheckPointTrue = this.fieldText.innerHTML.includes('.') === true;
    this.isCheckPointFalse = this.fieldText.innerHTML.includes('.') === false;
    this.isLimitNumber = this.fieldText.innerHTML === getLimitationModel.createLimitationNumbers(this.fieldText.innerHTML, 999999999);
    this.isLimitPoint = getLimitationModel.createLimitationNumbersAfterPoint(this.fieldText.innerHTML) <= 9;
  }

  createGenerateNumbers(isOperandZero, field, valueNumber) {
    const isNumber = valueNumber != '.';

    if (isOperandZero && isNumber && this.isCheckPointFalse) {
      getDocumentConstructor.searchElement(field).innerHTML = valueNumber;
      technicalModel.checkPoint = true;
    } else if (isNumber && this.isLimitNumber || isNumber && this.isCheckPointTrue && this.isLimitPoint) {
      getDocumentConstructor.searchElement(field).innerHTML += valueNumber;
    } 
  }
}