import {elementModel, technicalModel} from '../script.js';
import {getDocumentConstructor, getCalculator} from '../callClass.js';

export class Operators { 
  createOperators(elem) {
    let valueOperator = elem.getAttribute('data-value');
    const fieldText = getDocumentConstructor.searchElement(elementModel.field).innerHTML;
    
    if (technicalModel.checkOperator === -1) {
      getDocumentConstructor.searchElement(elementModel.field2).innerHTML = fieldText;
      technicalModel.checkAfterSum = false;
      technicalModel.checkOperator = 0;
    }
    
    technicalModel.checkOperator += 1;
          
    if (technicalModel.checkOperator === 1) {
      technicalModel.operatorText = valueOperator;
      getDocumentConstructor.searchElement(elementModel.field2).innerHTML += `<p class="indentation_operators">${elem.innerHTML}</p>`;
      technicalModel.num1 = fieldText;
      getDocumentConstructor.searchElement(elementModel.field).innerHTML = 0;
    } else if (technicalModel.checkOperator > 1) {
      technicalModel.num1 = getCalculator.createCalculator(technicalModel.num1, technicalModel.num2, technicalModel.operatorText);
      getDocumentConstructor.searchElement(elementModel.field2).innerHTML = technicalModel.num1;
      getDocumentConstructor.searchElement(elementModel.field).innerHTML = 0;
      technicalModel.operatorText = valueOperator;
      getDocumentConstructor.searchElement(elementModel.field2).innerHTML += `<p class="indentation_operators">${technicalModel.operatorText}</p>`;
    }
      
    technicalModel.checkPoint = 0;
    technicalModel.checkSum = true; 
  }
}