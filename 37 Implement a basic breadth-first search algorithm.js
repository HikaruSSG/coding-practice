// Implement a basic breadth-first search algorithm

// Helper function to create a graph node
function createGraphNode(value) {
    return { value: value, neighbors: [] };
}

// Solution 1: Using a queue
function bfs1(startNode) {
  if (!startNode) return;
  const queue = [startNode];
  const visited = new Set();
  visited.add(startNode);
  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.value);
    for (let neighbor of node.neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
// Pros: Efficient and easy to understand, uses a queue to traverse the graph.
// Cons: None.
// Recommended: This is generally the recommended approach due to its efficiency and clarity.

// Solution 2: Using a while loop and queue
function bfs2(startNode) {
    if (!startNode) return;
    const queue = [startNode];
    const visited = new Set();
    while (queue.length > 0) {
        const node = queue.shift();
        if (!visited.has(node)) {
            visited.add(node);
            console.log(node.value);
            for (let neighbor of node.neighbors) {
                queue.push(neighbor);
            }
        }
    }
}
// Pros: Similar to the queue approach, uses a while loop.
// Cons: Slightly more verbose than the queue approach.

// Solution 3: Using recursion and a queue
function bfs3(startNode) {
    if (!startNode) return;
    const queue = [startNode];
    const visited = new Set();
    const traverse = () => {
        if (queue.length === 0) return;
        const node = queue.shift();
        if (!visited.has(node)) {
            visited.add(node);
            console.log(node.value);
            for (let neighbor of node.neighbors) {
                queue.push(neighbor);
            }
        }
        traverse();
    };
    traverse();
}
// Pros: Uses recursion to traverse the graph.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for very large graphs.

// Solution 4: Using a for loop and queue
function bfs4(startNode) {
    if (!startNode) return;
    const queue = [startNode];
    const visited = new Set();
    for (let i = 0; queue.length > 0; i++) {
        const node = queue.shift();
        if (!visited.has(node)) {
            visited.add(node);
            console.log(node.value);
            for (let neighbor of node.neighbors) {
                queue.push(neighbor);
            }
        }
    }
}
// Pros: Similar to the queue approach, uses a for loop.
// Cons: Slightly more verbose than the queue approach.

// Solution 5: Using a generator function
function* bfs5(startNode) {
    if (!startNode) return;
    const queue = [startNode];
    const visited = new Set();
    while (queue.length > 0) {
        const node = queue.shift();
        if (!visited.has(node)) {
            visited.add(node);
            yield node.value;
            for (let neighbor of node.neighbors) {
                queue.push(neighbor);
            }
        }
    }
}

function traverseBFS(startNode) {
    for (const value of bfs5(startNode)) {
        console.log(value);
    }
}
// Pros: Memory efficient for very large graphs, can be used to generate values on demand.
// Cons: More complex to understand, requires additional code to use.
