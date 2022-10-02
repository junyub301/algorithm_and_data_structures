/*  
    해시테이블
    - 키-값의 쌍으로 구성되어 있다. 
    - 키는 순서를 가지지 않는다.
    - 값을 추가/제거 하는데 빠르다.

    해시함수
    - 스트링으로된 키를 배열에서 사용되는 유효한 인덱스, 즉 작은 숫자로 바꿔주는데 사용한다.
    - 정해진 크기를 가진다.
    - 대부분의 해시 함수에서는 반대로 작업을 할 수 없다.
    - 좋은 해시함수를 결정하는 기준?
        1. 빨라야 한다.
        2. 기본적으로 일관된 방식으로 분배를 해서 다른 것들과 겹치지 않게 해야한다.
        3. 특정 입력값을 입력할 때 마다 같은 출력값이 나와야 한다.


    Bio O
    - insert -> O(1)
    - deletion -> O(1)
    - Access -> O(1)
*/

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }

        return valuesArr;
    }
}
