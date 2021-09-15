import {StartCalculator} from './startCalculator.js';
import {getDocumentConstructor} from '../script.js';

export class MathOperation extends StartCalculator {
  constructor(field) {
    super(field)
  }
  
  createMathOperation(num1, num2, operator) {
    num2 = getDocumentConstructor.searchElement(this.field).innerHTML;
        
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
      return getDocumentConstructor.searchElement(this.field).innerHTML = +num1.toFixed(11);
    }  
  }
}