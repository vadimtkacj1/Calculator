import {elementModel, technicalModel} from '../script.js';
import {getDocumentConstructor, getLimitationModel, getGenerateNumbers} from '../callClass.js';

export class Numbers {
  createNumbers(elem) {
    let valueNumber = elem.getAttribute('data-value');
    const fieldText = getDocumentConstructor.searchElement(elementModel.field).innerHTML;
    const field2Text = getDocumentConstructor.searchElement(elementModel.field2).innerHTML;
    const isFirstOperandZero = fieldText === '0';
    const isSecondOperandZero = field2Text === '0';
    const isNumber = valueNumber != '.';
    const isLimitNumber = fieldText === getLimitationModel.createLimitationNumbers(fieldText, 999999999);
    const isLimitPoint = getLimitationModel.createLimitationNumbersAfterPoint(fieldText) <= 9;
    const isCheckPointTrue = fieldText.includes('.') === true;
    const isCheckPointFalse = fieldText.includes('.') === false;
  
    getGenerateNumbers.createGenerateNumbers(isFirstOperandZero, isNumber, isCheckPointFalse, isCheckPointTrue, elementModel.field, isLimitNumber, isLimitPoint, valueNumber);
    getGenerateNumbers.createGenerateNumbers(isSecondOperandZero, isNumber, isCheckPointFalse, isCheckPointTrue, elementModel.field2, isLimitNumber, isLimitPoint, valueNumber);

    if (technicalModel.checkAfterSum === true && valueNumber != '.') {
      getDocumentConstructor.searchElement(elementModel.field).innerHTML = valueNumber;
      getDocumentConstructor.searchElement(elementModel.field2).innerHTML = valueNumber;
      technicalModel.checkAfterSum = false;
      technicalModel.checkPoint = true;
    }

    // проверка что-бы ставить одну точку
    if (valueNumber === '.' && technicalModel.checkPoint === true) {
      getDocumentConstructor.searchElement(elementModel.field).innerHTML += valueNumber;
      getDocumentConstructor.searchElement(elementModel.field2).innerHTML += valueNumber;
      technicalModel.checkPoint = false;
    } 
  }
} 
