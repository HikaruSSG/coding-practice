// Create a palindrome checker

// Solution 1: Using built-in methods
function isPalindrome1(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

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

// Solution 5: Using every
function isPalindrome5(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - 1 - i];
    });
}
