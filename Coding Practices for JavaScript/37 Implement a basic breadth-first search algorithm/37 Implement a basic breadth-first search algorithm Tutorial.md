# 37 Implement a basic breadth-first search algorithm Tutorial

## Prerequisites

*   Understanding of graph data structures (nodes and edges).
*   Knowledge of queues.
*   Familiarity with basic programming concepts like loops and conditional statements.

## Approach

### Approach 1: Iterative Breadth-First Search using a Queue

This approach uses a queue to traverse the graph level by level in a breadth-first manner.

### Procedure

1. Define a function that takes a graph `graph` and a starting node `startNode` as input.
2. Create an empty set `visited` to keep track of visited nodes.
3. Create an empty queue `queue` and enqueue `startNode` into it.
4. Mark `startNode` as visited by adding it to the `visited` set.
5. Use a `while` loop with the condition that the `queue` is not empty:
    *   Dequeue a node from the `queue` and assign it to `currentNode`.
    *   Process `currentNode` (e.g., print its value or perform some other operation).
    *   Iterate through the neighbors of `currentNode`:
        *   If a neighbor has not been visited:
            *   Mark the neighbor as visited by adding it to `visited`.
            *   Enqueue the neighbor into the `queue`.

### Approach 2: Breadth-First Search with Path Tracking

This approach modifies the iterative BFS to keep track of the path taken to reach each node.

### Procedure

1. Modify the iterative BFS function to use a queue that stores pairs of `(node, path)`, where `path` is the path from the `startNode` to the `node`.
2. When the `startNode` is enqueued, initialize its path as `[startNode]`.
3. When a node is dequeued:
    *   Retrieve the `node` and its associated `path` from the dequeued pair.
4. When a neighbor is visited for the first time:
    *   Create a new path by appending the neighbor to the current `path`.
    *   Enqueue the pair `(neighbor, newPath)` into the `queue`.
5. You can store or process the `path` when a specific node is found or when a certain condition is met.

### Approach 3: Breadth-First Search for a Specific Target Node

This approach adapts the BFS to search for a specific target node in the graph.

### Procedure

1. Modify the iterative BFS function to accept an additional parameter `targetNode`.
2. When a node is dequeued:
    *   If the node is equal to `targetNode`, return `true` (or the node itself, or the path to the node).
3. If the target node is not found during the traversal, return `false` (or a special value indicating that the target was not found).

### Approach 4: Breadth-First Search on a Tree (Simplified)

If the graph is known to be a tree (a connected acyclic graph), the BFS algorithm can be simplified as there is no need to keep track of visited nodes (no cycles).

### Procedure

1. Define a function that takes the root of a tree `root` as input.
2. Create an empty queue `queue` and enqueue `root` into it.
3. Use a `while` loop with the condition that the `queue` is not empty:
    *   Dequeue a node from the `queue` and assign it to `currentNode`.
    *   Process `currentNode` (e.g., print its value).
    *   Iterate through the children of `currentNode`:
        *   Enqueue each child into the `queue`.

### Approach 5: Breadth-First Search using Adjacency Matrix

This approach uses an adjacency matrix representation of the graph instead of an adjacency list.

### Procedure

1. Define a function that takes an adjacency matrix `graph` and a starting node `startNode` as input.
2. Create an empty set `visited` to keep track of visited nodes.
3. Create an empty queue `queue` and enqueue `startNode` into it.
4. Mark `startNode` as visited.
5. Use a `while` loop with the condition that the `queue` is not empty:
    * Dequeue a node from the `queue` and assign it to `currentNode`.
    * Process `currentNode`.
    * Iterate through the row corresponding to `currentNode` in the adjacency matrix:
        * If an element at index `j` in the row is 1 (indicating an edge) and node `j` has not been visited:
            * Mark node `j` as visited.
            * Enqueue node `j` into the `queue`.
