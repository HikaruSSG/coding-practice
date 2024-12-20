describe('LRU Cache', () => {
    const testCases = [
      {
        description: 'should add and get items',
        capacity: 3,
        actions: [
          { type: 'put', key: 'a', value: 1 },
          { type: 'put', key: 'b', value: 2 },
          { type: 'put', key: 'c', value: 3 },
          { type: 'get', key: 'a', expected: 1 },
          { type: 'get', key: 'b', expected: 2 },
          { type: 'get', key: 'c', expected: 3 },
        ],
      },
      {
        description: 'should evict the least recently used item',
        capacity: 2,
        actions: [
          { type: 'put', key: 'a', value: 1 },
          { type: 'put', key: 'b', value: 2 },
          { type: 'put', key: 'c', value: 3 },
          { type: 'get', key: 'a', expected: undefined },
          { type: 'get', key: 'b', expected: 2 },
          { type: 'get', key: 'c', expected: 3 },
        ],
      },
      {
        description: 'should update the value of an existing key',
        capacity: 2,
        actions: [
          { type: 'put', key: 'a', value: 1 },
          { type: 'put', key: 'b', value: 2 },
          { type: 'put', key: 'a', value: 3 },
          { type: 'get', key: 'a', expected: 3 },
          { type: 'get', key: 'b', expected: 2 },
        ],
      },
      {
        description: 'should handle get on non-existent key',
        capacity: 2,
        actions: [
          { type: 'get', key: 'a', expected: undefined },
        ],
      },
      {
        description: 'should handle multiple put and get operations',
        capacity: 3,
        actions: [
          { type: 'put', key: 'a', value: 1 },
          { type: 'put', key: 'b', value: 2 },
          { type: 'put', key: 'c', value: 3 },
          { type: 'get', key: 'a', expected: 1 },
          { type: 'put', key: 'd', value: 4 },
          { type: 'get', key: 'b', expected: undefined },
          { type: 'get', key: 'c', expected: 3 },
          { type: 'get', key: 'd', expected: 4 },
          { type: 'put', key: 'e', value: 5 },
          { type: 'get', key: 'a', expected: undefined },
        ],
      },
    ];

    // Solution 1: Using a Map and array
    // Time Complexity: get O(n), put O(n), Memory Allocation: O(n)
    it('should implement LRU cache using a Map and array', () => {
      testCases.forEach(({ actions, description, capacity }) => {
        const cache = createLRUCache1(capacity);
        cy.log(`Testing: ${description}`);
        actions.forEach(({ type, key, value, expected }) => {
            const startTime = performance.now();
            let result;
          if (type === 'put') {
            cache.put(key, value);
          } else if (type === 'get') {
            result = cache.get(key);
            expect(result).to.equal(expected);
          }
           const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
        });
      });
    });

    // Solution 2: Using a Map and doubly linked list
    // Time Complexity: get O(1), put O(1), Memory Allocation: O(n)
    it('should implement LRU cache using a Map and doubly linked list', () => {
        testCases.forEach(({ actions, description, capacity }) => {
          const cache = createLRUCache2(capacity);
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, key, value, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'put') {
              cache.put(key, value);
            } else if (type === 'get') {
              result = cache.get(key);
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

    // Solution 3: Using an object and array
    // Time Complexity: get O(n), put O(n), Memory Allocation: O(n)
    it('should implement LRU cache using an object and array', () => {
        testCases.forEach(({ actions, description, capacity }) => {
          const cache = createLRUCache3(capacity);
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, key, value, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'put') {
              cache.put(key, value);
            } else if (type === 'get') {
              result = cache.get(key);
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

    // Solution 4: Using a Map and a while loop
    // Time Complexity: get O(1), put O(n), Memory Allocation: O(n)
    it('should implement LRU cache using a Map and a while loop', () => {
        testCases.forEach(({ actions, description, capacity }) => {
          const cache = createLRUCache4(capacity);
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, key, value, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'put') {
              cache.put(key, value);
            } else if (type === 'get') {
              result = cache.get(key);
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

    // Solution 5: Using a Map and forEach
    // Time Complexity: get O(1), put O(n), Memory Allocation: O(n)
    it('should implement LRU cache using a Map and forEach', () => {
        testCases.forEach(({ actions, description, capacity }) => {
          const cache = createLRUCache5(capacity);
          cy.log(`Testing: ${description}`);
          actions.forEach(({ type, key, value, expected }) => {
            const startTime = performance.now();
            let result;
            if (type === 'put') {
              cache.put(key, value);
            } else if (type === 'get') {
              result = cache.get(key);
              expect(result).to.equal(expected);
            }
             const endTime = performance.now();
            const executionTime = endTime - startTime;
            cy.log(`Execution time for action "${type}": ${executionTime}ms`);
          });
        });
      });

    function createLRUCache1(capacity) {
        const cache = new Map();
        const keys = [];
        return {
            get: (key) => {
                if (cache.has(key)) {
                    const value = cache.get(key);
                    keys.splice(keys.indexOf(key), 1);
                    keys.push(key);
                    return value;
                }
                return undefined;
            },
            put: (key, value) => {
                if (cache.has(key)) {
                    cache.set(key, value);
                    keys.splice(keys.indexOf(key), 1);
                    keys.push(key);
                } else {
                    if (cache.size >= capacity) {
                        const firstKey = keys.shift();
                        cache.delete(firstKey);
                    }
                    cache.set(key, value);
                    keys.push(key);
                }
            }
        };
    }

    function createLRUCache2(capacity) {
        const cache = new Map();
        const dll = { head: null, tail: null };
        const addNode = (key, value) => {
            const node = { key, value, prev: null, next: null };
            if (!dll.head) {
                dll.head = node;
                dll.tail = node;
            } else {
                node.next = dll.head;
                dll.head.prev = node;
                dll.head = node;
            }
            cache.set(key, node);
        };
        const removeNode = (node) => {
            if (node === dll.head && node === dll.tail) {
                dll.head = null;
                dll.tail = null;
            } else if (node === dll.head) {
                dll.head = node.next;
                dll.head.prev = null;
            } else if (node === dll.tail) {
                dll.tail = node.prev;
                dll.tail.next = null;
            } else {
                node.prev.next = node.next;
                node.next.prev = node.prev;
            }
            cache.delete(node.key);
        };
        const moveToHead = (node) => {
            removeNode(node);
            addNode(node.key, node.value);
        };
        return {
            get: (key) => {
                if (cache.has(key)) {
                    const node = cache.get(key);
                    moveToHead(node);
                    return node.value;
                }
                return undefined;
            },
            put: (key, value) => {
                if (cache.has(key)) {
                    const node = cache.get(key);
                    node.value = value;
                    moveToHead(node);
                } else {
                    if (cache.size >= capacity) {
                        removeNode(dll.tail);
                    }
                    addNode(key, value);
                }
            }
        };
    }

    function createLRUCache3(capacity) {
        const cache = {};
        const keys = [];
        return {
            get: (key) => {
                if (cache[key]) {
                    const value = cache[key];
                    keys.splice(keys.indexOf(key), 1);
                    keys.push(key);
                    return value;
                }
                return undefined;
            },
            put: (key, value) => {
                if (cache[key]) {
                    cache[key] = value;
                    keys.splice(keys.indexOf(key), 1);
                    keys.push(key);
                } else {
                    if (keys.length >= capacity) {
                        const firstKey = keys.shift();
                        delete cache[firstKey];
                    }
                    cache[key] = value;
                    keys.push(key);
                }
            }
        };
    }

    function createLRUCache4(capacity) {
        const cache = new Map();
        return {
            get: (key) => {
                if (cache.has(key)) {
                    const value = cache.get(key);
                    cache.delete(key);
                    cache.set(key, value);
                    return value;
                }
                return undefined;
            },
            put: (key, value) => {
                if (cache.has(key)) {
                    cache.delete(key);
                }
                cache.set(key, value);
                if (cache.size > capacity) {
                    const iterator = cache.keys();
                    let firstKey = iterator.next().value;
                    cache.delete(firstKey);
                }
            }
        };
    }

    function createLRUCache5(capacity) {
        const cache = new Map();
        return {
            get: (key) => {
                if (cache.has(key)) {
                    const value = cache.get(key);
                    cache.delete(key);
                    cache.set(key, value);
                    return value;
                }
                return undefined;
            },
            put: (key, value) => {
                if (cache.has(key)) {
                    cache.delete(key);
                }
                cache.set(key, value);
                if (cache.size > capacity) {
                    let firstKey;
                    cache.forEach((_, key) => {
                        if (!firstKey) {
                            firstKey = key;
                        }
                    });
                    cache.delete(firstKey);
                }
            }
        };
    }
});
