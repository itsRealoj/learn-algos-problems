class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex){
        return this.adjacencyList[vertex] = []
    }
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }
    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(edge => {
            this.removeEdge(edge, vertex)
        })
        delete this.adjacencyList[vertex]
        
    }
}

const g = new Graph()
g.addVertex('MIN')
g.addVertex('TES')
g.addVertex('TOK')
g.addVertex('CAL')
g.addEdge('TES', 'MIN')
g.addEdge('TES', 'TOK')
g.addEdge('MIN', 'TOK')
g.addEdge('MIN', 'CAL')
console.log(g)
g.removeVertex('TES')
// g.removeEdge('MIN', 'CAL')
console.log(g)