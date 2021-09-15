import {Calculator} from './Calculator.js';
import {elementModel} from '../script.js';

export class Event {
  constructor(documentElements) {
    this.documentElements = documentElements;
  }
    
  click() {
    document.addEventListener('click', function(event) {
      let getButton = event.target;
      const getCalculator = new Calculator(elementModel.field, elementModel.field2); 
      
      if (getButton.className === 'clean') {
        getCalculator.createClean();
      } else if (getButton.className === 'sum')  {
        getCalculator.createSum();
      } else if (getButton.className === 'operators') {
        getCalculator.createOperators(getButton);
      } else if (getButton.className === 'numbers') {
        getCalculator.createNumbers(getButton);
      }
    });
  }
}
