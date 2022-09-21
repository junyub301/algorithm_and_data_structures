/* 
    Big O
    bets => O(1)
    average => O(n)
    worst => O(n)
*/

function linearSearch(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100);
