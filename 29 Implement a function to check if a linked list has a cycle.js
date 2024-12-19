// Implement a function to check if a linked list has a cycle

// Helper function to create a linked list node
function createNode(value) {
    return { value: value, next: null };
}

// Solution 1: Using Floyd's cycle-finding algorithm (tortoise and hare)
function hasCycle1(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
// Pros: Efficient, uses constant space, good performance.
// Cons: Slightly more complex to understand.
// Recommended: This is generally the recommended approach due to its efficiency and minimal space complexity.

// Solution 2: Using a Set
function hasCycle2(head) {
    const visited = new Set();
    let current = head;
    while (current) {
        if (visited.has(current)) {
            return true;
        }
        visited.add(current);
        current = current.next;
    }
    return false;
}
// Pros: Simple and easy to understand.
// Cons: Uses extra space to store visited nodes.

// Solution 3: Using a Map
function hasCycle3(head) {
    const visited = new Map();
    let current = head;
    while (current) {
        if (visited.has(current)) {
            return true;
        }
        visited.set(current, true);
        current = current.next;
    }
    return false;
}
// Pros: Similar to the Set approach.
// Cons: Uses extra space to store visited nodes.

// Solution 4: Using a try-catch block (modifying the list)
function hasCycle4(head) {
    try {
        let current = head;
        while (current) {
            if (current.visited) {
                return true;
            }
            current.visited = true;
            current = current.next;
        }
        return false;
    } finally {
        let current = head;
        while (current) {
            delete current.visited;
            current = current.next;
        }
    }
}
// Pros: Avoids using extra space.
// Cons: Modifies the original linked list, less efficient.

// Solution 5: Using a while loop and a counter
function hasCycle5(head) {
    let current = head;
    let count = 0;
    while (current) {
        if (count > 10000) {
            return true;
        }
        current = current.next;
        count++;
    }
    return false;
}
// Pros: Simple and easy to understand.
// Cons: Not a reliable way to detect cycles, may not work for very long lists.
