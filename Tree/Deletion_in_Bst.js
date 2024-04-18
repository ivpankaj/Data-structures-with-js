class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this.addnode(this.root, value);
  }

  addnode(node, value) {
    if (!node) {
      return new Node(value);
    }

    if (value > node.value) {
      node.right = this.addnode(node.right, value);
    } else {
      node.left = this.addnode(node.left, value);
    }

    return node;
  }

  //deletion
  delete(value){
    this.root = this.deletenode(this.root,value)
  }
  deletenode(node,value){
    if(!node){
        return null;
    }
    if(value<node.value){
        node.left = this.deletenode(node.left,value)
    }
    else if(value>node.value){
        node.right = this.deletenode(node.right,value)
    }else{
        //case 1 : if node has one child or no child
        if(!node.left){
            return node.right;
        }
        else if(!node.right){
            return node.left
        }
        //case 2: node has two children
        let successor = this.findminnode(node.right)
        node.value = successor.value;
        node.right = this.deletenode(node.right,value)
    }

    return node;
  }
//to find minimum node in a subtree
findminnode(node){
    while(node.left){
        node = node.left
    }
    return node;
}
}

const p = new Tree();
p.insert(5);
p.insert(4);
p.insert(3);
console.log(p)
p.delete(5);
console.log(p)
