// Write a method to merge two sorted arrays

// Solution 1: Using concat and sort
function mergeSortedArrays1(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}
// Pros: Concise and easy to read, uses built-in JavaScript methods.
// Cons: Less efficient due to sorting, especially for large arrays.

// Solution 2: Using a while loop and two pointers
function mergeSortedArrays2(arr1, arr2) {
    const merged = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    return merged;
}
// Pros: Efficient, avoids sorting, good performance.
// Cons: Slightly more verbose than the concat and sort approach.
// Recommended: This is generally the recommended approach due to its efficiency and clarity.

// Solution 3: Using recursion
function mergeSortedArrays3(arr1, arr2) {
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }
    if (arr1[0] < arr2[0]) {
        return [arr1[0]].concat(mergeSortedArrays3(arr1.slice(1), arr2));
    } else {
        return [arr2[0]].concat(mergeSortedArrays3(arr1, arr2.slice(1)));
    }
}
// Pros: Elegant and concise for those familiar with recursion.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for large arrays.

// Solution 4: Using a for loop and push
function mergeSortedArrays4(arr1, arr2) {
    const merged = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length || j < arr2.length) {
        if (j >= arr2.length || (i < arr1.length && arr1[i] <= arr2[j])) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    return merged;
}
// Pros: Similar to the while loop approach, uses a for loop.
// Cons: Slightly more verbose than the while loop approach.

// Solution 5: Using reduce
function mergeSortedArrays5(arr1, arr2) {
    let i = 0;
    let j = 0;
    return [...arr1, ...arr2].reduce((merged, _, index) => {
        if (j >= arr2.length || (i < arr1.length && arr1[i] <= arr2[j])) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
        return merged;
    }, []);
}
// Pros: Functional approach, uses reduce method.
// Cons: Less efficient due to extra array creation and reduce method.
