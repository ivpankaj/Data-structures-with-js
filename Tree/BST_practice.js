class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addnode(node, value) {
    if (!node) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.addnode(node.left, value);
    } else {
      node.right = this.addnode(node.right, value);
    }

    return node;
  }

  insert(value) {
    this.root = this.addnode(this.root, value);
  }
}

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(6);
bst.insert(4)
console.log(bst);
