import {getDocumentConstructor} from '../script.js';

export class StartCalculator {
  constructor(field, field2, valueNumber) {
    this.field = field;
    this.field2 = field2;
    this.fieldText = getDocumentConstructor.searchElement(this.field);
    this.field2Text = getDocumentConstructor.searchElement(this.field2);
    this.valueNumber = valueNumber;
  }
}