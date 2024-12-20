describe('Graph Traversal Algorithm', () => {
    const createGraphNode = (value) => ({ value: value, neighbors: [] });

    const createGraph = () => {
        const nodeA = createGraphNode('A');
        const nodeB = createGraphNode('B');
        const nodeC = createGraphNode('C');
        const nodeD = createGraphNode('D');
        const nodeE = createGraphNode('E');

        nodeA.neighbors = [nodeB, nodeC];
        nodeB.neighbors = [nodeD, nodeE];
        nodeC.neighbors = [nodeE];
        return nodeA;
    };

    const testCases = [
      {
        description: 'should traverse the graph in depth-first order',
        input: createGraph(),
        expectedDFS: ['A', 'B', 'D', 'E', 'C'],
        expectedBFS: ['A', 'B', 'C', 'D', 'E'],
      },
      {
        description: 'should handle a graph with no neighbors',
        input: createGraphNode('A'),
        expectedDFS: ['A'],
        expectedBFS: ['A'],
      },
      {
        description: 'should handle a graph with a single node',
        input: createGraphNode('A'),
        expectedDFS: ['A'],
        expectedBFS: ['A'],
      },
    ];

    // Solution 1: Using depth-first search (recursive)
    // Time Complexity: O(V + E), Memory Allocation: O(V) due to call stack
    it('should traverse the graph using depth-first search (recursive)', () => {
      testCases.forEach(({ input, expectedDFS, description }) => {
        cy.stub(console, 'log').as('consoleLog');
        const startTime = performance.now();
        graphTraversal1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${description}": ${executionTime}ms`);
        cy.get('@consoleLog').should('have.callCount', expectedDFS.length);
        expectedDFS.forEach((value, index) => {
            cy.get('@consoleLog').should('have.been.calledWith', value);
        });
      });
    });

    // Solution 2: Using breadth-first search
    // Time Complexity: O(V + E), Memory Allocation: O(V)
    it('should traverse the graph using breadth-first search', () => {
        testCases.forEach(({ input, expectedBFS, description }) => {
            cy.stub(console, 'log').as('consoleLog');
            const startTime = performance.now();
            graphTraversal2(input);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for input "${description}": ${executionTime}ms`);
            cy.get('@consoleLog').should('have.callCount', expectedBFS.length);
            expectedBFS.forEach((value, index) => {
                cy.get('@consoleLog').should('have.been.calledWith', value);
            });
        });
    });

    // Solution 3: Using depth-first search (iterative)
    // Time Complexity: O(V + E), Memory Allocation: O(V)
    it('should traverse the graph using depth-first search (iterative)', () => {
        testCases.forEach(({ input, expectedDFS, description }) => {
            cy.stub(console, 'log').as('consoleLog');
            const startTime = performance.now();
            graphTraversal3(input);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for input "${description}": ${executionTime}ms`);
            cy.get('@consoleLog').should('have.callCount', expectedDFS.length);
            expectedDFS.forEach((value, index) => {
                cy.get('@consoleLog').should('have.been.calledWith', value);
            });
        });
    });

    // Solution 4: Using a generator function (DFS)
    // Time Complexity: O(V + E), Memory Allocation: O(V)
    it('should traverse the graph using a generator function (DFS)', () => {
        testCases.forEach(({ input, expectedDFS, description }) => {
            cy.stub(console, 'log').as('consoleLog');
            const startTime = performance.now();
            traverseGraphDFS(input);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for input "${description}": ${executionTime}ms`);
            cy.get('@consoleLog').should('have.callCount', expectedDFS.length);
            expectedDFS.forEach((value, index) => {
                cy.get('@consoleLog').should('have.been.calledWith', value);
            });
        });
    });

    // Solution 5: Using a generator function (BFS)
    // Time Complexity: O(V + E), Memory Allocation: O(V)
    it('should traverse the graph using a generator function (BFS)', () => {
        testCases.forEach(({ input, expectedBFS, description }) => {
            cy.stub(console, 'log').as('consoleLog');
            const startTime = performance.now();
            traverseGraphBFS(input);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for input "${description}": ${executionTime}ms`);
            cy.get('@consoleLog').should('have.callCount', expectedBFS.length);
            expectedBFS.forEach((value, index) => {
                cy.get('@consoleLog').should('have.been.calledWith', value);
            });
        });
    });

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
});
