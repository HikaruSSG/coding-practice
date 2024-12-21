function createGraphNode(value) {
    return { value: value, next: null };
}
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
export { createGraphNode, dfs1, dfs2, dfs3, dfs4, traverseDFS, dfs5 };
