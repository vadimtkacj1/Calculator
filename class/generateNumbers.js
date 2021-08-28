import {technicalModel} from '../script.js';
import {getDocumentConstructor} from '../callClass.js';

export class GenerateNumbers {
  createGenerateNumbers(isOperandZero, isNumber, isCheckPointFalse, isCheckPointTrue, field, isLimitNumber, isLimitPoint, valueNumber) {
    if (isOperandZero && isNumber && isCheckPointFalse) {
      getDocumentConstructor.searchElement(field).innerHTML = valueNumber;
      technicalModel.checkPoint = true;
    } else if (isNumber && isLimitNumber || isNumber && isCheckPointTrue && isLimitPoint) {
      getDocumentConstructor.searchElement(field).innerHTML += valueNumber;
    } 
  }
}