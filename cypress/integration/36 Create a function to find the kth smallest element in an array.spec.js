import { MinPriorityQueue, MaxPriorityQueue } from '@datastructures-js/priority-queue';

describe('Kth Smallest Element Finder', () => {
    const testCases = [
      { input: [[3, 2, 1, 5, 6, 4], 2], expected: 2 },
      { input: [[3, 2, 1, 5, 6, 4], 1], expected: 1 },
      { input: [[3, 2, 1, 5, 6, 4], 6], expected: 6 },
      { input: [[1, 2, 3, 4, 5], 3], expected: 3 },
      { input: [[5, 4, 3, 2, 1], 2], expected: 2 },
      { input: [[1, 1, 1, 1, 1], 1], expected: 1 },
      { input: [[1, 2, 3, 4, 5], 0], expected: 'Invalid input' },
      { input: [[1, 2, 3, 4, 5], 6], expected: 'Invalid input' },
      { input: [[10, 5, 2, 8, 1, 9, 4, 0, -1, -5], 3], expected: -1 },
      { input: [[10, 5, 2, 8, 1, 9, 4, 0, -1, -5], 7], expected: 4 },
      { input: [[1, 5, 2, 8, 3], 3], expected: 3 },
    ];

    // Solution 1: Using sort
    // Time Complexity: O(n log n), Memory Allocation: O(n)
    it('should find the kth smallest element using sort', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = findKthSmallest1(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using a min heap
    // Time Complexity: O(n log k), Memory Allocation: O(k)
    it('should find the kth smallest element using a min heap', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = findKthSmallest2(input[0], input[1]);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using quickselect
    // Time Complexity: O(n) average, O(n^2) worst case, Memory Allocation: O(log n)
    it('should find the kth smallest element using quickselect', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findKthSmallest3(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using a max heap
    // Time Complexity: O(n log k), Memory Allocation: O(k)
    it('should find the kth smallest element using a max heap', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findKthSmallest4(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using a for loop and splice
    // Time Complexity: O(n*k), Memory Allocation: O(n)
    it('should find the kth smallest element using a for loop and splice', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = findKthSmallest5(input[0], input[1]);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input[0]}, ${input[1]}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

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
});
