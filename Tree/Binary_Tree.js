class Node {
    constructor(data) {
        this.value = data;
        this.left = null;
        this.right = null;
    }
}
class binarysearchtree {
    constructor() {
        this.root = null;
    }

    //add node at root 
    insertatroot(data) {
        let newnode = new Node(data);
        if (this.root == null) {
            this.root = newnode;
        }

    }
    // Method to insert a node in a tree
    // it moves over the tree to find the location
    // to insert a node with a given data 
    insertnode(){

    }

    removenode(){

    }



}
let tree = new binarysearchtree();
tree.insertatroot(5);
console.log(tree)

//not done completely