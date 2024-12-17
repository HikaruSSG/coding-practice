// Write a method to merge two sorted arrays

// Solution 1: Using concat and sort
function mergeSortedArrays1(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

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
