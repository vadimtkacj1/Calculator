import {Event} from './class/Event.js';
import {getDocumentConstructor} from './callClass.js';
import {elementModel} from './script.js';

const elementModel = {
    field: '.field',
    field2: '.field-2',
    clean: '.clean',
    sum: '.sum',
    numbers: '.numbers',
    operators: '.operators',
  }


const getEvent = new Event([getDocumentConstructor.searchElement(elementModel.clean), getDocumentConstructor.searchElement(elementModel.sum), getDocumentConstructor.searchElements(elementModel.numbers), getDocumentConstructor.searchElements(elementModel.operators)]);

getEvent.click();
