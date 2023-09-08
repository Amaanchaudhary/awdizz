// Reverse Array:
// Implement a function that reverses the order of elements in an array without using 
// the reverse method.

var arr = [1 ,2 ,4 ,6 , 3,4,6,7,10]

function rev(arr){
    var reverse = [];
    for(var i = (arr.length - 1) ; i >= 0 ; i--){
        reverse.push(arr[i]);
    }
    return reverse;
}
console.log(rev(arr));