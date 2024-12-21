function findKthSmallest1(arr, k) {
  if (k <= 0 || k > arr.length) {
    return "Invalid input";
  }
  const sortedArr = [...arr].sort((a, b) => a - b);
  return sortedArr[k - 1];
}
function findKthSmallest2(arr, k) {
    if (k <= 0 || k > arr.length) {
        return "Invalid input";
    }
    const minHeap = new MinPriorityQueue();
    for (let num of arr) {
        minHeap.enqueue(num);
    }
    let kthSmallest;
    for (let i = 0; i < k; i++) {
        kthSmallest = minHeap.dequeue().element;
    }
    return kthSmallest;
}
function findKthSmallest3(arr, k) {
    if (k <= 0 || k > arr.length) {
        return "Invalid input";
    }
    const quickSelect = (arr, left, right, k) => {
        if (left === right) {
            return arr[left];
        }
        const pivotIndex = partition(arr, left, right);
        if (k === pivotIndex + 1) {
            return arr[pivotIndex];
        } else if (k < pivotIndex + 1) {
            return quickSelect(arr, left, pivotIndex - 1, k);
        } else {
            return quickSelect(arr, pivotIndex + 1, right, k);
        }
    };

    const partition = (arr, left, right) => {
        const pivot = arr[right];
        let i = left - 1;
        for (let j = left; j < right; j++) {
            if (arr[j] <= pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
        return i + 1;
    };
    return quickSelect([...arr], 0, arr.length - 1, k);
}
function findKthSmallest4(arr, k) {
    if (k <= 0 || k > arr.length) {
        return "Invalid input";
    }
    const maxHeap = new MaxPriorityQueue();
    for (let num of arr) {
        maxHeap.enqueue(num);
        if (maxHeap.size() > k) {
            maxHeap.dequeue();
        }
    }
    return maxHeap.dequeue().element;
}
function findKthSmallest5(arr, k) {
    if (k <= 0 || k > arr.length) {
        return "Invalid input";
    }
    const tempArr = [...arr];
    for (let i = 0; i < k - 1; i++) {
        let minIndex = 0;
        for (let j = 1; j < tempArr.length; j++) {
            if (tempArr[j] < tempArr[minIndex]) {
                minIndex = j;
            }
        }
        tempArr.splice(minIndex, 1);
    }
    let minIndex = 0;
    for (let j = 1; j < tempArr.length; j++) {
        if (tempArr[j] < tempArr[minIndex]) {
            minIndex = j;
        }
    }
    return tempArr[minIndex];
}
