// Implement a method to check if a string is an anagram

// Solution 1: Using sort and compare
function isAnagram1(str1, str2) {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}
// Pros: Concise and easy to understand.
// Cons: Less efficient due to sorting, especially for long strings.

// Solution 2: Using character counts
function isAnagram2(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const charCounts = {};
    for (let char of str1) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!charCounts[char]) {
            return false;
        }
        charCounts[char]--;
    }
    return true;
}
// Pros: Efficient, avoids sorting, good performance.
// Cons: Slightly more verbose than the sort approach.
// Recommended: This is generally the recommended approach due to its efficiency and clarity.

// Solution 3: Using Map
function isAnagram3(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const charMap1 = new Map();
    const charMap2 = new Map();
    for (let char of str1) {
        charMap1.set(char, (charMap1.get(char) || 0) + 1);
    }
    for (let char of str2) {
        charMap2.set(char, (charMap2.get(char) || 0) + 1);
    }
    if (charMap1.size !== charMap2.size) {
        return false;
    }
    for (let [key, value] of charMap1) {
        if (charMap2.get(key) !== value) {
            return false;
        }
    }
    return true;
}
// Pros: Similar to character counts, uses Map for character storage.
// Cons: More verbose than the character counts approach.

// Solution 4: Using filter and includes
function isAnagram4(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const arr1 = str1.split('');
    const arr2 = str2.split('');
    for (let char of arr1) {
        const index = arr2.indexOf(char);
        if (index > -1) {
            arr2.splice(index, 1);
        } else {
            return false;
        }
    }
    return arr2.length === 0;
}
// Pros: Avoids sorting and character counting.
// Cons: Less efficient due to array manipulation, more complex to understand.

// Solution 5: Using reduce
function isAnagram5(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const charCounts = str1.split('').reduce((counts, char) => {
        counts[char] = (counts[char] || 0) + 1;
        return counts;
    }, {});
    return str2.split('').every(char => {
        if (!charCounts[char]) {
            return false;
        }
        charCounts[char]--;
        return true;
    });
}
// Pros: Functional approach, uses reduce and every.
// Cons: Less efficient than the character counts approach, more complex to understand.
