# 33 Implement a basic depth-first search algorithm Tutorial

## Prerequisites

*   Understanding of graph data structures (nodes and edges).
*   Knowledge of recursion or stacks.
*   Familiarity with basic programming concepts like loops and conditional statements.

## Approach

### Approach 1: Recursive Depth-First Search

This approach uses recursion to traverse the graph in a depth-first manner.

### Procedure

1. Define a function `dfsRecursive` that takes a graph `graph`, a starting node `startNode`, and a set of visited nodes `visited` as input.
2. Mark `startNode` as visited by adding it to the `visited` set.
3. Process `startNode` (e.g., print its value or perform some other operation).
4. Iterate through the neighbors of `startNode` (nodes connected to `startNode` by an edge):
    *   If a neighbor has not been visited:
        *   Recursively call `dfsRecursive` with the `graph`, the neighbor as the new `startNode`, and the `visited` set.
5. Define a main function (e.g., `depthFirstSearch`) that takes a `graph` and a `startNode` as input:
    *   Create an empty set `visited` to keep track of visited nodes.
    *   Call `dfsRecursive` with the `graph`, `startNode`, and `visited` set.

### Approach 2: Iterative Depth-First Search using a Stack

This approach uses a stack to simulate the recursive call stack and traverse the graph iteratively.

### Procedure

1. Define a function that takes a graph `graph` and a starting node `startNode` as input.
2. Create an empty set `visited` to keep track of visited nodes.
3. Create an empty stack `stack` and push `startNode` onto it.
4. Use a `while` loop with the condition that the `stack` is not empty:
    *   Pop a node from the `stack` and assign it to `currentNode`.
    *   If `currentNode` has not been visited:
        *   Mark `currentNode` as visited by adding it to `visited`.
        *   Process `currentNode`.
        *   Iterate through the neighbors of `currentNode`:
            *   If a neighbor has not been visited:
                *   Push the neighbor onto the `stack`.

### Approach 3: Depth-First Search with Path Tracking

This approach modifies the recursive or iterative DFS to keep track of the path taken to reach each node.

### Procedure

1. Modify the `dfsRecursive` or iterative DFS function to accept an additional parameter `path` (a list or array) that stores the current path.
2. When a node is visited:
    *   Append the node to the `path`.
3. When a neighbor is explored:
    *   Pass a copy of the `path` to the recursive call or push the neighbor along with a copy of the `path` onto the stack.
4. When a node is finished being processed (in the recursive approach):
    *   Remove the node from the `path` (backtracking).
5. You can store or process the `path` when a specific node is found or when a certain condition is met.

### Approach 4: Depth-First Search for a Specific Target Node

This approach adapts the DFS to search for a specific target node in the graph.

### Procedure

1. Modify the `dfsRecursive` or iterative DFS function to accept an additional parameter `targetNode`.
2. When a node is visited:
    *   If the node is equal to `targetNode`, return `true` (or the node itself, or the path to the node).
3. If the target node is not found during the traversal, return `false` (or a special value indicating that the target was not found).

### Approach 5: Depth-First Search on a Tree (Simplified)

If the graph is known to be a tree (a connected acyclic graph), the DFS algorithm can be simplified as there is no need to keep track of visited nodes (no cycles).

### Procedure

1. Define a function that takes the root of a tree `root` as input.
2. Process `root` (e.g., print its value).
3. Iterate through the children of `root`:
    *   Recursively call the function with each child as the new `root`.
(For iterative DFS on a tree, you can use a stack as in Approach 2, but without the `visited` set.)
