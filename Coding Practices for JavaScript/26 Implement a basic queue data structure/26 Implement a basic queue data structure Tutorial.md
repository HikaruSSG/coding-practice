# 26 Implement a basic queue data structure Tutorial

## Prerequisites

*   Understanding of the queue data structure concept (FIFO - First In, First Out).
*   Basic knowledge of arrays or linked lists.
*   Familiarity with object-oriented programming concepts (for class-based implementations).

## Approach

### Approach 1: Using an array

This approach uses an array as the underlying storage for the queue.

### Procedure

1. Define a class `Queue` (or a set of functions if not using OOP).
2. Inside the class, declare an array `items` to store the queue elements.
3. Initialize two variables: `front` to 0 (index of the front element) and `rear` to -1 (index of the rear element).
4. Implement the `enqueue(item)` method:
    *   Increment `rear`.
    *   Add the `item` to the `items` array at the `rear` index.
5. Implement the `dequeue()` method:
    *   If `front` is greater than `rear` (queue is empty), return an error or a special value (e.g., `null`, `undefined`).
    *   Store the element at the `front` index of `items` in a temporary variable.
    *   Increment `front`.
    *   Return the temporary variable (the dequeued element).
6. Implement the `peek()` method:
    *   If `front` is greater than `rear` (queue is empty), return an error or a special value.
    *   Return the element at the `front` index of `items` without removing it.
7. Implement the `isEmpty()` method:
    *   Return `true` if `front` is greater than `rear` (queue is empty), `false` otherwise.
8. (Optional) Implement the `size()` method:
    *   Return `rear - front + 1`.

### Approach 2: Using a linked list

This approach uses a linked list as the underlying storage for the queue.

### Procedure

1. Define a class `Node` with attributes `data` and `next` (pointer to the next node).
2. Define a class `Queue`.
3. Inside the `Queue` class, declare two nodes: `front` and `rear`, initially `null` (empty queue).
4. Implement the `enqueue(item)` method:
    *   Create a new `Node` with the given `item` as data.
    *   If `rear` is `null` (queue is empty), set both `front` and `rear` to the new node.
    *   Otherwise, set the `next` pointer of the current `rear` to the new node and update `rear` to the new node.
5. Implement the `dequeue()` method:
    *   If `front` is `null` (queue is empty), return an error or a special value.
    *   Store the data of the `front` node in a temporary variable.
    *   Update `front` to the `next` node of the current `front`.
    *   If `front` becomes `null` (queue is now empty), also update `rear` to `null`.
    *   Return the temporary variable (the dequeued element).
6. Implement the `peek()` method:
    *   If `front` is `null` (queue is empty), return an error or a special value.
    *   Return the data of the `front` node.
7. Implement the `isEmpty()` method:
    *   Return `true` if `front` is `null` (queue is empty), `false` otherwise.
8. (Optional) Implement the `size()` method:
    *   Traverse the linked list from `front` to `rear`, counting the number of nodes.

### Approach 3: Using a circular array

This approach uses an array in a circular manner to avoid shifting elements during dequeue operations.

### Procedure

1. Define a class `Queue`.
2. Inside the class, declare an array `items` of a fixed capacity, `front` initialized to -1, `rear` initialized to -1, and `size` initialized to 0.
3. Implement the `enqueue(item)` method:
    *   If `size` is equal to the capacity (queue is full), return an error or resize the array.
    *   If `rear` is equal to the capacity - 1, set `rear` to 0 (wrap around); otherwise, increment `rear`.
    *   Add the `item` to the `items` array at the `rear` index.
    *   If `front` is -1 (queue was empty), set `front` to 0.
    *   Increment `size`.
4. Implement the `dequeue()` method:
    *   If `size` is 0 (queue is empty), return an error or a special value.
    *   Store the element at the `front` index of `items` in a temporary variable.
    *   If `front` is equal to the capacity - 1, set `front` to 0 (wrap around); otherwise, increment `front`.
    *   Decrement `size`.
    *   If `size` becomes 0, set both `front` and `rear` to -1 (queue is now empty).
    *   Return the temporary variable (the dequeued element).
5. Implement the `peek()` method:
    *   If `size` is 0 (queue is empty), return an error or a special value.
    *   Return the element at the `front` index of `items` without removing it.
6. Implement the `isEmpty()` method:
    *   Return `true` if `size` is 0 (queue is empty), `false` otherwise.
7. Implement the `size()` method:
    *   Return `size`.

### Approach 4: Using built-in list/array methods (if available)

Some programming languages provide built-in list or array methods that can be used to implement a queue directly.

### Procedure

1. Use a built-in list or array data structure.
2. Use the built-in `append()` or equivalent method to add elements to the end (rear of the queue) for `enqueue()`.
3. Use the built-in `pop(0)` or equivalent method to remove and return the first element (front of the queue) for `dequeue()`.
4. Use the built-in `[0]` indexing or equivalent to access the first element (front of the queue) for `peek()`.
5. Use the built-in `len()` or equivalent to check if the list/array is empty for `isEmpty()`.
6. Use the built-in `len()` or equivalent to get the size of the queue for `size()`.

### Approach 5: Using a deque (double-ended queue)

This approach uses a deque data structure, which allows efficient addition and removal of elements from both ends.

### Procedure

1. Define a class `Queue` or use a built-in deque data structure if available.
2. Inside the class, declare a deque `items`.
3. Implement the `enqueue(item)` method:
    *   Add the `item` to the rear of the deque.
4. Implement the `dequeue()` method:
    *   If the deque is empty, return an error or a special value.
    *   Remove and return the element from the front of the deque.
5. Implement the `peek()` method:
    *   If the deque is empty, return an error or a special value.
    *   Return the element at the front of the deque without removing it.
6. Implement the `isEmpty()` method:
    *   Return `true` if the deque is empty, `false` otherwise.
7. (Optional) Implement the `size()` method:
    *   Return the number of elements in the deque.
