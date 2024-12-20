import { MinPriorityQueue, MaxPriorityQueue } from '@datastructures-js/priority-queue';

describe('Heap Data Structure', () => {
    const testCases = [
      {
        description: 'should push and poll items from min heap',
        heapType: 'min',
        actions: [
          { type: 'push', item: 3 },
          { type: 'push', item: 1 },
          { type: 'push', item: 4 },
          { type: 'push', item: 2 },
          { type: 'poll', expected: 1 },
          { type: 'poll', expected: 2 },
          { type: 'poll', expected: 3 },
          { type: 'poll', expected: 4 },
          { type: 'isEmpty', expected: true },
        ],
      },
      {
        description: 'should push and peek items from min heap',
        heapType: 'min',
        actions: [
          { type: 'push', item: 3 },
          { type: 'push', item: 1 },
          { type: 'push', item: 4 },
          { type: 'peek', expected: 1 },
          { type: 'size', expected: 3 },
          { type: 'isEmpty', expected: false },
        ],
      },
      {
        description: 'should handle empty min heap',
        heapType: 'min',
        actions: [
          { type: 'poll', expected: null },
          { type: 'peek', expected: undefined },
          { type: 'isEmpty', expected: true },
          { type: 'size', expected: 0 },
        ],
      },
      {
        description: 'should push and poll items from max heap',
        heapType: 'max',
        actions: [
          { type: 'push', item: 3 },
          { type: 'push', item: 1 },
          { type: 'push', item: 4 },
          { type: 'push', item: 2 },
          { type: 'poll', expected: 4 },
          { type: 'poll', expected: 3 },
          { type: 'poll', expected: 2 },
          { type: 'poll', expected: 1 },
          { type: 'isEmpty', expected: true },
        ],
      },
      {
        description: 'should push and peek items from max heap',
        heapType: 'max',
        actions: [
          { type: 'push', item: 3 },
          { type: 'push', item: 1 },
          { type: 'push', item: 4 },
          { type: 'peek', expected: 4 },
          { type: 'size', expected: 3 },
          { type: 'isEmpty', expected: false },
        ],
      },
      {
        description: 'should handle empty max heap',
        heapType: 'max',
        actions: [
          { type: 'poll', expected: null },
          { type: 'peek', expected: undefined },
          { type: 'isEmpty', expected: true },
          { type: 'size', expected: 0 },
        ],
      },
    ];

    // Solution 1: Using an array and methods (min heap)
    // Time Complexity: push O(log n), poll O(log n), peek O(1), isEmpty O(1), size O(1), Memory Allocation: O(n)
    it('should implement min heap using an array and methods', () => {
      testCases.filter(testCase => testCase.heapType === 'min').forEach(({ actions, description }) => {
        const heap = createMinHeap1();
        cy.log(`Testing: ${description}`);
        actions.forEach(({ type, item, expected }) => {
            const startTime = performance.now();
            let result;
          if (type === 'push') {
            heap.push(item);
          } else if (type === 'poll') {
            result = heap.poll();
            expect(result).to.equal(expected);
          } else if (type === 'peek') {
            result = heap.peek();
            expect(result).to.equal(expected);
          } else if (type === 'isEmpty') {
            result = heap.isEmpty();
            expect(result).to.equal(expected);
          } else if (type === 'size') {
            result = heap.size();
            expect(result).to.equal(expected);
          }
           const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
        });
      });
    });

    // Solution 2: Using an array and methods (max heap)
    // Time Complexity: push O(log n), poll O(log n), peek O(1), isEmpty O(1), size O(1), Memory Allocation: O(n)
    it('should implement max heap using an array and methods', () => {
        testCases.filter(testCase => testCase.heapType === 'max').forEach(({ actions, description }) => {
          const heap = createMaxHeap2();
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, item, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'push') {
              heap.push(item);
            } else if (type === 'poll') {
              result = heap.poll();
              expect(result).to.equal(expected);
            } else if (type === 'peek') {
              result = heap.peek();
              expect(result).to.equal(expected);
            } else if (type === 'isEmpty') {
              result = heap.isEmpty();
              expect(result).to.equal(expected);
            } else if (type === 'size') {
              result = heap.size();
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

    // Solution 3: Using a class (min heap)
    // Time Complexity: push O(log n), poll O(log n), peek O(1), isEmpty O(1), size O(1), Memory Allocation: O(n)
    it('should implement min heap using a class', () => {
        testCases.filter(testCase => testCase.heapType === 'min').forEach(({ actions, description }) => {
          const heap = createMinHeap3();
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, item, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'push') {
              heap.push(item);
            } else if (type === 'poll') {
              result = heap.poll();
              expect(result).to.equal(expected);
            } else if (type === 'peek') {
              result = heap.peek();
              expect(result).to.equal(expected);
            } else if (type === 'isEmpty') {
              result = heap.isEmpty();
              expect(result).to.equal(expected);
            } else if (type === 'size') {
              result = heap.size();
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

    // Solution 4: Using a class (max heap)
    // Time Complexity: push O(log n), poll O(log n), peek O(1), isEmpty O(1), size O(1), Memory Allocation: O(n)
    it('should implement max heap using a class', () => {
        testCases.filter(testCase => testCase.heapType === 'max').forEach(({ actions, description }) => {
          const heap = createMaxHeap4();
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, item, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'push') {
              heap.push(item);
            } else if (type === 'poll') {
              result = heap.poll();
              expect(result).to.equal(expected);
            } else if (type === 'peek') {
              result = heap.peek();
              expect(result).to.equal(expected);
            } else if (type === 'isEmpty') {
              result = heap.isEmpty();
              expect(result).to.equal(expected);
            } else if (type === 'size') {
              result = heap.size();
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

    // Solution 5: Using closures (min heap)
    // Time Complexity: push O(log n), poll O(log n), peek O(1), isEmpty O(1), size O(1), Memory Allocation: O(n)
    it('should implement min heap using closures', () => {
        testCases.filter(testCase => testCase.heapType === 'min').forEach(({ actions, description }) => {
          const heap = createMinHeap5();
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, item, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'push') {
              heap.push(item);
            } else if (type === 'poll') {
              result = heap.poll();
              expect(result).to.equal(expected);
            } else if (type === 'peek') {
              result = heap.peek();
              expect(result).to.equal(expected);
            } else if (type === 'isEmpty') {
              result = heap.isEmpty();
              expect(result).to.equal(expected);
            } else if (type === 'size') {
              result = heap.size();
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

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
                let largerChildIndex = this.getLeftChildIndex(index);
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
});
