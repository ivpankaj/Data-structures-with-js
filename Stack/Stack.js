class Stack {
    array = [];
    currentsize;
    maxsize;



    constructor(size) {
        this.currentsize = this.array.length;
        this.maxsize = size;
    }

    push(newvalue) {
        if (this.currentsize >= this.maxsize) {
            console.log("stack is full");
        }
        this.array[this.currentsize] = newvalue;
        this.currentsize++;
    }
    pop() {
        this.currentsize--;
        this.array.length=this.currentsize;
    }
    display() {
        console.log(this.array)
    }
}

let st = new Stack(5);
st.push(20)
st.push(40)
st.push(80)
st.pop()
st.display();

//completed