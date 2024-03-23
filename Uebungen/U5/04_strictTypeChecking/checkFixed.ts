function countCharsFixed(text?: Array<string | null>): number {
  let charCount = 0;
  for (const line of text || []) {
    charCount += line ? line.length : 0;
  }
  return charCount;
}

console.log("should return 11", countCharsFixed(["one", "two", "three", ""]));
console.log("should return 8", countCharsFixed(["one", null, "three"])); // Error: Argument of type 'null' is not assignable to parameter of type 'string'.
console.log("should return 0", countCharsFixed());