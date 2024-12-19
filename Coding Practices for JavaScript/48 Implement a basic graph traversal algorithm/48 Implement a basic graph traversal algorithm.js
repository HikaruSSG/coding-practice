// Implement a basic graph traversal algorithm

// Helper function to create a graph node
function createGraphNode(value) {
    return { value: value, neighbors: [] };
}

// Solution 1: Using depth-first search (recursive)
function graphTraversal1(startNode) {
    const visited = new Set();
    const dfs = (node) => {
        if (!node || visited.has(node)) {
            return;
        }
        visited.add(node);
        console.log(node.value);
        for (let neighbor of node.neighbors) {
            dfs(neighbor);
        }
    };
    dfs(startNode);
}
// Pros: Clear and easy to understand, uses recursion for traversal.
// Cons: Can be less performant due to function call overhead, may cause stack overflow for very deep graphs.
// Recommended: This is generally the recommended approach for depth-first search due to its clarity and conciseness.

// Solution 2: Using breadth-first search
function graphTraversal2(startNode) {
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
// Pros: Efficient for finding the shortest path in unweighted graphs.
// Cons: May not be as intuitive for general graph traversal.

// Solution 3: Using depth-first search (iterative)
function graphTraversal3(startNode) {
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

// Solution 4: Using a generator function (DFS)
function* graphTraversal4(startNode, visited = new Set()) {
    if (!startNode || visited.has(startNode)) {
        return;
    }
    visited.add(startNode);
    yield startNode.value;
    for (let neighbor of startNode.neighbors) {
        yield* graphTraversal4(neighbor, visited);
    }
}

function traverseGraphDFS(startNode) {
    for (const value of graphTraversal4(startNode)) {
        console.log(value);
    }
}
// Pros: Memory efficient for very large graphs, can be used to generate values on demand.
// Cons: More complex to understand, requires additional code to use.

// Solution 5: Using a generator function (BFS)
function* graphTraversal5(startNode) {
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

function traverseGraphBFS(startNode) {
    for (const value of graphTraversal5(startNode)) {
        console.log(value);
    }
}
// Pros: Memory efficient for very large graphs, can be used to generate values on demand.
// Cons: More complex to understand, requires additional code to use.
