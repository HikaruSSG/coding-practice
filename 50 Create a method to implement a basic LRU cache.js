// Create a method to implement a basic LRU cache

// Solution 1: Using a Map and array
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

// Solution 2: Using a Map and doubly linked list
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

// Solution 3: Using an object and array
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

// Solution 4: Using a Map and a while loop
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

// Solution 5: Using a Map and forEach
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
