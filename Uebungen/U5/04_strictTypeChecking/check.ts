function countChars(text?: string[]): number {
    let charCount = 0;
    for (const line of text) { // Error: Object text is possibly 'undefined'.
      charCount += line.length; // Error: Object line is possibly 'null'.
    }
    return charCount;
  }

  console.log("should return 11", countChars(["one", "two", "three", ""]));
  console.log("should return 8", countChars(["one", null, "three"])); // Error: Argument of type 'null' is not assignable to parameter of type 'string'.
  console.log("should return 0", countChars());