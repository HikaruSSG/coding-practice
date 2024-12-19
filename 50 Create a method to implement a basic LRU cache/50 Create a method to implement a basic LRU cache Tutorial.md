# 50 Create a method to implement a basic LRU cache Tutorial

## Prerequisites

*   Understanding of the LRU (Least Recently Used) cache eviction policy.
*   Knowledge of doubly linked lists and hash maps.

## Approach

### Approach 1: Using a Doubly Linked List and a Hash Map

This approach uses a doubly linked list to maintain the order of recently used items and a hash map to provide fast access to the nodes in the list.

### Procedure

1. **Define a Node class:**
    *   Each node will store a `key`, a `value`, a pointer to the `previous` node, and a pointer to the `next` node.

2. **Define an LRUCache class:**
    *   `capacity`: The maximum number of items the cache can hold.
    *   `cache`: A hash map that maps keys to nodes in the doubly linked list.
    *   `head`: A pointer to the head of the doubly linked list (most recently used).
    *   `tail`: A pointer to the tail of the doubly linked list (least recently used).
    *   `size`: The current number of items in the cache.

3. **Implement the `get(key)` method:**
    *   If the `key` exists in the `cache`:
        *   Get the corresponding `node` from the `cache`.
        *   Move the `node` to the head of the doubly linked list (mark it as most recently used).
        *   Return the `value` of the `node`.
    *   If the `key` does not exist, return -1 (or a special value indicating not found).

4. **Implement the `put(key, value)` method:**
    *   If the `key` already exists in the `cache`:
        *   Get the corresponding `node` from the `cache`.
        *   Update the `value` of the `node`.
        *   Move the `node` to the head of the doubly linked list.
    *   If the `key` does not exist:
        *   If the cache is full (`size` equals `capacity`):
            *   Remove the tail node (least recently used) from the doubly linked list and the `cache`.
            *   Decrement `size`.
        *   Create a new `node` with the given `key` and `value`.
        *   Add the new `node` to the head of the doubly linked list.
        *   Add the new `node` to the `cache` with the `key`.
        *   Increment `size`.

5. **Implement helper methods for moving a node to the head and removing the tail node:**
    *   `moveToHead(node)`:
        *   Remove the `node` from its current position in the list.
        *   Insert the `node` at the head of the list.
    *   `removeTail()`:
        *   Remove the tail node from the list.
        *   Return the removed node (or its key for removal from the cache).

### Approach 2: Using Ordered Dictionary (Python Specific)

This approach uses Python's `OrderedDict` from the `collections` module, which combines a dictionary with a doubly linked list to maintain insertion order.

### Procedure

1. **Import `OrderedDict`:**
    ```python
    from collections import OrderedDict
    ```

2. **Define an LRUCache class:**
    *   `capacity`: The maximum number of items the cache can hold.
    *   `cache`: An `OrderedDict` to store key-value pairs.

3. **Implement the `get(key)` method:**
    *   If the `key` exists in the `cache`:
        *   Move the key-value pair to the end of the `OrderedDict` using `cache.move_to_end(key)`.
        *   Return the `value` associated with the `key`.
    *   If the `key` does not exist, return -1.

4. **Implement the `put(key, value)` method:**
    *   If the `key` already exists in the `cache`:
        *   Update the `value` associated with the `key`.
        *   Move the key-value pair to the end of the `OrderedDict` using `cache.move_to_end(key)`.
    *   If the `key` does not exist:
        *   If the cache is full (`len(cache)` equals `capacity`):
            *   Remove the first item (least recently used) from the `OrderedDict` using `cache.popitem(last=False)`.
        *   Add the new `key-value` pair to the end of the `OrderedDict`: `cache[key] = value`.

### Approach 3: Using a List and a Dictionary (Less Efficient)

This approach uses a list to maintain the order of recently used items and a dictionary for fast key lookups. This is less efficient than using a doubly linked list because removing an item from the middle of a list takes O(n) time.

### Procedure

1. **Define an LRUCache class:**
    *   `capacity`: The maximum number of items the cache can hold.
    *   `cache`: A dictionary that maps keys to values.
    *   `order`: A list that stores the keys in order of most recently used to least recently used.

2. **Implement the `get(key)` method:**
    *   If the `key` exists in the `cache`:
        *   Remove the `key` from its current position in the `order` list.
        *   Append the `key` to the end of the `order` list (mark it as most recently used).
        *   Return the `value` associated with the `key` in the `cache`.
    *   If the `key` does not exist, return -1.

3. **Implement the `put(key, value)` method:**
    *   If the `key` already exists in the `cache`:
        *   Update the `value` associated with the `key` in the `cache`.
        *   Remove the `key` from its current position in the `order` list.
        *   Append the `key` to the end of the `order` list.
    *   If the `key` does not exist:
        *   If the cache is full (`len(cache)` equals `capacity`):
            *   Remove the first element (least recently used) from the `order` list.
            *   Remove the corresponding key-value pair from the `cache`.
        *   Add the new `key-value` pair to the `cache`.
        *   Append the `key` to the end of the `order` list.

### Approach 4: Using a Sorted Dictionary (if available)

Some languages or libraries provide sorted dictionary data structures that maintain keys in a sorted order based on a comparison function. You could potentially adapt such a structure to implement an LRU cache by using the access time or a counter as the sorting key. However, this approach might not be as efficient as using a doubly linked list and a hash map.

### Approach 5: Using a Circular Buffer and a Hash Map (less common)

This approach uses a circular buffer (an array used in a circular fashion) to store the items and a hash map to store the positions of the keys in the buffer. This is less common for LRU caches but can be used in specific scenarios.

### Procedure

1. **Define an LRUCache class:**
    *   `capacity`: The maximum number of items the cache can hold.
    *   `buffer`: A circular buffer (array) to store the key-value pairs.
    *   `cache`: A hash map that maps keys to their positions in the `buffer`.
    *   `head`: An index pointing to the start of the buffer (least recently used).
    *   `tail`: An index pointing to the end of the buffer (most recently used).
    *   `size`: The current number of items in the cache.

2. **Implement the `get(key)` method:**
    *   If the `key` exists in the `cache`:
        *   Get the position of the key-value pair from the `cache`.
        *   Move the key-value pair to the tail of the buffer (mark it as most recently used). You might need to shift elements in the buffer.
        *   Return the `value`.
    *   If the `key` does not exist, return -1.

3. **Implement the `put(key, value)` method:**
    *   If the `key` already exists in the `cache`:
        *   Get the position of the key-value pair from the `cache`.
        *   Update the `value` at that position.
        *   Move the key-value pair to the tail of the buffer.
    *   If the `key` does not exist:
        *   If the cache is full:
            *   Remove the key-value pair at the `head` of the buffer from the `cache`.
            *   Increment `head` (modulo `capacity`).
        *   Add the new key-value pair to the `tail` of the buffer.
        *   Add the key and its position to the `cache`.
        *   Increment `tail` (modulo `capacity`).
        *   Increment `size`.
