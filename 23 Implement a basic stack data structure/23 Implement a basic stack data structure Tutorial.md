# 23 Implement a basic stack data structure Tutorial

## Prerequisites

*   Understanding of the stack data structure concept (LIFO - Last In, First Out).
*   Basic knowledge of arrays or linked lists.
*   Familiarity with object-oriented programming concepts (for class-based implementations).

## Approach

### Approach 1: Using an array

This approach uses an array as the underlying storage for the stack.

### Procedure

1. Define a class `Stack` (or a set of functions if not using OOP).
2. Inside the class, declare an array `items` to store the stack elements.
3. Initialize a variable `top` to -1, representing an empty stack.
4. Implement the `push(item)` method:
    *   Increment `top`.
    *   Add the `item` to the `items` array at the `top` index.
5. Implement the `pop()` method:
    *   If `top` is -1 (stack is empty), return an error or a special value (e.g., `null`, `undefined`).
    *   Store the element at the `top` index of `items` in a temporary variable.
    *   Decrement `top`.
    *   Return the temporary variable (the popped element).
6. Implement the `peek()` method:
    *   If `top` is -1 (stack is empty), return an error or a special value.
    *   Return the element at the `top` index of `items` without removing it.
7. Implement the `isEmpty()` method:
    *   Return `true` if `top` is -1 (stack is empty), `false` otherwise.
8. (Optional) Implement the `size()` method:
    *   Return `top + 1`.

### Approach 2: Using a linked list

This approach uses a linked list as the underlying storage for the stack.

### Procedure

1. Define a class `Node` with attributes `data` and `next` (pointer to the next node).
2. Define a class `Stack`.
3. Inside the `Stack` class, declare a `top` node, initially `null` (empty stack).
4. Implement the `push(item)` method:
    *   Create a new `Node` with the given `item` as data.
    *   Set the `next` pointer of the new node to the current `top`.
    *   Update `top` to the new node.
5. Implement the `pop()` method:
    *   If `top` is `null` (stack is empty), return an error or a special value.
    *   Store the data of the `top` node in a temporary variable.
    *   Update `top` to the `next` node of the current `top`.
    *   Return the temporary variable (the popped element).
6. Implement the `peek()` method:
    *   If `top` is `null` (stack is empty), return an error or a special value.
    *   Return the data of the `top` node.
7. Implement the `isEmpty()` method:
    *   Return `true` if `top` is `null` (stack is empty), `false` otherwise.
8. (Optional) Implement the `size()` method:
    *   Traverse the linked list from `top` to the end, counting the number of nodes.

### Approach 3: Using a dynamic array (resizable array)

This approach is similar to using an array but allows the stack to grow dynamically as needed.

### Procedure

1. Define a class `Stack`.
2. Inside the class, declare an array `items` with an initial capacity and a variable `top` initialized to -1.
3. Implement the `push(item)` method:
    *   If `top` is equal to the capacity of `items` minus 1 (array is full):
        *   Create a new array with double the capacity.
        *   Copy the elements from `items` to the new array.
        *   Update `items` to the new array.
    *   Increment `top`.
    *   Add the `item` to the `items` array at the `top` index.
4. Implement the `pop()`, `peek()`, `isEmpty()`, and `size()` methods as in Approach 1.

### Approach 4: Using built-in list/array methods (if available)

Some programming languages provide built-in list or array methods that can be used to implement a stack directly.

### Procedure

1. Use a built-in list or array data structure.
2. Use the built-in `append()` or `push()` method to add elements to the end (top of the stack).
3. Use the built-in `pop()` method to remove and return the last element (top of the stack).
4. Use the built-in `[-1]` indexing or equivalent to access the last element (top of the stack) for `peek()`.
5. Use the built-in `len()` or equivalent to check if the list/array is empty for `isEmpty()`.
6. Use the built-in `len()` or equivalent to get the size of the stack for `size()`.

### Approach 5: Using a deque (double-ended queue)

This approach uses a deque data structure, which allows efficient addition and removal of elements from both ends.

### Procedure

1. Define a class `Stack` or use a built-in deque data structure if available.
2. Inside the class, declare a deque `items`.
3. Implement the `push(item)` method:
    *   Add the `item` to the front of the deque.
4. Implement the `pop()` method:
    *   If the deque is empty, return an error or a special value.
    *   Remove and return the element from the front of the deque.
5. Implement the `peek()` method:
    *   If the deque is empty, return an error or a special value.
    *   Return the element at the front of the deque without removing it.
6. Implement the `isEmpty()` method:
    *   Return `true` if the deque is empty, `false` otherwise.
7. (Optional) Implement the `size()` method:
    *   Return the number of elements in the deque.
