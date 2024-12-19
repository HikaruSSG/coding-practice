// Find the largest number in an array

// Solution 1: Using Math.max()
function findLargest1(arr) {
  return Math.max(...arr);
}
// Pros: Concise and easy to read, leverages built-in JavaScript methods.
// Cons: May be less performant for very large arrays due to the spread operator and function call overhead.
// Recommended: This is generally the recommended approach due to its readability and conciseness. Performance differences are usually negligible for most use cases.

// Solution 2: Using a for loop
function findLargest2(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
// Pros: Good performance, explicit control over the iteration process.
// Cons: More verbose than the built-in method approach.

// Solution 3: Using reduce
function findLargest3(arr) {
  return arr.reduce((largest, current) => {
    return current > largest ? current : largest;
  }, arr[0]);
}
// Pros: Functional approach, concise and readable.
// Cons: May be slightly less performant than a for loop for very large arrays.

// Solution 4: Using forEach
function findLargest4(arr) {
    let largest = arr[0];
    arr.forEach(num => {
        if (num > largest) {
            largest = num;
        }
    });
    return largest;
}
// Pros: Easy to read and understand.
// Cons: Slightly more verbose than the reduce approach, not as efficient as a for loop.

// Solution 5: Using a while loop
function findLargest5(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let largest = arr[0];
    let i = 1;
    while (i < arr.length) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        i++;
    }
    return largest;
}
// Pros: Good performance, similar to the for loop approach.
// Cons: Slightly more verbose than the built-in method approach.
