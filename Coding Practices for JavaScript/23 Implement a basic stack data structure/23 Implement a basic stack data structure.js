// Implement a basic stack data structure

// Solution 1: Using an array and methods
function createStack1() {
  const stack = [];
  return {
    push: (item) => stack.push(item),
    pop: () => stack.pop(),
    peek: () => stack[stack.length - 1],
    isEmpty: () => stack.length === 0,
    size: () => stack.length,
  };
}
// Pros: Simple and easy to understand.
// Cons: Less structured than other approaches.

// Solution 2: Using an object and methods
function createStack2() {
    const stack = [];
    return {
        push(item) {
            stack.push(item);
        },
        pop() {
            return stack.pop();
        },
        peek() {
            return stack[stack.length - 1];
        },
        isEmpty() {
            return stack.length === 0;
        },
        size() {
            return stack.length;
        }
    };
}
// Pros: Similar to the first solution, but uses methods.
// Cons: Less structured than the class approach.

// Solution 3: Using a class
class Stack3 {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        return this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    size() {
        return this.stack.length;
    }
}

function createStack3() {
    return new Stack3();
}
// Pros: More structured and maintainable, uses a class for encapsulation.
// Cons: Slightly more verbose than the object literal approach.
// Recommended: This is generally the recommended approach due to its structure and maintainability.

// Solution 4: Using a linked list
function createStack4() {
    let head = null;
    return {
        push(item) {
            head = { value: item, next: head };
        },
        pop() {
            if (!head) return undefined;
            const value = head.value;
            head = head.next;
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
// Pros: Uses a linked list for storing stack elements, avoids resizing.
// Cons: More complex to implement, less common for this use case.

// Solution 5: Using closures
function createStack5() {
    let stack = [];
    return {
        push: function(item) {
            stack.push(item);
        },
        pop: function() {
            return stack.pop();
        },
        peek: function() {
            return stack[stack.length - 1];
        },
        isEmpty: function() {
            return stack.length === 0;
        },
        size: function() {
            return stack.length;
        }
    };
}
// Pros: Uses closures to encapsulate the stack array.
// Cons: Less structured than the class approach.
