// Create a palindrome checker

// Solution 1: Using built-in methods
function isPalindrome1(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}
// Pros: Concise and easy to read, leverages built-in JavaScript methods. Handles non-alphanumeric characters.
// Cons: May be slightly less performant than manual methods for very large strings due to overhead of multiple method calls.
// Recommended: This is generally the recommended approach due to its readability and conciseness. It also handles non-alphanumeric characters which is often desired. Performance differences are usually negligible for most use cases.

// Solution 2: Using a for loop
function isPalindrome2(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
// Pros: Good performance, explicit control over the iteration process.
// Cons: More verbose than the built-in method approach, does not handle non-alphanumeric characters.

// Solution 3: Using recursion
function isPalindrome3(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome3(str.slice(1, -1));
}
// Pros: Elegant and concise for those familiar with recursion.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for very long strings, does not handle non-alphanumeric characters.

// Solution 4: Using two pointers
function isPalindrome4(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
// Pros: Good performance, clear and easy to understand.
// Cons: Does not handle non-alphanumeric characters.

// Solution 5: Using every
function isPalindrome5(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - 1 - i];
    });
}
// Pros: Functional approach, concise and readable.
// Cons: May be slightly less performant than a for loop for very large strings, does not handle non-alphanumeric characters.
