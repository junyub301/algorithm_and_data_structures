/* 
    그래프 
    - 노드나 노들의 연결을 모은것
    구성
        - Vertex - 노드를 이르는 다른말
        - Edge - 노드 사이의 연결 
        - Weighted / Unweighted - 가중 / 비가중
        - Directed / Underected - 방향 / 무방향

    - 활용
        - sns
        - 지도 / 길찾기
        - 라우팅
        .....
    정렬
        - 인접 행렬
            - 인접 리스트보다 공간을 더 많이 차지한다.
            - 퍼져있는 데이터를 다룰 때는 별로 좋지 않다.
            - 특정 간선을 확인할 때는 인접 리스트 보다 더 빠르다.
        - 인접 리스트
            - 인접 행렬보다 공간을 덜 차지 한다.
            - 모든 간선을 순환할 때는 인접 행렬 보다 빠르다.
            - 특정 간선을 확인 할 때는 인접 행렬보다 느리다.

*/

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
            return undefined;
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
            return undefined;
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (val) => val !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            (val) => val !== vertex1
        );
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return undefined;
        for (let key of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, key);
        }
        delete this.adjacencyList[vertex];
    }
}
