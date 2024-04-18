class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
//add a node at the end of the linked list
  addend(data) {
    let newnode = new Node(data);

    if (!this.head) {
      this.head = newnode;
      return;
    }
    let cureent = this.head;
    while (cureent.next !== null) {
      
      cureent = cureent.next;
    }
    cureent.next = newnode;
  }

  deletenode(data){
    if(!this.head){
        return;
    }

    //main logic for deleting head node
    if(this.head.data==data){
        this.head = this.head.next;
        return;
    }
// for deleting other nodes
    let current = this.head;

    let prev = null;

    while(current!==null){
        if(current.data==data){
            prev.next = current.next;
            return;
        }

        prev = current;
        current = current.next;
    }
  }

  printlist() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.addend(50);
list.addend(600);
list.printlist();
list.deletenode(50);
console.log("after deleting node")
list.printlist()

//done