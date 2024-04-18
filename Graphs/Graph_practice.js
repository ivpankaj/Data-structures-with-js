class Graph{
    constructor(){
        this.vertices={};
    }
//add function to add vertices and eddges 
addvertices(vertex){
    if(!this.vertices[vertex]){
        this.vertices[vertex]=[];
    }
}
    addedge(vertex1,vertex2){
        if(!this.vertices[vertex1] || !this.vertices[vertex2] ){
          console.log('not')
        }

        this.vertices[vertex1].push(vertex2);
        this.vertices[vertex2].push(vertex1);
    }
    // addedge(vertex1, vertex2) {
    //     if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
    //         console.log('One or both vertices not found');
    //         return;
    //     }

    //     this.vertices[vertex1].push(vertex2);
    //     this.vertices[vertex2].push(vertex1);
    // }

//get neighbour 
getneighbour(vertex){
    if(!this.vertices[vertex]){
        console.log("neighbour not found")
    }

    return this.vertices[vertex];
}

//print graph 
printgraph(){
    for(let vertex in this.vertices){
        console.log(`${vertex}->${this.vertices[vertex].join('')}`);
    }
}

}


const graph = new Graph();
graph.addvertices('A');
graph.addvertices('B');
graph.addvertices('C');
graph.addedge('D', 'E');
graph.addedge('F', 'G');
graph.addedge('H', 'I');
graph.printgraph();


