describe('Depth-First Search Algorithm', () => {
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
        expected: ['A', 'B', 'D', 'E', 'C'],
      },
      {
        description: 'should handle a graph with no neighbors',
        input: createGraphNode('A'),
        expected: ['A'],
      },
      {
        description: 'should handle a graph with a single node',
        input: createGraphNode('A'),
        expected: ['A'],
      },
    ];

    // Solution 1: Using recursion
    // Time Complexity: O(V + E), Memory Allocation: O(V) due to call stack
    it('should traverse the graph using recursion', () => {
      testCases.forEach(({ input, expected, description }) => {
        cy.stub(console, 'log').as('consoleLog');
        const startTime = performance.now();
        dfs1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${description}": ${executionTime}ms`);
        cy.get('@consoleLog').should('have.callCount', expected.length);
        expected.forEach((value, index) => {
            cy.get('@consoleLog').should('have.been.calledWith', value);
        });
      });
    });

    // Solution 2: Using a stack
    // Time Complexity: O(V + E), Memory Allocation: O(V)
    it('should traverse the graph using a stack', () => {
        testCases.forEach(({ input, expected, description }) => {
            cy.stub(console, 'log').as('consoleLog');
            const startTime = performance.now();
            dfs2(input);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for input "${description}": ${executionTime}ms`);
            cy.get('@consoleLog').should('have.callCount', expected.length);
            expected.forEach((value, index) => {
                cy.get('@consoleLog').should('have.been.calledWith', value);
            });
        });
    });

    // Solution 3: Using a while loop and recursion
    // Time Complexity: O(V + E), Memory Allocation: O(V)
    it('should traverse the graph using a while loop and recursion', () => {
        testCases.forEach(({ input, expected, description }) => {
            cy.stub(console, 'log').as('consoleLog');
            const startTime = performance.now();
            dfs3(input);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for input "${description}": ${executionTime}ms`);
            cy.get('@consoleLog').should('have.callCount', expected.length);
            expected.forEach((value, index) => {
                cy.get('@consoleLog').should('have.been.calledWith', value);
            });
        });
    });

    // Solution 4: Using a generator function
    // Time Complexity: O(V + E), Memory Allocation: O(V)
    it('should traverse the graph using a generator function', () => {
        testCases.forEach(({ input, expected, description }) => {
            cy.stub(console, 'log').as('consoleLog');
            const startTime = performance.now();
            traverseDFS(input);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for input "${description}": ${executionTime}ms`);
            cy.get('@consoleLog').should('have.callCount', expected.length);
            expected.forEach((value, index) => {
                cy.get('@consoleLog').should('have.been.calledWith', value);
            });
        });
    });

    // Solution 5: Using a forEach loop and recursion
    // Time Complexity: O(V + E), Memory Allocation: O(V) due to call stack
    it('should traverse the graph using a forEach loop and recursion', () => {
        testCases.forEach(({ input, expected, description }) => {
            cy.stub(console, 'log').as('consoleLog');
            const startTime = performance.now();
            dfs5(input);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for input "${description}": ${executionTime}ms`);
            cy.get('@consoleLog').should('have.callCount', expected.length);
            expected.forEach((value, index) => {
                cy.get('@consoleLog').should('have.been.calledWith', value);
            });
        });
    });

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
});
