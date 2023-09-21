/*
Q1.Given an array of integers num and an integer target, return indices of the two numbers
such that they add up to target
you may assume that each input would have exactly one solution,and you may not use the same
element twice 
you can return the answer in any order
input  : nums = [2,7,11,15] target = 9;
Output : [0,1] Because num[0] + num[1] == target;
*/

// var arr = [2,7,11,15]
// var target = 9;

var arr = [3,2,4]
var target = 6;

function Sum(arr,target){
    var arr2 = []
    for(var i = 0; i < arr.length - 1 ; i++){
        if(arr[i] + arr[i+1]  == target){
            arr2.push(i,i+1);
        }
    }
    return arr2
}
console.log(Sum(arr,target))

