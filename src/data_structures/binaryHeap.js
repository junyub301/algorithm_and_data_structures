/* 

    이진힙 vs 이진탐색트리
    -  이진힙 :  형제간은 관계가 없고, 왼쪽부터 채워나간다.
        - 최대 이진 힙 : 부모가 자식 보다 항상 값이 크다.
        - 최소 이진 힙 : 부모가 자식 보다 항상 값이 작다. 
    - 이진탐색트리 : 항상 왼쪽은 부모보다 작은 값 오른쪽은 부모보다 큰 값으로 지정한다.

    Big O 
    insertion -> O(logN)
    removal -> O(logN)
    search -> O(N)

*/

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            [this.values[parentIdx], this.values[index]] = [element, parent];
            index = parentIdx;
        }
    }

    extractMax() {
        let max = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.trickleDown();
        }
        return max;
    }

    trickleDown() {
        let idx = 0;
        const element = this.values[idx];
        // const length = this.values.length;
        while (true) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let left = this.values[leftIdx];
            let right = this.values[rightIdx];
            let biggerIdx = left > right ? leftIdx : rightIdx;
            let biggerValue = this.values[biggerIdx];
            if (!biggerValue) break;
            if (element < biggerValue) {
                [this.values[biggerIdx], this.values[idx]] = [
                    element,
                    biggerValue,
                ];
                idx = biggerIdx;
            }

            /*  let left, right;
            let swap = null;

            if (leftIdx < length) {
                left = this.values[leftIdx];
                if (left > element) {
                    swap = leftIdx;
                }
            }
            if (rightIdx < length) {
                right = this.values[rightIdx];
                if (
                    (swap === null && right > element) ||
                    (swap !== null && right > left)
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
            */
        }
    }
}
