"use strict";

class Stack {
  constructor(...initElementsArray) {
    this.elements = initElementsArray;
  }
  push(...pushElements) {
    this.elements.push(...pushElements);
    return this;
  }
  pop() {
    return [this.elements.pop(), this];
  }
  isEmpty() {
    return this.elements.length === 0;
  }
}

export { Stack };