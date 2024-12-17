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
