/* 
Queue
- FIFO(First In First Out)

사용처
- 컴퓨터 백그라운드 작업
- 인쇄 작업
 
 Queue 작성은 여러가지 방법이 있다.
    - 배열을 이용 -> push/shift , unshift/pop
    - class를 이용해 직접 구현
    .....

Big O
- insertion -> O(1)
- Removal -> O(1)
- Searching -> O(N)
- Access -> O(N)

*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if (!this.first) return null;
        if (this.first === this.last) {
            this.last = null;
        }
        let temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
