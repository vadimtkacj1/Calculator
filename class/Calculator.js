import {elementModel} from '../script.js';
import {getDocumentConstructor} from '../callClass.js';

export class Calculator {
  createCalculator(num1, num2, operator) {
    num2 = getDocumentConstructor.searchElement(elementModel.field).innerHTML;
        
    if (operator === '+') {
      num1 = parseFloat(num1) + parseFloat(num2);
    } else if (operator === '-') {
      num1 = parseFloat(num1) - parseFloat(num2);
    } else if (operator === "×") {
      num1 = parseFloat(num1) * parseFloat(num2);
    } else if (operator === '÷') {
      num1 = parseFloat(num1) / parseFloat(num2);
    } else if (operator === '^') {
      num1 = parseFloat(num1) ** parseFloat(num2);
    } else if (operator === '√') {
      num1 = Math.pow(parseFloat(num2), 1 / parseFloat(num1));
    } else if (operator === '%') {
      num1 = parseFloat(num1) / 100;
    } else {
      return num1;
    }
        
    if (num2 != undefined) {
      return getDocumentConstructor.searchElement(elementModel.field).innerHTML = +num1.toFixed(11);
    }  
  }
}