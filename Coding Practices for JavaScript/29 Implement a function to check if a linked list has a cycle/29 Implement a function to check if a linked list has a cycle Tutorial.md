# 29 Implement a function to check if a linked list has a cycle Tutorial

## Prerequisites

*   Understanding of linked list data structures.
*   Knowledge of pointers or references.
*   Familiarity with iterative algorithms.

## Approach

### Approach 1: Floyd's Cycle-Finding Algorithm (Tortoise and Hare)

This approach uses two pointers, one moving slowly (tortoise) and the other moving faster (hare), to detect a cycle.

### Procedure

1. Define a function that takes the head of a linked list as input.
2. Initialize two pointers, `slow` (tortoise) and `fast` (hare), both to the head of the list.
3. Iterate using a `while` loop with the condition that `fast` is not `null` and `fast.next` is not `null`:
    *   Move `slow` one step forward (`slow = slow.next`).
    *   Move `fast` two steps forward (`fast = fast.next.next`).
    *   If `slow` and `fast` meet at any point (i.e., `slow == fast`), it means there is a cycle, so return `true`.
4. If the loop finishes without `slow` and `fast` meeting, it means there is no cycle, so return `false`.

### Approach 2: Using a hash set

This approach uses a hash set to keep track of visited nodes.

### Procedure

1. Define a function that takes the head of a linked list as input.
2. Create an empty hash set `visitedNodes`.
3. Initialize a pointer `current` to the head of the list.
4. Iterate using a `while` loop with the condition that `current` is not `null`:
    *   If `current` is already in `visitedNodes`, it means there is a cycle, so return `true`.
    *   Add `current` to `visitedNodes`.
    *   Move `current` one step forward (`current = current.next`).
5. If the loop finishes without finding a cycle, return `false`.

### Approach 3: Modifying the linked list (destructive)

This approach modifies the linked list by marking visited nodes (e.g., by changing a value in the node). This is a destructive approach and should only be used if modifying the list is acceptable.

### Procedure

1. Define a function that takes the head of a linked list as input.
2. Initialize a pointer `current` to the head of the list.
3. Iterate using a `while` loop with the condition that `current` is not `null`:
    *   If `current` has a special marker (e.g., a negative value or a special flag) indicating it has been visited, it means there is a cycle, so return `true`.
    *   Mark `current` as visited (e.g., by setting a value to a negative number or setting a flag).
    *   Move `current` one step forward (`current = current.next`).
5. If the loop finishes without finding a cycle, return `false`.

### Approach 4: Brent's algorithm

This approach is another cycle detection algorithm that uses a moving and a teleporting pointer.

### Procedure

1. Define a function that takes the head of a linked list as input.
2. Initialize `power`, `lam` (length of the cycle), and `tortoise` to 1, 1, and the head of the list, respectively.
3. Initialize `hare` to the head of the list.
4. Move `hare` forward `power` steps.
5. Use a `while` loop with the condition that `tortoise` is not equal to `hare`:
    * If `power` equals `lam`, set `tortoise` to `hare`, reset `power` to 0.
    * Move `hare` one step forward.
    * Increment `power`.
    * If `hare` becomes `null`, return `false` (no cycle).
6. Set `mu` (distance from the start to the beginning of the cycle) to 0.
7. Reset `tortoise` to the head of the list.
8. Move both `tortoise` and `hare` forward `lam` steps.
9. Use a `while` loop with the condition that `tortoise` is not equal to `hare`:
    * Move both `tortoise` and `hare` one step forward.
    * Increment `mu`.
10. Return `true` (cycle found).

### Approach 5: Recursive approach (less efficient)

This approach uses recursion to traverse the list and detect cycles.

### Procedure

1. Define a recursive function that takes the head of a linked list and a hash set of visited nodes as input.
2. Base case 1: If the head is `null`, return `false` (no cycle).
3. Base case 2: If the head is already in the visited set, return `true` (cycle found).
4. Add the head to the visited set.
5. Recursively call the function with `head.next` and the visited set.
6. Return the result of the recursive call.
7. Define a main function that takes the head of the linked list as input:
    * Create an empty hash set.
    * Call the recursive function with the head and the hash set.
    * Return the result.
