// Create a function to implement binary search

// Solution 1: Using a while loop
function binarySearch1(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
// Pros: Efficient and easy to understand, uses a while loop for iteration.
// Cons: None.
// Recommended: This is generally the recommended approach due to its efficiency and clarity.

// Solution 2: Using recursion
function binarySearch2(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch2(arr, target, mid + 1, right);
    } else {
        return binarySearch2(arr, target, left, mid - 1);
    }
}
// Pros: Elegant and concise for those familiar with recursion.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for large arrays.

// Solution 3: Using a for loop (less efficient)
function binarySearch3(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    for (; left <= right;) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
// Pros: Similar to the while loop approach, uses a for loop.
// Cons: Less common for binary search, slightly less readable.

// Solution 4: Using a while loop and bitwise shift
function binarySearch4(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = (left + right) >>> 1;
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
// Pros: Efficient, uses bitwise shift for calculating mid.
// Cons: Less readable than the while loop approach.

// Solution 5: Using a do-while loop
function binarySearch5(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    do {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    } while (left <= right);
    return -1;
}
// Pros: Similar to the while loop approach, uses a do-while loop.
// Cons: Slightly less common for binary search.
