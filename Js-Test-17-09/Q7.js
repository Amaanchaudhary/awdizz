/*
Q7.Write a function in JS called removeDuplicates that takes an array as an arguement 
and returns a new array with duplicate element removed
*/
var array = [ 0,0,1,1,1,2,2,3,3,4]

function removeDuplicate(array) {
    var NewArray = []
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length ; j++) {
                if(!NewArray.includes(array[i])){
                    NewArray.push(array[i])
                }
                else if(!NewArray.includes(array[j])){
                    NewArray.push(array[j])
                }
            }
        } return NewArray;
}

console.log(removeDuplicate(array))