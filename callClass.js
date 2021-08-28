// import {Event} from './class/Event.js';
import {Calculator} from './class/Calculator.js';
import {GenerateNumbers} from './class/GenerateNumbers.js';
import {LimitationModel} from './class/LimitationModel.js';
import {DocumentConstructor} from './class/DocumentConstructor.js';
// import {elementModel} from './script.js';

export const getCalculator = new Calculator;
export const getGenerateNumbers = new GenerateNumbers;
export const getLimitationModel = new LimitationModel;
export const getDocumentConstructor = new DocumentConstructor;
// export const getEvent = new Event([getDocumentConstructor.searchElement(elementModel.clean), getDocumentConstructor.searchElement(elementModel.sum), getDocumentConstructor.searchElements(elementModel.numbers), getDocumentConstructor.searchElements(elementModel.operators)]);
