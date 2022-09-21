/* 
    Big O
    시간 복잡도
    best => O(n)
    aberage => O(n^2)
    worst => O(n^2)

    공간복잡도
    O(1)

*/

function bubbleSort(arr) {
    let noSwaps = false;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

bubbleSort([7, 1, 2, 3, 4, 5, 6]);
