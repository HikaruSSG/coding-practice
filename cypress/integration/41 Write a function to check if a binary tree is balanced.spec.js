describe('Binary Tree Balance Checker', () => {
    const createNode = (value) => ({ value: value, left: null, right: null });

    const createBalancedTree = () => {
        const root = createNode(1);
        root.left = createNode(2);
        root.right = createNode(3);
        root.left.left = createNode(4);
        root.left.right = createNode(5);
        root.right.left = createNode(6);
        root.right.right = createNode(7);
        return root;
    };

    const createUnbalancedTree = () => {
        const root = createNode(1);
        root.left = createNode(2);
        root.left.left = createNode(3);
        root.left.left.left = createNode(4);
        return root;
    };

    const createAnotherUnbalancedTree = () => {
        const root = createNode(1);
        root.right = createNode(2);
        root.right.right = createNode(3);
        root.right.right.right = createNode(4);
        return root;
    };

    const createSkewedLeftTree = () => {
        const root = createNode(1);
        root.left = createNode(2);
        root.left.left = createNode(3);
        return root;
    };

    const createSkewedRightTree = () => {
        const root = createNode(1);
        root.right = createNode(2);
        root.right.right = createNode(3);
        return root;
    };

    const testCases = [
      { input: createBalancedTree(), expected: true },
      { input: createUnbalancedTree(), expected: false },
      { input: createAnotherUnbalancedTree(), expected: false },
      { input: createSkewedLeftTree(), expected: false },
      { input: createSkewedRightTree(), expected: false },
      { input: createNode(1), expected: true },
      { input: null, expected: true },
    ];

    // Solution 1: Using recursion and height calculation
    // Time Complexity: O(n), Memory Allocation: O(h) where h is the height of the tree
    it('should check if a binary tree is balanced using recursion and height calculation', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isBalanced1(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 2: Using recursion and a helper function
    // Time Complexity: O(n), Memory Allocation: O(h) where h is the height of the tree
    it('should check if a binary tree is balanced using recursion and a helper function', () => {
      testCases.forEach(({ input, expected }) => {
        const startTime = performance.now();
        const result = isBalanced2(input);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        cy.log(`Execution time for input "${input}": ${executionTime}ms`);
        expect(result).to.equal(expected);
      });
    });

    // Solution 3: Using a while loop and a stack
    // Time Complexity: O(n), Memory Allocation: O(n)
    it('should check if a binary tree is balanced using a while loop and a stack', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isBalanced3(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 4: Using a for loop and recursion
    // Time Complexity: O(n), Memory Allocation: O(h) where h is the height of the tree
    it('should check if a binary tree is balanced using a for loop and recursion', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = isBalanced4(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    // Solution 5: Using a generator function
    // Time Complexity: O(n), Memory Allocation: O(h) where h is the height of the tree
    it('should check if a binary tree is balanced using a generator function', () => {
        testCases.forEach(({ input, expected }) => {
          const startTime = performance.now();
          const result = checkBalance(input);
          const endTime = performance.now();
          const executionTime = endTime - startTime;
          cy.log(`Execution time for input "${input}": ${executionTime}ms`);
          expect(result).to.equal(expected);
        });
      });

    function isBalanced1(root) {
        if (!root) {
            return true;
        }
        const height = (node) => {
            if (!node) {
                return 0;
            }
            const leftHeight = height(node.left);
            const rightHeight = height(node.right);
            if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
                return -1;
            }
            return Math.max(leftHeight, rightHeight) + 1;
        };
        return height(root) !== -1;
    }

    function isBalanced2(root) {
        const checkHeight = (node) => {
            if (!node) {
                return 0;
            }
            const leftHeight = checkHeight(node.left);
            if (leftHeight === -1) {
                return -1;
            }
            const rightHeight = checkHeight(node.right);
            if (rightHeight === -1) {
                return -1;
            }
            if (Math.abs(leftHeight - rightHeight) > 1) {
                return -1;
            }
            return Math.max(leftHeight, rightHeight) + 1;
        };
        return checkHeight(root) !== -1;
    }

    function isBalanced3(root) {
        if (!root) {
            return true;
        }
        const stack = [{ node: root, height: 0 }];
        const heights = new Map();
        while (stack.length > 0) {
            const { node, height } = stack.pop();
            if (!node) {
                continue;
            }
            if (heights.has(node)) {
                continue;
            }
            heights.set(node, height);
            if (node.left) {
                stack.push({ node: node.left, height: height + 1 });
            }
            if (node.right) {
                stack.push({ node: node.right, height: height + 1 });
            }
        }
        for (let [node, height] of heights) {
            const leftHeight = heights.get(node.left) || 0;
            const rightHeight = heights.get(node.right) || 0;
            if (Math.abs(leftHeight - rightHeight) > 1) {
                return false;
            }
        }
        return true;
    }

    function isBalanced4(root) {
        if (!root) {
            return true;
        }
        const getHeight = (node) => {
            if (!node) {
                return 0;
            }
            const leftHeight = getHeight(node.left);
            const rightHeight = getHeight(node.right);
            if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
                return -1;
            }
            return Math.max(leftHeight, rightHeight) + 1;
        };
        return getHeight(root) !== -1;
    }

    function* isBalanced5(root) {
        if (!root) {
            return true;
        }
        const height = (node) => {
            if (!node) {
                return 0;
            }
            const leftHeight = height(node.left);
            const rightHeight = height(node.right);
            if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
                return -1;
            }
            return Math.max(leftHeight, rightHeight) + 1;
        };
        yield height(root) !== -1;
    }

    function checkBalance(root) {
        for (const value of isBalanced5(root)) {
            return value;
        }
    }
});
