// Implement a basic queue data structure

// Solution 1: Using an array and methods
function createQueue1() {
  const queue = [];
  return {
    enqueue: (item) => queue.push(item),
    dequeue: () => queue.shift(),
    peek: () => queue[0],
    isEmpty: () => queue.length === 0,
    size: () => queue.length,
  };
}
// Pros: Simple and easy to understand.
// Cons: Less structured than other approaches, shift operation can be inefficient for large queues.

// Solution 2: Using an object and methods
function createQueue2() {
    const queue = [];
    return {
        enqueue(item) {
            queue.push(item);
        },
        dequeue() {
            return queue.shift();
        },
        peek() {
            return queue[0];
        },
        isEmpty() {
            return queue.length === 0;
        },
        size() {
            return queue.length;
        }
    };
}
// Pros: Similar to the first solution, but uses methods.
// Cons: Less structured than the class approach, shift operation can be inefficient for large queues.

// Solution 3: Using a class
class Queue3 {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        return this.queue.shift();
    }
    peek() {
        return this.queue[0];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    size() {
        return this.queue.length;
    }
}

function createQueue3() {
    return new Queue3();
}
// Pros: More structured and maintainable, uses a class for encapsulation.
// Cons: Slightly more verbose than the object literal approach, shift operation can be inefficient for large queues.
// Recommended: This is generally the recommended approach due to its structure and maintainability.

// Solution 4: Using a linked list
function createQueue4() {
    let head = null;
    let tail = null;
    return {
        enqueue(item) {
            const newNode = { value: item, next: null };
            if (!head) {
                head = newNode;
                tail = newNode;
            } else {
                tail.next = newNode;
                tail = newNode;
            }
        },
        dequeue() {
            if (!head) return undefined;
            const value = head.value;
            head = head.next;
            if (!head) {
                tail = null;
            }
            return value;
        },
        peek() {
            return head ? head.value : undefined;
        },
        isEmpty() {
            return !head;
        },
        size() {
            let count = 0;
            let current = head;
            while (current) {
                count++;
                current = current.next;
            }
            return count;
        }
    };
}
// Pros: Uses a linked list for storing queue elements, avoids resizing and inefficient shift operation.
// Cons: More complex to implement, less common for this use case.

// Solution 5: Using closures
function createQueue5() {
    let queue = [];
    return {
        enqueue: function(item) {
            queue.push(item);
        },
        dequeue: function() {
            return queue.shift();
        },
        peek: function() {
            return queue[0];
        },
        isEmpty: function() {
            return queue.length === 0;
        },
        size: function() {
            return queue.length;
        }
    };
}
// Pros: Uses closures to encapsulate the queue array.
// Cons: Less structured than the class approach, shift operation can be inefficient for large queues.
