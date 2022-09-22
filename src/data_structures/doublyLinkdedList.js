/* 
    Big O
     - insertion -> O(1);
     - removal -> O(1)
     - searching -> O(N)
     - access -> O(N)

    doubly linkded list  vs singly linked list
    - 이중 연결 리스트는 그전 노드를 가리키는 포인터가 하나 더 있다는 점만 빼면
      단일 연결 리스트랑 같다. 
    - 이중 연결 리스트는 무언갈 찾는데 더 나은 성능을 보인다.
      - 하지만 추가로 만든 포인터는 메모리를 더 소모 한다.

*/
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

export default class DoublyLinkdedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newTail = new Node(val);
        if (this.length === 0) {
            this.head = newTail;
            this.tail = newTail;
        } else {
            this.tail.next = newTail;
            newTail.prev = this.tail;
            this.tail = newTail;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        const poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (this.length === 0) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;
        return oldHead;
    }

    unshift(val) {
        const newHead = new Node(val);
        if (this.length === 0) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let current;
        if (index <= this.length / 2) {
            let count = 0;
            current = this.head;
            while (index !== count) {
                current = current.next;
                count++;
            }
        } else {
            let count = this.length - 1;
            current = this.tail;
            while (index !== count) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        const newNode = new Node(val);
        const beforeNode = this.get(index - 1);
        const afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const removeNode = this.get(index);
        const prevNode = removeNode.prev;
        const nextNode = removeNode.next;

        prevNode.next = nextNode;
        prevNode.prve = prevNode;
        removeNode.next = null;
        removeNode.prev = null;
        this.length--;

        return removeNode;
    }
}
