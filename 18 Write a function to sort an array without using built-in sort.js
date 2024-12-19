// Write a function to sort an array without using built-in sort

// Solution 1: Bubble Sort
function bubbleSort1(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// Pros: Simple and easy to understand.
// Cons: Inefficient for large arrays, has a time complexity of O(n^2).

// Solution 2: Insertion Sort
function insertionSort2(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
// Pros: Efficient for small arrays and nearly sorted arrays.
// Cons: Inefficient for large arrays, has a time complexity of O(n^2).

// Solution 3: Selection Sort
function selectionSort3(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
// Pros: Simple and easy to understand.
// Cons: Inefficient for large arrays, has a time complexity of O(n^2).

// Solution 4: Merge Sort
function mergeSort4(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort4(left), mergeSort4(right));

    function merge(left, right) {
        let result = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
}
// Pros: Efficient for large arrays, has a time complexity of O(n log n), stable sort.
// Cons: More complex to understand than simpler sorting algorithms.
// Recommended: This is generally the recommended approach due to its efficiency and stability.

// Solution 5: Quick Sort
function quickSort5(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort5(left), pivot, ...quickSort5(right)];
}
// Pros: Efficient for large arrays, has an average time complexity of O(n log n).
// Cons: Can be less efficient in worst-case scenarios, not a stable sort.
