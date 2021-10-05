import {technicalModel} from '../script.js';
import {getDocumentConstructor, getLimitationModel} from '../script.js';
import {StartCalculator} from './startCalculator.js';

export class GenerateNumbers extends StartCalculator {
  constructor(field, field2, fieldText, field2Text) {
    super(field, field2, fieldText, field2Text);
  }

  createGenerateNumbers(isOperandZero, field, valueNumber) {
    const isNumber = valueNumber != '.';
    const isLimitNumber = this.fieldText.innerHTML === getLimitationModel.createLimitationNumbers(this.fieldText.innerHTML, 999999999);
    const isLimitPoint = getLimitationModel.createLimitationNumbersAfterPoint(this.fieldText.innerHTML) <= 9;
    const isCheckPointTrue = this.fieldText.innerHTML.includes('.') === true;
    const isCheckPointFalse = this.fieldText.innerHTML.includes('.') === false;

    if (isOperandZero && isNumber && isCheckPointFalse) {
      getDocumentConstructor.searchElement(field).innerHTML = valueNumber;
      technicalModel.checkPoint = true;
    } else if (isNumber && isLimitNumber || isNumber && isCheckPointTrue && isLimitPoint) {
      getDocumentConstructor.searchElement(field).innerHTML += valueNumber;
    } 
  }
}