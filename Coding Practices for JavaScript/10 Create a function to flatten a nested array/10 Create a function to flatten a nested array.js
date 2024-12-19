// Create a function to flatten a nested array

// Solution 1: Using recursion
function flatten1(arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened.push(...flatten1(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}
// Pros: Easy to understand, explicit control over the flattening process.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for deeply nested arrays.

// Solution 2: Using reduce
function flatten2(arr) {
  return arr.reduce((flat, current) => {
    return flat.concat(Array.isArray(current) ? flatten2(current) : current);
  }, []);
}
// Pros: Functional approach, concise and readable.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for deeply nested arrays.

// Solution 3: Using flat() method
function flatten3(arr) {
    return arr.flat(Infinity);
}
// Pros: Concise and efficient, leverages built-in JavaScript method.
// Cons: May not be supported in older browsers.
// Recommended: This is generally the recommended approach due to its conciseness and efficiency.

// Solution 4: Using a while loop and shift
function flatten4(arr) {
    const stack = [...arr];
    const flattened = [];
    while (stack.length) {
        const current = stack.shift();
        if (Array.isArray(current)) {
            stack.unshift(...current);
        } else {
            flattened.push(current);
        }
    }
    return flattened;
}
// Pros: Iterative approach, avoids recursion.
// Cons: More verbose than the flat() method, can be less efficient.

// Solution 5: Using a for loop and splice
function flatten5(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arr.splice(i, 1, ...arr[i]);
            i--;
        }
    }
    return arr;
}
// Pros: In-place flattening, avoids creating new arrays.
// Cons: Modifies the original array, can be less efficient, more complex to understand.
