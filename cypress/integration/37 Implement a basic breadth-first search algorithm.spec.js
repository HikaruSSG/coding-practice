describe('Breadth-First Search Algorithm', () => {
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
        description: 'should traverse the graph in breadth-first order',
        input: createGraph(),
        expected: ['A', 'B', 'C', 'D', 'E'],
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

    // Solution 1: Using a queue
    // Time Complexity: O(V + E), Memory Allocation: O(V)
    it('should traverse the graph using a queue', () => {
      testCases.forEach(({ input, expected, description }) => {
        cy.stub(console, 'log').as('consoleLog');
        const startTime = performance.now();
        bfs1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${description}": ${executionTime}ms`);
        cy.get('@consoleLog').should('have.callCount', expected.length);
        expected.forEach((value, index) => {
            cy.get('@consoleLog').should('have.been.calledWith', value);
        });
      });
    });

    // Solution 2: Using a while loop and queue
    // Time Complexity: O(V + E), Memory Allocation: O(V)
    it('should traverse the graph using a while loop and queue', () => {
        testCases.forEach(({ input, expected, description }) => {
            cy.stub(console, 'log').as('consoleLog');
            const startTime = performance.now();
            bfs2(input);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for input "${description}": ${executionTime}ms`);
            cy.get('@consoleLog').should('have.callCount', expected.length);
            expected.forEach((value, index) => {
                cy.get('@consoleLog').should('have.been.calledWith', value);
            });
        });
    });

    // Solution 3: Using recursion and a queue
    // Time Complexity: O(V + E), Memory Allocation: O(V)
    it('should traverse the graph using recursion and a queue', () => {
        testCases.forEach(({ input, expected, description }) => {
            cy.stub(console, 'log').as('consoleLog');
            const startTime = performance.now();
            bfs3(input);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for input "${description}": ${executionTime}ms`);
            cy.get('@consoleLog').should('have.callCount', expected.length);
            expected.forEach((value, index) => {
                cy.get('@consoleLog').should('have.been.calledWith', value);
            });
        });
    });

    // Solution 4: Using a for loop and queue
    // Time Complexity: O(V + E), Memory Allocation: O(V)
    it('should traverse the graph using a for loop and queue', () => {
        testCases.forEach(({ input, expected, description }) => {
            cy.stub(console, 'log').as('consoleLog');
            const startTime = performance.now();
            bfs4(input);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for input "${description}": ${executionTime}ms`);
            cy.get('@consoleLog').should('have.callCount', expected.length);
            expected.forEach((value, index) => {
                cy.get('@consoleLog').should('have.been.calledWith', value);
            });
        });
    });

    // Solution 5: Using a generator function
    // Time Complexity: O(V + E), Memory Allocation: O(V)
    it('should traverse the graph using a generator function', () => {
        testCases.forEach(({ input, expected, description }) => {
            cy.stub(console, 'log').as('consoleLog');
            const startTime = performance.now();
            traverseBFS(input);
            const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for input "${description}": ${executionTime}ms`);
            cy.get('@consoleLog').should('have.callCount', expected.length);
            expected.forEach((value, index) => {
                cy.get('@consoleLog').should('have.been.calledWith', value);
            });
        });
    });

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
});
