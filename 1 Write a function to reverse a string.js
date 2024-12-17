// Write a function to reverse a string

// Solution 1: Using built-in methods
function reverseString1(str) {
  return str.split("").reverse().join("");
}

// Solution 2: Using a for loop
function reverseString2(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Solution 3: Using recursion
function reverseString3(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString3(str.substr(1)) + str.charAt(0);
  }
}

// Solution 4: Using reduce
function reverseString4(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '');
}

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
