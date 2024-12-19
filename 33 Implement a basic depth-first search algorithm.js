// Implement a basic depth-first search algorithm

// Helper function to create a graph node
function createGraphNode(value) {
    return { value: value, neighbors: [] };
}

// Solution 1: Using recursion
function dfs1(node, visited = new Set()) {
  if (!node || visited.has(node)) {
    return;
  }
  visited.add(node);
  console.log(node.value);
  for (let neighbor of node.neighbors) {
    dfs1(neighbor, visited);
  }
}
// Pros: Clear and easy to understand, uses recursion to traverse the graph.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for very deep graphs.
// Recommended: This is generally the recommended approach due to its clarity and conciseness.

// Solution 2: Using a stack
function dfs2(startNode) {
    if (!startNode) return;
    const stack = [startNode];
    const visited = new Set();
    while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            console.log(node.value);
            for (let neighbor of node.neighbors) {
                stack.push(neighbor);
            }
        }
    }
}
// Pros: Iterative approach, avoids recursion.
// Cons: Slightly more verbose than the recursive approach.

// Solution 3: Using a while loop and recursion
function dfs3(startNode) {
    const visited = new Set();
    const stack = [startNode];
    while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            console.log(node.value);
            for (let neighbor of node.neighbors) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}
// Pros: Iterative approach, avoids recursion.
// Cons: Similar to the stack approach, slightly more verbose.

// Solution 4: Using a generator function
function* dfs4(node, visited = new Set()) {
    if (!node || visited.has(node)) {
        return;
    }
    visited.add(node);
    yield node.value;
    for (let neighbor of node.neighbors) {
        yield* dfs4(neighbor, visited);
    }
}

function traverseDFS(startNode) {
    for (const value of dfs4(startNode)) {
        console.log(value);
    }
}
// Pros: Memory efficient for very large graphs, can be used to generate values on demand.
// Cons: More complex to understand, requires additional code to use.

// Solution 5: Using a forEach loop and recursion
function dfs5(node, visited = new Set()) {
    if (!node || visited.has(node)) {
        return;
    }
    visited.add(node);
    console.log(node.value);
    node.neighbors.forEach(neighbor => {
        dfs5(neighbor, visited);
    });
}
// Pros: Similar to the recursive approach, uses forEach loop.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for very deep graphs.
