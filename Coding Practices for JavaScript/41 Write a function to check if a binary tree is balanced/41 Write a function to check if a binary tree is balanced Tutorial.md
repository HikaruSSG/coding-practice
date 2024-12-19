# 41 Write a function to check if a binary tree is balanced Tutorial

## Prerequisites

*   Understanding of binary trees and their properties (height, balance).
*   Knowledge of recursion.

## Approach

### Approach 1: Recursive approach with height calculation

This approach recursively calculates the height of each subtree and checks if the difference in heights is within the allowed limit (usually 0 or 1).

### Procedure

1. Define a function `isBalanced` that takes the root of a binary tree as input.
2. Define a helper function `height` that takes a node as input and returns its height:
    *   Base case: If the node is `null`, return 0.
    *   Recursive step: Return 1 plus the maximum of the heights of the left and right subtrees.
3. In the `isBalanced` function:
    *   Base case: If the root is `null`, return `true` (an empty tree is balanced).
    *   Calculate the heights of the left and right subtrees using the `height` function.
    *   If the absolute difference between the left and right subtree heights is greater than 1, return `false` (unbalanced).
    *   Recursively call `isBalanced` on the left and right subtrees.
    *   Return `true` if both the left and right subtrees are balanced, `false` otherwise.

### Approach 2: Optimized recursive approach (bottom-up)

This approach optimizes the recursive approach by calculating the height and checking the balance in a single pass.

### Procedure

1. Define a function `isBalanced` that takes the root of a binary tree as input.
2. Define a helper function `checkHeight` that takes a node as input and returns its height or -1 if the subtree is unbalanced:
    *   Base case: If the node is `null`, return 0.
    *   Recursively call `checkHeight` on the left subtree. If it returns -1, return -1 (left subtree is unbalanced).
    *   Recursively call `checkHeight` on the right subtree. If it returns -1, return -1 (right subtree is unbalanced).
    *   If the absolute difference between the left and right subtree heights is greater than 1, return -1 (unbalanced).
    *   Otherwise, return 1 plus the maximum of the left and right subtree heights.
3. In the `isBalanced` function:
    *   Call `checkHeight` with the root.
    *   If `checkHeight` returns -1, return `false` (unbalanced); otherwise, return `true` (balanced).

### Approach 3: Iterative approach using a stack and a hash map

This approach uses a stack for iterative traversal and a hash map to store the heights of visited nodes.

### Procedure

1. Define a function `isBalanced` that takes the root of a binary tree as input.
2. If the root is `null`, return `true`.
3. Create an empty stack `stack` and push a tuple `(root, false)` onto it. The boolean value indicates whether the node's height has been calculated.
4. Create an empty hash map `heights` to store the heights of nodes.
5. Use a `while` loop with the condition that the `stack` is not empty:
    *   Pop a `(node, heightCalculated)` tuple from the `stack`.
    *   If `heightCalculated` is `false`:
        *   Push `(node, true)` back onto the `stack`.
        *   If the node has a left child, push `(node.left, false)` onto the `stack`.
        *   If the node has a right child, push `(node.right, false)` onto the `stack`.
    *   If `heightCalculated` is `true`:
        *   Calculate the heights of the left and right subtrees using the `heights` map (or 0 if a child is `null`).
        *   If the absolute difference between the left and right subtree heights is greater than 1, return `false`.
        *   Store the height of the current node in `heights`: `heights[node] = 1 + max(leftHeight, rightHeight)`.
6. If the loop finishes without finding an imbalance, return `true`.

### Approach 4: Morris Traversal (Inorder Traversal without Recursion or Stack)

This approach uses Morris Traversal to check for balanced binary tree. It has a space complexity of O(1).

### Procedure

1. Define a function `isBalanced` that takes the root of a binary tree as input.
2. Initialize `curr` to the root of the tree.
3. Initialize `balanced` to `true`.
4. Define a helper function `getHeight` that takes a node as input and returns its height:
    * Base case: If the node is `null`, return 0.
    * Recursive step: Return 1 plus the maximum of the heights of the left and right subtrees.
5. While `curr` is not `null`:
    * If `curr.left` is `null`:
        * Calculate the heights of the left and right subtrees using `getHeight`.
        * If the absolute difference between the left and right subtree heights is greater than 1, set `balanced` to `false`.
        * Move `curr` to `curr.right`.
    * Else:
        * Find the inorder predecessor of `curr` (the rightmost node in the left subtree).
        * If the predecessor's right child is `null`:
            * Set the predecessor's right child to `curr`.
            * Move `curr` to `curr.left`.
        * Else:
            * Reset the predecessor's right child to `null`.
            * Calculate the heights of the left and right subtrees using `getHeight`.
            * If the absolute difference between the left and right subtree heights is greater than 1, set `balanced` to `false`.
            * Move `curr` to `curr.right`.
6. Return `balanced`.

### Approach 5: Using a queue for level order traversal (less efficient for this problem)

This approach uses a queue for level order traversal and calculates heights iteratively.

### Procedure

1. Define a function `isBalanced` that takes the root of a binary tree as input.
2. If the root is `null`, return `true`.
3. Create an empty queue `queue` and enqueue the root.
4. Create a hash map `heights` to store the heights of nodes.
5. Use a `while` loop with the condition that the `queue` is not empty:
    * Dequeue a node from the `queue`.
    * If the node has a left child:
        * Enqueue the left child.
    * If the node has a right child:
        * Enqueue the right child.
    * Calculate the heights of the left and right subtrees using the `heights` map (or 0 if a child is `null`).
    * If the absolute difference between the left and right subtree heights is greater than 1, return `false`.
    * Store the height of the current node in `heights`.
6. If the loop finishes without finding an imbalance, return `true`.
