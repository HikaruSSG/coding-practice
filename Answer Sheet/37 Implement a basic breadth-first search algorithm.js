function createGraphNode(value) {
    return { value: value, neighbors: [] };
}
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
export { createGraphNode, bfs1, bfs2, bfs3, bfs4, bfs5, traverseBFS };
