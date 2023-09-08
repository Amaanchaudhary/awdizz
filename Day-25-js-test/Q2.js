// Find Maximum Value:
// Create a function to find the maximum value in an array of numbers.

var arr = [2 , 34,56,3 ,334,55,7,0 ]

function maxNum(arr){
    var max = arr[0];
    for(var i = 1 ; i < arr.length; i++){
        max = max < arr[i] ? arr[i] : max
    }
    return max;
}
console.log(maxNum(arr));