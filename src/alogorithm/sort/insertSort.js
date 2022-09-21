/* 
    Big O
    시간 복잡도
    best => O(n)
    aberage => O(n^2)
    worst => O(n^2)

    공간복잡도
    O(1)

*/
export function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            if (arr[j] > currentVal) {
                arr[j + 1] = arr[j];
            }
        }
        arr[j + 1] = currentVal;
    }

    return arr;
}

insertionSort([2, 1, 5, 78, 4]);
