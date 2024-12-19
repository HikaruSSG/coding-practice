// Write a function to convert decimal to binary

// Solution 1: Using toString(2)
function decimalToBinary1(decimal) {
  return decimal.toString(2);
}
// Pros: Concise and efficient, leverages built-in JavaScript method.
// Cons: None.
// Recommended: This is generally the recommended approach due to its conciseness and efficiency.

// Solution 2: Using a while loop
function decimalToBinary2(decimal) {
    if (decimal === 0) {
        return "0";
    }
    let binary = "";
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}
// Pros: Good performance, explicit control over the conversion process.
// Cons: More verbose than the toString(2) approach.

// Solution 3: Using recursion
function decimalToBinary3(decimal) {
    if (decimal === 0) {
        return "0";
    }
    if (decimal === 1) {
        return "1";
    }
    return decimalToBinary3(Math.floor(decimal / 2)) + (decimal % 2);
}
// Pros: Elegant and concise for those familiar with recursion.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for large numbers.

// Solution 4: Using bitwise operations
function decimalToBinary4(decimal) {
    if (decimal === 0) {
        return "0";
    }
    let binary = "";
    while (decimal > 0) {
        binary = (decimal & 1) + binary;
        decimal = decimal >> 1;
    }
    return binary;
}
// Pros: Efficient, uses bitwise operations.
// Cons: Less readable than the toString(2) approach.

// Solution 5: Using array and join
function decimalToBinary5(decimal) {
    if (decimal === 0) {
        return "0";
    }
    const binaryArray = [];
    while (decimal > 0) {
        binaryArray.unshift(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }
    return binaryArray.join('');
}
// Pros: Good performance, uses array for storing binary digits.
// Cons: More verbose than the toString(2) approach.
