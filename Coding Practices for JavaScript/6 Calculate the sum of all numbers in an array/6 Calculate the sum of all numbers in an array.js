// Calculate the sum of all numbers in an array

// Solution 1: Using a for loop
function sumArray1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// Pros: Good performance, explicit control over the iteration process.
// Cons: More verbose than the reduce approach.

// Solution 2: Using reduce
function sumArray2(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}
// Pros: Concise and readable, functional approach.
// Cons: May be slightly less performant than a for loop for very large arrays.
// Recommended: This is generally the recommended approach due to its conciseness and functional style.

// Solution 3: Using forEach
function sumArray3(arr) {
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}
// Pros: Easy to read and understand.
// Cons: Slightly more verbose than the reduce approach, not as efficient as a for loop.

// Solution 4: Using a while loop
function sumArray4(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
// Pros: Good performance, similar to the for loop approach.
// Cons: Slightly more verbose than the reduce approach.

// Solution 5: Using recursion
function sumArray5(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray5(arr.slice(1));
}
// Pros: Elegant and concise for those familiar with recursion.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for large arrays.
