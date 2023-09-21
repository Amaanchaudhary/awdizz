/*
Q6.Write a JS function called findMissingNumber that takes an array of consecutive numbers
(starting from 1) with one number missing and returns the missing number.The array is 
guaranteed to be shuffled and may contain duplicates.
From Example: Given an array [2,4,1,3,6,7,8] the missing number is 5, so the function 
should return 5
*/

var array = [2,1,4,3,6,7,8]

function findMissingNumber(array){
    array.sort();
    var arr2 = [] 
    // console.log(array)
    for(var i = 0 ; i < array.length - 1 ; i++){
        if((array[i] + 1) != array[i+1]){
            arr2.push(array[i] + 1)
        } 
    }
    return arr2 
}
console.log(findMissingNumber(array));