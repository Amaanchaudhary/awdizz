//from an array find the addition of every 3 possible number which match the target
/*
var arr = [12, 3, 5, 7, 2 , 4 , 7 , 8 , 4 , 10, 1]
var target = 20;
for(var i = 0 ; i < arr.length - 2 ; i++){
    for(var j = i + 1; j < arr.length - 1 ; j++){
        for(var k = j + 1 ; k < arr.length ; k++){
            if(arr[i] + arr[j] + arr[k] == target){
                console.log(`${arr[i]} + ${arr[j]} + ${arr[k]} = ${arr[i] + arr[j] + arr[k]}`)
            }
        }
    }
}
*/

/*
function print(){
    console.log("hello Amaan");
}
print();
*/

/*
function addition(){
    var a = 10;
    var b = 20;
    return a + b;
}
var result = addition();
console.log(result)
*/

/*
const arr2 = [1, 3, 5, 1, 6,4];

function AddAllNum(array){
    var result = 0;
    for(var i = 0; i < array.length; i++){
        result = result + arr2[i];
    }
    return result;
}   

console.log(AddAllNum(arr2));
*/


var arr = [12, 3, 5, 7, 2 , 4 , 7 , 8 , 4, 20 , 10, 1]
var target = 21;

function find(array, target){
    for(var i = 0; i < array.length; i++){
        if(array[i] == target){
            return `yes ${target} found`;
        }
        else{
            continue;
        }
    }
    return `${target} - not found`
}
console.log(find(arr,target));


