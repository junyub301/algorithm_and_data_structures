/* 
    Big O
    시간 복잡도
    best => O(n^2)
    aberage => O(n^2)
    worst => O(n^2)

    공간복잡도
    O(1)

*/

export function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

selectSort([1, 32, 321, 12, 53, 11, 4]);
