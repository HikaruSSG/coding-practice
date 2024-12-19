// Write a function to check if a number is Armstrong number

// Solution 1: Using string conversion and for loop
function isArmstrong1(num) {
  const strNum = String(num);
  const n = strNum.length;
  let sum = 0;
  for (let digit of strNum) {
    sum += Math.pow(parseInt(digit), n);
  }
  return sum === num;
}
// Pros: Simple and easy to understand.
// Cons: Less efficient due to string conversion.

// Solution 2: Using while loop and modulo
function isArmstrong2(num) {
    let sum = 0;
    let temp = num;
    const n = String(num).length;
    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, n);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}
// Pros: Efficient, avoids string conversion.
// Cons: Slightly more verbose than the string conversion approach.
// Recommended: This is generally the recommended approach due to its efficiency and clarity.

// Solution 3: Using reduce
function isArmstrong3(num) {
    const strNum = String(num);
    const n = strNum.length;
    const sum = strNum.split('').reduce((acc, digit) => {
        return acc + Math.pow(parseInt(digit), n);
    }, 0);
    return sum === num;
}
// Pros: Functional approach, concise and readable.
// Cons: Less efficient due to string conversion and reduce method.

// Solution 4: Using recursion
function isArmstrong4(num, n = String(num).length, sum = 0, temp = num) {
    if (temp === 0) {
        return sum === num;
    }
    const digit = temp % 10;
    return isArmstrong4(num, n, sum + Math.pow(digit, n), Math.floor(temp / 10));
}
// Pros: Elegant and concise for those familiar with recursion.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for large numbers.

// Solution 5: Using forEach
function isArmstrong5(num) {
    const strNum = String(num);
    const n = strNum.length;
    let sum = 0;
    strNum.split('').forEach(digit => {
        sum += Math.pow(parseInt(digit), n);
    });
    return sum === num;
}
// Pros: Easy to read and understand.
// Cons: Less efficient due to string conversion and forEach method.
