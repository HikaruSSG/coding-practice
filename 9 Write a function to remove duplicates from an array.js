// Write a function to remove duplicates from an array

// Solution 1: Using Set
function removeDuplicates1(arr) {
  return [...new Set(arr)];
}

// Solution 2: Using filter
function removeDuplicates2(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

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

// Solution 4: Using reduce
function removeDuplicates4(arr) {
    return arr.reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item];
    }, []);
}

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
