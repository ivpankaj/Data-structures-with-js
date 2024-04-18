class Graph {
    constructor() {
        this.vertices = {};
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
            throw new Error("Vertex not found");
        }

        this.vertices[vertex1].push(vertex2);
        this.vertices[vertex2].push(vertex1);
    }

    // Get neighbors of a vertex
    getNeighbors(vertex) {
        if (!this.vertices[vertex]) {
            console.log("Vertex not found");
            return [];
        }

        return this.vertices[vertex];
    }

    // Print the graph
    printGraph() {
        for (let vertex in this.vertices) {
            console.log(`${vertex} -> ${this.vertices[vertex].join(', ')}`);
        }
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D'); // Added vertex D
graph.addVertex('E'); // Added vertex E
graph.addVertex('F'); // Added vertex F
graph.addVertex('G'); // Added vertex G
graph.addVertex('H'); // Added vertex H
graph.addVertex('I'); // Added vertex I
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('F', 'G');
graph.addEdge('H', 'I');
graph.printGraph();