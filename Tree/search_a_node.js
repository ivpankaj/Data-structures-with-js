class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        this.root = this.addnode(this.root,value);
    }

    addnode(node,value){
        if(!node){
            return new Node(value);
        }

        if(value>node.value){
         node.right= this.addnode(node.right,value)
        }
        else{
            node.left = this.addnode(node.left,value)
        }

    return node;

    }
    // search 
    search(value){
        return this.searchnode(this.root,value)
    }

    searchnode(node,value){
        if(!node || node.value===value){
            return node;
        }
        if(value<node.value){
            return this.searchnode(node.left,value)
        }
        else{
            return this.searchnode(node.right,value)
        }
    }

}

const bstt = new BinarySearchTree();
bstt.insert(2);
bstt.insert(1);
bstt.insert(3);
bstt.insert(8);
bstt.insert(9)
console.log(bstt)

// console.log(bstt.search(3))