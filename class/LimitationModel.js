export class LimitationModel {
  createLimitationNumbers(fieldText, limit) {
    if (fieldText.includes('.') === true) {
      return fieldText + limit;
    } 
        
    if (fieldText <= limit) {
      return fieldText;
    }
  }

  createLimitationNumbersAfterPoint(x) {
    if (x.toString().includes('.')) {
      return x.toString().split('.').pop().length;
    } else {
      return 0;
    }
  }
}
