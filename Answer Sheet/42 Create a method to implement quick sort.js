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
export { quickSort1, quickSort2, quickSort3, quickSort4, quickSort5, sortArray };
