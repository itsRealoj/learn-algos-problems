class Graph {
    constructor() {
        this.vertex = {}
    }
    addVertex(name){
        return this.vertex[name] = []
    }
    addVal(vert, val){
        this.vertex[vert].push(val)
    }
}

const g = new Graph()
g.addVertex('Min')
g.addVertex('TES')
g.addVertex('CAL')
g.addVal('Min', 10)
console.log(g)