class Queue{
    constructor(){
        this.item = [];
        this.front = 0;
        this.rear = 0;

    }
// to add item at the end of the queue
    enqueue(item){
        this.item[this.rear]= item;
        this.rear++;
        return item;
    } 
// to remove item from the front of the queue
       dequeue(){

       }

}
 
let list = new Queue();
list.enqueue(5);
list.enqueue(7)
console.log(list)

//not completed

