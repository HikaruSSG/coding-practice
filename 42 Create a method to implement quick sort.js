// Create a method to implement quick sort

// Solution 1: Using recursion and partitioning
function quickSort1(arr) {
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
  return [...quickSort1(left), pivot, ...quickSort1(right)];
}
// Pros: Simple and easy to understand, uses recursion.
// Cons: Not in-place, creates new arrays, less efficient for large arrays.

// Solution 2: In-place quick sort
function quickSort2(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSort2(arr, left, pivotIndex - 1);
        quickSort2(arr, pivotIndex + 1, right);
    }
    return arr;

    function partition(arr, left, right) {
        const pivot = arr[right];
        let i = left - 1;
        for (let j = left; j < right; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
        return i + 1;
    }
}
// Pros: Efficient, in-place sorting, good performance.
// Cons: Slightly more complex to understand than the first approach.
// Recommended: This is generally the recommended approach due to its efficiency and minimal space complexity.

// Solution 3: Using a while loop and recursion
function quickSort3(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const stack = [[0, arr.length - 1]];
    while (stack.length > 0) {
        const [left, right] = stack.pop();
        if (left < right) {
            const pivotIndex = partition(arr, left, right);
            stack.push([left, pivotIndex - 1]);
            stack.push([pivotIndex + 1, right]);
        }
    }
    return arr;

    function partition(arr, left, right) {
        const pivot = arr[right];
        let i = left - 1;
        for (let j = left; j < right; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
        return i + 1;
    }
}
// Pros: Iterative approach, avoids recursion.
// Cons: More complex to understand than the recursive approach, uses extra space for the stack.

// Solution 4: Using a for loop and recursion
function quickSort4(arr) {
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
    return [...quickSort4(left), pivot, ...quickSort4(right)];
}
// Pros: Similar to the first solution, uses a for loop.
// Cons: Not in-place, creates new arrays, less efficient for large arrays.

// Solution 5: Using a generator function
function* quickSort5(arr) {
    if (arr.length <= 1) {
        yield arr;
        return;
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
    yield* quickSort5(left);
    yield pivot;
    yield* quickSort5(right);
}

function sortArray(arr) {
    return Array.from(quickSort5(arr));
}
// Pros: Memory efficient for very large arrays, can be used to generate values on demand.
// Cons: More complex to understand, requires additional code to use.
