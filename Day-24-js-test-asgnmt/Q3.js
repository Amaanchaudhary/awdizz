//Q3.Write a JS function that takes an array of numbers as input and returns the
// smallest number from the array.


var arr = [11, 21, 43, 5, 5, 66, 7, 8, 22, 91, 92,]

function smallestNum(arr) {
    for (var i = 0; i < arr.length; i++) {
        var smallest = arr[0]
        for (var i = 1; i < arr.length; i++) {
            if (smallest > arr[i]) {
                smallest = arr[i]
            }
        }
        return smallest
    }
}
console.log(smallestNum(arr));


/*
var arr = [2,11, 21, 43, 5, 5, 66, 7, 8, 22, 91, 92,3]

function smallest(arr){
    var small = arr[0];
    for(var i in arr){  //for in loop ek ek karke i me index ayega
        if(small > arr[i]){
            small = arr[i] 
        }
    }
    return small
}
console.log(smallest(arr));
*/

/*
var arr = [2,11, 21, 43, 5, 5, 66, 7, 8, 22, 91, 92,3]

function smallest(arr){
    var small = arr[0];
    for(var i in arr){  //for in loop ek ek karke i me index ayega
        if(small > arr[i]){
            small = arr[i] 
        }
    }
    return small
}
console.log(smallest(arr));
*/

/*
var arr = [2,11, 21, 43, 5, 5, 66, 7, 8, 22, 91, 92,3]

function smallest(arr){
    var small = arr[0];
    for(var i in arr){  //for in loop ek ek karke i me index ayega
        if(small > arr[i]){
            small = arr[i] 
        }
    }
    return small
}
console.log(smallest(arr));
*/