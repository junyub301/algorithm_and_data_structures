/* 
 Tree
 - 연결 리스트 처럼 노드로 이루어지지만 노드 사이에 부모-자식 관계가 있는 데이터 구조
 - 노드는 자신보다 더 낮은 곳에 있지 않은 다른 노드를 가리킬수 없다.
 - 루트가 하나여야 한다. 
 - 구조
    - root
    - child
    - parent 
    - siblings : 자신이랑 같은 레벨의 노드
    - leaf : 자식이 노드가 없는 최하위 노드
    - edge : 한 노드에서 다른 노드로 향하는 화살표

 - list : 선형구조를 가진다
 - tree : 비선형구조를 가진다.

 활용
 - HTML DOM
 - 네트워크 라우팅
 - 인공지능
 - 운영체제 폴더 구조

 Bio O
 insertion - O(log N)
 searching - O(log N)

 트리순회
- 너비우선탐색(BFS) : 아래로 내려가기 전에 같은 레벨에 있는 모든 노드들을 겨쳐감
- 깊이우선탐색(DFS) : 형제노드로 넘어가기 전 수직으로 트리 끝까지 내려감
    - 전위탐색(DFS-PreOrder)
    - 후위탐색(DFS-PostOrder)
    - 정위탐색(DFS-InOrder)

 
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let currnetNode = this.root;
            while (true) {
                if (value === currnetNode.value) return undefined;
                if (currnetNode.value < value) {
                    if (currnetNode.right === null) {
                        currnetNode.right = newNode;
                        return this;
                    }
                    currnetNode = currnetNode.right;
                } else {
                    if (currnetNode.left === null) {
                        currnetNode.left = newNode;
                        return this;
                    }
                    currnetNode = currnetNode.left;
                }
            }
        }
    }

    search(value) {
        if (this.root === null) return undefined;
        let current = this.root;
        while (current) {
            if (current.value < value) {
                current = current.right;
            } else if (current.value > value) {
                current = current.left;
            } else {
                return current;
            }
        }
        return undefined;
    }

    delete(value, node) {
        if (!node) {
            this.root = this.delete(value, this.root);
        } else {
            if (value < node.value) {
                node.left = this.delete(value, node.left);
            } else if (value > node.value) {
                node.right = this.delete(value, node.right);
            } else if (node.left && node.right) {
                node.value = this.findMinNode(node.right);
                node.right = this.delete(node.value, node.right);
            } else {
                node = node.left || node.right;
            }
        }
        return node;
    }

    findMinNode(root) {
        if (root === null) return null;
        let current = root;
        while (current.left) {
            current = current.left;
        }
        return current.value;
    }

    BFS() {
        let node = this.root;
        let data = [];
        let queue = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder() {
        let data = [];
        function travers(node) {
            data.push(node.value);
            if (node.left) travers(node.left);
            if (node.right) travers(node.right);
        }
        travers(this.root);
        return data;
    }

    DFSPostOrder() {
        let data = [];
        function travers(node) {
            if (node.left) travers(node.left);
            if (node.right) travers(node.right);
            data.push(node.value);
        }
        travers(this.root);
        return data;
    }
    DFSInOrder() {
        let data = [];
        function travers(node) {
            if (node.left) travers(node.left);
            data.push(node.value);
            if (node.right) travers(node.right);
        }
        travers(this.root);
        return data;
    }
}
