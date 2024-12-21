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
