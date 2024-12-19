# 17 Implement a basic todo list with add-remove functionality Tutorial

## Prerequisites

*   Understanding of data structures like arrays or lists.
*   Basic knowledge of adding and removing elements from a data structure.
*   Familiarity with user input and output (optional, depending on the implementation).

## Approach

### Approach 1: Using an array and functions

This approach uses an array to store the todo items and defines functions to add and remove items.

### Procedure

1. Define a data structure (e.g., an array) to hold the todo items.
2. Implement a function `addTodo(item)` that:
    *   Takes a todo item as input.
    *   Adds the item to the end of the array.
3. Implement a function `removeTodo(index)` that:
    *   Takes the index of the item to remove as input.
    *   Removes the item at the specified index from the array.
4. (Optional) Implement a function `displayTodos()` that:
    *   Prints all todo items in the array.
5. (Optional) Create a user interface (e.g., a command-line interface or a graphical user interface) that allows users to interact with the todo list by calling the `addTodo`, `removeTodo`, and `displayTodos` functions.

### Approach 2: Using a linked list

This approach uses a linked list to store the todo items, which can be more efficient for insertions and deletions in the middle of the list.

### Procedure

1. Define a node structure for the linked list, with each node containing a todo item and a pointer to the next node.
2. Implement a function `addTodo(item)` that:
    *   Creates a new node with the given item.
    *   Inserts the new node at the end (or beginning) of the linked list.
3. Implement a function `removeTodo(item)` that:
    *   Takes the todo item to remove as input.
    *   Traverses the linked list to find the node containing the item.
    *   Removes the node from the linked list by updating the pointers of the previous and next nodes.
4. (Optional) Implement a function `displayTodos()` that:
    *   Traverses the linked list and prints each todo item.
5. (Optional) Create a user interface as in Approach 1.

### Approach 3: Using a class and methods

This approach encapsulates the todo list data and functionality within a class.

### Procedure

1. Define a class `TodoList`.
2. Inside the class, define a data structure (e.g., an array) to store the todo items.
3. Implement a method `addTodo(item)` that adds an item to the todo list.
4. Implement a method `removeTodo(index)` that removes an item at a specific index.
5. (Optional) Implement a method `displayTodos()` that displays all todo items.
6. (Optional) Create a user interface that interacts with an instance of the `TodoList` class.

### Approach 4: Using a database (for persistence)

This approach uses a database to store the todo items, allowing them to persist across sessions.

### Procedure

1. Choose a database system (e.g., SQLite, a file-based database, or a more complex database like MySQL or PostgreSQL).
2. Define a table schema for storing todo items (e.g., with columns for ID, task description, and completion status).
3. Implement functions or methods to:
    *   Connect to the database.
    *   Insert a new todo item into the table.
    *   Delete a todo item from the table (based on ID or description).
    *   Retrieve all todo items from the table.
4. (Optional) Create a user interface that interacts with the database through these functions/methods.

### Approach 5: Using a file for storage (simple persistence)

This approach uses a file to store the todo items, providing a simple way to persist data between sessions.

### Procedure

1. Implement a function `loadTodos()` that:
    *   Reads todo items from a file (e.g., one item per line).
    *   Returns an array or list of todo items.
2. Implement a function `saveTodos(todos)` that:
    *   Takes an array or list of todo items as input.
    *   Writes the items to a file, overwriting the previous content.
3. Use an array or list to store todo items in memory.
4. When the application starts, call `loadTodos()` to populate the in-memory list.
5. Implement `addTodo` and `removeTodo` functions as in Approach 1.
6. After each modification (add or remove), call `saveTodos` to update the file.
7. (Optional) Create a user interface that interacts with the in-memory todo list.
