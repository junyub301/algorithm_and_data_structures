/* 
    Big O
    best => O(1)
    average => O(logN)
    worst => O(logN)
*/

function binarySearch(arr, value) {
    // add whatever parameters you deem necessary - good luck!
    let start = 0;
    let end = arr.length - 1;

    while (start < end - 1) {
        let mid = parseInt((end - start) / 2);

        if (arr[mid] < value) {
            end = mid - 1;
        } else if (arr[mid] > value) {
            start = mid + 1;
        }
        if (arr[mid] === value) return mid;
    }

    return -1;
}

const result = binarySearch(
    [
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
        98, 99,
    ],
    10
);
console.log(result);
