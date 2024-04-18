class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

}
class BinarySTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        this.root = this.addnode(this.root,value);
    }

    addnode(node, value){
        if(!node){
          return new Node(value);
        }
        if(value>node.value){
            node.right = this.addnode(node.right,value)
        }
        else{
            node.left = this.addnode(node.left,value);
        }

        return node;
    }

    //inorder traversal
    //left -> root -> right 
    inOrderTraversal(node = this.root,result =[]){
        if(node){
            this.inOrderTraversal(node.left,result);
            result.push(node.value);
            this.inOrderTraversal(node.right,result)
        }

        return result;
    }

     // Pre-order traversal: Root -> Left -> Right
     preOrderTraversal(node = this.root, result = []) {
        if (node) {
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }
      // Post-order traversal: Left -> Right -> Root
      postOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.postOrderTraversal(node.left, result);
            this.postOrderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}
const bst = new BinarySTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(17);
console.log(bst)
console.log("In-order traversal:", bst.inOrderTraversal()); // Output: [2, 5, 7, 10, 12, 15, 17]
console.log("Pre-order traversal:", bst.preOrderTraversal()); // Output: [10, 5, 2, 7, 15, 12, 17]
console.log("Post-order traversal:", bst.postOrderTraversal()); // Output: [2, 7, 5, 12, 17, 15, 10]