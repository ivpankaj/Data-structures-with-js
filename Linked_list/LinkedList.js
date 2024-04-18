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

  //add a new node to the end of the linked list
  addend(data) {
    const newnode = new Node(data); //create a new node

    //if list is empty make the new node as head
    if (!this.head) {
      this.head = newnode;
      return;
    }
    

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newnode;
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
console.log("list");
list.addend(1);
list.addend(5);
list.addend(50);

list.printlist();

//done
