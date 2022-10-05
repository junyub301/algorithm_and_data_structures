class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

export default class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            [this.values[parentIdx], this.values[index]] = [element, parent];
            index = parentIdx;
        }
    }

    dequeue() {
        let min = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.trickleDown();
        }
        return min;
    }

    trickleDown() {
        let idx = 0;
        let length = this.values.length;
        const element = this.values[idx];
        while (true) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let left, right;
            let swap = null;

            if (leftIdx < length) {
                left = this.values[leftIdx];
                if (left.priority < element.priority) {
                    swap = leftIdx;
                }
            }
            if (rightIdx < length) {
                right = this.values[rightIdx];
                if (
                    (swap === null && right.priority < element.priority) ||
                    (swap !== null && right.priority < left.priority)
                ) {
                    swap = rightIdx;
                }
            }

            if (swap === null) break;
            [this.values[idx], this.values[swap]] = [
                this.values[swap],
                element,
            ];
            idx = swap;
        }
    }
}
