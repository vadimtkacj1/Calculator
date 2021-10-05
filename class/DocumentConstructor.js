export class DocumentConstructor {
  searchElement(elem) {
    return document.querySelector(elem);
  }

  searchElements(elem) {
    return document.querySelectorAll(elem);
  }
}