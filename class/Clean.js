import {elementModel, technicalModel} from '../script.js';
import {getDocumentConstructor} from '../callClass.js';

export class Clean {
  createClean() {
    getDocumentConstructor.searchElement(elementModel.field).innerHTML = 0;
    technicalModel.num1 = '';
    technicalModel.num2 = 0;
    technicalModel.operatorText = '';
    technicalModel.checkSum = true;
    technicalModel.checkOperator = 0; 
    technicalModel.checkPoint = false;
    getDocumentConstructor.searchElement(elementModel.field2).innerHTML = 0;
  }
}