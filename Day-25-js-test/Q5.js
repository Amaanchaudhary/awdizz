// Even Number Count:
// Write a function that counts the number of even numbers in an array.

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function evenCount(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            count++
        }
    }
    return count
}
console.log(evenCount(arr))