// Sum of Array Elements:
// Write a JavaScript function to calculate the sum of all elements in an array.

var arr = [20,4,6]

function SumAll(arr){
    var result = 0;
    for(var i = 0 ; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}

console.log(SumAll(arr));