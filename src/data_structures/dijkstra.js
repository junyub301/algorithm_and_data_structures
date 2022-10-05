import PriorityQueue from "./priorityQueue.js";

/* 
    다익스트라 알고리즘
    - 두정점 사이의 최단거리를 알아낼때 사용

*/

class WeightedGraph {
    constructor() {
        this.adjacecyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacecyList[vertex]) this.adjacecyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacecyList[vertex1].push({ node: vertex2, weight });
        this.adjacecyList[vertex2].push({ node: vertex1, weight });
    }

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;
        // 초기 설정
        for (let vertex in this.adjacecyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while (nodes.values.length) {
            smallest = nodes.dequeue().value;
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacecyList[smallest]) {
                    // 인접점을 찾는다
                    let nextNode = this.adjacecyList[smallest][neighbor];
                    // 새로운 거리를 계산한다.
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        // 다음 노드로 가는 새로운 최단거리를 바꿔주는 작업
                        distances[nextNeighbor] = candidate;
                        // 어떻게 neighbor로 가는지 바꿔주는 작업
                        previous[nextNeighbor] = smallest;

                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");
