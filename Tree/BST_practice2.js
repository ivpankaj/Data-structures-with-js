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
}

const bst  =  new BinarySTree();
bst.insert(7);
bst.insert(5);
bst.insert(9);
console.log(bst)

//this is best code for binary search treee // done by me