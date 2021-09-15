import {Event} from './class/Event.js';
import {MathOperation} from './class/MathOperation.js';
import {GenerateNumbers} from './class/GenerateNumbers.js';
import {LimitationModel} from './class/LimitationModel.js';
import {DocumentConstructor} from './class/DocumentConstructor.js';

export const elementModel = {
  field: '.field',
  field2: '.field-2',
  clean: '.clean',
  sum: '.sum',
  numbers: '.numbers',
  operators: '.operators',
}

export const getLimitationModel = new LimitationModel;
export const getDocumentConstructor = new DocumentConstructor;
export const getMathOperation = new MathOperation(elementModel.field, elementModel.field2);
export const getGenerateNumbers = new GenerateNumbers(elementModel.field, elementModel.field2);
const getEvent = new Event([getDocumentConstructor.searchElement(elementModel.clean), getDocumentConstructor.searchElement(elementModel.sum), getDocumentConstructor.searchElements(elementModel.numbers), getDocumentConstructor.searchElements(elementModel.operators)]);

getEvent.click();

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

