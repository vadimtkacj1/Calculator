import {technicalModel} from '../script.js';
import {getGenerateNumbers, getMathOperation} from '../script.js';
import {StartCalculator} from './startCalculator.js';

export class Calculator extends StartCalculator {
  constructor(field, field2, fieldText, field2Text) {
    super(field, field2, fieldText, field2Text);
    this.isFirstOperandZero = this.fieldText.innerHTML === '0';
    this.isSecondOperandZero = this.field2Text.innerHTML === '0';
  }

  createNumbers(elem) {
    let valueNumber = elem.getAttribute('data-value');
  
    getGenerateNumbers.createGenerateNumbers(this.isFirstOperandZero, this.field, valueNumber);
    getGenerateNumbers.createGenerateNumbers(this.isSecondOperandZero, this.field2, valueNumber);

    if (technicalModel.checkAfterSum === true && valueNumber != '.') {
      this.fieldText.innerHTML = valueNumber;
      this.field2Text.innerHTML = valueNumber;
      technicalModel.checkAfterSum = false;
      technicalModel.checkPoint = true;
    }
    
    if (valueNumber === '.' && technicalModel.checkPoint === true) {
      this.fieldText.innerHTML += valueNumber;
      this.field2Text.innerHTML += valueNumber;
      technicalModel.checkPoint = false;
    } 
  }

  createOperators(elem) {
    let valueOperator = elem.getAttribute('data-value');
    
    if (technicalModel.checkOperator === -1) {
      this.field2Text.innerHTML = this.fieldText.innerHTML;
      technicalModel.checkAfterSum = false;
      technicalModel.checkOperator = 0;
    }
    
    technicalModel.checkOperator += 1;
          
    if (technicalModel.checkOperator === 1) {
      technicalModel.operatorText = valueOperator;
      this.field2Text.innerHTML += `<p class="indentation_operators">${elem.innerHTML}</p>`;
      technicalModel.num1 = this.fieldText.innerHTML;
      this.fieldText.innerHTML = 0;
    } else if (technicalModel.checkOperator > 1) {
      technicalModel.num1 = getMathOperation.createMathOperation(technicalModel.num1, technicalModel.num2, technicalModel.operatorText);
      this.field2Text.innerHTML = technicalModel.num1;
      this.fieldText.innerHTML = 0;
      technicalModel.operatorText = valueOperator;
      this.field2Text.innerHTML += `<p class="indentation_operators">${technicalModel.operatorText}</p>`;
    }
      
    technicalModel.checkPoint = 0;
    technicalModel.checkSum = true; 
  }

  createClean() {
    this.fieldText.innerHTML = 0;
    technicalModel.num1 = '';
    technicalModel.num2 = 0;
    technicalModel.operatorText = '';
    technicalModel.checkSum = true;
    technicalModel.checkOperator = 0; 
    technicalModel.checkPoint = false;
    this.field2Text.innerHTML = 0;
  }

  createSum() {
    if (technicalModel.checkSum == true) {
      technicalModel.num1 = getMathOperation.createMathOperation(technicalModel.num1, technicalModel.num2, technicalModel.operatorText);
      this.field2Text.innerHTML += `<p class="indentation_equals">${technicalModel.equals}</p>`;
      technicalModel.checkAfterSum = true;
      technicalModel.checkSum = false;
    } 
    
    technicalModel.checkOperator = -1;
  }
} 
