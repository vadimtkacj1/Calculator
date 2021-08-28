import {Numbers} from './Numbers.js';
import {Operators} from './Operators.js';
import {Clean} from './Clean.js';
import {Sum} from './Sum.js';

export class Event {
  constructor(documentElements) {
    this.documentElements = documentElements;
  }
    
  click() {
    let getClass;

    for (let documentElement of this.documentElements) {
      if (documentElement.textContent != undefined) {
        documentElement.addEventListener( "click", () => {
          if (documentElement.className === 'clean') {
            getClass = new Clean;
            getClass.createClean();
          }
          
          if (documentElement.className === 'sum')  {
            getClass = new Sum;
            getClass.createSum();
          }
        });
      } else {
        documentElement.forEach(elem => {
          elem.addEventListener( "click", () => {
            if (elem.className === 'operators') {
              getClass = new Operators();
              getClass.createOperators(elem);
            }

            if (elem.className === 'numbers') {
              getClass = new Numbers();
              getClass.createNumbers(elem);
            }
          });
        });
      }
    }
  }
}