// Implement a basic heap data structure

// Solution 1: Using an array and methods (min heap)
function createMinHeap1() {
    const heap = [];
    const getParentIndex = (i) => Math.floor((i - 1) / 2);
    const getLeftChildIndex = (i) => 2 * i + 1;
    const getRightChildIndex = (i) => 2 * i + 2;
    const hasParent = (i) => getParentIndex(i) >= 0;
    const hasLeftChild = (i) => getLeftChildIndex(i) < heap.length;
    const hasRightChild = (i) => getRightChildIndex(i) < heap.length;
    const parent = (i) => heap[getParentIndex(i)];
    const leftChild = (i) => heap[getLeftChildIndex(i)];
    const rightChild = (i) => heap[getRightChildIndex(i)];
    const swap = (i, j) => [heap[i], heap[j]] = [heap[j], heap[i]];
    const heapifyUp = () => {
        let index = heap.length - 1;
        while (hasParent(index) && parent(index) > heap[index]) {
            swap(index, getParentIndex(index));
            index = getParentIndex(index);
        }
    };
    const heapifyDown = () => {
        let index = 0;
        while (hasLeftChild(index)) {
            let smallerChildIndex = getLeftChildIndex(index);
            if (hasRightChild(index) && rightChild(index) < leftChild(index)) {
                smallerChildIndex = getRightChildIndex(index);
            }
            if (heap[index] < heap[smallerChildIndex]) {
                break;
            } else {
                swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    };
    return {
        push: (value) => {
            heap.push(value);
            heapifyUp();
        },
        poll: () => {
            if (heap.length === 0) return null;
            if (heap.length === 1) return heap.pop();
            const item = heap[0];
            heap[0] = heap.pop();
            heapifyDown();
            return item;
        },
        peek: () => heap[0],
        size: () => heap.length,
        isEmpty: () => heap.length === 0
    };
}
// Pros: Simple and easy to understand, uses an array and methods to implement a min heap.
// Cons: Less structured than the class approach.

// Solution 2: Using an array and methods (max heap)
function createMaxHeap2() {
    const heap = [];
    const getParentIndex = (i) => Math.floor((i - 1) / 2);
    const getLeftChildIndex = (i) => 2 * i + 1;
    const getRightChildIndex = (i) => 2 * i + 2;
    const hasParent = (i) => getParentIndex(i) >= 0;
    const hasLeftChild = (i) => getLeftChildIndex(i) < heap.length;
    const hasRightChild = (i) => getRightChildIndex(i) < heap.length;
    const parent = (i) => heap[getParentIndex(i)];
    const leftChild = (i) => heap[getLeftChildIndex(i)];
    const rightChild = (i) => heap[getRightChildIndex(i)];
    const swap = (i, j) => [heap[i], heap[j]] = [heap[j], heap[i]];
    const heapifyUp = () => {
        let index = heap.length - 1;
        while (hasParent(index) && parent(index) < heap[index]) {
            swap(index, getParentIndex(index));
            index = getParentIndex(index);
        }
    };
    const heapifyDown = () => {
        let index = 0;
        while (hasLeftChild(index)) {
            let largerChildIndex = getLeftChildIndex(index);
            if (hasRightChild(index) && rightChild(index) > leftChild(index)) {
                largerChildIndex = getRightChildIndex(index);
            }
            if (heap[index] > heap[largerChildIndex]) {
                break;
            } else {
                swap(index, largerChildIndex);
            }
            index = largerChildIndex;
        }
    };
    return {
        push: (value) => {
            heap.push(value);
            heapifyUp();
        },
        poll: () => {
            if (heap.length === 0) return null;
            if (heap.length === 1) return heap.pop();
            const item = heap[0];
            heap[0] = heap.pop();
            heapifyDown();
            return item;
        },
        peek: () => heap[0],
        size: () => heap.length,
        isEmpty: () => heap.length === 0
    };
}
// Pros: Simple and easy to understand, uses an array and methods to implement a max heap.
// Cons: Less structured than the class approach.

// Solution 3: Using a class (min heap)
class MinHeap3 {
    constructor() {
        this.heap = [];
    }
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    getLeftChildIndex(i) {
        return 2 * i + 1;
    }
    getRightChildIndex(i) {
        return 2 * i + 2;
    }
    hasParent(i) {
        return this.getParentIndex(i) >= 0;
    }
    hasLeftChild(i) {
        return this.getLeftChildIndex(i) < this.heap.length;
    }
    hasRightChild(i) {
        return this.getRightChildIndex(i) < this.heap.length;
    }
    parent(i) {
        return this.heap[this.getParentIndex(i)];
    }
    leftChild(i) {
        return this.heap[this.getLeftChildIndex(i)];
    }
    rightChild(i) {
        return this.heap[this.getRightChildIndex(i)];
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    poll() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return item;
    }
    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.heap.length === 0;
    }
}

function createMinHeap3() {
    return new MinHeap3();
}
// Pros: More structured and maintainable, uses a class for encapsulation.
// Cons: Slightly more verbose than the object literal approach.
// Recommended: This is generally the recommended approach due to its structure and maintainability.

// Solution 4: Using a class (max heap)
class MaxHeap4 {
    constructor() {
        this.heap = [];
    }
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    getLeftChildIndex(i) {
        return 2 * i + 1;
    }
    getRightChildIndex(i) {
        return 2 * i + 2;
    }
    hasParent(i) {
        return this.getParentIndex(i) >= 0;
    }
    hasLeftChild(i) {
        return this.getLeftChildIndex(i) < this.heap.length;
    }
    hasRightChild(i) {
        return this.getRightChildIndex(i) < this.heap.length;
    }
    parent(i) {
        return this.heap[this.getParentIndex(i)];
    }
    leftChild(i) {
        return this.heap[this.getLeftChildIndex(i)];
    }
    rightChild(i) {
        return this.heap[this.getRightChildIndex(i)];
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
                largerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] > this.heap[largerChildIndex]) {
                break;
            } else {
                this.swap(index, largerChildIndex);
            }
            index = largerChildIndex;
        }
    }
    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    poll() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return item;
    }
    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.heap.length === 0;
    }
}

function createMaxHeap4() {
    return new MaxHeap4();
}
// Pros: More structured and maintainable, uses a class for encapsulation.
// Cons: Slightly more verbose than the object literal approach.

// Solution 5: Using closures (min heap)
function createMinHeap5() {
    const heap = [];
    const getParentIndex = (i) => Math.floor((i - 1) / 2);
    const getLeftChildIndex = (i) => 2 * i + 1;
    const getRightChildIndex = (i) => 2 * i + 2;
    const hasParent = (i) => getParentIndex(i) >= 0;
    const hasLeftChild = (i) => getLeftChildIndex(i) < heap.length;
    const hasRightChild = (i) => getRightChildIndex(i) < heap.length;
    const parent = (i) => heap[getParentIndex(i)];
    const leftChild = (i) => heap[getLeftChildIndex(i)];
    const rightChild = (i) => heap[getRightChildIndex(i)];
    const swap = (i, j) => [heap[i], heap[j]] = [heap[j], heap[i]];
    const heapifyUp = () => {
        let index = heap.length - 1;
        while (hasParent(index) && parent(index) > heap[index]) {
            swap(index, getParentIndex(index));
            index = getParentIndex(index);
        }
    };
    const heapifyDown = () => {
        let index = 0;
        while (hasLeftChild(index)) {
            let smallerChildIndex = getLeftChildIndex(index);
            if (hasRightChild(index) && rightChild(index) < leftChild(index)) {
                smallerChildIndex = getRightChildIndex(index);
            }
            if (heap[index] < heap[smallerChildIndex]) {
                break;
            } else {
                swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    };
    return {
        push: (value) => {
            heap.push(value);
            heapifyUp();
        },
        poll: () => {
            if (heap.length === 0) return null;
            if (heap.length === 1) return heap.pop();
            const item = heap[0];
            heap[0] = heap.pop();
            heapifyDown();
            return item;
        },
        peek: () => heap[0],
        size: () => heap.length,
        isEmpty: () => heap.length === 0
    };
}
// Pros: Uses closures to encapsulate the heap array.
// Cons: Less structured than the class approach.
export { createMinHeap1, createMaxHeap2, createMinHeap3, createMaxHeap4, createMinHeap5 };
