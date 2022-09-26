/* 
    stack
    - LIFO (Last In First Out) 

    stack 작성은 여러가지 방법이 있다.
    - 배열을 이용 -> push/pop , unshift/shift
    - class를 이용해 직접 구현
    .....

    Big O
    - insertion -> O(1)
    - Removal -> O(1)
    - Searching -> O(N)
    - Access -> O(N)
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (this.size === 0) return null;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;

        return temp.val;
    }
}
