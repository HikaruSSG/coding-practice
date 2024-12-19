// Write a function to rotate an array

// Solution 1: Using slice and concat
function rotateArray1(arr, k) {
  const n = arr.length;
  k = k % n;
  return arr.slice(k).concat(arr.slice(0, k));
}
// Pros: Concise and easy to read, uses built-in JavaScript methods.
// Cons: Creates new arrays, may be less performant for very large arrays.
// Recommended: This is generally the recommended approach due to its conciseness and readability.

// Solution 2: Using a for loop and push/shift
function rotateArray2(arr, k) {
    const n = arr.length;
    k = k % n;
    for (let i = 0; i < k; i++) {
        arr.push(arr.shift());
    }
    return arr;
}
// Pros: In-place rotation, avoids creating new arrays.
// Cons: Less efficient due to shift operation, modifies the original array.

// Solution 3: Using splice
function rotateArray3(arr, k) {
    const n = arr.length;
    k = k % n;
    arr.splice(0, 0, ...arr.splice(n - k, k));
    return arr;
}
// Pros: In-place rotation, avoids creating new arrays.
// Cons: Less readable, modifies the original array.

// Solution 4: Using reverse
function rotateArray4(arr, k) {
    const n = arr.length;
    k = k % n;
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    return arr;

    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
}
// Pros: In-place rotation, efficient for large arrays.
// Cons: More complex to understand than the slice and concat approach.

// Solution 5: Using a while loop and temp variable
function rotateArray5(arr, k) {
    const n = arr.length;
    k = k % n;
    let i = 0;
    while (i < k) {
        const temp = arr[0];
        let j = 0;
        while (j < n - 1) {
            arr[j] = arr[j + 1];
            j++;
        }
        arr[n - 1] = temp;
        i++;
    }
    return arr;
}
// Pros: In-place rotation, avoids creating new arrays.
// Cons: Less efficient than the reverse approach, modifies the original array.
