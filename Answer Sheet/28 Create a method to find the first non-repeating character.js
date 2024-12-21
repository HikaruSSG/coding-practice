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
function findFirstNonRepeating3(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return undefined;
}
function findFirstNonRepeating4(str) {
    const charCounts = {};
    for (let char of str) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    const nonRepeatingChars = str.split('').filter(char => charCounts[char] === 1);
    return nonRepeatingChars[0];
}
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
export { findFirstNonRepeating1, findFirstNonRepeating2, findFirstNonRepeating3, findFirstNonRepeating4, findFirstNonRepeating5 };
