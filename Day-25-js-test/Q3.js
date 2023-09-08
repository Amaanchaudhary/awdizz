// Calculate Average:
// Write a function to calculate the average of numbers in an array.

var arr = [20,20,20,20,20,20];

function avg(arr){
    var average = 0;
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
        // console.log(sum);
    }
    return average = (sum / (arr.length))
}

console.log(avg(arr))