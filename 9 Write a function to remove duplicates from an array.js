// Write a function to remove duplicates from an array

// Solution 1: Using Set
function removeDuplicates1(arr) {
  return [...new Set(arr)];
}
// Pros: Concise and efficient, leverages the Set object for uniqueness.
// Cons: May not preserve the original order of elements in some cases.
// Recommended: This is generally the recommended approach due to its conciseness and efficiency.

// Solution 2: Using filter
function removeDuplicates2(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
// Pros: Preserves the original order of elements.
// Cons: Less efficient than the Set approach, especially for large arrays.

// Solution 3: Using a for loop
function removeDuplicates3(arr) {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
// Pros: Preserves the original order of elements, explicit control over the iteration process.
// Cons: More verbose and less efficient than the Set approach.

// Solution 4: Using reduce
function removeDuplicates4(arr) {
    return arr.reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item];
    }, []);
}
// Pros: Functional approach, preserves the original order of elements.
// Cons: Less efficient than the Set approach, more complex to understand.

// Solution 5: Using a Map
function removeDuplicates5(arr) {
    const uniqueMap = new Map();
    const uniqueArr = [];
    for (const item of arr) {
        if (!uniqueMap.has(item)) {
            uniqueMap.set(item, true);
            uniqueArr.push(item);
        }
    }
    return uniqueArr;
}
// Pros: Preserves the original order of elements, efficient for large arrays.
// Cons: More verbose than the Set approach.
