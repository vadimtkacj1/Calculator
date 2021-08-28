import {elementModel, technicalModel} from '../script.js';
import {getDocumentConstructor, getCalculator} from '../callClass.js';

export class Sum {
  createSum() {
    if (technicalModel.checkSum == true) {
      technicalModel.num1 = getCalculator.createCalculator(technicalModel.num1, technicalModel.num2, technicalModel.operatorText);
      getDocumentConstructor.searchElement(elementModel.field2).innerHTML += `<p class="indentation_equals">${technicalModel.equals}</p>`;
      technicalModel.checkAfterSum = true;
      technicalModel.checkSum = false;
    } 
    
    technicalModel.checkOperator = -1;
  }
}