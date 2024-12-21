function findMedianSortedArrays1(arr1, arr2) {
  const merged = [...arr1, ...arr2].sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
}
function findMedianSortedArrays2(arr1, arr2) {
    const m = arr1.length;
    const n = arr2.length;
    if (m > n) {
        return findMedianSortedArrays2(arr2, arr1);
    }
    let low = 0;
    let high = m;
    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;
        const maxX = partitionX === 0 ? -Infinity : arr1[partitionX - 1];
        const minX = partitionX === m ? Infinity : arr1[partitionX];
        const maxY = partitionY === 0 ? -Infinity : arr2[partitionY - 1];
        const minY = partitionY === n ? Infinity : arr2[partitionY];
        if (maxX <= minY && maxY <= minX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
}
function findMedianSortedArrays3(arr1, arr2) {
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
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}
function findMedianSortedArrays4(arr1, arr2) {
    const merged = [];
    let i = 0;
    let j = 0;
    for (; i < arr1.length || j < arr2.length;) {
        if (j >= arr2.length || (i < arr1.length && arr1[i] <= arr2[j])) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}
function findMedianSortedArrays5(arr1, arr2) {
    let i = 0;
    let j = 0;
    const merged = [...arr1, ...arr2].reduce((merged, _, index) => {
        if (j >= arr2.length || (i < arr1.length && arr1[i] <= arr2[j])) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
        return merged;
    }, []);
    const mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}
export { findMedianSortedArrays1, findMedianSortedArrays2, findMedianSortedArrays3, findMedianSortedArrays4, findMedianSortedArrays5 };
