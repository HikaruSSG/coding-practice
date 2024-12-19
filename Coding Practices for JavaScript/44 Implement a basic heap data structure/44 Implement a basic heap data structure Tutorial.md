# 44 Implement a basic heap data structure Tutorial

## Prerequisites

*   Understanding of the heap data structure (min-heap or max-heap) and its properties.
*   Knowledge of arrays and how to represent a complete binary tree using an array.
*   Familiarity with basic programming concepts like loops, comparisons, and swaps.

## Approach

### Approach 1: Min-Heap Implementation using an Array

This approach implements a min-heap using an array to store the elements and functions to maintain the heap property.

### Procedure

1. Define a class `MinHeap` (or a set of functions if not using OOP).
2. Inside the class, declare an array `heap` to store the heap elements.
3. Initialize a variable `size` to 0, representing the current number of elements in the heap.
4. Implement a helper function `parent(i)` that returns the index of the parent of the node at index `i`: `return Math.floor((i - 1) / 2)`.
5. Implement a helper function `leftChild(i)` that returns the index of the left child of the node at index `i`: `return 2 * i + 1`.
6. Implement a helper function `rightChild(i)` that returns the index of the right child of the node at index `i`: `return 2 * i + 2`.
7. Implement a helper function `swap(i, j)` that swaps the elements at indices `i` and `j` in the `heap` array.
8. Implement a function `insert(value)` to insert a new element into the heap:
    *   Add the `value` to the end of the `heap` array.
    *   Increment `size`.
    *   "Heapify up" or "bubble up" the newly inserted element:
        *   Initialize `i` to `size - 1` (index of the new element).
        *   While `i` is not 0 and `heap[parent(i)]` is greater than `heap[i]`:
            *   Swap `heap[i]` and `heap[parent(i)]`.
            *   Update `i` to `parent(i)`.
9. Implement a function `extractMin()` to remove and return the minimum element (root) from the heap:
    *   If `size` is 0, return an error or a special value (heap is empty).
    *   Store the root element (`heap[0]`) in a temporary variable.
    *   Replace the root with the last element of the heap (`heap[size - 1]`).
    *   Decrement `size`.
    *   "Heapify down" or "sink down" the new root:
        *   Initialize `i` to 0 (index of the root).
        *   Use a `while` loop:
            *   Find the smallest child of `heap[i]` (if any).
            *   If `heap[i]` is greater than the smallest child:
                *   Swap `heap[i]` with the smallest child.
                *   Update `i` to the index of the smallest child.
            *   Else, break the loop.
    *   Return the temporary variable (the original root).
10. Implement a function `peek()` to return the minimum element without removing it:
    *   If `size` is 0, return an error or a special value.
    *   Return `heap[0]`.
11. Implement a function `isEmpty()` to check if the heap is empty:
    *   Return `true` if `size` is 0, `false` otherwise.
12. (Optional) Implement a function `size()` to return the current number of elements in the heap.

### Approach 2: Max-Heap Implementation using an Array

This approach implements a max-heap, which is very similar to a min-heap but with the heap property reversed (parent is greater than or equal to children).

### Procedure

1. Follow the same steps as in Approach 1, but make the following changes:
    *   In the `insert` function, modify the "heapify up" loop condition to `heap[parent(i)] < heap[i]`.
    *   In the `extractMin` function, rename it to `extractMax` and modify the "heapify down" loop to find the largest child and compare `heap[i]` with it.
    *   In the `peek` function, rename it to `peekMax`.

### Approach 3: Using Built-in Heap Functions (if available)

Some programming languages provide built-in functions or libraries for working with heaps (e.g., `heapq` in Python, `PriorityQueue` in Java).

### Procedure

1. Use the built-in heap functions provided by the language or library.
2. For a min-heap:
    *   Use the appropriate function to insert elements (e.g., `heapq.heappush` in Python).
    *   Use the appropriate function to remove and return the minimum element (e.g., `heapq.heappop` in Python).
    *   Use the appropriate function to get the minimum element without removing it (e.g., accessing the first element of the underlying array).
3. For a max-heap:
    *   If the language doesn't directly support max-heaps, you might need to negate the values before inserting them into a min-heap and negate them again when extracting.

### Approach 4: Heap Implementation using Pointers/References (less common)

This approach implements a heap using nodes with pointers/references to their children, similar to a binary tree.

### Procedure

1. Define a `Node` class with attributes for `value`, `left`, and `right` (pointers to children).
2. Define a `Heap` class with a `root` node.
3. Implement `insert`, `extractMin` (or `extractMax`), `peek`, `isEmpty`, and other helper functions using pointer manipulation to maintain the heap property. This approach is more complex than using an array and is less common for heaps due to the overhead of pointer manipulation.

### Approach 5: Using a Self-Balancing Binary Search Tree (more advanced)

This approach uses a self-balancing binary search tree (e.g., AVL tree, red-black tree) augmented with order statistics to simulate a heap. This is a more advanced technique that provides logarithmic time complexity for insertion, deletion, and finding the minimum/maximum.

### Procedure

1. Use a self-balancing binary search tree data structure that supports efficient insertion, deletion, and finding the minimum/maximum element.
2. Augment the tree nodes with additional information (e.g., subtree size) to allow for efficient retrieval of the kth smallest element (which can be used to simulate `peek`).
3. Implement `insert`, `extractMin` (or `extractMax`), `peek`, and `isEmpty` using the tree's operations.
