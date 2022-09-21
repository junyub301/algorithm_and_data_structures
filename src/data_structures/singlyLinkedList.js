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

class SinglyLinkedList {
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
        return current.val;
    }

    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current.val;
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
        } else return false;
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
        this.length--;
        return removeNode.val;
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

const list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");
list.push("6");
/* 
list.pop();
list.pop();
list.pop();
console.log("pop ===== >", list);

list.unshift("new");
list.unshift("new2");
list.unshift("new3");
list.unshift("new4");

console.log("unshift ===== >", list);

console.log("get 1:", list.get(1));

list.insert(1, "insert");
console.log("get 1:", list.get(1));
 */
// list.remove(1);
list.reverse();
console.log("list ===== >", list);
