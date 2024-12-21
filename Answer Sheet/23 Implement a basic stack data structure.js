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
