function createTreeNode(value) {
    return { value: value, left: null, right: null };
}
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
export { createTreeNode, isBalanced1, isBalanced2, isBalanced3, isBalanced4, isBalanced5, checkBalance };
