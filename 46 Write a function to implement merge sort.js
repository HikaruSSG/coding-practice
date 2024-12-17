// Write a function to implement merge sort

// Solution 1: Using recursion
function mergeSort1(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort1(left), mergeSort1(right));

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

// Solution 2: Using a while loop and recursion
function mergeSort2(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort2(left), mergeSort2(right));

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
        while (i < left.length) {
            result.push(left[i]);
            i++;
        }
        while (j < right.length) {
            result.push(right[j]);
            j++;
        }
        return result;
    }
}

// Solution 3: Using a for loop and recursion
function mergeSort3(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort3(left), mergeSort3(right));

    function merge(left, right) {
        let result = [];
        let i = 0;
        let j = 0;
        for (; i < left.length || j < right.length;) {
            if (j >= right.length || (i < left.length && left[i] <= right[j])) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result;
    }
}

// Solution 4: Using a generator function
function* mergeSort4(arr) {
    if (arr.length <= 1) {
        yield arr;
        return;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    yield* merge(mergeSort4(left), mergeSort4(right));

    function* merge(left, right) {
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                yield left[i];
                i++;
            } else {
                yield right[j];
                j++;
            }
        }
        while (i < left.length) {
            yield left[i];
            i++;
        }
        while (j < right.length) {
            yield right[j];
            j++;
        }
    }
}

function sortArray(arr) {
    return Array.from(mergeSort4(arr));
}

// Solution 5: Using reduce
function mergeSort5(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort5(left), mergeSort5(right));

    function merge(left, right) {
        let i = 0;
        let j = 0;
        return [...left, ...right].reduce((result, _, index) => {
            if (j >= right.length || (i < left.length && left[i] <= right[j])) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
            return result;
        }, []);
    }
}
