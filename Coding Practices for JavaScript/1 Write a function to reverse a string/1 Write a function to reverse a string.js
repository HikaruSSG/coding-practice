// Write a function to reverse a string

// Solution 1: Using built-in methods
function reverseString1(str) {
  return str.split("").reverse().join("");
}
// Pros: Concise and easy to read, leverages built-in JavaScript methods.
// Cons: May be slightly less performant than manual methods for very large strings due to overhead of multiple method calls.
// Recommended: This is generally the recommended approach due to its readability and conciseness. Performance differences are usually negligible for most use cases.

// Solution 2: Using a for loop
function reverseString2(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
// Pros: Good performance, explicit control over the iteration process.
// Cons: More verbose than the built-in method approach.

// Solution 3: Using recursion
function reverseString3(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString3(str.substr(1)) + str.charAt(0);
  }
}
// Pros: Elegant and concise for those familiar with recursion.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for very long strings.

// Solution 4: Using reduce
function reverseString4(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '');
}
// Pros: Functional approach, concise and readable.
// Cons: May be slightly less performant than a for loop for very large strings.

// Solution 5: Using a while loop
function reverseString5(str) {
  let reversed = "";
  let i = str.length - 1;
  while (i >= 0) {
    reversed += str[i];
    i--;
  }
  return reversed;
}
// Pros: Good performance, similar to the for loop approach.
// Cons: Slightly more verbose than the built-in method approach.
