class Graph{
    constructor(){
        this.adjacencylist ={};

    }

    addvertex(vertex){
        if(!this.adjacencylist[vertex]){
               this.adjacencylist[vertex]= [];
        }
    }
    addEdge(source, destination) {
        if (!this.adjacencylist[source]) {
          this.addvertex(source);
        }
        if (!this.adjacencylist[destination]) {
          this.addvertex(destination);
        }
        this.adjacencylist[source].push(destination);
        this.adjacencylist[destination].push(source);
      }
}

let graph = new Graph();
graph.addvertex(1);
graph.addEdge(2,3)
console.log(graph)

//not sure but running