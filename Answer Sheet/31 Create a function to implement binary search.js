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
export { binarySearch1, binarySearch2, binarySearch3, binarySearch4, binarySearch5 };
