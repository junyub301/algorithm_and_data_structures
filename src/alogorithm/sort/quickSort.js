/* 

Big O

best = O(nlogn)
worst = O(n^2) => 시작 비교피벗을 처음으로 잡고 정렬되어있을 경우 -> 그래서 시작 pivot을 무작위 또는 중간점부터 잡는다 

*/

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
        }
    }

    [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];
    return swapIdx;
}

export function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);

        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
