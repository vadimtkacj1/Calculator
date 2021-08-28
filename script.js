import {Event} from './class/Event.js';
import {getDocumentConstructor} from './callClass.js';

export const elementModel = {
  field: '.field',
  field2: '.field-2',
  clean: '.clean',
  sum: '.sum',
  numbers: '.numbers',
  operators: '.operators',
}

export const technicalModel = {
  num1: '',
  num2: 0,
  operatorText: '',
  checkSum: false,
  checkOperator: 0,
  checkPoint: false,
  checkAfterSum: false,
  equals: getDocumentConstructor.searchElement(elementModel.sum).getAttribute('data-value'),
}

const getEvent = new Event([getDocumentConstructor.searchElement(elementModel.clean), getDocumentConstructor.searchElement(elementModel.sum), getDocumentConstructor.searchElements(elementModel.numbers), getDocumentConstructor.searchElements(elementModel.operators)]);

getEvent.click();
