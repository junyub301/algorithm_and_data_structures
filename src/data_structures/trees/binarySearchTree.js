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

    delete(value) {
        if (this.root === null) return undefined;
        let current = this.root;
        let parent = current;
        while (current) {
            if (current.value < value) {
                // 삭제할 노드가 현재 노드보다 큰 값일때 탐색
                parent = current;
                current = current.right;
            } else if (current.value > value) {
                // 삭제할 노드가 현재 노드보다 작은 값일때 탐색
                parent = current;
                current = current.left;
            } else {
                if (current.right !== null) {
                    // 삭제할 노드를 찾고 오른쪽/왼쪽 자식 노드가 동시에 있을 경우
                    if (current.left) {
                        current.right.left = current.left;
                    }

                    // 삭제할 노드를 찾고 오른쪽 자식 노드가 있을 경우
                    if (parent.value < current.right.value) {
                        parent.right = current.right;
                    } else {
                        parent.left = current.right;
                    }
                } else if (current.left !== null) {
                    // 삭제할 노드를 찾고 왼쪽 자식 노드만 있을 경우
                    if (parent.value < current.left.value) {
                        parent.right = current.left;
                    } else {
                        parent.left = current.left;
                    }
                } else {
                    //삭제할 노드를 찾고 자식 노드가 없을 경우
                    if (parent.value > current.value) {
                        parent.left = null;
                    } else if (parent.value < current.value) {
                        parent.right = null;
                    }
                }
                return true;
            }
        }
        return false;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(6);
tree.insert(12);
tree.insert(11);
tree.insert(7);
tree.insert(3);
