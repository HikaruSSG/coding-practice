# 48 Implement a basic graph traversal algorithm Tutorial

## Prerequisites

*   Understanding of graph data structures (nodes/vertices and edges).
*   Knowledge of either depth-first search (DFS) or breadth-first search (BFS).

## Approach

### Approach 1: Depth-First Search (DFS) - Recursive

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

### Approach 2: Depth-First Search (DFS) - Iterative using a Stack

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

### Approach 3: Breadth-First Search (BFS) - Iterative using a Queue

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

### Approach 4: Breadth-First Search (BFS) or Depth-First Search (DFS) with Path Tracking

This approach modifies the BFS or DFS algorithm to keep track of the path taken to reach each node.

#### For BFS:

1. Modify the iterative BFS function to use a queue that stores pairs of `(node, path)`, where `path` is the path from the `startNode` to the `node`.
2. When the `startNode` is enqueued, initialize its path as `[startNode]`.
3. When a node is dequeued:
    *   Retrieve the `node` and its associated `path` from the dequeued pair.
4. When a neighbor is visited for the first time:
    *   Create a new path by appending the neighbor to the current `path`.
    *   Enqueue the pair `(neighbor, newPath)` into the `queue`.

#### For DFS:

1. Modify the `dfsRecursive` or iterative DFS function to accept an additional parameter `path` (a list or array) that stores the current path.
2. When a node is visited:
    *   Append the node to the `path`.
3. When a neighbor is explored:
    *   Pass a copy of the `path` to the recursive call or push the neighbor along with a copy of the `path` onto the stack.
4. When a node is finished being processed (in the recursive approach):
    *   Remove the node from the `path` (backtracking).

### Approach 5: Breadth-First Search (BFS) or Depth-First Search (DFS) for a Specific Target Node

This approach adapts the BFS or DFS algorithm to search for a specific target node in the graph.

#### For BFS or DFS:

1. Modify the iterative BFS function to accept an additional parameter `targetNode`.
2. When a node is dequeued (BFS) or visited (DFS):
    *   If the node is equal to `targetNode`, return `true` (or the node itself, or the path to the node).
3. If the target node is not found during the traversal, return `false` (or a special value indicating that the target was not found).

### Approach 6: Bidirectional Search (advanced)

This approach performs two simultaneous BFS searches, one from the start node and one from the target node, until they meet in the middle. This can be more efficient than a single BFS for finding the shortest path between two nodes in some cases.

### Procedure

1. Define a function that takes a graph, a start node, and a target node as input.
2. Create two sets, `visitedStart` and `visitedTarget`, to track visited nodes from the start and target nodes, respectively.
3. Create two queues, `queueStart` and `queueTarget`, and initialize them with the start and target nodes, respectively.
4. Mark the start and target nodes as visited in their respective sets.
5. Use a `while` loop with the condition that both queues are not empty:
    *   Perform one step of BFS from the start node:
        *   Dequeue a node from `queueStart`.
        *   If the node is in `visitedTarget`, a path has been found. Reconstruct and return the path.
        *   Otherwise, for each unvisited neighbor, mark it as visited in `visitedStart` and enqueue it into `queueStart`.
    *   Perform one step of BFS from the target node:
        *   Dequeue a node from `queueTarget`.
        *   If the node is in `visitedStart`, a path has been found. Reconstruct and return the path.
        *   Otherwise, for each unvisited neighbor, mark it as visited in `visitedTarget` and enqueue it into `queueTarget`.
6. If the loop finishes without finding a path, return `null` or indicate that no path exists.

### Approach 7: Using Adjacency Matrix for BFS or DFS

This approach uses an adjacency matrix representation of the graph instead of an adjacency list.

#### For BFS:

1. Define a function that takes an adjacency matrix `graph` and a starting node `startNode` as input.
2. Create an empty set `visited` to keep track of visited nodes.
3. Create an empty queue `queue` and enqueue `startNode` into it.
4. Mark `startNode` as visited.
5. Use a `while` loop with the condition that the `queue` is not empty:
    *   Dequeue a node from the `queue` and assign it to `currentNode`.
    *   Process `currentNode`.
    *   Iterate through the row corresponding to `currentNode` in the adjacency matrix:
        *   If an element at index `j` in the row is 1 (indicating an edge) and node `j` has not been visited:
            *   Mark node `j` as visited.
            *   Enqueue node `j` into the `queue`.

#### For DFS:

1. Define a function that takes an adjacency matrix `graph` and a starting node `startNode` as input.
2. Create an empty set `visited` to keep track of visited nodes.
3. Create an empty stack `stack` and push `startNode` onto it.
4. Use a `while` loop with the condition that the `stack` is not empty:
    *   Pop a node from the `stack` and assign it to `currentNode`.
    *   If `currentNode` has not been visited:
        *   Mark `currentNode` as visited by adding it to `visited`.
        *   Process `currentNode`.
        *   Iterate through the row corresponding to `currentNode` in the adjacency matrix in reverse order:
            *   If an element at index `j` in the row is 1 (indicating an edge) and node `j` has not been visited:
                *   Push node `j` onto the `stack`.
