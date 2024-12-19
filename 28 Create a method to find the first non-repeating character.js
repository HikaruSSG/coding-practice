// Create a method to find the first non-repeating character

// Solution 1: Using an object literal
function findFirstNonRepeating1(str) {
  const charCounts = {};
  for (let char of str) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  for (let char of str) {
    if (charCounts[char] === 1) {
      return char;
    }
  }
  return undefined;
}
// Pros: Efficient and simple, uses an object literal to store character counts.
// Cons: None.
// Recommended: This is generally the recommended approach due to its efficiency and simplicity.

// Solution 2: Using Map
function findFirstNonRepeating2(str) {
    const charCounts = new Map();
    for (let char of str) {
        charCounts.set(char, (charCounts.get(char) || 0) + 1);
    }
    for (let char of str) {
        if (charCounts.get(char) === 1) {
            return char;
        }
    }
    return undefined;
}
// Pros: Similar to object literal, but uses a Map.
// Cons: Slightly more verbose than object literal.

// Solution 3: Using indexOf and lastIndexOf
function findFirstNonRepeating3(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return undefined;
}
// Pros: Avoids using extra space for character counts.
// Cons: Less efficient due to repeated string traversals.

// Solution 4: Using filter
function findFirstNonRepeating4(str) {
    const charCounts = {};
    for (let char of str) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    const nonRepeatingChars = str.split('').filter(char => charCounts[char] === 1);
    return nonRepeatingChars[0];
}
// Pros: Functional approach, uses filter method.
// Cons: Less efficient due to extra array creation.

// Solution 5: Using a for loop and break
function findFirstNonRepeating5(str) {
    const charCounts = {};
    for (let char of str) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCounts[char] === 1) {
            return char;
        }
    }
    return undefined;
}
// Pros: Similar to the object literal approach, uses a for loop and break.
// Cons: Slightly more verbose than the object literal approach.
