/* 
 linked list 
 - array와 비슷하지만 array처럼 데이터에 순서(index)를 정해두지 않는다. 
 - 그렇기 때문에 위치를 찾아가려면 순차적으로 확인해야 한다. 
 - 새로운 항목을 추가하거나 제거할 때는 linked list를 사용하면 편리하다.
 - 임의 접근을 하지 않고 "삽입"/"제거"만 하는 경우에는 array보다 linked list를 사용하는게 좋다.
 
 singly linkedlist
 - 각 노드가 다음 노드로 오직 단반향으로만 연결되있는 linked list 
 - Big O
    - insertion -> O(1);
    - removal -> it depends...  O(1) or O(N)
    - searching -> O(N)
    - access -> O(N)
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

export default class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    unshift(val) {
        const newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
        if (this.length === 0) {
            this.tail = newHead;
        }
        this.length++;

        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        let count = 0;
        while (count != index) {
            current = current.next;
            count++;
        }
        return current;
    }

    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prev = this.get(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let prevNode = this.get(index - 1);
        let removeNode = prevNode.next;
        prevNode.next = removeNode.next;
        removeNode.next = null;
        this.length--;
        return removeNode;
    }

    reverse() {
        let node = this.head;
        this.heade = this.tail;
        this.head = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
